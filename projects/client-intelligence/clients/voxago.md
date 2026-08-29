# VOXAGO LLC

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-29
>
> ✅ **First full historical sweep completed 2026-08-22; Gmail catch-up READ TO COMPLETION 2026-08-29** — Double (client record, properties, note 491841 read in full, contacts, activity log), Gmail (full history — a plain "Voxago" search returned all ~42 estimated results in a single page, no further `nextPageToken`: exhausted, not budget-limited), Ping (`resolve_person` + `search_meetings`), and Google Drive all checked. 🔴 **This run's full-history read found a previously-unknown pair of Florida DOR tax liens from November 2025 — see §5.**

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

- **Business name:** VOXAGO LLC
- **Entity type:** LLC — ⚠️ **taxed as a disregarded entity**: the FDOR asked for a **Schedule C**, which only exists on an individual return _(inferred from the 2025-12-15 FDOR call; not separately confirmed)_
- **Home state:** **Florida**
- **Industry / what they do:** _(pending — the company has a website, which the FDOR asked for; a Google Sheet titled "Voxago's client list" also exists in Drive, dated 2025-12-16, suggesting the business itself serves clients of its own — not yet confirmed what kind)_
- **EIN:** `93-4574498` — stated by Julia in a 2025-11-05 email to the Florida Department of Revenue (Gmail, found 2026-08-29).
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** sales tax with the FDOR; annual report; **bookkeeping — Quarterly** _(Double client properties, 2026-08-22)_. Assigned staff: **Julia Kononova**. Income Tax = **No** in Double, consistent with the FDOR Schedule-C inference (business income reported on the owner's individual return, not a separate company return).
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-12)_. ⚠️ The client-portal-linked Drive folder is literally named "Voxago LLC (empty)" — the actual working files (a 2025 Chase bank-activity export, plus older 2024/2025 TaxDome-era folders) live elsewhere, meaning bookkeeping/reconciliation work is happening off-Double despite `platform: none`. _(Google Drive, 2026-08-22)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=710606](https://app.doublehq.com/close?cid=710606)
- **Double case note:** `CASE · FDOR — the 2024 late periods, the old address and the court fees` — note **491841**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Florida Department of Revenue portal | Sales tax | _(pending — Drive link)_ | The FDOR account carries a **Business Partner number** — it is in the Double case note |
| Sunbiz | Annual report | _(pending — Drive link)_ | 2025 annual report was **outstanding** as of 2026-02-10 (§4) |
| Company website | The FDOR asked for the link as evidence of what the business does | — | _(pending — URL)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** **Yes — Florida**
- **Jurisdiction(s):** Florida
- **Frequency & due date:** monthly _(the periods the FDOR named are individual months)_
- **Agency & portal:** Florida Department of Revenue
- **Form:** DR-15 _(inferred — not stated in the source note)_
- **Our role:** the firm deals with the FDOR directly
- **Current status:** 🔴 **Three 2024 periods filed late, late fees outstanding, plus court fees** (§5). Whether any of it was paid is unrecorded.
- ⚠️ **UNANSWERED — does this business sell tangible goods?** The FDOR asked the firm to establish it on 2025-12-15 and no answer is recorded. **This is the sales-tax taxability question** — whether the business sells tangible personal property or only services — and it decides what should have been collected and remitted all along.
- **Process notes (→ future SOP):**
  - **The FDOR wanted evidence of what the business is and where it operates** — a copy of the Schedule C, a written statement that the business no longer operates at the previous address, and a link to the company website. That combination is what an FDOR review of a Florida account looks like.
  - **Everything went in by fax**, to a number recorded in the Double case note, and had to carry the company name, the account number **and** the Business Partner number.

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection

### Income tax
- **Applies?** _(pending)_ — but the FDOR's request for a **Schedule C** implies the business's income is reported on the owner's individual return

### Licenses & other filings
- **Applies?** **Yes — Florida annual report**
- **What & when:** annually via Sunbiz, due **1 May**
- **Current status:** the **2025 annual report was still PENDING** as of **2026-02-10** _(Lilian's iCloud notes, migrated — "Annual Reports 2025")_. Whether it was filed is unrecorded. _(Florida's published late penalty for a for-profit annual report is $400, and an entity that never files one is administratively dissolved — general Florida law, not something the source note states.)_


## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **TWO FLORIDA DEPARTMENT OF REVENUE TAX LIENS WERE FILED AGAINST THIS ENTITY IN NOVEMBER 2025 — UNRESOLVED, AND VERY LIKELY THE SOURCE OF THE "COURT FEES" IN THE FDOR REVIEW BELOW.** Found 2026-08-29 in the full-history Gmail read. On 2025-11-04 the owner forwarded the firm a solicitation from an outside tax-resolution vendor referencing a Florida DOR tax lien on this entity. On 2025-11-05 Julia wrote to the FDOR (a Form DR-835 power of attorney attached) disputing two liens on the grounds that **the address the liens were filed against is a New York address with no connection to the client**, and that **at that time the client had no Business Partner number or certificate number and had never registered with the Department of Revenue.** ⚠️ **This is six weeks before, and almost certainly connected to, the 2025-12-15 FDOR review below** — that call is where a real Business Partner number (7087914) first appears, and where "fees owed to the local court" were confirmed: a DOR tax lien is typically recorded with a county clerk of court, which is the most probable source of those court fees. **No source found records how the November dispute was resolved, or whether the two matters are the same lien(s) under a different account.** Confirm with the FDOR and check county court records directly — do not assume either matter is closed. _(Case reference numbers and the third-party vendor's name are withheld here per the two-data-homes rule.)_
- 🔴 **AN FDOR REVIEW WAS OPEN ON 2025-12-15 AND NOTHING RECORDS HOW IT ENDED.** The FDOR asked for four things — the Schedule C, a written statement that the business is not operating at the previous address, the company's website link, and payment of the late fees on **three 2024 periods** (January, February and April) — plus payment of **fees owed to the local court** (see the tax-lien finding above, very likely the same fees). It also asked the firm to establish **whether the business sells tangible goods** — the sales-tax taxability question. **Assume all of it is still open** until the account is checked.
- **The FDOR/DOR has wrong or outdated addresses for this business — twice over.** The December review found the FDOR holds an **old** Florida address (the firm was asked to state in writing that the business no longer operates there); the November lien correspondence separately found the liens were filed against an unrelated **New York** address. So, like [Optic Gold](./optic-gold.md) and [Voicecapital](./voicecapital.md), **correspondence on at least one of these matters may be going somewhere nobody reads.** ⓘ Three of the clients in this batch have an address problem; it may be worth checking across the roster rather than one at a time.
- **The 2025 Florida annual report was still outstanding on 2026-02-10** and no filing is recorded. _(Florida's published penalty is $400 late, and administrative dissolution if it is never filed — general law, not from the source note.)_
- 🔵 **Double's "2025 Taxes" project was marked Filed on 2026-07-03** — worth noting alongside the Income Tax=No property; not resolved which return this project actually tracks. _(Double activity log, 2026-08-22)_
- A real **Zoom call took place 2026-04-22** between Julia and Voxago (meeting recap: "Voxago has joined your meeting," Russian summary states the call covered business operations, financial reporting and compliance) — postdates the 2025-12-15 FDOR call, content otherwise unreachable. A second, similarly-named recap ("Best Broker - Zoom," 2026-03-24) exists on the same recurring meeting link — **ambiguous** whether it involved Voxago or Best Broker Realty LLC (a separate client on the same shared contact roster). 🔵 **Leans toward Best Broker Realty, found 2026-08-29:** the full-history Gmail read found an explicit "Voxago has joined your meeting" notification tied to the 2026-04-22 call, but **no equivalent explicit join-notification tied to the 2026-03-24 recap** — suggestive, not conclusive, that the 2026-03-24 meeting was Best Broker's own call on the shared recurring link, not Voxago's. Still not resolved; report this lean to whoever owns Best Broker Realty's file. _(Gmail, 2026-08-22 / 2026-08-29)_
- Florida sent a "Notice of Change or Filing" for this entity's Sunbiz record on **2026-04-29**, the same day the firm's "2026 Annual Report and Dissolutions" payment-receipts email went out — consistent with, but not proof of, the outstanding annual report having been filed around that date. 🔵 **Now corroborated as a recurring pattern, not a one-off (2026-08-29):** an identical "Notice of Change or Filing" for the same Sunbiz record was also sent almost exactly one year earlier (2025-02-14), alongside a routine 2025 annual-report-due notice (2025-02-07) — the same recurring-notice pattern already flagged on [Optic Gold](./optic-gold.md) and [Voicecapital](./voicecapital.md). Read as routine annual correspondence, not proof of a specific new filing.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude. _(Lilian's iCloud notes, migrated — folder "Voxago"; note dated 2025-12-15, plus the pinned "Annual Reports 2025" note of 2026-02-10.)_ The operational detail — the fax line, the FDOR agent, the Business Partner number — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2025-12-15 — FDOR call.** The agent set out what the FDOR wanted: a **copy of the Schedule C by fax**, carrying the company name, the account number and the **Business Partner number**; **something in writing** stating the business is not operating at the previous address; and a **link to the company's website**. She confirmed that **tax returns for January, February and April 2024 were filed late and late fees are payable**, and that there are **also fees owed to the local court**. She asked the firm to find out **whether the business sells tangible goods** — the sales-tax taxability question that decides what should be collected on the account at all.
  - **2026-02-10 — the annual-report list.** Lilian's pinned note recorded Voxago's **2025 Florida annual report as still pending**, alongside two other entities.
- **Nothing after those dates is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, this is left open rather than chased or inferred. ⚠️ **Read that as a statement about the SOURCES SEARCHED, not about the world** — these files were built from the migrated notes plus Double, with **no full historical sweep of Gmail, Drive or Ping**. _(Qualifier added 2026-08-14, after an independent review showed the same phrasing on other files was concealing live work.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: note 491841 re-read in full — matches this file's existing summary, adds only the operational specifics (fax numbers, agent name, Business Partner number) this file deliberately keeps out. Client properties resolved bookkeeping cadence (Quarterly) and assigned staff (Julia Kononova); Income Tax = No corroborates the FDOR Schedule-C reading; "2025 Taxes" project confirmed Filed 2026-07-03 (unreconciled against Income Tax=No — see §5). Gmail: full history, found a 2026-04-22 Zoom call and an ambiguous 2026-03-24 recap possibly belonging to Best Broker Realty instead (§5), plus the 2026-04-29 Sunbiz notice. Drive: found the "Voxago LLC (empty)" folder naming quirk and the actual working files elsewhere. Ping: `resolve_person` + `search_meetings` returned largely irrelevant/garbled results — no legible content specific to the FDOR case. ⚠️ **Only the first page of ~40 estimated Gmail results was reviewed in detail this run** — the baseline advanced anyway, leaving a coverage gap (corrected 2026-08-24 to a `⚠️ CATCH-UP OWED` marker in `sweep-state.md`).
- 2026-08-29 — **Gmail catch-up READ TO COMPLETION.** Double: properties unchanged, note 491841 re-read in full again — body identical to the 2026-08-22 read, no new content, no activity-log entries in the window. **Gmail: a plain "Voxago" search returned all ~42 estimated results in a single page (no `nextPageToken`) — full history from 2024-06 through 2026-08 actually read in one pass**, not sampled. This surfaced a previously-unknown November 2025 Florida DOR tax-lien matter (§5) — the most significant finding of this run — and strengthened the case that the 2026-03-24 Zoom recap belongs to Best Broker Realty rather than Voxago (§5). Ping: `resolve_person` + `search_meetings` returned only semantically-loose/off-topic hits, nothing legible and specific to the FDOR or lien matters. Drive: the same folders as 2026-08-22 (including "Voxago LLC (empty)"), no new modification dates.

### Tax year YYYY — the review

- _(pending)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **NEW — resolve the November 2025 DOR tax liens and how (or whether) they connect to the December FDOR review.** STILL OPEN, pending since 2025-11-05 (~297 days) on the lien dispute itself; discovered as a tracked item 2026-08-29. No deadline recorded, but this is the oldest live problem now known on this file — check first.
- 🔴 **Check the FDOR account and establish what is still owed** — STILL OPEN, pending since 2025-12-15 (~257 days). Whether the FDOR's four requested items or the court fees were ever actually sent/paid remains unconfirmed by any source searched, including the Gmail catch-up now read to completion.
- 🔴 **The court fees** — STILL OPEN, pending since 2025-12-15 (~257 days); now very likely connected to the November lien matter above (same finding, see §5) rather than a separate open thread.
- **Was the 2025 Florida annual report filed?** Possibly — the 2026-04-29 Sunbiz notice is consistent with a filing around that date, but not confirmed; STILL OPEN, pending since 2026-02-10 (~200 days).
- **Settle whether the business sells tangible goods** — STILL OPEN, pending since 2025-12-15 (~257 days), no answer found.
- **Clarify which entity the 2026-03-24 "Best Broker - Zoom" recap actually covers** — leans toward Best Broker Realty LLC as of 2026-08-29 (see §5), but not confirmed.

### Information still needed

- [ ] What the business actually does, and its website (a "Voxago's client list" spreadsheet exists in Drive, dated 2025-12-16 — suggests the business itself has clients, not yet followed up)
- [ ] The owner, and whether the business income lands on an individual return
- [ ] The company's current address, and whether the FDOR now has it (two different wrong addresses are now on record — see §5)
- [x] Whether the firm also does bookkeeping here — **yes, Quarterly per Double** (§1); off-Double work product found in Drive
- [x] Full-historical Gmail/Drive/Ping/Double sweep — **CLEARED 2026-08-29**: the Gmail catch-up owed since 2026-08-22 (only page 1 of ~40 estimated results had been reviewed) was read to completion this run — a single search returned all ~42 estimated results with no further page, confirming full coverage rather than a budget stop. This is what surfaced the November 2025 tax-lien finding above.

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710606](https://app.doublehq.com/close?cid=710606)
- **Double case note:** `CASE · FDOR — the 2024 late periods, the old address and the court fees` — note **491841**. Carries the fax line, the FDOR agent, the Business Partner number and the periods.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
