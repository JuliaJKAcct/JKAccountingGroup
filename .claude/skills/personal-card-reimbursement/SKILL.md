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
  file without a purpose column cannot be categorised, only triaged — the three-tier
  output, the entertainment and medical rules the firm already applies, and the
  QuickBooks mechanics (an expense + "Used personal card" liability, cleared by a Gusto
  off-cycle run). Yes Team Corp is the pilot. Client figures are NEVER committed.
---

# Personal-card business expenses → reimbursement

The owner of a closely held company pays for company things on a personal card. Once a
quarter they send the card export and ask for the business part back. This skill is how
the firm turns that export into (a) a defensible reimbursement figure, (b) journal
entries that land in the right QuickBooks accounts, and (c) the questions that have to
be answered before either of those is possible.

**Pilot:** Yes Team Corp (a one-owner marketing S-corp) — see
[`projects/client-intelligence/clients/yes-team-corp.md`](../../../projects/client-intelligence/clients/yes-team-corp.md) §4.

---

## 0. 🛑 THE GATE — a bank description is not a business purpose

**This is the whole skill. Everything else is bookkeeping.**

On a *company* card the default is that a charge is the company's, and the exceptions get
picked out. **On a personal card the default is reversed**: every line is presumed
personal until someone states the business reason. A merchant name cannot do that. `UBER
*TRIP`, `RESTORAN LEBYAZHIY` and `MARRIOTT` look identical whether the owner was meeting a
customer or on holiday with his family, and **the company is claiming a deduction on the
difference.**

So before categorising anything, find the purpose. In practice it arrives one of two ways:

