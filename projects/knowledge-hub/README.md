# Knowledge Hub

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-07

One on-brand, searchable index page that is the **front door to the firm's
know-how** — every **procedure (SOP)**, every **client** we've captured, and the
firm's downloadable **templates**, in one place, so anyone on the team (especially
Julia) can find and open the right
document in seconds.

## Purpose

The firm is writing a growing library of SOPs (one per procedure, per recurring
task, per client) and a per-client knowledge base. A flat list in a README is
fine for developers but not for "Julia needs that information, right now." The
Hub turns the whole library into a single, calm, visual page: **search it,
filter it, open any document.**

It is generated straight from the repo, so it can **never drift** — statuses,
owners, entities, industries and knowledge-completeness are all read live from
the source files.

### The two-stage idea (Lilian's design)

- **This Hub is the _review_ copy.** It shows **everything in the repo**,
  including work still in progress, with a status/completeness badge on each
  card. It's where the team reviews what we've built.
- **The _team_ copy comes later.** When a document is approved and marked
  **ready**, we publish just that one to the firm's **team site (Odoo)** behind
  the team login. The repo stays the single source of truth in both cases; the
  Hub (a shareable link) and the team site are two *views* of it.

## What's here

```
knowledge-hub/
├── README.md         ← you are here
├── build-hub.mjs     ← the generator: reads projects/sops (+ a catalog `dir` override for docs owned by another project, e.g. projects/marketing/) + projects/client-intelligence → index.html
├── hub.css           ← Hub-only components (search, cards, meters), composed ONLY from Atlas tokens
├── index.html        ← the generated Hub, self-contained + on-brand — for opening LOCALLY (a BUILD ARTIFACT: gitignored, never committed; rebuild on demand)
└── scratch/          ← also generated + gitignored; holds hub.artifact.html — the body-only fragment that IS what gets published
```

## Brand & design

Built with the [`impeccable`](../../.claude/skills/impeccable/) skill on the
firm's **Atlas design system** — it reuses the exact tokens, fonts and toolbar/
masthead/footer of the SOP renders, so the Hub reads as one family with every
document it links to. It ships **light + dark themes** and a **print stylesheet**,
fonts are **embedded** (zero external requests), so it works offline, in Google
Drive, printed to PDF, and inside a CSP-restricted Artifact.

- Design tokens / CSS: [`../../brand/design-system/`](../../brand/design-system/)
- Shared render stylesheet reused here: [`../../.claude/skills/sop-authoring/render/atlas.css`](../../.claude/skills/sop-authoring/render/atlas.css)
- `hub.css` never invents colors or fonts — every value is an Atlas token.

## Skills & tooling

- [`knowledge-hub`](../../.claude/skills/knowledge-hub/) — **the house way to build,
  extend, or fix this Hub.** Holds the standing preferences (team-facing = designed,
  never GitHub/repo-file links; SOPs open inside the Hub; reuse the client-intelligence
  engine; bookkeeping SOPs are visual/dynamic via impeccable), the curation rules, the
  self-contained/portable-to-Odoo constraint, and the **verify-before-publish gate**
  (`node --check` the emitted script + a runtime click test). Read it first.
- [`impeccable`](../../.claude/skills/impeccable/) — the design skill the Hub is
  built and battle-tested with (light/dark/mobile screenshots). **Every visual change
  here goes through it + the Atlas Design System, by default.**
- [`client-intelligence`](../../.claude/skills/client-intelligence/) — the Hub's
  **Client intelligence** section is rendered by **reusing that skill's engine**:
  `build-hub.mjs` imports `loadClients()` + `clientCard()` + `DASH_CSS()` from
  [`render/build.mjs`](../../.claude/skills/client-intelligence/render/build.mjs),
  so the Hub's client cards are **the same expandable cards** (service pills,
  systems, open items, sources) as the standalone review dashboard — **one engine,
  no drift**. Click a client card and its detail expands *inline*.
