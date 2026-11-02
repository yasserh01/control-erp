'use strict';
const { fromFils, bad, isDate } = require('../lib');
const { ELEMENTS } = require('./coa');

// Posted + Reversed both count: a reversed journal and its reversal net to zero.
const POSTED = "j.status IN ('Posted','Reversed')";

function trialBalance(db, companyId, { from, to } = {}) {
  if (to && !isDate(to)) throw bad('Invalid date');
  const rows = db.all(`SELECT l.id, l.code, l.name, g.element, g.name AS group_name,
      COALESCE(SUM(CASE WHEN j.date < ? THEN jl.debit - jl.credit END),0) AS opening,
      COALESCE(SUM(CASE WHEN j.date >= ? THEN jl.debit END),0) AS dr,
      COALESCE(SUM(CASE WHEN j.date >= ? THEN jl.credit END),0) AS cr
    FROM coa_ledgers l JOIN coa_groups g ON g.id=l.group_id
    LEFT JOIN journal_lines jl ON jl.ledger_id=l.id
    LEFT JOIN journals j ON j.id=jl.journal_id AND ${POSTED} AND j.date <= ?
    WHERE l.company_id=? AND (j.id IS NOT NULL OR jl.id IS NULL)
    GROUP BY l.id ORDER BY l.code`, from || '0000-00-00', from || '0000-00-00', from || '0000-00-00', to || '9999-12-31', companyId);
  let td = 0, tc = 0;
  const lines = rows.filter((r) => r.opening || r.dr || r.cr).map((r) => {
    const closing = r.opening + r.dr - r.cr;
    const d = closing > 0 ? closing : 0, c = closing < 0 ? -closing : 0;
    td += d; tc += c;
    return { code: r.code, name: r.name, element: ELEMENTS[r.element - 1].name, group: r.group_name,
      opening: fromFils(r.opening), debit: fromFils(r.dr), credit: fromFils(r.cr), closing_dr: fromFils(d), closing_cr: fromFils(c) };
  });
  return { lines, total_dr: fromFils(td), total_cr: fromFils(tc), balanced: td === tc };
}

function ledgerStatement(db, companyId, ledgerId, { from, to } = {}) {
  const l = db.get('SELECT id, code, name FROM coa_ledgers WHERE id=? AND company_id=?', ledgerId, companyId);
  if (!l) throw bad('Account not found');
  const f = from || '0000-00-00', t = to || '9999-12-31';
  const ob = db.get(`SELECT COALESCE(SUM(jl.debit-jl.credit),0) AS b FROM journal_lines jl JOIN journals j ON j.id=jl.journal_id
    WHERE jl.ledger_id=? AND ${POSTED} AND j.date < ?`, ledgerId, f).b;
  let bal = ob;
  const rows = db.all(`SELECT j.id, j.date, j.number, j.reference, COALESCE(jl.narration, j.narration) AS narration, jl.debit, jl.credit
    FROM journal_lines jl JOIN journals j ON j.id=jl.journal_id
    WHERE jl.ledger_id=? AND ${POSTED} AND j.date BETWEEN ? AND ? ORDER BY j.date, j.id, jl.line_no`, ledgerId, f, t)
    .map((r) => { bal += r.debit - r.credit; return { ...r, debit: fromFils(r.debit), credit: fromFils(r.credit), balance: fromFils(bal) }; });
  return { account: l, opening: fromFils(ob), rows, closing: fromFils(bal) };
}

module.exports = { trialBalance, ledgerStatement };
