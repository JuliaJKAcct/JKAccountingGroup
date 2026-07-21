#!/usr/bin/env node
/*
  Client-Intelligence review dashboard — deterministic render engine.

  Parses every projects/client-intelligence/clients/<slug>.md into structured
  fields (Operating zone only — the CI-only §6 "Outstanding items" is surfaced as
  review context, but nothing sensitive is emitted: these files already hold
  non-sensitive facts + links only) and assembles ONE self-contained, on-brand,
  filterable HTML page for on-screen review.

  Look is guaranteed on-brand: it reuses the committed Atlas tokens + embedded
  brand fonts (brand/design-system) and the SOP render's .bar/.mast/.foot
  components verbatim, then adds a dashboard-specific card grid.

  Output is an ARTIFACT FRAGMENT (<title> + <style> + markup + <script>) — the
  Artifact tool supplies <!doctype>/<head>/<body>.

  Usage: node build.mjs <repoRoot> <outFile>
*/
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(process.argv[2] || '.');
const outFile  = resolve(process.argv[3] || 'ci-review-dashboard.html');
const asOf     = process.argv[4] || '2026-07-21';       // passed in (no Date.now in some envs)

const clientsDir = resolve(repoRoot, 'projects/client-intelligence/clients');
const fonts = readFileSync(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'), 'utf8');
const atlas = readFileSync(resolve(repoRoot, '.claude/skills/sop-authoring/render/atlas.css'), 'utf8');

/* ---------------- parsing helpers ---------------- */
const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function mdInline(s){
  if(!s) return '';
  let out = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m,t,u)=>`A${u}${t}B`);
  out = esc(out);
  out = out.replace(/A([^]+)([^]+)B/g, (m,u,t)=>`<a href="${u}" target="_blank" rel="noopener">${t}</a>`);
  out = out.replace(/_\(([^)]*)\)_/g,'<span class="src">($1)</span>');
  out = out.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  out = out.replace(/`([^`]+)`/g,'<code>$1</code>');
  out = out.replace(/(^|[^_])_([^_]+)_(?!_)/g,'$1<em>$2</em>');
  return out;
}
// strip italic source tags + collapse ws, for compact field display
const stripSrc = s => String(s ?? '').replace(/_\([^)]*\)_/g,'').replace(/\*\*/g,'').replace(/\s+/g,' ').trim();

function sectionMap(md){
  const parts = md.split(/\n(?=## )/);
  const map = {};
  for(const p of parts){
    const m = p.match(/^## (.+)/);
    if(m) map[m[1].trim()] = p.slice(p.indexOf('\n')+1);
  }
  return map;
}
const getSec = (map, n) => { const k = Object.keys(map).find(k=>k.startsWith(n+'.')); return k ? map[k] : ''; };

function subMap(text){
  const parts = text.split(/\n(?=### )/);
  const map = {};
  for(const p of parts){
    const m = p.match(/^### (.+)/);
    if(m) map[m[1].trim()] = p.slice(p.indexOf('\n')+1);
  }
  return map;
}
function kv(text){
  const d = {};
  for(const line of text.split('\n')){
    const m = line.match(/^- \*\*(.+?):\*\*\s*(.*)$/);
    if(m) d[m[1].trim()] = m[2].trim();
  }
  return d;
}
// top-level bullets (not indented), joined multi-line handled loosely
function bullets(text){
  const out = [];
  for(const line of (text||'').split('\n')){
    const m = line.match(/^- (?!\[)(.*\S)\s*$/);       // skip "- [ ]" checkboxes
    if(m) out.push(m[1].trim());
  }
  return out;
}
function checkboxes(text){
  const out = [];
  for(const line of (text||'').split('\n')){
    const m = line.match(/^- \[[ xX]\] (.*\S)\s*$/);
    if(m) out.push(m[1].trim());
  }
  return out;
}

function entityTag(s){
  if(/1120-S|S-corp|S-corporation/i.test(s)) return 'S-corp · 1120-S';
  if(/1120\b|C-corp|C-corporation/i.test(s)) return 'C-corp · 1120';
  if(/Schedule C/i.test(s)) return 'LLC · Sch C';
  if(/1120/i.test(s)) return 'Corp · 1120';
  if(/LLC/i.test(s)) return 'LLC';
  const c = stripSrc(s); return c ? c.slice(0,22) : null;
}
function stateTag(s){
  if(/florida|(^|[^a-z])FL([^a-z]|$)/i.test(s)){
    const c = (s.match(/Broward|Palm Beach|Miami-?Dade|Hillsborough|Orange/i)||[])[0];
    return c ? `FL · ${c}` : 'FL';
  }
  if(/pending|not established|unknown/i.test(s)) return null;
  const c = stripSrc(s).replace(/\(.*?\)/g,'').replace(/[.,;\s]+$/,'').trim();
  return c ? c.slice(0,20) : null;
}
const freqOf = t => (t.match(/monthly|weekly|bi-?weekly|semi-?monthly|quarterly|annual/i)||[])[0]?.toLowerCase().replace('-','') || null;

function classifySvc(block){
  let t = null;
  for(const line of (block||'').split('\n')){
    const m = line.match(/^- \*\*(?:Applies\?|⚠️ Quirk to reconcile)\*\*\s*(.*)$/);
    if(m){ t = m[1]; break; }
  }
  const src = t ?? block ?? '';
  let state = 'neutral';
  if(/⚠|quirk|reconcile|conflict/i.test(src)) state = 'quirk';
  else if(/not our service|not on jk|handled.*own side|runs.*(its )?own|on its own/i.test(src)) state = 'off';
  else if(/\bn\/a\b/i.test(src) || /(^|[—-])\s*no\b/i.test(src)) state = 'off';
  else if(/\byes\b/i.test(src)) state = 'on';
  return { state, freq: freqOf(src) };
}

function label(setSlugs){
  const has = s => setSlugs.includes(s);
  if(has('sunoma-inc') || has('magnum-152')) return 'Pawn & jewelry';
  if(has('beemold-usa') || has('margate-plumbing')) return 'Construction';
  if(has('sensustech') || has('lumetro') || has('mobilesource-corp')) return 'Tech group';
  return 'Linked group';
}

// system chips by keyword scan (robust to table-format variation; non-sensitive)
const SYS = [
  ['QuickBooks Online', /quickbooks/i],
  ['Gusto', /gusto/i], ['ADP', /\bADP\b/], ['Bravo POS', /bravo/i],
  ['TaxDome', /taxdome/i], ['SaasAnt', /saasant/i],
  ['Amazon', /amazon/i], ['Shopify', /shopify/i], ['eBay', /ebay/i],
  ['Google Ads', /google ads/i], ['FL DOR portal', /fl dor|florida tax portal/i],
  ['Mercury', /mercury/i], ['TD Bank', /td bank/i], ['Chase', /\bchase\b/i],
  ['Wells Fargo', /wells fargo/i], ['Amex', /amex|american express/i],
];

/* ---------------- load + parse all clients ---------------- */
const files = readdirSync(clientsDir).filter(f=>f.endsWith('.md')).sort();
const clients = files.map(f=>{
  const slug = f.replace(/\.md$/,'');
  const md = readFileSync(resolve(clientsDir,f),'utf8');
  const title = (md.match(/^#\s+(.+)/m)||[])[1]?.trim() || slug;
  const st = md.match(/\*\*Status:\*\*\s*(.+?)\s*·\s*\*\*Owner:\*\*\s*(.+?)\s*·\s*\*\*Last updated:\*\*\s*([0-9-]+)/) || [];
  const status = st[1]||'Active', owner = st[2]||'Firm', updated = st[3]||'';
  const S = sectionMap(md);
  const snap = kv(getSec(S,'1'));
  const obl = subMap(getSec(S,'4'));
  const lic = kv(obl['Licenses & other filings']||'');
  const hist = subMap(getSec(S,'6'));

  const svc = {
    Bookkeeping: classifySvc(obl['Bookkeeping & monthly close']),
    'Income tax': classifySvc(obl['Income tax']),
    'Sales tax': classifySvc(obl['Sales tax']),
    Payroll: classifySvc(obl['Payroll']),
  };
  const flags = [];
  if(/1099 preparation/i.test(md)) flags.push('1099');
  if(/^Yes/i.test(lic['Annual report']||'')) flags.push('Annual report');
  if(/licens|insurance|WC|workers.?.?comp|FFL/i.test(obl['Licenses & other filings']||'')) flags.push('Licensing');

  const systems = SYS.filter(([,re])=>re.test(md)).map(([n])=>n);

  const links = getSec(S,'7');
  const dbl = (links.match(/\*\*Double client:\*\*[^(]*\((https?:\/\/[^)]+)\)/)||[])[1];
  const drv = (links.match(/Google Drive folder[^(]*\((https?:\/\/[^)]+)\)/)||[])[1];
  const related = [...links.matchAll(/\[`([a-z0-9-]+)\.md`\]/g)].map(m=>m[1]);
  const sopLine = links.split('\n').find(l=>/Related SOPs?/i.test(l)) || '';
  const sops = [...sopLine.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m=>({t:m[1],u:m[2]}));

  const industry = stripSrc(snap['Industry / what they do']||'').replace(/\*\*/g,'');
  const quirks = bullets(getSec(S,'5')).slice(0,4);
  const open = bullets(hist['Outstanding items (CI-only — never in the SOP)']||'').slice(0,4);
  const needed = checkboxes(hist['Information still needed']||'');

  return {
    slug, title, status, owner, updated,
    entity: entityTag(snap['Entity type']||''),
    state: stateTag(snap['Home state']||''),
    lang: stripSrc(snap['Primary language']||'').replace(/\*\*/g,''),
    industry, platform: stripSrc(snap['Accounting platform']||''),
    fye: stripSrc(snap['Fiscal year-end']||''),
    svc, flags, systems, dbl, drv, related, sops, quirks, open, needed,
  };
});

/* ---------------- owner-group graph ---------------- */
const bySlug = Object.fromEntries(clients.map(c=>[c.slug,c]));
const seen = new Set();
for(const c of clients){
  if(seen.has(c.slug)) continue;
  const comp = []; const stack=[c.slug];
  while(stack.length){
    const s = stack.pop(); if(seen.has(s)||!bySlug[s]) continue;
    seen.add(s); comp.push(s);
    for(const r of bySlug[s].related) if(!seen.has(r)) stack.push(r);
  }
  const lab = comp.length>1 ? label(comp) : null;
  comp.forEach(s=>{ if(bySlug[s]) bySlug[s].group = lab; });
}

/* ---------------- render ---------------- */
const JKMARK = `<svg viewBox="0 0 64 64" class="jkmark" aria-hidden="true"><path d="M29 18 L29 38 Q29 47 21.5 47 Q15.5 47 14.2 41.5"/><path d="M37 18 L37 47"/><path d="M37 32.5 L48 18"/><path d="M37 32.5 L49.5 47"/></svg>`;
const ICON = {
  sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"/></svg>`,
  print:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4v-6a2 2 0 012-2h12a2 2 0 012 2v6h-2M8 14h8v7H8z"/></svg>`,
  ext:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-8 8M18 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h5"/></svg>`,
};

