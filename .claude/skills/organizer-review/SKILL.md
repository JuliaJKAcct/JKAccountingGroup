---
name: organizer-review
description: The firm's PRE-RETURN REVIEW COMPANION — Lilian calls it "the tax preparer", though it never files anything. It reads everything the firm holds on a client (the Client Intelligence file, Double notes, files, properties and tax project, Julia's Gmail, Google Drive, Ping meeting notes, the organizer and its answers, and the prior-year return), reconciles them against each other, and turns what is missing, contradictory or misclassified into ONE grouped list of questions to send back — before anyone starts preparing. Use whenever asked to review / analyse / check a client before their return, to compare this year against last year, to work out what to ask a client, when an organizer reads "Completed" but the return cannot be worked, or when someone says "tax preparer", "revisión previa", "analiza el organizer de X" or "¿qué le preguntamos a este cliente?". Encodes the fixed output shape (verdict · prior-year→this-year comparison table · findings grouped by root cause · a we-already-have-this guard · the client question list · notes for the file), the nine sources that must be read in order, the six detection families, the carryover block when the prior year was prepared elsewhere, how the firm phrases a question to a client, and the privacy discipline for reading organizer answers at all. Delivered in chat — never an artifact, never committed.
---

# The pre-return review — what to ask the client, before anyone starts

> **Purpose and standing requirements:** [`projects/pre-return-review/`](../../../projects/pre-return-review/).
> **The firm's general analysis method** (not organizer-specific, and it applies to any review):
> [`method.md`](../../../projects/pre-return-review/method.md). Read both alongside this skill —
> this file is the *workflow*, they are the *why* and the *how we think*.

**Lilian calls this "the tax preparer."** It does not prepare or file anything. It is the
**companion for the review that happens before preparation starts**: it reads everything
the firm already holds on a client, notices what does not add up, and hands back the
questions that unblock the work.

**Why it exists, in her words (2026-08-11):** *"a veces, cuando pensamos que hay clientes
sometidos, nos encontramos con errores y problemas… y tenemos que perder mucho tiempo
analizando todo esto para volver a pedirle al cliente."* The cost is not the analysis —
it is the weeks lost to discovering one gap at a time — someone starts preparing, hits a
missing document, emails the client, waits days, hits the next one. **This skill collapses
that into one pass and one list of questions.**

**What it produces:** a short, fixed-shape review a preparer can act on in five minutes,
ending in the **questions to send the client** — grouped, deduplicated, and ordered so
the answer that unblocks the most comes first.

**What it is not:** a narrative. Lilian's instruction (2026-08-11) after the pilot ran
long: *"una cantidad de texto enorme sin ningún orden fijo y lógico"* is the failure
mode. **Follow §4's structure exactly, every time.** A reviewer should be able to open
two clients' reviews side by side and find the same thing in the same place.

---

## Starting cold — the first five minutes

**Assume you have no memory of this client.** Sessions that read organizer answers get
deleted (§0), so **every review starts from zero by design** and the repo is the only thing
that carries forward. Before anything else:

1. **Read the client's file** — `projects/client-intelligence/clients/<slug>.md`. Its §6
   `Tax year YYYY — the review` entry holds what a previous pass established, every question
   already put to the client, and any answers that came back. **If a review ran before, do
   not re-derive it and do not re-ask what is already answered there.**
2. **Read that same file's §5** — the standing quirks. How this client actually communicates is in there, and
   it is usually not the portal.
3. **Then run §1's nine sources.**

If the client has no file, create one (`CLAUDE.md` core convention) — you are the first pass,
and the next session will start from what you leave.

---

## 0. Before the first call — the privacy discipline

**Load [`double-mcp`](../double-mcp/) before the FIRST Double MCP call of any kind** — that is
`CLAUDE.md`'s standing rule, and sources 2–4 below are already Double calls, so it happens long
before you reach the organizer. **Then read its §2.2 in full before `get_organizer_responses`**,
which is the one call with rules of its own.

