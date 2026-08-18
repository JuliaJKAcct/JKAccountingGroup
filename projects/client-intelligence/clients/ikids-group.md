# iKids Group LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-14

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz,
> so hiding it protects nothing _(Lilian, 2026-08-12)_. An **SSN or ITIN never may**,
> including when it is the entity's tax ID. Write the EIN **hyphenated** (`12-3456789`) — nine
> bare digits trip the published-page gate and stop the build.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering bookkeeper needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** iKids Group LLC
- **Entity type:** LLC — **partnership** (multi-member; files Form **1065**) _(Double)_
- **Home state:** **Florida** (Fort Lauderdale) _(Gmail — high confidence)_
- **Industry / what they do:** **Children's indoor play park / family-entertainment venue** ("iKidsPark"), being built out at a commercial site in **Fort Lauderdale, FL** — a leased **former big-box retail unit** _(vendor job-site description, 2026-08-14)_. **Pre-operational** (construction / build-out phase; not yet generating revenue). _(Gmail)_
- **Primary language:** **Russian / Ukrainian** (owners are Ukrainian; correspondence in RU/UA, tax docs bilingual). _(Gmail)_
- **Our engagement (services we provide):** Bookkeeping (**monthly**); **income tax (Form 1065 partnership → K-1s)**; **1099 preparation**; annual-report filing. Sales tax N/A; payroll N/A (pre-operational). The firm also does **hands-on AP / bill-pay** (pays vendors from the client's account). **Assigned bookkeeper: Lilian.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double). ⚠️ **The bank feed disconnected on
  2026-07-20 and has not been reconnected** _(Lilian, 2026-08-14)_ — nothing has posted since, so
  the books stop at that date (see §4 and §6).

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| **Manager** — the LLC is manager-managed with a **single** Manager, who is also a member | Double client (portal contact) |
| **Members / partners** — **three**; the Manager holds 33.4%, the other two 33.3% each (see §5) | Double client; Operating Agreement in Drive → `4-Corporate` |
| **CFO** — group-level finance lead; **not** a member and **not** the Manager. He is the one who supplied the corporate documents at onboarding and attended the 2025 Zoom calls | Double client (contact, **no portal access**) |

- **Double client:** [app.doublehq.com/close?cid=706689](https://app.doublehq.com/close?cid=706689)
- **Portal-contact coverage:** two of the three members plus the CFO are registered as Double
  contacts; the **third member is not** (no email address on file anywhere — see §6). Personal
  names, emails, and phone numbers live in Double, never here.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| **The client's AP mailbox — Gmail** | Where the client's **vendor bills and payment confirmations arrive** (water, insurance, permits, the environmental report…). **The firm has access to it** and works it **every month** — see §4 | _(password pending — client's Drive vault / Double)_ | `ap.ikidsllc@gmail.com` — a **company AP mailbox**, not a person's inbox, and **firm-controlled** (Julia is the account-recovery contact) _(Gmail, 2026-07-23)_. It is the **only** place several of these bills exist: nothing is forwarded to us and the client sends nothing |
| Business bank accounts (2 — different banks) | Operating cash | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm has signer/payment access to pay vendors from the client's account _(Google Drive, 2026-08-01)_. In practice **one of the two carries effectively all the activity**; the second is close to dormant. Both were on the QuickBooks feed until it dropped _(QuickBooks via Double, 2026-08-14)_ |
| FPL | Electric utility for the build-out site | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm-managed account _(Google Drive, 2026-08-01)_ |
| City of Fort Lauderdale — utility billing | Water bill for the site | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm-managed account _(Google Drive, 2026-08-01)_ |
| Broward County ePermits | Building-permit applications for the park build-out | [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn) | Firm-managed account _(Google Drive, 2026-08-01)_ |
| City of Fort Lauderdale "LauderBuild" portal | Permit-fee payment portal | n/a (firm pays via portal) | Firm pays permit fees here as part of hands-on AP _(Gmail, 2026-07-28)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_
- **The runbook:** [`../../sops/ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md) — the
  step-by-step monthly procedure. This section stays the *summary*; the runbook holds the detail.
- **The bills do not come from the client — we fetch them from the client's own mailbox.** Vendor
  bills and payment confirmations land in the client's AP mailbox (§3), which the firm has access
  to. **Every month** someone has to open that mailbox, download the month's bills and
  confirmations, and attach each one to its payment transaction in QuickBooks. Nobody forwards
  them; if the month is skipped, the expense sits in the books with no support behind it.
- **The water bill is on autopay — the payment posts by itself, the document does not.** The
  charge appears in the bank feed with no action from us; the bill and the payment confirmation
  still have to be pulled from the mailbox and matched to that transaction. **Never pay it a
  second time** — it is already paid. _(Lilian, 2026-08-11.)_
- **Where the paperwork is kept:** every invoice and receipt for this client is filed in **Julia's
  Google Drive** → the folder named for the client → **`Bookkeeping`** → **one folder per month of
  the year**. The mailbox is where documents arrive; Drive is where they live, and it is where a
  covering bookkeeper looks for them. _(Lilian, 2026-08-11.)_
- This sits **alongside** the hands-on AP work in §5 (the vendors the firm actively *pays* from
  the client's account) — the same mailbox serves both.
- ⚠️ **The QuickBooks bank feed disconnected on 2026-07-20** _(Lilian, 2026-08-14)_. Nothing has
  posted since, so the ledger stops there and any month after it will read as quiet when it is
  really missing. Reconnect it and backfill before working a close — it is step 1 of the runbook
  now.

### Reports the client asks us for
- **iKids requests its own reports periodically** — a **Transaction report** and a **Transactions
  by account** report — every few months, unprompted. _(Lilian, 2026-08-14.)_
- **The delivery log is in the runbook**, not here: each delivery records the **period the report
  covered**, so the next one starts the day after and nobody duplicates or skips months. See
  [`ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md) →
  *Client reporting*.
- **Last delivered 2026-08-14, covering through 2026-07-20** — that end date is the bank-feed
  disconnection, i.e. the last date the books are complete to, not a choice.

### Income tax
- **Applies?** Yes — **Form 1065** (partnership; multi-member LLC → K-1s to partners) _(Double)_
- **Our role:** We prepare income tax _(Double)_; **1099 preparation** included.
- **Nonresident members:** **two of the three** members were run through **1040-NR + K-1** and a
  **W-7 / ITIN application** via an outside CAA in Apr–May 2026. **The third member's US tax status
  is NOT established here** — no W-7 was filed for him, which may mean he already holds an SSN/ITIN
  or is treated as a resident, but nothing on file confirms either. Do not infer residency from the
  Operating Agreement: all three give **Ukrainian street addresses** there, and that is a 2025
  mailing address, not a residency determination. Settle this before the next 1065 / §1446
  withholding call — see §6.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_

## 5. Key facts & quirks

<!-- ⚠️ ORDER MATTERS HERE TOO — the Hub client card renders only the FIRST FOUR bullets of this
     section (`bullets(...).slice(0,4)`), exactly as it does for §6's Outstanding items. Order by
     consequence: what would cause the worst mistake if someone didn't know it. Append the rest. -->

- **Pre-operational — capitalization is the central bookkeeping issue, and the P&L should be
  empty.** Nothing is expensed until the park "begins operations": spend is **capitalized** into
  one of five buckets — the physical build-out to `Construction In Progress`, readying the business
  to `Startup Costs` (§195), forming the entity to `Organizational Costs` (§709), outright
  purchases to `Fixed Assets`, and money **held as security and expected back** (the landlord's
  lease deposit, a utility's deposit) to `Security Deposit`. ⚠️ **Refundability is not the test** —
  a contractor's deposit is a prepayment consumed by the work and belongs in CIP, however
  refundable it may be on cancellation. The only P&L account that should carry anything is
  **Bank Charges**. Pinning the operations-commencement date is a live judgment call tied to the
  opening. _(Gmail — Julia's bookkeeping instructions; framework reverse-engineered from the ledger
  2026-08-14 and written up in the runbook.)_
- **Heavier than standard bookkeeping — hands-on AP, run out of the client's own mailbox:** the firm **pays vendors** from the client's account (insurance, environmental report, city permits) and sends confirmations. The **water bill is the exception — it is on autopay**, so it needs no payment action at all, only its paperwork. Everything, paid by us or paid automatically, arrives at the **client's AP mailbox** (§3), which the firm works **monthly** to download the bills and attach them to their transactions (§4). Whether any of the *other* recurring vendors are also on autopay is **not established** _(to verify)_.
- **Ownership & signing authority — exactly THREE members, and only ONE of them can bind the company:** the **Manager holds 33.4%** and the other two **33.3%** each (near-thirds, not exact — the odd 0.1% sits with the Manager). The LLC is **manager-managed with a single Manager** (himself a member) who alone has authority to bind it; the other two members have no day-to-day management or voting role. The **CFO is neither a member nor the Manager** — he does not appear in the agreement at all, so treat that title as a **group/functional role**, not a Florida-LLC office, and route anything needing a company-binding signature to the **Manager**. _(Operating Agreement dated 2025-04-18, Drive → `4-Corporate` — supersedes the earlier "likely 3–4 partners" estimate.)_
- **How the project is funded — two routes, and they are not interchangeable.** There is no
  revenue, so every dollar in comes from the owners. As the books stand, the **Manager's funding
  sits in a long-term liability (loan) account** in his name — by far the largest source — and
  **two other individuals have capital-contribution equity accounts** _(QuickBooks via Double,
  2026-08-14)_. **Money in is NEVER income.** ⚠️ **Do not read the current pattern as a rule about
  who lends and who contributes**: the Manager is himself a member, so his role cannot be what
  decides it. **Debt vs. equity is decided by the paperwork** — a note, repayment terms, interest —
  and for a partnership it flows onto the K-1s through §752. Whether a documented loan agreement
  exists for the Manager's advances is **not established here**; **ask before posting a new one.**
- **Part of a related group** of LLCs under the same owners — e.g. **Rest Invest Kids LLC** (activated alongside iKids); iKids appears to be the US **operating** LLC. Each owner is individually linked in Double to **their own separate set** of related-entity records — not one shared group _(Double contacts, 2026-07-25 sweep)_.
- **A concrete example of the hands-on AP:** the **permit-expediting vendor** sends outstanding-balance account statements, which go to the AP mailbox for handling; permit fees themselves are paid through the City of Fort Lauderdale's **LauderBuild** portal _(Gmail, Jul 2026 sweeps)_. _(The vendor's name was removed 2026-08-14 — a vendor list is client data and lives in QuickBooks/Double, not in a file that auto-publishes.)_
- **The books appear never to have used Bills or Invoices.** The chart read on 2026-08-14 (which
  returns inactive accounts too) contains **no Accounts Payable and no Accounts Receivable**
  account. QuickBooks creates A/P by itself on the first Bill, so its absence is **strong evidence
  no Bill has ever been entered**. ⚠️ **It says nothing about the rest of the ledger** — journal
  entries never create A/P, and the transaction read reached only `Deposit` and `Expense` rows, so
  entries of other kinds were not visible. **The consequence that matters is narrow and solid:**
  with no A/P, a vendor invoice paid in instalments leaves the balance still owed recorded nowhere
  in the books. Whether to start using Bills is **Julia's decision** — she set the books up
  _(2026-08-14)_.
- **The chart of accounts is purpose-built for a pre-operational build-out, and the logic is
  now written down.** Five capitalization buckets — `Construction in Progress` (producing the
  physical improvement), `Startup Costs` (readying the business, §195), `Organizational Costs`
  (forming the entity, §709), `Fixed Assets` (things bought outright), `Security Deposit` (money
  held as security) — plus the two funding routes. **The P&L should carry nothing but bank
  charges** until the park opens. ⚠️ Two things the framework does **not** yet have a home for and
  which matter for a partnership with three contributing members: **syndication costs** (legal work
  on admitting members or raising capital — permanently non-deductible, and it lands in
  `SC - Legal & Licensing` by default), and a settled answer on **construction-period rent**. The
  full framework, the boundaries and the role→account map are in the runbook,
  [`ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md).
- **There is a commercial/licensing workstream alongside the construction.** The company engaged an
  outside consultant to research potential **licensors** and represent the brand at an
  international licensing trade show, positioning the US launch on the back of the owners' existing
  **Poland** locations. It is pre-opening business development — a startup cost, not a P&L expense
  _(consultant's engagement documents, 2026-08-14)_.
- **A capital-contribution equity account exists in the name of a third individual** beyond the two
  members already identified in §6's log — which is what a third member's contributions would look
  like. **Not confirmed:** the Operating Agreement is the authority on membership and has not been
  re-checked against this. Worth settling, because *who the third member is* and *his US tax
  status* are both open items below _(QuickBooks via Double, 2026-08-14)_.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; partnership / 1065; monthly bookkeeping).
- 2026-07-20 — **Gmail enrichment sweep:** established the iKidsPark play-park profile, Fort Lauderdale FL, RU/UA language, pre-operational startup-cost treatment, hands-on AP, and the related-entity group. Ping had **no indexed meetings**; facts are from Gmail + Double contacts. Ping + Gmail now swept (see sweep-state).
- 2026-07-25 — Incremental sweep: no Double/Ping activity in window. Gmail surfaced a concrete hands-on-AP vendor example (East of Collins Expediting) and confirmed the AP inbox is firm-controlled. Recurring-expense monitor (2026-07-20) flagged the QuickBooks subscription and city water bill as not-yet-posted — see outstanding items.
- 2026-08-01 — **Incremental sweep** (baseline 2026-07-20, inclusive): Double (`get_client`, `list_client_properties`, `list_notes`, `list_contacts`, `list_activity_log`) shows **no new notes/activity** on the company record. Ping (`resolve_person` on both owners, org-wide + owner-scoped `search_meetings`, `list_client_meetings`) still finds **no indexed meetings** for iKids or either owner. Gmail (`in:inbox`/`in:sent`, `after:2026/07/20`) surfaced the "LauderBuild" permit-payment portal name and a named permit-expediting vendor (East of Collins Expediting) — both folded into §3/§5. Google Drive folder reviewed for non-sensitive system names only (bank accounts, FPL, water utility, Broward ePermits) — no credentials copied here. QuickBooks (Intuit MCP) not applicable — iKids' QBO ledger is reached through Double, not the firm's directly-connected QuickBooks instance. **Owner-with-several-businesses check:** Andrii Matiukha and Oleksii Balasiuk each carry other Double records (Rest Invest Kids LLC, and each owner's individual 1040 profile) — reviewed at the owner level; no new *iKids-specific* facts surfaced there (Rest Invest Kids LLC's own facts, e.g. it files Form 1120, stay out of this file). Also noted: Andrii Matiukha's duplicate individual Double profile (typo variant, id 719479) was **archived 2026-07-31** — matches FOLLOW-UPS #9, owner-context only, not an iKids fact.
- 2026-08-08 — **Weekend sweep (incremental, from 2026-07-20):** Double's **"2025 Taxes" tax project status was changed from In Progress back to Not Started** (activity log, 2026-08-04, by Julia) — worth reconciling against the "1065 extension appears filed" note below. Confirmed each co-owner also has an individual 1040 profile in Double, and found continuing LauderBuild/permit-expediter activity in Gmail (both added to §5). Ping org-wide meeting search returned no relevant/legible content for this client.
- 2026-08-10 — **Targeted people/ownership sweep** (Lilian, looking for a contact she could not find in Zoom). Read the **Operating Agreement** and settled the ownership structure: three members, equal thirds, single Manager (§5). Established that the **CFO is not a member or Manager**. Located the two **2025 Zoom calls** the CFO attended — 2025-06-20 (titled as the referrer's consultation, not iKids) and 2025-07-15 "Ikids Group LLC Setup" — which is why a Zoom search by client name finds nothing; Ping only indexes from ~Jun 2026, so **neither call has a transcript**. Registered the CFO as a Double contact **with no portal access**. Sources: Gmail, Google Calendar, Google Drive, Double. _(Worked by Lilian.)_
- 2026-08-11 — **Where the paperwork is kept, from Lilian:** Julia's Google Drive → the client's
  folder → `Bookkeeping` → one folder per month of the year. Folded into §4 and the runbook, and it
  closes the open question this file raised the same day.
- 2026-08-11 — **How this client's bookkeeping actually runs, from Lilian.** The client's **AP mailbox** (§3) is where the vendor bills and payment confirmations arrive, the firm has access to it, and **every month** we must go in, download the bills, and attach them to their payment transactions. The **water bill is on autopay** — nothing to pay, only its paperwork to collect. Recorded here and turned into the client's first bookkeeping runbook, [`ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md). _(Worked by Lilian.)_

- 2026-08-14 — **The categorization logic was reverse-engineered from the ledger and written down,
  and four defects were found and three fixed.** Lilian had transactions to categorize with Julia
  unavailable and nothing recorded explaining why the chart is shaped as it is. The full ledger
  (every bank-feed transaction since the file opened) plus both financial statements were read end
  to end — with the limit that the connector returned only `Deposit` and `Expense` rows, so bills
  and journal entries were **not** readable and a material share of the year's asset movement is
  unexplained by what was seen. **What it established:** the five-bucket framework, the
  producing-the-improvement vs. readying-the-business boundary, the security-deposit test, and the
  role→account map — all now in the runbook, which stopped being a seed. **What it found:**
  (a) **site utilities are posted two different ways in 2026** — to `CIP - Utilities` through
  March, to the P&L `Utilities` account from April, same vendors; **the reason for the April change
  is not recorded**, and **Lilian moved the P&L balance back**; (b) a **marketing vendor sat in
  `Legal & Professional Fees`** while `SC - Marketing` had never been used — **Lilian moved it**;
  (c) an **incoming-wire bank fee was posted directly to the `Startup Costs` parent**, which also
  breaks the no-posting-to-parents rule — **still to fix**, along with an older balance on the same
  parent that only an account report will reveal; (d) **two large payments sit in `SC - Travel`
  that do not look like travel**. **What was categorized:** a general contractor's deposit (a new
  `CIP : General Contractor` sub-account was created for it, because a GC contract cannot be split
  across trades before any work is done) and an asbestos survey required for permitting
  (`CIP - Permits & Fees`, alongside the other permit-driven inspections). **Also established:**
  the bank feed has been dead since 2026-07-20, the client asks for transaction reports
  periodically, and the books have never used Bills. _(Worked by Lilian.)_

- 2026-08-18 — **The owners are opening a new related entity, `iKids Miami LLC`, and we quoted it.**
  A brand-new Miami location under the same owners; addressed to **Oleksii Balasiuk**. We built a
  **bilingual (RU/EN) monthly proposal** on the firm's **top service tier** — CFO-level advisory
  (proactive tax planning, planning around each significant decision, senior involvement on demand,
  coordination with attorney/lender/foreign accountant) on top of the usual bundle (bookkeeping,
  monthly financials, the **1065** partnership return + K-1s, sales tax, 1099s, FL annual report),
  **plus employee payroll (up to 5)** as they hire. **No owner payroll** — a partnership takes draws.
  It also carries an **optional Accounts Payable add-on** — the same hands-on AP we already run for
  iKids Group (working the vendor inbox, paying bills + permit fees, monthly reconcile). **Start
  December 1, 2026.** For continuity, the original iKids Group agreement was GoProposal **#JKA1243**.
  _Fees live in the delivered proposal / Double, kept out of the repo (two-data-homes)._ **Follow-up:**
  iKids Miami LLC is a **distinct entity** — once it is set up in Double it needs its **own** Client
  Intelligence file (related entities get their own, like Rest Invest Kids LLC — §5), not folding
  into this one. _(Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)
<!-- ⚠️ ORDER MATTERS HERE. The Knowledge Hub's client card renders only the FIRST FOUR bullets
     of this list (`bullets(...).slice(0,4)` in .claude/skills/client-intelligence/render/build.mjs),
     and the same cap applies to §5's quirks. The .md keeps everything — the card is a summary —
     but whatever leads this list is what the team sees without opening the file. Keep the four
     that BLOCK something at the top; append the rest. (Learned 2026-08-14 by pushing four live
     blockers off the card without noticing.) -->
- ⚠️ **The QuickBooks bank feed has been disconnected since 2026-07-20** — reconnect it and
  backfill the gap. Everything downstream (the close, the reports we send the client, any review)
  is capped at that date until it is done. Also worth finding out **why** it dropped.
- ⚠️ **A 1065 extension *appears* filed (Jul 2026) — nobody has verified it.** A bookkeeping task
  also showed overdue in June. **Confirm the return status**, because this is the item with the
  largest downside on the list: a partnership that turns out not to be extended accrues
  failure-to-file penalties **per partner, per month**.
- **Third member's US tax status is unsettled — this one DOES need an answer.** Only two of the
  three members were put through a W-7/ITIN (§4). Whether the third already holds an SSN/ITIN, or
  is a US resident, changes his K-1 treatment and any §1446 withholding. Ask Julia or the client
  before the next 1065. ⓘ **A lead:** QuickBooks carries a capital-contribution equity account in a
  third individual's name (§5) — check it against the Operating Agreement; it may close, or narrow,
  this question and the one below.
- **Both nonresident members' ITIN applications** — W-7 packages went out by certified mail in
  **May 2026** via the outside CAA. Confirm the ITINs were actually issued.
- **Five decisions are waiting on Julia**, all from the 2026-08-14 categorization work and none of
  them safe to decide in a session — **none is urgent, which is why they sit below the four
  above**: whether to start using **Bills / Accounts Payable** (with no A/P in the chart, a
  part-paid construction contract leaves the balance owed recorded **nowhere** — record it durably
  in the meantime); whether **construction-period rent** belongs in CIP rather than
  `SC - Office Rent`; that **`Construction In Progress` is typed Other Current Asset** and is not a
  current asset; that **no account in the chart carries a number**; and **which basis** these books
  are kept on (the "P&L should be empty" presentation is tax-basis, not GAAP). Each is a row in the
  runbook's *Open decisions log*, cited there by its question — **not by row number, which shifts
  every time the log grows.**
- **Pin the "operations begin" date** — it stops capitalization and starts normal expensing and
  depreciation, and it governs every rule in the runbook. Julia's call; until it is set, the
  documented default is to keep capitalizing.
- **Find the consultant's engagement deposit.** The final payment and the expense reimbursement are
  accounted for; the deposit was not among the transactions the connector returned — which does
  **not** mean it is absent from the ledger, since bills and journal entries were unreadable. Look
  in QuickBooks directly, in the second account, or ask whether it was paid personally.
- **Clear the `Startup Costs` parent.** An incoming-wire fee (belongs in `Bank Charges`) plus an
  older balance from 2025 that did not come through the readable transactions — only an account
  report on the parent over All Dates will show it.
- **Identify the two large `SC - Travel` payments** — an international wire to a foreign bank and a
  payment to a property-management company. Neither reads as travel; the second looks like rent or
  a deposit.
- **Trade-show registration charges may be misfiled** in `SC - Legal & Licensing`. If they are the
  registration for the licensing trade show the consultant attended, they belong with that
  engagement in `SC - Marketing`. Check the receipt.
- **Syndication costs have nowhere to go, and this client will generate them.** Legal work on
  admitting members or raising their capital is permanently non-deductible for a partnership —
  neither §195 nor §709 — and three members have contributed capital. Review what is already in
  `SC - Legal & Licensing`, then decide with Julia whether to open a separate account.
- **W-9 sweep is overdue.** Individuals working the site pass the $2,000 threshold within months,
  and the firm pays them directly — so a missing W-9 is our gap. Sweep the labour *and* contractor
  accounts, not just one.
- ~~Reconcile "landlord water bill" vs. "City of Fort Lauderdale water — auto-paid"~~ — **answered by Lilian 2026-08-11:** there is **one** water bill, it is the **City of Fort Lauderdale** account, and it is **on autopay**. The old "landlord water bill" wording was wrong and has been corrected in §4/§5.
- QuickBooks subscription and city water bill were overdue as of the 2026-07-20 mid-month check — confirm whether they posted late.
- A possible new recurring vendor charge (monthly, since ~May 2026) was flagged by the recurring-expense monitor for review — not yet on the watchlist.
- AP-inbox Google security alert (new sign-in, 2026-07-23) — confirm it was expected.
- **Tax-season readiness — organizer status for the two iKids partners is still unresolved** as of 2026-07-30 (FOLLOW-UPS #10): bookkeeping/Schedule-C-style clients get no company organizer, so the real gate is each **owner's personal organizer**; both owners' organizers still need chasing.
- Recurring **Double task-digest** emails (Aug 3–7, 2026) show a task assigned to the bookkeeper as due/overdue — confirm it's actioned.

### Information still needed
- [x] Exact number of partners — **three**; Manager 33.4%, the other two 33.3% each; manager-managed with a single Manager _(Operating Agreement, 2026-08-10)_
- [x] The third member's email address, so he can be registered in Double — **⏸ PAUSED INDEFINITELY by Lilian (2026-08-10): do NOT chase this**, in the weekend sweep or anywhere else. No email for him exists in Gmail, Drive or Double; every thread runs through Julia or the outside CAA. To reopen: get it from the client or the CFO, then register him in Double as a contact record with **no portal access**, exactly as was done for the CFO. This is the **contact record only** — the third member's **tax status** is a separate question and is still live (§4, §6 outstanding).
- [ ] Fiscal year-end
- [ ] Credentials Drive link; the "operations begin" date once known
- [ ] **Which other recurring vendors are on autopay** — only the water bill is confirmed. The rest
      are believed to be paid by us on request, but nobody has listed them (§5, and the runbook's
      open-decisions log)
- [x] **Where the downloaded bills are filed** — **answered 2026-08-11 (Lilian):** Julia's Drive →
      the client's folder → `Bookkeeping` → a folder per month, **and** attached to the transaction

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706689](https://app.doublehq.com/close?cid=706689)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1_RBDmfPaRsV0mhvzZl-XNjRG8zqgjQfn)
  - `4-Corporate` — Articles of Organization, EIN letter, **Operating Agreement** (the authority on
    members, percentages, and the Manager — §5), and the members' immigration documents.
- **Related SOPs:** [`../../sops/ikids-group-bookkeeping-review.md`](../../sops/ikids-group-bookkeeping-review.md)
  — the monthly bookkeeping runbook (the AP-mailbox retrieval, the autopaid water bill, the
  startup-cost rule).
