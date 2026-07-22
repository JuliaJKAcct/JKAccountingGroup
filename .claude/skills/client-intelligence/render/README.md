# Client-Intelligence review dashboard — render engine

Deterministic assembler for the on-brand **review page** of every client-intelligence
file. Parses each `projects/client-intelligence/clients/<slug>.md` into structured
fields and emits ONE self-contained, filterable HTML page.

The look is guaranteed on-brand: it reuses the committed **Atlas** design tokens and the
**embedded brand fonts** (`brand/design-system/fonts-embedded.css`), plus the shared
render CSS from the SOP engine (`.claude/skills/sop-authoring/render/atlas.css`) for the
toolbar / masthead / footer. Built with the `impeccable` skill + the Design System — any
visual change goes back through those, never freehand.

## Run

```
node .claude/skills/client-intelligence/render/build.mjs <repoRoot> <out.html> [as-of-date]
```

- `<repoRoot>` — the repo root (so it can read the client files, fonts, and Atlas CSS).
- `<out.html>` — where to write the page. Use a scratchpad path; **do not commit the
  output** (it is ~750 KB, mostly embedded fonts, and is fully regenerable).
- `[as-of-date]` — `YYYY-MM-DD` shown in the masthead (default `2026-07-21`; passed
  explicitly because `Date.now()` isn't available in every render environment).

Example:
```
node .claude/skills/client-intelligence/render/build.mjs "$PWD" \
  /tmp/ci-review-dashboard.html 2026-07-21
```

## Publish

The output is an **Artifact fragment** (`<title>` + `<style>` + markup + `<script>` —
no `<!doctype>/<head>/<body>`, which the Artifact tool supplies). Publish it with the
**Artifact** tool for a private, shareable link. To update the same link later, pass the
existing artifact `url`.

## What it renders

- Masthead (client count, per-owner counts, owner-group count, as-of date).
- Sticky filter bar: text search · owner filter (All / Lilian / Maria) · Expand/Collapse
  all · live count.
- Owner sections (Lilian's book, Maria's book), each a grid of client cards.
- Each card: entity + state + owner-group tags, industry, service pills
  (Bookkeeping / Income tax / Sales tax / Payroll with on/n-a/review state, plus 1099 /
  Annual report / Licensing flags), and a collapsible **Details, systems & sources**
  panel (systems chips · watch & quirks · open items / last agreed · fields still to
  confirm · Double/Drive links · how to get sensitive data live · related SOP).
- Light/dark theme, print/PDF (details auto-expand for print), responsive, reduced-motion
  respected.

## Parsing contract

Relies on the canonical template shape (status line, `## 1.`–`## 7.` sections,
`### Sales tax / Payroll / Bookkeeping & monthly close / Income tax / Licenses…`,
`### Log / Outstanding items / Information still needed`). Keep new client files on the
template (that's the `client-intelligence` skill's job) and the engine keeps working with
no per-client code.

## Reusable exports (for the Knowledge Hub)

`build.mjs` also exports `loadClients` / `clientCard` / `DASH_CSS` so the Knowledge Hub
renders the *same* client cards (one engine, no drift). Entity is parsed into **two
independent dimensions** (they're different questions — an LLC can be taxed as an S-corp, a
partnership, or disregarded), each parsed client carrying, among others:

- `entity` — display label, `legal · tax` (e.g. `LLC · S-corp`, `Corp · S-corp`,
  `LLC · Disregarded`).
- **`legalCls`** — legal structure key (`llc` · `corp` · `partnership` · `soleprop`), from
  `classifyLegal()` (the state-law entity noun; LLC/Corp win over a bare "partnership").
- **`taxCls`** — tax classification key (`scorp` · `ccorp` · `partnership` · `disregarded` ·
  `soleprop`), from `classifyTax()` (ignores "under review (A vs B)" option-lists so a
  *mention* of another treatment can't mis-bucket; Schedule-C → `disregarded` if there's an
  LLC, else `soleprop`).
- **`svcKeys`** — services we actually provide (`bookkeeping` · `payroll` · `salestax` ·
  `incometax`, i.e. the `on`/`quirk` services).

`clientCard` emits these as `data-legal` / `data-tax` / `data-svc` on the card, which is
what the Hub's Structure (Legal|Tax toggle) and Service facet filters read.
