# iKids Group LLC — Monthly Bookkeeping & Close Runbook

> **Status:** Active · **Client:** iKids Group LLC (QBO via Double) ·
> **Owner of SOP:** Lilian · **Last updated:** 2026-08-14
>
> **Seeded 2026-08-11** from Lilian's account of how this client's bills reach us, plus the
> operating facts already established in
> [`../client-intelligence/clients/ikids-group.md`](../client-intelligence/clients/ikids-group.md).
> **Rewritten 2026-08-14**, when Lilian had to categorize a batch of transactions with Julia
> unavailable and nothing written down explained *why* the chart of accounts is shaped the way
> it is. Both financial statements and every transaction the Double MCP exposes were read that
> day and the logic reverse-engineered from them; the result is *The five buckets*, the
> role→account map and the categorization rules below. It is no longer a seed — reconciliation is
> the one part still missing. Internal provenance — **stripped from the team-facing Hub view.**
>
> ⚠️ **What that read could and could not see, because several statements below rest on it.** The
> connector returned only **`Deposit` and `Expense`** rows. It did **not** return bills or journal
> entries, and the balance-sheet movement it explains is well short of the year's total — so
> **entries of other kinds exist and were not read.** Nothing here is a statement about what else
> is in the ledger. Where a fact came from a person rather than the ledger, it is attributed
> inline.
>
> The `.md` is the source of truth (maximum detail). Figures, **all logins**, the mailbox
> password, and **the vendor list** live in the firm's client systems (Google Drive / Double /
> QuickBooks) — **never in this repo.**
>
> 🔒 **A deliberate choice a future session must not "helpfully" undo:** the map below is written
> by **role** ("the general contractor", "the design/architecture firm"), never by vendor name.
> That is the two-data-homes rule — a vendor list is client data and belongs in QuickBooks — and
> it is also better documentation, because a role survives a change of vendor. Utilities and
> government agencies are named because a covering bookkeeper cannot identify them otherwise, and
> because they were already named in the client file. **Do not add company or personal names.**

## Client snapshot (operational, non-financial)

- **What the business is:** a **children's indoor play park** ("iKidsPark") being built out in a
  leased commercial space in **Fort Lauderdale, FL** — a former big-box retail unit. It is
  **pre-operational** — construction / build-out phase, **no revenue at all**. This single fact
  drives every categorization decision in this runbook.
- **Entity / tax:** LLC taxed as a **partnership** — files **Form 1065**, K-1s to the members.
  Income tax **is** our service; **1099 preparation** included; **annual report** we file.
- **Sales tax:** **N/A.** **Payroll:** **N/A** (pre-operational — no employees).
- **Systems:** QuickBooks Online (via Double). **Assigned bookkeeper: Lilian.**
- **Banking:** **two** business checking accounts — the client file records them as being at
  **different banks**. One is the operating account through which effectively all activity runs;
  the second carries a nominal balance and is almost dormant. Both were on the QuickBooks bank
  feed until it dropped.
- ⚠️ **The bank feed disconnected from QuickBooks on 2026-07-20 and has not been reconnected**
  *(Lilian, 2026-08-14)*. Nothing has posted since. **Until it is reconnected and the gap is
  backfilled, the books are incomplete from that date** — which also caps what we can report to
  the client (see *Client reporting*). Reconnecting it is the first thing to do, before any close.
- **The books have never used Bills or Invoices — as far as can be established.** The chart read
  on 2026-08-14 (which returns inactive accounts too) contains **no `Accounts Payable` and no
  `Accounts Receivable`**. QuickBooks creates A/P by itself on the first Bill, so its absence is
  strong evidence **no Bill has ever been entered**. ⚠️ **That is not a claim about the rest of
  the ledger** — journal entries never create A/P, and the read could not see them (see the
  provenance note above). **The consequence that matters is narrow and solid:** with no A/P, when
  a vendor invoice is paid in instalments **the balance still owed is recorded nowhere in these
  books.**
