'use strict';
/*
 * Control ERP - desktop main process (Stage 1: single PC, local SQLite file)
 */
const { app, BrowserWindow, Menu, dialog, ipcMain, protocol, shell, session, nativeTheme } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const { ErpStore, StoreLockedError, isErpDataFile } = require('./store');

const APP_NAME = 'Control ERP Desktop';
const DATA_FOLDER = 'Control ERP'; // Documents\Control ERP
const DB_NAME = 'control-erp.db';
const KEEP_AUTO_BACKUPS = 30;
const SCHEME = 'app';
const HOST = 'erp';
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.wasm': 'application/wasm', '.map': 'application/json',
};

// Own settings folder, so this program can sit next to other Control ERP editions.
app.setName(APP_NAME);
app.setPath('userData', path.join(app.getPath('appData'), APP_NAME));
if (process.platform === 'win32') app.setAppUserModelId('ae.control.erp.desktop');

// The ERP is served from app://erp/ so storage, crypto and workers behave as on a secure site.
protocol.registerSchemesAsPrivileged([
  { scheme: SCHEME, privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } },
]);

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

const APP_DIR = path.join(__dirname, '..', 'app');
const ICON = path.join(__dirname, '..', 'build', process.platform === 'win32' ? 'icon.ico' : 'icon.png');

let mainWindow = null;
let store = null;
let config = null;
let closing = false;
let savesAtLastBackup = 0;

/* ---------------- settings ---------------- */

const configFile = () => path.join(app.getPath('userData'), 'config.json');

function loadConfig() {
  let c = {};
  try { c = JSON.parse(fs.readFileSync(configFile(), 'utf8')) || {}; } catch (_) {}
  const envDir = process.env.CONTROL_ERP_DATA_DIR;
  if (envDir) c.dataDir = envDir;
  if (!c.dataDir) c.dataDir = path.join(app.getPath('documents'), DATA_FOLDER);
  return c;
}

function saveConfig() {
  try {
    fs.mkdirSync(path.dirname(configFile()), { recursive: true });
    const c = { ...config };
    if (process.env.CONTROL_ERP_DATA_DIR) delete c.dataDir;
    fs.writeFileSync(configFile(), JSON.stringify(c, null, 2));
  } catch (e) { console.error('config', e); }
}

const dataFile = () => path.join(config.dataDir, DB_NAME);
const backupsDir = () => path.join(config.dataDir, 'Backups');

/* ---------------- data store ---------------- */

function openStore() {
  store = new ErpStore(dataFile(), {
    appVersion: app.getVersion(),
    onError: (e) => {
      console.error('[store]', e);
      if (mainWindow && !mainWindow.isDestroyed()) {
        dialog.showMessageBox(mainWindow, {
          type: 'error', title: APP_NAME,
          message: 'Your last change could not be saved to the data file.',
          detail: String((e && e.message) || e),
        });
      }
    },
  });
  store.open();
}

function stamp(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + '_' + p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds());
}

function makeBackup(kind) {
  if (!store) return null;
  // One automatic copy per day (the last one of the day wins); manual copies keep the time.
  const name = kind === 'auto' ? stamp().slice(0, 10) : stamp();
  const file = path.join(backupsDir(), 'control-erp_' + name + '_' + kind + '.db');
  store.backupTo(file);
  savesAtLastBackup = store.saveCount;
  config.lastBackupAt = new Date().toISOString();
  saveConfig();
  if (kind === 'auto') pruneAutoBackups();
  return file;
}

function pruneAutoBackups() {
  try {
    const list = fs.readdirSync(backupsDir()).filter((f) => /_auto\.db$/.test(f)).sort();
    while (list.length > KEEP_AUTO_BACKUPS) fs.rmSync(path.join(backupsDir(), list.shift()), { force: true });
  } catch (_) {}
}

function dailyBackupDue() {
  const t = config.lastBackupAt ? Date.parse(config.lastBackupAt) : 0;
  return !t || Date.now() - t > 20 * 3600 * 1000;
}

/* ---------------- IPC used by the page ---------------- */

