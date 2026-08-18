---
name: tax-return-sop
description: Write, extend or review a JK Accounting Group TAX-RETURN SOP — the form-by-form procedure for preparing one kind of return (Form 1120-S is the first; 1120, 1065, 1040, 1041 and the state forms follow the same shape) — and use it to drive an actual return, producing the form-by-form, line-by-line tables a first-time preparer can work from. Use when creating or editing a `projects/sops/form-*-preparation.md`, when someone asks "how do I prepare a <form>?", when preparing a real return with a session assisting, or when a return raises a lesson worth writing down. Encodes what makes a tax-return SOP different from every other firm SOP (it must say WHERE EACH NUMBER COMES FROM, not which box it goes in), the required section spine, the build-the-map-from-the-prior-year method, the delivery format for a live return (one table per form: line · value · where it came from · the formula), the standing rule that any answer changing a figure is verified against the current-year PDF from irs.gov rather than from memory, and the working-paper archive every prepared return must leave behind.
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

## §4 · Driving a REAL return — the delivery format

**This is what the SOP is for, and the format matters as much as the figures.** After reading the
client's documents, deliver **one table per form, in the order they are prepared**, every table
with the same four columns:

| Line | Concept | Value | **Where it came from** |
|---|---|---|---|
| **7** | Inventory at end of year | **150,000** | 📖 Balance sheet → `Total for Other Current Assets` = `Inventory` **+ the clearing account** |
| **8** | Cost of goods sold | **20,000** | ƒ **= line 6 − line 7** → page 1 line 2 |

⛔ **Those two amounts are invented, and every example in this skill is.** A real figure belongs
in the client's working paper (§5) and **nowhere else in the repo** — including here. A skill is
read by everyone, gets published, and is the last place anyone thinks to look for client data.

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
   distributions net inside one capital account; the return needs both halves. **Ask for the
   ledger.**

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

- a new form's SOP is written, and something about **writing** it generalises
- a return turns up a trap that would have bitten any form
- the IRS renumbers or rewrites something and a session gets it wrong from memory
- Lilian rules on how a return should be presented or delivered
