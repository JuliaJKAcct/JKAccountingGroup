# Evgenii Kliauzov & Valeriia Strazhets

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-06

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

- **Business name:** none — a married couple, each running their own self-employed activity. One Double client for the household. _(Double, 2026-10-06)_
- **Entity type:** Sole proprietors — **two (possibly three) Schedule C activities**, no company. _(Lilian, 2026-10-06)_
  - **Evgenii:** consulting on **how to sell on Amazon**. Has a **business bank account** for this activity.
  - **Valeriia:** **marketing**, and a second activity as a **fitness trainer**. ⚠️ Whether that is one Schedule C or two is **not established**.
- **Home state:** _(pending)_ — the firm serves Miami / Fort Lauderdale, but nothing in Double states it.
- **Industry / what they do:** Amazon-selling consulting (him); marketing + fitness training (her).
- **Primary language:** **RU only** — Lilian: *"ellos hablan solo ruso"*. Anything they or their helper must read goes in Russian. _(Lilian, 2026-10-06)_
- **Our engagement (services we provide):** 2025 individual income tax (the joint household return, filing status not yet established). **No bookkeeping**: the couple's side prepares each activity's P&L with Claude, from a prompt Julia sent them. _(Lilian, 2026-10-06; Double)_
- **Fiscal year-end:** December 31 (individuals).
- **Accounting platform:** **None.** Double `platform: none` — no QuickBooks. The books for 2025 are being built from bank statements. _(Double, 2026-10-06)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Taxpayer — Evgenii (Amazon consulting) | Double portal contact, full access (admin, tax, financial, files) |
| Taxpayer — Valeriia (marketing, fitness training) | Double portal contact, full access (admin, tax, financial, files) |
| Person preparing the 2025 P&L in Claude — **Irina** | Not in Double. Lilian: *"algo así como la asistenta de él… no estoy segura si es asistenta"* — **role not confirmed**. Russian-speaking; not comfortable working with Claude, so instructions to her must be simple and step by step |

