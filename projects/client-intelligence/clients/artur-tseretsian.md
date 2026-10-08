# Artur Tseretsian

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-08

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
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.

## 1. Snapshot

- **Business name:** Artur Tseretsian (individual — the tax-prep engagement is personal). ⚠️ **Update:** the client now also has a registered company, **Rewhip LLC** — the firm filed its Articles of Organization and obtained its **EIN** on his behalf; incorporation documents were sent to the client **2026-07-15** _(Gmail, thread "Rewhip LLC - incorporation documents")_. Rewhip LLC is **distinct from Operex LLC** (the car-sales business he works with, not his own) — this resolves the prior open question about the "Rewhip" Drive-folder name. Rewhip LLC has **no Double client record of its own yet** and no tax-prep engagement is on file for it — see §6 outstanding items.
- **Entity type:** Individual / sole proprietor (Schedule C activities reported on Form 1040). Rewhip LLC's own entity/tax classification is not yet established with the firm.
- **Home state:** Florida (South Florida)
- **Industry / what they do:** Two income activities — (1) **used-car reselling & auto transport** — income comes through **Operex LLC** (buying/selling cars); he is linked to a car-sales business he works with, not a company of his own; (2) **online gaming** — buying and selling CS:GO / CS2 skins on the **CS Float** marketplace (**2025 only**).
- **Household / filing status:** Married — assume **Married Filing Jointly** (confirm). Spouse is a **homemaker**: **no income in 2023–2024; received a W-2 in 2025**. **Two dependent children** — the younger was **born during 2024** (first claimed in 2024); the older is school-age. One child's SSN is **pending** (card lost, client resolving at the SSA). Names, dates of birth, and SSNs are in **Double**, not here.
- **Primary language:** **Russian only** — Double's preferred-language property reads `Only Russian` _(Double, read 2026-10-08)_.
- **Our engagement (services we provide):** Individual income-tax **clean-up + preparation** — **Form 1040 with Schedule C** — for tax years **2023, 2024, 2025**. New client; we reconstruct from the client's bank statements.
- **Fiscal year-end:** December 31
- **Accounting platform:** None (no QuickBooks; personal bank accounts only)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Spouse — secondary portal contact, full client-admin/tax/financial/files access _(added 2026-07-30, source: Double)_ | Double client (link below) |

- **Double client:** https://app.doublehq.com/close?cid=752202

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Bank — credit card | Statements for tax categorization | _(pending — Drive link)_ | Bank of America personal **credit card, ending 7104** |
| Bank — checking/debit | Statements for tax categorization | _(pending — Drive link)_ | Bank of America personal **debit/checking, ending 9561** |
| CS Float (marketplace) | Gaming income/expense (skins) | _(pending — Drive link)_ | Seller profile **"Zeliboba_asl"** (KYC-approved) |

- **Note:** the client also has **other bank accounts** and **external credit cards** (Capital One, American Express, Merrick, Credit One, FPB) whose statements we don't yet have — some business income/expense flows through those, not only the two BofA accounts above.

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No (individual taxpayer).

### Payroll
- **Applies?** No.

### Bookkeeping & monthly close
- **Applies?** Was "No" as of 2026-08-01; **now unsettled.** A **"JK Accounting Group — Monthly Proposal Generator" agreement was signed via Adobe Sign 2026-07-29** between Julia Kononova and Artur Tseretsian _(Gmail, "Completed: You're copied on..." thread, 2026-07-28/29)_. Scope (personal vs. Rewhip LLC bookkeeping) and fee are not visible from the email alone — confirm with Julia which entity this proposal covers before treating monthly bookkeeping as active on this record.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** Form **1040** (individual, **MFJ** assumed) with **Schedule C** for the business activities; tax years **2023, 2024, 2025**.
- **Our role:** We prepare the return (clean-up from bank statements).
- **Organizer status:** Sent (Double). Client completed **~30% of the 2023** organizer (General Info only); 2024/2025 not started. The firm prepared **working-copy organizers for 2023, 2024, 2025** (delivered to the team; sensitive IDs kept in Double).
- **Process notes (→ future SOP):** the core of this engagement is the **categorization method** in §5 — separating business from personal on personal bank accounts to build Schedule C.

### Licenses & other filings
- **Applies?** _(pending — likely N/A for an individual)_

## 5. Key facts & quirks

The client's **personal** BofA accounts are used heavily for **business**, so the
work is separating business vs personal **transaction by transaction** to build
Schedule C. Categorization framework **agreed with the client (Jul 2026)** — this is
the raw material for a future "personal-account tax-prep categorization" SOP:

