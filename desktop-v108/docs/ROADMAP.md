# Control ERP: roadmap and where each part fits

## Two lines of work in this repository

| Folder | What it is | Status |
|---|---|---|
| `erp/` | **The new platform.** Business rules run on a server: posting engine, chart of accounts, numbering, roles, `company_id` on every table, money stored in fils. It has its own new screens. It is built to grow into Stage 2 (office server) and Stage 3 (cloud). | v0.2.0: foundation, finance core (COA, JV, trial balance, ledger), 22 masters |
| `desktop-v108/` | **The complete v108 ERP**, with all modules, packaged as a Windows program. Its data is kept in a SQLite file. | v1.0.0: ready to install |

Can the v108 HTML become a real system? Yes. Today its screens, accounting rules and data all run inside the page.
`desktop-v108/` makes it a proper Windows program now, with no rewrite. `erp/` moves the rules to a server, which multi-user and cloud use require.

Manager.io, the program sent as a reference, is built the same way as both. Its Windows package holds an Electron window and a local server (`ManagerServer`) that saves to SQLite (`e_sqlite3.dll`).

### Suggested way forward (your decision)

1. **Use `desktop-v108` now** for day-to-day work on one PC. It has every module of v108 and none of the browser's 5 MB storage limit.
2. **Keep building `erp/`** module by module (purchase, sales, inventory, payroll…) as the Stage 2 and Stage 3 platform.
3. **Add an importer to `erp/`** that reads the desktop data file. Its records keep the v108 field names, which `erp/`'s field registry also uses. Live data can then move across module by module, as each module is ready.

---

## Stage 1: one PC, local data

### desktop-v108 ✅ v1.0.0
- [x] Setup.exe: installs per user without admin rights, adds Start-menu and desktop shortcuts, an Add/Remove Programs entry and an uninstaller
- [x] One SQLite file, `Documents\Control ERP\control-erp.db`, with one row per record and a version and time on each row
- [x] Transactional saves, and the file is locked against a second program or PC
- [x] Daily automatic backup (30 days kept), Back Up Now, Restore with a safety copy, Change Data Location, Check Data File
- [x] Works offline (pdf.js included), secure context, web links open in the browser, copy/paste menu
- [x] Moving data from the browser version through the ERP's own Backup → Restore (tested)
- [x] Tests: data store (including a 60,000-record company) and a full end-to-end test
- [x] Has its own name and app ID, so it installs next to the `erp/` desktop edition without conflict

**Still open**
- [ ] Code-signing certificate, so Windows SmartScreen does not show "Unknown publisher". Options are an OV/EV certificate or Azure Trusted Signing.
- [ ] Automatic updates (electron-updater with GitHub Releases), which need code signing first
- [ ] Commit `package-lock.json` after the first `npm install`

### erp/ (v0.2.0 → next)
See `erp/README.md`. The next modules follow the v108 order: purchase cycle (PR → LPO → GRN → invoice → payment), then sales, inventory, payroll, assets and projects.

---

## Stage 2: several users on the office network

One office PC or small server holds the data, and staff PCs connect to it (like Manager Server).

- **On `erp/` (recommended):** `node server/run.js` already starts a stand-alone server. What remains is a Windows service, HTTPS, and a "connect to server" option in the desktop app. Because the rules already run on the server, users cannot overwrite each other's work, and numbering and posting stay correct.
- **Stop-gap on `desktop-v108`:** the data store already saves per record with versions, so a small server could accept changed records and refuse conflicting ones. Its rules still run in each user's screen, though, so this does not carry over to Stage 3.

## Stage 3: cloud service for many companies (SaaS business)

- Managed PostgreSQL, hosted in a UAE region. `erp/server/db.js` is the only file the PostgreSQL adapter replaces.
- Each customer company is isolated: `company_id` is already on every table, or each customer can get its own database.
- Sign-up, two-factor sign-in, password reset, backups with point-in-time restore, monitoring.
- Subscription plans per user or module, with a payment provider that supports AED.
- UAE data-protection law (privacy policy, data-processing agreement), terms of service, FTA record-keeping, and e-invoicing through an Accredited Service Provider. Check the FTA's current timetable when you start.
- Trade licence activity for software/IT services, support process, onboarding (the ERP User Guide already exists) and pricing.
