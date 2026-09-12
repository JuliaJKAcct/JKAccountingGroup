# Iurii Iakovenko & Alina Yakovenko

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-09-12

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

> ✅ **FIRST FULL HISTORICAL SWEEP COMPLETED 2026-09-12.** Gmail searched unbounded (no date
> filter) by every name variant + Semalt/YourSeoBoard + both emails — 23 threads, read to
> exhaustion, oldest hit **2023-08-17** (nearly two years earlier than the previous 2024-11
> baseline). Google Drive searched four ways (name, Semalt, YourSeoBoard) across multiple pages,
> all reviewed. Double fully re-read: 0 notes, 2 contacts, 17/17 activity-log events, 14/14 tasks
> (incl. the "Extension Filed" nonclosing task, confirmed `done`), 20/20 files. Ping: `resolve_person`
> found the client, but `search_meetings` (client-scoped and org-wide) and `list_action_items` all
> returned zero results specific to this client — a confirmed negative, not an unsearched gap.

## 1. Snapshot

- **Business name:** Iurii Iakovenko & Alina Yakovenko — an **individual (joint) client record**
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** ⚠️ **He runs businesses** — he signs as **CEO of Semalt**, and the 2025 organizer carried workbooks for **two LLCs** (§5). SEO / digital marketing, on the names
- **Primary language:** _(pending — likely Ukrainian or Russian)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The clients — a married couple on one joint record | Double client (link below) |
| He is the **CEO of one of the two LLCs** and activates the portal from that account | Double / TaxDome |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710639](https://app.doublehq.com/close?cid=710639)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **TaxDome** (legacy) | Where both organizers and all documents live | n/a | 2024 organizer completed 2025-03-10; 2025 organizer completed 2026-03-12 |
| Double client portal | The current portal | n/a | `Organizer Status = Completed` mirrors the TaxDome event |
| Bank (direct deposit) | The refund/payment on the return | 🔒 Double / Drive — **never here** | The client supplied account and routing numbers (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — depends on what the two LLCs do and where)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_. ⚠️ He prepares his **own** figures — a P&L workbook per LLC and a home-office worksheet arrive with the organizer (§5).

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year. ⚠️ **The plain `1040` in Double does not account for two LLC workbooks and a 1099-K.** Schedule C (or a partnership return sitting behind the 1040) is the obvious question. **Unsettled — confirm, don't assume.**
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return not filed.** Double's "2025 Taxes" project is **`inProgress`**, `filedAt` empty, **original** due date 2026-04-15. ✅ **CONFIRMED, not just "very likely" (2026-09-12): the extension WAS filed** — Double's nonclosing task "Extension Filed" is marked `done`, completed 2026-05-27 by Lilian, assigned to Julia, with a matching recurring instance already queued for the 2026 filing season (due 2027-01-01). **With the 4868 the deadline is 2026-10-15 and he is not late.**
- 🔵 **The firm has now prepared THREE consecutive returns for this client, not one** _(found 2026-09-12)_ — a **2023 return** was signed 2024-04-07 (tax liability direct-debited 4/15/24 — figure not recorded here), a **2024 return** (organizer completed 2025-03-10), and the still-open **2025 return**. Engagement traced back to at least **2023-08-17** via Zelle payments.
- **Organizer status:** **Completed 2026-03-12 in TaxDome.** The client's side has been done for five months; **this one is waiting on us** — no email, meeting or note found anywhere explaining the delay (2026-09-12 sweep).
- **Process notes (→ future SOP):**
  - **What he sends, every year, unprompted:** a **P&L workbook per LLC** (for 2025 — two separate LLC-named workbooks; for **2024 it was a single combined P&L**, `Copy of P&L Statement.xlsx` — the split into two LLC-specific workbooks appears to be new for 2025, per Drive file-creation dates, 2026-09-12), a **home-office deduction** worksheet, driver's licences, and a **1099-K**. **2024's Form 1095-A was NOT reuploaded for 2025** — the 2025 organizer's document-upload notifications (2026-03-12) list only driver's licences and the two LLC workbooks, no 1095-A — a genuine negative, not a gap (search: Gmail document-upload notifications for the 2026-03-12 batch), so marketplace coverage may not have recurred, or he simply didn't need to resupply it. Still worth a direct check before filing.
  - **He supplied bank details for direct deposit** _(Julia, 2025-04-08)_ — on file in Double/Drive, **never written here**.
  - 🔵 **Possible foreign bank account, unconfirmed and unchased** (2026-09-12): a document named `uah-privat - Iurii Iakovenko.pdf` (a Ukrainian PrivatBank statement, UAH-denominated, by filename) was submitted with the **2023** organizer materials (Drive, 2024-03-19). Content not opened. If this reflects an account he still holds, it bears on FBAR/FATCA disclosure — nobody has asked him about it since.

### Licenses & other filings
- **Applies?** **Yes — confirmed 2026-09-12: each LLC has a home state.** **YourSeoBoard LLC is a FLORIDA entity** — the firm itself helped form it (Articles of Organization + EIN sent to the client 2024-04-03; a Sunbiz Florida Dept. of State printout dated 2024-03-27 is also on file), so it will owe a Florida annual report. **Semalt LLC is a DELAWARE entity** — an amendment to its Delaware formation is on file from 2023-09-06, and a further "State of Delaware Notice" (likely a franchise-tax reminder) arrived 2024-11-05, unopened. **Nothing records who actually files either company's annual report/franchise tax — still open.**

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE IS NOT A PLAIN 1040 CLIENT — TWO LLCs SIT BEHIND THIS RETURN, IN TWO DIFFERENT STATES.** With the 2025 organizer he uploaded **`YourSeoBoard_LLC_2025.xlsx` and `Semalt_LLC_2025.xlsx`** (2026-03-12), and he signs the firm's documents from a **CEO** address at one of them. **Confirmed 2026-09-12: YourSeoBoard LLC is a FLORIDA entity the firm itself helped form in early 2024** (Articles of Organization + EIN sent to the client 2024-04-03); **Semalt LLC is a DELAWARE entity**, older (amended 2023), with a Delaware franchise-tax-type notice in 2024-11-05. Double still reads `Tax Return Type = 1040`, `Bookkeeping = N/A`. **Establish how each LLC is taxed and which schedules the 1040 actually carries** before preparing anything.
- 🔴 **THE CLIENT'S SIDE HAS BEEN FINISHED SINCE 2026-03-12 AND THE RETURN IS STILL UNFILED.** Organizer `Completed`, project `inProgress` — **the hold is on us, not on him.** ✅ The extension IS confirmed filed (Double task, done 2026-05-27 — deadline 2026-10-15). **What is actually outstanding on our side is still not recorded anywhere** — a full unbounded Gmail/Ping search (2026-09-12) found nothing addressing the five-month gap.
- 🔵 **New, unconfirmed, and worth a direct question (2026-09-12): a possible Ukrainian bank account never chased.** A file named for a Ukrainian PrivatBank (UAH) statement was submitted with the 2023 organizer materials; content not opened, nobody has asked about it since, and it may bear on FBAR/FATCA. Separately, the firm connected him with immigration counsel in **Nov 2023** for unspecified "immigration questions" (via a personal referral, not through Double/Ping) — outcome unknown, no further correspondence found.
- ⚠️ **A Form 1095-A was on the 2024 file, but was NOT reuploaded for 2025** — the 2025 organizer's own upload notifications list no 1095-A, unlike 2024's. This is evidence, not proof, that 2025 has no Marketplace coverage to block filing — confirm directly rather than assuming either way.
- 🔒 **Bank routing and account numbers were supplied for the refund** _(Julia, 2025-04-08)_ and are recorded **nowhere here** — read them from Double/Drive when a filing needs them.
- **He does his own bookkeeping and hands over finished workbooks.** Useful to know before offering a service he already performs — and a reason to sanity-check the figures rather than take them as reconciled.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version published "a plain 1040 client — no business" from a six-day Gmail window; an independent review falsified it. A wider pass produced the entries below. _(Worked by Lilian.)_
  - **2025-02-17 / 2025-04-08 — portal accounts activated** from two different addresses, one of them a company CEO address.
  - **2025-03-10 — the 2024 organizer completed**, with a **Form 1095-A**, a **1099-K**, a **P&L workbook**, a **home-office deduction** worksheet and both licences.
  - **2025-04-08 — the 2024 return signed** by both spouses; the migrated TaxDome note records that **he supplied bank details** for it.
  - **2026-03-12 — the 2025 organizer completed**, with **`YourSeoBoard_LLC_2025.xlsx`** and **`Semalt_LLC_2025.xlsx`**.
- 2026-09-12 — **first full historical sweep (Lilian's session), unbounded, extending the record back nearly two years.** Key finds, chronologically:
  - **2023-08-17 & 2023-10-18** — earliest evidence of the relationship: Zelle payments from "IURII IAKOVENKO" (figures not recorded).
  - **2023-09-06/07** — a **Delaware amendment** for **Semalt, LLC** on file — Semalt is a **Delaware** entity.
  - **2023-11-02** — the firm (via a personal referral, Julia's husband Andres Zavarce) connected **"Yuriy Yakovenko"** with an immigration law firm (Canero Fadul) for unspecified "immigration questions." No outcome found in any source.
  - **2024-03-19** — the **2023 intake questionnaire** (Russian-language, "NC 2023 -RUS") filled by ceo@semalt.com; documents uploaded include a **1095-A**, a combined **P&L**, a **home-office worksheet**, and a file suggesting a **Ukrainian PrivatBank account** — see §4/§5.
  - **2024-04-01/03** — **YourSeoBoard LLC formed in Florida** with the firm's direct help: Articles of Organization (2024-04-02) and EIN (2024-04-03) sent to the client.
  - **2024-04-07/08** — the **2023 return** signed and a tax liability direct-debited.
  - **2024-11-05** — a **Delaware notice** for Semalt LLC (likely franchise tax), filed in Drive, not confirmed actioned.
  - **2025-02-17 → 03-10** — the **2024 return**: organizer completed, documents (1095-A, combined P&L, home-office worksheet) uploaded, return signed 2025-04-08.
  - **2026-03-12** — the **2025 organizer** completed, with the two separate LLC-specific workbooks (a new format vs. 2024's single combined P&L) — no 1095-A this time.
  - **2026-05-27** — the 2025 extension confirmed filed (Double task).
  - Ping: `resolve_person`, `search_meetings` (scoped and org-wide), `list_action_items` all returned nothing specific to this client — confirmed empty, not unsearched.
- **Nothing further was found in the sources actually searched.** Every source reached in this pass — Double (all planes), Gmail (unbounded back to 2023), Google Drive (four search angles), Ping — either returned material or a confirmed empty result; none was left unsearched.

### Tax year 2025 — the review

- **Filing position:** Form 1040, joint — **with two LLCs behind it**, treatment unsettled.
- **Organizer:** Completed 2026-03-12.
- **Status:** `inProgress`, unfiled; the work sits with the firm.
- **Watch:** whether a 2025 Form 1095-A exists, as it did for 2024.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Establish how `YourSeoBoard LLC` (FL) and `Semalt LLC` (DE) are taxed** — disregarded, partnership or S-corp — and which schedules the 1040 therefore carries. States are now confirmed (2026-09-12); classification is not. Everything else about this return follows.
- 🔴 **Find out what is blocking the return on our side** and record it. The client finished in March; **now over five months of silence, confirmed still undocumented after a full unbounded search (2026-09-12).**
- [x] **Check for a 2025 Form 1095-A** — **checked 2026-09-12: not reuploaded for 2025**, unlike 2024. Confirm directly with the client before relying on this as an all-clear.
- [x] **Confirm the 2025 Form 4868 is on file** — **YES, confirmed 2026-09-12** via the Double task record (done 2026-05-27). Deadline 2026-10-15.
- **Follow up on the possible Ukrainian bank account** (uah-privat document, 2023) — never asked about since it was submitted; FBAR/FATCA relevance unconfirmed.
- **Confirm who files each LLC's annual report / Delaware franchise tax** — nothing records it.

### Information still needed

- [x] Each LLC's state — **YourSeoBoard = Florida, Semalt = Delaware, confirmed 2026-09-12.** Tax classification and annual-report position still open.
- [ ] Which state the couple lives in, and their working language _(Russian-language intake form used for 2023, per the "NC 2023 -RUS" questionnaire — a lead, not a confirmation)_
- [ ] Whether there are dependants
- [ ] Whether either LLC needs a separate return the firm is not preparing
- [x] Ping, Drive, and Double's documents — **swept 2026-09-12, first full historical pass, COMPLETE**

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710639](https://app.doublehq.com/close?cid=710639)
- **Double tax project (2025):** [tax-return?cid=710639&projectId=219327](https://app.doublehq.com/tax-return?cid=710639&projectId=219327)
- **Migrated TaxDome notes:** Drive `4. Documents > Iurii Iakovenko` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** [Iurii Iakovenko](https://drive.google.com/drive/folders/1FPyl9NIUDJcWmwqeQRZWWG6bhrtIDk0b) — plus a **YourSeoBoard LLC** company folder and **two** similarly-named Semalt folders (one a subfolder of the other; not investigated as a duplication issue)
- **Related SOPs:** _(pending)_
