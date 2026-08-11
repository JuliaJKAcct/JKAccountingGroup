---
name: organizer-review
description: Review a client's tax organizer BEFORE anyone starts their return — read their answers, reconcile them against the prior-year return (or prior organizer), the Double notes, the client's files and the firm's own Double columns, and turn what is missing, contradictory or misclassified into ONE grouped list of questions to send back. Use when asked to analyse / review / check a client's organizer, to compare a client's year against last year, to work out what to ask a client before preparing their return, or when an organizer looks complete but the return cannot actually be prepared. Encodes the fixed output structure (a prior-year → this-year comparison table, findings grouped by root cause, a what-we-already-have guard, and the ready-to-send question list), the six sources that must be read in order, the five detection families, the rule that an upstream answer silently suppresses downstream document requests, the extra carryover block when the prior return was prepared elsewhere, and the privacy discipline that governs reading organizer responses at all.
---

# Organizer review — what to ask the client, before anyone starts the return

The firm loses weeks per return to the same loop: the organizer comes back, someone
starts preparing, a gap appears, the client is emailed, days pass, another gap appears,
another email. This skill collapses that into **one pass and one list of questions**.

**What it produces:** a short, fixed-shape review a preparer can act on in five minutes,
ending in the **questions to send the client** — grouped, deduplicated, and ordered so
the answer that unblocks the most comes first.

**What it is not:** a narrative. Lilian's instruction (2026-08-11) after the pilot ran
long: *"una cantidad de texto enorme sin ningún orden fijo y lógico"* is the failure
mode. **Follow §4's structure exactly, every time.** A reviewer should be able to open
two clients' reviews side by side and find the same thing in the same place.

---

## 0. Before the first call — the privacy discipline

Reading a client's organizer answers is **permitted** (Lilian lifted the old ban
2026-08-11) and comes with rules that do not bend. **Read
[`double-mcp`](../double-mcp/) §2.2 in full before the first
`get_organizer_responses` call.** In short, and none of this is optional:

1. **Tell the person before you read**, in plain words — the tool returns the whole
   organizer at once, so their personal details come through in the tool output, and you
   will not repeat any of it. Say it calmly; it is a routine job, not a hazard.
2. **Remind them at the end to delete the conversation.** That is the step that turns a
   permanent copy into a temporary one. Say it even if they waved it off at the start.
3. **Never from a subagent. Never from a scheduled or unattended session.** Every control
   here is a sentence said to a human; a Routine has nobody to tell.
4. **Never into an artifact.** A published artifact is a hosted web page. This review is
   delivered in chat, full stop — however much better a table would look as a page.
5. **Never into the repo — and the bar is wider than identifiers.** *What the client
   answered* is barred too, not only their SSN. Write **the action**, not the answer.
   Watch the paraphrase: *"his answers point the other way"* leaks exactly as much as a
   quote. If a sentence would change when the client's answer changes, it is still the
   answer. (Learned by doing it wrong — [`client-intelligence`](../client-intelligence/),
   the ⛔ subsection.)
6. **Never write the organizer payload to a file**, including the scratchpad. Do the
   comparison in context.

The **findings** are free. *"No K-1 this year; last year had one"* is exactly the output
this permission exists to produce.

---

## 1. Read all six sources, in this order — none is optional

**The organizer is a prompt, not a source.** In the pilot case, the organizer reported
**100% complete** and disclosed not one material fact about the return; everything came
from the prior return and a Double note. Auditing an organizer against itself finds
nothing.

| # | Source | What it gives you | Tool |
|---|---|---|---|
| 1 | **Client Intelligence** file | What the firm already knows; the open items from last time | `projects/client-intelligence/clients/<slug>.md` |
| 2 | **Double notes** | What the client sent **outside** the portal — voice messages, texts, calls | `list_notes(clientId)` |
| 3 | **Double files** | Documents that exist even though the organizer shows nothing | `list_files(clientId)`, `list_file_library(clientId)` |
| 4 | **Double properties + tax project** | The firm's own read: return type, organizer status, year, deadline | `list_client_properties`, `list_projects` |
| 5 | **The organizer** — structure *and* responses | The answers, and which questions were even asked | `get_organizer`, `get_organizer_responses` |
| 6 | **The prior year** — return or organizer | The comparison base. §3 | uploaded PDF, or the prior organizer |

> ### ⛔ The rule that prevents the worst output
>
> **A gap in the organizer is not a finding until you have looked for the answer in
> sources 1–4.** Asking a client for something they already sent is worse than not
> running the review at all — it burns the goodwill you need for the questions that
> genuinely matter. §4's **Block C** exists to make this visible.