const pill = (cls,txt) => txt ? `<span class="pill ${cls}">${esc(txt)}</span>` : '';

function svcRow(c){
  const order = ['Bookkeeping','Income tax','Sales tax','Payroll'];
  const items = order.map(k=>{
    const {state,freq} = c.svc[k];
    const cls = state==='on'?'on':state==='quirk'?'quirk':state==='off'?'off':'neutral';
    const det = state==='on' && freq ? `<i>${esc(freq)}</i>` : state==='off' ? `<i>n/a</i>` : state==='quirk' ? `<i>review</i>` : '';
    return `<span class="svc ${cls}">${esc(k)}${det}</span>`;
  }).join('');
  const fl = c.flags.map(f=>`<span class="svc flag">${esc(f)}</span>`).join('');
  return `<div class="svcs">${items}${fl}</div>`;
}
function blk(title, arr){
  if(!arr.length) return '';
  const li = arr.map(x=>`<li>${mdInline(x)}</li>`).join('');
  return `<div class="cx-blk"><h4>${title}</h4><ul>${li}</ul></div>`;
}
function card(c){
  const searchText = esc([c.title,c.industry,c.slug,c.group,c.state,c.entity,...c.systems,...c.quirks].join(' ').toLowerCase());
  const tags = [
    pill('entity', c.entity),
    pill('state', c.state),
    c.group ? `<span class="pill group">${esc(c.group)}</span>` : '',
  ].join('');
  const sys = c.systems.length ? `<div class="cx-blk"><h4>Systems</h4><div class="chips">${c.systems.map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div></div>` : '';
  const relNames = c.related.map(r=>bySlug[r]?`<a href="#${r}">${esc(bySlug[r].title)}</a>`:null).filter(Boolean).join(' · ');
  const need = c.needed.length ? `<div class="cx-need">${c.needed.length} field${c.needed.length>1?'s':''} still to confirm</div>` : '';
  const watch = blk('Watch &amp; quirks', c.quirks);
  const open  = blk('Open items — last agreed / pending', c.open);
  const cols  = (watch||open) ? `<div class="cx-cols">${watch}${open}</div>` : '';
  const sopLinks = c.sops.length
    ? c.sops.map(s=>`<a href="${s.u}" target="_blank" rel="noopener">${esc(s.t)}</a>`).join(' · ')
    : '<span class="cx-none">none yet</span>';
  const sources = `<div class="cx-blk cx-sources"><h4>Sources &amp; live records</h4>
    <div class="cx-srcline">
      ${c.dbl?`<a href="${c.dbl}" target="_blank" rel="noopener">Double ${ICON.ext}</a>`:''}
      ${c.drv?`<a href="${c.drv}" target="_blank" rel="noopener">Drive ${ICON.ext}</a>`:''}
      ${relNames?`<span class="rel">Linked: ${relNames}</span>`:''}
    </div>
    <p class="cx-hint"><b>Meetings &amp; latest detail</b> — open the client in Ping / Double for full meeting notes and action items.</p>
    <p class="cx-hint"><b>Need sensitive data</b> (EIN, address, a login, a contact email)? Ask Claude in chat — it pulls the value live from Double / Drive and never stores it here.</p>
    <p class="cx-hint"><b>Related SOP</b> — ${sopLinks}</p></div>`;
  return `
<article class="cx-card reveal" id="${c.slug}" data-owner="${esc(c.owner)}" data-text="${searchText}">
  <div class="cx-head">
    <h3>${esc(c.title)}</h3>
    <div class="cx-upd">${esc(c.updated)}<span class="dot"></span>${esc(c.owner)}</div>
  </div>
  <div class="cx-tags">${tags}</div>
  ${c.industry?`<p class="cx-ind">${mdInline(c.industry)}</p>`:''}
  ${svcRow(c)}
  <details class="cx-more">
    <summary>
      <span class="cx-sum"><span class="cx-sum-a">Details, systems &amp; sources</span><span class="cx-sum-b">Hide details</span></span>
      <svg class="cx-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <div class="cx-more-body">
      ${sys}
      ${cols}
      ${need}
      ${sources}
    </div>
  </details>
</article>`;
}

