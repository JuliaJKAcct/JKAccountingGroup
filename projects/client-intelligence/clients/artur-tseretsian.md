# Artur Tseretsian

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-07-30

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

## 1. Snapshot

- **Business name:** Artur Tseretsian (individual — no registered business entity is engaged with us)
- **Entity type:** Individual / sole proprietor (Schedule C activities reported on Form 1040)
- **Home state:** Florida (South Florida)
- **Industry / what they do:** Two income activities — (1) **used-car reselling & auto transport** (he is linked to a car-sales business he works with, not a company of his own); (2) **online gaming** — buying and selling CS:GO / CS2 skins on the **CS Float** marketplace.
- **Primary language:** _(pending — likely RU/UA)_
- **Our engagement (services we provide):** Individual income-tax preparation — **Form 1040 with Schedule C** — for tax years **2023, 2024, 2025**.
- **Fiscal year-end:** December 31
- **Accounting platform:** None (no QuickBooks; personal bank accounts only)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** https://app.doublehq.com/close?cid=752202

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Bank — credit card | Statements for tax categorization | _(pending — Drive link)_ | Bank of America personal **credit card, ending 7104** |
| Bank — checking/debit | Statements for tax categorization | _(pending — Drive link)_ | Bank of America personal **debit/checking, ending 9561** |
| CS Float (marketplace) | Gaming income/expense (skins) | _(pending — Drive link)_ | Seller profile **"Zeliboba_asl"** (KYC-approved) |

- **Note:** the client also has **other bank accounts** and **external credit cards** (Capital One, American Express, Merrick, Credit One, FPB) whose statements we don't yet have — some business income/expense flows through those, not only the two BofA accounts above.

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No (individual taxpayer).

### Payroll
- **Applies?** No.

### Bookkeeping & monthly close
- **Applies?** No — there is no ongoing bookkeeping engagement. Our work is **tax preparation from the client's bank statements**, not a monthly close.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** Form **1040** (individual) with **Schedule C** for the business activities; tax years **2023, 2024, 2025**.
- **Our role:** We prepare the return.
- **Organizer status:** Sent (Double).
- **Process notes (→ future SOP):** the core of this engagement is the **categorization method** in §5 — separating business from personal on personal bank accounts to build Schedule C.

### Licenses & other filings
- **Applies?** _(pending — likely N/A for an individual)_

## 5. Key facts & quirks

The client's **personal** BofA accounts are used heavily for **business**, so the
work is separating business vs personal **transaction by transaction** to build
Schedule C. Categorization framework **agreed with the client (Jul 2026)** — this is
the raw material for a future "personal-account tax-prep categorization" SOP:

- **Income.** Zelle / received transfers are **business income**, EXCEPT a confirmed
  short list of **personal** counterparties (the specific list is kept in the working
  file, not here). **Deposits** (cash / ATM / branch / check / ACH / wire) are **set
  aside for client review** — not auto-counted as income.
- **Payments.** Zelle **sent = personal** by default; Zelle sent to **auto/transport
  companies = deductible business** (moving the cars he resells).
- **Merchant rules.** Amazon, PlayStation, restaurants/meals, taxi/Uber/Lyft,
  AliExpress, hookah lounges ("pipa") = **personal**; **eBay = business**.
- **Gas stations.** Charge **≥ $25 = fuel (business)**; **< $25 = personal** (assumed
  snacks/food/drinks at the store).
- **Travel** (airfare / hotels) = **flagged for Julia to decide** (not auto-classified).
- **Catch-all.** Any merchant **without a specific rule = personal** — the client
  stated he had **very few business expenses**, so anything not identified is personal.
- **Auto financing** (Lendbuzz, Westlake) = vehicle loans: **principal not deductible,
  interest is** (needs the amortization schedule to split).
- **Home office** = to be computed from a worksheet (pending); home rent/utilities are
  captured as home-office inputs, not 100% business.
- **Health insurance** = personal; client to provide **Form 1095-A** per year.
- **Pass-through** = money received and, the same day, routed to an auto vendor (e.g.
  Autotrader) on a third party's behalf → **neither income nor expense** (one confirmed
  2023 case).
- **Operex LLC** transfers = **handled separately** (set aside for Lilian's analysis).
- **CS Float** = the platform's **own report is the complete figure** for the gaming
  business; **only part flows through the two BofA accounts** (the rest through his
  other accounts). Figures live in the working file / platform report, never here.
- **Statement coverage.** 2023–2025 captured from BofA CC (7104) + debit (9561); **Dec
  2025 runs only through the mid-December statement** — the **January 2026** statements
  of both accounts are needed to complete December 2025.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- _(2026-07-30, Lilian)_ — Created file. Processed **3 years** of BofA statements
  (**72 PDFs**: credit card 7104 + debit 9561), reconciled **100%** to each statement's
  control totals and balances, and categorized **business vs personal** for Schedule C.
  Agreed the categorization rules (§5) with the client. Delivered a **consolidated
  English Excel** (detail per card per year + per-year summaries + CS Float 2025
  reconciliation + Operex tab + deposits-to-review tab). All client figures kept out of
  the repo.

### Outstanding items (CI-only — never in the SOP)
Live list lives in Double; mirrored here for context:
- January 2026 statements (both accounts) to complete Dec 2025.
- CS Float: the **purchases/expense** report, plus 2023/2024 platform reports if there was activity.
- Home-office worksheet.
- Lendbuzz & Westlake **amortization schedules** (interest vs principal).
- Form **1095-A** per year (health insurance).
- External-card statements (Capital One, Amex, Merrick, Credit One, FPB) if that spending should be captured.
- Client to review: **Deposits** (cash/ATM/ACH/wire), **Travel**, and the auto/transport **"Business – review"** Zelles.

### Information still needed
- [ ] Primary language / preferred communication.
- [ ] Which other accounts the CS Float payouts land in.
- [ ] The car-sales business relationship (his exact role; whether any 1099s are owed on payments he made).
- [ ] Assigned staff / relationship owner in Double.

## 7. Links

- **Double client:** https://app.doublehq.com/close?cid=752202
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** none yet — candidate: a "personal-account tax-prep categorization" SOP built from §5.
