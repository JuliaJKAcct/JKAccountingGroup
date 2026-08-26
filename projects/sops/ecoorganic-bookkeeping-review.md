# Ecoorganic — Monthly Bookkeeping & Review Runbook

> **Status:** Active · **Client:** ECOORGANIC USA LLC (QBO) · **Owner of SOP:** Lilian · **Started:** Jul 2026 · **Last updated:** 2026-08-26
>
> Born from the July 2026 cleanup of the client's books. A staff bookkeeper does
> the monthly work; Claude acts as the **independent reviewer** using the rules
> below. This file holds the *procedure and rules only* — working papers with
> client figures (audit workbooks, categorization sheets, reconciliations) live
> in the firm's client systems (Drive / Double / QuickBooks), never in this repo.
>
> **Cleanup in progress — rules are being validated, not assumed (Jul 2026).**
> The firm recently took this client over, so we are still learning how the
> business actually runs and how the books were kept before us. The rules below
> are being **checked against the client's own history as the cleanup proceeds**;
> treat anything tagged *(to verify)* as provisional until confirmed, and expect
> thresholds and categories to change as we learn. Nothing here assumes the prior
> bookkeeping was correct — the goal is to make it correct, not to preserve what
> was done. When a rule changes, the reviewer updates it here, dates it, and
> reclassifies the affected transactions in one batch.

## Client snapshot (operational, non-financial)

- Spray-foam insulation contractor, Connecticut. Owner: Artem Markarian.
- Books in QuickBooks Online, managed through Double.
- **Two connected feeds, and only ONE of them is the business's** *(corrected
  2026-08-26 — the runbook previously said one)*:
  - **`Checking Chase 8310` — the business operating account.** This is the one
    that gets cleaned. Customer deposits, vendor payments, the subcontractor
    Zelles and the card activity all run through it.
  - **`Artem Personal` — the owner's personal account (Chase …2935), connected
    to QuickBooks BY MISTAKE.** ⛔ Out of scope: see rule 18. Its presence in the
    file is what makes rule 12 necessary.
- **All other bank and card accounts are disconnected**; which of them are
  actually closed is **pending client confirmation** — until then they are frozen
  (rename-only, no new postings, no cleanup).
- Check- and cash-heavy business; many Zelle payments to subcontractors.
- 🔒 **The client's own subcontractors and payees are written by ROLE, not by
  name** — *the recurring insulation subcontractor*, not a person. A role survives
  a change of vendor, and a payee list is client data that belongs in QuickBooks
  and Double, not in a repo that auto-publishes to the Hub. The mapping from role
  to name lives in the QBO vendor list and in Double. Don't "helpfully" fill the
  missing names back in *(firm rule, [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/SKILL.md),
  2026-08-14)*.
  ✅ **Retail chains and platforms ARE named here — Sunoco, Home Depot, Amazon,
  U-Haul, Upwork — and Lilian ruled that explicitly allowed on 2026-08-26** when
  asked: *"el runbook puede nombrar cadenas retail sin problema."* The reason it is
  safe is the reason it is useful: a chain is a **category of merchant**, not one of
  the client's people, and a covering bookkeeper cannot identify the category any
  other way. **The line stays exactly where it is:** merchant categories named, the
  **client's own payees by role**.

## Categorization rules

These override any QuickBooks auto-suggestion. During the cleanup we verified
QBO's suggestions are frequently wrong for this client — never accept them
blindly.

1. **Checks and deposits are never assumed.** Download the check/deposit image
   from the bank; the payee and memo decide the category. Every deposit must
   carry a customer (or the owner, for contributions) — **no nameless postings
   to Sales**.
2. **Gas-station threshold — $25 (updated 2026-07-21).** At a gas station /
   convenience store (Sunoco, Shell, Gulf, Citgo, Exxon, Pilot, Cumberland
   Farms, 7-Eleven, …):
   - **≥ $25** → fuel → *Auto Expenses: Vehicle gas and fuel* (treated as a real
     business fill-up). The $25 line is a **proxy** for "fuel vs. snack": if a
     charge is clearly *not* fuel — an obvious food/snack run at a
     convenience-store counter — it follows rule 3 → distribution regardless of
     amount.
   - **< $25** → **Owner's distribution** — *not* a business expense. **Why:** a
     small charge at a gas station is almost always a snack, drink, or quick food
     run — not a tank of fuel — so it doesn't qualify as a business gas expense;
     it's personal and belongs in owner distributions. A QBO bank rule is already
     set up to route these automatically. *(This replaces the earlier $30 line
     and the old "small gas → meals holding" handling.)*
   - *Reviewer watch:* historically these small charges were scattered — many
     convenience charges (7-Eleven, Cumberland Farms) were coded to **Meals**,
     some sub-$25 fuel to **Gas & Fuel**, and a few to the **Auto Expenses
     parent**. Applying this rule means reclassifying those to distributions, so
     check Meals and the Auto Expenses parent — not just Gas & Fuel.