const owners = [...new Set(clients.map(c=>c.owner))];
const ownerOrder = ['Lilian','Maria','Julia','Firm'].filter(o=>owners.includes(o)).concat(owners.filter(o=>!['Lilian','Maria','Julia','Firm'].includes(o)));
const groupRank = c => c.group ? c.group : 'zzz';

function ownerSection(o){
  const list = clients.filter(c=>c.owner===o).sort((a,b)=> groupRank(a).localeCompare(groupRank(b)) || a.title.localeCompare(b.title));
  return `
<section class="cx-sec" data-ownersec="${esc(o)}">
  <div class="cx-sechead">
    <span class="k">${esc(o)}'s book</span>
    <h2>${list.length} client${list.length>1?'s':''}</h2>
    <span class="cx-line"></span>
  </div>
  <div class="cx-grid">${list.map(card).join('')}</div>
</section>`;
}

const nL = clients.filter(c=>c.owner==='Lilian').length;
const nM = clients.filter(c=>c.owner==='Maria').length;
const groups = [...new Set(clients.map(c=>c.group).filter(Boolean))];

const style = fonts.trimEnd() + '\n\n' + atlas.trimEnd() + '\n\n' + DASH_CSS();

const body = `
<div class="bar">
  <div class="in">
    <div class="lhs">${JKMARK}<b>JK Accounting Group</b><span class="sep"></span><span class="k">Client Intelligence</span></div>
    <div class="rhs">
      <button class="tbtn" id="themeBtn" aria-label="Toggle theme">${ICON.sun}<span class="lbl">Theme</span></button>
      <button class="tbtn" id="printBtn" aria-label="Print">${ICON.print}<span class="lbl">Print</span></button>
    </div>
  </div>
</div>

<header class="mast">
  <div class="in">
    <p class="kick">Client Intelligence · Internal review</p>
    <h1>What we know about every client, in one place</h1>
    <p class="lede">A living snapshot, generated straight from the client-intelligence files. Skim your book, check the facts, and flag anything wrong, missing, or out of date — tell Claude and it edits the client's file and re-publishes this page.</p>
    <div class="meta">
      <span class="chipm live"><span class="dot"></span><b>${clients.length}</b> clients</span>
      <span class="chipm"><span class="dot"></span><b>${nL}</b> Lilian</span>
      <span class="chipm"><span class="dot"></span><b>${nM}</b> Maria</span>
      <span class="chipm"><span class="dot"></span><b>${groups.length}</b> owner-groups</span>
      <span class="chipm"><span class="dot"></span>as of <b>${esc(asOf)}</b></span>
    </div>
  </div>
</header>

<div class="cx-filter">
  <div class="in">
    <label class="cx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <input id="q" type="search" placeholder="Search clients, industry, systems…" autocomplete="off"></label>
    <div class="cx-owners" id="owners">
      <button class="cx-of active" data-o="all">All</button>
      <button class="cx-of" data-o="Lilian">Lilian</button>
      <button class="cx-of" data-o="Maria">Maria</button>
    </div>
    <div class="cx-exp"><button class="cx-xb" id="expAll">Expand all</button><button class="cx-xb" id="colAll">Collapse all</button></div>
    <span class="cx-count" id="count"></span>
  </div>
</div>

<main class="cx-main">
  ${ownerOrder.map(ownerSection).join('')}
  <p class="cx-empty" id="empty" hidden>No clients match — clear the search or filter.</p>
</main>

<footer class="foot">
  <div class="in">
    <div class="row">${JKMARK}<div><b>Client Intelligence</b><p>Non-sensitive knowledge and links only. Names, logins, account numbers and dollar figures live in Double / Google Drive / QuickBooks and are referenced from each client's file — never stored here.</p></div></div>
    <div class="bottom"><span>JK Accounting Group · internal</span><span>Generated from projects/client-intelligence · ${esc(asOf)}</span></div>
  </div>
</footer>`;

