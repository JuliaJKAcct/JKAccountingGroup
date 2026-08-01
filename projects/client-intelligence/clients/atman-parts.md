# Atman Parts

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

- **Business name:** Atman Parts
- **Entity type:** LLC, single-member/disregarded entity — files as **Schedule C** (Double's "Tax Return Type" property = `Sch C`; a 2026-01-30 W-9 on file checks "Individual/sole proprietor," consistent with a disregarded-entity LLC) (source: Double `list_client_properties`, 2026-08-01; Google Drive W-9, 2026-08-01)
- **Home state:** Possibly **New Hampshire** — **low confidence**, from the mailing address on the 2026-01-30 W-9 (predates the firm's current engagement); verify with Lilian/Julia before relying on it, especially for sales-tax nexus (source: Google Drive, 2026-08-01)
- **Industry / what they do:** Online **auto-parts sales / e-commerce** — sells on **eBay** under the store/team name **"atman.autoparts"** (confirmed via a genuine March 2026 eBay team-invite email, not just the rough call transcript — **medium-high confidence** now) and uses a **Business PayPal** for payments (source: Gmail full pass, 2026-08-01; also 2026-07-20 call)
- **Primary language:** Likely **Russian** — the firm's monthly-retainer proposal for this client was built bilingual RU/EN ("Atman-style," per `FOLLOW-UPS.md` #6); onboarding-call transcripts also mix Russian — **medium confidence** (source: repo `FOLLOW-UPS.md`, 2026-08-01)
- **Our engagement (services we provide):** Monthly bookkeeping (Double "Bookkeeping" property = `Monthly`) plus tax prep that flows through to the owner's individual return (Tax Return Type = `Sch C` — no separate company return; income flows to the owner's 1040 Schedule C). Atman was the model client for the firm's premium monthly-retainer proposal: one bundled fee, bilingual RU/EN, e-signature (source: Double, 2026-08-01; `FOLLOW-UPS.md` #6)
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (per Double) — Intuit's own subscription emails reference the QBO company under **two names**, "Atman Parts" and "Project ATMAN LLC," under the same payment method; likely the legal-LLC name vs. the DBA, but **unconfirmed** — verify with Lilian/Julia (source: Gmail full pass, 2026-08-01)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — he is the contact who **also has his own individual (1040) client account** in Double |
| Owner's staff — portal access only, **not our client** | Double client (link below) — the second portal contact; see the note below |
| Bookkeeping / day-to-day contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)

