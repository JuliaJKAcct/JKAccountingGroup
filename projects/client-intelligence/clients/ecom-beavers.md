# Ecom Beavers LLC

> **Status:** Active · **Owner:** Maria · **Last updated:** 2026-08-08

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

- **Business name:** Ecom Beavers LLC
- **Entity type:** LLC taxed as a **C-corporation** (files Form **1120**) — a foreign-owner-friendly structure. _(Double)_
- **Home state:** _(pending — not established in the sources)_
- **Industry / what they do:** **Multi-brand e-commerce / DTC** seller of physical products — sells on **Amazon** (marketplace + likely FBA) and runs **multiple Shopify stores** (brands **Somma, BoneX, Honex**); warehouse/inventory operations. _(Gmail, Ping consult note)_
- **Primary language:** **Russian** (consult recap in Russian). _(Gmail)_
- **Our engagement (services we provide):** Monthly bookkeeping; **income tax (Form 1120)**. Sales tax N/A **(nexus review flagged — see §4)**; payroll N/A; annual report **no**. **New client (onboarded ~May 2026).** **Assigned bookkeeper: Maria.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. Open the Double client to get the actual details.

| Role | Where to find them |
|---|---|
| Owner (foreign / non-resident; primary contact) | Double client (link below) |
| Second participant (partner / advisor, joined the consult) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706686](https://app.doublehq.com/close?cid=706686)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | see Drive folder (§7) | Managed through Double |
| **Amazon** (marketplace + likely FBA) | Sales channel | see Drive folder (§7) | Marketplace facilitator collects/remits sales tax on its channel |
| **Shopify** (multiple stores) | Sales channels | see Drive folder (§7) | Brands: Somma (domain sommacompany.com), BoneX (domain bonexcompany.com), Honex _(Gmail — Shopify billing notices, 2026-07-28/29/31)_ |
| Bank | Reconciliation | see Drive folder (§7) | **Mercury** (incl. an IO charge-card line) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Double lists **N/A**, but a **nexus review is flagged** — Amazon FBA + multiple Shopify stores warrant it (Amazon remits on its channel, but direct Shopify sales could create economic nexus). **Confirm why N/A.** _(Ping consult note, Double)_

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_.

### Income tax
- **Applies?** Yes — **Form 1120** (C-corp) _(Double)_. **Cross-border:** the July-2026 consult covered entity selection, **tax-treaty relief**, **ITIN**, dividend withholding, and profit repatriation for the foreign owner.
- **Organizer Status:** **N/A (BK client)** in Double's tracking _(Double client properties, 2026-08-08)_.

### Licenses & other filings
- **Annual report:** No _(Double)_

## 5. Key facts & quirks

- **Foreign-owned US LLC (non-resident owner)** → the **C-corp** election fits the foreign-owner structure; cross-border tax (treaty, ITIN, withholding, repatriation) is central to the engagement. _(Ping consult)_
- **Multi-brand e-commerce** across Amazon + several Shopify stores; **Mercury** banking. New client (first consult 2026-07-09).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double properties + a Ping/Gmail/Drive enrichment sweep. Ping had a **consult note (via Double note)** — the 2026-07-09 consultation. Ping + Gmail + Drive swept (see sweep-state).
- 2026-08-01 — Incremental sweep (baseline 2026-07-20, inclusive; no coverage gap). No new Ping meetings, Double notes, or Double activity-log entries since the 2026-07-09 consult — that remains the only recorded meeting. Gmail: Shopify billing notices confirmed the Somma and BoneX store domains (added to §3); a Mercury **IO credit-line limit increase** was noted, figure not retained here per the no-dollar-figures rule — see Double/Drive for the amount. _(Gmail, 2026-07-27)_ Ping `resolve_person`/`search_contacts` confirm the owner contact (Double) is associated with **Ecom Beavers LLC only** — no other businesses found, so the owner-group sweep rule doesn't apply here. Checked `FOLLOW-UPS.md` and `BACKLOG.md` — no mentions of this client. QuickBooks not queried this pass (no open financial question; books are managed through Double).
- 2026-08-08 — Incremental sweep (baseline 2026-07-20). Double activity log shows only a **2025 Taxes** project status change (In Progress → Not Started, Julia, 2026-08-04) — an observed status change, noted for context. No new Double notes beyond the existing 2026-07-09 consult note. Gmail turned up routine Shopify billing (Somma, BoneX domain/subscription charges) and a Mercury IO credit-limit change — confirms the multi-store setup already on file but nothing durable to add; no evidence yet that the post-consult deliverables (entity-options summary, treaty guidance, deductible checklist, minutes — see Outstanding items) have gone out. Ping had no legible new content for the client or the owner post-baseline (the only Ecom Beavers hits were the same pre-baseline 2026-07-09 consult already on file).

### Outstanding items (CI-only — never in the SOP)
- **Post-consult deliverables** Julia committed to (2026-07-09): entity-options summary with tax implications; **treaty-application guidance + required certificates**; a deductible-expenses / reimbursement / home-office checklist; meeting minutes. **ITIN & treaty-certificate** needs open. _(Ping consult note)_
- **Payment-reliability watch:** a firm invoice hit a **bank-transfer / ACH failure** in early July (later resolved). _(Gmail)_
- Confirm **home state** and revisit the **sales-tax nexus** question.

### Information still needed
- [ ] Home state; fiscal year-end; credentials location
- [ ] Resolve the sales-tax nexus question; ITIN / treaty status

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706686](https://app.doublehq.com/close?cid=706686)
- **Google Drive folder (sensitive vault):** [Ecom Beavers folder](https://drive.google.com/drive/folders/1z0zQk9y16I7ihYym2mCf56jEmukPuyI8)
- **Related SOPs:** _(pending)_