3. **Food & meals → Distributions (RESOLVED 2026-07-21, per Julia).** There is
   **no** client / crew / personal meals split — for now **none of this is a
   deductible business expense.** Any restaurant, fast-food, coffee shop, or food
   / convenience charge that is **not** gas-station fuel → **Owner's
   distribution**, regardless of amount. Gas stations follow the $25 line in
   rule 2 (≥ $25 → fuel; < $25 → distribution); every other food-related charge
   is a distribution. Grocery / food-store purchases follow the same
   food-is-personal logic → distributions. **Exception — supply/materials stores
   are business, not food:** Home Depot and any hardware / work-parts / job-supply
   store → **Supplies & Materials** (**never COGS** — see rule 9), *not*
   distributions — treat a store by what it is *for*, so a
   supply house stays business even though anything can be bought there. The
   food-is-personal rule is about groceries, restaurants, and convenience — not
   supply houses. **Consequence:** the **Meals** account
   should trend to ~$0 — any charge still sitting in Meals is a flag to move to
   distributions. *"For now" — revisit if the client's facts change.*
4. **Every transaction gets a vendor/payee**, except owner draws, owner
   contributions, and transfers. Unknown bank descriptors: identify the business
   online first (this works — an unrecognised descriptor resolved to a local
   waste hauler that way);
   check the QBO vendor list; propose creating the vendor if missing. Never
   guess — an unidentifiable descriptor goes to *Ask My Accountant* (triage).
5. **Cash out / withdrawals — investigate, never assume (updated 2026-07-21).**
   Do **not** blanket these to owner draws (the old "cash always = draws" default
   is retired). Cash here can pay subcontractors, which carries 1099 exposure we
   must not miss. First tell the two cases apart:
   - **ATM / over-the-counter cash withdrawal → the LABOR accounts, and ASK THE
     CLIENT EVERY TIME (hardened 2026-08-26, per Lilian).** The cash on this client
     is normally paying a worker, which carries 1099 exposure and a W-9 we must not
     miss. **Which labor account follows rule 17, so it follows the answer:** an
     **individual** → *Contract labor*; an **LLC or company** → *Outside services*.
     Until the client says who was paid it cannot be posted correctly — which is
     exactly why this is asked rather than defaulted. **But the default never replaces the question:**
     every withdrawal gets asked about, not just the ambiguous ones. The answer
     decides labor vs. distribution and whether a W-9 is owed.
     🕐 **Ask while he can still remember — this rule has a shelf life.** Flag the
     **most recent** withdrawals **separately** from the old ones and put those in
     front of him first; an ATM withdrawal from four months ago is usually
     unanswerable, and a list that mixes the two gets abandoned. ⚠️ **Work the
     bank-feed queue BEFORE writing to him**, or the recent withdrawals — the only
     ones worth asking about — are still sitting unposted and he gets asked twice.
     Messages to this client go out in Russian (see the client file).
   - **Transfer to another bank account:** check whether we recognize the
     destination account — pull how prior transfers to that *same* account were
     categorized (Double history / `get_similar_transactions`). A known
     **contractor's** account → the labor accounts (**per rule 17** — an individual →
     *Contract labor*, an LLC or company → *Outside services*), with 1099 exposure; the owner's **personal** account → distributions
     (rule 6). If the account is unknown, ask the client before posting.
