# Knowledge Hub

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-07

One on-brand, searchable index page that is the **front door to the firm's
know-how** — every **procedure (SOP)** and every **client** we've captured, in one
place, so anyone on the team (especially Julia) can find and open the right
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
├── build-hub.mjs     ← the generator: reads projects/sops + projects/client-intelligence → index.html
├── hub.css           ← Hub-only components (search, cards, meters), composed ONLY from Atlas tokens
├── index.html        ← the generated Hub — self-contained, on-brand, print/PDF-ready (the deliverable)
└── scratch/          ← local build artifacts (Artifact fragment, screenshots) — not the deliverable
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

- [`impeccable`](../../.claude/skills/impeccable/) — the design skill the Hub is
  built and battle-tested with (light/dark/mobile screenshots).
- [`client-intelligence`](../../.claude/skills/client-intelligence/) — the Hub's
  **Client intelligence** section is rendered by **reusing that skill's engine**:
  `build-hub.mjs` imports `loadClients()` + `clientCard()` + `DASH_CSS()` from
  [`render/build.mjs`](../../.claude/skills/client-intelligence/render/build.mjs),
  so the Hub's client cards are **the same expandable cards** (service pills,
  systems, open items, sources) as the standalone review dashboard — **one engine,
  no drift**. Click a client card and its detail expands *inline*.
- Sources it indexes: [`../sops/`](../sops/) (procedures) and
  [`../client-intelligence/`](../client-intelligence/) (clients). Adding an SOP or
  a client and re-running the build is all it takes to update the Hub.

## Outputs

`index.html` — the committed, self-contained Hub. Regenerate it any time the
sources change:

```bash
node projects/knowledge-hub/build-hub.mjs
```

Each **procedure** card links to its SOP document (on GitHub for now; a designed
Atlas page once SOPs are rendered and hosted). Each **client** card **expands
inline** to its detail — no navigation — because those cards come from the
client-intelligence engine. A **shareable link** for the team is produced by
publishing `scratch/hub.artifact.html` with the Artifact tool — same file path
each time, so the URL is stable (send it once; it updates in place on re-publish).

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
