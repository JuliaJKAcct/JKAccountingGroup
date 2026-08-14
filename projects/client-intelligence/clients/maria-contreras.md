# Maria Contreras

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-14

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

> ⚠️ **NO FULL HISTORICAL SWEEP HAS RUN.** Created 2026-08-14; the Gmail pass covered
> **2026-03 → 2026-08** (a targeted catch-up after the first version drew conclusions from a
> six-day window). Ping, Drive and everything before 2026 are **still unswept**. The catch-up is
> recorded in [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Maria Contreras — an **individual** client
- **Entity type:** Individual taxpayer — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** ⚠️ _(pending, and it matters)_ — she claims **vehicle, internet and vehicle-repair** deductions, which need a business, rental or other qualifying use behind them (§5)
- **Primary language:** _(pending — do not assume from the surname; check Double)_
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
- **Organizer status:** **Completed** _(Double)_
- **Process notes (→ future SOP):**
  - **What she supplies for the return** _(2026-03-03)_: **car insurance**, a **car-mileage record**, an **internet bill**, and a **vehicle repair** invoice. The migrated note from a year earlier records the same car-insurance item for 2024 — so this is her **recurring** deduction set, not a one-off.

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

- 🔴 **SHE CLAIMS VEHICLE, INTERNET AND VEHICLE-REPAIR DEDUCTIONS, AND NOTHING ON FILE SAYS WHAT THEY ARE CLAIMED AGAINST.** For 2025 she supplied **car insurance, a mileage record, an internet bill and a car-repair invoice**; the migrated note shows **car insurance for 2024** as well. None of these is deductible on a 1040 without a **business, rental or other qualifying use** — and Double records no business at all: `Tax Return Type = 1040`, `Bookkeeping = N/A`. **Establish the activity behind them before the next return**; either she has self-employment nobody has written down, or the claims need re-examining.
- ⚠️ **The mileage record is per-vehicle and recurring** — she sends it every year alongside the insurance. Whatever the underlying activity is, the substantiation habit is already established, which is worth knowing before asking her for it again.
- ✅ **The 2025 return is filed** — signed 2026-03-04, recorded filed 2026-05-25.
- **Do not assume her working language** from the rest of this client base, which is mostly Ukrainian- and Russian-speaking. Check Double before writing to her.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version rested on a one-line migrated note and a six-day Gmail window; an independent review prompted a wider pass, which turned the file's one open question into a specific one. _(Worked by Lilian.)_
  - **2025-04-08 — the migrated TaxDome note.** _(Julia.)_ One line: **car insurance for 2024**; the amount is in Drive.
  - **2026-03-03 — the 2025 document upload:** **car insurance**, **car miles**, an **internet bill**, and a **vehicle repair** invoice.
  - **2026-03-04 — the 2025 return signed.**
  - **2026-03-06 — the firm's invoice for the work paid.**
  - **2026-05-25 — Double records the 2025 return as filed.**
- **Nothing further was found in the sources actually searched** — Double live, and Gmail from 2026-03 forward. **Ping, Drive and everything earlier have never been swept**, so this is a statement about the search, not about the world.

### Tax year 2025 — the review

- **Filing position:** Form 1040, signed 2026-03-04.
- **Organizer:** Completed.
- **The unresolved item:** what the vehicle, internet and repair deductions are claimed against.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Establish the activity behind the vehicle/internet/repair deductions.** It is the one thing that decides what her return should look like, and it has been open for two filing seasons.
- **Run the one-time full historical sweep** — never done for her, and this file has little else in it.
- **Confirm the actual 2025 filing date** if it ever matters — signature and recorded filing are eleven weeks apart.

### Information still needed

- [ ] What she does, which state she lives in, and which language she works in
- [ ] Whether she has self-employment, rental or other business activity
- [ ] Whether there are dependants or a spouse on the return
- [ ] Ping, Drive, and everything before 2026 — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710646](https://app.doublehq.com/close?cid=710646)
- **Double tax project (2025):** [tax-return?cid=710646&projectId=219333](https://app.doublehq.com/tax-return?cid=710646&projectId=219333)
- **Migrated TaxDome notes:** Drive `4. Documents > Maria Contreras` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
