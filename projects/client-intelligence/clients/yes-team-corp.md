# YES TEAM CORP

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-29

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

### Bookkeeping & monthly close
- **Applies?** Yes — **quarterly** _(Double)_
- **Close work in progress as of 2026-08-24:** the "Uncategorized Transactions" task was marked priority and two period-close tasks — one for the company account (ending `1637`) and one for the owner's individual account (ending `9575`, "I. POLUYKO") — moved to In Progress. Bank statements for both accounts (company: through 07/31; individual: 07/20 and 08/20 cycles) were uploaded to the client's Drive folder the same day. _(Double activity log + Google Drive, 2026-08-24, read 2026-08-29)_

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

### Outstanding items (CI-only — never in the SOP)
- Confirm the **registered home state** definitively (strongly inferred FL, not documented). Not chased this run (no registry-lookup tool available).
- **Retirement plan** — proposals were presented (Feb 2026) by an external TPA. STILL OPEN, ~6+ months pending, no deadline. A search of Gmail bounded `after:2026/08/15`, on 2026-08-22, for TPA/retirement-plan/401k terms found only threads about the **firm's own** 401(k) plan (Human Interest) — nothing specific to this client's decision.
- **Mellanni invoice format** — the customer asked (Jun 2026) that invoices be reissued with proper vendor info + service names. STILL OPEN, ~2 months pending, no deadline. A search of Gmail bounded `after:2026/08/15`, on 2026-08-22, for "Mellanni" found nothing.
- ~~Clarify the **second linked entity (Double 710636)**~~ — **resolved 2026-07-30:** it is the
  owner's own individual (1040) account, not an entity. Individuals don't get their own CI file;
  his return details live here in §5.

### Information still needed
- [ ] Confirm registered home state; fiscal year-end
- [ ] Credentials Drive link; the second linked entity (710636)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706718](https://app.doublehq.com/close?cid=706718)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1SAhdDnFcfJAgaXAjssRuiEOlncNPODPp)
- **Related SOPs:** _(pending — links into ../sops/ once written)_
