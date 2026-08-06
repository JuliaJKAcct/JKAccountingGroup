#!/usr/bin/env node
/*
  Lilian's Notebook — render engine.

  Reads the Markdown in projects/lilian-notebook/notes/ and emits ONE self-contained,
  on-brand, searchable page. The .md files are the source of truth; this page is a view
  — never hand-edit the output.

  It renders on the SHARED Atlas assets (the SOP render's atlas.css + the brand's
  embedded fonts), so the notebook reads as one family with every SOP and the Knowledge
  Hub. Notebook-only components live in NOTEBOOK_CSS below and compose from Atlas tokens
  only — no new colors, no new fonts.

  Usage
    node projects/lilian-notebook/render/build.mjs
      → projects/lilian-notebook/notebook.html            (standalone; open locally)
      → projects/lilian-notebook/scratch/notebook.artifact.html  (body-only; publish this)

  Also exports buildNotebookDoc() so the Knowledge Hub can embed the SAME page from the
  same source — one engine, no second copy to keep in sync.
*/
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));      // …/render
const projRoot = resolve(here, '..');                      // …/lilian-notebook
export const repoRoot = resolve(here, '../../..');         // repo root

const read = (p) => readFileSync(p, 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ------------------------------------------------------------------ categories
   Order, display name and slug for each file in notes/. A new category = a new
   .md file + a row here. The h1 inside the file supplies nothing but a sanity
   check; the label below is what the page shows. */
const CATEGORIES = [
  { file: 'platforms.md', slug: 'platforms', label: 'Platforms & vendors' },
  { file: 'costs.md',     slug: 'costs',     label: 'Costs, fees & scope' },
];

/* --------------------------------------------------------------- md inline
   Bold / italic / code, and links. Repo-relative links are rendered as PLAIN
   REFERENCE TEXT, not anchors: this page is read from a shareable link and from
   inside the Hub, where a path into the repo would 404 (and team-facing pages
   never link at repo files). Real http(s) links stay real links. */
function mdInline(s) {
  let out = esc(s);
  const code = [];
  out = out.replace(/`([^`]+)`/g, (_, c) => { code.push(c); return `\u0000${code.length - 1}\u0000`; });
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) =>
    /^https?:\/\//i.test(href)
      ? `<a href="${esc(href)}" target="_blank" rel="noopener">${text}</a>`
      : `<span class="ref">${text}</span>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  out = out.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<i>$2</i>');
  out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(code[+i])}</code>`);
  return out;
}
// Same, minus the <b>/<i> wrappers — for text that already sits in a styled slot.
const mdPlain = (s) => mdInline(s).replace(/<\/?b>/g, '').replace(/<\/?i>/g, '');

/* One body block → a <p>, or a real list when the block is one. Procedure notes are the
   reason this exists: "how you do X" is an ordered list, and rendering it as a paragraph
   runs the steps together. `pClass` styles the paragraphs of the always-visible rule block. */
function mdBlock(block, pClass) {
  const lines = block.split('\n');
  const marker = /^\s*(\d+[.)]|[-*•])\s+/;
  if (!marker.test(lines[0])) {
    return `<p${pClass ? ` class="${pClass}"` : ''}>${mdInline(block)}</p>`;
  }
  const ordered = /^\s*\d/.test(lines[0]);
  const items = [];
  for (const line of lines) {
    if (marker.test(line)) items.push(line.replace(marker, ''));
    else if (items.length) items[items.length - 1] += ' ' + line.trim();   // wrapped line
  }
  return `<${ordered ? 'ol' : 'ul'} class="nlist">`
    + items.map((i) => `<li>${mdInline(i)}</li>`).join('')
    + `</${ordered ? 'ol' : 'ul'}>`;
}

/* -------------------------------------------------------------------- parsing */
function parseCategory(cat) {
  const raw = read(resolve(projRoot, 'notes', cat.file)).replace(/\r\n/g, '\n');
  const blocks = raw.split(/\n## /);
  const head = blocks.shift();
  const headLines = head.split('\n').filter((l) => l.trim() && !l.startsWith('#'));
  const blurb = headLines.join(' ').trim();

  const notes = blocks.map((block) => {
    const lines = block.split('\n');
    const heading = lines.shift().trim();                       // "LN-01 — Title"
    const m = heading.match(/^(LN-\d+)\s*[—–-]\s*(.+)$/);
    if (!m) throw new Error(`${cat.file}: heading is not "LN-## — Title": ${heading}`);
    const [, id, title] = m;

    // Metadata: the consecutive "- **Key:** value" lines right after the heading.
    const meta = {};
    while (lines.length) {
      const line = lines[0];
      if (!line.trim()) { lines.shift(); continue; }
      const f = line.match(/^-\s+\*\*([^:*]+):?\*\*:?\s*(.*)$/);
      if (!f) break;
      meta[f[1].trim().toLowerCase()] = f[2].trim();
      lines.shift();
    }

    // Body: paragraphs, bucketed by their leading **label**. The label may carry a suffix —
    // "**The rule — the order, and why it's that order.**" — so a procedure note can say what
    // kind of rule it is; only the keyword picks the bucket.
    const LABEL = /^\*\*(What happened|The rule)\b[^*]*\*\*\s*/i;
    const paras = lines.join('\n').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    const story = [], rule = [];
    let bucket = story;
    for (const p of paras) {
      const lab = p.match(LABEL);
      if (lab) bucket = /rule/i.test(lab[1]) ? rule : story;
      const text = p.replace(LABEL, '');
      if (text) bucket.push(text);
    }
    if (!rule.length) throw new Error(`${cat.file} / ${id}: no "**The rule.**" paragraph`);

    return {
      id, title, cat,
      tags: (meta.tags || '').split(/\s*·\s*|\s*,\s*/).filter(Boolean),
      certainty: meta.certainty || '',
      star: /^y/i.test(meta.star || ''),
      added: meta.added || '',
      updated: meta.updated || '',
      from: meta['came from'] || '',
      detail: meta.detail || '',
      story, rule,
    };
  });
  return { ...cat, blurb, notes };
}

function loadNotes() {
  const known = new Set(CATEGORIES.map((c) => c.file));
  for (const f of readdirSync(resolve(projRoot, 'notes'))) {
    if (f.endsWith('.md') && !f.startsWith('_') && !known.has(f)) {
      throw new Error(`notes/${f} has no row in CATEGORIES (render/build.mjs) — add one so it shows on the page.`);
    }
  }
  const cats = CATEGORIES.map(parseCategory);
  const ids = new Map();
  for (const c of cats) for (const n of c.notes) {
    if (ids.has(n.id)) throw new Error(`Duplicate ${n.id} — in ${ids.get(n.id)} and ${c.file}`);
    ids.set(n.id, c.file);
  }
  // A note that points at a retired note is worse than no pointer at all: the reader chases
  // an ID that isn't there. Notes get pruned (Lilian curates hers hard), so check every
  // cross-reference on every build.
  for (const c of cats) for (const n of c.notes) {
    const body = [...n.rule, ...n.story].join(' ');
    for (const ref of new Set([...body.matchAll(/\bLN-\d+\b/g)].map((m) => m[0]))) {
      if (ref !== n.id && !ids.has(ref)) {
        throw new Error(`${c.file} / ${n.id} points at ${ref}, which no longer exists — rewrite the sentence or restore the note.`);
      }
    }
  }
  return cats;
}

/* -------------------------------------------------------------------- markup */
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2l2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L12 17l-5.4 2.9 1.2-6.1L3.2 9.6l6.2-.7z"/></svg>';
const CHEV = '<svg class="nchev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
const JKMARK = '<svg viewBox="18 20 82 72" class="jkmark" aria-hidden="true"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"/><path d="M70 26 L70 86"/><path d="M70 56 L92 26"/><path d="M70 56 L95 86"/></svg>';

const MEDALLION = `<svg class="medallion" viewBox="0 0 120 120" role="img" aria-label="JK Accounting Group medallion">
  <defs><path id="nbArcTop" d="M20.9 51.7 A40 40 0 0 1 99.1 51.7" fill="none"></path><path id="nbArcBot" d="M20.9 68.3 A40 40 0 0 0 99.1 68.3" fill="none"></path></defs>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#ECE6DA" stroke-width="3"></circle>
  <circle cx="60" cy="60" r="50.5" fill="none" stroke="#CFA268" stroke-width="1"></circle>
  <text font-family="'IBM Plex Mono',monospace" font-size="6" letter-spacing="1.6" fill="#ECE6DA" text-anchor="middle"><textPath href="#nbArcTop" startOffset="50%">JK ACCOUNTING GROUP</textPath></text>
  <text font-family="'IBM Plex Mono',monospace" font-size="5" letter-spacing="1.4" fill="#ECE6DA" text-anchor="middle"><textPath href="#nbArcBot" startOffset="50%">TAX · BOOKKEEPING · CFO</textPath></text>
  <g fill="#CFA268"><path d="M7 56.5 l3.5 3.5 -3.5 3.5 -3.5 -3.5 z"></path><path d="M113 56.5 l3.5 3.5 -3.5 3.5 -3.5 -3.5 z"></path></g>
  <g transform="translate(60,60) scale(0.44) translate(-59,-56)"><g fill="none" stroke="#ECE6DA" stroke-width="9" stroke-linecap="butt" stroke-linejoin="miter"><path d="M55 26 L55 70 Q55 86 39 86 Q26 86 23.5 74.5"></path><path d="M70 26 L70 86"></path><path d="M70 56 L92 26"></path><path d="M70 56 L95 86"></path></g></g>
