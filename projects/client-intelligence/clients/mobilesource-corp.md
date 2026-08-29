# Mobilesource Corp

> **Status:** Active · **Owner:** Maria · **Last updated:** 2026-08-29

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

- **Business name:** Mobilesource Corp
- **Entity type:** Corporation — **S-corp** (files Form **1120-S**) _(Double)_
- **Home state:** **Florida** (files via FL DOR; FL area codes) _(Gmail)_
- **Industry / what they do:** **Phone / mobile-device sales & repairs** (consumer-electronics buyback & resale; sells through **eBay** plus occasional wholesale). _(Maria's doc guide, Gmail)_
- **Primary language:** English + **Spanish** (the client-side GM corresponds in Spanish; JK's Maria exchanges Spanish with her). _(Gmail)_
- **Our engagement (services we provide):** Monthly bookkeeping (**client keeps its own books; JK reviews & reconciles**); **income tax (Form 1120-S)**; **1099 preparation**; **sales tax (monthly, FL DOR — JK files)**; **payroll via Gusto (biweekly)**. **Assigned bookkeeper: Maria.** _(Double + Gmail + Maria's doc guide, 2026-07-21)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. Open the Double client to get the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact (shares the tech owner-group) | Double client (link below) |
| President | Double client (link below) |
| General Manager (categorizes ~all transactions in QBO; sends payroll notes) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706697](https://app.doublehq.com/close?cid=706697)

## 3. Systems & access

Credentials for **every** system below (Gusto, FL DOR, Simple IRA, banks) live in
**Maria's doc guide** in Drive (§7) — never copied here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | Maria's doc guide (§7) | GM categorizes; JK reviews & reconciles |
| **Gusto** | Payroll (biweekly) | Maria's doc guide (§7) | Several hourly employees; frequent manual adjustments |
| **Florida Dept. of Revenue portal** (FL DOR) | Monthly sales-tax returns | Maria's doc guide (§7) | JK files + pays; report needs manual recalculation |
| **American Funds — Simple IRA** (retirement plan) | Post-payroll contribution roster | Maria's doc guide (§7) | Roster submitted after each payroll |
| **eBay** | Sales channel | — | Buyback resale |
| Bank & cards | Reconciliation | Maria's doc guide (§7) | **Chase ×2** (0087, 0095), **Valley Bank ×2** (4543, 1194), **Amex CC**, **Costco/Citi Visa** |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Yes — **monthly**, **Florida (FL DOR)** — JK files and pays via the FL DOR portal. _(Maria's doc guide, Gmail)_
- **Process notes (→ future SOP):** **the portal does not produce the correct report — it must be recalculated every month.** Common causes to fix in the invoices ("see math"): overridden sales-tax amount, product marked non-taxable, wrong item selected, or address/location errors (the team sometimes turns off auto-calculation and adjusts manually, which makes the report look worse). **Any doubt → escalate to Julia** (often a Zoom review together). _(Maria's doc guide)_

### Payroll
- **Applies?** Yes — **Gusto**, **biweekly** (processed **Tuesday**). _(Maria's doc guide)_
- **Process notes (→ future SOP):** the GM emails notes through the pay period (commissions, Saturday shifts, extra hours). **Tuesday morning: send one consolidated email to the GM (CC Julia)** summarizing all of it and asking if anything else is pending. Standing rules: Saturday shifts pay a fixed per-employee weekend rate; PTO logged as "day without payment" is rejected in Gusto and the hours simply removed from that period; one contractor is **skipped** until the GM says to resume; one employee is hourly (time must be approved + synced); anything extra → **Other earnings → Commissions**, extra hours → **Regular Hours**. **After each payroll, submit the contribution roster to the American Funds Simple IRA.** _(Maria's doc guide)_
- **New process detail (2026-07-25):** when a shift (e.g. a weekend shift) is reported *after* the regular biweekly Gusto run has already processed, the fix is a separate **off-cycle "Bonus" payroll run**, not waiting for the next cycle. _(Gmail, 2026-07-17→24)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_. **Review model:** the client's **GM categorizes ~99%** in QBO; JK owns the **reconciliations** and supports the GM on unclear transactions (all by email, with screenshots).
- **Process notes (→ future SOP):** JK sends **AP and AR reports every month** for the GM to review and flag any write-offs, plus any unclear bill payment or deposit found during reconciliation (vendors sometimes cash checks late). Reports issue ~3 weeks after month-end.

### Income tax
- **Applies?** Yes — **Form 1120-S** _(Double)_; **1099 preparation** included.
- **2025 tax organizer status — CONTRADICTION, unsettled.** This file has recorded **"Sent to the client as of 2026-07-25"** (Double client properties, as read on that date). Re-checked live 2026-08-29: (a) the `Organizer Status` property now reads **"N/A (we have QBO access)"**, and (b) the organizer entity itself (`JK 2025 Business Tax Organizer -Mobilesource`, id 142672) shows status **`draft`**, `publishedAt: null` — i.e. it has never actually been published/sent to the client. The three readings (Sent / N/A-QBO-access / never-published draft) do not agree. Not resolved in this sweep — ask whoever next needs this fact, and update from the answer.

### Licenses & other filings
- _(pending)_

## 5. Key facts & quirks

- **Split-responsibility bookkeeping** — the client's GM categorizes almost everything; JK reconciles and reviews. Communication is **email + screenshots**, not shared live work.
- **Buyback workflow** — a buyback clearing account is zeroed with a matching Bill + Invoice; **buyback transactions repeatedly land in "Uncategorized expenses"** and must be re-mapped (a recurring pain point, strong SOP candidate). _(Gmail)_
- **Buyback root cause identified (2026-07-25):** QuickBooks duplicates the payment entry when a buyback deposit payout is made to a customer — the duplicate is what lands in Uncategorized expenses. _(Gmail "BuyBack 2026" thread, 2026-07-20→22)_
- **Sales-tax report is never right out of the box** — always recalculated; watch the invoice-level "see math" errors (see §4).
- **Part of the tech owner-group** (shares a principal with SensusTech / Lumetro / **Sensus Games LLC** / the wider group). _(Double, Gmail, 2026-08-01)_
- A **USTD deposit-tracing working file** lives in the Drive folder (large multi-month deposit-reconciliation with customer/invoice detail — sensitive; stays in Drive). _(Drive)_
- **Crypto (USDT/stablecoin) deposits recur** and must be verified with the owner before booking — an incoming ACH/USDT deposit is sometimes not recognized by the owner and has to be traced/held pending confirmation rather than booked on receipt. Ties into the existing USDT deposit-tracing working file above. _(Gmail, 2026-07-29)_
- **Gusto → QuickBooks Online integration hit a mapping sync failure** on payroll journals (open task, due 2026-08-18) — same integration issue seen at SensusTech (same tech owner-group); watch whether it recurs. _(Gmail, 2026-08-04)_
- **Sales tax was over-collecting on international shipments** — the system was incorrectly flagging international-shipment orders as taxable; the fix agreed 2026-08-27 is to (a) reclassify the non-Florida tax already collected to income and (b) have the GM (Amalia) include the **full international shipping address** on invoices going forward so the system stops mis-flagging them. Ties into the existing "sales-tax report is never right out of the box" quirk above — this is one specific, now-identified cause. _(Zoom recap, Julia & Maria, 2026-08-27)_
- **eBay fund disputes confirmed correctly booked:** a negative entry in an income account for a lost eBay dispute (a refund to the customer) is the correct treatment — not an error to chase. _(Zoom recap, 2026-08-27)_
- **Balance-sheet cleanup items raised by the GM, still open:** an **Amazon Credit account** Maria was not previously aware of and **2024 gift cards** both need reclassifying to the appropriate expense account for 2026; an **old 2024 computer asset** needs the GM's confirmation on whether it's still in use or should be disposed of; **cash-in-drawer accounts** need review, possibly consolidating into fewer accounts. _(Zoom recap, 2026-08-27)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double properties + a Ping/Gmail/Drive enrichment sweep. Ping had **no indexed meetings**; Double has no notes yet.
- 2026-07-21 — **Integrated Maria Fernanda's "doc guide"** (Drive → *Mafer's Clients process / 3. Mobilesource*): sales-tax recalculation process, the biweekly Gusto payroll routine + Simple IRA roster, the split-responsibility bookkeeping model, bank-feed map, and 5 video tutorials captured into the Operating zone (non-sensitive only). Links in §7. _(Maria's doc guide)_
- 2026-07-25 — Incremental sweep: June 2026 reports sent to the GM/owner group 2026-07-24 — the "reports blocked" item below is now resolved (month-end close for 06-2026 marked Done 2026-07-23, full close checklist completed). Identified the buyback root cause (QBO duplicate payment entries). A USDT-related deposit was flagged pending to clear in QuickBooks (2026-07-23) — worth another look next sweep. Two SOP-proposal candidates queued (buyback root-cause addendum, off-cycle payroll addendum).
- 2026-08-01 — Incremental sweep (baseline 2026-07-20). June 2026 close completed and reports sent (buyback miscategorizations resolved); FL DOR sales-tax audit confirmed underway (state auditor reached out, cc'd Julia); occasional off-cycle/bonus Gusto payroll runs observed; recurring USDT/crypto deposit-verification quirk confirmed; owner-group also includes **Sensus Games LLC** (Double id 710596 — no CI file yet). No new meetings found for this client in Ping for the period. _(Double, Gmail, Ping, Drive)_
- 2026-08-08 — Weekend incremental sweep (baseline 2026-07-20). Gmail surfaced two developments:
  the previously-noted FL DOR "encrypted exchange" has escalated to a **formal sales-tax audit**,
  and the owner flagged a **Chase deposit he does not recognize** as tied to a USDT exchange —
  both added to §6. Also found an open Gusto → QuickBooks Online account-mapping sync issue
  (same as SensusTech, same tech owner-group) — added to §5. The buyback-categorization pattern
  already on file is still recurring as of Jul 20–21 (already a Pending item in the SOP; no new
  proposal needed). Ping had no indexed meetings for Mobilesource or the owner in this window.
- 2026-08-15 — Incremental sweep (baseline 2026-08-08). Double activity log showed the routine
  monthly close progressing (Amex, Costco Visa, and the two Valley Bank feed reconciliations
  marked Done 2026-08-14) and the **Monthly Sales Taxes** task moved Not Started → In Progress →
  Done on 2026-08-12. Gmail confirmed this ties to the **August FL DOR filing cycle**: a "Return
  Filed" and a "Payment Received" notice both dated 2026-08-12 for MOBILESOURCE CORP — the
  monthly sales-tax filing continues on its normal cadence (separate from the previously-flagged
  FL DOR audit, on which no new correspondence appeared this window). No new Double notes. Ping
  had no indexed meetings for Mobilesource or the owner in this window.

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** Double: 30 activity-log entries, all 2026-08-17/18, routine July close + biweekly payroll task completions. Gmail: the FL DOR sales-tax audit escalated materially — see outstanding items. Chase pass: USDT deposit still open; the four "Maria's guide" items and fiscal year-end not chased this run (budget).
- 2026-08-29 — **Incremental sweep (baseline 2026-08-22→2026-08-29).** Double: 0 activity-log entries since baseline. **Contradiction found and recorded** (§4 Income tax) between the organizer status this file previously recorded ("Sent," 2026-07-25) and what the organizer entity + current property both now show — unsettled. Gmail: a "PLEASE ADJUST TRANSACTIONS" thread (2026-08-24) — the GM (Amalia) asked Maria to write off several pending bills-to-pay for customers who never responded and are no longer reachable; Maria adjusted the same day. This addresses the "pending-payment removal" item from Maria's guide open-items list (below). A Zoom recap (Julia & Maria, 2026-08-27) surfaced substantial new operational detail — folded into §5 above (sales-tax shipping-address fix, eBay dispute treatment confirmed, four balance-sheet cleanup items). Chase pass on the FL DOR audit and the USDT deposit — results below; the fiscal year-end and the remaining Maria's-guide items not chased this run (budget).

### Outstanding items (CI-only — never in the SOP)
- **June 2026 reports:** closed. _(Gmail, Double activity log)_
- **2025 business income-tax prep in progress** — not chased this run (budget).
- 🔴 **FL DOR sales-tax audit — ESCALATED, no further movement.** On 2026-08-20 the auditor sent a detailed written list of questions about P&L transactions, specifically buyback-program processing (shipping vs. in-store carrier pickup); the client's GM (Amalia) replied same-day with explanations, cc'ing the President. CHASED this run: a targeted search (`(Mobilesource) (DOR OR audit OR "Department of Revenue") after:2026/08/22`) found no further correspondence — still open, 9 days since the last exchange, no stated deadline.
- ✅ **Pending-payment removal (from Maria's guide) — ADDRESSED 2026-08-24.** The GM asked Maria to adjust/write off several pending bills-to-pay for unresponsive, no-longer-reachable customers; Maria completed it the same day. _(Gmail, 2026-08-24)_
- **Open in Maria's guide, remaining:** dispute case, employee I-9, credit memo, skipped-contractor commissions — not chased this run (budget).
- USDT-related deposit flagged pending 2026-07-23 — STILL OPEN. CHASED this run: a targeted search (`(Mobilesource) (USDT OR crypto) after:2026/08/22`) found nothing; now ~37 days pending, no follow-up found confirming it cleared.

### Information still needed
- [ ] Fiscal year-end; sales-tax registration detail
- [ ] Standardize the buyback categorization (→ SOP)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706697](https://app.doublehq.com/close?cid=706697)
- **Google Drive folder (sensitive vault):** [Mobilesource folder](https://drive.google.com/drive/folders/1hlBu62K4ui8SWoPeMwf8Zhm5GnwC66Fm)
- **Maria's process guide (Drive):** [Mobilesource doc guide](https://docs.google.com/document/d/1XfMfe3pMxG9OjoawnrPuK2Hf3Hlqvz3i-Q98weTI9j0/edit) — full process + all credentials (sensitive; do not copy into repo)
- **Video tutorials (Drive):** [Mobilesource Tutorials](https://drive.google.com/drive/folders/16zt0UzLITu53M2FF0kgCfeRMqFdhRaMu) — Bookkeeping (part 1–3), Sales Taxes, Payroll (screen recordings by Maria)
- **Related clients:** [`sensustech.md`](./sensustech.md), [`lumetro.md`](./lumetro.md) (same tech owner group)
- **Related SOPs:** [`../../sops/mobilesource-bookkeeping-review.md`](../../sops/mobilesource-bookkeeping-review.md) — Monthly Bookkeeping & Close runbook (bookkeeping-sop skill; rendered in the Hub; in review)