Reading a client's organizer answers is **permitted** (Lilian lifted the old ban 2026-08-11) and
comes with rules that do not bend. In short, and none of this is optional:

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
7. **Every example in this file — or any skill — is INVENTED, and labelled as such.** Never
   illustrate a rule with the client in front of you. Three separate review rounds caught this
   exact leak, twice inside the example being used to *teach* the rule against it. A real client's
   answers cannot be the teaching example for the rule about a real client's answers.
   *(This is a rule about **skills**. [`method.md`](../../../projects/pre-return-review/method.md)
   deliberately uses the real cases instead, de-identified — a rule there is only trustworthy if you
   can see what produced it. Its header says so.)*

The **findings** are free. *"No K-1 this year; last year had one"* is exactly the output
this permission exists to produce.

---

## 1. Read all nine sources, in this order — none is optional

**The organizer is a prompt, not a source.** In the pilot case, the organizer reported
**100% complete** and disclosed not one material fact about the return; everything came
from the prior return and a Double note. Auditing an organizer against itself finds
nothing.

| # | Source | What it gives you | Tool |
|---|---|---|---|
| 1 | **Client Intelligence** file | What the firm already knows; the open items from last time | `projects/client-intelligence/clients/<slug>.md` |
| 2 | **Double notes** | What the client sent **outside** the portal — texts, calls, meeting notes. ⚠️ A note header reading **`VIA VOICE` means Google Voice**, the firm's texting channel with clients — **not** a voice recording. A session misread it once (Lilian corrected it 2026-08-11); the next one will too | `list_notes(clientId)` |
| 3 | **Double files** | Documents that exist even though the organizer shows nothing | `list_files(clientId)`, `list_file_library(clientId)` |
| 4 | **Double properties + tax project** | The firm's own read: return type, organizer status, year, deadline | `list_client_properties`, `list_projects` |
| 5 | **Gmail — Julia's inbox AND sent mail** | What the client sent or was asked by email. **The firm has this access and a review that skips it is incomplete** (Lilian, 2026-08-11) | `search_threads`. **Search both directions** — the client's name, each owner's name, and their email domain, as `from:` and `to:`; what we already asked matters as much as what they sent |
| 6 | **Google Drive** | The client's folder — statements, worksheets, documents that never reached Double | `search_files` by client and owner name |
| 7 | **Ping Assistant** | Zoom/meeting summaries, transcripts and action items — what was actually *said* to the client | `search_meetings` (org-wide) and `resolve_person` on each owner; search by **owner name as well as business name** |
| 8 | **The organizer** — structure *and* responses | The answers, and which questions were even asked | `get_organizer`, `get_organizer_responses` |
| 9 | **The prior year** — return or organizer | The comparison base. §3 | ⚠️ **You may not open it yourself — see below** |

**Finding the IDs first:** every Double call needs a `clientId` — `list_clients(name:)` gets it, and
`list_organizers(clientId)` gets the organizer. The repo file is `clients/<slug>.md`, slug =
lowercase-hyphenated name. Transcripts from Ping are garbled auto-transcriptions: use what is
legible, tag it low-confidence, discard the rest.

> ### ⛔ The rule that prevents the worst output
>
> **A gap in the organizer is not a finding until you have looked for the answer in
> sources 1–7.** Asking a client for something they already sent is worse than not
> running the review at all — it burns the goodwill you need for the questions that
> genuinely matter. §4's **Block D** exists to make this visible.

> **Lilian's standing arrangement, 2026-08-11:** *"siempre trataré de estar pendiente de que tú
> tengas toda la información posible o, al menos, el acceso a ella."* She will put what the client
> sends into Client Intelligence or Double, and Julia's mailbox is reachable. **So the sources
> above are not a wish-list — the information is expected to be there.** If something you need is
> genuinely nowhere, that is worth telling her, because it means a channel is being missed. Do not
> quietly proceed without it and do not ask the client for it first.

### ⚠️ Source 9 has a route you must follow — read this before reaching for the PDF

**The prior-year return is where the value is** — in the pilot it produced every material fact
about the return, and the organizer produced none. **But you may not open the client's own copy.**
[`double-mcp`](../double-mcp/)'s document rule bars fetching client documents in order to read
them and **names filed tax returns specifically**. A copy sitting in their Double file library is
exactly that.

**So the route is:**

1. **Check whether a prior year exists in Double as an organizer** (`list_organizers(clientId)`).
   If it does, that is readable under §0 and it is the cleanest base. Only three clients have more
   than one year there.
