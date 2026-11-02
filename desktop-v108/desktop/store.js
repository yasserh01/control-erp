'use strict';
/*
 * Control ERP - SQLite data store
 * --------------------------------
 * The ERP screens keep all company data in one JavaScript object (`db`) and save it
 * with localStorage.setItem('erp', JSON.stringify(db)). On the desktop, that call is
 * redirected here and the object is written to a SQLite file:
 *
 *   collections  one row per top-level key of `db` (suppliers, coa, journals, ...)
 *   records      one row per record of a list-type key (row-level, with versions)
 *   kv           the small UI settings the screens keep in localStorage
 *   meta         schema version and file information
 *
 * Only the records that changed are written on each save, inside one transaction.
 * This file has no Electron dependency so the Stage 2 server can reuse it as is.
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sqlite = require('node:sqlite');

const SCHEMA_VERSION = 1;
const DATA_KEY = 'erp';

const nowIso = () => new Date().toISOString();
const digest = (text) => crypto.createHash('sha1').update(text).digest('base64');
// A fresh copy, so a kept record does not hold the whole saved text in memory.
const own = (str) => (str.length < 32 ? str : Buffer.from(str, 'utf8').toString('utf8'));

/*
 * Splits JSON text into its top-level parts without parsing it.
 * Object -> [[keyText, valueText], ...]   Array -> [elementText, ...]
 */
function splitJson(text) {
  let i = 0;
  const n = text.length;
  const ws = () => { while (i < n) { const c = text.charCodeAt(i); if (c === 32 || c === 9 || c === 10 || c === 13) i++; else break; } };
  const endOfString = (k) => { // k at opening quote; returns index after closing quote
    k++;
    for (;;) {
      const q = text.indexOf('"', k);
      if (q < 0) throw new Error('bad json');
      let b = q - 1, slashes = 0;
      while (text.charCodeAt(b) === 92) { slashes++; b--; }
      if (slashes % 2 === 0) return q + 1;
      k = q + 1;
    }
  };
  const endOfValue = (k) => {
    const c = text.charCodeAt(k);
    if (c === 34) return endOfString(k);
    if (c === 123 || c === 91) {
      let depth = 0;
      while (k < n) {
        const d = text.charCodeAt(k);
        if (d === 34) { k = endOfString(k); continue; }
        if (d === 123 || d === 91) depth++;
        else if (d === 125 || d === 93) { depth--; if (depth === 0) return k + 1; }
        k++;
      }
      throw new Error('bad json');
    }
    while (k < n) { const d = text.charCodeAt(k); if (d === 44 || d === 125 || d === 93 || d === 32 || d === 10 || d === 13 || d === 9) break; k++; }
    return k;
  };
  ws();
  const open = text.charCodeAt(i);
  if (open !== 123 && open !== 91) throw new Error('bad json');
  const isObj = open === 123;
  const close = isObj ? 125 : 93;
  i++;
  const out = [];
  ws();
  if (text.charCodeAt(i) === close) return { isObj, parts: out };
  for (;;) {
    ws();
    let key = null;
    if (isObj) {
      if (text.charCodeAt(i) !== 34) throw new Error('bad json');
      const e = endOfString(i);
      key = text.slice(i, e);
      i = e; ws();
      if (text.charCodeAt(i) !== 58) throw new Error('bad json');
      i++; ws();
    }
    const e = endOfValue(i);
    const val = text.slice(i, e);
    out.push(isObj ? [key, val] : val);
    i = e; ws();
    const c = text.charCodeAt(i);
    if (c === 44) { i++; continue; }
    if (c === close) break;
    throw new Error('bad json');
  }
  return { isObj, parts: out };
}

class StoreLockedError extends Error {
  constructor(file) {
    super('The data file is already open in another copy of Control ERP or on another computer: ' + file);
    this.code = 'STORE_LOCKED';
  }
}

