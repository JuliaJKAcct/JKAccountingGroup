---
name: tax-return-sop
description: Write, extend or review a JK Accounting Group TAX-RETURN SOP — the form-by-form procedure for preparing one kind of return (Form 1120-S is the first; 1120, 1065, 1040, 1041 and the state forms follow the same shape) — and use it to drive an actual return, producing the form-by-form, line-by-line tables a first-time preparer can work from. Use when creating or editing a `projects/sops/form-*-preparation.md`, when someone asks "how do I prepare a <form>?", when preparing a real return with a session assisting, or when a return raises a lesson worth writing down. Encodes what makes a tax-return SOP different from every other firm SOP (it must say WHERE EACH NUMBER COMES FROM, not which box it goes in), the required section spine, the build-the-map-from-the-prior-year method, the delivery format for a live return (a table per form, the order of preparation, the flow of figures between forms, the checkboxes with their reasons, the explanations, the statements and attachments the return requires — drafted, because some block e-file — every K-1 read box by box, and the ENTRY ROUTE saying where each figure is actually typed, since most lines on a computed form cannot be typed where they appear), all pitched at someone who knows nothing about taxes or forms, the standing rule that any answer changing a figure is verified against the current-year PDF from irs.gov rather than from memory, and the working-paper archive every prepared return must leave behind.
---

# Tax-return SOPs — and preparing a return from one

**One SOP per tax form.** `form-1120s-preparation.md` is the first and the reference; the goal is
one for every form the firm files. This skill is how they get written, and how one is used to
actually prepare a return.

> **Built on [`sop-authoring`](../sop-authoring/), not instead of it.** That skill owns the house
> SOP structure, the review workflow and the Atlas render engine — all of which apply here. **Load
> it too when you are writing or rendering.** This skill adds only what is specific to a return.

---

## §0 · Why these are their own kind of SOP

Most firm SOPs answer *what do I do next?*. A tax-return SOP has to answer something harder:

> **Where does this number come from, and how do I know it is the right one?**

The boxes are the easy part — the software shows them. What nobody can guess is **which account
feeds which line, under this client's conventions**, and those conventions are written down
nowhere. That is the whole job.

**Write for someone who has never filled this form in.** Not a checklist for someone who already
knows: an explanation that lets a competent bookkeeper produce a correct return alone.

---

## §1 · 🔑 The method at the centre: build the map from the prior year

**Before filling in anything, reproduce LAST year's filed return from LAST year's books.**

Every difference you find is a **convention** — and the convention is the thing you could not have
guessed. Repeat it, or this year's return is not comparable to last year's.

⚠️ **Reproducing is not auditing.** A filed return is closed. You are reading it as an answer key.
If something looks wrong, raise it — never change this year's approach on your own initiative.

**What it catches, every time:** which accounts a subtotal really covers · how equity was mapped ·
which boxes were ticked · whether a figure was netted or grossed · what the software chose by
default.

---

## §2 · The section spine

Follow it in this order; a preparer works the document top-down.

| § | What it holds |
|---|---|
| **The process at a glance** | A **flowchart** — the whole return in one picture |
| **§0A · Where every number comes from** | The **sources table** (three or four documents, no more) and a **diagram of how figures travel**. ⚠️ Build the diagram with [`impeccable`](../impeccable/) + the Atlas `.dflow` component — colour encodes *which source*, and every source also carries a numbered badge, because colour alone must never carry meaning |
| **§0B · What this return actually is** | One paragraph. Who pays the tax, what the form is really saying |
| **§1 · Gather this before you start** | ⚠️ **Half the list is about the prior year.** Always ask for the **general ledger**, always ask for **gross** figures where an account nets things, always **check the basis printed on every export** |
| **§2 · The extension gate** | 🛑 A hard stop before work begins |
| **§3 · Build the map** | §1 above |
| **§4 … §n · One section per form**, in the order they are prepared | Each with a **line table**: line · what it is · the **formula, or where you read it** |
| **Tie-out checks** | Every equality that must hold before filing. **A check that fails is a mapping error, not a rounding difference** |
| **Common pitfalls** | Each one that has bitten a real return |
| **Working-paper archive** | §5 below |
| **Where things live** | The map back to Double, the skills, the tools |
| **Appendices** | Intake sheet · the accounts→lines map · every formula in one place |

