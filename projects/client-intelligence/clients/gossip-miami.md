# GOSSIP MIAMI LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-04

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

> **This file covers a family relationship, not just one entity.** The engagement
> spans **Gossip Miami LLC** (the business return), the owners' **joint individual
> return**, and **Marat Boxing LLC** (reported on a Schedule C of that return, not
> as a return of its own). They are handled together because they feed each
> other. Split into separate files if any of them grows its own body of process.

## 1. Snapshot

- **Business name:** GOSSIP MIAMI LLC
- **Entity type:** LLC. **Which return it files is not settled in this record** — Lilian describes it as "a corp", while the 2024-return correspondence has the client raising which owners' **names appear on the return**, language that reads more like a multi-owner pass-through. Both an S-corp and a partnership issue K-1s, so that correspondence doesn't decide it. **Confirm against the filed 2024 return before relying on it** _(open question, §6)_.
- **Home state:** Florida
- **Industry / what they do:** A **beauty salon** in Miami — services include manicure/pedicure, and it markets and books through **Vagaro** _(Gmail: a Vagaro marketing email sent on the salon's behalf, 2026-07-28 — not confirmed with the client)_. The street address stays in Double, not here.
- **Primary language:** **Russian** — correspondence with the firm is in Russian.
- **Our engagement (services we provide):** **Tax preparation only.** The firm was **not** the bookkeeper during the year. Covers the Gossip Miami business return, the owners' **joint 1040**, and the **Schedule C** for Marat Boxing LLC.
- **Fiscal year-end:** _(pending — confirm)_
- **Accounting platform:** QuickBooks Online — the firm was **invited as a user on 2026-07-29** specifically to build the financial statements (§4), not to keep the books.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Primary contact / correspondent | Double client (link below) — **one of the two joint filers**; all email to the firm comes from this person, in Russian, and the documents arrive from them _(Gmail)_ |
| Second joint filer | Double client — **the owner of Marat Boxing LLC** (§4), who also receives **K-1s from outside partnerships**. This is the person Lilian speaks with about the scope question _(Lilian, 2026-08-04)_ |
| Gossip Miami's owners as filed | **Unresolved** — in the 2024-return correspondence the client raised a question about which names do and don't appear on the return. Re-check against the filed return; see §6 |

- **Double client:** _(pending — link)_
- **Double / TaxDome:** the family carries **separate accounts** — one for the individuals and one for **Gossip Miami LLC** — activated by the client 2026-03-03 _(Gmail)_.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (Gossip Miami) | The client's ledger — the firm has **user access only**, granted 2026-07-29, to build the P&L | _(n/a — the firm is an invited user)_ | Access was granted **for the financial-statement work**, not for ongoing bookkeeping |
| Bank statements | The raw material for the financial statements | _(not in the repo — sent by email/portal)_ | 2025 statements supplied for **Gossip Miami** and, separately and unprompted, for **Marat Boxing** (§4) |
| Vagaro | The salon's booking/marketing platform _(inferred from a Vagaro email sent on the salon's behalf — never seen or used by the firm)_ | _(n/a — no firm access)_ | May or may not be a revenue source the books need; **nobody has looked**. Don't go hunting for a Vagaro export on the strength of this row |
| TaxDome portal | Organizers, document requests, signatures | _(n/a — firm platform)_ | The 2025 individual organizer runs here |

## 4. Obligations & recurring processes

### Income tax — the core engagement

- **Applies?** Yes. Three returns move together:
  - **Gossip Miami LLC** — the business return _(form to confirm, §1)_. A **2024 return** exists and the firm handled it — the client-copy PDF was circulated by the firm in Mar 2026 _(Gmail)_.
  - **The owners' individual return** — the two are married and filing **jointly** _(Lilian)_.
  - **Marat Boxing LLC** — reports on a **Schedule C**, not as a separate return _(confirmed by Lilian, 2026-08-04)_. That it is a disregarded single-member LLC is the natural reading, not something stated. **Confirm whose Schedule C it lands on** if the joint filing ever changes.
- **Our role:** prepare and file. **Tax preparation only** — see the scope rule below.
- **Process notes (→ future SOP):** the firm's standard "Business Tax Return Process" email (engagement letter → business tax organizer → preparation → review, invoice & signature → e-file) was sent for Gossip Miami in Mar 2026 and is the shape to reuse _(Gmail)_.

### Bookkeeping & monthly close
- **Applies?** **No — the firm is not this client's bookkeeper**, and that is the point the rest of this section turns on. The client keeps no books during the year.

### Financial statements — NOT part of tax preparation

This is the live issue with this client and the reason the file exists.

