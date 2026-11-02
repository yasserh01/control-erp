'use strict';
// General ledger posting engine. Every module (purchase, sales, payroll, assets...) will
// create its accounting through postJournal() so all postings follow the same rules.
const { AppError, bad, toFils, fromFils, isDate } = require('../lib');
const { audit, nextNumber } = require('./core');

function normaliseLines(db, companyId, lines) {
  if (!Array.isArray(lines) || lines.length < 2) throw bad('A journal needs at least two lines');
  return lines.map((l, i) => {
    const debit = toFils(l.debit);
    const credit = toFils(l.credit);
    if (debit < 0 || credit < 0) throw bad(`Line ${i + 1}: amounts cannot be negative`);
    if ((debit > 0) === (credit > 0)) throw bad(`Line ${i + 1}: enter either a debit or a credit`);
    const ledger = db.get('SELECT id, active FROM coa_ledgers WHERE id=? AND company_id=?', Number(l.ledger_id), companyId);
    if (!ledger) throw bad(`Line ${i + 1}: choose a valid account`);
    if (!ledger.active) throw bad(`Line ${i + 1}: account is inactive`);
    return { line_no: i + 1, ledger_id: ledger.id, debit, credit, narration: l.narration || null, analysis_ref: l.analysis_ref || null };
  });
}

function checkDate(db, companyId, date) {
  if (!isDate(date)) throw bad('Date must be YYYY-MM-DD');
  const c = db.get('SELECT lock_date FROM companies WHERE id=?', companyId);
  if (c?.lock_date && date <= c.lock_date) throw bad(`Period is locked up to ${c.lock_date}`);
}

function saveDraft(db, ctx, companyId, j) {
  checkDate(db, companyId, j.date);
  const lines = normaliseLines(db, companyId, j.lines);
  return db.tx(() => {
    let id = j.id;
    if (id) {
      const cur = db.get('SELECT status FROM journals WHERE id=? AND company_id=?', id, companyId);
      if (!cur) throw new AppError(404, 'Journal not found');
      if (cur.status !== 'Draft') throw bad('Posted journals cannot be edited — reverse instead');
      db.run('UPDATE journals SET date=?, reference=?, narration=? WHERE id=?', j.date, j.reference || null, j.narration || null, id);
      db.run('DELETE FROM journal_lines WHERE journal_id=?', id);
    } else {
      id = db.run('INSERT INTO journals (company_id, date, source, reference, narration, created_by) VALUES (?,?,?,?,?,?)',
        companyId, j.date, j.source || 'JV', j.reference || null, j.narration || null, ctx.user.id).id;
    }
    for (const l of lines) {
      db.run('INSERT INTO journal_lines (journal_id, line_no, ledger_id, debit, credit, narration, analysis_ref) VALUES (?,?,?,?,?,?,?)',
        id, l.line_no, l.ledger_id, l.debit, l.credit, l.narration, l.analysis_ref);
    }
    audit(db, ctx, j.id ? 'update' : 'create', 'journal', id);
    return { id };
  });
}

function post(db, ctx, companyId, id) {
  return db.tx(() => {
    const j = db.get('SELECT * FROM journals WHERE id=? AND company_id=?', id, companyId);
    if (!j) throw new AppError(404, 'Journal not found');
    if (j.status !== 'Draft') throw bad(`Journal is already ${j.status}`);
    checkDate(db, companyId, j.date);
    const t = db.get('SELECT SUM(debit) AS d, SUM(credit) AS c, COUNT(*) AS n FROM journal_lines WHERE journal_id=?', id);
    if (t.n < 2) throw bad('A journal needs at least two lines');
    if (t.d !== t.c) throw bad(`Journal is not balanced: debit ${fromFils(t.d)} vs credit ${fromFils(t.c)}`);
    if (t.d === 0) throw bad('Journal total cannot be zero');
    const number = nextNumber(db, companyId, j.source, j.source);
    db.run("UPDATE journals SET status='Posted', number=?, posted_by=?, posted_at=datetime('now') WHERE id=?", number, ctx.user.id, id);
    audit(db, ctx, 'post', 'journal', id, { number });
    return { id, number };
  });
}

// One call for other modules: create + post atomically.
function postJournal(db, ctx, companyId, j) {
  return db.tx(() => post(db, ctx, companyId, saveDraft(db, ctx, companyId, { ...j, id: undefined }).id));
}

function reverse(db, ctx, companyId, id, date) {
  return db.tx(() => {
    const j = db.get('SELECT * FROM journals WHERE id=? AND company_id=?', id, companyId);
    if (!j) throw new AppError(404, 'Journal not found');
    if (j.status !== 'Posted') throw bad('Only posted journals can be reversed');
    const lines = db.all('SELECT * FROM journal_lines WHERE journal_id=? ORDER BY line_no', id);
    const r = postJournal(db, ctx, companyId, {
      date: date || j.date, source: j.source, reference: j.number,
      narration: `Reversal of ${j.number}${j.narration ? ' — ' + j.narration : ''}`,
      lines: lines.map((l) => ({ ledger_id: l.ledger_id, debit: fromFils(l.credit), credit: fromFils(l.debit), narration: l.narration, analysis_ref: l.analysis_ref })),
    });
    db.run('UPDATE journals SET reversal_of=? WHERE id=?', id, r.id);
    db.run("UPDATE journals SET status='Reversed', reversed_by=? WHERE id=?", r.id, id);
    audit(db, ctx, 'reverse', 'journal', id, { reversal: r.number });
    return r;
  });
}

function deleteDraft(db, ctx, companyId, id) {
  const j = db.get('SELECT status FROM journals WHERE id=? AND company_id=?', id, companyId);
  if (!j) throw new AppError(404, 'Journal not found');
  if (j.status !== 'Draft') throw bad('Only drafts can be deleted');
  db.tx(() => { db.run('DELETE FROM journals WHERE id=?', id); audit(db, ctx, 'delete', 'journal', id); });
}

function get(db, companyId, id) {
  const j = db.get('SELECT * FROM journals WHERE id=? AND company_id=?', id, companyId);
  if (!j) throw new AppError(404, 'Journal not found');
  j.lines = db.all(`SELECT jl.*, l.code, l.name FROM journal_lines jl JOIN coa_ledgers l ON l.id=jl.ledger_id WHERE journal_id=? ORDER BY line_no`, id)
    .map((l) => ({ ...l, debit: fromFils(l.debit), credit: fromFils(l.credit) }));
  return j;
}

function list(db, companyId, { from, to, status } = {}) {
  const w = ['j.company_id=?']; const p = [companyId];
  if (from) { w.push('j.date>=?'); p.push(from); }
  if (to) { w.push('j.date<=?'); p.push(to); }
  if (status) { w.push('j.status=?'); p.push(status); }
  return db.all(`SELECT j.id, j.number, j.date, j.source, j.reference, j.narration, j.status, SUM(jl.debit) AS total
    FROM journals j LEFT JOIN journal_lines jl ON jl.journal_id=j.id WHERE ${w.join(' AND ')}
    GROUP BY j.id ORDER BY j.date DESC, j.id DESC`, ...p).map((r) => ({ ...r, total: fromFils(r.total || 0) }));
}

module.exports = { saveDraft, post, postJournal, reverse, deleteDraft, get, list };
