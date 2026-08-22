# AURA REMODELING LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-22

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

- **Business name:** AURA REMODELING LLC
- **Entity type:** LLC — 🔴 **reported on Ihor Naum's Schedule C; the company files no income-tax return of its own** _(Lilian, 2026-08-13 — settled)_. See §5 for what that means in practice, and the §6 log for the reading it replaces.
<!-- ⚠️ EDITOR WARNING — do NOT put the words "partnership" or the partnership form number into the
     Entity type line above, not even to say the old inference was wrong. classifyTax() in
     .claude/skills/client-intelligence/render/build.mjs reads ONLY that field and tests that
     pattern BEFORE the Schedule-C branch, so the published card renders as a partnership either
     way. That happened on 2026-08-13 and was caught by review. Kept as a comment so it cannot
     itself trip the classifier. -->
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
- **Applies?** 🔴 **NOT APPLICABLE, AND IT NEVER WILL BE — this company files no income-tax return.** ⓘ **In Double: `Account Type = Company`, `Income Tax = false`, and NO `Tax Return Type` is set** _(verified live 2026-08-13)_. ✅ **That absence is CORRECT, not a gap** — the company files nothing, so there is no form to record. The form sits on the owner: **[the Naum/Levchuk individual record](./ihor-naum-olha-levchuk.md) carries `Tax Return Type = 1040-SCH C`**. ⓘ **That corroborates this reading — it does not prove it on its own**, because that record is a **joint** one and the couple files **two** separate Schedule Cs (Olha's own 1099 work is the other). **Lilian settled which is which**; the properties are what narrow it to that single question. The reasoning is [`method.md`](../../../projects/pre-return-review/method.md) rule 10. Its activity is reported on **Ihor Naum's Schedule C**, so any tax-preparation work for it happens on **[his individual file](./ihor-naum-olha-levchuk.md)**, never here _(Lilian, 2026-08-13)_. Double also marks it **not our service** _(Income Tax = no)_. The prior bookkeeper reportedly **stayed on as tax preparer** after the May-2026 handoff — **confirm whether the prior bookkeeper still prepares anything for this client** — that half is genuinely open. ✅ The tax classification is **settled**: reported on Ihor's Schedule C _(Lilian, 2026-08-13)_.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_
- **1099 preparation:** Yes _(Double)_

## 5. Key facts & quirks

- 🔴 **NEVER EXPECT AN INCOME-TAX RETURN OR A TAX-PREP ENGAGEMENT FOR THIS COMPANY.** It is reported on **Ihor Naum's Schedule C**, so there is no income-tax return in the company's own name — by structure, not by omission _(Lilian, 2026-08-13)_. ⓘ **The company DOES still file in its own name otherwise** — the annual report and the 1099s (§4). ⓘ **And it is owed no organizer** — that follows from the firm's own rule that Schedule C clients are not, not from anything Lilian said. **Anything tax-related found under Aura belongs on [Ihor's file](./ihor-naum-olha-levchuk.md)**, including working papers, mileage and expense schedules. **If a tax-season list ever shows this client as owing a return, the list is wrong.**
- The firm's chart-of-accounts grammar is described as "Masciave/**Aura**-style" (number-prefixed account names) — this client is a reference for that COA convention (see [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md)). _(firm/SOP knowledge)_
- As a **remodeling/construction** business, expect **subcontractors** → 1099 tracking (W-9s) and job-costing.
- **Heavy personal / business commingling — the main bookkeeping challenge:** an Amex and Bank of America activity appear in the books but aren't connected accounts; a personal checking account is used for business transfers — ongoing need to reclassify personal items to owner's draw / distributions.
- **Two principals** (co-owners) run the account; both receive the quarterly financials. ⚠️ **This is who RUNS the account, not who owns it for tax** — it is the fact that produced the old partnership-return inference, and it does not survive as one: Lilian settled the tax structure on 2026-08-13 (§4 — reported on the owner's Schedule C).
- **Bank-feed instability:** a connected Chase credit card stopped syncing (statements missing since late 2025); a newer Chase card isn't connected (likely a card replacement to confirm). Only a Chase debit + one Chase credit card are connected in QBO.
- **Books run late** — Q1 2026 was significantly behind; the mid-July 2026 recurring-expense check flagged QuickBooks as late again.
- The owner is linked to a **related family entity** (Double) — the family has other companies.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; quarterly bookkeeping; 1099 prep; income tax not handled by us). The COA-grammar note in §5 comes from **firm/SOP knowledge**, not the Double properties.
- 2026-07-20 — **Gmail enrichment sweep:** established the remodeling / construction profile, likely IL (low confidence), Ukrainian language, two-owner LLC, the commingling / bank-feed / late-books challenges, and the May-2026 bookkeeper handoff. Ping had **no indexed meetings**; facts from Gmail. Ping + Gmail now swept (see sweep-state).
- 2026-07-30 — Linked into the owner group (§7): the two principals now have an individual 1040 file, [`ihor-naum-olha-levchuk.md`](./ihor-naum-olha-levchuk.md). ~~**Open conflict to resolve:** that file's Schedule C activity vs. the Form 1065 inferred here — a 1065 reaches the 1040 by K-1, not Schedule C, so one of the two readings is wrong.~~ ✅ **RESOLVED 2026-08-13 by Lilian: the Schedule C reading is the right one.** Aura is reported on Ihor's Schedule C and files no income-tax return itself; the partnership inference was wrong and is gone from §1. Also note the home-state disagreement (IL inferred here, FL implied by the related entities). Captured while building the individual file; no dedicated sweep of this client was run.
- 2026-08-01 — **Incremental sweep (baseline 2026-07-20 → 2026-08-01), no new facts.** Double: `get_client`/`list_client_properties` unchanged from baseline; no new notes or activity-log entries on the company record since baseline; portal contacts unchanged (two "Ihor Naum" entries — a business-address contact and a personal-address one — no new contact added). Ping: no indexed meetings and no relevant semantic hits for "Aura Remodeling" or either owner name (org-wide search over 121 accessible meetings returned only unrelated noise). Gmail (`after:2026/07/20`, business name + both known addresses): only 3 internal firm-automation threads (the weekly CI-sweep email and the mid-July recurring-expense report, both already reflected here) — no direct client correspondence in the window. Drive: the client's folder link in §7 confirmed current; no new documents in the window. Owner-level check (Ihor/Olha's individual record 710637, and sibling Kolo Florida Inc 706626) turned up no notes/activity for the individual record and only Kolo-specific activity (its own tax organizer + questions) — nothing attributable to Aura. FOLLOW-UPS.md/BACKLOG.md: no Aura-specific entries beyond what's already linked. _(Ping + Double + Gmail + Drive + repo, 2026-08-01)_
- 2026-08-13 — **Lilian settled the tax structure: this company is reported on Ihor Naum's Schedule C and files no return of its own.** That strikes the Form 1065 inference in §1, closes the conflict opened on 2026-07-30, and means **no tax-preparation engagement will ever exist for this client** — the work belongs on [`ihor-naum-olha-levchuk.md`](./ihor-naum-olha-levchuk.md). The migrated TaxDome note *"2024 Aura"* (vehicle mileage) was routed there for the same reason. _(Worked by Lilian.)_
- 2026-08-15 — **Weekend sweep (incremental, from 2026-08-08):** Double (`list_client_properties`,
  `list_notes` — none exist, `list_contacts`, `list_activity_log` from 2026-08-08 — empty) shows no
  change since baseline. Gmail (`in:inbox`/`in:sent`, business name + "Naum", after:2026/08/08)
  returned only the firm's automated weekly CI-sweep digest and an unrelated forwarded invoice on a
  different (related-family) client's thread. Ping client-scoped semantic search returned no
  results specific to this client — all hits were unrelated noise. Google Drive full-text search for
  the business name, modified after 2026-08-08, returned only the firm's internal password vault
  and hours spreadsheet, neither client-specific. No new activity in the window; none of the
  outstanding items (Amex/BofA reclassification, Chase card replacement, the unpaid customer
  invoice, or the late-books catch-up) show any update this sweep. No SOP exists yet for this
  client, so no SOP-proposal candidates were queued.