</svg>`;

function noteHtml(n) {
  const haystack = [n.id, n.title, n.tags.join(' '), n.from, n.detail, n.certainty,
    n.rule.join(' '), n.story.join(' ')].join(' ').replace(/\*\*|`/g, '');
  const certKind = /working assumption|unverified/i.test(n.certainty) ? 'soft'
    : /firm rule/i.test(n.certainty) ? 'rule' : 'firm';
  return `<article class="note${n.star ? ' starred' : ''}" id="${n.id}" data-cat="${n.cat.slug}"`
    + ` data-star="${n.star ? '1' : '0'}" data-q="${esc(haystack.toLowerCase())}">
  <div class="nhead">
    <span class="nid">${n.id}</span>
    ${n.star ? `<span class="nstar" title="Marked important">${STAR}</span>` : ''}
    <h3>${mdPlain(n.title)}</h3>
  </div>
  <div class="nrule">${n.rule.map((b) => mdBlock(b, 'nr')).join('\n  ')}</div>
  <details class="nmore">
    <summary>${CHEV}<span>What happened</span><span class="nfrom">${mdPlain(n.from)}</span></summary>
    <div class="nbody">
      ${n.story.map((b) => mdBlock(b)).join('\n      ')}
      ${n.detail ? `<p class="nsrc"><b>Full record:</b> ${mdPlain(n.detail)}</p>` : ''}
    </div>
  </details>
  <div class="nfoot">
    <span class="ncert ${certKind}">${esc(n.certainty || 'Recorded')}</span>
    ${n.tags.map((t) => `<button class="ntag" type="button" data-tag="${esc(t)}">${esc(t)}</button>`).join('')}
    <span class="ndate">${esc(n.updated ? `${n.added} · updated ${n.updated}` : n.added)}</span>
  </div>
</article>`;
}