- **Income.** Zelle / received transfers are **business income**, EXCEPT a confirmed
  short list of **personal** counterparties (the specific list is kept in the working
  file, not here). **Deposits** (cash / ATM / branch / check / ACH / wire) are **set
  aside for client review** — not auto-counted as income.
- **Crypto / Zelle reporting position (Julia to review with the client).** In reality
  most Zelle in/out are **crypto ⇄ USD exchanges — not income**. The client does **not
  want to disclose crypto**, so he reports Zelles **received as business income** and
  Zelles **sent as personal expense**. Recorded so Julia can discuss the position.
- **Payments.** Zelle **sent = personal** by default; Zelle sent to **auto/transport
  companies = deductible business** (moving the cars he resells).
- **Merchant rules.** Amazon, PlayStation, restaurants/meals, taxi/Uber/Lyft,
  AliExpress, hookah lounges ("pipa") = **personal**; **eBay = business**.
- **Gas stations.** Charge **≥ $25 = fuel (business)**; **< $25 = personal** (assumed
  snacks/food/drinks at the store).
- **Travel** (airfare / hotels) = **flagged for Julia to decide** (not auto-classified).
- **Catch-all.** Any merchant **without a specific rule = personal** — the client
  stated he had **very few business expenses**, so anything not identified is personal.
- **Auto financing** (Lendbuzz, Westlake) = vehicle loans: **principal not deductible,
  interest is** (needs the amortization schedule to split).
- **Home office** = client gave a **2023 rent estimate** for a home office (figure kept in
  the working file / organizer, not here); 2024/2025 TBD. Julia to set the method
  (Form 8829 %); not 100% business.
- **Vehicle** = the client **bought and later sold a car** during the period —
  purchase & sale documents pending (relevant to Schedule C / any gain on sale).
- **Health insurance** = personal; client to provide **Form 1095-A** per year. ⚠️ **2025 is
  Marketplace coverage (Ambetter)** — the card shows its premiums early in the year, low enough that
  advance credit was almost certainly paid. **Form 8962 is required, and without the 1095-A the 2025
  return cannot be e-filed** _(2026-10-08)_.
- **Pass-through** = money received and, the same day, routed to an auto vendor (e.g.
  Autotrader) on a third party's behalf → **neither income nor expense** (one confirmed
  2023 case).
- **Operex LLC** transfers = **handled separately** (set aside for Lilian's analysis).
- **CS Float** = the platform's **own report is the complete figure** for the gaming
  business; **only part flows through the two BofA accounts** (the rest through his
  other accounts). Figures live in the working file / platform report, never here.
- **Statement coverage.** 2023–2025 captured from BofA CC (7104) + debit (9561). **The
  workbook's December 2025 is incomplete.** Its last credit-card statement closes
  **2025-12-12** and its last debit statement **2025-12-18**, so it is missing **Dec 13–31 on
  the card and Dec 19–31 on the debit account**. ✅ **The January 2026 statements that close
  that gap ARE in Drive** — `eStmt_2026-01-12.pdf` (card) and `eStmt_2026-01-20.pdf` (debit),
  added **2026-08-06** to the `CC 2025` / `Debit 2025` folders (links in §7). ⛔ **They have
  NOT been worked into the workbook**: its last change is dated 2026-07-30. For 2023 and 2024, the
  December tail was taken from the following January statement into the year it belongs to.
  The two new files fill the same slot for 2025 _(source: Drive, read 2026-10-08)_.
  ✅ **PROCESSED 2026-10-08.** Both were extracted and reconciled to their own totals, and their
  December 2025 lines went into the 2025 build for the return. The July workbook in Drive was **not**
  rebuilt; the 2025 figures now live in the tax-return working paper
  ([`tax-returns/artur-tseretsian/2025-form-1040.md`](../../tax-returns/artur-tseretsian/2025-form-1040.md)).
  🔀 **The December 2022 tail — two sources disagree.** The 2026-07-29 working session said
  the December 2022 rows in the January 2023 statements went on their own `2022 (partial)`
  sheet. The copy in Drive, read 2026-10-08, has **14 tabs, no such sheet, and no
  2022-dated rows**. Either way, those rows are outside the 2023 totals.
- **Is the debit account really personal? — ✅ Yes, settled from the statement itself (2026-10-08).**
  The checking statement names its product **"Adv Plus Banking"**, Bank of America's personal
  checking. The **"Business Fundamentals Checking"** text in the 2025 statements' footer is an
  **advertisement**. The card is a personal card too. So **both accounts are personal**, used heavily
  for business. Lilian had believed on 2026-10-08 that both were business accounts, and was
  corrected. _(Earlier: flagged 2026-07-29 as possibly bank advertising, not yet asked.)_
- **Initial consultation (2026-07-06, Zoom "Consultation").** Company-formation and tax-compliance discussion ahead of Rewhip LLC's registration. Discussed points, per the Zoom AI summary _(Gmail, "Meeting assets for Consultation are ready!", 2026-07-06 — machine-generated summary, Russian, use with the usual caution)_:
  - Artur asked about **partnership structures** and the tax consequences of a **non-resident partner** — Julia explained that a non-resident partner's share of net income is subject to **37% withholding**, with the non-resident then filing a return to claim a refund; discussed opening a bank account as a 50% owner. **Whether Rewhip LLC in fact has a non-resident partner is not yet confirmed on this file** — flagged for follow-up.
  - Discussed needing documentation for a **prior real-estate sale** and for crypto activity, as proof of the source of funds behind the company formation (figures not captured here).
  - **Stripe** is a second payment platform (besides the two BofA accounts and CS Float) whose transaction data is still needed for the income/expense analysis.
  - Discussed the possibility of **electing S-corp** status for the new company in the future if profitability supports it (no figures captured here).
  - Discussed the client's **immigration status** as relevant context for filing compliance and future immigration goals — no specific status details recorded (personal/sensitive; see Double if needed).
  - Julia's follow-up items included helping the client catch up on **overdue tax returns** with a target of resolving the situation by October, and sending the organizer/portal invitation — consistent with the 2023–2025 catch-up engagement already on this file.
- **Firm billing.** QuickBooks sent the client two automated "set up your recurring
  payment to JK Accounting Group" reminders, due **by 2026-08-01** _(source: Gmail,
  2026-07-30 and 2026-07-31)_ — the setup was confirmed on 2026-09-12 (a payment posted
  2026-09-01); for what has happened since, see the recurring-payment row under §6
  *Outstanding items*.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- _(2026-07-30, Lilian)_ — Created file. Processed **3 years** of BofA statements
  (**72 PDFs**: credit card 7104 + debit 9561), reconciled **100%** to each statement's
  control totals and balances, and categorized **business vs personal** for Schedule C.
  Agreed the categorization rules (§5) with the client. Delivered a **consolidated
  English Excel** (detail per card per year + per-year summaries + CS Float 2025
  reconciliation + Operex tab + deposits-to-review tab). All client figures kept out of
  the repo.