function isRowList(v) {
  if (!Array.isArray(v)) return false;
  const seen = new Set();
  for (const r of v) {
    if (!r || typeof r !== 'object' || Array.isArray(r)) return false;
    const id = r.id;
    if (id === undefined || id === null || id === '' || (typeof id !== 'string' && typeof id !== 'number')) return false;
    const k = String(id);
    if (seen.has(k)) return false;
    seen.add(k);
  }
  return true;
}

class ErpStore {
  constructor(file, opts = {}) {
    this.file = file;
    this.opts = opts;
    this.db = null;
    this.cache = null; // last saved state, used to write only what changed
    this.pending = null; // latest unsaved 'erp' JSON text
    this.timer = null;
    this.firstPendingAt = 0;
    this.lastSaveMs = 0;
    this.lastSavedAt = null;
    this.saveCount = 0;
    this.onError = opts.onError || ((e) => console.error('[store]', e));
  }

  open() {
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    const isNew = !fs.existsSync(this.file);
    const db = new sqlite.DatabaseSync(this.file);
    try {
      // Exclusive lock: only one program on one computer may have the file open.
      db.exec('PRAGMA locking_mode = EXCLUSIVE');
      db.exec('PRAGMA journal_mode = WAL');
      db.exec('PRAGMA synchronous = FULL');
      db.exec('PRAGMA foreign_keys = ON');
      db.exec('PRAGMA busy_timeout = 2000');
      db.exec('BEGIN IMMEDIATE; COMMIT;');
    } catch (e) {
      try { db.close(); } catch (_) {}
      if (/locked|busy/i.test(String(e && e.message))) throw new StoreLockedError(this.file);
      throw e;
    }
    this.db = db;
    this.migrate(isNew);
    this.prepare();
    this.cache = null;
    return this;
  }

  migrate(isNew) {
    const db = this.db;
    db.exec(`
      CREATE TABLE IF NOT EXISTS meta(
        key   TEXT PRIMARY KEY,
        value TEXT
      );
      CREATE TABLE IF NOT EXISTS kv(
        key        TEXT PRIMARY KEY,
        value      TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS collections(
        name       TEXT PRIMARY KEY,
        kind       TEXT NOT NULL CHECK (kind IN ('rows','value')),
        ord        INTEGER NOT NULL,
        value      TEXT,
        row_count  INTEGER NOT NULL DEFAULT 0,
        updated_at TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS records(
        collection TEXT NOT NULL,
        id         TEXT NOT NULL,
        seq        REAL NOT NULL,
        data       TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        version    INTEGER NOT NULL DEFAULT 1,
        PRIMARY KEY (collection, id)
      ) WITHOUT ROWID;
      CREATE INDEX IF NOT EXISTS records_by_seq ON records(collection, seq);
    `);
    const get = db.prepare('SELECT value FROM meta WHERE key = ?');
    const put = db.prepare('INSERT INTO meta(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value = excluded.value');
    const cur = get.get('schema_version');
    const v = cur ? Number(cur.value) : 0;
    if (v > SCHEMA_VERSION) {
      throw new Error('This data file was created by a newer version of Control ERP (data version ' + v + '). Please update the program.');
    }
    if (isNew || !cur) {
      put.run('schema_version', String(SCHEMA_VERSION));
      put.run('created_at', nowIso());
      put.run('created_by_app', String(this.opts.appVersion || ''));
    }
    put.run('last_opened_at', nowIso());
    put.run('last_opened_by_app', String(this.opts.appVersion || ''));
  }

