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
// Ecoorganic bookkeeping runbook — rendered FROM the .md (always in sync), each
// ## section as an expandable accordion. Team page: no other-client names.
function ecoorganicReaderInner(md, owner, updated){
  md = md.replace(/Masciave\/Aura-style grammar/g, 'Number-prefix grammar');
  const { preamble, sections } = mdSections(md);
  const preClean = preamble.replace(/^#\s+.*$/m, '').replace(/^>\s*\*\*Status:\*\*.*$/mi, '');
  const pre = mdToAtlas(preClean);
  const secs = sections.map((s, i) => acc(String(i + 1), esc(s.title), '', mdToAtlas(s.body), i === 0)).join('');
  return `<section class="mast"><div class="in">`
    + `<p class="kick">Bookkeeping runbook · per client</p>`
    + `<h1>Ecoorganic<span class="loc">Monthly bookkeeping &amp; independent review</span></h1>`
    + `<p class="lede">How this client's books are kept and reviewed each month — generated from the runbook, so it stays in sync. Open a section to expand it.</p>`
    + `<div class="meta">${readerMeta(owner, updated)}</div></div></section>`
    + `<div class="page">${pre}${secs}</div>`;
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
    name: 'Bookkeeping', note: 'The standard, then per-client runbooks',
    items: [
      { file: 'chart-of-accounts-standard.md', title: 'Chart of Accounts — Firm Standard', coa: true,
        blurb: 'The firm’s one numbering system for every client — the ranges (100 assets … 999 triage), the rules that keep it organized, and the full 125-account master. Adapt per niche, don’t reinvent.' },
      { file: 'ecoorganic-bookkeeping-review.md', title: 'Ecoorganic — Monthly Bookkeeping & Review', perClient: true,
        blurb: 'Ecoorganic’s monthly categorization rules, chart-of-accounts conventions, the reviewer checklist, and the open-decisions log. A per-client runbook.' },
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
];

/* ---------------- build SOP cards ---------------- */
let sopCount = 0;
const sopOwnerKeys = [];
const readerDocs = [];   // collected designed pages, opened in the in-Hub reader
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
    const id = basename(it.file, '.md');
    sopCount++;
    const text = [it.title, it.blurb, grp.name, owner, it.tag, it.perClient ? 'per-client runbook' : '']
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
      <p>The repo stays the single source of truth; this page is generated from it. Procedures open as designed pages right here; client cards expand in place.</p>
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
  var rPrint = document.getElementById('readerPrint'); if(rPrint) rPrint.addEventListener('click', function(){ window.print(); });
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
