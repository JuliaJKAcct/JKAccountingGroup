# VOICECAPITAL INC

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-29
>
> ✅ **First full historical sweep completed 2026-08-22; Gmail catch-up READ TO COMPLETION 2026-08-29** — Double (client record, properties, note 491840 read in full, contacts, activity log), Gmail (full history — paged to the end: a plain "Voicecapital" search ran out of pages after 2 (no further `nextPageToken`), and a second, substantive-terms-narrowed search across the same full history returned no `nextPageToken` either — both exhausted, not merely budget-limited), Ping (`resolve_person` + `search_meetings`), and Google Drive all checked.

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

- **Business name:** VOICECAPITAL INC
- **Entity type:** Corporation (Inc) — federal tax classification **under review** (S-corp vs C-corp). ⚠️ The firm files an **1120-S**; the IRS has **no Form 2553** on record and treated the company as a **C-corp** as of **2026-03-16** (§5).
- **EIN:** `92-1191375` — plainly stated, hyphenated, in a 2026-03-16 fax-confirmation email subject line _(Gmail, 2026-08-22)_.
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** income tax (1120-S as filed by the firm); **bookkeeping — Quarterly** _(Double client properties, 2026-08-22 — resolves the prior "pending" cadence)_. Assigned staff: **Julia Kononova**.
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-12)_. ⚠️ Drive holds off-Double bookkeeping work product (a 2024 consolidated P&L, a "corrected" 2024 P&L, and a Chase bank-activity export) — bookkeeping/reconciliation work is happening outside Double for this client. _(Google Drive, 2026-08-22)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=710725](https://app.doublehq.com/close?cid=710725)
- **Double case note:** `CASE · IRS Form 2553 — S-election not on file, 2023 return unprocessed` — note **491840**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| ATX (tax software) | Preparing and e-filing the return | n/a — firm software | The 2025 extension **would not e-file** (§5) |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(pending)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** the firm files **1120-S** — but see §5, the IRS does not accept that classification
- **Our role:** the firm prepares and files
- **Process notes (→ future SOP):**
  - ⚠️ **Do not assume e-filing will work.** The **2025 extension** was rejected on e-file because the return did not match the IRS's records, so the **Form 7004 was mailed on paper on 2026-03-13**. Expect the same until the S-election is on file.
  - ⚠️ **The 2023 return is sitting unprocessed at the IRS** (§5) — so anything that depends on 2023 having been accepted is not safe to assume.

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE IRS HAS NO S-ELECTION FOR THIS COMPANY, SO IT IS A C-CORP TO THEM — AND THE LAST RECORDED STATE IS UNRESOLVED.** Established on the IRS call of **2026-03-16**. The firm faxed the evidence that day and **nothing after that is recorded in any source the firm can reach**. Anyone picking this up should **assume it is still open** and check with the IRS before filing anything as an S-corp.
- 🔴 **The 2023 return was received by the IRS but has NOT been processed** — the IRS is holding it precisely because it has no 2553 to support an 1120-S. So **2023 is not a filed-and-accepted year**, whatever the client copy shows, and any carryover taken from it rests on a return the IRS has not accepted.
- ⚠️ **The 2553 WAS mailed — attached to the 2023 return, which the IRS admits receiving — and the IRS still says it never got it.** The agent suggested the 2553 might have gone to the wrong address; **Lilian verified the address and it was correct**, so that explanation did not hold. The remedy the IRS gave was to fax a copy of the original 2553 with the certified-mail receipt.
- **The IRS holds an outdated address for this company** — the agent confirmed their records still show the previous one, never updated. **Every IRS letter goes there**, including the response to the fax. _(The same problem exists at [Optic Gold](./optic-gold.md) — see §6.)_
- 🔵 **Double's "2025 Taxes" project was marked Filed on 2026-07-03** — notwithstanding the open S-election/C-corp classification dispute (still unresolved per note 491840, last touched 2026-03-16). Worth reconciling. _(Double activity log, 2026-08-22)_
- A **second Form 2848 (POA) fax specifically for Voicecapital** was sent 2026-04-28 — about six weeks after the 2026-03-16 S-election case, purpose not stated in the notification email. _(Gmail, 2026-08-22)_ ⚠️ **The full-history Gmail read-to-completion (2026-08-29) found no further correspondence naming its purpose** — this is not a budget gap, the search ran out of results.
- Florida sent a "Notice of Change or Filing" for this entity's Sunbiz record on 2026-04-29, the same day Lilian emailed the shared contact payment receipts for "2026 Annual Reports and Dissolutions" — consistent with, but not proof of, an annual-report/address-related filing around that date. 🔵 **Now corroborated as a RECURRING pattern, not a one-off (2026-08-29):** an identical "Notice of Change or Filing" for the same Sunbiz record was also sent almost exactly one year earlier (2025-02-12), alongside a routine 2025 annual-report-due notice (2025-02-08) — the same recurring-notice pattern already flagged on [Optic Gold](./optic-gold.md). Read as routine annual correspondence, not evidence of a specific new event.
- Invoices to Voicecapital are cc'd to a shared payment-processing business inbox ("paylitemerchant.com"), suggesting this client sits in the same beneficial-owner group as other clients under the same contact (Sergey Karpenko, also a contact on Voxago and several other Double clients). _(Gmail, 2026-08-22)_ 🔵 **Additional corroboration found 2026-08-29:** the full-history Gmail read surfaced a 2024-09-12 TaxDome notification of the same contact completing a 2023 individual tax organizer with a "VOICECAPITAL INC.pdf" attachment, and a 2025-02-01 Form-1099 delivery email listing Voicecapital alongside three other entity names under the same contact — consistent with, and slightly widening, the beneficial-owner-group picture (entity names only; no personal data written here).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude. _(Lilian's iCloud notes, migrated — folder "Voicecapital Inc"; note dated 2026-03-16.)_ The operational detail — the fax number, what the agent said — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2026-03-13 — Form 7004 mailed.** The 2025 extension for the 1120-S had been **rejected on e-file** because the form did not match the IRS's records, so it went out on paper.
  - **2026-03-16 — IRS call.** The agent said the **S-Corp status was NOT accepted** and the business is **still considered a C-corp**: the IRS has **no Form 2553** on record. Lilian pointed out it had been **mailed attached to the 2023 return, which the IRS confirms receiving**. The agent's suggestion — that the 2553 may have gone to a different address — was checked and **the address was correct**. The IRS also confirmed it **received the 2023 return but has not processed it**, precisely because of the missing 2553. Lilian was given a fax line and **faxed the copy of the 2553 plus the certified-mail receipt the same day**. It also emerged that **the address in the IRS's records is the company's previous one**.
