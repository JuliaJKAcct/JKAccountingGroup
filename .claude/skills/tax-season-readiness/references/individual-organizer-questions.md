# The firm's individual (1040) tax organizer — question bank

The questions JK Accounting Group asks an individual client in the tax organizer, grouped by
the organizer's tags/sections.

> ## ⚠️ STATUS: NOT YET CAPTURED — do not treat anything here as the firm's list
>
> **The question bank below is empty on purpose.** The organizer content is **not readable
> through the Double MCP** (see [`double-mcp`](../../double-mcp/) §2 — there is no organizer
> tool, and `get_task_templates` does not include it), and a tax organizer is not something to
> reconstruct from general knowledge. A plausible-looking invented list would be worse than an
> empty one: a future session would treat it as firm truth and could ask a client the wrong
> things, or miss a question that matters for their return.
>
> **So it stays empty until Lilian supplies the real questions.** See "How to fill this in"
> below. Until then, any session needing the organizer's contents should ask her, not guess.

---

## Why this file exists

Lilian asked for the organizer questions to live in the repo *because* Double won't give them
up (Jul 2026): "no puedes acceder a templates en Double, pues puedes guardar esta información."
Once captured here, any session can answer "what do we ask individuals about X?", draft an
organizer follow-up, review the organizer for gaps, or reuse the wording in a lead-magnet
intake form — without Lilian re-explaining.

---

## What we *do* know (verified in Double)

This is the confirmed scaffolding around the questions, not the questions themselves.

**Two organizer generations.** The legacy **TaxDome** organizers (migrated, never re-sent) and
the current **Double** organizers (sent only to clients who hadn't completed a TaxDome one, or
who joined after the migration). Full model in the parent skill,
[`tax-season-readiness`](../SKILL.md) §1.

**Question tags configured in Double** (`list_question_tags`) — the tags available for
non-transaction client questions:

| Tag ID | Name |
|---|---|
| `tax-questions` | Tax Questions |
| `statements` | Statements |
| `w9-requests` | W9 Request |
| `onboarding` | Onboarding Qs |
| `other` | Other |

These are the *client-question* tags, which are a **different** mechanism from the organizer
itself — organizer answers do not surface via `get_questions`. Don't conflate them.

**Return types the organizer has to serve** (property `Tax Return Type`): `1040` · `1040-NR` ·
`1040-SCH C`. Note `Organizer Status` has dedicated non-applicable values `N/A (SCH-C)` and
`N/A (Nonresident)` — so the organizer's applicability already varies by return type, and the
question bank likely needs to record which questions apply to which.

**A concrete filename pattern** seen in clients' `1. Completed Tax organizers` folders:
`2025 individual Tax Organizer.pdf` — i.e. one organizer per client per tax year, year-prefixed.

---

## The question bank

_Fill one row per question. Add or rename sections to match how the organizer is actually
organized._

| # | Section / tag | Question (client-facing wording) | Applies to | Why we ask / what it drives |
|---|---|---|---|---|
| | | _(awaiting Lilian)_ | | |

### Follow-up / conditional questions

_Questions asked only when an earlier answer triggers them._

| Trigger | Follow-up question | Why |
|---|---|---|
| | _(awaiting Lilian)_ | |

### Documents we ask the client to upload

| Document | Applies to | Notes |
|---|---|---|
| | _(awaiting Lilian)_ | |

---

## How to fill this in

Any of these works — whichever is least effort for Lilian:

1. **Paste the questions** into chat (Spanish or English is fine; the file itself stays in
   English per the repo convention). Rough is fine — structure is this file's job.
2. **Screenshot the organizer** in Double, section by section.
3. **A blank/template organizer PDF** — note: a *blank* template only. Never a client's
   **completed** organizer; those contain personal and financial data and must not enter the
   repo or be fetched into a session ([`double-mcp`](../../double-mcp/) §2).
4. **Dictate it** — Claude will structure it into the tables above and read the result back for
   confirmation before committing.

When filling it: keep the **client-facing wording verbatim** where possible (that wording is
reusable), and record **which return types each question applies to** so the `N/A (SCH-C)` /
`N/A (Nonresident)` distinction stays intact.

---

## Keep out of this file

- Any **client's answers** — those are client data and live in Double, never here.
- Names, SSNs/EINs, addresses, dollar figures.
- Anything invented. An unanswered row stays `_(awaiting Lilian)_`; an empty bank is a known
  gap, a fabricated one is a silent hazard.
