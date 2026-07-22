---
name: knowledge-hub
description: Build, extend, or fix the firm's Knowledge Hub — the single on-brand page (projects/knowledge-hub/) that indexes every SOP and every client, opens each document as a designed page in an in-page reader, and carries tools like the Chart-of-Accounts CSV builder. Use when adding or changing what the Hub shows, adding/curating an SOP or a client on it, changing the reader or a tool, restyling a Hub page, or (re)publishing its shareable link. Encodes what the Hub is for and Lilian's standing preferences (team-facing = designed, never GitHub/repo-file links; SOPs open INSIDE the Hub; client cards reuse the client-intelligence engine; bookkeeping SOPs are visual/dynamic — flowcharts, schemas, tables — always via the impeccable skill + the Atlas design system), the self-contained/portable-to-Odoo constraint, and the verify-before-publish gate that prevents whole-page-JS breakage. Read before touching projects/knowledge-hub/ or its build.
---

# Knowledge Hub — the house way

The engine behind [`projects/knowledge-hub/`](../../../projects/knowledge-hub/): **one
on-brand, self-contained page** that is the front door to the firm's know-how — every
**SOP** and every **client**, searchable, each opening as a designed page **inside** the
Hub. It is the team's day-to-day tool; the repo stays the source of truth, the Hub is the
view. Read the project's own [`README.md`](../../../projects/knowledge-hub/README.md)
alongside this skill.

**Why this exists:** the Hub has accumulated a lot of hard-won decisions and preferences
(established with Lilian). This skill is the memory so any session builds and extends it
the same way — and so we never re-hit bugs like the one where an unescaped `\n` in the
emitted script silently broke *every* click.

## What we want to see there — the standing rules

1. **Team-facing = always designed. Never GitHub, never a "Claude file."** Nothing a team
   member touches may link to a repo path, a raw `.md`, or a `.html` source on GitHub.
   If they need to open something, it opens as a **designed page inside the Hub** (the
   reader) or **downloads a real file** (PDF / PNG / CSV) — never a repo/GitHub link. The
   repo internals are for Julia & Lilian only.
2. **Two areas:** Procedures (SOPs) and Client intelligence. A search box + type/owner
   filters over both.
3. **SOPs open in the in-page reader** (an overlay), because it works even inside the
   sandboxed shared link (no navigation). BTR uses its hand-laid Atlas render; others are
   rendered from their `.md`.
4. **Client cards REUSE the client-intelligence engine — never re-implement them.**
   `build-hub.mjs` imports `loadClients` / `clientCard` / `DASH_CSS` from
   [`../client-intelligence/render/build.mjs`](../client-intelligence/render/build.mjs),
   so the Hub's client section is the *same* expandable cards as the standalone dashboard
   — one implementation, no drift.