  prepare() {
    const db = this.db;
    this.q = {
      kvAll: db.prepare('SELECT key, value FROM kv'),
      kvPut: db.prepare('INSERT INTO kv(key,value,updated_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at'),
      kvDel: db.prepare('DELETE FROM kv WHERE key = ?'),
      colAll: db.prepare('SELECT name, kind, ord, value FROM collections ORDER BY ord, name'),
      colPut: db.prepare(`INSERT INTO collections(name,kind,ord,value,row_count,updated_at) VALUES(?,?,?,?,?,?)
        ON CONFLICT(name) DO UPDATE SET kind = excluded.kind, ord = excluded.ord, value = excluded.value,
        row_count = excluded.row_count, updated_at = excluded.updated_at`),
      colOrd: db.prepare('UPDATE collections SET ord = ? WHERE name = ?'),
      colDel: db.prepare('DELETE FROM collections WHERE name = ?'),
      recOf: db.prepare('SELECT id, seq, data FROM records WHERE collection = ? ORDER BY seq'),
      recIns: db.prepare('INSERT INTO records(collection,id,seq,data,created_at,updated_at,version) VALUES(?,?,?,?,?,?,1)'),
      recUpd: db.prepare('UPDATE records SET seq = ?, data = ?, updated_at = ?, version = version + 1 WHERE collection = ? AND id = ?'),
      recSeq: db.prepare('UPDATE records SET seq = ? WHERE collection = ? AND id = ?'),
      recDel: db.prepare('DELETE FROM records WHERE collection = ? AND id = ?'),
      recDelAll: db.prepare('DELETE FROM records WHERE collection = ?'),
      count: db.prepare('SELECT COUNT(*) AS n FROM records'),
    };
  }

  close() {
    if (!this.db) return;
    try { this.flush(); } catch (e) { this.onError(e); }
    try { this.db.exec('PRAGMA wal_checkpoint(TRUNCATE)'); } catch (_) {}
    try { this.db.close(); } catch (_) {}
    this.db = null;
    this.cache = null;
  }

  /* ---------- reading ---------- */

  // Rebuilds the JSON text of the ERP object without parsing it.
  loadDataText() {
    this.flush();
    const cache = { order: [], cols: new Map() };
    const parts = [];
    for (const c of this.q.colAll.all()) {
      let text;
      const entry = { kind: c.kind, hash: '', rows: null, byText: null };
      if (c.kind === 'rows') {
        const rows = new Map();
        const list = [];
        for (const r of this.q.recOf.all(c.name)) {
          rows.set(r.id, { seq: r.seq, data: r.data });
          list.push(r.data);
        }
        text = '[' + list.join(',') + ']';
        entry.rows = rows;
      } else {
        text = c.value == null ? 'null' : c.value;
      }
      entry.hash = digest(text);
      cache.order.push(c.name);
      cache.cols.set(c.name, entry);
      parts.push(JSON.stringify(c.name) + ':' + text);
    }
    this.cache = cache;
    return parts.length ? '{' + parts.join(',') + '}' : null;
  }

  loadAll() {
    const out = {};
    for (const r of this.q.kvAll.all()) out[r.key] = r.value;
    const t = this.loadDataText();
    if (t !== null) out[DATA_KEY] = t;
    return out;
  }

  /* ---------- writing ---------- */

  setItem(key, value) {
    if (key === DATA_KEY) {
      this.pending = value;
      const now = Date.now();
      if (!this.firstPendingAt) this.firstPendingAt = now;
      if (this.timer) clearTimeout(this.timer);
      // Group bursts of saves; never hold a change for more than one second.
      const wait = Math.max(0, Math.min(250, 1000 - (now - this.firstPendingAt)));
      this.timer = setTimeout(() => {
        try { this.flush(); } catch (e) { this.onError(e); }
      }, wait);
      return;
    }
    this.q.kvPut.run(key, value, nowIso());
  }

  removeItem(key) {
    if (key === DATA_KEY) {
      this.pending = '{}';
      this.flush();
      return;
    }
    this.q.kvDel.run(key);
  }

  flush() {
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    this.firstPendingAt = 0;
    if (this.pending === null || !this.db) return false;
    const text = this.pending;
    this.pending = null;
    const t0 = Date.now();
    this.writeData(text);
    this.lastSaveMs = Date.now() - t0;
    this.lastSavedAt = nowIso();
    this.saveCount++;
    return true;
  }

