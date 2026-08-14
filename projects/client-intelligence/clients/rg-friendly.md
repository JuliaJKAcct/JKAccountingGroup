# R & G Friendly Inc — *DBA Lucky Pawn & Jewelry*

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-14

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

> ⚠️ **NO FULL HISTORICAL SWEEP HAS RUN.** Created 2026-08-14; the Gmail pass covered
> **2026-03 → 2026-08** (a targeted catch-up after the first version drew conclusions from a
> six-day window). Ping, Drive and everything before 2026 are **still unswept**. The catch-up is
> recorded in [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** R & G Friendly Inc — trading as **LUCKY PAWN & JEWELRY** _(the DBA appears on the firm's own invoices)_
- **Entity type:** Corporation (Inc) **taxed as an S-corp** — the firm files an **1120-S** _(Double `Tax Return Type = 1120-S`)_
- **Home state:** _(pending)_ — banking has run through **PNC** (closed Sept 2025) and **Truist**
- **Industry / what they do:** 🔴 **Pawnbroking and jewellery.** Part of the **Melomed family group** (§5)
- **Primary language:** _(pending — likely Russian)_
- **Our engagement (services we provide):** income tax (1120-S) per Double, **plus bookkeeping in practice** — the firm holds the QuickBooks company and works monthly GL files (§5). `Bookkeeping = N/A`, `1099 Preparation = false`, `Annual Report = false` in Double
- **Fiscal year-end:** calendar year
- **Accounting platform:** ⚠️ **Double says `platform: none`, and that is WRONG** — there is a **QuickBooks Online company** for "R & G Friendly, inc." with **RUN Powered by ADP** connected (§3)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| **Officer / signer** — signs the return and holds a **2025 W-2** from the company. ⚠️ **Not established as the owner** | [`grigoriy-margarita-melomed.md`](./grigoriy-margarita-melomed.md) (710633) |
| The related individual client, connected to the same operations | [`igor-melomed.md`](./igor-melomed.md) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |
| Worked the 2024 QuickBooks review | **Maria Zavarce** _(migrated note, 2024-06-05)_ |

- **Double client:** [app.doublehq.com/close?cid=710589](https://app.doublehq.com/close?cid=710589)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **QuickBooks Online** | The books — company "R & G Friendly, inc." | 🔒 Drive vault — **never here** | ⚠️ Exists, though Double records `platform: none` |
| **RUN Powered by ADP** | **Payroll** | 🔒 Drive vault | Connected to the QBO company **2026-03-10** |
| **Truist** | Current bank | 🔒 Drive vault | December statements requested for the 2025 return |
| **PNC** | Former bank | 🔒 Drive vault | ⚠️ **Closed September 2025** — last statements August 2025 (§5) |
| **PayPal** ("Razz") | A payment channel for one operation | 🔒 Drive vault | Annual CSV pulled for the return |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_ — a Florida retail pawn/jewellery operation very likely collects it. **Nothing records who files it.** Establish this.

### Payroll
- **Applies?** ✅ **Yes — via RUN Powered by ADP**, connected to the QuickBooks company in March 2026, and the owner holds a **2025 W-2 from the company**. _(Double records nothing under Payroll — the column is incomplete.)_

### Bookkeeping & monthly close
- **Applies?** ⚠️ **In practice yes, though Double says `Bookkeeping = N/A`.** The client supplies **monthly GL reports for two operations** ("FP" and "RAZZ") plus annual GL files, bank statements and PayPal exports; the firm holds the QuickBooks company. **Reconcile the column with the work.**

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1120-S**, calendar year, due **March 15** — a month earlier than the 1040 clients alongside it
- **Our role:** the firm prepares and files
- **Current status:** ✅ **2025 return FILED** — Double reads `filed`, `filedAt` **2026-05-25**; the return was **signed 2026-03-14**. ⓘ Filed after March 15, so **a Form 7004 extension was presumably on file**; nothing reachable confirms it.
- **Process notes (→ future SOP):**
  - ✅ **The owner takes a W-2** — a 2025 W-2 from the company is on file. That answers the usual S-corp reasonable-compensation question in principle; **whether the amount is reasonable is a separate review** ([`reasonable-compensation` skill](../../../.claude/skills/reasonable-compensation/)).
  - **The client works the document requests thoroughly and answers by text/phone.** In March 2026 he completed every assigned task in the portal chat and left a mobile number for follow-ups.

### Licenses & other filings
- **Applies?** _(pending)_ — a Florida **pawnbroker licence** is very likely; `Annual Report = false` in Double, which is worth confirming for a corporation.

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THIS COMPANY IS "LUCKY PAWN & JEWELRY", AND IT BELONGS TO THE MELOMED GROUP.** The firm's own invoices name it *"R & G FRIENDLY, INC. DBA LUCKY PAWN & JEWLERY"*, its return is signed from a **Melomed** address, and it issues that same person a **W-2**. Meanwhile [`igor-melomed.md`](./igor-melomed.md) — a *different* Melomed household — emails the firm from a Lucky Pawn address and sends its monthly ledgers. **Three Double records (710589, 710635, 710633) sit on one family business.** Work out who owns and who operates before writing anything about any of them, and never assume a "Melomed" fact belongs to the household you happen to have open.
- ⚠️ **DOUBLE'S RECORD IS WRONG IN THREE PLACES** — `platform: none` (a QuickBooks company exists), `Bookkeeping = N/A` (monthly GL work is being done), and nothing under Payroll (ADP is connected and a W-2 was issued). **Do not read this client's engagement off the Double columns.**
- ⚠️ **THE PNC ACCOUNT CLOSED IN SEPTEMBER 2025 AND TRUIST TOOK OVER MID-YEAR.** The 2025 books therefore span two banks with a gap the client described himself — last PNC statements August, Truist from September. **Any reconciliation that assumes one bank for the year will not balance**, and this is exactly where a year-end cut-over goes wrong.
- **A company credit card was never connected in QuickBooks** _(Maria Zavarce, 2024-06-05)_ and its register was worked from a **statement pasted in by hand**. ⓘ **This is a 2024 observation and may have been fixed** — the QuickBooks company has since been reworked and ADP connected. **Verify before repeating it**, but until then treat card completeness as unproven.
- **Two operations run inside the books** — the GL files arrive as "FP" and "RAZZ" sets, and PayPal activity sits under "Razz". Ask which is which before categorising.
- **The deadline is MARCH 15, not April 15.** Written down because the other clients backfilled alongside this one are 1040 filers on the April date.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version published "an S-corp with no payroll recorded" and treated a 2024 note as current; an independent review prompted a wider Gmail pass which produced the entries below. _(Worked by Lilian.)_
  - **2024-06-05 — the migrated TaxDome note.** _(Maria Zavarce.)_ The **credit card was not connected in QuickBooks** and had no transactions there; the note carried a long pasted credit-card register. Figures stay in Drive.
  - **2026-03-05 — the 2025 document round.** The client uploaded monthly and annual **GL reports (FP and RAZZ)**, a **2025 W-2 for the owner from this company**, PayPal/Razz annual exports, and bank statements; he completed every assigned portal task the same day. He noted **PNC closed in September 2025**, with Truist from then on, and left a mobile number.
  - **2026-03-06 — a software problem with one GL file**, re-sent.
  - **2026-03-10 — RUN Powered by ADP connected** to the QuickBooks Online company.
  - **2026-03-14 — the 2025 Form 1120-S signed**, and the firm's invoice for the work paid.
  - **2026-05-25 — Double records the 2025 return as filed.**
- **Nothing further was found in the sources actually searched** — Double live, and Gmail from 2026-03 forward. **Ping, Drive and everything earlier have never been swept**, so this is a statement about the search, not about the world.

### Tax year 2025 — the review

- **Filing position:** Form 1120-S, signed 2026-03-14, recorded filed 2026-05-25.
- **Payroll:** the owner holds a W-2 from the company.
- **Open:** the two-bank year (PNC → Truist), and whether card activity is complete.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle who OWNS this company.** All three records now have files, but ownership does not: the return is signed and a W-2 issued in one household's name, while the *other* household sends the monthly ledgers. Until that is drawn, every "Melomed" fact is ambiguous.
- ⚠️ **Correct the Double record** — `platform`, `Bookkeeping` and `Payroll` all understate what is actually happening here.
- **Check the PNC → Truist cut-over in the 2025 books**, and confirm the card feed question from 2024 is closed.
- **Review the owner's reasonable compensation** — a W-2 exists, so the question is the amount, not the existence.
- **Establish the sales-tax and pawnbroker-licensing position.**
- **Run the one-time full historical sweep** — never done for this client.

### Information still needed

- [ ] Who owns the company, and how it relates to each Melomed household
- [ ] What "FP" and "RAZZ" are
- [ ] Whether a Form 7004 was filed for 2025
- [ ] Whether sales tax and a pawnbroker licence apply, and who handles them
- [ ] Ping, Drive, and everything before 2026 — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710589](https://app.doublehq.com/close?cid=710589)
- **Double tax project (2025):** [tax-return?cid=710589&projectId=219280](https://app.doublehq.com/tax-return?cid=710589&projectId=219280)
- **Owner-group siblings:** [`igor-melomed.md`](./igor-melomed.md) (710635) · [`grigoriy-margarita-melomed.md`](./grigoriy-margarita-melomed.md) (710633) · possibly [Magnum 152, Inc](./magnum-152.md) and [Sunoma Inc](./sunoma-inc.md)
- **Migrated TaxDome notes:** Drive `4. Documents > R & G Friendly Inc` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_ — the compensation review routes to the [`reasonable-compensation` skill](../../../.claude/skills/reasonable-compensation/)
