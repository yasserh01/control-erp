/*
 * Control ERP desktop bridge (runs in the page before the ERP code).
 * The ERP saves through localStorage. On the desktop, this replaces localStorage with
 * an object of the same shape whose writes go to the SQLite data file.
 * In an ordinary browser window.erpDesktop does not exist and nothing changes.
 */
(function () {
  'use strict';
  var D = window.erpDesktop;
  if (!D || !D.isDesktop) return;

  var res = D.loadAll();
  if (!res || !res.ok) {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.innerHTML = '<div style="font:16px Segoe UI,sans-serif;padding:40px;color:#b4443c">' +
        '<h2>The data file could not be read</h2><p>' + String((res && res.error) || 'Unknown error') +
        '</p><p>Close Control ERP and open it again. If this repeats, restore the data from File &gt; Restore from Backup.</p></div>';
    });
    throw new Error('Control ERP: data file could not be read');
  }

  var cache = new Map();
  Object.keys(res.data || {}).forEach(function (k) { cache.set(k, res.data[k]); });

  var store = {
    getItem: function (k) { k = String(k); return cache.has(k) ? cache.get(k) : null; },
    setItem: function (k, v) {
      k = String(k); v = String(v);
      if (cache.get(k) === v) return;
      cache.set(k, v);
      D.set(k, v);
    },
    removeItem: function (k) {
      k = String(k);
      if (!cache.has(k)) return;
      cache.delete(k);
      D.remove(k);
    },
    clear: function () { Array.from(cache.keys()).forEach(function (k) { store.removeItem(k); }); },
    key: function (i) { var a = Array.from(cache.keys()); return i >= 0 && i < a.length ? a[i] : null; },
  };
  Object.defineProperty(store, 'length', { get: function () { return cache.size; } });

  Object.defineProperty(window, 'localStorage', { value: store, configurable: true, enumerable: true, writable: false });

  // Save everything before the page reloads (restore, company switch, refresh).
  window.addEventListener('pagehide', function () { try { D.sync(); } catch (e) {} });

  document.documentElement.classList.add('erp-desktop');
})();