### The line table — the unit this SOP is made of

| Line | What it is | Formula, or where you read it |
|---|---|---|
| **7** | Inventory at end of year | 📖 **read** off the balance sheet — but read the trap in §4B |
| **8** | Cost of goods sold | ƒ `= line 6 − line 7` → carry to **page 1, line 2** |

**Two kinds of number, and telling them apart is most of the skill:**
- 📖 **READ** — you look it up and copy it. The risk is reading the **wrong source**.
- ƒ **CALCULATED** — it falls out of others. The risk is that a wrong input **still looks plausible**.

🔑 **A calculated figure that comes out impossible is a gift.** Negative purchases, a balance sheet
that will not balance — it tells you the map is wrong. **The dangerous case is the wrong figure
that looks fine**, which is why the tie-outs exist.

---

## §3 · 🛑 Verify every figure-changing answer against the CURRENT-YEAR PDF

**Open the form from irs.gov and read the question, the line and its "If Yes" sentence off the
form.** Not from memory, not from an older SOP, not from what the software labels it.

**The IRS renumbers and rewrites.** Two that cost this firm real time:

- **Form 7205 was inserted at page-1 line 19 from TY2023**, moving Other deductions to 20, Total
  deductions to 21 and Ordinary business income to **22**. Anything you read describing "line 21"
  is TY2022 or earlier.
- **Schedule B's §163(j) question was INVERTED in the TY2019 revision.** TY2019 onward asks
  whether you satisfy conditions that *trigger* Form 8990 and ends *"If 'Yes,' complete and attach
  Form 8990."*; **TY2018** asked the opposite — conditions that *exempt* you — and ended *"If
  'No,' complete and attach Form 8990."* A preparer answering the current question the old way
  **attaches Form 8990 and silently loses the interest deduction.**
  ⚠️ **This bullet has now been wrong twice**, and both times in the same way: the *shape* of the
  trap was right and a **detail was supplied from memory** — first the polarity itself, then the
  revision year (written as 2023; it is 2019, four filing seasons earlier) **and a "quotation" of
  the old ending that is on no Form 1120-S ever printed.** Pulling the current PDF is not enough
  when you make a claim about an **older** form: `irs.gov/pub/irs-prior/f1120s--<year>.pdf` is one
  fetch, and it is the difference between a fact and a plausible sentence.

**This SOP shipped that second error itself**, written from memory, and it survived one review. It
was caught by pulling the PDF. **That is the rule: pull the PDF.**

⚠️ **And check the column headers, not just the line numbers.** Form 7203's Part III columns are
(a) this year · (b) carryover · (c) allowable against **stock** basis · (d) allowable against
**debt** basis · (e) carries forward. Reading (d) as "disallowed" reduces debt basis by a loss that
was never allowed, and stays invisible until next year's opening figures.

---

### §3A · Two checks that belong to EVERY form's SOP

**These are not 1120-S facts — write the equivalent into each new form's SOP.**

**1 · A Yes/No that asserts a FACT is tested against the ledger, never answered from memory.**
Some questions ask for a *position* (an election, an intent); those are decisions. Others assert
**what happened** — did you make payments requiring Forms 1099, did you have foreign accounts, did
you dispose of a digital asset. **Those are findings, and the books hold the answer.** Run the test,
by payee or by account as the question requires, and ask the client only for the one document the
test actually turns on. A wrong answer here is a false statement on a signed return, and it is
*discoverable* — which a judgement call is not.

