# Mikayel Shakhyan

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-19

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz.
> 🔴 **Every figure for the 2025 return lives in the working paper**, not here —
> [`projects/tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md`](../../tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md).

> **Two zones — what feeds the SOP vs what stays here.** §1–§5 and §7 are the
> Operating zone; §6 is CI-only working context.

## 1. Snapshot

- **Business name:** **Lum and Ari LLC** — **EIN 36-5147055**. The LLC has no separate Double
  client; everything about it sits on the owner's individual record (710648).
- **Entity type:** Florida LLC, **formed 8 August 2025**, ✅ **single member** _(confirmed by
  Lilian, 2026-09-05)_. 🔴 So it is a **foreign-owned U.S. disregarded entity** — see §4 Income tax.
- **Home state:** Florida. The company's address on its return is **the owner's home**, so it is
  not written here.
- **Industry / what they do:** Cosmetics retail — the return carries activity code **456120**
  (Cosmetics, Beauty Supplies & Perfume Retailers) and product *"Cosmetics"*. The brand is
  **LUMARI**; a USPTO trademark application for it (stylised wording + a flower design, Principal
  Register) was filed with **Pivniak Law** as the correspondent. ✅ **The mark is owned by Mikayel
  PERSONALLY, not by the LLC** _(established 2026-09-06 from the USPTO receipt in Double, and
  **independently confirmed 2026-09-07** from the public record — §4 Licenses carries the serial number,
  the filing date and the status)_. **It matters on the return twice over**: the mark is not
  an asset of the company, and a legal fee the company paid for it would be a **distribution to
  him** rather than a company cost — §6.
- **Primary language:** RU — Double's `Preferred language` reads **"Only Russian"**
- **Our engagement:** Income tax only. Double: `Income Tax: true` · `Bookkeeping: N/A` ·
  `1099 Preparation: false` · `Annual Report: false`
- **Fiscal year-end:** Calendar. 2025 is a **short first year, 8 Aug → 31 Dec 2025**.
- **Accounting platform:** None — Double `platform: none`, no QuickBooks. **There are no books.**
  The bank account is the only ledger.
- **Double `Account Type`:** **Individual** _(Double `list_client_properties`, read 2026-09-19)_ —
  corroborates that this one Double record carries both the LLC's filing and his own, per above.

