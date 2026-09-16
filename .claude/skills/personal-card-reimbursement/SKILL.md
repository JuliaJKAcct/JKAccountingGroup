---
name: personal-card-reimbursement
description: >
  Separate an owner's PERSONAL CARD statement into business expenses the company
  reimburses and personal spending it does not, map each business line to the client's
  QuickBooks chart of accounts, and produce the expense report that supports the
  reimbursement. Use when an owner sends a card export "to be allocated to the company
  and reimbursed", when a quarterly accountable-plan reimbursement comes round, or when
  someone asks which lines on a personal card belong to the business. Carries the gate
  the whole job turns on — a bank description NEVER establishes business purpose, so a
  file without a purpose column can only be TRIAGED, not fully categorised — the three-tier
  output, the exclusions the firm already applies, and the QuickBooks mechanics (an expense
  + a "used personal card" liability, cleared by a payroll off-cycle run). Yes Team Corp is
  the pilot. Client figures and client payee names are NEVER committed.
---

# Personal-card business expenses → reimbursement

The owner of a closely held company pays for company things on a personal card. Once a
quarter they send the card export and ask for the business part back. This skill is how
the firm turns that export into (a) a defensible reimbursement figure, (b) entries that
land in the right QuickBooks accounts, and (c) the questions that have to be answered
before either of those is possible.

**Pilot:** Yes Team Corp (a one-owner marketing S-corp). **That client's live account map,
its cycle and its open decisions are in
[`projects/client-intelligence/clients/yes-team-corp.md`](../../../projects/client-intelligence/clients/yes-team-corp.md) §4** —
this skill holds the method, the client file holds the values. **Never copy the map back
into this file**: two copies drift, and the stale one keeps instructing.

> 🔒 **Write by ROLE, never by payee name.** "A coworking site", "a restaurant abroad",
> "a taxi app". A **vendor list is client data** and belongs in QuickBooks / Drive / Double,
> not in a firm-wide file that auto-publishes to the Knowledge Hub — and a role survives a
> change of vendor, which a name does not. *(The firm's rule, stated in
> [`bookkeeping-sop`](../bookkeeping-sop/): "a client's payee name has no business in a
> firm-wide file, and a reader who found one would take it as this rule loosening."
> Utilities, government agencies and — provisionally — retail chains and platforms are the
> only exceptions.)*

---

## 0. 🛑 THE GATE — a bank description is not a business purpose

**This is the whole skill. Everything else is bookkeeping.**

On a *company* card the default is that a charge is the company's, and the exceptions get
picked out. **On a personal card the default is reversed**: every line is presumed personal
until someone states the business reason. A merchant name cannot do that. A taxi-app ride,
a restaurant abroad and a hotel night read identically whether the owner was meeting a
customer or on holiday with his family, and **the company is claiming a deduction on the
difference.**

So before categorising anything, find the purpose. In practice it arrives one of two ways:

1. **The owner labels the file.** The Q2 2026 Yes Team export carried a per-line purpose
   column in the owner's own words — a business-trip meal, a meal with a potential client,
   a personal expense, a deposit on a business trip in a future year. That column is what
   made the job possible; the firm reviewed and mapped it.
2. **The firm already knows the trip.** A dated business event the firm can point to.

### ⛔ When neither exists: TRIAGE, and say plainly what triage did and did not settle

**"Cannot be categorised" is too strong and a session that stops there under-delivers.**
Two things are still settled without the owner, and they are worth real money:

- ✅ **Tier 3 is the firm's call, not his** — the exclusions in §1 hold whatever the purpose
  was, so they come off the claim immediately.
- ✅ **Tier 1 still takes what is business on its face** — a cost that could only be the
  company's however the owner spent his day (a coworking day pass, a subscription in the
  company's name, the firm's own fee).

**What triage cannot do is produce a reimbursement figure for the rest.** ⛔ Do not infer
purpose from the merchant, the country, the amount, or the fact that the owner sent the
file at all. *Sending a card export is a request, not a representation that every line on
it is business* — the Q2 file proves it: **four lines carried the owner's own "personal"
label.**

