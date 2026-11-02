'use strict';
// Generic master-data engine: one engine serves every master screen defined in the registry.
const { AppError, bad, isDate, can } = require('../lib');
const { audit } = require('./core');
const registry = require('../registry');

const MASK = '••••';

function sec(key) {
  const s = registry.section(key);
  if (!s) throw new AppError(404, `Unknown screen: ${key}`);
  return s;
}

// What a reference field points to.
function refKind(ref) {
  if (ref === 'coa') return 'ledger';
  if (ref === 'companies') return 'company';
  if (registry.ENABLED.has(ref)) return 'record';
  return 'text'; // section not built yet (e.g. projects) -> stored as text for now
}

function refExists(db, companyId, f, id) {
  const k = refKind(f.ref);
  if (k === 'ledger') return !!db.get('SELECT 1 AS x FROM coa_ledgers WHERE id=? AND company_id=?', id, companyId);
  if (k === 'company') return !!db.get('SELECT 1 AS x FROM companies WHERE id=?', id);
  return !!db.get('SELECT 1 AS x FROM records WHERE id=? AND company_id=? AND section=?', id, companyId, f.ref);
}

function clean(db, companyId, s, input, current) {
  const data = { ...(current || {}) };
  for (const f of s.fields) {
    if (!(f.name in input)) continue;
    let v = input[f.name];
    if (v === undefined) continue;
    if (v === null || v === '') { delete data[f.name]; continue; }
    if (f.type === 'num') {
      const n = Number(String(v).replace(/,/g, ''));
      if (!Number.isFinite(n)) throw bad(`${f.name}: enter a number`);
      v = n;
    } else if (f.type === 'date') {
      if (!isDate(v)) throw bad(`${f.name}: enter a valid date`);
    } else if (f.type === 'sel') {
      if (!f.options.includes(String(v))) throw bad(`${f.name}: choose one of ${f.options.join(', ')}`);
    } else if (f.type === 'ref' && refKind(f.ref) !== 'text') {
      v = Number(v);
      if (!Number.isInteger(v) || !refExists(db, companyId, f, v)) throw bad(`${f.name}: choose a valid entry`);
    } else {
      v = String(v).trim();
    }
    data[f.name] = v;
  }
  return data;
}

function nextCode(db, companyId, s) {
  const prefix = s.autoCode || s.key.slice(0, 3).toUpperCase();
  const rows = db.all('SELECT code FROM records WHERE company_id=? AND section=? AND code LIKE ?', companyId, s.key, `${prefix}-%`);
  const max = rows.reduce((m, r) => Math.max(m, Number(r.code.slice(prefix.length + 1)) || 0), 0);
  return `${prefix}-${String(max + 1).padStart(4, '0')}`;
}

const nameOf = (data) => data.Name || data['Holder Name'] || data.Bank || null;

function save(db, ctx, companyId, key, input, id) {
  const s = sec(key);
  return db.tx(() => {
    let cur = null;
    if (id) {
      cur = db.get('SELECT * FROM records WHERE id=? AND company_id=? AND section=?', id, companyId, key);
      if (!cur) throw new AppError(404, 'Record not found');
    }
    const prev = cur ? JSON.parse(cur.data) : {};
    // Roles without salary.view cannot see or change sensitive fields.
    const inp = { ...input };
    if (!can(ctx.user.role, 'salary.view')) for (const f of s.fields) if (f.sensitive) delete inp[f.name];
    const data = clean(db, companyId, s, inp, prev);
    if (!data.Code) data.Code = cur ? cur.code : nextCode(db, companyId, s);
    if (!nameOf(data)) throw bad(`${s.fields.find((f) => ['Name', 'Holder Name', 'Bank'].includes(f.name))?.name || 'Name'} is required`);
    const dup = db.get('SELECT id FROM records WHERE company_id=? AND section=? AND code=? AND id<>?', companyId, key, data.Code, id || 0);
    if (dup) throw bad(`Code ${data.Code} already exists`);
    if (cur) {
      db.run("UPDATE records SET code=?, name=?, status=?, data=?, updated_by=?, updated_at=datetime('now') WHERE id=?",
        data.Code, nameOf(data), data.Status || null, JSON.stringify(data), ctx.user.id, id);
    } else {
      id = db.run('INSERT INTO records (company_id, section, code, name, status, data, created_by, updated_by) VALUES (?,?,?,?,?,?,?,?)',
        companyId, key, data.Code, nameOf(data), data.Status || null, JSON.stringify(data), ctx.user.id, ctx.user.id).id;
    }
    audit(db, ctx, cur ? 'update' : 'create', key, id, { code: data.Code, name: nameOf(data) });
    return { id, code: data.Code };
  });
}