6. **Transfers with the owner's personal account:** money **in** →
   **Owner's contribution**; money **out** → **Owner's distribution**. Post to
   those two specific equity accounts — **not** the *Owner's Equity* parent
   (where these are currently being lumped, which loses the contribution-vs-draw
   split) — and **never** to Sales or **Cost of Goods Sold** (a recurring 2026
   error: some of these transfers are still landing in COGS; this rule exists to
   catch them).
   🔴 **Since the personal account was connected, QuickBooks proposes these as
   TRANSFERS — and a transfer is the WRONG answer even when the movement is
   real.** Accepting one posts bank-to-bank: it never reaches
   *Owner's contribution* / *Owner's distribution*, so the draws and the
   contributions **net to zero in equity** and the split this rule exists to
   preserve is lost. It also books the postings against an account rule 18 says
   is leaving the file. **So: never accept one as a transfer — post the equity
   entry, whatever QuickBooks proposes.** ⚠️ **This applies to ALL of them, not
   only the invented ones** — an `Online Transfer to/from` between the two
   accounts is genuine as a *movement* and still not a transfer for *this* client.
   Rule 12 is the separate, worse case: a transfer QuickBooks invented from a
   matching amount, where the underlying transaction is not a movement at all.
7. **Personal ACH pulls named to the owner** (e.g. his personal Capital One
   card autopay) → Owner's distribution.
8. **IRS `USATAXPYMT` pulls under the owner's name** are his personal federal
   tax → Owner's distribution, never a business tax expense.
9. **Job costs — MATERIALS to COGS, LABOR to opex (RESOLVED 2026-08-26, per Lilian).** The split is not symmetrical, and that is the answer, not an
   oversight:
   - **Spray-foam and insulation MATERIALS → *Cost of Goods Sold*.** The
     specialist foam/insulation distributors supply the material the installation
     service consumes, so it is cost of goods sold. This is what the return needs
     for **Form 1125-A**, and moving it changes **gross profit** while leaving net
     income alone.
   - **Installation SUBCONTRACTOR LABOR → the labor accounts per rule 17** (an
     individual → `Contract labor`; an LLC or company → `Outside services`) — **opex
     either way**, which is the half that matters here.
     Collect a **W-9** from every new one and keep the 1099 list current.
   - **Job-site disposal** → still opex today; no COGS sub-account exists for it.
   ⚠️ **The reviewer's actual job here is the boundary, not the rule.** Materials
   from a **hardware / big-box / job-supply store** stay in *Supplies & Materials*
   per rule 3 — the COGS line is for the **specialist foam and insulation
   distributors**, not for everything that could be called a material. A recurring
   2026 error is specialist-distributor purchases landing in *Supplies &
   Materials*; sweep that account for them each close.
   ⚠️ **This is a DELIBERATE DEPARTURE from the firm-wide framework, and the next
   reviewer should know that rather than "fix" it.** The
   [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/SKILL.md) framework puts
   **subcontractor labor in COGS** alongside materials. Lilian ruled otherwise for
   *this* client. Follow the client rule here; do not generalise it to others.
   ⚠️ **A SECOND COGS account now receives postings:** `Shipping`, for truck/trailer
   rental (rule 16). Until 2026-08-26 nothing posted there and this paragraph read as
   though `Cost of Goods Sold` were the only live one.
   🔴 **And one consequence nobody should meet for the first time while preparing the
   return:** because this rule keeps **subcontractor labor in opex**, this client's COGS
   holds **materials and hauling but NOT direct labor** — so the "gross profit" line is
   **not a real gross margin**, and Form 1125-A will not contain the job labor. Whoever
   prepares the 1120-S needs to know that before reading it.
   **COA reality check:** this client's chart has a **single *Cost of Goods Sold*
   account** (plus *Shipping*) — there are **no** Materials / Subcontractor Labor
   / Job Disposal sub-accounts, and none are being built yet (classify first,
   restructure the chart second).
   *(This replaces the July draft, which was tagged **to verify** because its
   provenance was unconfirmed and which sent subcontractor labor to a COGS
   sub-account that does not exist. Lilian resolved it directly; decisions-log
   row 7 is closed.)*
10. **Vehicle financing: PENDING (open — to study).** Don't expense installments
    blindly; park in triage until resolved. *(Discrepancy noted 2026-07-21, not
    yet resolved: the SOP names "Hyundai Motor Finance / Ally," but this client's
    actual chart shows **RAM truck loans** — "Car Loan 2022 RAM 1500", "2017 RAM
    Loan" — and no Hyundai/Ally accounts, so the lender names here are probably
    inherited from another client. Leaving it as an open question until the
    client confirms the vehicles and financing; treatment unchanged for now.)*
