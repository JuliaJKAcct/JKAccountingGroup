# iKids Group LLC — Monthly Bookkeeping & Close Runbook

> **Status:** Active · **Client:** iKids Group LLC (QBO via Double) ·
> **Owner of SOP:** Lilian · **Last updated:** 2026-08-14
>
> **Seeded 2026-08-11** from Lilian's account of how this client's bills reach us, plus the
> operating facts already established in
> [`../client-intelligence/clients/ikids-group.md`](../client-intelligence/clients/ikids-group.md).
> **Rewritten 2026-08-14**, when Lilian had to categorize a batch of transactions with Julia
> unavailable and nothing written down explained *why* the chart of accounts is shaped the way
> it is. The whole ledger and both financial statements were read end to end that day and the
> logic reverse-engineered from them; the result is *The four buckets*, the role→account map and
> the categorization rules below. It is no longer a seed — the reconciliation step is the one
> part still missing. Internal provenance — **stripped from the team-facing Hub view.**
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
  leased commercial space in **Fort Lauderdale, FL** (a former big-box retail unit). It is
  **pre-operational** — construction / build-out phase, **no revenue at all**. This single fact
  drives every categorization decision in this runbook.
- **Entity / tax:** LLC taxed as a **partnership** — files **Form 1065**, K-1s to the members.
  Income tax **is** our service; **1099 preparation** included; **annual report** we file.
- **Sales tax:** **N/A.** **Payroll:** **N/A** (pre-operational — no employees).
- **Systems:** QuickBooks Online (via Double). **Assigned bookkeeper: Lilian.**
- **Banking:** **two** business checking accounts at the same bank. One is the operating account
  through which effectively all activity runs; the second carries a nominal balance and is
  almost dormant. Both are on the QuickBooks bank feed.
- ⚠️ **The bank feed disconnected from QuickBooks on 2026-07-20 and has not been reconnected.**
  Nothing has flowed into the books since. **Until it is reconnected and the gap is backfilled,
  the books are incomplete from that date** — which also caps what we can report to the client
  (see *Client reporting*). Reconnecting it is the first thing to do, before any close.
- **How the project is funded — there is no revenue, so every dollar in comes from the owners.**
  Two routes, and they are **not** interchangeable: the **Manager funds the project by loan**
  (a long-term liability account in his name) and **members contribute capital** (one equity
  account per contributing member). Which route a given deposit takes is a fact about the
  transaction, not a preference — if it is not obvious, ask, never guess.
- **No Accounts Payable and no Accounts Receivable exist in the chart.** QuickBooks creates A/P
  automatically the first time a Bill is entered, so their absence is proof that **no bill and
  no invoice has ever been entered for this client** — every transaction in the file's history
  is a direct bank-feed Expense or Deposit. Keep that in mind before introducing Bills (see the
  open-decisions log): it is a structural change to how the client's books work, not a
  bookkeeping preference.
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
  _(to verify — see the open-decisions log)_.

## Monthly close process

The one thing that makes this client different from a plain bank-feed client: **the paperwork does
not come to us — we go and get it.** Work the mailbox first, then the ledger.

1. **Confirm the bank feed is actually connected before anything else.** It dropped on
   **2026-07-20** and nobody noticed until a month later. A disconnected feed does not announce
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
   kept. _(Lilian, 2026-08-11.)_
5. **Attach each document to its payment transaction in QuickBooks.** Match every downloaded bill
   (and its confirmation) to the corresponding transaction so the expense carries its own support.
   Where a bill has no matching transaction yet, or a payment has no bill, that is the exception to
   raise — not something to categorize around.
6. **Categorize the month through the four buckets.** The park has not opened: essentially
   everything is **capitalized**, and the only account on the P&L that should carry anything is
   **Bank Charges**. Work the decision in the order set out in *The four buckets* below, and
   override any QuickBooks auto-suggestion that expenses something.
7. **Read the Profit & Loss as a check on your own work.** This is the fastest review this client
   has, and it takes ten seconds: pull the P&L for the year to date. **Anything on it other than
   bank charges is a categorization to re-examine**, not a result. A pre-operational company that
   shows operating expenses is telling you something got expensed that should have been
   capitalized.
