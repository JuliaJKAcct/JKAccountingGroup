# VOXAGO LLC

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-22
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record, properties, note 491841 read in full, contacts, activity log), Gmail (full history — first page of ~40 estimated results reviewed in detail), Ping (`resolve_person` + `search_meetings`), and Google Drive all checked.

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
- **Industry / what they do:** _(pending — the company has a website, which the FDOR asked for)_
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

- 🔴 **AN FDOR REVIEW WAS OPEN ON 2025-12-15 AND NOTHING RECORDS HOW IT ENDED.** The FDOR asked for five things — the Schedule C, a written statement that the business is not operating at the previous address, the company's website link, payment of the late fees on **three 2024 periods** (January, February and April), and payment of **fees owed to the local court**. It also asked the firm to establish **whether the business sells tangible goods** — the sales-tax taxability question. **Assume all of it is still open** until the account is checked.
- 🔴 **There are COURT fees, not only FDOR fees.** The FDOR told the firm the client also owes fees to the **local court** — which usually means the delinquency had already been referred out. That is a different creditor, a different deadline, and it is the item most likely to have been forgotten.
- **The FDOR has an old address for this business** — the firm was asked to state **in writing** that it no longer operates at the previous address. So, like [Optic Gold](./optic-gold.md) and [Voicecapital](./voicecapital.md), **correspondence may be going somewhere nobody reads.** ⓘ Three of the clients in this batch have the same problem; it may be worth checking across the roster rather than one at a time.
- **The 2025 Florida annual report was still outstanding on 2026-02-10** and no filing is recorded. _(Florida's published penalty is $400 late, and administrative dissolution if it is never filed — general law, not from the source note.)_
- 🔵 **Double's "2025 Taxes" project was marked Filed on 2026-07-03** — worth noting alongside the Income Tax=No property; not resolved which return this project actually tracks. _(Double activity log, 2026-08-22)_
- A real **Zoom call took place 2026-04-22** between Julia and Voxago (meeting recap: "Voxago has joined your meeting," Russian summary states the call covered business operations, financial reporting and compliance) — postdates the 2025-12-15 FDOR call, content otherwise unreachable. A second, similarly-named recap ("Best Broker - Zoom," 2026-03-24) exists on the same recurring meeting link — **ambiguous** whether it involved Voxago or Best Broker Realty LLC (a separate client on the same shared contact roster); not resolved. _(Gmail, 2026-08-22)_
- Florida sent a "Notice of Change or Filing" for this entity's Sunbiz record on **2026-04-29**, the same day the firm's "2026 Annual Report and Dissolutions" payment-receipts email went out — consistent with, but not proof of, the outstanding annual report having been filed around that date.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude. _(Lilian's iCloud notes, migrated — folder "Voxago"; note dated 2025-12-15, plus the pinned "Annual Reports 2025" note of 2026-02-10.)_ The operational detail — the fax line, the FDOR agent, the Business Partner number — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2025-12-15 — FDOR call.** The agent set out what the FDOR wanted: a **copy of the Schedule C by fax**, carrying the company name, the account number and the **Business Partner number**; **something in writing** stating the business is not operating at the previous address; and a **link to the company's website**. She confirmed that **tax returns for January, February and April 2024 were filed late and late fees are payable**, and that there are **also fees owed to the local court**. She asked the firm to find out **whether the business sells tangible goods** — the sales-tax taxability question that decides what should be collected on the account at all.
  - **2026-02-10 — the annual-report list.** Lilian's pinned note recorded Voxago's **2025 Florida annual report as still pending**, alongside two other entities.
- **Nothing after those dates is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, this is left open rather than chased or inferred. ⚠️ **Read that as a statement about the SOURCES SEARCHED, not about the world** — these files were built from the migrated notes plus Double, with **no full historical sweep of Gmail, Drive or Ping**. _(Qualifier added 2026-08-14, after an independent review showed the same phrasing on other files was concealing live work.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: note 491841 re-read in full — matches this file's existing summary, adds only the operational specifics (fax numbers, agent name, Business Partner number) this file deliberately keeps out. Client properties resolved bookkeeping cadence (Quarterly) and assigned staff (Julia Kononova); Income Tax = No corroborates the FDOR Schedule-C reading; "2025 Taxes" project confirmed Filed 2026-07-03 (unreconciled against Income Tax=No — see §5). Gmail: full history, found a 2026-04-22 Zoom call and an ambiguous 2026-03-24 recap possibly belonging to Best Broker Realty instead (§5), plus the 2026-04-29 Sunbiz notice. Drive: found the "Voxago LLC (empty)" folder naming quirk and the actual working files elsewhere. Ping: `resolve_person` + `search_meetings` returned largely irrelevant/garbled results — no legible content specific to the FDOR case.

### Tax year YYYY — the review

- _(pending)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Check the FDOR account and establish what is still owed** — STILL OPEN. Whether the FDOR's five requested items or the court fees were ever actually sent/paid remains unconfirmed by any source searched, including the full-historical Gmail pass.
- 🔴 **The court fees** — STILL OPEN, no update found.
- **Was the 2025 Florida annual report filed?** Possibly — the 2026-04-29 Sunbiz notice is consistent with a filing around that date, but not confirmed.
- **Settle whether the business sells tangible goods** — STILL OPEN, no answer found.
- **Clarify which entity the 2026-03-24 "Best Broker - Zoom" recap actually covers** — Voxago or Best Broker Realty LLC (same recurring meeting link, same shared contact roster).

### Information still needed

- [ ] What the business actually does, and its website
- [ ] The owner, and whether the business income lands on an individual return
- [ ] The company's current address, and whether the FDOR now has it
- [x] Whether the firm also does bookkeeping here — **yes, Quarterly per Double** (§1); off-Double work product found in Drive
- [x] Full-historical Gmail/Drive/Ping/Double sweep — **done 2026-08-22** (Gmail: only the first page of ~40 estimated results reviewed in detail, dominated by unrelated automated invoice notifications and Optic Gold/Best Broker financial-delivery emails sharing the inbox)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710606](https://app.doublehq.com/close?cid=710606)
- **Double case note:** `CASE · FDOR — the 2024 late periods, the old address and the court fees` — note **491841**. Carries the fax line, the FDOR agent, the Business Partner number and the periods.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