11. **Parent accounts never receive postings.** And the **holding /
    "uncategorized" accounts** — today that's *Ask My Accountant*, *Uncategorized
    Income*, *Uncategorized Expense* (and, once we renumber the chart, the
    997/998/999 family) — must read **$0 before we call a month closed**. These
    accounts are only temporary parking spots for "not sorted yet"; a balance
    still sitting in them means transactions are still un-categorized, so the
    month isn't actually done. This zero-balance check is the **close gate** (see
    the review checklist). **Necessary but not sufficient:** a $0 triage balance
    only means nothing is *un*-categorized — it does **not** mean the categories
    are *right*. Wrong-but-confident coding (gas booked to Meals, owner transfers
    to COGS) leaves triage at $0 while the books are still wrong, so the close
    gate is a floor, not the whole review.

12. **🔴 NEVER accept a QuickBooks "pair" / transfer suggestion involving the
    owner's personal account (new 2026-08-26).** This is the rule that has
    actually cost this client money, and it exists because the personal account
    is connected (see the snapshot).
    - **What QuickBooks does:** it matches a transaction in the business account
      against one in the personal account **on amount alone** and offers it as a
      transfer. The dates need not match and the counterparties need not be
      related.
    - **What accepting one does:** it consumes **both** sides into a single
      transfer, so the transaction **never reaches an income or expense account
      at all.** It does not land in triage; it simply disappears from the P&L.
      That is why the close gate (rule 11) does not catch it — triage still reads
      $0 while revenue and cost are missing.
    - **The test, and it needs no judgement:** a **fuel purchase**, an **ATM cash
      deposit** and an **ATM cash withdrawal are not transfers by nature**,
      whatever the amounts match. Only an actual bank-to-bank movement is even a
      *candidate* — the descriptor reads `Online Transfer to/from`. ⚠️ **And on
      this client a candidate is still not accepted:** per rule 6 those movements
      are posted as **equity**, so in practice **no** pair suggestion involving
      the personal account is ever accepted.
    - **Found in the 2026 books:** ATM **check deposits** booked as transfers
      instead of **revenue**, and ATM **cash withdrawals** booked as transfers
      instead of **labor** — the second also erasing the 1099 exposure the cash
      carries (rule 5). Both directions of damage from one bad suggestion.
    - **To undo one:** open the posted transaction and use **Unpair transaction**,
      then categorize it properly.
13. **Cash and ATM DEPOSITS → Sales — but work the ladder, FIRST YES WINS (new
    2026-08-26, per Lilian).** A cash or ATM deposit is normally the client's
    revenue, and *Sales* is the default — but it is the **last** branch, not the
    first. In order:
    1. **Does it pay an OPEN INVOICE?** → apply it to the invoice so the invoice
       closes. Check A/R before anything else.
    2. **Is it money the OWNER put in?** → **Owner's contribution** (rule 6),
       never Sales. Booking an owner's capital injection as revenue puts
       **non-taxable money on the 1120-S as taxable income** — the most expensive
       mistake available on this rule.
    3. **Is it a new sale?** → **Sales**, with the customer named (rule 1).
    4. **Can't tell?** → **ask the client.** He is the only one who knows which
       job the cash came from.
    ⚠️ **On the A/R branch:** this client carries
    open invoices, some long overdue, and a deposit that is really an invoice
    payment must be **applied against that invoice** so it closes. Booking it to
    Sales instead **counts the revenue twice and leaves the receivable standing
    forever.** This sharpens rule 1's "deposits are never assumed" — rule 1 already
    says every deposit carries a customer *or the owner*; this rule says which
    branch to test first.
14. **Amazon purchases → *Supplies & Materials* (new 2026-08-26, per Lilian).**
    Amazon buys are job supplies; anything coded elsewhere is an error to correct.
    ⚠️ **Know what you are looking at before applying this:** a **payment to an
    Amazon store CARD** (a `SYF`/Synchrony ACH in the descriptor) is
    a **credit-card payment, not a purchase** — the purchases sit on a card that
    may not be connected to QuickBooks at all, so the books may never see them.
    Do not code a card payment as supplies. See the decisions log.
15. **Hotels → Travel:Hotel (new 2026-08-26, per Lilian).** Anything
    hotel-related is travel. Post to the **`Travel:Hotel` sub-account, never the
    `Travel` parent** — rule 11 forbids parent postings, and a 2026 hotel charge
    is currently sitting on the parent.