**2 · 🛑 Print the finished return and read the FORM LIST before transmitting.** Tax software
attaches a form the moment its parent line is touched, and **fixing the line does not detach the
form.** So a figure keyed on the wrong line and then moved leaves its form behind — blank, silent,
and it transmits. _(Real one: a number keyed on Form 1120-S page 1 line **15, Depletion**, pulled
in **Form T, the Forest Activities Schedule** — four blank pages of a **forestry** form on a
bathroom-fixture retailer's return, still attached after the figure was corrected. The same copy
carried a blank Form 4797 and a blank Schedule D; **seven of twenty pages were empty forms.**)_
**Deleting them changes no figure.** Leaving them in invites a question you have no reason to
answer.

## §4 · Driving a REAL return — the delivery format

**This is what the SOP is for, and the format matters as much as the figures.**

> 🔑 **The standard, in Lilian's own words (2026-08-19):** *"las tablas por cada formulario · el flujo
> de los números entre las formas · las explicaciones · las casillas que tengo que marcar."* She has
> little experience with returns and **gets lost between the forms, the pages and the numbers** — so
> a table of values without a route through the forms does not help her. In English: *the tables per
> form, the flow of the figures between the forms, the explanations, and the boxes I have to tick.*
> **Deliver all four, every time, unprompted — plus part 5, which is what makes the flow readable,
> and parts 6 to 9 below, which are what she has had to ask for since.**

> 🛑 **THE CALIBRATION, and it governs all nine parts _(Lilian, 2026-08-19)_:** *"Imagina que esto
> tiene que hacerlo una persona que no sabe prácticamente nada de taxes, ni de formularios, ni de
> cómo fluyen las cosas en los formularios, ni las fórmulas detrás de cada número. Este es el nivel
> de detalle que necesitamos."*
> **Write for someone who knows none of it** — not the tax, not the forms, not how figures move
> between them, not the arithmetic behind a number. **Assume nothing is obvious**, including which
> screen a number is typed on. ⚠️ **The test is not "is this correct?" — it is "could someone who
> has never seen this form act on it without asking a second question?"**

> 🔴 **And the standard she set on 2026-08-19 (late), after two things a complete-looking delivery
> had left out:** *"necesito que para la próxima sea más específico en cuanto al nivel de detalle y
> de análisis en la preparación de los tax returns."* **The two gaps were not figures.** One was a
> **statement the return could not e-file without**; the other was **a K-1 explained only as the two
> boxes that carried numbers.** Parts 6 and 7 exist because of them.

### The eight things every delivery carries

**1 · ONE TABLE PER FORM, in the order the forms are actually prepared** — every table with the same
columns, and **the FORM, the PART and the LINE NUMBER named**:

| Line | Concept | Value | **Where it came from** | 🛠️ **Where it is ENTERED** |
|---|---|---|---|---|
| **7** | Inventory at end of year | **150,000** | 📖 Balance sheet → `Total for Other Current Assets` = `Inventory` **+ the clearing account** | ✅ typed on the form |
| **8** | Cost of goods sold | **20,000** | ƒ **= line 6 − line 7** → page 1 line 2 | **computed — do not type** |

⛔ **Those two amounts are invented, and every example in this skill is.** A real figure belongs
in the client's working paper (§5) and **nowhere else in the repo** — including here. A skill is
read by everyone, gets published, and is the last place anyone thinks to look for client data.


**2 · THE ORDER OF PREPARATION, up front — and every circularity called out.** Forms are not
prepared in the order they are numbered. Open with the route:

```
Schedule C Parts I & II, everything EXCEPT line 30
        ↓  line 29
Form 8829  (line 8 ← Sch C line 29)
        ↓  line 36
Schedule C line 30  →  line 31
```

⚠️ **A circular reference is the single thing most likely to strand a first-time preparer** — Form
8829 wants a Schedule C line that is not final until Form 8829 comes back. **Say it out loud.**

**3 · THE FLOW BETWEEN FORMS.** Every figure that leaves one form and lands on another gets an
arrow with **both endpoints named by line**: *"Schedule SE line 12 → **Schedule 2 line 4**"*,
*"Form 8829 line 36 → **Schedule C line 30**"*, *"Schedule 8812 line 27 → **Form 1040 line 28**"*.
A value with no destination is half a delivery.

