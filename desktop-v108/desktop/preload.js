'use strict';
/*
 * Gives the ERP page a small, safe API to the desktop program.
 * The page never gets direct access to Node.js or the file system.
 */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('erpDesktop', {
  isDesktop: true,
  // Read everything once when the page opens (synchronous, like localStorage).
  loadAll: () => ipcRenderer.sendSync('store:loadAll'),
  // Writes are sent in order and saved by the main process.
  set: (key, value) => ipcRenderer.send('store:set', String(key), String(value)),
  remove: (key) => ipcRenderer.send('store:remove', String(key)),
  // Waits until every write sent so far is saved to the data file.
  sync: () => ipcRenderer.sendSync('store:sync'),
  info: () => ipcRenderer.invoke('app:info'),
  backupNow: () => ipcRenderer.invoke('app:backupNow'),
});