const script = `
<script>
(function(){
  var root=document.documentElement; root.classList.add('js');
  function dark(){var t=root.getAttribute('data-theme'); if(t)return t==='dark'; return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;}
  var tb=document.getElementById('themeBtn'); if(tb)tb.addEventListener('click',function(){root.setAttribute('data-theme',dark()?'light':'dark');});
  var pb=document.getElementById('printBtn'); if(pb)pb.addEventListener('click',function(){window.print();});

  var cards=[].slice.call(document.querySelectorAll('.cx-card'));
  var secs=[].slice.call(document.querySelectorAll('.cx-sec'));
  var q=document.getElementById('q'), count=document.getElementById('count'), empty=document.getElementById('empty');
  var owner='all';
  function apply(){
    var term=(q.value||'').trim().toLowerCase(); var shown=0;
    cards.forEach(function(c){
      var okO=owner==='all'||c.getAttribute('data-owner')===owner;
      var okT=!term||c.getAttribute('data-text').indexOf(term)>-1;
      var vis=okO&&okT; c.hidden=!vis; if(vis)shown++;
    });
    secs.forEach(function(s){ var any=s.querySelectorAll('.cx-card:not([hidden])').length>0; s.hidden=!any; });
    count.textContent=shown+' of '+cards.length;
    empty.hidden=shown>0;
  }
  q.addEventListener('input',apply);
  document.getElementById('owners').addEventListener('click',function(e){
    var b=e.target.closest('.cx-of'); if(!b)return;
    owner=b.getAttribute('data-o');
    [].forEach.call(this.children,function(x){x.classList.toggle('active',x===b);}); apply();
  });
  var mores=[].slice.call(document.querySelectorAll('details.cx-more'));
  var ea=document.getElementById('expAll'), ca=document.getElementById('colAll');
  if(ea)ea.addEventListener('click',function(){mores.forEach(function(d){d.open=true;});});
  if(ca)ca.addEventListener('click',function(){mores.forEach(function(d){d.open=false;});});
  window.addEventListener('beforeprint',function(){mores.forEach(function(d){d.open=true;});});
  apply();

  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver'in window)){cards.forEach(function(c){c.classList.add('in');});}
  else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:0.06}); cards.forEach(function(c){io.observe(c);});}
})();
</script>`;