/* opts.embedded — the Knowledge Hub variant. The Hub's reader already supplies the
   toolbar and a masthead with this exact title and tagline, so repeating our own would
   print the heading twice; drop the page chrome and start at the search bar. */
export function buildNotebookBody(opts = {}) {
  const embedded = !!opts.embedded;
  const cats = loadNotes();
  const all = cats.flatMap((c) => c.notes);
  const starred = all.filter((n) => n.star).length;
  const dates = all.map((n) => n.updated || n.added).filter(Boolean).sort();
  const latest = dates[dates.length - 1] || '';

  const chips = [
    `<button class="fchip on" type="button" data-filter="all">All<span class="fn">${all.length}</span></button>`,
    `<button class="fchip star" type="button" data-filter="star">${STAR}Starred<span class="fn">${starred}</span></button>`,
    ...cats.map((c) => `<button class="fchip" type="button" data-filter="${c.slug}">${esc(c.label)}<span class="fn">${c.notes.length}</span></button>`),
  ].join('');

  const sections = cats.map((c) => `<section class="cat" id="cat-${c.slug}" data-cat="${c.slug}">
  <div class="chead">
    <h2>${esc(c.label)}</h2>
    <p>${mdInline(c.blurb)}</p>
  </div>
  ${c.notes.map(noteHtml).join('\n  ')}
</section>`).join('\n\n');

  const chrome = `<header class="bar">
  <div class="in">
    <div class="lhs">
      ${JKMARK}
      <b>JK Accounting Group</b>
      <span class="sep"></span>
      <span class="k">Lilian's Notebook</span>
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

<section class="mast">
  <div class="in">
    ${MEDALLION}
    <p class="kick">Personal notebook · Lilian</p>
    <h1>Lilian's Notebook<span class="loc">Lessons worth not learning twice</span></h1>
    <p class="lede">The hard knowledge, kept deliberately small: <b>how a system actually behaves</b>,
    <b>what something costs</b>, <b>what's inside a fee</b>, and <b>how to carry out a procedure</b> —
    each written as the rule to follow next time. The paper notebook, except searchable, and it never
    falls out of date.</p>
    <div class="meta">
      <span class="chipm live"><span class="dot"></span>${all.length}&nbsp;<b>notes</b></span>
      <span class="chipm"><span class="dot"></span>${starred}&nbsp;<b>starred</b></span>
      <span class="chipm"><span class="dot"></span>Last added:&nbsp;<b>${esc(latest)}</b></span>
    </div>
  </div>
</section>`;

  const foot = `<footer class="foot">
  <div class="in">
    <div class="row">
      ${JKMARK}
      <div>
        <b>JK Accounting Group</b>
        <p>Lilian's personal notebook · internal reference. The Markdown in
        <code>projects/lilian-notebook/notes/</code> is the single source of truth — this page is a
        generated view of it. No client secrets, figures, or personal data live here; those stay in
        Double, Drive and QuickBooks.</p>
      </div>
    </div>
    <div class="bottom">
      <span>Miami · Fort Lauderdale · Online</span>
      <span>${all.length} notes · ${cats.length} categories</span>
    </div>
  </div>
</footer>`;

  return `${embedded ? '' : chrome}

<div class="ctl" id="ctl">
  <div class="in">
    <div class="srch">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4.3-4.3"/></svg>
      <input id="q" type="search" placeholder="Search the notebook — gusto, penalty, quickbooks, LN-14…" aria-label="Search the notebook" autocomplete="off" spellcheck="false">
      <button class="clr" id="clr" type="button" aria-label="Clear search" hidden>&times;</button>
      <kbd class="hint">/</kbd>
    </div>
    <div class="chips" role="group" aria-label="Filter by category">${chips}</div>
  </div>
</div>

<main>
  <p class="nores" id="nores" hidden>Nothing matches that. <button type="button" id="reset">Show all ${all.length} notes</button></p>

${sections}

  <section class="addnote">
    <h2>Adding a note</h2>
    <p>Just say it in a session — <i>“anota esto en mi libreta”</i> — and it gets written up in the
    right category, with the full record linked, and this page rebuilt. Claude also proposes an
    entry unprompted whenever a session turns up something worth keeping; you approve it or you
    don’t. The Markdown in <code>projects/lilian-notebook/notes/</code> is the master — this page is
    only a view of it.</p>
  </section>
</main>

${embedded ? '' : foot}`;
}