- **The rule:** tax preparation does **not** include producing the client's financial statements. A return runs off the company's year-end numbers — the **Profit & Loss** above all — and producing those is **bookkeeping**, a separate service. A tax-prep client that owns a company is expected to bring their own P&L. The firm-wide statement of this lives in the [`proposal-generator` skill](../../../.claude/skills/proposal-generator/); it is **never** quoted inside a tax-return proposal.
- **Gossip Miami — the firm is doing it, quoted separately.** The client had no P&L, so they supplied **bank statements + QuickBooks access** and the firm is cleaning up the transactions and building the financial statements. Quoted at an **hourly rate, capped at 10 hours**, with an **advance invoice** before starting and the rest billed afterwards according to the hours spent _(Lilian)_. **The advance was paid 2026-08-03** _(Gmail)_. _(Rate and amounts live in the invoice / Double, not here.)_
- **Marat Boxing — the firm is NOT doing it.** Statements for this company arrived on 2026-08-03 without it having been discussed, which is a different entity and outside the Gossip Miami arrangement. **Resolved 2026-08-04: the client will prepare the P&L himself.** Lilian sent him the firm's **Profit & Loss** template and the **Home Office deduction** template and he agreed to fill them in. **Do not start a cleanup for Marat Boxing** — it was never engaged and is not needed.

### Sales tax
- **Applies?** _(pending — confirm; a salon's services and retail product sales may differ)_

### Payroll
- **Applies?** _(pending — confirm whether the salon has employees or booth renters)_

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- **Tax-prep only, and the client doesn't keep books.** This is the defining fact of the relationship: the numbers a return needs have to be built before the return can be prepared, and building them is a separately-quoted service. Expect the same conversation each year unless they take on a bookkeeper.
- **The client did not understand why financial statements are needed at all** — he asked, politely, what he needed them for _(Lilian, 2026-08-04)_. When explaining, lead with *what the P&L is and where the numbers come from*, then that it's a different service, and only then the cost. Don't open with the fee.
- **One family, several entities.** Business return, joint 1040 with a Schedule C, and outside K-1s arriving for one of the owners. Documents for one entity arrive in threads about another — check which entity a statement belongs to before filing it.
- **Correspondence is in Russian**, formal. How to draft and shorten a client message is the firm-wide rule in [`CLAUDE.md`](../../../CLAUDE.md).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-03-03 — Client activated their **TaxDome accounts** (individuals + Gossip Miami LLC). The firm sent the standard **Business Tax Return Process** explainer for Gossip Miami, and circulated the 2024 client-copy returns. _(Gmail)_
- 2026-03-09 → 03-11 — Documents uploaded through the **2025 individual Tax Organizer**: driver's licence, prior-year return documents, a 1095-A, a partnership K-1, and a home-office worksheet. _(Gmail — TaxDome notifications)_
- 2026-04-12 — The last outstanding individual document request was completed. _(Gmail — TaxDome)_
- 2026-07-29 — The firm was **invited to Gossip Miami's QuickBooks**; a K-1 package for one of the owners arrived the same day. _(Gmail)_
- 2026-08-03 — **2025 bank statements sent** for Gossip Miami and, separately, a full year of statements for **Marat Boxing LLC** — the latter never discussed. The **advance for the Gossip Miami financial-statement work was paid** the same day. _(Gmail)_
- 2026-08-04 — **Scope conversation.** The client asked what he needed financial statements for. Lilian explained, in Russian, that tax preparation does not include producing the P&L, that the Gossip Miami cleanup is the separately-quoted service already under way, and that Marat Boxing would need its own arrangement. **Outcome: the client will produce Marat Boxing's P&L himself** — Lilian sent him the **Profit & Loss** and **Home Office deduction** templates by email and he agreed to fill them in. **No cleanup work for Marat Boxing.** _(Lilian)_
- 2026-08-04 — Confirmed **Marat Boxing is a Schedule C** on the owners' return _(Lilian)_.

### Outstanding items (CI-only — never in the SOP)

- **Waiting on the client's own P&L for Marat Boxing** (and the completed Home Office worksheet) before the Schedule C can be prepared. He has the templates.
- **The Gossip Miami financial-statement work is in progress** — track hours against the 10-hour cap and invoice the balance when it closes.
- **Confirm what return Gossip Miami files** before preparing it (§1) — the record disagrees with itself.

### Information still needed

- [ ] Gossip Miami's **return type** and its **owners as filed** — the 2024 correspondence raised a question about which owners appear on the return, and whether the second owner of record here is among them
- [ ] Sales-tax and payroll applicability for the salon
- [ ] Fiscal-year and licence/annual-filing obligations
- [ ] Where the client's Google Drive folder is (§7)

## 7. Links

- **Double client:** _(pending — link)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related clients:** the owners' individual account and **Marat Boxing LLC** are part of this same relationship (see the note at the top)
- **Related SOPs:** none yet. The scope rule this client exercised lives in the [`proposal-generator` skill](../../../.claude/skills/proposal-generator/)
