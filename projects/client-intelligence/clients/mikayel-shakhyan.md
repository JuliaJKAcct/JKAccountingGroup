# Mikayel Shakhyan

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-05

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

> **Two zones — what feeds the SOP vs what stays here.** §1–§5 and §7 are the
> Operating zone; §6 is CI-only working context.

## 1. Snapshot

- **Business name:** Lum and Ari LLC _(the individual client record in Double is in the owner's name; the LLC has no separate Double client — checked `list_clients` by name "Lum" and "Ari", 2026-09-05)_
- **Entity type:** Florida LLC. 🔴 **Treated as a FOREIGN-OWNED U.S. DISREGARDED ENTITY for Form 5472 purposes** — see §4 Income tax. ⚠️ **Whether it is single-member has NOT been verified from a document by this firm's repo record** — the whole treatment turns on it (§5).
- **Home state:** Florida
- **Industry / what they do:** _(pending)_ — a trademark receipt for **LUMARI** is on file, so there is a brand
- **Primary language:** RU — Double's `Preferred language` property reads **"Only Russian"**
- **Our engagement (services we provide):** Income tax only. Double: `Income Tax` ✔ · `Bookkeeping` **N/A** · `1099 Preparation` ✘ · `Annual Report` ✘
- **Fiscal year-end:** Calendar. _(A foreign-owned U.S. DE takes its owner's tax year, or the calendar year if the owner has none — Instructions for Form 5472 (12/2024), "Foreign-owned U.S. DEs".)_
- **Accounting platform:** None — Double `platform: none`, no QuickBooks connection

## 2. Contacts

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client 710648 — one portal contact, full admin/tax/financial/files access, MFA **not** enabled |

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double case note:** none — `list_notes(710648)` returned **0 notes** on 2026-09-05.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Bank (the LLC's account) | The evidence for the Form 5472 analysis | _(pending)_ | Four statements are in Double — `TaxDome > Mikayel Shakhyan > Client uploaded documents > Bank statements`: `eStmt_2025-10-31.pdf`, `eStmt_2025-11-28.pdf`, `eStmt_2025-12-31.pdf`, `eStmt_2026-01-30.pdf`. ⚠️ **Oct 2025 → Jan 2026 only** — if the LLC existed earlier in 2025, the first nine months are missing (§6) |
| Double client portal | Document exchange | n/a | Activated by the client 2026-04-15 (TaxDome activation email to Julia) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Unknown. A document titled `FDOR - company was dissolved.pdf` is on file — **filename only, not read** — which suggests a Florida Department of Revenue account existed and was closed.

### Payroll
- **Applies?** No indication. Double `Payroll` property not set.

### Bookkeeping & monthly close
- **Applies?** No — Double `Bookkeeping` reads **N/A**.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines — TWO SEPARATE FILINGS, and they are not the same taxpayer:**
  1. 🔴 **The LLC — pro forma Form 1120 with Form 5472 attached.** A domestic disregarded
     entity wholly owned by one foreign person is treated as a domestic corporation **for the
     limited purposes of §6038A** (Reg. §301.7701-2(c)(2)(vi); §1.6038A-1(c)(1), added by
     **TD 9796**). It has no income-tax return of its own, but must file a **pro forma
     Form 1120** with Form 5472 attached by the 1120's due date including extensions. Only the
     **name and address and items B and E** on page 1 of the 1120 are completed.
     **"Foreign-owned U.S. DE" is written across the top.** It **cannot be e-filed** — fax
     (300 DPI or higher) to **855-887-7737**, or mail to *Internal Revenue Service, 1973 Rulon
     White Blvd, M/S 6112 Attn: PIN Unit, Ogden, UT 84201*. Extension is **Form 7004** with the
     Form 1120 code on Part I line 1, also captioned "Foreign-owned U.S. DE", sent to the same
     fax/address by the **regular** due date.
     _(Instructions for Form 5472 (12/2024) — "Foreign-owned U.S. DEs", "Dedicated mailing
     address", "Extension of time to file", "Electronic Filing of Form 5472".)_
  2. **His own individual return.** Double's `Tax Return Type` says **`1040`** while
     `Organizer Status` says **`N/A (Nonresident)`** — ⚠️ **the two disagree; a nonresident
     files 1040-NR.** Do not write the column (hand-maintained, `double-mcp` §6) — raise it.
- **Our role:** prepare.
- **Current status (2026-09-05):** Double tax project **"2025 Taxes" — `notStarted`**, due
  2026-04-15, `filedAt` **null**, no preparer/reviewer/manager assigned.
- **Process notes (→ future SOP):** on file in `JK Accounting Group > Tax Return Filed > 2025`:
  `2025 5472 Form.pdf`, `2025 7004 Form.pdf`, `2025 7004 Ext confirmation.pdf`,
  `2025 7004 Ext LumandAriLLC.pdf`. ⚠️ **Filenames only — none has been read**, so whether the
  5472 is a draft or something already filed is **not established**, and the tax project still
  reads `notStarted`.

### Licenses & other filings
- **Forms 8843 — four of them, for four people**, in `JK Accounting Group > Others > 2025 > Forms 8843`
  (`_2025 Form 8843 - Mikayel/Narine/Daniel/David.pdf`), with
  `Certified mail receipt - forms 8843.pdf` and `envelope.jpeg` filed 2026-06-25. Form 8843 is
  the statement an **exempt individual** files to exclude days of presence from the substantial
  presence test — consistent with the household being nonresident on a visa status, and it is
  **why** the LLC is foreign-owned. Filed by certified mail, so there is proof of mailing.
- A `2025 4868-mailed by his own.pdf` is on file — the client mailed his own individual extension.

## 5. Key facts & quirks

- 🔴 **THE LLC'S FILING IS AN INFORMATION RETURN WITH A $25,000 PENALTY, AND IT CANNOT BE
  E-FILED.** Failure to file Form 5472 when due **and in the manner prescribed** is $25,000,
  and the same penalty applies to failing to keep the §1.6038A-3 records. If the failure runs
  more than 90 days after IRS notice, a further **$25,000 per related party per 30-day period**
  accrues. ⚠️ **"In the manner prescribed" is doing real work here** — a pro forma 1120 e-filed,
  or mailed to the ordinary Form 1120 address, is not filed in the prescribed manner.
- 🔴 **REPORTABLE TRANSACTIONS FOR A DE ARE WIDER THAN FOR AN ORDINARY CORPORATION — MONEY
  MOVING BETWEEN THE OWNER AND HIS OWN LLC IS ONE.** Beyond the Part IV monetary list, a
  foreign-owned DE checks **Part V** and attaches a description of *"any other transaction as
  defined by Regulations section 1.482-1(i)(7), such as amounts paid or received in connection
  with the formation, dissolution, acquisition, and disposition of the entity, including
  contributions to and distributions from the entity"* (Form 5472, Rev. 12-2023, Part V;
  Reg. §1.6038A-2(b)(3)(xi)). **So the wire that opened the account, the owner paying a company
  cost personally, and the company paying an owner cost are each reportable — at zero income.**
- 🔴 **NEITHER SIZE EXCEPTION APPLIES TO THIS ENTITY.** TD 9796 expressly carves foreign-owned
  DEs out of **both** §1.6038A-1(h) (the under-$10,000,000 small-corporation relief) **and**
  §1.6038A-1(i)(1) (the $5,000,000 / 10%-of-gross-income de minimis relief). A tiny dormant LLC
  gets no relief from either the filing or the record-maintenance rules. The **only** escape is
  having **no reportable transaction at all** in Parts IV, V **and** VI — and Part V is what
  makes that rare.
- 🟠 **THE COMPANY MAY BE DISSOLVED — AND DISSOLUTION IS ITSELF A REPORTABLE TRANSACTION, NOT AN
  END TO THE OBLIGATION.** `FDOR - company was dissolved.pdf` is on file (**filename only, not
  read**; the dissolution date is not established). TD 9796's own **Example 1** is this fact
  pattern — form and contribute in year 1, contribute funds in year 2, a payment to the owner in
  year 3, **liquidating distribution in year 4** — and holds that the DE has a §6038A reporting
  and record-maintenance requirement **in each of those years, the liquidation year included**.
- The client's Double record and everything about the LLC live under **one individual client**
  (710648). There is no separate Double client for the LLC, so a search by company name finds
  nothing.
- **He speaks Russian only** (Double `Preferred language`), and he does things himself when left
  to it — he mailed his own Form 4868.

## 6. History & open questions

### Log

- _(2026-09-05)_ — **File created.** Lilian asked the session to find this client in Double and
  establish what "reportable transactions" means for the LLC's pro forma 1120 / Form 5472. What
  was found: the Double client (710648, individual, nonresident, Lilian's), its 2025 tax project
  still `notStarted`, **no Double notes at all**, and 23 documents whose *names* map the whole
  matter — EIN letter, Sunbiz record, an FDOR "company was dissolved" document, a LUMARI
  trademark receipt, a residential lease, four bank statements (Oct 2025 → Jan 2026), four
  Forms 8843 mailed certified on 2026-06-25, and a 2025 Form 5472 plus two 7004s. **No document
  was opened.** The Form 5472 rules in §4 and §5 were read off irs.gov the same day
  (Instructions 12/2024, form Rev. 12-2023) and TD 9796 (2017-03 IRB); the underlying
  §1.482-1(i)(7) text could not be reached — eCFR, govinfo and Cornell are all blocked by this
  environment's egress proxy — so it is cited as the form quotes it, not read.
- _(2026-04-23)_ — Invoice #2142 to **Lum and Ari LLC** paid (QuickBooks notification to Julia).
  _(Gmail search of Julia's mailbox for "Shakhyan OR Lum and Ari OR Lumari", 2026-09-05, returned
  exactly two threads — this and the portal activation. That is what that one search found; it
  is not evidence that nothing else exists elsewhere.)_
- _(2026-04-15)_ — The client activated his portal account.

### Tax year 2025 — the review

- **Not started.** The four gates that have to be settled **before** any Form 5472 figure is
  computed are in "Information still needed" below.

### Outstanding items (CI-only — never in the SOP)

- **Decide with Lilian whether the four documents that settle the gates may be opened** — the
  Sunbiz record, the EIN/SS-4 letter, the FDOR dissolution document, and the bank statements.
  Under the `double-mcp` document rule as widened on 2026-09-04, her or Julia's ask is the
  permission; **the session may not decide it has been asked.**
- **Raise the `Tax Return Type` mismatch** (`1040` vs a nonresident owner) — read-only column,
  hers to change.
- **Ask whether Ping holds any call with this client** — `search_client_meetings` could not run
  without a Ping client id, so **Ping has not been searched at all** for him.

### Information still needed

- [ ] **Is the LLC owned by ONE foreign person?** The §6038A DE treatment applies to *"a domestic
      business entity that is wholly owned by one foreign person"*. Two or more members makes it a
      **partnership filing Form 1065**, not a pro forma 1120 — a completely different return. The
      name "Lum and Ari" and the four Forms 8843 make this worth settling from the Sunbiz record,
      not assuming.
- [ ] **Was the LLC formed during 2025, and when was it dissolved?** Both dates change what is
      reportable: formation costs and the opening contribution sit in the formation year; the
      liquidating distribution sits in the final year.
- [ ] **The first nine months of 2025 bank activity** — the statements on file start 2025-10-31.
- [ ] **The EIN** (in `EIN - Lum and Ari LLC.pdf` / `EIN letter - SS4.pdf`, unread). Public on
      Sunbiz, so it may be written here once read.
- [ ] **Was the 2025 pro forma 1120 / 5472 already sent, and how?** The tax project says
      `notStarted` but a `2025 5472 Form.pdf` and an extension confirmation are on file.
- [ ] **Did the owner pay any company cost personally, or the company any personal cost?**
      Either way it is a Part V reportable transaction. The residential lease on file is the
      obvious thing to ask about.
- [ ] **Does he need a Form 1040-NR for 2025**, separately from the LLC's filing?
- [ ] Whether the firm prepared a **2024** pro forma 1120 / 5472 — the `Tax Return Filed > 2023`
      and `> 2024` folders in Double are **empty**.

## 7. Links

- **Double client:** https://app.doublehq.com/clients/710648/info/properties
- **Double tax project (2025):** https://app.doublehq.com/tax-return?cid=710648&projectId=219335
- **Double case note:** none yet.
- **Google Drive folder (sensitive vault):** _(pending)_
- **Related SOPs:** none yet — there is no firm SOP for the foreign-owned-DE pro forma 1120 /
  Form 5472 filing. The nearest existing material is the marketing script
  [`form-5472-foreign-owned-llc-2026-07-03.md`](../../marketing/video-generation/scripts/form-5472-foreign-owned-llc-2026-07-03.md),
  which is public-facing copy, **not** a procedure.
