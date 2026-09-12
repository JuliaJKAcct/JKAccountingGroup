# Maria Contreras

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

> ✅ **FIRST FULL HISTORICAL SWEEP COMPLETED 2026-09-12.** Gmail searched unbounded by name and
> email — 23 threads, read to exhaustion, oldest hit 2024-03-31 (confirming a longer relationship
> than previously recorded — see §6). Google Drive searched by name (two pages, all reviewed).
> Double fully re-read: 0 notes, 1 contact, 9/9 activity-log events, 12/12 tasks, 20/20 files. Ping:
> `resolve_person` found her, but `search_meetings` (client-scoped and org-wide) and
> `list_action_items` all returned zero results specific to her — a confirmed negative, not an
> unsearched gap.

## 1. Snapshot

- **Business name:** Maria Contreras — an **individual** client
- **Entity type:** Individual taxpayer — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** ⚠️ **She is a W-2 wage earner, not a business owner** — a 2025 and a 2024 W-2 both sit in her Double file library, each accompanied by a document named for a company, **"Affordable Interior Systems Inc"** (2026-09-12: the naming pattern — one such document per year, uploaded alongside that year's W-2 — strongly suggests this is her employer, though the file's content was not opened to confirm). She still claims **vehicle, internet and vehicle-repair** deductions, which need a business, rental or other qualifying use behind them (§5)
- **Primary language:** All correspondence found (Gmail, TaxDome notifications) is in **English** — not confirmed as her only language, but nothing in Spanish, Russian or Ukrainian was found _(2026-09-12)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The client | Double client (link below) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710646](https://app.doublehq.com/close?cid=710646)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **TaxDome** (legacy) | Where the 2025 documents and signature live | n/a | Documents uploaded 2026-03-03; return signed 2026-03-04 |
| Double client portal | The current portal | n/a | `Organizer Status = Completed` |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — depends on the activity behind the deductions in §5)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year _(Double)_. ⚠️ See §5 — the deduction set she supplies is the shape of a **Schedule C or other business-use claim**, which the plain `1040` does not reflect. Unsettled.
- **Our role:** the firm prepares and files
- **Current status:** ✅ **2025 return FILED** — signed **2026-03-04**, Double records `filed` with `filedAt` **2026-05-25**. ⓘ The gap between signature and the recorded filing date is not explained anywhere; if the actual filing date ever matters, confirm it.
- 🔵 **Longer history than previously recorded (found 2026-09-12): this is at minimum her THIRD consecutive year with the firm, not her second.** A **2023 return** was prepared and signed 2024-03-31, with a refund processed to her bank (figure and account not recorded here — two-data-homes rule); a **2022 IRS tax-return transcript** was pulled into her Drive folder on 2024-03-14 as part of onboarding (standard practice for a brand-new client, and evidence she was NOT a firm client before 2024); a **2024 return** was also prepared (organizer completed 2025-04-05, invoice paid 2025-04-11). So the firm has now prepared three consecutive returns: TY2023, TY2024, TY2025.
- **Organizer status:** **Completed** _(Double)_
- **Process notes (→ future SOP):**
  - **What she supplies for the return** _(2026-03-03)_: **car insurance**, a **car-mileage record**, an **internet bill (Xfinity)**, and a **vehicle repair** invoice — specifically a broken window on what appears to be a **Tesla** (a "Tesla Ally" financing document and a Supercharger charging receipt were also uploaded, though not listed among her stated deduction items). The migrated note from a year earlier records the same car-insurance item for 2024 — so this is her **recurring** deduction set, not a one-off. 🔴 **And across all three years on file (2023, 2024, 2025), no 1099 or other self-employment/business document has ever appeared in her file library** — every year shows only W-2s. **This sharpens rather than resolves the open question in §5**: a W-2 employee's unreimbursed vehicle/internet/repair expenses are not federally deductible under current law (the 2018 TCJA suspension of the misc. 2% itemized deduction) absent a specific exception (e.g. armed-forces reservist, qualified performing artist, fee-basis official) — none of which is on record for her. Whether these have actually been claimed on the filed returns, and on what basis, was not established this sweep (would require opening the filed PDFs) — flagged for review rather than assumed.
  - **2026-02-20, her own words**: "I will send the other info tomorrow for the milage and phone bills" — she also mentioned **phone bills**, but no phone-bill document was found in her file library for any year; only the Xfinity internet bill appears. Unconfirmed whether it was ever sent.

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **SHE CLAIMS VEHICLE, INTERNET AND VEHICLE-REPAIR DEDUCTIONS ACROSS THREE CONSECUTIVE YEARS, AND SHE IS A W-2 EMPLOYEE WITH NO BUSINESS ON FILE.** For 2025 she supplied **car insurance, a mileage record, an internet bill and a car-repair invoice** (Tesla-related — see §4); the same set (minus repair) recurs for 2024. **Across 2023, 2024 and 2025, her Double file library shows only W-2s — never a 1099 or any self-employment document** _(confirmed 2026-09-12)_. None of these is deductible on a 1040 without a **business, rental or other qualifying use**, and a W-2-only earner cannot generally deduct unreimbursed employee vehicle/internet expenses under current federal law at all. **Establish the activity behind them before the next return** — either she has self-employment nobody has written down, an exception applies that isn't on record, or the claims on the two ALREADY-FILED returns need re-examining.
- 🔵 **She has been a client for THREE consecutive tax years, not two** _(found 2026-09-12)_ — 2023 (signed 2024-03-31), 2024 (organizer completed 2025-04-05), and 2025 (filed 2026-05-25). A 2022 IRS transcript pulled at onboarding (2024-03-14) shows she was not a firm client before then.
- ⚠️ **Her likely employer, per document naming, is "Affordable Interior Systems Inc"** — a same-named document accompanies each year's W-2 in her file library; not opened to confirm.
- ⚠️ **The mileage record is per-vehicle and recurring** — she sends it every year alongside the insurance. Whatever the underlying activity is, the substantiation habit is already established, which is worth knowing before asking her for it again.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version rested on a one-line migrated note and a six-day Gmail window; an independent review prompted a wider pass, which turned the file's one open question into a specific one. _(Worked by Lilian.)_
  - **2025-04-08 — the migrated TaxDome note.** _(Julia.)_ One line: **car insurance for 2024**; the amount is in Drive.
  - **2026-03-03 — the 2025 document upload:** **car insurance**, **car miles**, an **internet bill**, and a **vehicle repair** invoice.
  - **2026-03-04 — the 2025 return signed.**
  - **2026-03-06 — the firm's invoice for the work paid.**
  - **2026-05-25 — Double records the 2025 return as filed.**
