# Pro Title Agency

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-01

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

- **Business name:** Pro Title Agency LLC
- **Entity type:** Single-member LLC — disregarded entity, reported on the owner's **Schedule C** _(Double note, 2026-07-15)_
- **Home state:** Florida (Hollywood / Broward County)
- **Industry / what they do:** Licensed **title insurance agency** (Florida **DFS**-licensed under the Insurance Code) _(Double note, 2026-07-15)_
- **Primary language:** Russian (inferred — the firm has corresponded with the owner in Russian on BTR matters) _(CI log, 2026-07-30; confirmed 2026-08-01)_
- **Our engagement (services we provide):** BTR filing handled; income tax on the owner's **Schedule C**; **quarterly bookkeeping** via QBO (Double). **No sales tax, no payroll** for this entity. _(Double client properties, 2026-08-01)_
- **Fiscal year-end:** Calendar year (Dec 31) — standard for a disregarded single-member LLC reported on the owner's Schedule C _(inferred, 2026-08-01)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706716](https://app.doublehq.com/close?cid=706716)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — confirm)_

### Payroll
- **Applies?** _(pending — confirm)_

### Bookkeeping & monthly close
- **Applies?** _(pending — confirm)_

### Income tax
- **Applies?** _(pending — confirm)_

### Licenses & other filings
- **Applies?** Yes — **Business Tax Receipt (BTR)**, City of Hollywood + Broward County.
- **What & when:** Local business-license receipts; renewed annually.
- **Our role:** The firm handled the filings.
- **Current status:** _(Double notes, 2026-07-15; Gmail, 2026-07-29/30)_
  - **Broward County receipt — COMPLETE** (received / in hand 2026-07-15).
  - **City of Hollywood LBTR (App #40698) — under review, document requirement clarified 2026-07-30.** Classified under **"Service/Licensed Business — Insurance Agency"** (the city has no "title" category; a FL title insurance agency is DFS-licensed, so Insurance Agency is the correct fit).
  - **Tracking gap — resolved in practice (2026-07-29):** the city contact email on the application is still the owner's, not the firm's, but the owner is now forwarding the city's correspondence to Julia's inbox as it arrives, so status can be followed.
  - **Missing-document request (2026-07-28) — "signed lease agreement with property owner":** the city rejected the sublease that was originally filed as proof of location, stating a sublessee must provide *"a signed agreement between sublessee and the property owner, SYNERGY MOOD LLC."* The firm replied 2026-07-29 (julia@ → BusinessTax@hollywoodfl.org, cc the owner) explaining the leasing chain and attaching **both** the master lease (Synergy Mood LLC ↔ Best Broker Realty LLC) and the sublease (Best Broker Realty LLC ↔ Pro Title Agency LLC) as the combined proof of occupancy right.
  - **City's response (2026-07-30) — the two documents were not accepted, but the requirement was clarified:** the city first reiterated that it needs a lease signed directly between the sub-tenant and Synergy Mood LLC (also noting its records show the location as a "single-family home," not a commercial rental). On being pressed on the sub-tenant structure, the city **clarified that a full lease is not required** — a **short written and signed letter from Synergy Mood LLC (the property owner), acknowledging and authorizing Pro Title Agency LLC's operation as a sub-tenant at the property, is sufficient.** The firm relayed this to the owner (2026-07-30) so he can request that letter from Synergy Mood LLC. **Awaiting the letter.**
  - Application number, folio, EIN, DFS license number, the owner's contact and amounts are in the Double notes.
- **Process notes (→ SOP):** Follows the BTR runbook — [`../../sops/hollywood-broward-business-tax-receipt.md`](../../sops/hollywood-broward-business-tax-receipt.md), which now documents this sub-tenant proof-of-location pitfall (§5).

## 5. Key facts & quirks

- On the City of Hollywood BTR, the **client's own email** was used on the application — the owner now forwards the city's correspondence to Julia's inbox as a workaround (see obligation above).
- **Subleases** its Hollywood, FL location from **Best Broker Realty LLC** (month-to-month, effective 03/2026) and **shares a principal** with it — see [`best-broker-realty.md`](./best-broker-realty.md). _(Double note, 2026-07-15)_
- **The actual property owner/landlord at 1047 Buchanan St is Best Broker Realty LLC's own landlord, SYNERGY MOOD LLC** — Best Broker Realty is only the **master tenant** there (it holds the primary lease directly with Synergy Mood LLC), not the property owner. Pro Title's sublease runs with Best Broker Realty as sub-landlord, **not** with Synergy Mood LLC directly — this is exactly what the City of Hollywood flagged on App #40698 (see obligation above). _(Confirmed via the city's correspondence, 2026-07-29)_
- As a FL **title insurance agency** it is licensed by **DFS** (Insurance Code), not DBPR — relevant to how the BTR category is chosen.

## 6. History & open questions

### Log
- 2026-07-20 — Profile started from the BTR work (FOLLOW-UPS) and the Double record (Pro Title Agency, QBO).
- 2026-07-20 — Sweep: enriched entity / industry / engagement and BTR status from the Double notes (2026-07-15). No Ping meetings indexed.
- 2026-07-23 — Update (Lilian): City of Hollywood LBTR still **not trackable by the firm** — the owner's email (not the firm's) is on the application. Chosen fix: the **owner forwards the city's tracking email** to us; **as of 2026-07-23 he hasn't forwarded it yet**. Once forwarded it'll be in Julia's inbox and we can check status. _(Double note 2026-07-23)_
- 2026-07-29 — Update (Lilian): the owner **forwarded the city's App #40698 email** to Julia — the tracking workaround is now working in practice. The city's email stated it could not process the application because the sublease on file (Pro Title ↔ Best Broker Realty) is not *"a signed agreement between sublessee and the property owner, SYNERGY MOOD LLC."* Confirmed with the owner that no direct lease with Synergy Mood LLC exists or can exist — Synergy Mood LLC's only direct relationship at this location is with Best Broker Realty as master tenant. Julia replied to the city (2026-07-29) explaining the master-lease + sublease chain and attaching both documents. **Awaiting the city's response** — see obligation above and outstanding items below for the fallback if they push back.
- 2026-07-30 — Update (Lilian): the city replied twice. First, it reiterated the requirement for a lease signed directly with Synergy Mood LLC (also flagging its records show the address as a "single-family home"). When pressed on the sub-tenant structure, the city **clarified that the two documents sent on 2026-07-29 don't satisfy the requirement, but a full lease isn't needed either** — a short written and signed letter from Synergy Mood LLC acknowledging/authorizing Pro Title's sub-tenancy will do. Relayed this to the owner in a short message (in Russian) so he can request the letter from Synergy Mood LLC. **Awaiting the letter** — see outstanding items below.