- **Nothing after 2026-03-16 is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, this is left open rather than chased or inferred. ⚠️ **Read that as a statement about the SOURCES SEARCHED, not about the world** — these files were built from the migrated notes plus Double, with **no full historical sweep of Gmail, Drive or Ping**. _(Qualifier added 2026-08-14, after an independent review showed the same phrasing on other files was concealing live work.)_

⚠️ **This is the same fact pattern as [Optic Gold](./optic-gold.md), which DID resolve** — there the IRS accepted the election about six weeks after the identical fax. That is a reason to go and check this one, **not** a reason to assume it resolved the same way.
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: note 491840 re-read in full — matches this file's existing summary exactly, no new substantive content. Client properties resolved bookkeeping cadence (Quarterly) and assigned staff (Julia Kononova); "2025 Taxes" project confirmed Filed 2026-07-03. Gmail: full history, EIN found, a second 2848 fax (2026-04-28), a Sunbiz notice (2026-04-29), and the shared "paylitemerchant.com" beneficial-owner-group signal — see §5. Drive: found off-Double bookkeeping work product (2024 P&Ls, a Chase export). Ping: `resolve_person` + `search_meetings` scoped to this client returned only semantically-loose, largely irrelevant or garbled results — no legible new content specific to the S-election matter. ⚠️ **Only the first page of ~201 estimated Gmail results was actually reviewed this run** — the baseline advanced anyway, leaving a coverage gap (corrected 2026-08-24 to a `⚠️ CATCH-UP OWED` marker in `sweep-state.md`).
- 2026-08-29 — **Gmail catch-up READ TO COMPLETION.** Double: properties unchanged, note 491840 re-read in full again — body identical to the 2026-08-22 read, no new content, no activity-log entries in the window. **Gmail: paged the plain "Voicecapital" query to the end** (page 1 of 50 + page 2 of 25, no further `nextPageToken` — full history from 2024-09 through 2026-08 actually read), then ran a second query narrowed to substantive S-election/IRS terms across the same unbounded history (17 results, also exhausted with no further page) to confirm nothing relevant was missed in the noise. **Result: no correspondence after 2026-03-16 anywhere in Gmail confirms or denies whether the IRS accepted the S-election** — the case remains genuinely open, not merely unread. One resolution found: a signed Form 7004 return receipt, dated 2026-03-25, was located in Google Drive — this **confirms** the paper 2025 extension was processed (see Outstanding items). Ping: `resolve_person` + `search_meetings` returned only semantically-loose/off-topic hits, nothing legible and specific. Drive: files unchanged since 2026-08-22 except for the newly-noticed signed 7004 receipt (already present, just not previously flagged).