ipcMain.on('store:loadAll', (e) => {
  if (!store) { e.returnValue = { ok: false, error: 'The data file is closed.' }; return; }
  try { e.returnValue = { ok: true, data: store.loadAll() }; } catch (err) { e.returnValue = { ok: false, error: String(err && err.message) }; }
});
ipcMain.on('store:set', (_e, key, value) => {
  if (!store) return;
  try { store.setItem(String(key), String(value)); } catch (err) { store.onError(err); }
});
ipcMain.on('store:remove', (_e, key) => {
  if (!store) return;
  try { store.removeItem(String(key)); } catch (err) { store.onError(err); }
});
ipcMain.on('store:sync', (e) => {
  if (!store) { e.returnValue = false; return; }
  try { store.flush(); e.returnValue = true; } catch (err) { store.onError(err); e.returnValue = false; }
});
ipcMain.handle('app:info', () => appInfo());
ipcMain.handle('app:backupNow', () => (store ? makeBackup('manual') : null));

function appInfo() {
  let build = {};
  try { build = JSON.parse(fs.readFileSync(path.join(APP_DIR, 'build-info.json'), 'utf8')); } catch (_) {}
  return {
    app: APP_NAME,
    version: app.getVersion(),
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node,
    dataDir: config.dataDir,
    backupsDir: backupsDir(),
    lastBackupAt: config.lastBackupAt || null,
    erp: build,
    store: store ? store.info() : null,
  };
}

/* ---------------- window ---------------- */

function serveApp() {
  protocol.handle(SCHEME, async (req) => {
    const u = new URL(req.url);
    let rel = decodeURIComponent(u.pathname);
    if (rel === '/' || rel === '') rel = '/index.html';
    const file = path.normalize(path.join(APP_DIR, rel));
    if (u.host !== HOST || !file.startsWith(APP_DIR + path.sep)) return new Response('Not found', { status: 404 });
    try {
      const body = await fs.promises.readFile(file); // works inside app.asar too
      const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
      return new Response(body, { status: 200, headers: { 'content-type': type, 'cache-control': 'no-cache' } });
    } catch (_) {
      return new Response('Not found', { status: 404 });
    }
  });
}

function createWindow() {
  const b = config.bounds || {};
  mainWindow = new BrowserWindow({
    width: b.width || 1366,
    height: b.height || 860,
    x: b.x, y: b.y,
    minWidth: 900, minHeight: 600,
    show: false,
    title: APP_NAME,
    icon: fs.existsSync(ICON) ? ICON : undefined,
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#171e21' : '#eef1ee',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
    },
  });
  if (config.maximized !== false) mainWindow.maximize();
  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('page-title-updated', (e, t) => {
    e.preventDefault();
    mainWindow.setTitle(t && !/^ERP System$/i.test(t) ? APP_NAME + ' - ' + t : APP_NAME);
  });

  const wc = mainWindow.webContents;
  wc.setWindowOpenHandler(({ url }) => {
    if (/^(https?:|mailto:|tel:)/i.test(url)) { shell.openExternal(url); return { action: 'deny' }; }
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        autoHideMenuBar: true,
        icon: fs.existsSync(ICON) ? ICON : undefined,
        webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true },
      },
    };
  });
  wc.on('will-navigate', (e, url) => {
    if (!url.startsWith(SCHEME + '://' + HOST + '/')) { e.preventDefault(); if (/^https?:/i.test(url)) shell.openExternal(url); }
  });
  wc.on('context-menu', (_e, p) => {
    const items = [];
    if (p.isEditable) {
      items.push({ role: 'undo', enabled: p.editFlags.canUndo }, { role: 'redo', enabled: p.editFlags.canRedo }, { type: 'separator' },
        { role: 'cut', enabled: p.editFlags.canCut }, { role: 'copy', enabled: p.editFlags.canCopy },
        { role: 'paste', enabled: p.editFlags.canPaste }, { type: 'separator' }, { role: 'selectAll' });
    } else if (p.selectionText && p.selectionText.trim()) {
      items.push({ role: 'copy' }, { role: 'selectAll' });
    }
    if (items.length) Menu.buildFromTemplate(items).popup({ window: mainWindow });
  });
  wc.on('render-process-gone', async (_e, d) => {
    if (closing) return;
    const r = await dialog.showMessageBox(mainWindow, {
      type: 'warning', title: APP_NAME, buttons: ['Reload', 'Quit'], defaultId: 0,
      message: 'The ERP screen stopped unexpectedly (' + d.reason + ').',
      detail: 'Your saved data is safe in the data file. Reload the screen to continue.',
    });
    if (r.response === 0) wc.reload(); else app.quit();
  });

  mainWindow.on('close', (e) => {
    rememberBounds();
    if (closing) return;
    e.preventDefault();
    closing = true;
    const done = () => {
      try { store && store.flush(); } catch (err) { console.error(err); }
      if (mainWindow && !mainWindow.isDestroyed()) mainWindow.destroy();
    };
    // Make sure every change the page has sent has arrived before closing.
    const t = setTimeout(done, 3000);
    wc.executeJavaScript('window.erpDesktop && window.erpDesktop.sync && window.erpDesktop.sync()', true)
      .catch(() => {})
      .finally(() => { clearTimeout(t); done(); });
  });
  mainWindow.on('closed', () => { mainWindow = null; });

  mainWindow.loadURL(SCHEME + '://' + HOST + '/index.html');
}

