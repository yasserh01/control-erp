'use strict';
/*
 * End-to-end test of the desktop program (needs the electron and playwright-core packages).
 *   npm test                         (after npm install)
 *   ELECTRON_PATH=/path/to/electron node tests/smoke.test.js
 *   ELECTRON_PATH="C:/Program Files/.../Control ERP.exe" ELECTRON_PACKAGED=1 node tests/smoke.test.js
 * On Linux servers run it under xvfb-run.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
let electron;
try { ({ _electron: electron } = require('playwright-core')); } catch (_) { ({ _electron: electron } = require('playwright')); }
const { ErpStore } = require('../desktop/store');

const ROOT = path.join(__dirname, '..');
const EXE = process.env.ELECTRON_PATH || require('electron');
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'erp-e2e-'));
const NAME = 'Smoke Test Department ' + Date.now();
const SHOTS = process.env.SHOTS_DIR || '';

async function launch() {
  // ELECTRON_PACKAGED=1 tests an installed copy (the program folder holds resources/app).
  const args = process.env.ELECTRON_PACKAGED ? [] : [ROOT];
  if (process.platform === 'linux') args.unshift('--no-sandbox', '--disable-gpu');
  const app = await electron.launch({ executablePath: EXE, args, env: { ...process.env, CONTROL_ERP_DATA_DIR: DATA } });
  const page = await app.firstWindow();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.waitForLoadState('load');
  await page.waitForFunction(() => document.querySelector('#m') && document.querySelector('#m').children.length > 0);
  return { app, page, errors };
}

const step = (name) => console.log('  ok  ' + name);

if (!process.env.ELECTRON_PACKAGED && !fs.existsSync(path.join(ROOT, 'app', 'index.html'))) {
  console.error('smoke test: app/index.html is missing. Run "npm run prepare-app" first (npm test does this).');
  process.exit(1);
}

(async () => {
  // ---------- first run ----------
  let { app, page, errors } = await launch();
  const env = await page.evaluate(() => ({
    desktop: !!(window.erpDesktop && window.erpDesktop.isDesktop),
    shim: !(localStorage instanceof Storage),
    secure: window.isSecureContext,
    subtle: !!(window.crypto && crypto.subtle),
  }));
  assert.deepEqual(env, { desktop: true, shim: true, secure: true, subtle: true });
  step('ERP opens in the desktop window with the SQLite bridge');
  if (SHOTS) await page.screenshot({ path: path.join(SHOTS, '1-home.png') });

  // Create a department through the normal screen.
  await page.evaluate(() => { location.hash = '/md/departments'; });
  await page.getByRole('button', { name: '+ New' }).first().click();
  const dlg = page.locator('dialog[open]');
  await dlg.waitFor();
  const label = dlg.locator('label', { hasText: /^\s*Name/ }).first();
  const input = (await label.locator('input').count()) ? label.locator('input') : dlg.locator('#f1');
  await input.fill(NAME);
  if (SHOTS) await page.screenshot({ path: path.join(SHOTS, '2-new-department.png') });
  await dlg.getByRole('button', { name: /^Save/ }).first().click();
  await page.waitForFunction((n) => document.querySelector('#m').innerText.includes(n), NAME);
  step('a department created on screen appears in the list');
  if (SHOTS) await page.screenshot({ path: path.join(SHOTS, '3-department-list.png') });

  // Reload the page: data must come back from the data file.
  await page.reload();
  await page.waitForFunction(() => document.querySelector('#m') && document.querySelector('#m').children.length > 0);
  await page.evaluate(() => { location.hash = '/md/departments'; });
  await page.waitForFunction((n) => document.querySelector('#m').innerText.includes(n), NAME);
  step('data survives a screen refresh');

  // pdf.js now loads from the program folder (works offline).
  const pdf = await page.evaluate(async () => { try { const l = await bkLoadPdf(); return typeof l.getDocument; } catch (e) { return 'error: ' + e.message; } });
  assert.equal(pdf, 'function');
  step('PDF reader loads without the internet');

  // The user guide opens.
  await page.evaluate(() => gdOpen());
  await page.locator('#gdd[open]').waitFor();
  await page.evaluate(() => document.getElementById('gdd').close());
  step('user guide opens');

  // Desktop backup of the data file.
  const bk = await page.evaluate(() => window.erpDesktop.backupNow());
  assert.ok(fs.existsSync(bk), 'backup file exists');
  step('desktop backup written: ' + path.basename(bk));

  assert.deepEqual(errors, []);
  await app.close();

  // ---------- the data file itself ----------
  const s = new ErpStore(path.join(DATA, 'control-erp.db')).open();
  const n = s.db.prepare("SELECT COUNT(*) AS n FROM records WHERE collection='departments' AND data LIKE ?").get('%' + NAME + '%').n;
  const info = s.info();
  s.close();
  assert.equal(n, 1);
  step('the department is stored as one row in SQLite (' + info.records + ' records, ' + (info.size / 1024).toFixed(0) + ' KB file)');

  // ---------- second run ----------
  ({ app, page, errors } = await launch());
  await page.evaluate(() => { location.hash = '/md/departments'; });
  await page.waitForFunction((n) => document.querySelector('#m').innerText.includes(n), NAME);
  step('after closing and opening the program, the department is still there');
  assert.deepEqual(errors, []);
  await app.close();

  fs.rmSync(DATA, { recursive: true, force: true });
  console.log('smoke test passed');
})().catch((e) => { console.error('smoke test FAILED:', e); process.exit(1); });
