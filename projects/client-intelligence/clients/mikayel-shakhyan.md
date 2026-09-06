# Mikayel Shakhyan

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-06

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
  PERSONALLY, not by the LLC** _(established 2026-09-06 from the USPTO receipt already in Double;
  confirm by eye next time it is open)_. **It matters on the return twice over**: the mark is not
  an asset of the company, and a legal fee the company paid for it would be a **distribution to
  him** rather than a company cost — §6.
- **Primary language:** RU — Double's `Preferred language` reads **"Only Russian"**
- **Our engagement:** Income tax only. Double: `Income Tax: true` · `Bookkeeping: N/A` ·
  `1099 Preparation: false` · `Annual Report: false`
- **Fiscal year-end:** Calendar. 2025 is a **short first year, 8 Aug → 31 Dec 2025**.
- **Accounting platform:** None — Double `platform: none`, no QuickBooks. **There are no books.**
  The bank account is the only ledger.

## 2. Contacts

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client 710648 — one portal contact, with full admin/tax/financial/files access |
| The company's attorney | **Pivniak Law** — correspondent on the LUMARI trademark application, and paid out of the LLC's account in Nov 2025 |

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double case note:** none — `list_notes(710648)` returned **0 notes** on 2026-09-05.

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
2. **His own individual return.** Double's `Tax Return Type` says **`1040`** while
   `Organizer Status` says **`N/A (Nonresident)`** — ⚠️ **the two disagree; a nonresident files
   1040-NR.** Hand-maintained column, Lilian's to change. Whether he owes one at all for 2025 is
   a separate question — the LLC gave him no U.S.-source income.
- **Current status (2026-09-05):** 🟠 **NOT FILED.** Lilian confirmed the 5472 has not gone in.
  Double's tax project *"2025 Taxes"* reads `notStarted`, `filedAt` null. A complete package was
  prepared (7004 + pro forma 1120 + 5472, in `JK Accounting Group > Tax Return Filed > 2025`,
  file `2025 7004 Ext LumandAriLLC.pdf`) but **the 5472 in it is a shell** — §5.

### Licenses & other filings
- **Forms 8843 — four, one per household member** (`JK Accounting Group > Others > 2025 >
  Forms 8843`), mailed **certified 25 Jun 2026** with the receipt and envelope on file.
  Mikayel's shows **F-2 status**, entered the U.S. **27 Feb 2025** having changed from B, and
  names the language academy he attends. That is what makes him an **exempt individual**,
  hence a nonresident, hence the LLC foreign-owned.
- `2025 4868-mailed by his own.pdf` — he mailed his own individual extension.
- The **LUMARI trademark application** with the USPTO is live and will need watching.

## 5. Key facts & quirks

- 🔴 **THE FORM 5472 SITTING IN DOUBLE LOOKS LIKE A SHELL — DO NOT FILE IT UNTIL IT IS CHECKED BY
  EYE.** Part I names the entity, but on the extracted text of **both** copies **Part II (the 25%
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

- **In preparation, blocked on the client.** The five questions that gate it are below. The
  return itself, its tie-outs and its decisions are in the working paper.

### Outstanding items (CI-only — never in the SOP)

- **Ask the client the FIVE questions in one message** — working paper §6A. ⚠️ **Five, not four:**
  the fifth (his country of tax residence and whether he has a tax number there) fills four fields
  on the form and nothing on file answers it, so it rides in the same message. Everything else on
  the return can either be entered now or is ours to look up (§6B).
- **Raise the `Tax Return Type` mismatch** with Lilian (`1040` for a nonresident) — read-only
  column, hers to change.
- 🔴 **TELL him he must keep records** — §1.6038A-3 applies with **no relief available** and
  carries the same **$25,000** penalty as the filing itself. He has no accounting system at all,
  so the bank statements plus the receipts behind Q2 are the entire record. This is a *tell*, not
  an ask (working paper §6C).
- **Ping has never been searched for this client** — `search_client_meetings` needs a Ping client
  id and could not run. **Google Drive has not been searched either.** Neither is a "nothing
  found"; both are searches that have not happened.

### Information still needed

**Only he can answer these** _(working paper §6A)_:

- [ ] 🔴 **Were the counter deposits his own money — and did he put them in as CAPITAL or as a
      LOAN?** The second half decides which half of the form they go on.
- [ ] 🔴 **What he paid personally between 8 Aug and 27 Oct 2025**, the 80 days before the company
      had an account — and whether any of it was property rather than money.
- [ ] 🔴 **Who are AXY Company LLC and Oxana Martox LLC to him?** This decides **how many Forms
      5472 are filed**, not just a line.
- [ ] 🟠 **Did the company pay anything that was really his personally?** Each one is a
      distribution, even when the money went to an unrelated payee.
- [ ] ⏸ **In which country does he file a tax return as a resident — and does he have a tax
      identification number there?** **Four** fields on the 5472 depend on those two facts, and
      nothing on file answers either.

**Ours to settle, without asking him** _(§6B)_:

- [ ] 🔴 Confirm by eye that Parts II and III of the prepared 5472 really are blank.
- [ ] 🔴 **The dissolution date** — on **sunbiz.org**, where it is public and readable; the Sunbiz PDF in Double is one of the six unreadable scans, so it is only the fallback.
- [ ] 🔍 **His country of citizenship — on his own Form 8843 in Double.** Do not ask him for it.
- [ ] 🔍 Whether he holds an ITIN.
- [x] ✅ **Who owns the LUMARI trademark — ANSWERED 2026-09-06: Mikayel personally, not the LLC.**
      Read off the receipt already in Double; confirm by eye next time it is open.
- [ ] 🟠 Whether the Form 7004 actually went, and by which route.
- [ ] 🟠 **Read the six image-only documents by eye.** _(Asking him for text-based PDFs is a fallback, and that half would go in a later message — not the one carrying the five questions.)_

## 7. Links

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double tax project (2025):** https://app.doublehq.com/tax-return?cid=710648&projectId=219335
- **Working paper (all figures):** [`projects/tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md`](../../tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md)
- **ATX capture sheet (artifact, 2026-09-06):** https://claude.ai/code/artifact/d2baf00b-08d2-49c5-a09b-e7d61b22ca21
  — the page Lilian types the return into ATX from. ⚠️ **The working paper is the master**; republish that page to
  the **same URL** after any change, or the link she holds goes stale.
- **Double case note:** none yet.
- **Google Drive folder (sensitive vault):** _(pending)_
- **Related SOPs:** none — the firm has **no SOP** for the foreign-owned-DE pro forma 1120 /
  Form 5472 filing. The only existing material is the public-facing marketing script
  [`form-5472-foreign-owned-llc-2026-07-03.md`](../../marketing/video-generation/scripts/form-5472-foreign-owned-llc-2026-07-03.md).
