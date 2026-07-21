# AURA REMODELING LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-07-21

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

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

- **Business name:** AURA REMODELING LLC
- **Entity type:** LLC — appears to be a **two-owner LLC**, so likely **partnership (Form 1065)** by default _(inference, medium confidence; tax-return type not set in Double)_.
- **Home state:** Likely **Illinois** _(low-medium confidence — owner's IL area code + an IL attorney for a related family company; not documented — verify)_.
- **Industry / what they do:** **Remodeling / construction contractor** (residential + commercial) — confirmed by the 1099-to-subcontractor + customer-project pattern. _(Gmail — high confidence)_
- **Primary language:** **Ukrainian** (client writes in Ukrainian; firm also uses Russian). _(Gmail)_
- **Our engagement (services we provide):** Bookkeeping (**quarterly**); **1099 preparation** (subcontractors); annual-report filing. Sales tax N/A; payroll N/A; **income tax NOT our service** per Double. **Bookkeeper transitioned to Lilian effective May 1, 2026** (prior bookkeeper reportedly stayed on as tax preparer). _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706679](https://app.doublehq.com/close?cid=706679)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **quarterly** _(Double)_

### Income tax
- **Applies?** Double marks it **not our service** _(Income Tax = no)_. The prior bookkeeper reportedly **stayed on as tax preparer** after the May-2026 handoff — **confirm who actually files the return** and the entity's tax classification (partnership 1065 inferred).

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_
- **1099 preparation:** Yes _(Double)_

## 5. Key facts & quirks

- The firm's chart-of-accounts grammar is described as "Masciave/**Aura**-style" (number-prefixed account names) — this client is a reference for that COA convention (see [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md)). _(firm/SOP knowledge)_
- As a **remodeling/construction** business, expect **subcontractors** → 1099 tracking (W-9s) and job-costing.
- **Two principals** (co-owners) run the account; both receive the quarterly financials.
- **Heavy personal / business commingling — the main bookkeeping challenge:** an Amex and Bank of America activity appear in the books but aren't connected accounts; a personal checking account is used for business transfers — ongoing need to reclassify personal items to owner's draw / distributions.
- **Bank-feed instability:** a connected Chase credit card stopped syncing (statements missing since late 2025); a newer Chase card isn't connected (likely a card replacement to confirm). Only a Chase debit + one Chase credit card are connected in QBO.
- **Books run late** — Q1 2026 was significantly behind; the mid-July 2026 recurring-expense check flagged QuickBooks as late again.
- The owner is linked to a **related family entity** (Double) — the family has other companies.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; quarterly bookkeeping; 1099 prep; income tax not handled by us). The COA-grammar note in §5 comes from **firm/SOP knowledge**, not the Double properties.
- 2026-07-20 — **Gmail enrichment sweep:** established the remodeling / construction profile, likely IL (low confidence), Ukrainian language, two-owner LLC, the commingling / bank-feed / late-books challenges, and the May-2026 bookkeeper handoff. Ping had **no indexed meetings**; facts from Gmail. Ping + Gmail now swept (see sweep-state).
- 2026-07-21 — **Weekend CI incremental sweep** (baseline 2026-07-20): Double (properties unchanged, notes still empty, no activity-log entries in range), Ping (resolved the owner; client-scoped and org-wide `search_meetings` for "Aura Remodeling" / "remodeling contractor" / owner name found no new indexed meetings — org-wide semantic hits were unrelated/pre-baseline noise, discarded), Gmail (in:inbox + in:sent, business name + owner emails, after:2026/07/20 — the one sent match was the firm's own July 2026 recurring-expense-check email to Lilian, already reflected in the "books run late" note above, not new), Drive folder link reconfirmed. No new durable facts.

### Outstanding items (CI-only — never in the SOP)
- Confirm whether the **Amex and Bank of America** activity is personal or business; reclassify personal items to owner's draw.
- Confirm the older **Chase credit card** was replaced by the newer one; obtain the missing statements and fix the QBO bank-feed sync.
- Resolve an **invoice-to-deposit mismatch** with a customer and chase a **customer invoice unpaid since January 2026**.
- **QuickBooks flagged behind** in the July 2026 recurring-expense review — bookkeeping catch-up needed.

### Information still needed
- [ ] Confirm home state (IL inferred); fiscal year-end
- [ ] Who prepares the income-tax return; confirm entity / tax classification (1065 inferred)
- [ ] Credentials Drive link

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706679](https://app.doublehq.com/close?cid=706679)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1cuXd0k1804IckB9VMG1PHWt1Hkn1j9Wt)
- **Related SOPs:** _(pending — links into ../sops/ once written)_