- 2026-09-12 — **first full historical sweep (Lilian's session), unbounded Gmail/Drive, Double re-read in full, Ping confirmed empty.** Extended the client's known history back to **2024-03-14** (2022 transcript pulled at onboarding) and **2024-03-31** (2023 return signed):
  - **2024-03-14** — client folder created in Drive; a **2022 IRS tax-return transcript** pulled (standard new-client onboarding step).
  - **2024-03-31** — the **2023 return** signed and a refund processed (figure/account not recorded — two-data-homes rule).
  - **2025-02-17 → 2025-04-08** — the **2024 return**: organizer, a 2024 W-2, and an "Affordable Interior Systems Inc" document uploaded; invoice paid 2025-04-11.
  - **2026-02-09** — she emailed asking the firm to take her on for the 2026 filing season ("Taxes 2026"); Julia replied same day, asking specifically **"Did you receive any 1099 this year?"** — the firm was already alert to the self-employment question. No 1099 was ever supplied for any of the three years.
  - **2026-02-20** — she mentions sending "milage and phone bills"; only a mileage record and an Xfinity internet bill actually appear in the file library — no phone bill found.
  - Ping: `resolve_person`, `search_meetings` (scoped and org-wide), `list_action_items` all returned nothing specific to her — confirmed empty, not unsearched.
- **Nothing further was found in the sources actually searched.** Every source reached in this pass — Double (all planes), Gmail (unbounded), Google Drive, Ping — either returned material or a confirmed empty result; none was left unsearched.

### Tax year 2025 — the review

- **Filing position:** Form 1040, signed 2026-03-04.
- **Organizer:** Completed.
- **The unresolved item:** what the vehicle, internet and repair deductions are claimed against.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Establish the activity behind the vehicle/internet/repair deductions.** It is the one thing that decides what her return should look like, and it has now been claimed across **three** consecutive filing seasons with no 1099 or business ever on file (2026-09-12) — this is no longer just an open question, it is a pattern worth a direct review of what was actually typed into the two already-filed returns.
- [x] **Run the one-time full historical sweep** — **done 2026-09-12, COMPLETE.** Extended her known history back to 2024-03-14; found a 2023 return and a 2024 return the file previously had no record of.
- **Confirm the actual 2025 filing date** if it ever matters — signature and recorded filing are eleven weeks apart.
- **Confirm whether "Affordable Interior Systems Inc" is genuinely her employer** — inferred from document naming only, never opened.

### Information still needed

- [x] What she does, which state she lives in, and which language she works in — **partially answered 2026-09-12**: she is a W-2 employee (likely at "Affordable Interior Systems Inc"), all correspondence found is in English. **Home state still not established.**
- [ ] Whether she has self-employment, rental or other business activity — **leaning "no" after three years with no 1099 ever on file**, but not settled
- [ ] Whether there are dependants or a spouse on the return
- [x] Ping, Drive, and everything before 2026 — **swept 2026-09-12, first full historical pass, COMPLETE**

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710646](https://app.doublehq.com/close?cid=710646)
- **Double tax project (2025):** [tax-return?cid=710646&projectId=219333](https://app.doublehq.com/tax-return?cid=710646&projectId=219333)
- **Migrated TaxDome notes:** Drive `4. Documents > Maria Contreras` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** [Maria Contreras (current)](https://drive.google.com/drive/folders/1Rm8Cm2nxV1yLzS75unCMIVglmtW4wxl7) _(an older 2024 folder and a `contreras.mfernanda@gmail.com`-named folder also exist from the 2023–2024 onboarding — not merged)_
- **Related SOPs:** _(pending)_
