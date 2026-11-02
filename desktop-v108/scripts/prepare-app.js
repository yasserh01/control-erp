#!/usr/bin/env node
'use strict';
/*
 * Prepares the ERP screens for the desktop program.
 *
 *   node scripts/prepare-app.js [path/to/ERP_System.html]
 *
 * Takes your ERP HTML file (default: erp/ERP_System.html), and writes app/index.html with:
 *   1. the desktop bridge loaded first, so saves go to the SQLite data file;
 *   2. pdf.js loaded from the program folder instead of the internet (works offline).
 * Your ERP file itself is not changed. To update the screens, replace
 * erp/ERP_System.html with the new version and build again.
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.join(__dirname, '..');
const src = path.resolve(process.argv[2] || path.join(root, 'erp', 'ERP_System.html'));
const outDir = path.join(root, 'app');
const BRIDGE_TAG = '<script src="desktop-bridge.js"></script>';
const PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
const PDFJS_LOCAL = 'vendor/pdfjs/';

function fail(msg) { console.error('prepare-app: ' + msg); process.exit(1); }

if (!fs.existsSync(src)) fail('ERP file not found: ' + src);
let html = fs.readFileSync(src, 'utf8');
const hash = crypto.createHash('sha256').update(html).digest('hex');

// 1. Bridge: must run before any ERP script, so it goes right after the first charset tag.
if (html.includes(BRIDGE_TAG)) fail('the ERP file already contains the desktop bridge; use the original file.');
const m = /<meta\s+charset=["']?[\w-]+["']?\s*\/?>/i.exec(html) || /<head[^>]*>/i.exec(html);
if (!m) fail('no <head> found in the ERP file.');
const at = m.index + m[0].length;
html = html.slice(0, at) + BRIDGE_TAG + html.slice(at);

// 2. pdf.js from the program folder.
const n = html.split(PDFJS_CDN).length - 1;
if (n) html = html.split(PDFJS_CDN).join(PDFJS_LOCAL);
else console.warn('prepare-app: note: pdf.js address not found; PDF import will need the internet if the ERP uses it.');

const rest = (html.match(/https:\/\/cdn[^"'`\s)]+/g) || []).filter((u) => !u.startsWith(PDFJS_CDN));
if (rest.length) console.warn('prepare-app: note: other internet resources referenced: ' + [...new Set(rest)].slice(0, 5).join(', '));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html);
fs.copyFileSync(path.join(root, 'desktop', 'bridge.js'), path.join(outDir, 'desktop-bridge.js'));
const info = {
  source: path.basename(src),
  sourceBytes: fs.statSync(src).size,
  sourceSha256: hash,
  pdfjsLocal: n > 0,
  builtAt: new Date().toISOString(),
};
fs.writeFileSync(path.join(outDir, 'build-info.json'), JSON.stringify(info, null, 2));
console.log('prepare-app: app/index.html ready from ' + info.source + ' (' + (info.sourceBytes / 1048576).toFixed(1) + ' MB)');
