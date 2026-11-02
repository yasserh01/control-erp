'use strict';
// Screen/field registry, taken from the v108 prototype (registry/modules.json).
// Field spec strings: "Label", "Label:num", "Label:date", "Label:sel:A|B|C", "Label:ref:<section>".
const MODULES = require('./registry/modules.json');

// Sections served by the generic master-data engine (Stage 1, phase 2).
// coa and companies have their own native screens; report/custom views are built later.
const ENABLED = new Set([
  'departments', 'designations', 'employees', 'customers', 'suppliers', 'services', 'items', 'categories', 'units',
  'taxcodes', 'paycat', 'empexp', 'vehcat', 'costel', 'costcenters', 'currencies', 'branches', 'stores', 'banks',
  'cashboxes', 'pholders', 'payterms',
]);

// Fields only visible to roles with salary.view (masked as •••• otherwise, as in the prototype).
const SENSITIVE = /^(Basic|Housing|Transport|Other|Food|Mobile|IBAN|Account No|Air Ticket Monthly|Benefit-[12] Monthly|Opening Leave Prov|Opening EOSB Prov)$/;

function parseField(spec) {
  const [label, type = 'text', opt = ''] = spec.includes(':') ? splitSpec(spec) : [spec];
  const f = { name: label, type, sensitive: SENSITIVE.test(label) };
  if (type === 'sel') { f.options = opt.split('|'); f.allowBlank = f.options.includes(''); f.options = f.options.filter((o) => o !== ''); }
  if (type === 'ref') f.ref = opt;
  return f;
}
function splitSpec(spec) {
  const i = spec.indexOf(':');
  const label = spec.slice(0, i);
  const rest = spec.slice(i + 1);
  const j = rest.indexOf(':');
  return j < 0 ? [label, rest, ''] : [label, rest.slice(0, j), rest.slice(j + 1)];
}

const SECTIONS = new Map();
for (const m of MODULES) {
  for (const s of m.s) {
    if (!s || typeof s !== 'object' || !s.k) continue;
    SECTIONS.set(s.k, {
      key: s.k, label: s.l, module: m.id, moduleName: m.n, icon: s.ic || '', prefix: s.pre || null,
      autoCode: s.ac || null, show: Array.isArray(s.show) ? s.show : null,
      fields: (s.f || []).filter((x) => typeof x === 'string').map(parseField),
    });
  }
}

function section(key) {
  const s = SECTIONS.get(key);
  if (!s || !ENABLED.has(key)) return null;
  return s;
}
const listColumns = (s) => (s.show || s.fields.slice(0, 7).map((f) => f.name)).filter((n) => s.fields.some((f) => f.name === n));
const masterSections = () => [...ENABLED].map((k) => SECTIONS.get(k)).filter(Boolean);

// All numbered document types in the prototype (for the Document Numbering screen).
function documentTypes() {
  const out = [];
  for (const m of MODULES) for (const s of m.s) if (s && s.pre) out.push({ doc_type: s.pre, label: s.l, module: m.n });
  out.push({ doc_type: 'JV', label: 'Journal Voucher', module: 'Finance' });
  const seen = new Set();
  return out.filter((d) => (seen.has(d.doc_type) ? false : seen.add(d.doc_type)));
}

module.exports = { SECTIONS, ENABLED, section, listColumns, masterSections, documentTypes, parseField };
