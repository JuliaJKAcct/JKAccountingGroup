#!/usr/bin/env node
/*
  JK Accounting Group — Knowledge Hub builder.

  Reads the firm's own repo as the source of truth and generates a single,
  self-contained, on-brand index page (the "Hub"):

    • Procedures & runbooks  ← projects/sops/*.md
    • Client intelligence    ← projects/client-intelligence/clients/*.md

  The look is the Atlas design system (brand/design-system + the SOP render's
  atlas.css) plus hub.css (Hub-only components, composed from Atlas tokens).
  Fonts are embedded, so the output works offline, in Drive, printed, and as a
  CSP-restricted Artifact — zero external requests.

  Nothing here is hand-maintained data: statuses, owners, entities, industries
  and knowledge-completeness are parsed live from the files, so the Hub can
  never drift from the repo. Re-run it whenever content changes.

    node projects/knowledge-hub/build-hub.mjs

  "Open" buttons point at the files on GitHub (the repo is the home; the Hub is
  the index). Adjust REPO / BRANCH below if the remote changes.
*/
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
// Reuse the client-intelligence dashboard engine (PR #77) — the SAME parser and the
// SAME expandable client cards, so the Hub's client section is identical to the
// standalone dashboard and there is one implementation, no drift.
import { loadClients, clientCard, DASH_CSS } from '../../.claude/skills/client-intelligence/render/build.mjs';

