'use strict';
// Database adapter. Today: SQLite (desktop). Stage 2/3: a PostgreSQL adapter with the
// same small interface (get / all / run / exec / tx) replaces this file only.
const fs = require('node:fs');
const path = require('node:path');

function openSqlite(file) {
  let Driver;
  try {
    // Built-in SQLite (Node >= 22.13)
    const orig = process.emitWarning;
    process.emitWarning = (w, ...a) => (String(w).includes('SQLite') ? undefined : orig.call(process, w, ...a));
    Driver = require('node:sqlite').DatabaseSync;
    process.emitWarning = orig;
  } catch {
    Driver = require('better-sqlite3'); // fallback (e.g. older Electron runtimes)
  }
  return new Driver(file);
}

const plain = (r) => (r ? { ...r } : r);

class Db {
  constructor(file) {
    if (file !== ':memory:') fs.mkdirSync(path.dirname(file), { recursive: true });
    this.file = file;
    this.raw = openSqlite(file);
    this.raw.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;');
    this.depth = 0;
  }
  exec(sql) { this.raw.exec(sql); }
  get(sql, ...p) { return plain(this.raw.prepare(sql).get(...p)); }
  all(sql, ...p) { return this.raw.prepare(sql).all(...p).map(plain); }
  run(sql, ...p) {
    const r = this.raw.prepare(sql).run(...p);
    return { changes: Number(r.changes), id: Number(r.lastInsertRowid) };
  }
  // All-or-nothing transaction. Nested calls join the outer transaction.
  tx(fn) {
    if (this.depth > 0) { this.depth++; try { return fn(); } finally { this.depth--; } }
    this.raw.exec('BEGIN IMMEDIATE');
    this.depth = 1;
    try {
      const out = fn();
      this.raw.exec('COMMIT');
      return out;
    } catch (e) {
      this.raw.exec('ROLLBACK');
      throw e;
    } finally { this.depth = 0; }
  }
  backupTo(target) {
    if (fs.existsSync(target)) fs.unlinkSync(target);
    this.raw.prepare('VACUUM INTO ?').run(target);
  }
  close() { this.raw.close(); }
}

module.exports = { Db };