8. **Close gate — triage reads $0.** The `Uncategorized` accounts (asset, expense and income) must
   be **$0** before the month is called closed. A $0 triage is necessary, not sufficient: it does
   not mean the categories are right — step 7 is what tests that.

## The four buckets — where money goes before the park opens

**The question is never "what kind of expense is this?". It is "what did that money buy?"** Nearly
every mistake found in this client's history came from answering the first question instead of the
second — a utility bill *looks* like a utility expense, and while the park is closed it is part of
the cost of getting the building open.

Four destinations hold essentially everything, plus two funding routes and one narrow P&L exception:

| # | Bucket | Type | What lands here |
|---|---|---|---|
| 1 | **Construction in Progress (CIP)** | Other Current Asset | The cost of **building the physical park** in the leased space. Split by trade into sub-accounts: Architectural · Engineering · Materials · Labor · Permits & Fees · Insurance · Utilities · Travel · **General Contractor** |
| 2 | **Startup Costs (SC)** | Other Asset | The cost of **getting the business ready to open** — everything that is not the building itself. Sub-accounts: Marketing · Legal & Licensing · Accounting & Consulting · Travel · Office Rent · Payroll · Software |
| 3 | **Fixed Assets** | Fixed Asset | Things **bought outright that arrive ready to use** and have a life of their own: Furniture & Fixtures · Equipment · Computers & IT Equipment |
| 4 | **Security Deposit** | Other Asset | Money that **comes back**: the landlord's lease deposit, a utility company's deposit |
| — | **Funding in** | Liability / Equity | The Manager's funding → **his loan account**. A member's capital → **that member's equity account**. **Never income** |
| — | **The one P&L exception** | Expense | **Bank Charges** — account fees and wire fees. This is the only P&L account that should carry anything while the park is closed |

### The three boundaries that actually get confused

**① Building vs. business (bucket 1 vs. bucket 2).** Ask: *would this cost exist if the company
were opening in a different space?* If the cost exists **because this particular site is being
built out** — the architect's drawings, the contractor, the trades, the building permits, the
inspections and testing the permit requires, the power and water feeding the site during
construction, the builder's insurance — it is **CIP**. If it would exist **anyway**, because a
business is being started at all — the accountant, the entity's licences and legal work, software
subscriptions, market research, brand and marketing work, the pre-opening rent on the space — it is
a **Startup Cost**.

**② A deposit is only a Security Deposit if it comes back.** The word on the invoice decides
nothing. A landlord's lease deposit and a utility company's deposit are **refundable** — the
company is holding an asset it expects to recover, so they go to **Security Deposit**. A
**contractor's deposit under a construction agreement is a prepayment that gets consumed by the
work**; it is never returned, so it belongs in **CIP** with the rest of that contract. *(This one
was got wrong once already and corrected: a utility's deposit was first posted to CIP-Utilities and
later moved to Security Deposit, which is the right answer.)*

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
| **Our own monthly accounting fee**, and outside accounting / consulting | `SC - Accounting & Consulting` |
| **Business licences, registrations and legal work on the entity** | `SC - Legal & Licensing` |
| **Software subscriptions** (the QuickBooks subscription included) | `SC - Software` |
| **Market research, brand and business-development work**, and a consultant engaged to find licensors or partners — **including the expenses reimbursed to that consultant** | `SC - Marketing` |
| **Trade-show registration and attendance** for that same commercial effort | `SC - Marketing` _(to verify — see the open-decisions log)_ |
| **Travel by the company's own people** before opening | `SC - Travel` |
| **Rent on the space before the park opens** | `SC - Office Rent` |
| **Account fees, service charges, and wire fees — including a fee netted out of an incoming wire** | `Bank Charges` (P&L) |
| **The Manager putting money into the project** | His **loan** account (long-term liability) |
| **A member contributing capital** | **That member's** equity account |

## Categorization rules

These override any QuickBooks auto-suggestion — QBO is frequently wrong on this client precisely
because the business is pre-operational, and its suggestions are trained on companies that trade.

1. **Nothing reaches the P&L except bank charges.** Until the park opens, this client's Profit &
   Loss should be effectively **empty**. Treat any other P&L balance as a question, not a result.
   This is the single most useful check in the whole runbook because it is one report and it
   catches the error that actually recurs here.
