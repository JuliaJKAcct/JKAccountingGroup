# Ecoorganic — Monthly Bookkeeping & Review Runbook

> **Status:** Active · **Client:** ECOORGANIC USA LLC (QBO) · **Owner of SOP:** Lilian · **Started:** Jul 2026 · **Last revised:** 2026-08-12
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
> treat anything tagged _(to verify)_ as provisional until confirmed, and expect
> thresholds and categories to change as we learn. Nothing here assumes the prior
> bookkeeping was correct — the goal is to make it correct, not to preserve what
> was done. When a rule changes, the reviewer updates it here, dates it, and
> reclassifies the affected transactions in one batch.

## Client snapshot (operational, non-financial)

- Spray-foam insulation contractor, Connecticut. Owner: Artem Markarian.
- Books in QuickBooks Online, managed through Double.
- **Only one live bank feed: Chase checking (…8310).** All other bank and card
  accounts are disconnected; which of them are actually closed is **pending
  client confirmation** — until then they are frozen (rename-only, no new
  postings, no cleanup).
- Check- and cash-heavy business; many Zelle payments to subcontractors.
- Owner's personal Chase checking is **…2935** — transfers with it are equity
  moves, never income or cost (rule 6).

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
   store (e.g. Decker Rental, Compass Hardware) → **Supplies & Materials** (or
   COGS per rule 9), *not* distributions — treat a store by what it is *for*, so a
   supply house stays business even though anything can be bought there. The
   food-is-personal rule is about groceries, restaurants, and convenience — not
   supply houses. **Consequence:** the **Meals** account
   should trend to ~$0 — any charge still sitting in Meals is a flag to move to
   distributions. *"For now" — revisit if the client's facts change.*
4. **Every transaction gets a vendor/payee**, except owner draws, owner
   contributions, and transfers. Unknown bank descriptors: identify the business
   online first (this works — e.g. CWPM LLC resolved to a CT waste hauler);
   check the QBO vendor list; propose creating the vendor if missing. Never
   guess — an unidentifiable descriptor goes to *Ask My Accountant* (triage).
5. **Cash out / withdrawals — investigate, never assume (updated 2026-07-21).**
   Do **not** blanket these to owner draws (the old "cash always = draws" default
   is retired). Cash here can pay subcontractors, which carries 1099 exposure we
   must not miss. First tell the two cases apart:
   - **ATM / over-the-counter cash withdrawal:** ask the owner what the cash was
     used for. It may be personal (→ distributions) *or* cash paid to a worker
     (→ the labor account per rule 9 — today booked to *Outside services* — with
     1099 exposure, get a W-9). Don't guess.
   - **Transfer to another bank account:** check whether we recognize the
     destination account — pull how prior transfers to that *same* account were
     categorized (Double history / `get_similar_transactions`). A known
     **contractor's** account → the labor account (rule 9; today *Outside
     services*), with 1099 exposure; the owner's **personal** account (…2935) →
     distributions (rule 6). If the account is unknown, ask the client before
     posting.
6. **Transfers with the owner's personal account (…2935):** money **in** →
   **Owner's contribution**; money **out** → **Owner's distribution**. Post to
   those two specific equity accounts — **not** the *Owner's Equity* parent
   (where these are currently being lumped, which loses the contribution-vs-draw
   split) — and **never** to Sales or **Cost of Goods Sold** (a recurring 2026
   error: some …2935 transfers are still landing in COGS; this rule exists to
   catch them).
7. **Personal ACH pulls named to the owner** (e.g. his personal Capital One
   card autopay) → Owner's distribution.
8. **IRS `USATAXPYMT` pulls under the owner's name** are his personal federal
   tax → Owner's distribution, never a business tax expense.
9. **Job costs to COGS, not opex — _(to verify: provenance unconfirmed)_.**
   This rule carried over from the prior cleanup notes and has **not yet been
   re-checked** against how this client's own books have historically treated
   job costs. Before relying on it, confirm against the client's history (past
   categorizations) and how the return is filed. As drafted: foam/spray
   materials (Foam Pro, Spray Alliance, Everchem, IDI, The Spray Market) → COGS
   Materials; installation subcontractors (paid by Zelle/check/wire) → COGS
   Subcontractor Labor — collect a W-9 from every new one and keep the 1099 list
   current; job-site disposal (CWPM, BPM Recycling) → COGS Job Disposal.
   **COA reality check:** this client's chart currently has a **single *Cost of
   Goods Sold* account** (plus *Shipping*) — the Materials / Subcontractor Labor
   / Job Disposal sub-accounts named above **do not exist yet**. In practice,
   materials are split today between COGS (specialist foam/insulation
   distributors, e.g. IDI, Spray Alliance) and *Supplies & Materials* (opex,
   e.g. Home Depot and other hardware/big-box). Confirm whether that
   COGS-vs-opex split is intentional before building sub-accounts or
   reclassifying.
