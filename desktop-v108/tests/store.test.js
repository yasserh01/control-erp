'use strict';
/* Tests for the SQLite data store. Run: node tests/store.test.js */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { ErpStore, StoreLockedError, isErpDataFile } = require('../desktop/store');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'erp-store-'));
const file = path.join(dir, 'control-erp.db');
let passed = 0;
const t = (name, fn) => { fn(); passed++; console.log('  ok  ' + name); };
const reopen = (s) => { s.close(); return new ErpStore(file).open(); };

let s = new ErpStore(file).open();

t('new file is empty', () => {
  assert.deepEqual(s.loadAll(), {});
});

const db = {
  role: 'Administrator',
  sec: { on: false },
  suppliers: [{ id: 's1', Code: 'SUP-0001', Name: 'Al Noor Trading', Balance: 1200.5 }, { id: 's2', Code: 'SUP-0002', Name: 'Gulf Steel' }],
  coa: [{ id: 1, Code: '1000', Name: 'Assets' }, { id: 2, Code: '2000', Name: 'Liabilities' }],
  tags: ['a', 'b'],
  empty: [],
  arabic: { name: 'شركة كنترول للمقاولات' },
};

t('saves and reads back the exact same data', () => {
  s.setItem('erp', JSON.stringify(db));
  s.setItem('erp_ui', 'classic');
  s = reopen(s);
  const all = s.loadAll();
  assert.equal(all.erp, JSON.stringify(db));
  assert.equal(all.erp_ui, 'classic');
});

const ver = (col, id) => s.db.prepare('SELECT version, seq FROM records WHERE collection=? AND id=?').get(col, String(id));

t('stores list records one row each', () => {
  const n = s.db.prepare("SELECT COUNT(*) n FROM records WHERE collection='suppliers'").get().n;
  assert.equal(n, 2);
  const kinds = Object.fromEntries(s.db.prepare('SELECT name, kind FROM collections').all().map((r) => [r.name, r.kind]));
  assert.equal(kinds.suppliers, 'rows');
  assert.equal(kinds.tags, 'value');
  assert.equal(kinds.empty, 'rows');
  assert.equal(kinds.sec, 'value');
});

t('changing one record only rewrites that record', () => {
  db.suppliers[1].Name = 'Gulf Steel LLC';
  s.setItem('erp', JSON.stringify(db));
  s.flush();
  assert.equal(ver('suppliers', 's1').version, 1);
  assert.equal(ver('suppliers', 's2').version, 2);
});

t('adding at the start keeps the other records untouched', () => {
  const before = ver('suppliers', 's1').seq;
  db.suppliers.unshift({ id: 's0', Name: 'First' });
  s.setItem('erp', JSON.stringify(db));
  s = reopen(s);
  assert.equal(ver('suppliers', 's1').seq, before);
  assert.equal(JSON.parse(s.loadAll().erp).suppliers[0].id, 's0');
});

t('deleting records and keys', () => {
  db.suppliers.splice(1, 1);
  delete db.tags;
  s.setItem('erp', JSON.stringify(db));
  s = reopen(s);
  const back = s.loadAll().erp;
  assert.equal(back, JSON.stringify(db));
  assert.equal(s.db.prepare("SELECT COUNT(*) n FROM collections WHERE name='tags'").get().n, 0);
});

t('a list that loses its ids is kept as a whole value', () => {
  db.coa.push({ Code: 'no id' });
  s.setItem('erp', JSON.stringify(db));
  s = reopen(s);
  assert.equal(s.loadAll().erp, JSON.stringify(db));
  assert.equal(s.db.prepare("SELECT kind FROM collections WHERE name='coa'").get().kind, 'value');
  db.coa.pop();
  s.setItem('erp', JSON.stringify(db));
  s = reopen(s);
  assert.equal(s.db.prepare("SELECT kind FROM collections WHERE name='coa'").get().kind, 'rows');
  assert.equal(s.loadAll().erp, JSON.stringify(db));
});

t('random edits always read back in the right order', () => {
  let seed = 7;
  const rnd = (n) => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % n; };
  let next = 1000;
  for (let round = 0; round < 300; round++) {
    const L = db.suppliers;
    const op = rnd(6);
    if (op === 0) L.push({ id: 'n' + next++, v: rnd(100) });
    else if (op === 1) L.unshift({ id: 'n' + next++ });
    else if (op === 2 && L.length) L.splice(rnd(L.length), 1);
    else if (op === 3) L.splice(rnd(L.length + 1), 0, { id: 'n' + next++ }, { id: 'n' + next++ });
    else if (op === 4 && L.length) L[rnd(L.length)].v = rnd(1000);
    else if (op === 5 && L.length > 2) L.sort(() => rnd(3) - 1);
    s.setItem('erp', JSON.stringify(db));
    if (round % 25 === 0) s = reopen(s); else s.flush();
    assert.equal(s.loadAll().erp, JSON.stringify(db), 'round ' + round);
  }
});

t('settings keys are kept separately and can be removed', () => {
  s.setItem('uxSg', '2');
  s.removeItem('erp_ui');
  s = reopen(s);
  const all = s.loadAll();
  assert.equal(all.uxSg, '2');
  assert.equal(all.erp_ui, undefined);
});

t('a second program cannot open the same file', () => {
  assert.throws(() => new ErpStore(file).open(), StoreLockedError);
});

t('backup copy is a valid data file', () => {
  const b = path.join(dir, 'Backups', 'copy.db');
  s.backupTo(b);
  const chk = isErpDataFile(b);
  assert.equal(chk.ok, true);
  const s2 = new ErpStore(b).open();
  assert.equal(s2.loadAll().erp, JSON.stringify(db));
  s2.close();
  assert.equal(isErpDataFile(path.join(__dirname, 'store.test.js')).ok, false);
});

t('integrity check passes', () => {
  assert.equal(s.integrityCheck(), 'ok');
});

t('large company: one change on 60,000 records saves fast', () => {
  const big = { journals: [], audit: [] };
  for (let i = 0; i < 40000; i++) big.journals.push({ id: 'j' + i, No: 'JV-' + String(i).padStart(6, '0'), Date: '2026-10-01', Lines: [{ a: '1000', d: i, c: 0 }, { a: '2000', d: 0, c: i }], Memo: 'Monthly accrual entry ' + i });
  for (let i = 0; i < 20000; i++) big.audit.push({ id: 'a' + i, t: '2026-10-01T10:00:00Z', u: 'admin', what: 'Saved record ' + i });
  let t0 = Date.now();
  s.setItem('erp', JSON.stringify(big));
  s.flush();
  const first = Date.now() - t0;
  big.journals[12345].Memo = 'changed';
  big.audit.push({ id: 'a-new', what: 'edit' });
  t0 = Date.now();
  s.setItem('erp', JSON.stringify(big));
  s.flush();
  const second = Date.now() - t0;
  s = reopen(s);
  t0 = Date.now();
  const back = s.loadAll().erp;
  const load = Date.now() - t0;
  assert.equal(back, JSON.stringify(big));
  console.log('       first save ' + first + ' ms, one-change save ' + second + ' ms, load ' + load + ' ms, file ' + (fs.statSync(file).size / 1048576).toFixed(1) + ' MB');
  assert.ok(second < 3000);
});

s.close();
fs.rmSync(dir, { recursive: true, force: true });
console.log('store tests passed: ' + passed);
