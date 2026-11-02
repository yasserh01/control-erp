'use strict';
const { AppError, bad } = require('../lib');
const { audit } = require('./core');

// Fixed top level. Codes: element digit, group = element + 2 digits (101), ledger = group + 3 digits (101001).
const ELEMENTS = [
  { id: 1, name: 'Assets', name_ar: 'الأصول', nature: 'Dr' },
  { id: 2, name: 'Liabilities', name_ar: 'الالتزامات', nature: 'Cr' },
  { id: 3, name: 'Equity', name_ar: 'حقوق الملكية', nature: 'Cr' },
  { id: 4, name: 'Income', name_ar: 'الإيرادات', nature: 'Cr' },
  { id: 5, name: 'Expenses', name_ar: 'المصروفات', nature: 'Dr' },
];
const CONTROL_TYPES = ['none', 'AP', 'AR', 'VAT_IN', 'VAT_OUT', 'BANK', 'CASH'];
const ANALYSIS_TYPES = ['None', 'Employee', 'Vehicle', 'Project', 'Asset', 'Supplier', 'Customer', 'Custom'];

// Starter UAE engineering & contracting chart (editable after loading)
const STARTER = [
  [1, 'Non-Current Assets', [
    ['Plant & Machinery'], ['Motor Vehicles'], ['Furniture & Office Equipment'], ['Computers & IT Equipment'],
    ['Accumulated Depreciation'], ['Capital Work in Progress (CIP)'],
  ]],
  [1, 'Current Assets', [
    ['Cash in Hand', 'CASH'], ['Petty Cash', 'CASH'], ['Bank - Current Account', 'BANK'],
    ['Accounts Receivable', 'AR', 'Customer'], ['Retention Receivable', 'none', 'Project'],
    ['Inventory - Materials'], ['Work in Progress - Projects', 'none', 'Project'],
    ['Advances to Suppliers', 'none', 'Supplier'], ['Employee Advances', 'none', 'Employee'],
    ['Prepaid Expenses'], ['Security Deposits'], ['VAT Input (Recoverable)', 'VAT_IN'], ['GRN Clearing (Goods Received Not Invoiced)'],
    ['GDN Receivable (Delivered, Not Invoiced)', 'none', 'Customer'], ['Unbilled Receivables', 'none', 'Project'], ['PDC Receivable', 'none', 'Customer'], ['Allowance for Credit Losses'],
  ]],
  [2, 'Non-Current Liabilities', [['Provision for End of Service Benefits (EOSB)', 'none', 'Employee'], ['Long-term Loans']]],
  [2, 'Current Liabilities', [
    ['Accounts Payable', 'AP', 'Supplier'], ['Retention Payable', 'none', 'Supplier'], ['Accrued Expenses'],
    ['Salaries Payable', 'none', 'Employee'], ['Provision for Leave Salary', 'none', 'Employee'], ['Provision for Air Tickets', 'none', 'Employee'],
    ['Advances from Customers', 'none', 'Customer'], ['VAT Output (Payable)', 'VAT_OUT'], ['VAT Control / Settlement'], ['Corporate Tax Payable'],
  ]],
  [3, 'Capital & Reserves', [["Share Capital"], ["Partners' Current Accounts"], ['Retained Earnings'], ['Statutory Reserve']]],
  [4, 'Operating Revenue', [['Contract Revenue', 'none', 'Project'], ['Sales - Trading'], ['Service Revenue'], ['Variation Orders Revenue', 'none', 'Project'], ['Sales Returns'], ['Sales Price Adjustments']]],
  [4, 'Other Income', [['Other Income'], ['Foreign Exchange Gain / Loss'], ['Gain / Loss on Disposal of Assets', 'none', 'Asset']]],
  [5, 'Direct Costs', [
    ['Materials Cost', 'none', 'Project'], ['Subcontractor Costs', 'none', 'Project'], ['Direct Labour Cost', 'none', 'Project'],
    ['Equipment Hire', 'none', 'Project'], ['Cost of Goods Sold - Trading'],
  ]],
  [5, 'Staff Costs', [['Salaries & Wages', 'none', 'Employee'], ['Overtime', 'none', 'Employee'], ['EOSB Expense', 'none', 'Employee'], ['Leave Salary Expense', 'none', 'Employee'], ['Air Ticket Expense', 'none', 'Employee'], ['Visa & Labour Card Costs', 'none', 'Employee'], ['Medical Insurance', 'none', 'Employee']]],
  [5, 'General & Administrative', [['Rent'], ['Utilities'], ['Telephone & Internet'], ['Vehicle Running Expenses', 'none', 'Vehicle'], ['Fuel', 'none', 'Vehicle'], ['Printing & Stationery'], ['Professional Fees'], ['Bank Charges'], ['Depreciation Expense', 'none', 'Asset'], ['Trade Licence & Government Fees'], ['Credit Loss Expense', 'none', 'Customer']]],
];