**4 · THE CHECKBOXES, WITH THE ANSWER AND THE REASON.** A wrong tick is as fatal as a wrong figure
and far harder to spot. Name the form, the line, the answer, and **what checking it does**:
> *Form 8962 **line 9** → **Yes**, because the policy is shared with another taxpayer. Checking Yes
> is what routes you to Part IV. · Form 8962 **line 34** → **Yes**; its own printed text is the
> instruction for lines 12–23. · Schedule C **line H** → tick only if the business started this year.*

⚠️ **Some checkboxes are gates, not disclosures** — they change which lines you may complete, or
whether the return can be e-filed at all. Flag those as gates.

**5 · THE EXPLANATION — why, not only what.** *"Line 24 is the lesser of (a) and (d)"* is a rule;
*"whichever is smaller caps the credit, so the credit never exceeds what the insurance actually
cost"* is what makes it stick and what lets her catch the next one herself.

**Rules for the delivery, all of them learned by getting them wrong:**

1. **Every value carries its origin.** Name the **report and the account**, or the **formula**.
   "From the P&L" is not an origin; `Total for Cost of Goods Sold` is.
2. **Show the arithmetic** for anything computed, with the inputs spelled out.
3. **State the cross-checks as you go** — "✅ this must equal the P&L's `Total for Income`".
4. **Flag what a figure ISN'T.** The traps are all near-misses: the inventory subtotal that is not
   the `Inventory` account, the `Payroll Expenses` account that is not wages, the `Taxes Paid`
   account that is all sales tax.
5. **Deliver figures in chat, never committed** — except the working paper (§5).
6. **When something changes, give the DELTA table** — what moves and what does not. A preparer
   mid-entry needs to know which fields to revisit, not to re-read everything.
7. **Separate a fact from a decision.** Anything a reviewer could ask *"why did you do that?"*
   about is a **decision**: present the options and **let Lilian rule**. Positions are hers.
8. ⚠️ **Never answer a shareholder-level question from the balance sheet.** Contributions and
   distributions net inside one capital account; **the ANALYSIS needs both halves — always**, and
   how the return then presents them is a separate question with its own rules (the firm may net
   them to zero: [1120-S SOP §5C-v](../../../projects/sops/form-1120s-preparation.md)). **Ask for
   the ledger.**
9. 🔑 **Distinguish the IRS FORM from the SOFTWARE.** A field on the screen is not necessarily a
   field on the form, and the difference is exactly where a preparer loses an afternoon. Say which
   is which — *"there is no date on Form 8829; the date you are typing is ATX's, and it drives the
   part-year proration"* — and record the software's own route when someone tells you what it is
   _(ATX builds Form 8829 from its **Home Office Expenses** worksheet; the dependants for Schedule
   EIC are entered on the **1040 Dependents tab**, not on Schedule EIC itself)_.
10. 🔑 **When the software throws an error, treat it as evidence and go read the instruction.** A
    tax package encodes rules the preparer has not met yet. **Quote the error, find the rule it is
    enforcing, then explain both** — that turns an obstacle into the thing that gets remembered.
    _(2026-08-19: ATX's *"Line 11 must not be completed when Part IV… are used"* encodes the IRS
    rule in the software's own words, and it had produced a repayment of the **full Table 5
    limitation** where the right answer was a couple of dollars.)_
11. ⚠️ **Read the FORM's own printed text before explaining a line.** Several lines carry their
    operating instructions on the face of the form — Form 8962 line 34's "Yes" branch is the
    complete procedure for lines 12–23, and Form 8829's header is the one-per-home rule. **Quote
    it; do not paraphrase it from the instructions.**

---

**6 · 🛑 THE STATEMENTS AND ATTACHMENTS THE RETURN REQUIRES — and DRAFT them.**

**A return is not finished when its figures are right. It is finished when it TRANSMITS.** Several
positions require an **attached statement**, and some are **hard e-file blockers** — the software
refuses to send until one exists. **None of them appears on any form's face.**

