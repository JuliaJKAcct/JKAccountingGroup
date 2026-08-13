# MAYS EXPRESS SERVICE LLC

> **Status:** Former (business closed 2025-12-31) · **Owner:** Firm · **Last updated:** 2026-08-13

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

- **Business name:** MAYS EXPRESS SERVICE LLC
- **Entity type:** LLC _(pending — tax classification not established)_
- **Home state:** **Florida** _(registered with the Florida Department of Revenue for both sales tax and reemployment tax)_
- **Industry / what they do:** _(pending — the name suggests transport/delivery; unverified)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** sales tax and reemployment-tax filings with the FDOR; scope beyond that _(pending)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-12)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=710582](https://app.doublehq.com/close?cid=710582)
- **Double case note:** `CASE · FDOR — closing the sales-tax and reemployment-tax accounts` — note **491838**

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Florida Department of Revenue portal | Sales tax + reemployment tax filing and payment | _(pending — Drive link)_ | ⚠️ FDOR replaced this portal — see §5 |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(pending)_ |
| Payroll | Reemployment tax reporting | _(pending — Drive link)_ | Ran through at least Dec 2025 (§4) |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** **Yes — Florida**, and the account is **being closed** (§5)
- **Jurisdiction(s):** Florida
- **Frequency & due date:** _(pending — the periods named in the FDOR calls are monthly)_
- **Agency & portal:** Florida Department of Revenue
- **Form:** DR-15 _(inferred from the Florida sales-tax regime — not stated in the source notes)_
- **Our role:** the firm files and chases the account with the FDOR directly
- **Current status:** 🔴 **Closure requested as of 2025-12-31 and REFUSED** — the FDOR will not close the account until the **December 2025** payroll and sales-tax payment are submitted (§5, §6)
- **Process notes (→ future SOP):**
  - **A period that is stuck "processing" at the FDOR takes weeks, and the older the period the longer it takes.** The firm was told to keep calling rather than wait for a notification.
  - ⚠️ **Payments get applied to the wrong period, and the firm has to catch it.** It happened here and was only fixed because Lilian called back and checked (§6).

### Payroll
- **Applies?** **Yes** — it is what the reemployment-tax account reports on, and the **December 2025** filing is the one blocking the closure
- **Provider / frequency:** _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection
- **Cadence:** _(pending)_

### Income tax
- **Applies?** _(pending)_
- **Return type(s) & deadlines:** _(pending)_

### Licenses & other filings
- **Applies?** _(pending)_
- **What & when:** _(pending)_

## 5. Key facts & quirks

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE BUSINESS IS CLOSED AND ITS FLORIDA ACCOUNTS ARE NOT.** Closure of both the sales-tax and the reemployment-tax accounts was requested as of **2025-12-31** on the call of **2026-01-21**, and the FDOR **refused**: the **December 2025 payroll and sales-tax payment had not been submitted**, and it will not close accounts with an open period. **No source reachable by the firm records what happened after that call** — so as far as anything written down goes, **the accounts are still open**, and a Florida sales-tax certificate that stays registered keeps expecting a return every period. **Check the account before assuming this closed itself.**
- **The FDOR misapplied a payment on this account, and only a follow-up call caught it.** A single payment covering two periods was posted entirely against a third. It was reversed and reapplied on the second call — but nothing would have surfaced it except calling back to check (§6, 2025-12-08).
- **The FDOR replaced its payment system during this matter, and the change is worth knowing.** On the old system a period older than **six months** could not be paid online at all — it required calling the FDOR. On the new one, periods stay payable however old they are. _(FDOR agent, 2025-12-08.)_
- **This client's whole recorded history is FDOR collections.** Everything in this file came from Lilian's own call notes; nothing has been swept from Gmail, Drive, Ping or the books. Treat the gaps as genuinely unknown.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude. _(Lilian's iCloud notes, migrated — folder "Mays Express"; notes dated 2025-12-08 and 2026-01-21.)_ The operational detail — the amounts, the FDOR phone line, which period each payment landed on — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2025-12-08 — delinquency notices, and a payment in the wrong place.** The FDOR had issued delinquency notices for **three periods**. Two of them were settled that day. The third — an **April 2024** period — had been paid back in **August 2025**, but the return itself was only filed on **2025-12-05**, so the FDOR was still processing it and could not yet match the payment to it. The agent **removed the late-filing penalty** on that period. A **second call the same day** found the payment just made had been applied to the wrong period entirely; the agent reversed it and applied it correctly. The firm was told the April 2024 period could take **up to a month** to process, and that **every agent gives a different estimate** — so the instruction was to keep calling.
  - **2026-01-21 — the closure request, refused.** Lilian called to close **both** the sales-tax and the reemployment-tax accounts as of **2025-12-31**, reason **business closure**. The FDOR would not: the **December 2025 payroll and sales-tax payment had not been submitted**, and open periods block a closure.
- 2026-08-13 — **Double case note opened.** This client had none. _(Worked by Lilian.)_

### Tax year YYYY — the review

- _(pending)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Find out whether the two Florida accounts were ever actually closed.** Last recorded state is **refused, 2026-01-21**. The blocking item was the **December 2025 payroll and sales-tax payment** — establish whether it was submitted, then whether the closure went through. **Left open deliberately:** Lilian's instruction of 2026-08-12 is that a matter with no recorded ending is recorded as far as it goes and not chased. Silence here is not evidence it resolved.
- **Confirm the April 2024 sales-tax period finally processed** and that the August 2025 payment was matched to it. Last recorded state is "still processing, keep calling" (2025-12-08).
- **A letter was owed to the client** about the delinquency notices (2025-12-08). Whether it was ever sent is unrecorded.

### Information still needed

- [ ] What the business actually did, and its entity/tax classification
- [ ] Whether the December 2025 payroll and sales tax were ever filed
- [ ] Whether the FDOR accounts are closed today
- [ ] Whether a final income-tax return is owed for 2025
- [ ] Who the owner is and which language they work in
- [ ] Everything from Gmail, Drive, Ping and the books — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710582](https://app.doublehq.com/close?cid=710582)
- **Double case note:** `CASE · FDOR — closing the sales-tax and reemployment-tax accounts` — note **491838**. Carries the FDOR phone line, the amounts, the periods and what each agent said.
- **Migrated TaxDome notes (Double):** `TaxDome > MAYS EXPRESS SERVICE LLC > 2. Notes` — and in Drive under `4. Documents`. Not yet read (the backfill's Phase 2 is gated — see [`taxdome-notes-backfill.md`](../automation/taxdome-notes-backfill.md)).
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
