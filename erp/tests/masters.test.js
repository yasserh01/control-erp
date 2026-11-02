'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('../server/app');

async function boot() {
  const app = createApp({ dbFile: ':memory:' });
  const port = await app.listen(0);
  let cookie = '', company = null;
  const api = async (method, url, body) => {
    const r = await fetch(`http://127.0.0.1:${port}${url}`, {
      method, headers: { 'Content-Type': 'application/json', Cookie: cookie, ...(company ? { 'X-Company': String(company) } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    const sc = r.headers.get('set-cookie'); if (sc) cookie = sc.split(';')[0];
    return { status: r.status, data: await r.json().catch(() => null) };
  };
  await api('POST', '/api/setup', { admin: { username: 'admin', password: 'secret1' }, company: { name: 'Control Contracting' } });
  await api('POST', '/api/login', { username: 'admin', password: 'secret1' });
  company = (await api('GET', '/api/me')).data.companies[0].id;
  return { app, api };
}

test('master data: create, link, validate, mask, protect in-use records', async () => {
  const { app, api } = await boot();
  try {
    const cat = (await api('GET', '/api/md')).data;
    assert.ok(cat.length >= 20);
    assert.ok(cat.some((c) => c.key === 'suppliers'));

    // Cost centre -> department (reference) -> designation
    const cc = await api('POST', '/api/md/costcenters', { Code: 'CC01', Name: 'Head Office', Status: 'Active' });
    assert.equal(cc.status, 200);
    const dep = await api('POST', '/api/md/departments', { Name: 'Engineering', 'Cost Centre': cc.data.id, Status: 'Active' });
    assert.equal(dep.data.code, 'DEP-0001'); // automatic code when left blank
    const des = await api('POST', '/api/md/designations', { Name: 'Site Engineer', Department: dep.data.id, 'OT Eligible': 'Yes' });
    assert.equal(des.status, 200);

    // Validation
    assert.equal((await api('POST', '/api/md/designations', { Name: 'X', Department: 99999 })).status, 400);
    assert.equal((await api('POST', '/api/md/designations', { Name: 'X', 'OT Eligible': 'Maybe' })).status, 400);
    assert.equal((await api('POST', '/api/md/payterms', { Name: 'Net 30', Days: 'thirty' })).status, 400);
    assert.equal((await api('POST', '/api/md/departments', { Code: 'DEP-0001', Name: 'Dup' })).status, 400);
    assert.equal((await api('POST', '/api/md/departments', { Code: 'D9' })).status, 400); // name required

    // List shows labels for references
    const list = (await api('GET', '/api/md/designations')).data;
    assert.equal(list.rows[0].labels.Department, 'DEP-0001 - Engineering');
    assert.ok(list.section.columns.includes('Name'));

    // Ledger reference (Cash box -> GL account)
    const ledgers = (await api('GET', '/api/options/coa')).data;
    const cash = ledgers.find((l) => l.label.includes('Cash in Hand'));
    const cb = await api('POST', '/api/md/cashboxes', { Name: 'Main cash', 'GL Account': cash.id });
    assert.equal(cb.status, 200);
    assert.match((await api('GET', `/api/md/cashboxes/${cb.data.id}`)).data.record.labels['GL Account'], /Cash in Hand/);

    // Employee: automatic EMP code, salary visible to admin
    const emp = await api('POST', '/api/md/employees', { Name: 'Ahmed Ali', Department: dep.data.id, Designation: des.data.id, Basic: '5000', 'Join Date': '2024-01-15', Status: 'Active' });
    assert.equal(emp.data.code, 'EMP-0001');
    assert.equal((await api('GET', `/api/md/employees/${emp.data.id}`)).data.record.data.Basic, 5000);

    // In-use record cannot be deleted
    assert.equal((await api('DELETE', `/api/md/departments/${dep.data.id}`)).status, 400);
    // Unused one can
    const tmp = await api('POST', '/api/md/units', { Code: 'TMP', Name: 'Temp' });
    assert.equal((await api('DELETE', `/api/md/units/${tmp.data.id}`)).status, 200);

    // Account mapping seeded from the starter chart
    const map = (await api('GET', '/api/mapping')).data;
    assert.equal(map.length, 25);
    assert.ok(map.every((m) => m.ledger_id), 'every key mapped: ' + map.filter((m) => !m.ledger_id).map((m) => m.key).join(','));
    const rev = ledgers.find((l) => l.label.includes('Contract Revenue'));
    assert.equal((await api('PUT', '/api/mapping', { Revenue: rev.id })).status, 200);
    assert.match((await api('GET', '/api/mapping')).data.find((m) => m.key === 'Revenue').ledger, /Contract Revenue/);
    assert.equal((await api('PUT', '/api/mapping', { Nonsense: rev.id })).status, 400);

    // Document numbering
    const nums = (await api('GET', '/api/numbering')).data;
    assert.ok(nums.find((n) => n.doc_type === 'LPO'));
    assert.equal((await api('PUT', '/api/numbering/lpo', { prefix: 'LPO', next_no: 500 })).status, 200);
    assert.equal((await api('GET', '/api/numbering')).data.find((n) => n.doc_type === 'LPO').next, 'LPO-000500');
    assert.equal((await api('PUT', '/api/numbering/lpo', { prefix: 'LPO', next_no: 10 })).status, 400); // cannot go back

    // Salary masked for a role without salary.view, and cannot be changed by it
    await api('POST', '/api/users', { username: 'acc', password: 'secret2', full_name: 'Accountant', role: 'accountant', companies: [1] });
    await api('POST', '/api/logout');
    await api('POST', '/api/login', { username: 'acc', password: 'secret2' });
    const e2 = (await api('GET', `/api/md/employees/${emp.data.id}`)).data.record;
    assert.equal(e2.data.Basic, '••••');
    await api('PUT', `/api/md/employees/${emp.data.id}`, { ...e2.data, Basic: '9999', Name: 'Ahmed Ali Hassan' });
    const db = app.db.get('SELECT data FROM records WHERE id=?', emp.data.id);
    assert.equal(JSON.parse(db.data).Basic, 5000);
    assert.equal(JSON.parse(db.data).Name, 'Ahmed Ali Hassan');
    assert.equal((await api('PUT', '/api/mapping', { Revenue: rev.id })).status, 403);
  } finally { app.close(); }
});