🔑 **The tell: a position the FORM cannot express.** A form has boxes for amounts and none for *why
this loss is still available*, *why no carryback was taken*, or *which company an election covers*.
**Wherever the answer is a sentence rather than a number, expect a statement.**

**Say it BEFORE the preparer opens the software, and hand over paste-ready text** — a statement is
prose about a tax position, which is the firm's job, and it is written from reasoning the return
itself never shows. _(A delivery that was correct line by line still cost the preparer time because
it never mentioned that an NOL carryover on Schedule 1 blocks e-file without an explanation
statement. **She met it as a red error and wrote the justification herself.** Lilian, 2026-08-19.)_

**7 · 🔑 EVERY K-1 GETS A BOX-BY-BOX — both halves of it.**

**Standing requirement _(Lilian, 2026-08-19)_: whenever a taxpayer receives a K-1, the analysis
explains how the K-1 is filled in.** Not only the two or three boxes carrying figures — **all of it**,
because the parts that decide the return are often the ones with no number in them:

- **The identifying parts.** Whose K-1, at what allocation percentage, whose address, how many
  shares or units at each end of the year — and whether `Final K-1` is ticked. ⚠️ **The allocation
  percentage is frequently a RULING rather than a fact** (a departing owner, a mid-year transfer);
  **say whose ruling it is.**
- **Every numbered box, including the blank ones** — a blank box is a fact about the entity, and the
  boxes that hide things are the aggregate ones (*other deductions*, *other information*), where a
  letter code changes which form the figure belongs on.
- **Where each box LANDS on the recipient's return**, form and line — the K-1 never says.
- **The boxes that touch BASIS**, separated from the ones that are income or deduction, because they
  run through a different form and in a fixed order.

🔑 **And the direction of travel: a K-1 is produced BY the entity's return, not filled in
independently.** Every figure is a share of a line the entity already computed. **A number on a K-1
that is not on the entity's Schedule K is an error upstream — go back to the entity's return.**

⚠️ **Where a box's destination is not the obvious one, say so** — an entity K-1 routinely sends items
to forms nobody expects (a §1231 amount to Form 4797 rather than Schedule D; royalties to a different
*part* of the same schedule as the ordinary income). **A destination table whose rows are "its own
form" has not done the job.**

⚠️ **And the recipient's schedule has its own checkboxes with their own triggers.** Read the printed
note above the line rather than assuming the obvious condition — *"if you report a loss"* is rarely
the whole list.

⚠️ **Read the software's warnings on the K-1 input and account for every one.** Several fire on
essentially every return of that type (the S-corporation §1.1367-1(g) carryover notice, the
no-carryback notice, the whole `Comparison` family when a joint return becomes a single one).
**A warning with a recorded reason is finished work; a warning nobody looked at is a defect
waiting.** 🔑 **The right answer is usually "change nothing" — but say WHY, with the figures that
make it hypothetical**, because "ignore it" is not something a preparer can act on with confidence.

---

**8 · 🛑 THE ENTRY ROUTE — where the number is actually TYPED, which is usually not the form it appears on.**

🔑 **This is the part that turns an analysis into something a person can execute**, and it is the one
a session most reliably forgets, because it is invisible from the IRS forms. **A tax form has two
different facts a preparer needs, and only one of them is on the form:**

| | |
|---|---|
| **What number goes on the line** | ✅ the form and its instructions say this |
| **WHERE YOU TYPE IT** | 🔴 **nowhere on the form** — and it is frequently a *different* screen |

> 🔑 **The principle: A COMPUTED FORM IS AN OUTPUT, NOT AN INPUT SCREEN.** Most of what appears on a
> derived form arrives from somewhere else and cannot be typed where it is displayed. **If a line
> will not accept a number, you are on the wrong screen — go and find the input that feeds it.**

🔴 **AND ITS DIAGNOSTIC, which is worth more than the rule:**
**A BLANK LINE ON A COMPUTED FORM MEANS A MISSING INPUT, NOT A MISSING ENTRY ON THAT FORM.** Do not
try to type into it. **Ask what feeds it, and go there.**
⚠️ **This kind of error FOOTS** — every total on the form is internally consistent, nothing is
flagged, and the only symptom is a final figure that is quietly wrong by the amount of the missing
input. **It is the hardest defect on a return to see and the easiest to prevent.**