function nextGroupCode(db, companyId, element) {
  const r = db.get("SELECT MAX(CAST(code AS INTEGER)) AS m FROM coa_groups WHERE company_id=? AND element=?", companyId, element);
  const n = r?.m ? (r.m % 100) + 1 : 1;
  if (n > 99) throw bad('Too many groups under this element');
  return `${element}${String(n).padStart(2, '0')}`;
}
function nextLedgerCode(db, group) {
  const r = db.get("SELECT MAX(CAST(code AS INTEGER)) AS m FROM coa_ledgers WHERE group_id=?", group.id);
  const n = r?.m ? (r.m % 1000) + 1 : 1;
  if (n > 999) throw bad('Too many ledgers in this group');
  return `${group.code}${String(n).padStart(3, '0')}`;
}

function seedStarterCoa(db, companyId) {
  db.tx(() => {
    for (const [el, gname, ledgers] of STARTER) {
      const g = createGroup(db, null, companyId, { element: el, name: gname }, true);
      for (const [name, control = 'none', analysis = 'None'] of ledgers) {
        createLedger(db, null, companyId, { group_id: g.id, name, control_type: control, analysis_type: analysis }, true);
      }
    }
    require('./mapping').seedDefaults(db, companyId);
  });
}

function createGroup(db, ctx, companyId, g, silent) {
  const element = Number(g.element);
  if (!ELEMENTS.some((e) => e.id === element)) throw bad('Choose a main element (Assets, Liabilities, Equity, Income, Expenses)');
  if (!g.name?.trim()) throw bad('Group name is required');
  return db.tx(() => {
    const code = nextGroupCode(db, companyId, element);
    const r = db.run('INSERT INTO coa_groups (company_id, element, code, name, name_ar) VALUES (?,?,?,?,?)', companyId, element, code, g.name.trim(), g.name_ar || null);
    if (!silent) audit(db, ctx, 'create', 'coa_group', r.id, { code, name: g.name });
    return { id: r.id, code };
  });
}

function updateGroup(db, ctx, companyId, id, g) {
  const cur = db.get('SELECT * FROM coa_groups WHERE id=? AND company_id=?', id, companyId);
  if (!cur) throw new AppError(404, 'Group not found');
  if (!g.name?.trim()) throw bad('Group name is required');
  db.run('UPDATE coa_groups SET name=?, name_ar=? WHERE id=?', g.name.trim(), g.name_ar || null, id);
  audit(db, ctx, 'update', 'coa_group', id, g);
}

function createLedger(db, ctx, companyId, l, silent) {
  const group = db.get('SELECT * FROM coa_groups WHERE id=? AND company_id=?', Number(l.group_id), companyId);
  if (!group) throw bad('Choose a valid group');
  if (!l.name?.trim()) throw bad('Ledger name is required');
  const control = l.control_type || 'none';
  const analysis = l.analysis_type || 'None';
  if (!CONTROL_TYPES.includes(control)) throw bad('Invalid control type');
  if (!ANALYSIS_TYPES.includes(analysis)) throw bad('Invalid analysis type');
  return db.tx(() => {
    const code = nextLedgerCode(db, group);
    const r = db.run('INSERT INTO coa_ledgers (company_id, group_id, code, name, name_ar, control_type, analysis_type) VALUES (?,?,?,?,?,?,?)',
      companyId, group.id, code, l.name.trim(), l.name_ar || null, control, analysis);
    if (!silent) audit(db, ctx, 'create', 'coa_ledger', r.id, { code, name: l.name });
    return { id: r.id, code };
  });
}

function updateLedger(db, ctx, companyId, id, l) {
  const cur = db.get('SELECT * FROM coa_ledgers WHERE id=? AND company_id=?', id, companyId);
  if (!cur) throw new AppError(404, 'Ledger not found');
  const used = db.get('SELECT 1 AS x FROM journal_lines jl JOIN journals j ON j.id=jl.journal_id WHERE jl.ledger_id=? AND j.status<>\'Draft\' LIMIT 1', id);
  const control = l.control_type ?? cur.control_type;
  if (!CONTROL_TYPES.includes(control)) throw bad('Invalid control type');
  const analysis = l.analysis_type ?? cur.analysis_type;
  if (!ANALYSIS_TYPES.includes(analysis)) throw bad('Invalid analysis type');
  if (used && control !== cur.control_type) throw bad('Control type cannot change after postings exist');
  db.run('UPDATE coa_ledgers SET name=?, name_ar=?, control_type=?, analysis_type=?, active=? WHERE id=?',
    (l.name ?? cur.name).trim(), l.name_ar ?? cur.name_ar, control, analysis, l.active === 0 ? 0 : 1, id);
  audit(db, ctx, 'update', 'coa_ledger', id, l);
}

function tree(db, companyId) {
  const groups = db.all('SELECT * FROM coa_groups WHERE company_id=? ORDER BY code', companyId);
  const ledgers = db.all('SELECT * FROM coa_ledgers WHERE company_id=? ORDER BY code', companyId);
  return ELEMENTS.map((e) => ({
    ...e,
    groups: groups.filter((g) => g.element === e.id).map((g) => ({ ...g, ledgers: ledgers.filter((l) => l.group_id === g.id) })),
  }));
}

module.exports = { ELEMENTS, CONTROL_TYPES, ANALYSIS_TYPES, seedStarterCoa, createGroup, updateGroup, createLedger, updateLedger, tree };