- **How the project is funded.** There is no revenue, so every dollar in comes from the owners,
  by one of two routes that are **not** interchangeable: **as a loan** (a long-term liability
  account) or **as a capital contribution** to a member's own equity account. Which one applies is
  decided by the paperwork, not by who sent the money — see rule 7, which is the rule people get
  wrong here.
- **Owners' language:** Russian / Ukrainian; correspondence in RU/UA.
- **Signing authority:** the LLC is **manager-managed with a single Manager** — anything needing a
  company-binding signature goes to him, not to the CFO and not to the other members. Names and
  percentages are in the client file / Double, never here.
- **Heavier than standard bookkeeping — the firm touches AP directly.** We **pay vendors from the
  client's account** (insurance, environmental report, city permits) and send the confirmations.
  The **water bill is the exception: it is on autopay.**
- **The client's AP mailbox — `ap.ikidsllc@gmail.com`.** A company mailbox (not a person's inbox)
  that the firm has access to. **Every vendor bill and payment confirmation arrives there**, and for
  several of them it is the **only** copy that exists: nothing is forwarded to us, and the client
  sends us nothing. The password lives in the client's vault, not here.
- **Where the paperwork is kept:** **Julia's Google Drive** → the folder named for the client →
  **`Bookkeeping`** → **one folder per month of the year**. Every invoice and receipt for this
  client goes there. The mailbox is where documents *arrive*; Drive is where they *live*. The
  client's Drive folder is linked from the client file's §7; whether that is the same parent that
  holds `Bookkeeping` is **not verified** — open the client folder by name rather than assuming
  *(to verify — see the open-decisions log)*.

## Monthly close process

The one thing that makes this client different from a plain bank-feed client: **the paperwork does
not come to us — we go and get it.** Work the mailbox first, then the ledger.

1. **Confirm the bank feed is actually connected before anything else.** It dropped on
   **2026-07-20** *(Lilian)* and was not noticed for weeks. A disconnected feed does not announce
   itself — the transaction list simply stops, and an empty month reads exactly like a quiet
   month. Open the banking screen and check the last imported date against the calendar. If there
   is a gap, **backfill it before working the month**, or everything below is done on an
   incomplete ledger.