🛑 **AND THE SECOND HALF OF THE SAME DIAGNOSTIC, which the first one hides:
A WRONG LINE ON A COMPUTED FORM MEANS A WRONG *INPUT*, AND THE FORM WILL NEVER TELL YOU WHICH.**
A computed line is *always* internally consistent with whatever fed it — **so a mistyped input
produces a form that adds up perfectly and is wrong from that line down.** Blank input, mistyped
input: **two unrelated causes, one identical symptom.** ⛔ **Never diagnose the line that is wrong —
diagnose what feeds it.**

🔑 **Therefore the defence is TWO checks, and they must be written into the tie-outs as their own
row, because each misses what the other catches:**
1. **RECOMPUTE THE FINAL FIGURE BY HAND**, off the figures that *should* feed it, on the **PRINTED**
   form, after every re-key. Not "check the form" — the form agrees with itself by construction.
   **Add the numbers yourself.**
2. **COMPARE EACH INPUT DIGIT BY DIGIT** against its source. This is what names *which* input is
   wrong once check 1 says something is.

_(Both halves came off one return, eight days apart, on the same line of the same form. Ending stock
basis was **overstated by exactly the nondeductible-expenses box**, because that box never reached
the input screen — a **missing** input. The box was fixed, and the next read-back was **still**
overstated, now by a smaller amount, because the contribution had been typed with two digits
transposed — a **wrong** input. Same line, same clean-looking form, twice. And that line
opens the following year, so both would have travelled.)_

**So every line table carries a column for it**, and the working paper keeps it:

| Line | Concept | Value | Where it came from | 🛠️ **Where it is ENTERED** |
|---|---|---|---|---|
| … | … | … | *(the IRS source — form, line, or the books)* | *(the actual screen and field, or **"computed — do not type"**)* |

**Three rules for that last column:**

1. ⚠️ **Mark it as the SOFTWARE's, not the IRS's.** A screen name is a vendor fact and next year's
   version may move it. **The source line is the tax fact; the entry route is a convenience** —
   never present one as the other _(delivery rule 9)_.
2. ✅ **Say "computed — do not type" explicitly** where that is the answer. A blank in this column
   reads as *unknown*, and a preparer will hunt for a field that does not exist.
3. 🔑 **Name the FEEDER form and box, not just the screen.** *"K-1 input, box 16 code D"* survives a
   software update; *"the third field on the second tab"* does not.

_(Lilian, 2026-08-19, on Form 7203: **"la línea 2 no es algo que yo podía llenar en la misma forma
7203. Lo correcto era ir al K1 y buscar dónde colocar las distribuciones, que de hecho se colocan en
el box 16, código D, y dónde colocar las contribuciones."** The analysis had given her every line of
that form and its arithmetic, and she still could not enter it, because **only one of its fifteen
lines is typed on the form itself.**)_

---

### Part 9 · 🛑 A FINDING IS NOT DELIVERED UNTIL IT CARRIES ITS FIX