10. **Vehicle financing: PENDING (open — to study).** Don't expense installments
    blindly; park in triage until resolved. _(Discrepancy noted 2026-07-21, not
    yet resolved: the SOP names "Hyundai Motor Finance / Ally," but this client's
    actual chart shows **RAM truck loans** — "Car Loan 2022 RAM 1500", "2017 RAM
    Loan" — and no Hyundai/Ally accounts, so the lender names here are probably
    inherited from another client. Leaving it as an open question until the
    client confirms the vehicles and financing; treatment unchanged for now.)_
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
- **Reviewer 1099 sweep — don't let subs hide.** Subcontractor labor is
  currently scattered across *Outside services*, *Contract labor*, and even
  *Auto Expenses: Vehicles repair* rather than one labor account. Each close,
  list **every individual or LLC paid ≥ $2,000** across all of those accounts
  (Zelle payments especially) and confirm a W-9 is on file — a payee parked in
  "Outside services" is the easiest 1099 to miss.

## Chart of accounts conventions

- **The number-prefix chart of accounts is the target, not the first step.**
  This client is **not renumbered yet.** We adopt the numbering **gradually** —
  only after we understand the business and have worked down the backlog of
  unclassified transactions. **Classify first, restructure the chart second;**
  don't reorganize the chart ahead of understanding it.
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

## Connecticut sales tax — the monthly filing

A recurring **monthly** obligation the **firm** carries out, not the client, and separate
from the bookkeeping close below. The firm files Connecticut's **OS-114 Sales and Use Tax
Return** through **CT DRS myconneCT**, and it currently goes out every month as a **zero
tax return**.