- _(2026-07-30, Lilian)_ — Client-review facts added (married/MFJ; spouse homemaker, W-2
  in 2025 only; two dependent children, the younger born during 2024; car bought & sold in
  the period; a 2023 home-office rent estimate; crypto/Zelle reporting position). Prepared
  **working-copy 1040 organizers for 2023/2024/2025** for Julia and two **Double notes**
  (tax-prep status + categorization rules). Sensitive IDs kept in Double.
- _(2026-07-31, Lilian)_ — Spouse's **driver's license received** from the client (filed in
  Double) — removed from the outstanding list. ⓘ _Correction 2026-10-08: Double holds no file
  for this client — the license is an image in the Drive folder (see the 2026-10-08 entry)._
- _(2026-08-01, incremental sweep, baseline 2026-07-30)_ — No new client activity in
  Ping (client/contact not indexed there under this name — `resolve_person` and
  `search_contacts` returned no match; org-wide `search_meetings` hits were either
  unrelated or predate the baseline) or in Double's activity log. **Double:** the
  spouse is now also a portal contact with full client-admin/tax/
  financial/files access (added 2026-07-30) — added to §2. **Gmail:** two automated
  QuickBooks "set up recurring payment" reminders sent to the client (2026-07-30,
  2026-07-31), due 2026-08-01 — added to §5. **Google Drive:** located and linked the
  client's top-level Drive folder in §7 (named "Rewhip"; contains the "Personal taxes
  2023-2025" subfolder with the organizers and categorization workbooks already
  referenced above). **Repo:** checked FOLLOW-UPS.md and BACKLOG.md — no entries for
  this client.
