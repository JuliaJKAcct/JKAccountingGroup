# The 1040 organizer's conditional logic — defect report

**Audited 2026-08-11** against a live, published, `completed` organizer:
`JK 2025 1040 Organizer` (organizer `146070`), read with `get_organizer` —
**structure and logic only, no client answers**. 8 sections (6 carrying questions), ~120 slides,
16 logic rules.

> ⚠️ **This is ONE client's organizer, not "the template" — and the difference is not settled.**
> Every defect below is verified in `146070`. Whether they exist in **every** client's 1040
> organizer depends on where new organizers come from, which is **unconfirmed** (see "Fixing this"
> at the bottom — it is the same unknown blocking IDEA-16). They are *assumed* shared, because
> these organizers appear to be cloned from a common starting point, but nobody has checked a
> second one. **Before a fix is planned around this list, read one more client's 1040 organizer
> and record whether it matches.**

Lilian asked for this after the organizer-review pilot surfaced the first defect
("Necesito que me ayudes con eso también"). Every finding below is derived from the payload,
not inferred from tax knowledge.

---

## How the organizer's logic works — and why that is correct

Almost every document request is **hidden by default** and revealed by a conditional rule keyed to
an earlier answer. Select "Wages (W2)" and the W-2 upload appears; don't select it and the client
never sees it.

**This design is right and should be kept.** It is what stops the firm sending a client with one
W-2 a 120-slide interrogation about farming, rental property and stock options. The organizer
asking less is the feature.

**The consequence to design around** is that a wrong answer at a chokepoint silently removes
everything downstream, and the organizer still reports **100% complete** — because every *shown*
required question was answered. There are three chokepoints:

| Slide | Question | What it gates |
|---|---|---|
| `1742689` | **Income types** (required, multi-select) | Every income-document request, the whole Schedule C block, the vehicle block, home office |
| `1742686` | **"Did YOU pay for any of the following?"** (**not** required) | Medical, Form 1098, estimated-tax dates, 1098-E, 5498, 1098-T, charitable |
| `1742692` | **"Select the tax year"** | The entire **"New for 2025"** section — tips, overtime, vehicle-loan interest **and the age-65 question** — gated on the answer being exactly the string `"2025"` |

**Two of the three chokepoints are not even required questions.** `1742686` is `required: false`: a
client who skips it suppresses seven deduction follow-ups and loses nothing on the completion
meter. **`1742692` is `required: false` too**, and it is the worse of the pair — skipping it, or
picking the wrong year from a dropdown that still offers `2020` through `2025`, silently removes an
entire section. Both deserve to be required, and `1742692` arguably should not be a client-answered
question at all.

**None of that is a defect.** The defects are below.

---

## 🔴 Defect 1 — seven income types are dead ends

`1742689` offers 22 real income options. **Seven do nothing when selected**: the client ticks the
box, no follow-up appears, and no document is ever requested.

| Option | Why it's dead |
|---|---|
| **Rental income** | Appears in **no logic rule at all**. Compounded by Defect 2 |
| **Farming (Profit&Loss and Balance Sheet)** | Appears in **no logic rule at all** |
| **Gambling (Win-Loss statement)** | Appears in **no logic rule at all** |
| **Interest (1099-INT)** | See Defect 3 — a name mismatch orphans its slide |
| **Property sales (1099-S)** | Rule `192296` maps it to an **empty** slide list. (Note the separate option **"Home sell (1099-S)"** *does* work — rule `192308` opens the full purchase/sale/improvements branch) |
| **Lotto/gambling winnings (W2-G)** | Mapped to an **empty** slide list |
| **Railroad retirement income (RRB-1099)** | Mapped to an **empty** slide list |

A client with rental property, farm income or gambling winnings can answer this organizer
truthfully and completely and still never be asked for a single supporting document.

## 🔴 Defect 2 — the rental-property branch is unreachable

Slide `1742781` — *"Do you own any rental properties?"*, which carries the link to the firm's
rental template — is flagged **`hidden: true`**, and **no rule anywhere reveals it**.

Rule `192295` is wired correctly *from* that slide (`1742781 = yes` → show `1742783`, `1742784`),
but its trigger never fires. The rental template is therefore never requested from anyone.

The likely intent was `1742689 = "Rental income"` → show `1742781`. That link is simply missing.

## 🔴 Defect 3 — an option renamed without updating its rule

Rule `192296` contains a condition on the answer **`"Income from banks (1099-INT or other)"`**.
**That option does not exist** in `1742689`'s current list — the equivalent option now reads
**`"Interest (1099-INT)"`**.

Because Double matches the option **by its text**, the condition can never be true, and slide
`1742715` (*"Banks: Please upload any documents you received from banks this year"*) is orphaned.