16. **Truck and trailer rental (U-Haul and similar) → `Shipping`, which is a COGS
    account (RESOLVED 2026-08-26, per Lilian).** Renting a truck or trailer to move tools and
    materials to a job site is a **direct job cost**, not vehicle fuel and not storage —
    it is the cost of getting the job's materials to the job. *(She gave the account and
    its type; the reason is the firm's reading of why, not her words.)* *(Confirms what the
    2026-07-22 client review meeting discussed; it was carried as
    medium-confidence until Lilian ruled.)*
    ⚠️ **Her original words were "Shipping and Delivery" and no account of that name
    exists in this chart** — what exists is `Postage and shipping` (an operating
    expense), **`Shipping` (Cost of Goods Sold)** and `Shipping Income`. **She chose
    `Shipping`, naming it as COGS**, so this is a job cost and sits beside the
    foam materials of rule 9 rather than in opex.
    🔴 **A session first read this the other way and was wrong** — it reasoned from
    "a delivery cost is not COGS" to `Postage and shipping`. That inference is what
    row 13 existed to test, and it did not survive: **for this trade the delivery of
    materials to site IS part of the cost of the job.** Kept as a warning because it
    is the kind of tidy reasoning that reads as obviously right.
    ⚠️ **These have
    historically been miscoded to `Vehicle gas and fuel` and to `Utilities:
    Storage`** — sweep both when applying this.
17. **Labor: an INDIVIDUAL goes to `Contract labor`; a COMPANY or PLATFORM goes to
    `Outside services` (SETTLED 2026-08-26, per Lilian).** The chart has two
    similarly-named accounts that had drifted into each other's roles. The line is
    **who you are paying, not what they do**:
    - **A person, paid in their own name** — the individual subcontractor; ATM cash
      **when the client says it paid a person** (rule 5) — → **`Contract labor`**.
    - **An LLC, a company, or a platform** — the subcontractor that invoices as an
      LLC, a freelance marketplace; ATM cash **the client says paid a company** — →
      **`Outside services`**.
    Both carry **1099 exposure and need a W-9** — the account does not decide that,
    and an LLC is not exempt unless it is taxed as a corporation.
    🔴 **The QuickBooks VENDOR RECORD decides, not the bank descriptor** — and on this
    client they disagree on the payee this rule matters most for. The LLC
    subcontractor is **paid by Zelle under an individual's name**, so the descriptor
    says *person* and the vendor record says *LLC*. **The vendor record wins.** Rule 4
    sends you to the descriptor to *identify* a payee; it does not decide their type.
    ⚠️ **"Outside Labor" is Lilian's name for `Outside services`, and no account of
    that name exists in the chart.** Read it that way whenever she says it.
    🔴 **This CORRECTS what this rule said for one day.** A session asked what
    "Outside Labor" meant, was told **`Contract labor`**, and wrote the split as
    *worker vs platform* — which put the LLC subcontractor in `Contract labor`. Her
    fuller instruction the same day separates the two subcontractors by **who they
    are**, which only works if **Outside Labor = `Outside services`**; that reading
    is also the only one consistent with her very first instruction, which sent the
    freelance platform to *Outside Services*.
    ⓘ **Two different confidence levels, and they must not be read as one.** The
    **equation** *Outside Labor = `Outside services`* is **forced by her own words** —
    two independent instructions, one conclusion. The **individual-vs-entity line** is
    **this firm's reading of three payees she named**, not a principle she stated; she
    gave accounts, not a rule. It now also drives rule 5's ATM destination for payees
    she has never ruled on, so **confirm it before applying it to a new one.**
18. **⛔ The owner's personal account (`Artem Personal`) is OUT OF SCOPE — do not
    categorize it, do not clean it (new 2026-08-26, per Lilian).** It was
    connected to QuickBooks **by mistake** and none of the rules above apply to
    it. **Julia's instruction, in order:**
    1. **Export its transactions to Excel** — genuine business expenses are mixed
       in and get analysed separately.
    2. **Then disconnect the account.**
    3. **Re-enter the business expenses in QuickBooks manually**, later, as its
       own piece of work.
    Until the export exists the account stays connected and **untouched**. Note
    that leaving it connected is exactly what keeps rule 12 live, so the export is
    worth not deferring.

