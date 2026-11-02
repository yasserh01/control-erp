'use strict';
// Desktop edition (Stage 1): Electron window + the same server running privately on 127.0.0.1.
// Data lives in %APPDATA%\Control ERP\data\erp.db and is never touched by updates or uninstall.
const { app, BrowserWindow, Menu, dialog, shell } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

if (!app.requestSingleInstanceLock()) { app.quit(); process.exit(0); }

let win, server, port;
const dataDir = path.join(app.getPath('userData'), 'data');

function autoBackup(db) {
  // Keep one automatic backup per day, last 14 days.
  const dir = path.join(dataDir, 'auto-backups');
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `erp-${new Date().toISOString().slice(0, 10)}.db`);
  if (!fs.existsSync(file)) db.backupTo(file);
  fs.readdirSync(dir).filter((f) => f.endsWith('.db')).sort().slice(0, -14).forEach((f) => fs.unlinkSync(path.join(dir, f)));
}

async function createWindow() {
  const { createApp } = require('../server/app');
  server = createApp({ dataDir });
  port = await server.listen(0, '127.0.0.1');
  try { autoBackup(server.db); } catch (e) { console.error('auto-backup failed', e); }

  win = new BrowserWindow({
    width: 1360, height: 860, minWidth: 900, minHeight: 600, title: 'Control ERP', show: false,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true },
  });
  win.once('ready-to-show', () => win.show());
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.session.on('will-download', (_e, item) => {
    item.setSaveDialogOptions({ title: 'Save backup', defaultPath: path.join(app.getPath('documents'), item.getFilename()) });
  });
  win.loadURL(`http://127.0.0.1:${port}/`);

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: 'File', submenu: [
      { label: 'Open data folder', click: () => shell.openPath(dataDir) },
      { type: 'separator' }, { role: 'quit', label: 'Exit' }] },
    { label: 'View', submenu: [{ role: 'reload' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'resetZoom' }, { role: 'togglefullscreen' }, { type: 'separator' }, { role: 'toggleDevTools' }] },
    { label: 'Help', submenu: [{ label: 'About Control ERP', click: () => dialog.showMessageBox(win, {
      type: 'info', title: 'Control ERP', message: `Control ERP ${app.getVersion()}`, detail: `Data folder:\n${dataDir}` }) }] },
  ]));
}

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { try { server?.close(); } catch {} app.quit(); });