**Do not let a quiet month pass — a zero return still has to be *filed*, and filing it late
costs $50.** Connecticut requires Form OS-114 for every assigned period "even if no sales
were made or no tax is due", and its late penalty is **15% of the tax due or $50, whichever
is greater** — so on a zero return the 15% is nothing and the **$50 floor is what lands**.
A month nobody filed is therefore a $50 bill for a return that would have taken minutes,
and this client has already been on the receiving end of a delinquency notice (see *Filing
history* below). _(Verified against CT DRS, 2026-08-12:
[Sales and Use Tax Information](https://portal.ct.gov/drs/sales-tax/tax-information) ·
[Form O-88, OS-114 instructions](https://portal.ct.gov/-/media/drs/forms/2019/sut/o-88_1019.pdf).)_

1. **Log in to myconneCT.** The portal address and the login the firm uses live in the
   client's own Drive doc — never in this repo:
   [myconneCT login (Drive)](https://docs.google.com/document/d/1FaiTyqEnm-eDsxbx1ZH8UdSAgqq6zSMwK_2z2orbk9U/edit) ·
   [CT DRS myconneCT](https://portal.ct.gov/drs-myconnect). The login is the **firm's**,
   not the client's — the client does not file this himself.
2. **File the period's OS-114 as a zero return.** One return per calendar month. Check the
   period being filed is the month you mean before submitting — a return filed against the
   wrong period leaves the intended month still open and delinquent.
3. **Save the filed return to Drive, with the house filename.** Download the confirmed
   return as a PDF into
   [Sales Taxes → Connecticut → *year*](https://drive.google.com/drive/folders/1080Kf9czucrD6vf09cu8lADjdlHumd8j),
   named **`MM.YYYY - Sales tax - zero tax return.pdf`** (e.g. `07.2026 - Sales tax - zero
   tax return.pdf`). Keep the name exactly — it is what makes a missing month visible at a
   glance in the folder listing.
4. **Save the confirmation screenshot.** Capture the myconneCT submission confirmation and
   put it in that year's **`Screenshots`** subfolder. This is the existing convention and
   it is the only proof of *when* a return was submitted; the PDF alone doesn't carry it.
5. **File any DRS notice that arrives.** Delinquency notices, proposed assessments and
   other DRS correspondence go to
   [Sales Taxes → Notices](https://drive.google.com/drive/folders/1ReFw-i3D8LDVOAzT6PfjqYgFa6A9cwZK),
   and the matter gets raised with Lilian — a notice is never just filed and forgotten.

**Timing.** Connecticut's due date is the **last day of the month following** the period —
so July's return is due 31 August _(CT DRS, verified 2026-08-12)_. The firm's own recurring
reminder for this client sits in **Double, due the 5th of the month**, which is deliberately
early and leaves most of a month of slack. **Treat the 5th as the deadline, not the 31st:**
the whole point of the internal date is that a missed reminder is still recoverable.

### Why it is a *zero* return — NOT ESTABLISHED, confirm before relying on it

Every return in the folder reports zero, but **the reason has never been written down.**
This is an operating business with revenue, so "zero" is a deliberate position, not an
absence of activity — plausibly because the client's work is construction/installation
services that fall outside CT's taxable-services net, or because taxable sales genuinely
run through the general contractor. **Neither is confirmed here.**

⚠️ **And there is a second question hiding inside the first: zero *tax* is not the same as
zero *sales*.** DRS says Form OS-114 reports **both taxable and nontaxable sales** — gross
receipts go on the return, and the nontaxable portion comes off as a deduction, so a
business with revenue and no taxable sales would normally file a return showing **receipts
with a deduction**, not a blank one. Whether these returns are blank or already carry gross
receipts **has not been checked** — nobody has opened one _(2026-08-12)_.

**What a covering bookkeeper does with that:** keep filing, on the same schedule, exactly as
before — stopping is far worse than the open question, and nothing here says the position is
wrong. Do **not** represent to the client, or to DRS, *why* it is zero until Lilian
confirms it. Tracked in the Open decisions log (#8).

### Filing history — what the folder actually shows

- **2023–2024: filed QUARTERLY.** The returns in the Sales Taxes folder are named by
  quarter (`1Q`/`2Q`/`3Q`/`4Q`), so this client was on a quarterly frequency then.
- **From late 2025: MONTHLY.** The Connecticut folder carries one zero return per month
  from **10.2025** onward, continuously through **07.2026**. When and why DRS changed the
  frequency is **not recorded** — treat the change as observed from the filings, not as an
  established fact.
- **The firm caught up late, and it cost a notice.** The 10–12.2025 returns were only
  uploaded to Drive in **April–May 2026**, and the Notices folder holds a **Delinquency
  Notice dated 12.2025** and a **Proposed Assessment dated 01.2026**. _(Observed from the
  Drive filenames and upload dates; **the notices themselves have not been opened**, so
  what they assess, for which period, and whether they were resolved is unknown — see the
  client file.)_ This is the reason step 1's "do not let a quiet month pass" is written the
  way it is.

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
11. **The month's Connecticut sales-tax return was filed** — the OS-114 zero return is in
    Drive under the `MM.YYYY - Sales tax - zero tax return.pdf` name, with its confirmation
    screenshot. A gap in that folder's month sequence is a missed filing, not a filing
    that was saved somewhere else.

## Open decisions log

| # | Decision | Owner | Status |
|---|---|---|---|
| 1 | **RESOLVED 2026-07-21 (per Julia):** no client/crew/personal meals split — all food/restaurant/fast-food/convenience → distributions (non-deductible); gas ≥ $25 → fuel, < $25 → distributions. See rules 2–3. | Julia + Lilian | Resolved |
| 2 | Vehicle financing: lease vs loan vs personal — **and** reconcile the SOP's "Hyundai Motor Finance/Ally" against the actual **RAM truck loans** in the chart (open, to study) | Client | Pending |
| 3 | Which disconnected bank/card accounts are closed | Client | Pending |
| 4 | Identity/role of a recurring individual payee (name on file in the firm's client systems) | Client | Pending |
| 5 | What "Laundry" purchases are (workwear vs personal) | Client | Pending |
| 6 | Blanket rule: obvious personal retail → Owner's distribution | Client | Proposed |
| 7 | **Job costs → COGS vs opex** — verify rule 9 against the client's history and filing before relying on it | Julia | To verify |
| 8 | **Why the CT sales-tax return is a ZERO return** — the basis has never been recorded, and this is a business with revenue. Two parts: (a) *why* no taxable sales; (b) whether the returns should be reporting **gross receipts with a deduction** rather than blank, since OS-114 reports taxable **and** nontaxable sales. Keep filing either way; confirm before anyone represents it. Also settle whether the 12.2025 delinquency notice and the 01.2026 proposed assessment were resolved | Lilian | To verify |

When a decision lands, update the rule above, note the date, and reclassify the
parked transactions in one batch.