## 2. Contacts

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client 710648 — one portal contact, with full admin/tax/financial/files access |
| The company's attorney | **Pivniak Law** — correspondent on the LUMARI trademark application, and paid out of the LLC's account in Nov 2025 |

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double case note:** none — `list_notes(710648)` returned **0 notes** on 2026-09-05, **reconfirmed 0 notes on 2026-09-19.**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Bank of America (the LLC's account) | The only record of the company's activity | _(pending)_ | Statements in Double: `TaxDome > Mikayel Shakhyan > Client uploaded documents > Bank statements` — `eStmt_2025-10-31/11-28/12-31.pdf` and `eStmt_2026-01-30.pdf`. ⭐ **Account opened 27 Oct 2025**, and the four statements run continuously to 31 Jan 2026 — so they are the account's **whole life**, not a fragment. ⛔ **RETRACTED:** an earlier note here said the Jan–Sep 2025 statements were **missing**. They are not missing — **the account did not exist yet** |
| Double client portal | Document exchange | n/a | Activated by the client 2026-04-15 |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No indication. A `FDOR - company was dissolved.pdf` sits in Double — an **image
  scan that could not be read** — suggesting a Florida Department of Revenue account existed and
  was closed.

### Payroll
- **Applies?** No. No payroll in the account's entire life.

### Bookkeeping & monthly close
- **Applies?** No — Double `Bookkeeping` reads **N/A**, and there is no accounting system.

### Income tax
- **Applies?** Yes. 🔴 **TWO separate filings, and they are not the same taxpayer.**
1. 🔴 **The LLC — pro forma Form 1120 with Form 5472 attached.** A domestic entity wholly owned by
   one foreign person is a corporation **for the limited purposes of §6038A**
   (Reg. §301.7701-2(c)(2)(vi); §1.6038A-1(c)(1), added by **TD 9796**). No income-tax return of
   its own, but a **pro forma Form 1120** with Form 5472 attached, by the 1120's due date
   including extensions. Only the name, address and **items B and E** are completed.
   **"Foreign-owned U.S. DE" goes ACROSS THE TOP.** It **cannot be e-filed** — fax (300 DPI+) to
   **855-887-7737** or mail to *Internal Revenue Service, 1973 Rulon White Blvd, M/S 6112 Attn:
   PIN Unit, Ogden, UT 84201*. Extension is **Form 7004, form code 12**, same caption, same
   fax/address, by the **regular** due date.
   _(Instructions for Form 5472, Rev. 12/2024.)_
2. **His own individual return.** Double's `Tax Return Type` said **`1040`** while
   `Organizer Status` says **`N/A (Nonresident)`** — ⚠️ **the two disagreed; a nonresident files
   1040-NR.** Hand-maintained column, Lilian's to change. Whether he owes one at all for 2025 is
   a separate question — the LLC gave him no U.S.-source income.
   🔄 **UPDATED 2026-09-19** _(Double `list_client_properties`, read this date)_: `Tax Return Type`
   now reads **`1120 Proforma`** — changed from `1040` sometime between 2026-09-07 and 2026-09-19.
   ⚠️ **`list_activity_log` on this client (bounded from 2026-09-05) shows no property-change entry** —
   Double's activity log does not appear to record property edits, so who changed it and exactly
   when could not be established from this sweep. This closes the LITERAL mismatch that was
   flagged below for Lilian, but **does not by itself confirm whether his personal return should
   be 1040-NR or nothing at all** — that question, and whether the change was a deliberate fix or
   just relabels the entity side of this shared record, is still worth a word with her.
- **Current status (2026-09-05):** 🟠 **NOT FILED.** Lilian confirmed the 5472 has not gone in.
  Double's tax project *"2025 Taxes"* reads `notStarted`, `filedAt` null. A complete package was
  prepared (7004 + pro forma 1120 + 5472, in `JK Accounting Group > Tax Return Filed > 2025`,
  file `2025 7004 Ext LumandAriLLC.pdf`) — ⚠️ **but the 5472 in it MAY be a shell, and may equally be complete; nobody has looked at it on screen** — §5.
  🔴 **STILL NOT FILED as of 2026-09-19** _(Double `list_tasks`/`list_activity_log`, read this date)_ —
  see the new §5 bullet: the project's own due date has now passed.

### Licenses & other filings
- **Forms 8843 — four, one per household member** (`JK Accounting Group > Others > 2025 >
  Forms 8843`), mailed **certified 25 Jun 2026** with the receipt and envelope on file.
  Mikayel's shows **F-2 status**, entered the U.S. **27 Feb 2025** having changed from B, and
  names the language academy he attends. That is what makes him an **exempt individual**,
  hence a nonresident, hence the LLC foreign-owned.
- `2025 4868-mailed by his own.pdf` — he mailed his own individual extension.
- The **LUMARI trademark application** with the USPTO — ⭐ **the public record, read 2026-09-07 from a
  Trademarkia listing Lilian found.** **Owner: Mikayel Shakhyan** — ✅ **independent confirmation that the
  mark is his personally, not the LLC's.** **Serial number 99406730**, **filed 22 September 2025**, class
  **Cosmetics and Cleaning Products**, **not yet in use in commerce**, and **Live / Pending** with a
  **`SUSPENSION LETTER – MAILED`** status *(as at 10 Jun 2026)*. The attorney of record is **Denys
  Pivniak, Pivniak Law, P.A.**
  ⚠️ **Two limits on that record.** Trademarkia is a **third-party mirror, not the register** — the
  authority is USPTO **TSDR** on serial 99406730 *(unreachable from a cloud session; the network policy
  blocks uspto.gov)*. And the status line is **"as of 10 Jun 2026"**, so it was already three months old
  when it was read. 🔑 **A suspension letter is not a refusal** — it means the examiner has paused the
  application — but **nobody at the firm knows whether the client is aware of it**, which is why it went
  into the message **drafted** for him on 2026-09-07 — ⚠️ **drafted, not sent**; see the log entry for
  that date.

## 5. Key facts & quirks

- 🔴🚨 **THE PROJECT'S OWN DUE DATE HAS PASSED, AND NOTHING HAS MOVED SINCE.** Double's tax
  project (`Prepare tax return`) carries **2026-09-15** as the due date on every remaining task
  (`list_tasks`, read 2026-09-19). That date is consistent with the short-year Form 1120's regular
  due date (year ended 31 Dec 2025) plus the six-month Form 7004 extension filed 2026-04-15 — i.e.
  it reads as the **actual extended IRS deadline**, not merely an internal target. ⚠️ **That
  reading is inferred from the date math, not stated anywhere as such — confirm it.** As of
  2026-09-19 (**four days past**): `Prepare tax return` is `wip`; `Review tax return`, `Send draft
  return & e-file authorization`, `File tax return`, `Follow up on tax payments` and `Send final
  returns to client` are all still `notStarted`. **Nothing has moved on any of the ten sources this
  sweep checked** — the return is still blocked on the client's questions below.
- 🔴 **THE FORM 5472 SITTING IN DOUBLE MAY BE A SHELL — DO NOT FILE IT *OR REBUILD IT* UNTIL IT IS
  CHECKED BY EYE. THE TWO POSSIBLE MISTAKES ARE OPPOSITE.** Part I names the entity, but on the extracted text of **both** copies **Part II (the 25%
  foreign shareholder — i.e. the owner) and Part III (related party) carry no values**, and the
  owner's name appears nowhere in either document. ⚠️ **That is an absence in a text extraction
  from a PDF with an unreadable font, which is exactly the reading `redact-doc` warns against** —
  so confirm it on screen before rebuilding anything. 🔴 **And as of 2026-09-06 trust that finding
  LESS, not more:** on the USPTO receipt — same client, same day — a search for the literal word
  `OWNER` came back **absent from a document that names the owner in full**, because the font
  shifts its characters. **That is the same test this finding rests on**, so we genuinely do not
  know whether those parts are blank. ⛔ **Neither rebuild nor file until someone has looked at the
  PDF on screen** — the two possible errors are opposite. **Part V is unchecked
  with no attached statement**, lines 1f/1g/1h are blank, and Part VII is unanswered. A 5472 that
  never names the foreign owner is not a 5472 — and filed like this it would look done while
  exposing the client to the **$25,000** penalty for a return not filed *"in the manner
  prescribed"*. It has to be rebuilt before it goes anywhere.
- 🔴 **THIS COMPANY HAS REPORTABLE TRANSACTIONS, AND THEY LOOK LIKE THE OWNER'S OWN MONEY.** The
  account took in three over-the-counter deposits and spent every cent of them, closing the year
  at zero. There is **no revenue anywhere** — no customer, no card settlement, no invoice — and
  each deposit lands a day or less before the payment it funds. That reads as the owner feeding
  his own company, which Part V captures as *contributions to the entity*. ⚠️ **A "Counter Credit"
  names no payer, so this is an inference to confirm with him**, not something read off the
  statement — the working paper sets out the evidence and the alternative. **And there is no way out:** the only exception to *filing* is having **no** reportable
  transaction in Parts IV, V and VI at all, which §4B alone rules out.
- 🔴 **THE MOST CERTAIN REPORTABLE TRANSACTIONS ARE NOT IN THE BANK STATEMENTS.** The LLC existed
  from **8 Aug 2025** and had no bank account until **27 Oct 2025** — eighty days in which the
  Sunbiz fee, the registered agent and the EIN were paid by somebody, and it was not the company.
  Those are formation costs and owner contributions, and **no statement will ever show them.** They
  have to be asked for. ⓘ **The trademark filing came OFF this list on 2026-09-06:** the mark is his
  personally, and paying for his own asset is not a contribution to the company — it is now asked
  about as a possible **distribution** instead.
- 🟠 **THE COMPANY MAY BE DISSOLVED, AND THAT DOES NOT END THE OBLIGATION — IT CREATES ONE.**
  **TD 9796 Example 1** holds that the liquidation year is itself a reporting year. So if the
  dissolution falls in 2026, a **second** pro forma 1120 + 5472 is due for 2026 — a year whose
  account is dormant at zero, which is exactly when a filing gets skipped.
- 🔴 **HE OWES RECORDS TOO, AND HE HAS NONE.** §1.6038A-3 record maintenance carries **the same
  $25,000 penalty** as the filing failure, and TD 9796 removes a foreign-owned DE from the two
  reliefs that would otherwise excuse it — §1.6038A-1(h) (under $10M gross receipts) and
  §1.6038A-1(i)(1) (the $5M / 10% de minimis). ⚠️ **Those two relieve RECORDS, never filing** — a
  distinction this file got wrong on 2026-09-05 and corrected the same day. There is no accounting
  system here at all: the bank statements are the only record that exists. **Tell him to keep
  them, and the receipts for what he paid personally.**
- **The caption is in the wrong field on every form.** *"Lum and Ari LLC/Foreign-Owned U.S. DE -
  Pro Forma"* was typed into the **name** box of the 1120, the 7004 and the 5472. The instruction
  is that the entity's legal name goes there and **"Foreign-owned U.S. DE" is written across the
  top** of the 1120 and the 7004.
- **Six of his documents in Double are image scans with no text layer** — Sunbiz, both EIN
  letters, the FDOR dissolution notice, the extension confirmation and the lease. They cannot be
  read by tooling and two of them settle open questions. Ask him for text PDFs, or read them by eye.
- **He speaks Russian only**, and he does things himself when left to it — he mailed his own
  Form 4868 and his own Forms 8843 by certified mail.

## 6. History & open questions

### Log

- _(2026-09-19)_ — **Weekly CI sweep — Ping and Drive read for the FIRST time; Gmail/Double
  re-checked; nothing new from the client.** ⚠️ **Coverage gap found (separate from this client):
  Mikayel Shakhyan is named in neither the scope table nor the exclusion table of**
  [`automation/weekend-ci-sweep.md`](../automation/weekend-ci-sweep.md) — flagged for a human to
  add his scope-table row; this session did not edit that file.
  - **Ping:** `resolve_person("Mikayel Shakhyan")` matched exactly one Ping client
    (`fd7aa395-7479-40fe-9a86-666e2e96e0a7`, created 2026-06-24, one contact "Mykayel Shakhyan" —
    email withheld here per the two-data-homes rule). `get_client_details` on that id returns **`recentMeetingCount: 0`,
    `otherMatches: []`.** `search_client_meetings` scoped to that id, three queries (his name, "Form
    5472 foreign-owned LLC cosmetics", "Lumari trademark"), returned **0 results**. An org-wide
    semantic `search_meetings` for his name and separately for "Lum and Ari LLC / Form 5472" each
    returned 20 results, none relevant on inspection (garbled multilingual transcripts about other
    clients) — so a search of Ping, org-wide and client-scoped, on 2026-09-19, did not find any
    meeting or call involving this client. **This reads as exhaustive** — Ping has no recorded
    meeting for him at all, not a search that came up short.
  - **Google Drive:** `search_files` (both `fullText contains` and `title contains`, always
    `excludeContentSnippets: true` — no content was read) for "Mikayel Shakhyan" / "Lum and Ari" /
    "Lumari" surfaced **three separate folders all named "Mikayel Shakhyan"**: two owned by
    `julia@jkaccountinggroup.com` (`.../folders/17lyqFNdm81qwlePVrVEN7ruybD_4bjps`, modified
    2026-05-12; `.../folders/1HqdOx3kgS1BEZFV3KiRlEON1KCLK9H2i`, modified 2026-04-16) and one owned
    by `mariaf@jkaccountinggroup.com` (`.../folders/1Z-qYgSvfSxdGEs18QxgErYp7lKydLx3s`, containing
    two generically-named files `Mikayel Shakhyan1.pdf` / `Mikayel Shakhyan2.pdf`, uploaded
    2026-05-11). ⚠️ **Which one is canonical is not established** — this matches the
    `client-intelligence` skill's documented pattern of Drive splitting into parallel,
    near-duplicate subtrees after the TaxDome migration. Recorded as a contradiction/ambiguity in
    §7 rather than picked at random. All the substantive documents already known from Double
    (bank statements, Sunbiz, EIN, trademark receipt, lease, Form 8843s) also turned up here under
    the first `julia@` folder's sibling paths, confirming Double and this Drive tree overlap rather
    than diverge in content — no new document was found that Double doesn't already have.
  - **Gmail:** re-ran the client search bounded `after:2026/09/05` for "Shakhyan OR 'Lum and Ari'
    OR Lumari" — the one hit was the firm's own internal weekly CI-sweep email (2026-09-12, Julia →
    Lilian), not client correspondence. A separate, unbounded search on his email address (on file in
    Double/Ping, withheld here) returned only the same two 2026-04 threads found on 2026-09-05
    (invoice-paid notification, portal activation) — **no client email exists in Julia's mailbox
    before or since**, so any client contact runs through the Double portal or another channel,
    not Gmail.
  - **Double (corroboration):** `get_client` unchanged (`platform: none`). `list_notes` — 0, see §2.
    `list_contacts` — same one contact, `updatedAt` now 2026-09-09 (nine days after this file's
    prior update; no visible content change reachable from this tool). `list_client_properties` —
    `Tax Return Type` changed to `1120 Proforma` (§4, above). `list_activity_log` bounded from
    2026-09-05: **all seven entries date to 2026-09-07** (Lilian marking "Prepare and send
    engagement letter", "Prepare and send organizer" and "Review client documents & responses"
    Done; "Prepare tax return" moved Not Started → In Progress; two new project tasks created under
    `Prepare tax return` and `File tax return`, one due 2026-09-15) — **nothing logged 2026-09-08
    through 2026-09-19.**
  - **Chase pass** (§0 outstanding items, taken back to the sources above): see the updated
    Outstanding items below for arrival/age/deadline on each. Net result: **no client answer, no
    forwarded memo, no ruling — everything open on 2026-09-06/07 is still open on 2026-09-19**,
    except the Tax Return Type property, which moved on the firm's own side.
- _(2026-09-07)_ — **The trademark's public record, and it moves the analysis.** Lilian found a
  Trademarkia listing for LUMARI and sent it in. ✅ **It confirms independently that the owner is Mikayel
  personally** — until now that rested on decoding a PDF whose font defeats text search, and the working
  paper carried a "confirm by eye" caveat. **That caveat is discharged**, though the authority is still
  USPTO TSDR rather than a third-party mirror. 🔑 **It also supplies three things the receipt's own
  extraction had lost:** the **serial number**, the **filing date of 22 Sep 2025**, and a **status of
  `SUSPENSION LETTER – MAILED`** as at 10 Jun 2026 — plus the attorney's name, **Denys Pivniak**, who is
  the same firm the company paid in Nov 2025. 🔴 **The filing date is the part that matters for the
  return:** 22 Sep falls **inside the eighty days when the company had no bank account**, so **the WORK
  was done while the company had no way to pay for it** — and the company paid that same attorney seven
  weeks later. ⛔ **A filing date is not a payment date**, so who paid it is still open; what the date
  does is make the reading in which the attorney billed later **the one that fits the dates**. It
  **sharpens the open question rather than answering it** (working paper §4D). **A client message was
  DRAFTED the same day** — in simple Russian, at her request — asking why the mark is in his name,
  whether he knows about the suspension, and for the personally-paid formation costs (that last is the
  working paper's Q2). ⚠️ **Drafted and handed to Lilian; nothing here says he has received it.**
- _(2026-09-06, later)_ — **A transaction summary for Julia was prepared — and as at this entry it
  has NOT yet reached her.** Lilian asked for a written summary in English so Julia — who has no
  prior context on this client — could see the situation, take the decisions that are hers, and ask
  what she needs to. **The memo was produced and handed to Lilian to forward** *(not committed: it
  carries client figures)*. 🔑 **Lilian rejected a first, much longer version and cut it to three
  things: the bank transactions explained, which ones we SUSPECT may be reportable, and what was paid
  before the account existed.** ⚠️ **Two documents are therefore in her inbox and only the short one
  is current.** *(The scope, the hedging rule, why the cut material was not "padding", and how the
  lesson sits beside the opposite rule for ATX worksheets are written out once in the working paper
  **§6D**. ⛔ **Deliberately not restated here.**)* ⛔ **Nothing here should be read as saying Julia
  has seen it** — forwarding it is an open action, [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 85.
  ⚠️ **No copy is stored anywhere**; it is reproducible from the working paper.
  🔴 **What the write-up crystallised: two of the open items are POSITIONS reserved for the signer,
  and Lilian routed both to Julia.** ⓘ **Both are conditional — they only arise if the CLIENT does
  not answer**, so chasing him is the cheaper route and neither is live yet. *(The options for each, and the
  correction of a first version that mis-cited the firm's own rule, are written out once in the
  working paper **§6D**. ⛔ **Deliberately not restated here.**)* 📌 Whether the rule itself should
  name a signer is [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 83 — Lilian's to settle.
- _(2026-09-06)_ — **Second pass over the same documents, and it moved one thing that changes the
  return.** Lilian asked again to go into Double, read everything on the client and analyse him for
  reportable transactions. **Nothing new had arrived** — the same 23 documents, the last uploaded
  25 Jun 2026, no Double notes, the 2025 tax project still `notStarted`; so the five questions in
  the working paper's §6A are still the gate. ✅ **What DID move: the LUMARI trademark is owned by
  Mikayel PERSONALLY, not by the LLC.** The USPTO receipt names him as owner — the previous session
  recorded that field as *"did not survive extraction"*, which was wrong: **the PDF's font shifts every
  character, so a plain-text search for a word simply cannot find it** — a probe for `OWNER` reported
  absent on a document that names him in full. *(The mechanism, and the two wrong versions of it that
  review caught, are written out once in the working paper §1 and
  [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 81. ⛔ Deliberately not restated here.)* **Two consequences:** the mark is **not an asset of
  the LLC**, which closes one of the two branches that could have moved total assets off zero; and
  the legal fee the company paid becomes a strong candidate for a **distribution to him** rather
  than a company cost — narrowing the fourth client question rather than closing it. ⚠️ **Also
  established as a limit, not a finding:** Sunbiz, USPTO/TSDR and the Florida DOS site are **all
  blocked by the cloud session's network policy**, so the dissolution date and the trademark's
  serial number **were not looked up** — that is a search that never ran, not an absence. Both are
  one click from an ordinary browser. Full detail and every figure in the working paper.
- _(2026-09-05, later the same day)_ — **The return can largely be prepared while we wait.** The
  working paper now carries a **fill-ahead sheet (§3E)**: field by field, what can be entered
  today, what is a firm-side lookup, and the **five** fields that genuinely depend on the client —
  plus a **drafted Part V attached statement (§3F)** with the blanks named. **Most of both forms
  is answerable now**, Part VII included. The open items were split into **what only he can
  answer (§6A)**, **what we settle ourselves (§6B)** — his citizenship is on his own Form 8843 in
  Double, the dissolution date is in the Sunbiz PDF, the trademark owner was settled from the receipt already in Double —
  and **what we simply tell him (§6C)**, which is that he must keep records. 🔑 **One question
  gained a second half that changes the form:** whether the money he put in was **capital or a
  loan** — capital goes on the Part V statement, a loan goes on **Part IV line 17** and makes
  Part VII line 42 a real question.
- _(2026-09-05)_ — **File created, then the documents were read.** Lilian asked the session to
  find the client, confirm what a reportable transaction is for this entity, and **analyse every
  document in Double** including the bank statements. She confirmed the LLC is **single-member**
  and that **the 5472 has not been sent**. Everything was read through
  [`tools/redact-doc/`](../../../tools/redact-doc/); `DL front.pdf` was deliberately not opened.
  **The full analysis and every figure are in the working paper**
  [`2025-form-1120-proforma-5472.md`](../../tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md).
  The short version: the account's whole life reconciles to the penny, all the money in is owner
  funding and all of it went straight back out on legal fees and two vendor payments; the
  reportable transactions are the owner's contributions, plus whatever he paid before the account
  existed; and the prepared 5472 is unusable as it stands.
- _(2026-04-23)_ — Invoice #2142 to **Lum and Ari LLC** paid — an invoice-paid notification from
  **the firm's own** billing system to Julia, not from anything of the client's _(Gmail search of
  her mailbox for "Shakhyan OR Lum and Ari OR Lumari" on 2026-09-05 returned this and the portal
  activation, and nothing else — that is what that one search found)_.
- _(2026-04-15)_ — The client activated his Double portal account.

### Tax year 2025 — the review

- **In preparation, blocked on the client's five questions below.** 🔴 **And if those answers do not come, two positions fall to Julia** (working paper §6D) — ⓘ *conditional, not parallel: answer the five and they mostly dissolve.* The
  return itself, its tie-outs and its decisions are in the working paper.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Forward the transaction summary to Julia** — prepared 2026-09-06, **still with Lilian** as
  of 2026-09-07. 🔄 **CHASED 2026-09-19 — UNCHANGED, now 13 days old (12 since the last file
  update).** No confirmation of receipt in Julia's Gmail (searched, found nothing); `FOLLOW-UPS.md`
  row 85 itself reads unchanged since 2026-09-07. Then put the two signer positions to her **only
  if the client's answers do not come** (working paper §6D). `FOLLOW-UPS.md` row 85.
- **Ask the client the FOUR still-outstanding questions in one message — Q1, Q3, Q4 and Q5** (working
  paper §6A). ⚠️ **Q2 is already in the Russian message drafted 2026-09-07 and sitting with Lilian —
  do not re-ask its money half.** ⛔ **But Q2 is only HALF covered:** the message asks what he paid, and
  **not** whether he contributed anything that was not money, which is the half that would open Part VI.
  That half still has to go. ⚠️ **And do not drop Q5** — his country of tax residence and whether he has a
  tax number there fills four fields on the form and nothing on file answers it, so it rides in the same
  message. Everything else on the return can either be entered now or is ours to look up (§6B).
  🔄 **CHASED 2026-09-19 — UNCHANGED.** The combined message (Q1/Q3/Q4/Q5) still shows no evidence of
  having been sent, now **13 days** since first raised (2026-09-06). The Q2 draft is now **12 days**
  old with no evidence it reached him — no client email exists in Julia's Gmail at all (searched
  unbounded on his address), no Ping meeting/call for him exists (searched, none found), no Double
  note recording it (0 notes). **No deadline of its own**, but it gates the return, whose own
  extended due date (2026-09-15) has now passed — see §5.
- ✅ **`Tax Return Type` mismatch — RESOLVED (or at least changed) as of 2026-09-19.** Was `1040` for
  a nonresident; now reads **`1120 Proforma`** (Double `list_client_properties`, read 2026-09-19).
  No activity-log entry for the change was found (bounded search from 2026-09-05), so who changed it
  and exactly when is not established — worth a word with Lilian to confirm this was the intended fix
  and not just a relabel of the entity side. See §4.
- 🔴 **TELL him he must keep records** — §1.6038A-3 applies with **no relief available** and
  carries the same **$25,000** penalty as the filing itself. He has no accounting system at all,
  so the bank statements plus the receipts behind Q2 are the entire record. This is a *tell*, not
  an ask (working paper §6C). 🔄 **CHASED 2026-09-19 — no evidence this has been told to him yet**
  (same search of Gmail/Ping/Double as above); **14 days** since first raised (2026-09-05).
- ✅ **Ping and Google Drive — BOTH SEARCHED for the first time, 2026-09-19.** ⚠️ **Superseding the
  line below, which is now stale.** **Ping:** `resolve_person` found a Ping client record for him
  (created 2026-06-24) but `get_client_details` shows **`recentMeetingCount: 0`** and
  `search_client_meetings` scoped to that id (3 queries) returned 0 results — org-wide semantic
  search for his name and for "Lum and Ari / Form 5472" also returned nothing relevant. **This
  client genuinely has no meeting or call recorded in Ping**, not a search gap. **Google Drive:**
  found **three** folders named "Mikayel Shakhyan" (two under Julia, one under Maria — see §6 Log
  and §7) holding documents that duplicate what Double already has; no new document surfaced.
  Which folder is canonical is unresolved — see §7.
- ⛔ **SUPERSEDED 2026-09-19 (kept for history, not struck):** "Ping has never been searched for
  this client — `search_client_meetings` needs a Ping client id and could not run. Google Drive
  has not been searched either. Neither is a 'nothing found'; both are searches that have not
  happened." Both are now searched — see the bullet above.

### Information still needed

**Only he can answer these** _(working paper §6A)_:

- [ ] 🔴 **Were the counter deposits his own money — and did he put them in as CAPITAL or as a
      LOAN?** The second half decides which half of the form they go on. ⚠️ **And it carries a
      decision behind it:** if he cannot say, the position is **Julia's** to take, with three options
      set out in working paper §6D ①.
- [ ] 🔴 **What he paid personally between 8 Aug and 27 Oct 2025**, the 80 days before the company
      had an account — and whether any of it was property rather than money.
- [ ] 🔴 **Who are AXY Company LLC and Oxana Martox LLC to him?** This decides **how many Forms
      5472 are filed**, not just a line. ⚠️ **And if no answer comes, what to do about it is
      Julia's** — working paper §6D ②. ⓘ *The separate-form rule covers a **foreign or U.S.**
      related party, not only a U.S. one.*
- [ ] 🟠 **Did the company pay anything that was really his personally?** Each one is a
      distribution, even when the money went to an unrelated payee.
- [ ] ⏸ **In which country does he file a tax return as a resident — and does he have a tax
      identification number there?** **Four** fields on the 5472 depend on those two facts, and
      nothing on file answers either.

🔄 **Chase pass, 2026-09-19 — all FIVE of the above are still unanswered, ages 13–14 days from
first being raised, no deadline of their own but gating a return whose own extended due date
(2026-09-15) has passed.** Checked against Gmail (client's address, unbounded — no message from
him, ever), Ping (his resolved client record — 0 meetings), and Double (0 notes, no activity since
2026-09-07). None of these five is answerable from the sources this sweep can reach; only he can
close them.

**Ours to settle, without asking him** _(§6B)_:

- [ ] 🔴 Confirm by eye that Parts II and III of the prepared 5472 really are blank. _(Chased
      2026-09-19 — still open, 14 days; none of this sweep's sources can settle it, it needs an
      actual on-screen read.)_
- [ ] 🔴 **The dissolution date** — on **sunbiz.org**, where it is public and readable; the Sunbiz PDF in Double is one of the six unreadable scans, so it is only the fallback. _(Chased 2026-09-19 —
      still open, 14 days; sunbiz.org remains outside this session's reachable sources.)_
- [ ] 🔍 **His country of citizenship — on his own Form 8843 in Double.** Do not ask him for it.
- [ ] 🔍 Whether he holds an ITIN.
- [x] ✅ **Who owns the LUMARI trademark — MIKAYEL PERSONALLY, CONFIRMED 2026-09-07** from the mark's
      public record, independently of the decoding. ⛔ **The "confirm by eye" step is done.**
- [ ] 🟠 Whether the Form 7004 actually went, and by which route. _(Chased 2026-09-19 — still open,
      14 days.)_
- [ ] 🟠 **Read the six image-only documents by eye.** _(Asking him for text-based PDFs is a fallback, and that half would go in a later message — not the one carrying the five questions.)_
      _(Chased 2026-09-19 — still open, 14 days.)_

## 7. Links

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double tax project (2025):** https://app.doublehq.com/tax-return?cid=710648&projectId=219335
- **Working paper (all figures):** [`projects/tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md`](../../tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md)
- **ATX capture sheet (artifact, 2026-09-06):** https://claude.ai/code/artifact/d2baf00b-08d2-49c5-a09b-e7d61b22ca21
  — the page Lilian types the return into ATX from. ⚠️ **The working paper is the master**; republish that page to
  the **same URL** after any change, or the link she holds goes stale.
- **Double case note:** none yet — `list_notes` reconfirmed 0 on 2026-09-19.
- **Google Drive folder (sensitive vault):** ⚠️ **THREE folders found 2026-09-19, canonical one
  NOT established** (contradiction, not resolved — see §6 Log for the search):
  - https://drive.google.com/drive/folders/17lyqFNdm81qwlePVrVEN7ruybD_4bjps (Julia's, most
    recently modified — 2026-05-12 — and the one containing the documents already cited
    throughout this file: statements, Sunbiz, EIN, trademark receipt, lease, Form 8843s)
  - https://drive.google.com/drive/folders/1HqdOx3kgS1BEZFV3KiRlEON1KCLK9H2i (Julia's second
    folder, modified 2026-04-16 — likely a TaxDome-migration parallel subtree per the
    `client-intelligence` skill's documented pattern; contents not diffed against the folder above)
  - https://drive.google.com/drive/folders/1Z-qYgSvfSxdGEs18QxgErYp7lKydLx3s (Maria's folder,
    two generically-named files `Mikayel Shakhyan1.pdf` / `Mikayel Shakhyan2.pdf` uploaded
    2026-05-11 — not opened, per the excludeContentSnippets rule; someone should open and name
    these two files)
- **Related SOPs:** none — the firm has **no SOP** for the foreign-owned-DE pro forma 1120 /
  Form 5472 filing. The only existing material is the public-facing marketing script
  [`form-5472-foreign-owned-llc-2026-07-03.md`](../../marketing/video-generation/scripts/form-5472-foreign-owned-llc-2026-07-03.md).
