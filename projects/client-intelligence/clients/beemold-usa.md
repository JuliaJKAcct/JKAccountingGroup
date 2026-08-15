# Beemold USA LLC

> **Status:** Active · **Owner:** Maria · **Last updated:** 2026-08-15

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

- **Business name:** Beemold USA LLC
- **Entity type:** LLC — files on the owner's **Schedule C** _(Double)_
- **Home state:** **Florida** _(low-medium confidence — sister entity Margate Plumbing is in Broward FL)_
- **Industry / what they do:** Maria's guide categorizes it as **"plumbing"** — the **sister/quieter entity to Margate Plumbing** under the same owner (some months have no activity; prior sweep also saw construction/roofing-materials adjacency). _(Maria's doc guide, Gmail)_
- **Primary language:** English (all correspondence). _(Gmail; owner name is Moldovan/Romanian — native language not assumed)_
- **Our engagement (services we provide):** Monthly bookkeeping; annual-report filing. Income tax **not our service** _(Double: Income Tax = no)_; sales tax N/A; payroll N/A. **Assigned bookkeeper: Maria.** _(Double + Gmail + Maria's doc guide, 2026-07-21)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. Open the Double client to get the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact (also owns Margate Plumbing) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=709445](https://app.doublehq.com/close?cid=709445)

## 3. Systems & access

Credentials for the banks below live in **Maria's doc guide** in Drive (§7) —
never copied here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | Maria's doc guide (§7) | Managed through Double |
| Bank & cards | Reconciliation | Maria's doc guide (§7) | **Mercury** checking (8192) + savings (4245) + credit card, **Bank of America** (8023) — *(refines the earlier "Mercury + Wells Fargo" note; Maria's guide lists BoA for Beemold)* |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_. Reports are delivered **bundled with the sister entity** as "Margate and Beemold" reports (Balance Sheet always; P&L when there's activity).
- **Process notes (→ future SOP):**
  1. **Bank-feed sync has been broken since Feb 2025** → transactions are **uploaded manually** (could be weekly; Maria does it at month-end). See the "Add Mercury and BoA transactions manually" step folder in §7.
  2. **Review the intercompany loan balance between Beemold and Margate** at month-end (sister companies, same owner) and keep the two sides in agreement.
  3. **Bank reconciliation** of every feed (Mercury checking + savings + CC, BoA).

### Income tax
- **Applies?** **Not our service** _(Double: Income Tax = no)_.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_

## 5. Key facts & quirks

- **Bank-feed sync broken since Feb 2025** → **manual transaction upload** (Mercury + BoA); resolving the connection is an open item.
- **Construction owner-group (with Margate Plumbing Inc):** same owner; managed together and **reported jointly ("Margate and Beemold")**; **review the intercompany loan** each month. Beemold is the **quieter** of the pair (some months no activity). Keep the entities' books distinct. _(Maria's doc guide, Gmail)_
- The owner's **Mercury IO** card account has been **repeatedly frozen for insufficient cash balance** — a standing cash-flow quirk to watch. _(Gmail)_
- Beemold's **Mercury "IO" credit card auto-pays its monthly statement** from a Mercury checking account ending **3849** _(Gmail, 2026-07-30)_ — this last-4 doesn't match the checking (8192) already on file; may be a second Mercury checking tied specifically to the IO card, or a correction. Needs confirming (see §6).
- The owner corresponds from multiple mailboxes (kept in Double).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double properties + a Ping/Gmail/Drive enrichment sweep. Ping had **no indexed meetings**; Double has no notes yet — email was the richest source.
- 2026-07-21 — **Integrated Maria Fernanda's "doc guide"** (Drive → *Mafer's Clients process / 6. Beemold*): the manual-upload-since-Feb-2025 process, the intercompany-loan review with Margate, and the corrected bank-feed map (Mercury + BoA) captured into the Operating zone (non-sensitive only). Links in §7. _(Maria's doc guide)_
- 2026-08-01 — Incremental sweep (baseline 2026-07-20). Double (client 709445 + owner's individual profile 716172, no notes/activity-log entries since baseline), Ping (no indexed meetings for Beemold or Vasile Bivol since baseline — confirmed via scoped search), Gmail (one Beemold-specific thread — the Mercury IO checking-3849 note added to §5; all other Vasile Bivol / "Margate Plumbing" threads since baseline — WF 8477 reconnect, GL/WC audit invoice, Mercury IO credit-limit changes, QBO payment dispute, Gusto payroll — are Margate-specific and belong in `margate-plumbing.md`, not here), Drive (no new/modified files in the Beemold folders since baseline). Owner's individual Double profile (716172, "Vasile Bivol & Alisa Goras") shows 1040-Sch C, Organizer Status Completed — personal/1040-only, not a Beemold fact.
- 2026-08-08 — Weekend incremental sweep (baseline 2026-07-20). Double activity log showed only
  routine monthly-close task completions (Aug 3) — nothing new to the Operating zone. Gmail
  surfaced a Mercury account-number discrepancy (see "Information still needed") and Margate-side
  correspondence (WF 8477 reconnection, insurance audit dispute) that belongs to Margate's own
  file, not Beemold's. Ping had no indexed meetings for Beemold or the owner in this window.
- 2026-08-15 — Incremental sweep (baseline 2026-08-08). Double activity log confirmed the routine
  July close (Balance Sheet + P&L marked Done 2026-08-14) and the standing **intercompany-loan
  review task, explicitly named "Loan to Margate Plumbing Inc"** in the close checklist, marked
  Done 2026-08-13 — the first direct confirmation of that task's literal name (process itself was
  already documented). No Double notes. Gmail (2026-08-14, "Margate/Beemold July 2026" thread):
  Maria sent preliminary July reports to the owner and flagged two open items — WF account access
  is still needed to download the statement for the new-account reconciliation (reinforces the
  existing outstanding item), and a specific Beemold income line (dated 7/10) needs the owner to
  identify what it is. Ping had no indexed meetings for Beemold or the owner in this window.

### Outstanding items (CI-only — never in the SOP)
- **QBO bank-feed reconnection** pending — resolve the Mercury + BoA connection so manual upload can stop. _(Maria's doc guide, Gmail)_
- Owner requested an **accountant letter for a personal remortgage** — a personal / related-party ask, not a Beemold service. _(Gmail)_
- **WF statement access still pending** for the new-account reconciliation, and **a specific Beemold income line (dated 7/10) needs owner identification** — both raised in the July 2026 preliminary-reports email. _(Gmail, 2026-08-14)_

### Information still needed
- [ ] Confirm home state; fiscal year-end; what Beemold actually does (low activity)
- [ ] Which Drive folder is canonical (dedicated vs combined)
- [ ] Confirm with Maria whether the Mercury checking ending **3849** (IO card autopay source, Gmail 2026-07-30) is a second Beemold Mercury checking account or a correction to the ●8192 already on file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=709445](https://app.doublehq.com/close?cid=709445)
- **Google Drive folder (sensitive vault):** [Beemold folder](https://drive.google.com/drive/folders/1Pq3AJR1vhne4t6hxJgAscmITj8cbCc5F) · also filed in the combined [Margate/Beemold folder](https://drive.google.com/drive/folders/1tsllCHw6faD_mtL7sjdlxMXPZiuVGCnn)
- **Maria's process guide (Drive):** [Beemold doc guide](https://docs.google.com/document/d/1n2SuSEym5am-TwORAG66YxCQSXLwsd1YYzLJLm_3Sco/edit) — process + all credentials (sensitive; do not copy into repo)
- **Process step folders (Drive):** [Beemold Tutorials](https://drive.google.com/drive/folders/1PEr77hUK8pkldk32yk1Q39X0Zq51Qi2d) — Bookkeeping, "Add Mercury and BoA transactions manually"
- **Related client:** [`margate-plumbing.md`](./margate-plumbing.md) (sister entity, same owner)
- **Related SOPs:** [`../../sops/beemold-usa-bookkeeping-review.md`](../../sops/beemold-usa-bookkeeping-review.md) — Monthly Bookkeeping & Close runbook (bookkeeping-sop skill; rendered in the Hub; in review)