2. **Ask what the money bought, not what kind of expense it is.** The four buckets above are
   answered by purpose, not by the vendor's line of business. A utility bill during construction is
   part of the building; a consultant's market study is part of starting the business.
3. **Building vs. business is a real distinction and it decides CIP vs. Startup Costs.** The test
   is whether the cost exists *because this site is being built out*, or because *a business is
   being started at all*. See boundary ① above.
4. **A deposit goes to `Security Deposit` only if it comes back.** A contractor's deposit is a
   prepayment consumed by the work and belongs in CIP; a landlord's or a utility's deposit is
   refundable and belongs in `Security Deposit`. The word "deposit" on the invoice is not evidence.
5. **Site utilities are capitalized while the park is closed.** Electricity and water for the site
   go to **`CIP - Utilities`**, never the P&L `Utilities` account, for as long as rule 1 holds.
   _(This drifted for four months in 2026 — the same vendors were posted to CIP early in the year
   and to the P&L from April onward. Corrected 2026-08-14 by moving the P&L balance back to
   `CIP - Utilities`.)_
6. **Bank and wire fees go to `Bank Charges` — including a fee netted out of an incoming wire.**
   When a wire arrives short of the amount sent, the difference is the bank's fee: the deposit is
   split, the net to the bank account and **the fee to `Bank Charges`**. It is not a startup cost
   and it is never posted to a parent account. _(Found 2026-08-14: an incoming-wire fee had been
   posted directly to the `Startup Costs` parent.)_
7. **Money in is never income.** This company has no revenue. Funds from the **Manager** are a
   **loan**; funds from a **member** are a **capital contribution** to that member's own equity
   account. Money going back out to a member is a **distribution**. Never `Sales`, never
   `Uncategorized Income`, and never the equity parent.
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
14. **When the park opens, the changeover is one dated batch — never a drift.** The date operations
    begin stops capitalization and starts normal expensing and depreciation. It is a decision
    somebody makes on a date, and the reclassification is done deliberately in a single batch on
    that date. **Never let it happen gradually, one transaction at a time** — that is exactly how
    the 2026 utilities split themselves across two accounts.

## Vendor & 1099 tracking — use Double

- The firm prepares this client's **1099s**, and a build-out paid directly out of the client's
  account means **real 1099 exposure**: individuals working the site are paid month after month,
  and the amounts add up fast. Track every payee crossing the **$2,000** threshold (2026), collect
  a **W-9**, and sweep **across every account that can hold a payment to a person or a firm** at
  each close — `CIP - Labor`, `CIP : General Contractor`, `CIP - Permits & Fees`,
  `CIP - Architectural`, and the Startup Costs sub-accounts. Double flags missing payees and 1099
  readiness — use it rather than eyeballing the ledger.
- **Because we pay the vendors ourselves, a missing W-9 is *our* gap to close, not the client's.**
  Collect it when the vendor is first paid, not in January.
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
- **The CIP / Startup Costs split is this client's extension of the standard**, and it is the right
  one for a pre-operational build-out. Keep new spend inside the existing sub-accounts; add a
  sub-account only when a genuinely new category of cost appears and nothing existing fits — as was
  done for `General Contractor` (2026-08-14).
- **Startup costs and construction in progress are capitalized — they belong in the asset ranges**,
  not in opex, for as long as the pre-operational rule holds. When the "operations begin" date is
  settled, the changeover is a deliberate, dated reclassification done in **one batch**, not a
  drift.
- **There is no `Ask My Accountant` account.** Triage on this client is the three `Uncategorized`
  accounts (asset, expense, income). Either create `Ask My Accountant` or keep reading the close
  gate as "the Uncategorized accounts" — but say which, because the two are used interchangeably in
  conversation _(to verify — see the open-decisions log)_.
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
| 2026-08-14 | Transaction report · Transactions by account | **through 2026-07-20** | The end date is not a choice — it is **the day the QuickBooks bank feed disconnected**, so it is the last date the books are complete to. The next report begins **2026-07-21**, and only once the feed is reconnected and the gap backfilled. _(Lilian)_ |

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
7. Build-out spend is **capitalized** into the right bucket — the building in CIP, the business in
   Startup Costs, outright purchases in Fixed Assets, refundable deposits in Security Deposit.