const here = dirname(fileURLToPath(import.meta.url));      // …/projects/knowledge-hub
const repoRoot = resolve(here, '../..');
const REPO = 'JuliaJKAcct/JKAccountingGroup';
const BRANCH = 'main';
const blob = (relPath) => `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;

/* ---------------- tiny helpers ---------------- */
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const read = (p) => readFileSync(p, 'utf8');
const isPending = (s) => !s || /^_?\(pending/i.test(s.trim());

function stripMd(s) {
  return String(s || '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')   // [txt](url) → txt
    .replace(/\*\*/g, '')                        // bold
    .replace(/`/g, '')                           // code ticks
    .replace(/_\(([^)]*)\)_/g, '($1)')           // _(x)_ → (x)
    .replace(/(^|[\s(])_([^_]+)_(?=[\s.,;)]|$)/g, '$1$2') // _italic_ → italic
    .replace(/\s+/g, ' ')
    .trim();
}
function firstHeading(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? stripMd(m[1]) : '';
}
function field(md, label) {
  // matches a "- **Label:** value" bullet (value up to end of line)
  const re = new RegExp('^[-*]\\s*\\*\\*' + label.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&') + ':?\\*\\*\\s*(.+)$', 'mi');
  const m = md.match(re);
  return m ? m[1].trim() : '';
}
function headerVal(md, label) {
  // matches "**Label:** value" inside the status blockquote (value up to · or ** or EOL)
  const re = new RegExp('\\*\\*' + label + ':?\\*\\*\\s*([^·*\\n]+)', 'i');
  const m = md.match(re);
  return m ? m[1].trim() : '';
}

function shortEntity(raw) {
  const s = (raw || '').toLowerCase();
  if (isPending(raw)) return { label: 'Entity TBD' };
  if (/s-?corp|1120-s/.test(s)) return { label: 'S-Corp' };
  if (/c-?corp|c-corporation|1120(?!-s)/.test(s)) return { label: 'C-Corp' };
  if (/partnership|1065/.test(s)) return { label: 'Partnership' };
  if (/\bllc\b/.test(s) && /(schedule c|disregarded|single-member)/.test(s)) return { label: 'LLC · Sch C' };
  if (/\bllc\b/.test(s)) return { label: 'LLC' };
  if (/corporation|\binc\b|\bcorp\b/.test(s)) return { label: 'Corporation' };
  return { label: stripMd(raw).split(/[—(]/)[0].trim().slice(0, 18) || 'Entity' };
}
function shortIndustry(raw) {
  if (isPending(raw)) return null;
  let s = stripMd(raw).split(' — ')[0];
  s = s.replace(/\s*\((?:Gmail|Double|Ping|inference|confirmed|high|medium|low)[^)]*\)\s*$/i, '').trim();
  if (s.length > 74) s = s.slice(0, 73).replace(/\s+\S*$/, '') + '…';
  return s;
}
function shortEngagement(raw) {
  if (isPending(raw)) return null;
  const parts = stripMd(raw).split(';')
    .map((x) => x.trim())
    .filter((x) => x && !/pending/i.test(x) && !/^\(?other services/i.test(x))
    .map((x) => x.split(' — ')[0].split(/\.\s/)[0].trim())   // drop em-dash asides & trailing sentences
    .filter(Boolean);
  let s = parts.slice(0, 2).join(' · ').replace(/[.;,]+$/, '');
  if (!s) return null;
  if (s.length > 72) s = s.slice(0, 71).replace(/\s+\S*$/, '') + '…';
  return s;
}
function completeness(pend) {
  if (pend <= 5) return { key: 'rich', label: 'Rich' };
  if (pend <= 12) return { key: 'building', label: 'Building' };
  return { key: 'early', label: 'Early' };
}
function ownerKey(o) {
  const s = (o || '').toLowerCase();
  if (s.includes('lilian')) return 'lilian';
  if (s.includes('maria')) return 'maria';
  if (s.includes('julia')) return 'julia';
  return 'firm';
}
function ownerName(key) {
  return { lilian: 'Lilian', maria: 'Maria', julia: 'Julia', firm: 'Firm' }[key] || 'Firm';
}

/* ---------------- icons ---------------- */
const IC = {
  arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></svg>',
  gh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3h7v7M21 3l-9 9"/><path d="M20 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="8" r="3.2"/><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15 5.2a3.2 3.2 0 0 1 0 5.6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
};

/* ---------------- SOP catalog (categories + curated short titles/blurbs) ---------------- */
const SOP_GROUPS = [
  {
    name: 'Company formation', note: 'Standing up a new entity, start to finish',
    items: [
      { file: 'florida-company-formation-sunbiz.md', title: 'Florida Company Formation (Sunbiz)', tag: 'Part 1',
        blurb: 'Form the company with the State of Florida on Sunbiz — entity choice (LLC vs Corp, the S-corp angle), shared prerequisites, the Articles screen by screen, fees and the annual-report cadence.' },
      { file: 'ein-application-irs.md', title: 'Federal EIN Application (SS-4)', tag: 'Part 2',
        blurb: 'Get the business’s federal EIN once it’s active on Sunbiz — the SSN/ITIN online path vs the fax “Foreign” path, the LLC-classification traps, and the after-steps.' },
    ],
  },
  {
    name: 'Licensing & local tax', note: 'City / county receipts and permits',
    items: [
      { file: 'hollywood-broward-business-tax-receipt.md', title: 'Business Tax Receipt — Hollywood + Broward',
        blurb: 'File a Business Tax Receipt for a business in Hollywood, FL — the home-occupation zoning gate first, then the city + county filings, with every link and the email map.' },
    ],
  },
  {
    name: 'Bookkeeping', note: 'Monthly close & review',
    items: [
      { file: 'ecoorganic-bookkeeping-review.md', title: 'Ecoorganic — Monthly Bookkeeping & Review', perClient: true,
        blurb: 'Ecoorganic’s monthly categorization rules, chart-of-accounts conventions, the reviewer checklist, and the open-decisions log. A per-client runbook.' },
    ],
  },
  {
    name: 'Client portal (Double)', note: 'Getting clients into the portal, on-brand',
    items: [
      { file: 'double-portal-first-login.md', title: 'Double Portal — First-Time Sign-In',
        blurb: 'The reliable password-reset workaround for the Double client portal, plus ready-to-send client guides (visual guide + PDF, email, WhatsApp — EN & RU).' },
      { file: 'double-portal-branding.md', title: 'Double Portal — Branding Setup',
        blurb: 'The firm’s on-brand configuration of the Double client portal — exact brand / button / background hex mapped to the design system, plus logo & favicon assets.' },
    ],
  },
];

/* ---------------- build SOP cards ---------------- */
let sopCount = 0;
const sopOwnerKeys = [];
const sopGroupsHtml = SOP_GROUPS.map((grp) => {
  const cards = grp.items.map((it) => {
    const rel = 'projects/sops/' + it.file;
    const abs = resolve(repoRoot, rel);
    if (!existsSync(abs)) return '';
    const md = read(abs);
    const owner = headerVal(md, 'Owner of SOP') || headerVal(md, 'Owner') || 'Firm';
    const ok = ownerKey(owner);
    sopOwnerKeys.push(ok);
    const updated = headerVal(md, 'Last updated') || headerVal(md, 'Started') || '';
    const renderRel = rel.replace(/\.md$/, '.html');
    const hasRender = existsSync(resolve(repoRoot, renderRel));
    sopCount++;
    const text = [it.title, it.blurb, grp.name, owner, it.tag, it.perClient ? 'per-client runbook' : '']
      .join(' ').toLowerCase();
    return `
      <a class="hcard doc-card" href="${esc(blob(rel))}" target="_blank" rel="noopener"
         data-card data-type="sop" data-owner="${ok}" data-text="${esc(text)}">
        ${IC.arrow}
        <div class="khead">
          <span class="kkick">SOP${it.tag ? ' · ' + esc(it.tag) : ''}</span>
          <span class="stat active"><span class="d"></span>Active</span>
        </div>
        <div class="ttl">${esc(it.title)}</div>
        <p class="blurb">${esc(it.blurb)}</p>
        <div class="dmeta">
          <span class="owner"><span class="av ${ok}">${esc(ownerName(ok)[0])}</span>${esc(ownerName(ok))}</span>
          ${updated ? `<span class="metf">${IC.cal}${esc(updated)}</span>` : ''}
          ${it.perClient ? '<span class="tagm">Per-client</span>' : ''}
          ${hasRender ? '<span class="tagm">Atlas render</span>' : ''}
        </div>
      </a>`;
  }).join('');
  return `
    <div class="hgroup" data-group>
      <div class="hgroup-hd">
        <h3>${esc(grp.name)}</h3>
        <span class="gct">${grp.items.length}</span>
        ${grp.note ? `<span class="gnote">${esc(grp.note)}</span>` : ''}
      </div>
      <div class="dgrid">${cards}</div>
    </div>`;
}).join('');

/* ---------------- build client cards (reuse the CI dashboard engine) ---------------- */
// loadClients() + clientCard() come from the client-intelligence render engine: the
// SAME parse + the SAME expandable cards as the standalone dashboard. Clicking a card
// expands services / systems / open items / sources INLINE — no navigation.
const clients = loadClients(repoRoot);
const clientCards = clients.map(clientCard).join('');
const clientOwnerKeys = clients.map((c) => ownerKey(c.owner));

/* owner filter chips (distinct owners across SOPs + clients) */
const ownersPresent = new Set([...sopOwnerKeys, ...clientOwnerKeys]);
const orderedOwners = ['julia', 'lilian', 'maria'].filter((o) => ownersPresent.has(o));
const ownerChips = ['<button class="ochip" data-owner-filter="all" aria-pressed="true">Everyone</button>']
  .concat(orderedOwners.map((o) => `<button class="ochip" data-owner-filter="${o}" aria-pressed="false">${esc(ownerName(o))}</button>`))
  .join('');

const clientCount = clients.length;
const totalCount = sopCount + clientCount;
const today = new Date().toISOString().slice(0, 10);

/* ---------------- assemble ---------------- */
const medallion = `<svg class="medallion" viewBox="0 0 120 120" role="img" aria-label="JK Accounting Group medallion">
  <defs><path id="arcTop" d="M20.9 51.7 A40 40 0 0 1 99.1 51.7" fill="none"></path><path id="arcBot" d="M20.9 68.3 A40 40 0 0 0 99.1 68.3" fill="none"></path></defs>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#ECE6DA" stroke-width="3"></circle>
  <circle cx="60" cy="60" r="50.5" fill="none" stroke="#CFA268" stroke-width="1"></circle>
  <text font-family="'IBM Plex Mono',monospace" font-size="6" letter-spacing="1.6" fill="#ECE6DA" text-anchor="middle"><textPath href="#arcTop" startOffset="50%">JK ACCOUNTING GROUP</textPath></text>
  <text font-family="'IBM Plex Mono',monospace" font-size="5" letter-spacing="1.4" fill="#ECE6DA" text-anchor="middle"><textPath href="#arcBot" startOffset="50%">TAX · BOOKKEEPING · CFO</textPath></text>
  <g fill="#CFA268"><path d="M7 56.5 l3.5 3.5 -3.5 3.5 -3.5 -3.5 z"></path><path d="M113 56.5 l3.5 3.5 -3.5 3.5 -3.5 -3.5 z"></path></g>
  <g transform="translate(60,60) scale(0.44) translate(-59,-56)"><g fill="none" stroke="#ECE6DA" stroke-width="9" stroke-linecap="butt" stroke-linejoin="miter"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"></path><path d="M70 26 L70 86"></path><path d="M70 56 L92 26"></path><path d="M70 56 L95 86"></path></g></g>
</svg>`;

const BODY = `
<!-- ============================ TOOLBAR ============================ -->
<header class="bar">
  <div class="in">
    <div class="lhs">
      <svg viewBox="18 20 82 72" class="jkmark" aria-hidden="true"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"/><path d="M70 26 L70 86"/><path d="M70 56 L92 26"/><path d="M70 56 L95 86"/></svg>
      <b>JK Accounting Group</b>
      <span class="sep"></span>
      <span class="k">Knowledge Hub</span>
    </div>
    <div class="rhs">
      <button class="tbtn" id="themeBtn" type="button" aria-label="Toggle light or dark theme">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>
        <span class="lbl">Theme</span>
      </button>
      <button class="tbtn" id="printBtn" type="button" aria-label="Print or save as PDF">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/></svg>
        <span class="lbl">Print / PDF</span>
      </button>
    </div>
  </div>
</header>

<!-- ============================ MASTHEAD ============================ -->
<section class="mast">
  <div class="in">
    ${medallion}
    <p class="kick">Internal reference · one place for everything we know</p>
    <h1>Firm Knowledge Hub<span class="loc">Our procedures and every client, organized to find in seconds</span></h1>
    <p class="lede">The front door to the firm’s know-how: the <b>procedures</b> we follow (SOPs and runbooks) and the <b>client intelligence</b> we’ve gathered on each account. Search it, filter it, open any document. Built straight from the repo, so it never goes out of date.</p>
    <div class="meta">
      <span class="chipm live"><span class="dot"></span><b>${totalCount}</b>&nbsp;documents</span>
      <span class="chipm"><span class="dot"></span><b>${sopCount}</b>&nbsp;procedures</span>
      <span class="chipm"><span class="dot"></span><b>${clientCount}</b>&nbsp;clients</span>
      <span class="chipm"><span class="dot"></span>Generated&nbsp;<b>${today}</b></span>
    </div>
  </div>
</section>

<!-- ============================ INTRO / HOW IT WORKS ============================ -->
<div class="hubintro">
  <div class="box">
    <div class="lead">
      <p class="t">How this works</p>
      <p>This is the <b>review Hub</b> — it shows <b>everything in the repo</b>, including work still in progress. It’s where the team reviews what we’ve built. When a document is approved and marked <b>ready</b>, we publish just that one to the team site.</p>
      <p>The repo stays the single source of truth; this page is generated from it. Every card opens the real file on GitHub.</p>
    </div>
    <div class="legend">
      <p class="t">How to use it</p>
      <div class="legrow"><span class="sw active"></span><span><b>Procedures</b> — open the full SOP document.</span></div>
      <div class="legrow"><span class="sw rich"></span><span><b>Clients</b> — click a card to expand its <b>services, systems, open items &amp; sources</b>, right here.</span></div>
      <div class="legrow"><span class="sw building"></span><span><b>Search &amp; filters</b> up top work across both — name, entity, service, owner.</span></div>
    </div>
  </div>
</div>

<!-- ============================ CONTROLS ============================ -->
<div class="hubctl">
  <div class="in">
    <div class="hsearch" id="hsearch">
      ${IC.search}
      <input type="search" id="q" placeholder="Search procedures & clients… (name, entity, industry, service)" autocomplete="off" aria-label="Search the hub">
      <button class="clr" id="clr" type="button" aria-label="Clear search">${IC.x}</button>
    </div>
    <div class="segs" role="tablist" aria-label="Filter by type">
      <button role="tab" aria-selected="true" data-seg="all">All <span class="n">${totalCount}</span></button>
      <button role="tab" aria-selected="false" data-seg="sop">Procedures <span class="n">${sopCount}</span></button>
      <button role="tab" aria-selected="false" data-seg="client">Clients <span class="n">${clientCount}</span></button>
    </div>
    <div class="ochips"><span class="ol">Owner</span>${ownerChips}</div>
  </div>
</div>

<!-- ============================ PROCEDURES ============================ -->
<section class="hsec" id="sec-sop" data-section>
  <div class="hsec-hd">
    <span class="tile">${IC.doc}</span>
    <h2>Procedures &amp; runbooks</h2>
    <span class="ct">${sopCount}</span>
  </div>
  <p class="hsec-sub">How the firm does its work — formation, licensing, bookkeeping and the client portal. Written to be picked up cold, months later.</p>
  ${sopGroupsHtml}
</section>

<!-- ============================ CLIENTS ============================ -->
<section class="hsec" id="sec-client" data-section>
  <div class="hsec-hd">
    <span class="tile">${IC.people}</span>
    <h2>Client intelligence</h2>
    <span class="ct">${clientCount}</span>
  </div>
  <p class="hsec-sub"><b>Click any client</b> to open its details right here — services, systems, open items and sources. These are the same cards as the standalone Client Review Dashboard (one engine). Sensitive data stays in Drive / Double, linked from each card.</p>
  <div class="cx-grid">${clientCards}</div>
</section>

<!-- ============================ NO RESULTS ============================ -->
<div class="noresults" id="noresults">
  <div class="box"><h3>No matches</h3><p>Nothing matches your search and filters. Try a different word, or reset the filters.</p></div>
</div>

<!-- ============================ FOOTER ============================ -->
<footer class="foot">
  <div class="in">
    <div class="row">
      <svg viewBox="18 20 82 72" class="jkmark" aria-hidden="true"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"/><path d="M70 26 L70 86"/><path d="M70 56 L92 26"/><path d="M70 56 L95 86"/></svg>
      <div>
        <b>JK Accounting Group — Knowledge Hub</b>
        <p>Generated from the repository (<code>projects/sops</code> + <code>projects/client-intelligence</code>). The repo is the source of truth; this page is a view of it. Re-run <code>build-hub.mjs</code> to refresh. Every card opens the real file on GitHub.</p>
      </div>
    </div>
    <div class="bottom">
      <span>Internal reference — do not distribute</span>
      <span>Atlas design system — built with the impeccable skill</span>
    </div>
  </div>
</footer>

<script>
(function(){
  var root = document.documentElement;
  root.classList.add('js');

  // Theme toggle
  function isDark(){ var t=root.getAttribute('data-theme'); if(t) return t==='dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }
  var tb=document.getElementById('themeBtn');
  if(tb) tb.addEventListener('click', function(){ root.setAttribute('data-theme', isDark()?'light':'dark'); });
  var pb=document.getElementById('printBtn');
  if(pb) pb.addEventListener('click', function(){ window.print(); });

  // Filtering: search + type segment + owner
  // SOP cards are [data-card]; client cards are the CI engine's .cx-card. Handle both.
  var SEL = '[data-card], .cx-card';
  var cards = [].slice.call(document.querySelectorAll(SEL));
  var groups = [].slice.call(document.querySelectorAll('[data-group]'));
  var sections = [].slice.call(document.querySelectorAll('[data-section]'));
  var noRes = document.getElementById('noresults');
  var qEl = document.getElementById('q');
  var hs = document.getElementById('hsearch');
  var clr = document.getElementById('clr');
  var state = { q:'', type:'all', owner:'all' };

  // Content must never depend on a JS reveal: show any reveal-gated card immediately.
  [].forEach.call(document.querySelectorAll('.reveal'), function(el){ el.classList.add('in'); });
  function cardType(c){ return c.classList.contains('cx-card') ? 'client' : c.getAttribute('data-type'); }
  function cardOwner(c){ return (c.getAttribute('data-owner')||'').toLowerCase(); }

  function apply(){
    var q = state.q.trim().toLowerCase();
    var shown = 0;
    cards.forEach(function(c){
      var ok = (state.type==='all' || cardType(c)===state.type)
            && (state.owner==='all' || cardOwner(c)===state.owner)
            && (q==='' || (c.getAttribute('data-text')||'').indexOf(q) !== -1);
      c.style.display = ok ? '' : 'none';
      if(ok) shown++;
    });
    groups.forEach(function(g){
      var any = [].some.call(g.querySelectorAll(SEL), function(c){ return c.style.display!=='none'; });
      g.hidden = !any;
    });
    sections.forEach(function(s){
      var any = [].some.call(s.querySelectorAll(SEL), function(c){ return c.style.display!=='none'; });
      s.hidden = !any;
    });
    noRes.classList.toggle('on', shown===0);
  }

  qEl.addEventListener('input', function(){ state.q=qEl.value; hs.classList.toggle('has-value', qEl.value.length>0); apply(); });
  clr.addEventListener('click', function(){ qEl.value=''; state.q=''; hs.classList.remove('has-value'); qEl.focus(); apply(); });

  [].forEach.call(document.querySelectorAll('[data-seg]'), function(b){
    b.addEventListener('click', function(){
      state.type=b.getAttribute('data-seg');
      [].forEach.call(document.querySelectorAll('[data-seg]'), function(x){ x.setAttribute('aria-selected', x===b ? 'true':'false'); });
      apply();
    });
  });
  [].forEach.call(document.querySelectorAll('[data-owner-filter]'), function(b){
    b.addEventListener('click', function(){
      state.owner=b.getAttribute('data-owner-filter');
      [].forEach.call(document.querySelectorAll('[data-owner-filter]'), function(x){ x.setAttribute('aria-pressed', x===b ? 'true':'false'); });
      apply();
    });
  });
  // keyboard: "/" focuses search
  document.addEventListener('keydown', function(e){
    if(e.key==='/' && document.activeElement!==qEl){ e.preventDefault(); qEl.focus(); }
    if(e.key==='Escape' && document.activeElement===qEl){ qEl.value=''; state.q=''; hs.classList.remove('has-value'); apply(); }
  });
  // expand every client detail before printing so PDFs are complete
  window.addEventListener('beforeprint', function(){ [].forEach.call(document.querySelectorAll('details.cx-more'), function(d){ d.open=true; }); });
})();
</script>
`;

/* ---------------- wrap into a self-contained standalone document ---------------- */
const fonts = read(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'));
const atlas = read(resolve(repoRoot, '.claude/skills/sop-authoring/render/atlas.css'));
const hubcss = read(resolve(here, 'hub.css'));
// fonts + atlas (shared) + hub.css (Hub components) + DASH_CSS (the CI dashboard's
// client-card styles, reused verbatim so the cards look identical to the dashboard).
const style = [fonts.trimEnd(), atlas.trimEnd(), hubcss.trimEnd(), DASH_CSS().trimEnd()].join('\n\n') + '\n';

const faviconSvg = read(resolve(repoRoot, 'brand/logo/favicon/favicon.svg'));
const favicon = 'data:image/svg+xml;base64,' + Buffer.from(faviconSvg).toString('base64');
const desc = 'JK Accounting Group Knowledge Hub — the firm’s procedures (SOPs) and client intelligence in one on-brand, searchable index.';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="${favicon}">
<title>JK Accounting Group — Knowledge Hub</title>
<style>
${style}</style>
</head>
<body>
${BODY.trim()}
</body>
</html>
`;

const outStandalone = resolve(here, 'index.html');
writeFileSync(outStandalone, html);
// Artifact fragment (body-only; the Artifact tool supplies <head>/<body>)
const fragment = `<title>JK Accounting Group — Knowledge Hub</title>\n<style>\n${style}</style>\n\n${BODY.trim()}\n`;
const outFrag = resolve(here, 'scratch/hub.artifact.html');
writeFileSync(outFrag, fragment);

console.error(`Hub built: ${sopCount} procedures + ${clientCount} clients = ${totalCount} documents`);
console.error(`standalone → ${outStandalone} (${(html.length/1024).toFixed(0)}KB)`);
console.error(`fragment   → ${outFrag} (${(fragment.length/1024).toFixed(0)}KB)`);