/* ----------------------------------------------------------------- notebook CSS
   Composes from Atlas tokens ONLY (see atlas.css :root) — no new colors or fonts.
   Product register: fixed rem scale, one family, restrained color, familiar
   affordances, 150–200ms transitions that convey state. */
export const NOTEBOOK_CSS = `
/* Bold inside the masthead lede: something upstream resolves <b> to var(--ink), which in the
   LIGHT theme is near-black teal on the always-dark masthead — invisible. Scoped fix here
   rather than in the shared atlas.css, which every SOP render depends on. */
.mast .lede b{color:#FFFFFF;font-weight:650}

/* ---- sticky control bar ----
   top:56px is atlas.css's .bar height — anything less and the toolbar (z 100) paints
   over the search field. Keep the two in step if .bar ever changes height. */
.ctl{position:sticky;top:56px;z-index:40;background:color-mix(in srgb,var(--bg) 88%,transparent);
  backdrop-filter:saturate(1.1) blur(8px);border-bottom:1px solid var(--border-subtle)}
.ctl>.in{max-width:var(--maxw);margin:0 auto;padding:12px var(--gutter) 11px;display:flex;flex-direction:column;gap:10px}
.srch{position:relative;display:flex;align-items:center}
.srch>svg{position:absolute;left:12px;width:17px;height:17px;color:var(--muted);pointer-events:none}
.srch input{width:100%;font:500 .95rem/1.4 var(--sans);color:var(--ink);background:var(--surface);
  border:1px solid var(--border);border-radius:9px;padding:10px 74px 10px 36px;
  transition:border-color .18s var(--ease-out),box-shadow .18s var(--ease-out);appearance:none}
.srch input::placeholder{color:var(--muted);opacity:1}
.srch input::-webkit-search-cancel-button{display:none}
.srch input:hover{border-color:var(--greige-400)}
.srch input:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 22%,transparent)}
.srch .clr[hidden]{display:none}
.srch .clr{position:absolute;right:40px;width:22px;height:22px;display:grid;place-items:center;border:0;
  border-radius:50%;background:var(--greige-200);color:var(--body);font-size:15px;line-height:1;cursor:pointer;
  transition:background .15s var(--ease-out)}
:root[data-theme="dark"] .srch .clr{background:rgba(236,230,218,.16)}
.srch .clr:hover{background:var(--greige-300)}
.srch .hint{position:absolute;right:11px;font:600 .7rem/1 var(--mono);color:var(--muted);
  border:1px solid var(--border);border-radius:5px;padding:4px 6px;background:var(--paper)}
.srch input:focus~.hint{opacity:0}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.fchip{display:inline-flex;align-items:center;gap:6px;font:600 .78rem/1 var(--sans);color:var(--muted);
  background:transparent;border:1px solid var(--border);border-radius:999px;padding:7px 11px;cursor:pointer;
  transition:color .15s var(--ease-out),border-color .15s var(--ease-out),background .15s var(--ease-out)}
.fchip:hover{color:var(--ink);border-color:var(--greige-400)}
.fchip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.fchip.on{color:var(--teal-900);background:var(--pill-teal-bg);border-color:transparent}
:root[data-theme="dark"] .fchip.on{color:var(--pill-teal-ink)}
.fchip .fn{font:600 .68rem/1 var(--mono);opacity:.62}
.fchip.star svg{width:12px;height:12px;fill:currentColor}
.fchip.star.on{color:var(--bronze-700);background:var(--pill-bronze-bg)}
:root[data-theme="dark"] .fchip.star.on{color:var(--pill-bronze-ink)}

/* ---- layout ---- */
main{max-width:var(--maxw);margin:0 auto;padding:26px var(--gutter) 60px}
.cat{margin:0 0 34px}
.cat[hidden]{display:none}
.chead{padding:0 0 12px;border-bottom:1px solid var(--border);margin-bottom:6px}
.chead h2{font:600 1.32rem/1.25 var(--serif);color:var(--ink);margin:0 0 5px;letter-spacing:-.01em}
.chead p{font:400 .88rem/1.55 var(--sans);color:var(--muted);margin:0;max-width:62ch}

/* ---- a note ---- */
.note{padding:18px 0 16px;border-bottom:1px solid var(--border-subtle)}
.note[hidden]{display:none}
.note:target{scroll-margin-top:130px}
.note:target .nhead h3{color:var(--accent-2)}
.nhead{display:flex;align-items:baseline;gap:9px;flex-wrap:wrap}
.nid{font:600 .7rem/1.5 var(--mono);color:var(--muted);letter-spacing:.04em;padding-top:2px;flex:none}
.nstar{flex:none;line-height:0;padding-top:3px}
.nstar svg{width:13px;height:13px;fill:var(--accent);stroke:none}
.nhead h3{font:600 1.06rem/1.4 var(--sans);color:var(--ink);margin:0;letter-spacing:-.008em;
  flex:1 1 320px;min-width:0;text-wrap:pretty}
.nrule{margin:9px 0 0}
.nrule .nr,.nbody p{text-wrap:pretty}
.nrule .nr{font:400 .95rem/1.65 var(--sans);color:var(--body);margin:0 0 8px;max-width:70ch}
.nrule .nr:last-child{margin-bottom:0}
.nrule b,.nrule .nlist b{font-weight:650;color:var(--ink)}
/* Procedure steps — the ordered list a "how you do X" note is made of. Counters sit in the
   left margin so the step text keeps one clean left edge. */
.nlist{margin:8px 0 0;padding:0;list-style:none;counter-reset:nstep;max-width:70ch}
.nlist li{position:relative;padding-left:30px;margin:0 0 9px;font:400 .93rem/1.6 var(--sans);color:var(--body)}
.nlist li:last-child{margin-bottom:0}
.nlist.nlist li{counter-increment:nstep}
ol.nlist li::before{content:counter(nstep);position:absolute;left:0;top:1px;width:20px;height:20px;
  display:grid;place-items:center;border-radius:50%;background:var(--pill-teal-bg);color:var(--pill-teal-ink);
  font:600 .68rem/1 var(--mono)}
ul.nlist li::before{content:"";position:absolute;left:9px;top:.62em;width:5px;height:5px;border-radius:50%;
  background:var(--accent)}
.nbody .nlist li{font-size:.9rem;color:var(--muted)}
.nbody .nlist b{color:var(--body)}
.nrule code,.nbody code{font:500 .84em/1 var(--mono);background:var(--note-bg);border:1px solid var(--note-bd);
  border-radius:4px;padding:2px 5px;color:var(--note-text)}
.ref{font:500 .89em/1 var(--mono);color:var(--muted)}

/* ---- expandable story ---- */
.nmore{margin:11px 0 0}
.nmore summary{display:flex;align-items:center;gap:7px;cursor:pointer;list-style:none;width:fit-content;
  max-width:100%;font:600 .78rem/1.4 var(--sans);color:var(--accent-2);padding:3px 0;
  transition:color .15s var(--ease-out)}
.nmore summary::-webkit-details-marker{display:none}
.nmore summary:hover{color:var(--accent)}
.nmore summary:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
.nchev{width:14px;height:14px;flex:none;transition:transform .18s var(--ease-out)}
.nmore[open] .nchev{transform:rotate(180deg)}
.nfrom{font:400 .76rem/1.4 var(--sans);color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nfrom::before{content:"· "}
.nbody{padding:8px 0 2px 21px;border-left:1px solid var(--border-subtle);margin-left:1px}
.nbody p{font:400 .9rem/1.62 var(--sans);color:var(--muted);margin:0 0 9px;max-width:68ch;text-wrap:pretty}
.nbody p:last-child{margin-bottom:0}
.nbody b{font-weight:650;color:var(--body)}
.nsrc{font-size:.8rem!important;padding-top:3px}
@media (prefers-reduced-motion:reduce){.nchev{transition:none}}

/* ---- footer meta ---- */
.nfoot{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:12px 0 0}
.ncert{font:600 .68rem/1 var(--mono);border-radius:5px;padding:5px 7px;letter-spacing:.02em;white-space:nowrap}
.ncert.firm{background:var(--ok-bg);color:var(--ok-text);border:1px solid var(--ok-bd)}
.ncert.rule{background:var(--pill-teal-bg);color:var(--pill-teal-ink);border:1px solid transparent}
.ncert.soft{background:var(--warn-bg);color:var(--warn-text);border:1px solid var(--warn-bd)}
.ntag{font:500 .72rem/1 var(--sans);color:var(--muted);background:transparent;border:1px solid var(--border-subtle);
  border-radius:999px;padding:5px 9px;cursor:pointer;transition:color .15s var(--ease-out),border-color .15s var(--ease-out)}
.ntag:hover{color:var(--accent-2);border-color:var(--accent)}
.ntag:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.ndate{font:500 .7rem/1 var(--mono);color:var(--muted);opacity:.75;margin-left:auto;flex:none}

/* ---- empty state + closing note ---- */
.nores{font:500 .95rem/1.6 var(--sans);color:var(--muted);text-align:center;padding:44px 0 30px;margin:0}
.nores[hidden]{display:none}
.nores button{font:600 .95rem/1.6 var(--sans);color:var(--accent-2);background:none;border:0;
  border-bottom:1px solid currentColor;padding:0;cursor:pointer}
.addnote{margin:12px 0 0;padding:20px 22px;background:var(--note-bg);border:1px solid var(--note-bd);border-radius:12px}
.addnote h2{font:600 1rem/1.3 var(--sans);color:var(--ink);margin:0 0 7px}
.addnote p{font:400 .88rem/1.6 var(--sans);color:var(--muted);margin:0;max-width:70ch}

@media (max-width:640px){
  .ctl>.in{padding:10px var(--gutter)}
  /* One scrolling row instead of three wrapped ones — the sticky header must not eat
     a third of a phone screen. */
  .chips{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding-bottom:1px}
  .chips::-webkit-scrollbar{display:none}
  .fchip{flex:none}
  .srch .hint{display:none}
  .srch input{padding-right:44px}
  .nfoot .ndate{margin-left:0;width:100%}
  .nfrom{display:none}
}
@media print{
  .ctl,.nores,.addnote{display:none!important}
  .note,.cat{break-inside:avoid;page-break-inside:avoid}
  .nbody{display:block!important}
  .nmore summary{display:none}
  .ntag{border-color:#bbb}
}
`;

