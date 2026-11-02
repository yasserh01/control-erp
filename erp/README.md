# Control ERP

One codebase, three editions:

| Edition | How it runs | Database |
|---|---|---|
| **Desktop** (Stage 1 – now) | Windows app (Electron) with a private local server | SQLite file in `%APPDATA%\Control ERP\data\erp.db` |
| **Server** (Stage 2) | `node server/run.js` on an office machine; users open it in a browser | SQLite now → PostgreSQL adapter |
| **Cloud** (Stage 3) | Same server hosted, many companies and users | PostgreSQL with company isolation |

## Structure

```
server/            all business logic (the screens never calculate anything)
  db.js            database adapter (SQLite today; PostgreSQL later replaces only this)
  migrations.js    versioned schema — every business table has company_id
  lib.js           money in fils (no rounding errors), passwords, roles
  services/        core (companies, users, sessions, numbering, audit), coa, journal, reports
  app.js           HTTP API + serves the web UI
  run.js           stand-alone server (Stage 2 seed)
web/               screens (HTML/CSS/JS) — tiles home, Finance, Reports, System
desktop/main.js    Electron window, single instance, daily auto-backup (keeps 14)
tests/             automated tests (npm test)
.github/workflows  builds ControlERP-Setup.exe on GitHub automatically
```

## Built so far (v0.1.0 — foundation)

- First-run setup: administrator + first company, starter UAE contracting chart of accounts
- Login, sessions, roles (admin / accountant / clerk / viewer), access per company
- Multiple companies with a company switcher
- Chart of accounts: 5 elements → groups → ledgers, **codes automatic** (1 → 101 → 101001), control type (AP/AR/VAT/Bank/Cash), analysis type
- Journal vouchers: draft → post (JV-000001 numbering) → reverse; posted entries cannot be edited; balance check; period lock
- `postJournal()` engine that every future module (purchase, sales, payroll, assets) will use
- Trial balance and ledger statement, CSV export, print
- Audit log of every change; full database backup download

## Added in v0.2.0 — Master data and controls

- Field registry taken from the v108 prototype (`server/registry/modules.json`): every screen's fields, types, choices and links
- One generic master-data engine serving 22 masters: departments, designations, employees, customers, suppliers, service items, items, categories, units, tax codes, analysis master, employee expenses, vehicle expense categories, job heads, cost centres, currencies, branches, stores, bank accounts, cash boxes, petty cash holders, payment terms
- Automatic codes (EMP-0001, SUP-0001 …), validation of numbers, dates, choices and links; records in use cannot be deleted
- Salary and bank fields masked (••••) and protected for roles without salary access
- Account Mapping: the prototype's 25 posting keys, pre-mapped to the starter chart
- Document Numbering for all 91 document types (prefix and next number; never goes backwards)

## Run it

Requires Node.js 22.13 or newer.

```bash
npm test                 # run automated tests
npm run server           # open http://127.0.0.1:8080
npm install              # once, downloads Electron
npm run desktop          # run as desktop app
npm run dist:win         # build release/ControlERP-Setup-0.1.0.exe (on Windows)
```

Or push a tag such as `v0.1.0` to GitHub and the **Build Windows installer** workflow produces the Setup.exe under the run's *Artifacts*.

## Rules for every new module

1. Business logic goes in `server/services/`, never in `web/`.
2. Every table gets `company_id`; every query filters by it.
3. Amounts are stored as integer fils; convert with `toFils` / `fromFils`.
4. Accounting goes through `journal.postJournal()` inside `db.tx()`.
5. Schema changes are new migrations — never edit a released one.
6. Add tests for every posting rule.