> ⚠️ **Yes Team, 2026-09-08 — the failure this gate was written from.** The owner sent the
> next quarter's export asking for the expenses to be "allocated to the company and
> reimbursed", with an **empty purpose column**. Hundreds of lines over ten weeks abroad,
> nearly all of it daily local transport and daily cafés. Categorising it by merchant name
> would have put weeks of ordinary living through the P&L as business development.
> **The answer was a question list plus a triaged report, not a single number.**

---

## 1. The three tiers

Sort every line into one of three, and report the three separately with their own totals.
**Never blend them into a single "business" figure.**

| Tier | What it is | What happens to it |
|---|---|---|
| **1 · Business** | The business character is established — a stated purpose, or a cost that is business on its face whatever the owner was doing | Goes on the report; reimburse |
| **2 · Ask the client** | Could be business, but only the owner's purpose settles it | Held; goes on the question list |
| **3 · Not reimbursable** | Excluded — see the two separate reasons below | Excluded, **with the reason stated to the client** |

**Tier 3 is decided by the firm and does not need the client**, which is why it is worth
separating: it shrinks the question list to things only the owner can answer.

### 🔑 Tier 3 fuses TWO different questions — know which one you are answering

They are not the same question, and the firm's current practice answers them the same way:

- **a · Not a company cost at all.** Personal by nature whatever the owner says — medical,
  pharmacy, clinics and personal care; personal purchases; investments and securities.
  **There is nothing to reimburse**, because the company never incurred it.
- **b · A company cost that is not deductible.** **Entertainment**, and **office meals /
  food brought into the office.** *(Julia's ruling, Q2 2026 — she removed a theme-park
  admission the owner had labelled as a trip with a client, and a grocery run labelled as
  office meals, and both exclusions were stated to him line by line with the reason. He
  accepted them without argument.)*

⚠️ **(b) is a judgement the firm has made, not an arithmetic fact.** Strictly, a
non-deductible cost genuinely incurred for the business *is* still a company cost an
accountable plan may reimburse — it would be reimbursed, booked, and then added back as a
non-deductible expense on **Schedule M-1 line 3 / Schedule K line 16c**
([`form-1120s-preparation.md`](../../../projects/sops/form-1120s-preparation.md)). **The
firm's practice is to take it off the claim instead.** 🛑 **Follow the practice; do not
invent the third route in a session.** If a case turns on it — a genuinely business
entertainment cost the owner is out of pocket for — **put it to Julia** and record her
answer here. *(Registered in §6.)*

### One thing that is business on its face, and one trap

- **Coworking / office space** — business whatever the trip was.
- 🔎 **The tail of a trip already established as business.** The ride home lands *after* the
  period the last report covered. **Check where the previous file ended** before treating
  the first days of a new file as unexplained.

---

## 2. 🔴 The card's Category column is the CARD's guess, not a classification

Consumer cards ship a `Category` column as a budgeting feature. It has been wrong in both
directions on this firm's clients' statements, and each direction costs something
different:

| Kind of line | The card said | What it actually was | Where it lands under §1 |
|---|---|---|---|
| A coworking site | `Personal` | An office cost | **Tier 1** |
| A restaurant abroad | `Health & Wellness` | Hospitality | **Tier 2** — still needs the purpose |
| A delicatessen abroad | `Health & Wellness` | Hospitality | **Tier 2** |
| A beach club | `Personal` | The owner labelled it a business-trip meal | **Tier 2** — his label is the evidence, not the venue |

### 🔎 An unrecognisable merchant: search the client's OWN ledger before the internet

A foreign merchant descriptor often cannot be identified online at all — a sole trader billing
under a personal name, a local operator with no web presence. **Look in the client's own books
first.** *(Yes Team, 2026-09-16: a travel agency that returned nothing useful from a web search was
already booked in the client's ledger, from the other card, to `Travel` with a vendor record and a
memo saying it was an airline ticket — and a later refund line repeated it. The firm had answered
its own question months earlier.)* **A prior quarter's report, the other card's feed and the vendor
list are all cheaper and better evidence than a search engine.** Where the web *is* the answer,
say which reading is **established** and which is an **inference** — a naming convention in another
language is a strong hint, not a fact.

