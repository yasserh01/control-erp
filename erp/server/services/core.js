'use strict';
const crypto = require('node:crypto');
const { AppError, bad, hashPassword, verifyPassword, ROLES, can } = require('../lib');

const SESSION_HOURS = 12;

function audit(db, ctx, action, entity, entityId, details) {
  db.run(
    'INSERT INTO audit_log (user_id, company_id, action, entity, entity_id, details) VALUES (?,?,?,?,?,?)',
    ctx?.user?.id ?? null, ctx?.companyId ?? null, action, entity, entityId ?? null,
    details ? JSON.stringify(details) : null,
  );
}

// Atomic document numbering, e.g. JV-000001. Must be called inside db.tx().
function nextNumber(db, companyId, docType, defaultPrefix) {
  let row = db.get('SELECT prefix, next_no FROM doc_sequences WHERE company_id=? AND doc_type=?', companyId, docType);
  if (!row) {
    db.run('INSERT INTO doc_sequences (company_id, doc_type, prefix, next_no) VALUES (?,?,?,1)', companyId, docType, defaultPrefix || docType);
    row = { prefix: defaultPrefix || docType, next_no: 1 };
  }
  db.run('UPDATE doc_sequences SET next_no = next_no + 1 WHERE company_id=? AND doc_type=?', companyId, docType);
  return `${row.prefix}-${String(row.next_no).padStart(6, '0')}`;
}

function isSetup(db) {
  return !!db.get('SELECT 1 AS x FROM users LIMIT 1');
}

// First run: create admin user + first company (with starter chart of accounts).
function setup(db, { admin, company }, seedCoa) {
  if (isSetup(db)) throw new AppError(409, 'System is already set up');
  if (!admin?.username || !admin?.password || String(admin.password).length < 6) throw bad('Admin username and a password of at least 6 characters are required');
  if (!company?.name) throw bad('Company name is required');
  return db.tx(() => {
    const u = db.run('INSERT INTO users (username, full_name, email, password_hash, role) VALUES (?,?,?,?,?)',
      admin.username.trim(), admin.full_name || admin.username, admin.email || null, hashPassword(admin.password), 'admin');
    const ctx = { user: { id: u.id, role: 'admin' } };
    const c = createCompany(db, ctx, company, seedCoa);
    audit(db, { ...ctx, companyId: c.id }, 'setup', 'system', null);
    return { userId: u.id, companyId: c.id };
  });
}

function createCompany(db, ctx, c, seedCoa) {
  if (!c?.name) throw bad('Company name is required');
  return db.tx(() => {
    const r = db.run('INSERT INTO companies (name, name_ar, trn, address, phone, email, currency, fy_start_month) VALUES (?,?,?,?,?,?,?,?)',
      c.name.trim(), c.name_ar || null, c.trn || null, c.address || null, c.phone || null, c.email || null, c.currency || 'AED', Number(c.fy_start_month) || 1);
    // Creator always has access
    db.run('INSERT INTO user_companies (user_id, company_id) VALUES (?,?)', ctx.user.id, r.id);
    if (seedCoa) seedCoa(db, r.id);
    audit(db, { ...ctx, companyId: r.id }, 'create', 'company', r.id, { name: c.name });
    return { id: r.id };
  });
}

function updateCompany(db, ctx, id, c) {
  const cur = db.get('SELECT * FROM companies WHERE id=?', id);
  if (!cur) throw new AppError(404, 'Company not found');
  if (c.lock_date && !/^\d{4}-\d{2}-\d{2}$/.test(c.lock_date)) throw bad('Lock date must be YYYY-MM-DD');
  const f = ['name', 'name_ar', 'trn', 'address', 'phone', 'email', 'currency', 'fy_start_month', 'lock_date'];
  const next = Object.fromEntries(f.map((k) => [k, c[k] !== undefined ? (c[k] === '' ? null : c[k]) : cur[k]]));
  if (!next.name) throw bad('Company name is required');
  db.run(`UPDATE companies SET ${f.map((k) => `${k}=?`).join(',')} WHERE id=?`, ...f.map((k) => next[k]), id);
  audit(db, { ...ctx, companyId: id }, 'update', 'company', id, c);
}

function companiesForUser(db, user) {
  if (user.role === 'admin') return db.all('SELECT * FROM companies WHERE active=1 ORDER BY name');
  return db.all('SELECT c.* FROM companies c JOIN user_companies uc ON uc.company_id=c.id WHERE uc.user_id=? AND c.active=1 ORDER BY c.name', user.id);
}

function hasCompanyAccess(db, user, companyId) {
  if (user.role === 'admin') return !!db.get('SELECT 1 AS x FROM companies WHERE id=? AND active=1', companyId);
  return !!db.get('SELECT 1 AS x FROM user_companies WHERE user_id=? AND company_id=?', user.id, companyId);
}

// ---- Users ----
function listUsers(db) {
  return db.all('SELECT id, username, full_name, email, role, active, created_at FROM users ORDER BY username').map((u) => ({
    ...u, companies: db.all('SELECT company_id FROM user_companies WHERE user_id=?', u.id).map((r) => r.company_id),
  }));
}