5. **Curate for the team.** Hide internal-only SOPs from the Hub (kept in the repo, e.g.
   Double-Portal Branding); drop internal file tables and provenance boilerplate ("born
   from a cleanup…") that don't help the job; **strip other-client names** from a client's
   page (a bookkeeper may not have access to those clients); embed send-to-client assets
   (guide images) inline with **PDF/PNG download** buttons.
6. **Bookkeeping SOPs are visual and dynamic** — flowcharts, decision-flows, schemas,
   arrows, tables, expandable sections — *not* walls of text. The full detail stays in the
   `.md` (maximise the info there); the Hub view is the **curated visual view**, plus a
   **"download the full runbook (PDF / text)"** option for anyone who wants to read it in
   full. (The bookkeeping-SOP `.md` structure, the firm's categorization framework, and the
   visual *format* live in the [`bookkeeping-sop`](../bookkeeping-sop/) skill; this skill
   owns how the Hub renders it.)
7. **Rendered pages stay in sync with their source.** Prefer rendering an SOP page **from
   its `.md`** (so an edit upstream can't leave the Hub stale). A hand-laid page is only
   for a flagship (BTR) or a curated visual **summary** (a "process at a glance"
   flowchart) that a human deliberately maintains — never silently duplicate the whole
   `.md` in code.

## Design is not optional — impeccable + the Design System, always

**Every visual change to the Hub or a bookkeeping SOP goes through the
[`impeccable`](../impeccable/) skill and the Atlas Design System — by default, unprompted.**
This is Lilian's explicit standing instruction for this work; it rides on the repo-wide
rule in [`CLAUDE.md`](../../../CLAUDE.md). Compose only from Atlas tokens
(`brand/design-system/` + `sop-authoring/render/atlas.css`); never invent colors/fonts.
Battle-test with browser screenshots (light, dark, mobile) before shipping. Lilian likes
diagrams, schemas, arrows, tables — reach for those over prose.

## Self-contained & portable to Odoo (do not break this)

The Hub is **one HTML file** — HTML + CSS + JS inline, fonts embedded, images/downloads as
`data:` URIs, **zero external requests, no server**. This is what lets it work offline,
inside a CSP-restricted Artifact, and **move to the firm's Odoo website with nothing lost**
(embed the HTML in a private Odoo page). Never add a runtime dependency or an external fetch.

### Downloads & print behave differently in the Artifact sandbox vs the real host

The claude.ai Artifact sandbox **silently blocks BOTH `<a download>` (every scheme —
`data:` *and* `blob:`) AND `window.print()`.** A button that "downloads a file" does
*nothing* there unless it goes through the **`downloads` runtime capability**, and there is
**no capability for printing** — `window.print()` simply cannot be enabled in the sandbox.
On the real Odoo host (and any normal browser) both APIs work. **The Hub's design target is
the real host; the Artifact is a preview** — so the buttons are built for the real host and
degrade honestly in the preview:

- **PDF / print — native `window.print()`, not a download.** "Save as PDF manual" and the
  reader-bar printer icon call `window.print()`, which renders the **design-system book
  layout** (`@media print` in `hub.css`: a cover page + a Contents page + one section per
  page, chrome quieted, action bar and data-URI links hidden). That IS the studyable PDF —
  the user picks "Save as PDF" in the browser's print dialog. **Do not fabricate a PDF or
  substitute a `.md`/`.txt` "manual"** — Lilian explicitly rejected the `.md` fallback ("no
  cumple ningún objetivo"). In the sandbox, where `window.print()` is a no-op, the button
  keeps its honest label ("Save as PDF manual"), rewrites its own note, and pops a short
  toast — *"PDF & print open in your browser on the published Hub; here, use Download as
  text"* — instead of a dead click. The whole-Hub print button is hidden in the sandbox.
- **File downloads — the `downloads` capability, else Blob.** `saveFile` in the emitted
  script uses `window.claude.downloads.save({filename, data})` when `window.claude.downloads`
  exists (the sandbox signal), else a **Blob download** on the real host. Only genuine file
  exports route through it: the runbook **"Download as text"** (`.txt`) and the CoA CSV.
- **Filename extension allowlist** for the capability is **`gif png jpg jpeg webp mp4 webm
  txt json md`** — **no `pdf`, `csv`, or `html`.** This is *why* PDF can't be a sandbox
  download and print is the only PDF path. Text under a disallowed extension (e.g. a `.csv`)
  is saved as `.txt`.

**Publishing the Artifact still REQUIRES `capabilities: {downloads: true}`** — without
it, `window.claude.downloads` is absent and even "Download as text" is dead. Load
the `artifact-capabilities` skill before publishing; the `downloads.d.ts` it points to is the
authoritative contract (error codes, 16 MiB cap, the allowlist above).

## Build & publish flow (with the verify gate)

1. **Edit the source** — `build-hub.mjs` (generator), `hub.css` (Atlas-token components),
   or the SOP `.md`. Never hand-edit `index.html`.
2. **Build:** `node projects/knowledge-hub/build-hub.mjs`.
3. **Battle-test visually** (impeccable): screenshot the changed page(s) light + dark +
   mobile; force-open the reader / accordions for the states you changed.
4. **VERIFY THE EMITTED SCRIPT BEFORE PUBLISHING — non-negotiable.** The client-side JS is
   emitted through a template literal, so any escape (`\n`, `\r`, `\t`, `\uXXXX`, a bare
   `\`) **must be double-escaped** (`\\n` …) or it lands as a real control char and breaks
   the whole inline script — no handlers bind, nothing opens. Two checks, every time:
   ```bash
   # (a) syntax: extract the last <script>…</script> from index.html and node --check it
   node -e "const h=require('fs').readFileSync('projects/knowledge-hub/index.html','utf8'); \
     require('fs').writeFileSync('/tmp/hub.js', h.match(/<script>([\s\S]*?)<\/script>/g).pop().replace(/<\/?script>/g,''))"
   node --check /tmp/hub.js    # must pass
   ```
   ```
   # (b) runtime: inject document.querySelector('[data-open-doc]').click() before </body>
   #     in a copy, screenshot it, and confirm the reader opens.
   ```
   For any **download / print** change, also run the click test both ways in headless
   Chromium: stub `window.print` (a counter) and `window.claude.downloads.save`. With the
   capability present (sandbox), assert the **print buttons call `window.print()` but save
   NO file** and pop the preview toast, while **"Download as text" saves exactly one `.txt`**;
   without the capability (real host), assert the print buttons call `window.print()`, no
   toast, and downloads take the Blob path. Chromium is at
   `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, Playwright at
   `/opt/node22/lib/node_modules/playwright`.
5. **Publish / update the shareable link** with the **Artifact** tool, using the **same
   file path** (`projects/knowledge-hub/scratch/hub.artifact.html`) so the URL is stable —
   the team keeps one bookmark, **and pass `capabilities: {downloads: true}`** so the
   download/print buttons work (see the downloads section above). Publish only with the
   user's go-ahead.
6. **Commit → PR → independent review → merge** (never merge unreviewed — CLAUDE.md).
   Small PRs per improvement round.

## Files

- `projects/knowledge-hub/build-hub.mjs` — the generator (SOP catalog, in-page reader,
  the Markdown→Atlas renderer `mdToAtlas`, section accordions, the COA tool + CSV export).
- `projects/knowledge-hub/hub.css` — Hub components, composed only from Atlas tokens.
- `projects/knowledge-hub/coa-standard.json` — COA data, derived from the master `.xlsx`.
- `projects/knowledge-hub/index.html` — generated deliverable (never hand-edit).
- `.claude/skills/client-intelligence/render/build.mjs` — the reused client-card engine.

*Update this skill whenever a round with Lilian establishes a new Hub preference — it is
the memory of "how we build the Hub and what we want to see there."*