- _(2026-08-15, weekend sweep — full-historical catch-up, no date bound)_ — Ran the
  one-time full-historical pass owed on this client (Ping + Gmail, full history).
  **Ping:** `resolve_person`/`search_contacts` still return no match for this name
  (client not indexed as a Ping contact/client); org-wide `search_meetings` (multiple
  queries, no date bound) surfaced the 2026-07-06 "Consultation" meeting with a
  speaker labeled "Artur" — snippets were fragmentary/garbled (e.g. "Confirm your tax
  information", "you just have a CSV file") and added nothing beyond what the Zoom
  email summary already gave via Gmail. **This closes the Ping coverage gap for this
  client** — there is no dedicated Ping client/contact record to search further; only
  org-wide semantic search is possible, and it has now been run without a date bound.
  **Gmail (full history, in:inbox + in:sent, no `after:` filter):** found and read two
  threads not previously in this file — (1) **"Rewhip LLC - incorporation documents"**
  (2026-07-15): the firm registered **Rewhip LLC** and obtained its EIN on the
  client's behalf; (2) **"Completed: ... Monthly Proposal Generator"** (2026-07-29):
  Artur signed a JK Accounting Group Monthly Proposal Generator agreement via Adobe
  Sign. Also retrieved the full 2026-07-06 "Consultation" Zoom AI summary email
  (Russian), whose contents are digested in §5. **Gmail sent-mail search surfaced only
  the two internal weekly Client-Intelligence sweep emails** (2026-08-01, 2026-08-08)
  — no other outbound correspondence to/from this client found in `in:sent` beyond
  Lilian's 2026-07-15 Rewhip incorporation email (which is `in:inbox` for the
  practice's shared view). **This closes the Gmail full-history coverage gap.**
  **Double:** re-checked `get_client`, `list_client_properties`, `list_notes`,
  `list_contacts`, `list_activity_log` — no new notes or contacts beyond what this
  file already had; activity log shows only organizer-open/publish events already
  reflected in §4. **Google Drive:** re-confirmed the "Rewhip" folder and found it
  also contains "Rewhip Password" (a Doc — credential, not read) and a "Rewhip LLC"
  subfolder with `CP_575_B - Rewhip LLC.pdf` (the IRS EIN-assignment letter) — linked
  in §7; the EIN itself was not opened/transcribed (not needed to record that the
  company exists). Findings folded into §1, §4, §5. **Repo:** re-checked
  `projects/sops/`, `FOLLOW-UPS.md`, `BACKLOG.md` — still no entries for this client.

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** No new Double notes (both existing notes' `updatedAt` predate baseline), no new contacts, zero activity-log entries, no new Gmail correspondence, no new/modified Drive files under "Rewhip". Ping `resolve_person` for this name still returns no match, consistent with prior sweeps. Chase pass on all three outstanding items — ages above, no arrivals found.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: both notes' `updatedAt` unchanged from 2026-08-22 (no re-read needed beyond metadata check); zero activity-log entries since baseline; no new contacts. Gmail (`after:2026/08/22`, name + Rewhip + CS Float + Stripe) found nothing beyond the internal weekly-sweep digest — no client correspondence in the window, including no confirmation of the QuickBooks recurring-payment setup. Ping org-wide semantic search returned only unrelated pre-2026-08-22 noise; `resolve_person` still no match. Chase pass on all three outstanding items — ages below; none arrived. No SOP exists yet for this client; no SOP-proposal candidates queued.
- 2026-09-12 — **Weekend sweep (incremental, baseline 2026-08-29→2026-09-12 — the 2026-09-05 run never completed, see `sweep-state.md`).** Double: note 479443 (`updatedAt` 2026-09-03) matches the 2026-09-03 log entry already on this file (Lilian's own status check/WhatsApp fact); note 479444 unchanged; zero activity-log entries in the window. ✅ **QuickBooks: the client's recurring payment to the firm has started** — a "Woohoo! You got paid" notice shows a **REWHIP LLC recurring payment posted 2026-09-01** (figure not retained) — this closes the standing "did he complete recurring-payment setup" question, though ⚠️ **a separate notice 2026-09-03 shows one bank transfer from REWHIP LLC (invoice 2272) was CANCELED for a bank-account problem on his end** — worth a light check that the recurring payment is actually stable, not just that it started once. Gmail (`after:2026/08/29`, name + Rewhip + Stripe + CS Float + Social Security) found nothing else client-specific — no SSN update, no Rewhip-scope answer, no Stripe data. Ping `search_meetings` (several phrasings) returned no legible content specific to this client — same off-topic pattern as prior runs; `resolve_person` not re-tried (no change expected, per 2026-08-15's settled finding that this client has no dedicated Ping record). Google Drive: a title search for "Rewhip" bounded to `modifiedTime > 2026-08-29` returned zero files — no new/modified documents in the window. `FOLLOW-UPS.md`/`BACKLOG.md` grepped — no hits. **Chase pass (unbounded) on all three named outstanding items** — the older child's SSN, the Rewhip LLC scope question, and the Stripe transaction data — **none arrived**; ages below.
- 2026-09-19 — **Weekend sweep (incremental, baseline 2026-09-12→2026-09-19).** Double: both notes (479443, 479444) re-read in full — `updatedAt` unchanged since 2026-09-03 (479443) and since 2026-07-30 (479444); zero activity-log entries in the window. Gmail bounded `after:2026/08/29` (name + Rewhip + Stripe + CS Float + Social Security) and separately `after:2026/09/12` found no new client-specific correspondence — no SSN update, no Rewhip-scope answer, no Stripe data. ⓘ **The recurring-payment watch item has NOT reopened**: no further QuickBooks cancellation notice was found after the single 2026-09-03 instance already on file; the next scheduled debit (around 2026-10-01) has not yet occurred, so "stable" is still unconfirmed rather than settled. Ping `search_meetings` (several phrasings) returned no legible content specific to this client — same off-topic pattern as every prior run; `resolve_person` not re-tried (no change expected). Google Drive: a title search for "Rewhip" bounded to `modifiedTime > 2026-09-12` returned zero files. `FOLLOW-UPS.md`/`BACKLOG.md` grepped — no hits. **Chase pass (unbounded) on all three named outstanding items — all three are aging and none arrived; see ages below.**
- 2026-09-26 — **Weekend sweep (incremental, baseline 2026-09-19→2026-09-26).** Double: both notes (479443, 479444) re-read in full — `updatedAt` unchanged since 2026-09-03 (479443) and since 2026-07-30 (479444), bodies identical; zero activity-log entries in the window. Gmail bounded `after:2026/09/19` (name + Rewhip + Stripe + "CS Float" + "Social Security") returned 6 threads — none client-specific: two CPA-academy/NATP marketing emails, a Syft Analytics receipt, an unrelated Masciave Design Studio 1099 thread, and the firm's own 2026-09-19 weekly-sweep digest. No SSN update, no Rewhip-scope answer, no Stripe data. Ping `resolve_person` still no match; `search_meetings` (Rewhip/Operex/CS Float/Stripe phrasing) returned only pre-baseline noise from unrelated clients — same off-topic pattern as every prior run. Google Drive: a title search for "Rewhip" bounded to `modifiedTime > 2026-09-19`, run with `excludeContentSnippets: true`, returned zero files. `ℹ️ The recurring-payment watch item has NOT reopened` — no further cancellation notice found this run either (still the single 2026-09-03 instance on file). **Chase pass (unbounded) on all three named outstanding items — none arrived; ages below.**
- _(2026-09-03, Lilian — human-initiated status check)_ — Lilian asked what remains
  pending on this client and, specifically, **the result of the older son's Social
  Security number** (she recalled the client saying he had gone to apply). Ran a live
  sweep to close the gap since the 2026-08-29 baseline: **Gmail** (name + "Social
  Security"/SSN queries) — nothing beyond the internal weekly-sweep digest; **Double**
  — both notes unchanged since 2026-07-31 (still "SSN pending"), `list_files` empty,
  `get_questions` shows no portal thread for this client, `list_activity_log` shows only
  the July 2026 organizer open/publish events; **Google Drive** — recent-files review
  shows nothing new for this client since the baseline. Ping unavailable this session.
  **Result: no update to the older child's SSN in any reachable source — the last
  recorded status stands (SS card lost; client resolving at the SSA; will send the
  number).**
  ⚠️ **Method caveat worth keeping:** the client delivers sensitive items to the firm by
  **WhatsApp** (that is how the spouse's driver's license and the younger child's SSN arrived) —
  a channel **outside** the digital sweep. So the absence of an SSN update in
  Gmail/Double/Drive is **not** evidence the number hasn't been obtained; confirm on
  WhatsApp / with Lilian directly before treating it as still-missing.
- _(2026-09-03, Lilian — fact from the client's WhatsApp message of 2026-07-31)_ — Lilian
  confirmed the missing piece: on **2026-07-31** the client wrote her (by WhatsApp) that he
  had gone to the **Social Security office**, and they told him the son's replacement Social
  Security card would be **sent by postal mail**, allowing **about a month** — so the card was
  expected around **late August 2026**. This explains the channel gap the sweep hit: the update
  lived in WhatsApp, not in Gmail/Double/Drive. Status stays **open** pending the number; the
  expected-arrival window has now passed, so the next step is to **confirm receipt with the
  client**. (No SSN value recorded — identity block.)

- _(2026-10-03 — weekend sweep, incremental, bounded 2026-09-26 and later)_ Searches run on 2026-10-03: **Gmail** (Tseretsian / Rewhip / Operex / the platform seller name / spouse surname, all folders, after 2026/09/26), **Double** (activity log, both notes' `updatedAt`, properties, tasks), **Google Drive** (title search, modified on/after 2026-09-26, no content read), **Ping** (semantic search by name; no meeting dated on/after 2026-09-26 surfaced). **New:**
  - 🆕 **A QuickBooks "payment failed" notice, 2026-10-01** _(Gmail)_: the **monthly recurring payment from REWHIP LLC to the firm failed on its 2026-10-01 run** (customer notified by QuickBooks). It had been confirmed as posting on 2026-09-01 (§6 outstanding items), and one transfer was canceled on 2026-09-03 — so the record now reads: one success (09-01), one cancellation (09-03), one failure (10-01). **"Reliable" is now contradicted, not merely unconfirmed.** Cause not established (the notice gives none). No reply from the client found in Gmail after it.
  - 🆕 **A Florida Division of Corporations Certificate of Status for Rewhip LLC was ordered and received 2026-10-02** _(Gmail, Sunbiz auto-reply to Julia; filed to the Rewhip Drive folder the same day as a PDF dated 10.02.2026 — Google Drive)_. Why it was pulled is not recorded — most likely to establish the entity's good standing.
  - Double: both notes unchanged since 2026-09-03 and 2026-07-30; **Organizer Status still `Sent`**; no activity-log entries on/after 2026-09-26; the 2023/2024/2025 tax-project tasks all still `Not Started` with no assignee or due date.
  - **Result for the SSN:** a Gmail search bounded after 2026/09/26 for the client's name found no mention of the Social Security card; channel caveat above still applies (WhatsApp is outside the sweep).

- _(2026-10-08, Lilian — "where were we on the transaction review?")_ Lilian could not find the
  July working session and asked where the categorization stood, especially the January
  statements. **The session still exists** (link in §7). It was read end to end with
  `list_events`, from Lilian's first message on 2026-07-29 to the last turn on 2026-09-03. **State as that transcript leaves it:**
  - **The categorization is finished for all three years.** No transaction is left without a
    class. The last build was on 2026-07-30, after the gas-station rule. The workbook's open items
    are **decisions, not extraction**: `Deposits (review)` (cash/ATM/check/ACH/wire — kept
    **out** of income on Lilian's instruction, to review with the client and Julia), `Travel`
    (Julia), `Business – review` (Zelle to auto/transport companies not reviewed one by one),
    and `Operex LLC` (set aside for Lilian's own analysis).
  - **The one extraction gap is December 2025** — the exact dates are in §5 *Statement coverage*.
    The work that closes it: extract the two January 2026 statements, reconcile them,
    categorize them with the same rules, keep only the December 2025 dates, and rebuild
    `Summary 2025`.
  - 🆕 **And the documents for it ARRIVED TWO MONTHS AGO.** The same day's live sweep found
    both January 2026 statements in Drive, **added 2026-08-06** and never processed. Every
    record still listed them as pending: Double note 479443, the workbook's own `Read me`,
    and this file's outstanding list, which said *"not chased this run"*.
    - No email carried them, so they reached Drive by another channel. **WhatsApp is likely
      but not established.**
    - ⚠️ **Why the sweeps missed it.** The 2026-08-08 weekly sweep reported *"nothing new"*.
      The later sweeps checked Drive with a **title search for "Rewhip"**, but BofA statements
      are named `eStmt_<date>.pdf`, so **a title search by client name can never find them**.
      A file added inside a client's folder under a generic name is invisible to that method.
  - **Double, same check:** File Library and Uploads hold **0 files** for this client. Note 479443
    says the spouse's W-2 and the younger son's Social Security document are *"to be filed in
    Double"*, and that SSNs and both driver's licenses *"live in Double"*. **No document is
    filed there.** The spouse's driver's license is an image in the Drive folder.
  - **Gmail, same check:** a QuickBooks *"Payment received"* notice dated **2026-10-05**
    (invoice 2313, from REWHIP LLC). So after the failed 2026-10-01 run, a payment did arrive
    (amount not retained).
  - ⚠️ **The per-year net figures given in the chat on 2026-07-30 are SUPERSEDED.** Later rounds
    moved deposits to their own bucket, turned unnamed Zelle and the "crypto exchange" Zelle into
    income, and added the gas rule. The final figures were never repeated in the chat, so they
    exist **only in the workbook's `Summary` sheets**.
  - 🔀 **Two sources disagree on the CS Float item.** The outstanding list below reads *"CS Float
    purchases/expense report"*. The transcript shows that **the 2025 platform totals (sales,
    purchases, net) arrived as a photo on 2026-07-30** and were reconciled in `CS Float 2025
    (recon)`. The same session still listed the report as pending afterwards. What is outstanding
    is therefore the **detailed purchases history** behind those totals, plus any 2023/2024
    platform report (the client says 2025 only) — **not the 2025 totals themselves.** Settle it
    with Lilian when it next comes up.

- _(2026-10-08, Lilian — the 2025 return: decisions and what the build found)_ Lilian asked for the
  2025 ATX worksheet and a P&L built from the two bank accounts. **2025 only for now**; 2023 and 2024 wait.
  The figures are in the working paper
  [`tax-returns/artur-tseretsian/2025-form-1040.md`](../../tax-returns/artur-tseretsian/2025-form-1040.md),
  never here. What the session learned about the client:
  - 🔒 **Decision (Lilian): the older son is NOT on the 2025 return.** The client could not get his
    Social Security number at the SSA office. *"Esta es una decisión tomada."* The child tax credit
    for him can be recovered with a 1040-X once the number is found.
  - 🔒 **Decision (Lilian): nothing about the car bought and sold goes on the return.**
  - **Both BofA accounts are personal** (see §5). Lilian had believed they were business accounts.
  - **Her instruction on personal data:** use the **2023 organizer** for what does not expire (SSNs,
    licences); ask the client for the rest. The 2023 answers read for 2025: married, not living
    apart; 2023 was his **first US return**; **no EIN**; no foreign accounts over the threshold;
    and ⚠️ **he answered that the car was NOT used for business in 2023**, which conflicts with the gas
    and parking claimed. **2025 miles have been asked for.**
  - **The spouse's employment ran March–August 2025** (payroll deposits). Her W-2 came by WhatsApp and
    is with Lilian, not in Double.
  - **Bounced payments are frequent:** **47** payments in 2025 bounced and were returned by the bank
    (auto loan, other cards, rent, auto insurance, electricity). The July summaries counted the
    returned ones as paid; they are now excluded. **The same defect sits in the 2023 and 2024
    summaries**, which must be rebuilt the same way before those returns.
  - **Crypto is visible in the bank:** Coinbase and MoonPay charges in 2025. Recommended answer to the
    1040 digital-asset question: **Yes** — Julia decides.
  - **He paid a transport company over the 1099 threshold in 2025**, so a 1099-NEC question is open
    for Julia.
  - **He travels to car shows** (Monterey Car Week / Pebble Beach and an auction in 2025). Travel is
    kept as business pending Julia.
  - **No extension and no estimated payment found for 2025**, and the return was due 2026-04-15.
    Asked of the client.
  - The question list for the client and for Julia is the working paper's §6. **Phase 1 verdict: not
    ready to file.**

### Outstanding items (CI-only — never in the SOP)
Live list lives in Double; mirrored here for context:
- 🔒 **The older child's SSN — DECIDED FOR 2025 (2026-10-08): he is left off the 2025 return** (Lilian). Still worth getting for a 1040-X and for 2026. SS card was lost. On **2026-07-31** the client went to the SSA office and was told the replacement card would be **mailed by post** (allow ~1 month), so it was expected around **late August 2026**. As of **2026-10-03** we still don't have the number — a Gmail search bounded after 2026/09/26 for the client's name found nothing about it, and Double notes carry no update (**64 days pending since 2026-07-31**; the ~1-month window ended about 2026-08-31). The client sends such items by **WhatsApp** (outside the digital sweep). **Next step:** confirm with the client that the card arrived and get the number — entered into Double, never the repo.
- **Year-end 2024 & 2025 addresses** — not chased this run (budget).
- ✅ **January 2026 statements (both accounts) — RECEIVED (in Drive since 2026-08-06) and PROCESSED 2026-10-08** into the 2025 return build. Double note 479443 still lists them as pending from the client; it was not edited (no instruction to write to Double).
- CS Float purchases/expense report — not chased this run (budget).
- Home-office worksheet, Lendbuzz/Westlake amortization schedules, Form 1095-A, car purchase/sale documents, external-card statements, client-review items (deposits/travel/auto-transport Zelles) — not chased this run (budget).
- ✅ **Confirmation the client completed the QuickBooks recurring-payment setup — ARRIVED 2026-09-12.** A QuickBooks "you got paid" notice shows a REWHIP LLC recurring payment posted 2026-09-01 (figure not retained). Closed as a setup question; ⚠️ **watch-item, UPDATED 2026-10-03**: the single canceled transfer (invoice 2272, 2026-09-03) was followed by a **failed monthly run on 2026-10-01** (QuickBooks notice, Gmail) — so the 09-01 success has no confirmed successor and the October debit did not go through. **Needs a firm-side follow-up with the client** (not yet recorded as done). 🆕 **2026-10-08:** a QuickBooks *"Payment received"* notice of **2026-10-05** (invoice 2313, REWHIP LLC) shows a payment did arrive after the failure. Whether it was the October fee paid by hand or a repaired recurring setup is not established.
- **Rewhip LLC — clarify scope** — STILL OPEN, **80 days pending since raised (2026-07-15)** as of 2026-10-03, no deadline _(the earlier "~82 days as of 09-26" did not match this start date; recomputed)_. A targeted search bounded after 2026/09/26 found nothing beyond what's already on file — only the 2026-10-02 Certificate of Status for the entity (see log).
- **Stripe transaction data** — STILL OPEN, **89 days pending since raised (2026-07-06)** as of 2026-10-03 (crosses 90 on 2026-10-04) _(the earlier "~91 days as of 09-26" did not match this start date; recomputed)_, no deadline. A targeted search bounded after 2026/09/26 found nothing client-specific.

### Information still needed
- [x] Primary language — **Russian only** (Double property, 2026-10-08).
- [ ] Which other accounts the CS Float payouts land in.
- [ ] The car-sales business relationship (his exact role; whether any 1099s are owed on payments he made).
- [x] Second (younger) child confirmed a dependent from **2024** (born during 2024); 2023 has one dependent.
- [ ] Assigned staff / relationship owner in Double (Owner in this file = Lilian).
- [x] ~~Whether "Rewhip" (the client's top-level Drive folder name) is a trade name/DBA...~~ ✅ **Answered:** Rewhip LLC is a real, newly-registered Florida LLC with its own EIN, formed by the firm and distinct from Operex LLC _(Gmail, 2026-07-15)_. Open follow-on: its business purpose, partner structure, and which engagement(s) cover it (see §6 outstanding items).

## 7. Links

- **Double client:** https://app.doublehq.com/close?cid=752202
- **Google Drive folder (sensitive vault):** https://drive.google.com/drive/folders/1W37vrxg1TGNX4k13vzK6ECrifiJtSHg1 (top-level folder "Rewhip"; contains the "Personal taxes 2023-2025" subfolder — organizers + categorization workbooks — and a "Rewhip LLC" subfolder with the Articles of Organization and IRS EIN-assignment letter (`CP_575_B`)) _(source: Google Drive, 2026-08-01 and 2026-08-15)_
- **The working session where the clean-up was built** (2026-07-29 → 2026-09-03, titled "Artur Tseretsian Cleanup"): https://claude.ai/code/session_017VuR6fQrPsWzZLpMn4ffQW — the full conversation: every rule agreed with the client, how each one was decided, and the workbook's build history. **Still open as of 2026-10-08.** ⚠️ It holds client figures and personal data, so it is a firm-internal link. Deleting it loses that history, **and the repo does NOT hold that detail** — before deleting, export it with [`tools/export-chat/`](../../../tools/export-chat/) **from inside that session** and file the export in Drive/Double.
- **The deliverable:** `Tseretsian_Consolidated_Categorization_2023-2025.xlsx` (English; built 2026-07-30). It is in Drive → `Personal taxes 2023-2025` → `Transaction report- CATEGORIZED - from Claude`: https://drive.google.com/file/d/1l_JbL3Qeo9EfjNDlEh7VTFA_Wh1nIVEq/view (last modified 2026-07-30; the only categorized workbook in Drive). **14 tabs:** `Read me` · `Summary 2023/2024/2025` (credit · debit · combined) · `CS Float 2025 (recon)` · `Credit Card 2023/2024/2025` · `Debit 2023/2024/2025` · `Deposits (review)` · `To confirm` (Travel + Business-review) · `Operex LLC`. The uncategorized extractions are in the sibling folder `Transaction reports- ORIGINAL - from Claude`. Client figures — never in the repo.
- **The `Personal taxes 2023-2025` folder:** https://drive.google.com/drive/folders/1maDy7xD-Kw_465W3GQAfNYMPfrj9Z4t3 — the statements are under `CC -7104` and `Debit - 9561`, one subfolder per year. The working-copy organizers are under `1040 Organizers`.
- **The two January 2026 statements (processed 2026-10-08):** card https://drive.google.com/file/d/1qARwsXnOYrQ4NWfdIxcR6wzu-YD8BHM4/view · debit https://drive.google.com/file/d/16-N_3IYorTReZ5_nna12TWoe1hSEWErH/view (both added 2026-08-06).
- **Related SOPs:** none yet — candidate: a "personal-account tax-prep categorization" SOP built from §5.
- **Related entity (no CI file yet):** Rewhip LLC — a Florida LLC the firm formed and obtained an EIN for on Artur's behalf (2026-07-15); no Double client record or Client Intelligence file exists for it yet. See §6 outstanding items.
