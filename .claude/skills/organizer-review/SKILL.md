---
name: organizer-review
description: Review a client's tax organizer BEFORE anyone starts their return — read their answers, reconcile them against the prior-year return (or prior organizer), the Double notes, the client's files and the firm's own Double columns, and turn what is missing, contradictory or misclassified into ONE grouped list of questions to send back. Use when asked to analyse / review / check a client's organizer, to compare a client's year against last year, to work out what to ask a client before preparing their return, or when an organizer looks complete but the return cannot actually be prepared. Encodes the fixed output structure (a prior-year → this-year comparison table, findings grouped by root cause, a what-we-already-have guard, and the ready-to-send question list), the six sources that must be read in order, the six detection families, the rule that an earlier answer legitimately stops the organizer asking for what follows from it (so the gap is ours to re-ask, not a fault in the organizer), the extra carryover block when the prior return was prepared elsewhere, and the privacy discipline that governs reading organizer responses at all.
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
> genuinely matter. §4's **Block D** exists to make this visible.

**No prior year in Double?** Most clients have only one year there. The comparison base
is then a **prior-year return the client uploaded** or one Lilian redacts and supplies.
Ask for it — the pilot proved it is where the value is.

---

## 2. What to look for — the six detection families

Run all six. Families 1–5 are roughly ordered by how often they bite. **Family 6 is last
only because it applies to fewer clients, not because it matters less** — and it is a
different kind of check: 1–5 detect against evidence in front of you, 6 derives from what
you know about the client's structure and has no trigger at all. It is the one that
catches an entire missing entity return.

**1 · Disappearances — the highest-value family.** Something on last year's return or
organizer that is absent this year. **Each one is a question, never a conclusion.**

> **The disappearance rule, in the firm's own words (Lilian):** a company that closed
> **during** the year still issues a K-1 for that year. The only ways an item legitimately
> vanishes are that the client **left** or the entity **closed in a prior** year. So never
> accept the absence — ask **which entity, and on what date**. Clients routinely assume
> "the company closed, so it doesn't count."

Applies well beyond K-1s: a W-2 employer, a rental, a 1099 payer, a dependant, a state,
an estimated-payment pattern.

> **When the household moves, question the FILING STATUS itself — not just the
> dependants.** Lilian's catch (2026-08-11), and it is the one a checklist never makes. A
> dependant who disappears, a new mention of child support, an address that changed: each
> is a small puzzle on its own, and together they may mean **the marriage ended**. Filing
> status is decided by the position on **31 December**, and it changes the standard
> deduction, the brackets and most credits — it bars Married Filing Separately from
> several outright, EIC and the education credits among them — and often the state
> return. It is worth far more than the dependant line that started the enquiry.
> **Ask the client to describe the situation. Do NOT hand them a menu of statuses.**
> Lilian's correction, 2026-08-11, and it is a tone rule with teeth: *"no voy a ponerle
> cosas catastróficas como viudo… es demasiada información."* Listing *married / separated
> / divorced / widowed* at someone reads as cold, invites them to pick the nearest box
> rather than explain, and floats possibilities nobody raised. **One open question does the
> job better:** *"tell us how things stand at home — what changed during the year, and what
> your family situation was on 31 December?"* Then narrow only to the **facts** the return
> needs: who lived in the home, and for how many months.
>
> **The categories are OURS, for classifying their answer — not the question.** Keep them
> in your head while you read what they write:
> - **Married at year end** — and a **surviving spouse** is generally treated as married for
>   the year of the death, so a bereavement does not automatically change that year's status.
>   **They may then qualify as Qualifying Surviving Spouse for the TWO years after**, which
>   carries joint rates and the joint standard deduction. ⚠️ **Nothing will tell you this** —
>   the firm's organizer has no Widowed option at all (see
>   [`individual-organizer-logic-defects.md`](../tax-season-readiness/references/individual-organizer-logic-defects.md)),
>   so it only ever surfaces from the client's own description. That is precisely why this
>   checklist has to carry it.
> - **Legally separated under a decree of separate maintenance** — unmarried at year end.
> - **Married but living apart**, where §7703(b) can treat them as unmarried and open
>   **Head of Household**. **The operative threshold is §7703(b)(3): the spouse must not have
>   been a member of the household during the LAST SIX MONTHS of the year** — that one fact
>   decides the whole branch, and it is *not* one of the §2(b) tests, so "the rest of §2(b)"
>   does not cover it. On top of it you still need a qualifying child in the home and the
>   remaining §2(b) conditions. This is the case a plain description is most likely to reveal
>   that a menu would not.
>
> ⚠️ **This is the same rule as "ask facts, not family-law documents" (Block E), one level up:** the
> legal category informs how we *treat* the answer; it is never what we put in front of the
> client. Never infer the status, never carry last year's forward because nothing said
> otherwise, and never assume a client who says "married" today was married at year end.