## Vendor & 1099 tracking — use Double

Double is the working tool for the vendor side of these rules — lean on it:

- **Every payment shows its payee.** Double surfaces transactions that are
  missing a vendor at a glance, so it's how we enforce "every transaction gets a
  vendor" (rule 4). Reviewer: scan Double for blank-payee transactions.
- **1099 readiness.** Double flags each payee who has crossed the **$2,000**
  threshold that triggers a 1099 (current threshold for 2026 payments), and lets
  us mark whether the **W-9 is on file** and the payee's info is complete. Keep
  these current as new subcontractors are paid (rules 5, 9), so 1099 season is
  clean.
- **Reviewer 1099 sweep — don't let subs hide.** Subcontractor labor sits in
  **both** labor accounts **by design since rule 17** (*Contract labor* for individuals,
  *Outside services* for companies and platforms), and historically also landed in
  *Auto Expenses: Vehicles repair*, which is not a labor account at all. **Cash taken
  from an ATM is labor too** (rule 5) and is the easiest 1099 of all to miss, because
  until the client answers there is no payee name on it. Each close, list **every
  individual or LLC paid ≥ $2,000** across all of those accounts (Zelle payments
  especially) and confirm a W-9 is on file — and remember **the sweep must cover BOTH
  labor accounts**, not just *Contract labor*.

## Chart of accounts conventions

- **The number-prefix chart of accounts is the target, not the first step.**
  This client is **not renumbered yet.** We adopt the numbering **gradually** —
  only after we understand the business and have worked down the backlog of
  unclassified transactions. **Classify first, restructure the chart second;**
  don't reorganize the chart ahead of understanding it.
  ✅ **Lilian confirmed this sequencing and asked for the renumbering explicitly on
  2026-08-26 — decisions row 15.** So the second half is now a committed piece of
  work with a trigger, not an aspiration: **when the backlog is cleared, renumber.**
  ⚠️ **Two account-line questions belong to that same pass, not to the cleanup:**
  the `Software` ↔ `Dues & subscriptions` overlap (**row 14**), and the
  payment-processor fees sitting in `Software` while a dedicated fees account
  exists. Renumbering is the moment those get settled, because deciding them means
  reclassifying history — which is exactly what you do not want to be doing while
  the backlog is still moving.
- Masciave/Aura-style grammar (the target): number prefixes in the account
  *name* — 100s assets · 200s liabilities · 300s equity · 400s income · 500s
  COGS · 600s opex · 800s other income · 901 depreciation · 997/998/999 triage.
- Parents are grouping-only; transactions post to sub-accounts.
- **2025 is closed.** Safety rules: renames/renumbers only (retroactive and
  harmless); **never merge** accounts that have 2025 activity (reclassify 2026
  and deactivate instead); **never change the type** of an account with 2025
  activity (create a new account and reclassify 2026 into it).
- People and companies are **vendors, not accounts** — no more person-named
  expense sub-accounts.
- Overdraft/NSF bank fees post to their **own sub-account under Bank Fees**
  (kept separate from ordinary service charges) so the running total is visible
  for the cash-management conversation with the client.

## Connecticut sales tax — filed monthly, and it has its own SOP

This client's Connecticut **Sales and Use Tax Return (Form OS-114)** is filed **every
month** by the firm, as a **zero return**, on the firm's own CT DRS myconneCT login. It is
**not part of the bookkeeping close** and needs no figures from the books — so it does not
wait for them.

➡️ **The procedure lives in its own runbook:
[`ecoorganic-ct-sales-tax.md`](./ecoorganic-ct-sales-tax.md)** — the login, the steps, the
Drive filing convention, the deadline and the $50 late floor, what to do when a DRS notice
arrives, and the two open questions about why the return is zero at all.

The only thing the bookkeeping reviewer does with it is **confirm it happened** — see
checklist item 16 below.

## Monthly review checklist (what the reviewer verifies)

1. Bank feed fully processed; book balance ties to the bank statement.
2. **Close gate:** holding/uncategorized accounts (*Ask My Accountant*,
   *Uncategorized Income/Expense*) at $0 — nothing left un-sorted.
3. No postings to parent accounts.
4. Every transaction has a payee, except draws/contributions/transfers.
5. Checks and deposits carry evidence (image reviewed; customer assigned).
6. Vendor→account consistency: one vendor, one account, unless the split is
   explained (e.g. the gas threshold).
