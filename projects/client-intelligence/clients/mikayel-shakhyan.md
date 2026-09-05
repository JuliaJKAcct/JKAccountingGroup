# Mikayel Shakhyan

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-05

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
  Register) was filed with **Pivniak Law** as the correspondent. ⚠️ **Whether the mark is owned by
  Mikayel personally or by the LLC is unsettled** and it changes the return — §6.
- **Primary language:** RU — Double's `Preferred language` reads **"Only Russian"**
- **Our engagement:** Income tax only. Double: `Income Tax` ✔ · `Bookkeeping` **N/A** ·
  `1099 Preparation` ✘ · `Annual Report` ✘
- **Fiscal year-end:** Calendar. 2025 is a **short first year, 8 Aug → 31 Dec 2025**.
- **Accounting platform:** None — Double `platform: none`, no QuickBooks. **There are no books.**
  The bank account is the only ledger.

## 2. Contacts

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client 710648 — one portal contact, full admin/tax/financial/files access, MFA **not** enabled |
| The company's attorney | **Pivniak Law** — correspondent on the LUMARI trademark application, and paid out of the LLC's account in Nov 2025 |

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double case note:** none — `list_notes(710648)` returned **0 notes** on 2026-09-05.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Bank of America (the LLC's account) | The only record of the company's activity | _(pending)_ | Statements in Double: `TaxDome > Mikayel Shakhyan > Client uploaded documents > Bank statements` — `eStmt_2025-10-31/11-28/12-31.pdf` and `eStmt_2026-01-30.pdf`. ⭐ **Account opened 27 Oct 2025** and the four statements are continuous to 31 Jan 2026, so this is its **whole life** — the Jan–Sep 2025 "gap" flagged before the documents were read **does not exist**: the account did not |
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

### Income tax — TWO separate filings, and they are not the same taxpayer
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
  names a language academy in Hallandale Beach. That is what makes him an **exempt individual**,
  hence a nonresident, hence the LLC foreign-owned.
- `2025 4868-mailed by his own.pdf` — he mailed his own individual extension.
- The **LUMARI trademark application** with the USPTO is live and will need watching.

## 5. Key facts & quirks

- 🔴 **THE FORM 5472 SITTING IN DOUBLE IS A SHELL — DO NOT FILE IT.** Part I names the entity, but
  **Part II (the 25% foreign shareholder — i.e. the owner) and Part III (related party) are
  completely empty**: the owner's name appears nowhere in the document. **Part V is unchecked
  with no attached statement**, lines 1f/1g/1h are blank, and Part VII is unanswered. A 5472 that
  never names the foreign owner is not a 5472 — and filed like this it would look done while
  exposing the client to the **$25,000** penalty for a return not filed *"in the manner
  prescribed"*. It has to be rebuilt before it goes anywhere.
- 🔴 **THIS COMPANY HAS REPORTABLE TRANSACTIONS, AND THEY ARE THE OWNER'S OWN MONEY.** The account
  took in three over-the-counter deposits and spent every cent of them, closing the year at zero.
  There is **no revenue anywhere** — no customer, no card settlement, no invoice — and each
  deposit lands a day or less before the payment it funds. That is the owner feeding his own
  company, which Part V captures as *contributions to the entity*. **The escape route does not
  exist here:** TD 9796 removes foreign-owned DEs from **both** size exceptions
  (§1.6038A-1(h) and §1.6038A-1(i)(1)), so the only way out is having no reportable transaction
  at all.
- 🔴 **THE MOST CERTAIN REPORTABLE TRANSACTIONS ARE NOT IN THE BANK STATEMENTS.** The LLC existed
  from **8 Aug 2025** and had no bank account until **27 Oct 2025** — eighty days in which the
  Sunbiz fee, the registered agent, the EIN and probably the trademark filing were paid by
  somebody, and it was not the company. Those are formation costs and owner contributions, and
  **no statement will ever show them.** They have to be asked for.
- 🟠 **THE COMPANY MAY BE DISSOLVED, AND THAT DOES NOT END THE OBLIGATION — IT CREATES ONE.**
  **TD 9796 Example 1** holds that the liquidation year is itself a reporting year. So if the
  dissolution falls in 2026, a **second** pro forma 1120 + 5472 is due for 2026 — a year whose
  account is dormant at zero, which is exactly when a filing gets skipped.
- **The caption is in the wrong field on every form.** *"Lum and Ari LLC/Foreign-Owned U.S. DE –
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
- _(2026-04-23)_ — Invoice #2142 to **Lum and Ari LLC** paid _(QuickBooks notification to Julia;
  Gmail search of her mailbox for "Shakhyan OR Lum and Ari OR Lumari" on 2026-09-05 returned this
  and the portal activation, and nothing else — that is what that one search found)_.
- _(2026-04-15)_ — The client activated his Double portal account.

### Tax year 2025 — the review

- **In preparation, blocked on the client.** The four questions that gate it are below. The
  return itself, its tie-outs and its decisions are in the working paper.

### Outstanding items (CI-only — never in the SOP)

- **Ask the client four things** (§*Information still needed*) — one message, and it unblocks the
  return.
- **Raise the `Tax Return Type` mismatch** with Lilian (`1040` for a nonresident) — read-only
  column, hers to change.
- **Ping has never been searched for this client** — `search_client_meetings` needs a Ping client
  id and could not run.

### Information still needed

- [ ] 🔴 **Confirm the counter deposits were his own money**, not a customer paying cash.
- [ ] 🔴 **What he paid personally between 8 Aug and 27 Oct 2025** — Sunbiz, registered agent,
      EIN, trademark. Without it the Part V figure is understated.
- [ ] 🔴 **Are AXY Company LLC and Oxana Martox LLC connected to him or his family?** Two payments
      went to them; whether they are reportable turns entirely on this.
- [ ] 🟠 **Who owns the LUMARI trademark — him or the LLC?** If it is his, the company paid a
      personal cost, which is a distribution. Public on the USPTO TSDR database.
- [ ] 🔴 **The dissolution date** — decides the final-return box and whether 2026 owes a filing.
- [ ] 🟠 **Was the Form 7004 actually transmitted by 15 Apr 2026, and to the Ogden fax/address?**
      The officer signed it on the due date; the preparer signed ten weeks later; the confirmation
      is an unreadable scan.
- [ ] Text-based PDFs of the six image-only documents.

## 7. Links

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double tax project (2025):** https://app.doublehq.com/tax-return?cid=710648&projectId=219335
- **Working paper (all figures):** [`projects/tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md`](../../tax-returns/lum-and-ari-llc/2025-form-1120-proforma-5472.md)
- **Double case note:** none yet.
- **Google Drive folder (sensitive vault):** _(pending)_
- **Related SOPs:** none — the firm has **no SOP** for the foreign-owned-DE pro forma 1120 /
  Form 5472 filing. The only existing material is the public-facing marketing script
  [`form-5472-foreign-owned-llc-2026-07-03.md`](../../marketing/video-generation/scripts/form-5472-foreign-owned-llc-2026-07-03.md).