This is the signature of an option being **renamed in the question without the rule being
updated** — worth checking for elsewhere whenever an option's wording is edited.

## 🟠 Defect 4 — the rental upload slide is a mislabeled copy

Slide `1742783`, shown by the rental rule, is headed:

> *"Upload the completed Foreign Income template you previously downloaded"*

It should ask for the **rental** template. The two are different documents — `1742781` links the
rental sheet, while the foreign sheet is linked from `1742774` and uploaded on slide `1742775`,
which carries the **identical heading**. `1742783` is a copy of `1742775` whose text was never
changed.

Invisible today because of Defect 2 — but it becomes client-facing the moment Defect 2 is fixed,
so fix both together.

## 🟠 Defect 5 — no path for a widowed taxpayer

`1742706` (marital status) offers **Single · Married · Separated · Divorced**. There is no
**Widowed** option, and rule `192299`, named **"Qualifying surviving spouse"**, has **empty
conditions and an empty slide list** — a placeholder that was never built.

A widowed client has to answer inaccurately, and Qualifying Surviving Spouse — a materially better
filing status than Single for someone with a dependent child — is never identified.

## 🟡 Defect 6 — alimony is only asked in one direction

`1742778` asks whether the client **received** alimony. Nothing asks whether they **paid** it,
which is deductible for divorces finalised before 2019.

Unlike the others this may be a deliberate simplification rather than a wiring fault — it is listed
so the decision gets made rather than inherited.

## ⚪ Defect 7 — two housekeeping oddities

- Rule `192305` is named **"Rental properties 2"** but its only conditional shows the **business
  income** slide (`1742785`) on the self-employment option. Duplicates part of `192307`. Cosmetic
  today; misleading to the next person editing the logic.
- Rule `192297` (**"SMLLC or Sole Prop Info"**) has an **empty condition set** with
  `showsSlideIds: [1742790]` (the P&L template). Whether Double reads an empty condition as
  *always* or *never* is **untested** — don't assume either. `1742790` is shown correctly by
  `192307` regardless, so nothing is broken; the rule is just unclear and should be removed or
  given a real condition.

---

## Fixing this is not a simple edit — read before promising anything

Per the [`double-mcp`](../../double-mcp/references/capability-map.md) capability map:

- Slides and logic are editable with `update_organizer` **only while an organizer is a draft**.
  Once published — which every organizer already sent to a client is — the structure is **frozen**;
  only `name` and `responsesVisibility` remain writable.
- **`update_organizer` deletes by omission.** The `slides` array is the complete desired state.
  Always `get_organizer` first, modify *that*, and send it back.
- **Publishing to the client portal is not available via MCP** at all.

So this cannot be repaired by editing an existing client's organizer. **The open question is where
new organizers come from** — a firm-wide template in Double, a clone of a previous client's, or
authored by hand. That is **unconfirmed** (it is the same unknown blocking
[`BACKLOG.md`](../../../../BACKLOG.md) IDEA-16 for the *business* organizer). Settle it with Lilian
or Double support **before** starting a rebuild, or the work lands on a draft that governs nothing.

**Precisely: the API can author, but it cannot ship.** `create_organizer` + `update_organizer`
*can* build a corrected draft programmatically. What is not exposed is **publishing** — so a human
has to finish the job in the Double UI either way, and an already-sent organizer cannot be touched
at all. Plan it as **a Double-UI job with our list in hand**, and treat any API authoring as a
convenience, not the route.

---

## Suggested order of repair

1. **Defect 3** — one condition's text. Smallest fix, restores a whole document request.
2. **Defect 2 + Defect 4** together — add the missing `Rental income → 1742781` link, and correct
   `1742783`'s heading in the same pass. Never ship Defect 2's fix alone.
3. **Defect 1's remaining five** — decide per option: wire it to a real follow-up, or remove the
   option. Offering a choice that leads nowhere is worse than not offering it.
4. **Defect 5** — add Widowed, and build or delete rule `192299`.
5. **Defect 6** — a decision, not a repair.
6. **Defect 7** — tidy while the logic is already open.

## Re-run this audit when…

- The organizer template is rebuilt — then re-audit rather than trusting this file.
- Any option's **wording** is edited: Double matches conditions by option text, so a rename breaks
  its rule silently (Defect 3 is exactly that, already shipped).
- A new tax year's organizer appears — `1742692`'s gate on the literal string `"2025"` needs
  rolling forward, and the hardcoded date in the dependants question with it (see
  [`individual-organizer-questions.md`](./individual-organizer-questions.md)).

## What must never go in this file

Client answers, names, figures, or anything from `get_organizer_responses`. This file is
**structure and logic only** — the same rule as its companion question-bank file.
