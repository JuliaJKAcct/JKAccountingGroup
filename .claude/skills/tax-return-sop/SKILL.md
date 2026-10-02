---
name: tax-return-sop
description: 🔴 PREPARE A CLIENT'S TAX RETURN — load this the moment anyone says "prepare X's tax return", "prepárame el Tax Return de X cliente", "hazme la declaración de X", "do X's 1120-S / 1040 / 1065", or asks for a return's figures as line-by-line tables. §4A is the entry point and it runs TWO PHASES from one sentence: PHASE 1 · LA REVISIÓN — call the `organizer-review` skill in full, ALWAYS and without being asked separately, to check the prior-year return against this year and find missing documents, contradictions and anything that raises an alarm; its Block A verdict is THE GATE. PHASE 2 · LA PREPARACIÓN — only if the gate says yes, deliver the line-by-line tables. Along the way: go to Double and gather it yourself — the client's BOOKS, the completed tax organizer, every file the client uploaded, the prior-year return through the redactor — and report what was found before computing anything. ALSO: write, extend or review a JK Accounting Group TAX-RETURN SOP — the form-by-form procedure for preparing one kind of return (Form 1120-S is the first; 1120, 1065, 1040, 1041 and the state forms follow the same shape) — and use it to drive an actual return, producing the form-by-form, line-by-line tables a first-time preparer can work from. 🔵 AND WHEN LILIAN HANDS BACK THE DRAFT SHE HAS JUST KEYED AND ASKS "¿hay errores?" — that is §4F, where you DO audit, and it starts by transcribing the draft in full. 🔵 AND WHEN A PREPARED RETURN COMES BACK FOR REVIEW — someone brings back a return the firm prepared and starts asking why a line is what it is — the financial statements, OR a copy of the return, OR just the question; any ONE of those is the trigger: that is §4C, and the job is to BRIEF the reviewer from the working paper before reading the PDF (the reasoning behind each decision, who made it, where every figure came from) rather than to audit her. Use when creating or editing a `projects/sops/form-*-preparation.md`, when someone asks "how do I prepare a <form>?", when preparing a real return with a session assisting, when a return the firm prepared comes back to be reviewed or signed, or when a return raises a lesson worth writing down. Encodes what makes a tax-return SOP different from every other firm SOP (it must say WHERE EACH NUMBER COMES FROM, not which box it goes in), the required section spine, the build-the-map-from-the-prior-year method, the delivery format for a live return (a table per form, the order of preparation, the flow of figures between forms, the checkboxes with their reasons, the explanations, the statements and attachments the return requires — drafted, because some block e-file — every K-1 read box by box, and the ENTRY ROUTE saying where each figure is actually typed, since most lines on a computed form cannot be typed where they appear — and it is DELIVERED AS AN ARTIFACT by default, a page carrying MORE detail than the chat did rather than less, with anything destined to be typed into the return written in ENGLISH ready to paste, and any list of changes shipped as tickable CHECKBOXES so she can see what is left), all pitched at someone who knows nothing about taxes or forms, the standing rule that any answer changing a figure is verified against the current-year PDF from irs.gov rather than from memory, and the working-paper archive every prepared return must leave behind.
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

🔴 **AND IF THE CLIENT HAS NO BOOKS AT ALL — a spreadsheet and a pile of documents, no QuickBooks — READ §1B BEFORE ANYTHING ELSE.** **The prior return is still the answer key, but the job changes shape: you are building a set of books before you prepare a return, and §1B carries the rule that organises it, the three traps that cost the most, the order to work in, and the bar a question has to pass before it reaches the client.**

**What it catches, every time:** which accounts a subtotal really covers · how equity was mapped ·
which boxes were ticked · whether a figure was netted or grossed · what the software chose by
default.

---

## §1B · 🔴 THE CLIENT WITH NO BOOKS — a spreadsheet, a pile of documents, and no QuickBooks

> **Written 2026-09-27, out of Zakom Incorporated's 2025 Form 1120-S**, which cost the firm **two weeks**
> mostly because nobody had written this down. **Lilian:** *"es la primera vez que voy a hacer una declaración
> de impuestos de este tipo donde no tenemos los libros del cliente en QuickBooks… necesito que tú comprendas
> cómo es que hacemos las cosas y que lo recuerdes para que no perdamos días y días en lo mismo."*

### §1B.0 · 🛑 Recognise the case in the first ten minutes

**You are in it when ALL of these are true:**

- ⛔ **No QuickBooks, no bookkeeper, no trial balance.** `platform: none` on the Double client record, or a
  `Bookkeeping` property that is blank or paused.
- **What the client sends instead:** a spreadsheet of income and expenses, an asset list, and a folder of
  statements, notes, invoices and letters.
- 🔑 **THE TELL THAT MATTERS: there is no EQUITY section anywhere.** **His spreadsheet has revenue, expenses
  and maybe a balance sheet — but nothing states what he took out of the company.**

⚠️ **SAY SO OUT LOUD, AT THE START, TO WHOEVER IS DIRECTING THE WORK.** **The job is not "prepare a return
from books"; it is "build a set of books, then prepare a return."** **Scope it before it is quoted.**

### §1B.1 · 🔑 THE ONE RULE THAT ORGANISES EVERYTHING ELSE — the line is the DOCUMENT, not the line item

🛑 **DO NOT frame the job as "do we trust the client or not". That question has no stable answer and it will
be re-litigated every day.** ✅ **Frame it by the document:**

> 🔑 **Where the firm HOLDS a document that states a figure, the DOCUMENT governs.**
> 🔑 **Where it does not, the CLIENT'S figure governs and we do not audit it.**

| Almost always document-backed → **REBUILD IT** | Almost never → **TAKE HIS FIGURE** |
|---|---|
| Interest paid, lender by lender | Fuel |
| Loan principal, and the split of every payment | Telephone and internet |
| Fixed assets: cost, date acquired, date in service | Office expenses and supplies |
| The bank and card balances | Tolls, parking, lumper fees |
| Everything in the equity section | Meals *(the AMOUNT; the RATE is a firm decision)* |
| *(the year-end liability BALANCE is its own case — below)* | Repairs and maintenance |

🛑 **AND ONE ROW IS DELIBERATELY NOT IN EITHER COLUMN, because a review caught this section generalising a
sentence the working paper had already corrected. A YEAR-END LIABILITY BALANCE THE CLIENT SUPPLIES STAYS
HIS.** **On the pilot engagement Julia ruled it in terms — *"if the client puts in the ending balances, we
should rely on it"* — so the split is: the LENDER's letter governs the INTEREST, the CLIENT governs the ENDING
BALANCE.** ✅ **Where he gives no figure, the lender's is used.** ⚠️ **Where a lender document DISAGREES with
his balance, that is RAISED with the preparer — never substituted silently.** ⛔ **And the wider version —
*may the firm take the debt BALANCES from the lender documents rather than from his sheet?* — is an OPEN
QUESTION to the signing principal, not settled method.** 🔑 **Put it; do not reason around it.**