2. **Otherwise, ask Lilian or Julia for the prior-year return as a redacted PDF** — they open it,
   remove the identifiers, and hand it to the session. That is how the pilot worked, and it is the
   *only* sanctioned route to a filed return.
3. **Note what the client file already tells you.** If a previous pass read that return, its
   findings are in the client's `Tax year YYYY — the review` entry — carryovers, states, entities,
   filing status. **Read that before asking for the PDF again**; you may not need it.
4. **Say so if you don't have it.** A review without the prior year is worth much less, and Block A
   must say which sources were unavailable. **Never proceed silently.**

⚠️ **Yes, this is uneven and the unevenness is deliberate:** the same client's *organizer answers*
may be read as data (§0), while their *filed return* may not be opened as a document. That is
recorded in [`double-mcp`](../double-mcp/) §2.2 as known, not an oversight — don't "resolve" it by
opening the PDF.

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
>   carries joint rates and the joint standard deduction. **Its own conditions, so nobody
>   applies it off the death alone:** a **dependent child living in the home**, the taxpayer
>   paying **more than half** the cost of keeping that home up, **not remarried**, and having
>   been eligible to file jointly in the year of the death. ⚠️ **Nothing will tell you this** —
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
> it — and the other sources give us good reason to think we need them.** Always name the
> reason. *(Invented illustration: "last year's return reported rental income, and the
> bank statements she sent show deposits from the same tenant this year.")*

⚠️ **Wording matters, and Lilian set this rule specifically (2026-08-11)** after a review
described the situation as though the organizer had gone wrong. It had not — an upstream
answer legitimately closed the branch beneath it, and the organizer correctly stopped
asking. Phrasing it as a defect makes a colleague distrust a tool that is working, and
makes the client look at fault when they are not. **The organizer did the
right thing with the answer it was given.** Our job is to notice that the answer looks
wrong against the other sources, and to put the questions to the client ourselves.

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
| **Anyone who bought health coverage through Healthcare.gov / the Marketplace** | **Form 1095-A** | ⚠️ **This one blocks filing outright**, unlike everything else on this list. The premium tax credit has to be reconciled on Form 8962 and the return is rejected without it — so establish the coverage early, and let the rest of the review proceed while you wait |
| Anyone with income outside withholding | **Estimated payments** — the dates and amounts | Ask in **both** directions: if they paid and nobody asks, the credit is lost; if they paid nothing, an underpayment penalty is coming and they should hear it now, not at filing |
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
gates it, and how many questions the client owes. **And if a source was empty, unreachable or
never checked, say so here** — a review that silently skipped one is worth less than it looks.
Nothing else.

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
   durable quirks.
   ⚠️ **Order both by consequence — only the first FOUR top-level bullets of §5 and of §6's
   "Outstanding items" ever reach the team.** The published client card renders four and a fifth
   appears nowhere ([`client-intelligence`](../client-intelligence/)). A long re-ask list is fine;
   just make sure the items that would cause a wrong return sit at the top, or they are invisible
   to everyone but the person who wrote them. **The client's ORGANIZER answers stay out — write the action. What the client tells us directly when we ask goes in.**
2. **Do not write the analysis to the Double note.** Ask Lilian if a finding genuinely
   belongs in front of the team.
3. **Deliver the review in chat.** Not an artifact, not a committed file.
4. **Remind them to delete the conversation.**

---

## 6. How this companion grows — the rule-capture protocol

**Lilian's stated goal (2026-08-11):** *"tener como un compañero que nos ayude en esta revisión
previa… bien configurado con nuestra forma de analizar las cosas y nuestra forma de pensar."*
That only happens if every correction she makes survives the session it was made in. This is how.

### Where a rule goes depends on what kind of rule it is

| Kind | What it is | Where it lives |
|---|---|---|
| **Domain** | How a tax thing behaves — a K-1 is issued for the year an entity closed; filing status is fixed on 31 December; an NOL offsets 80% | §2's detection families, or the carryover block |
| **Method** | How the work is done and shown | **[`method.md`](../../../projects/pre-return-review/method.md)** — it applies to any review, not just this one. Only the *organizer-shaped* specifics stay here: the five-to-eight cap, the six blocks, the marker set (§1, §3, §4) |
| **Relationship** | How the firm speaks to a client | **[`method.md`](../../../projects/pre-return-review/method.md) §7–8.** §4 Block E applies it to a pre-return question list; the rule itself lives there |
| **Case fact** | True of ONE client *(invented illustrations: she is paid quarterly; his warehouse lease renews in March; her prior year was prepared out of state)* | **Not here.** The client's file — **§4/§5 for the substance, §6 for the dated log** (`client-intelligence`'s own split) |

