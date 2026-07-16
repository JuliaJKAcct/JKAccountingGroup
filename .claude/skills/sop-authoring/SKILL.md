---
name: sop-authoring
description: Write, restructure, or review a JK Accounting Group SOP the house way — the structure Lilian established while reworking the BTR SOP (Jul 2026). Use when creating a new SOP in projects/sops/, doing a major restructure of an existing one, or rendering an SOP for team review. Encodes the required shape (process flowchart first, book-index hierarchy, numbered lists over prose, bullet checklists, an uploads/have-ready checklist, an email map with where to check status, plain-language jargon, explicit who-pays-what), the review workflow (PR → independent review → merge; in-review header notes; durable registration of pending states), and the Atlas design-system render for review copies. The reference example is projects/sops/hollywood-broward-business-tax-receipt.md.
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
   as a small labeled unit with its fields as bullets.
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

## Rendering for review (the Atlas pass)

When the SOP is reviewed by a person, publish a **rendered copy** as an Artifact
styled with the firm's **Atlas design system** (`brand/design-system/DESIGN.md` —
petrol teal + bronze on ivory; Source Serif 4 headings, IBM Plex Sans body, IBM
Plex Mono kickers/labels; both light & dark themes):

- Section chips (§N) + a serif H2 per section; 3A/3B-style sub-headers as
  **highlighted bars** (mono tag + serif title) with their children indented
  under a left rule; screen labels as small mono kickers — hierarchy readable
  from ten feet away.
- The flowchart rendered (Mermaid), the "what you pay" box in **bronze** (the
  money accent), email flows as cards, callouts on the semantic tokens
  (info/warning/error).
- The Markdown in the repo stays the **source of truth**; the artifact is a view.
  Keep the same artifact URL across review rounds (republish the same file).

## Reference

- **Pattern:** [`projects/sops/hollywood-broward-business-tax-receipt.md`](../../../projects/sops/hollywood-broward-business-tax-receipt.md)
- **Conventions:** [`projects/sops/README.md`](../../../projects/sops/README.md)
- **Backlog:** IDEA-14 tracks refinements to this skill after each review round.

*Update this skill whenever a review round with Lilian/Julia establishes a new
preference — the skill is the memory of "how we like SOPs."*
