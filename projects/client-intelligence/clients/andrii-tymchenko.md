# Andrii Tymchenko

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-10-15
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record, properties, notes, contacts, activity log — both pages, plus the linked second Double client id), Gmail ("Tymchenko"/"TRUSTBURN", full history), Ping (`resolve_person` + `search_meetings`), and Google Drive (multiple title queries) all checked.

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

- **Business name:** Andrii Tymchenko — an **individual** client, with a company alongside (§5)
- **Entity type:** Individual taxpayer (Form 1040 / 1040-NR)
- **2025 filing position:** 🔴 **DUAL-STATUS — decided by Julia 2026-10-15** (§4): resident 2025-01-01 → 2025-05-31, nonresident from 2025-06-01. Filed as **Form 1040-NR marked `Dual Status Return`, Form 1040 attached as `Dual Status Stmt`, married filing separately, paper only.** ⚠️ **This replaces the 2026-04-07 position ("1040-NR, non-resident aliens")**, which was wrong: he **meets the substantial presence test for 2025** (§4).
- **Home state:** ⚠️ **He left the United States on 2025-05-31 and moved to Spain.** Which state, if any, has a part-year claim for 2025 is _(pending)_.
- **Industry / what they do:** _(pending)_ — his company (see below) had **no activity at all in 2025**
- **Company name — SETTLED 2026-08-22: TRUSTBURN LLC (Florida LLC).** Drive holds its Articles of Incorporation, Sunbiz registration record, and a Form SS-4 EIN application, all from March 2024; Gmail confirms Form 2848 (POA) and the SS-4 were faxed to the IRS 2024-03-28/29/30, and a QuickBooks invoice was paid by "Trustburn LLC" (same contact email as Andrii's) on 2025-04-07. _(Gmail + Drive, 2026-08-22)_
- **Primary language:** _(pending — likely Ukrainian or Russian)_
- **Our engagement (services we provide):** income tax _(pending — the rest)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-13)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The client | Double client (link below) |
| Spouse — a **joint filer for some years, but NOT 2025** (§4); has her **own, separate Double client record** (id 710640), distinct from Andrii's, even though earlier years were filed jointly _(Double `get_client` 710640, 2026-08-22)_ | Double client |
| Children | Double client — there are dependants _(number pending)_ |