// Labels for reference values, so lists show names instead of ids.
function labeller(db, companyId) {
  const cache = new Map();
  return (f, v) => {
    if (v === undefined || v === null || v === '') return '';
    const k = refKind(f.ref);
    if (k === 'text') return String(v);
    const ck = `${k}:${v}`;
    if (!cache.has(ck)) {
      let r;
      if (k === 'ledger') r = db.get("SELECT code || ' ' || name AS l FROM coa_ledgers WHERE id=? AND company_id=?", v, companyId);
      else if (k === 'company') r = db.get('SELECT name AS l FROM companies WHERE id=?', v);
      else r = db.get("SELECT code || ' - ' || COALESCE(name,'') AS l FROM records WHERE id=? AND company_id=?", v, companyId);
      cache.set(ck, r ? r.l : `#${v}`);
    }
    return cache.get(ck);
  };
}

function present(db, ctx, companyId, s, row, label) {
  const data = JSON.parse(row.data);
  const show = can(ctx.user.role, 'salary.view');
  const labels = {};
  for (const f of s.fields) {
    if (f.sensitive && !show && data[f.name] !== undefined) data[f.name] = MASK;
    if (f.type === 'ref' && data[f.name] !== undefined) labels[f.name] = label(f, data[f.name]);
  }
  return { id: row.id, code: row.code, name: row.name, status: row.status, data, labels, updated_at: row.updated_at };
}

function list(db, ctx, companyId, key, { q, status } = {}) {
  const s = sec(key);
  const w = ['company_id=?', 'section=?']; const p = [companyId, key];
  if (q) { w.push('(code LIKE ? OR name LIKE ? OR data LIKE ?)'); p.push(`%${q}%`, `%${q}%`, `%${q}%`); }
  if (status) { w.push('status=?'); p.push(status); }
  const label = labeller(db, companyId);
  const rows = db.all(`SELECT * FROM records WHERE ${w.join(' AND ')} ORDER BY code`, ...p).map((r) => present(db, ctx, companyId, s, r, label));
  return { section: describe(s, ctx), rows };
}

function get(db, ctx, companyId, key, id) {
  const s = sec(key);
  const r = db.get('SELECT * FROM records WHERE id=? AND company_id=? AND section=?', id, companyId, key);
  if (!r) throw new AppError(404, 'Record not found');
  return { section: describe(s, ctx), record: present(db, ctx, companyId, s, r, labeller(db, companyId)) };
}

// Is this record used by any other record or ledger link?
function usedBy(db, companyId, key, id) {
  for (const s of registry.masterSections()) {
    for (const f of s.fields) {
      if (f.type !== 'ref' || f.ref !== key) continue;
      const hit = db.get('SELECT code FROM records WHERE company_id=? AND section=? AND json_extract(data, ?) = ? LIMIT 1', companyId, s.key, `$."${f.name}"`, id);
      if (hit) return `${s.label} ${hit.code}`;
    }
  }
  return null;
}

function remove(db, ctx, companyId, key, id) {
  sec(key);
  const r = db.get('SELECT code FROM records WHERE id=? AND company_id=? AND section=?', id, companyId, key);
  if (!r) throw new AppError(404, 'Record not found');
  const u = usedBy(db, companyId, key, id);
  if (u) throw bad(`${r.code} is used by ${u}. Set its status to Inactive instead.`);
  db.tx(() => { db.run('DELETE FROM records WHERE id=?', id); audit(db, ctx, 'delete', key, id, { code: r.code }); });
}

// Choices for a reference field's drop-down.
function options(db, companyId, ref) {
  const k = refKind(ref);
  if (k === 'ledger') return db.all("SELECT l.id, l.code || ' ' || l.name AS label FROM coa_ledgers l WHERE l.company_id=? AND l.active=1 ORDER BY l.code", companyId);
  if (k === 'company') return db.all('SELECT id, name AS label FROM companies WHERE active=1 ORDER BY name');
  if (k === 'record') return db.all("SELECT id, code || ' - ' || COALESCE(name,'') AS label FROM records WHERE company_id=? AND section=? AND COALESCE(status,'Active') NOT IN ('Inactive','Terminated') ORDER BY code", companyId, ref);
  return [];
}

function describe(s, ctx) {
  return {
    key: s.key, label: s.label, icon: s.icon, autoCode: s.autoCode || s.key.slice(0, 3).toUpperCase(),
    columns: registry.listColumns(s),
    fields: s.fields.map((f) => ({ ...f, refKind: f.type === 'ref' ? refKind(f.ref) : undefined, masked: f.sensitive && !can(ctx.user.role, 'salary.view') })),
  };
}

function catalogue(db, companyId) {
  const counts = Object.fromEntries(db.all('SELECT section, COUNT(*) AS n FROM records WHERE company_id=? GROUP BY section', companyId).map((r) => [r.section, r.n]));
  return registry.masterSections().map((s) => ({ key: s.key, label: s.label, icon: s.icon, count: counts[s.key] || 0 }));
}

module.exports = { save, list, get, remove, options, catalogue, refKind };
