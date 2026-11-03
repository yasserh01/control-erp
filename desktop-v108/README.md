# Control ERP Desktop (`desktop-v108/`)

The complete v108 ERP (`ERP_System.html`, all modules) as a normal Windows program. You install it with **Setup.exe**, and it keeps all company data in **one SQLite file on the PC**.
The screens are unchanged. Only the place where the data is saved has changed: the browser's storage is replaced by a SQLite file.

The new server-based platform lives in `../erp/`. [docs/ROADMAP.md](docs/ROADMAP.md) explains how the two fit together and the plan for Stages 1, 2 and 3.

## How it works

```
┌────────────── Control ERP Desktop.exe (Electron 45) ───────────┐
│                                                                 │
│  ERP screens (erp/ERP_System.html, unchanged)                   │
│      │  localStorage.setItem('erp', …)   ← the ERP's own saves   │
│      ▼                                                          │
│  desktop/bridge.js   replaces localStorage in the page           │
│      │  (secure IPC through desktop/preload.js)                 │
│      ▼                                                          │
│  desktop/store.js    writes only the records that changed        │
│      ▼                                                          │
│  Documents\Control ERP\control-erp.db   (SQLite, built into     │
│  Documents\Control ERP\Backups\          Electron's Node.js)    │
└─────────────────────────────────────────────────────────────────┘
```

* Every list in the ERP (suppliers, journals, employees…) is stored with **one row per record** in the `records` table. Each row has a version number and an update time, which Stage 2 (multi-user) builds on.
* Saves are transactional, in WAL mode with `synchronous=FULL`. A save that fails changes nothing.
* The data file is **locked** while the program is open, so two programs or two PCs cannot write to it at the same time.
* There is no browser storage limit any more. In the browser, `localStorage` stops at about 5 MB.
* pdf.js is included, so PDF import works without the internet.

## Using it

| Task | Where |
|---|---|
| Data file | `Documents\Control ERP\control-erp.db` (File → Open Data Folder) |
| Back up now | File → Back Up Now (Ctrl+B) |
| Automatic backups | one copy per day, the last 30 days, in `Documents\Control ERP\Backups` |
| Restore | File → Restore from Backup… (a safety copy is made first) |
| Move the data, e.g. to D:\ | File → Change Data Location… |
| Health check | File → Check Data File |
| About / file details | Help → About Control ERP Desktop |

Uninstalling or upgrading never deletes the data folder. The program has its own name and app ID (`ae.control.erp.desktop`), so it installs next to the `erp/` desktop edition without conflict.

### Moving your data from the browser version

1. In the browser ERP, go to **Users & Settings → Data & Backup → Create Backup** and download the `.zip` file.
2. In Control ERP Desktop, open the same screen, choose **Import Backup**, select the `.zip`, tick the confirmations, and click **Restore**.

This path was tested: data created in the browser edition opened in the desktop edition and was still there after a restart.

## Updating the ERP screens

1. Replace `erp/ERP_System.html` with the new version, keeping the file name.
2. Raise `"version"` in `package.json`, for example `1.0.1`.
3. Commit and push. GitHub Actions builds the new `Control-ERP-Desktop-Setup-1.0.1.exe` (see below).

Running the new Setup.exe over the old one updates the program and keeps the data.

## Building

**On GitHub (recommended).** Every push that changes `desktop-v108/` runs `.github/workflows/build-desktop-v108.yml` on a Windows machine. It tests the program, builds `Control-ERP-Desktop-Setup-<version>.exe`, and attaches it under **Actions → the run → Artifacts**. If you push a tag such as `desktop-v1.0.1`, the installer is also published as a GitHub Release. Tags starting with `v` stay reserved for `erp/`.

**On a Windows PC** with [Node.js 22 LTS](https://nodejs.org) installed:

```bat
cd desktop-v108
npm install
npm start          :: run the program from the source
npm test           :: data-store tests + full end-to-end test
npm run dist       :: build dist\Control-ERP-Desktop-Setup-<version>.exe
```

**Offline (Linux or WSL), without npm:** `scripts/build-win-installer.sh` with the NSIS script in `installer/`. The first 1.0.0 installer was built this way.

## Project layout

```
erp/ERP_System.html        your ERP (the screens), kept unchanged
desktop/main.js            program window, menu, backups, data location
desktop/preload.js         the only bridge between page and program
desktop/bridge.js          replaces localStorage in the page
desktop/store.js           SQLite data store (no Electron code; reused by the Stage 2 server)
scripts/prepare-app.js     erp/ERP_System.html → app/index.html (adds the bridge, local pdf.js)
app/vendor/pdfjs/          pdf.js 3.11.174 (Apache-2.0)
build/                     icons and installer images
installer/control-erp.nsi  offline installer script
tests/                     store.test.js, smoke.test.js
docs/ROADMAP.md            stages 1 → 3
```

## Data file layout (schema version 1)

| table | content |
|---|---|
| `records` | `collection, id, seq, data (JSON), created_at, updated_at, version`: one row per ERP record |
| `collections` | one row per top-level key of the ERP data, either a list of records or a single value |
| `kv` | small screen settings (classic/new view, print options, backup settings) |
| `meta` | schema version, creation date, last opened |

You can open the file with any SQLite tool, for example DB Browser for SQLite, while the program is closed:

```sql
SELECT json_extract(data,'$.Name') AS supplier, json_extract(data,'$.TRN') AS trn
FROM records WHERE collection = 'suppliers' ORDER BY seq;
```
