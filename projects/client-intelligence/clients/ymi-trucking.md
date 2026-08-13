# YMI TRUCKING LLC

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-13

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

- **Business name:** YMI TRUCKING LLC
- **Entity type:** LLC **taxed as an S-corp** — the firm files an **1120-S** _(the 2025 extension was a Form 7004 for an 1120-S)_
- **Home state:** ⚠️ **INDIANA — but the IRS has TEXAS on record.** See §5; this is the live problem on this client.
- **Industry / what they do:** trucking _(from the name; not separately confirmed)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** income tax (1120-S); anything else _(pending)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-12)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Previous accountant | Contacted by Julia in March 2026 (§6) — details _(pending)_ |

- **Double client:** [app.doublehq.com/close?cid=710608](https://app.doublehq.com/close?cid=710608)
- **Double case note:** `CASE · IRS — the unexplained 2025 Form 7004, and the Texas address` — note **491842**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| ATX (tax software) | Preparing and e-filing the return | n/a — firm software | Rejected the 2025 7004 as already filed (§5) |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | A bank statement in Julia's Drive is what revealed the Texas address (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **1120-S**
- **Our role:** the firm prepares and files
- **Process notes (→ future SOP):**
  - ✅ **The IRS confirms RECEIVING a Form 7004 for 2025, electronically, on 2026-03-14** — so the extension is on their system. ⚠️ **Acceptance was only assured verbally**; no written confirmation was ever obtained (§6). ⚠️ **But nobody at the firm filed it and the previous accountant says they did not either** (§5). Treat the extension as valid — the IRS has it — while treating **who filed it** as unresolved.
  - **The IRS could not issue a confirmation while the 7004 was still processing.** The agent's assurance was verbal. If written proof is ever needed, it has to be requested later.

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

- 🔴 **THE IRS HAS A TEXAS ADDRESS FOR A COMPANY THAT OPERATES IN INDIANA.** Found on **2026-03-16** — not from the client, but from a **bank statement in Julia's Drive**. Julia's account is that the company is **still in Indiana** and has taken a **new mailing address in Texas**. **So the two facts may both be true and the IRS record may even be current** — nobody established which. **Settle it before assuming an IRS letter went astray**, and settle it before filing anything with an address on it.
- 🔴 **SOMEBODY FILED A FORM 7004 FOR 2025 AND THE FIRM DOES NOT KNOW WHO.** ATX rejected the firm's own 7004 saying one had already been filed; **Julia checked with the previous accountant and it was not them**; the **IRS confirmed receiving one electronically on 2026-03-14**. An unexplained electronic filing against a company's EIN is worth understanding — it is either an unknown third party with the company's details, or something the client did without telling us.
- **The extension is very probably safe, but only verbally so.** Whoever filed it, the IRS confirms holding it — though the agent could issue nothing in writing while it processed, so **received is documented and accepted is not**. The open question is provenance; the unclosed loop is the written proof.
- **No written confirmation of the extension exists.** The IRS would not issue one while it was processing, and none was chased afterwards.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude. _(Lilian's iCloud notes, migrated — folder "YMI Trucking"; note dated 2026-03-16.)_ The operational detail — the IRS agent's name and ID, the fax line — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2026-03-16 — IRS call, prompted by a rejected e-file.** The firm tried to e-file the **Form 7004** for the 2025 1120-S and got a notification saying it **had already been filed**. Julia contacted the **previous accountant**, who said it was not them. The firm called the IRS, which confirmed it **received the 7004 electronically on 2026-03-14**. The agent could not issue any confirmation while it was still processing but **assured Lilian there would be no problem**, since the IRS did have it. On the same call it emerged that **the address in the IRS's records is in TEXAS**, while the company operates in **Indiana** — Lilian traced the Texas address to a **bank statement in Julia's Drive**. Julia's position is that the company is still in Indiana with a new Texas mailing address.
- **Nothing after 2026-03-16 is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, this is left open rather than chased or inferred.

### Tax year YYYY — the review

- _(pending)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Establish the company's correct legal and mailing address, and what the IRS should hold.** Ask the client directly rather than inferring from a bank statement. If the IRS record needs changing, a **Form 8822-B** is the usual route.
- 🔴 **Find out who filed the 2025 Form 7004 on 2026-03-14.** Not the firm, not the previous accountant. Ask the client whether they or anyone else filed it.
- **Get written confirmation the 2025 extension was accepted** — an IRS transcript would show it. Only a verbal assurance exists.
- **Confirm the 2025 return was actually filed by the extended deadline.** Nothing after March 2026 is recorded.

### Information still needed

- [ ] The correct current address, and the reason for the Texas mailing address
- [ ] Who the owner is, and which language they work in
- [ ] Whether the firm also does bookkeeping / payroll / sales tax here
- [ ] Which state filings the company owes (Indiana, and Texas if it has nexus there)
- [ ] Everything from Gmail, Drive, Ping and the books — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710608](https://app.doublehq.com/close?cid=710608)
- **Double case note:** `CASE · IRS — the unexplained 2025 Form 7004, and the Texas address` — note **491842**
- **Migrated TaxDome notes (Drive):** `4. Documents > YMI Trucking LLC > 1. Notes`. Not yet read (the backfill's Phase 2 is gated — see [`taxdome-notes-backfill.md`](../automation/taxdome-notes-backfill.md)).
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