function rememberBounds() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  config.maximized = mainWindow.isMaximized();
  if (!config.maximized && !mainWindow.isMinimized()) config.bounds = mainWindow.getBounds();
  saveConfig();
}

function setupDownloads() {
  session.defaultSession.on('will-download', (_e, item) => {
    const name = item.getFilename() || 'download';
    const dir = /\.zip$/i.test(name) ? backupsDir() : app.getPath('downloads');
    try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
    item.setSaveDialogOptions({ title: 'Save file', defaultPath: path.join(dir, name) });
  });
}

/* ---------------- menu actions ---------------- */

async function syncPage() {
  if (mainWindow && !mainWindow.isDestroyed()) {
    try { await mainWindow.webContents.executeJavaScript('window.erpDesktop && window.erpDesktop.sync && window.erpDesktop.sync()', true); } catch (_) {}
  }
  if (store) store.flush();
}

async function backupNowAction() {
  try {
    await syncPage();
    const f = makeBackup('manual');
    const r = await dialog.showMessageBox(mainWindow, {
      type: 'info', title: APP_NAME, buttons: ['OK', 'Show in folder'],
      message: 'Backup created.', detail: f,
    });
    if (r.response === 1) shell.showItemInFolder(f);
  } catch (e) {
    dialog.showErrorBox(APP_NAME, 'The backup could not be created.\n\n' + (e && e.message));
  }
}

async function backupAsAction() {
  const r = await dialog.showSaveDialog(mainWindow, {
    title: 'Save a copy of the data file',
    defaultPath: path.join(app.getPath('documents'), 'control-erp_' + stamp() + '.db'),
    filters: [{ name: 'Control ERP data file', extensions: ['db'] }],
  });
  if (r.canceled || !r.filePath) return;
  try {
    await syncPage();
    store.backupTo(r.filePath);
    dialog.showMessageBox(mainWindow, { type: 'info', title: APP_NAME, message: 'Copy saved.', detail: r.filePath });
  } catch (e) {
    dialog.showErrorBox(APP_NAME, 'The copy could not be saved.\n\n' + (e && e.message));
  }
}