⚠️ **AND THE WORKED EXAMPLE THAT MAKES IT CONCRETE** *(Lilian's own)*: **if he says he paid X of interest and
the lenders' own statements sum to Y, we key Y.** *"En ese caso, se pudo haber equivocado."* ⛔ **That is not
auditing him. It is preferring the better evidence, which the firm's own rules already require.**

🔑 **AND IT IS USUALLY CONSISTENT WITH A "RELY ON THE CLIENT'S P&L" RULING, NOT AGAINST IT** — because such a
ruling means *do not audit his operating expenses*, while a separate ruling almost always already says *the
lender's letter is the authority on interest*. **Read them together before escalating a collision.**

### §1B.2 · ⛔ THE THREE TRAPS THAT COST THE MOST, in the order they bite

**① A DOCUMENT-BACKED AMOUNT HIDING INSIDE A SOFT CAPTION. This is the expensive one.**

**His expense captions are keyed as given. But if a LOAN PAYMENT is sitting inside one of them, you will
deduct principal (never deductible) and deduct the interest a second time on the interest line.**

✅ **HOW TO FIND IT WITHOUT ASKING: tie his financed-equipment caption to the lenders.** **Sum every lender's
full-year payments from the bank and compare to that one caption.** **If they tie, you know where those
lenders are. Whatever does NOT tie is unlocated** — and *that* is the question to the client, not a general
"how did you classify things".

⚠️ **AND RANK THE UNLOCATED ONES BY LIKELIHOOD, NOT BY SIZE.** **A financed-equipment payment missing from his
financed-equipment caption is probably not expensed at all, which is CORRECT. An insurance premium-finance
payment is probably inside `Insurance`, because the premium genuinely belongs there.** ⛔ **The biggest number
is usually the least likely.**

**② A CLIENT'S "PAYOFF" IS NOT ALWAYS A PRINCIPAL BALANCE.**

🔑 **Test it: divide it by the monthly payment.** **If it comes out a whole number of payments, he has copied
the lender's GROSS REMAINING PAYMENTS, which includes unearned interest.** ⛔ **Keying that to the balance
sheet overstates the liability.** ⚠️ **The same client can use the word both ways in different years.**

**③ THE THREE NAMING SYSTEMS.** **A client with rolling stock will have one name in his description list, a
second in his unit numbers, and the return will carry a third.** ⛔ **Nothing connects them, the software's
serial field is usually empty, and MATCHING BY COUNT IS NOT IDENTITY** — he disposes of things that were
never capitalised, so the two populations differ. 🔑 **Establish the map EARLY, before it blocks Form 4797 at
the end.**

### §1B.3 · ☑️ THE ORDER TO WORK IN

1. **The prior return** — §1's answer key, and here it is also the opening balance sheet.
2. **THE LIABILITIES FIRST.** **Every lender: its own documents, principal and interest separated, balance at
   year end** — ⚠️ **but read §1B.1's split before you key a BALANCE: the lender governs the INTEREST, and
   where the client gives an ending balance, HIS governs.** 🔑 **Include financings that never touched the
   bank** — a lender who pays the vendor direct never appears in the statements, and the asset and the debt
   both arrive off-book.
3. **The bank and the card, reconciled to each other.** ⚠️ **Payments between two company accounts are
   TRANSFERS, not expenses — but only the ones that ARRIVED.** **Money that left captioned as a card payment
   and never reached the card is an equity question.**
4. **The assets** — cost, acquisition date, in-service date, **the Table B-1 class and the life DERIVED from it**, and the source document, one row each. ⛔ **Never carry a life forward from last year's schedule** — §4D's asset rules say why, and on the pilot engagement that transcription ran four over-the-road tractors at the wrong recovery period for years.
5. **The soft P&L** — his captions, less anything ② or ①'s tie shows is document-backed.
6. **The equity section LAST**, and 🛑 **never as a plug.** ⛔ **Do not force a balance with distributions,
   contributions or retained earnings.** **Explain each movement with a documented operation, or leave it
   open and say so.**

### §1B.4 · 🛑 BEFORE ANY QUESTION GOES TO THE CLIENT — the bar, and the four groups

**Sort every open item into one of four, and NOTHING reaches the client until the first three are worked:**

| Group | What to do |
|---|---|
| **① The datum is already in a document we hold** | Extract it, cite where, close the item |
| **② A calculation or reconciliation** | Resolve it internally and SHOW the calculation |
| **③ An accounting or tax decision** | Put it to the responsible preparer, never to the client |
| **④ Genuinely missing** | ONE concrete question — after ①–③ are done |

🔑 **THE BAR FOR A GROUP-4 ROW, and write it IN the row:** **what datum is missing · which sources were
reviewed · why it cannot be determined from them · what calculation it blocks.**

⛔ **NOT a preventive list of every document it would be nice to have.** **A minimal, justified list.**
*(Lilian: "No quiero una lista preventiva… Quiero una lista mínima y justificada de lo que realmente
necesitamos.")*

🛑 **AND ONE PROCEDURAL RULE THAT COST A WHOLE DAY: A CLIENT LIST IS REWRITTEN IN PLACE, NEVER SUPERSEDED BY
A NEW SECTION BESIDE IT.** ⛔ **On the pilot engagement two lists headed *"FINAL"* were written hours apart and
the older one was left standing, saying *"everything in ONE send"* and *"this section governs"*. Between them
they dropped FIVE asks, and the live risk was a session sending the stale list.** ✅ **ONE list, ONE place,
edited.**

☑️ **AND BEFORE CALLING A CLIENT LIST FINAL, RUN THE CHECK THAT FINDS WHAT IT DROPPED — it is mechanical and
takes a minute:** **walk the working paper's LIVE, UNTICKED open items and ask of each one, *can only HE
answer this?*** ⚠️ **Twice that check was not run and twice a review found the omission rather than the pass
that wrote it.**

### §1B.5 · 🔴 AND THE FAILURE THAT COST THIS FIRM THE MOST DAYS — a filename listing is not a reading

🛑 **IT HAPPENED TWICE IN TWO DAYS ON THE SAME ENGAGEMENT.** **The file library was listed BY NAME, the names
were judged unhelpful, and the conclusion "we have looked everywhere" was written — while four documents had
never been opened, and one of them was the client's own workbook from an earlier year carrying exactly the
table that was being chased.** ⚠️ **The audit that did it had even marked that file with a ✅.**

⛔ **THE RULE IS A PROHIBITION, NOT A PERMISSION — and an earlier draft of this very section got that
backwards, which is why the wording is now exact.** ⛔ **Never write *"we have looked everywhere"*, or any
negative, off a filename listing.** ✅ **Instead, NAME THE UNOPENED CANDIDATES to the person directing the
work and ASK for them** — a prior-year client workbook, a file whose name does not say what it is, anything
listed but never opened. 🔑 **A prior-year workbook is the highest-value unread document on a no-books
client, because it is where his own conventions and his own unit numbers live** — ⛔ **which is a reason to
ASK for it, not a licence to open it.**

🛑 **THE SCOPE IS NOT A SESSION'S TO SET.** **The latest prior year's filed return and its organizer are
already inside the standing document permission** *(see [`organizer-review`](../organizer-review/) §1 source
9)*. ⛔ **An EARLIER year, or a document that is not part of a filed return — which is exactly what a
prior-year client workbook is — needs Lilian's or Julia's ask, EACH TIME.** ⛔ **A session may never decide
it has been asked**, and CLAUDE.md's standing rule is absolute: **a permission is widened by ASKING, never by
reasoning.** ⓘ *(On the pilot engagement the sweep that produced this lesson was one Lilian ORDERED. That is
what made it permissible — not the strength of the argument for it.)*

### §1B.6 · ⚠️ TELL THE DIRECTING PERSON WHAT YOU CANNOT REACH — do not convert it into a client request

**Distinguish three states and never collapse them:**

- ✅ **Re-readable** — in the practice platform. **An extract deleted after reading is not the document being
  gone.**
- ⚠️ **Not reachable from a session** — anything pasted into a chat as an image. **The figures are recorded;
  the picture went with the message.** ⇒ **Ask the PERSON, not the client.**
- 🔴 **Genuinely absent** — and only this one becomes a Group-4 question.

### §1B.7 · ✅ WHAT TO DELIVER, AND WHAT IT LOOKS LIKE

**A reconstructed P&L · a reconciled balance sheet · a loan detail · an asset table** — **each figure marked
VERIFIED or PROVISIONAL, accounting figures kept separate from tax adjustments, sums carried by FORMULA rather
than retyped between sheets, and every material amount pointing at the document behind it by name, page and
date.** 🛑 **The working paper does not replace the document.**

☑️ **And close with a practical order for the software: what can be entered now, what needs internal review,
and what genuinely waits on the client.**

🔗 **THE WORKBOOK ITSELF HAS ITS OWN RULES AND THEY ARE NOT HERE — READ §4D BEFORE BUILDING ONE.** The three that
a no-books rebuild breaks most easily: it is written in **ENGLISH**, always, whatever language the chat is in
*(Julia reads it and does not speak Spanish)*; the value column says **WHAT TO ENTER**, never what is already on
the return, so **a defect flag without its correct value is not a deliverable** and there is **no "what it used to
say" column**; and **the build FAILS when a cell she acts on would be clipped**, because a row can hold text it
will not show. ⚠️ **A no-books rebuild is exactly where the clipping bites**, since its cells carry the
document trail and the arithmetic rather than a figure.

⛔ **AND ONE THING THIS SECTION'S OWN DELIVERABLE MUST NOT DO: balance itself.** Where the closing column cannot
be completed, **say so on the face of the sheet and leave the line open.** A total that ties because equity
absorbed the difference is worse than one that visibly does not tie, because nobody re-checks a sheet that
balances.

### §1B.8 · 🛑 WHEN YOUR FIGURE AND HIS AGREE, ASK WHETHER THEY COULD HAVE DISAGREED

🔴 **THIS SECTION EXISTS BECAUSE ONE SESSION MADE THE SAME MISTAKE THREE TIMES IN ONE DAY, on three different
figures, after withdrawing it the first time.** ⛔ **It is the most persuasive kind of wrong, and a no-books
rebuild is where it breeds: you are comparing your reconstruction against the client's sheet all day long.**

> 🔑 **An agreement between two of YOUR OWN numbers is evidence ONLY if the two could have come out
> different. If they share their inputs, the agreement is ARITHMETIC — and it will read as confirmation.**

🛑 **AND THE VERSION THAT IS SPECIFIC TO THIS CASE, because it is invisible and it was what caught the session
out twice:** ⛔ **WHERE THE FIRM HAS *ADOPTED* THE CLIENT'S FIGURE FOR A COMPONENT — under §1B.1, or under any
ruling that says *"his figure governs this row"* — THAT COMPONENT CONTRIBUTES **NOTHING** TO ANY LATER
AGREEMENT WITH HIS TOTAL.** **It is his number handed back to him.** ⚠️ **A four-component reconciliation in
which one component was adopted from him is a THREE-component test, and saying so is the difference between a
real check and a decorative one.**

✅ **SO BEFORE WRITING THE WORD *"corroborates"*, *"confirms"*, *"independent"* or *"cross-check"*, LIST THE
COMPONENTS AND MARK EACH ONE:**

| | |
|---|---|
| ✅ **Independent** | **a lender's letter · an agency transcript · a bank debit · a figure the firm COMPUTED from a rate and a term** |
| ⛔ **NOT independent** | **any component taken from the same document you are now testing · any figure the firm ADOPTED from the client · anything derived from a subtotal that already contains the term you are checking** |

⇒ ☑️ **Then say **partial** corroboration and name which components carried it.** 🔑 **A partial check
honestly labelled is worth more than a total one that cannot fail** — ⛔ **and the second kind gets keyed.**

⚠️ **TWO MORE TELLS, both from the same day:**

- 🛑 **A "SECOND ROUTE" TO A FIGURE IS USUALLY THE FIRST ROUTE REARRANGED.** **Before claiming one, write both
  computations out term by term.** _(The session claimed a page-1 subtotal had been reproduced independently;
  the working paper's own code block already ended in the same three terms in a different order.)_
- 🛑 **AND WHERE A PRIOR SECTION ALREADY RAN YOUR COMPARISON, IT PROBABLY ALREADY RULED ON IT.** ⛔ **Search
  for the figure before you present it as new.** _(The correct verdict — "that is corroboration, not
  independence" — was sitting in the working paper, in a section the new one cited.)_


### §1B.9 · 🚗 VEHICLES AND DISPOSALS ON A NO-BOOKS CLIENT — five things that were each learned the hard way

🔑 **A trucking or delivery client with no books will hand you vehicles, leases, financings and disposals in
one spreadsheet, and every one of these five was got wrong once before it was got right.**

#### ① 🔑 HOW TO TELL WHETHER THE PRIOR PREPARER USED THE PURCHASE DOCUMENT OR THE CLIENT'S FIGURE

🛑 **You do not have to ask anyone. Compare the FILED return's cost for each carried-forward asset against
what the client wrote for that same asset.**

> ✅ **A client remembers a ROUND number. A document produces an ODD one.**

⇒ **Where the filed cost exceeds his figure by a small odd amount — 145, 245, 3,299 — the preparer worked
from a bill of sale and capitalized the price PLUS the sales tax and the registration fees, which is
correct.** ⇒ **Where the two agree exactly on a round number, his figure went in unchanged.**
🔑 **That comparison IS the firm's pattern, read off its own work product, and it settles a question the
person directing you cannot answer from memory.** ⚠️ **Then put it to the SIGNER before acting, because it
will usually collide with a *"his figures govern"* ruling already taken on the current return.**

#### ② ⛔ A FINANCED AMOUNT IS NOT A PURCHASE PRICE — and the gap needs EVIDENCE, not a plausible story

**A lender note for less than the booked cost is NOT a contradiction: the difference is usually a down
payment.** ⛔ **BUT DO NOT CLOSE IT WITH A STORY. Say the gap is UNEVIDENCED until something evidences it,
and name the free test** — **a bank debit to the dealer near the purchase date, a deposit line on the
invoice, the `Cash down payment` field on the finance agreement.**

🛑 **AND THE WORKED EXAMPLE HERE IS A WARNING, NOT A MODEL, because an earlier draft of this very subsection
got it wrong.** **On the pilot client a 95,550 note against a 105,550 cost read as a defect for two weeks.
A session then argued the gap was a down payment *"because the lease shows an 11,000 capitalized cost
reduction"*.** ⛔ **THAT WAS FALSE, and the SAME document disproved it: the whole amount due at signing was
settled by `Rebates and noncash credits`, and the 11,000 was a COMPONENT of it — so it was neither the
client's cash nor a trade-in.** 🔑 **A capitalized cost reduction tells you the price was reduced. It does
NOT tell you WHO paid for the reduction, and the answer is two lines further down the same form.**

#### ③ ✅ A CLOSED-END LEASE IS A RENTAL, AND THE CASH-BASIS TRAP IS IN THE SIGNING SHEET

⛔ **No depreciable asset, nothing on Form 4562, nothing on the balance sheet — no asset AND no liability.**
✅ **The payments are a deduction.** 🛑 **BUT ON THE CASH BASIS, COUNT THE PAYMENTS THE COMPANY ACTUALLY
MADE:** **read the *Itemization of Amount Due at Lease Signing* and then read *How the Amount Due Will Be
Paid*.** ⚠️ **Where it says `Rebates and noncash credits`, the company paid NOTHING — and the first monthly
payment is usually inside that amount, so the year's deduction is one payment SHORT of what the calendar
suggests.**

☑️ **Three more fields on a lease that matter and are easy to skip:** **the `Agreed upon value of the
vehicle`** *(it decides whether a §280F(c) inclusion amount is material, and reading the lease can make that
question BIGGER)*; **the `Primary Use` box** — ⛔ **which is the lessor's consumer-disclosure classification
and is NOT a tax business-use percentage**; and **`Net trade-in allowance`** — 🔑 **which can settle a
completely different question, because `N/A` proves a vehicle the client called *"traded in"* was actually
SOLD, and explains why the money appears as a bank deposit.**

#### ④ 🔴 A CASUALTY'S PROCEEDS ARE THE PROPERTY'S SHARE, NOT THE WHOLE SETTLEMENT

**An insurer often pays one amount covering the asset AND costs the client incurred — towing, recovery,
storage.** 🔑 **Form 4684 takes only what was received FOR THE PROPERTY.** ⛔ **The rest is a recovery of an
expense, not proceeds** ⇒ **and the two sides must move TOGETHER: if the expense was deducted, the
reimbursement is income; if it was not, the reimbursement is not income either.** 🛑 **One side without the
other is wrong in whichever direction it is taken.**

☑️ **AND BEFORE ASKING THE CLIENT TO ALLOCATE IT, LOOK IN THE BANK.** **The money reached the company
somehow.** ✅ **Two separate credits split the settlement for you and delete the question; one combined
credit leaves only the allocation; NOTHING in the year means the gain is next year's and the whole form comes
off the return.** ⚠️ **Do not treat a previous credit sweep as having covered it — a sweep filtered to lender
and payroll captions is silent on insurance by construction, and that silence is not evidence** *(rule 1b)*.

#### ⑤ ✅ AN ASSET THAT WAS NEVER CAPITALIZED — the answer is usually the same on every history

**When the client sells something that is on NO filed return:** 🔑 **basis is ZERO and the proceeds are
ORDINARY under §1245 — and this holds whether the company expensed the purchase or simply never recorded it,
because recapture runs on depreciation *allowed OR ALLOWABLE* and an old asset's recovery period has expired
either way.** ✅ **So it is keyable with no document, and zero is the LEAST favourable assumption available,
which means the only possible objection is that you were too conservative.**

⚠️ **ONE alternative, and it is the signer's:** **if the SHAREHOLDER owned it rather than the company, it is
not the company's sale at all and the proceeds are a capital contribution.**
⛔ **AND NEVER READ THE CLIENT'S *"VALUE"* COLUMNS AS BASIS.** **A no-books client's asset sheet often
carries a *"2023 value"* and a *"2024 value"* — those are his estimates of WORTH. A reviewer glancing at the
sheet can take one for a basis, so say so on the face of the working paper.**

🔑 **AND THE SAFETY CHECK THAT GOES WITH ALL OF THIS: when two assets share a description, write NEITHER of
them unqualified, ever.** _(The pilot client had two utility trailers — one on the schedule and financed, one
on no return and sold — and two Benson trailers. Both pairs cost real time.)_


---

## §1C · 🛑 THE DOCUMENT LEDGER — why a document you ALREADY READ keeps producing questions it already answered

> **Lilian, 2026-09-27, and this is the most important thing she has raised about the process itself:**
> *"Te he dado acceso a los documentos y te he subido los documentos en el chat, y siento que hay información
> que has pasado por alto… lo que nos sucedió con el mapeo de los assets era una pregunta que tenías desde
> hace varios días, y sin embargo su respuesta está dentro de un archivo que te compartí desde el inicio…
> Me confunde mucho el hecho de que me preguntes cosas que supuestamente ya debería saber porque ya te di la
> información. Entonces me pongo a buscar la información por todos lados, a pedirle al cliente, y resulta que
> son cosas que ya tenemos. Esto no puede suceder."*

🔴 **SHE IS RIGHT, IT HAS HAPPENED REPEATEDLY, AND IT IS NOT A MEMORY PROBLEM. IT IS A RECORDING PROBLEM, AND
IT HAS FOUR DISTINCT CAUSES.** ⛔ **Fixing three of them and not the fourth leaves the failure intact.**

### §1C.0 · 🔑 THE FOUR CAUSES, and each needs its own fix

**① A DOCUMENT IS READ TO ANSWER THE QUESTION OF THE HOUR, AND EVERYTHING ELSE ON THE PAGE IS NEVER WRITTEN
DOWN.**
🛑 **It is not forgotten — IT NEVER ENTERED THE RECORD.** **A session's context is finite and is compacted;
the working paper IS the memory.** ⇒ **A document opened on day 1 for question A contributes only the answer
to A, and the answers to B, C and D that were on the same page are gone when the session moves on.**
_(The pilot engagement: the client's workbook was opened for the year's asset ADDITIONS. The unit numbers that
became the single blocking question for two weeks were in the OLDER sheet's description column, two columns
from what was being read. Nobody hid them. They were outside the question.)_

**② THE INVENTORY MARKS A *FILE* AS READ, WHEN READING IS PER-QUESTION.**
⛔ **`✅ opened 2026-09-13` then reads, forever after, as *"this file has been mined."* It means *"this file was
queried once."*** 🔑 **THIS IS §1B.5'S LESSON ONE LEVEL UP: a filename listing is not a reading — and
"opened" is not "exhausted."**

**③ NOTHING MAKES A *NEW* QUESTION GO BACK TO *OLD* DOCUMENTS.**
**When a question becomes blocking, the search goes OUTWARD — to lender letters, to bank captions, to the
platform — because that is where the question seems to point.** ⛔ **It does not go back to the file already
ticked.** _(That is exactly how the unit-number map was searched for four times in the wrong places while the
answer sat in a file the inventory called read.)_

**④ AN IMAGE PASTED INTO CHAT IS A ONE-SHOT READ, AND WHATEVER IS NOT TRANSCRIBED IS LOST PERMANENTLY.**
🛑 **A later session cannot re-open it at all** *(§1B.6)*. ⇒ **So for an image, cause ① is not recoverable.**
_(The pilot's lease arrived as an image and was read for "is this a lease or a purchase?". Three other answers
were on the same page — the LESSEE's name, a `Primary Use` checkbox, and a `Net trade-in allowance: N/A` that
resolved an unrelated bank deposit — and none was written down. When it was read again two weeks later they
fell out in one pass.)_

### §1C.1 · ✅ THE FIX, AND IT IS ALL AT READ TIME — because that is the only cheap moment

🔑 **RE-READING A DOCUMENT LATER IS EXPENSIVE: it needs a fetch, it needs permission, and on an image it is
impossible. TRANSCRIBING IT ONCE, IN FULL, COSTS ONE PASS.**

> 🛑 **TRANSCRIBE THE DOCUMENT. DO NOT SUMMARISE IT.**

✅ **Every document that is opened gets ONE BLOCK in the working paper, and the block is a FIELD LIST, not
prose:**

| Put in the block | Why this and not less |
|---|---|
| **Every PARTY named, and its ROLE** | *lessee · co-lessee · lessor · assignee · borrower · seller*. 🔑 **On the pilot, WHICH party was the lessee was the whole answer to "is this the company's?"** |
| **Every DATE printed on it** | contract date, first-payment date, in-service date, disbursement date |
| **EVERY FIGURE WITH ITS PRINTED LABEL, verbatim** | ⛔ **Not the ones you need — ALL of them.** ✅ **`Agreed upon value 63,935` · `Residual 36,400` · `Rent charge 1,317.88`.** 🔑 **A figure you have no use for today is the one that answers next week's question** |
| 🔴 **Every CHECKBOX and its state** | **`Primary Use: ☒ business`.** ⛔ **Checkboxes are the single most-skipped field on a form and they carry the classification** |
| 🔴 **Every `N/A` AND EVERY ZERO** | 🛑 **AN ABSENCE ON A FORM IS A FACT.** **`Net trade-in allowance: N/A` PROVED a vehicle had been sold rather than traded, and explained a bank deposit nobody could place** |
| **Every identifier that is SAFE to hold** | ⛔ **Never an SSN/ITIN, bank or card number, street address, DOB or VIN** *(the VIN question is open — see the firm's follow-up list)*. ✅ **A masked last-four, a contract's own internal sequence, a stock or deal reference are ordinary working data** |
| **And a one-line note of what the document CANNOT tell you** | ✅ **"states a LOAN amount, not a purchase price"** — 🔑 **which stops the next session mistaking one for the other** |

⚠️ **AND CROSS-FOOT IT WHILE IT IS OPEN.** **A form's own internal identities take a minute and they either
confirm the transcription or catch a mis-read.** _(The pilot's lease closed seven ways; that is what made the
transcription trustworthy.)_

### §1C.2 · ✅ THE INVENTORY RECORDS WHAT WAS *TAKEN*, NEVER THAT IT WAS OPENED

⛔ **BAN the bare `✅ opened <date>`.** ✅ **Two states and only two:**

| | |
|---|---|
| ✅ **`TRANSCRIBED IN FULL <date> → §X`** | **Done. Nothing in it needs re-opening** |
| ⚠️ **`READ FOR <what> ONLY <date> — NOT TRANSCRIBED`** | 🔑 **THIS IS A TO-DO, and it is the line that would have flagged the pilot's client workbook for two weeks** |

🛑 **AND A THIRD STATE IS A DEFECT, NOT A STATE: a file listed with a tick and no §-reference.** ⛔ **If you
cannot point at the block, it was not transcribed.**

### §1C.3 · ✅ EVERY OPEN QUESTION NAMES THE DOCUMENTS THAT MIGHT ANSWER IT

✅ **Each open item carries a *"held documents that bear on this"* clause.** ⇒ 🔑 **So a new question's FIRST
move is a text search of the working paper's own transcription blocks — seconds, no fetch, no permission —
and only then an outward search.**

🛑 **AND THE RULE WITH TEETH, because the general form of *look before you ask* has proved too soft:**

> ⛔ **NO QUESTION REACHES THE CLIENT UNTIL THE WORKING PAPER STATES, FOR THAT QUESTION, WHICH HELD DOCUMENTS
> WERE CHECKED AND WHAT THEY SAID.**

⚠️ **"We looked everywhere" does not satisfy it. NAMED documents do** — and naming them is what makes the
negative honest *([`method.md`](../../../projects/pre-return-review/method.md) rule 1b)*.

### §1C.4 · 🛑 AND THE ONE THAT IS NOT ABOUT DOCUMENTS AT ALL — a closed QUESTION does not close the ITEM

🔴 **The same engagement, the same day, a fifth instance in a different shape.** **A ruling closed one question
about an asset — *is its booked cost contradicted by its lender note?* — and a later pass read that as closing
EVERY question about that asset's cost, and dropped it from a list of purchase documents to request.**
⛔ **The new question was different: *does the booked figure include the sales tax and the fees, or is it the
sticker price?*** 🔑 **Nothing had answered that one.**

✅ **THE RULE: when a decision closes a question, write WHICH QUESTION it closed.** ⛔ **A decision titled
*"the 1839 is settled"* invites exactly this error; one titled *"the 1839's YEAR and its lender-note
discrepancy are settled"* does not.** ⚠️ **And when an item comes off a list, say which decision took it off
and what that decision actually decided.**

_(All five instances are from one engagement in one fortnight, and the client's principal found the fifth one
herself by asking a question this session could not answer: "if five or six vehicles were bought, why do you
only need the documents for three?")_

### §1C.5 · 🛑 A SWEEP IS A CLAIM, SO IT NAMES ITS LIST — and the table recording the sweep is inside the sweep

🔴 **When a ruling lands on a working paper of any size it leaves debris — every surface that named the old
figure, the old date, the old open question. Sweeping them is part of applying the ruling, and it is normal to
say so in the paper.** ⛔ **What is NOT normal, and cost two rounds of review on the pilot: writing *"swept end
to end"* and listing only some of the files.**

| | |
|---|---|
| ⛔ **What the first pass did** | **Swept the WORKBOOK and `FOLLOW-UPS.md`, listed those rows, and wrote *"swept end to end"*** |
| 🔑 **Where the debris actually was** | **The WORKING PAPER ITSELF — eleven date surfaces, nine calling a settled figure PROVISIONAL, three still routing a client question the same ruling had struck** |
| ✅ **The rule** | **A sweep row exists for EVERY surface changed, named by section, and the paper it is written in is the FIRST place swept — not the last, and never the assumed-clean one** |

🛑 **AND THE SECOND ONE IS SHARPER, because it defeats the first: THE ROW THAT RECORDS A CORRECTION IS ITSELF A
SURFACE, AND IT CAN CARRY THE ERROR IT WAS WRITTEN TO RECORD.** ⛔ **On the pilot, ONE commit narrowed an
over-broad stamp in place — and then re-stated the same over-reach in the sweep row describing the narrowing.**
**The stamp was right and its own description was wrong, in the same commit, by the same hand.**
✅ **So after writing a sweep table, re-read each row as a STATEMENT OF CURRENT STATE and check it against the
surface it describes** — ⚠️ **the summary of a correction is not covered by the correction.**

⚠️ **AND WHAT MAKES THIS WORTH A RULE RATHER THAN A HABIT: every one of these was found by an INDEPENDENT
review, never by the session that wrote them.** 🔑 **A session cannot sweep its own claim, because the claim is
the thing it believes.**

### §1C.6 · 🛑 SWEEP A SUPERSEDED FIGURE BY **GREP**, NOT BY MEMORY — and sort the hits into INSTRUCTIONS and ANALYSIS

_(Added 2026-10-01 after the **third** occurrence on one return — the first two are in the Zakom paper's own
decisions 143 and 159. **Lilian ordered the sweep that found it:** *"revises el working paper de principio a fin
y trates de que no haya ninguna nota que esté obsoleta o desactualizada."*)_

🔑 **THE FAILURE IS STRUCTURAL, NOT CARELESS, AND THAT IS WHY A HABIT WILL NOT FIX IT.** **A ruling closes a
question and leaves its old answer standing on every surface that quoted it.** ⛔ **The author who applies the
ruling sweeps the surfaces they REMEMBER — which are the ones they wrote recently — and a working paper of any
size has more.** *(Zakom: over 15,500 lines, 35 superseded figures, 434 hits.)*

✅ **THE METHOD, and it is three lines of script rather than a reading pass:**

1. ☑️ **List every figure the return has SUPERSEDED, with the value that replaced it.** **Build it from the
   decisions table, not from memory.**
2. ☑️ **Grep each old value across the whole paper.**
3. ☑️ **Sort every hit two ways** — **by SECTION, and by whether the line already carries a historical stamp**
   *(`SUPERSEDED`, `_(was`, `_(As written`, `WITHDRAWN`, `this row read`)*.

🛑 **AND THE SORT THAT MATTERS IS NOT *live section* versus *old section* — IT IS **INSTRUCTION** VERSUS
**ANALYSIS**.**

| | |
|---|---|
| ✅ **ANALYSIS may hold a superseded figure** | **A diagnosis section, a decisions row, a branch table that PRICES what was given up. Its job is to show what was keyed against what should have been** — **deleting the old value would destroy the record** |
| 🔴 **AN INSTRUCTION MAY NOT** | **The worksheet a preparer copies from, the tie-out checks, the open-at-filing checkboxes, the handoff.** ⛔ **A stale figure here is not a record, it is a wrong keystroke** |

🔴 **THE WORST CASE THE SWEEP FOUND, and it is the shape to expect: the SECTION had the ruling stamped and the
TABLE INSIDE IT did not** — **so one subsection carried two live instructions at once, three days apart, and the
TABLE is what gets copied.** ⇒ ✅ **Grep reaches a table cell; a reading pass skims it as already-known.**

🛑 **AND THE MISTAKE THE PILOT'S OWN FIRST SWEEP MADE, caught by the review of the very commit that wrote this
rule: IT DECIDED WHAT AN INSTRUCTION SURFACE WAS BY **SECTION NUMBER**.** ⛔ **That is wrong, and it is the one
way this whole method fails quietly.** **The sweep scoped itself to the worksheet, the tie-outs, the open-items
list and the handoff — and MISSED a *"what to type, and where"* table sitting inside a DIAGNOSIS section, which
was still telling the preparer to re-code four assets three days after the signer had ruled they stay.**
⚠️ **On the largest figure on that return.**

✅ **SO THE TEST IS THE CELL'S CONTENT, NOT ITS ADDRESS.** ☑️ **Grep for the INSTRUCTION VOCABULARY as well as
for the figures** — `what to type` · `what to enter` · `re-code` · `change X to Y` · `key` · `ENTER` ·
`IF <person> agrees` · `- [ ]` — **and check every hit against the current rulings, wherever in the paper it
lives.** 🔑 **A diagnosis section earns its superseded figures; the *"what to type"* table inside it does not,
and a conditional instruction (*"IF she agrees to 80%…"*) is DEAD the moment the condition is answered —
including when it is answered NO.**

🔑 **AND A SECOND CLASS THE FIGURE GREP MISSES ENTIRELY: a tie-out check that still PASSES against an older
draft.** ⛔ **Nothing in it is a wrong figure — it is a correct statement about a return that no longer exists**,
**which reads as evidence about the current one.** ✅ **SO: every tie-out row NAMES THE DRAFT IT WAS RUN ON**, and
re-running them is part of reviewing a new draft, not an occasional extra. *(Zakom: five of eleven rows were
still showing a 28-September draft's figures.)*

⚠️ **AND SWEEP THE DERIVED FIGURES TOO** — **a residual's own grep misses the four or five numbers computed
FROM it** *(decision 159)*. ☑️ **Put them in the list in step 1.**

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

| Line | ⌨️ / ƒ | What it is | Formula, or where you read it |
|---|---|---|---|
| **7** | **⌨️** | Inventory at end of year | 📖 **read** off the balance sheet — but read the trap in §4B |
| **8** | **ƒ** | Cost of goods sold | ƒ `= line 6 − line 7` → carry to **page 1, line 2** |

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
  "provide information shareholders need", **and then points at the Instructions for Form 8990**, whose
  worksheet has **one column per preceding tax year** and computes the average itself at line 4. That
  shape settles that the K-1 carries **one annual figure, not an average**.
  🆕 ⓘ **AND WHAT THE INSTRUCTIONS DO *NOT* SETTLE, added 2026-09-10 after a session overstated it:**
  the code AC instruction gives **no formula and names no source line**, and the §448(c) test it feeds is
  **not a plain single-entity computation** — *"Gross receipts include the aggregate gross receipts from all
  persons treated as a single employer"* *(2025 Instructions for Form 1120-S, **pp. 19 and 24**, read
  2026-09-10)*. ⛔ **BUT BOTH OCCURRENCES OF THAT SENTENCE SIT IN THE §163(j) / Schedule B question 10
  context — the CORPORATION's own small-business-taxpayer test — NOT in the code AC instruction**, and the
  aggregation belongs to **whoever runs the test**, which for code AC is the shareholder. 🔑 **So it does
  NOT establish "no software can compute this box"** *(a session wrote exactly that and had to withdraw
  it)*. ✅ **What DOES stand:** the instruction supplies no formula, and the field is observably left blank
  and undiagnosed by at least one major package. **That is enough to make it a checked-every-year field.** ⚠️ **It does NOT settle which
  year** — that it is the current one is an inference from Schedule K convention, and §11F says so rather
  than dressing it as a rule. 🔑 **Separating what a source PROVES from what the firm INFERS is half the
  value of writing it down.** [1120-S SOP §11F](../../../projects/sops/form-1120s-preparation.md).)_
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
⛔ **Those account names and every figure in them are INVENTED, like every example in this skill** *(and after the 2026-09-06 clarification below, "every figure" means every CLIENT-SPECIFIC figure — a statutory rate is not one)* — a
real client's figures belong in that client's working paper *(§5)* and **nowhere else in the repo**,
this file included. 🛑 **And "the example is close enough to the real one to be useful" is exactly how a
client's ledger ends up in a firm-wide file** — an illustration must share **no CLIENT-SPECIFIC digits** with the return
that prompted it. ⓘ *A statutory rate, a MACRS table percentage or a published threshold is **not** client
data and may be reused; a basis, an amount, a business-use percentage or anything derived from the client's
own facts **is**.* 🔑 **Added 2026-09-06, replacing a bare "no digits"** that could not be met literally: the ban is on
what identifies the client, not on arithmetic that belongs to the tax code.

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

🔄 **Before you build ANY of what follows, run §4E's three steps** — re-fetch, list the OPEN PRs, and
re-read the working paper. **A delivery built on a stale paper is worse than no delivery.**

**This is what the SOP is for, and the format matters as much as the figures.**

> 🔑 **The standard, in Lilian's own words (2026-08-19):** *"las tablas por cada formulario · el flujo
> de los números entre las formas · las explicaciones · las casillas que tengo que marcar."* She has
> little experience with returns and **gets lost between the forms, the pages and the numbers** — so
> a table of values without a route through the forms does not help her. In English: *the tables per
> form, the flow of the figures between the forms, the explanations, and the boxes I have to tick.*
> **Deliver all four, every time, unprompted — plus part 2, which is what makes the flow readable,
> and parts 1b to 1g, 6 to 13 and 8b to 8d below, which are what she has had to ask for since.**
> ⓘ *The count was "eighteen" and then "nineteen" for months while **8c and 8d existed and were never
> counted**; corrected to **22** on 2026-09-22 — 13 headline parts, 1b–1g, 8b–8d.*

> 🛑 **THE CALIBRATION, and it governs all twenty-two parts _(Lilian, 2026-08-19)_:** *"Imagina que esto
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

### The TWENTY-TWO things every delivery carries

**1 · ONE TABLE PER FORM, in the order the forms are actually prepared** — every table with the same
columns, and **the FORM, the PAGE, the PART, the LINE NUMBER and — on a grid form — the COLUMN named**:

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

> ### ⌨️ **EVERY ROW SAYS WHETHER THE LINE IS TYPED OR COMPUTED. This is a COLUMN, not a note afterwards.**
>
> 🔑 **At the keyboard the first question is never "what is the number" — it is "do I type this one".**
> ⛔ **A running-balance ledger** *(Step · Amount · Running total)* **answers the first and never the
> second**, and on a basis or reconciliation form most lines are outputs: Form 7203 Part I has **nine
> computed lines out of fifteen**. **Put `⌨️` or `ƒ` on every row**, and close the table with the two
> lists — *typed: A, B, C, D, E and 1, 2, 3a, 6, 8a, 13; computed: 4, 5, 7, 9, 10, 11, **12**, 14, 15* —
> so the count is checkable at a glance. ⚠️ **That `12` is the correction below; the list read as eight
> for weeks under a heading claiming nine.**
> ⚠️ **Those lists are THIS return's, not the form's.** 3b–3m and 8b–8c are typed lines that happen to be
> empty here. 🔑 **A line blank because this client has nothing there is not a computed line, and a
> delivery that conflates the two teaches the wrong thing about the form.**
> ⛔ **CORRECTED 2026-09-22 — an earlier version of this bullet said "Form 7203 line 12 is NEITHER typed
> nor computed, the form gives it no arithmetic at all." That is WRONG and is struck.** `i7203.pdf` says:
> *"Line 12. Use Part II to figure the debt basis restoration, if any. **Enter the total from line 23**."*
> **That is the identical construction to line 11** *("Use Part III… Enter the total from line 47, column
> (c)")*, which the same bullet marks **ƒ**. 🔑 **Line 12 is COMPUTED** — which also restores the count:
> **nine computed lines are 4, 5, 7, 9, 10, 11, 12, 14, 15.** ⚠️ **The list above was only ever eight.**
> ⓘ *The rule the error reached for survives without it: where a form genuinely gives a line no arithmetic,
> mark it as neither rather than guessing. It just was not true here — and the tell was that the form's own
> printed text names where the figure comes from.*
> 🛑 **AND THE FORM AND THE SOFTWARE ARE TWO DIFFERENT ANSWERS. GIVE BOTH.** A line the IRS form treats as
> an input can still be closed in the program because it arrives from another screen. **Neither answer
> alone is usable**: give the form's, then the program's, and say which is which.
> ✅ **FORM 7203's PART I IN ATX IS NOW ESTABLISHED, FROM THE KEYBOARD — use this, and stop reasoning
> about it** _(Lilian, 2026-09-22: **"todos los referentes 7203 se entran en el K1 input y luego fluyen al
> 7203. Al menos esta es la forma en la que trabaja ATX."**)_:
> **Every Part I BASIS figure is entered on `K1 INPUT (1120S)` and flows to the 7203.** 🔑 **Including the
> DISTRIBUTION, which goes in the `box 16D` field on that screen** and lands on **Form 7203 line 6** —
> _her words: "las distribuciones se entran en el K1 input en el box 16d"_.
> ⛔ **SCOPE IT TO PART I, WHICH IS WHAT SHE SAID AND WHAT WAS OBSERVED.** ⚠️ **"The 7203 takes nothing"
> is TOO STRONG and was written that way for a day before review caught it** *(the very over-reach 8d's
> own closing paragraph warns about)*. ✅ **Outside Part I the form IS typed: items A, B, C, D and E, and
> Part II's loan balances, lines 16–20** — and the Hub has said so since 2026-09-09.
> 🔑 **This matters concretely:** Form 7203 **item D** must be ticked on a real return, and a preparer told
> "the form takes nothing" will hunt for it on the K-1 screen and not find it.
> **So: say `7203, BASIS WKST` is a REPORT for Part I, name items A–E and lines 16–20 as the exceptions,
> and give the FORM's ⌨️/ƒ split separately — the two answers disagree on every Part I line.**
> ⚠️ **This supersedes an inference that stood for weeks and did real damage**: an earlier version of this
> bullet said *"Part I opens only lines 1 and 13"*. Nobody had seen it; **it sent a preparer hunting for a
> keyboard inside a form that has none** (part **8d**), and — because it survived HERE after 8d struck it —
> **it was copied into a client's working paper on 2026-09-22.** 🔑 **Two lessons, and the second is the
> expensive one: a screen fact comes from a screen; and when you retract a claim, grep the file for it.**
> _(Lilian, 2026-09-06: **"tampoco entiendo bien cómo llenar la forma 7203"** — the figures were right and
> the table's SHAPE was the defect.)_
>
> ### 🗺️ **A GRID FORM NEEDS ITS COLUMN, AND SOMETIMES ITS GRID — the part is not an address**
>
> 🛑 **Some forms put two grids on one page and reuse the row letters.** Schedule E page 2 Part II is the
> worked case: **line 28** is identity only *(name · P/S · foreign · EIN · basis-computation box · at-risk
> box)* and **has no money column at all**; the money grid sits directly below it with **no line number of
> its own** and the **same row letters**, and the figure goes in **column (k)** for income or **(i)** for a
> loss. ⛔ **"Schedule E · page 2 · Part II" sends someone to a page with two places to write.** ✅ **Name
> the grid, the row and the column**, and — when the form's shape is the obstacle — **draw the two grids**,
> which costs four table rows and removes the question entirely.
> **The same applies to Form 4562 Part V, Schedule K-1's coded boxes, and any lettered-column schedule.**
> _(Lilian, 2026-09-06: **"no entendí bien cómo llenar el Schedule E, que es donde van los datos del K1.
> No entiendo dónde poner eso."**)_
>
> ### 🔴 **AND THE BLOCK ABOVE WAS STILL NOT ENOUGH: THE FIGURE MAY NOT BE TYPED ON ITS OWN FORM AT ALL**
>
> 🛑 **Naming the grid, the row and the column answers *where on the FORM*. It does not answer *where do
> I TYPE*, and the two are routinely different forms.** ✅ **Worked case, established at the keyboard:** a
> K-1's **money** is not typed on Schedule E page 2 at all — the K-1 is keyed on **its own form**, and
> **Schedule E page 2, Form 7203 and Form 8995 are outputs of that one screen** *(ATX; the firm's own record
> is [Kolo Florida's paper](../../../projects/tax-returns/kolo-florida-inc/2025-form-1120s.md) §8A row 1,
> Aug 2026 — ⚠️ **that row carries no read-back stamp, unlike rows 2-3 of the same table**)*. 🔑 **Same rule as the Form 7203 entry route — and ⛔ note that the "only lines 1 and 13" version of
> that example was RETRACTED (part 1, and 8d).**
>
> 🛑 **BUT SCOPE THE CLAIM TO WHAT WAS OBSERVED — "that form takes no input" is almost always too strong.**
> ⛔ **Schedule E page 2 still has preparer entries on it** — line 27's Yes/No and the **(e)** and **(f)**
> ticks — and **where they are made is a separate question from where the money is keyed.** ⚠️ **A delivery
> that flattens the two sends the person hunting on the wrong screen for the second time**, which is exactly
> the failure it was written to fix. ✅ **Say which figures arrive and which fields are still theirs.**
>
> **So the delivery is TWO layers, in this order, and the first one is the one that was missing:**
>
> | Layer | What it carries |
> |---|---|
> | 🛠️ **1. THE INPUT FORM** | **Its name, its tab, its fields — and beside each field, WHICH FORM IT SURFACES ON.** One screen typically feeds three or four forms at once |
> | 📄 **2. THE DESTINATION** | the same grid/row/column coordinates as before, headed ***what must APPEAR***, and **keeping the `⌨️`/`ƒ` column**: the arriving figures become `ƒ`, and **any field the preparer still enters on that form stays `⌨️`** |
>
> ⛔ **Do NOT relabel the whole destination table `ƒ`.** A tick or a Yes/No that is still the preparer's,
> marked computed, is the same error in the opposite direction.
>
> 🛑 **AND SAY IT IN THE SECTION'S FIRST LINE, before any coordinates.** Someone hunting for a field
> that does not exist does not conclude "this figure is computed" — they conclude **the software is broken or
> they are missing a permission**, and they stop. ⛔ **A computed figure whose delivery opens with its
> line number is a defect however correct that line number is.**
>
> 🔑 **AND THE GENERALISATION WAS ALREADY IN THE FIRM'S OWN SOP, TWICE, UNAPPLIED:**
> [`form-1120s-preparation.md`](../../../projects/sops/form-1120s-preparation.md) says the assets are keyed
> in the **`Fixed Assets`** tab because *"4562 in ATX is a computed output"*, and that page 1 line 7 cannot
> be typed because ATX routes it through **Form 1125-E**. 🛑 **Two worked instances of one rule that nobody
> had written as a rule.** ✅ **It is written now, and it applies to every computed form — not just to K-1s.**
>
> ✅ **Then add the "it did not flow" list**, because a missing input on a computed form produces **no error
> message** — the destination simply comes out blank or short, and foots perfectly either way *(the Kolo
> read-backs: `8a` blank because box 16C never reached the K-1 input, and a transposed contribution — two
> unrelated causes, one symptom, and the form added up both times)*.
> 🔴 **AND THE LIST'S FIRST QUESTION IS NOT "DID IT ARRIVE" BUT "WHERE DID IT LAND".** ⛔ **A figure that
> reaches the right TOTAL by the wrong column is invisible to every check that looks at the total** —
> Schedule E line 30 adds columns **(h)** *(passive income)* **and (k)** *(nonpassive income)*, so a K-1
> classified the wrong way lands one column over and **line 32 is identical.** ⚠️ **That symmetry is an
> INCOME-year fact** — a misclassified **loss** goes to (g) instead of (i), and (g) carries only what Form
> 8582 allows, so there line 32 usually *does* move. ⚠️ *(An earlier version of
> this rule said a passive activity "never reaches Schedule E". **That was wrong** — Form 8582 is the
> passive **LOSS** form, and passive income goes straight into (h). Read off the 2025 PDF, 2026-09-07.)*
> 🛑 **Each item gets its FIX, not just its symptom** — §4B's standing rule.
>
> ⛔ **THE FAILURE THIS IS WRITTEN FROM IS NOT THAT THE ROUTE WAS UNKNOWN. IT WAS IN THE REPO.** Another
> client's working paper already said it in as many words — *"the K-1 input screen IS Form 7203's data
> entry... work the K-1 input first; read Form 7203 as a result"*, and *"K-1 input → box 1. **Computed
> onward** to Schedule E Part II line 28"* — established at the keyboard on a live return in August.
> 🛑 **A second delivery gave the form's coordinates and no route.** 🔑 **The evidence being in the repo is
> not the same as the evidence being USED, and this is the second rule on this page written from that
> exact failure.** 🛠️ **So: before delivering an entry route, grep `projects/tax-returns/` for the form's
> name — another client's paper has usually already paid for it.**
> _(Lilian, 2026-09-07: **"Tus instrucciones acerca de cómo llenar el Schedule E no son buenas para seguir
> en ATX. No encuentro dónde entrar a nada."**)_
>
> ### 🟢 **THE VENDOR'S SUPPORT SITE IS REACHABLE — and the FORMS LIST is the authority on a form's name**
>
> 🔴 **Lilian opened it on 2026-09-07, and a rule written that same morning saying it was unreachable
> was WRONG WITHIN HOURS.** ⛔ **Do not repeat the check from memory — run it.**
>
> | Host | 2026-09-07 |
> |---|---|
> | ✅ **`support.atxinc.com`** | **200 with real content.** 🔴 **`/taxna/software-system-requirements/atx-forms` is the FORMS LIST — every form's name and description, grouped by PACKAGE** *(`id="FederalIndividual"`, `FederalCorporate`, … plus the states)*. ⚠️ **The URL carries no year — it serves the site's current program year**, so say which that was. **2.6 MB; parse it by package, do not eyeball it — a crude grep spills across packages and invents neighbours that are not in the box.** |
> | ✅ `support.cch.com` | 200, but every KB article returns a **"This browser version is not supported" stub** — the content is rendered by a JS app a session cannot run, whatever user-agent it sends. ⚠️ **And `support.atxinc.com/support/atxuserguides` is a LOGIN FORM.** 🔑 **So: a session cannot read the vendor's instructions; Lilian can, with the firm's ATX login and a browser.** |
> | ⛔ `www.atxinc.com` · `taxna.wolterskluwer.com` | refused — the **marketing** sites, which are not what anyone needed |
> | ✅ `irs.gov` | reachable |
>
> 🛑 **AND THE TRAP THAT PRODUCED THE WRONG RULE: `WebFetch` IS BLOCKED ON ALL OF THESE WHILE `curl`
> WORKS.** ⛔ **Never conclude a host is unreachable from a WebFetch failure — retry with `curl -A` and a
> browser user-agent.** ⚠️ *(The session had just written that exact warning about `irs.gov`, two clauses
> earlier, and did not apply it to the vendor hosts. Caught in review.)*
>
> ### 🔴 **AND THE FORM'S NAME IS NOT ENOUGH: SAY WHICH OF THE LOOK-ALIKES IT IS NOT**
>
> 🛑 **A search in the program's *Add Forms* box returns a FAMILY, and the names differ by one word.**
> ⛔ **A delivery that names only the right one leaves the person to pick from the rest**, and the wrong
> pick does not error — it opens a plausible screen and wastes an hour.
> ✅ **Worked case, read off the vendor's forms list by package:** typing `K1` in a **1040** returns
> **FOUR** — `K1 INPUT (1041)` · `K1 INPUT (1065)` · **`K1 INPUT (1120S)`** · `SCH K1 (8865)`.
> 🔑 **Note what is NOT there and why it matters: `SCH K1 (1120S)` and `SCH K1 (1065)` live in the
> Corporate and Partnership packages**, so on a 1040 they cannot be picked by accident at all — **the only
> `SCH K1` in the box is the foreign-partnership one, which is exactly the one that was picked.**
> ⚠️ **And attaching a state adds its own `XX K1 INPUT`** *(most states have one)*.
>
> ✅ **So give the DISAMBIGUATION — scoped to the package the person is actually in — and the naming rule:**
>
> | | |
> |---|---|
> | **`K1 INPUT …`** | the K-1 you **RECEIVE** — a capture worksheet that feeds *your* return |
> | **`SCH K1 …`** | the K-1 you **ISSUE** — the printed form handed to someone else |
> | **the parenthesised number** | ⚠️ **within the federal K-1 family only**, the **issuing entity's form** — `1120S` S corp · `1065` partnership · `1041` trust · **`8865` FOREIGN partnership**. ⛔ **Elsewhere in the program the parentheses name the PARENT form** *(`SCH E (1040) PAGE 2`, `LUMP-SUM WKST (1040)`)*, so do not state the rule unscoped |
>
> 🔑 **AND GIVE THE TELL — but make it STRUCTURAL, not lexical.**
> ⛔ **"An issuing K-1 asks for a percentage" is FALSE and a first version of this rule said it.** 📄 **A
> RECEIVED K-1 carries one too**: Schedule K-1 (1120-S) Part II **item G is `Current year allocation
> percentage`**, and Schedule K-1 (1065) **item J is the partner's own `Profit / Loss / Capital %`**
> *(read off the 2025 PDFs, 2026-09-07)*. **A capture worksheet mirrors those boxes, so the RIGHT form has
> percentage fields too** — and on a mid-year change or a §1377(a)(2) election it has *more* of them.
> ✅ **What actually separates them is the SHAPE and the TITLE:**
>
> | | |
> |---|---|
> | 🔴 **ISSUING** | a **multi-owner GRID** — one **row per owner**, *Add Record / Delete Record*, and it asks for **the OWNERS' names and addresses**, with percentages split among them to 100% |
> | ✅ **RECEIVING** | an **Input Sheet for ONE entity** — it asks for **the COMPANY's name, EIN and address**, then that entity's boxes |
>
> ⛔ **A percentage field alone proves nothing.** 🔑 **"Whose name and address is this screen asking for?"
> is the question that always separates them** — and a person who cannot name the form can still answer it,
> which is why the tell is worth more than the name.
> _(Lilian, 2026-09-07, third round on the same section: she had added **`SCH K1 (8865)`** — wrong entity
> type **and** wrong direction — after a delivery that named the right form and nothing else.
> 🛑 **Two rounds earlier the same delivery had sent her to `SCH E (1040) PAGE 1`, the RENTAL sheet.**
> **Both times the name alone was the whole delivery, and both times she landed on a plausible neighbour.**)_
>
> ### 🔴 **AND THE FOURTH ROUND: ADDRESS THE SCREEN BY ITS OWN LABELS, NOT THE IRS FORM'S GEOGRAPHY**
>
> 🗣️ **"Parte 3, casilla 1: ¿dónde está eso?"** ⛔ **Because there is no Part III on the screen.** The
> software's input sheet renumbers the K-1's boxes 1-19 **without the Part heading**, and gives them
> **its own wording** — the IRS's *"Ordinary business income (loss)"* is the sheet's
> *"**Ordinary income (loss)**"*. 🛑 **An address built out of the FORM's geography — part, box, column —
> is unfindable on a screen that does not carry it.**
>
> ✅ **So an entry route is written in the SOFTWARE's vocabulary:** the **section heading as printed on the
> screen**, the **line number as the screen numbers it**, and **the field's label verbatim**. ⚠️ **Say when
> the label differs from the IRS's**, because the person is looking at one and you are quoting the other.
>
> 🔴 **AND THE CHECKBOXES ARE PART OF THE ENTRY ROUTE, NOT A FOOTNOTE.** ⛔ **A figure keyed correctly on a
> screen whose checkboxes are wrong produces a wrong return with no error and, often, no changed total.**
> **List them with their consequence, and say which stay EMPTY** — an unticked box is an instruction too.
> _(The worked case: on the K-1 input sheet, `Calculate basis limitation`, `Qualified Business` and
> `Passive activity` each carry a consequence no total reveals — and **`Passive activity` left UNCHECKED**
> is where the nonpassive position lives, the control three rounds of delivery had described in the
> abstract without knowing where it was.)_
> 🛑 **AND HERE IS THE LIMIT A SCREENSHOT CANNOT CROSS: it establishes the LABELS, never what a box
> DOES.** ⛔ **Write the consequence as `inferred` unless the screen itself states it or someone has
> watched the output change.** ⚠️ _(Caught in review: three consequences were written inside a block
> stamped "observed from the screenshot", and one of them — "without `Calculate basis limitation` there is
> no Form 7203" — was contradicted by the person's own earlier screenshot, where `7203, BASIS WKST` was
> already in the return before any K-1 form existed. **The screen says the box supports Form 7203; it does
> not say the form disappears without it.**)_
>
> 🔑 **AND READ WHAT THE SCREEN ITSELF SAYS.** Input sheets carry instruction text, and it answers
> questions a session would otherwise mark `not established`. _(Her screenshot's header settled two of
> them outright: the import route — **"To Import K-1s from a S Corporation return, select Returns / Import
> Data / K-1 Data"** — and where the basis section lives: **"Scroll down to the 'Basis Limitation' section
> on this tab."** Both had been carried as unverified search-result leads for a day.)_
> 🛑 **ONE SCREENSHOT OUTRANKS EVERY SEARCH RESULT, AND IT IS ONE MESSAGE AWAY.** ✅ **Ask for it early
> rather than delivering a third guess** — and when the person sends one, **transcribe what it shows**
> *(sections in order, every field label, every checkbox)* **before adding anything of your own.**
>
> ### 🔴 **SAY WHETHER THE ENTRY MOVES THE TAX — before they type it, not after**
>
> 🛑 **Many required entries change no figure on the return**, because a cap or a threshold elsewhere is
> already binding. ⛔ **A delivery that says "type this" and nothing else sends the person hunting for a
> change that was never going to appear**, and the hunt ends in them doubting the instruction.
> ✅ **State it in the same breath: what it fixes, and that the number at the bottom will not move.**
> _(Worked case: a K-1's §199A information was missing from a 1040 — Form 8995 line 1 carried the
> S corporation at zero. Entering it raised **line 10**, the deduction before the limitation, and left
> **line 15** — the deduction itself — unchanged, because **line 14** — 20% of **line 13**, taxable income
> *less net capital gain, qualified dividends included* — already bound; the wage and property figures never bite below the §199A threshold either.
> **It is a correctness fix, not a money fix, and saying so is part of the delivery.**)_
> ⚠️ **AND SAY WHAT THE CLAIM DEPENDS ON, because a cap that binds today can stop binding.** ⛔ **"It does
> not move the tax" is true of the return AS IT STANDS**, not of the return after an open position is
> settled. _(In that same case an unresolved question — whether officer compensation is qualified business
> income at all — would, if answered the other way, drop total QBI far enough that the cap releases and the
> entry moves the deduction from nothing to a real figure.)_
> 🔑 **The general form: name the CAP or THRESHOLD that swallows it, so the person can see why.**
>
> ### 🔴 **A NETTING PRESENTATION MOVES BOTH SIDES — and a DIFFERENCE is not proof of an error**
>
> ⛔ **Where a firm policy nets two figures against each other and reports one at zero, the OTHER one
> becomes the NET.** **Zeroing one side and leaving the other gross is not a presentation choice — it is a
> wrong number**, and it is wrong in whichever direction the delivery forgot. _(Both halves of that error
> appeared on one live return: the paper's own instruction had given the gross on both lines, and the
> draft in the software had zero on one and nothing on the other.)_
>
> 🛑 **BUT DO NOT TURN "THE TWO PRESENTATIONS MUST AGREE" INTO A TEST. It is only true where netting was
> AVAILABLE**, and a first version of this rule stated it unconditionally.
> ⛔ **Where the policy's own gates fail, the two presentations genuinely differ — and the difference is the
> thing the netted version would ERASE.** _(The live counter-example was one shareholder away: on the same
> company, the other owner's **distributions exceed his CONTRIBUTIONS** — which is the policy's own first
> gate — so netting is not available to him at all and his form must carry the gross. **Separately, his
> distributions also exceed his BASIS**, and that is what creates a §1368(b)(2) capital gain. A preparer
> applying "they must agree, so one side was missed" would have deleted it.)_
> ⛔ **DO NOT COLLAPSE THOSE TWO TESTS — a first version of this rule did.** **The GATE is contributions
> vs distributions; the GAIN is distributions vs basis.** ⚠️ **A failed gate does NOT imply a gain**, and
> reading the gate as the gain test lets someone net a case the policy forbids: contribute a little, draw
> a lot, against a large opening basis — no gain anywhere, and the net contribution is *negative*.
> ✅ **So the order is: check the POLICY'S GATES first, per person; only then compare the two
> presentations.** 🔑 **Where the gates pass, agreement is a useful arithmetic check. Where they fail, a
> difference is the correct answer.**
> ⛔ **And do not restate the policy here** — [`form-1120s-preparation.md` §5C-v](../../../projects/sops/form-1120s-preparation.md)
> already carries it — **§5C-v, "the five gates"** — with its *"plus any stock ACQUIRED during the year"*
> clause, which a restatement drops. **Point at it and add only what is new on this side of the return.**
>
> ✅ **So a form's NAME is now checkable at source** — `K1 INPUT (1120S)` *(Federal K-1 (1120S) Input
> Worksheet)*, `SCH E (1040) PAGE 2`, `7203, BASIS WKST` were all read off that list, not inferred.
> 🛑 **AND SO IS WHICH PACKAGE IT IS IN, which is half the answer** — a form in another package is not a
> wrong choice the person can make.
> ⛔ **What is still NOT checkable is what a screen LOOKS LIKE** — its tabs, its field positions, its
> column letters. **For those the authority stays the firm's own two sources:** a **screenshot** from
> whoever is at the keyboard, and **`projects/tax-returns/`**.
> ⛔ **A screen detail found in a search-result summary is a LEAD, not a route** — label it with its source,
> say the page itself could not be opened, and **steer by the field's TITLE rather than by a column letter
> or a tab name you have not seen**, since those move between versions and the person has the screen open.
>
> ### 🔴 **A LINE NUMBER IS READ OFF THE CURRENT-YEAR PDF EXACTLY LIKE A FIGURE**
>
> §3's rule says any answer that **changes a figure** is read off the current-year PDF. ⛔ **A line number,
> a box letter and a column letter are the same kind of fact and were not obviously covered.** They are now.
> 🛑 **And most sharply: BEFORE CONTRADICTING THE PERSON WHO HAS THE FORM OPEN.**
> _(2026-09-06: Lilian said the Turo fee goes on Schedule C **line 27b**, `Other expenses`. A session was
> about to correct her to 27a from memory. **The 2025 form reads `27a Energy efficient commercial bldgs
> deduction` and `27b Other expenses (from line 48)` — she was right.** The rule existed and did not name
> line numbers, so nothing stopped the correction.)_
> ⚠️ **And a line that reads `(from line 48)` or `Enter the amount from line 47, column (c)` is a TOTAL** —
> the address to give is the line the amount is actually typed on, not the one it appears on.
>
> ### 📌 **WHERE THE PRIOR YEAR'S RETURN PUT IT, THIS YEAR PUTS IT**
>
> The build-the-map-from-the-prior-year method decides **which line**, not only which figure. 🔑 **If last
> year's return deducted something as `Other expenses` rather than on a named line, that is a convention** —
> follow it unless there is a reason to change, and **name it as the convention with its evidence.**
> ⛔ **The failure this is written from is not "the session did not know": the prior year's mapping was
> already quoted in that client's own working paper — its whole Schedule C deduction beyond depreciation
> sat in `Other expenses`, nothing on a named line — and the 2025 figure went on a named line anyway.**
> 🛑 **The evidence being in the file is not the same as the evidence being USED.**
>
> 🔴 **THEN ASK WHO PREPARED THAT PRIOR YEAR, because it changes WHOSE convention it is.**
> **An outside preparer's choice is a CLIENT convention** — worth following for consistency, and worth
> departing from with a reason. 🛑 **THE FIRM'S OWN prior-year return is not that: it is the firm's
> position, set by the person who signs.** ⛔ **Departing from it silently is the firm contradicting itself
> on the same client's same activity in consecutive years** — not a tax difference *(a host fee on line 10
> or in `Other expenses` changes no total and no tax)*, but an unexplained year-over-year swing in a return
> the firm itself built, and a break in the reproduce-the-prior-year method that is the whole way this firm
> finds a client's conventions.
> 🔑 **BUT THE LABEL FOLLOWS THE CORRECTNESS, NOT WHO CHOSE IT — unless the prior line was WRONG, in
> which case it is a DEFECT: correct it, and record what changed, why, and who made the original call.**
> ⛔ **"The firm did it last year" is a reason to be consistent, never a reason to repeat an error** — that
> is CLAUDE.md's standing rule on a return coming back for review, and it governs here too.
> _(2026-09-07: the firm had prepared the prior year, and the session did not know it while putting the
> same expense on a different line.)_

| Line | ⌨️ / ƒ | Concept | Value | **Where it came from** | 🛠️ **Where it is ENTERED** |
|---|---|---|---|---|---|
| **7** | **⌨️** | Inventory at end of year | **150,000** | 📖 Balance sheet → `Total for Other Current Assets` = `Inventory` **+ the clearing account** | ✅ typed on the form |
| **8** | **ƒ** | Cost of goods sold | **20,000** | ƒ **= line 6 − line 7** → page 1 line 2 | **computed — do not type** |

**⌨️ typed: 7 · ƒ computed: 8** — the closing two lists, even on a table this small.

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

1. **Find out WHY it differs, and say so in cause terms** — *"the software split the meals 2,441 / 2,440
   so the halves add back to the gross; ours had 2,441 twice, which exceeds it"* *(invented figures)* — ⛔ **never
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


**1f · 🛑 A FORM WHOSE ANSWER IS *SETTLED* STILL GETS ITS TABLE. The conclusion is not the delivery.**

🔑 **This is the failure mode of part 1, and it does not look like a failure while you are writing it.**
When the hard work on a form was the *reasoning* — a basis that had to be argued to zero, a disclosure
that had to be justified — the section fills up with the argument, the argument is genuinely good, and
**the table never gets written.** The section reads as finished because the *question* is finished.
⛔ **But she is not reading the argument at the keyboard. She is reading the table.**

> 🔑 **Lilian, 2026-09-22, on a worksheet whose Form 7203 section was three prose banners and no table:**
> *"siempre habíamos hablado de que tenías que ponerme las tablas con las columnas, con todas las
> explicaciones, las fórmulas, de dónde salía cada número, etcétera. En este último trabajo que me
> hiciste no incluiste nada de eso."*

**The tell, and it is checkable in one pass before delivering: every form named anywhere in the
delivery has a table with the standard columns.** A form that appears only in prose — however
completely the prose explains it — **has not been delivered.**

🔑 **And a settled answer needs MORE rows, not fewer, for three reasons:**
- **A settled zero and a careless zero look identical in the software.** The table is the only place
  the reasoning sits beside the field, and it is what a later preparer reads instead of re-deriving it.
- **"Settled" usually means settled for ONE line.** Form 7203's opening line being zero says nothing
  about items C, D and E in its header, about which of Parts II and III go blank and why, or about
  which lines the form's own **skip instruction** closes — **and writing the rows turned up a header box
  that must be ticked and had never been asked about.** ⓘ *Small on its own; the point is that it was
  invisible until the table existed.*
- ⛔ **A form is never all conclusion.** Even where every figure is zero, the rows carry *which* lines
  are typed, which are computed, which are blank because the client has nothing, and which are blank
  because the form said to skip them. **Those are four different kinds of empty and only a table
  separates them.**

⚠️ **The same applies to a pure DISCLOSURE form** — Form 8082, Form 8275, a statement-only attachment.
**It carries no tax figure, so it invites a paste block and nothing else.** ⛔ **Wrong:** it still has a
box to tick on line 1 that routes the whole form, an entity-type box, columns whose contents are
dictated word for word by the instructions *(on Form 8082: column (c) is **zero**, not blank, **when no
schedule was received**; both boxes in column (b) get ticked **on that same fact pattern** — ⚠️ a
shareholder who DID receive a K-1 and disputes only the treatment ticks **Treatment of item** alone, and is
then excused columns (d) and (e); the explanation is prefixed with the Part II item number)* — and **a block of items that must be deliberately left blank because they belong to the
box you did not tick.** **Every one of those is a row.**

**1g · 🛑 SEPARATE WHAT IS TYPED FROM WHAT IS READ — and default the reading to COLLAPSED.**

🔑 **Every rule above adds material to the delivery, and none of them says where it goes.** Follow them
all on a real return and the page grows past the point where the **forms are findable** — the tables are
correct, complete and buried between them.

> 🔑 **Lilian, 2026-09-22, on a worksheet that had passed three independent reviews:** *"a veces, con
> tanto texto y tantas explicaciones intermedias, **se pierden los formularios**. Quiero que esté
> estructurado de otra manera para que me sea más fácil introducirlo, para entender **qué formas tengo
> que introducir, qué números tengo que introducir en cada forma**."*

⚠️ **This is not a request to write less.** She asked for the same content in a shape she can key from —
and the parts she called "intermediate explanations" are the parts earlier rules were added to produce.
⛔ **So do not resolve it by cutting; resolve it by SORTING.**

**Three moves, and they cost nothing analytically:**

1. ✅ **OPEN WITH A FORM INDEX.** One row per form, in preparation order: **the form's name in the
   software · what has to be typed in it · a status · where the detail is.** 🔑 **It answers "which
   forms am I filing?" before any figure appears**, and it is the only place that says **how many of
   them need a human at all** *(on the worked return: nine forms, four with anything to type)*.
   ⓘ *Name what is deliberately NOT filed too — that question costs a preparer a search.*
2. ✅ **IN EVERY FORM'S BLOCK, THE TABLE COMES FIRST.** **Two things may precede it and nothing else
   may:** the **entry route**, and ✅ **part 1's required first-line statement for a computed form**
   *(which is itself an entry-route fact — "this form is an output; the figures are typed on X")*. ⛔ **A caveat, a correction and a worked example all belong AFTER the rows they qualify.**
3. 🔑 **COLLAPSE THE PROSE.** On a page, every banner-sized explanation becomes a **closed
   `<details>` whose summary is its own heading**, so it reads as one line until she wants it — with an
   **expand-all / collapse-all** control at the top.
   ⛔ **ONE CARVE-OUT, and it is not optional:** anything **part 11 requires to be VISIBLE stays open** —
   above all the notice naming **which rows are held back and where their values are.** 🔑 **Part 11's
   own words are that "a worksheet that is silently incomplete is worse than one that is visibly
   incomplete", and a held-back notice collapsed by default is silently incomplete by construction.** ⛔ **Collapsing deletes nothing and moves nothing
   between sections**, so it creates no second home for a figure — ⚠️ **that guarantee belongs to THIS
   move, not to the split below**, which does relocate whole sections *(and must therefore move them
   entire, never copy a table out of one)*. ⓘ *In CHAT, the same
   move is ordering plus a one-line "why" that points at the working paper.*

🗂️ **AND SPLIT THE PAGE IN TWO, VISIBLY: *to type* and *to understand*.** The analysis sections —
exposure, characterisation, the reasoning behind a settled figure — go **after** every keying block,
under their own heading. **She works the first half at the keyboard and reads the second half when
something surprises her.** ⚠️ **AND RULE 13'S CHECKBOX LISTS SPLIT — they do not move as one block, and an earlier version of
this bullet said they did.** 🔑 **A single list strands half of itself wherever you put it:**

| The rows that say… | Where they go | Why |
|---|---|---|
| **DO THIS AT THE KEYBOARD** — open the form, type the figure, verify the column | ✅ **With the keying half** — ideally **inside each form's own block**, which is rule 13 ⑤'s first grouping *("this form, then that form, then the state return")* | They act on the table **beside them** |
| **DECIDE THIS** *(the signer's open choices)* and **ASK THE CLIENT THIS** | ✅ **At the END, after the analysis** | ⛔ **Every one of them is explained by a section in the "to understand" half.** A row saying *"put the line-6 variant to the signer"* with its reasoning two screens **below** is this rule's own failure running backwards |

⛔ **So "the lists go first" is wrong and "the lists go last" is wrong.** ✅ **The key-it rows close the
keying half; the decide and ask rows close the page.** 🔑 **That satisfies both of rule 13 ⑤'s
groupings at once.**
ⓘ *If a page reorders an existing list, check the tick storage keys on a **stable per-row id**, not on
position — a positional key remaps saved ticks onto different rows, and a restored tick then reads as
"done" on something that was never done. **Rule 13 already says a tick is never evidence, so nothing
about the RETURN is at risk — but it misleads her at the keyboard, silently.** A test that only proves
persistence WORKS does not catch persistence landing in the WRONG PLACE.*

🛑 **THE TELL, and it is checkable before delivering.** 📄 **On a page:** *open it and count how far
you scroll before the first line-by-line table.* 💬 **In chat:** *the first thing after the form index
is a TABLE, not a paragraph* — and each form's block opens with its rows. ⛔ **If an explanation gets
there first in either container, the delivery is sorted wrong** — however good the explanation is.

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

**So every line table carries a column for it**, and the working paper keeps it. 🔑 **This is the canonical
template, and it carries item 1's `⌨️ / ƒ` column** — the two are the same table, not two tables:

| Line | ⌨️ / ƒ | Concept | Value | Where it came from | 🛠️ **Where it is ENTERED** |
|---|---|---|---|---|---|
| … | *(`⌨️` typed · `ƒ` computed · **neither**, where the form gives a line no arithmetic at all)* | … | … | *(the IRS source — form, line, or the books)* | *(the actual screen and field, or **"computed — do not type"**)* |

⚠️ **The `⌨️ / ƒ` column and the `Where it is ENTERED` column are not the same thing.** The first says
**whether** you type it; the second says **where**. **A line can be typed on the form and still closed in
the software** because the figure arrives from another screen — that is the split item 1 requires you to
give both halves of.

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

**Four rules for that last column:**

1. ⚠️ **Mark it as the SOFTWARE's, not the IRS's.** A screen name is a vendor fact and next year's
   version may move it. **The source line is the tax fact; the entry route is a convenience** —
   never present one as the other _(delivery rule 9)_.
2. ✅ **Say "computed — do not type" explicitly** where that is the answer. A blank in this column
   reads as *unknown*, and a preparer will hunt for a field that does not exist.
3. 🔑 **Name the FEEDER form and box, not just the screen.** *"K-1 input, box 16 code D"* survives a
   software update; *"the third field on the second tab"* does not.
4. 🔴 **MARK THE ROUTE AS ESTABLISHED OR NOT — and ⛔ NEVER present a guessed click path as a fact.**
   ✅ Established: **name the program, the version and the date somebody saw it** *("ATX 2025, seen
   2026-08-24")*. ⚠️ Not established: **say so, and say HOW TO ESTABLISH IT** — open the form, try the
   field, and report back what the screen was called. 🔑 ***"I don't know this screen, here is how to
   find it"* is a usable answer; an invented one costs more than silence**, because it is followed
   confidently and fails in a way that looks like the software's fault. ⓘ *And when she reports the real
   screen back, write it into the SOP so the next session does not guess either.*

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

**8c · 🗺️ EVERY KEYBOARD ADDRESS HAS FOUR LEVELS, AND THE LAST ONE IS THE TEXT PRINTED ON HER SCREEN.**

_(**Lilian, 2026-09-09**, after a delivery she could not use at all: **"No sé de qué fila hablas, no sé
de qué forma, qué página. No entiendo nada… La forma en que me pones las tablas me deja desorientada
porque no sé qué página tengo que ir, de qué línea hablas."**)_

🔴 **The defect was not detail — the delivery had every figure, its arithmetic and its IRS line. It was
that every address was written in the IRS FORM's geography** — *"Schedule K-1, Part III, box 1"* —
**while she was looking at a data-entry screen that prints no `Part III` anywhere, numbers the boxes
1–19 straight down, and calls box 1 `Ordinary income (loss)` where the IRS calls it `Ordinary BUSINESS
income (loss)`.** ⛔ **A correct IRS address is not an address in the software.**

| Level | What it is | ⛔ Not this | ✅ This |
|---|---|---|---|
| ① **FORM** | the name in the program's **forms list**, where she clicks to open the screen | *"the K-1"* | `K1 Input (1120S)` |
| ② **TAB** | the tab inside that form | *(omitted)* | `K-1 Detail Schedule` |
| ③ **SECTION** | the **titled block** inside the tab, reached by scrolling | *"Part III"* | `Basis Limitation` · `Shareholder's share of current year income, deductions, credits` |
| ④ **ROW** | the **literal printed label**, quoted, in **English**, exactly as it appears | *"box 1"* | `Ordinary income (loss)` |

**Four rules that follow:**

1. 🔑 **QUOTE THE ROW LABEL, IN ENGLISH, EXACTLY.** She finds a row by reading the screen, so the label
   must be searchable **by eye**. ⚠️ **Where the software's wording differs from the IRS's, give BOTH and
   say which is which** — the mismatch is itself the thing that loses her.
2. ⚖️ **AN IRS ADDRESS IS STILL RIGHT — FOR READING.** A K-1 that arrived on paper is read in Part/box
   terms. 🛑 **The defect is never labelling which mode a section is in.** ✅ **Say it at the top of the
   section**: *"this is for READING the K-1 you were handed; to TYPE it, go to <the other section>."*
3. 🟢 **THE SOFTWARE OFTEN PRINTS THE DESTINATION ITSELF — USE IT AND SAY SO.** ATX prints each row's
   destination beside it *(`Sch. E, Part II, Ln 28` · `Form 4562` · `Sch D, Ln 5` · `Form 8582`)*.
   🔑 **That column outranks any table this firm writes, because she can read it while typing.** ⛔ **Where
   a delivery disagrees with the screen, the screen wins** — say that in the delivery, so she is not left
   deciding whether to trust us or her eyes.
4. ⛔ **A LEVEL YOU HAVE NOT SEEN IS NAMED AS UNSEEN, NEVER FILLED IN.** ✅ *"the section is called
   `Basis Limitation` — the sheet's own header says so — but **I have not seen inside it**, so send me a
   screenshot and I will name the field"* **is a usable answer.** 🛑 **An invented field label sends her
   hunting for something that may not exist, and she cannot tell that from her own incompetence.**
   ⓘ *This is item 8's rule 4 applied one level deeper: established/not-established is per LEVEL, not per
   route.*

**8d · ✅ ESTABLISHED ATX ROUTE — the NOL deduction on a Form 1040: where it is TYPED, and where its cap is READ.**

> ✅ **ESTABLISHED: ATX 2025, shown by Lilian on a live return, 2026-10-02 (two screenshots).** 🔑 *It
> replaces a click path an earlier session wrote down without having seen it — that session told the
> preparer to "set the amount on the NOL carryover worksheet", and the worksheet does not take it.*
> ⛔ **No client figure belongs in this item — the worked figures are in that return's working paper.**

**Two screens, two jobs. The deduction is TYPED on the first; the base for the cap is READ on the second.**

| | Screen | What you do there |
|---|---|---|
| **① TYPE** | Forms list → `1040` → bottom tab `Ln 8, Sch 1 - Other Inc` *(the screen is titled `Line 8, Sch 1 (1040) - Other Income`)* → row **`8a  Net operating loss carryover (NOL) (enter as a negative)`**, column **`Filer`** | **Type the ALLOWABLE deduction as a NEGATIVE number.** 🛑 **This item covers a year with POSITIVE taxable income, where the 80% cap governs. In a LOSS year the cap computes to nil and the convention is different — follow [`form-1040-preparation.md`](../../../projects/sops/form-1040-preparation.md) M7 (the §172 tie-break and Form 172 line 23), not step 2 below.** The `Total` column repeats it. 🔑 **It is a plain typed field — ATX did not compute it or re-cap it on the live return.** ⚠️ The `Spouse` column sits on the same row; **which column carries a spouse's NOL has not been tested** — use the column of the person whose NOL it is and read the screen back |
| **② READ** | Forms list → **`NOL Wkst, 172`** → bottom tab **`CY Tax Inc - NOL`** *(`Current Year Taxable Income - NOL (NOL Worksheet, 172)`)* | **Line 2, `Taxable income without the NOL`, is the base.** The cap is **80% × line 2** *(whole dollars is the return's convention, not something the screen showed)*. ✅ **Line 2 excludes the NOL by definition, so it is the same whatever 8a currently holds — read it, do not wait for 8a to be right** |

**The order, and it is short:**
1. **Read line 2** on `CY Tax Inc - NOL`. *(It is AGI before the NOL less the deductions that apply — on the live return the standard deduction only, with no QBI deduction — so recompute it by hand off the printed forms; if the two disagree, an input is wrong, not the cap.)*
2. **Type −(80% × line 2)** in 8a, **or less** if the carryforward available is smaller — **the deduction is the LESSER of the two**.
3. **Re-read the worksheet:** line 1 should now show the deduction — and **check by hand that it is not above 80% × line 2**, because the screen will not.
4. **Read 8a again after ANY change to the Schedule C, the SE tax or the standard deduction** — each moves line 2, and 8a does not follow.

🔴 **WHAT ATX DOES NOT DO, SEEN ON THE SCREEN:** on the live return **8a held MORE than 80% of line 2 and neither screen showed any message** — the worksheet's line 1 simply carried the typed figure, and line 9 read zero. ⛔ **So a quiet NOL screen is not evidence that the cap was applied.** The only check is the arithmetic above, run by hand.

⚠️ **TWO LINES ON THE WORKSHEET THAT LOOK LIKE ANSWERS AND ARE NOT:**
- **Line 1** (`NOL deduction from Form 1040 or 1040NR (enter as a positive number)`) **showed the same figure as 8a** *(equal values observed; the direction of the link was not tested)*. ⛔ **Do not type the deduction there as the way of changing it** *(a green arrow icon sits beside it; its behaviour was not tested)*.
- **Line 9, `NOL carryover to 2026`, is line 1 − line 8, floored at zero.** 🔑 **By its own formula that is the part of THIS YEAR'S DEDUCTION that exceeds modified taxable income — it reads 0 whenever the deduction is within the cap — so it cannot be the remaining balance of the carryforward going into next year; confirm on `NOL Summary`.** ⛔ **Never copy it into the next year's opening NOL.** *(Where ATX shows the remaining carryforward is **not established**: the same bottom strip has a `NOL Summary` tab that was **not opened** — open it and write what it says here.)*

🔴 **THE ATTACHED STATEMENT IS A SEPARATE THING AND DOES NOT FOLLOW 8a.** `NOL Carryover Explanation (1040)` **did not reprint** when 8a was corrected on the live return — it kept reciting the earlier figures. ⚠️ **Where its text lives in ATX is NOT ESTABLISHED:** the bottom strip of the `Line 8` screen continues to the right past `Ln 8, Sch 1 - Other Inc` with a tab that begins **`NOL -`** *(its name was cut off in the screenshot)* — **the likeliest home; scroll the strip and open it, then write the full name here.** Until then the statement is checked on the **printed** return, never on the screen.

🛑 **The checks that belong with it:** the printed return's **page-1 `Schedule 1` 8a**, **Form 172 line 23** *(the instructions ask for the deduction claimed there; ATX may print the whole carryforward — confirm and note it)* and **the attached statement** must all state the **same** deduction.

**8c-bis · 🔴 AN ENTITY-LEVEL ADJUSTMENT IS SUBTRACTED BEFORE THE OWNERSHIP SPLIT, NEVER AFTER — and the tell is a figure that comes out as an exact fraction of it.**

_(**Lilian, 2026-09-10**, overruling two days of work on a live return: **"TE COMENTÉ QUE ÍBAMOS A TOMAR
0 APORTACIONES Y CERO DISTRIBUCIONES PARA AMBOS SHAREHOLDERS."**)_

🔑 **The shape, which is not specific to this client.** A pooled equity account carries both owners. A
journal entry adjusts **the account**. The K-1s carry **each owner's share**. ✅ **The order is: adjust the
account, THEN split it.** ⛔ **A session took one owner's HALF of the pre-entry balance and subtracted the
WHOLE entry from it**, on the correct-but-irrelevant ground that the entry was that owner's compensation.
🛑 **That gave him a basis addition of half the entry that the books do not support, and gave the other
shareholder a capital gain that does not exist.** **It reached a delivery the preparer was working from.**

**Three rules, and the third is the cheap one:**

1. ⚖️ **"Whose is it?" and "which account was adjusted?" are different questions.** A decision that an
   item belongs to one owner routes it to **that owner's form** — a Schedule C, a Statement A line. ⛔ **It
   does not re-cut a pooled equity account between them** unless someone decides that separately, and that
   is a second decision with its own consequences for both K-1s.
2. 🔑 **Say which LEVEL every figure lives at, in the table.** *Entity*, or *per shareholder*. **A column of
   numbers with both in it and no label is where this error lives**, and it survives every arithmetic check
   because each individual subtraction is correct.
3. 🚩 **AN OUTPUT THAT IS AN EXACT FRACTION OF AN INPUT IS A SYMPTOM, NOT AN ELEGANT RESULT.** The wrong
   figure came out as **exactly half the journal entry**. The session noticed, verified the algebra, and
   **wrote it up as a memorable identity to help the preparer.** ⛔ **The identity was the bug reporting
   itself.** ✅ **When a per-shareholder figure lands on a clean fraction of an entity-level one, stop and
   ask why** — the usual answer is that a whole was subtracted from a half.
4. ⚖️ **AND NEITHER ANSWER MAY BE PRESENTED AS DERIVED WHILE THE SPLIT ITSELF IS UNESTABLISHED.** Correcting
   the order does not make the halves facts. Where the owners share one pooled account, **who put in what is
   recorded nowhere**, and a working 50/50 assumption is exactly that. ✅ **Separate the two claims in the
   delivery:** the REPORTING position, which usually survives any split because the entity totals are what
   net; and every PER-OWNER figure, which rides on the assumption and moves if the signer settles it
   differently. ⛔ **A correction that says "this is the arithmetic" about an assumed split has repeated the
   error it is correcting, one level up.**

⚠️ **AND THE REAL LESSON IS NARROWER THAN "READ THE MASTHEAD" — a first version of this item said that,
and its own example disproves it.** ⛔ **Both statements were in the masthead.** The company's working
paper said the right thing there — *"the 2025 movement is … EXACTLY EQUAL, so netting gives zero on both
sides"* — and the speculation that was built on instead was **also in the masthead**, in an earlier pass's
banner, **flagged in its own paragraph as one of "THREE THINGS IT DOES NOT SETTLE."**
🔑 **So the rule is not about WHERE a sentence sits. It is: A PARAGRAPH THAT SAYS IT IS UNSETTLED IS NOT A
SOURCE** — and a layered paper stacks passes, so **two banners can contradict each other and the later one
governs.** ✅ **Check the pass date and the hedging words, not the position on the page.**
⛔ **And when you add a new pass banner, strike what it overturns in the OLDER banners too** — otherwise
the masthead contradicts itself and the next reader picks whichever they hit first.

**8d · 🛑 A CLAIM ABOUT A SCREEN MUST COME FROM A SCREEN — an inference about software is not a finding.**

🔴 **The 1040 SOP carried, for weeks, that "in ATX only lines 1 and 13 of Form 7203 are typed."** Nobody
had seen it. It was **inferred** from the true fact that the form is mostly computed. ⛔ **In ATX 2025 the
form takes NO Part I entry at all** — it prints its own banner, `Basis information is entered on K1 Input
(1120S)` — **so the instruction sent a preparer hunting for a keyboard inside a form that has none, and
she reported the software was refusing her.** 🔑 **The cost is not the wrong line numbers: it is that a
confident vendor claim is followed, fails, and reads as the preparer's fault.**

✅ **THE EXAMPLE IS RESOLVED — THE RULE IS NOT.** *(Banner scoped 2026-09-22: what follows retires the
worked case, not the item.)* Lilian, who is the one at the keyboard, **told the firm how ATX behaves** —
*"todos los referentes 7203 se entran en el K1 input y luego fluyen al 7203"*, distributions included, via
the **box 16D** field. 🔑 **That is an observation from the person using the program, which is exactly the
source this item asks for**, and it is recorded in part 1 as the established route for **Part I**.
⚠️ **AND IT IMMEDIATELY DEMONSTRATED THE RULE AGAIN:** the first write-up widened her sentence to *"the
7203 takes nothing"*, which is false — items A–E and Part II's lines 16–20 are typed on the form.
🔑 **A sourced observation is still only worth what it actually covers.**

✅ **So:** a statement about what a program does is written **only** from an observation — a screenshot, a
generated PDF, the vendor's own published page, **or the preparer telling you what is on her screen** — it
**names the source and the date**, and ⛔ **it is scoped to what was actually said or seen.** **The
preparer's word is the weakest of the four and the easiest to over-read**, because it arrives as prose
rather than as a screen. ⚠️ **A tax fact
may be reasoned; a screen fact may not.** ⛔ **And "it must work like this because the form is computed"
is reasoning.**

🟢 **The generated return is itself an observation, and an underused one.** A value the software printed
**without anybody typing it** proves that the line is **not typed** — read the draft return as evidence
about the SOFTWARE, not only about the tax.
🛑 **AND THIS ITEM'S OWN WORKED EXAMPLE WAS OVER-READ ON THE DAY IT WAS WRITTEN, WHICH IS WHY IT IS KEPT
HERE.** The first version said: *a Form 7203 line 6 printing `0` that nobody typed **establishes that the
line comes from K-1 box 16D**.* ⛔ **It establishes no such thing** — a line left blank and defaulted prints
`0` identically. ✅ **What it establishes is the weaker, sufficient fact: the line is not typed.**
🔑 **So state the weakest claim the observation supports, then check whether the DECISION survives it.**
Here it did — line 6 shows `0` and cannot be typed, so the contributions line must carry the net whichever
way the wiring goes — **and a decision that survives the weakest reading needs no stronger one.** ⚠️ **A
decision that needs the stronger reading is a decision that is not yet established.**

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


**11 · 🔴 THE CONTAINER DOES NOT CHANGE THE STANDARD — AN ARTIFACT CARRIES *MORE* THAN THE CHAT, NEVER LESS.**

🔑 **From 2026-09-06, Lilian asks for return analyses AS ARTIFACTS** — *"todos los análisis de esos
tax returns te lo voy a pedir en forma de artefacto, porque me es mucho más fácil utilizar esto para
llenar las tablas en ATX."* **She is typing into the software from the page.** ⛔ **So the page is a
WORKSHEET, not a summary.**

> ### ⛔ SCOPE — TWO LIMITS, and a session may not widen either
>
> 🔑 **A session may not WIDEN these. Lilian or Julia can** — and each changes in **its own home**, never
> here. ✅ **A session MAY hold a narrower line while a question is open** *(`double-mcp` §2.2 point 2 does
> exactly that)*, which is what the second limit is.
>
> **① 🔴 PHASE 1's REVIEW OUTPUT IS NEVER AN ARTIFACT.** [`organizer-review`](../organizer-review/)
> **§0 rule 4** bars it, and that ban is load-bearing for the delete-the-session control. 🔑 **The
> discriminator is not "it survives the conversation"** — a PDF does too — ⛔ **it is that a URL TRAVELS
> ONWARD with no further act by the firm.**
> ✅ **The sanctioned container for the review is a PDF**, on **§0 rule 4's own conditions** *(read them;
> the one most easily broken here is that it is written to the session scratchpad and **never to a path
> `git add` can reach**)*.
> ⚠️ **And in a TWO-PHASE run the PDF is DEFERRED:** `organizer-review` **§5 step 4** — **one PDF at the
> END covering the review AND the tables**, because *"two PDFs for one job is how a discipline gets
> skipped"*. 🔑 **The artifact is IN ADDITION to that PDF, never instead of its second half**, and ⛔
> nobody is told to delete the conversation mid-return. ⚠️ **So when §4A sends both phases in one reply:
> the review goes in the CHAT, the tables go on the PAGE.**
>
> **② 🔴 AN ORGANIZER-SOURCED VALUE DOES NOT GO ON THE PAGE — interim, until Lilian rules.**
> `double-mcp` **§2.2 point 1** bars organizer data from an artifact without narrowing itself to
> identifiers the way point 2 does, and phase 2 reads the organizer as a required source. ⛔ **A session
> may not decide which reading is right.** 📌 **The question, with BOTH readings and the evidence for
> each, is [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 87** — and the answer, when it comes, goes into
> `double-mcp` §2.2 point 1, not here.
>
> 🔑 **"Organizer-sourced" means: read from `get_organizer_responses`, OR from a completed organizer
> held as a TaxDome-era file** *(§4A's checklist — older clients' organizers are PDFs in
> `TaxDome/[Client]/1. Completed Tax organizers/`, and a limit keyed only on the MCP call would switch
> itself off for exactly those clients)* — **and NOT independently established** from a document that is
> not itself an organizer, from the books, or from the prior-year return. ✅ **Where it IS independently
> established, cite THAT source and the value goes on the page.**
>
> 🔴 **AND THE VALUE MUST HAVE A DURABLE HOME — this is a requirement, not a cross-reference.**
> ⛔ **"Keep it in the chat" alone is WRONG**: the chat is what she is told to delete at the end of the
> job, so the limit would destroy the very figures she has to type. ✅ **The values go in the chat AND in
> a PDF handed over at the end of the return** — when phase 1 ran, that is `organizer-review` §5 step 4's
> single PDF; ⚠️ **when phase 1 was SKIPPED on her instruction** *("salta la Revisión")*, **produce the
> same PDF for the tables alone**, on §0 rule 4's conditions. 🛠️ **And SAY ON THE PAGE which rows are
> held back and where their values are** — ⚠️ **a worksheet that is silently incomplete is worse than one
> that is visibly incomplete**, and this is the one place item 11's *"never less than the chat"* is
> suspended.
>
> ✅ **Unaffected: the BOOKS, the prior-year return** *(⚠️ `double-mcp` document limit 7 bars the REDACTED
> TEXT from an artifact, **not a figure reported as a finding** — which is why every working paper may carry
> prior-year figures at all.* 🔑 **And a client FIGURE on a hosted page is permitted by two WRITTEN rules,
> not by this reading:** Lilian's 2026-09-06 instruction that *"todos los análisis de esos tax returns te lo
> voy a pedir en forma de artefacto"*, and the standing [`bookkeeping-kpis`](../bookkeeping-kpis/) rule that
> **a real client's figures ship as an artifact, never in the repo.** ⛔ **What is NOT written anywhere is
> whether the redacted TEXT could go on a page — and nothing needs it to, so the question stays unopened
> rather than answered by a session.**), **a platform, the working paper** — which is most of an
> entity return *(an entity return has no organizer at all)*, and was all of the first artifact — ⓘ *which was a **1040**, and clean for a different reason: that client's organizer had been discarded.*

🛑 **THE FAILURE THIS EXISTS TO STOP, and it is the one that actually happened:** the first artifact
looked better than the chat and **carried less.** The *"where does this go"* and the *"where does this
come from"* — items **8** and the whole *where each number comes from* spine — **were in the chat and
silently dropped when the delivery moved to a page.** Her words: *"no me queda claro aquí qué línea, qué
celda es la que tengo que llenar, qué forma… no me queda claro la página, que eso antes me lo ponías en
el chat y, en el artefacto, no lo veo."*

**So every figure carries FOUR things — in every delivery, on the page or in the chat — and a figure missing any of them is not delivered:**

| | | |
|---|---|---|
| **①** | 📍 **WHERE IT GOES** | the **form**, the **page**, the **part** and the **line** — all four, named, not "on the Schedule C" |
| **②** | 🧮 **HOW IT WAS CALCULATED** | ⛔ **not the source, the ARITHMETIC.** The operands, the rate, the result — *"24,000 × 20% × 75% = 3,600"* **(invented, like every figure in this skill)** — so she can re-derive it without asking. **A figure with a source and no formula is half-delivered** |
| **③** | 🛠️ **WHERE IT IS TYPED** | the entry route, to the precision item **8b** demands, **marked established or not per item 8 rule 4** — ⛔ **which is where that rule lives; do not restate it here, or the two copies drift** |
| **④** | 🗣️ **WHAT IT DEPENDS ON** | the assumption underneath it, where one exists, so a changed answer visibly moves the figure |

> ### 🔴 AND WHEN A FIGURE MOVES, ② IS THE THING THAT ROTS — re-derive it, never eyeball it
>
> 🛑 **A working paper gets REBASED — a client answers, a rate is corrected, a base changes — and the
> sweep that moves the figures does not move the sentences around them.** ⚠️ **A find-and-replace
> catches every bare figure and misses every one of these:**
>
> | What survives a sweep | Why it survives |
> |---|---|
> | 🧮 **an arithmetic annotation** — *"A × 20% = B"* | **the product** is written out, and it is not the figure being replaced |
> | **a difference or a sum** — *"X − Y = Z"*, *"A and B, so C"* | **the operands moved; the result is typed** |
> | **a "worth N" claim** — *"the method is worth 624"*, *"it loses by 624"* | **N is a derived gap between two versions, and BOTH ends moved** |
> | **a distance** — *"they are 6,351 under the threshold"*, *"43 dollars from the edge"* | the threshold is fixed and the figure is not |
> | **a count or a list** — *"FOUR values", "TWO gates", "33 items, 28 open"* | **nothing numeric changed; the WORLD did** |
> | **a percentage of something** | the numerator moved |
>
> ✅ **THE RULE: after any rebase, every `🧮`, every "worth N", every "X is Y more than Z", and every
> count is RE-DERIVED from the new figures — not read and approved.** 🔑 **The cheap mechanical version
> is to grep the paper for each SUPERSEDED figure and for each DERIVED one, and to make the paper
> re-derive itself where it can** *(a line that shows its own operands is checkable; a line that states
> only its result is not)*.
> ⛔ **AND A SUPERSEDED FIGURE THAT IS DELIBERATELY KEPT AS HISTORY MUST SAY SO ON ITS OWN LINE** — a
> bare old number in a table reads as current.
> ⓘ **This rule exists because it has failed FOUR times on one return** *(Bogopolskyy 2025, 2026-09-10
> and 2026-09-11)*. **Every time, the paper already carried the correct rebased value somewhere else**,
> so each was internally checkable and none was caught by the session that made it. 🔑 **The tell is
> that the failures cluster in exactly the six shapes above — they are not random.**

⛔ **AND NEVER THE IDENTITY BLOCK ON THE PAGE** — by existence, never by value *(`double-mcp` §2.2)*. ⚠️ **A 1040's entry-route column reaches the taxpayer-information screen, so this is not hypothetical.** ⓘ *A business EIN is not in that block; an SSN used as an entity's tax ID is.*

🎨 **The page is built with [`impeccable`](../impeccable/) and the Design System**, like every other page the firm publishes — that is the standing rule, not a preference.

**12 · 🔴 THE LANGUAGE SPLIT: ANYTHING SHE WILL TYPE INTO THE RETURN IS IN ENGLISH — THE EXPLANATION AROUND IT IS IN HERS.**

⛔ **A field value written in Spanish is a defect, however correct it is**, because the delivery exists to
be **copied and pasted**. _(Lilian, 2026-09-06: **"si hay algún campo de texto que haya que escribir en
ATX, obviamente tiene que ser en inglés… lo que quiero hacer es copiar y pegar de las cosas que me das."**
The Schedule C principal-business description had been given in Spanish.)_

🔑 **The test is not "is this document in Spanish?" — it is "will this string be TYPED INTO THE
RETURN?"** If yes: **English, plain ASCII, exactly as it must appear**, and set apart visually so it is
obvious what to copy. If no — the reasoning, the warnings, the derivation — **the language of the person
asking**, per [CLAUDE.md](../../../CLAUDE.md).

ⓘ *This is the same rule the repo already runs for journal entries — the table is explained in Spanish
and the description that goes into the books stays in English. This extends it from the books to the
return.*

---

**13 · 🔴 A LIST OF CHANGES SHIPS AS CHECKBOXES — she is going to WORK THROUGH it, not read it.**

🔑 **Lilian asked for this on 2026-09-06, and the reason is the shape of the work, not a preference about
formatting:** *"quiero que guardes como una regla que, cuando haya cosas que tengo que cambiar — como
esta, que es una lista de cambios que tengo que hacer — añadas como un checkbox para que yo pueda ir
marcando las cosas que ya hice y ver lo que me va quedando pendiente por modificar."*

⛔ **A list of edits delivered as prose, or as a plain table, is not delivered.** She is at the keyboard in
the tax software, going down the list one item at a time, and what she needs to see is **what is LEFT** —
not to re-read the whole thing to find her place. 🛑 **Every time she loses her place, the risk is not
annoyance: it is a change that gets skipped and nothing catches.**

| | |
|---|---|
| **①** | ☐ **Everything she must DO gets a box** — a figure to key, a field to clear, a box to tick, a statement to attach, a question to ask the client, a decision to put to Julia. ⛔ **NOT items that are only information** — a box beside something un-doable is noise, and noise is what makes the column stop working |
| **②** | **The box is the FIRST thing on the row**, before the description, so a column of them reads as a column and the eye finds the unticked ones without reading |
| **③** | 🔑 **It has to be tickable WHERE SHE ACTUALLY IS.** In an artifact that means a real `<input type="checkbox">` that **remembers itself across a reload** — she closes the page, keys for an hour, comes back. In chat or Markdown, `- [ ]` |
| **④** | **A running count per group — *"3 de 11 hechos"*** — so progress is visible without counting |
| **⑤** | **Group by WHERE she is working** *(this form, then that form, then the state return; or: ask the client · decide · key it)* — **not by importance.** She is not going to jump between screens to follow a priority order |

⚠️ **THE TICKS ARE NOT A RECORD, and this is the limit that matters.** The state lives in **that
browser's `localStorage`** — per person, per device, invisible to everyone else and to us. ⛔ **Never
treat a ticked box as evidence that something was done**, and never build a later step on one. **The
durable record is the working paper in [`projects/tax-returns/`](../../../projects/tax-returns/)**, which
is where "this was keyed and verified" is written down.

📌 **The same shape serves the review side.** A §4C briefing that ends in *"here is what to change"*
is a list of changes like any other — it gets boxes too.

#### 🗣️ 23 · A CHAIN OF FIGURES IS NEVER DELIVERED AS A LIST — the derivation travels with them

> 🗣️ **LILIAN, 2026-09-30, the SECOND time she has said it:** *"Este es el tipo de cosas por las cuales yo
> digo que eres muy escueto en tus explicaciones. Me pones esto así, no entiendo de dónde salen estos
> números. ¿Por qué tengo que cambiarlo? ¿Cómo llegaste a esta cifra? No entiendo nada… te pido nuevamente
> que me hables como a una persona que no tiene conocimientos avanzados de accounting y taxes. Te comes
> demasiados pasos."*

🛑 **THE COMPLAINT IS NOT ABOUT LENGTH. It is about DELETED STEPS.** ⛔ **What set it off was a line of this
shape:**

> ⛔ ***"the five riders together: 17K 28,000 · M-2 3/6/7 28,000/10,849/10,849, line 8 ZERO · L23 (173,912) ·
> residual 112,743"***

**Every figure in it is right. It is still unusable, because it is a LIST OF ANSWERS with the reasoning
deleted** — 🔑 **and a person cannot CHECK an answer she cannot DERIVE.** ⚠️ **She is the last control before
the return is filed; a figure she cannot check is a figure nobody checks.**

✅ **SO, WHENEVER ONE CHANGE CAUSES OTHERS:**

| | |
|---|---|
| **1 · Name the ONE change** | **and say it is the only thing being typed — everything else is a consequence** |
| **2 · Number the steps** | **one figure per step, in the order they fall out** |
| **3 · Say what each field IS** | ⚠️ **one plain sentence before the number.** *"The M-2 is the running record of the company's accumulated taxable profit"* costs a line and saves the whole step |
| **4 · Mark TYPED or COMPUTED** | **on every step — *"this one ATX works out for you"* is half the instruction** |
| **5 · End with the CHECK** | **the identity that tells her it worked, and what it should read** |
| **6 · Flag the one that gets forgotten** | **and say what happens if it is missed — a figure that goes wrong SILENTLY needs its own warning** |

⛔ **BANNED SHAPES:** **a `·`-separated run of figures · a field addressed by number alone with no name ·
*"re-derive the equity section"* with the result but not the arithmetic · a term the firm invented
(*"the five riders"*, *"Model A"*) used before it is defined · an instruction whose first word is a
figure.**

🔑 **AND THE TEST, because "explain more" is not actionable:** ***could she reproduce this figure from what
is written, without asking?*** **If not, a step is missing.**

⚠️ **IT APPLIES TO THE CHAT, THE WORKBOOK AND THE WORKING PAPER ALIKE** — **the chat is where she reads it
first, and the workbook is where she reads it while typing.**

### 4C · 🔴 WHEN THE RETURN COMES BACK FOR **REVIEW** — brief the reviewer, do not audit her

⛔ 🆕 **DO NOT CONFUSE THIS WITH §4F.** 🔑 **§4C is the SIGNER bringing back a return the firm already prepared — brief her, never audit her. §4F is the PREPARER handing you her own keyed draft and asking to be checked before anybody signs — there you DO audit.** ⚠️ **Same document, opposite job, and the tell is WHO IS ASKING.**

🔄 **§4E first — this is the highest-stakes stale-paper risk in the skill.** The whole method below is
*read the working paper, then answer*, and the answer goes to **the person who signs**.

🛑 **A return this firm prepared will come back, and the person reviewing it was NOT in the room when
it was built.** 🔑 **This section is what a session does then, and it is not the same job as preparing.**

> **Lilian set it, 2026-09-06, and named the gap it closes:** *"yo trabajo contigo en los returns… pero
> luego no tengo un espacio para hablar con ella y explicarle todo lo que he hecho. Luego de eso, ella va
> a revisar mi trabajo junto contigo… ya que tú sabes todo el contexto, cuando ella te pida ayuda con
> estos impuestos que hemos preparado nosotros, puedas darle todas las herramientas y las explicaciones
> que necesita."*
>
> 📌 **The point in one line: the session was the only witness to the whole build. It owes the reviewer
> the reasoning, unprompted — so that the preparer does not have to narrate it from the beginning.**

#### ① Recognise it, and read before you answer

**The shape is unmistakable: someone brings a return this firm prepared and starts asking about it** —
the financial statements, **or** a copy of the return, **or** just a question about a line. ⚠️ **Any ONE of
those is the trigger; it does not wait for all three.** ⛔ **Do not start reading the PDF.**

🛠️ **Open the working paper for that return FIRST** — [`projects/tax-returns/`](../../../projects/tax-returns/),
one per return. **It holds the decisions, who made each one, what the alternative was, and where every
figure came from.** 🔑 **It was written for exactly this moment.** ⓘ *Also read the client's
[Client Intelligence](../../../projects/client-intelligence/) file — the two together are the whole record.*

⚠️ **If no working paper exists, say so plainly before answering.** Then the session is reasoning from
the PDF like anyone else, and the reviewer is entitled to know that.

> ### 🔒 The rules that ride along — because this trigger puts you in front of a CLIENT'S RETURN
>
> 🛑 **§4A states these for its own trigger and §4C is a NEW way to reach the same document, so they are
> restated here rather than left 800 lines away.**
>
> 1. 🔴 **The PDF is opened through [`tools/redact-doc/`](../../../tools/redact-doc/), never downloaded and
>    read directly.** It writes redacted text to a file and prints only counts, so the identity block cannot
>    reach the chat by accident. ⛔ **Never into the repo working tree, never committed.**
> 2. **Say WHICH document, WHICH year and WHY before the call** — the same obligation §4A carries.
> 3. ⛔ **NEVER from a subagent. NEVER from a scheduled or unattended session.** Both bans are absolute in
>    every version of this rule.
> 4. **Remind them to delete the session when the work is done** — calmly, as the routine last step.
>
> 🔑 **AND ONE THING IS NOT WRITTEN ANYWHERE, SO IT IS ASKED, NOT REASONED.** Lilian's 2026-08-20 extension
> named **preparing** a return; her 2026-09-04 widening made **the ask itself the permission** when she or
> Julia asks. ⚠️ **Neither says in terms that *"review this return with me"* opens the prior-year document
> the way *"prepare it"* does** — ⓘ *the 2026-09-04 wording is broad enough that it very probably does, since
> the reviewer asking IS Julia.* ⛔ **But [CLAUDE.md](../../../CLAUDE.md)'s standing rule is that a permission
> is widened by ASKING, never by reasoning, and that a session may never decide it has been asked.** 🛠️ **So
> put the question the first time it arises and write the answer in here.** ✅ **What needs no permission at
> all, and is the whole point of §4C: the WORKING PAPER.** It is repo content — read it first, and most
> briefings never need the PDF.

🔑 **AND §3 STILL BINDS HERE.** The working paper says what *was* decided; it is not authority for
what is *correct*. ⛔ **Any answer that would change a figure or move a line is read off the IRS PDF for THAT RETURN'S
tax year**, never from the paper and never from memory. ⚠️ **The invariant is the RETURN'S year, not
"the current form" and not "irs-prior"** — for an older year it is `irs.gov/pub/irs-prior/f<form>--<year>.pdf`,
and note the just-closed year is usually served by **both** that and `irs-pdf/`. 🔑 **A return under review
is often a prior year, which makes this the §3 trap in its most likely shape:** the IRS renumbers, and
answering off this year's form about last year's return is how it bites.

⛔ **The return PDF carries the identity block, and TWO SEPARATE RULES govern what leaves it.**

1. ⛔ **The identity block never gets restated — ANYWHERE, chat and repo alike.** An **SSN or ITIN**
   *(including an entity's tax ID when it is one)* · a **bank, card, routing or account number** · a
   **home street address** · a **date of birth** · a **login, password, PTIN, EFIN or signature PIN**.
   Name one **by existence if at all** — *"the spouse's SSN is missing"*, never the digits.
   ✅ **A business EIN is NOT in this block** and is written out, hyphenated — it is public on Sunbiz.
   ⛔ **An SSN or ITIN used as an entity's tax ID still is.**
   🛑 **This limit does NOT stop at the repo boundary, and `projects/tax-returns/` is not an exception to
   it** — that folder's [README](../../../projects/tax-returns/README.md) is the authority and its table
   reads *"NEVER — no exception, and no 'just this once'."*
2. ✅ **FIGURES are the opposite case: the briefing exists to restate them**, in the chat, in whatever
   detail she needs. 🔑 **In the repo they stay inside THAT RETURN'S OWN FOLDER under
   [`projects/tax-returns/`](../../../projects/tax-returns/)** — the working paper, **and a briefing
   rendered from it.** ⛔ **Never into a skill, an SOP, a client-intelligence file or `CLAUDE.md`.**
   📄 **A rendered briefing is not hypothetical — it is what this firm already does, and the worked
   precedent is `gossip-miami-llc/2025-briefing-open-items.html` / `.pdf`** — 🔑 **the FORMAT; that briefing is itself marked SUPERSEDED and must not be acted on** *(2026-08-27: nine open items
   ordered by what blocks filing, on the Atlas template, produced for Julia — and Lilian caught that one
   item was in the working paper and missing from the first draft)*. **So when she asks for the briefing
   as something she can read or print, the answer is yes**, beside the paper it came from — 🔴 **headed
   `Internal briefing · client-confidential`, as the Gossip one is**, and built with
   [`impeccable`](../impeccable/) and the Design System. ⛔ **And the identity check runs on the RENDERED
   file, not only on its source.**
   📄 **A published page is a different thing from that file:** for **phase 2's preparation tables**,
   item **11** settles it — Lilian asked for them as artifacts on 2026-09-06 and that is the default.
   ⛔ **For anything else a return's figures might be published on — phase 1's review, a page for someone
   outside the firm, a link that leaves it — ask, do not reason.**

#### ② 🛑 LEAD WITH THE REASON, NOT THE FINDING

⛔ **"Line 12 carries 4,300"** *(invented, like every figure in this skill)* **is useless to a reviewer.** ⛔ **"Line 7 looks wrong"** is worse — it invites
her to re-decide something that was already decided, by her.

✅ **The shape that works, every time:**

| | |
|---|---|
| **What is on the line** | the figure, and where it prints |
| **Why it is that figure** | 🔑 **the DECISION, WHO made it, WHEN, and in their own words where they exist** |
| **What the alternative was** | ⚖️ what was not done, and what it would have cost |
| **Where the number came from** | 📖 the account, the statement, the document — **the "¿de dónde salen los números?" column, which is not optional** |
| **What it still depends on** | ⚠️ the assumption underneath it, if there is one |

📌 **Many of the decisions are HERS.** A reviewer meeting her own ruling stated back to her, with the
date and the reason, checks it in seconds. **The same ruling presented as an anomaly costs an hour and
some trust.**

#### ③ Sort everything into three buckets, and label which one

🛑 **The single most useful thing a session can do for a reviewer is say which of these a thing is** —
because they read identically on the return and need completely different responses.

| | | What she does with it |
|---|---|---|
| ✅ **A DECISION** | someone chose this, deliberately | **confirm or overturn** — and it is recorded either way |
| 🟡 **AN OPEN ITEM** | known, unresolved, usually waiting on a fact or on her | **answer it**, or say it can wait |
| 🔴 **A DEFECT** | **the return is WRONG here** — whether or not anybody chose it | **fix it** |

⛔ **Never dress a SOUND decision up as a defect** *(it invites her to re-decide her own call)*. ⛔ **And never let a defect hide inside a list of decisions.**

🔑 **THE LABEL FOLLOWS THE CORRECTNESS, NOT THE AUTHORSHIP — and this is the half a session gets backwards.** ⚠️ **A decision that makes the return WRONG is a DEFECT and is raised as one**, naming the decision, who made it and when. ⛔ **"Someone chose it" is not what moves a finding out of the red row** — the return is signed under penalties of perjury by the person reading the briefing, and an error nobody may call an error is the one thing this section must never produce.

🛠️ **AND "RECORDED EITHER WAY" MEANS SOMEWHERE — writing it down is part of the briefing, not a follow-up.** 🔑 **A ruling Julia gives goes into the working paper's §4 as a new decision, in her words, with her name and the date** — and where it changes what the firm knows about the client, into their [Client Intelligence](../../../projects/client-intelligence/) `§6` log too. ⛔ **A confirmation is as worth recording as an overturn:** unrecorded, the next session re-raises the same question and she answers it twice.

#### ④ What she is owed without asking

1. 🔑 **The decisions table for that return**, in her own words where they were hers — the working
   paper's §4.
2. **Every figure with its source**, at the level of detail she would need to re-derive it.
3. 🔴 **What is still waiting on HER, named** — the working paper's **open-items section** *(§6 `Open at filing` in the template)*, and what each one moves if she answers it one way or the other.
   ⚠️ **There is no owner column to filter on** — §6 is a checkbox list — **so read it and pick out hers.**
   ⓘ *And not every paper follows the template's numbering: some number their own sections. **Find the
   section by its TITLE, not its number**, and the same goes for the §4 and §8 references above.*
4. **What was assumed**, and what happens if the assumption is wrong.
5. ⚠️ **Where the paper corrected ITSELF.** A figure that changed during preparation, and why, is
   exactly what a reviewer would otherwise re-discover from scratch.
   🔑 **There is no section for this — it is a CONVENTION, and a session has to go looking:** a
   superseded figure is kept as `~~struck~~` with a **`SUPERSEDED BY §4 decision N (who, date)`** line
   beside it, wherever it sits. **Grep the paper for `SUPERSEDED` and for `~~` before briefing**, and
   carry what you find; ⛔ **a correction the paper made and the briefing omits reads to the reviewer as
   a figure nobody ever questioned.**
6. **What is NOT in this return** because it belongs to another one — the §8 handoff.

#### ⑤ 🛑 Two things a session must not do here

- ⛔ **Do not re-litigate a settled decision because a session would have chosen differently.** Say what
  it costs, once, in the row where it lives — **then move on.** 🔑 **The signer decides; the session
  informs.**
  🛑 **BUT ⑤ GOVERNS PREFERENCE, NEVER CORRECTNESS.** A decision the session merely *disagrees*
  with: once, then move on. A decision the session believes makes the return **wrong**: raise it in
  full, as a defect, every time — ⑤ is not a reason to soften it.
  ⚠️ **And a decision the PREPARER settled is NOT settled for the SIGNER.** Where the working paper
  records that an objection was raised and overruled, **the objection and its reasoning travel to the
  reviewer WITH the decision** — she was not in that conversation either, and she is the one who signs.
  🛠️ **Where to find them: §4's ALTERNATIVE column**, which is where the papers actually record an
  overruled objection *(the template heads it "The alternative"; some papers spell it out as "the
  alternative that was NOT taken" — it is the same column)* — ⚠️ **and note ④.5's grep will NOT catch these**, because
  an objection can be overruled without any figure changing.
- ⛔ **Do not make the preparer the messenger.** If a question can be answered from the working paper,
  **answer it** — the whole point of this section is that she should not have to be found and asked.

#### ⑥ And it runs in whatever language she writes in

**Julia does not speak Spanish; Lilian usually writes in it.** 🔑 **The working paper is in English
like every repo artifact, and the briefing is delivered in the language of the person asking** — the
[CLAUDE.md](../../../CLAUDE.md) reply-in-kind rule. ⓘ *Which is also why the paper carries the reasoning
in full: it has to survive being read by someone who was not in the conversation that produced it.*

### 4D · 📊 THE EXCEL WORKING-PAPER WORKBOOK — Lilian's evidence file, and the rules she set for it

🔄 **§4E first, every time.** A workbook is the deliverable most likely to be built from a paper the
session read hours ago — and the one she types from.

🔑 **What it is.** Alongside the working paper and the chat delivery, a prepared return ships an
**`.xlsx` workbook** that holds every figure on the return with its origin, its arithmetic, its
source and what is still open. 🗣️ **Its purpose is Lilian's, in her words** *(2026-09-23)*: *"esto va
a ser la evidencia que voy a subir… si Julia, dentro de un tiempo, quiere saber qué sucedió con el
cliente y de dónde salió determinado número, simplemente puede abrir ese Excel."*
🔒 **Delivered to her, NEVER committed** — it carries client dollar figures and is covered by a
`.gitignore` pattern. The generator script may live in the session scratchpad; the workbook does not
go in the repo, into an artifact, or into a Double note.

> ## 🛑 THE ONE THAT MATTERS MOST: THE VALUE COLUMN SAYS **WHAT TO ENTER**, NOT WHAT IS THERE
>
> 🗣️ **Lilian, 2026-09-23, after being handed a workbook whose main column was the value already on
> the return:** *"no necesito que me pongas lo que está en la declaración. Eso no es lo que necesito.
> Lo que necesito es que me digas **qué es lo que debo poner, qué es el valor correcto**, porque si
> cometí un error y tú simplemente me pones el valor que ya está en la declaración, eso no me sirve
> de ninguna ayuda. Al lado pones 'defecto'. Sí, está bien, es un defecto, **pero ¿qué es lo
> correcto?** Eso no me sirve. Así no necesito que me ayudes. **No es la forma.**"*
>
> 🔑 **She reads this file WITH ATX OPEN, to type from it.** A column of what the software already
> shows tells her nothing she cannot see on her own screen — and pairing it with a `DEFECT` flag is
> worse than useless, because it names a problem and withholds the answer. ⛔ **"It is wrong" is not a
> deliverable. "Type this" is.**
>
> ✅ **So the workbook's principal column is `What to enter`**, and it is filled on **every** row —
> including the rows that are already right, where it simply repeats the value that belongs there.
> ⓘ *This is the §4B rule "every finding delivered WITH ITS FIX" applied to the column itself rather
> than to a note further down the page. It was already firm policy; the workbook was not obeying it.*

#### The action vocabulary — one word per row, and the current value travels INSIDE it

⚠️ **She still needs to know which rows require a keystroke** — otherwise she re-reads 140 lines to
find the dozen that moved. 🔑 **That is what the `Action` column is for, and the wrong value belongs
HERE, as part of the instruction, never as a column of its own:**

| `Action` | What it means | What `Action detail` must say |
|---|---|---|
| **OK** | Already correct. Nothing to type. | — |
| **CHANGE** | A value is there and it is wrong. | 🔴 **Name what is there now** — *"the return has `Ogden` — replace it"*. Without it she cannot tell she has found the right box. 🔴 **AND SAY WHETHER "WHAT IS THERE NOW" WAS READ OFF THE RETURN OR MODELLED** from a stated change — where both exist, **the read-off value governs** *(§4E)*. ⓘ *A delivery once quoted a modelled balance due as what the return said, and the return was materially lower.* |
| **ADD** | The field is blank and must be filled. | Where the blank is, if the line is easy to miss. |
| **CONFIRM** | Probably right; must be checked on screen before filing. | **Why it cannot be read off a text extract** — a ticked Yes and a ticked No extract identically. |
| **DECIDE** | Blocked on the client's answer or on a ruling by Lilian or Julia. | **Who has to answer what.** |
| **COMPUTED** | ATX derives it; she types nothing. | The value it **should** show, and that a wrong one means a wrong input upstream. |

⛔ **On a `DECIDE` row, `What to enter` is an INSTRUCTION, never a guessed number** — *"ASK THE CLIENT,
then type his answer"*. 🛑 **A confident figure nobody actually knows is the worst possible cell in
this file**, because the whole document exists to be typed from without re-deriving anything.

#### ⛔ NO "WHAT IT USED TO SAY" COLUMN. EVER.

🗣️ **Lilian, 2026-09-23:** *"si quieres decir que son los números que tenía anteriormente en versiones
anteriores de esta declaración antes de hacer ciertos cambios, pues **eso no es algo que me interese**.
Obviamente, lo que necesito es **la versión final**. Si estoy en lo correcto, por favor, elimina eso."*

🔑 **She is preparing a return, not auditing its history.** A column comparing this ATX version against
the previous one is the session's own working material — it belongs in the **working paper**, where the
reasoning lives, and nowhere in the file she types from. ⓘ *It also ages badly: the moment she rebuilds
the return the column describes a document that no longer exists.*
✅ **The one legitimate place a superseded value appears is inside a `CHANGE` row's `Action detail`**,
because there it is not history — it is how she finds the box.

#### 🧊 Freeze ONE header, near the top, or none at all

🗣️ **Lilian, 2026-09-23, on the Form 8082 sheet:** *"las filas de la 1 a la 24 están fijas y no puedo
desplazarme por el Excel porque se quedan fijas. Casi no tengo espacio para ver qué hay debajo."*

🔑 **The bug is structural and it will recur in any generator that sets `freeze_panes` inside a
shared "write a header row" helper.** On a sheet with **three** stacked tables the helper runs three
times and **the LAST call wins**, pinning every table above it — so two-thirds of the window is frozen
and the sheet cannot be scrolled. ✅ **The rule: freeze only a header that sits in the top few rows,
and only the FIRST one on a sheet. A multi-table sheet freezes nothing.**

#### 🔢 A trap that produced FOUR wrong figures on one sheet: `round()` is not the IRS's rounding

🛑 **Python's built-in `round()` does BANKER'S rounding — it sends `.5` to the nearest EVEN number.**
⛔ **The IRS tax table, and tax arithmetic generally, round `.5` UP.** 🔑 **The two agree about half the
time, which is exactly what makes this dangerous:**

```
round(1247.5) -> 1248   # agrees, so the check against the filed return PASSES
round(1512.5) -> 1512   # disagrees - and this is the figure nobody can check
```

⚠️ **A generator that validates itself by reproducing the filed return will sail straight through.**
*(It did: the chain rebuilt the return's own 16,626 / 8,313 / 77,860 / 62,288 / 12,458 / 1,248 exactly,
and then produced a tax of 1,512 where the table says 1,513 — carrying a wrong ACTC and a wrong amount
due onto the summary sheet.)*

✅ **Use explicit half-up rounding everywhere a figure is computed:**

```python
from decimal import Decimal, ROUND_HALF_UP
def r(x): return int(Decimal(str(x)).quantize(Decimal('1'), rounding=ROUND_HALF_UP))
```

🔑 **And validate the generator against a figure the filed return does NOT already contain**, because
a self-check that only reproduces known outputs cannot distinguish a right method from a lucky one.
📌 **The tax on a bracket line is read off the table's `$50` row midpoint** — that is what reproduces
the software's own figures, and it is where the half-up rule bites.

#### 🔴 EVERY FIGURE CARRIES ITS SOURCE, IN ITS OWN COLUMN — ALWAYS, ON EVERY WORKSHEET

> **Lilian, 2026-09-27, and it is a STANDING requirement, not a preference for one client:**
> *"Necesito saber de dónde sale cada número y, si está en un documento, necesito saber cuál es el documento…
> cuando voy a revisar algo que no entiendo, tengo que preguntarte de dónde sacaste eso y pierdo mucho tiempo…
> si no, queda como un número y tengo que confiar plenamente en ti… La idea de WorkSheet es que una persona, si
> habla contigo, pueda revisarlo de punta a cabo y entender todo lo que pase y de dónde salió cada cosa."*

🔑 **THE TEST IS NOT "is the number right". IT IS: can she get to the evidence WITHOUT ASKING YOU?** ⛔ **A
figure whose only support is the session that produced it is not a working paper — it is a number she has to
take on trust, and the session that could explain it will be deleted.**

✅ **So every sheet that carries figures carries a `Source` column, and it holds THREE things:**

| | What goes in it | Why that and not less |
|---|---|---|
| **1 · WHAT KIND of evidence** | `Client document` · `Client's own spreadsheet` · `Prior-year filed return` · `Bank statement` · `Lender letter` · `Text message / WhatsApp` · `Screenshot the client sent` · `Email` · `Computed — see the formula` · `Firm decision — see Decisions` | **She reads the KIND first and stops there most of the time.** A `Client's own spreadsheet` needs no chasing; a `Computed` sends her to the arithmetic |
| **2 · WHICH document, by its EXACT FILENAME** | `2022 Benson trl Contract__9827076-001.pdf`, not "the Mitsubishi contract" | 🔑 **She searches by filename.** A description is not findable |
| **3 · WHERE IT LIVES, and WHERE IN IT** | The platform folder path — `Double › TaxDome › <client> › Tax › 2023` — **and the locator inside the document**: page and line for a PDF, `sheet › cell` for a spreadsheet, date for a bank line | ⛔ **"It is in Double" is not a location.** ✅ **A 40-page contract needs the page** |

⚠️ **AND FOUR RULES THAT MAKE THE COLUMN HONEST RATHER THAN DECORATIVE:**

- 🛑 **A figure the client gave in CHAT, in a text or in a photo is marked as that, by name and date** —
  *"Client sent by WhatsApp, 2026-09-15"*. ⛔ **Never dressed up as a document.** 🔑 **And per §1B.6 that
  source is NOT re-readable by a later session: the figure survives, the picture does not. Say so.**
- 🛑 **A figure that is CORRECT but whose source you cannot name is a DEFECT.** ⛔ **Do not ship it with an
  empty Source cell and do not write "per prior analysis".** ✅ **Go and find where it came from, or mark it
  `UNSOURCED — do not key`.**
- 🛑 **Where TWO sources disagree, the column names BOTH and says which governs and why.** *(`Client's sheet
  105,550 · lender note 95,550 · HIS governs — decision 60`.)*
- ✅ **A figure the FIRM computed points at the computation, not at a conclusion** — the cell with the
  formula, or the section of the working paper that derives it.

#### 🔴 AN ASSET IS NEVER DELIVERED AS JUST A NAME, A DATE AND A COST

> **Lilian, 2026-09-27:** *"no simplemente decirme el nombre del vehículo, la fecha y el costo, sino que tienes
> que decirme qué tipo de vehículo es y qué poner en ATX para su depreciación: si es a 3 años, a 5 años, qué
> categoría es."*

⛔ **Name + date + cost is not enough to key an asset, and a preparer holding only those three has to guess the
life.** ✅ **EVERY asset row carries these, and the `Source` column above applies to each:**

| Field | What it must say | 🛑 The trap |
|---|---|---|
| **What the asset physically IS** | `Over-the-road tractor unit (fifth wheel, pulls semi-trailers)` — **not** `2018 Freightliner` | **The MODEL NAME DOES NOT DECIDE THE CLASS.** The same nameplate is built as a tractor and as a straight truck |
| **The asset class from Pub. 946 Table B-1** | The code AND its printed title — `00.26 · Tractor Units for Use Over-the-Road` | ⛔ **Read it off the CURRENT-YEAR Pub. 946 PDF from irs.gov, never from memory** *(the skill's standing rule, and it is exactly the kind of table that gets transcribed wrong)* |
| **GDS recovery period** | `3 years` / `5 years` / `7 years` — **and it is DERIVED from the class, never copied from last year's schedule** | 🔴 **The pilot engagement ran four over-the-road tractors at 5 years for years because the life was transcribed. `00.26` is THREE.** ⚠️ **Trailers — `00.27` — really are 5** |
| **Method and convention** | `200% DB` / `SL`, and `half-year` or `mid-quarter` — ⚠️ **the convention is fixed in the asset's OWN placed-in-service year** and governs it for the whole recovery period | **Testing the CURRENT year's additions answers nothing about an asset placed in service three years ago** |
| **Business-use %** | The figure and where it came from | **A tick-box on a finance application does not establish it** |
| **§280F / listed property** | **Is it a passenger automobile?** *(≤6,000 lb unloaded GVW, or ≤6,000 lb GVW for trucks and vans — Pub. 946)* **If yes, the year's caps, quoted.** If no, say so and say why | 🔑 **The door-jamb sticker settles it.** ⛔ **A heavy tractor or trailer is never listed property; an SUV usually is not; a car always is** |
| **§179 and bonus** | Whether each is available, whether elected, and **the election the prior year made** | ⚠️ **The SUV §179 cap only bites 6,000–14,000 lb GVWR sport-utilities** |

🛑 **AND THE RULE THAT STOPS A SESSION "FIXING" THE FLEET ON ITS OWN AUTHORITY.** ✅ **A wrong recovery period
used on TWO OR MORE consecutive filed returns is a METHOD OF ACCOUNTING.** ⛔ **Correcting it is a Form 3115
with a §481(a) adjustment — NOT a line edit on this year's return, and NOT something a session decides.**
☑️ **Deliver it as a decision for the signer, with the cost both ways** — ⚠️ **and say plainly that a shorter
life is not automatically better: it deducts faster AND it produces more §1245 recapture on sale.**

#### ☑️ AND THE WORKSHEET SAYS HOW TO PUT AN ASSET IN AND HOW TO TAKE ONE OUT

> **Lilian, 2026-09-27:** *"necesito que me digas cómo introducir los assets y cómo excluir los assets. Todo eso
> tiene que estar incluido."*

✅ **TWO tables per return that touches fixed assets, and they are separate because the software treats them as
separate jobs:**

**ADD — one row per new asset, in the order the entry screen asks:** description *(as it should READ on the
return)* · date placed in service · cost or other basis · the asset class and its GDS life · method and
convention · business-use % · §179 amount *(often zero, and say so deliberately)* · the bonus election ·
**and the `Source` column for every one of those.**

**REMOVE — one row per disposal, and it is NOT deleting the asset:** ⛔ **never delete a row from the
depreciation schedule — the asset is DISPOSED of, so the year's depreciation up to disposal is still taken
and the accumulated figure still carries.** ✅ **The row gives:** which schedule line it is *(by the name the
SOFTWARE shows, which is often not the client's name for it)* · date of disposal · gross sales price ·
expenses of sale · whether it was a sale, a trade-in, an abandonment or a **casualty** — 🔴 **a casualty goes
to Form 4684 FIRST and only then to 4797** · and **what the disposal is expected to produce** *(§1245
recapture as ordinary income up to depreciation taken, the remainder §1231)*, **so a wrong figure is visible
instead of silently accepted.**

⚠️ **AND BE HONEST ABOUT THE ENTRY ROUTE.** 🔑 **The FIELDS above are form-driven and certain — they come off
Form 4562 and Form 4797.** ⛔ **The SOFTWARE'S menu path is not, unless this firm has recorded it.** ✅ **Say
which of the two you are giving, and never invent a screen.** ☑️ **Whoever keys it first writes the real route
back into the working paper** — *"most lines on a computed form cannot be typed where they appear"* is §4B's
rule, and the asset screen is the clearest case of it.

#### The rest of the shape, as it stands

- **Sheets:** `Read me` · `The return` *(the line-by-line, the one she types from)* · `Computations`
  *(live formulas **and** a separately verified value, because the container has no spreadsheet engine
  to check them)* · `Client answers` *(what was asked, what he said, in his words, and what was done
  with it — plus what has NOT been asked)* · `Sources` · `Decisions` · `Open items` · a sheet per
  disclosure form where one is needed · `Entry order`.
- ☑️ **`Open items` is sorted by severity, actually sorted.** ⛔ *A sheet whose subtitle says "ordered by
  severity" and is not is worse than an unsorted one — it was shipped that way once, with a `Medium`
  above seven `BLOCKING` rows, because the severities were edited and the order was not.*
- 🇬🇧 **Everything in the file is in ENGLISH — sheet names, headers, findings, the filename** — even
  when the session runs in Spanish. [`CLAUDE.md`](../../../CLAUDE.md) carries the standing rule and the
  reason: **Julia reads this file and does not speak Spanish.**
- 🗺️ **Every row keeps the full address** — form · page · part · line, and the **column** on a grid
  form — and the **TYPED / COMPUTED** mark (§4B).
- 🔒 **The identity block never enters it**: no SSN/ITIN, no date of birth, no home street address, no
  bank or card number. **A business EIN is fine.**

> ### 🛑 A CELL CAN HOLD TEXT THAT THE ROW WILL NOT SHOW — AND NOTHING ANYWHERE SAYS SO
>
> 🗣️ **Lilian, 2026-09-24:** *"En esta última versión del Excel no me diste la explicación que debo poner
> en la parte 3 para ninguna de las tres S-Corp. Eso estaba en versiones anteriores, pero en esta no me
> lo diste."* ⛔ **The text was in the cell.** 🔑 **The row was FIXED at 44pt and the column was 30
> characters wide, so a 1,198-character block showed 3 of its ~38 wrapped lines and the rest was
> invisible — no error, no marker, nothing in the file to show for it.** ⚠️ **From her side the
> deliverable was missing, and she was right to say so.**
>
> 🛑 **AND THE SECOND HALF, WHICH IS WHY YOU CANNOT JUST MAKE THE ROW TALLER: Excel's hard ceiling on a
> row is 409.5pt** *(8190 twips; the Row Height dialog refuses more)*. **38 lines of Arial 10 need
> ~485.**
> 🔑 **So the ceiling is not the bug — it is the reason a long block CANNOT live in a narrow column and
> has to move to a wide one.**
>
> ⛔ **TWO WRONG FIXES, BOTH OF WHICH THIS FIRM SHIPPED IN ONE DAY:**
>
> | The wrong fix | Why it fails |
> |---|---|
> | Set a taller fixed height | Excel clamps it at 409.5 and the text is clipped anyway. ⚠️ **A `min(405, …)` cap is the same failure with better manners** — past ~33 lines it starts hiding content again, silently. ⓘ *A first guess capped that way is fine as a starting height **provided the fit check below runs afterwards and can override it** — that is what makes it safe, and a generator that keeps such caps should say so at each one* |
> | Replace the block with a pointer to another sheet | 🗣️ **That is what produced her message.** She works down `The return` at the keyboard; **a pointer where a text used to be reads as a deletion** |
>
> ✅ **THE FIX IS A FIT CHECK THAT RUNS AND CAN FAIL THE BUILD** — not a formula at each call site,
> because there are a dozen of those and the next one will be forgotten. ⓘ *Two of them were already
> wrong in the same commit that added the first version of this rule.* **After the workbook is built,
> walk every wrapped cell, measure what it needs, and grow the row; where it cannot fit under the
> ceiling, RAISE — for a cell she ACTS on:**
>
> ```python
> MAX_ROW_PT = 409.5
> # the columns a person types from, per sheet - a clipped cell here fails the build;
> # clipped reference prose in a "why" column is reported and does not
> ACTIONABLE = {'The return': {5, 6, 8, 9}, ...}
>
> need = wrapped_lines(cell.value, merged_width_chars, cell.font) * line_pt(cell.font) + 4
> have = ws.row_dimensions[cell.row].height or 15.0
> if need > have:
>     if need <= MAX_ROW_PT:
>         ws.row_dimensions[cell.row].height = need          # just grow it
>     elif cell.column in ACTIONABLE.get(ws.title, set()):
>         fatal.append(f'{ws.title}!{cell.coordinate} needs {need:.0f}pt')
>     else:
>         problems.append(...)                               # printed, not fatal
> if fatal: raise SystemExit(...)      # a clipped deliverable must not be shippable
> ```
>
> ⚠️ **Two details in that code carry the whole point.** ⛔ **Never set a height BELOW what the cell
> needs** — not even by a point, not as a `min(ceiling - 1, need)` tidy-up: that is the original defect
> with a better number on it. **And the failure message must name the COLUMN and its width**, because
> the only useful next move is to decide where the block goes instead.
> 📌 **`ACTIONABLE` is a judgement and it should be put to Lilian, not guessed.** ✅ **Include the
> column that says WHAT TO TYPE, not only the value** — §4D's own rule is that a defect flag without its
> correct value is not a deliverable, and that detail lives in the *Action - detail* column.
>
> 🔑 **Three things that make the measurement honest**, each of which was wrong on the first attempt:
> **wrap on WORDS, not characters** *(Excel does, so a character split under-counts lines)*; **measure
> the MERGED span, not the one column**; and **measure in the CELL's font** — Courier New is ~16% wider
> per character than the Arial the column-width unit is calibrated for, so summing raw column widths
> over-states capacity and leaves rows too short.
> ⚠️ **And two tables on one sheet must share one set of column widths** — widths are per SHEET, so the
> second `header_row` silently re-lays-out the first table against columns it was never designed for.
>
> 📌 **Where the block goes once it will not fit:** a **merged full-width cell** on the form's own sheet,
> **in ONE cell** so a single copy carries the line breaks. 🔑 **Then the pointer is not a substitute for
> it, it is a route to it — and it has to earn that:** ✅ **built from the SAME heading constant** *(a
> pointer written with a hyphen against a heading with an em dash finds nothing in Ctrl-F)*, ✅ **saying
> what to DO** *("PASTE the block headed … It is ONE cell: click it, copy, paste")*, ✅ **itself checked
> by the fit rule** — *the pointer rows added to fix this were themselves clipped at a hard-coded 76pt* —
> and ✅ **announced in the `Read me` sheet AND the target sheet's own subtitle**, because a text nobody
> can find is a text that is not there.
>
> 🛑 **AND TWO THINGS THE CHECK GETS WRONG ON ITS OWN, BOTH FOUND ON 2026-09-28 — on the ONE SHEET
> WHERE NOTHING IS REFERENCE PROSE.**
>
> **① `ACTIONABLE` MUST NAME THE SHEET SHE WORKS FROM, OR THE CHECK REPORTS ITS WORST FAILURE AS ITS
> MILDEST.** A sheet absent from that table has **no** actionable columns, so every clipped cell on it
> comes out as the *soft, not fatal* line — which is exactly the category meaning *"she only reads
> this one"*. ⛔ **On the Zakom workbook the missing sheet was `Fix the keyed return`, the sheet whose
> own subtitle says START HERE**, and a clipped cell on it printed as one word of reassurance:
> `fit check: OK (1 soft)`. 🔑 **A sheet with no entry must be the LOUD case, not the quiet one.**
> ✅ **So DECLARE EVERY SHEET and make a missing one RAISE** — `set()` is a declaration that nothing on
> that sheet is typed from, and it is not the same as leaving the sheet out. ⚠️ **And read the count:
> `OK (n soft)` is not OK for n > 0, it is n cells nobody has looked at.**
> ⓘ **Declaring all fifteen immediately found a SECOND hole of the same kind, in the sheet that HAD a
> row:** `The return` protected *Action*, *Action - detail* and an unused column — and **not `What to
> enter`, the column that carries the value she keys.** 🔑 **The rule above says include the WHAT-TO-TYPE
> detail column *as well as* the value; it was read as *instead of*.** ⛔ **A partial `ACTIONABLE` row is
> the same silent failure as a missing one — check the set against the sheet's own header labels, not
> against memory of what the columns were.**
>
> **② CODE THE MOVE IN THE ROW LOOP, NOT ON THE CELL THAT OVERFLOWED.** The move to a full-width cell
> is a rule about a COLUMN, not about a sentence: the cell that failed here crossed the ceiling the
> moment **one sentence** was added to it by an unrelated review fix, and it had fitted the day before.
> ✅ **So measure all of a row's cells as the row is written, replace any that will not fit with the
> pointer, and emit the full-width row underneath — once, generically.** ⛔ **Fixing the one cell by
> hand leaves the next sentence to find the same hole**, and the person who finds it is Lilian.

---

### 4E · 🔄 RE-READ THE WORKING PAPER BEFORE YOU BUILD ANYTHING FROM IT — **and check what is IN FLIGHT, not just `main`**

🔑 **A live return's working paper moves faster than a session does.** Valentin Volzhanskiy's moved
**six sections in two days**. A session that read it once and then worked for a long stretch is
holding a picture of the return that no longer exists — and it will hand that picture to Lilian
without noticing.

> 🛑 **THE FAILURE THIS RULE EXISTS FOR — 2026-09-24.** A session read the paper at §17, worked, and
> delivered **an Excel workbook and a chat analysis** built on that state. In between, **five PRs had
> merged and a sixth was open**. 🗣️ **Lilian's reply is the whole of it:** *"Sinceramente, no entendí
> nada de la explicación que me diste… Pensaba que la declaración estaba prácticamente bien… Me estás
> hablando de cosas rarísimas que no hemos conversado."*
> 💸 **What it cost her:** an amount owed that was badly wrong; a Schedule C shape presented as
> an open decision that she had **chosen and keyed the day before**; a required reconciling statement
> that had been made **moot**; and a **second workbook** with the same client's name on it, whose
> figures contradict the live one. 🔗 *The account is §24 of that client's working paper.*

⛔ **NEITHER EXISTING CONTROL FIRES HERE, and that is the point.**
[`CLAUDE.md`](../../../CLAUDE.md)'s drift check runs **before a commit**; a file handed over and a
chat message are neither. The [session-start hook](../../../.claude/hooks/session-start.sh) briefs
**once**, at session start.

🛑 **AND RE-FETCHING `main` IS NOT ENOUGH.** The section that corrected the delivery was sitting in an
**open, unmerged PR**. ⓘ *§24's own first draft was written after a fresh `git fetch origin main` and
was still wrong, for exactly that reason — it had to be corrected in review.*

ⓘ **This is a RE-TIMING, not a discovery.** [`CLAUDE.md`](../../../CLAUDE.md) already carries the
habit — *"Check what's in flight before starting — open PRs (`list_pull_requests`)"* — but it is timed
**before starting** and written **for people editing shared guidance**. 🔑 **§4E re-times it to before
every deliverable, for the person building one.** ⛔ *A session reading §4E alone must not conclude the
repo's existing guidance is `main`-only. It is not — it is correctly scoped guidance fired at the wrong
moment, which is the actual argument for this section.*

#### ✅ The four steps, and they take under a minute

```
git fetch origin main && git log --oneline HEAD..origin/main
```
1. **What merged** — anything returned means re-read before you build.

2. **What is IN FLIGHT.** ⛔ **`list_pull_requests` alone does NOT answer this** — it returns numbers,
   titles and branches, **never file paths**, so there is no way to filter it to this client's paper,
   and a title tells you nothing *(the PR that superseded the 2026-09-24 delivery was titled "The
   instruction was the defect — 'line 21' and 'line 25' are different forms"; it names neither the
   client nor the file)*. ✅ **Ask git instead — and it also catches a branch pushed BEFORE its PR
   exists, which a PR list cannot:**

   ```
   git fetch origin --prune
   for b in $(git branch -r --no-merged origin/main | grep 'origin/claude/'); do
     git log origin/main..$b --oneline -- projects/tax-returns/<client>/
   done
   ```
   ⓘ *Same idiom [`session-start.sh`](../../../.claude/hooks/session-start.sh) uses, for the same
   reason.* **Anything it prints, read before you build** — `git show <branch>:<path>`. *(The PR route
   works too, but costs two calls: `list_pull_requests` then `pull_request_read` with
   `method: get_files` on each one.)*

3. **Re-read the working paper's LAST sections**, not your memory of them.

4. 🗣️ **SAY WHAT IT FOUND — IN ONE LINE, AT THE TOP OF THE DELIVERABLE, INCLUDING WHEN IT FOUND
   NOTHING.** e.g. *"Drift check: `main` at `23daa94`; no unmerged branch touches this paper; paper
   re-read to §24."* ⛔ **A delivery without that line has not had the check run** — because a session
   that skipped the check and a session that ran it and found nothing produce **identical
   output**, and the person reading cannot tell them apart. 🔑 **That is the standing rule for every
   scan in this skill** *(see "update this skill when…")*, and it is why §4A-M prints two lines for an
   account with no mirrors.

🔑 **WHEN: immediately before building EVERY deliverable** — the workbook *(§4D)*, the chat or
artifact delivery *(§4B)*, a message to the client, a briefing for the reviewer *(§4C)*.
⛔ **Not once per session. Once per deliverable.**

#### 🔴 The second rule, and it is what made the corrected version wrong too

🛑 **A FIGURE THE WORKING PAPER *MODELS* IS NOT A FIGURE READ OFF THE RETURN.** ✅ **Say which it is,
every time. When both exist, the one READ OFF THE RETURN governs.**

ⓘ *The case: one section computed the amount owed from Lilian's stated change and the very next
subsection said so in terms — "No new return PDF was supplied." A later section read the actual
return through the redactor and landed materially lower. A session took the modelled figure,
labelled it "what the return actually says", and told her a wrong balance due.*

- ⌨️ **In the workbook it is enforced by §4D's `CHANGE` row** — *"name what is there now"* is exactly
  the cell this defect lands in, so that row carries the mark. ⛔ **Do not invent a column for it;
  §4D forbids that.**
- 🗺️ **In the working paper**, a section that MODELS says so in its own heading or opening line.

#### 🗂️ And if two versions of a deliverable end up in her hands

⛔ **Do not leave it to her to work out which is real.** ✅ **Name the live one and the one to discard
in the client's [Client Intelligence](../../../projects/client-intelligence/) file** — that is where
the next session looks first, and it holds no figures, so the pointer is safe there.

---

### 4F · 🔴 REVIEWING A RETURN **THE FIRM HAS JUST KEYED** — the preparer hands you the draft PDF and asks *"¿hay errores?"*

> **Lilian, 2026-09-27, sending the keyed 1120-S draft into the session:** *"Revisa lo que he hecho hasta ahora
> en la declaración. Dime si hay errores y dime si hay algo más que podamos adelantar en lo que el cliente
> responde."*

🔑 **AND §4G IS HOW EVERY FINDING BELOW IS WRITTEN — five steps, authority last.** ⛔ **The register this
section builds is the RECORD; it is not an explanation, and on the pilot Lilian could not act on findings
that were entirely correct.**

⛔ **THIS IS NOT §4C.** **§4C is a return coming back from the SIGNER — brief her, never audit her.**
🔑 **THIS is the preparer asking to be checked before anybody signs anything, and here you DO audit — the
whole point is to find what she cannot see from inside the software.** ✅ **Say what is RIGHT as well as what
is wrong: a review that lists only faults misrepresents a draft whose arithmetic ties eight ways.**

#### ① 📄 FIRST, TRANSCRIBE IT IN FULL — §1C applies to the firm's OWN output, not only the client's

🛑 **A draft return uploaded into a chat is exactly the document §1C was written about: no later session can
reopen it.** ⇒ **Write ONE BLOCK for it before analysing anything** — **every line that carries a value, every
line that is BLANK, every checkbox and its state, every zero.** ⛔ **The blanks are where the findings are**:
on the Zakom draft, *officer compensation blank*, *4797 line 14 blank*, *Schedule L line 22 closing blank*,
*4562 line 24a unanswered* and *Schedule K 16d blank* were each a finding — **and a summary written for the
question of the hour would have recorded none of them, because a blank line does not look like an answer to
anything.**

⚠️ **AND A CHECKBOX CANNOT BE READ FROM EXTRACTED TEXT.** 🔑 **On Schedule B every Yes and every No prints the
same `X` at the end of the same line — the answer is the COLUMN.** ☑️ **Locate the marks by COORDINATE**
*(pypdf's `visitor_text` gives each fragment's x/y)*. 🛑 **AND LOCATE THEM ON EVERY PAGE SEPARATELY — the
columns SHIFT: on the 2025 Form 1120-S the Yes/No pair sits at x≈493/516 on page 2 and x≈490/512 on page 3.**
⛔ **Carrying one page's pair to the next would mis-read exactly the answers this step exists to protect.**
☑️ **Every page prints its own `Yes` and `No` headers — read the pair off them, never from a constant.**
⛔ **And never report a Yes/No answer read off the line text: on that draft it would have inverted all
fifteen of Schedule B's Yes/No answers.**

#### ② ✅ RUN THE FREE CROSS-FOOTS BEFORE LOOKING FOR ANYTHING CLEVER

**They cost nothing, they either tie or they do not, and on a sound draft they tell you where NOT to look:**

1. **Every subtotal and total on the face of the return** — page 1 line 21 from its components, line 22, the
   Schedule K reconciliation, M-1 line 4 and line 8, M-2 line 6.
2. **The depreciation schedule's total cost against opening gross assets plus the year's additions.**
3. **Its prior accumulated depreciation against the OPENING Schedule L line 10b.**
4. 🔑 **The cost and accumulated depreciation REMOVED against the named disposals' own figures** — this is the
   one that catches a missing disposal, because the difference IS an asset's cost. *(On Zakom the gap was
   78,145 to the dollar: one truck.)*
5. **Current-year depreciation = bonus + MACRS = page 1's depreciation line.**
6. **The OPENING Schedule L column against the prior year's filed closing column** — if it reproduces it, the
   roll-forward was done properly and the closing column is where to look.
7. 🛑 **Schedule L line 15 against line 27.** **An 1120-S whose balance sheet does not balance is the loudest
   finding on the return and it is one subtraction.**

#### ③ 🔴 THE DEFECT THAT HIDES IN PLAIN SIGHT: **A CAP MASQUERADING AS A COMPUTATION**

🔑 **The tell is free and it is the single most useful thing in this subsection: TWO ASSETS OF DIFFERENT COST
SHOWING THE SAME DEPRECIATION.** ⛔ **That cannot be a computation. It can only be a LIMIT.**

*(Zakom: a tractor costing 85,500 and a trailer costing 67,050 both showed prior accumulated 12,400 and a
current-year charge of 19,800 — the §280F first- and second-year passenger-automobile limits. A third asset's
"bonus" was exactly 20,200, the current-year first-year limit. None of the three is a passenger automobile.)*

🛑 **AND THE CAUSE IS ONE ATTRIBUTE, NOT THREE ERRORS: the assets were entered as LISTED PROPERTY.** ⇒ **the
software puts them in Form 4562 Part V → Part V applies the passenger-automobile limit → the deduction stops
at the table figure.** ☑️ **So the fix is one checkbox per asset, and it also clears the Part V mileage table
and the 24a/24b evidence questions at the same time.**

⚠️ **HEAVY TRUCKS AND TRAILERS ARE QUALIFIED NONPERSONAL-USE VEHICLES AND DO NOT BELONG IN PART V AT ALL.**
📄 **Read the passenger-automobile definition off the CURRENT-YEAR Form 4562 instructions before saying so —
§3's rule** *(and quote it, because this reverses what the software did)*.

🔴 **A SECOND IMPOSSIBILITY WORTH ONE PASS DOWN THE SCHEDULE: accumulated depreciation GREATER THAN COST.**
*(Zakom had one, over by 15,238.)* ⚠️ **Then ask WHICH YEAR put it there — the prior filed return answers it,
and it decides whether the fix is one cell or Julia's.**

#### ④ 🔑 A BALANCE SHEET THAT DOES NOT BALANCE IS AN OPPORTUNITY, NOT JUST A DEFECT — **decompose it, never plug it**

☑️ **Compute the equity the assets and liabilities REQUIRE, subtract the equity that was keyed, and then name
the gap's components from the PRIOR YEAR's filed equity section.** **What is left after the named components
is the year's distributions.**

*(Zakom: required closing equity −407,948 against −262,536 keyed = a gap of 145,412, which decomposed into
capital stock 1,000 omitted, additional paid-in capital 61,169 omitted, and 85,243 of distributions never
recorded — with nothing left over.)*

🛑 **"WITH NOTHING LEFT OVER" IS WHAT MAKES IT ARITHMETIC RATHER THAN A PLUG, AND IT IS STILL NOT PROOF:**
⚠️ **an owner LOAN and an owner WITHDRAWAL are indistinguishable in a residual** — **check whether the
loans-from-shareholders line is blank in both columns before calling the residual a distribution**, and test
it against the bank.

⚠️ **AND BEFORE REPORTING IT, KNOW WHICH PENDING ITEMS MOVE IT.** **The rule is short:** **a change to the
CURRENT-year depreciation charge does NOT move it** *(accumulated depreciation and the book loss fall
together)*; **removing an asset at zero adjusted basis does NOT move it** *(gross cost and accumulated fall by
the same amount)*; **a change to PRIOR-year accumulated depreciation moves it one-for-one and opposite**
*(opening equity is fixed by the filed return)*; **and extra current-year INCOME moves it one-for-one**
*(the proceeds are already inside the documented closing cash)*. ⇒ ⛔ **Key the residual LAST.**

#### ④-bis 🔑 **THE RESIDUAL IDENTITY** — the one check that catches a wrong DISTRIBUTIONS figure with nothing but the draft on screen

_(Added 2026-10-01, because **Lilian asked for the METHOD rather than the number**: *"¿Cómo pude haberme dado
cuenta por mí misma de que esto estaba mal, que este número no encajaba en la declaración? Necesito entenderlo
para, en un futuro, poder encontrar este tipo de errores."* ⚠️ **Answering with the right figure — which this
firm had done three times — does not let her find the next one.** Zakom 2025, decision 157.)_

☑️ **WHAT IT NEEDS BEFORE IT IS WORTH RUNNING** — **the balance sheet TIED to the documents** *(see the limit at
the end)*, **the prior year's filed Schedule L for the opening column, and an answer on whether the shareholder
put money IN.** ⛔ **Without the third, the result is distributions net of contributions.**

🛑 **AND ONE GATE THAT COVERS EVERY REMAINING WAY THIS IDENTITY CAN BE WRONG — RUN IT FIRST, IT IS TWO NUMBERS
OFF THE SAME PAGE:**

```
   M-2 line 6  −  M-2 line 1     MUST EQUAL     Schedule M-1 line 1  (net income per books)
```

⛔ **If they differ, the identity is wrong BY THAT DIFFERENCE — and it still closes, so nothing flags it.**
🔑 **The reason is structural: `(line 6 − line 1)` is the AAA column ALONE, while `closing equity` is ALL of
Schedule L equity.** **The two measure the same movement only when nothing has gone anywhere else.**
☑️ **The two usual causes, and the gate catches both without you having to look for either:**

- 🔵 **ANOTHER M-2 COLUMN CARRIES ACTIVITY.** **Tax-exempt income and the expenses related to it go to the
  OAA, never the AAA; AE&P and PTI likewise.** **On a client with tax-exempt income the identity understates
  the distributions by exactly that amount.**
- 🔵 **A BOOK/TAX DIFFERENCE WAS LEFT ON M-1 INSTEAD OF RUN THROUGH M-2 lines 3 and 5.** **Schedule L is *per
  books*; the AAA is a tax account.** **An ordinary §179 or bonus timing difference parts them.**

⚠️ **A movement in Schedule L line 25 or 26 DURING the year** *(a redemption, treasury stock, a prior-period
adjustment)* **is the same class and is absorbed silently into DISTRIBUTIONS.** ✅ **The gate does not catch
that one, so ask: did anything happen to the share capital this year?**

*(Pilot, satisfying the gate exactly: M-1 line 1 `26,038`; M-2 line 1 blank, line 6 `26,038`; columns (b), (c)
and (d) all zero. That is WHY its worked example ties, and it is the thing to check before trusting it
anywhere else.)*

🔑 **WHY THIS CHECK EXISTS AT ALL: on a closely-held S corporation whose books have NO EQUITY SECTION, the
distributions figure is the only number on the return that comes from no document.** ⇒ **It is DERIVED, and a
derived figure has exactly ONE correct value** — ✅ **which is precisely what makes it checkable, while a figure
read off a document can only be checked by going back to the document.**

🧮 **THE IDENTITY. Equity can only move four ways in a year — the year's profit, what the owner put IN, what
the company cannot deduct, and what the owner TOOK OUT:**

```
   closing equity = opening equity + (M-2 line 6 − M-2 line 1) + contributions − DISTRIBUTIONS

   ⇒  DISTRIBUTIONS = opening equity + (M-2 line 6 − M-2 line 1) + contributions − closing equity
```

🛑 **TWO TERMS IN THAT LINE ARE WHERE A FIRST WRITE-UP OF THIS RULE GOT IT WRONG, and both make the
arithmetic CLOSE while the answer is wrong, so nothing flags either:**

| ⚠️ | Why it is there |
|---|---|
| 🔴 **`M-2 line 6` MINUS `line 1`, never line 6 alone** | **Line 1 is the AAA at the START of the year — a BALANCE, not a movement.** ⛔ **Using line 6 alone adds the opening AAA in twice and the identity is out by exactly that amount.** *(Counter-example: opening equity 100 all AAA, income 50, distributions 30. M-2 reads 1=100, 6=150, 7=30, 8=120 and closing equity is 120. Line 6 alone gives `100 + 150 − 120 = 130`; the answer is 30. With `line 6 − line 1` it is `100 + 50 − 120 = 30`.)* ✅ **The short form `line 6` is right ONLY where the prior return's line 8 printed ZERO** — which is the pilot's case and is why its worked example closes |
| 🔴 **CONTRIBUTIONS, which are on NO line of M-2** | **A capital contribution raises paid-in capital on Schedule L and never touches the AAA.** ⛔ **Leave it out and the identity returns distributions NET of contributions, silently.** ✅ **So: establish whether the shareholder put money in before reporting the result, add it back, and read [`form-1120s-preparation.md`](../../../projects/sops/form-1120s-preparation.md) §5C-v — the firm's netting policy, whose own test CANNOT be applied to a net figure.** ⚠️ **`Schedule L line 23` is unaffected by a contribution; the DISTRIBUTIONS figure is not** |

☑️ **AND THE FOUR TERMS, each read off the screen:**

| Term | Where | ⚠️ The trap |
|---|---|---|
| **opening equity** | **Schedule L BEGINNING column: lines 22 + 23 + 24 + 25 − 26** | ⛔ **Not the prior return's "equity" caption — add the lines.** ⚠️ **25 is *adjustments to shareholders' equity* and 26 is *less cost of treasury stock*; both are blank on a simple close company and both are real lines** |
| **M-2 line 6 − M-2 line 1** | **both printed on the form** *(line 6 is lines 1–5 combined)* | 🛑 **SUBTRACT LINE 1. It is a BALANCE, not a movement — see the table above.** ✅ **Where the prior return's line 8 printed zero, line 1 is blank and line 6 alone is right** |
| **closing equity** | 🔴 **total assets − total liabilities. The equity the balance sheet REQUIRES** | 🛑 **THE STEP EVERYBODY SKIPS: it is NOT the equity that was keyed. Using the keyed figure makes the identity circular and it can never fail.** ✅ **And it is the ONE term that needs no equity line at all, which is what makes the check independent of the thing it is checking** |
| **DISTRIBUTIONS** | **Schedule K line 16d, K-1 box 16d** | ⚠️ **And `M-2 line 7` and `Schedule L line 23`: see below** |

🛑 **AND THE FINDING THAT MAKES THIS WORTH A SUBSECTION: RUN IT ON THE DRAFT'S *OWN* EQUITY SECTION, BEFORE ANY
CORRECTION.**

> 🔑 **A figure computed from the balance sheet CANNOT disagree with the balance sheet.** ⇒ **If `16d`
> disagrees with the equity section that is keyed BESIDE it, `16d` was never derived — it was carried in from
> an earlier version and left there.** ✅ **That is a finding available with no other document, no corrected
> figure and nobody else's help.**

*(Zakom 2025: the draft's keyed closing equity was −150,841, so the identity gave 116,710; the draft held
114,243. **Out by 2,467 against its own balance sheet** — and separately out by 23,340 against the CORRECTED
balance sheet. Two different errors, and the cheap check found the one that needed nothing.)*

✅ **A SECOND, INDEPENDENT ROUTE — run both, because they fail differently:**

```
   Schedule L line 23  =  opening paid-in capital  −  ( DISTRIBUTIONS − M-2 line 7 )
```

🛑 **THE OPERATOR IS MINUS, AND A FIRST VERSION OF THIS LINE HAD IT AS PLUS** *(caught in review — the same
failure class as the two terms above: right on the pilot read loosely, false as a signed rule)*. **The excess
REDUCES paid-in capital.** *(Pilot: `(61,169) − 111,545 = (172,714)`, which is the figure the return uses. With
`+` it gives `+50,376`.)* ⚠️ **A working paper may write the magnitudes — `61,169 + 111,545 = 172,714` — and be
clear in context; a SIGNED formula with named terms may not.** ⛔ **And the error is silent on a client whose
paid-in capital is POSITIVE, which is most of them.**

🔑 **M-2 line 7 is CAPPED at line 6** — you cannot distribute out of an AAA that has nothing in it — **so
whatever the distributions exceed line 6 by has to land in paid-in capital instead.** ✅ **The two routes
agreeing is the proof that the figure is one calculation and not two guesses.**

🛑 **THE THREE FIGURES THAT ARE ONE CALCULATION:** **`Schedule K / K-1 16d` · `Schedule L line 23` ·
`M-2 line 7`.** ⛔ **Change any ONE and re-derive the other two. Patching one is how a return goes out
internally inconsistent while every individual entry looks defensible.**

☑️ **THE ORDER THAT MAKES IT IMPOSSIBLE TO GET WRONG, and it is the order to hand the preparer:**

1. ⌨️ **Key every FACT first** — assets, liabilities, income, expenses, depreciation. ⛔ **`16d`, `line 23` and
   `line 24` are not facts and do not belong in this step.**
2. 🧮 **Read the REQUIRED closing equity** = total assets − total liabilities.
3. 🧮 **Compute `16d`** by the identity.
4. 🧮 **Compute `line 23`** = required closing equity − capital stock − `line 24` − `line 25` + `line 26`
   *(the last two are blank on a simple close company)*.
5. ✅ **CHECK: total liabilities + capital stock + `line 23` + `line 24` + `line 25` − `line 26` = total
   assets** *(the last two blank on a simple close company, as in step 4)*. ⛔ **If it fails, something in step 1
   is wrong — go back. NEVER adjust `16d` to make it close.**

⚠️ **AND THE ALARM IN ONE SENTENCE, which is the part worth memorising:**

> 🔴 **If Schedule L does not balance, the first suspect is NOT an asset and NOT a liability — it is the
> DISTRIBUTIONS figure, because it is the only one on the return that came from no document at all.**

⛔ **WHAT THIS CHECK DOES NOT DO, stated because a check oversold is worse than none: it proves CONSISTENCY,
not truth.** **A wrong ASSET or LIABILITY passes it perfectly — the arithmetic simply produces a wrong `16d`
that balances a wrong balance sheet.** *(Zakom: a missing 20,873 insurance-finance liability did NOT trip it;
the 2,467 did.)* ⇒ ✅ **So it runs AFTER the balance sheet has been tied to the statements, never instead of
it.** 🔑 **Tie the balance sheet to the documents first; THEN the identity gives the one distributions figure
that fits it.**

☑️ **AND IT BELONGS IN THE WORKING PAPER'S TIE-OUT CHECKS AS TWO ROWS, NOT ONE** — the identity and the
`line 23` cross-check — **so a later session re-runs both rather than trusting that they once agreed.**

#### ⑤ ⚖️ LABEL EVERY FINDING, AND CHECK A KEYED POSITION AGAINST THE **DECISIONS TABLE** BEFORE CALLING IT ANYTHING

🔑 **§4C's three labels govern here too — DECISION · OPEN ITEM · DEFECT — and a fourth case appears only on
your own firm's draft: A KEYED POSITION THAT CONTRADICTS A DECISION THE WORKING PAPER RECORDS.**

⛔ **That is not a defect and must not be raised as one.** *(Zakom: the draft took 100% bonus depreciation
where Lilian's own recorded decision was to elect out as the prior year did — a ≈245,900 swing. The keyed
position was procedurally valid: bonus is the default and needs no statement. What made it reportable was the
contradiction, not the position.)*

☑️ **So the output is: *"this reverses your decision N — confirm it and the paper records the supersession, or
re-key it."*** ⛔ **A session never decides which.** ⚠️ **And read the decisions table BEFORE the return, or you
will not know a reversal when you see one.**

#### ⑥ ⛔ AND ONE NON-FINDING THAT A FIRST PASS WILL WANT TO REPORT

🛑 **A BLANK OPENING BALANCE ON SCHEDULE M-2 IS NOT AUTOMATICALLY WRONG.** ⚠️ **On Zakom the first pass had it
listed as a defect, and it was correct: the prior return's M-2 line 8 printed ZERO.** 🔑 **Check the prior
year's printed closing figure before flagging any opening balance** — **and the same guard applies to a
carried-forward life, a convention, or an accumulated-depreciation figure that merely looks odd.**
✅ **A REVIEW'S FALSE POSITIVE COSTS THE PREPARER AN HOUR AT THE KEYBOARD, WHICH IS THE SAME CURRENCY AS A
MISSED DEFECT.**

#### ⑥-bis 🛑 TWO WAYS THIS SUBSECTION'S OWN FIRST RUN FAILED ITS REVIEW — both are mechanical and both are cheap to prevent

🔑 **Recorded because a review caught them in the very commit that created §4F, which is the best evidence they
are not obvious.**

1. 🔴 **A REGISTER ORDERED *BY MONEY* AND A TRANSCRIPTION THAT POINTS INTO IT MUST BE RENUMBERED TOGETHER.**
   **The transcription's *"see row N"* pointers were written against an earlier, document-order numbering;
   re-sorting the register by money left ELEVEN of them pointing at the wrong row** — *the
   officer-compensation row pointed at the 245,900 bonus election, and the address-block typo pointed at an
   acquisition-date question about a truck.* ⚠️ **Corrected in the round-2 review: a first version of this
   example said BOTH pointed at the bonus election, which overstated it — the count was right, the
   illustration was not.** ⛔ **That breaks the one
   link this whole method depends on: transcription → fix.** ☑️ **Number the register LAST, or point by
   heading text rather than by number; and before pushing, follow every pointer once.**
2. 🔴 **A FIX THAT SAYS WHERE A FIGURE IS *REPORTED* IS NOT A FIX IF IT NEVER LANDS ON THE LINE THAT BALANCES.**
   **The Schedule L row's fix named Schedule K line 16d, the K-1 and the M-2 — none of which is a Schedule L
   equity line — so keying exactly what it said left the balance sheet out by the whole residual, and the row
   read as complete.** ☑️ **For any fix that is supposed to make a statement TIE, re-run the tie with only the
   entries the row names.** 🔑 **If it still does not close, the row is missing an entry — and where the
   missing entry is a presentation choice, SAY the fix cannot be completed without the signer.**

#### ⑥-ter 🛑 NEVER CALL A FORM OR A STATEMENT **ABSENT** WITHOUT HAVING READ EVERY PAGE

⛔ **A keyword search of an extract is evidence about the SEARCH, not about the return.**
🔑 **[`method.md`](../../../projects/pre-return-review/method.md) rule 1b applies to the firm's own output
exactly as it applies to a client's: a negative belongs to the search that produced it.**

✅ **THE GUARD, and it costs a minute: WALK THE PAGE COUNT.** **Before writing that anything is missing
from a return — an election, a statement, a schedule, a form — confirm you have actually read every page,
and say which page each conclusion rests on.**

🛑 **THE COST WHEN IT IS SKIPPED, from the pilot:** **a session searched a redacted extract for
`Election`, read the first twenty hits (all of them page 1's *"S election effective date"* and Schedule
B's §163(j) question), and wrote *"the 20 pages carry only the line-20, K-1, Schedule L and M-1
statements — there is no elections page."*** ⛔ **Page 20 WAS the elections page.** ⇒ **The preparer was
told twice she had to build a statement that was already attached, and a FOLLOW-UPS row carried the false
finding.** ⚠️ **§1C is the other half of it: pages 1–19 were read for specific questions and page 20 was
never opened at all.**

#### ⑦ ☑️ CLOSE THE REVIEW BY ANSWERING THE SECOND HALF OF HER QUESTION — *"¿qué podemos adelantar?"*

🔑 **A defect list is not the deliverable; the deliverable is a defect list AND a queue of work that needs
nobody.** ✅ **Sort what is left into IN-HOUSE and WAITING-ON-A-PERSON, and say who each person is and what
they owe.** ⛔ **Never leave a "pending" that is really a document the firm already holds — §1C.**

### 4G · 🗣️ HOW A FINDING ON A COMPUTED FORM IS WRITTEN — the five steps, and the authority goes LAST

> **Lilian, 2026-09-28, on a set of Form 4562 findings in which every figure was correct:**
> *"Necesito explicaciones más detalladas, más simples. No consigo que me expliques de forma que pueda
> entender fácilmente. Siento que tus explicaciones son muy densas, a veces escuetas, **te saltas pasos** y
> siento todo como en una nebulosa. No entiendo qué pasa, cuál es la situación… **pierdo mucho tiempo
> tratando de entenderte.**"*

🛑 **THIS IS A DELIVERY DEFECT AND IT IS AS REAL AS A WRONG NUMBER.** ⛔ **A finding she cannot act on has not
been delivered.** 🔑 **And the cause is specific enough to fix: the findings were written as a REGISTER — a
row per defect, ordered by money, every clause compressed — which is the right form for the record and the
wrong form for a person at the keyboard.** ⚠️ **§4F builds that register and §4B's item 13 turns it into
checkboxes; NEITHER of them makes a finding explicable.** ✅ **That is this section's job.**

#### ① ✅ THE FIVE STEPS, IN THIS ORDER, FOR EVERY FINDING

| Step | The question it answers | ⛔ What breaks it |
|---|---|---|
| **1** | **What does the return show TODAY?** The figure as printed, with its form, page, part and line | Leading with the corrected figure, so she cannot find the row she is looking at |
| **2** | **What MADE it show that?** The input, the attribute, the checkbox — **the cause inside the software** | Naming the tax rule here. 🔑 **She cannot type a rule** |
| **3** | **Why is that wrong?** ONE sentence, ⛔ **with no code section in it** | Three clauses and a citation |
| **4** | **What do I type, and where?** The screen, the field, the value | *"Correct the classification"* — which is a verdict, not an instruction |
| **5** | **What MOVES when I type it?** The lines that change, and by how much | Leaving her to work out whether it mattered |

⛔ **NEVER OPEN WITH THE AUTHORITY.** ✅ **The IRS quote is EVIDENCE: it goes at the END of the finding, or in
a footnote.** 🔑 **Opening with §280F or a Pub. 946 table answers a question she did not ask, before the one
she did — and that is what produces the fog.** ⚠️ **§3's rule that a figure-changing answer must be read off
the current-year PDF is untouched — this governs WHERE the quote is placed, never whether it is obtained.**

#### ② 🔑 THE TWO HABITS THAT CAUSE IT, because naming the form is not enough

1. ⛔ **WRITING FOR A READER WHO ALREADY KNOWS THE ANSWER.** **A session that has held a chain of three causes
   for an hour compresses it into one sentence with two implications in it, and cannot feel the gap.**
   ✅ **Three causes get THREE sentences.** 🔑 **The test: could someone who has never seen this return act on
   this paragraph without asking a question?**
2. ⛔ **THE REGISTER'S DENSITY LEAKING INTO THE EXPLANATION.** **Bold, arrows, emoji and section pointers are
   compression devices — they work in a table and they defeat a reader in prose.** ✅ **In the explanation,
   one idea per sentence and one pointer per finding.**

#### ③-bis 🛑 AN **OPEN ITEM** IS NOT A FINDING, AND THE FIVE STEPS DO NOT FIT IT — tell it in TIME ORDER

> **Lilian, 2026-09-28 EVENING, twelve hours after ① was written from her first complaint:**
> *"Tus explicaciones son extremadamente escuetas y compactas. No entiendo prácticamente nada. Por ejemplo,
> no entiendo qué pasa con el seguro y el IPFS. No entiendo qué pasa con Mitsubishi."*

🛑 **THE SAME COMPLAINT, THE SAME DAY, ABOUT PROSE WRITTEN AFTER ① EXISTED.** ⛔ **So ① is not wrong —
it is NOT APPLICABLE, and that is the finding.** 🔑 **①'s five steps are built for a DEFECT ON A COMPUTED
FORM:** *the return shows X · the input caused it · that is wrong · type Z here · these lines move.*
⛔ **NEITHER of the two items she named has that shape.** **Nothing on the return is wrong; nothing is hers
to type. They are SITUATIONS — a fact we do not yet know, and what each answer would mean.**
⇒ **With no shape to follow, the writing fell back on the register's density, which is exactly what ①
forbids.**

✅ **SO AN OPEN ITEM GETS ITS OWN SHAPE, AND IT IS NARRATIVE, NOT A TABLE:**

| | The question | ⛔ What breaks it |
|---|---|---|
| **1** | **What HAPPENED, in the real world, in the order it happened?** *"In September the client took out the insurance. The premium for the year is 35,593. He did not pay it in one go…"* | **Starting with the accounting.** 🔑 **She can picture a company buying insurance; she cannot picture a *"premium finance mechanism"*** |
| **2** | **What do we NOT know?** ONE sentence, phrased as a question | **Burying it inside a paragraph of consequences** |
| **3** | **What would each answer MEAN?** Name them **ANSWER A / POSSIBILITY 1**, each with the figure and the entry it produces | ⛔ **Naming the GAP between them and not the answers themselves** — *"a 6,541 swing"* is not an explanation, it is a summary of one |
| **4** | **Whose is it, and what does SHE do now?** One sentence | **Leaving her to work out whether she is blocked** |

🛑 **AND SIX HABITS TO STOP, each one observed in the two paragraphs she could not read:**

1. ⛔ **NO ABSTRACTION SHE DID NOT INTRODUCE.** *"Model A / Model B"*, *"the plug"*, *"the residual"*,
   *"the swing"*. 🔑 **She has to learn the vocabulary before she can learn the fact, and she did not ask
   for a vocabulary.** ✅ **Use the thing itself: *the whole premium* · *what left the bank*.**
2. ⛔ **NO § CROSS-REFERENCE INSIDE AN EXPLANATION.** **Each one is an invitation to stop reading and go
   somewhere else, and she is at a keyboard.** ✅ **They go at the END, once.**
3. ⛔ **NO TABLE FOR A MECHANISM.** 🔑 **A table compares things that are ALIKE. A mechanism is a SEQUENCE
   and must be numbered 1, 2, 3.**
4. ⛔ **NEVER THE CONCLUSION BEFORE THE ROAD TO IT.** **She cannot check an answer she has not been walked to.**
5. ⛔ **BOLD BELONGS ON THE NUMBER AND THE ACTION, NOWHERE ELSE.** **A paragraph in which every sentence is
   bold has no emphasis in it at all.**
6. ⛔ **NEVER NAME A FIGURE WITHOUT SAYING WHAT IT IS.** **`6,541.29` is not *"a swing"* — it is the
   DISTANCE BETWEEN TWO POSSIBILITIES, and saying so IS the explanation.**

✅ **THE WORKED PAIR IS IN THE ZAKOM WORKING PAPER, §3BZ** — **the same two items, rewritten to this shape,
beside the diagnosis of what the first version did.**

☑️ **AND ONE TEST THAT CATCHES IT BEFORE SHE DOES:** 🔑 **read the paragraph back and ask *"what does the
reader have to already know for this sentence to mean anything?"*** ⛔ **If the answer is anything this
session worked out in the last hour, the sentence has to be unpacked.**

#### ③ ☑️ THE FREE TELL THAT IS WORTH MORE THAN THE ARITHMETIC

🔑 **Wherever a finding can be SEEN without computing anything, lead with that.** ✅ **On the pilot: two assets
of unequal cost — 85,500 and 67,050 — printed identical depreciation of 19,800.** ⇒ **Identical figures on
unequal costs can only be a CAP, never a computation.** 🔑 **That one observation explains the defect, proves
it, and needs no table** — **and it is what she remembered.**

#### ④ ⚠️ AND SAY WHEN A FINDING MOVES NOTHING

✅ **A finding whose effect is *"no figure changes"* is still worth raising** — **an unanswered question on a
form, zero business miles on a trucking fleet, a form attached with every line blank.** ⛔ **But SAY SO in
step 5**, **so she can sort the three-minute jobs from the ones that move the return.** 🔑 **Unlabelled, they
read as equally urgent and the list becomes something to postpone rather than work.**

#### ⑤ 🔑 WHEN SHE SAYS SHE DOES NOT UNDERSTAND, THE ANSWER IS TO REWRITE — NEVER TO EXPLAIN AGAIN

⛔ **Do not restate the same finding with more words around it.** ✅ **Rebuild it in the five steps above and
hand it back.** ⚠️ **This is the same rule CLAUDE.md sets for a journal-entry description or a field value she
has to ask about** — *"a description she has to ask about has failed, however accurate it is"* — **and it
applies to an explanation exactly as it applies to a string.**

### 4H · ⌨️ ATX — the entry routes the firm has ACTUALLY VERIFIED, screen by screen

> **Lilian, 2026-09-28, sending the ATX asset screen unprompted:** *"Te mando una imagen para que sepas, en
> ATX, cómo se hace este cambio de tipo de vehículo. Se hace en esa área que dice 'Asset Information' allá
> arriba… solo para que los registres en este skill de Tax Preparation, para que sepas cómo funciona ATX."*

🔑 **THIS SECTION EXISTS BECAUSE §4B ITEM 11 REQUIRES THE ENTRY ROUTE AND A SESSION CANNOT SEE THE
SOFTWARE.** ⛔ **A route that has not been seen is a GUESS, and §4B says to label it as one.** ✅ **Only
routes the firm has confirmed on a real screen or read off a real printed return go in here.**
☑️ **When she shows a screen, write it down the same day — she is the only source for this.**

#### ① 🚗 THE ASSET SCREEN — and the control that does NOT exist

**Path: the asset list → open an asset → the `Asset Information` block across the top.**

**What is in that header:** `Item #` · **Description** · **Date in service** · the **return form**
*(`1120S`)* · **two dropdowns on the left** · `New asset` *(Yes/No)* · a **category** dropdown
*(`B-Bldgs and other d…`)* · `IRC Section` · `AMT Adj. Type` · **`Bus percent`** · a `COGS` checkbox ·
`Serial #` · a `Multiple Asset Account` checkbox.
**Tabs below it:** **`Depreciation and Section 179` · `Auto/Listed` · `Dispositions` · `Asset History`.**

🛑 **THE ONE THAT MATTERS, AND IT REVERSES HOW THIS SKILL USED TO SAY IT:**
⛔ **THERE IS NO "LISTED PROPERTY" CHECKBOX IN ATX.** ✅ **Listed-vs-not is a CONSEQUENCE of the asset
TYPE CODE — the second of the two dropdowns**, which on the pilot read
**`7 - 5-yr Truck, van, auto on tr…`** *(the first dropdown is the broad class, `V-Vehicles`)*.

🔑 **That code prints on the `Form 4562 Statement` as the `Asset Code` column, and it decides THREE things
at once: the recovery period, which PART of Form 4562 the asset lands in, and whether the §280F
passenger-automobile caps apply.** ⇒ ⛔ **So the instruction is never *"turn off listed property"* — it is
*"change the asset type code"*, and you say which code to change it TO.**

🔑 **THE LIST ITSELF, sent by Lilian on 2026-09-28** — ✅ **this is ATX's own dropdown, not a
reconstruction:**

| Code | ATX's label *(verbatim from the screen)* | ⚠️ **Listed property?** *(the FIRM's determination, not ATX's — this column is not on the dropdown)* |
|---|---|---|
| **1** | `3-yr Tractor (over-the-road use)` | ⛔ no |
| **2** | `5-yr Qual nonpersonal use veh` | ⛔ no |
| **4** | `5-yr Heavy duty truck or OTR trailer` | ⛔ no |
| **5** | `5-yr Passenger vehicle` | ✅ **yes — §280F-capped** |
| **6** | `5-yr SUV/truck/van > 6,000 lbs` | ✅ yes *(not §280F-capped — over 6,000 lb)* |
| 🔴 **7** | `5-yr Truck, van, auto on trk chassis` | ✅ **yes — §280F-capped** |
| **8** | `10-yr Water transport equipment` | ⛔ no |
| **9** | `5-yr Other Vehicle (listed)` | ✅ yes |
| **10** | `5-yr Buses` | ⛔ no |

⚠️ **Code 3 was not visible in the crop and is deliberately not recorded — fill it the next time the list
is open.** 🛑 **AND THE TRAP CODE 7 SETS, because it reads harmless: on the pilot SEVEN of eight
prior-year assets sat on it, and that ONE choice produced the §280F caps, an eight-vehicle zero-mileage
table, the 24a/24b questions AND a 5-year life on tractors that are 3-year property.** ⇒ ☑️ **On a freight
fleet, treat code 7 as a red flag, not a default.**

📄 **The authority for taking a working fleet OUT of listed property — Form 4562 (2025) instructions,
`Listed Property → Exceptions`, verbatim:** *"Listed property does not include: … **3. An ambulance,
hearse, or vehicle used for transporting persons or property for compensation or hire;** or **4. Any
truck or van placed in service after July 6, 2003, that is a qualified nonpersonal use vehicle.**"*
🔑 **A freight carrier's tractors and trailers meet BOTH, and either alone is enough.**

**The mapping as SEEN on a real return's printed statement** *(Zakom 2025 — the codes appear beside
every asset)*:

| Code | What carried it | Recovery | Where it lands | §280F caps? |
|---|---|---|---|---|
| **`V-1`** | ⛔ **NOT SEEN ON ANY ASSET — it is the code the four 2025 over-the-road tractors BELONG on, and all four are keyed `V-7`** | **3-year**, 200DB, HY | **Part III line 19a** — ⚠️ **EMPTY on the keyed draft** | ⛔ **no** |
| **`V-4`** | the **2025 trailer ADDITIONS** — `2026 Reitnouer`, `2022 Benson Trailer`. ⛔ **NOT the `2025 Benson`, which decision 94 holds on `V-7`** | **5-year**, 200DB, HY | **Part III line 19b** *(or line 17 if a prior-year asset)* | ⛔ **no** |
| **`V-5`** | the **Audi** — a genuine passenger car | 5-year | **Part V** | ✅ **YES** |
| **`V-7`** | *"5-yr Truck, van, auto on tr…"* | 5-year | **Part V** | ✅ **YES** |

⚠️ **Treat this table as THIS FIRM'S OBSERVED MAPPING, not as ATX documentation** — **it was derived from
one return plus one screenshot.** ☑️ **Extend it the next time a different code is seen.**

✅ **PROOF THAT THE ROUTE WORKS, which is why it is stated as verified rather than guessed:** **two assets
were moved from `V-7` to `V-4` between two drafts of the same return, and on the new draft they had left
Part V, left the Part V Section B mileage table, lost their caps and picked up their full MACRS figures —
`70,540 × 20% = 14,108` *(the `2026 Reitnouer`)* and `67,050 × 32% = 21,456` *(the `2025 Benson`)*, both to
the dollar** — **and the mileage table went from NINE vehicles to SEVEN in the same pass** *(Zakom's 2025
paper §3BP ① items 2, 3 and 9)*.
⚠️ **THE `2025 BENSON` THEN WENT BACK TO `V-7` THE SAME DAY, AND THAT IS A RULING, NOT AN ERROR:** **Lilian's
principle is that an asset on the FILED prior return keeps its classification until the signer rules; only
assets NEW in the year are classified correctly from the start** *(that paper's decision 94)*. 🔑 **It does
not weaken the proof — the route was observed working and then deliberately reversed — and the `1,656` the
revert costs is the MEASURED size of a §280F cap falling away.**
⛔ **AND DO NOT SUBSTITUTE THE `2022 Benson Trailer` (43,650) AS THE SECOND ASSET. A session did exactly that
on 2026-09-30, believing it was correcting an error, and struck the firm's only measured observation of a cap
releasing.** **That trailer was NEW in 2025, sat on `V-4` from the start and was never in Part V, so its
`43,650 × 20% = 8,730` is ordinary first-year MACRS and proves nothing about the route.**
🔑 **Two assets on one client sharing the word *Benson* is exactly the collision §1B.9's closing rule warns
about — when two assets share a description, write NEITHER of them unqualified. The session that broke this
rule was the one applying it.**

#### ② 🔴 THE DISPOSITIONS TAB — and the two red warnings ATX prints on the screen

**Path: the asset → the `Dispositions` tab → `Disposition\\Bulk Disposition`, which has TWO sub-tabs on the
left: `Disposition Info` and `Casualty/Loss Info`.**

**On `Disposition Info`:** **`Type of disposition`** *(a dropdown — `Casualty/theft` and
`Sale/abandonment` are both confirmed)* · **`Date of disposition`** · **`Business use percentage`** ·
then **three columns — `Federal`, `Federal AMT`, `State`** — for **`Cost or other basis`**,
**`Basis adjustment`**, **`Accumulated depreciation`** and **`Gain/loss`** · then
**`Force 4797 section`**, **`Holding period`** and **`Type of property`**.

🛑 **THE TRAP: THE PROCEEDS ARE NOT ON THAT SCREEN FOR A CASUALTY.** ⛔ **On the pilot, `Gain/loss` showed
`0` in all three columns with the disposal fully entered, because a casualty's money goes on the OTHER
sub-tab — `Casualty/Loss Info` — as `Insurance or other reimbursment`.** ✅ **It prints under exactly that
label on the §179 disposition report.** 🔑 **A session reading a screenshot of `Disposition Info` alone
would conclude the proceeds were never entered.**

⚠️ **Two fields on that sub-tab were left blank on the pilot and are worth prompting for:**
**`Type of property`** *(the same report shows `1245` for the other disposal)* **and
`FMV before / after casualty or theft`.** ⓘ **Neither is needed to COMPUTE a casualty GAIN — proceeds less
adjusted basis settles it — but the inconsistency between two rows of one report is visible.**

**🔴 THE TWO RED WARNINGS ATX PRINTS, AND WHAT EACH ONE MEANS:**

| The warning, verbatim from the screen | What it is telling you |
|---|---|
| *"This disposition will NOT be reported on the 4797 per the form instructions. Please see report on the 179 Dispo tab on Schedule K-1"* | 🔑 **THE ASSET TOOK §179, SO ITS DISPOSAL IS THE SHAREHOLDER'S ITEM, NOT THE CORPORATION'S.** **It goes to `Dispositions of Property with Section 179 Deductions` → Schedule K line 17d → K-1 BOX 17 CODE K.** ⛔ **Page 1 line 4 does NOT move, and Form 4684 stays empty even on a casualty** |
| *"(DO NOT force to Part III unless LT Gains)"*, beside `Force 4797 section` | ☑️ **Leave `Force 4797 section` BLANK unless there is a long-term gain that genuinely belongs in Part III** |

🛑 **THE FIRST ONE COST THIS FIRM A WRONG PREDICTION.** **A session told the preparer to expect
*"+≈20,000 on page 1 line 4"* from a casualty; the asset had taken 50,000 of §179, so the gain went to box
17K and line 4 never moved** *(Zakom, 2026-09-28)*. ⇒ ✅ **BEFORE PROMISING WHAT A DISPOSAL MOVES, CHECK
WHETHER THE ASSET TOOK §179** — **the depreciation detail's `Sec. 179 Deduction` column answers it in one
look.** ⚠️ **And the same question decides whether Form 4684 will carry anything at all.**

#### ③ 🖥️ ATX'S OWN `Re-Check` WARNING LIST — read it, and know which ones are real

🔑 **ATX has a check-return button that prints a warning list, and the preparer sees it before anyone
else does.** ⛔ **Do not treat it as noise: on the pilot it caught a whole topic the firm's own review had
missed.** ✅ **Ask for the list — it is one screenshot — and work it warning by warning.**

**The ones seen so far, and what each is worth:**

| Warning | What it is | Stakes |
|---|---|---|
| *"Ending total assets should equal ending total liabilities and shareholders' equity"* | **Schedule L does not balance** | 🔴 **Blocks filing** |
| *"Entertainment expenses are no longer deductible per TCJA"* | ⚠️ **Informational — ATX prints it whenever anything is in the meals block. It is NOT saying it found entertainment** | ✅ **None, once the firm has established there is none** |
| 🔴 *"No activities have been marked as 'qualified' for Sec. 199A purposes"* | 🛑 **THE ONE THAT MATTERS MOST, AND THE EASIEST TO WAVE AWAY ON A LOSS YEAR.** **No K-1 box 17 code V and no Statement A means the shareholder gets no QBI information at all** | 🔴 **A qualified business LOSS still has to be reported — it carries forward against his future QBI. Omitting it does not save anything; it COSTS him the carryforward** |
| *"Assets placed in service after 2015 electing out of bonus depreciation should use the same Fed/AMT depreciation method"* | ✅ **Correct, and it surprises people:** the Form 4562 instructions say property that elects OUT of bonus *"will not be subject to an AMT adjustment for depreciation"* — **so Fed and AMT must match** | 🟡 **No corporate figure (corporate AMT is repealed) — it changes K-1 box 15, which the shareholder needs for his own Form 6251** |
| *"<asset> has different federal and state recovery basis, please review amounts for state disposition"* | **ATX keeps a separate STATE basis per asset because states decouple from bonus and §179** | 🟡 **Ask FIRST whether a state return is part of the engagement — if none is filed it is informational** |
| *"<asset> - Prior accumulated depreciation, 179 and bonus cannot exceed cost"* | ✅ **A real impossibility, and an independent corroboration when the firm has already found it by hand** | ⚠️ **It will NOT clear until the number changes — so if a clean list is wanted before filing, the prior-year owner has to rule** |

#### ④ 🔴 FORM 4797 — **LINE 10 IS NOT A FIELD.** The route is the `Input` tab, and it is a RECORD-BASED sheet

> **Lilian, 2026-09-28, sending the screen unprompted:** *"la línea 10 no es un campo de entrada, sino que
> hay que ir a la pestaña de input y ahí llenar esto. Quiero que lo guardes en este skill para un futuro,
> para que ahorremos tiempo."*

🛑 **THE MISTAKE THIS SUBSECTION EXISTS TO STOP:** **this firm told her to key a disposal *"on Form 4797
Part II line 10"*.** ⛔ **That line is COMPUTED and cannot be typed into.** ✅ **Every 4797 entry goes through
the form's own `Input` worksheet, which builds the lines.**

✅ **PATH: open Form 4797 → the worksheet tabs along the bottom → `Input`.**
**The tab strip observed, left to right:** `Pages & Worksheets` · `1` · `2` · **`Input`** · `Detail` ·
`Sec 179 Dispositions` · `Part I Cont` · `Part II Cont` · `Part III, pg 2 Cont` · `Ln 2 - Sec 1231` ·
`Ln 10 - Ord Gains` · `Unrecap 1250 Gain` · `AMT Page 1` …

🔑 **IT IS ONE RECORD PER DISPOSAL, NOT A GRID.** **The toolbar across the top carries
`|◀◀` `◀` `Record: 1` `▶` `▶▶|` plus `Add New Record` and `Delete Record`.**
⚠️ **So a second disposal is a NEW RECORD — not another row on the same screen** — **and `Detail` is the
tab that shows them all at once.**

**The fields on the `Input Sheet (4797)`, in the order they appear:**

| Block | Fields |
|---|---|
| **Top row** | `Description of property` · `F/S/J` · `Date acquired` · `Date sold` |
| **Second row** | `Type of property` · 🔑 **`Force 4797 section`** · `State postal code or Situs` · `Gross sales price` · `Holding period` *(computed)* |
| **Three columns — `Fed` · `AMT` · `State`** | `Cost or other basis, plus improvements and expense of sale` · `Depreciation allowed (excluding Sec. 179 if from pass-through)` · `Gain or (Loss)` *(computed)* |
| **Checkboxes** | `Elective Partial Asset Disposition` · `Required Partial Asset Disposition` · `sale to related party - disallow loss (IRC Sec 267)` · `residential rental property` · `Part III Assets are due to Casualty/Theft` · `sale is from a pass-through entity` · `Do not send to state tab` · `Use Fed amounts on state tab` · `Qualified Opportunity Fund Asset Gain Deferral (QOF)` |
| **Foot** | 🔴 **`Select activity:`** |

🔑 **FOUR THINGS ON THAT SHEET THAT ARE NOT OBVIOUS, AND EACH ONE HAS COST SOMETHING:**

1. ✅ **`Force 4797 section` is how an asset reaches Part II.** **Typing `Part II` there sends the record to
   Part II line 10 as ordinary gain.** ⚠️ **ATX will then WARN that the dates indicate a long-term holding
   period — that warning is the FORCE working, not an error.**
2. 🛑 **AN ASSET THE BOOKS NEVER CARRIED IS FORCED TO PART II — AND THE REASON IS EVIDENTIARY, NOT
   ARITHMETIC.** ⚠️ 🆕 **CORRECTED 2026-09-28 EVENING AGAINST THE IRS SOURCE; the first version of this
   item was wrong twice and is withdrawn** *(decision 113; it read: "PART III WOULD GIVE THE WRONG ANSWER —
   ATX computes §1245 recapture as min(gain, depreciation RECORDED)")*.
   🔑 **(a) IT IS THE IRS FORM'S ARITHMETIC, NOT THE SOFTWARE'S.** 📄 **Form 4797 line 25b: *"Enter the
   smaller of line 24 or 25a"*, and line 25a is *"Depreciation allowed or allowable from line 22"*.**
   ⛔ **Never tell a reviewer the software mis-computes Part III — it invites her to override it, and it is
   not true.**
   🔑 **(b) PART III IS NOT THE WRONG SECTION. IT IS AN UNFILLABLE ONE.** **Filled properly for a fully
   depreciated asset — line 21 = its cost, line 22 = the same cost — Part III returns the whole gain as
   ordinary through line 25b, the SAME destination as Part II line 10.** ⇒ **The reason to force Part II is
   that lines 21 and 22 DEMAND A COST, and for an asset the books never carried there is no supportable
   figure for either.** ✅ **Line 10 needs none: its column (g) is *(d) + (e) − (f)*, which returns the
   proceeds whether the cost is entered on both sides or left blank.**
   ⛔ **AND ZEROS IN LINES 21/22 ARE NOT A NEUTRAL CHOICE — they are an answer the form did not ask for, and
   they produce recapture of ZERO, which sends the whole gain to Part I → §1231 → the K-1 as CAPITAL GAIN.**
   ☑️ **THE TEACHING CASE IS USUALLY ON THE SAME RETURN: find a fully depreciated asset already in Part III
   and show that its gain became ordinary ONLY because line 22 carried its cost.**
3. 📄 **THE SHEET PRINTS TWO NOTES AT THE TOP, in blue, AND THE FIRST ONE IS THE IRS INSTRUCTION VERBATIM:**
   *"Report the sale of property previously deducted under the tangible property de minimis safe harbor on
   Part II (line 10) as ordinary gain. See Form 4797 instructions."* · *"Please enter Section 1244 Stock
   Losses on Form 8949."*
   ⚠️ 🆕 **BUT IT IS A SUPPORTING CITATION, NOT AN AUTHORITY YOU CAN LEAN ON — added 2026-09-28 evening.**
   🔑 **Every version of that rule is CONDITIONAL: Form 4797 (2025) Line 10 says *"and DEDUCTED the cost of
   the property under the tangible property de minimis safe harbor"*, and Pub. 544 says *"IF YOU DEDUCTED"*.**
   **The safe harbor is an ELECTION, made annually, and it requires accounting procedures in place at the
   start of the year** — ⚠️ **WRITTEN procedures only where the taxpayer has an applicable financial
   statement; a small S-corp without one needs procedures, not written ones.** ⇒ ⛔ **Quoting the banner as though it settled the matter overstates it, unless the firm can show
   the election was actually made.** ✅ **On a fully depreciated asset the stronger ground is §1245 itself —
   recapture runs on depreciation *allowed OR allowable*, so nobody has to have recorded it.**
4. 🔴 **`Select activity:` AT THE FOOT IS EASY TO LEAVE BLANK AND SHOULD NOT BE.** **ATX warns
   *"If applicable, enter an activity for calculation of business income limitation or passive gain
   (loss)"*.** ⚠️ **Once a §199A activity exists on the return this matters: §1245 ORDINARY gain from a
   business asset IS qualified business income, and an unlinked 4797 record may never reach the §199A
   computation.**

#### ⑤ ☑️ THE OTHER ROUTES CONFIRMED SO FAR

| What | Where in ATX |
|---|---|
| **The §179 / bonus elections** | **the `Elections` page.** 🔴 **An election OUT of bonus needs a STATEMENT there — turning the allowance off asset by asset produces the right figures with no election behind them** *(Form 4562 (2025) instructions: *"attach a statement to your timely filed return… indicating the class of property"*)*, **and it is made BY CLASS, covering ALL property in that class** |
| **The meals limit** | **inside the line-20 `Other Deductions` statement** — the row reads `Meals, subject to 50% limit`, then `Less disallowed`, then `Total meals and entertainment`. ⚠️ **Changing it moves FIVE other places: page 1 line 20, M-1 line 3b, M-2 line 5, Schedule K 16c and K-1 box 16C** |
| **A disposal with no depreciation history** *(an asset the books never capitalized)* | **straight onto Form 4797 Part II line 10 as its own row** — ⛔ **never added to the depreciation schedule** |
| **The §448(c) gross-receipts figure** *(K-1 box 17 code AC)* | **the K-1 line 17 input / the §448(c) worksheet.** ⚠️ **ATX computes it; find out what it computed before overwriting** |

### 4I · 📗 THE FINAL WORKSHEET — the one that is KEPT, and the only rule about it that is absolute

> 🗣️ **LILIAN, 2026-09-30:** *"cuando terminemos todo y la declaración esté ya a punto de ser enviada y
> revisada por el cliente, hagamos un worksheet final. Ese worksheet final, obviamente, no haga ninguna
> comparación con versiones anteriores, porque ese es el que va a quedar guardado en Double para revisar en
> años futuros si es necesario. No tiene ningún sentido que esté hablando de versiones anteriores: qué
> cambió, etcétera. Debería ser un documento completo donde explique, de inicio a fin, cómo se trabajó al
> cliente."*

🔑 **THIS IS A SECOND DOCUMENT, NOT A TIDY-UP OF THE FIRST.** ⛔ **The working workbook of §4D and the final
worksheet have OPPOSITE jobs, and trying to make one file do both produces a file that does neither.**

| | **§4D — THE WORKING WORKBOOK** | **§4I — THE FINAL WORKSHEET** |
|---|---|---|
| **Who reads it** | **The preparer, at the keyboard, while the return is being built** | **Whoever opens this client in a FUTURE YEAR — the reviewer, or a preparer who was never here** |
| **When it is built** | **Every day the return moves** | 🔑 **ONCE — when the return is finished and about to go to the client** |
| **What it is FOR** | **What to CHANGE, and what is left to do** | **What the return IS, and WHY** |
| **Version history** | ✅ **ESSENTIAL** — *"it read 20,000 until 30 September"* **is how she finds her place** | 🛑 **BANNED** |
| **Open items** | ✅ **The spine of it** | ⚠️ **Only those that SURVIVED into the filed return, written as what next year must carry forward** |
| **Where it lives** | **Handed over each time it changes; never committed** | 🔑 **SAVED IN DOUBLE, on the client** |

#### 🛑 THE ONE ABSOLUTE RULE: NO VERSION HISTORY, ANYWHERE IN IT

⛔ **BANNED, without exception:** *"(As written:)"* · *"was:"* · *"it read X until…"* · *"SUPERSEDED"* ·
*"CORRECTED IN REVIEW"* · *"an earlier version of this row said…"* · **any struck-through text** · **any
figure that is not the final one.**

🔑 **AND THE REASON IS NOT TIDINESS.** **The working paper's layering convention exists so the PREPARER can
see her own history while she works. A reader a year from now has no history to place it against** — **every
superseded figure is a live figure to them, and every *"corrected in review"* is a fact about a document
they cannot see.** ⇒ ⛔ **The layering that makes the working paper trustworthy makes the final worksheet
unreadable.**

⚠️ **THE TEST, when a sentence is borderline:** ***would this sentence still make sense to somebody who had
never seen any earlier version of this file?*** **If it needs one, it does not go in.**

#### ☑️ WHAT IT CONTAINS — her list, in order

| § | What |
|---|---|
| **1 · The client and the return** | **Who they are, what they do, what entity, what form, what year, who prepared and who signed** |
| **2 · Where their numbers came from** | 🔑 **WHERE THEIR PROFIT AND LOSS IS AND WHERE THEIR BALANCE SHEET IS** — **named files, named folders, named dates. She asked for this by name and it is the single most useful line in the document a year later** |
| **3 · Every document used** | **One row per document: what it is, where it is, what it STATED, and what it settled.** ⛔ **Not a file list — a list of what each one CONTRIBUTED** |
| **4 · What the client told us outside the documents** | **By email, by portal message, by voice, in a meeting — with the date and the words. This is the material that disappears first** |
| **5 · The return, form by form** | **Every figure with its form, page, part and line, and the arithmetic that produced it** |
| **6 · The decisions** | **Each one: what was decided, WHO decided it, when, and what the alternative was.** ⚠️ **Including the ones overruled — the objection travels with the decision** *(§4C)* |
| **7 · What is assumed, and what would change it** | **Every position resting on an assumption rather than a document, with the consequence if the assumption is wrong** |
| **8 · What carries forward** | 🔑 **What next year needs: basis, carryovers, elections made, replacement periods running, balances, unfinished items** |

#### ⏱️ WHEN IT IS BUILT — last, and only once

☑️ **Trigger: the return is finished and about to go to the client for review.** ⛔ **NOT while items are
open, because a final worksheet with open items in it is just the working workbook with the useful part
removed.** ✅ **If something is genuinely still open when the return is filed, it goes in section 7 or 8 as a
carry-forward, not as a to-do.**

#### 🔒 AND THE RULES THAT DO NOT CHANGE

✅ **IT IS IN ENGLISH** *(the standing rule — Julia reads it, and she does not speak Spanish)*.
✅ **IT IS NEVER COMMITTED TO THE REPO** — **it holds the client's figures, and figures live in
[`projects/tax-returns/`](../../../projects/tax-returns/) or in the client's systems, not in a second place.**
🔑 **IT IS SAVED IN DOUBLE, on the client**, **which is what makes it findable in a future year.**
⛔ **AND IT IS NOT AN ARTIFACT** — **an artifact is a URL that travels onward with no further act by the firm**
*(§4B)*.


## §5 · Every prepared return leaves a working paper

**Writing it is part of preparing the return** — [`projects/tax-returns/`](../../../projects/tax-returns/),
one file per return, from `_workpaper-template.md`.

**Why:** the session is deleted. The filed PDF survives and the reasoning behind it does not — the
derivations, the conventions decoded from the prior year, the traps, the judgement calls. Without
the file, next year starts from a blank page.

**Write it AS you go.** Sourcing reconstructed a week later is exactly what it exists to replace.

⛔ **It is the only place in the repo that holds client dollar figures, and the limit is absolute:**
never an **SSN/ITIN** *(including an entity's tax ID when it is one)*, a **bank, card, routing or account
number**, a **home street address**, a **date of birth**, or a **login, password, PTIN, EFIN or signature
PIN**. 🛑 **Being the folder for figures makes it no kind of exception to that list** — its
[README](../../../projects/tax-returns/README.md) is the authority and reads *"NEVER — no exception, and
no 'just this once'."* Read it first.

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

- 🔴 **A PREPARER HANDS YOU HER OWN KEYED DRAFT AND ASKS *"¿hay errores?"*** — **§4F**, added 2026-09-27 from
  the Zakom 1120-S. 🔑 **Write in every check that actually FOUND something and every one that produced a false
  positive**, because both cost the same currency: her time at the keyboard. **What §4F is built on:** the free
  cross-foots, **a cap masquerading as a computation** *(two assets of different cost showing the same
  depreciation)*, **decomposing a Schedule L imbalance instead of plugging it**, **checking a keyed position
  against the DECISIONS TABLE before calling it anything**, and 🛑 **transcribing the draft IN FULL first —
  §1C applies to the firm's own output, and on that return five separate findings were BLANK LINES.**

- 🔑 🆕 **THE PREPARER ASKS *HOW* SHE COULD HAVE CAUGHT IT HERSELF, not what the right figure is** —
  **§4F ④-bis, *THE RESIDUAL IDENTITY*, added 2026-10-01 from the Zakom 1120-S** *(Lilian: "necesito
  entenderlo para, en un futuro, poder encontrar este tipo de errores")*. 🛑 **TREAT THAT QUESTION AS THE MORE
  VALUABLE ONE AND ANSWER IT IN FULL, step by step with her own figures in it** — ⛔ **handing over the correct
  number again is the easy answer and it teaches nothing.** ✅ **The check ④-bis came out of was available to
  her with no document and no second opinion: her draft's `16d` disagreed with the equity section keyed beside
  it, and a figure derived from a balance sheet cannot disagree with that balance sheet.** ☑️ **Write in every
  such identity the firm finds — a figure that is DERIVED rather than read has one correct value, so it can
  always be re-derived and checked** — ⚠️ **and write in its LIMIT at the same time, because ④-bis catches a
  wrong residual and is blind to a wrong asset.**

- 🗣️ 🔴 **LILIAN SAYS SHE CANNOT FOLLOW AN EXPLANATION — *"muy densas… te saltas pasos… una nebulosa."***
  **§4G**, added 2026-09-28 from the Zakom 1120-S, **where every Form 4562 figure was correct and none of them
  was usable.** 🛑 **Treat that as a defect in the delivery, never as a gap in her.** ⛔ **And the response is
  to REWRITE the finding in §4G's five steps — never to explain the same thing again with more words around
  it.** 🔑 **Write in whichever step was the one that was missing**, because the failure mode repeats: a
  session holding a chain of causes for an hour compresses it into one sentence and cannot feel the gap.

- ⌨️ 🔴 **LILIAN SHOWS YOU AN ATX SCREEN, OR A KEYED RETURN PROVES A ROUTE WRONG.** **§4H**, started
  2026-09-28 when she sent the asset screen unprompted *"para que sepas cómo funciona ATX"*. 🔑 **She is
  the ONLY source for this — a session cannot see the software — so write it down the same day.**
  🛑 **And write in every route that turned out to be WRONG, with what it cost:** the firm has already
  promised *"+20,000 on line 4"* for a disposal that ATX correctly sent to K-1 box 17K, and named a
  *"listed property"* checkbox that does not exist in the product.

- 🖥️ 🆕 **THE PREPARER SENDS ATX'S OWN WARNING LIST.** **§4H ③.** 🔑 **Write in every warning seen, what it
  actually means and whether it is real** — **on the pilot, six warnings included one (§199A) that the
  firm's own review had entirely missed, and one that reads alarming and is informational.**
  ☑️ **Ask for that screenshot as a matter of course once a return is keyed; it is free and it is the
  software checking the firm's work.**

- **Lilian tells you the delivery missed something she needed.** §4 exists because she said so twice
  — first that the tables never located Form 8829, then that she needs the flow, the explanations
  and the checkboxes as well. **Her corrections ARE the standard; write them in rather than
  remembering them.**
- 📊 **LILIAN TELLS YOU SOMETHING ABOUT THE EXCEL WORKBOOK — a column she does not want, a column she
  does, a thing she cannot scroll past.** ⛔ **That is not a cosmetic note to apply once and forget.**
  She types a filed tax return out of that file, so the way it is laid out is part of the work, and
  §4D exists because three of her corrections arrived in a single message. 🔑 **Write each one in,
  with her words**, so the NEXT return's workbook is built that way instead of being corrected again.
  🛑 **AND WHEN SHE SAYS SOMETHING IS *MISSING* FROM THE WORKBOOK, DO NOT ASSUME SHE DID NOT FIND IT —
  OPEN THE FILE AND CHECK WHETHER IT RENDERS.** ⛔ **The 2026-09-24 case looked like a search problem
  and was a RENDERING one:** the text was in the cell and invisible on screen, because the row was fixed
  at 44pt against a block needing ~38 lines in a 30-character column. 🔑 **"It is there, scroll down"
  would have been wrong, and would have sent her back to a file that genuinely could not show it.**
  ✅ **Verify the cell holds it AND that the row can display it** *(§4D's fit check)*.
  ⚠️ **And be as sceptical of your own account of the cause as of the file.** ⛔ *The first write-up of
  this one named the wrong mechanism — Excel's 409.5pt ceiling — and back-computed a "450pt" that no
  shipped file ever had. The real defect was in a different sheet, in a different column, at 44pt. A
  review caught it from a dump taken earlier the same day.* 🔑 **A root cause written into a skill and a
  client file is read as established fact by everyone after you: check it against an artefact, not
  against the shape of the fix.**
- 🔵 **JULIA TELLS YOU A BRIEFING MISSED SOMETHING SHE NEEDED IN ORDER TO REVIEW.** §4C is written
  from Lilian's side of the handover — what the *preparer* thinks a reviewer needs. **Only Julia knows
  what she actually reached for and did not find. Her corrections are the standard for §4C exactly as
  Lilian's are for §4B**, and they go into ④ *(what she is owed without asking)*.
- 🔄 **A SESSION MISSES SOMETHING THE PERSON ASKING CAUGHT BY EYE.** ⛔ **That is a missing SCAN, not
  an attention failure** — and the fix is never "be more careful", which cannot be executed. Work out
  what sort would have made it visible, write the sort down as a step that RUNS, and require it to be
  **reported even when it finds nothing**, because a silent session and a session that never looked
  read identically. **§4A-M is the first of these; §4E is the second** — a session that had read the working paper hours
  earlier delivered a workbook built on a state of the return that was five merged PRs and one OPEN PR
  behind, and the fix is a re-read that RUNS before every deliverable, not a resolution to be careful.
- **Someone reports how the SOFTWARE behaves** — which worksheet feeds which form, which screen an
  entry has to be made on, which error it throws. That is knowledge no IRS document carries, and
  rule 9 says to record it.

- a new form's SOP is written, and something about **writing** it generalises
- a return turns up a trap that would have bitten any form
- the IRS renumbers or rewrites something and a session gets it wrong from memory
- Lilian rules on how a return should be presented or delivered
