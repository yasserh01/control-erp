'use strict';
// Versioned schema. Never edit a released migration — add a new one at the end.
// Money is stored as INTEGER fils (1 AED = 100 fils) to avoid rounding errors.
// Every business table carries company_id (multi-company now, multi-tenant cloud later).

const migrations = [
  {
    id: 1,
    name: 'core',
    sql: `
CREATE TABLE companies (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  name_ar TEXT,
  trn TEXT,
  address TEXT,
  phone TEXT,
  email TEXT,
  currency TEXT NOT NULL DEFAULT 'AED',
  fy_start_month INTEGER NOT NULL DEFAULT 1,
  lock_date TEXT,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE COLLATE NOCASE,
  full_name TEXT NOT NULL,
  email TEXT,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'viewer',
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE user_companies (
  user_id INTEGER NOT NULL REFERENCES users(id),
  company_id INTEGER NOT NULL REFERENCES companies(id),
  PRIMARY KEY (user_id, company_id)
);

CREATE TABLE sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT NOT NULL
);

CREATE TABLE doc_sequences (
  company_id INTEGER NOT NULL REFERENCES companies(id),
  doc_type TEXT NOT NULL,
  prefix TEXT NOT NULL,
  next_no INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (company_id, doc_type)
);

CREATE TABLE audit_log (
  id INTEGER PRIMARY KEY,
  at TEXT NOT NULL DEFAULT (datetime('now')),
  user_id INTEGER,
  company_id INTEGER,
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  entity_id INTEGER,
  details TEXT
);
CREATE INDEX audit_company ON audit_log(company_id, at);

-- Chart of accounts: 5 fixed elements -> user groups -> user ledgers (codes automatic)
CREATE TABLE coa_groups (
  id INTEGER PRIMARY KEY,
  company_id INTEGER NOT NULL REFERENCES companies(id),
  element INTEGER NOT NULL CHECK (element BETWEEN 1 AND 5),
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  name_ar TEXT,
  UNIQUE (company_id, code)
);

CREATE TABLE coa_ledgers (
  id INTEGER PRIMARY KEY,
  company_id INTEGER NOT NULL REFERENCES companies(id),
  group_id INTEGER NOT NULL REFERENCES coa_groups(id),
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  name_ar TEXT,
  control_type TEXT NOT NULL DEFAULT 'none',   -- none | AP | AR | VAT_IN | VAT_OUT | BANK | CASH
  analysis_type TEXT NOT NULL DEFAULT 'None',  -- None | Employee | Vehicle | Project | Asset | Supplier | Customer | Custom
  active INTEGER NOT NULL DEFAULT 1,
  UNIQUE (company_id, code)
);

-- Journal: drafts are editable; posted entries are immutable (corrected by reversal)
CREATE TABLE journals (
  id INTEGER PRIMARY KEY,
  company_id INTEGER NOT NULL REFERENCES companies(id),
  number TEXT,
  date TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'JV',
  reference TEXT,
  narration TEXT,
  status TEXT NOT NULL DEFAULT 'Draft',        -- Draft | Posted | Reversed
  reversal_of INTEGER REFERENCES journals(id),
  reversed_by INTEGER REFERENCES journals(id),
  created_by INTEGER REFERENCES users(id),
  posted_by INTEGER REFERENCES users(id),
  posted_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (company_id, number)
);
CREATE INDEX journals_company_date ON journals(company_id, date);

CREATE TABLE journal_lines (
  id INTEGER PRIMARY KEY,
  journal_id INTEGER NOT NULL REFERENCES journals(id) ON DELETE CASCADE,
  line_no INTEGER NOT NULL,
  ledger_id INTEGER NOT NULL REFERENCES coa_ledgers(id),
  debit INTEGER NOT NULL DEFAULT 0 CHECK (debit >= 0),
  credit INTEGER NOT NULL DEFAULT 0 CHECK (credit >= 0),
  narration TEXT,
  analysis_ref TEXT
);
CREATE INDEX jl_ledger ON journal_lines(ledger_id);
`,
  },
  {
    id: 2,
    name: 'master-data-and-mapping',
    sql: `
-- Generic master records (departments, suppliers, items, employees ...). Field list comes
-- from server/registry (same fields as the v108 prototype). Links to other records are ids.
CREATE TABLE records (
  id INTEGER PRIMARY KEY,
  company_id INTEGER NOT NULL REFERENCES companies(id),
  section TEXT NOT NULL,
  code TEXT NOT NULL,
  name TEXT,
  status TEXT,
  data TEXT NOT NULL DEFAULT '{}',
  created_by INTEGER REFERENCES users(id),
  updated_by INTEGER REFERENCES users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (company_id, section, code)
);
CREATE INDEX records_section ON records(company_id, section, name);

-- Account Mapping: posting key -> ledger, per company
CREATE TABLE account_map (
  company_id INTEGER NOT NULL REFERENCES companies(id),
  key TEXT NOT NULL,
  ledger_id INTEGER REFERENCES coa_ledgers(id),
  PRIMARY KEY (company_id, key)
);
`,
  },
];

function migrate(db) {
  db.exec('CREATE TABLE IF NOT EXISTS schema_migrations (id INTEGER PRIMARY KEY, name TEXT, applied_at TEXT DEFAULT (datetime(\'now\')))');
  const done = new Set(db.all('SELECT id FROM schema_migrations').map((r) => r.id));
  for (const m of migrations) {
    if (done.has(m.id)) continue;
    db.tx(() => {
      db.exec(m.sql);
      db.run('INSERT INTO schema_migrations (id, name) VALUES (?, ?)', m.id, m.name);
    });
  }
}

module.exports = { migrate, migrations };
