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
  dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1z"/></svg>',
};

/* ---------------- SOP → Atlas reader (open the designed page INSIDE the Hub) ----------------
   The Hub is viewed as a sandboxed link, where opening external pages (GitHub) is blocked.
   So each procedure's designed page is embedded and opened in an in-page reader overlay —
   no navigation. BTR uses its hand-laid render; the rest are auto-rendered from Markdown
   onto the Atlas classes (headings, lists, tables, callouts, code, mermaid flowchart). */
function mdInlineHub(s){
  let out = esc(s);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(m, t, u){
    return /^https?:\/\//.test(u)
      ? '<a href="' + u + '" target="_blank" rel="noopener">' + t + '</a>'
      : '<span class="ln">' + t + '</span>';   // relative links can't open in the sandbox
  });
  out = out.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');   // non-greedy so bold can wrap italics
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>');
  return out;
}
function mdToAtlas(md){
  const lines = md.replace(/^#\s+.*$/m, '').split('\n');
  const html = [];
  const inl = mdInlineHub;
  let i = 0;
  while(i < lines.length){
    const line = lines[i];
    if(/^\s*$/.test(line)){ i++; continue; }
    const fence = line.match(/^```\s*(\w+)?/);
    if(fence){
      const lang = (fence[1]||'').toLowerCase(); const buf = []; i++;
      while(i<lines.length && !/^```/.test(lines[i])){ buf.push(lines[i]); i++; }
      i++;
      html.push(lang==='mermaid'
        ? '<figure class="flow"><pre class="mermaid">'+esc(buf.join('\n'))+'</pre></figure>'
        : '<pre class="codeblock"><code>'+esc(buf.join('\n'))+'</code></pre>');
      continue;
    }
    const h = line.match(/^(#{2,4})\s+(.*)$/);
    if(h){
      const lvl = h[1].length, txt = h[2].trim();
      if(lvl===2){
        const chip = txt.match(/^(§?\d+[A-Za-z]?)[.)]?\s+(.*)$/);
        html.push(chip
          ? '<div class="shead"><span class="schip">'+esc(chip[1].replace('§',''))+'</span><h2>'+inl(chip[2])+'</h2></div>'
          : '<div class="shead"><h2>'+inl(txt)+'</h2></div>');
      } else if(lvl===3){ html.push('<div class="subbar"><h3>'+inl(txt)+'</h3></div>'); }
      else { html.push('<h4 class="rh4">'+inl(txt)+'</h4>'); }
      i++; continue;
    }
    if(/^(-{3,}|\*{3,})\s*$/.test(line)){ html.push('<hr class="rule">'); i++; continue; }
    if(/^\s*\|.*\|\s*$/.test(line) && i+1<lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i+1])){
      const head = line.trim().replace(/^\||\|$/g,'').split('|').map(s=>s.trim());
      i += 2; const rows = [];
      while(i<lines.length && /^\s*\|.*\|\s*$/.test(lines[i])){ rows.push(lines[i].trim().replace(/^\||\|$/g,'').split('|').map(s=>s.trim())); i++; }
      html.push('<div class="tablewrap"><table class="links"><thead><tr>'+head.map(c=>'<th>'+inl(c)+'</th>').join('')
        +'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+inl(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>');
      continue;
    }
    if(/^\s*>/.test(line)){
      const buf = [];
      while(i<lines.length && /^\s*>/.test(lines[i])){ buf.push(lines[i].replace(/^\s*>\s?/,'')); i++; }
      html.push('<div class="callout note"><div class="cx"><p>'+inl(buf.join(' ').trim())+'</p></div></div>');
      continue;
    }
    if(/^\s*\d+[.)]\s+/.test(line)){
      const buf = [];
      while(i<lines.length && /^\s*\d+[.)]\s+/.test(lines[i])){
        buf.push(lines[i].replace(/^\s*\d+[.)]\s+/,'')); i++;
        while(i<lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*\d+[.)]\s+/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i])){ buf[buf.length-1]+=' '+lines[i].trim(); i++; }
      }
      html.push('<ol class="qlist">'+buf.map(x=>'<li>'+inl(x)+'</li>').join('')+'</ol>');
      continue;
    }
    if(/^\s*[-*]\s+/.test(line)){
      const isCheck = /^\s*[-*]\s+\[[ xX]\]/.test(line); const buf = [];
      while(i<lines.length && /^\s*[-*]\s+/.test(lines[i])){
        let it = lines[i].replace(/^\s*[-*]\s+/,''); if(isCheck) it = it.replace(/^\[[ xX]\]\s*/,'');
        buf.push(it); i++;
        while(i<lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i]) && !/^\s*\d+[.)]\s+/.test(lines[i])){ buf[buf.length-1]+=' '+lines[i].trim(); i++; }
      }
      html.push('<ul class="'+(isCheck?'checks':'dots')+'">'+buf.map(x=>'<li>'+inl(x)+'</li>').join('')+'</ul>');
      continue;
    }
    const buf = [line]; i++;
    while(i<lines.length && !/^\s*$/.test(lines[i]) && !/^\s*(#{2,4}\s|>|[-*]\s|\d+[.)]\s|\|)/.test(lines[i]) && !/^```/.test(lines[i]) && !/^(-{3,})\s*$/.test(lines[i])){ buf.push(lines[i]); i++; }
    html.push('<p class="prose">'+inl(buf.join(' '))+'</p>');
  }
  return html.join('\n');
}
// masthead meta chips for a reader doc
function readerMeta(owner, updated){
  return '<span class="chipm live"><span class="dot"></span>Status:&nbsp;<b>Active</b></span>'
    + (owner ? '<span class="chipm"><span class="dot"></span>Owner:&nbsp;<b>'+esc(owner)+'</b></span>' : '')
    + (updated ? '<span class="chipm"><span class="dot"></span>Updated:&nbsp;<b>'+esc(updated)+'</b></span>' : '');
}
// embed a binary asset as a data URI (self-contained: works offline / in the Artifact)
function dataUri(mime, relPath){
  return 'data:' + mime + ';base64,' + readFileSync(resolve(repoRoot, relPath)).toString('base64');
}
// a "send this to your client" block: the visual guide images shown inline + PNG/PDF downloads.
// Team-facing — no repo/GitHub links, everything embedded.
function guidesBlock(guides){
  const cards = guides.map((g) => {
    const base = 'projects/sops/client-guides/';
    const png = dataUri('image/png', base + g.png);
    const pdf = dataUri('application/pdf', base + g.pdf);
    return `<figure class="guide">
      <figcaption class="guide-hd">
        <span class="guide-lang">${esc(g.lang)}</span>
        <span class="guide-dl">
          <a class="dlbtn" href="${pdf}" download="${esc(g.pdf)}">${IC.dl}PDF</a>
          <a class="dlbtn" href="${png}" download="${esc(g.png)}">${IC.dl}PNG</a>
        </span>
      </figcaption>
      <img class="guide-img" src="${png}" alt="Client sign-in guide (${esc(g.lang)})" loading="lazy">
    </figure>`;
  }).join('');
  return `<div class="shead"><span class="schip">✦</span><h2>Send this to your client</h2></div>`
    + `<p class="prose">The ready-to-send one-page guide. It shows here, and you can <b>download it as PDF or PNG</b> to send by email or WhatsApp.</p>`
    + `<div class="guides">${cards}</div>`;
}
// BTR: reuse the hand-laid render's masthead+main (the premium designed page)
function btrReaderInner(){
  try{
    const raw = read(resolve(repoRoot, '.claude/skills/sop-authoring/render/examples/btr-body.html'));
    const a = raw.indexOf('<section class="mast">');
    const b = raw.indexOf('</main>');
    if(a !== -1 && b !== -1) return raw.slice(a, b + '</main>'.length);
  }catch(e){}
  return null;
}

/* ---- Bookkeeping-SOP pilot layout (Ecoorganic) ----
   Lilian's brief: bookkeeping SOPs should be graphic & intuitive — expandable
   sections, tables, dynamic — not a wall of text. The Chart of Accounts must NOT
   reference other clients (Masciave/Aura); show it as a clean range table. This is
   the PILOT for the future bookkeeping-SOP skill. */
