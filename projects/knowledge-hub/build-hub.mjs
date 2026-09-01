#!/usr/bin/env node
/*
  JK Accounting Group — Knowledge Hub builder.

  Reads the firm's own repo as the source of truth and generates a single,
  self-contained, on-brand index page (the "Hub"):

    • Procedures & runbooks  ← projects/sops/*.md (plus a catalog item's `dir` override,
                               which is how the marketing playbook + its production workflow
                               are shown from projects/marketing/ without leaving that project)
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
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, writeSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
// Reuse the client-intelligence dashboard engine (PR #77) — the SAME parser and the
// SAME expandable client cards, so the Hub's client section is identical to the
// standalone dashboard and there is one implementation, no drift.
import { loadClients, clientCard, DASH_CSS } from '../../.claude/skills/client-intelligence/render/build.mjs';
// Lilian's Notebook is embedded from ITS OWN generator, so the Hub can never show a stale
// copy — same rule as the proposal tools (one source, no second copy to keep in sync).
import { buildNotebookDoc } from '../lilian-notebook/render/build.mjs';
// The same gate tools/build.mjs runs — see the block before the tool embeds below.
import { verifyAll as verifyWalkthroughs } from '../sops/tools/verify.mjs';

// console.error() is buffered when stderr is a pipe — which is exactly how these builds are
// normally logged — so a message written immediately before process.exit() can be dropped,
// leaving an exit code 1 with no cause anywhere. writeSync goes straight to the descriptor.
function die(...lines){
  for (const l of lines) writeSync(2, l + '\n');
  process.exit(1);
}


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
  tpl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1z"/></svg>',
};

/* ---------------- SOP → Atlas reader (open the designed page INSIDE the Hub) ----------------
   The Hub is viewed as a sandboxed link, where opening external pages (GitHub) is blocked.
   So each procedure's designed page is embedded and opened in an in-page reader overlay —
   no navigation. BTR uses its hand-laid render; the rest are auto-rendered from Markdown
   onto the Atlas classes (headings, lists, tables, callouts, code, mermaid flowchart). */