**No prior year in Double?** Most clients have only one year there. The comparison base
is then a **prior-year return the client uploaded** or one Lilian redacts and supplies.
Ask for it — the pilot proved it is where the value is.

---

## 2. What to look for — the five detection families

Run all five. They are ordered by how often they bite.

**1 · Disappearances — the highest-value family.** Something on last year's return or
organizer that is absent this year. **Each one is a question, never a conclusion.**

> **The disappearance rule, in the firm's own words (Lilian):** a company that closed
> **during** the year still issues a K-1 for that year. The only ways an item legitimately
> vanishes are that the client **left** or the entity **closed in a prior** year. So never
> accept the absence — ask **which entity, and on what date**. Clients routinely assume
> "the company closed, so it doesn't count."

Applies well beyond K-1s: a W-2 employer, a rental, a 1099 payer, a dependant, a state,
an estimated-payment pattern.

**2 · Suppressed questions — the organizer never asked.** Organizer logic hides each
document request until an earlier answer reveals it. **That design is correct** — it is
what keeps a simple client out of a 120-slide interrogation. But one wrong answer
upstream silently removes everything below it, and the organizer still reports 100%.

So: **when an upstream answer conflicts with what sources 1–4 show, regenerate the
questions it suppressed and put them to the client directly.** That regenerated set is
usually the largest single block of the review — and it is **one finding, not fifteen**
(§4, Block B).

**3 · Promised but not attached.** Every answer implying a document, checked against what
is actually attached. Four states, and only one of them is a real ask:

| State | What it means | Action |
|---|---|---|
| ✅ Attached | The document is on the question | none |
| 📁 Elsewhere | It exists in Double, or arrived by note/email, just not on the organizer | **none — and say so loudly** |
| 🔴 Missing | Shown, implied by the answer, nothing attached | **ask** |
| 🚫 Never asked | Suppressed by family 2 | **ask, and it is not the client's fault** |

`get_organizer_responses` returns the attached file name per question — that is the
authoritative check, better than the folder. Note that a Double organizer's attachments
are **not** reachable through `list_files` / `list_file_library`.

**4 · Misclassification — the client is not an accountant.** They will label things
wrongly and hand you a list of "expenses" that includes items that are not deductible.
**This is normal and it is not a problem.** Take their list as raw input, reclassify it,
and only ask about what you genuinely cannot resolve.

> Lilian's framing, and the tone the whole review must carry: *"el hecho de que él haya
> cometido un error no quiere decir que no podamos trabajar o que se cree un gran
> problema. Simplemente analizamos la información y tomamos medidas."* Child support in
> an expense list is dropped and nobody is told off. **Write findings as work to be done,
> never as an alarm.**

Recurring ones: child support and personal insurance (not deductible); a whole loan
payment (principal never); health insurance (its own route, and a different one again for
a >2% S-corp shareholder); anything already deducted on an entity's own return.

**5 · Conflicts with what we already know.** The organizer against Double's own columns,
the client file, and the notes. The firm's `Tax Return Type` saying one thing while the
prior return says another is a real finding.

### The extra block when the prior year was prepared elsewhere

**Not optional, and worth more than everything else combined.** Nobody here knows what
carries forward unless somebody reads for it:

- **Net operating loss** (Form 172) — post-2017 NOLs carry forward indefinitely and offset
  up to 80% of taxable income. In the pilot this alone could absorb most of the year.
- **Suspended passive losses** (Form 8582), **capital loss carryover**, **Section 179 and
  depreciation basis**, **foreign tax credit carryover**, **prior overpayment applied
  forward**, and any **election** already made.
- **Basis**, wherever an entity loss was deducted in full — if basis was short, the loss
  should have been suspended, and the carryforward you are about to rely on is wrong.
- **Which states were filed**, and why. This is a filing obligation, not a deduction.
- **What the client's own business/entity structure actually is** — the pilot's client was
  taken for a sole trader and turned out to be an S-corp shareholder.

---

## 3. The comparison table — prior year on the left, this year on the right

Lilian's design, 2026-08-11. Build it **first**; the findings fall out of it.

One row per tax item. Group rows under headings — *Income · Entities · People · States ·
Deductions & credits · Carryovers*. Keep it to what actually differs plus the material
"same".

| Item | Prior year (YYYY) | This year (YYYY) | |
|---|---|---|---|
| K-1 — <entity> | Yes | Not reported | ⚠️ |
| Wages | Yes | Not reported | ⚠️ |
| Dependants | 1 | 0 | ❓ |
| State returns | Two | None assumed | ⚠️ |
| NOL carryforward | Generated | Not applied | 🔴 |

