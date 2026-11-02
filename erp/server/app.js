'use strict';
// HTTP API + static web UI. Zero dependencies (node:http). The same server runs:
//   Desktop: started by Electron on 127.0.0.1 with a random port.
//   Server:  `node server/run.js --port 8080 --host 0.0.0.0` on an office machine.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { Db } = require('./db');
const { migrate } = require('./migrations');
const { AppError } = require('./lib');
const core = require('./services/core');
const coa = require('./services/coa');
const journal = require('./services/journal');
const reports = require('./services/reports');
const records = require('./services/records');
const mapping = require('./services/mapping');
const registry = require('./registry');

const WEB = path.join(__dirname, '..', 'web');
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };

function createApp({ dataDir, dbFile } = {}) {
  const file = dbFile || path.join(dataDir || path.join(os.homedir(), 'ControlERP'), 'erp.db');
  const db = new Db(file);
  migrate(db);

  const routes = [];
  const route = (method, pattern, opts, handler) => {
    const keys = [];
    const re = new RegExp('^' + pattern.replace(/:(\w+)/g, (_, k) => { keys.push(k); return /id$/i.test(k) ? '(\\d+)' : '([a-z0-9_]+)'; }) + '$');
    routes.push({ method, re, keys, opts, handler });
  };

  // ---------- public ----------
  route('GET', '/api/status', { auth: false }, () => ({ setup: core.isSetup(db), version: require('../package.json').version }));
  route('POST', '/api/setup', { auth: false }, ({ body }) => core.setup(db, body, coa.seedStarterCoa));
  route('POST', '/api/login', { auth: false }, ({ body, res }) => {
    const r = core.login(db, body.username, body.password);
    res.setHeader('Set-Cookie', `sid=${r.token}; HttpOnly; SameSite=Strict; Path=/`);
    return { user: r.user };
  });
  route('POST', '/api/logout', { auth: false }, ({ token, res }) => {
    if (token) core.logout(db, token);
    res.setHeader('Set-Cookie', 'sid=; Max-Age=0; Path=/');
    return { ok: true };
  });

  // ---------- session ----------
  route('GET', '/api/me', {}, ({ ctx }) => ({ user: ctx.user, companies: core.companiesForUser(db, ctx.user) }));

  // ---------- companies & users ----------
  route('POST', '/api/companies', { perm: 'company.admin' }, ({ ctx, body }) => core.createCompany(db, ctx, body, body.starter_coa === false ? null : coa.seedStarterCoa));
  route('PUT', '/api/companies/:id', { perm: 'company.admin' }, ({ ctx, params, body }) => core.updateCompany(db, ctx, params.id, body));
  route('GET', '/api/users', { perm: 'users.admin' }, () => core.listUsers(db));
  route('POST', '/api/users', { perm: 'users.admin' }, ({ ctx, body }) => core.saveUser(db, ctx, body));
  route('PUT', '/api/users/:id', { perm: 'users.admin' }, ({ ctx, params, body }) => core.saveUser(db, ctx, { ...body, id: params.id }));

  // ---------- company-scoped (header X-Company) ----------
  route('GET', '/api/coa', { perm: 'coa.view', company: true }, ({ cid }) => ({ elements: coa.tree(db, cid), control_types: coa.CONTROL_TYPES, analysis_types: coa.ANALYSIS_TYPES }));
  route('POST', '/api/coa/groups', { perm: 'coa.edit', company: true }, ({ ctx, cid, body }) => coa.createGroup(db, ctx, cid, body));
  route('PUT', '/api/coa/groups/:id', { perm: 'coa.edit', company: true }, ({ ctx, cid, params, body }) => coa.updateGroup(db, ctx, cid, params.id, body));
  route('POST', '/api/coa/ledgers', { perm: 'coa.edit', company: true }, ({ ctx, cid, body }) => coa.createLedger(db, ctx, cid, body));
  route('PUT', '/api/coa/ledgers/:id', { perm: 'coa.edit', company: true }, ({ ctx, cid, params, body }) => coa.updateLedger(db, ctx, cid, params.id, body));

  route('GET', '/api/journals', { perm: 'journal.view', company: true }, ({ cid, query }) => journal.list(db, cid, query));
  route('GET', '/api/journals/:id', { perm: 'journal.view', company: true }, ({ cid, params }) => journal.get(db, cid, params.id));
  route('POST', '/api/journals', { perm: 'journal.edit', company: true }, ({ ctx, cid, body }) => journal.saveDraft(db, ctx, cid, { ...body, id: undefined }));
  route('PUT', '/api/journals/:id', { perm: 'journal.edit', company: true }, ({ ctx, cid, params, body }) => journal.saveDraft(db, ctx, cid, { ...body, id: params.id }));
  route('DELETE', '/api/journals/:id', { perm: 'journal.edit', company: true }, ({ ctx, cid, params }) => journal.deleteDraft(db, ctx, cid, params.id));
  route('POST', '/api/journals/:id/post', { perm: 'journal.post', company: true }, ({ ctx, cid, params }) => journal.post(db, ctx, cid, params.id));
  route('POST', '/api/journals/:id/reverse', { perm: 'journal.post', company: true }, ({ ctx, cid, params, body }) => journal.reverse(db, ctx, cid, params.id, body.date));

  route('GET', '/api/reports/trial-balance', { perm: 'reports.view', company: true }, ({ cid, query }) => reports.trialBalance(db, cid, query));
  route('GET', '/api/reports/ledger/:id', { perm: 'reports.view', company: true }, ({ cid, params, query }) => reports.ledgerStatement(db, cid, params.id, query));
  route('GET', '/api/audit', { perm: 'audit.view', company: true }, ({ cid }) =>
    db.all('SELECT a.*, u.username FROM audit_log a LEFT JOIN users u ON u.id=a.user_id WHERE a.company_id=? ORDER BY a.id DESC LIMIT 500', cid));

  // ---------- master data (generic engine, fields from the registry) ----------
  route('GET', '/api/md', { perm: 'md.view', company: true }, ({ cid }) => records.catalogue(db, cid));
  route('GET', '/api/md/:section', { perm: 'md.view', company: true }, ({ ctx, cid, params, query }) => records.list(db, ctx, cid, params.section, query));
  route('GET', '/api/md/:section/:id', { perm: 'md.view', company: true }, ({ ctx, cid, params }) => records.get(db, ctx, cid, params.section, params.id));
  route('POST', '/api/md/:section', { perm: 'md.edit', company: true }, ({ ctx, cid, params, body }) => records.save(db, ctx, cid, params.section, body));
  route('PUT', '/api/md/:section/:id', { perm: 'md.edit', company: true }, ({ ctx, cid, params, body }) => records.save(db, ctx, cid, params.section, body, params.id));
  route('DELETE', '/api/md/:section/:id', { perm: 'md.edit', company: true }, ({ ctx, cid, params }) => records.remove(db, ctx, cid, params.section, params.id));
  route('GET', '/api/options/:ref', { perm: 'md.view', company: true }, ({ cid, params }) => records.options(db, cid, params.ref));

  // ---------- account mapping & numbering ----------
  route('GET', '/api/mapping', { perm: 'mapping.view', company: true }, ({ cid }) => mapping.list(db, cid));
  route('PUT', '/api/mapping', { perm: 'settings.edit', company: true }, ({ ctx, cid, body }) => mapping.set(db, ctx, cid, body));
  route('GET', '/api/numbering', { perm: 'settings.edit', company: true }, ({ cid }) => core.listSequences(db, cid, registry.documentTypes()));
  route('PUT', '/api/numbering/:doctype', { perm: 'settings.edit', company: true }, ({ ctx, cid, params, body }) => core.setSequence(db, ctx, cid, params.doctype.toUpperCase(), body, registry.documentTypes()));

  // ---------- backup (whole database, admin only) ----------
  route('GET', '/api/backup', { perm: 'system.backup', raw: true }, ({ ctx, res }) => {
    const tmp = path.join(os.tmpdir(), `erp-backup-${Date.now()}.db`);
    db.backupTo(tmp);
    core.audit(db, ctx, 'backup', 'system', null);
    const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
    res.writeHead(200, { 'Content-Type': 'application/octet-stream', 'Content-Disposition': `attachment; filename="ControlERP-backup-${stamp}.db"` });
    fs.createReadStream(tmp).on('close', () => fs.unlink(tmp, () => {})).pipe(res);
  });

  // ---------- dispatcher ----------
  async function handle(req, res) {
    const url = new URL(req.url, 'http://x');
    if (!url.pathname.startsWith('/api/')) return serveStatic(url.pathname, res);
    const r = routes.find((x) => x.method === req.method && x.re.test(url.pathname));
    if (!r) return send(res, 404, { error: 'Not found' });
    try {
      const m = url.pathname.match(r.re);
      const params = Object.fromEntries(r.keys.map((k, i) => [k, /id$/i.test(k) ? Number(m[i + 1]) : m[i + 1]]));
      const token = (req.headers.cookie || '').split(/;\s*/).find((c) => c.startsWith('sid='))?.slice(4) || null;
      const body = ['POST', 'PUT'].includes(req.method) ? await readJson(req) : {};
      const input = { params, body, query: Object.fromEntries(url.searchParams), token, res };
      if (r.opts.auth !== false) {
        const user = core.sessionUser(db, token);
        if (!user) throw new AppError(401, 'Please log in');
        input.ctx = { user };
        if (r.opts.perm) core.requirePerm(input.ctx, r.opts.perm);
        if (r.opts.company) {
          const cid = Number(req.headers['x-company']);
          if (!cid || !core.hasCompanyAccess(db, user, cid)) throw new AppError(403, 'No access to this company');
          input.cid = cid; input.ctx.companyId = cid;
        }
      }
      const out = await r.handler(input);
      if (!r.opts.raw) send(res, 200, out ?? { ok: true });
    } catch (e) {
      const status = e.status || 500;
      if (status === 500) console.error(e);
      send(res, status, { error: status === 500 ? 'Internal error: ' + e.message : e.message });
    }
  }

  const server = http.createServer(handle);
  return {
    db, server,
    listen(port = 0, host = '127.0.0.1') {
      return new Promise((ok) => server.listen(port, host, () => ok(server.address().port)));
    },
    close() { server.close(); db.close(); },
  };
}

function send(res, status, obj) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(obj));
}

function readJson(req) {
  return new Promise((ok, fail) => {
    let s = '';
    req.on('data', (c) => { s += c; if (s.length > 10e6) { fail(new AppError(413, 'Request too large')); req.destroy(); } });
    req.on('end', () => { try { ok(s ? JSON.parse(s) : {}); } catch { fail(new AppError(400, 'Invalid JSON')); } });
  });
}

function serveStatic(p, res) {
  const rel = p === '/' ? 'index.html' : decodeURIComponent(p).replace(/^\/+/, '');
  const file = path.join(WEB, path.normalize(rel));
  if (!file.startsWith(WEB) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); return res.end('Not found');
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}

module.exports = { createApp };
