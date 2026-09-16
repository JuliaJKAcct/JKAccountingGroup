# YES TEAM CORP

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-16

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

- **Business name:** YES TEAM CORP
- **Entity type:** Corporation — **S-corp** (files Form **1120-S**) _(Double)_
- **Home state:** **Florida** _(strong inference — the firm was forming the FL entity in Dec 2025; not documented outright)_
- **Industry / what they do:** One-owner **marketing** S-corp — the owner provides marketing services billed through this entity (recurring monthly service invoices to **Alirm LLC** and to **Mellanni**, an e-commerce home-textiles brand). Effectively a **solo consultant** invoicing through his S-corp. _(Gmail)_
- **Primary language:** **Russian** (client Zoom recaps and family correspondence in Russian). _(Gmail)_ Double's own `Preferred language` client property confirms **Bilingual (EN/RU)** _(Double client properties, 2026-08-15)_.
- **Our engagement (services we provide):** Bookkeeping (**quarterly**); **income tax (Form 1120-S)**; **payroll via Gusto (AutoPilot, monthly)**; annual-report filing. Sales tax N/A; 1099 prep not required. **Assigned bookkeeper: Lilian.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706718](https://app.doublehq.com/close?cid=706718)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Gusto payroll (AutoPilot) | Monthly single-shareholder payroll; Gusto auto-files quarterly returns | _(pending — Drive link)_ | Gusto invoice auto-debited from the corp account |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** Yes — **automatic** _(Double)_
- **Provider / frequency:** **Gusto**, on AutoPilot — monthly single-shareholder run; Gusto auto-files the quarterly payroll returns. _(Gmail)_
- **Off-cycle runs:** used to **reimburse the owner** for business expenses paid on his personal card — treated as **non-taxable reimbursements (accountable-plan style)**, not W-2 wages. Recurring each quarter. _(Gmail)_

### Personal-card expense reimbursement (quarterly)
- **Applies?** Yes — the owner charges company costs to a **personal Chase card** and is reimbursed each quarter. Driven by the [`personal-card-reimbursement` skill](../../../.claude/skills/personal-card-reimbursement/). **First full run: Q2 2026** _(Gmail, 2026-07-11)_.
- **The cycle:** the owner emails a card export → the firm splits business from personal and maps each business line to the QBO chart → **Julia reviews** and removes what is not deductible → Lilian sends the expense report with the quarter's financial statements → the total is paid as a **Gusto off-cycle run**.
- **How it books:** each business line is an expense **debit** with the credit to **`Used personal card`** — an Other Current Liability on this client's chart; the off-cycle run clears it. **Personal lines are never entered** (it is the owner's own card, not the company's).
- **The account map** — the owner's own purpose label → the QBO account, settled in Q2 2026: `Airfare` → `Travel` *(but a taxi-app line → `Taxis`)* · `Travel Misc` and `Travel Deposit for Business Trip` → `Travel` · `Transportation Local` / `Travel - Transportation Local-Overseas` → `Taxis` · `Travel Meals - Business Trip` and `Meals with potential clients` → **`Business Development`** · `Auto Expense` → `Auto:Other Auto Expenses` · `Auto Expense- Gas` → `Auto:Gas` · `Subscription` → `Office Expenses:Software&Subscriptions` · `Office Expense` → `Office Expenses:Other Office Expenses`. ⓘ **A `Meals` account exists on the chart and Q2 did not use it** — every meal went to `Business Development`. Keep the precedent; splitting them out is Julia's call, not a tidy-up.
- 🛑 **WHOEVER PREPARES THE 1120-S MUST BE TOLD THIS: the meals are inside `Business Development`.** The return adds back **50% of meals** at **Schedule M-1 line 3b** and reports the disallowed half at **Schedule K line 16c**, where it **also reduces basis and AAA** ([`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md)). **With meals buried in a business-development account there is no account balance to take 50% of**, so the figure has to be **extracted by hand from the quarterly expense reports** — and if nobody does, the return silently over-deducts. ☑️ *Registered as an open question in §6: split `Meals` out, or keep the manual extraction?*
- 🔴 **Julia's Q2 ruling, and it is the standing rule for this client: ENTERTAINMENT IS NOT DEDUCTIBLE and comes out of the claim.** She removed a theme-park admission the owner had labelled `Business Trip with the client`, and a grocery run labelled `Office Meals`. **Both exclusions were stated to the client line by line, with the reason** — he accepted them without argument. _(Gmail, 2026-07-11.)_
- 🔴 **THE OWNER HAS TWO CARDS AND THEY ARE TREATED IN OPPOSITE WAYS — get this wrong and the same charge is booked twice, or a distribution is reimbursed as an expense.** _(Established 2026-09-16 from the ledger.)_
  - **The card these expense reports come from** is the owner's own and **he pays it**. It is **not** connected to QuickBooks. Business lines are booked by the quarterly summary journal entry against **`Used personal card`** and reimbursed. **Personal lines are never entered at all.**
  - **The card on the chart of accounts as a Credit Card account** is in the owner's name but **the company pays it** from the operating account, and **its feed IS connected** — so it is categorised transaction by transaction like any company card. **Its personal lines go to `Distributions`**, not to a reimbursement. *(Seen live: food-delivery charges posted to `Distributions`; an air ticket posted to `Travel` and its later refund reversed against the same account.)*
  - ⚠️ **The two cards share merchants** — the same restaurants, the same travel agency. **Before posting the quarterly entry, check the connected card for the same charge**; a match on date *and* amount is a double-booking. _(Checked for 06/20–08/31/2026: same merchants, different days and amounts — no duplicates. And the connected card showed no activity after early August in that read, so a late-categorised charge could still collide — close that card's month first.)_
- 🧾 **The quarterly entry, and only ONE of the two is ours to make** _(read off the Q2 pair, 2026-09-16)_:
  - **We create the EXPENSE side.** A journal entry dated **the last day of the period covered**, memo **`<n>-Reimbursement <MM-MM>`** (Q2 2026 was `1-Reimbursement 01-06`), with **one debit line per QBO account — exactly the expense report's pivot, row for row — and the whole total credited to `Used personal card`.** The pivot *is* the entry.
  - **Gusto posts the PAYMENT side by itself** when the off-cycle run pays: debit `Used personal card`, credit the operating account, dated the payment date. ⛔ **Do not create it by hand.** *(Confirmed by shape: every monthly payroll posts the same way, and the reimbursement entry carries **no tax lines** — which is what a non-taxable reimbursement looks like as opposed to wages.)*
  - ✅ **Before posting, `Used personal card` should be back at zero** from the previous quarter.
- 🛑 **THE JOB TURNS ON A PURPOSE LABEL THE OWNER SUPPLIES — and the second file did not have one.** In Q2 every line of his export carried his own purpose in his own words (`Travel Meals - Business Trip`, `Personal Expense`, `Business Trip with the client`), which is what made it categorisable; **four lines were his own `Personal Expense`**, so sending the file is a request, not a claim that everything on it is business. The **2026-09-08** export for 06/20–08/31 arrived with an **empty `Memo` column** — see the next bullet.
- ⚠️ **2026-09-16 — the 06/20–08/31/2026 request CANNOT be worked as sent, and the reason is structural, not clerical.** The export carries **no purpose on any line**, where the Q2 file had the owner's own label on every row. The period is also a different shape from Q2's: **ten weeks abroad**, dominated by daily local transport and daily cafés — the pattern of living somewhere rather than of a dated business trip. **Neither Gmail nor Ping records any business purpose for it** (searched `Poluyko`/`Yes Team` from 2026-06-01, and Ping org-wide, on 2026-09-16 — the only hits are Gusto notices, the Mellanni invoice thread and other clients' noise; *that is the result of those two searches, not a claim that no purpose exists*). ✅ **What the firm CAN settle without him:** the lines that need no purpose — the §4 exclusions above, plus a small number that are business on their face. ⛔ **Everything else is held** — a merchant name never establishes business purpose on a personal card, and **the accountable plan is what is at risk if it is guessed: a reimbursement of personal spending is not a reimbursement, it is wages.** **Delivered to Lilian as a three-tier draft report; the question list is grouped by trip leg, not by line. The line-level detail stays in the report and in Double, not here.**

### Bookkeeping & monthly close
- **Applies?** Yes — **quarterly** _(Double)_
- **Close work in progress as of 2026-08-24:** the "Uncategorized Transactions" task was marked priority and two period-close tasks — one for the company account (ending `1637`) and one for the owner's individual account (ending `9575`, "I. POLUYKO") — moved to In Progress. Bank statements for both accounts (company: through 07/31; individual: 07/20 and 08/20 cycles) were uploaded to the client's Drive folder the same day. _(Double activity log + Google Drive, 2026-08-24, read 2026-08-29)_
- **Continued 2026-09-07:** the company account (`1637`) August 2026 bank statement was uploaded to Drive by Julia — the close is being kept current month over month. _(Google Drive, `20260831-statements-1637-.pdf`, read 2026-09-12)_
- **2026-09-08:** the owner emailed Lilian (cc Julia) asking that expenses he paid on his **personal card** be allocated to the company and reimbursed to him — a routine reimbursement request, consistent with the existing accountable-plan-style off-cycle-run pattern in §4 Payroll. No figures recorded here. _(Gmail, 2026-09-08)_

### Income tax
- **Applies?** Yes — **Form 1120-S** (S-corporation) _(Double)_
- **Our role:** We prepare income tax _(Double: Income Tax = yes)_

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_
- **1099 preparation:** Not required this year _(Double)_

## 5. Key facts & quirks

- **Newly formed entity; S-election (Form 2553) filed Jan 2026** — 2026 is effectively the first full operating / tax year. _(Gmail)_
- Appears in older email as "Yes Team **LLC**", now "Yes Team **CORP**" — an LLC taxed as S-corp.
- As an **S-corp**, watch reasonable-compensation / owner-payroll at year-end.
- **Family cluster at the firm:** the owner's parents are also clients (a FL LLC for partnership tax prep) and another FL entity was being formed for the family — the firm cross-refers within this family; keep each entity's books separate.
- The owner is linked to a **second Double client (id 710636)** — this is **his own individual
  (1040) client account**, not a related entity. _(Resolved 2026-07-30.)_
- **Engagement timing — the owner's personal return starts with us in 2026.** He is **not**
  filing his 2025 individual return through the firm; he **begins filing with us from 2026
  onward**. This lines up with the entity itself (formed late 2025 / S-election Jan 2026, so
  2026 is the first real tax year). _(Lilian, 2026-07-30.)_
  - ✅ **Resolved:** the individual client's (710636) **2026** tax project mislabel is **fixed** —
    on 2026-07-30 its status was updated from `wontFileWithUs` to **"Not Started,"** consistent
    with him filing 2026 with us. The "known bad data" warning that used to live here no longer
    applies. _(Double activity log, 2026-07-30.)_
  - He has **no 2025 project** on the individual account, which is correct given the above.
  - A completed **2025** organizer PDF does sit in his TaxDome folder, but since we aren't doing
    his 2025 return it's moot; a **fresh organizer will be needed for 2026**.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; S-corp / 1120-S; quarterly bookkeeping; automatic payroll).
- 2026-07-20 — **Gmail enrichment sweep:** established the marketing-services profile (customers Alirm / Mellanni), RU language, FL (inferred), Gusto AutoPilot payroll + accountable-plan reimbursements, and the Jan-2026 S-election. Ping had **no indexed meetings**; facts from Gmail. Ping + Gmail now swept (see sweep-state).
- 2026-07-30 — Surfaced while building the tax-readiness list. Resolved the **710636** question
  (it's the owner's individual 1040 account) and captured the **engagement timing** from Lilian:
  his personal return is **not** with us for 2025 and **starts with us in 2026**. Also logged the
  `wontFileWithUs` mislabel on his 2026 project as known-bad data to ignore — see §5.
- 2026-08-01 — Weekly incremental sweep (baseline 2026-07-20). Double activity log shows the
  owner's individual (710636) 2026 tax-project mislabel (`wontFileWithUs`) was corrected to
  "Not Started" on 2026-07-30 — see §5. Ping (business + owner name, org-wide semantic),
  Gmail (`in:inbox`/`in:sent`, business name + owner email), and Google Drive turned up nothing
  else new in scope (Drive files present are all dated before the baseline). No repo mentions
  (SOPs/FOLLOW-UPS/BACKLOG) beyond the standing index entries.
- 2026-08-15 — **Weekend sweep (incremental, from 2026-08-08):** Double (`list_client_properties`,
  `list_notes` — none exist, `list_contacts`, `list_activity_log` from 2026-08-08 — empty) shows no
  change since baseline beyond the `Preferred language` property (Bilingual EN/RU), added to §1.
  Owner identified as **Igor Poluyko** via Double contacts (also linked to Double client 710636, his
  individual 1040 account, already known — see §5). Gmail (`in:inbox`/`in:sent`, business name +
  "Poluyko", after:2026/08/08) returned nothing but the firm's automated weekly CI-sweep digest. Ping
  client-scoped semantic search returned one hit from a June 27, 2026 meeting where Igor Poluyko
  spoke ("Manager company, sure") — **predates the baseline**, not new. Google Drive full-text
  search for the business name, modified after 2026-08-08, returned only unrelated files (other
  clients' documents). No new activity in the window; no SOP exists yet for this client.

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** Double activity log: 0 entries. Gmail, Ping and Drive all returned only unrelated noise or the firm's own automated digest — no client-specific activity found on or after 2026-08-15. Chase pass on all three outstanding items: no updates found on any (ages/searches recorded below). Credentials Drive link not chased this run (budget).
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double activity log (from 2026-08-22) showed **close-related task activity on 2026-08-24** (folded into §4) — the first Double-side movement recorded for this client since profiling began. `list_notes` unchanged (none exist). Google Drive (`fullText contains 'Yes Team', modifiedTime > 2026-08-22`, `excludeContentSnippets: true`) corroborated it: bank statements for both the company (`1637`) and the owner's individual (`9575`) accounts, uploaded 2026-08-24. Ping (org-wide, "Yes Team Corp Poluyko marketing retirement plan Mellanni") returned no legible, on-topic hits — all results predate the window. ⚠️ **Lead found, not yet verified:** a 2026-08-28 marketing-style email from a third-party filing service (`fl@e.myfilingservices.com`) claims the company's **2026 Sunbiz Annual Report (EID P26000000628) is past due**, deadline May 1 — this **contradicts** Double's `Annual report: Yes — we handle it` and the firm's own log, which has no record of filing or missing this year's report. These solicitation-style "past due / reinstatement" emails are a known pattern that scrapes public Sunbiz data and are not always reliable, so this is recorded as an **unsettled, unconfirmed lead** — see Outstanding items. Chase pass on the three standing outstanding items: no updates found on any (ages/searches below).
- 2026-09-12 — **Incremental sweep (baseline 2026-08-29→2026-09-12).** Double: `list_client_properties` unchanged (10 properties, same as prior sweeps); `list_notes` still empty; `list_activity_log` (from 2026-08-29) returned **zero entries** — no Double-side movement this window. Gmail (business name + "Poluyko"/"Mellanni"/"Alirm", after:2026/08/29) surfaced the owner's 2026-09-08 personal-card reimbursement request (folded into §4) plus routine Gusto AutoPilot payroll-run/invoice-paid notices for the Aug 2026 pay period (2026-09-01/02) — nothing else client-specific. Google Drive (`fullText contains 'Yes Team'`, `modifiedTime > 2026-08-29`, `excludeContentSnippets: true`) found the company account's **August 2026 bank statement** uploaded 2026-09-07 (folded into §4); the other three hits in the same search (a Magnum Process spreadsheet, an hours spreadsheet, a Prime Road Carriers driver-list) do not name or concern this client and are treated as noise, not findings. Ping (org-wide, "Yes Team Corp Poluyko marketing retirement plan Mellanni invoice Sunbiz annual report") returned no legible, on-topic hits — all results are noise from unrelated clients' meetings. **Chase pass, all three tracked outstanding items:** the Sunbiz Annual Report delinquency lead — STILL UNVERIFIED, no corroboration found and no registry-lookup tool available to this session; the registered home state — STILL UNCONFIRMED, same reason; the retirement plan (Gmail searched `after:2026/08/29` for retirement/401(k)/TPA terms) — STILL OPEN, **~7.5 months** pending, nothing client-specific found (only other clients' unrelated 401(k) threads); the Mellanni invoice-format item (Gmail searched `after:2026/08/29` for "Mellanni") — STILL OPEN, **~3 months** pending, nothing found.
- 2026-09-16 — **Personal-card reimbursement, period 06/20–08/31/2026 (Lilian's session).** Worked the owner's 2026-09-08 request against the Q2 2026 file as the template. Read the client's chart of accounts from Double (`get_transaction_accounts`) — it confirmed the Q2 target accounts and surfaced the **`Used personal card`** liability account that carries the mechanism; recorded the full account map and the booking route in §4. Read the Q2 delivery email, which established the cycle **and Julia's entertainment ruling** (§4). ⚠️ **The finding: the new export has no purpose column**, so the basis the Q2 work stood on is absent — written up in §4 (*Personal-card expense reimbursement*) and raised with Lilian rather than resolved in-session. Gmail (from 2026-06-01) and Ping (org-wide) searched for a business purpose for the travel: **nothing found** — *that is the result of those two searches, not a statement that no purpose exists.* Also captured the reusable method as the [`personal-card-reimbursement` skill](../../../.claude/skills/personal-card-reimbursement/). No figures in this file; the draft report went to Lilian directly.

### Outstanding items (CI-only — never in the SOP)
- 🔴 **OPEN since 2026-09-16 — the 06/20–08/31/2026 personal-card reimbursement is BLOCKED on the owner.** He has to state the business purpose of the summer travel before the bulk of the claim can be booked or paid; the firm has settled only the lines that need no purpose (§4). **Waiting on:** Igor, question list grouped by trip leg. **Until he answers there is no reimbursement figure for the period** — and a number produced without his answer would not be an accountable-plan reimbursement, it would be wages. ⓘ **Also worth putting to him once:** the Q2 file carried his purpose label on every line and this one did not, so asking him to keep labelling the export closes this permanently instead of quarterly.
- ⚠️ **Unverified since 2026-08-29 — possible Sunbiz Annual Report delinquency.** A third-party filing-service marketing email (`fl@e.myfilingservices.com`, 2026-08-28) states the 2026 Annual Report (EID P26000000628) is past due since May 1. **Contradicts** Double's `Annual report: Yes — we handle it`. STILL OPEN, **~2 weeks** pending, no deadline beyond the claimed May 1 date. No corroboration found in Double, Gmail, or Drive as of 2026-09-12. **Recommend a direct Sunbiz lookup** (no registry-lookup tool available to this session) before treating this as real — these solicitation emails are commonly sent regardless of actual status.
- **Mellanni invoice format** — the customer asked (Jun 2026) that invoices be reissued with proper vendor info + service names. STILL OPEN, **~3 months** pending, no deadline. A search of Gmail bounded `after:2026/08/29`, on 2026-09-12, for "Mellanni" found nothing.
- **Retirement plan** — proposals were presented (Feb 2026) by an external TPA. STILL OPEN, **~7.5 months** pending, no deadline. A search of Gmail bounded `after:2026/08/29`, on 2026-09-12, for TPA/retirement-plan/401k terms again found only threads about other clients' plans (SensusTech's Human Interest 401(k), the firm's own CPE mailers) — nothing specific to this client's decision.
- Confirm the **registered home state** definitively (strongly inferred FL, not documented). Not chased this run either (no registry-lookup tool available).
> ⚠️ **Order matters here, it is not cosmetic: only the FIRST FOUR bullets are published** to the Knowledge Hub and the CI review dashboard (`render/build.mjs` slices the list at four). These five are ordered by consequence — the blocked reimbursement, the possible Sunbiz delinquency, the client-facing invoice-format request, then the retirement-plan decision. **The home-state confirmation is deliberately fifth and therefore unpublished**: it is the only one already answered in substance (§1 records FL as a strong inference) and the only one nobody is waiting on. _(Decision recorded 2026-09-16 — adding a sixth means demoting one of these, not appending.)_

- ~~Clarify the **second linked entity (Double 710636)**~~ — **resolved 2026-07-30:** it is the
  owner's own individual (1040) account, not an entity. Individuals don't get their own CI file;
  his return details live here in §5.

### Information still needed
- [ ] **Julia: split `Meals` out of `Business Development`, or keep extracting the meals by hand at return time?** Raised 2026-09-16 — see §4. Either answer is fine; what is not fine is nobody knowing the meals are in there when the 1120-S is prepared.
- [ ] Confirm registered home state; fiscal year-end
- [ ] Credentials Drive link; the second linked entity (710636)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706718](https://app.doublehq.com/close?cid=706718)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1SAhdDnFcfJAgaXAjssRuiEOlncNPODPp)
- **Related SOPs:** _(pending — links into ../sops/ once written)_
