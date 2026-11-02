'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('../server/app');

async function boot() {
  const app = createApp({ dbFile: ':memory:' });
  const port = await app.listen(0);
  let cookie = '';
  let company = null;
  const api = async (method, url, body) => {
    const r = await fetch(`http://127.0.0.1:${port}${url}`, {
      method, headers: { 'Content-Type': 'application/json', Cookie: cookie, ...(company ? { 'X-Company': String(company) } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    const sc = r.headers.get('set-cookie'); if (sc) cookie = sc.split(';')[0];
    const data = await r.json().catch(() => null);
    return { status: r.status, data };
  };
  return { app, api, setCompany: (c) => { company = c; } };
}

test('setup, login, chart of accounts, journal posting, reversal, trial balance', async () => {
  const { app, api, setCompany } = await boot();
  try {
    assert.equal((await api('GET', '/api/status')).data.setup, false);
    const s = await api('POST', '/api/setup', { admin: { username: 'admin', password: 'secret1', full_name: 'Admin' }, company: { name: 'Control Contracting & Trading Co.', name_ar: 'كنترول للمقاولات' } });
    assert.equal(s.status, 200);
    assert.equal((await api('POST', '/api/setup', { admin: { username: 'x', password: 'secret1' }, company: { name: 'X' } })).status, 409);

    assert.equal((await api('POST', '/api/login', { username: 'admin', password: 'wrong' })).status, 401);
    assert.equal((await api('POST', '/api/login', { username: 'admin', password: 'secret1' })).status, 200);
    const me = await api('GET', '/api/me');
    setCompany(me.data.companies[0].id);

    // Starter COA with automatic codes
    const tree = (await api('GET', '/api/coa')).data.elements;
    assert.equal(tree.length, 5);
    const all = tree.flatMap((e) => e.groups.flatMap((g) => g.ledgers));
    const bank = all.find((l) => l.name === 'Bank - Current Account');
    const cap = all.find((l) => l.name === 'Share Capital');
    const rent = all.find((l) => l.name === 'Rent');
    assert.match(bank.code, /^1\d{2}\d{3}$/);

    // New group + ledger get next codes automatically
    const g = await api('POST', '/api/coa/groups', { element: 1, name: 'Other Current Assets' });
    assert.equal(g.data.code, '103');
    const l = await api('POST', '/api/coa/ledgers', { group_id: g.data.id, name: 'Staff Loans' });
    assert.equal(l.data.code, '103001');

    // Unbalanced journal can be saved as draft but not posted
    const bad = await api('POST', '/api/journals', { date: '2026-01-01', lines: [{ ledger_id: bank.id, debit: '100' }, { ledger_id: cap.id, credit: '90' }] });
    assert.equal((await api('POST', `/api/journals/${bad.data.id}/post`)).status, 400);
    assert.equal((await api('DELETE', `/api/journals/${bad.data.id}`)).status, 200);

    // Balanced journal posts and gets a number
    const j1 = await api('POST', '/api/journals', { date: '2026-01-01', narration: 'Capital introduced', lines: [{ ledger_id: bank.id, debit: '100000.00' }, { ledger_id: cap.id, credit: '100000' }] });
    const p1 = await api('POST', `/api/journals/${j1.data.id}/post`);
    assert.equal(p1.data.number, 'JV-000001');
    // Posted cannot be edited
    assert.equal((await api('PUT', `/api/journals/${j1.data.id}`, { date: '2026-01-02', lines: [{ ledger_id: bank.id, debit: 1 }, { ledger_id: cap.id, credit: 1 }] })).status, 400);

    const j2 = await api('POST', '/api/journals', { date: '2026-01-15', narration: 'January rent', lines: [{ ledger_id: rent.id, debit: '0.10' }, { ledger_id: rent.id, debit: '0.20' }, { ledger_id: bank.id, credit: '0.30' }] });
    assert.equal((await api('POST', `/api/journals/${j2.data.id}/post`)).data.number, 'JV-000002'); // 0.1+0.2 = 0.3 exactly (fils)

    let tb = (await api('GET', '/api/reports/trial-balance')).data;
    assert.equal(tb.balanced, true);
    assert.equal(tb.total_dr, '100000.00');
    assert.equal(tb.lines.find((x) => x.name === 'Rent').closing_dr, '0.30');

    // Reversal
    const rv = await api('POST', `/api/journals/${j2.data.id}/reverse`, {});
    assert.equal(rv.data.number, 'JV-000003');
    assert.equal((await api('GET', `/api/journals/${j2.data.id}`)).data.status, 'Reversed');
    tb = (await api('GET', '/api/reports/trial-balance')).data;
    assert.equal(tb.balanced, true);
    assert.equal(tb.lines.find((x) => x.name === 'Rent').closing_dr, '0.00');

    const st = (await api('GET', `/api/reports/ledger/${bank.id}`)).data;
    assert.equal(st.closing, '100000.00');
    assert.equal(st.rows.length, 3);

    // Period lock
    await api('PUT', `/api/companies/${me.data.companies[0].id}`, { lock_date: '2026-01-31' });
    const locked = await api('POST', '/api/journals', { date: '2026-01-20', lines: [{ ledger_id: bank.id, debit: 1 }, { ledger_id: cap.id, credit: 1 }] });
    assert.equal(locked.status, 400);

    // Roles: a viewer cannot post or edit
    await api('POST', '/api/users', { username: 'viewer', password: 'secret2', full_name: 'View Only', role: 'viewer', companies: [me.data.companies[0].id] });
    await api('POST', '/api/logout');
    await api('POST', '/api/login', { username: 'viewer', password: 'secret2' });
    assert.equal((await api('GET', '/api/reports/trial-balance')).status, 200);
    assert.equal((await api('POST', '/api/journals', { date: '2026-02-01', lines: [] })).status, 403);
    assert.equal((await api('GET', '/api/users')).status, 403);

    // Audit trail recorded
    const n = app.db.get('SELECT COUNT(*) AS n FROM audit_log').n;
    assert.ok(n > 5);
  } finally { app.close(); }
});