2. **Open the client's AP mailbox and pull the month's bills and payment confirmations.** Sign in to
   `ap.ikidsllc@gmail.com` (password in the client's vault) and download **everything for the
   month** — vendor bills and the confirmations that a payment went through. Do this **every
   month**, as its own step: nobody forwards these and the client does not send them, so a month
   skipped is a month whose expenses sit in the books with no support behind them.
3. **The water bill: collect it, never pay it.** The water payment is **automatic** — the charge
   posts to the bank by itself, with no action from us. What is **not** automatic is the paperwork:
   the bill and its payment confirmation still have to be downloaded from the mailbox and matched to
   that transaction. **Do not pay it a second time** and do not chase the vendor for it — it is
   already paid.
4. **File the month's documents in Drive, in that month's folder.** Every invoice and receipt for
   this client lives in **Julia's Google Drive** → the folder named for the client →
   **`Bookkeeping`** → **one folder per month of the year**. Put the month's downloads in the
   folder for that month. This is the firm's copy of the paperwork and it is where a covering
   bookkeeper will look for it — the mailbox is where the documents *arrive*, not where they are
   kept. *(Lilian, 2026-08-11.)*
5. **Attach each document to its payment transaction in QuickBooks.** Match every downloaded bill
   (and its confirmation) to the corresponding transaction so the expense carries its own support.
   Where a bill has no matching transaction yet, or a payment has no bill, that is the exception to
   raise — not something to categorize around.
6. **Categorize the month through the five buckets.** The park has not opened: essentially
   everything is **capitalized**, and the only account on the P&L that should carry anything is
   **Bank Charges**. Work the decision in the order set out in *The five buckets* below, and
   override any QuickBooks auto-suggestion that expenses something.
7. **Read the Profit & Loss as a check on your own work.** This is the fastest review this client
   has, and it takes ten seconds: pull the P&L for the year to date. **Anything on it other than
   bank charges is a categorization to re-examine**, not a result. A pre-operational company that
   shows operating expenses is telling you something got expensed that should have been
   capitalized.
8. **Close gate — triage reads $0.** The `Uncategorized` accounts (asset, expense and income) must
   be **$0** before the month is called closed. A $0 triage is necessary, not sufficient: it does
   not mean the categories are right — step 7 is what tests that.

## The five buckets — where money goes before the park opens

**The question is never "what kind of expense is this?". It is "what did that money buy?"** Nearly
every mistake found in this client's history came from answering the first question instead of the
second — a utility bill *looks* like a utility expense, and while the park is closed it is part of
the cost of getting the building open.

Five destinations hold essentially everything, plus two funding routes and one narrow P&L
exception:

| # | Bucket | Type in this client's chart | What lands here |
|---|---|---|---|
| 1 | **Construction in Progress (CIP)** | Other Current Asset ⚠️ *see the note below* | The cost of **building the physical park** in the leased space. Split by trade into sub-accounts: Architectural · Engineering · Materials · Labor · Permits & Fees · Insurance · Utilities · Travel · **General Contractor** |
| 2 | **Startup Costs (SC)** | Other Asset | The cost of **getting the business ready to open** — everything that is not the building itself and not the entity's formation. Sub-accounts: Marketing · Legal & Licensing · Accounting & Consulting · Travel · Office Rent · Payroll · Software |
| 3 | **Organizational Costs** | Other Asset | The cost of **bringing the entity into existence**: formation, the operating agreement, state filing fees. Sub-accounts: Legal Formation · State Fees · Setup Costs. **A different tax animal from bucket 2** — see the note below |
| 4 | **Fixed Assets** | Fixed Asset | Things **bought outright that arrive ready to use** and have a life of their own: Furniture & Fixtures · Equipment · Computers & IT Equipment |
| 5 | **Security Deposit** | Other Asset | Money that **comes back**: the landlord's lease deposit, a utility company's deposit |
| — | **Funding in** | Liability / Equity | A documented loan → the **loan** account. A member's capital → **that member's** equity account. **Never income.** Rule 7 decides which |
| — | **The one P&L exception** | Expense | **Bank Charges** — account fees and wire fees. A materiality convention, not a principle (rule 6). It is the only P&L account that should carry anything while the park is closed |

> ⚠️ **Two chart-level findings recorded here rather than silently fixed**, because the books are
> Julia's and both are worth her eye before anyone changes them (decisions 14 and 15):
> **(a)** `Construction In Progress` is typed **Other Current Asset**, and construction in progress
> is by definition *not* current — it is not converting to cash within the year. It overstates
> current assets on every balance sheet this client produces.
> **(b)** The accounts carry **no numbers at all**, so the firm's range grammar is a target here,
> not a description.

### Why buckets 2 and 3 are separate, and the third thing that hides between them

For a **partnership**, three kinds of pre-opening spend get three different tax treatments, and the
chart already separates two of them:

- **Organizational costs (§709)** — bringing the entity into existence: formation, the operating
  agreement, state filing fees. Amortized over 180 months.
- **Startup costs (§195)** — getting the *business* ready to trade once the entity exists.
  Amortized over 180 months from the month the business begins.
- ⚠️ **Syndication costs — the trap, and there is no account for them.** Legal and professional
  work attributable to **admitting members and raising their capital** is **never deductible and
  never amortizable** — it is capitalized permanently. This client has **three members who have
  contributed capital**, so invoices of exactly that kind exist, and `Startup Costs - Legal &
  Licensing` is where they will land by default. **Flag any legal invoice that reads as
  member-admission or capital-raising work rather than treating it as a startup cost**
  (decision 16).

### The three boundaries that actually get confused

**① Producing the improvement vs. getting the business ready (bucket 1 vs. bucket 2).** Ask: *was
this cost incurred to **produce the physical improvement**, or to get the **business** ready to
open?* Costs of producing the improvement — the architect's drawings, the contractor, the trades,
the building permits, the inspections and testing the permit requires, the power and water feeding
the site during construction, the builder's insurance — are **CIP**. Costs of readying the business
— the accountant, the entity's licences, software subscriptions, market research, brand and
marketing work — are **Startup Costs**.

⚠️ **The shorthand "would this cost exist in a different space?" is a useful nudge but it is not
the test**, and pre-opening **rent** is where it breaks: rent is specific to *this* space, yet it
currently sits in `SC - Office Rent`. Rent during the construction period has a real argument for
capitalizing into the improvement instead. **This is unresolved and is decision 13 — leave it where
it is and raise it.**

**② A deposit belongs in `Security Deposit` only if its purpose is to be held and returned.** A
landlord's lease deposit and a utility company's deposit are held as security and come back — the
company holds an asset it expects to recover, so they go to **Security Deposit**. A **contractor's
deposit under a construction agreement is a prepayment against work**: it is credited against the
contract price as the work is performed, so it belongs in **CIP** with the rest of that contract.
*(It may well be refundable if the contract is cancelled — that is not the point. The test is what
the money is FOR, not whether it could ever come back.)* The word "deposit" on the invoice decides
nothing. *(This was got wrong once and corrected: a utility's deposit was first posted to
CIP-Utilities and later moved to Security Deposit, which is the right answer.)*

**③ A general contractor's payment cannot be split across trades — and should not be forced into
one.** A GC contract covers labour, materials, supervision and overhead together, and a **deposit**
is paid before any of it has been performed, so there is no schedule of values to allocate against.
That is why **`Construction in Progress : General Contractor`** exists as its own sub-account
(created 2026-08-14). Progress payments on the same contract go there too. Do not put them in
`CIP - Labor`, which holds payments to individuals.

### Where a whole category of spend goes — by role, not by name

| The payment is to… | Account |
|---|---|
| The **general contractor**, under the construction agreement (deposit or progress payment) | `CIP : General Contractor` |
| The **design / architecture firm** on its recurring project retainer | `CIP - Architectural` |
| An **individual working the site** (project management, site supervision, trades paid directly) | `CIP - Labor` |
| **Building permits and the inspections/testing the permit requires** — the county and the city's permit charges, and the private licensed vendors whose reports the permit depends on (fire protection, environmental/asbestos survey) | `CIP - Permits & Fees` |
| **Insurance on the build-out** (builder's risk and similar) | `CIP - Insurance` |
| **Electricity and water at the site while it is closed** — FPL, City of Fort Lauderdale, the property manager's utility rebills | `CIP - Utilities` ⚠️ **not** the P&L `Utilities` account |
| **Play equipment, furniture and fittings bought outright** for the park | `Furniture & Fixtures` (or `Equipment` / `Computers & IT Equipment` as fits) |
| The **landlord's lease deposit**, and a **utility company's deposit** | `Security Deposit` |
| **Forming the entity** — state filing fees, the operating agreement, formation legal work | `Organizational Costs` sub-accounts |
| Legal work on **admitting members or raising their capital** | ⚠️ **Stop — this is a syndication cost, and there is no account for it.** Flag it (decision 16) |
| **Our own monthly accounting fee**, and outside accounting / consulting | `SC - Accounting & Consulting` |
| **Business licences, registrations and legal work on the entity's operations** | `SC - Legal & Licensing` |
| **Software subscriptions** (the QuickBooks subscription included) | `SC - Software` |
| **Market research, brand and business-development work**, and a consultant engaged to find licensors or partners — **including the expenses reimbursed to that consultant** | `SC - Marketing` |
| **Trade-show registration and attendance** for that same commercial effort | `SC - Marketing` *(to verify — see the open-decisions log)* |
| **Travel by the company's own people** before opening | `SC - Travel` |
| **Rent on the space before the park opens** | `SC - Office Rent` *(where it sits today — decision 13 questions whether construction-period rent belongs in CIP)* |
| **Account fees, service charges, and wire fees — including a fee netted out of an incoming wire** | `Bank Charges` (P&L) |
| **Owner money in** | Rule 7 decides: the **loan** account where a loan is documented, otherwise **that member's** equity account |

## Categorization rules

These override any QuickBooks auto-suggestion — QBO is frequently wrong on this client precisely
because the business is pre-operational, and its suggestions are trained on companies that trade.

1. **Nothing reaches the P&L except bank charges.** Until the park opens, this client's Profit &
   Loss should be effectively **empty**. Treat any other P&L balance as a question, not a result.
   This is the single most useful check in the whole runbook because it is one report and it
   catches the error that actually recurs here. *(This is the **tax-basis** presentation the client
   is kept on — under GAAP, ASC 720-15 would expense start-up costs as incurred. Confirm the basis
   with Julia if a statement ever goes to a lender or an outside party: decision 17.)*
2. **Ask what the money bought, not what kind of expense it is.** The buckets above are answered by
   purpose, not by the vendor's line of business. A utility bill during construction is part of the
   building; a consultant's market study is part of starting the business.
3. **Producing the improvement vs. readying the business is a real distinction and it decides CIP
   vs. Startup Costs.** See boundary ① above — and note the shorthand it warns about.
4. **A deposit goes to `Security Deposit` only when its purpose is to be held as security.** A
   contractor's deposit is a prepayment credited against the contract and belongs in CIP; a
   landlord's or a utility's is held and returned, and belongs in `Security Deposit`. The word
   "deposit" on the invoice is not evidence.
5. **Site utilities are capitalized while the park is closed.** Electricity and water for the site
   go to **`CIP - Utilities`**, never the P&L `Utilities` account, for as long as rule 1 holds.
   *(Observed 2026-08-14: the same vendors were posted to `CIP - Utilities` through March 2026 and
   to the P&L `Utilities` account from April onward. **The reason for the change is not recorded**
   — it may have been a deliberate call, or a bank rule, or drift. Lilian moved the P&L balance
   back to `CIP - Utilities` the same day. If Julia had a reason for April, this rule is what she
   should push back on.)*
6. **Bank and wire fees go to `Bank Charges` — including a fee netted out of an incoming wire.**
   When a wire arrives short of the amount sent, the difference is the bank's fee: the deposit is
   split, the net to the bank account and **the fee to `Bank Charges`**. It is never posted to a
   parent account. *(Found 2026-08-14: an incoming-wire fee had been posted directly to the
   `Startup Costs` parent.)* ⓘ **Be honest about what this rule is:** strictly, pre-opening bank
   fees are themselves §195 startup costs — an operating business would deduct them, which is the
   §195 test. Sending them to the P&L is a **materiality convention** that keeps rule 1's
   ten-second self-check usable. It holds while the amounts are trivial; if bank charges ever
   become material, capitalize them instead.
7. **Money in is never income — and the paperwork decides whether it is debt or equity, not who
   sent it.** A deposit from an owner is a **loan** only where there is a **documented loan** — a
   note, repayment terms, interest. Otherwise it is a **capital contribution** to that person's own
   equity account, and money going back out is a **distribution**. ⚠️ **Do not use the sender's
   role as the test**: the Manager is himself a member, so "the Manager lends and members
   contribute" is not a rule, it is a description of what the paperwork currently says. For a
   partnership this is not cosmetic — a partner loan is debt under §752, allocated to the lending
   partner and changing his basis, and it lands on the K-1s. **If the paperwork for an advance is
   not on file, ask before posting it.** Never `Sales`, never `Uncategorized Income`, and never an
   equity parent.
8. **Parents never receive postings — post to sub-accounts only.** `Construction In Progress`,
   `Startup Costs` and `Organizational Costs` are grouping accounts. A balance sitting on a parent
   is a defect: find it with an account report on the parent itself over **All Dates**, and move it
   to the sub-account it belongs in.
9. **Every transaction gets a payee/vendor**, except member contributions, distributions, and
   transfers between the company's own accounts. An unidentifiable descriptor goes to triage —
   never a guess.
10. **Categorizing a partial payment records the cash, not the commitment.** When a payment settles
    only part of an invoice, the balance still owed appears **nowhere** in these books — there is no
    A/P (see the snapshot). So whenever you post a partial payment: write the invoice number and the
    amount still outstanding into the transaction's description, and record the open balance in the
    client file. Otherwise the only trace of what the company owes is the paper invoice.
11. **Every bill we pay is a document we must hold — in two places.** The firm pays vendors from the
    client's account, so the only trail is the one we file: the document goes into **Drive, in that
    month's `Bookkeeping` folder**, and gets **attached to the transaction** in QuickBooks. A
    payment we made with nothing attached is an open item, not a closed one.
12. **The water bill is autopaid — treat the bank charge as expected.** It will appear without any
    instruction from us. Its bill comes from the mailbox, not from the client.
13. **A reimbursement to a consultant belongs with that consultant's fee, not split off as travel.**
    When an engagement is quoted as a fee "plus expenses", the expenses are part of the cost of the
    engagement. Post the whole payment to the account that holds the engagement. `SC - Travel` is
    for **the company's own** travel.
14. **The changeover is one dated batch — never a drift. And it is TWO dates, not one.** Watch that
    they don't get collapsed:
    - **When the business begins** stops §195/§709 capitalization and starts the 180-month
      amortization. One date, one deliberate batch on that date.
    - **When each asset is placed in service** starts *its* depreciation — asset by asset, and it
      can precede opening (equipment installed and ready for use is placed in service even if the
      doors are shut).

    Somebody decides both; neither happens gradually, one transaction at a time. **That is exactly
    how the 2026 utilities ended up split across two accounts.**

## Vendor & 1099 tracking — use Double

- The firm prepares this client's **1099s**, and a build-out paid directly out of the client's
  account means **real 1099 exposure**: individuals working the site are paid month after month,
  and the amounts add up fast.
- **Collect a W-9 from every payee, before or at the first payment — do not wait for a threshold.**
  You cannot know at first payment who will cross it, and paying a vendor with no TIN on file is
  what creates **24% backup-withholding** liability under §3406. Since **the firm pays these
  vendors itself**, that exposure is ours. A missing W-9 is **our** gap to close, not the client's.
- **The W-9 is also what tells you whether a 1099 is due at all.** **Payments to corporations are
  exempt from 1099-NEC** — with **attorneys** (and medical/health-care payments) as the standing
  exceptions, which are reportable whatever the entity type. That matters here: the design firm and
  the general contractor may well be corporations, so **do not issue on the basis of the account a
  payment sits in.** Read the W-9.
- **Then apply the reporting threshold** — **$2,000** (2026) — and sweep **across every account
  that can hold a payment to a person or a firm**: `CIP - Labor`, `CIP : General Contractor`,
  `CIP - Permits & Fees`, `CIP - Architectural`, and the Startup Costs sub-accounts. Double flags
  missing payees and 1099 readiness — use it rather than eyeballing the ledger.
- **The individuals are the exposure, not just the companies.** Recurring monthly payments to a
  person for site work pass the threshold within the first few months of the year.

## Chart of accounts conventions

- The firm's number-prefix grammar is the target here as everywhere: **100s assets · 200s
  liabilities · 300s equity · 400s income · 500s COGS · 600s opex · 800s other income · 901
  depreciation · 997/998/999 triage.** See the firm standard,
  [`chart-of-accounts-standard.md`](./chart-of-accounts-standard.md).
- ⚠️ **This client's accounts carry no numbers yet** — every account has a blank number field, so
  the grammar above is a target, not a description. Numbering is safe to apply (renames and
  renumbers do not disturb history) and is worth doing before the file gets bigger.
- **The CIP / Startup Costs / Organizational Costs split is this client's extension of the
  standard**, and it is the right one for a pre-operational build-out. Keep new spend inside the
  existing sub-accounts; add a sub-account only when a genuinely new category of cost appears and
  nothing existing fits — as was done for `General Contractor` (2026-08-14).
- **Capitalized pre-opening spend belongs in the asset ranges**, not in opex, for as long as the
  pre-operational rule holds. When the changeover dates are settled, it is a deliberate, dated
  reclassification done in **one batch**, not a drift (rule 14).
- ⚠️ **`Construction In Progress` is typed Other Current Asset and should not be** — see the note
  under the buckets table, and decision 14. A type change is safe on a file with no closed year,
  but it is Julia's call.
- **There is no `Ask My Accountant` account.** Triage on this client is the three `Uncategorized`
  accounts (asset, expense, income), and the close gate and checklist are written that way. Whether
  to create the account or keep the wording is decision 12.
- Classify first, restructure the chart second. Renames and renumbers are safe; merges and
  type-changes on a year with activity are not.

## Client reporting — what iKids asks for, and how far we have sent it

**This client asks for its own reports periodically**, unprompted by us, and the two they ask for
are the **Transaction report** and the **Transactions by account** report. The request comes every
few months, which is exactly long enough for nobody to remember where the last one stopped.

**So the rule is: every delivery gets a row below, and the row records the period the report
COVERED — not the date it was sent.** The next report starts the day after the last covered date.
Without that, either the client gets months of duplicated rows or a gap goes out unnoticed.

⚠️ **Never generate the next report from a date later than the last covered date without first
confirming the bank-feed gap has been backfilled.** The two interact: the feed disconnected on
2026-07-20, so anything after that date is missing from the books, and a report run "from where we
left off" would silently present an empty period as a quiet one.

| Sent | Report(s) | Period covered | Notes |
|---|---|---|---|
| 2026-08-14 | Transaction report · Transactions by account | **through 2026-07-20** | The end date is the last date the ledger carries data — **the day the QuickBooks bank feed disconnected** *(Lilian)*. The next report begins **2026-07-21**, and only once the feed is reconnected and the gap backfilled. *(Lilian)* |

## Monthly review checklist (what the reviewer verifies)

1. The **bank feed is connected** and the last imported transaction is where the calendar says it
   should be — no silent gap.
2. The **AP mailbox was worked this month** — the month's bills and confirmations downloaded.
3. The **water bill** for the month is in hand **and attached** to the automatic payment — and was
   **not** paid a second time.
4. The month's documents are **filed in Drive**, in that month's `Bookkeeping` folder.
5. Every bill has a matching transaction, and every payment we made has its bill attached.
6. **The Profit & Loss carries nothing but bank charges.** Any other balance on it is a
   categorization to re-open.
7. Pre-opening spend is **capitalized** into the right bucket — producing the improvement in CIP,
   readying the business in Startup Costs, forming the entity in Organizational Costs, outright
   purchases in Fixed Assets, security deposits in Security Deposit.
8. **No balance is sitting on a parent account** (`Construction In Progress`, `Startup Costs`,
   `Organizational Costs`) — run the account report on each parent over All Dates.
9. Money in/out from the owners is posted per rule 7 — to a **documented loan** or to the
   **person's own equity account**, never to income and never to a parent.
10. **Every payee has a W-9 on file**, collected at or before first payment — not only those past
    the reporting threshold. Payees present on everything except contributions, distributions and
    transfers. The 1099 sweep covered the labour **and** the contractor accounts, and the corporate
    exemption was applied from the W-9 rather than from the account.
11. **Partial payments carry their outstanding balance** in the description, and the open balance is
    recorded in the client file.
12. **Close gate:** the `Uncategorized` accounts read **$0**.

## Open decisions log

| # | Question | Status | Notes |
|---|---|---|---|
| 1 | **When does the business begin, and when is each asset placed in service?** — the two dates rule 14 keeps apart | Pending | The first stops §195/§709 capitalization; the second starts depreciation asset by asset and can come earlier. Julia's call; until they are fixed, keep capitalizing |
| 2 | Are any **other recurring vendors on autopay**, or is water the only one? | To verify | Only water is confirmed (Lilian, 2026-08-11). The rest are believed paid by us on request, but nobody has listed them |
| 3 | Where do the downloaded bills get **filed**? | Resolved | **Answered by Lilian 2026-08-11:** Julia's Google Drive → the client's folder → `Bookkeeping` → one folder per month. Both: filed in Drive **and** attached to the transaction |
| 4 | The **reconciliation step** is not documented here yet | Pending | Add it to *Monthly close process* once established. Decision 5 has to be resolved first — there is no point documenting a reconciliation against an incomplete ledger |
| 5 | **The QuickBooks bank feed has been disconnected since 2026-07-20** *(Lilian)* | Pending | Nothing has posted since. Reconnect it and backfill the gap; until then the books stop at that date, and so does anything we report to the client. Also worth asking why it dropped, so it is caught faster next time |
| 6 | Is the client's Drive folder linked in the client file's §7 the **same parent** that holds the `Bookkeeping` → month folders? | To verify | The path Lilian gave is by name, not by link. Confirm once, then put the direct link here so nobody hunts for it |
| 7 | Is there a **fixed day of the month** the mailbox should be worked? | To verify | Doing it at close works; an earlier date would catch a missing bill while the vendor still answers |
| 8 | **Should this client start using Bills (and therefore Accounts Payable)?** | Proposed | Raised 2026-08-14 by a partial payment on a construction contract, which left the outstanding balance recorded nowhere. Bills would fix it properly and QuickBooks creates A/P by itself — but it changes how the client's books work, and Julia set them up. **Her decision.** Until then, rule 10 is the workaround |
| 9 | **Are the trade-show registration charges `SC - Marketing` or `SC - Legal & Licensing`?** | To verify | They sit in Legal & Licensing today. The show's organizer is the trade show the client's business-development consultant attended, which would make them part of that commercial effort. Check the receipt and move them if so, together with the consultant's fee |
| 10 | **A consultant's engagement was quoted as a fee plus expenses, and the deposit paid against it was not found** | Pending | The final payment and the expense reimbursement are both accounted for; the deposit is in none of the transactions the connector returned — which does **not** mean it is not in the ledger (bills and journal entries were not readable). Look for it in QuickBooks directly, in the second account, or ask whether it was paid personally |
| 11 | **What is on the `Startup Costs` parent from 2025?** | Pending | A balance sits directly on the parent from before 2026, in addition to the incoming-wire fee found and corrected in 2026. It did not come through the transactions the connector returned, so only an account report on the parent over All Dates will show it. Run it, and move whatever is there into the right sub-accounts (rule 8) |
| 12 | **Is triage `Ask My Accountant`, or the `Uncategorized` accounts?** | Proposed | Settled on the facts: the `Ask My Accountant` account **does not exist** on this client, and the close gate and checklist are written against `Uncategorized`. What is open is only the choice — create the account, or keep the current wording. Pick one so the two stop being used interchangeably in conversation |
| 13 | **Does construction-period rent belong in CIP rather than `SC - Office Rent`?** | To study | Raised 2026-08-14. Rent on the space during the build-out has a real argument for being capitalized into the improvement, which would change its recovery period. It sits in `SC - Office Rent` today and **stays there until Julia rules** — the whole prior-year balance is on that treatment |
| 14 | **`Construction In Progress` is typed Other Current Asset** | Proposed | CIP is not a current asset — it does not convert to cash within the year — so this overstates current assets on every balance sheet. A type change is safe on a file with no closed year, but the QBO Type drives the tax mapping, so it is Julia's call |
| 15 | **No account in this client's chart carries a number** | Proposed | The firm's range grammar is a target here, not a description. Numbering is safe (renames/renumbers do not disturb history) and is easier now than later |
| 16 | **Syndication costs have nowhere to go** | Proposed | Legal work on **admitting members or raising capital** is permanently non-deductible for a partnership — it is neither a §195 startup cost nor a §709 organizational cost — and this client has three members who contributed capital. By default such invoices land in `SC - Legal & Licensing`. Review what is already there, and decide with Julia whether to open a `Syndication Costs` account |
| 17 | **Which basis are these books kept on?** | To verify | Rule 1's "the P&L should be empty" is the **tax-basis** presentation; GAAP (ASC 720-15) would expense start-up costs as incurred. It has never been written down. One line from Julia settles it — and it matters the moment a statement goes to a lender or an outside party |
