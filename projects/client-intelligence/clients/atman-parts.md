# Atman Parts

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-08

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

- **Business name:** Atman Parts _(also appears as "Project ATMAN LLC" on Intuit/QuickBooks billing — naming inconsistency to reconcile; possibly a single-member LLC per the Sch C tax-return-type property below)_
- **Entity type:** **LLC, single-member / disregarded entity** — files on the owner's **Schedule C** (Double's Tax Return Type = `Sch C`; a 2026-01-30 W-9 on file checks "Individual/sole proprietor") _(Double + Drive, 2026-08-01 sweep)_
- **Home state:** **TEXAS — settled by Lilian, 2026-08-11.** Confirmed by the filed Texas Sales and Use Tax returns _(Google Drive, filings dated 2026-07-16)_. ⚠️ A later sweep read **New Hampshire** off the mailing address on a 2026-01-30 W-9 that predates the engagement — **that is wrong**; do not reopen it.
- **Industry / what they do:** Confirmed **eBay marketplace auto-parts seller** (seller handle "atman.autoparts"; firm added to the seller's eBay team 2026-03-24) _(Gmail, 2026-03-24 — upgrades prior low-confidence note)_
- **Primary language:** Likely **Russian** — the firm's monthly-retainer proposal for this client was built bilingual RU/EN, and the onboarding-call transcripts mix Russian _(medium confidence, 2026-08-01 sweep)_
- **Our engagement (services we provide):** Bookkeeping (Monthly, per Double), sales tax (TX, confirmed active) _(Double client properties, 2026-07-25)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online — **Simple Start** plan; free trial began 2026-03-24, converted to paid ~2026-04-24 _(Gmail)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — he is the contact who **also has his own individual (1040) client account** in Double. He **became the QuickBooks primary admin on 2026-07-20**, replacing the firm _(Gmail, 2026-07-25 sweep)_ |
| Owner's staff — portal access only, **not our client** | Double client (link below) — the second portal contact; see the note below |
| Bookkeeping / day-to-day contact | Double client (link below) — **not indexed in Ping at all**, a standing coverage gap for this contact _(2026-07-25 sweep)_ |

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
| QuickBooks Online (via Double) | Bookkeeping ledger, Simple Start plan | _(pending — Drive link)_ | Managed through Double. Intuit's own emails show the company under **two names** — "Atman Parts" and "Project ATMAN LLC" — on the same payment method; likely legal name vs. DBA, **unconfirmed** _(Gmail, 2026-08-01 sweep)_ |
| Business PayPal | Payments | _(pending — Drive link)_ | _(mentioned in the 2026-07-20 call — still unconfirmed by other sources, low confidence)_ |
| eBay (marketplace) | Confirmed sales channel — seller "atman.autoparts" | _(pending)_ | _(Gmail, 2026-03-24 — confirmed)_ |
| Texas Comptroller WebFile | Filing sales tax | _(pending — Drive link)_ | Confirmed active e-filing system _(Google Drive)_ |

## 4. Obligations & recurring processes

Each obligation below becomes the raw material for Atman Parts' SOP.

### Sales tax
- **Applies?** **Yes, confirmed** (upgraded from "likely") — actual filed returns found.
- **Jurisdiction(s):** Texas (Texas Comptroller — Sales and Use Tax).
- **Frequency & due date:** Monthly filing. Eight back periods (Nov 2025 – Jun 2026) were all filed the same day, **2026-07-16**, as an onboarding catch-up (not steady monthly cadence yet) — several earlier periods carried late-filing penalties, the two most recent (May, Jun 2026) did not.
- **Agency & portal:** Texas Comptroller WebFile.
- **Form:** Texas Sales and Use Tax return.
- **Our role:** Firm filed the catch-up periods during onboarding.
- **Current status:** Caught up through Jun 2026 as of 2026-07-16; steady-state monthly cadence to be confirmed going forward.
- **Process notes (→ future SOP):** The 2026-07-20 call also touched **franchise tax** and **annual reports** as obligations — specifics still not legible/confirmed; **verify with Lilian/Julia**. _(Ping meeting 2026-07-20, auto-transcribed, low confidence)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** **Yes — Monthly** (Double "Bookkeeping" property = `Monthly`) (source: Double `list_client_properties`, 2026-08-01)
- **Process notes (→ future SOP):** A standard monthly-close checklist was created in Double on 2026-07-20: A/R & A/P Aging Summary review, P&L, Balance Sheet, Statement of Cash Flows, Newly Added / Duplicate Vendors & Customers, Prepare 1099s, Transactions >$1,000 review, Transactions Without Payees, Transactions Auto-Added by Bank Rule, Expense Inconsistency, Parent Accounts Report, Uncategorized Transactions, Expenses & Bills Without Attachments, and a bank-feed completeness check across two connected business checking accounts (source: Double `list_activity_log`, 2026-08-01). An external bookkeeping contractor also assists with monthly Double "Transaction questions" review (e.g. categorizing Outside Services vs. Marketing Expense) per a July 2026 internal email (source: Gmail, 2026-08-01)

### Income tax
- **Applies?** **Yes** — Tax Return Type = `Sch C` in Double; no separate company return, income flows to the owner's individual 1040 Schedule C (source: Double `list_client_properties`, 2026-08-01)

### Licenses & other filings
- **Applies?** _(pending — franchise tax/annual report status still unconfirmed, see Sales tax process notes above)_

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
- The Google Drive client folder is filed under **"Atman Products,"** not "Atman Parts" — same client, name variant (see §7).
- One of the two Double portal contacts is not indexed in Ping at all — a standing Ping coverage gap for this client's bookkeeping/day-to-day contact.
- **QuickBooks primary admin was transferred to the owner** on 2026-07-20 (Intuit notification: "The primary admin for Atman Parts changed... [owner] is the new primary admin"), consistent with the same-day onboarding call. (Source: Gmail, 2026-07-20.)

## 6. History & open questions

### Log
- 2026-07-20 — Profile started. Confirmed the client in Double as **Atman Parts**
  (QuickBooks Online). Sales-tax details to come from Lilian.
- 2026-07-20 — Sweep: no Double notes yet.
- 2026-07-20 — Found Atman in Ping — indexed under the **owner's individual contact**, not the business name "Atman Parts" (that is why the first search missed it; the sweep now searches by owner **and** business). Read the owner's follow-up client meeting with Julia (Ping, 2026-07-20). The auto-transcript is rough/multilingual, so only low-confidence signals were usable: uses **QuickBooks** + a **Business PayPal**, possibly sells on **eBay**; the call discussed **sales tax, franchise tax and annual reports** (no legible state/frequency). Concrete details still need capture from Lilian/Julia.
- 2026-07-25 — Coverage-gap sweep: full historical Gmail pass. Confirmed home state (Texas), industry (eBay auto-parts seller), QBO plan/admin handoff, and a full sales-tax filing history (8 back periods filed 2026-07-16). Found the Google Drive folder under the name "Atman Products" (§7). Client is mid-onboarding per the Double activity log.
- 2026-07-30 — Clarified the contact roles (Lilian): the second portal contact on this
  client is the **owner's employee**, added only for document/portal access. He is not a
  client, so he has no individual account and never will — recorded in §2/§5 so no future
  session flags it as a missing 1040. Generalized into the
  [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill (§7:
  a portal contact is not necessarily an owner).
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
- 2026-08-08 — **Full-pass sweep (gap catch-up).** Double client properties confirmed: **Tax Return Type = Schedule C**, **Bookkeeping = Monthly**, Assigned Staff = Lilian, Account Type = Company; no Double notes on file. Ping (bounded ≥2026-07-20, per the run's rules — this client's gap was Gmail, not Ping): a scoped search of the owner's Ping client record surfaced nothing beyond the same 2026-07-20 "Follow Up" call already on record — no new meetings. **Full historical Gmail pass (in:inbox + in:sent, no date bound) — gap closed.** Found: QuickBooks/Intuit subscription and billing history back to Mar 2026 (trial start, payment history, a lapsed-then-restored subscription) under both "Atman Parts" and "Project ATMAN LLC" as the company name (see §5); the QuickBooks primary-admin transfer to the owner (2026-07-20); a TaxDome account activation (2026-03-26); and a **Form 2848 (power of attorney)** faxed on 2026-03-28. Nothing on sales tax/franchise tax beyond what the 2026-07-20 call already flagged. Google Drive: located the client's folder (link in §7). QuickBooks and the repo (SOPs/FOLLOW-UPS/BACKLOG) were checked; no client-specific content found beyond the BACKLOG.md mention of this file's own existence.

### Outstanding items (CI-only — never in the SOP)
- Entity-naming mismatch ("Atman Parts" vs. "Project ATMAN LLC" vs. Drive folder "Atman Products") — verify the correct legal name with the client.
- Franchise tax / annual report obligation still not confirmed — needs a direct check with Lilian/Julia.
- Bookkeeping/day-to-day contact not indexed in Ping — worth flagging to whoever manages the Ping integration.

### Information still needed
- [x] Snapshot basics — **mostly done**: state (TX), industry (eBay auto-parts), platform confirmed; entity type, primary language, FY-end still pending
- [x] Sales tax: jurisdiction, frequency, agency & portal — **done** (see §4); steady-state cadence going forward still to confirm
- [ ] Where the sales-tax portal credentials live (Drive link)
- [ ] Franchise tax / annual report — still unconfirmed
- [ ] Payroll — still unconfirmed
- [x] Google Drive folder link (sensitive vault) — **done, see §7** (filed under "Atman Products")

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)
- **Google Drive folder (sensitive vault):** [Atman Products folder](https://drive.google.com/drive/folders/1j28nmUpb7u18MLzVO8punGFAbXBXcxJs) _(filed under "Atman Products" — a name variant of "Atman Parts", same client)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
