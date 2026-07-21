# Pro Title Agency

> **Status:** Active · **Owner:** Liudmyla Kazannik · **Last updated:** 2026-07-21

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
- **Primary language:** _(pending — confirm)_
- **Our engagement (services we provide):** BTR filing handled; bookkeeping (**quarterly**); income tax on the owner's **Schedule C**. Sales tax N/A; payroll N/A. **Assigned staff (Double): Liudmyla Kazannik** — differs from this file's prior "Owner: Lilian" header, corrected 2026-07-21 (see log). _(Double client properties, 2026-07-21)_
- **Fiscal year-end:** _(pending)_
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
- **Applies?** No — **N/A** _(Double client properties, 2026-07-21)_

### Payroll
- **Applies?** No — **N/A** _(Double client properties, 2026-07-21)_

### Bookkeeping & monthly close
- **Applies?** Yes — **quarterly** _(Double client properties, 2026-07-21)_

### Income tax
- **Applies?** Yes — owner's **Schedule C** _(existing Double notes)_. Note: unlike other S-corp/Sch-C clients in this sweep, Double's structured client properties for Pro Title do **not** carry an explicit "Income Tax" service flag — worth confirming the firm's exact role here (prepare vs. client-handled). _(Double client properties, 2026-07-21)_

### Licenses & other filings
- **Applies?** Yes — **Business Tax Receipt (BTR)**, City of Hollywood + Broward County.
- **What & when:** Local business-license receipts; renewed annually.
- **Our role:** The firm handled the filings.
- **Current status:** _(Double notes, 2026-07-15)_
  - **Broward County receipt — COMPLETE** (received / in hand 2026-07-15).
  - **City of Hollywood LBTR — submitted & paid 2026-07-15, awaiting city processing.** Classified under **"Service/Licensed Business — Insurance Agency"** (the city has no "title" category; a FL title insurance agency is DFS-licensed, so Insurance Agency is the correct fit).
  - **Tracking gap:** the **client's own email** was used on the city application, so the firm does **not** receive the city's Track/Status emails — decide whether to switch the contact email or have the client forward them.
  - Application number, folio, EIN, DFS license number and amounts are in the Double notes.
- **Process notes (→ SOP):** Follows the BTR runbook — [`../../sops/hollywood-broward-business-tax-receipt.md`](../../sops/hollywood-broward-business-tax-receipt.md).

## 5. Key facts & quirks

- On the City of Hollywood BTR, the **client's own email** was used on the application — a tracking gap to resolve (see obligation above).
- **Subleases** its Hollywood, FL location from **Best Broker Realty LLC** (month-to-month, effective 03/2026) and **shares a principal** with it — see [`best-broker-realty.md`](./best-broker-realty.md). _(Double note, 2026-07-15)_
- As a FL **title insurance agency** it is licensed by **DFS** (Insurance Code), not DBPR — relevant to how the BTR category is chosen.
- **Title-agent licensing is managed jointly with the underwriter** (e.g., CTC Connect Title, First American Title). When the agency's designated title agent changes, a replacement Title Agent License must be substituted with the underwriter, alongside proof of location (e.g., the sublease) and formation documents. _(Gmail, "Managing Title Agent" thread 2026-07-14; "Pro Title Agency LLC - working on application now" thread, 2026-03-06)_
- **Owner Sergey Karpenko is a serial entrepreneur** with numerous other JK-serviced entities beyond Pro Title and Best Broker Realty (e.g., Paylite LLC, Voicecapital Inc, Pro Management Agency LLC, Spoon N Fork LLC, Voxago LLC, ADS Nation LLC, and OPTIC GOLD INC per Ping). An ongoing **"entity cleanup"** effort (address updates with the IRS, dissolutions of inactive entities) has been underway since at least March 2026. Paylite LLC's contact address is used as a shared administrative/payment contact across several of these entities. None of these are yet separate CI files — flagged for a possible future owner-group mapping pass. _(Double + Gmail + Ping, 2026-07-21)_
- **Cross-entity payment quirk:** in at least one documented case, a payment received via Zelle under Pro Title's name was consolidated onto **Paylite LLC's** 1099 instead — worth double-checking at 1099 time which entity a given payment actually belongs to. _(Gmail, March 2026)_

## 6. History & open questions

### Log
- 2026-07-20 — Profile started from the BTR work (FOLLOW-UPS) and the Double record (Pro Title Agency, QBO).
- 2026-07-20 — Sweep: enriched entity / industry / engagement and BTR status from the Double notes (2026-07-15). No Ping meetings indexed.
- 2026-07-21 — **Coverage-gap closed: full historical Gmail pass** (in:inbox + in:sent, no date bound) by business name, "Karpenko", and known domains (protitleagency.com, paylitemerchant.com). Found: the title-agent-substitution process with the underwriter, the wider Sergey Karpenko entity group, and a cross-entity 1099 quirk (see §5). Double: `list_client_properties` confirms Assigned Staff = **Liudmyla Kazannik** — this file's header said "Owner: Lilian," corrected to match Double. Ping: org-wide semantic search on the business name and "Sergey Karpenko" returned no new indexed content within the firm's Ping history (mostly garbled, unrelated snippets). Google Drive: canonical client folder linked in §7 (several duplicate/legacy folders also exist under different parents — not linked, to avoid ambiguity).

### Outstanding items (CI-only — never in the SOP)
_(Double notes, 2026-07-15 — live status lives in Double.)_
- **Watch for the city's "Track Your Application" email** — the city may request the DFS state license (as it did for Best Broker Realty).
- **Address change pending:** on 2026-07-14 the client asked to move the address to **Coral Springs** (on the DFS license + Sunbiz). If it proceeds, a **BTR address update/transfer** will be needed later.
- **IRS filing-requirement mismatch:** the EIN letter (CP575) shows a **Form 1065 (partnership)** requirement, but the entity is a **disregarded single-member LLC** reported on Schedule C — reconcile with the IRS so they don't expect a partnership return.

### Information still needed
- [ ] Primary language; fiscal year-end
- [ ] Confirm the firm's exact role on income tax (Double properties don't carry an explicit flag for this client)
- [ ] Close out the City of Hollywood BTR (resolve the tracking gap)
- [ ] Where credentials live (Drive vault link)
- [ ] Title-agent substitution with CTC Connect Title — confirm completed (thread opened 2026-07-14)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706716](https://app.doublehq.com/close?cid=706716)
- **Google Drive folder:** [Pro Title Agency LLC](https://drive.google.com/drive/folders/1q-9aJ-8WSf0iE-zxG-7yHGee8qYeMcRH) _(canonical top-level client folder; several other Pro Title folders exist in Drive under different parents — sensitive files, not enumerated here)_
- **Related SOPs:** [`../../sops/hollywood-broward-business-tax-receipt.md`](../../sops/hollywood-broward-business-tax-receipt.md)