async function restoreAction() {
  const r = await dialog.showOpenDialog(mainWindow, {
    title: 'Restore the data file from a backup',
    defaultPath: backupsDir(),
    properties: ['openFile'],
    filters: [{ name: 'Control ERP data file', extensions: ['db'] }],
  });
  if (r.canceled || !r.filePaths[0]) return;
  const src = r.filePaths[0];
  if (path.resolve(src) === path.resolve(dataFile())) return;
  const chk = isErpDataFile(src);
  if (!chk.ok) { dialog.showErrorBox(APP_NAME, chk.reason); return; }
  const c = await dialog.showMessageBox(mainWindow, {
    type: 'warning', title: APP_NAME, buttons: ['Cancel', 'Restore'], defaultId: 0, cancelId: 0,
    message: 'Replace the current data with this backup?',
    detail: src + '\n\nRecords in backup: ' + chk.records + '\n\nA safety copy of the current data is saved first, in the Backups folder. ' + APP_NAME + ' restarts after the restore.',
  });
  if (c.response !== 1) return;
  try {
    await syncPage();
    makeBackup('before-restore');
    const tmp = dataFile() + '.restoring';
    fs.copyFileSync(src, tmp);
    store.close();
    store = null;
    for (const ext of ['-wal', '-shm']) fs.rmSync(dataFile() + ext, { force: true });
    fs.renameSync(tmp, dataFile());
    relaunch();
  } catch (e) {
    dialog.showErrorBox(APP_NAME, 'The restore failed. The program will restart with the current data.\n\n' + (e && e.message));
    relaunch();
  }
}

async function changeLocationAction() {
  const r = await dialog.showOpenDialog(mainWindow, {
    title: 'Choose the folder for the Control ERP data file',
    defaultPath: config.dataDir,
    properties: ['openDirectory', 'createDirectory'],
  });
  if (r.canceled || !r.filePaths[0]) return;
  const dir = r.filePaths[0];
  if (path.resolve(dir) === path.resolve(config.dataDir)) return;
  const target = path.join(dir, DB_NAME);
  let msg, detail, move;
  if (fs.existsSync(target)) {
    const chk = isErpDataFile(target);
    if (!chk.ok) { dialog.showErrorBox(APP_NAME, chk.reason); return; }
    msg = 'This folder already holds a Control ERP data file.';
    detail = 'Open that file instead of the current one? (records: ' + chk.records + ')\nThe current file stays where it is: ' + dataFile();
    move = false;
  } else {
    msg = 'Copy the data file to the new folder and use it from there?';
    detail = 'New location: ' + target + '\nThe old file is kept as it is, as a copy.';
    move = true;
  }
  const c = await dialog.showMessageBox(mainWindow, { type: 'question', title: APP_NAME, buttons: ['Cancel', 'Continue'], defaultId: 1, cancelId: 0, message: msg, detail });
  if (c.response !== 1) return;
  try {
    await syncPage();
    if (move) store.backupTo(target);
    config.dataDir = dir;
    saveConfig();
    relaunch();
  } catch (e) {
    dialog.showErrorBox(APP_NAME, 'The data location could not be changed.\n\n' + (e && e.message));
  }
}

async function aboutAction() {
  const i = appInfo();
  const s = i.store || {};
  const kb = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
  await dialog.showMessageBox(mainWindow, {
    type: 'info', title: 'About ' + APP_NAME, buttons: ['OK'],
    message: APP_NAME + ' ' + i.version,
    detail: [
      'ERP screens: ' + (i.erp.source || 'ERP_System.html') + (i.erp.builtAt ? ' (prepared ' + i.erp.builtAt.slice(0, 10) + ')' : ''),
      'Data file: ' + s.file,
      'Data file size: ' + kb(s.size || 0) + ' · Records: ' + (s.records || 0),
      'Last saved: ' + (s.lastSavedAt ? new Date(s.lastSavedAt).toLocaleString() : 'not in this session'),
      'Last backup: ' + (i.lastBackupAt ? new Date(i.lastBackupAt).toLocaleString() : 'none yet'),
      'Backups folder: ' + i.backupsDir,
      '',
      'SQLite ' + s.sqliteVersion + ' · Electron ' + i.electron + ' · Chromium ' + i.chrome,
    ].join('\n'),
  });
}

async function checkDataAction() {
  try {
    await syncPage();
    const res = store.integrityCheck();
    dialog.showMessageBox(mainWindow, { type: res === 'ok' ? 'info' : 'warning', title: APP_NAME, message: res === 'ok' ? 'The data file is healthy.' : 'The data file check found problems.', detail: res });
  } catch (e) {
    dialog.showErrorBox(APP_NAME, String(e && e.message));
  }
}