7. Food/restaurant/fast-food/convenience charges → distributions
   (non-deductible, rule 3); gas < $25 → distributions, gas ≥ $25 → fuel
   (rule 2). Any charge still sitting in **Meals** is a flag to reclassify.
8. New recurring vendors/subscriptions flagged; **every individual/LLC paid
   ≥ $2,000 (across Outside services, Contract labor, Auto repair, and Zelle) has
   a W-9 on file and is queued for a 1099.**
9. Overdraft/NSF fees tracked in their own sub-account and totalled for the
   client conversation.
10. No new activity in frozen accounts; any exception is escalated.
11. 🔴 **Nothing in the BUSINESS account is sitting as a transfer against the
    owner's personal account** (rules 6 and 12). Filter *`Checking Chase 8310`*
    for transactions typed **Transfer** and read each descriptor: an ATM deposit,
    an ATM withdrawal or a card purchase is a **false pair** (rule 12), and even a
    genuine `Online Transfer to/from` belongs in **equity**, not in a transfer
    (rule 6). Unpair it and post the business side correctly. ⛔ **Work from the
    business account, not the personal one** — rule 18 puts `Artem Personal` out of
    scope, and unpairing releases the business-side transaction, which is the only
    side in scope. **The close gate in item 2 does NOT catch any of this**, because
    a consumed transfer never reaches a triage account — which is why this is its
    own line.
12. **Every ATM cash withdrawal in the period has been put to the client**, and
    the recent ones were flagged separately from the old (rule 5). An unanswered
    withdrawal is an open 1099 question, not a closed month.
13. **Cash / ATM deposits were checked against open A/R before being booked to
    Sales** (rule 13) — no deposit that was really an invoice payment went to
    Sales and left the receivable standing.
14. **The specialist foam/insulation distributors are in COGS, not `Supplies &
    Materials`** (rule 9) — sweep that account for them.
15. **`Travel:Hotel` carries the hotel charges and the `Travel` parent is empty**
    (rules 11, 15).
16. **The month's Connecticut sales-tax return was filed** — the OS-114 zero return is in
    Drive under the `MM.YYYY - Sales tax - zero tax return.pdf` name, with its confirmation
    screenshot. **A gap in that folder's month sequence is a question, not a conclusion:**
    check myconneCT's own filing history for the period before deciding a month was missed
    — that folder has lagged the filings by months before. The filing itself, and what to do
    when it is missing, is [`ecoorganic-ct-sales-tax.md`](./ecoorganic-ct-sales-tax.md).

## Open decisions log

