# Vitaliy Vasyutyk — property & renovation LLC group

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-07

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

- **Business name:** an owner group, not one company — **ten LLCs** held by Vitaliy Vasyutyk, plus his own individual work. 🔴 **Nine are Florida LLCs; ZUMFI 2 LLC is a TENNESSEE LLC** — different registry, different agency, **different annual-report deadline** (§4). Every company below is its own Double client record; this file is the **owner-level map** and the group's shared history.
- **Entity type:** LLCs — **partnerships, with one exception.** Double's `Tax Return Type` reads **1065** for nine of them and **1120-S** for **Nika Realty LLC**, which carries an S-corp election the firm filed in 2024. _(Read off all ten Double records on 2026-09-07; corroborated by what the firm billed for tax year 2024 — an `1120S - Nika Realty Tax return` line, and `1065 - Tax Return` for 2 Romans Realty and Tropical Coast 1.)_
- **Home state:** Florida — **except ZUMFI 2 LLC, which is registered in TENNESSEE** (TN Secretary of State control number `002 059 868` — ⚠️ **grouped in threes; nine bare digits abort the published-page build** — Articles of Organization approved 2025-10-27). It is the only entity in the group whose state fee differs, which is what makes the anomaly visible on an invoice.
- **Industry / what they do:** residential real estate and renovation — property-holding LLCs plus renovation entities. Several are single-purpose companies formed one or two at a time as parcels are bought.
- **Primary language:** RU _(the firm's outbound mail to him is written in Russian — e.g. Lilian's 2026-03-27 annual-report confirmation)_
- **Our engagement (services we provide):** company formation (Sunbiz + operating agreements), **Florida annual reports**, **1099 filing**, entity elections and dissolutions, income-tax returns for part of the group, and the owner's individual 1040.
- **Fiscal year-end:** _(pending — assume calendar year; not confirmed in writing)_
- **Accounting platform:** **none.** All ten Double client records read `platform: none` — no QuickBooks connection, and no other ledger either. _(What §3 lists as the firm's own A/R ledger is **ours**, not theirs.)_ This is a **compliance / tax-filing** relationship, not a bookkeeping one.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact for all ten companies | Double contact `567527` — **one portal contact is linked to all ten company records and to his own** (`hasClientAdminAccess`, tax + financial + files access) |
| Related individuals with their own Double client records | **Veronika Vasiutyk** (`710664`) and **Vladyslav Vasiutyk** (`710670`) — same surname, separate records; **the relationship is not confirmed in writing.** What is established: the firm billed a 1040 for Veronika on a **Nika Realty** invoice (Sept 2025), and Vladyslav's 2025 return was e-signed 2026-04-02 |
| Partner in Zumfi 2 LLC | there **is** one — named in the 2025 organizer; see §6 (2026-09-07) |

- **Double client (the person):** [Vitaliy Vasyutyk `710668`](https://app.doublehq.com/close?cid=710668)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ none

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Sunbiz (FL Division of Corporations) | Formations, annual reports, dissolutions — **the nine Florida companies** | firm-level, not client-specific | Tropical Coast 1 LLC document number `L24000400203` |
| TN Secretary of State | **ZUMFI 2 LLC only** — its formation and its annual report | firm-level, not client-specific | control number `002 059 868`; notices come from `tnsos.gov` to Julia's mailbox, **not** from Sunbiz |
| Tax1099 | The group's 1099 filings — its platform fee is re-billed to the client as a separate line | firm-level | invoice item `Tax1099 Reimbursement Fees` |
| TaxDome → Double portal | Organizers, document upload, e-signature | firm-level | he still filed the **2025 individual organizer through TaxDome** (Apr 2026) |
| The firm's own A/R ledger | Where the group's invoices and open balances live | firm-level | six billing customer records — see §5. ⚠️ **This is OUR ledger, not the client's** — no company in this group has any accounting platform connected |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** No sign of any — nothing billed, no Double property set. _(pending confirmation)_

### Payroll
- **Applies?** No sign of any. _(pending confirmation)_

### Bookkeeping & monthly close
- **Applies?** **No** — not one company in the group has an accounting platform connected (§1).

### Income tax
- **Applies?** Yes, for part of the group.
- **Return type(s) & deadlines:** read off **Double's `Tax Return Type` on all ten records, 2026-09-07** — **Nika Realty LLC → 1120-S**; **every other company → 1065**: 2 Romans Realty, Sunshine Renovations 1, SYS 1 Realty, Remodel Master Realty, Fastighet, Tropical Coast 1, Zumfi 1, Zumfi 2, Fizum 1. All ten also carry `Income Tax ✓`, `1099 Preparation ✓`, `Annual Report ✓`, `Bookkeeping: N/A`, `Account Type: Company`, `Assigned Staff: Lilian Gonzalez` and `Organizer Status: Sent`; Zumfi 2 and Fizum 1 additionally read `Financials Ready: Ready`. ⓘ The firm maintains these columns by hand — Lilian calls them *"bastante correctas"* — so they beat a guess from prose and are still read, not obeyed.
- **Our role:** we prepare and file.
- **Process notes (→ future SOP):** the **owner's individual 1040 carries gig income** — he uploaded Uber (1099-NEC + 1099-K), Lyft and DoorDash summaries with his 2025 organizer (Apr 2026), so his personal return is not just K-1s.

### Licenses & other filings
- **Applies?** Yes — this is the bulk of the work.
- **What & when:** annual reports for every live company, once a year in the spring — 🔴 **but on TWO different clocks.** The nine Florida companies file with **Sunbiz, due 1 May**. **ZUMFI 2 LLC files with TENNESSEE, due 1 APRIL** — a month earlier, a different portal, and its reminders arrive from `tnsos.gov` rather than Sunbiz _(TN reminders of 2026-01-01 and 2026-03-04 both read `AR Date Due: 04/01/2026`; the 2026 report was approved 2026-03-26)_. The 2025 cycle was billed in April 2025, the 2026 cycle in March 2026 and confirmed to him by email on 2026-03-27. **1099 filings each January–March.** Plus formations, S-elections, BOI and dissolutions as they arise.
- **Process notes (→ future SOP):** the firm bills **service fee + the Florida state fee** per entity, with a **multi-entity discount per company** when several go out together. Amounts stay in the firm's own A/R ledger.

## 5. Key facts & quirks

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **ZUMFI 2 LLC IS A TENNESSEE LLC — its annual report is due 1 APRIL, a month before everyone else's.** The other nine file with Sunbiz by 1 May. Zumfi 2 files with the **Tennessee Secretary of State** (control number `002 059 868`), its reminders come from `tnsos.gov` and never appear in a Sunbiz notice, and its state fee is visibly different from every Florida entity on the same invoice. **A covering staffer working from "they're all Florida LLCs" files it in the wrong state, late.**
- 🔴 **An invoice's CUSTOMER is not the company the work was done for — read the line descriptions.** In the firm's own A/R ledger the group is billed through only **six** customer records (Nika Realty, 2 Romans Realty, SYS 1 Realty, Zumfi 2, Fastighet, Tropical Coast) while **ten** companies generate the work. Nika Realty and Fastighet in particular act as **umbrella billing accounts**: Remodel Master, Sunshine Renovations 1, Zumfi 1, Fizum 1 and Tropical Coast 1 have all appeared as *lines* on another company's invoice. Any "has this been billed?" question must be answered on **line descriptions across all six records**, never on the customer name.
- 🔴 **The 2026 cycle was re-cut twice, so old invoice numbers in email no longer exist in the firm's ledger.** March 2026's group 1099 invoice was cancelled and re-issued split per company; April 2026's Fastighet/Tropical Coast invoices were cancelled and consolidated into one. Deleted invoice numbers still appear in Julia's Gmail with amounts and reminders — **an email is not evidence that an invoice exists.** The full trail is in §6 (2026-09-07).
- ⚠️ **Tropical Coast 1 LLC is DISSOLVED** — Articles of Dissolution filed **2026-03-31** (Sunbiz doc `L24000400203`, confirmation to Julia 2026-04-02). Its final annual report and 1099 were billed on the **Fastighet** invoice, together with the dissolution state fee. No further annual report is due for it, and the third-party "renewal due" emails that keep arriving for it are advertising, not a state notice.
- ⚠️ **One person, one email, ten companies.** A single portal contact holds admin, tax, financial and files access on all ten records; every invoice and every filing confirmation goes to the same address. Convenient — and it means a message about one company reaches him mixed in with nine others, which is why the annual-report confirmations are sent as one list.
- Companies are formed **one or two at a time as parcels are bought**, so the group grows every year: Nika Realty (2023) → 2 Romans + Sunshine Renovations 1 + SYS 1 + Remodel Master (Apr 2024) → Tropical Coast 1 (Oct 2024) → Fastighet (Jan 2025) → Zumfi 1 + Fizum 1 (May 2025) → Zumfi 2 (Oct 2025). Expect a new entity — and its first annual report the following spring — every season.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- _(2026-09-07)_ — **File created.** It did not exist before: **ten companies and their owner had no Client Intelligence at all**, and the group is invisible to the weekend sweep. Created out of the accounts-receivable review below; everything here is drawn from the firm's own A/R ledger (invoices and their line descriptions), Double (client records + the portal contact) and Julia's Gmail. _(Source: this session.)_
- _(2026-09-07)_ — **Lilian asked whether the three still-open invoices for this group double-charge work already billed elsewhere. Answer: no — nothing is billed twice.** Method, named so the negative is not wider than the search _(method rule 1b)_: **the six billing customer records known to hold this group's work** — Nika Realty, 2 Romans Realty, SYS 1 Realty, Zumfi 2, Fastighet, Tropical Coast — every invoice on each, **2019 → 2026, read line by line on 2026-09-07**; each record's total accrual sales for 2023–2026 reconciles **to the cent** with the invoices retrieved, which rules out credit memos and anything else posted against those six. ⚠️ **Billing under a seventh record nobody knows about would be invisible to that reconciliation** — the pre-merge review widened the check to **all 270 invoices the firm issued in 2026** and found none, which is what actually closes that gap for the 2026 cycle. The three open invoices are the **surviving** versions of work that was re-invoiced, not extra copies of it:
  - **2026-03-04** — one consolidated 1099 invoice for the whole group was issued on the **Nika Realty** record (`2053`). Reminders went out 03-04 and 03-06; it was never paid.
  - **2026-03-25** — `2053` was **deleted and re-cut per company** as `2097` (2 Romans + Sunshine Renovations 1), `2098` (Fastighet + Tropical Coast 1), `2099` (Zumfi 1 + Zumfi 2 + Fizum 1) and `2100` (Nika Realty). The four replacements sum **exactly** to the deleted invoice — that is what proves it was a re-cut and not an extra charge.
  - **2026-03-25** — the 2026 annual reports went out the same day, one invoice per billing record: `2101` (2 Romans + Sunshine), `2102` (Fastighet + Tropical Coast), `2103` (Nika + Remodel Master), `2104` (SYS 1), `2105` (Zumfi 2 + Zumfi 1 + Fizum 1, dated **2026-03-26** — the only one of the five not dated 03-25). **Each company appears on exactly one of them.**
  - **2026-04-22** — `2098`, `2102` and `2138` (Tropical Coast's dissolution state fee, 04-09) were **deleted and consolidated** into one Fastighet invoice, `2143`, **paid the same day**. Its lines are Fastighet's and Tropical Coast's only — nothing from `2097`, `2101` or `2104`.
  - **Still open:** `2097`, `2101`, `2104` — all dated 2026-03-25, all reminded repeatedly (04-02, **04-14**, 04-20, 06-03, 06-08, 06-25, 07-27) and **unpaid for over five months**, while every other invoice in the same batch was paid in April. **Paid:** `2099`, `2100`, `2103`, `2105`, `2143`.
- _(2026-03-27)_ — Lilian confirmed to him **by email, in Russian**, that the **2026 annual reports were filed** for Nika Realty, Sunshine Renovations 1, 2 Romans Realty, SYS 1 Realty and Remodel Master (and the rest of the list). So the work behind the three open invoices **was delivered**. _(Source: Gmail, 2026-03-27.)_
- _(2026-04-02)_ — He **completed the 2025 individual Tax Organizer in TaxDome** and uploaded Uber (1099-NEC, 1099-K, annual summary), Lyft and DoorDash P&Ls — his 1040 carries **gig-economy Schedule C income**. The same day, Vladyslav Vasiutyk's 2025 return was e-signed. _(Source: TaxDome notifications to Julia.)_
- _(2026-09-07)_ — Lilian left **five** comments for Julia on Double the same day this file was created, working the 2025 returns: **Zumfi 1 LLC — "we need to close this company"**; **SYS 1 Realty — Vitaliy says there was no activity in 2025**; **Remodel Master Realty — no activity in 2025 either, and 🔴 "the only thing we need to report is a change of address"** (that is filing work, not just a note); and two on **Zumfi 2 LLC** — **the partner's SSN is missing from the organizer and his email address is wrong**, and **Zumfi 2 bought a parcel of land in November 2025 with no renovation work being done on it**. _(Source: Double comment notifications; the partner's identifiers are NOT recorded here.)_

### Tax year 2025 — the review
<!-- Add one per tax year the firm reviews for this client. -->

- **In progress, by Lilian, as of 2026-09-07** — see the four Double comments in the log above. Established so far: **no activity in 2025 for SYS 1 Realty and Remodel Master Realty** (Remodel Master still has a **change of address** to report); **Zumfi 2 acquired land in Nov 2025 and is not renovating it**; **Zumfi 1 is to be closed**; the **Zumfi 2 organizer is incomplete** (partner's identifiers). The owner's own 1040 has gig income (Uber / Lyft / DoorDash) on top of the group.

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- 🔴 **Three invoices from 2026-03-25 are still unpaid** (`2097`, `2101`, `2104`) after six reminders, while the rest of the same batch was paid in April. The work was delivered and the charges are clean — **so this is a collection question, not a billing question.**
- ⚠️ **Remodel Master Realty has a CHANGE OF ADDRESS to report** (Lilian → Julia, 2026-09-07) — the one filing the company still needs for 2025.
- ⚠️ **Zumfi 1 LLC is to be closed** (Lilian → Julia, 2026-09-07). Nothing filed yet; compare with Tropical Coast 1's dissolution for the route and what it costs.
- ⚠️ **The Zumfi 2 organizer is missing the partner's identifiers and has a wrong email** — it blocks that return.
- **Nine of the ten companies have no file of their own.** This file is the owner-level map; per-company facts still need routing into per-company files (see below).

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] **Per-company Client Intelligence files** for the ten companies — this owner-level file is a stopgap, and the house rule is one file per client with facts routed to the company they belong to. Also add the group to the weekend sweep's CLIENTS list once the per-company files exist.
- [x] **`Tax Return Type` for all ten companies** — **read from Double on 2026-09-07: nine × `1065`, and `1120-S` for Nika Realty** (§4 Income tax). ⓘ Written up first as seven unknowns; the pre-merge review caught that the field was set on every record and had simply not been read.
- [ ] **EINs** for the ten companies (public on Sunbiz — and on the TN register for Zumfi 2 — and they may be written here).
- [ ] **Why Zumfi 2 was formed in Tennessee** when the other nine are Florida, and whether it also owes a Florida foreign-LLC registration for the land it bought.
- [ ] **How Veronika and Vladyslav Vasiutyk relate to Vitaliy** — surname and shared billing are not a stated relationship.
- [ ] **Who the Zumfi 2 partner is** (the fact of a partner, not their identifiers) and whether any other company has one — it changes the return type.
- [ ] Whether any company in the group has **sales tax or payroll** obligations. Nothing has ever been billed for either.
- [ ] Whether the firm holds a **Google Drive folder** for this group.

## 7. Links

- **Double client:** [Vitaliy Vasyutyk `710668`](https://app.doublehq.com/close?cid=710668) — the person
- **Double clients (the companies, all linked to portal contact `567527`):**
  [Nika Realty LLC `710583`](https://app.doublehq.com/close?cid=710583) ·
  [2 Romans Realty LLC `710561`](https://app.doublehq.com/close?cid=710561) ·
  [Sunshine Renovations 1 LLC `710599`](https://app.doublehq.com/close?cid=710599) ·
  [SYS 1 Realty LLC `710600`](https://app.doublehq.com/close?cid=710600) ·
  [Remodel Master Realty LLC `710590`](https://app.doublehq.com/close?cid=710590) ·
  [Fastighet LLC `710573`](https://app.doublehq.com/close?cid=710573) ·
  [Tropical Coast 1 LLC `710603`](https://app.doublehq.com/close?cid=710603) _(dissolved 2026-03-31)_ ·
  [Zumfi 1 LLC `710613`](https://app.doublehq.com/close?cid=710613) ·
  [Zumfi 2 LLC `710614`](https://app.doublehq.com/close?cid=710614) ·
  [FIZUM 1 LLC `710574`](https://app.doublehq.com/close?cid=710574)
- **Related individuals in Double:** [Veronika Vasiutyk `710664`](https://app.doublehq.com/close?cid=710664) · [Vladyslav Vasiutyk `710670`](https://app.doublehq.com/close?cid=710670) — relationship unconfirmed
- **Double case note:** none
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** [`florida-company-formation-sunbiz.md`](../../sops/florida-company-formation-sunbiz.md) · [`ein-application-irs.md`](../../sops/ein-application-irs.md)
