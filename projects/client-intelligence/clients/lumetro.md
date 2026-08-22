# LUMETRO LLC

> **Status:** Active · **Owner:** Maria · **Last updated:** 2026-08-22

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

- **Business name:** LUMETRO LLC
- **Entity type:** LLC — Double flags Schedule C / income-tax-yes, **but see the tax quirk in §4** (the firm's note says Lumetro won't file its own return). _(Double + Gmail)_
- **Home state:** _(pending — not conclusively established)_. **Lead:** the IRS EIN-assignment notice on file uses a Sheridan, **Wyoming** registered-agent mailing address for the entity — common for a WY-formed LLC, but not proof of where the business actually operates; still needs confirming. _(Google Drive, 2026-08-01 — low confidence)_
- **Industry / what they do:** The **digital-advertising / ad-spend vehicle** within the owner's tech group — runs **Google Ads** spend that is allocated/billed to the affiliated operating company **SensusTech LLC**. Not a standalone operating business. _(Gmail)_
- **Primary language:** English (all correspondence). _(Gmail; owner RU/UA heritage — low confidence)_
- **Our engagement (services we provide):** Monthly bookkeeping (the monthly deliverable is an **"Ad breakdown Lumetro/Sensustech"**); **1099 preparation**. Sales tax N/A; payroll N/A; annual report **no**. Income tax — **see quirk**. **Assigned bookkeeper: Maria.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. Open the Double client to get the actual details.