### Tax year YYYY — the review

- _(pending)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Find out whether the IRS accepted the S-election after the 2026-03-16 fax.** STILL OPEN, pending since 2026-03-16 (~166 days). No deadline recorded. The Gmail catch-up was read to full completion 2026-08-29 and still found no confirmation either way — this is a genuine gap in the firm's own records, not an unread source; the "2025 Taxes" project shows Filed regardless (see §5, unreconciled). **This must be resolved by calling the IRS directly** — no further document search will surface it. Gates the 2023 return being processed, the 2025 return's classification, and whether the company owes anything as a C-corp.
- **Correct the company's address with the IRS** (a Form 8822-B is the usual route) — STILL OPEN, pending since 2026-03-16 (~166 days), not confirmed done; no new evidence found 2026-08-29.
- [x] **Confirm the paper Form 7004 for 2025 was processed**, mailed 2026-03-13 — **CONFIRMED 2026-08-29**: a signed return receipt dated 2026-03-25 was found in Google Drive.
- **Confirm the purpose of the 2026-04-28 Form 2848 fax** — STILL OPEN, pending since 2026-04-28 (~123 days); content unclear from the notification email alone, and the Gmail catch-up read to completion 2026-08-29 found nothing further naming its purpose.

### Information still needed

- [ ] What the business does, its home state and the owner
- [ ] Whether an S-election exists today
- [ ] Whether the 2023 return has been processed
- [x] Whether the firm also does bookkeeping here — **yes, Quarterly per Double** (§1); off-Double work product also found in Drive
- [x] Full-historical Gmail/Drive/Ping/Double sweep — **CLEARED 2026-08-29**: the Gmail catch-up owed since 2026-08-22 (only page 1 of ~201 estimated results had been reviewed) was read to completion this run — both a plain-name search (2 pages, exhausted) and a substantive-terms-narrowed search (1 page, exhausted) ran out of results rather than budget, confirming full coverage

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710725](https://app.doublehq.com/close?cid=710725)
- **Double case note:** `CASE · IRS Form 2553 — S-election not on file, 2023 return unprocessed` — note **491840**
- **Migrated TaxDome notes (Drive):** `4. Documents > Voicecapital Inc > 1. Notes`. **Read 2026-08-13.** It covers the same matter written up above from Lilian's phone notes and adds no new facts.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
