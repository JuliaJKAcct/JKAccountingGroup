# Atman Parts

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

- **Business name:** Atman Parts
- **Entity type:** Sch C / disregarded entity (Double property "Tax Return Type" = Sch C) (Double, 2026-07-21)
- **Home state:** _(pending)_
- **Industry / what they do:** Online parts sales / e-commerce — sells on **eBay** under the seller account **atman.autoparts** (confirmed via eBay team-invite email, Gmail 2026-03-24, upgraded from prior low-confidence signal); uses a **Business PayPal** (Ping meeting 2026-07-20, low confidence)
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** Monthly bookkeeping (Double property "Bookkeeping" = Monthly) (Double, 2026-07-21)
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double); QBO connected to Double 2026-07-20, client's principal made **primary QBO admin** the same day (Gmail, 2026-07-20). Note: Intuit account notifications for this QuickBooks subscription have also shown the company name **"Project ATMAN LLC"** alongside "Atman Parts" (Gmail, 2026-03 to 2026-07) — possibly a legal-name vs. trade-name distinction; **verify which is correct with the client**.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Bookkeeping / day-to-day contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Business PayPal | Payments | _(pending — Drive link)_ | _(mentioned in the 2026-07-20 call — low confidence)_ |
| eBay (marketplace) | Sales channel | _(pending)_ | Seller account **atman.autoparts** (Gmail, 2026-03-24 team-invite email) |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | _(pending)_ |

## 4. Obligations & recurring processes

Each obligation below becomes the raw material for Atman Parts' SOP.

### Sales tax
- **Applies?** Discussed in the 2026-07-20 onboarding call — **likely yes**, but the specifics were not legible in the transcript.
- **Jurisdiction(s):** _(pending — the state was not clear in the transcript)_
- **Frequency & due date:** _(pending)_
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** _(pending)_
- **Current status:** _(pending)_
- **Process notes (→ future SOP):** The 2026-07-20 call also touched **franchise tax** and **annual reports** as obligations — specifics not legible; **verify with Lilian/Julia**. _(Ping meeting 2026-07-20, auto-transcribed, low confidence)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** Yes — **Monthly** (Double property "Bookkeeping", 2026-07-21).
- **Cadence:** Monthly.
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** Likely yes — Double's "Tax Return Type" property = **Sch C** (Schedule C / disregarded entity) (Double, 2026-07-21). Confirm with Lilian/Julia.

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- _(pending)_

## 6. History & open questions

### Log
- 2026-07-20 — Profile started. Confirmed the client in Double as **Atman Parts**
  (QuickBooks Online). Sales-tax details to come from Lilian.
- 2026-07-20 — Sweep: no Double notes yet.
- 2026-07-20 — Found Atman in Ping — indexed under the **owner's individual contact**, not the business name "Atman Parts" (that is why the first search missed it; the sweep now searches by owner **and** business). Read the owner's follow-up client meeting with Julia (Ping, 2026-07-20). The auto-transcript is rough/multilingual, so only low-confidence signals were usable: uses **QuickBooks** + a **Business PayPal**, possibly sells on **eBay**; the call discussed **sales tax, franchise tax and annual reports** (no legible state/frequency). Concrete details still need capture from Lilian/Julia.
- 2026-07-21 — Full weekend sweep (Gmail coverage-gap catch-up; Ping/Double bounded to 2026-07-20+). Double `list_client_properties` resolved several pending fields: Tax Return Type = Sch C, Bookkeeping = Monthly. Gmail full history confirmed the eBay seller account (**atman.autoparts**) and surfaced the QBO-Double connection + primary-admin change (both 2026-07-20), plus a possible legal-name/trade-name mismatch ("Project ATMAN LLC" vs. "Atman Parts" in Intuit notifications) to verify. Found the client's Drive folder ("Atman Products"). The owner (per Double contact) also holds a **separate individual profile in Double** (his personal 1040 work) — confirms the pattern noted 2026-07-20; no company-level facts came from it. No new Double notes or Ping meetings beyond the existing 2026-07-20 items. `list_client_meetings` errored ("no client ID available" — connector limitation, used `search_meetings` scoped by clientId instead).

### Outstanding items (CI-only — never in the SOP)
- A Double "Cleanup" task was created and assigned to Lilian, due 2026-08-20 (Double activity log, 2026-07-20) — track in Double.

### Information still needed
- [ ] Snapshot basics (home state, primary language, FY-end)
- [ ] Sales tax: jurisdiction, frequency/due date, agency & portal, form, our role
- [ ] Where the sales-tax portal credentials live (Drive link)
- [ ] Confirm entity's legal name ("Atman Parts" vs. "Project ATMAN LLC" seen in Intuit notifications)
- [ ] Which other obligations apply (payroll, licenses)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)
- **Google Drive folder (sensitive vault):** [Atman Products](https://drive.google.com/drive/folders/1j28nmUpb7u18MLzVO8punGFAbXBXcxJs) (Google Drive, 2026-07-21)
- **Related SOPs:** _(pending — links into ../sops/ once written)_