| Role | Where to find them |
|---|---|
| Owner (CEO @ SensusTech; primary contact) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706691](https://app.doublehq.com/close?cid=706691)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | see Drive folder (§7) | Managed through Double |
| **Google Ads** | The ad spend this entity carries | see Drive folder (§7) | Large monthly spend (breakdowns via portal) |
| Bank | Reconciliation | see Drive folder (§7) | **Chase** |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** No — **N/A** _(Double)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly** _(Double)_. Prepared and emailed **together with SensusTech**; the core work is the monthly **Google Ads spend breakdown**.

### Income tax
- **⚠️ Quirk to reconcile:** the firm's own proposal note says **Lumetro "won't file its own tax return"** — its results are **consolidated into SensusTech** (to avoid revising the SensusTech proposal). This **conflicts** with Double's "income tax = yes / Schedule C" flags. **Resolve which is correct.** _(Gmail: "New Proposal For LUMETRO LLC")_
- Double's **Organizer Status** property reads **"N/A (SCH-C)"** — consistent with the Schedule-C flag, and consistent with Sch-C/bookkeeping-only clients not being owed a tax organizer (per the tax-season-readiness rules). Doesn't resolve the quirk above, just confirms Double's side of it. _(Double, 2026-08-01)_
- **Update:** Double's **Income Tax** checkbox now reads **false** (checked 2026-08-08), which is consistent with the proposal note (no separate return). The **Organizer Status** property still shows "N/A (SCH-C)" — a leftover label, not a current SCH-C flag. This looks like the quirk resolving itself but is not yet confirmed as a deliberate correction — treat as **likely resolved, not verified**. _(Double client properties, 2026-08-08)_
- 🔵 **A second, independent, dated source now supports "no separate filing."** A 2026-04-13 Gmail thread ("Tax Return") has Julia writing to Lilian: **"Note Lumetro LLC - single member llc - will be reporting inside Stans return"** — i.e. a disregarded single-member LLC reporting on the owner's personal return. This predates the 2026-08-15 baseline and was not previously captured. It does **not** explain the earlier Double flags that had read Schedule C / income-tax-yes (those were already noted stale), but it is a second source, in Julia's own words, on the "no separate filing" side. _(Gmail, 2026-04-13; found 2026-08-22)_

### Licenses & other filings
- **Annual report:** No _(Double)_

## 5. Key facts & quirks

- **Tech owner-group (with SensusTech, Mobilesource, Sensus Games):** same owner (styles himself "CEO @ SensusTech LLC"); Lumetro is described as smaller than SensusTech. The owner is linked in Double across ~5 entities. _(Gmail, Double)_
- **Intercompany accounting:** Lumetro **fronts the ad spend and bills/loans it to SensusTech** — a journal entry moves advertising into SensusTech; on Lumetro's side it hits **Accounts Payable / an intercompany Loan** account, named **"Loan due to Sensustech"** in the books. Central to how the books work. _(Gmail; Double task names, 2026-08-08)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double properties + a Ping/Gmail/Drive enrichment sweep. Engaged 22 Jan 2026 (LoE via GoProposal). Ping had **no indexed meetings**; Double has no notes yet. Ping + Gmail + Drive swept (see sweep-state).
- 2026-08-01 — Incremental sweep (baseline 2026-07-20 → today): no new Gmail correspondence or Ping meeting content specific to Lumetro since baseline (only meta weekly-CI-sweep emails and unrelated-client meetings matched). Found a Wyoming registered-agent lead on the home-state question and confirmed Double's Organizer Status value — see §1/§4. Double has no notes and no activity-log entries since baseline. Owner (Stanislav Fedorov) generates Gmail/Ping activity under SensusTech and Mobilesource in this window — routed to those files, not here.
- 2026-08-08 — Incremental sweep (baseline 2026-07-20). Double activity log (5 entries) shows the routine monthly "Loan due to Sensustech" and "Ads Journal Entry" tasks marked Done (2026-08-05/07) and a non-transaction client question resolved (8/7) — normal monthly-close activity, and it confirms the intercompany loan account's exact name (see §5). Double client properties now show Income Tax = false, bearing on the open tax-filing-treatment quirk (see §4). Still no Double notes. Gmail turned up nothing Lumetro-specific post-baseline (hits under "Lumetro" and "Fedorov" were either the firm's own weekly-sweep round-up emails or belonged to sibling entities Mobilesource/SensusTech, not Lumetro). Ping had no legible new content for the client or the owner post-baseline.
- 2026-08-15 — Incremental sweep (baseline 2026-08-08). Double activity log shows the **July 2026 month-end close completed 2026-08-13** (Maria Zavarce) — all standard close tasks (P&L, balance sheet, cash-flow statement, 1099 prep, reconciliation checks) marked Done; no line item specifically flags the "Loan due to Sensustech" account this pass, but the close itself completed on schedule. _(Double activity log, 2026-08-15)_ Gmail: a new thread **"Sensustech/Lumetro Report July2026"** (2026-08-13/14) — Maria sent the owner (Stan Fedorov) the July reports for both entities and flagged two transactions needing clarification; he explained they were **dining expenses from a business trip to Serbia in July 2026**, and Maria reclassified accordingly. Routine monthly-report correspondence, cc'd to Julia — no intercompany-loan-specific content in it. _(Gmail, 2026-08-13/14)_ Still no Double notes for this client. Ping `search_meetings` scoped to "Lumetro LLC" returned no relevant hits (results were all unrelated clients/internal calls). `FOLLOW-UPS.md` and `BACKLOG.md` checked — no mentions of Lumetro or Fedorov.

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** No new Double activity/notes; Ping had no legible Lumetro-specific hits. Found the 2026-04-13 Julia email on the tax-filing-treatment quirk (see §4) — bears on but does not fully resolve the standing Schedule-C-flag question. Sibling-entity activity found under "Lumetro"/"Fedorov" (a 2026-08-21 "USD FUNDS - FYI" thread) belongs to Mobilesource/SensusTech, not routed here.

### Outstanding items (CI-only — never in the SOP)
- **Reconcile the tax-filing treatment** — ARRIVED (partially): see the new 2026-04-13 Julia email above, supporting "no separate filing." Not conclusively closed against the earlier Double Schedule-C flag, which was never explained (only noted stale).
- Confirm **home state / state of formation** — STILL OPEN; a search of Gmail bounded `after:2026/08/15`, on 2026-08-22, for Lumetro + Wyoming/home-state/state-of-formation terms found no confirmation.
- Drive has **duplicate "Lumetro LLC" folders** — not re-chased this run (budget).

### Information still needed
- [ ] Home state; fiscal year-end; the income-tax treatment (above); credentials location

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706691](https://app.doublehq.com/close?cid=706691)
- **Google Drive folder (sensitive vault):** [Lumetro folder](https://drive.google.com/drive/folders/1EMtABwJDlu-UAMjCuwGfs8yLCKnLGt9c) _(at least 4 separate "Lumetro LLC" folders exist across Drive, owned by both Maria and Julia — consolidate)_ _(Google Drive, 2026-08-01)_
- **Related clients:** [`sensustech.md`](./sensustech.md), [`mobilesource-corp.md`](./mobilesource-corp.md) (same tech owner group)
- **Related SOPs:** _(pending)_