/* ------------------------------------------------------------------- the script
   Enhancement only: every note is visible with JS off. */
const NOTEBOOK_JS = `(function(){
  var root=document.documentElement; root.classList.add('js');
  function isDark(){var t=root.getAttribute('data-theme');
    return t? t==='dark' : !!(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);}
  var tb=document.getElementById('themeBtn');
  if(tb) tb.addEventListener('click',function(){root.setAttribute('data-theme',isDark()?'light':'dark');});
  var pb=document.getElementById('printBtn');
  if(pb) pb.addEventListener('click',function(){window.print();});

  // Embedded in the Knowledge Hub (a same-origin srcdoc iframe, with no toolbar of its own):
  // follow the Hub's theme, including when the reader toggles it, instead of drifting to the
  // system setting and looking like a different page.
  if(window.parent&&window.parent!==window){
    try{
      var host=window.parent.document.documentElement;
      var sync=function(){
        var t=host.getAttribute('data-theme');
        if(t) root.setAttribute('data-theme',t); else root.removeAttribute('data-theme');
      };
      sync();
      new window.MutationObserver(sync).observe(host,{attributes:true,attributeFilter:['data-theme']});
    }catch(e){/* cross-origin host — keep the system theme */}
  }

  var q=document.getElementById('q'), clr=document.getElementById('clr'),
      nores=document.getElementById('nores'), reset=document.getElementById('reset'),
      notes=[].slice.call(document.querySelectorAll('.note')),
      cats=[].slice.call(document.querySelectorAll('.cat')),
      chips=[].slice.call(document.querySelectorAll('.fchip')),
      filter='all';

  function apply(){
    var term=(q.value||'').trim().toLowerCase(), shown=0;
    notes.forEach(function(n){
      var okF = filter==='all' || (filter==='star' ? n.dataset.star==='1' : n.dataset.cat===filter);
      var okQ = !term || n.dataset.q.indexOf(term)>-1;
      var on = okF && okQ;
      n.hidden = !on; if(on) shown++;
    });
    cats.forEach(function(c){
      c.hidden = !c.querySelector('.note:not([hidden])');
    });
    nores.hidden = shown>0;
    clr.hidden = !term;
  }
  q.addEventListener('input',apply);
  clr.addEventListener('click',function(){q.value='';apply();q.focus();});
  reset.addEventListener('click',function(){q.value='';setFilter('all');});

  function setFilter(f){
    filter=f;
    chips.forEach(function(c){c.classList.toggle('on',c.dataset.filter===f);});
    apply();
  }
  chips.forEach(function(c){c.addEventListener('click',function(){setFilter(c.dataset.filter);});});
  apply(); // sync the clear button etc. in case the browser restored a search term

  // A tag is a search shortcut — the fastest way to "everything about Gusto".
  [].slice.call(document.querySelectorAll('.ntag')).forEach(function(t){
    t.addEventListener('click',function(){
      q.value=t.dataset.tag; setFilter('all');
      window.scrollTo({top:0,behavior:(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)?'auto':'smooth'});
    });
  });

  // "/" focuses search, Escape clears it.
  document.addEventListener('keydown',function(e){
    if(e.key==='/'&&document.activeElement!==q){e.preventDefault();q.focus();q.select();}
    else if(e.key==='Escape'&&document.activeElement===q){q.value='';apply();q.blur();}
  });

  // Deep link (#LN-14): open its story so the link lands on the whole note.
  // The brand fonts are embedded and the page is long, so the document keeps reflowing
  // for a moment after the script runs — scroll once and the reader lands somewhere else
  // entirely. So re-scroll on every document-height change until it stops moving, and
  // give up the moment the reader scrolls for themselves.
  var followTimer=null, followObs=null;
  function stopFollowing(){
    if(followTimer){clearTimeout(followTimer);followTimer=null;}
    if(followObs){followObs.disconnect();followObs=null;}
  }
  ['wheel','touchstart','keydown'].forEach(function(ev){
    window.addEventListener(ev,stopFollowing,{passive:true,once:true});
  });
  function openHash(){
    var id=(location.hash||'').slice(1); if(!/^LN-\\d+$/.test(id)) return;
    var el=document.getElementById(id); if(!el) return;
    var d=el.querySelector('.nmore'); if(d) d.open=true;
    var go=function(){ el.scrollIntoView({block:'center'}); };
    stopFollowing(); go();
    if('ResizeObserver' in window){
      followObs=new ResizeObserver(function(){ requestAnimationFrame(go); });
      followObs.observe(document.documentElement);
      followTimer=setTimeout(stopFollowing,2000);   // settled by now, or never will be
    }
  }
  window.addEventListener('hashchange',openHash); openHash();
})();`;