  writeData(text) {
    let top;
    try { top = splitJson(text); } catch (_) { top = null; }
    if (!top || !top.isObj) {
      let obj;
      try { obj = JSON.parse(text); } catch (e) { throw new Error('The ERP sent data that is not valid JSON; nothing was saved.'); }
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) obj = {};
      top = { isObj: true, parts: Object.keys(obj).filter((k) => obj[k] !== undefined).map((k) => [JSON.stringify(k), JSON.stringify(obj[k])]) };
    }
    if (!this.cache) this.loadDataText();
    const cache = this.cache;
    const q = this.q;
    const ts = nowIso();
    const names = top.parts.map((p) => JSON.parse(p[0]));
    const db = this.db;
    db.exec('BEGIN IMMEDIATE');
    try {
      const keep = new Set(names);
      for (const name of cache.order) {
        if (!keep.has(name)) {
          q.recDelAll.run(name);
          q.colDel.run(name);
          cache.cols.delete(name);
        }
      }
      top.parts.forEach((p, ord) => {
        const name = names[ord];
        const vtext = p[1];
        const hash = digest(vtext);
        const prev = cache.cols.get(name);
        if (prev && prev.hash === hash) {
          if (cache.order[ord] !== name) q.colOrd.run(ord, name);
          return;
        }
        const rows = vtext.charCodeAt(0) === 91 ? this.readRows(vtext, prev) : null;
        if (rows) this.writeRows(name, rows, ord, prev, ts);
        else {
          if (prev && prev.kind === 'rows') q.recDelAll.run(name);
          q.colPut.run(name, 'value', ord, own(vtext), 0, ts);
          cache.cols.set(name, { kind: 'value', hash: '', rows: null, byText: null });
        }
        cache.cols.get(name).hash = hash;
      });
      cache.order = names;
      db.exec('COMMIT');
    } catch (e) {
      try { db.exec('ROLLBACK'); } catch (_) {}
      this.cache = null; // reload from disk on next save
      throw e;
    }
  }

  // Returns {ids, datas} when the list is a list of records with unique ids, else null.
  readRows(vtext, prev) {
    const parts = splitJson(vtext).parts;
    let byText = null;
    if (prev && prev.kind === 'rows' && prev.rows) {
      byText = new Map();
      for (const [id, r] of prev.rows) byText.set(r.data, id);
    }
    const ids = new Array(parts.length);
    const seen = new Set();
    for (let i = 0; i < parts.length; i++) {
      const et = parts[i];
      if (et.charCodeAt(0) !== 123) return null;
      let id = byText ? byText.get(et) : undefined;
      if (id === undefined) {
        const r = JSON.parse(et);
        const v = r.id;
        if (v === undefined || v === null || v === '' || (typeof v !== 'string' && typeof v !== 'number')) return null;
        id = String(v);
      }
      if (seen.has(id)) return null;
      seen.add(id);
      ids[i] = id;
    }
    return { ids, datas: parts };
  }

  writeRows(name, rows, ord, prev, ts) {
    const q = this.q;
    const old = prev && prev.kind === 'rows' ? prev.rows : null;
    if (prev && prev.kind !== 'rows') q.recDelAll.run(name);
    const { ids, datas } = rows;
    const seqs = assignSeqs(ids, old);
    const next = new Map();
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const seq = seqs[i];
      const o = old && old.get(id);
      let data = datas[i];
      if (!o) { data = own(data); q.recIns.run(name, id, seq, data, ts, ts); }
      else if (o.data !== data) { data = own(data); q.recUpd.run(seq, data, ts, name, id); }
      else { data = o.data; if (o.seq !== seq) q.recSeq.run(seq, name, id); }
      next.set(id, { seq, data });
    }
    if (old) for (const id of old.keys()) if (!next.has(id)) q.recDel.run(name, id);
    q.colPut.run(name, 'rows', ord, null, ids.length, ts);
    this.cache.cols.set(name, { kind: 'rows', hash: '', rows: next, byText: null });
  }

  /* ---------- maintenance ---------- */

  backupTo(dest) {
    this.flush();
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const tmp = dest + '.part';
    try { fs.rmSync(tmp, { force: true }); } catch (_) {}
    // VACUUM INTO writes a compact, consistent copy while the file stays open.
    const lit = "'" + tmp.replace(/'/g, "''") + "'";
    this.db.exec('VACUUM INTO ' + lit);
    fs.renameSync(tmp, dest);
    return dest;
  }

  info() {
    let records = 0;
    try { records = Number(this.q.count.get().n); } catch (_) {}
    let size = 0;
    try { size = fs.statSync(this.file).size; } catch (_) {}
    const meta = {};
    try { for (const r of this.db.prepare('SELECT key, value FROM meta').all()) meta[r.key] = r.value; } catch (_) {}
    let sqliteVersion = '';
    try { sqliteVersion = this.db.prepare('SELECT sqlite_version() AS v').get().v; } catch (_) {}
    return {
      file: this.file,
      size,
      records,
      collections: this.cache ? this.cache.order.length : null,
      lastSavedAt: this.lastSavedAt,
      lastSaveMs: this.lastSaveMs,
      saves: this.saveCount,
      sqliteVersion,
      meta,
    };
  }

  integrityCheck() {
    const r = this.db.prepare('PRAGMA integrity_check').all();
    return r.map((x) => Object.values(x)[0]).join('; ');
  }
}