### Outstanding items (CI-only — never in the SOP)
_(Double notes — live status lives in Double.)_
- **Awaiting the owner to obtain a short signed letter from Synergy Mood LLC** (the property owner) acknowledging/authorizing Pro Title Agency LLC's operation as its sub-tenant at 1047 Buchanan St — the city confirmed 2026-07-30 that this letter (not a full lease) is what will satisfy App #40698. Once received, forward it to the city to close out the application.
- **Address change pending:** on 2026-07-14 the client asked to move the address to **Coral Springs** (on the DFS license + Sunbiz). If it proceeds, a **BTR address update/transfer** will be needed later.
- **IRS filing-requirement mismatch:** the EIN letter (CP575) shows a **Form 1065 (partnership)** requirement, but the entity is a **disregarded single-member LLC** reported on Schedule C — reconcile with the IRS so they don't expect a partnership return.

### Information still needed
- [ ] Primary language; fiscal year-end
- [ ] Confirm recurring services (bookkeeping? sales tax? payroll?)
- [ ] Close out the City of Hollywood BTR (resolve the tracking gap)
- [ ] Where credentials live (Drive vault link)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706716](https://app.doublehq.com/close?cid=706716)
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** [`../../sops/hollywood-broward-business-tax-receipt.md`](../../sops/hollywood-broward-business-tax-receipt.md)
