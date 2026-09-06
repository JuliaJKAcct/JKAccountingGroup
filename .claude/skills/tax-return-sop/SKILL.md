---
name: tax-return-sop
description: 🔴 PREPARE A CLIENT'S TAX RETURN — load this the moment anyone says "prepare X's tax return", "prepárame el Tax Return de X cliente", "hazme la declaración de X", "do X's 1120-S / 1040 / 1065", or asks for a return's figures as line-by-line tables. §4A is the entry point and it runs TWO PHASES from one sentence: PHASE 1 · LA REVISIÓN — call the `organizer-review` skill in full, ALWAYS and without being asked separately, to check the prior-year return against this year and find missing documents, contradictions and anything that raises an alarm; its Block A verdict is THE GATE. PHASE 2 · LA PREPARACIÓN — only if the gate says yes, deliver the line-by-line tables. Along the way: go to Double and gather it yourself — the client's BOOKS, the completed tax organizer, every file the client uploaded, the prior-year return through the redactor — and report what was found before computing anything. ALSO: write, extend or review a JK Accounting Group TAX-RETURN SOP — the form-by-form procedure for preparing one kind of return (Form 1120-S is the first; 1120, 1065, 1040, 1041 and the state forms follow the same shape) — and use it to drive an actual return, producing the form-by-form, line-by-line tables a first-time preparer can work from. Use when creating or editing a `projects/sops/form-*-preparation.md`, when someone asks "how do I prepare a <form>?", when preparing a real return with a session assisting, or when a return raises a lesson worth writing down. Encodes what makes a tax-return SOP different from every other firm SOP (it must say WHERE EACH NUMBER COMES FROM, not which box it goes in), the required section spine, the build-the-map-from-the-prior-year method, the delivery format for a live return (a table per form, the order of preparation, the flow of figures between forms, the checkboxes with their reasons, the explanations, the statements and attachments the return requires — drafted, because some block e-file — every K-1 read box by box, and the ENTRY ROUTE saying where each figure is actually typed, since most lines on a computed form cannot be typed where they appear), all pitched at someone who knows nothing about taxes or forms, the standing rule that any answer changing a figure is verified against the current-year PDF from irs.gov rather than from memory, and the working-paper archive every prepared return must leave behind.
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
| **§0C · 🗺️ The map of the form** | 🔴 **Which PAGE every schedule and line range is on**, read off the current-year PDF (§3). ⚠️ **Forms split their schedules across page breaks in places nobody guesses**, and "it is not on the form" is almost always "it is on the next page". Note which schedules share a page and which are split |
| **§1 · Gather this before you start** | ⚠️ **Half the list is about the prior year.** Always ask for the **general ledger**, always ask for **gross** figures where an account nets things, always **check the basis printed on every export**, and note that a books-versus-return basis mismatch is the NORMAL case, not a defect — ⛔ **it is never resolved by re-exporting on the other basis** *(the reasoning belongs in the SOP's book-to-tax section, not here: a package's cash toggle cannot change the method the entity ADOPTED, it leaves journal-entry accruals behind, and it strips the liabilities the reconciliation is found from — see the 1120-S SOP's §9A step 0)* |
| **§2 · The extension gate** | 🛑 A hard stop before work begins |
| **§3 · Build the map** | §1 above |
| **§4 … §n · One section per form**, in the order they are prepared | Each with a **line table**: line · what it is · the **formula, or where you read it** |
| 🔗 **The HANDOFF — what flows to another return** | **Any form that FEEDS another return owes this** — an 1120-S or 1065 to its owners' 1040s, a 1041 to its beneficiaries. **Walk every box that can carry a figure**, say where each is TYPED on the receiving return, name what this side **cannot** supply *(the recipient's own carryovers and basis history — they are on THEIR return, not this one)*, and what must **match** on both. ⛔ **Preparing this return is not preparing theirs** (part 10) |
| **Tie-out checks** | Every equality that must hold before filing. **A check that fails is a mapping error, not a rounding difference** |
| **Common pitfalls** | Each one that has bitten a real return |
| **Working-paper archive** | §5 below |
| **Where things live** | The map back to Double, the skills, the tools |
| **Appendices** | Intake sheet · the accounts→lines map · every formula in one place |

### The line table — the unit this SOP is made of

**Head it with the FORM AND ITS PAGE** — *"Form 1125-A, page 1"* — because a schedule's lines do not
all live on the page its name suggests (§4B):

| Line | What it is | Formula, or where you read it |
|---|---|---|
| **7** | Inventory at end of year | 📖 **read** off the balance sheet — but read the trap in §4B |
| **8** | Cost of goods sold | ƒ `= line 6 − line 7` → carry to **page 1, line 2** |

🛑 **And name the lines that are ZERO, with their reason.** A table showing only the lines that carry
an amount reads as the complete map of the form and is not one — the reader's leftover figure then goes
to a line the table never mentioned. **`0` with a reason, or one sentence saying every line not listed
is zero.**

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

### §3A · Four checks that belong to EVERY form's SOP

**These are not 1120-S facts — write the equivalent into each new form's SOP.**

**1 · A Yes/No that asserts a FACT is tested against the ledger, never answered from memory.**
Some questions ask for a *position* (an election, an intent); those are decisions. Others assert
**what happened** — did you make payments requiring Forms 1099, did you have foreign accounts, did
you dispose of a digital asset. **Those are findings, and the books hold the answer.** Run the test,
by payee or by account as the question requires, and ask the client only for the one document the
test actually turns on. A wrong answer here is a false statement on a signed return, and it is
*discoverable* — which a judgement call is not.

**2 · 🛑 THE ABSENCE OF A SOFTWARE ERROR IS NOT EVIDENCE THAT A FIELD IS COMPLETE.**
A vendor's diagnostics catch **what the vendor chose to catch**, and nothing else — so *"it didn't
flag anything"* is a statement about the software, never about the return. 🔑 **Every form has boxes
the software is silent about**, and the only thing that finds them is a checklist someone actually
runs. **So each form's SOP owes a tie-out row for every field that must be ANSWERED rather than
computed** — the Yes/No items, the elections, the header questions.
⚠️ **And when you record such a field, record what you actually know:** which software, which
version, whose observation, and **whether e-file validation was ever tested** — a return that has not
been transmitted has proved nothing about transmission. _(1120-S §5A item G is the worked example.)_

**3 · 🛑 Print the finished return and read the FORM LIST before transmitting.** Tax software
attaches a form the moment its parent line is touched, and **fixing the line does not detach the
form.** So a figure keyed on the wrong line and then moved leaves its form behind — blank, silent,
and it transmits. _(Real one: a number keyed on Form 1120-S page 1 line **15, Depletion**, pulled
in **Form T, the Forest Activities Schedule** — four blank pages of a **forestry** form on a
bathroom-fixture retailer's return, still attached after the figure was corrected. The same copy
carried a blank Form 4797 and a blank Schedule D; **seven of twenty pages were empty forms.**)_
**Deleting them changes no figure.** Leaving them in invites a question you have no reason to
answer.

**4 · 🔵 AN INFORMATIONAL BOX GETS ITS *PURPOSE* SETTLED BEFORE ITS *VALUE* — and a figure that
matches is not a figure that is caused.**
Every return has boxes that feed **nobody's tax**: disclosures the entity hands its owners so they can
run a test on **their own** return. 🛑 **They are the boxes a session is most likely to get wrong, because
they look like every other figure and nothing checks them** — no diagnostic, no tie-out, no client who
notices. **Two rules, in this order:**