1. **The owner labels the file.** The Q2 2026 Yes Team export carried a per-line purpose
   column in the owner's own words — `Travel Meals - Business Trip`, `Business Trip with
   the client`, `Personal Expense`, `Travel Deposit for Business Trip in Jan 2027`. That
   column is what made the job possible; the firm reviewed and mapped it.
2. **The firm already knows the trip.** A dated business event the firm can point to.

⛔ **If neither exists, the file cannot be categorised — say so and triage it instead.**
Do **not** infer purpose from the merchant, the country, the amount, or the fact that the
owner sent the file at all. *Sending a card export is a request, not a representation that
every line on it is business* — the Q2 file proves it: the owner's own labels marked four
lines `Personal Expense`.

> ⚠️ **Yes Team, 2026-09-08 — the failure this gate was written from.** The owner sent the
> next quarter's export with the wording *"expenses on my personal card, which should be
> allocated to the Yes Team and reimbursed to me"* and an **empty `Memo` column**. 208
> lines, ten weeks, four countries, no purpose on any of them. Categorising it by merchant
> name would have put six weeks of daily taxis and cafés through the P&L as business
> development. **The answer was a question list, not a number.**

---

## 1. The three tiers

Sort every line into one of three, and report the three separately with their own totals.
**Never blend them into a single "business" figure.**

| Tier | What it is | What happens to it |
|---|---|---|
| **1 · Business** | The business character is established — a stated purpose, or a cost that is business on its face whatever the owner was doing (a coworking day pass, the firm's own fee, a software subscription in the company's name) | Goes on the report; reimburse |
| **2 · Ask the client** | Could be business, but only the owner's purpose settles it | Held; goes on the question list |
| **3 · Not reimbursable** | Not a company cost, or a company cost that is not deductible — whatever the purpose was | Excluded, **with the reason stated to the client** |

**Tier 3 is decided by the firm and does not need the client**, which is why it is worth
separating: it shrinks the question list to things only the owner can answer.

### What lands in tier 3 every time

- **Entertainment.** Not deductible. *(Julia's ruling, Q2 2026 — she removed a theme-park
  admission booked as "Business Trip with the client". Applied since to karaoke bars, a
  hookah lounge and a nightclub.)* ⚠️ **A meal is not entertainment** — the two are
  separated on the return, and a restaurant bill stays in tier 1 or 2 on its own merits.
- **Office meals / food brought into the office.** Not deductible. *(Same Q2 ruling — a
  grocery run booked as "Office Meals" was removed.)*
- **Medical, pharmacy, clinics and personal care.** Never a corporate expense on this
  route. 🔵 **If the owner is a >2% S-corp shareholder and the firm runs a health plan for
  them, that is a different mechanism entirely** — the premium goes through payroll as
  W-2 Box 1 compensation, not through an expense reimbursement. **Raise it, never book it
  here.**
- **Personal purchases and investments** — clothing, jewellery, securities.

### Two things that are business on their face

Worth knowing, because the card's own category column gets them wrong:
- **Coworking / office space** — Chase filed a coworking day pass under `Personal`.
- **The tail of a trip already established as business** — the ride home lands after the
  period the last report covered. Check where the previous file ended.

---

## 2. 🔴 The card's Category column is the CARD's guess, not a classification

Chase's `Category` is a marketing feature. It has been wrong in both directions on this
client's own statements, and each way costs something different:

| Description | Chase said | It actually is |
|---|---|---|
| `WWW.PILOTO151.COM` | Personal | Coworking space — **business** |
| `BRACERA DEPADANS` | Health & Wellness | Reads as a Montenegro restaurant — **hospitality** |
| `SAPORI E COLORI DI PORTO` | Health & Wellness | An Italian deli *(Q2 — the firm mapped it to Travel Misc)* |
| `STABILIMENTO BALNEARE` | Personal | A beach club the owner labelled a business-trip meal |

**Use it as a sorting hint, never as evidence** — and where the card's category and the
merchant name disagree, **show the client both and ask** rather than silently overruling
one. *(`method.md` — where two records disagree, show both, then ask.)*

---

## 3. Mapping to the chart of accounts

Get the client's real accounts first — `get_transaction_accounts(clientId)` through the
Double MCP. **Never map to an account name from memory**; these charts are small and
client-specific.

**Yes Team Corp's map** (the owner's label → the QBO account), established Q2 2026:

| Owner's label | QBO account |
|---|---|
| `Airfare` | `Travel` — **unless the line is a taxi app**, then `Taxis` |
| `Travel Misc` (tolls, ferries, transfers, sundries) | `Travel` |
| `Travel Deposit for Business Trip in <future>` | `Travel` |
| `Transportation Local` · `Travel - Transportation Local-Overseas` | `Taxis` |
| `Travel Meals - Business Trip` · `Meals with potential clients` | `Business Development` |
| `Auto Expense` | `Auto:Other Auto Expenses` |
| `Auto Expense- Gas` | `Auto:Gas` |
| `Subscription` | `Office Expenses:Software&Subscriptions` |
| `Office Expense` | `Office Expenses:Other Office Expenses` |

ⓘ **The `Meals` account exists on this client's chart and Q2 did not use it** — every meal
went to `Business Development`. Keep the precedent, and if anyone wants meals split out,
that is a decision to put to Julia, not a tidy-up to perform.

---

## 4. How it lands in the books, and how the owner gets paid

Two halves, and they are separate events:

1. **Booking.** Each business line is an expense **debit** with the credit to the
   `Used personal card` account — an **Other Current Liability**, i.e. the company now owes
   the owner. Personal lines are **not entered at all**: it is the owner's own card, so
   they are simply not the company's transactions. *(This is the opposite of a personal
   charge on a **company** card, which is a distribution/owner draw.)*
2. **Payment.** An **off-cycle payroll run in Gusto** for the total, as a **non-taxable
   reimbursement** (accountable-plan style) — not wages, so no tax is withheld on it and it
   does not touch the owner's reasonable-compensation figure. The run clears the liability.

⚠️ **The accountable-plan conditions are what make it non-taxable**: a business connection,
substantiation, and any excess returned. **Tier 2 exists to protect exactly this** — a
reimbursement of personal spending is not an accountable-plan reimbursement, it is wages,
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

**Reconcile to the card.** The three tiers must add to the sum of every line in the file.
⚠️ **Refunds are `Return` rows with a positive amount** — include them so the total is net.
*(Yes Team Jun–Aug 2026 carried a travel-agency refund that exactly reversed an earlier
charge; filtering to negative amounts would have overstated the claim by its full value.)*

### The client message

Follow the Q2 template — it worked and the owner accepted it without argument:

1. The reimbursement **amount and the date** it will be paid.
2. **What was removed and why**, listed line by line with the reason. Say who decided
   *("Julia reviewed the report")* — it is a professional judgement, not a clerical edit.
3. The questions, **grouped by trip, not by line**.

⛔ **Do not send the owner a 150-row spreadsheet and ask him to annotate it.** Group by
root cause: one trip is one question. *(`method.md` — the internal checklist is not the
client message.)*

---

## 6. Update this skill when…

- **A client answers the purpose question** and a pattern emerges worth reusing — in
  particular, if Julia rules on how an **extended stay abroad** is treated (a ten-week stay
  is not a "trip", and the tax-home question is different from the business-purpose one).
- **Julia rules on splitting meals** out of `Business Development` into `Meals`.
- **A second client** runs this process — lift the Yes Team account map into a per-client
  section rather than generalising it.
- **The entertainment or meals deduction rules change** — §1's tier-3 list is the firm's
  current reading and is dated to Q2 2026.
- **A health-plan reimbursement is actually set up** for an owner — §1's 🔵 note becomes a
  live route and needs the payroll mechanics written down.