/*
 * Keeps the stored order key (seq) of existing records when their relative order is
 * unchanged, so appending, inserting or deleting a record only touches that record.
 */
function assignSeqs(ids, old) {
  const n = ids.length;
  const out = new Array(n);
  if (!old || old.size === 0) {
    for (let i = 0; i < n; i++) out[i] = i + 1;
    return out;
  }
  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    const o = old.get(ids[i]);
    if (o) {
      if (!(o.seq > prev)) return renumber(n);
      prev = o.seq;
      out[i] = o.seq;
    }
  }
  let i = 0;
  while (i < n) {
    if (out[i] !== undefined) { i++; continue; }
    let j = i;
    while (j < n && out[j] === undefined) j++;
    const k = j - i;
    const lo = i > 0 ? out[i - 1] : null;
    const hi = j < n ? out[j] : null;
    if (lo === null && hi === null) for (let t = 0; t < k; t++) out[i + t] = t + 1;
    else if (lo === null) for (let t = 0; t < k; t++) out[i + t] = hi - k + t;
    else if (hi === null) for (let t = 0; t < k; t++) out[i + t] = lo + 1 + t;
    else {
      const step = (hi - lo) / (k + 1);
      if (!(step > 1e-6)) return renumber(n);
      for (let t = 0; t < k; t++) out[i + t] = lo + step * (t + 1);
    }
    i = j;
  }
  return out;
}

function renumber(n) {
  const out = new Array(n);
  for (let i = 0; i < n; i++) out[i] = i + 1;
  return out;
}

function isErpDataFile(file) {
  let db;
  try {
    db = new sqlite.DatabaseSync(file, { readOnly: true });
    const t = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name IN ('meta','collections','records','kv')").all();
    if (t.length < 4) return { ok: false, reason: 'This file is not a Control ERP data file.' };
    const v = db.prepare("SELECT value FROM meta WHERE key='schema_version'").get();
    const n = db.prepare('SELECT COUNT(*) AS n FROM records').get();
    const c = db.prepare("SELECT value FROM meta WHERE key='created_at'").get();
    return { ok: true, schema: v ? Number(v.value) : 0, records: Number(n.n), createdAt: c ? c.value : '' };
  } catch (e) {
    return { ok: false, reason: 'The file could not be read as a Control ERP data file (' + (e && e.message) + ').' };
  } finally {
    try { db && db.close(); } catch (_) {}
  }
}

module.exports = { ErpStore, StoreLockedError, isErpDataFile, assignSeqs, isRowList, splitJson, SCHEMA_VERSION, DATA_KEY };
