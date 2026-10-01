# Oleg Zakala & Milana Podrugina

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-01

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

- **Business name:** Oleg Zakala & Milana Podrugina — the **personal (individual) record** of the owner of [Zakom Incorporated](./zakom-incorporated.md) and his wife _(Double `Account Type: Individual`, 2026-10-01)_
- **Entity type:** n/a — individual taxpayers. The record carries both names; **whether the 2025 return is joint is not established here** _(pending)_
- **Home state:** _(pending)_
- **Industry / what they do:** he owns and runs Zakom Incorporated (an S corporation — see its file), so his K-1 from it reaches this return
- **Primary language:** _(pending — see the Zakom file for how the firm corresponds with him)_
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, `1099 Preparation: false`, `Annual Report: false`, 2026-10-01)_. **Assigned staff and 2025 preparer: Lilian.**
- **Fiscal year-end:** calendar year
- **Accounting platform:** `platform: none`

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Oleg Zakala — the client, and the portal contact who opens the organizer | Double client (link below) |
| Milana Podrugina — his wife, named on the record | Double client (link below) |
| His company | [`zakom-incorporated.md`](./zakom-incorporated.md) · [Double cid 710612](https://app.doublehq.com/close?cid=710612) |

- **Double client:** [app.doublehq.com/close?cid=710652](https://app.doublehq.com/close?cid=710652)
- **Double case note:** none — no note on this record (per the 2026-09-26 sweep recorded in the Zakom file)

## 3. Systems & access

| System | What it's for | Where credentials live | Non-sensitive reference |
|---|---|---|---|
| Double client portal | The 2025 organizer and document exchange | _(n/a — client's own portal login)_ | `JK 2025 1040 Organizer`, id `141429`, published 2026-06-22 |

## 4. Obligations & recurring processes

### Income tax
- **Applies?** Yes — **Form 1040**, prepared by this firm, Lilian as preparer.
- **Return type(s) & deadlines:** 2025 return. ⚠️ The Double project shows `dueDate` 2026-04-15 and status `notStarted`; **whether an extension was filed is not recorded in this file** _(pending — check before relying on a date)_.
- **What feeds it:** the **Schedule K-1 from Zakom Incorporated's 2025 Form 1120-S**, being prepared now — see [`projects/tax-returns/zakom-incorporated/`](../../tax-returns/zakom-incorporated/). So this return waits on the company's.
- **Process notes (→ future SOP):** _(pending)_

### 1099 filings / annual report
- **Applies?** No — `1099 Preparation: false`, `Annual Report: false`.

## 5. Key facts & quirks

- 🔑 **DOUBLE CANNOT TELL YOU WHEN HE LAST *CHANGED* AN ANSWER — ONLY WHEN HE *OPENED* THE ORGANIZER.** The activity log has `organizer_opened` for a client, but **no action at all for a client saving or editing a response**, and the organizer itself carries no last-modified field. So "last modified" is answered with the last **opening** plus the **completion percentage** at that moment — never as a fact about an edit. _(Established 2026-10-01 when Lilian asked.)_
- **The 2025 organizer is 60% complete as of 2026-10-01** — not completed; `Organizer Status: Sent`.
- **His company's document, uploaded to the company's organizer on 2026-09-13, names his wife** (`MilanaPodrugina-LoanDocs.pdf`) — whether it belongs to this return or the company's is a hedged reading, not settled. See [`zakom-incorporated.md`](./zakom-incorporated.md) §5.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-05-19 — record created in Double (TaxDome migration).
- 2026-06-22 — Lilian published the **JK 2025 1040 Organizer** (id `141429`).
- 2026-09-09 15:11, 2026-09-14 13:39 _(Miami time)_ — Oleg **opened** the organizer.
- 2026-09-28 22:22 _(Miami time)_ — Julia created a **custom reminder schedule** on this record.
- 2026-09-30 22:10 and 2026-10-01 10:59 _(Miami time)_ — Oleg **opened** the organizer twice more — the first two openings after Julia's reminder schedule. ⚠️ That the reminder prompted them is an inference from the timing, not something the log says.
- 2026-10-01 — **File created** at Lilian's request (*"¿cuándo fue la última vez que Oleg modificó el organizer de su cuenta individual?"*). Sources: Double only — client, properties, 2025 project, organizer metadata (incl. completion %, read without the answers), activity log. Until now this record was swept only as part of the Zakom file.

### Tax year 2025 — the review

- _(pending)_ — no pre-return review run on this record. The organizer's answers have **not** been read.

### Outstanding items (CI-only — never in the SOP)

- The organizer is at 60% and not completed.
- Extension status for 2025 — not recorded here.
- Joint or separate return — not established.

### Information still needed

- [ ] Whether a 2025 extension (Form 4868) was filed
- [ ] Filing status
- [ ] Home state

## 7. Links

- **Double client:** [cid 710652](https://app.doublehq.com/close?cid=710652) · [2025 tax project](https://app.doublehq.com/tax-return?cid=710652&projectId=219337) · [2025 organizer](https://app.doublehq.com/clients/710652/portal/organizers/141429)
- **Double case note:** none
- **Google Drive folder (sensitive vault):** _(pending)_
- **Related clients:** [`zakom-incorporated.md`](./zakom-incorporated.md) — his company
- **Related SOPs:** none