function relaunch() {
  closing = true;
  try { store && store.close(); } catch (_) {}
  store = null;
  app.relaunch();
  app.exit(0);
}

function buildMenu() {
  const run = (js) => () => mainWindow && mainWindow.webContents.executeJavaScript(js, true).catch(() => {});
  const tpl = [
    {
      label: '&File',
      submenu: [
        { label: 'Back Up Now', accelerator: 'CmdOrCtrl+B', click: backupNowAction },
        { label: 'Save a Copy of the Data File…', click: backupAsAction },
        { label: 'Restore from Backup…', click: restoreAction },
        { type: 'separator' },
        { label: 'Open Data Folder', click: () => shell.openPath(config.dataDir) },
        { label: 'Open Backups Folder', click: () => { fs.mkdirSync(backupsDir(), { recursive: true }); shell.openPath(backupsDir()); } },
        { label: 'Change Data Location…', click: changeLocationAction },
        { label: 'Check Data File', click: checkDataAction },
        { type: 'separator' },
        { label: 'Print…', accelerator: 'CmdOrCtrl+P', click: run('window.print()') },
        { type: 'separator' },
        { label: 'Exit', accelerator: 'Alt+F4', click: () => app.quit() },
      ],
    },
    {
      label: '&Edit',
      submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' }],
    },
    {
      label: '&View',
      submenu: [
        { label: 'Home', accelerator: 'Alt+Home', click: run("location.hash='/'") },
        { label: 'Back', accelerator: 'Alt+Left', click: run('history.back()') },
        { type: 'separator' },
        { role: 'reload', label: 'Refresh Screen' },
        { type: 'separator' },
        { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'resetZoom' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: '&Help',
      submenu: [
        { label: 'ERP User Guide', accelerator: 'F1', click: run("typeof gdOpen=='function'&&gdOpen()") },
        { type: 'separator' },
        { label: 'Developer Tools', accelerator: 'CmdOrCtrl+Shift+I', click: () => mainWindow && mainWindow.webContents.toggleDevTools() },
        { type: 'separator' },
        { label: 'About ' + APP_NAME, click: aboutAction },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(tpl));
}

/* ---------------- start and stop ---------------- */

app.whenReady().then(async () => {
  config = loadConfig();
  for (;;) {
    try { openStore(); break; } catch (e) {
      const locked = e instanceof StoreLockedError;
      const r = dialog.showMessageBoxSync({
        type: 'error', title: APP_NAME,
        buttons: locked ? ['Try again', 'Quit'] : ['Choose another folder…', 'Quit'], defaultId: 0, cancelId: 1,
        message: locked ? 'The data file is in use.' : 'The data file could not be opened.',
        detail: (locked ? 'Close Control ERP on the other computer or window and try again.\n\n' : '') + String((e && e.message) || e) + '\n\n' + dataFile(),
      });
      if (r === 1) { app.exit(1); return; }
      if (!locked) {
        const p = dialog.showOpenDialogSync({ title: 'Choose the folder for the Control ERP data file', properties: ['openDirectory', 'createDirectory'] });
        if (!p || !p[0]) { app.exit(1); return; }
        config.dataDir = p[0];
        saveConfig();
      }
    }
  }
  saveConfig();
  serveApp();
  setupDownloads();
  buildMenu();
  createWindow();
  // Daily safety copy, taken a minute after start so it does not slow the opening.
  setTimeout(() => { try { if (store && dailyBackupDue()) makeBackup('auto'); } catch (e) { console.error('auto backup', e); } }, 60 * 1000);
  // Long sessions: refresh today's copy every two hours when something changed.
  setInterval(() => { try { if (store && store.saveCount > savesAtLastBackup) makeBackup('auto'); } catch (e) { console.error('auto backup', e); } }, 2 * 3600 * 1000);
});

app.on('window-all-closed', () => {
  try {
    if (store) {
      store.flush();
      if (store.saveCount > savesAtLastBackup) makeBackup('auto');
      store.close();
      store = null;
    }
  } catch (e) { console.error('closing', e); }
  app.quit();
});
