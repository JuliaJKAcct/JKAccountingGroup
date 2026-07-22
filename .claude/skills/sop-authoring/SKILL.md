---
name: sop-authoring
description: Write, restructure, or review a JK Accounting Group SOP the house way — the structure Lilian established while reworking the BTR SOP (Jul 2026). Use when creating a new SOP in projects/sops/, doing a major restructure of an existing one, or rendering an SOP for team review. Encodes the required shape (process flowchart first, book-index hierarchy, numbered lists over prose, bullet checklists, an uploads/have-ready checklist, an email map with where to check status, plain-language jargon, explicit who-pays-what), the review workflow (PR → independent review → merge; in-review header notes; durable registration of pending states), and the STANDARD Atlas design-system render every SOP ships with — a committed, deterministic render engine (render/) built with the impeccable skill + the firm's Design System, so any session produces the same on-brand, print/PDF/Drive-ready HTML. The reference example is projects/sops/hollywood-broward-business-tax-receipt.md (Markdown source) rendered to hollywood-broward-business-tax-receipt.html.
---

# SOP authoring — the house structure

How JK Accounting Group SOPs are written and presented. These preferences were
established hands-on by **Lilian** during the Jul 2026 restructuring of the BTR
SOP, and that file is the living reference pattern:
[`projects/sops/hollywood-broward-business-tax-receipt.md`](../../../projects/sops/hollywood-broward-business-tax-receipt.md).

**Why this exists:** SOPs cover tasks the firm runs **months apart**. The reader
has forgotten everything and must rebuild understanding from the document alone —
so the general picture comes before the detail, hierarchy must be visible at a
glance, and jargon must be explained. If an SOP needs a personal walkthrough to
be usable, the writing failed.

## Non-negotiable — what EVERY SOP is built with

By default and unprompted, every SOP uses **both**:

1. **The [`impeccable`](../impeccable/) skill** — for every visual/design decision.
2. **The Atlas Design System** ([`brand/design-system/`](../../../brand/design-system/) +
   [`render/atlas.css`](./render/atlas.css)) — compose only from its tokens; never invent
   colors or fonts.

Two rules that follow from this and apply to every SOP:

- **The "process at a glance" flowchart is a designed, dynamic diagram — never a bare
  Mermaid block in the team view.** The `.md` keeps a Mermaid/textual flow as
  source-of-truth, but in the **Knowledge Hub** it renders as a hand-built diagram on Atlas
  tokens with **purposeful motion** (visible without JS; static under
  `prefers-reduced-motion`). A client-task SOP uses the `taskProcessReader` engine; see the
  [`knowledge-hub`](../knowledge-hub/) skill for the render.
- **Confidential Drive materials get a designed button — always.** Whenever a step needs an
  extra document, file, video, or login that lives in **Google Drive** and can't be shown
  explicitly on the (team-facing) website for confidentiality, surface it as a **designed
  Drive-link button** with a short hover tooltip + a visible caption saying what it is —
  never a bare URL, a raw repo path, or the secret itself. Same pattern as the bookkeeping
  SOPs' Drive "material" buttons (Maria's clients) and the Deep Tech password-vault button.

## The required shape (in order)

1. **Header block** — Status · Owner · Last updated, then the "where client data
   goes" warning (client data lives in Drive/Double/QuickBooks, never the repo).
2. **"The process at a glance" — a Mermaid flowchart FIRST.** Before any detail,
   a `flowchart TD` showing the whole journey end-to-end (major stages, waits,
   payments, decision branches, the "done" state). A reader lost mid-process
   finds where they are on the map. Quote every node label (labels contain
   `$ / § → ①` etc.); keep it to one screen.
3. **Numbered sections (§0, §1, §2 …) like a book index.** Sub-parts get lettered
   tags (**3A / 3B**, **Step A / B / C**) that sit **visually above** their
   children — a screen list ("Screen 1/2/3") is subordinate to its 3A/3B parent,
   never the same visual level. In Markdown use heading levels + bold labels; in
   rendered copies use size/color/containment (see Rendering below).
4. **Intake questions** early — what to ask the client before starting.
5. **Gates before filings** — anything that can invalidate the whole task (e.g. a
   zoning check) gets its own early section, before any application steps.
6. **Money made explicit.** If the process charges fees, a dedicated
   **"What you pay"** box: number each separate payment (**1, 2, …**), name who
   collects it, when, roughly how much (hedged: "~", "verify at submission"),
   and pull the takeaway out as a separate **Bottom line** below the numbered
   items — never as a third look-alike bullet.
7. **"Documents to have ready (uploads)" checklist** — per application/venue,
   before the screen-by-screen detail, so everything is gathered up front
   (formats and size limits included, e.g. "PDF only, ≤ 10 MB").