**The markers, and what each obliges:**

| | Meaning | Obligation |
|---|---|---|
| ⚠️ | **Disappeared** — there last year, absent now | **A question. Always.** This is the alert the table exists for |
| 🆕 | **New** — not there last year | Confirm it, and check what it drags in |
| ❓ | **Contradicts** — the sources disagree with each other | Resolve before preparing |
| 🔴 | **Blocks** — the return cannot be filed or would be wrong | Top of the question list |
| ✅ | **Consistent** | No action; include only where the "same" is load-bearing |

**Never write a ⚠️ as a conclusion.** *"He no longer has the K-1"* is a guess.
*"There was a K-1 last year and none this year — which entity, and on what date did he
leave or did it close?"* is the finding.

---

## 4. The output — this shape, every time

Five blocks, in this order. **Short. If a block runs long, it is doing another block's
job.**

### Block A — Can we prepare this return? (3 lines)

Verdict — **Yes / No, blocked on X / Not until Y is settled** — the single thing that
gates it, and how many questions the client owes. Nothing else.

### Block B — Findings, grouped by root cause

**This is the block that makes the review usable, and the grouping is the whole point.**
Lilian's instruction: *"del hecho de que no haya reportado ninguna fuente de income salen
varias preguntas… agrupar un poco esto."*

**One root cause = one numbered finding**, however many questions it generates. Do not
list fifteen missing documents when one wrong answer caused all fifteen.

Each finding, in four lines and no more:

```
N. HEADLINE — what is wrong, in one line.        [🔴 blocks | 🟠 ask | 🟡 confirm]
   What we know: the evidence, and from which source.
   Why it matters: the money or the risk. One sentence.
   → Asks: Q3, Q4, Q5
```

Target **five to eight findings**. More than ten means the grouping has not been done.

### Block C — Already in hand · do NOT ask for these

A short list of what the client has already supplied, and where it sits. **Never omit
this block**, even when it is one line. It is what stops the firm asking a client for a
document they sent last week — the single fastest way to lose their patience.

### Block D — Questions for the client

The deliverable. Numbered, ordered so the answer that unblocks the most comes first, in
**the client's language**, and formatted for a phone: one idea per block, a document name
in **English and capitalised** when they will have to say it out loud or search for it.

Rules that come from the firm's client-message convention:

- **Ask, don't diagnose.** *"When did you move to Florida?"* — not *"your organizer omits
  Montana."*
- **One question per thing you need.** Never a compound question; they answer the first
  half.
- **Say why** when the reason changes their answer — *"so we know whether another state
  return is needed"*.
- **Never ask for anything in Block C.**

### Block E — Notes for the file

What belongs in the Client Intelligence file (durable knowledge) and what belongs in the
Double note (the client's own information). **The findings themselves do not go in the
Double note** — [`double-mcp`](../double-mcp/) §7 rule 11.

---

## 5. Finishing the job

1. **Update the client's Client Intelligence file** — required, same session, and create
   it if missing (`CLAUDE.md` core convention). §6 gets the re-ask list; §5 gets the
   durable quirks. **Answers stay out; write the action.**
2. **Do not write the analysis to the Double note.** Ask Lilian if a finding genuinely
   belongs in front of the team.
3. **Deliver the review in chat.** Not an artifact, not a committed file.
4. **Remind them to delete the conversation.**

---

## 6. Update this skill when…

- **A review runs and something is caught that no detection family predicted** — add the
  family, with the case that produced it.
- **A review runs long or unstructured again.** That means §4 needs tightening, not that
  the case was special.
- **A client is asked for something they had already sent.** Block C failed; record why.
- **The 1040 organizer's logic is repaired** (BACKLOG IDEA-17) — family 2 shrinks, and the
  chokepoint list in
  [`tax-season-readiness`](../tax-season-readiness/references/individual-organizer-logic-defects.md)
  changes.
- **A per-question organizer read appears**, or Double adds redaction — §0 gets simpler.
- **A second year lands in Double for a client** — the comparison base stops being a PDF
  and the table can be built from two organizers.

## 7. Related

- [`double-mcp`](../double-mcp/) — §2.2 (the privacy rule, read it), §7 rule 11 (what a note carries).
- [`tax-season-readiness`](../tax-season-readiness/) — the layer above: *who* is ready. Its
  [`individual-organizer-logic-defects.md`](../tax-season-readiness/references/individual-organizer-logic-defects.md)
  is why family 2 exists, and its
  [`individual-organizer-questions.md`](../tax-season-readiness/references/individual-organizer-questions.md)
  is the 1040 question bank.
- [`client-intelligence`](../client-intelligence/) — where the durable output lands.