### Outstanding items (CI-only — never in the SOP)
- Confirm whether the **Amex and Bank of America** activity is personal or business; reclassify personal items to owner's draw. Not chased this run (budget; needs QuickBooks transaction-level review).
- Confirm the older **Chase credit card** was replaced by the newer one; obtain the missing statements and fix the QBO bank-feed sync. STILL OPEN, pending since before 2026-07-20, no deadline. A search of Gmail bounded `after:2026/08/15`, on 2026-08-22, for "Chase (card OR statement) Aura" found nothing.
- Resolve an **invoice-to-deposit mismatch** with a customer and chase a **customer invoice unpaid since January 2026**. STILL OPEN, ~7 months pending, no deadline. A search of Gmail bounded `after:2026/08/15`, on 2026-08-22, for "invoice unpaid Aura" found nothing.
- **QuickBooks flagged behind** in the July 2026 recurring-expense review — STILL OPEN, ~5–6 weeks pending, no deadline; possibly the same item Julia's 2026-08-20 recurring-expense check flags for this client (an unspecified "quick item to check" — unconfirmed).

### Log (continued)
- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** No new Double activity, notes, or Ping meetings found on/after 2026-08-15. ⚠️ **A cross-client routing note:** two documents, "Form 6166_2024" and "Form 6166 Tax 2023" (IRS Certification of U.S. Tax Residency), were uploaded 2026-08-19 by the Aura AP mailbox into a Drive folder titled "Forms 8802" that already holds **Ihor Naum's personal Form 8802 application** — these read as the IRS-issued certificates arriving for Ihor Naum's own Form 8802, not an Aura company fact, so they are recorded in [`ihor-naum-olha-levchuk.md`](./ihor-naum-olha-levchuk.md) instead, not here. Julia's 2026-08-20 recurring-expense-check email also names Aura as having a "quick item to check" — unspecified. Chase pass: all four outstanding items checked, ages above; Amex/BofA reclassification not chased (budget).

### Information still needed
- [ ] Confirm home state (IL inferred); fiscal year-end
- [x] ~~Who prepares the income-tax return; confirm entity / tax classification~~ ✅ **Answered 2026-08-13 (Lilian): the activity is reported on Ihor Naum's Schedule C and the company files no income-tax return.** Still open: whether the prior bookkeeper prepares anything.
- [ ] Credentials Drive link

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706679](https://app.doublehq.com/close?cid=706679)
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1cuXd0k1804IckB9VMG1PHWt1Hkn1j9Wt)
- **Related clients:** [`ihor-naum-olha-levchuk.md`](./ihor-naum-olha-levchuk.md) (the
  two principals' individual 1040 file), [`kolo-florida.md`](./kolo-florida.md) — same
  owner group.
- **Related SOPs:** _(pending — links into ../sops/ once written)_