🔑 **Read the table for one thing only: the category is not evidence, in either direction.**
⛔ **It is not a licence to resolve a line by reading the merchant name** — that is the
inference §0 forbids, and the rows above say which *tier* each kind lands in, never that
the name settled the purpose. Where the card's category and the merchant name disagree,
**show the client both and ask.** *(`method.md` — where two records disagree, show both,
then ask.)*

---

## 3. Mapping to the chart of accounts

🔴 **Load the [`double-mcp`](../double-mcp/) skill before the first Double MCP call** — it
carries the five data planes and the write-safety rules, and this step is a Double call.

Then get the client's **real** accounts: `get_transaction_accounts(clientId)`. **Never map
to an account name from memory** — these charts are small, client-specific, and use
sub-accounts (`Auto:Gas`, `Office Expenses:Software&Subscriptions`) whose parent is not the
posting account.

**The mapping rule:** map from **the owner's stated purpose**, never from the merchant and
never from the card's category. One purpose label → one account, recorded per client so the
quarters stay consistent. **For Yes Team the live map is in
[its client file](../../../projects/client-intelligence/clients/yes-team-corp.md) §4.**

### ⚠️ Where the meals go is a RETURN problem, not just a bookkeeping preference

Some clients map every meal into a business-development account rather than a `Meals`
account. **Keep whatever the client's prior quarters did** — consistency is worth more than
tidiness, and changing it is the reviewer's call.

🛑 **But say so loudly in the working papers, because the return preparer needs it:** the
1120-S adds back **50% of meals** at **Schedule M-1 line 3b** and reports the disallowed
half at **Schedule K line 16c**, where it also **reduces basis and AAA**. **If meals are
buried inside a business-development account there is no account balance to take 50% of**,
and the return silently over-deducts. ✅ **So whenever meals are mapped somewhere other
than `Meals`, record in the client file that they are in there and must be extracted for
the M-1 adjustment** — and flag it to whoever prepares the return.

---

## 4. How it lands in the books, and how the owner gets paid

Two halves, and they are separate events:

1. **Booking.** Each business line is an expense **debit** with the credit to a **"used
   personal card"** account — an **Other Current Liability**, i.e. the company now owes the
   owner. Personal lines are **not entered at all**: it is the owner's own card, so they
   are simply not the company's transactions. *(This is the opposite of a personal charge
   on a **company** card, which is a distribution / owner draw.)*
2. **Payment.** An **off-cycle payroll run** for the total, as a **non-taxable
   reimbursement** (accountable-plan style) — not wages, so nothing is withheld on it and
   it does not touch the owner's reasonable-compensation figure. The run clears the
   liability.

### 🔴 One owner can have TWO cards, treated in opposite ways — check before you book

The trap, and it is not hypothetical *(Yes Team, found 2026-09-16)*: the same owner had a second
card **in his own name that the COMPANY pays**, with its feed connected to QuickBooks. That one is
not a personal card at all in accounting terms — it behaves like a company card:

| | The card the report comes from | A card the company pays |
|---|---|---|
| Who pays it | the owner | **the company** |
| Feed connected | no | **yes** — categorised line by line |
| A business charge | expense + `used personal card`, then reimbursed | expense + the card account. **No reimbursement** |
| A personal charge | **never entered** | **`Distributions`** |

⚠️ **The two cards share merchants**, because it is one person living one life. **Before posting the
entry, check the connected card for the same charge** — a match on date *and* amount is a double
booking, and the report's own total will never reveal it. **Close the connected card's month
first**, or a charge categorised later can still collide.

### The entry itself