/* --------------------------------------------------------- assembled documents */
function assemble(opts = {}) {
  const atlas = read(resolve(repoRoot, '.claude/skills/sop-authoring/render/atlas.css'));
  const fonts = read(resolve(repoRoot, 'brand/design-system/fonts-embedded.css'));
  const title = "Lilian's Notebook — JK Accounting Group";
  // Embedded: no toolbar above the control bar, so it sticks to the top of the iframe.
  const embedCss = opts.embedded ? '\n.ctl{top:0}\nmain{padding-top:20px}\n' : '';
  const style = `${fonts.trimEnd()}\n\n${atlas.trimEnd()}\n${NOTEBOOK_CSS}${embedCss}`;
  const fragment = `<title>${title}</title>\n<style>\n${style}\n</style>\n\n`
    + `${buildNotebookBody(opts)}\n\n<script>\n${NOTEBOOK_JS}\n</script>\n`;

  const favicon = 'data:image/svg+xml;base64,'
    + Buffer.from(read(resolve(repoRoot, 'brand/logo/favicon/favicon.svg'))).toString('base64');
  const cut = fragment.indexOf('</style>') + '</style>'.length;
  const standalone = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Lilian's working notebook — the lessons this firm learned the hard way, each written as the rule to follow next time.">
<link rel="icon" href="${favicon}">
${fragment.slice(0, cut)}
</head>
<body>
${fragment.slice(cut).trimStart()}
</body>
</html>
`;
  return { fragment, standalone };
}

/** The full self-contained page, for embedding in an iframe (the Knowledge Hub).
    Pass {embedded:true} there so the Hub's own reader masthead isn't duplicated. */
export function buildNotebookDoc(opts = {}) { return assemble(opts).standalone; }

if (process.argv[1] && resolve(process.argv[1]) === resolve(here, 'build.mjs')) {
  const { fragment, standalone } = assemble();
  mkdirSync(resolve(projRoot, 'scratch'), { recursive: true });
  writeFileSync(resolve(projRoot, 'notebook.html'), standalone);
  writeFileSync(resolve(projRoot, 'scratch/notebook.artifact.html'), fragment);
  const cats = loadNotes();
  const n = cats.reduce((a, c) => a + c.notes.length, 0);
  console.error(`notebook.html            ${(standalone.length / 1024).toFixed(0)}KB · ${n} notes in ${cats.length} categories`);
  console.error(`scratch/notebook.artifact.html  ${(fragment.length / 1024).toFixed(0)}KB  ← publish this one`);
}
