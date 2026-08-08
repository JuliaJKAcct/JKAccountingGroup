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

- **Business name:** Atman Parts
- **Entity type:** _(pending — the QuickBooks/Intuit subscription notifications alternate between "Atman Parts" and "Project ATMAN LLC" as the company name on file, which may mean the legal entity name is **Project ATMAN LLC** and "Atman Parts" is a trade name, or that two related QuickBooks subscriptions exist — **unconfirmed, verify** (source: Gmail, Intuit billing emails, Mar–Aug 2026))_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending — possibly online **parts sales / e-commerce**; "eBay" and "Business PayPal" came up in the 2026-07-20 call, **low confidence** from a rough transcript — verify)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** **Bookkeeping — Monthly** (source: Double client properties, 2026-08-08). Tax Return Type on file is **Schedule C** (source: Double client properties, 2026-08-08) — see §4 Income tax.
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (per Double)

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
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Business PayPal | Payments | _(pending — Drive link)_ | _(mentioned in the 2026-07-20 call — low confidence)_ |
| eBay (marketplace) | Possible sales channel | _(pending)_ | _(mentioned in the 2026-07-20 call — low confidence, verify)_ |
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
- **Applies?** Yes — **Monthly** (source: Double client properties, 2026-08-08).

### Income tax
- **Applies?** Yes — **Schedule C** on file as the Tax Return Type (source: Double client properties, 2026-08-08). This sits oddly with Double's `Account Type: Company` — **not yet reconciled**; verify whether this is a disregarded-entity/sole-proprietor filing situation before relying on it for planning.

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- **A portal contact here is not an owner.** One of the two portal contacts on this
  client is the owner's **employee**, given access purely to receive documents and use
  the portal. Don't read "contact on the company" as "owner," and don't expect an
  individual return for him. (Detail in §2.)
- **Possible dual QuickBooks/entity naming — unconfirmed.** Intuit billing notifications for this client alternate between "Atman Parts" and "Project ATMAN LLC" as the company name on the same subscription thread (source: Gmail, Mar–Aug 2026). Could be a legal-name-vs-trade-name situation, or two related subscriptions — flag for Lilian/Julia to confirm before it causes confusion in QuickBooks.
- **QuickBooks primary admin was transferred to the owner** on 2026-07-20 (Intuit notification: "The primary admin for Atman Parts changed... [owner] is the new primary admin"), consistent with the same-day onboarding call. (Source: Gmail, 2026-07-20.)

## 6. History & open questions

### Log
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
- 2026-08-08 — **Full-pass sweep (gap catch-up).** Double client properties confirmed: **Tax Return Type = Schedule C**, **Bookkeeping = Monthly**, Assigned Staff = Lilian, Account Type = Company; no Double notes on file. Ping (bounded ≥2026-07-20, per the run's rules — this client's gap was Gmail, not Ping): a scoped search of the owner's Ping client record surfaced nothing beyond the same 2026-07-20 "Follow Up" call already on record — no new meetings. **Full historical Gmail pass (in:inbox + in:sent, no date bound) — gap closed.** Found: QuickBooks/Intuit subscription and billing history back to Mar 2026 (trial start, payment history, a lapsed-then-restored subscription) under both "Atman Parts" and "Project ATMAN LLC" as the company name (see §5); the QuickBooks primary-admin transfer to the owner (2026-07-20); a TaxDome account activation (2026-03-26); and a **Form 2848 (power of attorney)** faxed on 2026-03-28. Nothing on sales tax/franchise tax beyond what the 2026-07-20 call already flagged. Google Drive: located the client's folder (link in §7). QuickBooks and the repo (SOPs/FOLLOW-UPS/BACKLOG) were checked; no client-specific content found beyond the BACKLOG.md mention of this file's own existence.

### Outstanding items (CI-only — never in the SOP)
- _(none captured yet — live tasks live in Double / Ping)_

### Information still needed
- [ ] Snapshot basics (entity type, state, industry, language, FY-end) _(engagement answered 2026-08-08: Monthly bookkeeping; entity-name ambiguity flagged in §5)_
- [ ] Sales tax: jurisdiction, frequency/due date, agency & portal, form, our role
- [ ] Where the sales-tax portal credentials live (Drive link)
- [x] Which other obligations apply — **Bookkeeping (Monthly) and income tax (Schedule C) confirmed via Double, 2026-08-08**; payroll, sales tax and licenses still pending
- [x] Google Drive folder link — **found, 2026-08-08** (§7)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)
- **Google Drive folder (sensitive vault):** [Atman Parts](https://drive.google.com/drive/folders/1j28nmUpb7u18MLzVO8punGFAbXBXcxJs) _(found 2026-08-08)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