- [`lilian-notebook`](../../.claude/skills/lilian-notebook/) — the Hub's **Lilian's Notebook**
  card opens the whole notebook in the reader, embedded by **importing that project's own
  generator** (`buildNotebookDoc({embedded:true})`) rather than copying its HTML — the same
  one-engine rule as the client cards. Rebuild the Hub whenever a note changes.
- Sources it indexes: [`../sops/`](../sops/) (procedures),
  [`../client-intelligence/`](../client-intelligence/) (clients) and
  [`../lilian-notebook/`](../lilian-notebook/) (the notebook page). Adding an SOP or
  a client and re-running the build is all it takes to update the Hub.

## Outputs

The build writes **two** files, both **gitignored and never committed** (they're ~9MB
generated files that two parallel sessions kept colliding on, silently reverting each other's
Hub features). The sources are the source of truth — regenerate any time they change:

- `index.html` — the self-contained Hub, for opening locally.
- `scratch/hub.artifact.html` — the body-only fragment. **This is the one to publish**, since
  the Artifact tool supplies its own `<head>`/`<body>`.

```bash
node projects/knowledge-hub/build-hub.mjs
```

Each **procedure** card opens its SOP as a designed page **inside the Hub**
(the in-page reader); each **client** card **expands inline** to its detail — no
navigation — because those cards come from the client-intelligence engine.

### The one official team link (don't create duplicates)

The team's shareable Hub is **one** published Artifact — always update **this same
one**, never publish a new URL:

> **THE Hub link:** `https://claude.ai/code/artifact/b194a4e7-caf5-40c6-afb3-99741ec22f3e`

Publish by pointing the Artifact tool at `scratch/hub.artifact.html` **and passing
that URL as `url`**. Passing the same *file path* keeps the URL stable only **within
one session**; a *different* session that doesn't pass the `url` **mints a new
artifact URL** — that is how two "Knowledge Hub" links appeared (22-Jul + 23-Jul).
Reuse the link above from every session and there's only ever one bookmark.
**Keep it current — Lilian's standing instruction (Jul 2026): refresh this link after every
Hub change (publish from merged `main`), unprompted.** She bookmarks it and it's the source
for the future Odoo migration, so it must always mirror the latest merged Hub.
Overwriting is safe **when the live link was last published from merged `main`**
(the Hub is a full rebuild from `main`, so nothing is lost) — the one exception is
a link last published from an **unmerged** branch, which a blind overwrite would
drop; publishing *after* merge keeps that from happening.
Full mechanics — `capabilities: {downloads: true}`, the `force:true` guard case —
live in the [`knowledge-hub` skill](../../.claude/skills/knowledge-hub/SKILL.md)
(build & publish flow, step 5).

## Working on this / notes for AI

- **The repo is the source of truth; the Hub is a view.** Never hand-edit
  `index.html` — change the sources (or the generator/CSS) and re-run
  `build-hub.mjs`.
- **`hub.css` composes from Atlas tokens only** — no new colors/fonts. The SOP
  card footer is namespaced (`.dmeta`) to avoid colliding with atlas.css's page
  `.foot`. Client-card styles come from the client-intelligence engine's
  `DASH_CSS()` (the `.cx-*` classes) — don't fork them here.
- **No client data leaves its home.** The Hub only surfaces the non-sensitive
  facts already committed to the client-intelligence files (entity, industry, the
  services we run) — secrets/PII stay in Drive/Double, linked from those files.
- **Content must be visible without JS.** Cards are shown by default; JS only
  adds search/filter and the theme toggle. Don't gate visibility on a reveal
  animation (an early bug — headless renderers never fire it, and sections ship
  blank).
- **Next step:** the "publish only _ready_ documents to the Odoo team site" flow
  (embed the generated view in a private Odoo Website page). Tracked for when the
  review Hub is signed off.