**The last row is the one that goes wrong.** A case fact written into this skill makes it longer
and less true; a rule left in a client file is lost to every other client. When unsure: *would this
still be true for a client I have never met?* If yes, it is a rule.

### Every rule carries its provenance

**Who set it, when, and the case that produced it.** Not decoration — it is what lets a future
session tell a **decision** from an **inference**, and judge whether a rule still applies when
circumstances change.

⚠️ **This exists because of a real failure (2026-08-11).** Lilian said she did not want to spend
time on the Knowledge Hub; a session turned that into "the Hub must not carry clients' tax
information", wrote it into three skills and enforced it in the build. Nobody could have traced
that back to a decision, because there wasn't one. **Never write an inference in the voice of a
rule.** If it is your reading of what someone wants, say so, and ask.

### A correction outranks a proposal — and gets marked

When a rule comes from Lilian **correcting** something already written, it is worth more than one
proposed and accepted, because it marks a place where the assistant's judgement diverged from the
firm's. Record the correction *and what it replaced*: the wrong version is the useful part.

Examples now in this file, all 2026-08-11 — describing an organizer's behaviour as a defect when
the organizer was right; handing a client a menu of marital statuses; asking a client for
family-law documents; writing a review as unstructured narrative. **Each of those was the natural
thing to do and each was wrong.** Nothing but the record stops the next session repeating them.

### After every run, record what it caught and what it missed

**Where:** a lesson about the *client* goes in their `Tax year YYYY — the review` entry; a lesson
about **this tool** — what the review missed, what a rule failed to catch — goes in §7 below or
[`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md), **never in the client file**. Client files are published;
repo-machinery hygiene is not client knowledge. **The second case is what tells you which rules are real.** One case cannot distinguish
a general rule from a quirk of that client, so resist promoting anything on the strength of a
single run.

### What is NOT yet settled — read before generalising

Several of the rules this review depends on are plainly not about tax organizers at all: *show the trail*, *show the client
both records*, *the internal checklist is not the client message*, *ask facts not documents*,
*derive the documents from the structure*, *a client's mistake is work, not an alarm*. They would
serve a bookkeeping cleanup or an agency matter equally well.

**They now live outside this skill** — [`projects/pre-return-review/method.md`](../../../projects/pre-return-review/method.md),
summarised in `CLAUDE.md`'s core conventions so **every session sees them without loading anything**.
Lilian's call, 2026-08-11: *"puedo necesitarlas para otras cosas, ya que no son exclusivas de
Organizer."* Read `method.md` alongside this skill; what remains here is what is genuinely
organizer-shaped.

**They were deliberately not split into a separate SKILL.** Two skills on one job is how a
session loads one and misses the other's rules, and one case is not enough to know what is general.
**Revisit after the second and third real reviews** — see the open loop in
[`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md).

### Calibrating it — run it cold, correct at the end

The way to find out whether this companion thinks like the firm is **not** to guide it. Ask for the
review, let it run to the end uncorrected, then compare against what you would have done. What it
misses is the rule that is missing. Correcting mid-flight teaches the session and not the file.

---

## 7. Update this skill when…

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

## 8. Related

- [`double-mcp`](../double-mcp/) — §2.2 (the privacy rule, read it), §7 rule 11 (what a note carries).
- [`tax-season-readiness`](../tax-season-readiness/) — the layer above: *who* is ready. Its
  [`individual-organizer-logic-defects.md`](../tax-season-readiness/references/individual-organizer-logic-defects.md)
  is why family 2 exists, and its
  [`individual-organizer-questions.md`](../tax-season-readiness/references/individual-organizer-questions.md)
  is the 1040 question bank.
- [`reasonable-compensation`](../reasonable-compensation/) — when family 6 turns up a shareholder-employee whose wages need defending.
- [`client-intelligence`](../client-intelligence/) — where the durable output lands.