8. **No balance is sitting on a parent account** (`Construction In Progress`, `Startup Costs`,
   `Organizational Costs`) — run the account report on each parent over All Dates.
9. Money in/out from the owners is posted to the **loan** or to the **member's own equity account**,
   never to income and never to a parent.
10. Payees present on everything except contributions, distributions and transfers; any payee at or
    above **$2,000** has a **W-9** on file — and the sweep covered the labour *and* contractor
    accounts, not just one of them.
11. **Partial payments carry their outstanding balance** in the description, and the open balance is
    recorded in the client file.
12. **Close gate:** the `Uncategorized` accounts read **$0**.

## Open decisions log

| # | Question | Status | Notes |
|---|---|---|---|
| 1 | **When do "operations begin"?** — the date that stops capitalization and starts normal expensing / depreciation | Pending | Tied to the park's opening. Julia's call; until it is fixed, keep capitalizing. When it is fixed, rule 14 applies: one dated batch |
| 2 | Are any **other recurring vendors on autopay**, or is water the only one? | To verify | Only water is confirmed (Lilian, 2026-08-11). The rest are believed paid by us on request, but nobody has listed them |
| 3 | Where do the downloaded bills get **filed**? | Resolved | **Answered by Lilian 2026-08-11:** Julia's Google Drive → the client's folder → `Bookkeeping` → one folder per month. Both: filed in Drive **and** attached to the transaction |
| 4 | The **bank feeds and the reconciliation step** are not documented here yet | Pending | Add them to *Monthly close process* once established. The feed disconnection (decision 8) has to be resolved first — there is no point documenting a reconciliation against an incomplete ledger |
| 5 | Is the client's Drive folder linked in the client file's §7 the **same parent** that holds the `Bookkeeping` → month folders? | To verify | The path Lilian gave is by name, not by link. Confirm once, then put the direct link here so nobody hunts for it |
| 6 | Is there a **fixed day of the month** the mailbox should be worked? | To verify | Doing it at close works; an earlier date would catch a missing bill while the vendor still answers |
| 7 | **Should this client start using Bills (and therefore Accounts Payable)?** | Proposed | Raised 2026-08-14 by a partial payment on a construction contract, which left the outstanding balance recorded nowhere. Bills would fix it properly and QuickBooks creates A/P by itself — but it changes how the client's books work, and Julia set them up. **Her decision.** Until then, rule 10 is the workaround |
| 8 | **The QuickBooks bank feed has been disconnected since 2026-07-20** | Pending | Nothing has imported since. Reconnect it and backfill the gap; until then the books stop at that date, and so does anything we report to the client. Also worth asking why it dropped, so it is caught faster next time |
| 9 | **Are the trade-show registration charges `SC - Marketing` or `SC - Legal & Licensing`?** | To verify | They sit in Legal & Licensing today, probably because the bank descriptor contains the word "licensing" — but the organizer is the trade show the client's business-development consultant attended, which makes them part of that commercial effort. Check the receipt and move them if so, together with the consultant's fee |
| 10 | **A consultant's engagement was quoted as a fee plus expenses, and the deposit paid against it is not in the bank feed** | Pending | The final payment and the expense reimbursement are both accounted for; the earlier deposit is not in any of the bank-feed transactions. It may sit in a manual journal entry, in the second account, or have been paid personally. Find it and post it to the same account as the rest of the engagement |
| 11 | **What is on the `Startup Costs` parent from 2025?** | Pending | A balance sits directly on the parent from before 2026, in addition to the incoming-wire fee found and corrected in 2026. It came in through manual entries, so it is only visible from an account report on the parent over All Dates. Run it, and move whatever is there into the right sub-accounts (rule 8) |
| 12 | **Two large payments sit in `SC - Travel` that do not look like travel** | To verify | An international wire to a foreign bank and a substantial payment to a property-management company. Neither is obviously travel; the second looks like rent or a deposit. Identify both from the paperwork and reclassify. Together they are the large majority of that account |
| 13 | **Is triage `Ask My Accountant`, or the `Uncategorized` accounts?** | To verify | The account does not exist on this client; the close gate is written against `Uncategorized`. Create the account or standardise the wording — but pick one |
