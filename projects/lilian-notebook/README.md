# Lilian's Notebook

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-08

Lilian's personal working notebook: the lessons this firm learned the hard way, each one
written as **the rule to follow next time**, searchable from one link. The paper notebook
she kept before — except it doesn't fall out of date, and she doesn't have to copy anything
into it by hand.

## Purpose

The firm learns expensive things constantly, and until now they landed in two places that
both lose them:

- **Inside one client's file** — where a firm-wide lesson is invisible to the next client it
  applies to.
- **Inside a `FOLLOW-UPS.md` row** — which is **deleted when the task resolves**, on purpose.
  So the day a matter closes, the most expensive thing it taught us goes with it. (That's
  LN-29, and it's why this project exists.)

A task and a lesson are different objects with different lifespans. Tasks live in
[`FOLLOW-UPS.md`](../../FOLLOW-UPS.md) and get deleted; **lessons come here and stay.**

And the second half of the problem, in Lilian's words: *"si lo dejamos solo en el repo, no me
voy a acordar ni de pedírtelas"*. A `.md` file nobody remembers to open is not a notebook. So
the notebook has **one link she bookmarks** — a searchable page — and a card in the
[Knowledge Hub](../knowledge-hub/) so it's never lost.

### Whose it is

**This one is Lilian's** — her decision, Aug 2026. She's the only person writing in it; it's
her study and her memory, not a shared firm document. It lives in the repo and it isn't
hidden (it's all the same work), it just isn't addressed to anyone else. That's a deliberate
exception to the repo's "never partition by person" rule, and the only one:
firm-wide *procedure* still belongs in [`sops/`](../sops/), firm-wide *guidance* in
`CLAUDE.md` and the skills, and per-client facts in
[`client-intelligence/`](../client-intelligence/). When a note here turns out to be a rule
the whole firm needs, it gets promoted into one of those — and stays here too, as the
notebook's record of how we found out.

## What's here

```
lilian-notebook/
├── README.md              ← you are here
├── notes/                 ← THE SOURCE OF TRUTH — one .md per category
│   ├── _entry-template.md    copy a block from here to add a note
│   ├── agencies.md           agencies & filings (IRS, FL DOR, cities, Sunbiz)
│   ├── platforms.md          platforms & vendors (Gusto, QuickBooks, Double, Odoo, Turo…)
│   ├── costs.md              costs, fees & penalties
│   ├── clients.md            clients & communication
│   └── craft.md              how we work (the repo, the record, who owns a matter)
├── render/
│   └── build.mjs          ← the generator: notes/*.md → one self-contained page
├── notebook.html          ← generated, gitignored — open this locally
└── scratch/               ← generated, gitignored — holds the fragment that gets published
```

Every note carries: an **ID** (`LN-##`, global and never reused), the lesson **as its title**,
tags, a **certainty** label (`Established` · `Firm rule` · `Working assumption`), a star if
Lilian marked it important, where it came from, and a pointer to the **full record** — which
stays in the client file, the skill, or the Double note. The notebook is the index of lessons,
not a second copy of the case history.

## Brand & design

Built with the [`impeccable`](../../.claude/skills/impeccable/) skill on the firm's **Atlas**
design system, reusing the **exact same** stylesheet and embedded fonts as every SOP render and
the Knowledge Hub — so it reads as one family with everything else the firm produces.

- Shared render stylesheet: [`../../.claude/skills/sop-authoring/render/atlas.css`](../../.claude/skills/sop-authoring/render/atlas.css)
- Design tokens: [`../../brand/design-system/`](../../brand/design-system/)
- `NOTEBOOK_CSS` in `render/build.mjs` composes from Atlas tokens **only** — no new colors, no
  new fonts.

Light + dark, a print stylesheet, fonts embedded (zero external requests), so it works offline,
in Drive, printed, and inside a CSP-restricted Artifact.

## Skills & tooling

- [`lilian-notebook`](../../.claude/skills/lilian-notebook/) — **the house way to capture a
  note, write it, and rebuild + republish the page.** Holds the capture rule (Claude proposes
  entries unprompted), the entry structure, and what belongs here vs. in a skill / SOP /
  client file.
- [`knowledge-hub`](../../.claude/skills/knowledge-hub/) — the Hub embeds this page from the
  same generator, so the Hub card is never a stale copy.

## Outputs

```bash
node projects/lilian-notebook/render/build.mjs
```

Writes two **gitignored** files (the `.md` in `notes/` is the source of truth — regenerate any
time):

- `notebook.html` — the self-contained page, for opening locally.
- `scratch/notebook.artifact.html` — the body-only fragment. **This is the one to publish.**

### The one notebook link (don't create duplicates)

Lilian's bookmark is **one** published Artifact — always update that same one, never publish a
new URL:

> **THE notebook link:** `https://claude.ai/code/artifact/90247f17-4bb0-4e06-b867-a52a8ff1b6ff`

Publish by pointing the Artifact tool at `scratch/notebook.artifact.html` **and passing that URL
as `url`**. A session that doesn't pass `url` mints a *new* artifact URL — which is exactly how
the Hub ended up with two links once. Same rule as the Hub: republish after every change, from
merged `main`.

## Working on this / notes for AI

- **`notes/*.md` is the source of truth.** Never hand-edit `notebook.html` — change the
  Markdown and re-run the build.
- **The title is the lesson.** Write it as the rule, in the imperative, so the list reads as
  advice with nothing expanded. Not *"The Gusto problem"* but *"Gusto files nothing until the
  first check date"*.
- **A new category = a new `notes/*.md` + a row in `CATEGORIES`** in `render/build.mjs`. The
  build **fails loudly** on a notes file with no row, on a duplicate `LN-##`, and on a note
  with no `**The rule.**` paragraph — those are the three ways this drifts.
- **No client secrets, figures, or personal data.** Same rule as the rest of the repo: names of
  client businesses and what happened are fine (they're already in `FOLLOW-UPS.md` and the
  client files); dollar figures that are the client's, EINs, account numbers, logins and
  personal contact details stay in Double / Drive / QuickBooks. Amounts that are *the lesson*
  — a published penalty rate, a fee cap — are fine.
- **Written in English** like every repo artifact, whatever language the session ran in.
- **Rebuild and republish in the same change** whenever a note changes, and rebuild the Hub too
  (it embeds this page). Publishing happens from merged `main`.
