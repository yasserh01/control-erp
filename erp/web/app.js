'use strict';
// Control ERP web client. Talks only to the API; holds no business logic.
const $ = (s, r = document) => r.querySelector(s);
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = (v) => Number(v || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const today = () => new Date().toISOString().slice(0, 10);
const S = { user: null, companies: [], cid: null, coa: null };

try { const t = localStorage.getItem('theme'); if (t) document.documentElement.dataset.theme = t; } catch {}

async function api(method, url, body) {
  const r = await fetch(url, {
    method, headers: { 'Content-Type': 'application/json', ...(S.cid ? { 'X-Company': String(S.cid) } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await r.json().catch(() => ({}));
  if (r.status === 401 && url !== '/api/login') { showLogin(); throw new Error(data.error); }
  if (!r.ok) { toast(data.error || 'Error', true); throw new Error(data.error); }
  return data;
}
function toast(msg, err) {
  const t = $('#toast'); t.textContent = msg; t.className = 'on' + (err ? ' err' : '');
  clearTimeout(t._h); t._h = setTimeout(() => (t.className = ''), 3200);
}
const can = (p) => S.user?.permissions.includes('*') || S.user?.permissions.includes(p);
const view = (html, crumb) => { $('#main').innerHTML = html; $('#crumb').textContent = crumb || ''; };
const formData = (f) => Object.fromEntries(new FormData(f).entries());

function dialog(html, onSubmit) {
  const d = $('#dlg'), f = $('#dlgf');
  f.innerHTML = html;
  f.onsubmit = async (e) => {
    if (e.submitter?.value === 'cancel') return;
    e.preventDefault();
    try { await onSubmit(f, e.submitter?.value); d.close(); } catch {}
  };
  d.showModal();
  return f;
}

// ---------------- auth ----------------
async function start() {
  const st = await (await fetch('/api/status')).json();
  if (!st.setup) return showSetup();
  try { const me = await api('GET', '/api/me'); enter(me); } catch {}
}

function showSetup() {
  $('#hdr').hidden = true;
  view(`<div class="auth panel"><h2>Welcome to Control ERP</h2><p class="sub">First-time setup: create the administrator and your first company. A starter UAE contracting chart of accounts is loaded and stays editable.</p>
  <form id="f" class="fg" style="grid-template-columns:1fr">
    <label>Company name<input name="cname" required></label>
    <label>Company name (Arabic)<input name="cname_ar" dir="rtl"></label>
    <label>VAT TRN<input name="trn"></label>
    <label>Administrator username<input name="username" required value="admin"></label>
    <label>Full name<input name="full_name"></label>
    <label>Password (min 6)<input name="password" type="password" required minlength="6"></label>
    <button class="btn pri">Create</button></form></div>`);
  $('#f').onsubmit = async (e) => {
    e.preventDefault(); const v = formData(e.target);
    await api('POST', '/api/setup', { admin: { username: v.username, password: v.password, full_name: v.full_name }, company: { name: v.cname, name_ar: v.cname_ar, trn: v.trn } });
    await api('POST', '/api/login', { username: v.username, password: v.password });
    enter(await api('GET', '/api/me'));
  };
}

function showLogin() {
  $('#hdr').hidden = true;
  view(`<div class="auth panel"><h2>🏗️ Control ERP</h2><p class="sub">Sign in to continue</p>
  <form id="f" class="fg" style="grid-template-columns:1fr"><label>Username<input name="username" required autofocus></label>
  <label>Password<input name="password" type="password" required></label><button class="btn pri">Sign in</button></form></div>`);
  $('#f').onsubmit = async (e) => {
    e.preventDefault(); const v = formData(e.target);
    await api('POST', '/api/login', v);
    enter(await api('GET', '/api/me'));
  };
}

function enter(me) {
  S.user = me.user; S.companies = me.companies;
  let saved; try { saved = Number(localStorage.getItem('cid')); } catch {}
  S.cid = (S.companies.find((c) => c.id === saved) || S.companies[0])?.id || null;
  $('#hdr').hidden = false;
  $('#who').textContent = `${S.user.full_name} · ${S.user.role}`;
  const sel = $('#company');
  sel.innerHTML = S.companies.map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join('');
  sel.value = S.cid;
  sel.onchange = () => { S.cid = Number(sel.value); try { localStorage.setItem('cid', S.cid); } catch {} home(); };
  home();
}

$('#logout').onclick = async () => { await api('POST', '/api/logout'); S.user = null; showLogin(); };
$('#theme').onclick = () => {
  const r = document.documentElement; r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', r.dataset.theme); } catch {}
};
$('header h1').onclick = () => home();

// ---------------- home ----------------
const MODULES = [
  { ic: '🗂️', name: 'Master Data', sub: 'Parties, items, employees, banks', c: '#c08a2e', go: () => masterHub() },
  { ic: '📒', name: 'Finance', sub: 'Journals · Chart of accounts', c: '#2f6f73', go: () => finance() },
  { ic: '📊', name: 'Reports', sub: 'Trial balance · Ledger', c: '#4a6fa5', go: () => reportsHome() },
  { ic: '🛒', name: 'Purchase', sub: 'Next module', c: '#b7791f', soon: true },
  { ic: '💼', name: 'Sales', sub: 'Planned', c: '#2e7d5b', soon: true },
  { ic: '📦', name: 'Inventory', sub: 'Planned', c: '#7a5ea8', soon: true },
  { ic: '🏗️', name: 'Projects', sub: 'Planned', c: '#a0522d', soon: true },
  { ic: '🚚', name: 'Fixed Assets', sub: 'Planned', c: '#5f7d8c', soon: true },
  { ic: '👷', name: 'HR & Payroll', sub: 'Planned', c: '#b4443c', soon: true },
  { ic: '🏭', name: 'Manufacturing', sub: 'Planned', c: '#7a5ea8', soon: true },
  { ic: '🚢', name: 'Marine Fleet', sub: 'Planned', c: '#2a6f97', soon: true },
  { ic: '🌐', name: 'Group & Intercompany', sub: 'Planned', c: '#4f7d9a', soon: true },
  { ic: '⚙️', name: 'System', sub: 'Company · Users · Mapping · Numbering', c: '#6b7b80', go: () => system() },
];
function home() {
  if (!S.cid) return view('<div class="empty">You have no company access. Ask the administrator.</div>');
  const c = S.companies.find((x) => x.id === S.cid);
  view(`<h2>${esc(c.name)}</h2><p class="sub">${esc(c.name_ar || '')}</p><div class="grid">${MODULES.map((m, i) =>
    `<div class="tile ${m.soon ? 'soon' : ''}" style="--c:${m.c}" data-i="${i}"><div class="ic">${m.ic}</div><b>${m.name}</b><small>${m.sub}</small></div>`).join('')}</div>`, 'Home');
  document.querySelectorAll('.tile').forEach((t) => (t.onclick = () => MODULES[t.dataset.i].go?.()));
}
const back = (fn, label = '← Back') => `<button class="btn" data-back>${label}</button>`;
function wireBack(fn) { document.querySelectorAll('[data-back]').forEach((b) => (b.onclick = fn)); }

// ---------------- finance ----------------
function finance() {
  view(`<div class="bar">${back()}</div><h2>Finance</h2><div class="grid">
    <div class="tile" data-go="j"><div class="ic">🧾</div><b>Journal Vouchers</b><small>Create, post, reverse</small></div>
    <div class="tile" data-go="c"><div class="ic">🗂️</div><b>Chart of Accounts</b><small>Groups & ledgers, automatic codes</small></div></div>`, 'Finance');
  wireBack(home);
  $('[data-go=j]').onclick = journals; $('[data-go=c]').onclick = chartOfAccounts;
}

async function loadCoa() { S.coa = await api('GET', '/api/coa'); return S.coa; }
const ledgersFlat = () => S.coa.elements.flatMap((e) => e.groups.flatMap((g) => g.ledgers.map((l) => ({ ...l, element: e.name }))));

async function chartOfAccounts() {
  const coa = await loadCoa();
  const edit = can('coa.edit');
  view(`<div class="bar">${back()}${edit ? '<button class="btn pri" id="ng">+ Group</button><button class="btn pri" id="nl">+ Ledger</button>' : ''}</div>
  <h2>Chart of Accounts</h2><p class="sub">Codes are created automatically: element (1) → group (101) → ledger (101001).</p>
  <div class="panel tree">${coa.elements.map((e) => `<div class="el">${e.id} · ${e.name} <span class="tag">${e.nature}</span></div>${e.groups.map((g) => `
    <div class="gr"><code>${g.code}</code> ${esc(g.name)}</div>${g.ledgers.map((l) => `
    <div class="lg" data-l="${l.id}"><code>${l.code}</code><span>${esc(l.name)}</span>${l.control_type !== 'none' ? `<span class="tag">${l.control_type}</span>` : ''}${l.analysis_type !== 'None' ? `<span class="tag">↳ ${l.analysis_type}</span>` : ''}${l.active ? '' : '<span class="tag bad">inactive</span>'}</div>`).join('')}`).join('')}`).join('')}</div>`, 'Finance › Chart of Accounts');
  wireBack(finance);
  if (!edit) return;
  $('#ng').onclick = () => groupDialog();
  $('#nl').onclick = () => ledgerDialog();
  document.querySelectorAll('.lg').forEach((d) => (d.onclick = () => ledgerDialog(ledgersFlat().find((l) => l.id === Number(d.dataset.l)))));
}

function groupDialog() {
  dialog(`<h3>New group</h3><div class="fg"><label>Main element<select name="element">${S.coa.elements.map((e) => `<option value="${e.id}">${e.name}</option>`).join('')}</select></label>
    <label>Group name<input name="name" required></label><label>Arabic name<input name="name_ar" dir="rtl"></label></div>
    <div class="ft"><button class="btn" value="cancel" formnovalidate>Cancel</button><button class="btn pri">Save</button></div>`,
  async (f) => { const r = await api('POST', '/api/coa/groups', formData(f)); toast(`Group ${r.code} created`); chartOfAccounts(); });
}

function ledgerDialog(l) {
  const groups = S.coa.elements.flatMap((e) => e.groups.map((g) => ({ ...g, el: e.name })));
  const opt = (arr, cur) => arr.map((x) => `<option ${x === cur ? 'selected' : ''}>${x}</option>`).join('');
  dialog(`<h3>${l ? `Ledger ${l.code}` : 'New ledger'}</h3><div class="fg">
    <label>Group<select name="group_id" ${l ? 'disabled' : ''}>${groups.map((g) => `<option value="${g.id}" ${l?.group_id === g.id ? 'selected' : ''}>${g.code} ${esc(g.name)} (${g.el})</option>`).join('')}</select></label>
    <label>Ledger name<input name="name" required value="${esc(l?.name)}"></label>
    <label>Arabic name<input name="name_ar" dir="rtl" value="${esc(l?.name_ar)}"></label>
    <label>Control type<select name="control_type">${opt(S.coa.control_types, l?.control_type || 'none')}</select></label>
    <label>Analysis type<select name="analysis_type">${opt(S.coa.analysis_types, l?.analysis_type || 'None')}</select></label>
    ${l ? `<label>Status<select name="active"><option value="1">Active</option><option value="0" ${l.active ? '' : 'selected'}>Inactive</option></select></label>` : ''}</div>
    <div class="ft"><button class="btn" value="cancel" formnovalidate>Cancel</button><button class="btn pri">Save</button></div>`,
  async (f) => {
    const v = formData(f);
    if (l) { await api('PUT', `/api/coa/ledgers/${l.id}`, { ...v, active: Number(v.active) }); toast('Ledger updated'); }
    else { const r = await api('POST', '/api/coa/ledgers', v); toast(`Ledger ${r.code} created`); }
    chartOfAccounts();
  });
}

async function journals() {
  const rows = await api('GET', '/api/journals');
  view(`<div class="bar">${back()}${can('journal.edit') ? '<button class="btn pri" id="nj">+ New Journal Voucher</button>' : ''}</div>
  <h2>Journal Vouchers</h2><div class="panel tw">${rows.length ? `<table><thead><tr><th>No.</th><th>Date</th><th>Reference</th><th>Narration</th><th class="n">Amount</th><th>Status</th></tr></thead><tbody>
  ${rows.map((r) => `<tr class="click" data-id="${r.id}"><td>${esc(r.number || '(draft)')}</td><td>${r.date}</td><td>${esc(r.reference)}</td><td>${esc(r.narration)}</td><td class="n">${money(r.total)}</td><td><span class="pill ${r.status}">${r.status}</span></td></tr>`).join('')}
  </tbody></table>` : '<div class="empty">No journals yet.</div>'}</div>`, 'Finance › Journal Vouchers');
  wireBack(finance);
  $('#nj') && ($('#nj').onclick = () => journalEditor());
  document.querySelectorAll('tr[data-id]').forEach((tr) => (tr.onclick = () => journalEditor(Number(tr.dataset.id))));
}

async function journalEditor(id) {
  await loadCoa();
  const j = id ? await api('GET', `/api/journals/${id}`) : { date: today(), status: 'Draft', lines: [{}, {}] };
  const ro = j.status !== 'Draft' || !can('journal.edit');
  const accts = ledgersFlat().filter((l) => l.active || j.lines.some((x) => x.ledger_id === l.id));
  const accOpts = (sel) => `<option value="">— account —</option>` + accts.map((a) => `<option value="${a.id}" ${a.id === sel ? 'selected' : ''}>${a.code} ${esc(a.name)}</option>`).join('');
  const row = (l = {}) => `<tr><td><select class="acc" ${ro ? 'disabled' : ''}>${accOpts(l.ledger_id)}</select></td>
    <td><input class="nar" value="${esc(l.narration)}" ${ro ? 'disabled' : ''}></td>
    <td><input class="dr n" inputmode="decimal" value="${Number(l.debit) ? l.debit : ''}" ${ro ? 'disabled' : ''}></td>
    <td><input class="cr n" inputmode="decimal" value="${Number(l.credit) ? l.credit : ''}" ${ro ? 'disabled' : ''}></td>
    <td>${ro ? '' : '<button type="button" class="btn dng rm">✕</button>'}</td></tr>`;
  view(`<div class="bar">${back()}
    ${!ro ? '<button class="btn" id="sv">Save draft</button>' : ''}
    ${!ro && can('journal.post') ? '<button class="btn pri" id="ps">Save & Post</button>' : ''}
    ${id && j.status === 'Draft' && can('journal.edit') ? '<button class="btn dng" id="del">Delete draft</button>' : ''}
    ${j.status === 'Posted' && can('journal.post') ? '<button class="btn dng" id="rv">Reverse</button>' : ''}
    <button class="btn" onclick="print()">Print</button></div>
  <h2>Journal Voucher ${esc(j.number || '')} <span class="pill ${j.status}">${j.status}</span></h2>
  <div class="panel"><div class="fg"><label>Date<input type="date" id="jd" value="${j.date}" ${ro ? 'disabled' : ''}></label>
    <label>Reference<input id="jr" value="${esc(j.reference)}" ${ro ? 'disabled' : ''}></label>
    <label style="grid-column:span 2">Narration<input id="jn" value="${esc(j.narration)}" ${ro ? 'disabled' : ''}></label></div>
  <div class="tw" style="margin-top:14px"><table class="lines"><thead><tr><th style="width:34%">Account</th><th>Line narration</th><th class="n" style="width:14%">Debit</th><th class="n" style="width:14%">Credit</th><th></th></tr></thead>
  <tbody id="lb">${j.lines.map(row).join('')}</tbody>
  <tfoot><tr><td>${ro ? '' : '<button type="button" class="btn" id="al">+ Line</button>'}</td><td class="n">Totals</td><td class="n" id="td"></td><td class="n" id="tc"></td><td id="df"></td></tr></tfoot></table></div></div>`, 'Finance › Journal Voucher');
  wireBack(journals);
  const tot = () => {
    const sum = (c) => [...document.querySelectorAll(c)].reduce((s, i) => s + Math.round(Number(i.value.replace(/,/g, '') || 0) * 100), 0);
    const d = sum('.dr'), c = sum('.cr');
    $('#td').textContent = money(d / 100); $('#tc').textContent = money(c / 100);
    $('#df').innerHTML = d === c ? '<span class="ok">✓</span>' : `<span class="bad">Diff ${money((d - c) / 100)}</span>`;
  };
  const wire = () => { document.querySelectorAll('#lb input').forEach((i) => (i.oninput = tot)); document.querySelectorAll('.rm').forEach((b) => (b.onclick = () => { b.closest('tr').remove(); tot(); })); };
  wire(); tot();
  $('#al') && ($('#al').onclick = () => { $('#lb').insertAdjacentHTML('beforeend', row()); wire(); });
  const collect = () => ({
    date: $('#jd').value, reference: $('#jr').value, narration: $('#jn').value,
    lines: [...document.querySelectorAll('#lb tr')].map((tr) => ({ ledger_id: Number($('.acc', tr).value), narration: $('.nar', tr).value, debit: $('.dr', tr).value, credit: $('.cr', tr).value }))
      .filter((l) => l.ledger_id || l.debit || l.credit),
  });
  const save = async () => (id ? (await api('PUT', `/api/journals/${id}`, collect()), id) : (await api('POST', '/api/journals', collect())).id);
  $('#sv') && ($('#sv').onclick = async () => { id = await save(); toast('Draft saved'); journalEditor(id); });
  $('#ps') && ($('#ps').onclick = async () => { id = await save(); const r = await api('POST', `/api/journals/${id}/post`); toast(`Posted as ${r.number}`); journalEditor(id); });
  $('#del') && ($('#del').onclick = async () => { if (!confirm('Delete this draft?')) return; await api('DELETE', `/api/journals/${id}`); toast('Draft deleted'); journals(); });
  $('#rv') && ($('#rv').onclick = () => dialog(`<h3>Reverse ${esc(j.number)}</h3><p class="sub">A new posted journal with opposite entries will be created.</p>
    <label>Reversal date<input type="date" name="date" value="${today()}"></label><div class="ft"><button class="btn" value="cancel" formnovalidate>Cancel</button><button class="btn pri">Reverse</button></div>`,
  async (f) => { const r = await api('POST', `/api/journals/${id}/reverse`, formData(f)); toast(`Reversed by ${r.number}`); journalEditor(id); }));
}

// ---------------- reports ----------------
function reportsHome() {
  view(`<div class="bar">${back()}</div><h2>Reports</h2><div class="grid">
    <div class="tile" data-go="tb"><div class="ic">⚖️</div><b>Trial Balance</b><small>Opening, movement, closing</small></div>
    <div class="tile" data-go="ls"><div class="ic">📜</div><b>Ledger Statement</b><small>Account transactions & running balance</small></div></div>`, 'Reports');
  wireBack(home);
  $('[data-go=tb]').onclick = () => trialBalance(); $('[data-go=ls]').onclick = () => ledgerStatement();
}
function csv(name, rows) {
  const s = rows.map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + s], { type: 'text/csv' })); a.download = name; a.click();
}
async function trialBalance(from = '', to = today()) {
  const tb = await api('GET', `/api/reports/trial-balance?from=${from}&to=${to}`);
  view(`<div class="bar">${back()}<label>From<input type="date" id="f" value="${from}"></label><label>To<input type="date" id="t" value="${to}"></label>
    <button class="btn pri" id="go">Run</button><button class="btn" id="x">Excel/CSV</button><button class="btn" onclick="print()">Print</button></div>
  <h2>Trial Balance</h2><p class="sub">${esc(S.companies.find((c) => c.id === S.cid).name)} · ${from || 'beginning'} to ${to} · ${tb.balanced ? '<span class="ok">Balanced ✓</span>' : '<span class="bad">NOT balanced</span>'}</p>
  <div class="panel tw"><table><thead><tr><th>Code</th><th>Account</th><th>Element</th><th class="n">Opening</th><th class="n">Debit</th><th class="n">Credit</th><th class="n">Closing Dr</th><th class="n">Closing Cr</th></tr></thead>
  <tbody>${tb.lines.map((l) => `<tr><td>${l.code}</td><td>${esc(l.name)}</td><td>${l.element}</td><td class="n">${money(l.opening)}</td><td class="n">${money(l.debit)}</td><td class="n">${money(l.credit)}</td><td class="n">${money(l.closing_dr)}</td><td class="n">${money(l.closing_cr)}</td></tr>`).join('')}</tbody>
  <tfoot><tr><td></td><td>Total</td><td></td><td></td><td></td><td></td><td class="n">${money(tb.total_dr)}</td><td class="n">${money(tb.total_cr)}</td></tr></tfoot></table></div>`, 'Reports › Trial Balance');
  wireBack(reportsHome);
  $('#go').onclick = () => trialBalance($('#f').value, $('#t').value);
  $('#x').onclick = () => csv('trial-balance.csv', [['Code', 'Account', 'Element', 'Opening', 'Debit', 'Credit', 'Closing Dr', 'Closing Cr'], ...tb.lines.map((l) => [l.code, l.name, l.element, l.opening, l.debit, l.credit, l.closing_dr, l.closing_cr])]);
}
async function ledgerStatement(lid, from = '', to = today()) {
  await loadCoa();
  const accts = ledgersFlat();
  lid = lid || accts[0]?.id;
  const st = await api('GET', `/api/reports/ledger/${lid}?from=${from}&to=${to}`);
  view(`<div class="bar">${back()}<select id="a">${accts.map((a) => `<option value="${a.id}" ${a.id === lid ? 'selected' : ''}>${a.code} ${esc(a.name)}</option>`).join('')}</select>
    <label>From<input type="date" id="f" value="${from}"></label><label>To<input type="date" id="t" value="${to}"></label><button class="btn pri" id="go">Run</button><button class="btn" onclick="print()">Print</button></div>
  <h2>Ledger Statement — ${st.account.code} ${esc(st.account.name)}</h2>
  <div class="panel tw"><table><thead><tr><th>Date</th><th>No.</th><th>Reference</th><th>Narration</th><th class="n">Debit</th><th class="n">Credit</th><th class="n">Balance</th></tr></thead>
  <tbody><tr><td></td><td></td><td></td><td><i>Opening balance</i></td><td></td><td></td><td class="n">${money(st.opening)}</td></tr>
  ${st.rows.map((r) => `<tr><td>${r.date}</td><td>${esc(r.number)}</td><td>${esc(r.reference)}</td><td>${esc(r.narration)}</td><td class="n">${money(r.debit)}</td><td class="n">${money(r.credit)}</td><td class="n">${money(r.balance)}</td></tr>`).join('')}</tbody>
  <tfoot><tr><td colspan="6">Closing balance</td><td class="n">${money(st.closing)}</td></tr></tfoot></table></div>`, 'Reports › Ledger Statement');
  wireBack(reportsHome);
  $('#go').onclick = () => ledgerStatement(Number($('#a').value), $('#f').value, $('#t').value);
}

// ---------------- system ----------------
function system() {
  const admin = can('*');
  view(`<div class="bar">${back()}</div><h2>System</h2><div class="grid">
    ${admin ? `<div class="tile" data-go="co"><div class="ic">🏢</div><b>Company Settings</b><small>Details, TRN, period lock</small></div>
    <div class="tile" data-go="nc"><div class="ic">➕</div><b>New Company</b><small>Add another company</small></div>
    <div class="tile" data-go="us"><div class="ic">👥</div><b>Users & Roles</b><small>Access per company</small></div>
    <div class="tile" data-go="am"><div class="ic">🔗</div><b>Account Mapping</b><small>Posting keys → ledgers</small></div>
    <div class="tile" data-go="dn"><div class="ic">🔢</div><b>Document Numbering</b><small>Prefixes and next numbers</small></div>
    <div class="tile" data-go="bk"><div class="ic">💾</div><b>Backup</b><small>Download full database</small></div>
    <div class="tile" data-go="au"><div class="ic">🕵️</div><b>Audit Log</b><small>Who did what, when</small></div>` : '<div class="empty">Administrator access required.</div>'}</div>`, 'System');
  wireBack(home);
  if (!admin) return;
  $('[data-go=co]').onclick = companySettings; $('[data-go=nc]').onclick = newCompany; $('[data-go=us]').onclick = users;
  $('[data-go=bk]').onclick = () => { location.href = '/api/backup'; toast('Backup downloading…'); };
  $('[data-go=au]').onclick = auditLog;
  $('[data-go=am]').onclick = accountMapping; $('[data-go=dn]').onclick = numbering;
}
const CF = [['name', 'Company name'], ['name_ar', 'Arabic name'], ['trn', 'VAT TRN'], ['address', 'Address'], ['phone', 'Phone'], ['email', 'Email'], ['currency', 'Currency'], ['fy_start_month', 'Financial year start month (1-12)']];
function companySettings() {
  const c = S.companies.find((x) => x.id === S.cid);
  dialog(`<h3>Company settings</h3><div class="fg">${CF.map(([k, t]) => `<label>${t}<input name="${k}" value="${esc(c[k])}" ${k === 'name_ar' ? 'dir="rtl"' : ''}></label>`).join('')}
    <label>Period locked up to<input type="date" name="lock_date" value="${c.lock_date || ''}"></label></div>
    <div class="ft"><button class="btn" value="cancel" formnovalidate>Cancel</button><button class="btn pri">Save</button></div>`,
  async (f) => { await api('PUT', `/api/companies/${c.id}`, formData(f)); toast('Saved'); enter(await api('GET', '/api/me')); });
}
function newCompany() {
  dialog(`<h3>New company</h3><div class="fg">${CF.slice(0, 3).map(([k, t]) => `<label>${t}<input name="${k}" ${k === 'name' ? 'required' : ''}></label>`).join('')}
    <label>Starter chart of accounts<select name="starter"><option value="1">Load UAE contracting starter</option><option value="0">Empty</option></select></label></div>
    <div class="ft"><button class="btn" value="cancel" formnovalidate>Cancel</button><button class="btn pri">Create</button></div>`,
  async (f) => { const v = formData(f); await api('POST', '/api/companies', { ...v, starter_coa: v.starter === '1' }); toast('Company created'); enter(await api('GET', '/api/me')); });
}
async function users() {
  const list = await api('GET', '/api/users');
  view(`<div class="bar">${back()}<button class="btn pri" id="nu">+ User</button></div><h2>Users & Roles</h2>
  <div class="panel tw"><table><thead><tr><th>Username</th><th>Name</th><th>Role</th><th>Companies</th><th>Status</th></tr></thead><tbody>
  ${list.map((u) => `<tr class="click" data-id="${u.id}"><td>${esc(u.username)}</td><td>${esc(u.full_name)}</td><td>${u.role}</td><td>${u.role === 'admin' ? 'All' : u.companies.map((id) => esc(S.companies.find((c) => c.id === id)?.name || id)).join(', ')}</td><td>${u.active ? 'Active' : '<span class="bad">Inactive</span>'}</td></tr>`).join('')}
  </tbody></table></div><p class="sub" style="margin-top:12px">Roles: <b>admin</b> everything · <b>accountant</b> accounts, post journals · <b>clerk</b> prepare drafts · <b>viewer</b> read only.</p>`, 'System › Users');
  wireBack(system);
  const ud = (u) => dialog(`<h3>${u ? esc(u.username) : 'New user'}</h3><div class="fg">
    ${u ? '' : '<label>Username<input name="username" required></label>'}<label>Full name<input name="full_name" value="${esc(u?.full_name)}" required></label>
    <label>Email<input name="email" value="${esc(u?.email)}"></label>
    <label>Role<select name="role">${['admin', 'accountant', 'clerk', 'viewer'].map((r) => `<option ${u?.role === r ? 'selected' : ''}>${r}</option>`).join('')}</select></label>
    <label>${u ? 'New password (leave blank to keep)' : 'Password'}<input name="password" type="password" ${u ? '' : 'required'} minlength="6"></label>
    ${u ? `<label>Status<select name="active"><option value="1">Active</option><option value="0" ${u.active ? '' : 'selected'}>Inactive</option></select></label>` : ''}</div>
    <p class="sub" style="margin:12px 0 4px">Company access</p>${S.companies.map((c) => `<label style="flex-direction:row;gap:8px"><input type="checkbox" name="co" value="${c.id}" ${u?.companies.includes(c.id) ? 'checked' : ''}>${esc(c.name)}</label>`).join('')}
    <div class="ft"><button class="btn" value="cancel" formnovalidate>Cancel</button><button class="btn pri">Save</button></div>`,
  async (f) => {
    const v = formData(f); const companies = [...f.querySelectorAll('[name=co]:checked')].map((x) => Number(x.value));
    const body = { ...v, companies, active: v.active === undefined ? 1 : Number(v.active) }; delete body.co;
    if (u) await api('PUT', `/api/users/${u.id}`, body); else await api('POST', '/api/users', body);
    toast('User saved'); users();
  });
  $('#nu').onclick = () => ud();
  document.querySelectorAll('tr[data-id]').forEach((tr) => (tr.onclick = () => ud(list.find((u) => u.id === Number(tr.dataset.id)))));
}
async function auditLog() {
  const rows = await api('GET', '/api/audit');
  view(`<div class="bar">${back()}</div><h2>Audit Log</h2><div class="panel tw"><table><thead><tr><th>When (UTC)</th><th>User</th><th>Action</th><th>Record</th><th>Details</th></tr></thead><tbody>
  ${rows.map((r) => `<tr><td>${r.at}</td><td>${esc(r.username)}</td><td>${r.action}</td><td>${r.entity} ${r.entity_id ?? ''}</td><td style="white-space:normal;max-width:420px">${esc(r.details)}</td></tr>`).join('')}</tbody></table></div>`, 'System › Audit Log');
  wireBack(system);
}

// ---------------- master data (generic, driven by the field registry) ----------------
async function masterHub() {
  const cat = await api('GET', '/api/md');
  view(`<div class="bar">${back()}</div><h2>Master Data</h2><p class="sub">Organisation, parties, items and accounts. Codes are created automatically when left blank.</p>
  <div class="grid">${cat.map((c) => `<div class="tile sec" data-k="${c.key}"><div class="ic">${c.icon}</div><b>${esc(c.label)}</b><small>${c.count} record${c.count === 1 ? '' : 's'}</small></div>`).join('')}</div>`, 'Master Data');
  wireBack(home);
  document.querySelectorAll('[data-k]').forEach((t) => (t.onclick = () => masterList(t.dataset.k)));
}

const OPTS = {};
async function refOptions(ref) { if (!OPTS[ref]) OPTS[ref] = await api('GET', `/api/options/${ref}`); return OPTS[ref]; }
const shown = (r, f) => (f.type === 'ref' ? r.labels[f.name] ?? '' : r.data[f.name] ?? '');

async function masterList(key, q = '', st = '') {
  const { section: s, rows } = await api('GET', `/api/md/${key}?q=${encodeURIComponent(q)}&status=${encodeURIComponent(st)}`);
  const cols = s.columns.map((n) => s.fields.find((f) => f.name === n));
  const statusF = s.fields.find((f) => f.name === 'Status' && f.type === 'sel');
  const edit = can('md.edit');
  view(`<div class="bar">${back()}${edit ? '<button class="btn pri" id="add">+ New</button>' : ''}
    <input id="q" placeholder="Search" value="${esc(q)}">${statusF ? `<select id="st"><option value="">All statuses</option>${statusF.options.map((o) => `<option ${o === st ? 'selected' : ''}>${o}</option>`).join('')}</select>` : ''}
    <button class="btn" id="x">Excel/CSV</button><button class="btn" onclick="print()">Print</button></div>
  <h2>${s.icon} ${esc(s.label)}</h2><p class="sub">${rows.length} record${rows.length === 1 ? '' : 's'}</p>
  <div class="panel tw">${rows.length ? `<table><thead><tr>${cols.map((c) => `<th class="${c.type === 'num' ? 'n' : ''}">${esc(c.name)}</th>`).join('')}</tr></thead><tbody>
  ${rows.map((r) => `<tr class="click" data-id="${r.id}">${cols.map((c) => `<td class="${c.type === 'num' ? 'n' : ''}">${esc(shown(r, c))}</td>`).join('')}</tr>`).join('')}</tbody></table>` : '<div class="empty">No records yet.</div>'}</div>`, `Master Data › ${s.label}`);
  wireBack(masterHub);
  $('#q').onchange = () => masterList(key, $('#q').value, $('#st')?.value || '');
  $('#st') && ($('#st').onchange = () => masterList(key, $('#q').value, $('#st').value));
  $('#add') && ($('#add').onclick = () => masterForm(s, null, () => masterList(key, q, st)));
  document.querySelectorAll('tr[data-id]').forEach((tr) => (tr.onclick = async () => {
    const { record } = await api('GET', `/api/md/${key}/${tr.dataset.id}`);
    masterForm(s, record, () => masterList(key, q, st));
  }));
  $('#x').onclick = () => csv(`${key}.csv`, [s.fields.map((f) => f.name), ...rows.map((r) => s.fields.map((f) => shown(r, f)))]);
}

async function masterForm(s, rec, done) {
  const refs = [...new Set(s.fields.filter((f) => f.type === 'ref' && f.refKind !== 'text').map((f) => f.ref))];
  await Promise.all(refs.map(refOptions));
  const ro = !can('md.edit');
  const v = (f) => rec?.data[f.name] ?? '';
  const input = (f) => {
    const dis = ro || f.masked ? 'disabled' : '';
    if (f.masked) return `<input value="••••" disabled>`;
    if (f.type === 'sel') return `<select name="${esc(f.name)}" ${dis}><option value=""></option>${f.options.map((o) => `<option ${String(v(f)) === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
    if (f.type === 'ref' && f.refKind !== 'text') return `<select name="${esc(f.name)}" ${dis}><option value=""></option>${OPTS[f.ref].map((o) => `<option value="${o.id}" ${Number(v(f)) === o.id ? 'selected' : ''}>${esc(o.label)}</option>`).join('')}</select>`;
    const t = f.type === 'num' ? 'type="number" step="any"' : f.type === 'date' ? 'type="date"' : '';
    return `<input name="${esc(f.name)}" ${t} value="${esc(v(f))}" ${/Arabic/.test(f.name) ? 'dir="rtl"' : ''} ${dis}>`;
  };
  const f = dialog(`<h3>${rec ? `${esc(s.label)} · ${esc(rec.code)}` : `${esc(s.label)} · New`}</h3>
    <div class="fg" style="max-height:62vh;overflow:auto;padding:2px">${s.fields.map((x) => `<label>${esc(x.name)}${x.name === 'Code' && !rec ? ` <small>(blank = automatic ${esc(s.autoCode)}-0001)</small>` : ''}${input(x)}</label>`).join('')}</div>
    <div class="ft">${rec && !ro ? '<button class="btn dng" value="delete" formnovalidate>Delete</button><span class="sp"></span>' : ''}<button class="btn" value="cancel" formnovalidate>${ro ? 'Close' : 'Cancel'}</button>${ro ? '' : '<button class="btn pri" value="save">Save</button>'}</div>`,
  async (form, action) => {
    if (action === 'delete') {
      if (!confirm(`Delete ${rec.code}?`)) throw new Error('cancelled');
      await api('DELETE', `/api/md/${s.key}/${rec.id}`); toast(`${rec.code} deleted`); return done();
    }
    const body = {};
    for (const x of s.fields) { const el = form.querySelector(`[name="${CSS.escape(x.name)}"]`); if (el && !x.masked) body[x.name] = el.value; }
    const r = rec ? await api('PUT', `/api/md/${s.key}/${rec.id}`, body) : await api('POST', `/api/md/${s.key}`, body);
    Object.keys(OPTS).forEach((k) => delete OPTS[k]);
    toast(`${r.code} saved`); done();
  });
  f.querySelector('.fg').scrollTop = 0;
}

// ---------------- account mapping & numbering ----------------
async function accountMapping() {
  const [rows, ledgers] = await Promise.all([api('GET', '/api/mapping'), refOptions('coa')]);
  view(`<div class="bar">${back()}<button class="btn pri" id="sv">Save mapping</button></div><h2>Account Mapping</h2>
  <p class="sub">Posting rules use these keys. Each key points to the ledger that receives the entry. Item, project and employee masters can override them.</p>
  <div class="panel tw"><table><thead><tr><th>Posting key</th><th>Used for</th><th>Ledger</th></tr></thead><tbody>
  ${rows.map((r) => `<tr><td><b>${esc(r.key)}</b></td><td>${esc(r.meaning)}</td><td><select data-key="${esc(r.key)}" style="min-width:320px"><option value="">— not mapped —</option>${ledgers.map((l) => `<option value="${l.id}" ${l.id === r.ledger_id ? 'selected' : ''}>${esc(l.label)}</option>`).join('')}</select></td></tr>`).join('')}
  </tbody></table></div>`, 'System › Account Mapping');
  wireBack(system);
  $('#sv').onclick = async () => {
    const body = Object.fromEntries([...document.querySelectorAll('[data-key]')].map((s) => [s.dataset.key, s.value || null]));
    await api('PUT', '/api/mapping', body); toast('Account mapping saved');
  };
}
async function numbering() {
  const rows = await api('GET', '/api/numbering');
  view(`<div class="bar">${back()}</div><h2>Document Numbering</h2><p class="sub">Each document type is numbered PREFIX-000001 in order. The next number can be moved forward, never back.</p>
  <div class="panel tw"><table><thead><tr><th>Module</th><th>Document</th><th>Prefix</th><th>Next number</th><th>Next document</th><th></th></tr></thead><tbody>
  ${rows.map((r) => `<tr><td>${esc(r.module)}</td><td>${esc(r.label)}</td><td><input value="${esc(r.prefix)}" data-p="${r.doc_type}" style="width:90px"></td><td><input type="number" min="1" value="${r.next_no}" data-n="${r.doc_type}" style="width:110px"></td><td><code>${esc(r.next)}</code></td><td><button class="btn" data-s="${r.doc_type}">Save</button></td></tr>`).join('')}
  </tbody></table></div>`, 'System › Document Numbering');
  wireBack(system);
  document.querySelectorAll('[data-s]').forEach((b) => (b.onclick = async () => {
    const d = b.dataset.s;
    await api('PUT', `/api/numbering/${d.toLowerCase()}`, { prefix: $(`[data-p="${d}"]`).value, next_no: Number($(`[data-n="${d}"]`).value) });
    toast(`${d} numbering saved`); numbering();
  }));
}

start();