const DOCLINK_ARROW = '<svg class="doclink-a" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function mdInlineHub(s){
  let out = esc(s);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(m, t, u){
    if(/^https?:\/\//.test(u)) return '<a href="' + u + '" target="_blank" rel="noopener">' + t + '</a>';
    // A relative link is NEVER shown as a repo path/filename in the team-facing Hub. A `.md`
    // that maps to a Hub SOP becomes a designed in-Hub reader BUTTON (opens that SOP without
    // leaving the Hub); any other relative link degrades to clean styled text (filename dropped).
    var mdm = u.match(/([^/]+)\.md(?:[#?].*)?$/i);
    var label = t.replace(/`/g, '').trim();   // t is already esc()'d — just drop code backticks
    if(mdm && typeof hubSopMeta !== 'undefined' && hubSopMeta.has(mdm[1])){
      var title = esc(hubSopMeta.get(mdm[1]));
      if(/\.md$/i.test(label) || !label) label = title;   // author left the filename as the text → use the SOP title
      return '<a class="doclink" role="button" tabindex="0" data-open-doc="' + mdm[1] + '" data-doc-name="' + title + '">' + label + DOCLINK_ARROW + '</a>';
    }
    if(/\.md$/i.test(label) || !label) label = 'the linked document';   // non-Hub .md → no filename shown
    return '<span class="ln">' + label + '</span>';
  });
  // Bare autolinks — Markdown's `<https://…>` form. Without this every URL written that way
  // (they fill the "Contacts & links" table of every SOP) reached the reader as literal
  // "&lt;https://…&gt;" text: visible, ugly, and NOT clickable. Runs on the esc()'d string, so
  // it can't collide with the real <a> tags the link rule above already inserted.
  out = out.replace(/&lt;(https?:\/\/[^\s<>]+?)&gt;/g, function(m, u){
    const href = u.replace(/&amp;/g, '&');
    return '<a href="' + href + '" target="_blank" rel="noopener">' + u + '</a>';
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
      // Honour the author's starting number. A table or callout between steps 4 and 5 ends the
      // <ol> and opens a new one, which otherwise restarts the visible numbering at 1 — so a
      // 7-step procedure reads "1,2,3,4" then "1,2,3". atlas.css numbers these with a CSS
      // counter, so the `start` attribute alone is ignored: seed the counter inline too.
      const startNo = parseInt(line.match(/^\s*(\d+)/)[1], 10) || 1;
      const buf = [];
      while(i<lines.length && /^\s*\d+[.)]\s+/.test(lines[i])){
        buf.push(lines[i].replace(/^\s*\d+[.)]\s+/,'')); i++;
        while(i<lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*\d+[.)]\s+/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i])){ buf[buf.length-1]+=' '+lines[i].trim(); i++; }
      }
      const att = startNo > 1 ? ' start="'+startNo+'" style="counter-reset:q '+(startNo-1)+'"' : '';
      html.push('<ol class="qlist"'+att+'>'+buf.map(x=>'<li>'+inl(x)+'</li>').join('')+'</ol>');
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
// `status` comes from the document's own `**Status:**` header, so a runbook that says it is
// in review cannot be shown as live three lines under a lede that says otherwise. Defaults to
// Active for the readers that don't pass it.
function readerMeta(owner, updated, status){
  const st = (status || 'Active').trim();
  return '<span class="chipm' + (/^active/i.test(st) ? ' live' : '') + '"><span class="dot"></span>Status:&nbsp;<b>' + esc(st) + '</b></span>'
    + (owner ? '<span class="chipm"><span class="dot"></span>Owner:&nbsp;<b>'+esc(owner)+'</b></span>' : '')
    + (updated ? '<span class="chipm"><span class="dot"></span>Updated:&nbsp;<b>'+esc(updated)+'</b></span>' : '');
}
// embed a binary asset as a data URI (self-contained: works offline / in the Artifact)
function dataUri(mime, relPath){
  return 'data:' + mime + ';base64,' + readFileSync(resolve(repoRoot, relPath)).toString('base64');
}

// ---- Embedded assets, ONCE each -------------------------------------------
// Every binary we ship (guide PNG/PDF, blank forms, the COA workbook) used to be
// base64'd into the page at each place it appeared: a guide PNG once as the inline
// <img> and again as its download link, and each guide PDF again in its Templates
// card. Three copies of the same megabyte, and the page has a hard 16MB ceiling as
// a published Artifact. So an asset is emitted once into ASSET_TABLE and referenced
// by id; the script resolves the ids onto src/href BEFORE the download interceptor
// binds (it matches on href^="data:", so ordering matters). Trade-off, deliberate:
// these links no longer work with JS disabled — like the reader, the search and the
// filters, which never did.
const ASSETS = new Map();               // relPath -> { id, mime }
function assetRef(mime, relPath){
  if(!ASSETS.has(relPath)) ASSETS.set(relPath, { id: 'a' + (ASSETS.size + 1), mime });
  return ASSETS.get(relPath).id;
}
function assetTableJs(){
  const rows = [...ASSETS.entries()].map(([relPath, a]) => `${a.id}:"${dataUri(a.mime, relPath)}"`);
  return `var ASSET_TABLE={${rows.join(',')}};`;
}
// The table is emitted where the <script> is interpolated, so an assetRef() called
// LATER than that point would leave a data-asset with no entry — a download button
// that silently does nothing, with the build still exiting 0. Check the finished
// page instead of trusting the ordering.
function assertAssetsResolvable(html){
  const sites = [...html.matchAll(/data-asset="([^"]+)"/g)].map((m) => m[1]);
  const known = new Set([...ASSETS.values()].map((a) => a.id));
  const missing = [...new Set(sites)].filter((id) => !known.has(id));
  if (missing.length) {
    throw new Error(`data-asset ids with no ASSET_TABLE entry: ${missing.join(', ')} — an assetRef() ran after the script was emitted`);
  }
  return { sites: sites.length, embedded: known.size };
}
// a "send this to your client" block: the visual guide images shown inline + PNG/PDF downloads.
// Team-facing — no repo/GitHub links, everything embedded.
function guidesBlock(guides, label){
  const cards = guides.map((g) => {
    const base = 'projects/sops/client-guides/';
    const png = assetRef('image/png', base + g.png);
    const pdf = assetRef('application/pdf', base + g.pdf);
    return `<figure class="guide">
      <figcaption class="guide-hd">
        <span class="guide-lang">${esc(g.lang)}</span>
        <span class="guide-dl">
          <a class="dlbtn" data-asset="${pdf}" download="${esc(g.pdf)}">${IC.dl}PDF</a>
          <a class="dlbtn" data-asset="${png}" download="${esc(g.png)}">${IC.dl}PNG</a>
        </span>
      </figcaption>
      <img class="guide-img" data-asset="${png}" alt="${esc(label)} (${esc(g.lang)})" loading="lazy">
    </figure>`;
  }).join('');
  return `<div class="shead"><span class="schip">✦</span><h2>Send this to your client</h2></div>`
    + `<p class="prose">The ready-to-send one-page guide. It shows here, and you can <b>download it as PDF or PNG</b> to send by email or WhatsApp.</p>`
    + `<div class="guides">${cards}</div>`;
}

// A prominent "download the blank form" block for a fill-in template. The PDF is the
// print-ready form (works on the real host / Odoo); the PNG is the image that downloads
// even in the Artifact sandbox, which blocks PDF downloads (pdf isn't in the capability
// allowlist). Both are embedded as data URIs and routed through saveFile by the global
// a[download][href^="data:"] interceptor. Rendered at the TOP of the reader so it's the
// first thing a team member sees.
function templateBlock(t){
  const base = 'projects/sops/assets/';
  const pdf = assetRef('application/pdf', base + t.pdf);
  const png = t.png ? assetRef('image/png', base + t.png) : null;
  return `<div class="tdl">`
    + `<div class="tdl-ic">${IC.doc}</div>`
    + `<div class="tdl-x">`
    +   `<p class="tdl-k">Blank template — download to fill in</p>`
    +   `<h3 class="tdl-t">${esc(t.name)}</h3>`
    +   `<p class="tdl-d">Download the blank form to <b>print, fill in, or send to the care provider</b> (the babysitter). They complete and sign it; the signed copy is kept in the client's systems — never here.</p>`
    +   `<div class="tdl-btns">`
    +     `<a class="dlbtn big" data-asset="${pdf}" download="${esc(t.pdf)}">${IC.dl}Download PDF</a>`
    +     (png ? `<a class="dlbtn big ghost" data-asset="${png}" download="${esc(t.png)}">${IC.dl}Download image (PNG)</a>` : '')
    +   `</div>`
    +   (png ? `<p class="tdl-note">The <b>PDF</b> is the print-ready form. In this in-browser preview the <b>PNG</b> image is the one that saves; on the firm's site both download.</p>` : '')
    + `</div>`
    + `</div>`;
}
// BTR: reuse the hand-laid render's masthead+main (the premium designed page)
// BTR keeps its premium hand-laid decision flowchart as the "Diagram" view; this is the
// linear "Steps" companion (county first, then city) shown beside it via the toggle.
const BTR_STEPS = [
  { t: `Zoning check first`, d: `Home-occupation use must be allowed — the gate before any filing`, ic: 'search' },
  { t: `County: apply on BTExpress`, d: `Submit, then click the confirmation link in the 1st email (not the end)`, ic: 'globe' },
  { t: `County: pay the balance`, d: `2nd email (~24–48h) → pay → print the County BTR`, ic: 'pay' },
  { t: `City: apply on LBTR`, d: `Requires the active county account from Phase 1`, ic: 'form' },
  { t: `City: pay`, d: `$25 + classification tax (card / PayPal)`, ic: 'pay' },
  { t: `City review → issues the BTR`, d: `Fix category / license / balance if flagged; then the city mails it`, ic: 'check' },
  { t: `Post both receipts`, d: `Display at the business · calendar the Sept 30 renewal`, ic: 'check', k: 'done' },
];
function btrReaderInner(){
  try{
    const raw = read(resolve(repoRoot, '.claude/skills/sop-authoring/render/examples/btr-body.html'));
    const a = raw.indexOf('<section class="mast">');
    const b = raw.indexOf('</main>');
    if(a === -1 || b === -1) return null;
    let body = raw.slice(a, b + '</main>'.length);
    // Wrap the existing hand-laid <figure class="flow"> (its decision diagram) in the
    // Steps/Diagram toggle and add the linear Steps pcflow, matching the other SOPs.
    const fs = body.indexOf('<figure class="flow');
    const fe = fs !== -1 ? body.indexOf('</figure>', fs) : -1;
    if(fs !== -1 && fe !== -1){
      const figure = body.slice(fs, fe + '</figure>'.length);
      const toggle = flowViewsHtml('btr', taskFlow({ flow: BTR_STEPS }), figure);
      body = body.slice(0, fs) + toggle + body.slice(fe + '</figure>'.length);
    }
    return body;
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
      dchip('own', '', `Owner's <b>Distribution</b>`) + dchip('biz', 'EXCEPT', `supply / hardware / job store → <b>Supplies &amp; Materials</b>`),
      `<b>Meals should trend to $0.</b> Judge a store by what it's <em>for</em> — a hardware or job-supply store stays business.`),
    ecoGate(5,
      `A job cost?`,
      `foam &amp; spray materials · installation subs · job-site disposal`,
      dchip('biz', 'MATERIALS', `<b>COGS</b>`) + dchip('biz', 'SUBS', `<b>Contract labor</b> / <b>Outside services</b> — opex`, true) + dchip('biz', 'DISPOSAL', `opex`),
      `Individual → <b>Contract labor</b>; LLC, company or platform → <b>Outside services</b> (rule 17). Every new sub needs a <b>W-9</b>; anyone paid <b>≥ $2,000</b> gets a 1099.`),
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
    // Read the ranges out of the sentence WHATEVER prose wraps them: drop the emphasis marks,
    // start at the first range token, and take only the range words out of each chunk. The old
    // version stripped a fixed `…name — ` prefix, which only Ecoorganic's phrasing had: every
    // other runbook silently lost its first range, and iKids' trailing "See the firm standard,
    // [chart-of-accounts-standard.md](…)" rode into the last chip as raw markdown and a repo
    // path — in a team view where repo links are forbidden.
    let seg = lines[gi].replace(/\*+/g, '');
    // Anchor on the first range itself — the sequence always opens at 100s assets — so prose
    // that happens to mention an account code ("never post to 650 Legal") can't hijack the slice.
    const start = seg.search(/\b100s?\s+assets/i);
    if(start > 0) seg = seg.slice(start);
    const chips = seg.split('·').map((s) => s.trim()).filter(Boolean).map((s) => {
      const m = s.match(/^([\d/]+s?)\s*[—–-]?\s*(.+)$/);
      if(!m) return '';
      // Keep the label, drop whatever the author wrote after it: a following sentence, or a
      // cross-reference link (which must never reach a team view as a repo path).
      const label = m[2].replace(/\[.*$/, '').split(/\.(?:\s|$)/)[0].trim().replace(/[.,;:]$/, '');
      return label ? `<span class="rgchip"><b>${esc(m[1])}</b> ${esc(label)}</span>` : '';
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
// Takes the whole `close` config (like every other close-* renderer) and reads cfg.flow.
// `flowTitle` / `flowLede` override the ribbon's heading and lede: not every bookkeeping
// client runs monthly, and a quarterly client must not be told "every month". They are
// tested with `!= null`, so a deliberate '' means "no lede", not "give me the monthly one".
function closeFlow(cfg){
  const c = cfg || {};
  const li = (c.flow || []).map((s, i) => `<li class="estep${s.k ? ' ' + s.k : ''}"><span class="estep-n">${i + 1}</span>`
    + `<span class="estep-b"><span class="estep-t">${s.t}</span><span class="estep-d">${s.d}</span></span></li>`).join('');
  const title = c.flowTitle != null ? c.flowTitle : 'How each month runs';
  const lede = c.flowLede != null ? c.flowLede : 'The same pass every month. The last move is a hard gate: the triage / Uncategorized accounts must read <b>$0</b> before you close.';
  return (title ? `<div class="shead"><span class="schip">✦</span><h2>${esc(title)}</h2></div>` : '')
    + (lede ? `<p class="slede">${lede}</p>` : '')
    + `<ol class="eflow">${li}</ol>`;
}
function closeSectionBody(title, body){
  if(/close process/i.test(title)) return closeSteps(body);
  if(/categorization rules/i.test(title)) return ecoRuleCards(body);
  if(/review checklist/i.test(title)) return ecoChecklist(body);
  if(/open items|open decisions/i.test(title)) return ecoDecisionsTable(body);
  if(/chart of accounts/i.test(title)) return ecoCoaConventions(body);   // the number-range strip, same as the rules shape
  if(/reference material/i.test(title)) return closeResList(body);
  return mdToAtlas(body);
}
// `flowToc` names the ribbon on the CONTENTS page. It is DERIVED from `flowTitle` by the
// caller, so overriding the heading cannot leave the printed manual saying "the monthly flow"
// while the screen says something else; pass `close.flowToc` only to word it differently.
// `status` is the document's own, so a saved PDF cannot circulate as approved when it is not.
function closePrintFrontMatter(name, sub, sections, owner, updated, flowToc, status){
  const toc = sections.map((s, i) => `<li><span class="ptoc-n">${i + 1}</span><span class="ptoc-t">${esc(s.title)}</span></li>`).join('');
  return `<div class="pbook pcover">${JK_MARK}`
    + `<p class="pc-kick">Bookkeeping Runbook · Per Client</p>`
    + `<h1 class="pc-h">${esc(name)}</h1>`
    + `<p class="pc-sub">${esc(sub)}</p>`
    + `<p class="pc-meta">Owner ${esc(owner)}${updated ? ' · Updated ' + esc(updated) : ''}${status ? ' · Status ' + esc(status) : ''}<br>JK Accounting Group — internal reference</p></div>`
    + `<div class="pbook ptoc"><h2>Contents</h2>`
    + `<ol class="ptoc-l"><li><span class="ptoc-n">·</span><span class="ptoc-t">The one thing${flowToc ? ' &amp; ' + esc(flowToc) : ''}</span></li>${toc}</ol></div>`;
}
// The ONE reusable close-process reader. cfg = { name, loc, lede, oneRule, flow, dl } from
// the SOP catalog's `close` field; every section renders generically from the .md.
function closeProcessReader(cfg, md, owner, updated){
  const { sections } = mdSections(md);   // preamble (H1 + provenance blockquote) dropped
  const secs = sections.map((s, i) => acc(String(i + 1), esc(s.title), '', closeSectionBody(s.title, s.body), /close process/i.test(s.title))).join('');
  // The provenance blockquote is stripped from every team-facing surface, so an unapproved
  // runbook would otherwise read as settled procedure on screen, in the PDF and in the .txt.
  const status = headerVal(md, 'Status') || 'Active';
  const flowToc = cfg.flowToc != null ? cfg.flowToc
    : cfg.flowTitle != null ? (cfg.flowTitle && cfg.flowTitle.charAt(0).toLowerCase() + cfg.flowTitle.slice(1))
    : 'the monthly flow';
  const runbookHref = 'data:text/plain;charset=utf-8,' + encodeURIComponent(
    (/^active/i.test(status) ? '' : `STATUS: ${status}\n\n`) + ecoRunbookText(md));
  const actions = `<div class="eco-actions">`
    + `<button class="dlbtn big" type="button" data-print>${IC.dl}Save as PDF manual</button>`
    + `<a class="dlbtn ghost" download="${esc(cfg.dl || 'bookkeeping-runbook')}.txt" href="${runbookHref}">${IC.doc}Download as text</a>`
    + `<span class="eco-actions-note" data-print-note>Opens your browser’s print dialog — save the full runbook (cover, contents, every step) as a PDF.</span></div>`;
  return closePrintFrontMatter(cfg.name, cfg.kind || 'Monthly Bookkeeping & Close', sections, owner, updated, flowToc, status)
    + `<section class="mast"><div class="in">`
    + `<p class="kick">Bookkeeping runbook · per client</p>`
    + `<h1>${esc(cfg.name)}<span class="loc">${esc(cfg.loc)}</span></h1>`
    + `<p class="lede">${cfg.lede}</p>`
    + `<div class="meta">${readerMeta(owner, updated, status)}</div></div></section>`
    + `<div class="page">`
    + actions
    + closeSignature(cfg.oneRule)
    + closeFlow(cfg)
    + `<div class="shead"><span class="schip">§</span><h2>The full runbook</h2></div>`
    + `<p class="slede">${cfg.slede || 'The authoritative detail — the client snapshot, the close process (with the Drive material for each step), the categorization rules, the reviewer checklist, and the open items. Open a section.'}</p>`
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
  send:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  edit:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  sign:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 17c2 .6 3.6-.4 4.6-2S8.4 11 9.4 11s1 3 2 3 1.8-2.4 3.4-2.4c1.2 0 2 .8 3.2.8"/><path d="M3 21h18"/></svg>',
  save:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8a2 2 0 0 1 2-2h3.5l2 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M12 11v5M9.5 13.5 12 16l2.5-2.5"/></svg>',
  form:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M9 13h6M9 17h4"/></svg>',
  steps:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.4" cy="6" r="1"/><circle cx="3.4" cy="12" r="1"/><circle cx="3.4" cy="18" r="1"/></svg>',
  diagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="3" width="8" height="5" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/><rect x="14" y="16" width="7" height="5" rx="1.5"/><path d="M12 8v3M6.5 16v-3h11v3"/></svg>',
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
// The "Diagram" view of a process — a DESIGNED decision flowchart that reuses the Atlas
// .flow / .fdecide / .fbranch components (the same ones the BTR render uses), so it handles
// a yes/no decision that re-converges. Config `schema`: { start:{t,d?}, decision:{tag, q,
// yes:{bl,body}, no:{bl,body} }, then:[{t,d?,k?,pill?}] } — every part optional. Rich fields
// (`t`, `q`, `bl`, `body`) are AUTHOR HTML inserted raw (bold allowed), like the close/task
// `oneRule`/`lede`; short/label fields (`tag`, `d` → a mono .fref note, `pill`) are esc()'d.
// All schema strings are firm-authored catalog config — never user/client data. Never a bare
// Mermaid block.
function schemaFlow(s){
  if(!s) return '';
  const conn = '<div class="fconn" aria-hidden="true"></div>';
  const node = (n) => {
    const v = n.k === 'done' ? ' done' : (n.k === 'gate' ? ' gate' : '');
    const pill = (n.k === 'done' || n.k === 'gate') && n.pill ? `<span class="pill">${esc(n.pill)}</span>` : '';
    return `<div class="fnode${v}">${pill}${n.t}${n.d ? ` <span class="fref">${esc(n.d)}</span>` : ''}</div>`;
  };
  let out = '';
  if(s.start) out += node(s.start);
  if(s.decision){
    const d = s.decision;
    if(out) out += conn;
    out += `<div class="fdecide"><div class="dh"><span class="dt">${esc(d.tag || 'Decision')}</span><span class="dq">${d.q}</span></div>`
      + `<div class="fbranch">`
      + `<div class="branch good"><span class="bl">${d.yes.bl}</span>${d.yes.body}</div>`
      + `<div class="branch fix"><span class="bl">${d.no.bl}</span>${d.no.body}</div>`
      + `</div></div>`;
  }
  (s.then || []).forEach((n) => { out += conn + node(n); });
  return `<figure class="flow" aria-label="Process decision flow">${out}</figure>`;
}
// Two switchable views of "the process at a glance": a linear Steps flow (.pcflow) and a
// designed Diagram (decision flowchart), toggled by a CSS-ONLY radio segmented control — no
// JS, so it works with JS off and can't break the emitted script; both are alternative views
// of the same content (Steps is checked/visible by default). Degrades to whichever single
// view is configured.
// The toggle from two pre-built HTML panels (used directly by BTR, whose Diagram panel is its
// hand-laid figure). Degrades to whichever single panel is non-empty.
function flowViewsHtml(id, steps, diagram){
  if(steps && !diagram) return steps;
  if(diagram && !steps) return diagram;
  if(!steps && !diagram) return '';
  const nm = 'fv-' + id;
  // role="radiogroup" on the container (it holds the two radios) — the segmented control is a
  // labelled radio group, not a tablist (its buttons are <label>s, not role="tab" elements).
  return `<div class="fviews" role="radiogroup" aria-label="Process view">`
    + `<input type="radio" name="${nm}" id="${nm}-steps" class="fv-r fv-r-steps" checked>`
    + `<input type="radio" name="${nm}" id="${nm}-diagram" class="fv-r fv-r-diagram">`
    + `<div class="fv-seg">`
    +   `<label for="${nm}-steps" class="fv-btn">${TIC.steps}Steps</label>`
    +   `<label for="${nm}-diagram" class="fv-btn">${TIC.diagram}Diagram</label>`
    + `</div>`
    + `<div class="fv-panel fv-p-steps">${steps}</div>`
    + `<div class="fv-panel fv-p-diagram">${diagram}</div>`
    + `</div>`;
}
function flowViews(id, cfg){
  return flowViewsHtml(id,
    cfg.flow && cfg.flow.length ? taskFlow({ flow: cfg.flow }) : '',
    cfg.schema ? schemaFlow(cfg.schema) : '');
}
// The tooltip id must be UNIQUE per button: every reader is emitted into the one Hub page,
// so a hardcoded id makes duplicate ids the moment a second SOP declares a `vault` — and
// every `aria-describedby` then resolves to the FIRST tooltip, i.e. another client's text.
// (Found 2026-08-13, when Ecoorganic's CT sales-tax runbook became the second vault.)
function vaultButton(v){
  if(!v || !v.url) return '';
  const tipId = 'vault-tip-' + String(v.label || v.url).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  return `<div class="vault">`
    + `<a class="vault-btn" href="${v.url}" target="_blank" rel="noopener" aria-describedby="${tipId}">`
    + `<span class="vault-ic" aria-hidden="true">${TIC.key}</span>`
    + `<span class="vault-x"><span class="vault-t">${esc(v.label || 'Open the client password vault')}</span>`
    + `<span class="vault-s">Google Doc · opens in Google Drive</span></span>`
    + `<span class="vault-go" aria-hidden="true">${MIC.arrow}</span>`
    + `<span class="vault-tip" role="tooltip" id="${tipId}">${esc(v.tip)}</span></a>`
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

/* ---------------- Business tax engagement-letter generator (embedded tool) ----------------
   The self-service generator (projects/proposal-tool/tools/) embedded into the reader as an
   ISOLATED iframe. Isolation is the point: the iframe has its own CSS (can't touch the Hub's
   Atlas styles) and its own window.print() — the tool's @media print shows ONLY the letter,
   so "Save PDF" prints the engagement letter, never the whole Hub book layout. Built here from
   the SAME .src.html the standalone tool uses (single source of truth), with the brand fonts
   and logo inlined so the Hub stays fully self-contained (no external requests). */
const ENGAGEMENT_DOC = (() => {
  try {
    const dir = resolve(repoRoot, 'projects/proposal-tool/tools');
    const srcHtml = read(resolve(dir, 'business-tax-engagement-letter.src.html'));
    const fonts = read(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'));
    const logo = readFileSync(resolve(repoRoot, 'brand/logo/png/JK-lockup-horizontal-2048.png')).toString('base64');
    const body = srcHtml.replace('/*__FONTS__*/', fonts).replace('__LOGO__', 'data:image/png;base64,' + logo);
    return '<!doctype html><html lang="en"><head><meta charset="utf-8">'
      + '<meta name="viewport" content="width=device-width,initial-scale=1">'
      + '<title>JK Accounting Group — Business Tax Engagement Letter</title></head><body>\n'
      + body + '\n</body></html>';
  } catch (e) { return ''; }
})();
// Escape for a double-quoted srcdoc attribute: & first, then " — leaves < > literal so the
// iframe parses them as HTML, and any pre-existing entity survives the round-trip.
const srcdocEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// Inline a proposal-tool browser tool (.src.html) into a self-contained doc for an in-Hub
// iframe — generalizes ENGAGEMENT_DOC for the tools that also need the medallions + the
// shared pricing core. Same single sources the standalone tools use, so they never drift.
function inlineToolDoc(srcFile, title, opts){
  try{
    // Defaults to the proposal-tool folder (where the first three tools live); pass
    // opts.dir for a tool that lives with its own SOP, e.g. projects/sops/tools.
    const dir = resolve(repoRoot, (opts && opts.dir) || 'projects/proposal-tool/tools');
    const png = (rel) => 'data:image/png;base64,' + readFileSync(resolve(repoRoot, rel)).toString('base64');
    // Cyrillic subset only for tools that render Russian (the bilingual proposal); keep the
    // calculator embed small. Mirrors the per-tool `cyrillic` flag in the tool's own build.mjs.
    const cyrillic = opts && opts.cyrillic
      ? read(resolve(repoRoot, 'brand/design-system/fonts-cyrillic-embedded.css')) : '';
    const raw = read(resolve(dir, srcFile));
    // Only the pricing tools carry the shared core; reading it unconditionally would
    // throw for a tool in any other folder, and that would stop the whole Hub build
    // over a file the tool never needed.
    const core = raw.includes('/*__PRICING_CORE__*/') ? read(resolve(dir, 'pricing-core.js')) : '';
    // The SOP walkthroughs (ITIN, BTR) share a stylesheet and a case engine that live
    // beside them. Read each only when the tool actually asks for it — an unconditional
    // read would throw for a tool in another folder, stopping the whole Hub build over a
    // file that tool never needed.
    const toolCss = raw.includes('/*__TOOL_CSS__*/') ? read(resolve(dir, 'case-tool.css')) : '';
    const caseCore = raw.includes('/*__CASE_CORE__*/') ? read(resolve(dir, 'case-core.js')) : '';
    // The replacements are passed as FUNCTIONS, not strings. In String.replaceAll a string
    // replacement treats `$&`, `$\``, `$'` and `$n` as special — so the day someone puts a regex
    // replacement inside case-core.js, every built page would be silently corrupted at the
    // point of inlining. A function replacement disables that interpretation entirely.
    const fonts = read(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'));
    // Read and base64 each image ONCE. A function replacement is called per occurrence,
    // so inlining these lazily re-encoded a 2MB PNG for every placeholder in the file.
    const medRev = png('brand/logo/png/JK-medallion-reversed-1024.png');
    const med = png('brand/logo/png/JK-medallion-primary-1024.png');
    const logo = png('brand/logo/png/JK-lockup-horizontal-2048.png');
    const body = raw
      .replaceAll('/*__FONTS__*/', () => fonts)
      .replaceAll('/*__FONTS_CYRILLIC__*/', () => cyrillic)
      .replaceAll('__MEDALLION_REV__', () => medRev)
      .replaceAll('__MEDALLION__', () => med)
      .replaceAll('__LOGO__', () => logo)
      .replaceAll('/*__PRICING_CORE__*/', () => core)
      .replaceAll('/*__TOOL_CSS__*/', () => toolCss)
      .replaceAll('/*__CASE_CORE__*/', () => caseCore);
    // A placeholder that survives substitution embeds a tool with no styles or no case
    // engine — which reads as a broken page, not as a build error. Throwing hands it to
    // the catch below, which names the file and stops the build.
    // Any surviving placeholder, not a hand-written list — the list drifts behind the
    // tools, and a placeholder that ships raw reads as a broken page, not a build error.
    const left = [...new Set([...body.matchAll(/\/\*__[A-Z0-9_]+__\*\/|__[A-Z][A-Z0-9_]*__/g)]
      .map((m) => m[0]))];
    if (left.length) throw new Error(srcFile + ': unresolved build placeholder(s) ' + left.join(', '));
    return '<!doctype html><html lang="en"><head><meta charset="utf-8">'
      + '<meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(title) + '</title></head><body>\n'
      + body + '\n</body></html>';
  }catch(e){
    // A silent '' ships a Hub whose build log looks clean while the tool's card holds a
    // "could not be built" callout with no cause anywhere. Print the reason — the callout
    // tells the reader to look here for it.
    die('✗ tool embed failed: ' + srcFile + ' — ' + e.message,
    // Stop NOW, like tools/build.mjs and the verifyWalkthroughs gate below both do.
    // Setting exitCode alone let the build run to completion, write index.html and the
    // fragment with a dead "Tool unavailable" card, and print the usual "Hub built: …"
    // success lines — so the failure was one line of log above a page that looked fine,
    // and the publish step downstream had no reason to stop.
        '✗ refusing to build a Hub with a tool that could not be embedded.');
  }
}
// The published surface runs the SAME gate as tools/build.mjs. A step added without a
// seed shape, or a step whose wording depends on the answers, ships silently and comes
// back wrong when someone reopens the case from its Double note — and the Hub is where
// the team actually opens these tools, so gating only the standalone build gated the copy
// nobody uses. verify.mjs deliberately reads the .src.html, never the gitignored builds.
{
  const problems = verifyWalkthroughs(resolve(repoRoot, 'projects/sops/tools'));
  if (problems.length){
    die(...problems.map((p) => '✗ ' + p),
        '✗ refusing to embed a walkthrough that would mislabel a reopened case.');
  }
}
const CALC_DOC    = inlineToolDoc('pricing-calculator.src.html', 'JK Accounting Group — Internal Pricing Calculator');
const ITIN_DOC    = inlineToolDoc('itin-w7-walkthrough.src.html', 'JK Accounting Group — ITIN Application Walkthrough', { dir: 'projects/sops/tools' });
const BTR_DOC     = inlineToolDoc('btr-walkthrough.src.html', 'JK Accounting Group — Business Tax Receipt Walkthrough', { dir: 'projects/sops/tools' });
const MONTHLY_DOC = inlineToolDoc('monthly-proposal-generator.src.html', 'JK Accounting Group — Monthly Proposal Generator', { cyrillic: true });

function toolIframe(doc, titleAttr){
  return doc
    ? `<div class="egen"><iframe class="egen-frame" title="${esc(titleAttr)}"`
      + ` style="width:100%;height:82vh;min-height:640px;border:1px solid #C9C1B0;border-radius:10px;background:#E7E0D2;display:block"`
      + ` srcdoc="${srcdocEsc(doc)}"></iframe></div>`
    // The fallback is REACHABLE and must stay. inlineToolDoc() stops the build itself, so
    // its callers never arrive here — but NOTEBOOK_DOC is also a caller and deliberately
    // returns '' on failure, so throwing here took the whole Hub down over a bad note,
    // with a message blaming inlineToolDoc. A build failure in one embedded page should
    // degrade that card, not the Hub; the tools get the stricter treatment because a
    // half-built TOOL is worked from as if it were whole.
    : `<div class="callout warn"><div class="cx"><div class="cl">Not available</div><p>This page could not be built — its source was missing or failed to parse. The reason was printed in the Hub build log; fix it and rebuild from the repo root.</p></div></div>`;
}
function calcReaderInner(){
  return `<section class="mast"><div class="in">`
    + `<p class="kick">Proposals &amp; pricing · internal</p>`
    + `<h1>Internal Pricing Calculator<span class="loc">Price a monthly client in seconds</span></h1>`
    + `<p class="lede">The interactive front end for the firm's Core Pricing Matrix. Enter a client's service parameters and it builds the monthly fee live — the internal breakdown plus the single bundled fee. <b>Internal only:</b> the client proposal shows just the one bundled fee. It starts fully blank, so no default can carry into a client's price.</p>`
    + `</div></section><div class="page">${toolIframe(CALC_DOC, 'Internal Pricing Calculator')}</div>`;
}
function itinReaderInner(){
  return `<section class="mast"><div class="in">`
    + `<p class="kick">ITIN &amp; Acceptance Agent · internal</p>`
    + `<h1>ITIN Application Walkthrough<span class="loc">Form W-7, decided one applicant at a time</span></h1>`
    + `<p class="lede">For anyone preparing an ITIN application — including someone who has never done one. It asks plain questions (is this a dependent? which country? how old? do we have the passport?) and works out the <b>reason box</b>, the <b>documents</b>, whether <b>residency proof</b> applies, <b>who may sign</b>, and what goes in the envelope — then prints a <b>preparation sheet for that one applicant</b>. Three tabs: the <b>walkthrough</b>, a searchable <b>field-by-field reference</b> to every line of Form W-7 and Form W-7-COA, and a <b>case tracker</b> that follows one client through the weeks an application takes — a tailored checklist you tick off, a note on each step and a running log, with the durable copy pasted into that client's case note in Double. The reasoning behind it is the <b>ITIN Application (Form W-7)</b> SOP.</p>`
    + `</div></section><div class="page">${toolIframe(ITIN_DOC, 'ITIN Application Walkthrough')}</div>`;
}
function btrToolReaderInner(){
  return `<section class="mast"><div class="in">`
    + `<p class="kick">Business filings · internal</p>`
    + `<h1>Business Tax Receipt Walkthrough<span class="loc">Hollywood + Broward, one business at a time</span></h1>`
    + `<p class="lede">For anyone getting a Florida Business Tax Receipt for a business in Hollywood. It settles the <b>zoning gate</b> first — the one question that decides whether there is a filing at all — then works out the <b>documents to have ready as PDFs</b>, the answers this business gives on each screen of <b>both</b> applications, the <b>two separate fees to two different governments</b>, and what to do when the city comes back asking for something. Three tabs: the <b>walkthrough</b>, a searchable <b>reference</b> to both applications screen by screen with the full email map, and a <b>case tracker</b> that follows one business through the weeks the two filings take — including the county payment email that hides in Gmail's Updates tab, and the reply-to-the-reviewer step without which the receipt never arrives. The reasoning behind it is the <b>Business Tax Receipt</b> SOP.</p>`
    + `</div></section><div class="page">${toolIframe(BTR_DOC, 'Business Tax Receipt Walkthrough')}</div>`;
}
function monthlyReaderInner(){
  return `<section class="mast"><div class="in">`
    + `<p class="kick">Proposals &amp; pricing · firm-wide</p>`
    + `<h1>Monthly Proposal Generator<span class="loc">Price it, then build the proposal</span></h1>`
    + `<p class="lede">The firm's premium monthly-retainer proposal — our GoProposal replacement. <b>Step 1</b> prices the client with the same calculator (identical results); <b>Step 2</b> flows that fee into the proposal, where every part is editable so you can adjust the number and the wording. Choose <b>English</b> or <b>Bilingual (Russian + English)</b> — the bilingual version puts the full Russian version first (Atman-style), then the official English version, with the signature &amp; binding Terms in the English part. It builds the full on-brand proposal live; use <b>Save PDF</b> to download it (works in a normal browser and on the published Hub).</p>`
    + `</div></section><div class="page">${toolIframe(MONTHLY_DOC, 'Monthly Proposal Generator')}</div>`;
}

/* Lilian's Notebook — the whole page, embedded in an isolated iframe straight from
   projects/lilian-notebook (its build.mjs reads notes/*.md). Isolation matters here for the
   same reason as the tools: the notebook ships its own Atlas copy, its own sticky search bar
   and its own print stylesheet, none of which should touch the Hub's. */
// The catch keeps a bad note from taking the whole Hub build down — but it must SAY SO. A silent
// '' shipped a Hub whose summary line looked normal while the notebook card held a callout
// blaming a missing file, when the real cause was a parse error nobody ever saw.
const NOTEBOOK_DOC = (() => {
  try { return buildNotebookDoc({ embedded: true }); }
  catch (e) {
    console.error(`\n⚠️  Lilian's Notebook did NOT build — its card will show the unavailable callout.`);
    console.error(`   ${e.message}`);
    console.error(`   Fix projects/lilian-notebook/notes/ and rebuild before publishing.\n`);
    return '';
  }
})();
function notebookReaderInner(){
  return `<section class="mast"><div class="in">`
    + `<p class="kick">Personal notebook · Lilian</p>`
    + `<h1>Lilian's Notebook<span class="loc">Lessons worth not learning twice</span></h1>`
    + `<p class="lede">The hard knowledge, kept deliberately small — <b>how a system actually behaves</b>, <b>what something costs</b>, <b>what's inside a fee</b>, and <b>how to carry out a procedure</b> — each written as the rule to follow next time. It replaces the paper notebook Lilian used to keep: it survives after the task that produced it is closed and deleted. <b>Lilian's own record</b> — she's the one who writes in it — kept here so it's never lost. Search it, filter by category, or open the ★ starred ones.</p>`
    + `</div></section><div class="page">${toolIframe(NOTEBOOK_DOC, "Lilian's Notebook")}</div>`;
}

function engagementReaderInner(owner, updated){
  const fieldRows = [
    ['1', 'Letter date'],
    ['2', 'Company (entity) name'],
    ['3', 'Address — line 1'],
    ['4', 'Address — line 2 (city, state, ZIP)'],
    ['5', 'Entity type (C-Corp · S-Corp · Partnership)'],
    ['6', 'Tax year (e.g. 2025)'],
    ['7', 'Fee (USD)'],
    ['8', 'Representative — name'],
    ['9', 'Representative — title'],
    ['10', 'Client info-needed-by date'],
  ].map(([n, f]) => `<tr><td class="coa-num">${n}</td><td>${esc(f)}</td></tr>`).join('');
  const fieldTable = `<div class="tablewrap"><table class="links"><thead><tr><th>#</th><th>What you fill in</th></tr></thead><tbody>${fieldRows}</tbody></table></div>`;

  const derivedRows = [
    ['Return', 'Form 1120', 'Form 1120-S', 'Form 1065'],
    ['E-file authorization', 'Form 8879-C', 'Form 8879-S', 'Form 8879-PE'],
    ['Original due date', 'April 15 (yr+1)', 'March 15 (yr+1)', 'March 15 (yr+1)'],
  ].map(r => `<tr><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td>${esc(r[3])}</td></tr>`).join('');
  const derivedTable = `<div class="tablewrap"><table class="links"><thead><tr><th>Derived</th><th>C-Corp</th><th>S-Corp</th><th>Partnership</th></tr></thead><tbody>${derivedRows}</tbody></table></div>`;

  const tool = ENGAGEMENT_DOC
    ? `<div class="egen"><iframe class="egen-frame" title="Business Tax Engagement Letter generator"`
      + ` style="width:100%;height:82vh;min-height:640px;border:1px solid #C9C1B0;border-radius:10px;background:#E7E0D2;display:block"`
      + ` srcdoc="${srcdocEsc(ENGAGEMENT_DOC)}"></iframe></div>`
    : `<div class="callout warn"><div class="cx"><div class="cl">Tool unavailable</div><p>The generator source wasn't found at build time. Rebuild the Hub from the repo root.</p></div></div>`;

  return `<section class="mast"><div class="in">`
    + `<p class="kick">Tax preparation · firm-wide</p>`
    + `<h1>Business Tax Engagement Letter<span class="loc">Fill the form — the letter builds itself</span></h1>`
    + `<p class="lede">The firm's own way to produce a business tax-preparation engagement letter — our replacement for GoProposal. Fill a handful of client facts below and the finished, on-brand letter builds live. It <b>starts blank every time</b>, <b>won't generate with any field missing</b>, and <b>auto-derives</b> the return, e-file form, and due date from the entity type.</p>`
    + `<div class="meta">${readerMeta(owner, updated)}</div></div></section>`
    + `<div class="page">`
    + `<div class="shead"><span class="schip">1</span><h2>What you fill in</h2></div>`
    + `<p class="slede">Everything that changes per client — nothing else varies. The tool asks for all ten and refuses to produce the PDF until each is complete.</p>` + fieldTable
    + `<div class="shead"><span class="schip">2</span><h2>What the tool derives for you</h2></div>`
    + `<p class="slede">From the <b>entity type</b> alone — don't enter these.</p>` + derivedTable
    + `<div class="callout note"><div class="cx"><div class="cl">Fixed on every letter</div><p>Signer <b>Julia Kononova, MBA, EA — Chief Accountant</b>; letterhead Pembroke Pines, FL · 786-318-1505; the attached <b>Terms &amp; Conditions Addendum</b>. Cleanup billed separately at $60/hr, advisory at $150/hr. Change only if asked.</p></div></div>`
    + `<div class="shead"><span class="schip">3</span><h2>Prepare the letter</h2></div>`
    + `<p class="slede">Fill the form; the letter builds on the right. Click <b>Save PDF</b> → your browser's print dialog → <b>Save as PDF</b>. <span class="egen-note">Save-as-PDF works in a normal browser and on the published Hub; it's preview-only inside this artifact sandbox.</span> Client data never enters the repo — the finished letter goes to the client.</p>`
    + tool
    + `</div>`;
}

/* ---------------- SOP catalog (categories + curated short titles/blurbs) ---------------- */
const SOP_GROUPS = [
  {
    name: 'Company formation', note: 'Standing up a new entity, start to finish',
    items: [
      { file: 'florida-company-formation-sunbiz.md', title: 'Florida Company Formation (Sunbiz)', tag: 'Part 1',
        flowLede: `Forming a Florida company on Sunbiz (Part 1) turns on one choice — LLC or Profit Corporation. Different Articles, then the same core screens and the same finish: pay, confirm Active, calendar the annual report, hand off to Part 2 (the EIN).`,
        flow: [
          { t: `Intake & decide`, d: `Entity type, name, RA, people, payment — from the client's Business Intake Form`, ic: 'form' },
          { t: `Check the name`, d: `Sunbiz search on the FULL name — distinguishable + the suffix (LLC or Corp/Inc.) the state never adds for you`, ic: 'search' },
          { t: `Start E-Filing`, d: `Sunbiz start page → pick entity type → accept the disclaimer → new filing`, ic: 'globe' },
          { t: `Complete the Articles`, d: `Filing info, addresses, RA signs, shares/members, officers, incorporator signature`, ic: 'edit' },
          { t: `Pay the state fee & submit`, d: `Card via NIC/Tyler — submission is final: no edits, cancels, or refunds`, ic: 'pay' },
          { t: `If it's rejected, correct it`, d: `Tracking Number + PIN from the email → "Update Filing" — reopen YOUR filing, never start a new one`, ic: 'refresh' },
          { t: `Confirm Active & save`, d: `~2–5 business days, worked in order received — verify Active, save the document number + receipt`, ic: 'check' },
          { t: `Calendar & hand off`, d: `Annual report Jan 1–May 1 (first the year after) → Part 2: the federal EIN`, ic: 'refresh', k: 'done' },
        ],
        schema: {
          start: { t: `A new client is forming a <b>Florida company</b> on Sunbiz — the firm's <b>Part 1</b>. Pick the entity type first, from the client's Business Intake Form.`, d: `S-corp is a tax election — it changes nothing on the Sunbiz form` },
          decision: {
            tag: 'Entity choice', q: `Need a corporate structure — shares, a board, outside investors?`,
            yes: { bl: `Yes — Profit Corporation`, body: `Files <b>Articles of Incorporation</b>: authorized <b>shares</b> (never zero), <b>officers/directors</b> listed now, a corporate purpose. <b>$70</b> to form &middot; <b>$150</b> annual report.` },
            no:  { bl: `No — LLC (the firm's default)`, body: `Files <b>Articles of Organization</b>: <b>no shares</b>, no required purpose, <b>members/managers</b> + member- vs manager-managed. <b>$125</b> to form &middot; <b>$138.75</b> annual report <em>(verify at filing)</em>.` },
          },
          then: [
            { t: `Both paths file the <b>same core screens</b>: a <b>registered agent</b> (FL street address, no PO box — an individual types their name to sign), principal &amp; mailing address, a <b>monitored</b> correspondence email, an optional effective date (the <b>Jan 1</b> tip), then <b>pay the state fee</b> — submission is <b>final</b>.` },
            { t: `If the Division <b>rejects</b> it — most often a name <b>missing its LLC/Corp suffix</b>, which the state never adds for you — the email carries a <b>Tracking Number + PIN</b>. Use <b>"Correct Articles"</b> to reopen <em>your</em> filing; <b>"Start New Filing"</b> is a second filing with its own payment.`, d: 'fix every listed reason at once' },
            { t: `Entity posts with a <b>document number</b> → confirm <b>Active</b>, save the receipt, <b>calendar the annual report</b> (Jan 1–May 1, first one the year after formation), then hand off to <b>Part 2 — the EIN</b>.`, k: 'done', pill: 'Active' },
          ],
        },
        blurb: 'Form the company with the State of Florida on Sunbiz — the name-suffix rule the state never fills in for you, entity choice (LLC vs Corp, the S-corp angle), the Articles screen by screen, how to correct a rejected filing without starting over, processing times, fees and the annual-report cadence.' },
      { file: 'ein-application-irs.md', title: 'Federal EIN Application (SS-4)', tag: 'Part 2',
        flowLede: `Once the entity is Active on Sunbiz, the EIN forks on one question — does the responsible party have an SSN or ITIN? Online (instant) if yes; fax the SS-4 as "Foreign" if not. Both paths converge on saving the letter and the after-steps.`,
        flow: [
          { t: `Confirm the entity is Active`, d: `Sunbiz shows Active — capture the exact legal name & formation date`, ic: 'search' },
          { t: `Gather the intake first`, d: `Every answer ready — the online tool times out after 15 min, no save`, ic: 'form' },
          { t: `Check the responsible party's ID`, d: `SSN/ITIN → apply online · neither → SS-4 by fax, "Foreign" on line 7b`, ic: 'key' },
          { t: `Fill it in carefully`, d: `An LLC records only its default classification — the EIN never elects S-corp`, ic: 'edit' },
          { t: `Submit the application`, d: `IRS EIN Assistant online (issued on screen) or Form SS-4 by fax/mail/phone`, ic: 'send' },
          { t: `Save the confirmation letter`, d: `CP 575-equivalent PDF or fax-back → client's Drive/Double, never the repo`, ic: 'save' },
          { t: `Record the EIN & trigger next steps`, d: `Form 2553 (S-corp), bank account, FL DOR, local BTR, payroll`, ic: 'refresh', k: 'done' },
        ],
        schema: {
          start: { t: `A Florida entity is <b>Active on Sunbiz</b> and needs its federal <b>EIN</b>`, d: `exact legal name & formation date in hand` },
          decision: {
            tag: 'ID check', q: `Does the responsible party have an SSN or ITIN?`,
            yes: { bl: `Yes — has SSN or ITIN`, body: `<b>Path A — apply online</b> via the IRS EIN Assistant. EIN issued <b>immediately</b> on screen, same session. <span class="arw">↓ save the letter</span>` },
            no:  { bl: `No — foreign owner, neither`, body: `<b>Path B — Form SS-4 by fax</b> with <b>"Foreign"</b> on line 7b. EIN faxed back in <b>~4 business days</b> — no ITIN needed first.` },
          },
          then: [
            { t: `Either path: an <b>LLC</b> records only its <b>default</b> classification — the EIN <b>never elects S-corp</b> (that's a separate <b>Form 2553</b>)` },
            { t: `⚠️ The two paths are <b>not the same form</b> — the online tool asks excise questions the paper SS-4 doesn't have, and the paper form needs a start <b>day</b>, a closing month, three employee counts, a first wage date and a <b>signature</b> the online tool never asks for` },
            { t: `Save the confirmation letter (<b>CP 575</b>-equivalent / fax-back) to the client's system, record the EIN &amp; trigger the after-steps`, k: 'done', pill: 'EIN in hand' },
          ],
        },
        blurb: 'Get the business’s federal EIN once it’s active on Sunbiz — the SSN/ITIN online path vs the fax “Foreign” path, what the online tool asks that the paper SS-4 doesn’t (and back), the SS-4 line by line, the employee question (the firm answers No unless payroll starts now), and the after-steps.' },
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
    name: 'Tax preparation', note: 'Return prep & substantiation',
    items: [
      { file: 'form-1040-preparation.md', title: 'Form 1040 \u2014 individual return (modular)',
        flowLede: 'The individual return, built to grow. A 1040 can carry dozens of forms and almost no client carries them all \u2014 so \u00a70 asks what THIS client has, and you read only the modules it points at. Everything the firm has not yet prepared is a marked stub, written the first time it comes up.',
        flow: [
          { t: 'Intake selector', d: 'Mark what the client actually has \u2014 a W-2, self-employment, a K-1, Marketplace insurance, dependants, an NOL, digital assets \u2014 and skip every module you did not mark', ic: 'search' },
          { t: 'Filing status', d: 'Decided FIRST. Head of household needs three tests \u2014 and it can be the premium-tax-credit gate, not just a bracket: a married-filing-separately taxpayer cannot take the credit at all', ic: 'check', k: 'gate' },
          { t: 'Dependants', d: 'One table settles it: each child, and the nights in each parent\u2019s home. Head of household, the EIC and dependent care follow RESIDENCE and cannot be released \u2014 only the child tax credit moves, on a Form 8332', ic: 'steps', k: 'gate' },
          { t: 'Schedule C', d: 'Self-employment. The home office is computed BOTH ways and the better one taken \u2014 and it cannot be computed at all until the income is known, because it may not create a loss', ic: 'form' },
          { t: 'Schedule E + Form 7203', d: 'An S-corporation K-1. The loss must clear three gates in order \u2014 basis, at-risk, passive \u2014 and Form 7203 answers only the first', ic: 'key' },
          { t: 'Form 1095-A \u2192 Form 8962', d: 'The premium tax credit, which blocks e-filing if it is missing. Tax family and coverage family are not the same thing, and one policy can be shared across several returns', ic: 'diagram', k: 'gate' },
          { t: 'The payable credits', d: 'Child tax credit, additional child tax credit and the earned income credit \u2014 the last two require EARNED income, which a K-1 loss is not', ic: 'send' },
          { t: 'Tie out, then the working paper', d: 'Allocations totalling 100% across every shared return, each dependant claimed once, Form 8867 complete \u2014 then the return is written up in the working-paper archive', ic: 'sign', k: 'done' },
        ],
        blurb: 'The firm\u2019s modular procedure for an individual return: an intake selector plus one module per form, so a preparer reads only what this client needs. Written modules cover Schedule C (the home office both ways, the gross-income limit, the exclusive-use trap, self-employment tax and QBI), an S-corporation K-1 with Form 7203 and the three gates a loss must clear, Form 1095-A and Form 8962 including splitting one Marketplace policy across separate returns, the child tax credit, the earned income credit, NOL carryforwards and digital assets. Every figure carries the date it was verified against irs.gov, because the IRS renumbers lines and Congress moves amounts.' },
      { file: 'form-1120s-preparation.md', title: 'Form 1120-S — S-corporation return',
        flowLede: 'Preparing an S-corporation return from the client\u2019s QuickBooks \u2014 written for a first-time preparer. Two things gate everything: the extension, which cannot be fixed afterwards, and the map, which you build by reproducing last year\u2019s filed return before you touch this year\u2019s.',
        flow: [
          { t: 'Gather', d: 'The prior-year FILED return, plus this year\u2019s and last year\u2019s QuickBooks P&L and balance sheet \u2014 four sources, and everything else is computed from them', ic: 'search' },
          { t: 'Check the extension', d: 'Form 7004 moves the deadline from 15 March to 15 September. If it was never filed and the date has passed, stop and tell Lilian \u2014 the penalty runs per shareholder, per month', ic: 'check', k: 'gate' },
          { t: 'Build the map', d: 'Reproduce last year\u2019s page 1 from last year\u2019s P&L and compare it to what was filed. Every difference is a firm convention to repeat, not an error to fix', ic: 'diagram', k: 'gate' },
          { t: 'Form 1125-A', d: 'Cost of goods sold. Its line 8 feeds page 1 \u2014 and \u201cinventory at end of year\u201d is not always the account called Inventory', ic: 'form' },
          { t: 'Page 1', d: 'Income, then deductions top-down: lines 7 to 19 are named categories, line 20 is the remainder, and ordinary business income lands on line 22', ic: 'edit' },
          { t: 'Schedule B', d: 'One answer can remove two schedules \u2014 under $250,000 of receipts and assets, Schedules L and M-1 are not required', ic: 'steps' },
          { t: 'Schedules L, M-1 and M-2', d: 'The balance sheet per books, the book-to-tax bridge, and the AAA. The beginning column is copied from last year, never recalculated', ic: 'save' },
          { t: 'Schedule K', d: 'What travels to the owners \u2014 including the items that must never sit inside ordinary income, and line 18, which is what M-1 reconciles to', ic: 'send' },
          { t: 'Form 7203 per shareholder', d: 'Basis. A loss beyond a shareholder\u2019s basis is suspended, not deducted \u2014 and two owners at the same percentage can have very different basis', ic: 'key', k: 'gate' },
          { t: 'Tie out, sign, file', d: 'Every check in \u00a714 must pass \u2014 a failed tie-out is a mapping error, not a rounding one. Then Form 8879-CORP and e-file', ic: 'sign', k: 'done' },
        ],
        blurb: 'The firm\u2019s procedure for an S-corporation return, written for someone doing one for the first time: where every number comes from, not just which box it goes in. Carries the four sources every figure originates in and how they travel between the forms, the method at its centre \u2014 reproduce last year\u2019s filed return from last year\u2019s books to learn the client\u2019s conventions before filling in anything \u2014 plus the QuickBooks\u21921120-S line map, every formula in one place, the tie-out checks, and the ten pitfalls that have each bitten a real return.' },
      { file: 'child-dependent-care-provider-statement.md', title: 'Child & Dependent Care — Provider Statement',
        template: { pdf: 'child-dependent-care-provider-statement.pdf', png: 'child-dependent-care-provider-statement.png', name: 'Child and Dependent Care Provider Statement' },
        flowLede: 'When a client paid for dependent care with no transaction trail — a cash-paid babysitter, no invoices — this is how we substantiate the Child & Dependent Care Credit: from the blank form to a signed statement on file.',
        flow: [
          { t: 'No payment trail', d: 'Dependent-care costs with no bank or card record', ic: 'search' },
          { t: 'Send the blank form', d: 'Give the care provider the Provider Statement', ic: 'send' },
          { t: 'Provider fills it in', d: 'Name · address · SSN or EIN · dates · amount · method', ic: 'edit' },
          { t: 'Provider signs & dates', d: 'The certification — the signature is what gives it weight', ic: 'sign' },
          { t: 'Save the signed copy', d: "To the client's Drive / Double — never the repo", ic: 'save' },
          { t: 'Report on Form 2441', d: 'Provider name, address, TIN and amount go on the return', ic: 'form' },
          { t: 'Keep it on file', d: 'Recordkeeping — not filed with the return', ic: 'check', k: 'done' },
        ],
        schema: {
          start: { t: `A client paid for a child's or dependent's care so they could <b>work</b>`, d: 'e.g. a babysitter for a child under 13' },
          decision: {
            tag: 'Evidence check', q: `Is there a transaction trail?`,
            yes: { bl: `Yes — bank/card records or invoices`, body: `Use those records to substantiate the amount &amp; provider. <span class="arw">↓ straight to Form 2441</span>` },
            no:  { bl: `No — cash-paid, no records`, body: `Get a <b>signed Provider Statement</b>: send the blank form → provider fills it in → provider <b>signs &amp; dates</b> → save the signed copy to the client's systems` },
          },
          then: [
            { t: `Report the provider's <b>name, address, TIN</b> &amp; the <b>amount</b> on <b>Form 2441</b>` },
            { t: `Keep the statement as support — <b>recordkeeping, not filed</b> with the return`, k: 'done', pill: 'On file' },
          ],
        },
        blurb: 'Substantiate a client’s Child and Dependent Care Credit (Form 2441) when there’s no payment trail — e.g. a cash-paid babysitter. Have the care provider complete and sign the statement (name, address, SSN/EIN, dates, amount, method); the signed copy stays in the client’s systems.' },
      { file: 'business-tax-engagement-letter-standard.md', title: 'Business Tax Engagement Letter', engagement: true,
        blurb: 'The firm’s in-house GoProposal replacement — an interactive generator that builds a business tax-preparation engagement letter from a few client facts. Starts blank every time, won’t generate with a field missing, and auto-derives the return (1120 / 1120-S / 1065), the Form 8879 variant, and the filing due date from the entity type. Fill the form → Save PDF. Client data never enters the repo.' },
    ],
  },
  {
    name: 'ITIN & Acceptance Agent', note: 'Getting authorized, then doing the work',
    items: [
      { file: 'irs-certifying-acceptance-agent.md', title: 'Becoming a Certifying Acceptance Agent',
        flowLede: 'Authorization to authenticate an ITIN applicant’s identity documents in our own office — so the client never mails their original passport to Austin. Two trainings first: the application cannot be submitted until every responsible party has finished both.',
        flow: [
          { t: 'Decide who the responsible parties are', d: 'Every RP takes both trainings and pays for one — name the minimum who will actually do ITIN work', ic: 'search' },
          { t: 'Clear the prerequisites', d: 'EIN on the exact legal name · a PTIN each · e-Services + ID.me for the PPO and every RP · everyone’s own taxes current', ic: 'key' },
          { t: 'Mandatory ITIN training', d: 'Free, from the IRS (Pub 5726). No certificate any more — you attest to it on the jurat', ic: 'steps' },
          { t: 'Forensic document training', d: 'CAAs only, from a recognized private vendor. One certificate per person, embossed seal, valid four years', ic: 'pay' },
          { t: 'Apply in e-Services', d: 'Paper Form 13551 is gone. Each RP answers suitability and signs with their PIN — then the PPO submits', ic: 'globe' },
          { t: 'Wait 24h, then upload', d: 'Forensic certificates and credentials go through the CAA Document Upload Tool — never the application itself', ic: 'send' },
          { t: 'IRS checks · up to 60 days', d: 'Background and tax-compliance check on the firm and every RP. Answer any notice through the same Upload Tool', ic: 'search' },
          { t: 'The PPO signs the agreement', d: 'Approval is not the finish line — the firm is not a CAA until that signature is in', ic: 'sign' },
          { t: 'Live — and keep it alive', d: '≥5 Forms W-7 a year · renew during the expiration year · watch both four-year clocks', ic: 'check', k: 'done' },
        ],
        blurb: 'How the firm gets IRS-authorized as a Certifying Acceptance Agent — the prerequisites gate, the two trainings every responsible party must finish before applying, the certificate-acceptance checklist that decides whether the forensic course was worth paying for, the e-Services application, and the obligations that follow approval. A draft: the e-Services screens are described from IRS documentation, not yet from a live run.' },
      { file: 'itin-w7-application.md', title: 'The ITIN Application (Form W-7)',
        flowLede: 'The first question is never “how do we fill this in”. It is whether the applicant is allowed an ITIN at all — someone eligible for a Social Security Number is not.',
        flow: [
          { t: 'The SSN gate', d: 'Eligible for an SSN → send them to the SSA. If the SSA refuses, the denial letter must be attached', ic: 'key' },
          { t: 'Tax status, then one reason box', d: 'Resident or nonresident for tax purposes (Pub 519). Check ONE box a–h — invalid combinations are the IRS’s #1 error', ic: 'search' },
          { t: 'Return — or an Exception', d: 'Attach the U.S. tax return, or claim one of Exceptions 1–5 and attach its proof in place of the return', ic: 'form' },
          { t: 'Lines 1a – 6g', d: 'Line 3 always takes a complete foreign address; Line 6d takes the date of entry into the U.S.', ic: 'edit' },
          { t: 'Identity documents', d: 'From the 13-document list, original or certified by the issuing agency — notarized copies are not accepted', ic: 'form' },
          { t: 'The dependent rules', d: 'A dependent’s passport is not automatically stand-alone; residency proof depends on the age band', ic: 'search' },
          { t: 'Signatures', d: 'An eligible signer for the applicant’s age, then the Acceptance Agent’s Use ONLY block with our EIN and Office Code', ic: 'sign' },
          { t: 'CAA: authenticate + W-7(COA)', d: 'Primary and secondary: everything but a foreign military ID. Dependents: passport and birth certificate only', ic: 'check' },
          { t: 'Mail within five business days', d: 'To ITIN Operations, Austin — never the address in the tax return’s own instructions', ic: 'mail' },
          { t: 'Originals back in ~60 days', d: 'The ITIN arrives as an assignment letter. Copies are never returned', ic: 'check', k: 'done' },
        ],
        blurb: 'Preparing a client’s ITIN application — the eligibility gate that comes before the form, the reason box, the five Exceptions that replace the attached tax return, the thirteen acceptable documents and the dependent rules buried inside them, the signature and five-day rules, and the IRS’s own top-ten error list as a pre-flight check. A draft: written from the IRS publications, not yet from a filed application.' },
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
      { file: 'ikids-group-bookkeeping-review.md', title: 'iKids Group — Monthly Bookkeeping', perClient: true, client: { slug: 'ikids-group', name: 'iKids Group' },
        blurb: 'iKids Group’s monthly bookkeeping — a children’s play park still being built out, so the question is never which expense account but which asset bucket, and the P&L is supposed to be empty. Carries the five buckets and the boundaries that actually get confused, the role→account map, the reports the client asks for and how far we have sent them. Its signature step: the bills don’t come to us, we fetch them from the client’s own AP mailbox every month.',
        close: {
          name: 'iKids Group LLC', loc: 'Monthly bookkeeping · pre-operational play park (Fort Lauderdale)', dl: 'iKids-bookkeeping-runbook',
          // The pre-operational shape. It reuses closeProcessReader, but there are no Drive
          // walkthrough buttons: the weight is in the buckets, the rules and the account map,
          // and the monthly process is AP retrieval plus categorization rather than a close.
          kind: 'Monthly Bookkeeping',
          slede: 'The authoritative detail — the client snapshot, the monthly process, the five buckets, the categorization rules, what the client asks us to report, the reviewer checklist, and the open decisions. Open a section.',
          lede: "Everything a bookkeeper needs to run iKids month to month — the one rule, the monthly flow, then the process step by step, and the logic behind a chart of accounts built for a build-out. Built from the runbook, so it stays in sync.",
          oneRule: "<b>The park has not opened, so nothing reaches the P&amp;L except bank charges.</b> Ask what the money <i>bought</i>, not what kind of expense it looks like: producing the improvement goes to <b>Construction in Progress</b>, readying the business to <b>Startup Costs</b>, forming the entity to <b>Organizational Costs</b>, things bought outright to <b>Fixed Assets</b>, and money held as security to <b>Security Deposit</b>. And the paperwork does not come to us — every bill lands in the <b>client's own AP mailbox</b> and we go and get it, <b>every month</b>. The <b>water bill is on autopay</b>: collect it, attach it, <b>never pay it twice</b>.",
          flow: [
            { t: 'Check the feed', d: 'It stopped on 20 Jul and nobody noticed' },
            { t: 'Work the mailbox', d: 'Download the month’s bills + confirmations' },
            { t: 'Water = autopay', d: 'Collect it · never pay it twice' },
            { t: 'File in Drive', d: 'Bookkeeping → that month’s folder' },
            { t: 'Attach', d: 'Each bill to its payment transaction' },
            { t: 'The five buckets', d: 'What did the money buy?' },
            { t: 'Read the P&amp;L', d: 'Bank charges only — else re-open' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
          ],
        } },
      { file: 'masciave-design-studio-bookkeeping-review.md', title: 'Masciave Design Studio — Bookkeeping Runbook', perClient: true, client: { slug: 'masciave-design-studio', name: 'Masciave Design Studio' },
        blurb: 'Masciave’s bookkeeping rules — an interior-design studio whose costs are read by project. What carries a project tag, and the one recurring outside retainer that deliberately carries none because it buys work across several clients at once. Plus the chart-of-accounts conventions, the reviewer checklist and the open decisions. New and IN REVIEW: the two rules are Lilian’s own instruction, the runbook assembled around them awaits her sign-off.',
        close: {
          // A RULES-shape runbook (like Ecoorganic), rendered through the reusable close reader:
          // there is no close process to show yet, so the ribbon is the costing DECISION and the
          // sections carry the weight. Cadence is QUARTERLY — hence the flowTitle/flowLede override.
          name: 'Masciave Design Studio', loc: 'Bookkeeping runbook · interior design studio (Fort Lauderdale)', dl: 'Masciave-bookkeeping-runbook',
          kind: 'Categorization rules & reviewer checks',
          slede: 'The authoritative detail — the client snapshot, the categorization rules, the 1099 process, the chart-of-accounts conventions, the reviewer checklist, and the open decisions. Open a section.',
          lede: "What a bookkeeper needs to code this studio's costs correctly — the one rule, how a charge is decided, then the full runbook. One round old, in review, and deliberately marked where it is still thin. Built from the runbook, so it stays in sync.",
          // ⚠️ oneRule + flow are HAND-AUTHORED and mirror rules 1, 2, 4 and 5 of
          // masciave-design-studio-bookkeeping-review.md — nothing links them, and the ribbon
          // is the half the team actually reads. Change a rule there → change it here in the
          // same pass. Deliberately carries NO threshold figures or account codes: those move,
          // and a stale number in a chip is worse than a stale paragraph.
          oneRule: "A cost incurred for <b>one</b> job carries that job’s project tag — that is the only project-level data these books hold, because there is no timesheet integration. The <b>recurring permit-expediting retainer is the exception</b>: it is one regular fee that buys work across <b>several</b> clients at once, so it goes to <b>Legal &amp; Professional Fees</b> — the sub-account this client’s chart uses for it, never the parent — with the <b>project field empty</b>. Empty is the accurate answer, not a missing one.",
          flowTitle: 'How each charge is decided',
          flowLede: 'The first four questions are asked of <b>every charge</b>, in this order — the owner question comes <b>before</b> the project question, because a reimbursement is not a job cost. The last two are period checks. ⚠️ <b>The review cadence is unsettled</b>: Double’s property says quarterly, the client’s own close tasks have run monthly (see the open decisions), so <b>work the period you are given and count what it should contain</b> rather than assuming a number. The last move is a hard gate: triage must read <b>$0</b> before the period is closed.',
          flow: [
            { t: 'Name the payee', d: 'Every charge gets a vendor — except owner moves &amp; transfers' },
            { t: 'Owner-bound?', d: 'Accountable-plan reimbursement is NOT equity · otherwise in = contribution, out = distribution' },
            { t: 'One job?', d: 'Incurred for one project → tag that project' },
            { t: 'The retainer', d: 'Spans clients → the Legal &amp; Professional <i>sub</i>-account, no project' },
            { t: '1099 watch', d: 'Flag outside professionals as you go — the sweep itself is year-end' },
            { t: 'Triage → $0', d: 'The close gate', k: 'gate' },
          ],
        } },
    ],
  },
  {
    // Marketing lives in projects/marketing/, not projects/sops/ — these two items carry a
    // `dir` override so they can be read where they belong. They are the firm's social rules
    // (what a post is for) and the production route (how it gets made); they are procedures
    // in every sense the team cares about, so they sit in the Procedures view like the rest.
    name: 'Marketing & content', note: 'How a social post is decided, written and made',
    items: [
      { file: 'social-content-playbook.md', dir: 'projects/marketing/',
        title: 'Social Content Playbook — Instagram & Facebook',
        kicker: 'Playbook', readerKick: 'Marketing playbook · firm-wide', tag: 'The rules',
        flowLede: `Every post runs the same seven steps, and the first three happen before a word is written — that is the whole point. Pillar, then the month's mix, then the one action; only then the copy.`,
        flow: [
          { t: 'Pick the pillar', d: 'Expertise · personality · proof — a post that stands on none of the three is not published', ic: 'search' },
          { t: "Check the month's mix", d: '50% useful · 20% personality · 20% trust · 10% offer — counted per month, not per post', ic: 'diagram' },
          { t: 'Name the ONE action', d: 'Save · follow · comment · click · book a free discovery call — one, decided before writing', ic: 'key' },
          { t: 'Write it EN + RU', d: "Julia's voice, calm senior advisor; each language written natively, never machine-translated", ic: 'edit' },
          { t: 'Verify every number', d: 'Figures, thresholds and deadlines against an authoritative source (IRS first) — unverifiable, cut', ic: 'check' },
          { t: 'Clear the client-data gate', d: 'No client name, business or figures without written permission — anonymized patterns only', ic: 'key' },
          { t: 'Brand finish, then publish', d: 'Exact text placed by us, right size for the network, link tested — see the production workflow', ic: 'send', k: 'done' },
        ],
        schema: {
          start: { t: `A post would show <b>what we achieved for a client</b> — the Proof pillar, and the one place a content playbook written for the creator economy cannot be followed literally: their figures are private financial data.`, d: 'we are a regulated practice' },
          decision: {
            tag: 'The client-data gate', q: `Do we have the client's <b>explicit written permission</b> to name them?`,
            yes: { bl: `Yes — in writing`, body: `Name and identifying detail may be used <b>as permitted</b> — nothing beyond what they agreed to. Their <b>figures</b> still need that permission specifically, and a screenshot of their books is never the illustration.` },
            no:  { bl: `No — or only a friendly "sure"`, body: `Publish the <b>shape</b> of the case, never the person: <em>"an owner who had been filing as a sole proprietor for three years while running payroll-sized profits."</em> No name, no business, no logo, no figures. The pattern is what teaches anyway.` },
          },
          then: [
            { t: `Every figure that survives is <b>verified</b> against an authoritative source (IRS first). No invented statistic, no fabricated testimonial, no stock or AI face — if it cannot be verified, it is cut.` },
            { t: `Keep the voice: <b>calm senior advisor</b> — no fear, no hype, no hard-sell. Tax content is <b>education, not advice</b> on the reader's situation.` },
            { t: `Then the post takes its one named action like any other, and goes through the brand finish.`, k: 'done', pill: 'Safe to publish' },
          ],
        },
        blurb: 'What every Instagram/Facebook post is FOR — the three pillars (expertise · personality · proof), the 50/20/20/10 monthly mix, one named action per post, 3–4 posts a week over bursts, and the confidentiality limits on publishing client results. Adapted from the Personal Brand Starter Kit, with the source digested in full.' },
      { file: 'social-post-workflow.md', dir: 'projects/marketing/collateral/',
        title: 'Social Posts — Production Workflow',
        kicker: 'Procedure', tag: 'How it gets made',
        blurb: 'How a post actually gets produced once the playbook has decided what it is for — who does what, choosing between Gemini, NotebookLM and Claude for the visual, the golden rule that no number is ever left as text an image model typed, and the right size for each network.' },
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
      { file: 'double-portal-sending-us-information.md', title: 'Double Portal — Sending Us Information',
        blurb: 'The other question every client asks: “I have information for you — where do I put it?” Everything goes in “Qs for us” — four taps on a phone — plus the ready-to-send client guides (visual guide + PDF, email, WhatsApp — EN & RU). Phone flow verified; desktop not documented yet.',
        // team page: cut the internal file table + open-items notes, show the guide images instead
        truncateAt: 'Client-ready templates',
        guides: [
          { lang: 'English', png: 'double-send-info-en.png', pdf: 'double-send-info-en.pdf' },
          { lang: 'Russian', png: 'double-send-info-ru.png', pdf: 'double-send-info-ru.pdf' },
        ] },
      // 'double-portal-branding.md' is intentionally NOT listed — it's an internal setup
      // note (kept in the repo), not something the team needs in the Hub.
    ],
  },
  {
    name: 'Client tasks', note: 'One-off and recurring client-specific procedures',
    items: [
      { file: 'ecoorganic-ct-sales-tax.md', title: 'Ecoorganic — Connecticut Sales Tax (monthly)', client: { slug: 'ecoorganic-usa', name: 'Ecoorganic' },
        blurb: 'The monthly Connecticut OS-114 the firm files for Ecoorganic as a zero return — the myconneCT login, the steps, how the filing is saved to Drive, the deadline and the $50 late floor, and the two questions nobody has settled.',
        task: {
          name: 'ECOORGANIC USA LLC', loc: 'Connecticut sales & use tax · Form OS-114 · monthly',
          lede: 'Every month the firm files this client’s Connecticut sales-tax return as a zero return, on our own login — the client does not do it. It needs nothing from the books, so it never waits for the close.',
          flowLede: 'The month ends → the reminder fires in Double on the 5th → open the login from Drive → file the OS-114 at zero → save the PDF and the confirmation screenshot. Miss a month and it costs $50, even at zero.',
          flow: [
            { t: 'Month ends', d: 'The period to be filed closes', ic: 'refresh' },
            { t: 'Reminder fires', d: 'Double, the 5th of the following month — deliberately early', ic: 'mail' },
            { t: 'Get the login', d: 'Drive → Sales Taxes → Connecticut → the “Sales tax” doc', ic: 'key' },
            { t: 'File the OS-114', d: 'At zero — check the PERIOD before submitting', ic: 'globe', k: 'gate' },
            { t: 'Save the PDF', d: '“MM.YYYY - Sales tax - zero tax return.pdf” in the year folder', ic: 'save' },
            { t: 'Save the screenshot', d: 'The confirmation — the only proof of WHEN it was filed', ic: 'check', k: 'gate' },
          ],
          loop: 'It repeats every month on its own clock and is not part of the bookkeeping close — a zero return needs no figures, so it never waits for QuickBooks.',
          vault: {
            url: 'https://docs.google.com/document/d/1FaiTyqEnm-eDsxbx1ZH8UdSAgqq6zSMwK_2z2orbk9U/edit',
            label: 'Open the myconneCT login',
            tip: 'A Google Doc in the client’s Drive, kept beside the filings: the myconneCT portal address and the firm’s username and password. The same credentials are also in the client’s master “Ecoorganic Passwords” doc one folder up.',
            note: 'The portal address and the firm’s login for CT DRS myconneCT. The login is OURS, not the client’s — he cannot file this himself.',
          },
        } },
      { file: 'atman-parts-tx-sales-tax.md', title: 'Atman Parts — Texas Sales Tax (monthly)', client: { slug: 'atman-parts', name: 'Atman Parts' },
        blurb: 'The monthly Texas Sales and Use Tax return the firm files for Atman Parts on the Comptroller’s eSystems portal — the login, the click path, the period-code trap, the deadline and penalties, and the eBay marketplace rule that decides whether the figures are right.',
        task: {
          name: 'ATMAN PARTS LLC', loc: 'Texas sales & use tax · eSystems / WebFile · monthly',
          lede: 'Every month the firm files this client’s Texas sales-tax return on the Comptroller’s portal, using credentials kept in the client’s Drive — the client does not do it. Unlike a zero return, this one needs figures, and the client sells on eBay, which changes where each figure goes.',
          flowLede: 'The month ends → work out the figures under the marketplace rule → open the login from Drive → take the Sales and Use Tax row (the business is listed twice) → CHECK the period is not already filed → file the original return → pay → save the PDF and confirm it reads “Return Filed”.',
          flow: [
            { t: 'Month ends', d: 'The period to be filed closes', ic: 'refresh' },
            { t: 'Work out the figures', d: 'Total sales, taxable sales — the eBay marketplace rule decides where each one goes', ic: 'search', k: 'gate' },
            { t: 'Get the login', d: 'Drive → Atman Products → Sales tax → the “Sales tax” doc', ic: 'key' },
            { t: 'Pick the RIGHT account', d: 'eSystems dashboard lists this business twice — take the Sales and Use Tax row, not Franchise Tax', ic: 'globe' },
            { t: 'Already filed?', d: 'View Return Summary FIRST — July 2026 was filed by someone outside the firm. If it reads “Return Filed”, stop and take it to Lilian', ic: 'search', k: 'gate' },
            { t: 'File Original Return', d: 'Check the period code before submitting — 2607 is July 2026', ic: 'form' },
            { t: 'Submit and pay', d: 'Any tax due goes with the return', ic: 'pay' },
            { t: 'Save the PDF', d: '“N. Month YY.pdf” in the year folder — match the numbering already there', ic: 'save' },
            { t: 'Confirm “Return Filed”', d: 'The only thing separating submitted from filed', ic: 'check', k: 'gate' },
          ],
          loop: 'It repeats every month on its own clock, due the 20th of the following month. It is not part of the bookkeeping close — but unlike a zero return it needs figures, so it is the one sales-tax filing the books can block. Two things are unsettled: nothing in Double reminds anyone to do it, and July 2026 was filed by somebody outside the firm — so who owns this filing has not actually been agreed with the client.',
          vault: {
            url: 'https://docs.google.com/document/d/1vVZxsEdYCqnhyxCrpQbk-Fo0nB0JgBA3EcwZ7UBWfjw/edit',
            label: 'Open the eSystems login',
            tip: 'A Google Doc in the client’s Drive, kept beside the filings: the portal sign-in address, user and password, the three security answers, and the taxpayer / WebFile numbers.',
            note: 'Everything needed to sign in is in this one document — portal address, user, password, security answers, and the taxpayer and WebFile numbers. The eSystems account is the CLIENT’s; the credentials are ours to use.',
          },
        } },
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
  {
    // LAST on purpose: it is not a procedure, and the Procedures view's own copy promises
    // "firm-wide procedures that fit any client come first". Its own group because the two
    // questions it answers ("what is our fax number?", "can Lilian be on a 2848?") are not
    // company-formation questions and nobody would look for them under that heading.
    name: 'The firm', note: 'Our own details — the values other people\'s forms ask for',
    items: [
      // A reference sheet, not a procedure — deliberately no flow/schema (the render treats
      // both as optional), and kicker/readerKick so it is not labelled an SOP. Straight
      // apostrophes only: Hub search is a plain substring test over title + blurb.
      { file: 'firm-identity.md', title: 'The Firm\'s Own Details',
        kicker: 'Reference', readerKick: 'Firm reference sheet',
        blurb: 'Our address, the company fax, everyone\'s direct line — the values other people\'s forms keep asking for, in one place. And who may sign what for a client: an SS-4 designee or a Form 8821 can be anyone, but a Form 2848 may only name someone eligible to practice before the IRS.' },
    ],
  },
];

// id → title for every SOP shown in the Hub, so mdInlineHub can turn a relative `.md`
// cross-reference into an in-Hub reader BUTTON (never a filename or repo path).
const hubSopMeta = new Map(SOP_GROUPS.flatMap((g) => g.items).map((it) => [basename(it.file, '.md'), it.title]));

// Reader ids (and this map) are keyed on the file's BASENAME, which was unique for free while
// every procedure came out of one folder. `dir` sourcing from several projects makes a
// collision possible: two same-named files would emit duplicate data-doc ids — the reader
// would open whichever came first — and every `.md` cross-link to either would resolve wrong.
// Fail the build rather than ship a page whose links quietly point at the wrong document.
{
  const seen = new Set(), dupes = new Set();
  for (const it of SOP_GROUPS.flatMap((g) => g.items)) {
    const id = basename(it.file, '.md');
    if (seen.has(id)) dupes.add(id); else seen.add(id);
  }
  if (dupes.size) {
    console.error(`✖ Duplicate SOP id(s): ${[...dupes].join(', ')}. Reader ids come from the `
      + `file's basename, so two files with the same name collide even in different folders. `
      + `Rename one of them.`);
    process.exit(1);
  }
}

/* ---------------- build SOP cards ---------------- */
// Load the clients up-front (reuse the CI dashboard engine) so the per-client SOP groups
// can link straight down to each client's intelligence card (#slug). Used again below to
// render the client cards themselves.
const clients = loadClients(repoRoot);
const clientBySlug = new Map(clients.map((c) => [c.slug, c.title]));

/* The no-sensitive-data gate lives in loadClients() (client-intelligence/render/build.mjs)
   so BOTH publishing paths inherit it — this Hub build and the CI review dashboard, which
   ships as an Artifact. It blocks identifiers, NOT tax subject matter. See knowledge-hub
   rule 12. */

let sopCount = 0;
const hubSopTitles = {};   // id → title, so client-card "Related SOP" links open the in-Hub reader (never a repo link)
const sopOwnerKeys = [];
const readerDocs = [];   // collected designed pages, opened in the in-Hub reader

// One SOP → its designed card, and (as a side effect) its reader doc pushed to readerDocs.
// grpName only feeds the card's search text.
function renderSopItem(it, grpName) {
  // Almost every procedure lives in projects/sops/. A `dir` override lets a document that
  // belongs to another project be shown here without moving it out of the project that owns
  // it — the marketing playbook and its production workflow live in projects/marketing/,
  // where the marketing persona applies to them. The file stays put; the Hub is the view.
  // Normalise the separator so `dir: 'projects/marketing'` and 'projects/marketing/' both work.
  const rel = (it.dir || 'projects/sops/').replace(/\/*$/, '/') + it.file;
  const abs = resolve(repoRoot, rel);
  // A missing file used to drop the card SILENTLY — the group badge and the nav count still
  // said 2 while one card was gone, and the build exited 0. With `dir` in play (a typo'd
  // folder, a file moved by the project that owns it) that is now a live failure mode, so say
  // so loudly. Still non-fatal: one missing document must not take the whole Hub down.
  if (!existsSync(abs)) {
    console.warn(`⚠ SOP card SKIPPED — no file at "${rel}". Check the catalog item's `
      + `file/dir in build-hub.mjs; the group's card count will be short by one.`);
    return '';
  }
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
  } else if (it.engagement) {
    inner = engagementReaderInner(owner, updated);
  // An EXPLICIT config always beats a filename guess. `close`/`task` are declared per item
  // in the catalog above, so they are checked first: a filename regex cannot know which of a
  // client's several SOPs it is looking at. (2026-08-13: `/ecoorganic/` was matching the new
  // ecoorganic-ct-sales-tax.md and rendering it through the BOOKKEEPING reader — a silent
  // wrong-page bug caught only by the bare-Mermaid guard. Keep the filename tests LAST, and
  // keep them specific enough to name one file.)
  } else if (it.close) {
    inner = closeProcessReader(it.close, md, owner, updated);
  } else if (it.task) {
    inner = taskProcessReader(it.task, md, owner, updated);
  } else if (/business-tax-receipt/.test(it.file)) {
    inner = btrReaderInner();
  } else if (/ecoorganic-bookkeeping-review/.test(it.file)) {
    inner = ecoorganicReaderInner(md, owner, updated);
  } else {
    let md2 = md;
    if (it.truncateAt) {                      // drop internal-only sections from the team page
      const re = new RegExp('\\n#{2}\\s+' + it.truncateAt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      const cut = md2.search(re);
      if (cut !== -1) md2 = md2.slice(0, cut);
    }
    // The "process at a glance" MUST be a designed flow (impeccable + Atlas .pcflow) — never a
    // bare Mermaid block. A `flow` config replaces the .md's Mermaid section with the same
    // animated flow the client-task SOPs use (reduced-motion safe, visible without JS).
    const hasFlow = (it.flow && it.flow.length) || it.schema;
    let flowBlock = '';
    if (hasFlow) {
      // Strip the .md's Mermaid "process at a glance" (optional leading `---` + heading + lede +
      // fence) up to the next `## ` heading OR end of file — the `|$` covers the edge case where
      // that section is the last one (else it wouldn't strip and the guard below would flag it).
      md2 = md2.replace(/\n(?:---\s*\n+)?##\s+[^\n]*process at a glance[\s\S]*?(?=\n##\s|$)/i, '\n');
      flowBlock = `<div class="shead"><span class="schip">✦</span><h2>The process at a glance</h2></div>`
        + (it.flowLede ? `<p class="slede">${esc(it.flowLede)}</p>` : '')
        + flowViews(id, it);
    }
    let bodyHtml = mdToAtlas(md2);
    if (hasFlow) bodyHtml = flowBlock + bodyHtml;                        // designed flow(s), above the .md body
    if (it.template) bodyHtml = templateBlock(it.template) + bodyHtml;   // prominent download, top of the reader
    if (it.guides && it.guides.length) bodyHtml += guidesBlock(it.guides, it.guidesAlt || it.title);
    inner = `<section class="mast"><div class="in"><p class="kick">${esc(it.readerKick || 'Standard Operating Procedure')}</p>`
      + `<h1>${esc(it.title)}</h1><div class="meta">${readerMeta(owner, updated)}</div></div></section>`
      + `<div class="page">${bodyHtml}</div>`;
  }
  readerDocs.push(`<div class="rdoc" data-doc="${id}" hidden>${inner}</div>`);

  return `
      <a class="hcard doc-card" role="button" tabindex="0" data-open-doc="${id}" data-doc-name="${esc(it.title)}"
         data-card data-type="sop" data-owner="${ok}" data-text="${esc(text)}">
        ${IC.arrow}
        <div class="khead">
          <span class="kkick">${esc(it.kicker || 'SOP')}${it.tag ? ' · ' + esc(it.tag) : ''}</span>
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

/* ---------------- Templates view (a third area) ----------------
   One place to FIND and DOWNLOAD the firm's reusable files fast. Two bands:
   FIRM TEMPLATES stand alone (no SOP); FROM A PROCEDURE indexes templates that
   live inside an SOP — grab them here, or open the SOP for full context. The
   original always stays in its SOP (we index it, we never move it).
   Downloads reuse the global a[download][href^="data:"] → saveFile interceptor,
   so they save the REAL file on the host (Odoo / a normal browser) and degrade
   honestly in the Artifact sandbox (which blocks pdf/xlsx). Every asset is
   embedded as a data URI, so the page stays self-contained. */
const TEMPLATES = [
  // Interactive tools — self-contained HTML tools that open and RUN inside the Hub. Each is
  // embedded from its own .src.html at build time (single source of truth), so the Hub always
  // shows the latest version. Adding a new HTML tool = one { band: 'tool' } entry here whose
  // `tool.id` matches an embedded reader — see the "tools live in the Hub, from source" rule.
  { band: 'tool', kind: 'Interactive tool', name: 'Business Tax Engagement Letter — generator', owner: 'julia',
    blurb: 'The firm’s in-house GoProposal replacement — builds a business tax-preparation engagement letter from a few client facts, live in the browser. Starts blank every time, auto-derives the return (1120 / 1120-S / 1065), the Form 8879 variant and the due date, and carries the optional “fee is an estimate” toggle. Opens right here in the Hub; “Save PDF” works in a normal browser. Client data never enters the repo.',
    formats: ['In-Hub tool'],
    tool: { id: 'business-tax-engagement-letter-standard', label: 'Open the generator' } },

  { band: 'firm', kind: 'Bookkeeping', name: 'Chart of Accounts — Firm Standard', owner: 'lilian',
    blurb: 'The firm’s one numbering system for every client — the 125-account master. Import it into a new client’s QuickBooks, then activate, rename and add niche sub-accounts within the same ranges.',
    formats: ['XLSX'],
    downloads: [
      { label: 'Download master (Excel)', file: 'S-Corp-COA-master.xlsx',
        mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        path: 'projects/sops/assets/S-Corp-COA-master.xlsx', primary: true },
    ],
    open: { id: 'chart-of-accounts-standard', label: 'Open the interactive Chart of Accounts' } },

  { band: 'tool', kind: 'Interactive tool', name: 'Monthly Retainer Proposal — generator', owner: 'julia',
    blurb: 'Build a full monthly-retainer proposal (our premium GoProposal replacement) for a bookkeeping client — live in the browser. Step 1 prices the client with the same pricing calculator; Step 2 flows that fee into the proposal, where every part is editable so you can adjust the number and the wording. Pick English (10 pages) or Bilingual Russian + English (Russian version first, Atman-style, then the official English version with the signature &amp; binding Terms). Generates the on-brand proposal live; “Save PDF” works in a normal browser. Client data never enters the repo.',
    formats: ['In-Hub tool'],
    tool: { id: 'monthly-proposal-generator', label: 'Open the generator' } },

  { band: 'tool', kind: 'Notebook', name: "Lilian's Notebook — lessons learned", owner: 'lilian',
    blurb: 'The hard knowledge, kept deliberately small — how a system actually behaves, what something costs, what’s inside a fee, and how to carry out a procedure — each written as the rule to follow next time. Searchable, with the ★ starred ones marked. Lilian’s own record (she is the one who writes it); it lives here so knowledge outlives the task that produced it. Opens right here in the Hub, always rebuilt from its source.',
    formats: ['In-Hub page'],
    tool: { id: 'lilian-notebook', label: 'Open the notebook' } },

  { band: 'tool', kind: 'Interactive tool', name: 'Internal Pricing Calculator', owner: 'julia',
    blurb: 'Price a monthly client from the firm’s Core Pricing Matrix — enter the service parameters and get the internal fee build-up and the single bundled monthly fee, live in the browser. Internal only (the client never sees the breakdown); it also feeds the Monthly Retainer Proposal generator, using the same shared pricing core so the two never disagree.',
    formats: ['In-Hub tool'],
    tool: { id: 'pricing-calculator', label: 'Open the calculator' } },

  { band: 'tool', kind: 'Interactive tool', name: 'ITIN Application Walkthrough', owner: 'julia',
    blurb: 'Prepare an ITIN application (Form W-7) without needing to know the rules first. It asks plain questions — is this a dependent? which country? how old? do we have the passport? — and works out the reason box, the documents to collect, whether U.S. residency has to be proved, who is allowed to sign, and what goes in the envelope; then prints a preparation sheet for that one applicant. A searchable field-by-field reference to every line of Form W-7 and Form W-7-COA sits on the second tab, to keep open while filling the form in. The third tracks one client’s case across the weeks an application takes: a checklist pruned to that applicant’s actual steps, a note on each, a running log — and a block you paste into the client’s case note in Double, which is both the durable record and how you reopen the case on another machine. Runs entirely in the browser; the only client data it holds is the reference you choose and your own notes.',
    formats: ['In-Hub tool'],
    tool: { id: 'itin-w7-walkthrough', label: 'Open the walkthrough' } },

  { band: 'tool', kind: 'Interactive tool', name: 'Business Tax Receipt Walkthrough', owner: 'julia',
    blurb: 'Get a Florida Business Tax Receipt for a Hollywood business without holding the whole procedure in your head. It asks the zoning question first — will the owner actually live there? — because that one answer decides whether there is a filing at all, and stops the walkthrough dead when the answer means there is not. Then it works out the PDFs to have ready, the answers this business gives on each screen of both applications, the two separate fees paid to two different governments, and the follow-up round where paying is not the last step. A searchable reference to both applications screen by screen — with the full email map, the fees, the Sept 30 renewal and the pitfalls that have actually bitten — sits on the second tab. The third tracks one business across the weeks the two filings take: a checklist pruned to that business, a note on each step, a running log, and a block you paste into the client’s case note in Double, which is both the durable record and how you reopen the case on another machine. Runs entirely in the browser; the only client data it holds is the reference you choose and your own notes.',
    formats: ['In-Hub tool'],
    tool: { id: 'btr-walkthrough', label: 'Open the walkthrough' } },

  { band: 'sop', kind: 'Tax preparation', name: 'Child & Dependent Care — Provider Statement', owner: 'lilian',
    blurb: 'The blank form the care provider (e.g. a cash-paid babysitter) completes and signs to substantiate the Child & Dependent Care Credit when there’s no payment trail. They sign it; the signed copy stays in the client’s systems.',
    formats: ['PDF', 'PNG'],
    downloads: [
      { label: 'Download blank form (PDF)', file: 'child-dependent-care-provider-statement.pdf',
        mime: 'application/pdf', path: 'projects/sops/assets/child-dependent-care-provider-statement.pdf', primary: true },
      { label: 'Download image (PNG)', file: 'child-dependent-care-provider-statement.png',
        mime: 'image/png', path: 'projects/sops/assets/child-dependent-care-provider-statement.png', ghost: true },
    ],
    open: { id: 'child-dependent-care-provider-statement', label: 'Open its SOP' } },

  { band: 'sop', kind: 'Client portal (Double)', name: 'Double Portal — Client Sign-In Guides', owner: 'julia',
    blurb: 'The ready-to-send one-page guides that walk a client through their first sign-in to the Double portal — English & Russian. The full visual guide, plus the email and WhatsApp copy, live in the SOP.',
    formats: ['PDF · EN', 'PDF · RU'],
    downloads: [
      { label: 'Guide PDF — English', file: 'double-first-login-en.pdf',
        mime: 'application/pdf', path: 'projects/sops/client-guides/double-first-login-en.pdf', primary: true },
      { label: 'Guide PDF — Russian', file: 'double-first-login-ru.pdf',
        mime: 'application/pdf', path: 'projects/sops/client-guides/double-first-login-ru.pdf', ghost: true },
    ],
    open: { id: 'double-portal-first-login', label: 'Open its SOP (guide · email · WhatsApp)' } },

  { band: 'sop', kind: 'Client portal (Double)', name: 'Double Portal — “Send Us Information” Guides', owner: 'lilian',
    blurb: 'The ready-to-send one-page guides that show a client how to send us a question, bank details, a document or a photo through the portal — “Qs for us”, four taps on a phone. English & Russian; the email and WhatsApp copy live in the SOP.',
    formats: ['PDF · EN', 'PDF · RU'],
    downloads: [
      { label: 'Guide PDF — English', file: 'double-send-info-en.pdf',
        mime: 'application/pdf', path: 'projects/sops/client-guides/double-send-info-en.pdf', primary: true },
      { label: 'Guide PDF — Russian', file: 'double-send-info-ru.pdf',
        mime: 'application/pdf', path: 'projects/sops/client-guides/double-send-info-ru.pdf', ghost: true },
    ],
    open: { id: 'double-portal-sending-us-information', label: 'Open its SOP (guide · email · WhatsApp)' } },
];

// The proposals-&-pricing tools open in the in-Hub reader like the engagement letter —
// each embeds its self-contained tool in an isolated iframe (rule 0: every tool we build
// is reflected in the Hub). Reader ids match the Templates cards' tool.id above.
readerDocs.push(`<div class="rdoc" data-doc="monthly-proposal-generator" hidden>${monthlyReaderInner()}</div>`);
readerDocs.push(`<div class="rdoc" data-doc="pricing-calculator" hidden>${calcReaderInner()}</div>`);
readerDocs.push(`<div class="rdoc" data-doc="itin-w7-walkthrough" hidden>${itinReaderInner()}</div>`);
readerDocs.push(`<div class="rdoc" data-doc="btr-walkthrough" hidden>${btrToolReaderInner()}</div>`);
readerDocs.push(`<div class="rdoc" data-doc="lilian-notebook" hidden>${notebookReaderInner()}</div>`);

const TARROW = '<svg class="tpl-arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

// One template → a file card with download button(s) + (if it belongs to an SOP) an
// "Open its SOP" trigger. Not an <a> wrapper (it holds interactive children); data-card /
// data-owner / data-text wire it into the shared search + owner filter + empty-hide logic.
function tplCardHtml(t) {
  const ok = t.owner;
  const text = [t.name, t.blurb, t.kind, ownerName(ok), (t.formats || []).join(' '), 'template'].join(' ').toLowerCase();
  const badges = (t.formats || []).map((f) => `<span class="fmt">${esc(f)}</span>`).join('');
  const actions = t.reserved
    ? `<div class="tpl-soon">${IC.doc}<span>In preparation — coming soon</span></div>`
    : `<div class="tpl-actions">`
        + (t.tool ? `<a class="dlbtn big tpl-tool" role="button" tabindex="0" data-open-doc="${t.tool.id}" data-doc-name="${esc(t.name)}">${esc(t.tool.label)}${TARROW}</a>` : '')
        + (t.downloads || []).map((d) => {
        const cls = 'dlbtn' + (d.primary ? ' big' : '') + (d.ghost ? ' ghost' : '');
        return `<a class="${cls}" data-asset="${assetRef(d.mime, d.path)}" download="${esc(d.file)}">${IC.dl}${esc(d.label)}</a>`;
      }).join('') + `</div>`;
  const open = t.open
    ? `<a class="tpl-sop" role="button" tabindex="0" data-open-doc="${t.open.id}" data-doc-name="${esc(t.name)}">${esc(t.open.label)}${TARROW}</a>`
    : '';
  return `
      <div class="hcard doc-card tcard${t.reserved ? ' reserved' : ''}" data-card data-type="tpl" data-owner="${ok}" data-text="${esc(text)}">
        <div class="khead">
          <span class="kkick">${esc(t.kind)}</span>
          ${t.reserved ? '<span class="stat soon"><span class="d"></span>Coming soon</span>' : `<span class="tfmts">${badges}</span>`}
        </div>
        <div class="ttl">${esc(t.name)}</div>
        <p class="blurb">${esc(t.blurb)}</p>
        ${actions}
        <div class="dmeta">
          <span class="owner"><span class="av ${ok}">${esc(ownerName(ok)[0])}</span>${esc(ownerName(ok))}</span>
          ${open}
        </div>
      </div>`;
}

const tplTool = TEMPLATES.filter((t) => t.band === 'tool');
const tplFirm = TEMPLATES.filter((t) => t.band === 'firm');
const tplSop = TEMPLATES.filter((t) => t.band === 'sop');
const tplCount = TEMPLATES.filter((t) => !t.reserved).length;
function tplBandHtml(title, sub, domId, items) {
  if (!items.length) return '';
  return `
      <div class="hband" data-section id="${domId}">
        <div class="hband-hd"><h3>${esc(title)}</h3><p>${sub}</p></div>
        <div class="hgroup" data-group>
          <div class="dgrid">${items.map(tplCardHtml).join('')}</div>
        </div>
      </div>`;
}
const templatesViewHtml = `
    <section class="hview" data-view="tpl" hidden>
      <div class="hview-hd">
        <div class="hview-t"><h2>Templates</h2><span class="ct">${tplCount}</span></div>
        <p class="hview-sub">The firm’s interactive <b>tools</b> and reusable <b>files</b> in one place. <b>Interactive tools</b> open and run right here in the Hub — always the latest version, built from each tool’s own source. <b>Firm templates</b> stand alone; templates that belong to a procedure are indexed here too, with a link to open their SOP. The original always stays in its SOP.</p>
      </div>
      ${tplBandHtml('Interactive tools', 'Self-contained tools that open and run right here in the Hub — always the latest version, rebuilt from each tool’s source so there’s never a second copy to keep in sync.', 'tpl-tool', tplTool)}
      ${tplBandHtml('Firm templates', 'Standalone files that don’t belong to a single procedure — import, copy, or send them as-is.', 'tpl-firm', tplFirm)}
      ${tplBandHtml('From a procedure', 'Blank forms and client-send guides that live inside an SOP — grab them here, or open the SOP for the full context.', 'tpl-sop', tplSop)}
    </section>`;
const tplIndexHtml =
  `<p class="hix-t">Templates</p>`
  + (tplTool.length ? `<a class="hix-a" href="#tpl-tool" data-spy="tpl-tool">Interactive tools<span class="hix-n">${tplTool.filter((t) => !t.reserved).length}</span></a>` : '')
  + (tplFirm.length ? `<a class="hix-a" href="#tpl-firm" data-spy="tpl-firm">Firm templates<span class="hix-n">${tplFirm.filter((t) => !t.reserved).length}</span></a>` : '')
  + (tplSop.length ? `<a class="hix-a" href="#tpl-sop" data-spy="tpl-sop">From a procedure<span class="hix-n">${tplSop.filter((t) => !t.reserved).length}</span></a>` : '');

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
      <span class="chipm"><span class="dot"></span><b data-count="${tplCount}">${tplCount}</b>&nbsp;templates</span>
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
        <button class="viewbtn" role="tab" type="button" data-view-btn="tpl" aria-selected="false">${IC.tpl}<span class="vb-l">Templates</span><span class="vb-n">${tplCount}</span></button>
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
      <nav class="hix" data-index-view="tpl" aria-label="Templates index" hidden>${tplIndexHtml}</nav>

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
${templatesViewHtml}

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
        <p>The firm's single front door to every documented procedure and client. Procedures open as a designed page in the reader; client cards expand in place. Search or filter to find anything in seconds.</p>
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

  // ---- Embedded assets -----------------------------------------------------
  // Each binary is base64'd into the page ONCE (see assetRef in the generator) and
  // wired onto its <img>/<a> here. This MUST run before the a[download][href^="data:"]
  // interceptor below binds, or the download links won't match its selector yet.
  ${assetTableJs()}
  [].forEach.call(document.querySelectorAll('[data-asset]'), function(el){
    var u = ASSET_TABLE[el.getAttribute('data-asset')];
    if(!u) return;
    if(el.tagName === 'IMG') el.setAttribute('src', u); else el.setAttribute('href', u);
  });

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
  // capability in the sandbox, a Blob download on the real host.
  // NOTE: for every binary the href is set by the asset resolver above, not by the
  // generator, so this selector only matches once that has run — keep the order.
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

// GUARD: every SOP's "process at a glance" must render as a DESIGNED flow (a `flow` config
// → .pcflow), never a bare Mermaid block (the sop-authoring + knowledge-hub house rule). If
// this fires, give the offending SOP a `flow` config so its reader stops shipping raw Mermaid.
const bareMermaid = readerDocs
  .filter((d) => /class="mermaid"/.test(d))
  .map((d) => (d.match(/data-doc="([^"]+)"/) || [])[1] || '(unknown)');
if (bareMermaid.length) {
  console.error(`⚠️  BARE MERMAID in SOP reader(s): ${bareMermaid.join(', ')} — the "process at a glance" must be a DESIGNED flow (a \`flow\` config → .pcflow), never raw Mermaid. See the sop-authoring + knowledge-hub skills.`);
}

const assetCheck = assertAssetsResolvable(html);   // throws rather than shipping a dead download

const outStandalone = resolve(here, 'index.html');
// Artifact fragment (body-only; the Artifact tool supplies <head>/<body>)
const fragment = `<title>JK Accounting Group — Knowledge Hub</title>\n<style>\n${style}</style>\n\n${BODY.trim()}\n`;
const outFrag = resolve(here, 'scratch/hub.artifact.html');

// The ceiling is checked BEFORE anything is written. Setting exitCode after writing the
// files and printing "Hub built: …" is the pattern this same build replaced with die()
// in inlineToolDoc — it leaves an unpublishable page on disk under a success message,
// and whoever reads the log top-down sees the success first.
// Buffer.byteLength, not .length: a JS string's length counts UTF-16 code units, and this
// page is full of em dashes, arrows and Cyrillic. index.html measured ~13,000 units short
// of its real byte size — so the guard under-reported and could pass a page that then
// fails at publish, which is the one moment it exists to prevent.
const CEILING = 16 * 1024 * 1024;
const biggest = Math.max(Buffer.byteLength(html, 'utf8'), Buffer.byteLength(fragment, 'utf8'));
const pct = (biggest / CEILING) * 100;
if (biggest > CEILING) {
  die(`✗ OVER THE 16MB ARTIFACT CEILING (${pct.toFixed(0)}%) — this will not publish.`,
      '✗ nothing was written. Drop or shrink an embedded tool, then rebuild.');
}

writeFileSync(outStandalone, html);
// scratch/ is gitignored, so it is absent in a fresh clone — create it rather than throwing ENOENT
mkdirSync(dirname(outFrag), { recursive: true });
writeFileSync(outFrag, fragment);

console.error(`Hub built: ${sopCount} procedures + ${clientCount} clients = ${totalCount} documents`);
console.error(`standalone → ${outStandalone} (${(Buffer.byteLength(html,'utf8')/1024).toFixed(0)}KB)`);
console.error(`fragment   → ${outFrag} (${(Buffer.byteLength(fragment,'utf8')/1024).toFixed(0)}KB)`);
console.error(`assets     → ${assetCheck.embedded} binaries embedded once, used in ${assetCheck.sites} places — 16MB is the Artifact ceiling`);

// Say how close we are to that ceiling, every build. The Hub only grows — each embedded
// tool re-inlines its own font payload inside its iframe, and a strict CSP forbids
// sharing them across iframes, so a new tool costs ~0.9MB and there is no dedupe to do.
// Without this line the ceiling is discovered at PUBLISH time, with the work already
// finished and nothing staged to cut. (Over the ceiling is handled above, before writing.)
if (pct >= 70) {
  console.error(`⚠ ${pct.toFixed(0)}% of the 16MB Artifact ceiling — roughly ${Math.floor((CEILING - biggest) / (0.95 * 1024 * 1024))} more embedded tool(s) of the current size will fit.`);
} else {
  console.error(`size       → ${pct.toFixed(0)}% of the 16MB Artifact ceiling`);
}