- **① Read what the box is FOR before deciding what goes in it.** The form's own instruction is usually
  one vague sentence; the answer is in **the form the RECIPIENT fills in**, whose shape says what he
  needs. _(Worked example: 1120-S Schedule K-1 box 17 code AC — the 1120-S instruction says only
  "provide information shareholders need", while the Form 8990 worksheet the shareholder fills has **one
  column per preceding tax year** and computes the average itself. That shape is what settles that the
  K-1 carries **one year's** receipts, not an average. [1120-S SOP §11F](../../../projects/sops/form-1120s-preparation.md).)_
- **② When one value appears in two places, CHANGE ONE AND LOOK.** Do not build an explanation for the
  match. 🔑 **A one-click experiment beats three rounds of reasoning**, and it is available in every
  forms-based program: untick the optional worksheet, or clear the field, and see whether the other
  value moves. _(In the session this came from, the same number sitting in an optional worksheet and in
  the disclosure field was read as a mechanism **three times running**. The client's own preparer settled
  it by unchecking one box.)_

⚠️ **And whatever value such a box ends up carrying, EVERY owner's copy must carry the same basis for
it.** A 50/50 pair showing two unrelated numbers for one entity-level item is a visible defect on a
signed return even when the tax is identical — and it is exactly what per-owner overrides produce.
🛠️ **Enter it once at the entity and let the software split it.**

⚠️ **These fields are often MANUAL and ROLL FORWARD.** Where the software cannot compute a figure — code
AC cannot be computed, because §448(c) can require aggregating a related entity's receipts — **a rolled
file arrives holding LAST YEAR's number, looking exactly like a computed default.** 🛑 **Add a tie-out row
for every such field, and check it every year.**

## §4 · Driving a REAL return

### 4A · 🛑 THE TRIGGER — *"prepárame el Tax Return de X cliente"*

> 🔑 **Lilian, 2026-08-20, setting how every return starts from now on:** *"Te voy a decir: por
> favor, prepárame el Tax Return de X cliente. Quiero que vayas a Double, [veas] qué es la
> información que encuentres… y este mismo análisis que hicimos aquí con las tablas y las
> explicaciones."*

**That sentence is the whole instruction. It is not a request for a checklist of what to collect —
it means: GO AND GET IT YOURSELF from Double.** ⛔ **Do not open by asking what the client sent.**
The person is asking precisely so they do not have to assemble it.
ⓘ **That person may be Julia**, who does not follow this machinery — so the answer is plain language
either way.

#### ⓪ PHASE 0 · Three things that must be settled BEFORE phase 1 starts

1. 🔴 **WHICH FORM, and WHICH YEAR.** Double's **`Tax Return Type`** property is the firm's own answer
   *(Lilian maintains it — "bastante correctas", fairly correct, so read it before inferring)*, and
   the **tax project** carries the year and status. **Then open that form's SOP** —
   [`form-1120s-preparation.md`](../../../projects/sops/form-1120s-preparation.md),
   [`form-1040-preparation.md`](../../../projects/sops/form-1040-preparation.md) — because §1 of that
   SOP is the real gather list and it differs by form.
2. 🛑 **THE EXTENSION GATE.** Before any work: is the return already late, and was an extension filed?
   Every form SOP has this as a hard stop. **A missed deadline changes what you are doing**, not just
   when.
3. 🔑 **A COMPANY RETURN RUNS OFF ITS BOOKS AND FEEDS THE OWNER'S 1040 — never the reverse.** So for a
   company, the organizer is not the centre of gravity; the **general ledger** is.
   ⛔ **BUT THAT IS THE ORDER OF DEPENDENCY, NOT A LICENCE TO DO BOTH.** **Prepare only the return
   that was asked for** _(part 10 — Lilian, 2026-08-21: "si te digo que preparo el tax return de una
   compañía, no preparo el del dueño")_. The company's return ends in a **handoff** — §8 of the
   working paper, the tables left ready — and **the owner's 1040 is a separate request on a separate
   day.**
   ⚠️ **The dependency still binds the other way:** asked for the 1040 while the company's return is
   unprepared, **the K-1 does not exist** — that is a Block A *"No, blocked on X"*, and the answer is
   which return has to come first.

🔑 **Why these come first:** phase 1 cannot pick a prior year without knowing **which year** is being
prepared (its source 9), cannot know which reports are the books without knowing **which form**
(its source 10), and **the extension gate is a hard stop** — there is no point reading ten sources
for a return that needed a different conversation three weeks ago.

#### 🔑 IT RUNS IN TWO PHASES, AND ONE SENTENCE STARTS BOTH

> 🔑 **Lilian's decision, 2026-08-20 (later):** *"De las primeras cosas que quiero que hagas es que
> tengamos todas las documentaciones necesarias y revisar el tax return del año pasado para
> encontrar si hay alguna cosa que salte una alarma o levante sospechas… Ese revisador de organizers
> que creamos sería muy útil a la hora de crear un tax return, porque va a analizar si nos falta
> algún documento o no. Luego, este preparador de impuestos ejecutaría las herramientas que tiene
> para preparar los impuestos."*

| | Phase | What it is | Ends in |
|---|---|---|---|
| **1** | 🔍 **LA REVISIÓN** *(the review)* | the [`organizer-review`](../organizer-review/) skill — **run it in full, from this skill, without being asked separately** | its **Block A verdict**: *can this return be prepared?* |
| ⚖️ | **THE GATE** | Block A's answer, and nothing else | ↓ or ⛔ |
| **2** | 🧮 **LA PREPARACIÓN** *(the preparation)* | **§4B below** — the tables per form, the flow, the checkboxes, the entry route | the figures to type |

🛑 **PHASE 1 IS NOT OPTIONAL AND IS NOT A FALLBACK. IT ALWAYS RUNS FIRST** _(Lilian, 2026-08-20:
"siempre, sin preguntar")_. **It is slower on a clean client — and the clean client is exactly where
what nobody looked at gets through.** _(The shape it catches, invented to illustrate: an **NOL carryforward** sitting in a prior year that
nothing in the current year points at, on a client whose current-year documents are complete. **The
preparation would never open that return.**)_

⛔ **THE OLD WORDING WAS CIRCULAR AND IS STRUCK.** This section used to say *"run `organizer-review`
first **when** the books are incomplete, or a carryover is unknown, or the organizer contradicts the
documents."* 🔑 **You cannot know any of those until the review has run** — it made phase 1
conditional on the answer phase 1 produces. **The review is the first step, not the exception.**

#### ⚖️ The gate — what Block A's verdict does

🔑 **Block A defines exactly four verdicts and this table consumes them** — ⛔ **do not invent a
fifth, and do not soften one to let the preparation proceed.** The producer is
[`organizer-review`](../organizer-review/) Block A; **its wording governs.**

| Verdict | What happens next |
|---|---|
| ✅ **Yes** | **Continue straight into §4B in the same reply.** Deliver the review compactly — verdict, the prior-year→this-year table, anything found — then the preparation tables. **Do not stop to ask permission**; she asked for the return |
| 🟡 **Yes, with an open question** | **Continue into §4B** — and **carry the question into the working paper's `6 · Open at filing` AND into the delivery itself**, so it is in front of her, not only in a file. 🛑 **This verdict is available only when NO finding is marked 🔴** *(Block A's own rule)*. ⚠️ **The test is not "is it small?" — it is *does any figure on the return depend on the answer?* If it does, it is not this row** |
| ⛔ **No, blocked on X** · ⛔ **Not until Y is settled** | 🛑 **STOP AT THE QUESTION LIST.** Deliver phase 1's output and **do not prepare.** ⛔ **Never prepare around a hole and flag it afterwards** — a figure with no source does not become one by being surrounded by correct arithmetic |
| ⚠️ **Phase 1 could not COMPLETE** — a source unreachable, the prior-year return unopenable, the books not obtainable | 🛑 **Treat as `Not until Y is settled` for every figure that depends on the missing source**, and **name the source in the delivery.** ⛔ **Never report a bounded search's silence as an absence** *(method.md rule 1b)*. ⓘ **`N/A` is not "unreachable"** — an entity return has no organizer, and that is a complete answer |

🛑 **AND A CONSEQUENCE OF PHASE 1 BEING MANDATORY, WHICH NOTHING ELSE SAYS OUT LOUD:
A RETURN IS NEVER PREPARED FROM A SUBAGENT, OR FROM A SCHEDULED / UNATTENDED SESSION.**
Phase 1 reads organizer answers and opens the prior-year return through the redactor, and **both are
banned from a subagent and from a Routine** — a Routine has nobody to tell and nobody to remind to
delete. ⛔ **So delegating the preparation silently skips the gate.** _(The bans themselves are
[`double-mcp`](../double-mcp/) §2.2 and CLAUDE.md; this is only their consequence.)_

🔑 **The two skills already interlock — this only names the seam.** `organizer-review`'s output shape
**opens** with *"Block A — Can we prepare this return?"*, which is precisely the question §4B needs
answered before it starts. **Nothing new was invented; the order was wrong.**

ⓘ **Steering it, in her words:** *"hazme solo la Revisión"* → phase 1 alone. *"salta la Revisión, ya
la hice"* → phase 2 alone, **and say in the delivery that phase 1 was skipped on her instruction**,
so the working paper records it. *"prepárame el Tax Return de X"* → both.

✅ **THE PRIOR-YEAR RETURN — SETTLED 2026-08-20, BY LILIAN, AFTER BEING PUT TO HER.**
**A request from LILIAN OR JULIA to prepare a return carries the
[redactor](../../../tools/redact-doc/) permission**, because phase 1 makes the review part of every
preparation. **You do not stop to ask again.**
⛔ **THE SCOPE IS UNCHANGED — and it is not restated here on purpose.** Six limits bind every call,
and a fourth copy of them is a fourth thing to drift. **Read them at
[CLAUDE.md](../../../CLAUDE.md) and [`double-mcp`](../double-mcp/) *What is permitted — the whole of
it*, before the first call.** ⚠️ **The two that get remembered wrong: it is the latest tax year
BEFORE the year being prepared, not the most recently filed — and it is that CLIENT's own prior
year.**

🔑 **The reason it was ASKED rather than assumed is itself the rule worth keeping:** a session had
written this permission into a skill on its own reasoning, and **the reasoning was sound.** That is
not the point. ⛔ **A permission worded *"only when I ask"* is not widened by a session deciding that
it has been asked** — it is widened by putting the question and getting an answer.

#### Then find these — and read the client file FIRST, because it is free

🔑 **PHASE 1 HAS ALREADY GATHERED MOST OF THIS.** Its ten sources cover items **0** and **2–5** below.
**What this table is, is the CHECKLIST of what must be in hand before §4B — not a second sweep.**
⛔ **Do not re-fetch what phase 1 already read**, and in particular **do not call `get_file` on the
prior-year return twice**: that call puts a presigned download URL — a credential — into the
transcript each time _([`double-mcp`](../double-mcp/))_. **Item 1, the books, is the one phase 2
would add** — and phase 1 now reads them too, as its source 10, because the gate cannot answer
*"are the books complete?"* without them.

| # | What | Where | If it is missing |
|---|---|---|---|
| **0** | 🔑 **THE [CLIENT INTELLIGENCE FILE](../../../projects/client-intelligence/clients/)** — the firm's memory of every prior session on this client, including the **prior years' working papers** in [`projects/tax-returns/`](../../../projects/tax-returns/) | the repo, no API call | ⚠️ **Read it before anything else.** Sessions get deleted; this file is why the last one's work is not lost. **If the client has no file, create it** *(CLAUDE.md)* |
| **1** | 🔴 **THE CLIENT'S BOOKS** — general ledger for the year, **both years' balance sheets**, this year's and **last year's P&L**, the depreciation schedule, payroll | QuickBooks, or Double's reports. ⛔ **The form SOP's §1 is the authoritative list** | 🛑 **For a company return this is the blocker, not the organizer.** Say what is missing and stop — a return computed off a partial ledger is worse than no return |
| **2** | 🔴 **The TAX ORGANIZER the client completed** | `list_organizers` → `get_organizer_responses` for the year. ⓘ **Older clients' organizers are TaxDome-era PDFs**, not Double organizers — look in `TaxDome/[Client]/1. Completed Tax organizers/` | **Say so, and say what it costs.** ⓘ **Bookkeeping and Schedule-C clients are not owed one** *(see [`tax-season-readiness`](../tax-season-readiness/))*; for anyone else its absence closes whole branches of income |
| **3** | 🔴 **EVERY FILE THE CLIENT UPLOADED FOR THIS RETURN** — the home-office worksheet, the P&L, the 1095-A, a lease, brokerage statements, **anything at all** | `list_file_library` → `list_files`. Look in **`JK Accounting Group/Others/{year}`**, **`Tax Return Filed/{year}`**, **`1099/{year}`**, and the TaxDome tree — especially **`Client uploaded documents/`** and **`Taxes/{year}/`** | ⚠️ **Look in ALL of them before concluding anything is absent** — the two structures coexist *([`method.md`](../../../projects/pre-return-review/method.md) rule 1)* |
| **4** | **Everything else the firm holds** | Double **notes** (`list_notes`), **tasks**, the **tax project**, **custom properties** — **and the gap since the last weekly sweep: Julia's Gmail, Ping transcripts, Drive** *(CLAUDE.md — anything after the sweep is missing by construction)* | ⚠️ **Search these, do not treat them as a fallback.** A client's answer often arrived by email and never reached Double |
| **5** | **The PRIOR-YEAR RETURN** | Double, through **[`tools/redact-doc/`](../../../tools/redact-doc/)** — ⛔ **one year only**, the latest before the year being prepared | 🛑 **§1's build-the-map method depends on it.** Without it, name the conventions you cannot reproduce instead of guessing them |

🔑 **THEN REPORT WHAT YOU FOUND BEFORE YOU COMPUTE ANYTHING** — a short list of what is in hand and
what is not, so the missing piece can be handed over before the analysis is built on a hole.
⛔ **And never write what you did not find as what is not there** — name the search, not the world
*(method.md rule 1b)*.

#### 🛑 What phase 1 is LOOKING FOR — the verdicts that stop a return

**A return cannot be worked when a figure it needs has no source, and no arithmetic will fill the
hole.** These are the findings that make Block A read *"No, blocked on X"*:

- **The books are incomplete, or the year is not closed.**
- **An income type is asserted with no document behind it** — including an organizer answer that
  says an income exists and nothing that evidences it.
- **A prior-year carryover is unknown** — NOL, basis, suspended losses, which states — **because the
  prior year was prepared elsewhere.** 🔑 **This is the one that hides**, because nothing in the
  current year points at it.
- **The organizer's answers contradict the documents**, or contradict last year's return.
- **Something is in the prior year that has silently vanished from this one** — a K-1, a rental, a
  state. ⚠️ **A disappearance is a question, never a conclusion.**

🔑 **Phase 1 exists to find these BEFORE the tables are built, which is why it runs first.**
⛔ **Do not prepare around a hole and flag it afterwards.**

#### 🔒 The rules that ride along, every time

- 🛑 **BEFORE the first `get_organizer_responses` call, say in plain words what it will bring into the
  conversation** — the whole organizer arrives in one payload, identifiers included — **and when the
  work is done, remind them to delete the session.** ⛔ **NEVER from a subagent. NEVER from a
  scheduled or unattended session** — a Routine has nobody to tell and nobody to delete, so every
  control here fails silently. *(The full rule, and the wording for both messages, is
  [`double-mcp`](../double-mcp/) §2.2 — read it, do not work from this summary.)*
- 🛑 **The redactor carries the same obligation:** say **which document, which year, and why**, before
  the call. ✅ **A request from Lilian or Julia to prepare a return carries this permission** — you do
  not stop to ask again *(Lilian, 2026-08-20)*. ⛔ **One tax year only** — the **latest before the
  year being prepared**, *not* the most recently filed — **that whole year's filed package**
  including the state returns, **that client's own** *(the company's preparation does not open the
  owner's; each is its own request)*, **nothing that is not part of a filed return**, **never from a
  subagent, never from a scheduled session.**
  **The authority is [CLAUDE.md](../../../CLAUDE.md) and [`double-mcp`](../double-mcp/) — read the
  rule there, do not work from this summary.**
- **Client figures live in [`projects/tax-returns/`](../../../projects/tax-returns/) only** — never
  in an SOP or a client-intelligence file, **both of which publish to the Knowledge Hub**. *(Skills
  do not publish, but the same rule applies to them: nobody should have to check.)*
- ⛔ **Never anywhere: SSN/ITIN, bank or card numbers, residential street addresses, dates of birth,
  logins.** A business EIN is the one exception.
- 📌 **The work is not finished until it is written down** — the working paper in
  [`projects/tax-returns/`](../../../projects/tax-returns/) (§5), the client's Client Intelligence
  file, and any open action in [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md). **The session will be
  deleted; those three are what survive it.**

#### 🔄 4A-M · THE MIRROR SCAN — money that goes out and comes back, and why nobody spots it by reading

> 🔑 **Lilian, 2026-09-02, after she — not the session — noticed it in a card feed:** *"hay
> transacciones entrantes y salientes… Algunas de ellas son por el mismo monto, es decir, el mismo
> dinero que se pagó luego volvió a entrar… si yo no me doy cuenta, tú no lo hubieses notado y
> hubiésemos pasado esto por alto. ¿Hay alguna forma de que podamos evitar que esto suceda en el
> futuro?"*

🛑 **THIS IS THE ANSWER TO THAT QUESTION, AND IT IS A SCAN, NOT AN INSTINCT.** The reason it was
missed is not carelessness: **a ledger read top to bottom hides it by construction.** The charge and
its credit sit weeks apart, under different dates, sometimes in different months, and **each row on
its own is perfectly ordinary.** Only *sorting* shows the pair. ⛔ **So "look out for it" is not a
rule — a session cannot look out for something that is invisible until it is sorted. The rule is
that the sort is RUN.**

##### 🔑 The principle, in one line

**A REFUND OF A COST DEDUCTED IN THE SAME YEAR IS NOT INCOME — IT REDUCES THE COST; AND A REVERSAL IS
NOT AN EXPENSE.** The ledger shows two rows; **there is one transaction, and its amount is the net.**
Whatever you do with one row, you must do with its mirror.
⚠️ **The same-year part is not decoration.** A refund arriving in a **later** year of something deducted
in an earlier one is a different question — under the **tax benefit rule (§111)** it is generally
**income**, not a reduction of this year's cost. **So establish which year the deduction was taken in
before you net anything**, and read the table of mechanisms below with that in mind: several of them
(a chargeback, a deposit returned, a third-party reimbursement) routinely cross a year end.

##### ⏱️ WHEN IT RUNS — three triggers, and none of them is "if it looks odd"

**1 · 🔴 BEFORE ANY JOURNAL ENTRY MOVES AN AMOUNT OUT OF AN ACCOUNT.** This is the one that costs
money. Reclassify the charges, miss the credits, and **the entry moves the GROSS when the truth is
the NET** — the distribution, the disallowance or the owner's income is overstated by the whole of
the credits, and **an orphan credit is left behind in the original account**, where next year it
reads as negative expense.
**2 · Whenever a figure is taken from an account that holds BOTH debits and credits** — any expense
account with credits in it, any income account with debits, any capital account.
**3 · Whenever a single vendor, platform or processor has many rows** — a marketplace, a card
processor, an insurer, a payroll service, a fuel network, a rental platform.

##### 🛠️ HOW IT IS RUN — five steps, mechanical, on the ledger not on the report

**A summary report cannot answer this — it has already netted, or already dropped the credits. Run
it on the transaction-level ledger for the year.**

1. **Split the account into debits and credits and TOTAL EACH SIDE SEPARATELY.** ⛔ Never start from
   the net. **Report all three numbers — gross out, gross in, net** — because the net alone conceals
   how much traffic produced it, and the gross alone is what gets moved by mistake.
2. **Match on AMOUNT first, to find the candidates.** Every credit whose absolute value equals a
   debit in the same account or from the same payee is a candidate pair. This is a cheap sort and it
   is what a human eye cannot do.
3. **🔑 THEN RE-GROUP ON THE REFERENCE THE DESCRIPTOR CARRIES — and that, not the amount, is the
   real unit.** Bank and card descriptors usually carry the thing the money was for: a trip, an
   order, an invoice, a policy, a ticket, a booking, a claim. **Group by it and the chaos resolves.**
   ⚠️ **Amount-matching alone finds only the exact reversals**; the reference finds the **partial**
   ones, which never match on amount and are the ones that carry a real cost.
   ⚠️ **Descriptors truncate.** When a reference is cut short, say so and match on amount as a
   fallback — and check whether the ambiguity changes anything before spending time on it.
4. **Name the MECHANISM for every pair.** *"They cancel"* is not an explanation; it is the
   observation that starts one. The common ones, and each means something different for the return:

   | Mechanism | What it looks like | What it means |
   |---|---|---|
   | **Cancelled / voided purchase** | charge, then a credit for **exactly the same amount**, days apart, same reference | **net 0.00** — nothing happened; neither row belongs anywhere |
   | **Billing retry after a decline** | charge and credit **the same day**, often with `REBILL` / `CREDIT` written in by the processor; may post out of order | **net 0.00** — the vendor tried and collected nothing |
   | **Partial refund** | a credit for **less** than the charge | **a real cost — the remainder stays.** This is the one amount-matching misses |
   | **Chargeback / dispute** | a credit long after the charge, often round | the cost may return again later — check the following months |
   | **Duplicate posting** | two identical debits, one reversed | a feed artifact, not a transaction |
   | **A deposit paid and returned** | out early, back later, same counterparty | **never an expense** — it was an asset while it was out *(see the form SOP's "a refundable deposit that disappears")* |
   | **A cost reimbursed by a third party** | out to a vendor, in from someone else | ⚠️ **not a reversal.** Two transactions, and the reimbursement may be **income** |
   | **Money routed through for somebody else** | in and out, roughly equal, all year | a **pass-through**, and it is neither income nor expense — but it changes what the top line is |

   🔑 **The last two are why this scan is not only about netting.** A pair that nets to zero can
   still be **two** taxable events. **Establish which before you cancel anything.**
5. **⛔ NEVER MOVE A ROW — MOVE THE GROUP.** The unit of the reclassification is the reference, not
   the line. **And state the post-entry check as a BALANCE, not as a count of rows**: *"the account
   must land on X"*, because a reader who moved the wrong rows still moved the right number of them.

##### 🛑 THE PART THAT ACTUALLY STOPS IT HAPPENING AGAIN: THE SCAN IS REPORTED EVEN WHEN IT FINDS NOTHING

🔑 **A silent session is indistinguishable from a session that did not look**, and that is precisely
what went wrong: **nothing in the delivery said the account had never been examined for this.** So
the delivery carries one line per scanned account, **including the empty ones**:

```
Freight and delivery   31 rows = 24 out 812.55 - 7 in 96.40 -> NET 716.15   (2 redeliveries; 1 claim paid)
Trade subscriptions     6 rows = 6 out, 0 in -> NET 288.00                  (no mirrors)
```

⚠️ **Two lines of output for an account with no mirrors is the price of never missing one again**,
and it is cheap.
⛔ **Those account names and every figure in them are INVENTED, like every example in this skill** — a
real client's figures belong in that client's working paper *(§5)* and **nowhere else in the repo**,
this file included. 🛑 **And "the example is close enough to the real one to be useful" is exactly how a
client's ledger ends up in a firm-wide file** — an illustration must share **no digits** with the return
that prompted it.

##### 💥 WHAT IT COSTS WHEN IT IS SKIPPED

**Three separate failures, and only the first is arithmetic:**
- **The reclassification is overstated by the credits.** On the return that is a wrong deduction, a
  wrong distribution, and — where basis or AAA is tight — **a wrong figure on somebody else's 1040.**
- **The orphan credit stays behind** and turns the account negative next year, where a different
  person has to explain it with none of this context.
- 🔑 **And the one Lilian named as the reason for the rule:** *"que se mueve dinero de una cuenta a
  otra y luego no sabemos esos totales de dónde salen y no podemos entender ese dinero."* **A total
  nobody can decompose is not a small problem — it is a figure that cannot be defended, and it
  outlives everyone who could have explained it.** *(The client that produced this rule had a
  five-figure year-end entry with an empty memo. It cost days.)*

##### 📌 AND THE HABIT THAT PREVENTS THE NEXT ONE: EVERY LINE OF EVERY ENTRY CARRIES ITS OWN NOTE

**Whatever the accounting software calls the per-line field — Description, Memo, Name — it gets a
short sentence saying WHERE THAT AMOUNT CAME FROM**, on **every** debit and **every** credit, and the
entry header gets the *why*. ⛔ **An entry whose amount cannot be reproduced from its own note is
unfinished, however correct the number is.** *(Lilian, 2026-09-02: "una nota junto a cada débito y
crédito… para no volver a cometer el mismo error que hemos visto en estos libros.")*

---

### 4B · The delivery format

**This is what the SOP is for, and the format matters as much as the figures.**

> 🔑 **The standard, in Lilian's own words (2026-08-19):** *"las tablas por cada formulario · el flujo
> de los números entre las formas · las explicaciones · las casillas que tengo que marcar."* She has
> little experience with returns and **gets lost between the forms, the pages and the numbers** — so
> a table of values without a route through the forms does not help her. In English: *the tables per
> form, the flow of the figures between the forms, the explanations, and the boxes I have to tick.*
> **Deliver all four, every time, unprompted — plus part 5, which is what makes the flow readable,
> and parts 1b, 1c and 6 to 10 below, which are what she has had to ask for since.**

> 🛑 **THE CALIBRATION, and it governs all twelve parts _(Lilian, 2026-08-19)_:** *"Imagina que esto
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

### The TWELVE things every delivery carries

**1 · ONE TABLE PER FORM, in the order the forms are actually prepared** — every table with the same
columns, and **the FORM, the PAGE, the PART and the LINE NUMBER named**:

> 🗺️ **THE PAGE IS PART OF THE ADDRESS, and leaving it out costs a preparer real time.** A tax form
> splits its schedules across page breaks in places nobody would guess — on Form 1120-S, Schedule B
> and Schedule K are each **split across a page break**, and Schedule L has no page of its own. A
> table headed only *"Schedule K"* sends someone to the page where most of Schedule K lives, for a
> line that is on the next one. **So head every table with its page** — *"Schedule K, page 4"* — and
> **open the delivery with a page map of the form** *(the worked one is [§0C of the 1120-S
> SOP](../../../projects/sops/form-1120s-preparation.md))*. ⚠️ **Read the page numbers off the
> current-year PDF** (§3): the IRS moves content between pages.

> 🛑 **A TABLE THAT SHOWS ONLY THE LINES CARRYING AN AMOUNT IS NOT COMPLETE — it is a trap.** It
> looks finished, so the reader treats it as the whole map; then their leftover account has to go
> *somewhere*, they find a plausible line the table never mentioned, and they put it there. **Name
> the zero lines and say why they are zero**, or state once that every line not listed is zero.
> ⚠️ **This matters most on Schedule L and on page 1's deductions**, where the form offers many
> similarly-named lines and only a few are used. _(Real, and stated as what was actually seen: a Schedule L
> table that listed only the lines carrying an amount **omitted "Loans TO shareholders" entirely**, and
> a shareholder LOAN — a liability — was keyed there, putting total assets over by the amount. Once
> both sides are keyed such a misplacement leaves the balance sheet out by exactly **twice** it.)_

| Line | Concept | Value | **Where it came from** | 🛠️ **Where it is ENTERED** |
|---|---|---|---|---|
| **7** | Inventory at end of year | **150,000** | 📖 Balance sheet → `Total for Other Current Assets` = `Inventory` **+ the clearing account** | ✅ typed on the form |
| **8** | Cost of goods sold | **20,000** | ƒ **= line 6 − line 7** → page 1 line 2 | **computed — do not type** |

⛔ **Those two amounts are invented, and every example in this skill is.** A real figure belongs
in the client's working paper (§5) and **nowhere else in the repo** — including here. A skill is
read by everyone, gets published, and is the last place anyone thinks to look for client data.


**1b · 🔴 WHERE THERE ARE DISTRIBUTIONS, THE DELIVERY CARRIES A DISTRIBUTIONS-vs-BASIS BLOCK. Always.**

**Lilian's standing instruction (2026-08-23), and the reason she gave for it:** *"como soy nueva en
esto de los taxes, puede que pase esto por alto y tiene importantes consecuencias fiscales."* 🔑 **So
the delivery raises it — she does not have to remember to ask.**

**It is the highest-consequence thing on a pass-through return that produces NO error message, NO
diagnostic and NO red figure anywhere.** A preparer can file a flawless entity return and still have
caused a misstatement **on somebody else's tax return**, discovered years later as an IRS notice.

**The block, in every delivery, even when the answer is "nothing to do":**

```
Total distributed to the owners this year           ......
   → owner 1's share, against owner 1's OWN basis   ......
   → owner 2's share, against owner 2's OWN basis   ......
(entity-level only: the pool available to absorb them, and the cap it puts on the AAA line)
```

🛑 **AND THE THING TO GET RIGHT, because getting it backwards is the classic error: WHAT MAKES A
DISTRIBUTION TAXABLE IS THE OWNER'S BASIS, NOT THE ENTITY'S POOL.** On an S corporation with no
accumulated E&P, **§1368(b)**: tax-free to the extent of that shareholder's **stock basis**, which it
**reduces**; the excess is a **capital gain**. ⛔ **The AAA does not appear in that test.** A company
can hold a large pool while one owner has almost no basis — someone admitted recently, someone who
took distributions before, someone whose suspended losses ate it. **That owner has a gain, and a
pool-versus-distributions test would clear them.**
✅ **So the pool comparison is a SCREEN that says how alarmed to be. It never clears anybody.**

**The questions, answered in writing:**

1. **Did money or property reach the owners at all?** No → say so, done. 🔵 **Do not key this off the
   reported distributions line alone** where a netting convention can make it read zero while money
   moved — read the **gross debits in each capital account**.
2. **What is EACH owner's own basis before the distribution?** From their **prior-year basis form**.
   ⚠️ **If none exists it must be RECONSTRUCTED from prior years — separate work, with its own time,
   SCOPED rather than absorbed silently.**
3. **Is any owner's distribution larger than their basis?** → 🔴 **capital gain on their personal
   return, and they are told BEFORE they file.**
4. **Separately, at entity level:** does the distribution exceed the pool? That sets the **cap** on
   the AAA line and **nothing else**. ⚠️ **Record the answer either way** — silence does not tell the
   reader it was checked.

⚠️ **And name the assumption when there is one:** where the books hold **one pooled owner-equity
account**, the per-owner split is an assumption, so the amount tested against each person's basis is
an assumption too. **Settle the split before step 4, not after.**

🔗 The worked version is [§10A–10B of the 1120-S SOP](../../../projects/sops/form-1120s-preparation.md).
⚠️ **The same block belongs anywhere money leaves an entity to its owners — but adapt it, do not copy
it.** On a **partnership there is no AAA at all**: the entity-pool row has no meaning, and a
distribution is tested against **outside basis** under **§731**. **The owner-basis half travels; the
pool half does not.**


**1c · 🔑 EVERY SCHEDULE THAT RECONCILES — the M-2, the M-1, the basis form — IS DELIVERED WITH WHAT
IT MEANS, NOT ONLY WHERE ITS NUMBERS CAME FROM.**

**Lilian's standing instruction (2026-08-23):** *"necesito que me hagas esta explicación y detalles
bien de dónde sale cada número que va en cada columna y qué significa ese número. No simplemente de
dónde sale, sino qué significa esto o cuál es el objetivo de este Schedule."* — and her reason:
*"tengo muy poca experiencia y conocimientos en tax returns, sobre todo de compañías."*

🔑 **A line table alone teaches nobody.** Someone who is handed *"line 5 = 1,250, from Schedule K
16c"* ⓘ *(invented, like every figure in this skill)* can key it and still not know what they have done, cannot spot it when it is wrong, and cannot
answer a client. **So a reconciling schedule gets three things, in this order:**

1. **WHY THE SCHEDULE EXISTS AT ALL** — the problem it solves, in plain words, **assuming no
   accounting background**. *(The worked one is [§10.0 of the 1120-S SOP](../../../projects/sops/form-1120s-preparation.md)
   — an S corporation's owners pay tax on profit they may never have received, so the company keeps a
   tally of which money has already been taxed. Everything on Schedule M-2 follows from that.)*
2. **WHAT EACH MOVEMENT MEANS** — for every line, not just where the figure is read from but **why it
   moves the account that way**, and what it would mean if it did not.
3. **THE FORMULAS AND THE TIE-OUTS** — what equals what, and which figure feeds which other schedule.

⚠️ **And name the traps in the meaning, not only in the arithmetic:** what the account is NOT, which
neighbouring concept it is confused with, and which way round the confusion runs. **On the M-2 that
is: the AAA belongs to the company and basis belongs to a person; and the AAA decides presentation
while basis decides tax** — ⓘ **which holds for an entity with no accumulated earnings and profits;
where there ARE any, the AAA also decides whether a distribution becomes a dividend.**

🛑 **This is not a "nice to have" and it is not conditional on being asked.** It applies to the M-2,
the M-1, the basis form and any state equivalent — **every time, for every client.**


**1d · 🔴 WHEN THE SOFTWARE'S FIGURE DISAGREES WITH THE WORKING PAPER, THE SOFTWARE WINS — AND THE
PAPER IS PROPAGATED IN THE SAME PASS, NOT ANNOTATED.**

**Working papers are computed to the cent and rounded once at the end. Tax software rounds every line
first and adds the rounded lines.** On a return with a long itemised statement those two roads part by
a dollar or two, **and neither is more accurate.**

🔑 **The filed figure is the software's, for a reason that has nothing to do with accuracy: a computed
form has to agree with itself.** Every total must be the sum of the lines printed above it. A hand
figure that is a dollar off makes the printed form contradict its own arithmetic — which is what a
reviewer, and an examiner, actually sees.

🛑 **So when a keyed return comes back with a different figure, THREE things happen and the third is
the one that gets skipped:**

1. **Find out WHY it differs, and say so in cause terms** — *"the software split the meals 1,267 / 1,266
   so the halves add back to the gross; ours had 1,267 twice, which exceeds it"* — ⛔ **never
   *"rounding"* as a bare word.** If the cause cannot be found, **it is not rounding, it is an input
   error**, and the tie-out that surfaced it stays open.
2. **Say which one is filed**, and put the rule down once so the next session does not re-litigate it.
3. 🔴 **PROPAGATE IT THROUGH THE WHOLE PAPER — every downstream figure, in the same sitting.** ⛔ **A
   conclusion written in one section while the old figures stand everywhere else is WORSE than not
   correcting it at all**, because the paper now contradicts itself and the reader cannot tell which
   half is current. **Grep the paper for the old figure before you call it done**, and where the old
   value is kept deliberately as history, **label it as history.**

⚠️ **Where a paper carries TWO BRANCHES and only one was keyed, say which footing each column is on** —
one is the return as the software computes it, the other is a model nobody has typed. ⛔ **A reader must
never be able to file the modelled column by mistake.**


**1e · 🔴 ON ANY S-CORPORATION RETURN, THE DELIVERY CARRIES THE BASIS-GRID BLOCK. Always, unprompted.**

🔑 **Delivery rule 1b already forces a distributions-vs-basis block. This one is different and it is
about ENTRY:** the software collects each owner's basis on **one grid with three columns**, and a
preparer who has not met it before cannot fill it in from the tax rules alone. _(Lilian, 2026-08-24:
**"cuando lleguemos a esta hoja del Schedule K-1, que haya que poner el stock basis al inicio del año,
me digas qué se saca del 7203 del año anterior de la declaración individual"** — and that the whole
grid explanation must ride in **every** future delivery.)_

**The block is not optional. Parts ①②③ always appear; ④ and ⑤ are conditional — and 🛑 when the
condition is absent the block SAYS SO in one line** — *"no shareholder has lent the company anything,
so the loan columns are nil and the loan-type box does not arise"* — ⛔ **rather than being dropped
silently, which reads as an omission.**

**① WHAT THE THREE COLUMNS ARE — because two of them look like the same thing.**

| Column | What it holds | 🔑 In one sentence |
|---|---|---|
| **Stock Basis** | what they have invested in their SHARES | *what they put in, plus profits already taxed to them, minus what they took out* |
| **Loan Balance** | what the company **owes** them | *the money — the debt at face value* |
| **Loan Basis** | their **tax basis** in that debt | *what the debt is worth to them for absorbing losses* |

🛑 **Say WHY there are two loan columns, every time:** they start equal and **come apart** when a loss
runs past stock basis and eats debt basis without changing what is owed — **and a later repayment
across that gap is taxable income to the owner — in PART, pro rata**, not the whole gap *(Form 7203
lines 25–26; only a FULL repayment makes the gain equal the gap)*. ⛔ **Never let them be copied into each other.**

**② WHERE EACH BEGINNING FIGURE COMES FROM — and the sentence that has to be said out loud:**

> 🔴 **THE STOCK BASIS AT THE BEGINNING OF THE YEAR COMES FROM LAST YEAR'S FORM 7203, LINE 15 — AND
> THAT FORM IS FILED WITH THE OWNER'S *INDIVIDUAL* RETURN, NOT WITH THE COMPANY'S.**
> ⛔ **It is not on the company's prior return, in any form.** A preparer who goes looking for it on
> last year's entity return will not find it, and may key a zero instead — ⛔ **which silently CAPS
> every loss the owner can deduct at far LESS than they are entitled to, and can turn a tax-free
> distribution into a taxable capital gain that is not real.** *(The cap is stock basis **plus** debt
> basis — §1366(d) — so a shareholder with loan basis is not capped at the stock figure alone.)*
> 🛠️ **If the firm does not hold that Form 7203 — and 🛑 THAT IS THE ORDINARY CASE, NOT AN EDGE
> ONE.** The form is only *required* in four situations *(a loss claimed, a non-dividend distribution, a
> disposition, a loan repayment)*; otherwise the instructions merely say it *"may be beneficial… to
> complete and **retain**"*. **A profitable S corp that made no distributions has shareholders with
> legitimately no 7203 on file, every year.**
> ✅ **So the answer is not "produce a form that never had to exist" — it is:** **①** ask whether one
> exists *(the owner, or whoever prepared their 1040)*; **②** if not, the opening basis has to be
> **RECONSTRUCTED**, and that is **separate work with its own time, scoped rather than absorbed
> silently** — the same rule delivery **1b step 2** already states, and 1120-S SOP §10B and §12 both
> sanction.
> ⛔ **What is banned is the shortcut, not the reconstruction: never take a capital-account balance off
> the company's books, call it the opening basis, and present it as if it had been read off a filed
> form.** ✅ **A reconstruction is labelled as one, and says what it was built from.**

**And the rest of the sources, each named to the exact line:**

| Beginning figure | Comes from |
|---|---|
| **Stock Basis** line 1 | 🔒 **prior-year Form 7203 line 15** — the owner's individual return |
| **Loan Balance** line 1 | ✅ **prior-year Schedule K-1, item I — the *END OF YEAR* box.** ⛔ **Not the beginning one** — this year's opening IS last year's close. ✅ **This one is on the COMPANY's return**, per shareholder |
| **Loan Basis** line 1 | 🔒 **prior-year Form 7203 Part II line 31** *(debt basis at END of year)* — the individual return again |
| **Carryover LOSSES** | 🔒 **prior-year Form 7203 Part III, column (e)** — ⛔ **never assumed zero; check whether the prior year had losses** |
| **Carryover NONDEDUCTIBLES** | 🛑 **usually genuinely ZERO, and that is the law, not an assumption.** *"Nondeductible expenses in excess of stock and debt basis **don't carry forward** (unless an election is made under Regulations section 1.1367-1(g))."* ⚠️ **With a (g) election in effect they DO carry — and they live on Form 7203 LINE 13, never in Part III.** Item E on the form says whether the election is in effect |

**③ WHAT GOES IN THE REST OF THE GRID, LINE BY LINE**, with the two lines that should usually stay
**empty** called out — the ones fed from the K-1 input screen, where a preparer who cannot find a
figure will type it by hand instead (delivery rule 8).

**④ THE LOAN-TYPE CHECKBOX**, if there is any loan balance: what it decides *(the character of a
future repayment gain)*, and that it is asked, not inferred.

**⑤ WHAT CANNOT BE FILLED IN, AND WHY.** Where the books hold one pooled owner-loan account, the
per-owner split does not exist — ⛔ **and that is the SAME question as K-1 item I, asked once, not
twice.**

🔗 **The worked version, with the screens and the line-by-line detail, is 1120-S SOP §12A — build the
block from THERE, not from this summary.**

⚠️ **Mark the software-specific parts as such** (delivery rules 8 and 8b): the grid's layout and its
line numbers are the vendor's; **the three concepts and their sources are not.** ⚠️ **And carry §12A's
open hedge rather than dropping it: the column→Form 7203 mapping is inferred from the screen's labels
and has not been confirmed on a printed form.**
🛑 **ON A PARTNERSHIP RETURN, ADAPT IT — DO NOT COPY IT**, exactly as rule 1b says of its own block.
**There is no Form 7203**, so there is no line 15 or line 31 to read; a partner's outside basis
**includes a share of partnership LIABILITIES under §752** — including third-party debt the partner
never lent — which has no `Loan Basis` analogue at all. ✅ **What travels is the idea: say where each
opening figure comes from, and name what the firm does not hold.** ⛔ **Parts ①②④⑤ as written do not.**
*(And on a **Form 1120** no shareholder basis is tracked on the return at all — the block does not
arise.)*

🛑 **And warn that the grid's line numbers are NOT the basis form's line numbers** wherever that is
true — on the pilot software they collide on the line that carries **distributions**, which is the one
line that can turn a basis shortfall into reportable income.


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

> ### 🛑 THE SOURCE COLUMN IS NOT A WORKING-PAPER FEATURE — IT TRAVELS WITH THE TABLE, EVERY TIME
>
> _(**Lilian, 2026-09-05**, and she had asked before: *"prefiero que hicieras, cuando sea necesario,
> otra columna que diga de dónde salen los números. Eso te lo he pedido un millón de veces… algo
> tenemos que corregir en este SOP para que esto no vuelva a suceder."*)_
>
> 🔴 **The failure this fixes is NOT a missing rule — the rule is right here, and the working paper
> obeyed it.** What happened is that the session **re-delivered the tables in chat in a compressed
> form and dropped the `Where it came from` column on the way.** The working paper's balance-sheet
> line carried its full derivation — *"= <this card's balance> + <that card's balance>"*, each account
> named; what reached the preparer was **the subtotal alone**. **She then had to ask what the number
> was** — which is the cost this whole section exists to avoid, paid twice.
> ⓘ *(No figures here on purpose: this is a firm-wide file and client amounts live only in
> `projects/tax-returns/`. The worked instance is in that return's own working paper.)*
>
> **So the rule has a second half:**
>
> 1. ⛔ **NEVER compress the source column out of a re-delivery.** *"Give me the tables again"* means
>    the **same** tables. A shorter table is not a favour: the figures are the part someone can read
>    off the software anyway; **the source is the part only this analysis has.**
> 2. 🔑 **For a BALANCE-SHEET line, "where it came from" means WHICH ACCOUNTS SUM TO IT — named, with
>    each amount** — not *"the balance sheet"*. A balance-sheet line is almost always a subtotal of
>    several accounts, and the preparer cannot check a subtotal they cannot see.
> 3. ⚠️ **Where the books' own CLASSIFICATION and the form's line disagree, say so in that column.**
>    *(A vehicle loan sitting in the client's `Other Current Liabilities` while the return puts it on
>    the ≥ 1 year line is a return assertion about the TERM that the books contradict — and the term
>    is usually nobody's confirmed fact.)*
> 4. ✅ **SELF-CHECK BEFORE SENDING, and it takes one pass:** go down every table you are about to
>    deliver and confirm **every row carrying a figure has a non-empty source cell.** A row whose
>    source is *"it is on the balance sheet"* has failed the check. **If a table will not fit with
>    the column, split the table — never drop the column.**

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

**8b · 🛑 "WHERE" MEANS THE CLICK PATH, NOT THE NAME OF THE FIELD — three ways a correct instruction is still unusable.**

🔑 **Item 8 says to name the entry route. This one says how precise that has to be**, because a
preparer who works on returns a few times a year does not carry the software's shape in their head,
and **an instruction that is true but unfollowable costs the same as a wrong one.**
_(Lilian, 2026-08-24, on three separate fields in one sitting: **"me dices que en unos puntos
suspensivos, pero es que hay varios puntos suspensivos en esa forma y no sé dónde ponerlo"** ·
**"en ese campo no me deja escribir"** · **"no logro encontrar el item del que hablas… no veo dónde
está eso"**.)_

**The three failures, and the rule each produces:**

| | The failure | ⛔ Not enough | ✅ What to write instead |
|---|---|---|---|
| **①** | **The form has SEVERAL blank lines that look identical.** *(itemise areas, "other" rows, dotted continuation lines)* | *"put it in the blank itemisation area"* | 🔑 **Anchor it to the NEAREST NAMED ROW, above or below.** *"the first blank row immediately BELOW `Personal use portion of rental expenses`"*. **A named neighbour is findable; an ordinal is not** |
| **②** | **The typeable field is a LINK, not a number field.** Clicking it opens a worksheet | *"type it on line 3"* | 🔑 **Say that it opens a sheet, NAME the sheet by its title bar, and then locate the row inside it.** ⚠️ **Also say what the form line will show afterwards** — a total, not what you typed — **or the preparer thinks it failed** |
| **③** | **The label exists on the PRINTED form but NOT on the input screen.** *(per-shareholder items that the software derives)* | *"enter it in item I"* | 🔴 **Say the label is absent, name the section that actually feeds it, give the arithmetic — and say which program and when you saw it.** *"In ATX 2025 (seen 2026-08-24), items H and I are not on the input screen — H comes from `Number of Shares`, I from the `Loan Balance` column of `Stock and Loan Basis`, as line 1 + line 2 − line 5"*. ⚠️ **Mark the LAYOUT as observed and the DERIVATION as inferred** — a screenshot shows which fields exist, not what feeds what |

🛑 **AND ALWAYS GIVE THE ROUTE TO WORKSHEETS THEMSELVES, ONCE, IN THE SOP.** In a forms-based
program the sheet is reached **from the form it belongs to** — in ATX, the `Pages & Worksheets` button
along the bottom of the open form. ⚠️ **A worksheet belonging to the entity form will never appear
while a K-1 is the open form**, which is exactly why a read-only screen on the K-1 looks like a bug.
**"Which form owns this worksheet" is the question that finds it.**

🔑 **THE UNDERLYING FACT, and it is worth saying to the preparer in these words: THE INPUT SCREEN AND
THE PRINTED FORM ARE TWO DIFFERENT VOCABULARIES.** The IRS names things one way and the software names
them another, and they overlap only partly. ⛔ **So an instruction phrased in IRS vocabulary is not an
entry route.** ✅ **Give both, and say which is which** — and **verify by PRINTING the form and reading
the box**, never by looking at the screen you just typed on.

⚠️ **Mark all of it as the software's, not the IRS's** (item 8 rule 1) — and where the SOP describes a
screen it has actually seen, **say which program and when it was observed**, so a later session knows
whether it is describing this year's version.

**9 · 🛑 A FINDING IS NOT DELIVERED UNTIL IT CARRIES ITS FIX.**

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

🛑 **BUT A BRANCH MUST BE A REAL BRANCH. DO NOT MANUFACTURE ONE TO AVOID ASKING.** ⚠️ **This is the
failure mode this part CREATES**, and it is more dangerous than the gap it closes: pressed to produce
an actionable instruction, a session writes a confident two-way branch off a source that only settles
the question **one** way. **A search that finds nothing has ruled out one possibility, not established
the opposite** _(method.md **rule 1b** — never write what you did not find as what is not there)_.
🔑 **So say which way the evidence CAN settle it, and route the other way to a question.**
_(2026-08-20, on a Schedule C line-H checkbox: an instruction with **two independent triggers** was
collapsed into one, and the branch *"if the prior year shows nothing, leave the box ticked"* was
written into a live return's working paper. The prior year could disprove the claim; it could never
prove it. **Caught in review — the delivery format had made a wrong answer look finished.**)_

⛔ **THREE FINDINGS CANNOT CARRY A LITERAL VALUE, AND FORCING ONE IS WORSE THAN THE GAP:**

| The fix turns on… | What to ship instead |
|---|---|
| **A fact only the CLIENT holds** | the **question, written ready to send**, plus what each answer changes |
| **A POSITION** — an election, an allocation, a characterisation | 🛑 **the options with each one's consequence, and let Lilian rule.** *Positions are hers* — **delivery rule 7 above, which part 9 does NOT override.** Anything a reviewer could ask *"why did you do that?"* about is a decision, not a defect |
| **A rule the firm has not settled** | say so plainly, and **name who settles it** |
| 🛑 **A PERMISSION or a SCOPE question** — may I read this, may I write here, does the rule cover this case | ⛔ **Ask. Always.** A permission worded *"only when I ask"* is **not** widened by a session deciding it has been asked, **and a sound argument that it ought to cover this case is not the permission.** *(CLAUDE.md core conventions)* |

**The four things then attach to each BRANCH, not to the finding.**

⚠️ **A VENDOR FIELD IS NOT AN EXCUSE FOR VAGUENESS — IT IS THE REASON THE ANSWER IS NEEDED.** When
the field exists only in the software and on no IRS form, **there is nothing for the preparer to look
up.** Nobody can research their way to the right value, so the delivery must simply state it. 🔑 **Say
which it is** — *"ATX's field, not on Form 8829"* — **and then say what goes in it anyway.**

📌 **And when a vendor field turns out to be required every time, that is not a one-off correction —
it goes into the form's SOP as a standing entry**, so the next return never meets the error at all.
_(Lilian's second instruction the same day: *"tienes que recordar siempre llenar este campo."*)_
⚠️ **Proposed, not assumed.** An **SOP change is the one thing that needs Lilian's sign-off** (client
files do not — [`CLAUDE.md`](../../../CLAUDE.md); the queue is
[`sop-proposals.md`](../../../projects/client-intelligence/sop-proposals.md)), and the form SOPs are
still **Draft**. **So say in the delivery that you have added it and what it now instructs** — do not
let a standing rule appear in a procedure she has not read.

**10 · 🛑 ONE RETURN PER REQUEST — AND THE HANDOFF IS THE DELIVERABLE, NOT THE OTHER RETURN.**

> 🔑 **Lilian, 2026-08-21:** *"Si te digo que preparo el tax return de una compañía, no preparo el
> del dueño. Si no te lo pido, sería un gasto de tokens y de tiempo innecesario… No me gusta hacerlo
> todo del tirón. Prefiero terminar una cosa y, cuando estoy segura de que está bien, de que está
> correcta, entonces podemos centrarnos en la otra."*

⛔ **ASKING FOR THE COMPANY IS NOT ASKING FOR THE OWNER.** An 1120-S or a 1065 feeds a 1040, and the
temptation is to carry straight on. **Do not.** She works one return at a time **on purpose**: she
finishes it, satisfies herself it is right, and only then moves. **A second return she did not ask
for costs her time and tokens and arrives before she can check the first.**

✅ **WHAT SHE DOES WANT, AND IT IS OWED WITHOUT BEING ASKED:** at the **end of the whole analysis**,
say **what has to travel to the other return, and leave it ready to be typed.**

> *"Estas formas o estas tablas tienen que fluir luego a la declaración del dueño, y me las dejen
> listas para cuando yo vaya a preparar la declaración individual… no que prepares la declaración
> completa."*

**The handoff, in four parts** — §8 of
[`_workpaper-template.md`](../../../projects/tax-returns/_workpaper-template.md):

| | | |
|---|---|---|
| **8A** | **The tables to carry across** | every figure that travels, **with the entry route on the receiving return** — the same standard as part 8. A K-1 read box by box, and every form it drives |
| **8B** | 🔴 **What this side CANNOT supply** | figures the other return needs that **do not exist on this one.** ⛔ **Name them; never guess them.** _(The one that catches everyone: **Form 7203 is filed with the SHAREHOLDER's 1040**, so the beginning-basis figure is not on the company's return at all — it is last year's Form 7203 line 15. **Check the prior year's working paper first**; if the firm did not prepare it, it is a question for the client.)_ |
| **8C** | **What must MATCH on both** | anything a presentation choice binds together — e.g. a netted shareholder account *(1120-S SOP §5C-v)* must be netted on **both** returns |
| **8D** | **Before the other return is started** | **this one is FILED and ACCEPTED** — a K-1 from an unfiled return can still move — and every §6 blocker is closed |

📌 **WRITE IT DOWN, DO NOT ONLY SAY IT.** It goes in the **working paper**, because she may open the
1040 weeks later and **this session will have been deleted.** Deliver it in chat *and* commit it.

🔗 **And the other return, when she does ask for it, is a FULL SEPARATE REQUEST** — its own phase 1
review, its own client, its own permission to open **that** person's prior-year return
_(CLAUDE.md — preparing the company did not open it)_. ⛔ **The handoff is a head start, never a
substitute for phase 1.**

⚠️ **The reverse order is a BLOCKER, not a handoff.** Asked for the 1040 first while the company's
return is unprepared: **the K-1 does not exist yet.** That is a Block A *"No, blocked on X"* — say
which return has to come first.

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
- 🔄 **A SESSION MISSES SOMETHING THE PERSON ASKING CAUGHT BY EYE.** ⛔ **That is a missing SCAN, not
  an attention failure** — and the fix is never "be more careful", which cannot be executed. Work out
  what sort would have made it visible, write the sort down as a step that RUNS, and require it to be
  **reported even when it finds nothing**, because a silent session and a session that never looked
  read identically. **§4A-M is the first of these; there will be others.**
- **Someone reports how the SOFTWARE behaves** — which worksheet feeds which form, which screen an
  entry has to be made on, which error it throws. That is knowledge no IRS document carries, and
  rule 9 says to record it.

- a new form's SOP is written, and something about **writing** it generalises
- a return turns up a trap that would have bitten any form
- the IRS renumbers or rewrites something and a session gets it wrong from memory
- Lilian rules on how a return should be presented or delivered