function acc(n, title, count, bodyHtml, open){
  return `<details class="acc"${open?' open':''}><summary>`
    + `<span class="acc-n">${esc(n)}</span><span class="acc-t">${title}</span>`
    + (count?`<span class="acc-ct">${esc(count)}</span>`:'')
    + `<svg class="acc-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`
    + `</summary><div class="acc-body">${bodyHtml}</div></details>`;
}
// split Markdown into a preamble + top-level (##) sections
function mdSections(md){
  const parts = md.split(/\n(?=## )/);
  let preamble = '';
  const sections = [];
  parts.forEach((p, i) => {
    const m = p.match(/^## (.+)/);
    if (m) sections.push({ title: m[1].trim(), body: p.slice(p.indexOf('\n') + 1) });
    else if (i === 0) preamble = p;
  });
  return { preamble, sections };
}
/* --- Ecoorganic curated visuals (hand-maintained "at a glance" overviews) ---
   These are the memorable summary a bookkeeper taking over the account needs:
   the monthly workflow and the transaction decision-flow. The FULL, authoritative
   rules stay rendered from the .md as accordions below, so substance can't drift —
   these two visuals are the deliberate curated overview the skill allows. */

// the monthly workflow, as a stepped ribbon. `gate` = the $0 close gate; `done` = closed.
function ecoMonthlyFlow(){
  const steps = [
    { t: 'Process the feed', d: 'Only Chase&nbsp;…8310 is live' },
    { t: 'Categorize', d: 'Work the gates · override QBO' },
    { t: 'Reconcile', d: 'Book balance ties to the statement' },
    { t: 'Clear triage → $0', d: 'The close gate', k: 'gate' },
    { t: '1099 sweep', d: 'Every payee ≥&nbsp;$2,000 has a W-9', k: 'flag' },
    { t: 'Reviewer check', d: 'Verified against these rules' },
    { t: 'Books closed', d: 'Month delivered', k: 'done' },
  ];
  const li = steps.map((s, i) => `<li class="estep${s.k ? ' ' + s.k : ''}">`
    + `<span class="estep-n">${i + 1}</span>`
    + `<span class="estep-b"><span class="estep-t">${s.t}</span><span class="estep-d">${s.d}</span></span>`
    + `</li>`).join('');
  return `<div class="shead"><span class="schip">✦</span><h2>How each month runs</h2></div>`
    + `<p class="slede">The same seven moves every month. Two are non-negotiable gates: the triage account must hit <b>$0</b> before close, and every payee over <b>$2,000</b> must have a W-9.</p>`
    + `<ol class="eflow">${li}</ol>`;
}

// one destination chip (owner=equity · biz=P&L · inv=investigate · tri=triage). label is trusted HTML.
function dchip(cls, kicker, label, flag){
  return `<span class="dchip ${cls}">`
    + (kicker ? `<span class="dchip-k">${esc(kicker)}</span>` : '')
    + `<span class="dchip-l">${label}</span>`
    + (flag ? `<span class="f1099">1099</span>` : '')
    + `</span>`;
}
// one gate in the ladder: a numbered question, its outcome chips, and a note.
function ecoGate(n, q, eg, outs, note){
  return `<li class="dgate">`
    + `<div class="dgate-rail"><span class="dgate-n">${n}</span></div>`
    + `<div class="dgate-card">`
    +   `<p class="dgate-q">${q}${eg ? `<span class="dgate-eg">${eg}</span>` : ''}</p>`
    +   `<div class="dgate-outs">${outs}</div>`
    +   (note ? `<p class="dgate-note">${note}</p>` : '')
    + `</div></li>`;
}
// The transaction decision-flow — the heart of the runbook, built to be memorized.
// Ask the gates in order; the first YES decides. Colors teach the mental model:
// bronze = the owner (equity) · teal = the business (P&L) · blue = investigate · amber = triage.
function ecoDecisionFlow(){
  const legend = `<div class="dlegend">`
    + `<span class="dleg own"><span class="dot"></span>Owner · equity</span>`
    + `<span class="dleg biz"><span class="dot"></span>Business · P&amp;L</span>`
    + `<span class="dleg inv"><span class="dot"></span>Investigate first</span>`
    + `<span class="dleg tri"><span class="dot"></span>Triage → $0</span>`
    + `</div>`;

  const gates = [
    ecoGate(1,
      `Transfer with the owner's personal account <code>…2935</code>?`,
      `the only account that <em>is</em> the owner himself`,
      dchip('own', 'MONEY IN', `Owner's <b>Contribution</b>`) + dchip('own', 'MONEY OUT', `Owner's <b>Distribution</b>`),
      `Equity — post to the two equity accounts, <b>never</b> Sales or COGS.`),
    ecoGate(2,
      `Named to the owner personally?`,
      `his card autopay · IRS <code>USATAXPYMT</code> in his name`,
      dchip('own', '', `Owner's <b>Distribution</b>`),
      `His personal spending that happens to run through the business account.`),
    ecoGate(3,
      `A gas-station / convenience-store stop?`,
      `Sunoco · Shell · Gulf · Citgo · Cumberland Farms · 7-Eleven`,
      dchip('biz', '≥ $25', `Auto — <b>Gas &amp; Fuel</b>`) + dchip('own', '< $25', `Owner's <b>Distribution</b>`),
      `The $25 line is a fuel-vs-snack proxy — an obvious snack run is a distribution at <em>any</em> amount.`),
    ecoGate(4,
      `Food, restaurant, groceries or convenience?`,
      `any meal, coffee, fast food, or grocery run`,
      dchip('own', '', `Owner's <b>Distribution</b>`) + dchip('biz', 'EXCEPT', `supply / hardware / job store → <b>Supplies</b> or <b>COGS</b>`),
      `<b>Meals should trend to $0.</b> Judge a store by what it's <em>for</em> — Home Depot, Decker Rental, Compass Hardware stay business.`),
    ecoGate(5,
      `A job cost?`,
      `foam &amp; spray materials · installation subs · job-site disposal`,
      dchip('biz', 'MATERIALS', `<b>COGS</b>`) + dchip('biz', 'SUBS', `<b>COGS</b> — labor`, true) + dchip('biz', 'DISPOSAL', `<b>COGS</b>`),
      `Every new sub needs a <b>W-9</b>; anyone paid <b>≥ $2,000</b> gets a 1099. <span class="dprov">Rule under review vs. the client's own history.</span>`),
    ecoGate(6,
      `Cash out, a check, or a deposit?`,
      `ATM cash · Zelle · a written check · a bank deposit`,
      dchip('inv', '', `Investigate — <b>never assume</b>`),
      `Pull the image; ask the owner about cash. Personal → <b>Distribution</b> · paid a worker → <b>Labor +1099</b> · every deposit needs a <b>customer</b>.`),
    ecoGate(7,
      `Still can't identify it?`,
      `an unresolvable bank descriptor`,
      dchip('tri', '', `<b>Ask My Accountant</b> · triage`),
      `The "not sorted yet" parking spot. It — and every holding account — must read <b>$0 before the month is closed</b>.`),
  ].join('');

  return `<div class="shead"><span class="schip">✦</span><h2>Where every transaction goes</h2></div>`
    + `<p class="slede">Ask these in order. The <b>first YES decides</b> — you rarely reach the bottom. These override every QuickBooks auto-suggestion.</p>`
    + legend
    + `<ol class="dgates">${gates}</ol>`;
}

// the "one rule to remember" banner — the signature insight for this client
function ecoSignature(){
  return `<div class="eco-sig">`
    + `<span class="eco-sig-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7-6.3-4.6L5.7 20.3 8 13.3 2 8.9h7.6z"/></svg></span>`
    + `<div><p class="eco-sig-t">The one rule to hold in your head</p>`
    + `<p class="eco-sig-d">On this account the <b>default is personal</b>. If a charge isn't a clear business cost, it's the owner's — a <b>distribution</b>. Food is personal. Small gas is personal. Transfers with his personal account are <b>equity</b>. Never take QuickBooks' guess.</p></div></div>`;
}

// a plain-text export of the runbook (team-facing: drop the internal provenance blockquote)
function ecoRunbookText(md){
  let t = md.replace(/Masciave\/Aura-style grammar/g, 'Number-prefix grammar');
  const firstSec = t.search(/\n## /);
  if (firstSec !== -1){
    const head = t.slice(0, firstSec).replace(/^>.*$/gm, '').replace(/\n{3,}/g, '\n\n');
    t = head.trimEnd() + '\n\n' + t.slice(firstSec + 1);
  }
  return t.trim() + '\n';
}

/* --- Rich rendering of the FULL sections (still sourced from the .md, so in sync) ---
   Lilian's note: the detailed sections below the visuals must be as designed as the
   decision-flow, not a wall of text. Each section gets a treatment that keeps its
   content from the .md but structures it visually. */

// split a Markdown ordered-list block into top-level items, dedenting nested content one level
function olItems(block){
  const lines = block.split('\n'); const items = []; let cur = null;
  for(const ln of lines){
    const m = ln.match(/^(\d+)\.\s+(.*)$/);
    if(m){ cur = { n: m[1], body: [m[2]] }; items.push(cur); }
    else if(cur){ cur.body.push(ln.replace(/^ {3}/, '')); }
  }
  return items.map((it) => ({ n: it.n, text: it.body.join('\n').trim() }));
}
// Categorization rules → numbered rule cards (bold lead-in becomes the card title; the
// rest — sub-bullets, callouts — rendered from the .md so nothing is lost).
function ecoRuleCards(body){
  const cut = body.search(/^\d+\.\s/m);
  const intro = cut > 0 ? mdToAtlas(body.slice(0, cut)) : '';
  const list = cut >= 0 ? body.slice(cut) : body;
  const cards = olItems(list).map((it) => {
    const t = it.text.match(/^\*\*([\s\S]+?)\*\*\s*/);
    const title = t ? t[1] : ('Rule ' + it.n);
    const rest = t ? it.text.slice(t[0].length).replace(/^[\s:,;.—-]+/, '') : it.text;
    return `<div class="rcard"><div class="rcard-h"><span class="rcard-n">${esc(it.n)}</span>`
      + `<h4>${mdInlineHub(title)}</h4></div>`
      + `<div class="rcard-b">${mdToAtlas(rest)}</div></div>`;
  }).join('');
  return intro + `<div class="rcards">${cards}</div>`;
}
// Open decisions log → the table with color-coded status pills
function ecoDecisionsTable(body){
  const rows = body.split('\n').filter((l) => /^\s*\|/.test(l));
  if(rows.length < 2) return mdToAtlas(body);
  const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((s) => s.trim());
  const head = cells(rows[0]);
  const statusIdx = head.findIndex((h) => /status/i.test(h));
  const pill = (s) => {
    const v = s.toLowerCase();
    const cls = /resolv/.test(v) ? 'g' : /pending/.test(v) ? 'w' : 'i';
    return `<span class="stpill ${cls}">${esc(s)}</span>`;
  };
  const thead = '<tr>' + head.map((h) => `<th>${mdInlineHub(h)}</th>`).join('') + '</tr>';
  const tb = rows.slice(2).map(cells).map((r) => '<tr>'
    + r.map((c, i) => i === statusIdx ? `<td>${pill(c)}</td>` : `<td>${mdInlineHub(c)}</td>`).join('')
    + '</tr>').join('');
  const last = rows[rows.length - 1];
  const after = body.slice(body.lastIndexOf(last) + last.length);
  return `<div class="tablewrap"><table class="links edec"><thead>${thead}</thead><tbody>${tb}</tbody></table></div>`
    + mdToAtlas(after);
}
// Monthly review checklist → real check items
function ecoChecklist(body){
  const cut = body.search(/^\d+\.\s/m);
  const intro = cut > 0 ? mdToAtlas(body.slice(0, cut)) : '';
  const list = cut >= 0 ? body.slice(cut) : body;
  const items = olItems(list).map((it) =>
    `<li class="eck"><span class="eck-n">${esc(it.n)}</span><div class="eck-x">${mdInlineHub(it.text.replace(/\n+/g, ' '))}</div></li>`).join('');
  return intro + `<ol class="echecks">${items}</ol>`;
}
// Chart-of-accounts conventions → a colored number-range strip + the remaining bullets
function ecoCoaConventions(body){
  // pre-join each wrapped bullet into one line so a multi-line bullet parses whole
  const raw = body.split('\n'); const lines = []; let inBullet = false;
  for(const ln of raw){
    if(/^\s*[-*]\s+/.test(ln)){ lines.push(ln); inBullet = true; }
    else if(inBullet && /^\s{2,}\S/.test(ln)){ lines[lines.length - 1] += ' ' + ln.trim(); }
    else { lines.push(ln); inBullet = false; }
  }
  const gi = lines.findIndex((l) => /100s?\s+assets/i.test(l));
  let strip = '';
  if(gi !== -1){
    const seg = lines[gi].replace(/^[\s\S]*?name\*?\s*[—-]\s*/i, '');
    const chips = seg.split('·').map((s) => s.trim()).filter(Boolean).map((s) => {
      const m = s.match(/^([\d/]+s?)\s+(.*)$/);
      return m ? `<span class="rgchip"><b>${esc(m[1])}</b> ${esc(m[2].replace(/\.$/, ''))}</span>` : '';
    }).join('');
    strip = `<p class="rglabel">Number-prefix grammar (the target)</p><div class="rgstrip">${chips}</div>`;
    lines.splice(gi, 1);
  }
  return strip + mdToAtlas(lines.join('\n'));
}
// dispatch each ## section to its visual treatment (fallback: the standard Markdown render)
function ecoSectionBody(title, body){
  if(/categorization rules/i.test(title)) return ecoRuleCards(body);
  if(/open decisions/i.test(title)) return ecoDecisionsTable(body);
  if(/review checklist/i.test(title)) return ecoChecklist(body);
  if(/chart of accounts/i.test(title)) return ecoCoaConventions(body);
  return mdToAtlas(body);
}
// small JK monogram (for the print cover)
const JK_MARK = '<svg viewBox="18 20 82 72" class="pc-mark" aria-hidden="true"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5" fill="none" stroke="currentColor" stroke-width="7"/><path d="M70 26 L70 86" fill="none" stroke="currentColor" stroke-width="7"/><path d="M70 56 L92 26" fill="none" stroke="currentColor" stroke-width="7"/><path d="M70 56 L95 86" fill="none" stroke="currentColor" stroke-width="7"/></svg>';
// print-only book front matter: a cover page + a table of contents (the "índice")
function ecoPrintFrontMatter(sections, owner, updated){
  const toc = sections.map((s, i) =>
    `<li><span class="ptoc-n">${i + 1}</span><span class="ptoc-t">${esc(s.title)}</span></li>`).join('');
  return `<div class="pbook pcover">${JK_MARK}`
    + `<p class="pc-kick">Bookkeeping Runbook · Per Client</p>`
    + `<h1 class="pc-h">Ecoorganic</h1>`
    + `<p class="pc-sub">Monthly Bookkeeping &amp; Independent Review</p>`
    + `<p class="pc-meta">Owner ${esc(owner)}${updated ? ' · Updated ' + esc(updated) : ''}<br>JK Accounting Group — internal reference</p></div>`
    + `<div class="pbook ptoc"><h2>Contents</h2>`
    + `<ol class="ptoc-l"><li><span class="ptoc-n">·</span><span class="ptoc-t">How each month runs &amp; where every transaction goes</span></li>${toc}</ol></div>`;
}

// Ecoorganic bookkeeping runbook — a curated visual overview (signature rule · monthly
// flow · decision-flow) over the FULL rules rendered from the .md (always in sync), each
// section given its own visual treatment. Team page: no other-client names, no internal
// "born from a cleanup" preamble. Prints as a book (cover + contents + page-per-section).
function ecoorganicReaderInner(md, owner, updated){
  md = md.replace(/Masciave\/Aura-style grammar/g, 'Number-prefix grammar');
  const { sections } = mdSections(md);   // preamble (H1 + provenance blockquote) intentionally dropped
  const secs = sections.map((s, i) => acc(String(i + 1), esc(s.title), '', ecoSectionBody(s.title, s.body), false)).join('');
  const runbookHref = 'data:text/plain;charset=utf-8,' + encodeURIComponent(ecoRunbookText(md));
  const actions = `<div class="eco-actions">`
    + `<button class="dlbtn big" type="button" data-print>${IC.dl}Save as PDF manual</button>`
    + `<a class="dlbtn ghost" download="Ecoorganic-bookkeeping-runbook.txt" href="${runbookHref}">${IC.doc}Download as text</a>`
    + `<span class="eco-actions-note" data-print-note>Opens your browser’s print dialog — save the full runbook (cover, contents, every rule) as a PDF.</span>`
    + `</div>`;
  return ecoPrintFrontMatter(sections, owner, updated)
    + `<section class="mast"><div class="in">`
    + `<p class="kick">Bookkeeping runbook · per client</p>`
    + `<h1>Ecoorganic<span class="loc">Monthly bookkeeping &amp; independent review</span></h1>`
    + `<p class="lede">Everything a bookkeeper taking over this account needs — the workflow, the categorization decision-flow, then the full rules. Built from the runbook, so it stays in sync.</p>`
    + `<div class="meta">${readerMeta(owner, updated)}</div></div></section>`
    + `<div class="page">`
    + actions
    + ecoSignature()
    + ecoMonthlyFlow()
    + ecoDecisionFlow()
    + `<div class="shead"><span class="schip">§</span><h2>The full rules &amp; checklist</h2></div>`
    + `<p class="slede">The authoritative detail behind the visuals above — the exact rules, the vendor/1099 process, the chart-of-accounts conventions, the reviewer checklist, and the open-decisions log. Open a section.</p>`
    + secs
    + `</div>`;
}

/* ---- Close-process bookkeeping runbook (Magnum pilot; reused for all of Maria's clients) --
   Maria's clients are a month-end CLOSE PROCESS, so the curated visual is: the one-rule
   banner · the monthly-flow ribbon · the close step-by-step with a Drive material button per
   step (the sensitive detail — logins, statements, Maria's screen recordings — stays in
   Drive; the button opens it). The FULL .md renders as accordions below, so nothing drifts.
   Team-facing: provenance stripped. ONE reusable reader (`closeProcessReader`), driven by a
   per-client `close` config in the SOP catalog (name · loc · lede · oneRule · flow). */
const MIC = {
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6a2 2 0 0 1 2-2h3.2a2 2 0 0 1 1.6.8l1 1.2H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/></svg>',
  sheet:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16M4 15h16M10 3v18"/></svg>',
  docg:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
  play:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.28-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z"/></svg>',
  arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  star:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7-6.3-4.6L5.7 20.3 8 13.3 2 8.9h7.6z"/></svg>',
};
function matIcon(url){
  if(/\/file\/d\//.test(url)) return MIC.play;              // a Drive video
  if(/spreadsheets/.test(url)) return MIC.sheet;
  if(/\/document\//.test(url)) return MIC.docg;
  return MIC.folder;
}
function matLinksFrom(text){
  const links = []; const re = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g; let m;
  while((m = re.exec(text))) links.push({ label: m[1], url: m[2] });
  return links;
}
function matRow(links, label){
  if(!links.length) return '';
  return `<div class="matrow"><span class="ml">${esc(label || 'Material')}</span>`
    + links.map((l) => `<a class="matlink" href="${l.url}" target="_blank" rel="noopener">`
        + `<span class="mi">${matIcon(l.url)}</span>${esc(l.label)}<span class="arw">↗</span></a>`).join('')
    + `</div>`;
}
// "Monthly close process" → numbered step cards, each with its Drive material buttons.
// The link(s) live in the .md as a trailing "Reference: [..](..)" on each step, so the
// buttons are sourced from the source-of-truth, not hand-coded.
function closeSteps(body){
  const h3i = body.search(/^###\s/m);
  const head = h3i >= 0 ? body.slice(0, h3i) : body;
  const tail = h3i >= 0 ? body.slice(h3i) : '';
  const cut = head.search(/^\d+\.\s/m);
  const intro = cut > 0 ? mdToAtlas(head.slice(0, cut)) : '';
  const items = olItems(cut >= 0 ? head.slice(cut) : head);
  const cards = items.map((it) => {
    const t = it.text.match(/^\*\*([\s\S]+?)\*\*\s*/);
    const title = t ? t[1] : ('Step ' + it.n);
    const rest = t ? it.text.slice(t[0].length) : it.text;
    const refI = rest.search(/Reference:/i);
    const links = matLinksFrom(refI >= 0 ? rest.slice(refI) : '');
    const desc = (refI >= 0 ? rest.slice(0, refI) : rest).replace(/^[\s:,;.—-]+/, '').replace(/\s+/g, ' ').trim();
    return `<li class="mstep"><span class="mstep-n">${esc(it.n)}</span>`
      + `<div class="mstep-x"><p class="mstep-t">${mdInlineHub(title)}</p>`
      + (desc ? `<p class="mstep-d">${mdInlineHub(desc)}</p>` : '')
      + matRow(links) + `</div></li>`;
  }).join('');
  return intro + `<ol class="msteps">${cards}</ol>` + (tail ? mdToAtlas(tail) : '');
}
// "Reference material" → a resource list (icon · title · caption · Open)
function closeResList(body){
  const bi = body.search(/^\s*[-*]\s+/m);
  const intro = bi > 0 ? mdToAtlas(body.slice(0, bi)) : '';
  const rows = body.split('\n').filter((l) => /^\s*[-*]\s+/.test(l)).map((l) => {
    const item = l.replace(/^\s*[-*]\s+/, '');
    const m = item.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
    if(!m) return '';
    const label = m[1].replace(/\*\*/g, '');
    const url = m[2];
    const after = item.slice(item.indexOf(m[0]) + m[0].length).replace(/\*\*/g, '').replace(/^[\s—–:-]+/, '').trim();
    const kind = (/spreadsheets/.test(url) || /\/document\//.test(url)) ? ' doc' : '';
    return `<a class="resrow${kind}" href="${url}" target="_blank" rel="noopener">`
      + `<span class="rico">${matIcon(url)}</span>`
      + `<span class="rbody"><span class="rt">${esc(label)}</span>${after ? `<span class="rc">${esc(after)}</span>` : ''}</span>`
      + `<span class="rgo"><span>Open</span>${MIC.arrow}</span></a>`;
  }).join('');
  return intro + `<div class="reslist">${rows}</div>`;
}
function closeSignature(oneRule){
  return `<div class="eco-sig"><span class="eco-sig-ic">${MIC.star}</span>`
    + `<div><p class="eco-sig-t">The one thing to hold in your head</p>`
    + `<p class="eco-sig-d">${oneRule}</p></div></div>`;
}
function closeFlow(steps){
  const li = (steps || []).map((s, i) => `<li class="estep${s.k ? ' ' + s.k : ''}"><span class="estep-n">${i + 1}</span>`
    + `<span class="estep-b"><span class="estep-t">${s.t}</span><span class="estep-d">${s.d}</span></span></li>`).join('');
  return `<div class="shead"><span class="schip">✦</span><h2>How each month runs</h2></div>`
    + `<p class="slede">The same pass every month. The last move is a hard gate: the triage / Uncategorized accounts must read <b>$0</b> before you close.</p>`
    + `<ol class="eflow">${li}</ol>`;
}
function closeSectionBody(title, body){
  if(/close process/i.test(title)) return closeSteps(body);
  if(/categorization rules/i.test(title)) return ecoRuleCards(body);
  if(/review checklist/i.test(title)) return ecoChecklist(body);
  if(/open items|open decisions/i.test(title)) return ecoDecisionsTable(body);
  if(/reference material/i.test(title)) return closeResList(body);
  return mdToAtlas(body);
}
function closePrintFrontMatter(name, sub, sections, owner, updated){
  const toc = sections.map((s, i) => `<li><span class="ptoc-n">${i + 1}</span><span class="ptoc-t">${esc(s.title)}</span></li>`).join('');
  return `<div class="pbook pcover">${JK_MARK}`
    + `<p class="pc-kick">Bookkeeping Runbook · Per Client</p>`
    + `<h1 class="pc-h">${esc(name)}</h1>`
    + `<p class="pc-sub">${esc(sub)}</p>`
    + `<p class="pc-meta">Owner ${esc(owner)}${updated ? ' · Updated ' + esc(updated) : ''}<br>JK Accounting Group — internal reference</p></div>`
    + `<div class="pbook ptoc"><h2>Contents</h2>`
    + `<ol class="ptoc-l"><li><span class="ptoc-n">·</span><span class="ptoc-t">The one thing &amp; the monthly flow</span></li>${toc}</ol></div>`;
}
// The ONE reusable close-process reader. cfg = { name, loc, lede, oneRule, flow, dl } from
// the SOP catalog's `close` field; every section renders generically from the .md.
function closeProcessReader(cfg, md, owner, updated){
  const { sections } = mdSections(md);   // preamble (H1 + provenance blockquote) dropped
  const secs = sections.map((s, i) => acc(String(i + 1), esc(s.title), '', closeSectionBody(s.title, s.body), /close process/i.test(s.title))).join('');
  const runbookHref = 'data:text/plain;charset=utf-8,' + encodeURIComponent(ecoRunbookText(md));
  const actions = `<div class="eco-actions">`
    + `<button class="dlbtn big" type="button" data-print>${IC.dl}Save as PDF manual</button>`
    + `<a class="dlbtn ghost" download="${esc(cfg.dl || 'bookkeeping-runbook')}.txt" href="${runbookHref}">${IC.doc}Download as text</a>`
    + `<span class="eco-actions-note" data-print-note>Opens your browser’s print dialog — save the full runbook (cover, contents, every step) as a PDF.</span></div>`;
  return closePrintFrontMatter(cfg.name, 'Monthly Bookkeeping & Close', sections, owner, updated)
    + `<section class="mast"><div class="in">`
    + `<p class="kick">Bookkeeping runbook · per client</p>`
    + `<h1>${esc(cfg.name)}<span class="loc">${esc(cfg.loc)}</span></h1>`
    + `<p class="lede">${cfg.lede}</p>`
    + `<div class="meta">${readerMeta(owner, updated)}</div></div></section>`
    + `<div class="page">`
    + actions
    + closeSignature(cfg.oneRule)
    + closeFlow(cfg.flow)
    + `<div class="shead"><span class="schip">§</span><h2>The full runbook</h2></div>`
    + `<p class="slede">The authoritative detail — the client snapshot, the close process (with the Drive material for each step), the categorization rules, the reviewer checklist, and the open items. Open a section.</p>`
    + secs
    + `</div>`;
}

/* ---------------- Client-task reader (impeccable): animated process flow + Drive material button ----------------
   For simple, client-specific task SOPs (e.g. Deep Tech's Penn Credit toll pay-down), driven by a
   `task` config in the SOP catalog. The hero is a DESIGNED, animated flow on Atlas tokens (CSS motion,
   reduced-motion safe, visible without JS) — never a bare Mermaid block. Confidential Drive materials
   (here, the client's password vault) surface as a designed button with a hover tooltip + a visible
   caption — the same principle as the bookkeeping SOPs' Drive buttons. The full .md renders below, so
   nothing drifts (the .md's own "process at a glance" section is dropped — the animated flow replaces it). */
const TIC = {
  mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  key:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8.2-8.2M17 5l2 2M15 7l2 2"/></svg>',
  globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  pay:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>',
  dot:    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4"/></svg>',
};
function taskFlow(cfg){
  const nodes = (cfg.flow || []).map((s, i) => {
    const cls = s.k ? ' ' + s.k : '';
    const ic = TIC[s.ic] || TIC.dot;
    return `<li class="pcnode${cls}" style="--i:${i}">`
      + `<span class="pcnode-ic">${ic}</span>`
      + `<span class="pcnode-x"><span class="pcnode-t">${esc(s.t)}</span>`
      + `<span class="pcnode-d">${esc(s.d)}</span></span></li>`;
  }).join('');
  const loop = cfg.loop
    ? `<div class="pcloop"><span class="pcloop-ic" aria-hidden="true">${TIC.refresh}</span>`
      + `<span class="pcloop-x"><span class="pcloop-t">It recurs — not one-and-done</span>`
      + `<span class="pcloop-d">${esc(cfg.loop)}</span></span></div>`
    : '';
  return `<div class="pcflow"><span class="pcspine" aria-hidden="true"><span class="pcspine-pulse"></span></span>`
    + `<ol class="pcnodes">${nodes}</ol></div>${loop}`;
}
function vaultButton(v){
  if(!v || !v.url) return '';
  return `<div class="vault">`
    + `<a class="vault-btn" href="${v.url}" target="_blank" rel="noopener" aria-describedby="vault-tip">`
    + `<span class="vault-ic" aria-hidden="true">${TIC.key}</span>`
    + `<span class="vault-x"><span class="vault-t">${esc(v.label || 'Open the client password vault')}</span>`
    + `<span class="vault-s">Google Doc · opens in Google Drive</span></span>`
    + `<span class="vault-go" aria-hidden="true">${MIC.arrow}</span>`
    + `<span class="vault-tip" role="tooltip" id="vault-tip">${esc(v.tip)}</span></a>`
    + `<p class="vault-note"><span class="vault-lock" aria-hidden="true">🔒</span><span>${esc(v.note || v.tip)}</span></p>`
    + `</div>`;
}
function taskHead(title){
  const m = title.match(/^§\s*(\S+?)\.\s+(.*)$/);
  return `<div class="shead"><span class="schip">${esc(m ? m[1] : '§')}</span><h2>${esc(m ? m[2] : title)}</h2></div>`;
}
function taskSectionBody(title, body, cfg){
  if(cfg.vault && /where things live|links/i.test(title)) return vaultButton(cfg.vault) + mdToAtlas(body);
  return mdToAtlas(body);
}
function taskProcessReader(cfg, md, owner, updated){
  const { sections } = mdSections(md);
  const secs = sections.filter((s) => !/process at a glance/i.test(s.title))
    .map((s) => taskHead(s.title) + taskSectionBody(s.title, s.body, cfg)).join('');
  return `<section class="mast"><div class="in">`
    + `<p class="kick">Client task · runbook</p>`
    + `<h1>${esc(cfg.name)}<span class="loc">${esc(cfg.loc)}</span></h1>`
    + `<p class="lede">${cfg.lede}</p>`
    + `<div class="meta">${readerMeta(owner, updated)}</div></div></section>`
    + `<div class="page">`
    + `<div class="shead"><span class="schip">✦</span><h2>The process at a glance</h2></div>`
    + (cfg.flowLede ? `<p class="slede">${esc(cfg.flowLede)}</p>` : '')
    + taskFlow(cfg)
    + secs
    + `</div>`;
}

/* ---- Chart of Accounts — firm standard (rendered from the master, generated JSON) ---- */
const COA = (() => { try { return JSON.parse(read(resolve(here, 'coa-standard.json'))); } catch (e) { return []; } })();
function coaReaderInner(owner, updated){
  const ORDER = ['Assets','Liabilities','Equity','Income','Cost of Goods Sold','Operating Expenses','Other Income','Other Expense','Triage & holding'];
  const RANGE = {'Assets':'100–199','Liabilities':'200–299','Equity':'300–399','Income':'400–499','Cost of Goods Sold':'500–599','Operating Expenses':'600–799','Other Income':'800–899','Other Expense':'900–989','Triage & holding':'990–999'};
  const byClass = {}; COA.forEach(a => { (byClass[a.class] = byClass[a.class] || []).push(a); });
  const classes = ORDER.filter(c => byClass[c]);

  const rangeTable = `<div class="tablewrap"><table class="links"><thead><tr><th>Range</th><th>Class</th><th>Accounts</th></tr></thead><tbody>`
    + classes.map(c => `<tr><td class="coa-num">${esc(RANGE[c])}</td><td>${esc(c)}</td><td>${byClass[c].length}</td></tr>`).join('')
    + `</tbody></table></div>`;

  const rules = `<ol class="qlist">`
    + `<li><b>One backbone, many niches.</b> The ranges above are fixed for every client — adapt <em>within</em> them, don't invent a parallel scheme.</li>`
    + `<li><b>Parent categories hold nothing.</b> An account tagged <span class="coa-tag">parent</span> is grouping-only — always post to a sub-account.</li>`
    + `<li><b>Sub-accounts use decimals + <code>Parent:Child</code> names</b> (e.g. <code>605.2 Advertising:Website</code>). Add the next free decimal.</li>`
    + `<li><b>Leave gaps</b> (605, 610, 612 …) so a new account slots in without renumbering.</li>`
    + `<li><b>Keep each account's QBO Type &amp; Detail Type</b> — that mapping drives the tax return.</li>`
    + `<li><b>Adapt, don't reinvent:</b> revenue → sub-accounts under 400 Net Sales · job costs → 500 COGS · niche costs → the closest 600–799 parent. New number only if nothing fits.</li>`
    + `<li><b>Triage discipline:</b> 998 (review for capitalization) and 999 (uncategorized) clear to <b>$0 at close</b>.</li>`
    + `</ol>`;

  // build-time master CSV (QuickBooks columns) — the initial download, works even without JS
  const csvField = (s) => { s = String(s == null ? '' : s); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const masterCsv = ['Account Number,Account Name,Type,Detail Type,Description']
    .concat(COA.map(a => [a.num, a.name, a.type, a.detail, a.desc].map(csvField).join(','))).join('\r\n');
  const masterHref = 'data:text/csv;charset=utf-8,' + encodeURIComponent(masterCsv);

  const classAcc = classes.map((c) => {
    const rows = byClass[c].map(a => {
      const indent = a.depth > 0 ? `<span class="coa-in" style="--d:${a.depth}"></span>` : '';
      const tag = a.parent ? ` <span class="coa-tag">parent</span>` : '';
      return `<tr class="coa-row${a.parent ? ' coa-parent' : ''}" data-type="${esc(a.type)}" data-detail="${esc(a.detail)}" data-desc="${esc(a.desc)}">`
        + `<td class="coa-inc"><input type="checkbox" checked aria-label="include ${esc(a.num)}"></td>`
        + `<td class="coa-numc"><input class="coa-e coa-numin" value="${esc(a.num)}" data-orig="${esc(a.num)}" spellcheck="false" aria-label="number"></td>`
        + `<td class="coa-namec">${indent}<input class="coa-e coa-namein" value="${esc(a.name)}" data-orig="${esc(a.name)}" spellcheck="false" aria-label="name">${tag}</td>`
        + `<td class="coa-desc">${esc(a.desc)}</td></tr>`;
    }).join('');
    const body = `<div class="tablewrap"><table class="links coa-tbl"><thead><tr><th class="coa-inc">✓</th><th>#</th><th>Account name</th><th>What it's for</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    return acc(RANGE[c].split('–')[0], esc(c), byClass[c].length + ' accounts', body, false);
  }).join('');

  const csvTool = `<div class="coa-tool">
    <div class="coa-tool-x"><p class="coa-tool-t">Build your import file</p>
      <p class="coa-tool-d">Download the full template as-is, or first <b>untick</b> accounts you don't need and <b>edit</b> a number or name in the tables below — then download a <b>QuickBooks-ready CSV</b> and import it.</p></div>
    <div class="coa-tool-b">
      <a class="dlbtn big" id="coaDL" download="JK-Chart-of-Accounts.csv" href="${masterHref}">${IC.dl}Download CSV for QuickBooks</a>
      <button class="coa-reset" id="coaReset" type="button">Reset</button>
    </div>
  </div>`;

  return `<section class="mast"><div class="in">`
    + `<p class="kick">Bookkeeping standard · firm-wide</p>`
    + `<h1>Chart of Accounts<span class="loc">One numbering system, adapted per client</span></h1>`
    + `<p class="lede">We don't force one chart on every client — but we keep the same <b>skeleton</b> so any bookkeeper can read any client's books and the tax mapping stays consistent. What changes per client is which accounts are active and the niche sub-accounts you add.</p>`
    + `<div class="meta">${readerMeta(owner, updated)}</div></div></section>`
    + `<div class="page">`
    + `<div class="shead"><span class="schip">1</span><h2>The system — number ranges</h2></div>`
    + `<p class="slede">Each account's class is its number range. The range and its meaning never change.</p>` + rangeTable
    + `<div class="shead"><span class="schip">2</span><h2>The rules that keep it organized</h2></div>` + rules
    + `<div class="callout note"><div class="cx"><div class="cl">Adapting for a client</div><p>Import the master, <b>activate</b> what the client uses &amp; <b>deactivate</b> the rest (don't delete — keeps numbering stable), <b>rename</b> the flagged accounts, and <b>add niche sub-accounts</b> under the right parent. Client-specific quirks go in that client's bookkeeping SOP, not here.</p></div></div>`
    + `<div class="shead"><span class="schip">3</span><h2>The full list — download or customize</h2></div>`
    + `<p class="slede">The firm master — ${COA.length} accounts. Download it as a QuickBooks CSV, or tailor it first (untick / edit numbers &amp; names), then download.</p>`
    + csvTool + classAcc
    + `</div>`;
}

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
    name: 'Bookkeeping', note: 'The firm-wide numbering standard',
    items: [
      { file: 'chart-of-accounts-standard.md', title: 'Chart of Accounts — Firm Standard', coa: true,
        blurb: 'The firm’s one numbering system for every client — the ranges (100 assets … 999 triage), the rules that keep it organized, and the full 125-account master. Adapt per niche, don’t reinvent.' },
      { file: 'ecoorganic-bookkeeping-review.md', title: 'Ecoorganic — Monthly Bookkeeping & Review', perClient: true, client: { slug: 'ecoorganic-usa', name: 'Ecoorganic' },
        blurb: 'Ecoorganic’s monthly categorization rules, chart-of-accounts conventions, the reviewer checklist, and the open-decisions log. A per-client runbook.' },
      { file: 'magnum-152-bookkeeping-review.md', title: 'Magnum 152 — Monthly Bookkeeping & Close', perClient: true, client: { slug: 'magnum-152', name: 'Magnum 152' },
        blurb: 'Magnum 152’s monthly close — a multi-store pawn/jewelry business. The month-end process with a Drive walkthrough button for every step, the categorization rules, the reviewer checklist, and the open-items log. A per-client runbook.',
        close: {
          name: 'Magnum 152', loc: 'Monthly bookkeeping & close · multi-store pawn', dl: 'Magnum-152-bookkeeping-runbook',
          lede: "Everything a bookkeeper needs to run Magnum's month-end close — the one rule, the monthly flow, then the close step by step with a button straight to Maria's Drive walkthrough for each one. Built from the runbook, so it stays in sync.",
          oneRule: "Reports go out <b>quarterly, not monthly</b>. <b>PayPal 1015 has no live feed</b> — it's a monthly journal entry. Payroll is <b>run by the owner in ADP</b> — you only reconcile it and rename the JEs. And the month isn't closed until <b>triage reads $0</b>.",
          flow: [
            { t: 'Gather', d: 'Bravo reports + statements → Drive' },
            { t: 'Reconcile', d: 'Every feed · PayPal via JE' },
            { t: 'Per-store JEs', d: 'MS1 Griffin · MS2 Miami' },
            { t: 'Consolidate', d: 'GL via SaasAnt' },
            { t: 'Other JEs', d: 'Cash · inventory · insurance · Kabbage' },
            { t: 'Vendor + ADP', d: 'Merch/US&nbsp;Pawn/Scrap · reconcile ADP' },
            { t: 'Reclass', d: 'Utilities · store splits · ADMIN' },
            { t: 'Performance vs QBO', d: 'The tie-out' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
            { t: 'Delivered', d: 'Quarterly / on request', k: 'done' },
          ],
        } },
      { file: 'sunoma-bookkeeping-review.md', title: 'Sunoma Inc — Monthly Bookkeeping & Close', perClient: true, client: { slug: 'sunoma-inc', name: 'Sunoma' },
        blurb: 'Sunoma’s monthly close — a two-store pawn business (Lucky Pawn & Auto Pawn). Per-store journal entries, PaymentsHub date fixes, ADP, and the close, with a Drive walkthrough button for every step. A per-client runbook.',
        close: {
          name: 'Sunoma Inc', loc: 'Monthly bookkeeping & close · two-store pawn (LP / AP)', dl: 'Sunoma-bookkeeping-runbook',
          lede: "Everything a bookkeeper needs to run Sunoma's month-end close — the one rule, the monthly flow, then the close step by step with a button to Maria's Drive walkthrough for each one. Built from the runbook, so it stays in sync.",
          oneRule: "Everything is <b>per store</b> — Lucky Pawn (LP) and Auto Pawn (AP) are journalized <b>separately</b>. The close can't finish until the owner sends the month-end reports <b>via TaxDome</b>, so nudge the pipeline early. Reports go out <b>quarterly / on request</b>.",
          flow: [
            { t: 'Gather', d: 'Owner sends reports via TaxDome (LP/AP)' },
            { t: 'Reconcile', d: 'Truist ×2 · Chase · Visa · PayPal' },
            { t: 'Merch dates', d: 'Fix PaymentsHub deposit/fee dates' },
            { t: 'ADP', d: 'Rename JEs + reconcile' },
            { t: 'Monthly JEs', d: 'Per store — LP & AP' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
            { t: 'Delivered', d: 'Quarterly / on request', k: 'done' },
          ],
        } },
      { file: 'mobilesource-bookkeeping-review.md', title: 'Mobilesource Corp — Monthly Bookkeeping & Close', perClient: true, client: { slug: 'mobilesource-corp', name: 'Mobilesource' },
        blurb: 'Mobilesource’s monthly close — phone sales & repairs. The client keeps its own books (JK reconciles), monthly FL DOR sales tax (recalculated), and biweekly Gusto payroll, with a Drive walkthrough button for every step. A per-client runbook.',
        close: {
          name: 'Mobilesource Corp', loc: 'Monthly bookkeeping & close · phone sales & repairs', dl: 'Mobilesource-bookkeeping-runbook',
          lede: "Everything a bookkeeper needs to run Mobilesource's month-end close — the one rule, the monthly flow, then the close step by step with a button to Maria's Drive walkthrough for each one. Built from the runbook, so it stays in sync.",
          oneRule: "The client keeps its own books — the <b>GM categorizes ~everything</b>; JK reconciles and reviews. The FL DOR <b>sales-tax report is never right out of the box</b> — always recalculate. And payroll gets <b>one consolidated Tuesday email (CC Julia)</b> before you run it.",
          flow: [
            { t: 'Reconcile', d: 'GM categorizes · JK reconciles' },
            { t: 'AP / AR review', d: 'Send for write-off review' },
            { t: 'Sales tax', d: 'FL DOR · recalculate the report' },
            { t: 'Payroll', d: 'Gusto (Tue) + Simple IRA roster' },
            { t: 'Triage → $0', d: 'Buyback out of Uncat', k: 'gate' },
            { t: 'Delivered', d: 'Monthly', k: 'done' },
          ],
        } },
      { file: 'sensustech-bookkeeping-review.md', title: 'SENSUSTECH LLC — Monthly Bookkeeping & Close', perClient: true, client: { slug: 'sensustech', name: 'Sensustech' },
        blurb: 'Sensustech’s monthly close — software / app development. The signature task is the monthly Brokerage JE from statements (via TaxDome); sub-CC 4800 is entered manually. A per-client runbook with a Drive walkthrough button per step.',
        close: {
          name: 'SENSUSTECH LLC', loc: 'Monthly bookkeeping & close · software / apps', dl: 'Sensustech-bookkeeping-runbook',
          lede: "Everything a bookkeeper needs to run Sensustech's month-end close — the one rule, the monthly flow, then the close step by step with a button to Maria's Drive walkthrough for each one. Built from the runbook, so it stays in sync.",
          oneRule: "Most activity is transfers + card expenses (ads, software, subscriptions, travel, meals) + sales + labor. The signature monthly task is the <b>Brokerage JE from the managed-brokerage statements</b> (no direct access — request via TaxDome). <b>Sub-CC 4800 is entered manually</b>. When unsure, send it to <b>Uncategorized</b> — the owner clears it fast.",
          flow: [
            { t: 'Reconcile', d: 'Chase feeds · sub-CC 4800 manual' },
            { t: 'Brokerage JE', d: 'From statements (via TaxDome)' },
            { t: 'Uncat → owner', d: 'Owner clears fast' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
            { t: 'Delivered', d: 'Monthly (bundled)', k: 'done' },
          ],
        } },
      { file: 'margate-plumbing-bookkeeping-review.md', title: 'Margate Plumbing — Monthly Bookkeeping & Close', perClient: true, client: { slug: 'margate-plumbing', name: 'Margate Plumbing' },
        blurb: 'Margate’s monthly close — a plumbing contractor. AR is owner-managed and needs care (weekly meeting with Julia); review the intercompany loan and adjust off-Gusto payments. A per-client runbook with a Drive walkthrough button per step.',
        close: {
          name: 'Margate Plumbing Inc', loc: 'Monthly bookkeeping & close · plumbing contractor', dl: 'Margate-bookkeeping-runbook',
          lede: "Everything a bookkeeper needs to run Margate's month-end close — the one rule, the monthly flow, then the close step by step with a button to Maria's Drive walkthrough for each one. Built from the runbook, so it stays in sync.",
          oneRule: "<b>AR is managed by the owner and is not accurate</b> (wrong dates, wrong invoices, wrong accounts), so payment reconciliation is the hard part — bring it to the <b>weekly meeting with Julia</b>. <b>Review the intercompany loan</b> with the sister company each month, and adjust any employee payments made <b>outside Gusto</b>.",
          flow: [
            { t: 'Bank feed', d: 'Categorize the feed' },
            { t: 'Reconcile', d: 'WF · Mercury · BoA · Amex' },
            { t: 'Intercompany loan', d: 'Agree with the sister co.' },
            { t: 'AR corrections', d: 'Weekly meeting with Julia' },
            { t: 'Outside-Gusto adj', d: 'Book payments sent off-Gusto' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
            { t: 'Delivered', d: 'With the sister entity', k: 'done' },
          ],
        } },
      { file: 'beemold-usa-bookkeeping-review.md', title: 'Beemold USA — Monthly Bookkeeping & Close', perClient: true, client: { slug: 'beemold-usa', name: 'Beemold' },
        blurb: 'Beemold’s monthly close — the quieter sister plumbing entity. Bank-feed sync has been broken since Feb 2025, so transactions are uploaded manually; review the intercompany loan each month. A per-client runbook with a Drive walkthrough button per step.',
        close: {
          name: 'Beemold USA LLC', loc: 'Monthly bookkeeping & close · plumbing (sister entity)', dl: 'Beemold-bookkeeping-runbook',
          lede: "Everything a bookkeeper needs to run Beemold's month-end close — the one rule, the monthly flow, then the close step by step with a button to Maria's Drive walkthrough for each one. Built from the runbook, so it stays in sync.",
          oneRule: "The bank-feed <b>sync has been broken since Feb 2025</b> — upload the Mercury + BoA transactions <b>manually</b>. <b>Review the intercompany loan</b> with the sister company each month. Beemold is the <b>quieter</b> of the pair — some months have no activity.",
          flow: [
            { t: 'Manual upload', d: 'Mercury + BoA (sync broken)' },
            { t: 'Reconcile', d: 'Mercury ×2 + CC · BoA' },
            { t: 'Intercompany loan', d: 'Agree with the sister co.' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
            { t: 'Delivered', d: 'With the sister entity', k: 'done' },
          ],
        } },
    ],
  },
  {
    name: 'Client portal (Double)', note: 'Getting clients into the portal, on-brand',
    items: [
      { file: 'double-portal-first-login.md', title: 'Double Portal — First-Time Sign-In',
        blurb: 'The reliable password-reset workaround for the Double client portal, plus ready-to-send client guides (visual guide + PDF, email, WhatsApp — EN & RU).',
        // team page: cut the internal file table + "recommended" notes, show the guide images instead
        truncateAt: 'Client-ready templates',
        guides: [
          { lang: 'English', png: 'double-first-login-en.png', pdf: 'double-first-login-en.pdf' },
          { lang: 'Russian', png: 'double-first-login-ru.png', pdf: 'double-first-login-ru.pdf' },
        ] },
      // 'double-portal-branding.md' is intentionally NOT listed — it's an internal setup
      // note (kept in the repo), not something the team needs in the Hub.
    ],
  },
  {
    name: 'Client tasks', note: 'One-off and recurring client-specific procedures',
    items: [
      { file: 'deep-tech-penn-credit-tolls.md', title: 'Deep Tech — FDOT Toll Debts (Penn Credit)', client: { slug: 'deep-tech-development', name: 'Deep Tech' },
        blurb: 'Clear Deep Tech’s unpaid FDOT tolls that were sent to the Penn Credit collection agency — the ID-number + ZIP login, the pay-down steps, and the recurring watch (new toll items keep reappearing).',
        task: {
          name: 'Deep Tech Development Group LLC', loc: 'FDOT toll debts in collection · Penn Credit',
          lede: 'When a Penn Credit collection letter arrives for Deep Tech’s unpaid FDOT tolls, this is how JK logs in and pays the balance down so the letters stop — and why it has to be re-checked each time.',
          flowLede: 'A collection letter arrives → log in with the ID number + ZIP → clear the balance → confirm $0. It loops: a new toll can surface later, so each new letter restarts it.',
          flow: [
            { t: 'Letter arrives', d: 'Penn Credit collection notice — unpaid FDOT tolls', ic: 'mail' },
            { t: 'Get the login', d: 'From the client vault: account/ID number + ZIP code', ic: 'key' },
            { t: 'Log in', d: 'account.penncredit.com/myaccount', ic: 'globe' },
            { t: 'Review the balance', d: 'Read the outstanding toll item(s)', ic: 'search' },
            { t: 'Pay it down', d: 'Clear the balance through the portal', ic: 'pay' },
            { t: 'Confirm $0 · save receipt', d: 'Save the confirmation to the client’s Drive', ic: 'check', k: 'gate' },
          ],
          loop: 'Paying one balance to $0 has not stopped new toll amounts from reappearing — treat every new letter as a fresh pay-down.',
          vault: {
            url: 'https://docs.google.com/document/d/1dR6glVFYIu9k8bs4DPUzCcx1AnMq-d_-HoJWcTmJNug/edit',
            label: 'Open the client password vault',
            tip: 'This one Google Doc holds ALL of Deep Tech’s logins. Open it and search inside for the Penn Credit entry — the account/ID number + ZIP code. It is not a file that opens straight to that one password.',
            note: 'All of this client’s logins live in this one Doc — search inside it for the Penn Credit entry (account/ID number + ZIP). It’s not a single-password file.',
          },
        } },
    ],
  },
];

/* ---------------- build SOP cards ---------------- */
// Load the clients up-front (reuse the CI dashboard engine) so the per-client SOP groups
// can link straight down to each client's intelligence card (#slug). Used again below to
// render the client cards themselves.
const clients = loadClients(repoRoot);
const clientBySlug = new Map(clients.map((c) => [c.slug, c.title]));

let sopCount = 0;
const hubSopTitles = {};   // id → title, so client-card "Related SOP" links open the in-Hub reader (never a repo link)
const sopOwnerKeys = [];
const readerDocs = [];   // collected designed pages, opened in the in-Hub reader

// One SOP → its designed card, and (as a side effect) its reader doc pushed to readerDocs.
// grpName only feeds the card's search text.
function renderSopItem(it, grpName) {
  const rel = 'projects/sops/' + it.file;
  const abs = resolve(repoRoot, rel);
  if (!existsSync(abs)) return '';
  const md = read(abs);
  const owner = headerVal(md, 'Owner of SOP') || headerVal(md, 'Owner') || 'Firm';
  const ok = ownerKey(owner);
  sopOwnerKeys.push(ok);
  const updated = headerVal(md, 'Last updated') || headerVal(md, 'Started') || '';
  const id = basename(it.file, '.md');
  hubSopTitles[id] = it.title;
  sopCount++;
  // include the client's short + legal name so a search on either finds the card
  const text = [it.title, it.blurb, grpName, owner, it.tag, it.perClient ? 'per-client runbook' : '',
      it.client ? it.client.name : '',
      it.client && clientBySlug.has(it.client.slug) ? clientBySlug.get(it.client.slug) : '']
    .join(' ').toLowerCase();

  // build the reader doc: BTR uses its premium hand-laid render; Ecoorganic uses the
  // dynamic bookkeeping pilot layout; the rest auto-render (curated) from Markdown.
  let inner;
  if (it.coa) {
    inner = coaReaderInner(owner, updated);
  } else if (/business-tax-receipt/.test(it.file)) {
    inner = btrReaderInner();
  } else if (/ecoorganic/.test(it.file)) {
    inner = ecoorganicReaderInner(md, owner, updated);
  } else if (it.close) {
    inner = closeProcessReader(it.close, md, owner, updated);
  } else if (it.task) {
    inner = taskProcessReader(it.task, md, owner, updated);
  } else {
    let md2 = md;
    if (it.truncateAt) {                      // drop internal-only sections from the team page
      const re = new RegExp('\\n#{2}\\s+' + it.truncateAt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      const cut = md2.search(re);
      if (cut !== -1) md2 = md2.slice(0, cut);
    }
    let bodyHtml = mdToAtlas(md2);
    if (it.guides && it.guides.length) bodyHtml += guidesBlock(it.guides);
    inner = `<section class="mast"><div class="in"><p class="kick">Standard Operating Procedure</p>`
      + `<h1>${esc(it.title)}</h1><div class="meta">${readerMeta(owner, updated)}</div></div></section>`
      + `<div class="page">${bodyHtml}</div>`;
  }
  readerDocs.push(`<div class="rdoc" data-doc="${id}" hidden>${inner}</div>`);

  return `
      <a class="hcard doc-card" role="button" tabindex="0" data-open-doc="${id}" data-doc-name="${esc(it.title)}"
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
          <span class="tagm">Designed page</span>
        </div>
      </a>`;
}

// One group (a firm-wide topic, or a client) → its titled block of cards. A client group
// carries a `clientSlug`, which adds a header link down to that client's intelligence card.
function renderGroup(grp) {
  const cards = grp.items.map((it) => renderSopItem(it, grp.name)).join('');
  // The cross-link lives in the Procedures view but targets a card in the Client view;
  // data-goclient tells the script to switch views first, then scroll to the card.
  const link = grp.clientSlug && clientBySlug.has(grp.clientSlug)
    ? `<a class="ghd-link" data-goclient="${grp.clientSlug}" href="#${grp.clientSlug}">Client intelligence &rarr;</a>` : '';
  const id = grp.domId ? ` id="${grp.domId}"` : '';
  return `
    <div class="hgroup" data-group${id}>
      <div class="hgroup-hd">
        <h3>${esc(grp.name)}</h3>
        <span class="gct">${grp.items.length}</span>
        ${grp.note ? `<span class="gnote">${esc(grp.note)}</span>` : ''}
        ${link}
      </div>
      <div class="dgrid">${cards}</div>
    </div>`;
}

// Split the catalog by NATURE. Firm-wide procedures keep their topic groups; every
// client-specific SOP (tagged with `client`) is pulled out of its topic group and
// REGROUPED BY CLIENT (alpha by name), so a client's bookkeeping, sales-tax, collections
// and one-off tasks all sit together under their name. Empty topic groups drop out.
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const generalGroups = SOP_GROUPS
  .map((grp) => ({ ...grp, items: grp.items.filter((it) => !it.client) }))
  .filter((grp) => grp.items.length)
  .map((grp) => ({ ...grp, domId: 'grp-' + slugify(grp.name) }));

const clientGroupMap = new Map();
for (const it of SOP_GROUPS.flatMap((grp) => grp.items)) {
  if (!it.client) continue;
  // Loud build warning on a typo'd slug: the group still renders, but its "Client
  // intelligence ↓" link would silently vanish. Rule 9 has authors hand-type the slug.
  if (!clientBySlug.has(it.client.slug))
    console.warn(`⚠ SOP "${it.file}" has client.slug="${it.client.slug}", which matches no `
      + `client-intelligence file — its "Client intelligence" link will be missing. `
      + `Check the slug against projects/client-intelligence/clients/.`);
  if (!clientGroupMap.has(it.client.slug))
    clientGroupMap.set(it.client.slug, { name: it.client.name, clientSlug: it.client.slug, items: [] });
  clientGroupMap.get(it.client.slug).items.push(it);
}
const clientGroups = [...clientGroupMap.values()]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((g) => ({ ...g, domId: 'sopgrp-' + g.clientSlug }));

const generalGroupsHtml = generalGroups.map(renderGroup).join('');
const clientGroupsHtml = clientGroups.map(renderGroup).join('');

/* ---------------- build client cards (reuse the CI dashboard engine) ---------------- */
// loadClients() + clientCard() come from the client-intelligence render engine: the
// SAME parse + the SAME expandable cards as the standalone dashboard. Clicking a card
// expands services / systems / open items / sources INLINE — no navigation. `clients` /
// `clientBySlug` are loaded up in the SOP-cards section (the per-client SOP groups need them).
//
// Team-facing rule: NO repo/GitHub links in the Hub. The CI engine renders a client's
// "Related SOP"/sibling refs as repo `.md` links (correct for the repo, wrong for the Hub).
// Rewrite each: a Hub SOP → an in-Hub reader trigger (data-open-doc); a client slug → its
// in-page card (#slug); anything else → plain text. (Assumes `href` is the anchor's first
// attribute — how the CI render engine emits it.)
const rewriteCx = (html) => html.replace(/<a href="[^"]*\/([a-z0-9-]+)\.md"[^>]*>.*?<\/a>/g, (m, id) => {
  if (hubSopTitles[id]) return `<a class="cx-soplink" role="button" tabindex="0" data-open-doc="${id}" data-doc-name="${esc(hubSopTitles[id])}">${esc(hubSopTitles[id])} →</a>`;
  if (clientBySlug.has(id)) return `<a class="cx-soplink" data-goclient="${id}" href="#${id}">${esc(clientBySlug.get(id))} →</a>`;
  return '<span class="cx-none">in the repo</span>';
});
const clientOwnerKeys = clients.map((c) => ownerKey(c.owner));

// Client view = the CI cards, GROUPED BY OWNER (Julia · Lilian · Maria) so the client area
// reads as an organized roster, not a flat dump — and gives the sidebar real jump targets.
const OWNER_ORDER = ['julia', 'lilian', 'maria'];
const clientsByOwner = new Map();
clients.forEach((c) => {
  const k = ownerKey(c.owner);
  if (!clientsByOwner.has(k)) clientsByOwner.set(k, []);
  clientsByOwner.get(k).push(c);
});
const orderedClientOwners = OWNER_ORDER.filter((o) => clientsByOwner.has(o))
  .concat([...clientsByOwner.keys()].filter((o) => !OWNER_ORDER.includes(o)));
const clientOwnerGroupsHtml = orderedClientOwners.map((o) => {
  const cs = clientsByOwner.get(o);
  const cards = cs.map((c) => rewriteCx(clientCard(c))).join('');
  return `
    <div class="hgroup" data-group id="clients-${o}">
      <div class="hgroup-hd">
        <h3>${esc(ownerName(o))}</h3>
        <span class="gct">${cs.length}</span>
        <span class="gnote">${esc(ownerName(o))}’s clients</span>
      </div>
      <div class="cx-grid">${cards}</div>
    </div>`;
}).join('');

/* ---------------- sidebar index (the clickable table of contents, scrollspy targets) --- */
const sopIndexHtml =
  (generalGroups.length ? `<p class="hix-t">Firm-wide</p>`
    + generalGroups.map((g) => `<a class="hix-a" href="#${g.domId}" data-spy="${g.domId}">${esc(g.name)}<span class="hix-n">${g.items.length}</span></a>`).join('') : '')
  + (clientGroups.length ? `<p class="hix-t">By client</p>`
    + clientGroups.map((g) => `<a class="hix-a" href="#${g.domId}" data-spy="${g.domId}">${esc(g.name)}<span class="hix-n">${g.items.length}</span></a>`).join('') : '');
const clientIndexHtml = orderedClientOwners.map((o) =>
  `<p class="hix-t">${esc(ownerName(o))}<span class="hix-tn">${clientsByOwner.get(o).length}</span></p>`
  + clientsByOwner.get(o).map((c) => `<a class="hix-a" href="#${c.slug}" data-spy="${c.slug}">${esc(c.title)}</a>`).join('')
).join('');

/* owner filter chips (distinct owners across SOPs + clients) */
const ownersPresent = new Set([...sopOwnerKeys, ...clientOwnerKeys]);
const orderedOwners = ['julia', 'lilian', 'maria'].filter((o) => ownersPresent.has(o));
const ownerChips = ['<button class="ochip" data-owner-filter="all" aria-pressed="true">Everyone</button>']
  .concat(orderedOwners.map((o) => `<button class="ochip" data-owner-filter="${o}" aria-pressed="false">${esc(ownerName(o))}</button>`))
  .join('');

/* client facets — Structure (Legal vs Tax) + Service. All come straight off the CI
   engine's parsed fields (c.legalCls / c.taxCls / c.svcKeys). Entity has TWO distinct
   dimensions — LEGAL structure (LLC · Corporation…) and TAX classification (S-corp ·
   C-corp · Partnership · Disregarded…) — so the Structure filter is a Legal|Tax toggle
   that swaps which chip set shows, instead of one conflated list. We render only the
   buckets that actually have clients, each with a live count. SOP cards carry none of
   these attributes, so picking any chip naturally narrows to matching clients. */
function facetChips(kind, order, labels) {
  const pick = { legal: (c) => [c.legalCls], tax: (c) => [c.taxCls], svc: (c) => c.svcKeys || [] }[kind];
  const counts = {};
  clients.forEach((c) => pick(c).filter(Boolean).forEach((k) => { counts[k] = (counts[k] || 0) + 1; }));
  const attr = `data-${kind}-filter`;
  return [`<button class="ochip" ${attr}="all" aria-pressed="true">All</button>`]
    .concat(order.filter((k) => counts[k]).map((k) =>
      `<button class="ochip" ${attr}="${k}" aria-pressed="false">${esc(labels[k])} <span class="cn">${counts[k]}</span></button>`))
    .join('');
}
const legalChips = facetChips('legal',
  ['llc', 'corp', 'partnership', 'soleprop'],
  { llc: 'LLC', corp: 'Corporation', partnership: 'Partnership', soleprop: 'Sole prop' });
const taxChips = facetChips('tax',
  ['scorp', 'ccorp', 'partnership', 'disregarded', 'soleprop'],
  { scorp: 'S-corp', ccorp: 'C-corp', partnership: 'Partnership', disregarded: 'Disregarded', soleprop: 'Sole prop' });
const serviceChips = facetChips('svc',
  ['bookkeeping', 'payroll', 'salestax', 'incometax'],
  { bookkeeping: 'Bookkeeping', payroll: 'Payroll', salestax: 'Sales tax', incometax: 'Income tax' });

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

// The brand EMBLEM (reversed) for the teal top bar — the double-ring seal + J&K monogram
// + bronze diamonds (brand/logo/svg/JK-emblem-reversed.svg). Replaces the bare "JK"
// monogram that read as the name's initials repeated before "JK Accounting Group"
// (the header-lockup fix established in PR #95, applied here per Lilian's request).
const emblem = `<svg class="hbadge" viewBox="0 0 120 120" role="img" aria-label="JK Accounting Group emblem"><circle cx="60" cy="60" r="57" fill="none" stroke="#ECE6DA" stroke-width="3.5"></circle><circle cx="60" cy="60" r="50.5" fill="none" stroke="#CFA268" stroke-width="1.6"></circle><g fill="#CFA268"><path d="M7 55.5 l4.5 4.5 -4.5 4.5 -4.5 -4.5 z"></path><path d="M113 55.5 l4.5 4.5 -4.5 4.5 -4.5 -4.5 z"></path></g><g transform="translate(60,60) scale(0.62) translate(-59,-56)"><g fill="none" stroke="#ECE6DA" stroke-width="9" stroke-linecap="butt" stroke-linejoin="miter"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"></path><path d="M70 26 L70 86"></path><path d="M70 56 L92 26"></path><path d="M70 56 L95 86"></path></g></g></svg>`;

const BODY = `
<!-- ============================ TOOLBAR ============================ -->
<header class="bar">
  <div class="in">
    <div class="lhs">
      <button class="navtoggle" id="navToggle" type="button" aria-label="Open the index" aria-expanded="false" aria-controls="hnav">${IC.menu}</button>
      ${emblem}
      <b class="bp-brand">JK Accounting Group</b>
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
      <span class="chipm live"><span class="dot"></span><b data-count="${totalCount}">${totalCount}</b>&nbsp;documents</span>
      <span class="chipm"><span class="dot"></span><b data-count="${sopCount}">${sopCount}</b>&nbsp;procedures</span>
      <span class="chipm"><span class="dot"></span><b data-count="${clientCount}">${clientCount}</b>&nbsp;clients</span>
      <span class="chipm"><span class="dot"></span>Generated&nbsp;<b>${today}</b></span>
    </div>
  </div>
</section>

<!-- ============================ APP SHELL: left index + content ============================ -->
<div class="hshell">
  <div class="hnav-scrim" id="hnavScrim" hidden></div>

  <!-- LEFT INDEX (sticky on desktop, a drawer on mobile) -->
  <aside class="hnav" id="hnav" aria-label="Hub index">
    <div class="hnav-in">
      <!-- the two areas -->
      <div class="viewseg" role="tablist" aria-label="Choose an area">
        <button class="viewbtn" role="tab" type="button" data-view-btn="sop" aria-selected="true">${IC.doc}<span class="vb-l">Procedures</span><span class="vb-n">${sopCount}</span></button>
        <button class="viewbtn" role="tab" type="button" data-view-btn="client" aria-selected="false">${IC.people}<span class="vb-l">Client intelligence</span><span class="vb-n">${clientCount}</span></button>
      </div>

      <!-- search -->
      <div class="hsearch" id="hsearch">
        ${IC.search}
        <input type="search" id="q" placeholder="Search…" autocomplete="off" aria-label="Search the hub">
        <button class="clr" id="clr" type="button" aria-label="Clear search">${IC.x}</button>
      </div>

      <!-- filters: owner is shared; structure + service are client-only -->
      <div class="hnav-filters">
        <div class="ochips"><span class="ol">Owner</span>${ownerChips}</div>
        <div class="ochips struct" data-filters-view="client" hidden>
          <span class="ol">Structure</span>
          <span class="modeseg" role="group" aria-label="Filter by legal or tax structure">
            <button class="modebtn" type="button" data-structmode="legal" aria-pressed="false" title="Legal structure — the state-law entity">Legal</button>
            <button class="modebtn" type="button" data-structmode="tax" aria-pressed="true" title="Tax classification — how the IRS taxes it">Tax</button>
          </span>
          <span class="structchips" data-structgroup="legal" hidden>${legalChips}</span>
          <span class="structchips" data-structgroup="tax">${taxChips}</span>
        </div>
        <div class="ochips" data-filters-view="client" hidden><span class="ol">Service</span>${serviceChips}</div>
      </div>

      <!-- the clickable index (scrollspy) -->
      <nav class="hix" data-index-view="sop" aria-label="Procedures index">${sopIndexHtml}</nav>
      <nav class="hix" data-index-view="client" aria-label="Client index" hidden>${clientIndexHtml}</nav>

      <details class="hnav-help">
        <summary>How to use this Hub</summary>
        <div class="hnav-help-b">
          <p>This is the <b>review Hub</b> — everything in the repo, including work in progress. When a document is approved, we publish just that one to the team site.</p>
          <p><b>Procedures</b> open as a designed page right here; <b>client</b> cards expand in place. Search or filter, then jump from this index.</p>
        </div>
      </details>
    </div>
  </aside>

  <!-- CONTENT -->
  <main class="hmain" id="hmain">
    <!-- ===== PROCEDURES VIEW ===== -->
    <section class="hview" data-view="sop">
      <div class="hview-hd">
        <div class="hview-t"><h2>Procedures &amp; runbooks</h2><span class="ct">${sopCount}</span></div>
        <p class="hview-sub">How the firm does its work. <b>Firm-wide</b> procedures that fit any client come first; <b>client-specific</b> ones are grouped under each client, so everything the firm does for one client sits together.</p>
      </div>
      ${generalGroups.length ? `
      <div class="hband" data-section>
        <div class="hband-hd"><h3>Firm-wide</h3><p>Procedures that apply to any client — company formation, licensing, the bookkeeping standard and the client portal.</p></div>
        ${generalGroupsHtml}
      </div>` : ''}
      ${clientGroups.length ? `
      <div class="hband" data-section>
        <div class="hband-hd"><h3>By client</h3><p>Everything specific to one client, grouped together — bookkeeping, sales tax, collections, one-off tasks. As a client accumulates procedures, they all live under their name here.</p></div>
        ${clientGroupsHtml}
      </div>` : ''}
    </section>

    <!-- ===== CLIENT INTELLIGENCE VIEW ===== -->
    <section class="hview" data-view="client" hidden>
      <div class="hview-hd">
        <div class="hview-t"><h2>Client intelligence</h2><span class="ct">${clientCount}</span></div>
        <p class="hview-sub"><b>Click any client</b> to expand its services, systems, open items and sources, right here. Grouped by who owns the relationship. Sensitive data stays in Drive / Double, linked from each card.</p>
      </div>
      ${clientOwnerGroupsHtml}
    </section>

    <div class="noresults" id="noresults">
      <div class="box"><h3>No matches</h3><p>Nothing here matches your search and filters. Try a different word, or reset the filters.</p></div>
    </div>
  </main>
</div>

<!-- ============================ FOOTER ============================ -->
<footer class="foot">
  <div class="in">
    <div class="row">
      <svg viewBox="18 20 82 72" class="jkmark" aria-hidden="true"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"/><path d="M70 26 L70 86"/><path d="M70 56 L92 26"/><path d="M70 56 L95 86"/></svg>
      <div>
        <b>JK Accounting Group — Knowledge Hub</b>
        <p>Generated from the repository (<code>projects/sops</code> + <code>projects/client-intelligence</code>). The repo is the source of truth; this page is a view of it. Re-run <code>build-hub.mjs</code> to refresh. Procedures open a designed page in the reader; client cards expand in place.</p>
      </div>
    </div>
    <div class="bottom">
      <span>Internal reference — do not distribute</span>
      <span>Atlas design system — built with the impeccable skill</span>
    </div>
  </div>
</footer>

<!-- ============================ SOP READER (in-page, designed pages) ============================ -->
<div class="reader" id="reader" hidden aria-modal="true" role="dialog" aria-label="Document reader">
  <div class="reader-bar">
    <button class="reader-close" id="readerClose" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>
      Back to Hub
    </button>
    <span class="reader-title" id="readerTitle"></span>
    <button class="reader-print" id="readerPrint" type="button" aria-label="Print / PDF">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/></svg>
    </button>
  </div>
  <div class="reader-scroll" id="readerScroll">${readerDocs.join('\n')}</div>
</div>

<script>
(function(){
  var root = document.documentElement;
  root.classList.add('js');

  // ---- File delivery -------------------------------------------------------
  // The claude.ai Artifact sandbox blocks BOTH "<a download>" (data: and blob:)
  // AND window.print(). The only sanctioned path there is the downloads
  // capability: window.claude.downloads.save({filename,data}). On the real host
  // that capability is absent, so we fall back to a Blob download (works there).
  // Presence of window.claude.downloads is our "we're in the sandbox" signal.
  var CAP = !!(window.claude && window.claude.downloads);
  // capability filename allowlist (extension → MIME comes from the extension)
  var ALLOW = { gif:1, png:1, jpg:1, jpeg:1, webp:1, mp4:1, webm:1, txt:1, json:1, md:1 };
  function extOf(name){ var m = /\\.([a-z0-9]+)$/i.exec(name || ''); return m ? m[1].toLowerCase() : ''; }
  function blobFallback(filename, data, mime){
    try{
      var blob = (data instanceof Blob) ? data : new Blob([data], { type: mime || 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var t = document.createElement('a');
      t.href = url; t.download = filename || 'download';
      document.body.appendChild(t); t.click(); t.remove();
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1500);
    }catch(e){ /* nothing more we can do */ }
  }
  // Hand a file to the viewer. data: string (UTF-8) or Blob.
  function saveFile(filename, data, mime){
    if(CAP){
      var name = filename, ext = extOf(filename);
      if(!ALLOW[ext]){
        // capability rejects csv/pdf/html; keep text under .txt, but never
        // relabel binary (would mislabel bytes) — let those use the blob path.
        if(typeof data === 'string'){ name = filename.replace(/\\.[a-z0-9]+$/i, '') + '.txt'; }
        else { return blobFallback(filename, data, mime); }
      }
      try{
        var p = window.claude.downloads.save({ filename: name, data: data });
        if(p && p.catch) p.catch(function(err){
          if(err && err.code === 'declined') return;   // viewer said no — respect it
          blobFallback(filename, data, mime);
        });
        return;
      }catch(e){ /* fall through to blob */ }
    }
    blobFallback(filename, data, mime);
  }
  // decode a data: URI to { text } (percent-encoded) or { blob } (base64/binary)
  function dataUri(uri){
    var comma = uri.indexOf(','); if(uri.indexOf('data:') !== 0 || comma < 0) return null;
    var meta = uri.slice(5, comma), payload = uri.slice(comma + 1);
    var mime = (meta.split(';')[0]) || 'application/octet-stream';
    if(/;base64/i.test(meta)){
      var bin = atob(payload), arr = new Uint8Array(bin.length);
      for(var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      return { mime: mime, blob: new Blob([arr], { type: mime }) };
    }
    try{ return { mime: mime, text: decodeURIComponent(payload) }; }
    catch(e){ return { mime: mime, text: payload }; }
  }

  // Theme toggle
  function isDark(){ var t=root.getAttribute('data-theme'); if(t) return t==='dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }
  var tb=document.getElementById('themeBtn');
  if(tb) tb.addEventListener('click', function(){ root.setAttribute('data-theme', isDark()?'light':'dark'); });
  var pb=document.getElementById('printBtn');
  // window.print() is blocked in the Artifact sandbox and there's no whole-Hub
  // file equivalent — hide this control there rather than leave it dead.
  if(pb){ if(CAP) pb.hidden = true; else pb.addEventListener('click', function(){ window.print(); }); }

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
  var state = { q:'', view:'sop', owner:'all', structMode:'tax', legal:'all', tax:'all', svc:'all' };
  function prefersReduced(){ return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  // Content must never depend on a JS reveal: show any reveal-gated card immediately.
  [].forEach.call(document.querySelectorAll('.reveal'), function(el){ el.classList.add('in'); });
  function cardOwner(c){ return (c.getAttribute('data-owner')||'').toLowerCase(); }
  function cardAttr(c, name){ return c.getAttribute(name)||''; }
  function cardSvc(c){ return ' ' + (c.getAttribute('data-svc')||'') + ' '; }

  var views = [].slice.call(document.querySelectorAll('.hview'));
  function activeView(){ return document.querySelector('.hview[data-view="'+state.view+'"]'); }

  function apply(){
    var q = state.q.trim().toLowerCase();
    cards.forEach(function(c){
      var ok = (state.owner==='all' || cardOwner(c)===state.owner)
            && (state.legal==='all' || cardAttr(c,'data-legal')===state.legal)
            && (state.tax==='all' || cardAttr(c,'data-tax')===state.tax)
            && (state.svc==='all' || cardSvc(c).indexOf(' '+state.svc+' ') !== -1)
            && (q==='' || (c.getAttribute('data-text')||'').indexOf(q) !== -1);
      c.style.display = ok ? '' : 'none';
    });
    groups.forEach(function(g){
      var any = [].some.call(g.querySelectorAll(SEL), function(c){ return c.style.display!=='none'; });
      g.hidden = !any;
    });
    sections.forEach(function(s){
      var any = [].some.call(s.querySelectorAll(SEL), function(c){ return c.style.display!=='none'; });
      s.hidden = !any;
    });
    var av = activeView();
    var shown = av ? [].filter.call(av.querySelectorAll(SEL), function(c){ return c.style.display!=='none'; }).length : 0;
    noRes.classList.toggle('on', shown===0);
  }

  // ---- The two areas: Procedures | Client intelligence (separate views, one at a time) ----
  function setView(v, silent){
    state.view = v;
    views.forEach(function(s){ s.hidden = s.getAttribute('data-view')!==v; });
    [].forEach.call(document.querySelectorAll('[data-view-btn]'), function(b){ b.setAttribute('aria-selected', b.getAttribute('data-view-btn')===v ? 'true':'false'); });
    [].forEach.call(document.querySelectorAll('[data-index-view]'), function(n){ n.hidden = n.getAttribute('data-index-view')!==v; });
    [].forEach.call(document.querySelectorAll('[data-filters-view]'), function(n){ n.hidden = n.getAttribute('data-filters-view')!==v; });
    // structure / service filters have no meaning outside the Client view — clear them
    if(v!=='client'){ resetFacet('legal','legal'); resetFacet('tax','tax'); resetFacet('svc','svc'); }
    apply();
    var av = activeView();
    if(av && !silent && !prefersReduced()){ av.classList.remove('view-in'); void av.offsetWidth; av.classList.add('view-in'); }
  }

  qEl.addEventListener('input', function(){ state.q=qEl.value; hs.classList.toggle('has-value', qEl.value.length>0); apply(); });
  clr.addEventListener('click', function(){ qEl.value=''; state.q=''; hs.classList.remove('has-value'); qEl.focus(); apply(); });

  [].forEach.call(document.querySelectorAll('[data-owner-filter]'), function(b){
    b.addEventListener('click', function(){
      state.owner=b.getAttribute('data-owner-filter');
      [].forEach.call(document.querySelectorAll('[data-owner-filter]'), function(x){ x.setAttribute('aria-pressed', x===b ? 'true':'false'); });
      apply();
    });
  });
  // Client facets: Structure (Legal / Tax) + Service — each a single-select chip group.
  function bindFacet(attr, key){
    var sel = '[data-'+attr+'-filter]';
    [].forEach.call(document.querySelectorAll(sel), function(b){
      b.addEventListener('click', function(){
        state[key]=b.getAttribute('data-'+attr+'-filter');
        [].forEach.call(document.querySelectorAll(sel), function(x){ x.setAttribute('aria-pressed', x===b ? 'true':'false'); });
        apply();
      });
    });
  }
  function resetFacet(attr, key){
    state[key]='all';
    [].forEach.call(document.querySelectorAll('[data-'+attr+'-filter]'), function(x){
      x.setAttribute('aria-pressed', x.getAttribute('data-'+attr+'-filter')==='all' ? 'true':'false');
    });
  }
  bindFacet('legal','legal'); bindFacet('tax','tax'); bindFacet('svc','svc');

  // Structure Legal|Tax toggle: swap which chip set shows and clear the other dimension,
  // so only one structure filter is ever active — keeps it clean, not a stack of chips.
  [].forEach.call(document.querySelectorAll('[data-structmode]'), function(b){
    b.addEventListener('click', function(){
      var mode=b.getAttribute('data-structmode');
      state.structMode=mode;
      [].forEach.call(document.querySelectorAll('[data-structmode]'), function(x){ x.setAttribute('aria-pressed', x===b ? 'true':'false'); });
      [].forEach.call(document.querySelectorAll('[data-structgroup]'), function(g){ g.hidden = g.getAttribute('data-structgroup')!==mode; });
      resetFacet(mode==='legal' ? 'tax' : 'legal', mode==='legal' ? 'tax' : 'legal');
      apply();
    });
  });

  // ---- Mobile index drawer ----
  var navToggle = document.getElementById('navToggle');
  var navScrim = document.getElementById('hnavScrim');
  function openNav(){ root.classList.add('nav-open'); if(navScrim) navScrim.hidden=false; if(navToggle) navToggle.setAttribute('aria-expanded','true'); }
  function closeNav(){ root.classList.remove('nav-open'); if(navScrim) navScrim.hidden=true; if(navToggle) navToggle.setAttribute('aria-expanded','false'); }
  if(navToggle) navToggle.addEventListener('click', function(){ root.classList.contains('nav-open') ? closeNav() : openNav(); });
  if(navScrim) navScrim.addEventListener('click', closeNav);

  // view buttons switch the area (and close the drawer on mobile)
  [].forEach.call(document.querySelectorAll('[data-view-btn]'), function(b){
    b.addEventListener('click', function(){ setView(b.getAttribute('data-view-btn')); closeNav(); });
  });

  // A "Client intelligence" cross-link (in a Procedures group, or between client cards)
  // jumps to the Client view and scrolls to that client's card, with a brief highlight.
  [].forEach.call(document.querySelectorAll('[data-goclient]'), function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      setView('client'); closeNav();
      var t = document.getElementById(a.getAttribute('data-goclient'));
      if(t){
        if(t.scrollIntoView) t.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start' });
        t.classList.remove('cx-flash'); void t.offsetWidth; t.classList.add('cx-flash');
      }
    });
  });

  // ---- Sidebar index scrollspy: highlight the entry for the topmost section on screen ----
  var spyLinks = [].slice.call(document.querySelectorAll('.hix-a[data-spy]'));
  var spyTargets = spyLinks.map(function(a){ return document.getElementById(a.getAttribute('data-spy')); }).filter(Boolean);
  var visSet = {};
  function refreshSpy(){
    var activeId = null;
    for(var i=0;i<spyTargets.length;i++){ if(visSet[spyTargets[i].id]){ activeId = spyTargets[i].id; break; } }
    spyLinks.forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-spy')===activeId); });
  }
  if('IntersectionObserver' in window && spyTargets.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting) visSet[en.target.id]=1; else delete visSet[en.target.id]; });
      refreshSpy();
    }, { rootMargin:'-84px 0px -60% 0px', threshold:0 });
    spyTargets.forEach(function(t){ io.observe(t); });
  }
  // clicking any index link closes the mobile drawer (native anchor + CSS smooth-scroll does the move)
  [].forEach.call(document.querySelectorAll('.hix-a'), function(a){ a.addEventListener('click', closeNav); });

  // ---- Count-up on the hero stats (reduced-motion: leave the final number as-is) ----
  if(!prefersReduced()){
    [].forEach.call(document.querySelectorAll('[data-count]'), function(el){
      var target = parseInt(el.getAttribute('data-count'),10) || 0;
      if(target<=0) return;
      var start=null, dur=900;
      el.textContent='0';
      function step(ts){
        if(start===null) start=ts;
        var p = Math.min(1,(ts-start)/dur);
        el.textContent = String(Math.round((1-Math.pow(1-p,3))*target));
        if(p<1) requestAnimationFrame(step); else el.textContent = String(target);
      }
      requestAnimationFrame(step);
    });
  }

  // initialize view state + filtering
  setView('sop', true);
  // keyboard: "/" focuses search
  document.addEventListener('keydown', function(e){
    if(e.key==='/' && document.activeElement!==qEl){ e.preventDefault(); qEl.focus(); }
    if(e.key==='Escape' && document.activeElement===qEl){ qEl.value=''; state.q=''; hs.classList.remove('has-value'); apply(); }
  });
  // expand every collapsible before printing so PDFs are complete (client details + SOP accordions)
  window.addEventListener('beforeprint', function(){
    [].forEach.call(document.querySelectorAll('details.cx-more, details.acc'), function(d){ d.open=true; });
  });
  // "Save as PDF manual" ([data-print]) and the reader-bar printer icon call the
  // browser's NATIVE print → PDF. That renders the design-system "book" layout
  // (@media print: cover + Contents + a page per section, chrome quieted) — the
  // studyable PDF. It works on the real host (Odoo) and any normal browser.
  // The claude.ai Artifact sandbox blocks window.print() and offers no capability
  // to enable it, so there we surface a short, honest note instead of a dead click;
  // "Download as text" stays as the preview's working file export.
  function previewPrintNote(){
    if(!CAP) return;
    var t = document.getElementById('printtoast');
    if(!t){
      t = document.createElement('div'); t.id = 'printtoast'; t.className = 'printtoast'; t.setAttribute('role', 'status');
      t.textContent = 'PDF & print open in your browser on the published Hub. In this preview, use “Download as text”.';
      document.body.appendChild(t);
    }
    t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
    clearTimeout(previewPrintNote._t);
    previewPrintNote._t = setTimeout(function(){ t.classList.remove('show'); }, 4600);
  }
  function doPrint(){ try{ window.print(); }catch(e){} previewPrintNote(); }
  // In the sandbox, rewrite each button's own note up-front so it's honest before any click.
  if(CAP){
    [].forEach.call(document.querySelectorAll('[data-print-note]'), function(n){
      n.textContent = 'On the published Hub this opens your browser’s print dialog to save a PDF. In this preview, use “Download as text”.';
      n.classList.add('is-preview');
    });
  }
  [].forEach.call(document.querySelectorAll('[data-print]'), function(b){
    b.addEventListener('click', doPrint);
  });

  // Downloads: "<a download href=data:>" is blocked in the sandbox (and silently on
  // some hosts). Intercept the click and route through saveFile — the downloads
  // capability in the sandbox, a Blob download on the real host. The plain anchor
  // stays as the no-JS fallback.
  [].forEach.call(document.querySelectorAll('a[download][href^="data:"]'), function(a){
    a.addEventListener('click', function(e){
      var parsed = dataUri(a.getAttribute('href') || '');
      if(!parsed) return;
      e.preventDefault();
      saveFile(a.getAttribute('download') || 'download', parsed.text != null ? parsed.text : parsed.blob, parsed.mime);
    });
  });

  // In-page SOP reader — open the designed page without leaving the Hub (works in the sandbox)
  var reader = document.getElementById('reader');
  var readerScroll = document.getElementById('readerScroll');
  var readerTitle = document.getElementById('readerTitle');
  var rdocs = [].slice.call(document.querySelectorAll('.rdoc'));
  function openDoc(id, name){
    rdocs.forEach(function(d){ d.hidden = d.getAttribute('data-doc') !== id; });
    readerTitle.textContent = name || '';
    reader.hidden = false; root.classList.add('reader-open'); readerScroll.scrollTop = 0;
    var rc = document.getElementById('readerClose'); if(rc) rc.focus();
  }
  function closeDoc(){ reader.hidden = true; root.classList.remove('reader-open'); }
  [].forEach.call(document.querySelectorAll('[data-open-doc]'), function(a){
    function go(e){ e.preventDefault(); openDoc(a.getAttribute('data-open-doc'), a.getAttribute('data-doc-name')); }
    a.addEventListener('click', go);
    a.addEventListener('keydown', function(e){ if(e.key==='Enter' || e.key===' ') go(e); });
  });
  var rClose = document.getElementById('readerClose'); if(rClose) rClose.addEventListener('click', closeDoc);
  var rPrint = document.getElementById('readerPrint');
  if(rPrint) rPrint.addEventListener('click', doPrint);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && reader && !reader.hidden) closeDoc(); });

  // Chart-of-Accounts tool: edit numbers/names, untick accounts, download a QuickBooks CSV.
  var coaDL = document.getElementById('coaDL');
  if(coaDL){
    function cf(s){ s=(s==null?'':''+s); return /[",\\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s; }
    function buildCsv(){
      var out=['Account Number,Account Name,Type,Detail Type,Description'];
      [].forEach.call(document.querySelectorAll('.coa-row'), function(tr){
        var inc=tr.querySelector('.coa-inc input'); if(inc && !inc.checked) return;
        var num=(tr.querySelector('.coa-numin')||{}).value||'';
        var name=(tr.querySelector('.coa-namein')||{}).value||'';
        out.push([num.trim(),name.trim(),tr.getAttribute('data-type'),tr.getAttribute('data-detail'),tr.getAttribute('data-desc')].map(cf).join(','));
      });
      coaDL.setAttribute('href','data:text/csv;charset=utf-8,'+encodeURIComponent(out.join('\\r\\n')));
    }
    // rebuild the CSV href right before the click, and whenever the tables change
    coaDL.addEventListener('pointerdown', buildCsv);
    coaDL.addEventListener('mousedown', buildCsv);
    document.addEventListener('input', function(e){ if(e.target.closest && e.target.closest('.coa-tbl')) buildCsv(); });
    document.addEventListener('change', function(e){
      var t=e.target; if(!t.closest || !t.closest('.coa-tbl')) return;
      if(t.matches && t.matches('.coa-inc input')){ var tr=t.closest('.coa-row'); if(tr) tr.classList.toggle('coa-off', !t.checked); }
      buildCsv();
    });
    var coaReset=document.getElementById('coaReset');
    if(coaReset) coaReset.addEventListener('click', function(){
      [].forEach.call(document.querySelectorAll('.coa-e'), function(i){ i.value=i.getAttribute('data-orig'); });
      [].forEach.call(document.querySelectorAll('.coa-inc input'), function(c){ c.checked=true; });
      [].forEach.call(document.querySelectorAll('.coa-row'), function(tr){ tr.classList.remove('coa-off'); });
      buildCsv();
    });
  }
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
