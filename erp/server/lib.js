'use strict';
const crypto = require('node:crypto');

class AppError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
const bad = (msg) => new AppError(400, msg);

// ---- Money: fils integers ----
function toFils(v) {
  if (v === null || v === undefined || v === '') return 0;
  const s = String(v).replace(/,/g, '').trim();
  if (!/^-?\d+(\.\d{0,2})?$/.test(s)) throw bad(`Invalid amount: ${v}`);
  const neg = s.startsWith('-');
  const [i, f = ''] = s.replace('-', '').split('.');
  const n = Number(i) * 100 + Number((f + '00').slice(0, 2));
  return neg ? -n : n;
}
const fromFils = (n) => (Number(n) / 100).toFixed(2);

// ---- Passwords (scrypt, built-in) ----
function hashPassword(pw) {
  const salt = crypto.randomBytes(16).toString('hex');
  const h = crypto.scryptSync(String(pw), salt, 64).toString('hex');
  return `scrypt$${salt}$${h}`;
}
function verifyPassword(pw, stored) {
  const [, salt, h] = String(stored).split('$');
  if (!salt || !h) return false;
  const test = crypto.scryptSync(String(pw), salt, 64);
  return crypto.timingSafeEqual(test, Buffer.from(h, 'hex'));
}

// ---- Roles & permissions ----
// Permission strings: "<module>.<action>". '*' = everything.
const ROLES = {
  admin: ['*'],
  accountant: ['coa.view', 'coa.edit', 'journal.view', 'journal.edit', 'journal.post', 'reports.view', 'company.view', 'md.view', 'md.edit', 'mapping.view'],
  clerk: ['coa.view', 'journal.view', 'journal.edit', 'reports.view', 'company.view', 'md.view', 'md.edit'],
  viewer: ['coa.view', 'journal.view', 'reports.view', 'company.view', 'md.view'],
  // salary.view (salary and bank fields), settings.edit, users.admin: admin only
};
function can(role, perm) {
  const p = ROLES[role] || [];
  return p.includes('*') || p.includes(perm);
}

const isDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(String(d)) && !Number.isNaN(Date.parse(d));

module.exports = { AppError, bad, toFils, fromFils, hashPassword, verifyPassword, ROLES, can, isDate };