**Only the expense side is ours.** One journal entry, dated **the last day of the period covered**,
memo **`<n>-Reimbursement <MM-MM>`**, with **one debit line per account — the expense report's pivot,
row for row — and the total credited to the liability.** The pivot *is* the entry. **The payroll
provider posts the payment side by itself**; creating it by hand duplicates it.

⚠️ **The accountable-plan conditions are what make it non-taxable**: a business connection,
substantiation, and any excess returned. **Tier 2 exists to protect exactly this** — a
reimbursement of personal spending is not an accountable-plan reimbursement, it is **wages**,
and it is the owner who is exposed if it is examined.

---

## 5. Output

A workbook, delivered to the person — **never committed** (client figures, two-data-homes
rule). The shape the firm already uses, extended by the tiers:

| Sheet | Contents |
|---|---|
| `Original doc` | Every line as received, plus the proposed account, the QBO account, the tier and a review note. **Nothing is dropped** — the client must be able to find any line they ask about. |
| `1 - Business (reimburse)` | Tier 1, sorted by account, with the total. This is the reimbursement figure. |
| `2 - Ask client first` | Tier 2, **grouped by trip leg** with a subtotal each, so the owner answers per trip instead of per line. |
| `3 - Not reimbursable` | Tier 3 with the reason on every row — this sheet is what makes the exclusion conversation short. |
| `Summary` | The three tiers with per-account and per-leg subtotals, reconciling to the card total. |

### 🔴 Rows that are not purchases — get these right or the figure is wrong

A card export is not a list of expenses. Handle each row **type**, not just its amount:

- **`Return` / refund rows are positive.** ⛔ **A refund takes the tier of the charge it
  reverses — never its own.** It carries no purpose of its own, so tiering it on its
  merits drops it into tier 2 while the charge sits in tier 1, and **tier 1 is then
  overstated by the whole refund: the firm pays the owner money he has already had back.**
  Match refunds to their charge by merchant and amount before tiering anything.
- **`Payment` rows** — the owner paying the card off — are **not expenses at all**. Exclude
  them from every tier and say so, or they inflate whichever tier they land in.
- **Reconcile to the card.** The three tiers plus the excluded payment rows must add to the
  sum of every line in the file. ⚠️ **The reconciliation alone will not catch a
  mis-tiered refund** — the total still foots. Check the refunds separately.

### The client message

Follow the Q2 template — it worked and the owner accepted it without argument:

1. The reimbursement **amount and the date** it will be paid.
2. **What was removed and why**, listed line by line with the reason. Say who decided
   *("Julia reviewed the report")* — it is a professional judgement, not a clerical edit.
3. The questions, **grouped by trip, not by line**.

⛔ **Do not send the owner a several-hundred-row spreadsheet and ask him to annotate it.**
Group by root cause: one trip is one question. *(`method.md` — the internal checklist is
not the client message.)*

---

## 6. Open questions — for Julia or Lilian, never settled in a session

- ☑️ **Is a non-deductible cost that IS a genuine company cost reimbursed-and-added-back, or
  taken off the claim?** §1 (b): the firm's practice is to remove it; the alternative route
  (reimburse, book, add back at M-1 line 3 / K 16c) is the one the 1120-S SOP already
  documents. **Q2 2026 removed it and the client accepted. Ask before doing it any other way.**
- ☑️ **Should meals be split out of a business-development account into `Meals`?** §3 —
  today it is a manual extraction at return time. Julia's call.

## 7. Update this skill when…

- **A client answers the purpose question** and a pattern emerges worth reusing — in
  particular, if Julia rules on how an **extended stay abroad** is treated (a ten-week stay
  is not a "trip", and the tax-home question is different from the business-purpose one).
- **Either open question in §6 is answered** — write the answer in, and retire the row.
- **A second client** runs this process — give it its own section in **its own client file**,
  and keep this skill's §3 as the method only.
- **The entertainment or meals deduction rules change** — §1's tier-3 list is the firm's
  current reading and is dated to Q2 2026.
- **A health-plan reimbursement is actually set up** for a >2% S-corp shareholder — that is
  a payroll / W-2 route, not this one, and it needs its own mechanics written down.