| # | Decision | Owner | Status |
|---|---|---|---|
| 1 | **RESOLVED 2026-07-21 (per Julia):** no client/crew/personal meals split — all food/restaurant/fast-food/convenience → distributions (non-deductible); gas ≥ $25 → fuel, < $25 → distributions. See rules 2–3. | Julia + Lilian | Resolved |
| 2 | Vehicle financing: lease vs loan vs personal — **and** reconcile the SOP's "Hyundai Motor Finance/Ally" against the actual **RAM truck loans** in the chart (open, to study) | Client | Pending |
| 3 | Which disconnected bank/card accounts are closed | Client | Pending |
| 4 | Identity/role of a recurring individual payee (name on file in the firm's client systems) | Client | Pending |
| 5 | What "Laundry" purchases are (workwear vs personal) | Client | Pending |
| 6 | Blanket rule: obvious personal retail → Owner's distribution | Client | Proposed |
| 7 | **RESOLVED 2026-08-26 (per Lilian):** job costs split — spray-foam/insulation **materials → Cost of Goods Sold**; installation **subcontractor labor → the labor accounts per rule 17** (individual → `Contract labor`; LLC/company → `Outside services`), **opex either way**. Not symmetrical, and that is the answer. See rule 9. **Row 7 asked for verification against the client's history *and the filed return*; Lilian answered from the client's history and the chart. The filed-return half was not re-checked** — if a prior 1120-S treated job labor as COGS, raise it rather than assume this rule matches it. | Lilian | Resolved |
| 8 | **The two open CT sales-tax questions moved with the procedure** — why the return is zero at all, and what covers the nine-month 2025 gap beside the two unopened DRS notices. They live in [`ecoorganic-ct-sales-tax.md`](./ecoorganic-ct-sales-tax.md) §6 and §4. ⏸️ **Lilian parked both on 2026-08-13** — do not chase her; raise them only when someone is actually working this client's sales tax. Kept as a row here so a reviewer reading only this log knows they exist | Lilian | Parked |
| 9 | **RESOLVED 2026-08-26 (per Lilian):** the largest 2026 labor payee is an **individual subcontractor → `Contract labor`**. Answered once the question was put **by name** rather than by role — the role description alone was not answerable in conversation, which is the lesson worth keeping. Settling it also produced rule 17's individual-vs-entity line. | Lilian | Resolved |
| 10 | **Is there a retailer store CARD outside QuickBooks?** The only 2026 trace of the large online retailer is an ACH **payment to a `SYF`/Synchrony store card**, not a purchase — so those purchases may sit on a card the books never see. Decides whether rule 14 has anything to apply to. | Client | To verify |
| 11 | **The 2026 bank-feed queue is the gate on all of this.** Several hundred transactions were still unposted at 2026-08-26 and are invisible to Double, so every count drawn from the posted ledger is a statement about *what is posted*, not about the year. **Work the queue before treating the P&L as complete** — and before writing to the client (rule 5). | Lilian | To study |
| 12 | **RESOLVED 2026-08-26 (per Lilian):** this runbook **may name retail chains and platforms** — *"el runbook puede nombrar cadenas retail sin problema"*. A chain is a category of merchant, not one of the client's people. **The client's own payees stay by role.** Propagated to the [`bookkeeping-sop`](../../.claude/skills/bookkeeping-sop/SKILL.md) role-not-vendor rule so the two no longer contradict. | Lilian | Resolved |
| 13 | **RESOLVED 2026-08-26 (per Lilian):** truck/trailer rental goes to **`Shipping`, the COGS account** — *"vamos a ponerlo en la cuenta de shipping, que es cost of goods sold"*. ⚠️ **This reversed a session's inference**, which had reasoned from *"a delivery cost is not COGS"* to `Postage and shipping`. For this trade, delivering the job's materials to site is part of the cost of the job. See rule 16. | Lilian | Resolved |
| 14 | 🔵 **`Software` and `Dues & subscriptions` overlap and the line between them is not clear — REVIEW AFTER THE CLEANUP.** Lilian's read, 2026-08-26: *"siento que son muy similares entre sí… no creo que quede muy clara la diferencia entre una y otra"*. ✅ **The history bears it out.** One platform (Thumbtack) is **split across both accounts**; ordinary SaaS sits in **both** (a search/prospecting tool and a hosting registrar in `Software`, an AI subscription and a credit-monitoring subscription in `Dues & subscriptions`); and a **trade-association membership** — the one item that is unambiguously *dues* rather than software — sits in `Dues & subscriptions` beside those SaaS charges. ⚠️ **A third account is entangled:** payment-processor fees appear in `Software` although a dedicated `QuickBooks Payments Fees` account exists. ⓘ **And the 2026-07-22 client review meeting recorded that software/subscription charges are consolidated into a SINGLE account with no per-tool breakout** — two accounts are in use, so either that never happened or it was undone. **Do not start this mid-cleanup:** deciding the line means reclassifying history, and the backlog has to be worked first. | Lilian | To study |
| 15 | 🔵 **Renumber the chart of accounts to the firm's number-prefix grammar — AFTER THE CLEANUP.** Lilian asked for this on 2026-08-26, using **the number sequence already recorded in this runbook's *Chart of accounts conventions*** (100s assets · 200s liabilities · 300s equity · 400s income · 500s COGS · 600s opex · 800s other income · 901 depreciation · 997/998/999 triage). **This confirms the sequencing this SOP already states** — *classify first, restructure the chart second* — so it is not a change of plan, it is her putting a date on the second half. ⚠️ **The 2025 safety rules govern it:** renames and renumbers are retroactive and harmless, but **never merge** an account with 2025 activity and **never change its type** — create a new one and reclassify 2026 into it. ⓘ *Her words were "shadow of accounts"; read as **chart of accounts**, which is what "la secuencia de números que ya conoces" can only mean. Say so if it was something else.* | Lilian | To study |

When a decision lands, update the rule above, note the date, and reclassify the
parked transactions in one batch.