> **Two portal contacts, only one is a client.** Atman Parts has a second portal
> contact who **works for the owner**. He was added so he can reach the documents we
> send and use the Double portal — he is **not a client of the firm**, so he will
> **never** have an individual client account, and his missing 1040 is not a gap to
> chase. The owner is the contact who also appears on an `Account Type = Individual`
> client. _(Lilian, 2026-07-30.)_ This is the general rule too — see the
> [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill §7.

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double. Company shows under two names in Intuit's own emails ("Atman Parts" / "Project ATMAN LLC") — verify which is the DBA (source: Gmail, 2026-08-01). Primary QBO admin was transferred from the firm to the client on 2026-07-20, around when Double was connected; the subscription then showed **canceled** on 2026-07-21 after repeated payment failures (Jun–Jul 2026) — confirm current active status so Double's sync isn't interrupted (source: Gmail, 2026-08-01) |
| Business PayPal | Payments | _(pending — Drive link)_ | Confirmed recurring topic in the 2026-07-20 call — details still low confidence |
| eBay (marketplace) | Sales channel | _(pending)_ | Store/team name **"atman.autoparts"** — confirmed via a March 2026 eBay team-invite email (source: Gmail, 2026-08-01) |
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
- **Applies?** **Yes — Monthly** (Double "Bookkeeping" property = `Monthly`) (source: Double `list_client_properties`, 2026-08-01)
- **Process notes (→ future SOP):** A standard monthly-close checklist was created in Double on 2026-07-20: A/R & A/P Aging Summary review, P&L, Balance Sheet, Statement of Cash Flows, Newly Added / Duplicate Vendors & Customers, Prepare 1099s, Transactions >$1,000 review, Transactions Without Payees, Transactions Auto-Added by Bank Rule, Expense Inconsistency, Parent Accounts Report, Uncategorized Transactions, Expenses & Bills Without Attachments, and a bank-feed completeness check across two connected business checking accounts (source: Double `list_activity_log`, 2026-08-01). An external bookkeeping contractor also assists with monthly Double "Transaction questions" review (e.g. categorizing Outside Services vs. Marketing Expense) per a July 2026 internal email (source: Gmail, 2026-08-01)

### Income tax
- **Applies?** **Yes** — Tax Return Type = `Sch C` in Double; no separate company return, income flows to the owner's individual 1040 Schedule C (source: Double `list_client_properties`, 2026-08-01)

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- **A portal contact here is not an owner.** One of the two portal contacts on this
  client is the owner's **employee**, given access purely to receive documents and use
  the portal. Don't read "contact on the company" as "owner," and don't expect an
  individual return for him. (Detail in §2.)
- **Two QBO company names in play.** Intuit's subscription emails reference this
  client's QuickBooks company as both "Atman Parts" and "Project ATMAN LLC" under the
  same payment method — likely the DBA vs. the legal LLC name, but **unconfirmed**;
  don't assume they're the same entity without checking with Lilian/Julia.
  (Gmail full pass, 2026-08-01)
- **QBO subscription had a rocky patch.** Repeated Intuit payment-failure notices
  (Jun–Jul 2026) and a "subscription canceled" notice on 2026-07-21 — one day after the
  firm connected Double and transferred primary QBO admin to the client — mean the
  live QBO connection status is worth double-checking before relying on Double's sync
  for this client. (Gmail full pass, 2026-08-01)

## 6. History & open questions

### Log
- 2026-08-01 — Weekly sweep: **full one-time Gmail pass** completed (coverage gap
  cleared — `in:inbox`/`in:sent`, no date bound). Found the earlier 2026-03-24
  "Vitaliy onboarding" Zoom call (predates this file's baseline) discussing organizing
  tax/accounting services for Vitaliy's (plural) **businesses** in the US — confirms the
  owner runs more than one business (see the owner-with-several-businesses rule). Also
  found: a 2026-03-24 eBay team-invite confirming the store name "atman.autoparts"; the
  client's individual profile was activated in **TaxDome** on 2026-03-26, predating its
  Double individual-client record (created 2026-05-19) and the Atman Parts company
  record (created 2026-07-20); and a run of QuickBooks Online payment/subscription
  emails (trial → paid → payment failures → "canceled" on 2026-07-21). Also pulled fresh
  Double `list_client_properties` (Tax Return Type, Bookkeeping frequency, Account
  Type) and the 2026-07-20 Double close-checklist activity log. No new Ping meetings
  beyond the 2026-07-20 follow-up call already logged (semantic search returned only
  that meeting plus noise from unrelated clients, discarded). Google Drive folder for
  this client found and linked in §7.
- 2026-07-20 — Profile started. Confirmed the client in Double as **Atman Parts**
  (QuickBooks Online). Sales-tax details to come from Lilian.
- 2026-07-20 — Sweep: no Double notes yet.
- 2026-07-30 — Clarified the contact roles (Lilian): the second portal contact on this
  client is the **owner's employee**, added only for document/portal access. He is not a
  client, so he has no individual account and never will — recorded in §2/§5 so no future
  session flags it as a missing 1040. Generalized into the
  [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill (§7:
  a portal contact is not necessarily an owner).
- 2026-07-20 — Found Atman in Ping — indexed under the **owner's individual contact**, not the business name "Atman Parts" (that is why the first search missed it; the sweep now searches by owner **and** business). Read the owner's follow-up client meeting with Julia (Ping, 2026-07-20). The auto-transcript is rough/multilingual, so only low-confidence signals were usable: uses **QuickBooks** + a **Business PayPal**, possibly sells on **eBay**; the call discussed **sales tax, franchise tax and annual reports** (no legible state/frequency). Concrete details still need capture from Lilian/Julia.

### Outstanding items (CI-only — never in the SOP)
- Confirm whether "Project ATMAN LLC" and "Atman Parts" are the same QBO entity (DBA)
  or two related entities — check with Lilian/Julia.
- Confirm the QuickBooks Online subscription is currently active (it showed
  "canceled" on 2026-07-21 after payment failures) so Double's sync isn't interrupted.

### Information still needed
- [ ] Fiscal year-end
- [ ] Home state — confirm (W-9 suggests NH, low confidence) and its relevance to sales-tax nexus
- [ ] Sales tax: jurisdiction, frequency/due date, agency & portal, form, our role
- [ ] Where the sales-tax portal credentials live (Drive link)
- [ ] Which other obligations apply (payroll, licenses)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)
- **Google Drive folder (sensitive vault):** [Atman Parts](https://drive.google.com/drive/folders/1j28nmUpb7u18MLzVO8punGFAbXBXcxJs) (source: Google Drive search, 2026-08-01)
- **Related SOPs:** _(pending — links into ../sops/ once written)_