const fragment = `<title>Client Intelligence — review · JK Accounting Group</title>
<style>
${style}
</style>

${body}
${script}
`;
writeFileSync(outFile, fragment);
console.error(`fragment → ${outFile} (${(fragment.length/1024).toFixed(0)}KB) · ${clients.length} clients`);

/* ---------------- dashboard-only CSS (composed from Atlas tokens) ---------------- */
function DASH_CSS(){ return `
/* ===== Client-Intelligence dashboard (composed from Atlas tokens) ===== */
/* Widen the canvas: atlas.css sets --maxw:880 for an SOP reading column;
   a scan-and-compare dashboard wants a broader frame for a 2-up card grid. */
:root{--maxw:1180px;}
.mast .in{padding-bottom:clamp(28px,4vw,44px);}
.cx-filter{position:sticky; top:56px; z-index:90;
  background:color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter:saturate(140%) blur(10px); -webkit-backdrop-filter:saturate(140%) blur(10px);
  border-bottom:1px solid var(--border-subtle);}
.cx-filter .in{max-width:var(--maxw); margin:0 auto; padding:11px var(--gutter);
  display:flex; align-items:center; gap:12px; flex-wrap:wrap;}
.cx-search{display:flex; align-items:center; gap:9px; flex:1 1 260px; min-width:200px;
  background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:0 12px; height:40px;}
.cx-search svg{width:16px; height:16px; color:var(--muted); flex:0 0 auto;}
.cx-search input{border:0; background:transparent; outline:0; width:100%; height:100%;
  font-family:var(--sans); font-size:14.5px; color:var(--body);}
.cx-owners{display:flex; gap:6px; flex:0 0 auto;}
.cx-of{font-family:var(--mono); font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-weight:600;
  color:var(--muted); background:transparent; border:1px solid var(--border); border-radius:999px;
  padding:8px 14px; cursor:pointer; transition:all .16s var(--ease-out);}
.cx-of:hover{color:var(--ink); border-color:var(--border);}
.cx-of.active{color:#fff; background:var(--teal-800); border-color:var(--teal-800);}
:root[data-theme="dark"] .cx-of.active{background:var(--accent); border-color:var(--accent); color:#0D2A31;}
.cx-count{margin-left:auto; font-family:var(--mono); font-size:11px; letter-spacing:0.06em;
  text-transform:uppercase; color:var(--muted); flex:0 0 auto;}

.cx-main{max-width:var(--maxw); margin:0 auto; padding:clamp(20px,4vw,40px) var(--gutter) 10px;}
.cx-sec{margin-top:clamp(30px,5vw,48px);}
.cx-sec:first-child{margin-top:clamp(14px,3vw,26px);}
.cx-sechead{display:flex; align-items:baseline; gap:16px; margin-bottom:20px;}
.cx-sechead .k{font-family:var(--mono); font-size:11px; letter-spacing:0.16em; text-transform:uppercase;
  color:var(--accent); font-weight:600; flex:0 0 auto;}
.cx-sechead h2{font-size:clamp(20px,3vw,26px); flex:0 0 auto; color:var(--ink);}
.cx-sechead .cx-line{flex:1 1 auto; height:1px; background:var(--border-subtle); align-self:center;}

.cx-grid{display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 430px), 1fr)); gap:18px; align-items:start;}
.cx-card{background:var(--surface); border:1px solid var(--border-subtle); border-radius:16px;
  padding:20px 21px; box-shadow:var(--shadow-sm); display:flex; flex-direction:column; gap:12px;
  scroll-margin-top:120px; transition:box-shadow .2s var(--ease-out), border-color .2s var(--ease-out);}
.cx-card:hover{box-shadow:var(--shadow-md); border-color:var(--border);}
.cx-card:target{border-color:var(--accent); box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 24%,transparent), var(--shadow-md);}
.cx-head{display:flex; align-items:baseline; justify-content:space-between; gap:12px;}
.cx-head h3{font-size:19.5px; line-height:1.15; color:var(--ink);}
.cx-upd{font-family:var(--mono); font-size:10px; letter-spacing:0.06em; text-transform:uppercase;
  color:var(--muted); white-space:nowrap; flex:0 0 auto; display:flex; align-items:center; gap:7px;}
.cx-upd .dot{width:3px; height:3px; border-radius:50%; background:var(--border);}

.cx-tags{display:flex; flex-wrap:wrap; gap:6px;}
.pill{display:inline-flex; align-items:center; font-family:var(--mono); font-size:10.5px; font-weight:600;
  letter-spacing:0.04em; border-radius:999px; padding:4px 10px; white-space:nowrap;}
.pill.entity{background:var(--pill-teal-bg); color:var(--pill-teal-ink);}
.pill.state{background:var(--greige-100); color:var(--muted); border:1px solid var(--border-subtle);}
:root[data-theme="dark"] .pill.state{background:rgba(236,230,218,0.06); color:var(--body);}
.pill.group{background:var(--pill-bronze-bg); color:var(--pill-bronze-ink);}

.cx-ind{font-size:14px; line-height:1.5; color:var(--body); margin:0;}
.cx-ind .src{color:var(--muted); font-style:italic;}

.svcs{display:flex; flex-wrap:wrap; gap:6px;}
.svc{display:inline-flex; align-items:center; gap:6px; font-family:var(--mono); font-size:10.5px; font-weight:600;
  letter-spacing:0.02em; border-radius:7px; padding:4px 9px; border:1px solid transparent;}
.svc i{font-style:normal; font-weight:500; opacity:.72; text-transform:lowercase; letter-spacing:0;}
.svc.on{background:var(--ok-bg); color:var(--ok-text); border-color:var(--ok-bd);}
.svc.off{background:transparent; color:var(--muted); border-color:var(--border-subtle);}
.svc.quirk{background:var(--warn-bg); color:var(--warn-text); border-color:var(--warn-bd);}
.svc.neutral{background:var(--note-bg); color:var(--note-text); border-color:var(--note-bd);}
.svc.flag{background:var(--pill-teal-bg); color:var(--pill-teal-ink);}

.chips{display:flex; flex-wrap:wrap; gap:5px;}
.chip{font-family:var(--sans); font-size:11.5px; font-weight:500; color:var(--muted);
  background:var(--paper); border:1px solid var(--border-subtle); border-radius:6px; padding:2px 8px;}

.cx-cols{display:grid; grid-template-columns:1fr; gap:14px; margin-top:2px;}
@media (min-width:520px){ .cx-card .cx-cols{grid-template-columns:1fr 1fr;} }
.cx-blk h4{font-family:var(--mono); font-size:9.5px; letter-spacing:0.12em; text-transform:uppercase;
  color:var(--accent); font-weight:600; margin:0 0 7px;}
.cx-blk ul{list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px;}
.cx-blk li{position:relative; padding-left:14px; font-size:12.8px; line-height:1.48; color:var(--body);}
.cx-blk li::before{content:""; position:absolute; left:2px; top:7px; width:5px; height:5px; border-radius:50%;
  background:var(--border);}
.cx-blk li .src{color:var(--muted); font-style:italic; font-size:11.5px;}
.cx-blk code{font-size:0.85em; background:var(--paper); border:1px solid var(--border-subtle);
  border-radius:4px; padding:0 4px;}

.cx-need{font-family:var(--mono); font-size:10px; letter-spacing:0.06em; text-transform:uppercase;
  color:var(--warn-ic); display:inline-flex; align-items:center; gap:7px; align-self:flex-start;}
.cx-need::before{content:""; width:6px; height:6px; border-radius:50%; background:var(--warn-ic);}

.cx-links{display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-top:auto; padding-top:12px;
  border-top:1px solid var(--border-subtle); font-family:var(--mono); font-size:11px; letter-spacing:0.03em;}
.cx-links a{display:inline-flex; align-items:center; gap:5px; color:var(--accent-2); text-decoration:none;}
.cx-links a:hover{color:var(--accent);}
.cx-links a svg{width:11px; height:11px;}
.cx-links .dv{color:var(--border);}
.cx-links .rel{color:var(--muted); text-transform:none; letter-spacing:0; font-family:var(--sans); font-size:12px;}
.cx-links .rel a{font-family:var(--sans);}

/* expand/collapse controls */
.cx-exp{display:flex; gap:6px; flex:0 0 auto;}
.cx-xb{font-family:var(--mono); font-size:10px; letter-spacing:0.06em; text-transform:uppercase; font-weight:600;
  color:var(--muted); background:transparent; border:1px solid var(--border-subtle); border-radius:8px;
  padding:7px 11px; cursor:pointer; transition:color .15s var(--ease-out), border-color .15s var(--ease-out);}
.cx-xb:hover{color:var(--ink); border-color:var(--border);}
@media (max-width:680px){ .cx-exp{display:none;} }

/* collapsible per-client detail */
details.cx-more{margin-top:2px;}
details.cx-more > summary{list-style:none; cursor:pointer; display:flex; align-items:center;
  justify-content:space-between; gap:10px; padding:9px 13px; border-radius:10px;
  background:var(--paper); border:1px solid var(--border-subtle);
  font-family:var(--mono); font-size:10.5px; letter-spacing:0.08em; text-transform:uppercase; font-weight:600;
  color:var(--accent-2); transition:background .16s var(--ease-out), border-color .16s var(--ease-out); user-select:none;}
details.cx-more > summary::-webkit-details-marker{display:none;}
details.cx-more > summary:hover{background:var(--pill-teal-bg); border-color:var(--border);}
details.cx-more > summary:focus-visible{outline:2px solid var(--accent); outline-offset:2px;}
.cx-caret{width:15px; height:15px; flex:0 0 auto; color:var(--muted);
  transition:transform .22s var(--ease-out);}
details.cx-more[open] > summary .cx-caret{transform:rotate(180deg);}
.cx-sum-b{display:none;}
details.cx-more[open] > summary .cx-sum-a{display:none;}
details.cx-more[open] > summary .cx-sum-b{display:inline;}
.cx-more-body{display:flex; flex-direction:column; gap:14px; padding:15px 3px 3px;}
.cx-sources .cx-srcline{display:flex; flex-wrap:wrap; align-items:center; gap:8px 12px; margin-bottom:9px;
  font-family:var(--mono); font-size:11.5px; letter-spacing:0.03em;}
.cx-sources .cx-srcline a{display:inline-flex; align-items:center; gap:5px; color:var(--accent-2); text-decoration:none;}
.cx-sources .cx-srcline a:hover{color:var(--accent);}
.cx-sources .cx-srcline a svg{width:12px; height:12px;}
.cx-sources .rel{font-family:var(--sans); font-size:12px; color:var(--muted); text-transform:none; letter-spacing:0;}
.cx-hint{font-size:12.5px; line-height:1.5; color:var(--muted); margin:0;}
.cx-hint b{color:var(--body);}
.cx-hint a{color:var(--accent-2);}
.cx-none{color:var(--muted); font-style:italic;}

.cx-empty{text-align:center; color:var(--muted); font-size:15px; padding:60px 0;}

@media print{
  .bar,.cx-filter{display:none !important;}
  .cx-grid{grid-template-columns:1fr 1fr;}
  .cx-card{break-inside:avoid; box-shadow:none;}
  .cx-card,.pill,.svc,.chip{-webkit-print-color-adjust:exact; print-color-adjust:exact;}
}
`; }