- **Double client:** [app.doublehq.com/close?cid=710619](https://app.doublehq.com/close?cid=710619)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | The 2025 organizer was worked through by phone (§6) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** 🔴 **For 2025: a DUAL-STATUS return, married filing separately** _(Julia, 2026-10-15)_.
  - **Why not a plain 1040-NR:** the substantial presence test is MET for 2025: 151 days in 2025 + 1/3 of 366 (2024) + 1/6 of 135 (2023) = 295.5 ≥ 183. The day count was supplied to Julia: entry 2023-08-19, exit 2025-05-31, continuous stay, TPS. 2023 was a nonresident year and 2024 a full resident year.
  - **Why dual-status works:** the residency termination date can be the last day in the US (2025-05-31). It needs four conditions, and **Julia confirmed all four on 2026-10-15**: not a US resident at any point in 2026 · tax home in Spain from 2025-06-01 (he works there) · a closer connection to Spain · the extension was filed. The point of the choice is that **income earned in Spain after 2025-05-31 is foreign-source income of a nonresident and stays off the US return.**
  - **Must ship with the return:** the **residency-termination statement** (Pub 519, *Statement required to establish your residency termination date*). It is signed under penalties of perjury and is **not Form 8840**. Without it, the earlier termination date cannot be claimed.
  - **Form mechanics (2025):** Form 1040-NR on top, "Other" box checked, `Dual Status Return`. Form 1040 attached for Jan–May, "Other" box checked, `Dual Status Stmt`. **Dual-status returns cannot be e-filed for 2025 — paper.**
  - **Costs of the choice:** no joint return; married filing separately → **not an applicable taxpayer for the premium tax credit**, so the Jan–May advance credit is repaid, capped by Form 8962 Table 5 per spouse on their own household income; no standard deduction; no head of household.
  - **Deadline:** as a nonresident at year-end with no US wages, the 1040-NR due date was **2026-06-15**. The Form 4868 filed 2026-05-25 extends that to **2026-12-15** (2025 Form 4868: a 1040-NR filer with no US wages files the extension by June 15 and gets 6 more months; checked 2026-10-15). ⚠️ **The 4868 went in on 2026-05-25, after April 15, so it is only valid as a 1040-NR no-wages extension. Confirm that its line 9 box was checked.**. **The spouse needs her own dual-status return and her own statement.**
  - Which return type applies for 2026: they were not in the US at all in 2026 (Julia, 2026-10-15), so **no US residency for 2026**.
- **Our role:** the firm prepares
- **Process notes (→ future SOP):**
  - ⚠️ **The company had NO ACTIVITY in 2025** — no income, no expenses — so there is **no P&L**, and the home-office document on file is **last year's, unchanged.** Both are correct for a dormant year, not omissions to chase.
  - ⚠️ **His driver's licence on file EXPIRED during 2025.** Anything that needs current photo ID will fail on it.

### Licenses & other filings
- **Applies?** _(pending)_ — the company is dormant but may still owe an annual report in its state of registration

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE FAMILY LEFT THE UNITED STATES ON 2025-05-31 AND ARE IN SPAIN.** That makes 2025 a **DUAL-STATUS year, married filing separately** (§4, Julia 2026-10-15). It is **not** a plain 1040-NR: he meets the substantial presence test, so it only works with the signed residency-termination statement attached. He was **not in the US at any point in 2026**, works in Spain, and has his tax home and closer connection there (Julia, 2026-10-15).
- ⚠️ **CONTRADICTION FOUND 2026-08-22 on the 1095-A / health-coverage question.** This file's §5/§6 (from the migrated TaxDome note) says a 1095-A was "requested from him" and that the note "says nothing about his own coverage — only that his wife and children were on Medicaid." A **different, native Double note** (id 447824, created by Lilian 2026-06-22, "2025 Tax return - Important notes") covers the same 2025 organizer call but says instead: **"He provided 1095-A"** (past tense, already supplied) and **makes no mention of Medicaid or the wife's coverage at all** — only that the children's school/health insurance was free/subsidized. Both sources are attributed to the same underlying 2025 organizer call but disagree on these two points. **Reported, not resolved** — check with Lilian which is current before asking the client again.
- A Form 4868 extension was filed for the 2025 return — Double shows a recurring task "Extension Filed" created 2026-05-25 and marked Done the same day, and the "2025 Taxes" project moved Not Started → In Progress that day. _(Double activity log, 2026-08-22)_
- **His company was dormant for the whole of 2025** — no income, no expenses, no P&L. Do not read the missing P&L as an outstanding item.
- **He did not sell the car — he took it to Spain.** Recorded because a vehicle disappearing from a return usually means a sale, and here it does not. **The car had been a Schedule C business vehicle and was converted to personal use** (Julia, 2026-10-15). A conversion is not a sale, but it can trigger **§280F excess-depreciation recapture** (Pub 946, *Recapture of Excess Depreciation*) **if depreciation was claimed** rather than the standard mileage rate. Whether it applies, and in which year business use ended (2024 or 2025), was _(pending)_ on 2026-10-15.
- ⚠️ **He does not remember whether he made estimated tax payments for the year**, and said the firm would know. **Check the IRS account rather than asking him again.**

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from the migrated TaxDome notes, on Lilian's ruling of the same day authorising them to be read. _(TaxDome notes, migrated — filed under Andrii Tymchenko; note dated 2026-04-07.)_ _(Worked by Lilian.)_
  - **2026-04-07 — the 2025 tax-organizer summary call.** Lilian went through the organizer with him by phone and recorded: they **left the United States on 2025-05-31**; the **company had no activity in 2025**; he uploaded a **driver's licence that expired in 2025**; there is **no P&L** because there was no activity; the **home-office document is last year's, not updated**; **school and health insurance for the children were free or subsidised**; **his wife and children were on Medicaid, not the marketplace**; for medical expenses he has only the **payment history for his insurance premium**, and a **1095-A was requested**; he **does not remember** whether he made estimated tax payments; and he **did not sell the car — he took it to Spain**. The conclusion recorded on the note: **as non-resident aliens for 2025 they had to file 1040-NR, and separately (MFS), as the IRS requires for non-resident aliens.**
- **Nothing after 2026-04-07 is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred. ⚠️ **Read that as a statement about the SOURCES SEARCHED, not about the world** — these files were built from the migrated notes plus Double, with **no full historical sweep of Gmail, Drive or Ping**. _(Qualifier added 2026-08-14, after an independent review showed the same phrasing on other files was concealing live work.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double (both client records — his and the spouse's separate one, 710640), Gmail (full history, "Tymchenko"/"TRUSTBURN"), Ping (`resolve_person` + `search_meetings` — zero results, no legible or garbled content found), Google Drive (multiple title queries) all checked. Established: the company's name (TRUSTBURN LLC), the spouse's separate Double record, a Form 4868 extension filed 2026-05-25, a contradiction on the 1095-A/health-coverage question between two internal sources (§5), and the 1095-A→1099-A document swap (see Outstanding items). Did not pursue a stray "ceo@semalt.com" cc on a 2024 return-delivery email further — noted only as a data point, not confirmed related.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: properties unchanged (Organizer Status still `Completed`), note 447824 re-read in full — body unchanged, matches this file's §5 contradiction summary exactly, no new content — no activity-log entries in the window. Gmail bounded `after:2026/08/22` for "Tymchenko"/"TRUSTBURN" found nothing beyond the firm's own weekly-sweep meta-email. **Chase pass** (unbounded, since tax-residency and estimated-payments are long-standing questions) searched for Spain/residency/estimated-tax terms and surfaced only the already-known 2024-04-07 2023-return-delivery thread — re-confirms the existing "ceo@semalt.com" cc data point, nothing new. Ping `resolve_person` + `search_meetings` returned only semantically-loose, off-topic/garbled hits — no legible content specific to this client. Google Drive: the same Andrii/Kateryna Tymchenko folders and TRUSTBURN documents as before (Articles of Incorporation, SS-4, Form 2848), no new modification dates since baseline.
- 2026-09-12 — **Weekend sweep (incremental, baseline 2026-08-29→2026-09-12 — the 2026-09-05 run never completed, see `sweep-state.md`).** Double: `list_notes` returned note 447824 again — **re-verified, not resolved, per this run's instruction**: `updatedAt` still Mon Jun 22 2026 15:10:12, body identical to what §5/§6 already record on both sides of the 1095-A/health-coverage contradiction (the migrated TaxDome note's "1095-A requested" language vs. this native note's "He provided 1095-A" and no Medicaid mention) — **the contradiction remains exactly as recorded, unresolved, no new evidence either way.** `list_activity_log` (from 2026-08-29) returned zero entries. Gmail bounded `after:2026/08/29` for "Tymchenko"/"TRUSTBURN" found nothing beyond the firm's own weekly-sweep meta-email. Ping `search_meetings` (several phrasings on Spain residency, estimated tax payments) returned no legible content specific to this client — same off-topic/garbled pattern as every prior run. Google Drive: a title search for "Tymchenko" bounded to `modifiedTime > 2026-08-29` returned zero files — no new or modified documents in the window. `FOLLOW-UPS.md`/`BACKLOG.md` grepped for "Tymchenko"/"TRUSTBURN" — no hits. **Chase pass (unbounded) on all outstanding items** — see below; no arrivals on any.
- 2026-09-19 — **Weekend sweep (incremental, baseline 2026-09-12→2026-09-19).** Double: `list_client_properties` unchanged (Organizer Status still `Completed`); `list_notes` returned note 447824 again — **re-verified, not resolved, per instruction**: `updatedAt` still Mon Jun 22 2026 15:10:12, body character-for-character identical to the last four reads — the 1095-A/health-coverage contradiction between this note and the migrated TaxDome note stands exactly as recorded, still unsettled. `list_activity_log` bounded `fromTimestamp=2026-09-12` returned zero entries. Gmail bounded `after:2026/09/12` for "Tymchenko"/"TRUSTBURN" found nothing beyond the firm's own 2026-09-12 weekly-sweep meta-email. Ping `search_meetings` (health coverage / Medicaid / Spain residency / estimated tax phrasing) returned no legible, client-specific content — same off-topic/garbled pattern as every prior run. Google Drive: a title search for "Tymchenko" bounded to `modifiedTime > 2026-09-12` returned zero files. **Chase pass (unbounded, via the same Gmail/Ping searches above)** — no arrivals on any outstanding item; see updated ages below.
- 2026-09-26 — **Weekend sweep (incremental, baseline 2026-09-19→2026-09-26).** Double: `list_client_properties` unchanged on both his own record and the spouse's separate record (710640) — Organizer Status still `Completed` on both; `list_notes` returned note 447824 again — **re-verified only, per instruction, NOT resolved**: `updatedAt` still Mon Jun 22 2026 15:10:12, body identical to every prior read — the 1095-A/health-coverage contradiction between this note and the migrated TaxDome note (§5) stands exactly as recorded. `list_activity_log` bounded `fromTimestamp=2026-09-19` returned zero entries. Gmail bounded `after:2026/09/19` for "Tymchenko"/"TRUSTBURN" found nothing beyond the firm's own 2026-09-19 weekly-sweep digest. Ping: `resolve_person` for "Andrii Tymchenko" now resolves to a single Ping client record (id `70688467-f736-4e54-b6f7-db184cc2d7bb`) — `search_meetings` scoped to that client ID (health coverage / Medicaid / 1095-A / Spain residency / estimated-tax phrasing) returned **zero results**, consistent with every prior run's finding of no legible client-specific content. Google Drive: a title search for "Tymchenko" bounded to `modifiedTime > 2026-09-19` returned zero files. **Chase pass (unbounded) on all outstanding items — no arrivals on any; see updated ages below.**
- 2026-10-15 — **Vehicle:** Julia selected *conversion to personal use* for the Schedule C vehicle in ATX, and ATX still asks for mileage. Session guidance: the prompt is expected, because Form 4562 Part V needs the 2025 business-use percentage to compute the year's depreciation and any §280F recapture. Three facts are open: the prior method (standard mileage or depreciation), the year business use ended, and the mileage figures.
- 2026-10-15 — **Julia: 2025 is a DUAL-STATUS return, not a plain 1040-NR.** A day count was handed to Julia (entry 2023-08-19, exit 2025-05-31, continuous, TPS): 2023 = 135 days, 2024 = 366, 2025 = 151, so the substantial presence test is met for 2025 (295.5 weighted days). Julia chose dual-status so that **any Spanish earnings after 2025-05-31 do not reach the US return**. She confirmed the four conditions for a 2025-05-31 termination date: no US residency in 2026, tax home in Spain, closer connection to Spain, he works there. She also confirmed the extension was filed. Session guidance given: the termination statement must be attached; married filing separately → no premium tax credit, repayment capped by Form 8962 Table 5; paper filing only; extended due date read as 2026-12-15. The client said he had **no US income** in 2025 and a **Form 8962 through May**. _(Worked by the session with Julia.)_
- 2026-10-10 — **Weekend sweep (incremental, baseline 2026-10-03, inclusive).** Double: note 447824 `updatedAt` still 2026-06-22 (the only note; body re-read, unchanged); `list_activity_log` from 2026-10-03 returned 0 entries; `list_client_properties` unchanged (Organizer Status `Completed`). Gmail (a search of Julia's mailbox, `after:2026/10/03`, on 2026-10-10, for Tymchenko / Trustburn / Andrii): nothing beyond the firm's own 2026-10-03 weekly-sweep digest. Drive (a search bounded to files modified after 2026-10-02, on 2026-10-10, for Tymchenko / Trustburn): zero files. Ping org-wide `search_meetings` (Spain residency / Trustburn phrasing): no legible client-specific content. **Chase pass:** health-coverage contradiction — 49 days since 2026-08-22, no new evidence either way; residency / whether the firm still files, estimated-payment check and photo ID — 58 days since 2026-08-13, none answerable from these sources; 1095-A vs 1099-A document swap — 110 days since 2026-06-22, not re-opened (Drive search found no modification). **The sweep read the extended deadline as 2026-10-15; as a dual-status return with the 1040-NR on top it is 2026-12-15 (session, 2026-10-15)**; Double still shows no filed status recorded on this file.

### Tax year 2025 — the review

- **Filing position:** 1040-NR, married filing separately, on non-resident-alien status from a 2025-05-31 departure. _(TaxDome notes, migrated; 2026-04-07.)_
- **Dependants:** children, on Medicaid, with free or subsidised schooling and health cover.
- **Business income:** none — the company was dormant.
- **Open at the time of the call:** the 1095-A request (see §5 — it may be the wrong form), and whether estimated payments were made.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle the health-coverage contradiction** between the migrated TaxDome note and native Double note 447824 (see §5) before asking him for anything else. STILL OPEN — pending since 2026-08-22 (42 days as of 2026-10-03); no deadline. Note 447824 re-verified (not resolved) again 2026-09-26, no change.
- ✅ **Residency settled 2026-10-15 (Julia):** in Spain, tax home and closer connection there, no US presence in 2026; 2025 is a dual-status return (§4). ~~Establish where he is tax-resident now~~ — **still open: whether the firm keeps filing for him after 2025.** He has been out of the US since 2025-05-31 (pending 490+ days on that fact alone; as a tracked item, open since 2026-08-13, 51 days as of 2026-10-03). No deadline. A 2026-09-26 unbounded Gmail search for Tymchenko/TRUSTBURN terms found nothing new.
- **Check the IRS account for 2025 estimated payments** rather than asking him again — STILL OPEN, pending since 2026-08-13 (51 days as of 2026-10-03); no source reachable by this session can check an IRS account directly, so this stays a firm-side action item, not something a search can close.
- **Get a current photo ID** — the licence on file expired in 2025. STILL OPEN, pending since 2026-08-13 (51 days as of 2026-10-03); not something a document search can resolve — needs to be asked of the client directly.
- **Confirm which document is which** — on 2026-06-22 Lilian removed "1095-A.jpg" and created "2025 1099-A.pdf" in its place, in the "2026" custom folder. Form 1099-A (Acquisition/Abandonment of Secured Property) is a different form from 1095-A (health coverage) — worth checking which document this actually is.

### Information still needed

- [x] The company's name and state — **TRUSTBURN LLC, a Florida LLC** (§1)
- [ ] Whether the company still exists / still owes filings
- [ ] Whether a state part-year return was owed for 2025
- [ ] Whether the 2025 1040-NRs/1040 (extended via Form 4868) were actually filed, and when
- [x] Current residence and tax-residency position — Spain; 2025 dual-status (Julia, 2026-10-15)
- [ ] What else the firm does for him beyond the return

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710619](https://app.doublehq.com/close?cid=710619)
- **Migrated TaxDome notes:** Drive `4. Documents > Andrii Tymchenko > 1. Notes`, mirrored in Double at `TaxDome > Andrii Tymchenko > 1. Notes` — **two files, but one note**: `04.07.2026 - 2025 Tax organizer - summary call`, present as both a Google Doc and a `.docx` copy of the same thing. Read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