**2 · Questions we have no answer to, because of an earlier answer.**

Organizer logic only asks for a document once an earlier answer makes it relevant. A
client who says they had **no income** is not then asked to complete a Profit & Loss, a
home-office worksheet or a vehicle log — **and that is right.** There is no sense
asking someone with no income for the paperwork that belongs to income; it is what keeps
a simple client out of a 120-slide interrogation.

So the finding is **never** that the organizer failed, and never that questions were
"hidden" or "suppressed" from the client. Write it the way it actually is:

> **Because the client indicated X, we have no answers to the questions that follow from
> it — and sources 1–6 give us good reason to think we need them.** Always name the
> reason. *(Invented illustration: "last year's return reported rental income, and the
> bank statements she sent show deposits from the same tenant this year.")*

⚠️ **Wording matters, and Lilian set this rule specifically (2026-08-11)** after a review
described the situation as though the organizer had gone wrong. It had not — an upstream
answer legitimately closed the branch beneath it, and the organizer correctly stopped
asking. Phrasing it as a defect makes a colleague distrust a tool that is working, and
makes the client look at fault when they are not. **The organizer did the
right thing with the answer it was given.** Our job is to notice that the answer looks
wrong against the other five sources, and to put the questions to the client ourselves.

That regenerated set is usually the largest part of the review — and it is **one finding,
not fifteen** (§4, Block C).

*(A genuine defect in the organizer's own wiring is a different thing entirely, does not
belong in a client's review, and goes to
[`individual-organizer-logic-defects.md`](../tax-season-readiness/references/individual-organizer-logic-defects.md).)*

**3 · Promised but not attached.** Every answer implying a document, checked against what
is actually attached. Four states, and only one of them is a real ask:

| State | What it means | Action |
|---|---|---|
| ✅ Attached | The document is on the question | none |
| 📁 Elsewhere | It exists in Double, or arrived by note/email, just not on the organizer | **none — and say so loudly** |
| 🔴 Missing | Shown, implied by the answer, nothing attached | **ask** |
| 🚫 Not requested | An earlier answer made it irrelevant — family 2 | **ask directly; nobody is at fault** |

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

**6 · What the structure obliges — derive the documents, don't wait to be told.**

**A client's structure dictates which documents must exist, whether or not anyone
mentions them.** Work forward from what you know about them and ask for what the
structure requires. This is what a preparer does automatically and a checklist never does.

| If the client is… | These must exist | And the trap |
|---|---|---|
| **A shareholder in an S corporation** | **A K-1, every year, for every shareholder** — including a loss year. **Plus a W-2** if they work in the business and take money out; the IRS requires reasonable compensation (see [`reasonable-compensation`](../reasonable-compensation/)) | **In practice the shareholder has no K-1 until the entity's return is prepared and filed** — so the entity return is a *prerequisite*, not a parallel task. Find out whether it is done and who is doing it. A calendar-year 1120-S is due the **15th day of the third month** — 15 March, moving to the next business day when that is a weekend or holiday — extendable six months to 15 September. Its late-filing penalty runs **per shareholder, per month, capped at 12 months** (§6699) |
| Paid by their own S corp | Money out is **wages + distributions**, not self-employment income. **Distributions are not a separate form** — they appear on the K-1, and are tax-free only to the extent of **stock basis** (and a corporation carrying accumulated E&P from a prior C-corp life can throw a taxable dividend on top) | A total "received from the company" that has not been split into wages vs. distributions cannot be entered on a return at all |
| A partner in a partnership | A K-1 (Form 1065). **No W-2** — a partner is paid through guaranteed payments and/or distributive share | People describe both as "salary" |
| A shareholder who deducted an entity loss in full | A **basis** computation — **Form 7203**, required whenever a shareholder claims an S-corp loss, takes a distribution, or disposes of stock. Ask for it by name | Without basis the loss suspends instead; every carryforward built on it is wrong. The limitation order is **basis → at-risk (Form 6198) → passive (Form 8582)** |
| An employer of subcontractors | **1099-NECs they owe**, as the payer | Establish *who* paid — them personally, or the entity |

**Write it as the preparer's chain, not as a list of missing paperwork:** *"you own an
S corporation → it owes you a K-1 → it can only issue one after it files its own return →
so tell us who is preparing it."* A client understands that; "please send your K-1" invites
"what K-1?"

### The extra block when the prior year was prepared elsewhere

**Not optional, and worth more than everything else combined.** Nobody here knows what
carries forward unless somebody reads for it:

- **Net operating loss** (Form 172, new for 2025) — post-2017 NOLs carry forward indefinitely
  and offset up to **80% of taxable income computed without the NOL deduction**, for tax years
  beginning after 2020. In the pilot this alone could absorb most of the year.
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

*Invented illustration — never build the example from a real client's file:*

| Item | Prior year (YYYY) | This year (YYYY) | |
|---|---|---|---|
| Rental — <property> | Reported on Sch. E | Not reported | ⚠️ |
| 1099-INT — <bank> | Yes | Not reported | ⚠️ |
| Sole-proprietor income | None | Reported | 🆕 |
| Education credit | Claimed | 1098-T not on file | ❓ |
| Capital loss carryforward | Generated | Not applied | 🔴 |

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

**Six blocks, in this order.** **Short. If a block runs long, it is doing another block's
job.**

### Block A — Can we prepare this return? (3 lines)

Verdict — **Yes / No, blocked on X / Not until Y is settled** — the single thing that
gates it, and how many questions the client owes. Nothing else.

### Block B — The prior-year → this-year table

The comparison table built in §3, in full, with its markers. **It goes in the output, not
just in your head** — it is the fastest thing in the review to read, and it is what a
second preparer checks your findings against.

**Every ⚠️ and ❓ must be *accounted for* by a finding below — several rows will usually
map to ONE finding**, which is the whole point of grouping. A row that maps to none means
the grouping missed it. Do not read this as one marker, one finding: that produces exactly
the padded list Block C's five-to-eight limit exists to prevent.

### Block C — Findings, grouped by root cause

**This is the block that makes the review usable, and the grouping is the whole point.**
Lilian's instruction: *"del hecho de que no haya reportado ninguna fuente de income salen
varias preguntas… agrupar un poco esto."*

**One root cause = one numbered finding**, however many questions it generates. Do not
list fifteen missing documents when one wrong answer caused all fifteen.

**Show the trail — a finding nobody can follow is not usable.** Lilian's instruction
(2026-08-11): the "what we know" line names *what was reported, what is missing, and what
the prior year did*, so the reader understands the point without opening anything.
*(Invented illustration: "She reported <expense type>, the supporting <form> was not
attached, and the prior year has no <form> either because that return took the standard
deduction.")* That sentence is the finding. *"<Expense type> unclear"* is not.

> ⚠️ **This is the one place the review and the repo diverge, and both rules are real.**
> The **review is delivered in chat**, where a client's answers may be stated — that is
> what makes the trail followable. The **client file may not repeat them** (§0 rule 5). So
> the same finding is written twice, deliberately: in full in the review, and as the
> *action* in the file. Do not soften the chat version to match the file, and do not copy
> the chat version into the file.

Each finding, in four lines and no more:

```
N. HEADLINE — what is wrong, in one line.        [🔴 blocks | 🟠 ask | 🟡 confirm]
   What we know: the evidence, and from which source.
   Why it matters: the money or the risk. One sentence.
   → Asks: Q3, Q4, Q5
```

Target **five to eight findings**. More than ten means the grouping has not been done.

> **Write as the preparer, not as an auditor.** Lilian's framing: *"imagina que eres un
> preparador de impuestos… puedes decirle al cliente cuál es la fuente del error y qué
> necesitas para resolverlo."* So every finding names **where the inconsistency comes
> from** and **what specifically resolves it** — not that something is wrong, but *why the
> two records disagree* and *what one answer would settle it*.
>
> And **reason about it** rather than listing it. When two facts cannot both be true, say
> so, say which reading fits more of the evidence, then ask. *(Invented illustration: "she
> reports selling the rental in March, and also twelve months of rent received — one of
> those is wrong, most likely the sale date. Ask; don't pick one.")* That reasoning is the
> whole reason a person does this and a checklist cannot — but it stops at **ask**, never
> at a conclusion filed as fact.

### Block D — Already in hand · what it is, where it came from, what it replaces

**Never omit this block**, even when it is one line. It does two jobs.

The first is the guard: it stops the firm asking a client for a document they sent last
week — the single fastest way to lose their patience.

The second matters more, and is why the block carries **provenance**. Lilian's
instruction (2026-08-11): *"puede ser que yo haya recopilado la información del cliente y
la haya guardado en diferentes sitios… tú necesitas decir que esa información está y de
dónde lo obtuvimos."* **The person running the review is often not the person who
gathered the material.** Julia may ask for this analysis on a client whose information
Lilian filed across a Double note, the client file and the file library. If the review
does not surface it, Julia concludes it is missing and asks the client again.

One row per item:

*(Invented illustration — build the real one from the client's own sources, never copied
from another client's file.)*

| What we have | Where it came from | What it substitutes for |
|---|---|---|
| Mileage log | Double → `Others > <year>`, uploaded <date> | The organizer's vehicle block |
| Rental income and expense figures | Double note "<title>", from the client's text message of <date> | The Schedule E worksheet |
| Prior-year return | Double file library, uploaded by the client | The comparison base for §3 |

**Say what it substitutes for.** *"There is a Double note with her figures"* is filing;
*"the worksheet is not missing — the figures are in a Double note from her text message
of <date>, and that is what we build Schedule E from"* is the answer to the question the
preparer actually has.

**Say when a substitute is not equivalent.** Figures in a message are not a signed P&L
template; a worksheet completed before a mid-year move may not cover both homes. Name the
gap, so nobody treats "we have it" as "it is sufficient".

### Block E — Questions for the client

The deliverable. Numbered, ordered so the answer that unblocks the most comes first, in
**the client's language**, and formatted for a phone: one idea per block, a document name
in **English and capitalised** when they will have to say it out loud or search for it.

Rules that come from the firm's client-message convention:

- **Ask, don't diagnose.** Never tell them what is *wrong* with their answer — ask for
  what you need. *(In the disagreement case below this extends rather than reverses: you
  still don't diagnose, but you do show which records you are comparing.)*
- **One question per thing you need.** Never a compound question; they answer the first
  half.
- **Say why** when the reason changes their answer — *"so we know whether another state
  return is needed"*.
- **Never ask for anything in Block D.**
- **The internal checklist is not the client message.** Categories, code sections and edge
  cases are how *we* classify an answer; the client gets a plain question and room to
  explain. Listing the possibilities at them — especially the grave ones — reads as cold,
  and gets you a box ticked instead of the story you need. Ask openly, then narrow to facts.
- **Ask for facts, not FAMILY-LAW documents** — *the documents case of the rule above.* The firm does not open with a request for
  custody orders, divorce decrees, separation agreements or a signed Form 8332. **Ask the
  facts the return needs instead** — who lived where, for how many months, what the
  position was on 31 December — because those facts are what the return runs on, and
  asking a client to produce their custody paperwork changes the tone of the
  relationship. The instrument stays internal knowledge for how we *treat* the answer,
  and **is raised only if the answer makes it unavoidable** — a non-custodial parent
  claiming a child does need a signed Form 8332 attached to the return under §152(e), so
  that request can become unavoidable.
  ⚠️ **Family-law paperwork only.** This does **not** extend to ordinary tax documents —
  Form 7203, a mileage log, a finance agreement, the prior-year return are all asked for
  by name (family 6), and should be.
  _(Lilian, 2026-08-11: "no preguntamos por ese tipo de documento".)_

#### Where two records disagree: show the client both, then ask

**This is the shape that gets an explanation instead of a one-word answer**, and it is
Lilian's (2026-08-11). A bare *"how many children do you have?"* gets a number back and
resolves nothing. Lay the records side by side and the client explains the situation
themselves — which is what you actually need.

Four moves, in this order:

*Invented illustration throughout — a real client's records never become the teaching
example:*

1. **Recite what they told us**, in their words. *"You mentioned that you now rent out the
   apartment on Oak Street."* This shows you read what they sent, and it is the half of
   the picture they already agree with.
2. **State what we see**, naming each record and its year. *"Your 2023 return reported
   rental income from that address, and we have nothing for it in 2024."*
3. **Ask the open question.** *"Can you explain what happened with that property?"* Open
   first — their explanation usually answers questions you did not think to ask.
4. **Then narrow** to the specific facts the return needs — **one question per block,
   listed separately, never run together.** The compound-question rule above still binds
   here, and this is the move where it is easiest to break:
   > *"Was it rented for the whole year?"*
   > *"If only part of the year, which months?"*
   > *"Did you sell it?"*

**Say plainly that it doesn't add up.** Lilian's own closing line is *"porque aquí hay
algo raro"* — and that honesty is the point. It is not an accusation, and hiding the
reason behind a neutral question wastes the exchange: a client who does not know why you
are asking has no idea how much detail you need.

**Showing your working is not diagnosing.** The Block E rule still holds — never tell them
what is *wrong* with their answer *(invented illustration: "you failed to report your
rental income")*. What this shape adds is telling them **which records you are comparing
and what does not line up** *("last year's return reported rent from the Oak Street
property, and this year it isn't there")*. The first puts them on the defensive; the
second recruits them.

**Use this shape wherever two records genuinely disagree** — a disappearance, a
contradiction, anything a client has to *explain* rather than simply send. **A
straightforward missing document is just an ask**, not a four-move message: *(invented illustration: "please send
your Form 1098-E")* needs no preamble. Applying the full shape to every marker in Block B
rebuilds exactly the padded list the five-to-eight limit exists to prevent.

### Block F — Notes for the file

What belongs in the Client Intelligence file (durable knowledge) and what belongs in the
Double note (the client's own information). **Our assessment does not go in the Double
note — observation to the note, judgement to the CI file.** *"No K-1 this year; last year
had one"* is welcome there; *"the organizer is unusable as filed"* is not.
[`double-mcp`](../double-mcp/) §7 rule 11 is the authority, and it is easy to get
backwards.

#### Write the file so the tax year can be answered a year from now

Lilian's requirement (2026-08-11): she wants to be able to ask, later, **"what happened
with this client's 2025 taxes? what problem did we have? what did they report?"** — and
get an answer from the file. A review that only produces a chat message has produced
nothing durable.

So the client file's §6 gets a **`Tax year YYYY — the review`** entry carrying:

- **What gated the return** — the one or two things that actually held it up.
- **Every question we put to the client**, and **its answer once it arrives**.
  ⚠️ **Record the ask, not the recital.** Block E's four-move shape builds a question out of what
  each record says, organizer included — so the version that goes in the file is the ask with the
  *"your organizer says X"* opening stripped off. And if the client's reply restates an organizer
  answer (*"I ticked that by mistake"*), record the **corrected fact**, not the reply (tick it,
  append the answer and the date — the `client-intelligence` convention for answered
  items). This is the part that makes the year answerable later.
- **What we established from the prior-year return** — carryovers, states, entities,
  filing status. Prior-return facts are ordinary client knowledge, not organizer
  responses, and they belong here.
- **What was decided and why**, including anything left unresolved at filing.

**The bar in §0 rule 5 still stands over all of it:** the file records the question and,
once the client tells us, their answer to *us* — never what they ticked in the organizer.
In practice that costs almost nothing, because the answer we act on is the one they give
when we ask.

⚠️ **Client files are published** — they feed the Knowledge Hub and the client-intelligence
review dashboard (an Artifact). **Tax findings on those pages are fine** (Lilian, 2026-08-11); what
must never reach them is an **identifier** — SSN/ITIN, passport, driver's licence, full account
numbers, dates of birth — because the Hub link circulates inside the team and can travel further.
That is the repo's existing two-data-homes rule, and `loadClients()` hard-aborts on the patterns it
can match as a backstop — **client files only**, not the SOPs the Hub also publishes. It misses a
passport or licence number, a date of birth, an address in prose, and even an SSN written with
spaces or dots rather than hyphens. **You are still the control**; see
[`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) and the [`knowledge-hub`](../knowledge-hub/) skill.

---

## 5. Finishing the job

1. **Update the client's Client Intelligence file** — required, same session, and create
   it if missing (`CLAUDE.md` core convention). §6 gets the re-ask list **and the `Tax year YYYY — the review` entry** (Block F); §5 gets the
   durable quirks. **The client's ORGANIZER answers stay out — write the action. What the client tells us directly when we ask goes in.**
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
- **A client is asked for something they had already sent.** Block D failed; record why.
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
- [`reasonable-compensation`](../reasonable-compensation/) — when family 6 turns up a shareholder-employee whose wages need defending.
- [`client-intelligence`](../client-intelligence/) — where the durable output lands.