- **Double client:** [Evgenii Kliauzov & Valeriia Strazhets — `825437`](https://app.doublehq.com/close?cid=825437)
- **Double case note:** none.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Bank — Evgenii's **business account** | The Amazon-consulting activity | _(pending)_ | Bank name not recorded |
| Bank — **joint personal account** (both spouses) | Household spending **mixed with business expenses of BOTH activities**, and possibly business income | _(pending)_ | Bank name not recorded |
| Claude (the clients' own account, on their computer) | Building the 2025 P&Ls from the statements | n/a — not a firm system | The chat holds the 2025 statements, the firm's prompt, and the P&L + Home Office templates |
| Accounting software | — | — | None (no QuickBooks) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_ — not raised. Services, so probably not.

### Payroll
- **Applies?** _(pending)_ — not raised.

### Bookkeeping & monthly close
- **Applies?** Not as a firm service. The clients' side builds an annual P&L per activity with Claude (see §5).

### Income tax
- **Applies?** Yes — **2025 individual return**. Double tax project `262714` ("2025 Taxes"): status `notStarted`, preparer **Lilian**, reviewer **Julia**. _(Double, 2026-10-06)_
- **Return type(s) & deadlines:** Form 1040 with one Schedule C per activity; home office and vehicle on each spouse's Schedule C, split by the firm. ⚠️ Double shows the project's due date as **2026-04-15**, which had already passed when the client was created (2026-09-18) — **whether a 2025 extension was filed is not recorded in anything searched** (Double project, notes, properties; Julia's Gmail by both surnames, 2026-10-06).
- **Our role:** We prepare. The P&Ls come from the clients' side.
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

- 🔴 **THE JOINT PERSONAL ACCOUNT HOLDS THREE THINGS AT ONCE** — household spending, **Evgenii's** business expenses and **Valeriia's** business expenses (and possibly business income for either). Every line there has to be assigned to *one* of them before any P&L is right. **Lilian's order of work: Evgenii's business first, Valeriia's after — never mixed in the same pass.** _(Lilian, 2026-10-06)_
- 🔴 **HOME OFFICE AND CAR COSTS ARE SHARED BY BOTH ACTIVITIES — collect them as TOTALS, the firm splits them.** Both spouses work from home, each in their own space; the firm sets each activity's share **from the area each one uses**. There are **two cars**; the firm assigns **one car to each spouse's Schedule C**. Fuel, repairs, tolls and parking are paid from the joint account and cannot be told apart by car, so they are gathered **as totals by category** and the firm decides how to split them. Whether the home is **rented or owned** is not known yet. _(Lilian, 2026-10-06)_
  ⚠️ **The precedent to avoid:** on [Bogopolskyy](./bogopolskyy-marat-yuliana.md) (also a couple, two Schedule Cs, one home, cars), the clients' own P&Ls put home costs **inside** Schedule C at a percentage **and** on the Home Office worksheet (deducted twice), and both spouses' P&Ls carried **the same car's** bills. **Home-office items stay OFF the P&L** (Form 8829 applies the percentage), and **each car cost is recorded once**.
- 🟠 **THE P&L IS BEING BUILT BY THE CLIENTS' SIDE, IN THEIR OWN CLAUDE, BY SOMEONE WHO FINDS CLAUDE HARD.** Julia sent a prompt ("get my business records ready for my accountant": four steps, a five-tab workbook, a "To confirm" tab the client fills in). Irina loaded the **2025 statements** for the business account and the joint account and the firm's **P&L and Home Office templates**, and answered Claude's first questions. On 2026-10-06 Lilian asked for a Russian follow-up message for that chat (see §6). **Anything sent to that chat must be in simple Russian, step by step.**
- 🟠 **VALERIIA HAS MARKETPLACE HEALTH COVERAGE** — her **2025 Form 1095-A** is on file, so **Form 8962 is required and blocks filing** until it is reconciled. _(Double file, uploaded 2026-10-05)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-09-18** — Client created in Double; both spouses added as portal contacts with full access. _(Double)_
- **2026-10-05** — Two documents land in the Double File Library: `2024 tax return KLIAUZOV EVGENII.pdf` and `Valeriia Strazhets Form1095a_2025.pdf`. ⚠️ **The folder they sit in was not established** (`list_files` without a folder filter); find them by name. **Neither was opened.** _(Double)_
- **2026-10-06** — 🔑 **Lilian set out how the 2025 P&Ls are to be built**, while asking for a Russian message for the clients' Claude chat: Evgenii's activity first, then Valeriia's; the joint account separated line by line into his business / her business / personal; home-office costs (rent or mortgage, electricity, water, etc.) and car costs (repairs, tolls, parking, fuel) collected **as totals**, with the split set later by the firm (home office by each spouse's work area, one car per spouse); the workbook must carry a **Profit and Loss** tab and a **Balance Sheet** tab; and the chat must walk Irina through each question step by step, in bullet points, telling her where in the workbook she answers. _(Lilian)_
- **2026-10-06** — Searched for prior history: Julia's Gmail (both surnames, both email addresses — nothing), Ping meetings (nothing for this couple), Double notes (none), Double properties (none set). _(session search, 2026-10-06)_

### Tax year 2025 — the review

- **Not started** (Double project `notStarted`). What gates it today:
  - **Evgenii's P&L** (Amazon consulting) — being built by the clients' side in Claude, from the business-account and joint-account statements.
  - **Valeriia's P&L(s)** — after his; same joint account.
  - **Home-office and car totals** — then the firm's split between the two activities.
  - **Form 8962** from Valeriia's 1095-A.
- **Prior year:** the 2024 return (in Evgenii's name) is on file and **has not been read**.
- **Filing status:** _(pending — not established)_.

### Outstanding items (CI-only — never in the SOP)

- The Russian follow-up message for the clients' Claude chat — drafted for Lilian 2026-10-06; she sends it to Irina.
- Evgenii's completed workbook (P&L, Balance Sheet, the "To confirm" answers) — awaited from Irina.

### Information still needed

- [ ] Filing status for 2025 (joint or separate).
- [ ] Was a 2025 extension filed? (Double shows a 2026-04-15 due date.)
- [ ] Home: rented or owned? Total area, and the area each spouse uses as an office.
- [ ] The two cars: which car each spouse uses; owned, financed or leased; odometer at the start and end of 2025; any mileage record.
- [ ] Valeriia: one Schedule C or two (marketing / fitness training)?
- [ ] Irina's role (assistant to Evgenii?) — Lilian unsure.
- [ ] Home state / city.

## 7. Links

- **Double client:** [`825437`](https://app.doublehq.com/close?cid=825437) · 2025 tax project [`262714`](https://app.doublehq.com/tax-return?cid=825437&projectId=262714)
- **Double case note:** none.
- **Google Drive folder (sensitive vault):** _(pending — not searched)_
- **Related clients:** none known. Similar shape (couple, two Schedule Cs, shared home and cars): [Bogopolskyy](./bogopolskyy-marat-yuliana.md).
- **Related SOPs:** _(none)_
