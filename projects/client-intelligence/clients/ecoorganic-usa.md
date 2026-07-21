# ECOORGANIC USA LLC

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

- **Business name:** ECOORGANIC USA LLC
- **Entity type:** LLC
- **Home state:** Connecticut
- **Industry / what they do:** Spray-foam insulation contractor
- **Primary language:** _(pending — confirm)_
- **Our engagement (services we provide):** Monthly bookkeeping — a staff bookkeeper does the work; Claude acts as the **independent reviewer**. (Other services: _(pending)_)
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=719473](https://app.doublehq.com/close?cid=719473)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Bank feed | Reconciliation | _(pending — Drive link)_ | One live feed: Chase business checking (see the bookkeeping SOP); other accounts frozen |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — confirm)_

### Payroll
- **Applies?** _(pending — confirm)_

### Bookkeeping & monthly close
- **Applies?** Yes — this is the core engagement.
- **Cadence:** Monthly.
- **Categorization rules / quirks:** Detailed, client-specific rules already
  documented — check/deposit evidence required, gas-station **$25** threshold
  (< $25 → distributions, ≥ $25 → fuel), **all food/restaurant/convenience →
  distributions** (non-deductible; no client/crew/personal split), owner-personal
  transfers as equity, cash-out **investigated** (not
  blanket owner draws — may be subcontractor cash, 1099 exposure), job costs to
  COGS *(to verify)*, holding accounts to $0 at close. See the SOP.
- **Our role:** Staff bookkeeper does the work; Claude is the independent reviewer.
- **Process notes (→ SOP):** **Already has a full SOP** —
  [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md).

### Income tax
- **Applies?** _(pending — confirm return type & who prepares)_

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- Check- and cash-heavy business; many Zelle payments to subcontractors (W-9 / 1099 tracking matters).
- Only **one live bank feed** (Chase business checking); other bank/card accounts are disconnected and **frozen** pending client confirmation of which are closed.
- **2025 books are closed** — renames/renumbers only; never merge/retype accounts with 2025 activity.
- Several open categorization decisions (meals policy, vehicle finance lease-vs-loan, etc.) tracked in the SOP's Open decisions log.

## 6. History & open questions

### Log
- 2026-07-20 — Profile started from the existing Ecoorganic bookkeeping SOP and the Double record (ECOORGANIC USA LLC, QBO). This client already has a full bookkeeping SOP; the profile mainly points to it.
- 2026-07-20 — Sweep: no Double notes yet; Ping has the client + contacts on file but **no indexed meetings**. Nothing new beyond the bookkeeping SOP.
- 2026-07-21 — Firm recently took this client over (from the prior bookkeeper); active cleanup in progress. Working session refined the SOP as understanding builds: gas-station threshold moved $30 → **$25** with small charges now → distributions (not meals holding); cash-out withdrawals changed from blanket owner-draws to an **investigate-first** procedure (ATM vs transfer; known contractor vs personal account; 1099 exposure); COGS-vs-opex rule flagged **to verify** (provenance unconfirmed); Double noted as the vendor/1099/W-9 tracking tool; COA renumbering reframed as a later, incremental step (classify first). SOP rules now tagged provisional until validated against the client's history.
- 2026-07-21 — Reviewed the only connected feed (Chase checking 8310), Apr–Jul 2026 (357 transactions), to learn the client's actual keeping. Findings reported to Lilian (client figures kept out of the repo). Confirmed business type (spray-foam/insulation contractor). Corrected the SOP's account names to the real QBO chart (the personal/draws account is **Owner's distribution**, not "Owner's Pay & Personal Expenses"; there is a single **Cost of Goods Sold** account with no Materials/Sub-labor/Job-disposal sub-accounts). Key issues surfaced: subcontractor labor (incl. several payees ≥ $2,000) parked in **Outside services** with no W-9/1099 tracking; small gas/convenience charges coded to **Meals**; some …2935 owner transfers hitting **COGS**; owner transfers lumped in the **Owner's Equity** parent instead of contribution/distribution; frequent overdraft fees; triage sits at ~$0 but many categories are still wrong. Judgment calls (meals policy, COGS-vs-opex intent, which payees are 1099 subs) pending Lilian/client.
- 2026-07-21 — Decisions from Lilian: **meals policy resolved** (per Julia) — no client/crew/personal split; all food/restaurant/fast-food/convenience → distributions (non-deductible for now), gas ≥ $25 → fuel, < $25 → distributions (so the Meals account should trend to ~$0). **1099s deferred** — Lilian will resolve payee-by-payee over time; tracked via Double for now, no repo worklist needed. Grocery/food stores → distributions, **except** supply/materials stores (Home Depot, hardware, work-parts, rental/supply houses) → Supplies & Materials/COGS. Vehicle financing left as an **open question** (SOP's "Hyundai/Ally" doesn't match the actual RAM truck loans — to reconcile later). Lilian notes she's "flying blind" on this new client and will study it piece by piece.

### Outstanding items (CI-only — never in the SOP)
- Open categorization decisions (meals policy, vehicle finance lease-vs-loan, which disconnected accounts are closed) — tracked in the SOP's **Open decisions log**; live status in Double.

### Information still needed
- [ ] Primary language; fiscal year-end
- [ ] Sales tax / payroll / income tax applicability and who prepares each
- [ ] Any business licenses / annual filings
- [ ] Where credentials live (Drive vault link)
- [ ] Resolve the SOP's open decisions (meals policy, HMF/Ally, closed accounts)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=719473](https://app.doublehq.com/close?cid=719473)
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md)
