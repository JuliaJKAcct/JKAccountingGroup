# Kompozit USA

> **Status:** Prospect — proposal sent, awaiting response · **Owner:** Julia · **Last updated:** 2026-08-22
>
> ⚠️ **Coverage gap, weekend sweep 2026-08-22:** this client has no Double account yet and is **not
> named in `weekend-ci-sweep.md`'s scope or exclusion table** — a genuine gap found by this run's
> coverage check (2b). A human needs to add a scope-table row once it becomes a signed client with a
> Double record (see the routine's email for the flag). Checked this run: Gmail (bounded to
> `after:2026/08/19`) and Google Drive only — Ping and Double were not searched (no meetings
> expected there yet, no Double account).

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

- **Business name:** Kompozit USA _(exact legal entity name pending — their Facebook page reads
  "Art Kompozit USA"; confirm on Sunbiz before any filing or engagement letter)_
- **Entity type:** _(pending)_
- **Home state:** Florida — North Miami (physical manufacturing facility)
- **Industry / what they do:** **Paint & coatings manufacturer** — interior/exterior paints,
  anti-corrosion enamels, primers, wood-protection materials, concrete-surface solutions.
  The US arm of the Ukrainian **Kompozit** brand (founded ~30 years ago by the Ostapenko
  brothers, Dmytro and Oleksandr); manufacturing **in the US** for roughly the last three
  years. ~**12 people** work at the facility. Sells through a **distributor network**
  (locations page on the site) and a **Shopify** web store; **franchising** is part of the
  growth plan _(intake conversation, 2026-08-19; kompozitusa.com via Google — direct fetch
  is blocked by the session's egress proxy)_
- **Primary language:** UA/RU founders; site is EN _(bilingual RU/EN proposal used — confirm
  preference)_
- **Our engagement (services we provide):** **PROSPECT — proposal sent 2026-08-19 (by Julia,
  email to the owner), awaiting response.** Valid 30 days, so through mid-September. Quoted 2026-08-19:
  a single **all-in monthly engagement** (Julia's call, same day — she first considered a
  controller add-on, then chose one bundled fee so the client doesn't pick and choose):
  bookkeeping in QuickBooks, monthly financials, business tax return, sales tax, 1099s,
  annual report, proactive tax planning, advisory, coordination, **controller reporting
  (quarterly banking/investor packages) included**, with the **Odoo–QuickBooks integration,
  written accounting procedures and training of their in-office bookkeeper bundled in**.
  Priced above the website's Strategic starting price (that page says "starts at"); the
  value anchor in the proposal is a full-time South Florida controller's salary. Figures
  live in the delivered proposal, not here
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** **Odoo** is the current ERP; the outgoing EA used **some
  QuickBooks** (extent unknown). Web store on **Shopify**. Direction under discussion:
  QuickBooks as the books, with an **Odoo–QuickBooks integration designed, built and
  maintained entirely by the firm** — our differentiator, given the firm's own deep Odoo
  experience

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owners / founders | The Ostapenko brothers, Dmytro and Oleksandr (public — company website). **Our contact is Dmytro Ostapenko** (confirmed by Julia, 2026-08-19); his email is on the delivered proposal and goes into Double on signing, not here |
| Planned in-office admin/bookkeeper | **Their hire, part-time (2–3 days/week), not made yet** — will own day-to-day inventory + applying customer payments to open invoices; the firm trains and supervises them ("our eyes and hands on site") |
| Outgoing accountant | An enrolled agent — tax prep + some QuickBooks + occasional consulting; **declined** the expanded ongoing role, which is why they approached us |

- **Double client:** _(pending — not in Double yet; create on signing)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Odoo | Current ERP / system of record | _(pending)_ | — |
| QuickBooks | Partial use by the outgoing EA; intended books going forward | _(pending)_ | — |
| Shopify | Web store (kompozitusa.com) | _(pending)_ | — |
| Stripe | One of three customer payment methods | _(pending)_ | Payments also arrive by **check** and **ACH** |
| Payroll platform | _(pending — provider unknown)_ | _(pending)_ | ~12 employees |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Presumably — FL manufacturer selling retail (Shopify) and through distributors
- **Jurisdiction(s):** _(pending — ⚠️ multi-state nexus is a real question: distributor
  network + e-commerce; ask where they ship/sell before quoting states beyond FL)_
- **Our role:** In the quoted scope (first state)
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** Yes — ~12 employees. ⚠️ **Above the firm's 5-employee in-house ceiling**
  ([`service-packaging`](../../marketing/service-packaging.md) §7): the firm **never runs
  payroll in-house at this headcount** — delivery is platform-based. **Julia's call
  (2026-08-19): payroll for the 12 is INCLUDED in the bundled quote**, worded as run on
  their payroll platform, supervised and recorded by us — the §7 delivery model, bundled
  rather than scoped separately
- **Provider / frequency:** _(pending)_

### Bookkeeping & monthly close
- **Applies?** Quoted — to be taken over from the current part-QuickBooks state; monthly
  financial statements; manufacturer ⇒ **inventory / COGS accounting** will matter
- **Categorization rules / quirks:** _(pending — payment application across check/ACH/Stripe
  is the known pain, see §5)_

### Income tax
- **Applies?** Yes — return type _(pending; entity type unknown)_. Prepared until now by the
  outside EA
- **Our role:** In the quoted scope, plus proactive tax planning

### Licenses & other filings
- **Applies?** FL annual report at minimum _(pending — BTR/other local licenses for the
  North Miami facility not checked)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- **They are preparing for outside investment / public-company readiness ("going IPO"), and
  that is the engagement's center of gravity:** banks will require financial packages and
  investors will expect **quarterly** reporting. The controller work (packages built by us)
  is **bundled into one all-in fee** (Julia first weighed an optional add-on, then chose the
  bundle on 2026-08-19 so the client doesn't pick and choose); the proposal anchors the
  price against a full-time South Florida controller's salary
- **~12 employees — never promise in-house payroll processing.** The firm's ceiling is 5;
  at this size delivery is payroll-platform supervision. Julia bundled that INTO this quote
  (2026-08-19) — included, but always platform-based wording, never "we run payroll
  in-house". **Accounts Payable management is explicitly NOT included** (their in-office
  bookkeeper handles AP; the proposal's Not Included list leads with it)
- **The Odoo–QuickBooks integration, handled 100% by us, is the firm's edge in this deal** —
  they run Odoo today, the firm has deep Odoo experience, and no other local firm is likely
  to own that bridge end-to-end. Whether Odoo stays alongside QuickBooks long-term is
  undecided
- **Payments arrive three ways (check · ACH · Stripe) with no documented process for applying
  them to open invoices** — the owner himself is unsure how it should work. Documented
  procedures + training their (planned) part-time in-office bookkeeper is a core deliverable
  of the quoted scope, deliberately **inside** the base plan, not the add-on
- **Franchise / distributor angle:** the owner floated offering our services to future
  franchisees as a packaged deal. Opportunity — but ⚠️ **price carefully: a discount today
  becomes the anchor for every franchisee tomorrow** (Julia's own caution, intake
  2026-08-19). Nothing about franchisee pricing went into the proposal
- **Why they left their EA:** they outgrew a tax-prep-only relationship and need someone in
  constant touch (questions "almost on a daily basis"); the EA was asked to take the bigger
  role and **declined**
- **Communication style is part of the deal — and part of why they chose us.** The owner
  disliked that the EA made him submit questions through a portal (formal, businesslike);
  what won him over is a human, easygoing channel: the firm promised a **dedicated WhatsApp
  group** he can text any time, with fast replies. The proposal names it in the pitch and
  the scope. When onboarding starts, **creating that WhatsApp group is a day-one task**

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-08-22 — **Weekend sweep (bounded, Gmail + Drive only since 2026-08-19).** A Zoom call titled "Dmytro Ostapenko Proposal Review" took place **2026-08-19** (recap email received 16:10 UTC) — Julia walked Dmytro through a comprehensive proposal for financial/accounting services; this is a **live proposal walkthrough with the owner**, not just an emailed PDF, and is new to this file's log (which previously only documented the proposal being "sent by email"). A separate, earlier Zoom call — **"Dmytro Ostapenko & JK Follow up - Accounting," 2026-08-17, 11:00 AM ET, Ping Assistant recording** — predates the proposal delivery by two days and likely fed into it; also new to this file. No reply from Dmytro Ostapenko or anyone at Kompozit was found in Gmail since 2026-08-19. No new Drive folder or document found for this prospect — the sensitive-vault Drive folder remains pending as already noted. The two Zoom-recap emails were not opened in full (only snippet summaries reviewed), so further detail from the 2026-08-17 follow-up call (which may contain scope/pricing discussion) was not extracted this pass.
- 2026-08-19 — **Intake brief (dictated) + first draft proposal built and delivered.**
  Bilingual RU/EN monthly proposal on the tool: Strategic-tier base with the systems work
  bundled in (Odoo–QuickBooks integration owned by us, documented payment-application
  procedures, training their in-office hire), and the controller reporting packages
  (quarterly, for banks/investors) as an optional add-on — the blend Julia asked for, so
  nothing the client absolutely needs day-one sits behind the add-on price. Figures in the
  delivered proposal (not committed). Company researched via Google (kompozitusa.com is
  egress-blocked in the session): Ukrainian brand, ~30 years, Ostapenko brothers, US
  manufacturing ~3 years, North Miami, distributor network. Open items listed below
- 2026-08-19 — **The draft evolved through Julia's same-day feedback, three deliveries on
  one artifact link.** (a) The **WhatsApp group** went into the pitch and the scope (the
  owner's dislike of portal-only communication, see §5). (b) The wording about payment
  application was corrected twice at Julia's direction and then **removed entirely**: the
  proposal now says only that we put written procedures in place and train their in-office
  bookkeeper — their person applies payments, we never imply we do. (c) Pricing pivoted
  from base-plus-controller-add-on to **one all-in fee**, anchored against a full-time
  South Florida controller's salary (Glassdoor/Built In 2026 figures used in the text).
  (d) The whole text passed through the new **humanizer** skill (Julia installed it after
  spotting em dashes; zero em/en dashes remain in the per-client prose). Also standing from
  today: every proposal ships as **PDF + branded HTML artifact** (in the
  [`proposal-generator`](../../../.claude/skills/proposal-generator/) skill).
  (e) Final scope pass, same day: **KPI and cash-position mentions removed** at Julia's
  direction; **payroll for the 12-person team moved INTO the scope** (platform-based
  wording, see §4); **Accounts Payable management added to Not Included** — the in-office
  bookkeeper owns AP, and naming the exclusion protects the fee
- 2026-08-19 — **Julia sent the proposal to the owner by email** (final version: contact
  details filled, all scope edits in). The clock on the 30-day validity runs from today.
  Next event is his response; if the quote is accepted, day one is the WhatsApp group,
  the Double client record, and the systems review for the Odoo and QuickBooks integration

### Outstanding items (CI-only — never in the SOP)

- **Still to confirm:** exact legal entity name (Sunbiz — Facebook suggests "Art
  Kompozit USA") and entity/return type. Contact settled (Dmytro Ostapenko); the proposal
  went out 2026-08-19 with start "1st of the month after signing"
- **Pricing settled** (2026-08-19): one all-in fee, controller included — decision recorded
  in §1 and the log
- **Owner reply to the proposal** — STILL OPEN as of 2026-08-22 (3 days since the walkthrough call). A search of Gmail bounded `after:2026/08/19`, on 2026-08-22, for "Kompozit"/"Ostapenko" (in:inbox and in:sent) did not find a reply. Proposal is valid 30 days from 2026-08-19.

### Information still needed

- [ ] Legal entity name + EIN (Sunbiz)
- [ ] Entity type / return type / fiscal year-end
- [x] Contact person — **Dmytro Ostapenko**, co-founder (Julia, 2026-08-19); email in the proposal/Double
- [ ] Payroll provider + pay cadence for the ~12 employees
- [ ] Sales-tax registrations today, and **nexus states** (distributors + Shopify shipping)
- [ ] Inventory/COGS method in Odoo, and what the EA actually kept in QuickBooks
- [ ] Whether Odoo remains alongside QuickBooks long-term, or QuickBooks becomes sole books

## 7. Links

- **Double client:** _(pending — not in Double yet)_
- **Google Drive folder (sensitive vault):** _(pending)_
- **Related SOPs:** _(none yet)_
- **Company site:** kompozitusa.com _(egress-blocked from sessions; research via Google)_