> 🔑 **Lilian, 2026-08-20:** *"Cuando encuentres errores como el de `Description of Home Office is
> required`, necesito que me digas cómo corregirlo, no que simplemente lo señales."*

**Naming a defect is half the job. The half that gets it off the return is saying what to do about
it** — and the person reading has *"poca experiencia en declaraciones"* and is sitting in front of
the software with the error on screen. ⛔ **"This field is blank / this box looks wrong / check this"
is not a deliverable.**

**Every finding ships with four things:**

| | | Why it is not optional |
|---|---|---|
| 1 | 🛠️ **WHERE** — the exact screen and field | The whole point of part 8. A finding on a computed form usually gets fixed somewhere else entirely |
| 2 | ✏️ **WHAT TO TYPE** — the literal value, or the rule that produces it | 🔴 **The one most often missing.** *"Fill in the description"* leaves them staring at an empty box. **Give the text.** Where it depends on a fact we do not have, give the **pattern** and name the fact |
| 3 | 🔍 **HOW TO KNOW IT WORKED** — the figure or state to read back | A fix nobody verified is a fix nobody made |
| 4 | ⚖️ **WHAT IT MOVES** — or explicitly *"nothing"* | Silence reads as *"nothing"*, and the reader cannot tell the difference between a cosmetic entry and one that shifts the refund |

🔴 **AND WHERE THE FINDING IS A QUESTION RATHER THAN A DEFECT, DELIVER THE BRANCHES, NOT THE
QUESTION.** *"Is this box right?"* hands the work back. **"Read X. If it says A, untick it; if it
says B, leave it"** is an answer they can act on — and it often turns out the firm already holds the
document that settles it _(**look before you ask**, [`method.md`](../../../projects/pre-return-review/method.md)
rule 1)_.

⚠️ **A VENDOR FIELD IS NOT AN EXCUSE FOR VAGUENESS — IT IS THE REASON THE ANSWER IS NEEDED.** When
the field exists only in the software and on no IRS form, **there is nothing for the preparer to look
up.** Nobody can research their way to the right value, so the delivery must simply state it. 🔑 **Say
which it is** — *"ATX's field, not on Form 8829"* — **and then say what goes in it anyway.**

📌 **And when a vendor field turns out to be required every time, that is not a one-off correction —
it goes into the form's SOP as a standing entry**, so the next return never meets the error at all.
_(Lilian's second instruction the same day: *"tienes que recordar siempre llenar este campo."*)_

---

## §5 · Every prepared return leaves a working paper

**Writing it is part of preparing the return** — [`projects/tax-returns/`](../../../projects/tax-returns/),
one file per return, from `_workpaper-template.md`.

**Why:** the session is deleted. The filed PDF survives and the reasoning behind it does not — the
derivations, the conventions decoded from the prior year, the traps, the judgement calls. Without
the file, next year starts from a blank page.

**Write it AS you go.** Sourcing reconstructed a week later is exactly what it exists to replace.

⛔ **It is the only place in the repo that holds client dollar figures, and the limit is absolute:**
never an SSN/ITIN, bank or card number, home address, date of birth or login. Read its README first.

---

## §6 · Starting a new form's SOP

1. **Name it** `projects/sops/form-<form>-preparation.md`.
2. **Copy the spine** from §2 — and from `form-1120s-preparation.md`, which is the worked reference.
3. **Write it beside a real return.** An SOP written in the abstract records what you *expected*
   the traps to be. Every section worth keeping in the 1120-S one came from something that actually
   went wrong.
4. **Ship it 🟡 Draft** until Lilian signs it off.
5. Render it with [`sop-authoring`](../sop-authoring/), add it to the Hub with
   [`knowledge-hub`](../knowledge-hub/), and add rows to `CLAUDE.md`, `projects/sops/README.md`
   and the [skills index](../README.md).

**What carries across forms, and what does not.** Carries: the prior-year method · the two kinds of
number · the tie-out discipline · pull-the-PDF · the working paper · gross-not-net. Does not: the
line map, the conventions, the pitfalls — **those are per form and per client, and inventing them
is how an SOP becomes confidently wrong.**

---

## Update this skill when…

- **Lilian tells you the delivery missed something she needed.** §4 exists because she said so twice
  — first that the tables never located Form 8829, then that she needs the flow, the explanations
  and the checkboxes as well. **Her corrections ARE the standard; write them in rather than
  remembering them.**
- **Someone reports how the SOFTWARE behaves** — which worksheet feeds which form, which screen an
  entry has to be made on, which error it throws. That is knowledge no IRS document carries, and
  rule 9 says to record it.

- a new form's SOP is written, and something about **writing** it generalises
- a return turns up a trap that would have bitten any form
- the IRS renumbers or rewrites something and a session gets it wrong from memory
- Lilian rules on how a return should be presented or delivered