8. **Screen-by-screen references** — one subsection per application, each screen
   as a small labeled unit with its fields as bullets. **Only when the process is
   complex enough to warrant it** — skip it for simple tasks (a two-field login +
   pay, like the Penn Credit toll portal, doesn't need a screen-by-screen section).
9. **Fees / renewals / deadlines** — the calendar facts.
10. **Common pitfalls** — each one a bolded lesson learned the hard way.
11. **Contacts & links table** — every URL and phone in one place; links also
    appear inline exactly where the step uses them.
12. **An email map ("What you'll receive")** — every email the process generates:
    exact sender address, exact subject shape (placeholders like `#<ID>`), what
    each email means, which are acknowledgments vs. approvals vs. pay-now, where
    they can hide (e.g. Gmail's "Updates" tab), and **where to check status**
    (links + search tips like `from:no-reply@…`).
13. **Appendix: blank intake template** to copy into the client's folder in the
    firm's systems — filled-in copies never come back to the repo.

## Writing rules

- **Numbered lists over prose.** If items are a sequence or a countable set,
  number them. Never bury a checklist in a run-on sentence ("Needs: X, Y, Z…" →
  a bulleted "You need, in hand:" list).
- **Plain language for jargon.** Official terms get translated ("'Issuance' just
  means they granted the receipt"). Section titles should say what the reader
  does, not the bureaucratic label ("Once you have the receipt(s) in hand", not
  "After issuance").
- **Distinguish look-alike steps loudly.** When two messages/steps look the same
  but mean different things (acknowledgment vs. approval), say so in bold and
  add a warning callout ("submitting is NOT the end").
- **Operational conventions belong in the SOP** — e.g. *use the firm's email
  (never the client's) on applications* — stated where the field appears **and**
  in the pitfalls list.
- **English**, like every repo artifact, whatever language the working chat was in.
- **No client data.** Names, EINs, folios, application numbers, figures → client
  systems (Drive/Double). The SOP keeps placeholders (`<ID>`, `<BUSINESS>`).
- **One self-contained file per procedure** (per `projects/sops/README.md`) —
  no split summary/detail pairs. Update **Last updated** on every substantive edit.

## Workflow (how SOP changes ship)

1. **Small PRs per improvement round** — commit each coherent round, push, open a
   PR, run an **independent review** (a subagent reviewing for accuracy, internal
   consistency, Markdown/Mermaid validity, no client data, index/nav coherence),
   address blockers, merge. Never merge unreviewed (CLAUDE.md rule).
2. **Register pending states durably.** A pending human review is invisible to
   future sessions unless written down: put an **"In review"** note in the SOP
   header (with the reviewer, date, and "remove this note when signed off") and
   track larger follow-ups in `BACKLOG.md`. Chat is not memory.
3. **Client-specific outcomes** of running an SOP (what was filed/paid/pending
   for a real client) are recorded as **notes on the client in Double**, with a
   `Recorded during <person>'s session` provenance line — never in the repo.

## The Atlas render — a standard deliverable (not optional)

**Every SOP carries the firm's seal.** A SOP is not "done" as a bare Markdown
file — it ships with a designed HTML render on the **Atlas design system**
(`brand/design-system/DESIGN.md` — petrol teal + bronze on ivory; Source Serif 4
headings, IBM Plex Sans body, IBM Plex Mono labels), built with the
[`impeccable`](../impeccable/) skill. This is the default whenever anyone
(Julia, Lilian, a future teammate) asks to create, restructure, or produce a
SOP — not something they have to request. The result must look professional,
calm, and educational: our seal, never a plain document.

**Do not hand-improvise the styling — use the committed engine.** The render is
deterministic because the stylesheet and fonts are shared, committed assets;
only the per-SOP content changes, so the look is identical across sessions and
authors. The engine and full authoring guide live in
[`render/`](./render/README.md):

- [`render/atlas.css`](./render/atlas.css) — tokens + components, **light + dark
  themes**, and a **print stylesheet** (clean PDF). Shared; never fork per SOP.
- [`render/build.mjs`](./render/build.mjs) — assembles a per-SOP **body fragment**
  + the shell + `atlas.css` + embedded brand fonts into a **self-contained**
  standalone `.html` (works offline, in Drive, printed, and as an Artifact —
  zero external requests) and an optional Artifact fragment.
- [`render/examples/btr-body.html`](./render/examples/btr-body.html) — the
  reference body; copy its structure. Class-by-class map is in
  [`render/README.md`](./render/README.md).
- Brand fonts: [`brand/design-system/fonts-embedded.css`](../../../brand/design-system/fonts-embedded.css)
  (regenerate with `fetch-fonts.mjs`).

Flow: author the body fragment (a hand-laid view of the `.md` — §N chips + serif
H2 per section; 3A/3B sub-headers as highlighted **bars** above indented
children; screen labels as mono kickers; the flowchart hand-built; the "what you
pay" box in **bronze**; email flows as cards; callouts on the semantic tokens) →
`build.mjs` → publish the fragment with the **Artifact** tool (favicon `🧾`) for
a shareable light/dark review link → commit the standalone next to the `.md` and
list it in `projects/sops/README.md`.

- The Markdown stays the **source of truth**; the HTML is a view — re-run
  `build.mjs` when the `.md` changes. Keep the **same Artifact file path** across
  review rounds so the URL is stable.
- **PDF is on request only.** The render has a Print / PDF button + print
  stylesheet, so a PDF is one click for anyone. Don't generate or send a PDF
  unless asked; the Artifact link is how a render is reviewed in chat.

## Reference

- **Pattern (Markdown source):** [`projects/sops/hollywood-broward-business-tax-receipt.md`](../../../projects/sops/hollywood-broward-business-tax-receipt.md)
- **Pattern (Atlas render):** [`projects/sops/hollywood-broward-business-tax-receipt.html`](../../../projects/sops/hollywood-broward-business-tax-receipt.html) — built from [`render/examples/btr-body.html`](./render/examples/btr-body.html)
- **Render engine + authoring guide:** [`render/README.md`](./render/README.md)
- **Conventions:** [`projects/sops/README.md`](../../../projects/sops/README.md)
- **Backlog:** IDEA-14 tracks refinements to this skill after each review round.

*Update this skill whenever a review round with Lilian/Julia establishes a new
preference — the skill is the memory of "how we like SOPs."*