function saveUser(db, ctx, u) {
  if (!ROLES[u.role]) throw bad('Unknown role');
  return db.tx(() => {
    let id = u.id;
    if (id) {
      if (!db.get('SELECT 1 AS x FROM users WHERE id=?', id)) throw new AppError(404, 'User not found');
      if (id === ctx.user.id && (u.role !== 'admin' || u.active === 0)) throw bad('You cannot remove your own admin access');
      db.run('UPDATE users SET full_name=?, email=?, role=?, active=? WHERE id=?', u.full_name, u.email || null, u.role, u.active === 0 ? 0 : 1, id);
      if (u.password) {
        if (String(u.password).length < 6) throw bad('Password must be at least 6 characters');
        db.run('UPDATE users SET password_hash=? WHERE id=?', hashPassword(u.password), id);
        db.run('DELETE FROM sessions WHERE user_id=?', id);
      }
    } else {
      if (!u.username || !u.password || String(u.password).length < 6) throw bad('Username and a password of at least 6 characters are required');
      if (db.get('SELECT 1 AS x FROM users WHERE username=?', u.username)) throw bad('Username already exists');
      id = db.run('INSERT INTO users (username, full_name, email, password_hash, role) VALUES (?,?,?,?,?)',
        u.username.trim(), u.full_name || u.username, u.email || null, hashPassword(u.password), u.role).id;
    }
    if (Array.isArray(u.companies)) {
      db.run('DELETE FROM user_companies WHERE user_id=?', id);
      for (const cid of u.companies) db.run('INSERT INTO user_companies (user_id, company_id) VALUES (?,?)', id, Number(cid));
    }
    audit(db, ctx, u.id ? 'update' : 'create', 'user', id, { username: u.username, role: u.role });
    return { id };
  });
}

// ---- Sessions ----
function login(db, username, password) {
  const u = db.get('SELECT * FROM users WHERE username=? AND active=1', String(username || ''));
  if (!u || !verifyPassword(password, u.password_hash)) throw new AppError(401, 'Invalid username or password');
  const token = crypto.randomBytes(32).toString('hex');
  const exp = new Date(Date.now() + SESSION_HOURS * 3600e3).toISOString();
  db.run('INSERT INTO sessions (token, user_id, expires_at) VALUES (?,?,?)', token, u.id, exp);
  db.run("DELETE FROM sessions WHERE expires_at < ?", new Date().toISOString());
  audit(db, { user: u }, 'login', 'user', u.id);
  return { token, user: publicUser(u) };
}

function sessionUser(db, token) {
  if (!token) return null;
  const r = db.get('SELECT u.* FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires_at > ? AND u.active=1', token, new Date().toISOString());
  return r ? publicUser(r) : null;
}

function logout(db, token) { db.run('DELETE FROM sessions WHERE token=?', token); }

function publicUser(u) {
  return { id: u.id, username: u.username, full_name: u.full_name, role: u.role, permissions: ROLES[u.role] };
}

function requirePerm(ctx, perm) {
  if (!can(ctx.user.role, perm)) throw new AppError(403, `You do not have permission: ${perm}`);
}

// ---- Document numbering (System > Document Numbering) ----
function listSequences(db, companyId, docTypes) {
  const cur = Object.fromEntries(db.all('SELECT doc_type, prefix, next_no FROM doc_sequences WHERE company_id=?', companyId).map((r) => [r.doc_type, r]));
  return docTypes.map((d) => ({ ...d, prefix: cur[d.doc_type]?.prefix || d.doc_type, next_no: cur[d.doc_type]?.next_no || 1,
    next: `${cur[d.doc_type]?.prefix || d.doc_type}-${String(cur[d.doc_type]?.next_no || 1).padStart(6, '0')}` }));
}

function setSequence(db, ctx, companyId, docType, { prefix, next_no }, docTypes) {
  if (!docTypes.some((d) => d.doc_type === docType)) throw bad('Unknown document type');
  const p = String(prefix || '').trim().toUpperCase();
  if (!/^[A-Z0-9]{1,8}$/.test(p)) throw bad('Prefix must be 1-8 letters or digits');
  const n = Number(next_no);
  if (!Number.isInteger(n) || n < 1) throw bad('Next number must be a whole number from 1');
  db.tx(() => {
    const cur = db.get('SELECT prefix, next_no FROM doc_sequences WHERE company_id=? AND doc_type=?', companyId, docType);
    if (cur && p === cur.prefix && n < cur.next_no) throw bad(`Next number cannot go back below ${cur.next_no} (numbers already used)`);
    db.run('INSERT INTO doc_sequences (company_id, doc_type, prefix, next_no) VALUES (?,?,?,?) ON CONFLICT(company_id, doc_type) DO UPDATE SET prefix=excluded.prefix, next_no=excluded.next_no', companyId, docType, p, n);
    audit(db, { ...ctx, companyId }, 'update', 'numbering', null, { docType, prefix: p, next_no: n });
  });
}

module.exports = {
  listSequences, setSequence,
  audit, nextNumber, isSetup, setup, createCompany, updateCompany, companiesForUser, hasCompanyAccess,
  listUsers, saveUser, login, sessionUser, logout, requirePerm,
};
