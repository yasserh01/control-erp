'use strict';
// Account Mapping: each posting key used by the posting rules points to one ledger per company.
// Keys and meaning are the same as Finance > Account Mapping in the v108 prototype.
const { bad } = require('../lib');
const { audit } = require('./core');

const KEYS = [
  ['Inventory/Expense', 'Inventory - Materials', 'Goods received into stock or charged to expense'],
  ['GRN Payable', 'GRN Clearing (Goods Received Not Invoiced)', 'Goods received, supplier invoice not yet posted'],
  ['Input VAT', 'VAT Input (Recoverable)', 'VAT on purchases'],
  ['Output VAT', 'VAT Output (Payable)', 'VAT on sales'],
  ['Accounts Payable', 'Accounts Payable', 'Supplier control account'],
  ['Accounts Receivable', 'Accounts Receivable', 'Customer control account'],
  ['Revenue', 'Sales - Trading', 'Default sales revenue'],
  ['Bank / Cash', 'Bank - Current Account', 'Default bank or cash account'],
  ['Fixed Assets', 'Plant & Machinery', 'Default asset cost account'],
  ['Accumulated Depreciation', 'Accumulated Depreciation', 'Default accumulated depreciation'],
  ['Depreciation Expense', 'Depreciation Expense', 'Default depreciation expense'],
  ['Disposal Gain/Loss', 'Gain / Loss on Disposal of Assets', 'Result of asset disposals'],
  ['Project Cost / COGS', 'Cost of Goods Sold - Trading', 'Cost of goods sold or consumed'],
  ['Employee Loans', 'Employee Advances', 'Loans and advances to employees'],
  ['FX Gain/Loss', 'Foreign Exchange Gain / Loss', 'Exchange differences'],
  ['Supplier Advances', 'Advances to Suppliers', 'Payments made before the invoice'],
  ['Customer Advances', 'Advances from Customers', 'Receipts before the invoice'],
  ['Retained Earnings', 'Retained Earnings', 'Year-end closing'],
  ['EOSB Provision', 'Provision for End of Service Benefits (EOSB)', 'Gratuity provision'],
  ['GDN Receivable', 'GDN Receivable (Delivered, Not Invoiced)', 'Goods delivered, invoice not yet posted'],
  ['Sales Returns', 'Sales Returns', 'Goods returned by customers'],
  ['Credit Loss Allowance', 'Allowance for Credit Losses', 'Expected credit loss allowance'],
  ['Credit Loss Expense', 'Credit Loss Expense', 'Expected credit loss charge'],
  ['PDC Receivable', 'PDC Receivable', 'Post-dated cheques received'],
  ['Sales Price Adjustment', 'Sales Price Adjustments', 'Price differences on returns'],
];

// Point each key at the starter ledger of the same name (when present and not yet mapped).
function seedDefaults(db, companyId) {
  for (const [key, ledgerName] of KEYS) {
    const l = db.get('SELECT id FROM coa_ledgers WHERE company_id=? AND name=?', companyId, ledgerName);
    db.run('INSERT OR IGNORE INTO account_map (company_id, key, ledger_id) VALUES (?,?,?)', companyId, key, l ? l.id : null);
  }
}

function list(db, companyId) {
  const m = Object.fromEntries(db.all('SELECT key, ledger_id FROM account_map WHERE company_id=?', companyId).map((r) => [r.key, r.ledger_id]));
  return KEYS.map(([key, , meaning]) => {
    const id = m[key] ?? null;
    const l = id ? db.get('SELECT code, name FROM coa_ledgers WHERE id=?', id) : null;
    return { key, meaning, ledger_id: id, ledger: l ? `${l.code} ${l.name}` : null };
  });
}

function set(db, ctx, companyId, map) {
  db.tx(() => {
    for (const [key, ledgerId] of Object.entries(map || {})) {
      if (!KEYS.some((k) => k[0] === key)) throw bad(`Unknown posting key: ${key}`);
      const id = ledgerId ? Number(ledgerId) : null;
      if (id && !db.get('SELECT 1 AS x FROM coa_ledgers WHERE id=? AND company_id=? AND active=1', id, companyId)) throw bad(`${key}: choose a valid active ledger`);
      db.run('INSERT INTO account_map (company_id, key, ledger_id) VALUES (?,?,?) ON CONFLICT(company_id, key) DO UPDATE SET ledger_id=excluded.ledger_id', companyId, key, id);
    }
    audit(db, ctx, 'update', 'account_map', null, map);
  });
}

// Used by posting rules: the ledger id behind a key, or a clear error.
function resolve(db, companyId, key) {
  const r = db.get('SELECT ledger_id FROM account_map WHERE company_id=? AND key=?', companyId, key);
  if (!r || !r.ledger_id) throw bad(`Map an account for "${key}" in System > Account Mapping`);
  return r.ledger_id;
}

module.exports = { KEYS, seedDefaults, list, set, resolve };
