# Atman Parts

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-17

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

- **Business name:** **`ATMAN PARTS LLC`** — that is the registered name **as the Texas Comptroller holds it**, seen on the taxpayer account 2026-08-17. Use it on anything filed. _(The variants remain: "Project ATMAN LLC" on Intuit/QuickBooks billing, and the Drive folder is "Atman Products" — see §5. The Comptroller's version is the strongest evidence we have of the legal name, but Sunbiz has not been checked.)_
- **Entity type:** **An LLC — that much is settled.** 🔴 **Which return it files is NOT, and nobody at the firm has confirmed it yet.**
  - **`Sch C`** — Double's `Tax Return Type` property, re-read 2026-08-17, and a 2026-01-30 W-9 on file checks "Individual/sole proprietor". Double's `Organizer Status` is set to `N/A (SCH-C)`, consistent with it.
  - **`1120-S`** — said in session by Lilian on 2026-08-17 (*"por ahora estamos haciendo 1120-S"*), **withdrawn as uncertain the same day** (*"no estoy segura… tengo que confirmarlo con Julia"*), and then **corrected by her to Schedule C** — *"creo que es schedule C, pero no estoy segura."* ⓘ Her intermediate message read "Dulce", which was her **voice-to-text tool mis-transcribing "Schedule C"**, not a name.

  ⚠️ **So this is NOT "two sources disagree" — it is one maintained field and one recollection that moved.** Lilian's settled reading now **agrees with Double**, which is worth stating plainly: the weight of what we have points at **Schedule C**. But she is explicit that she is not certain, so it stays open. Treat the `1120-S` mention as a **prompt to verify**, not as evidence against the property. **Julia is the one who knows.** On [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 41 until she answers; **rewrite this block from her answer, and record the 1120-S episode as closed rather than deleting it** — if it ever turns out to be right, that it was raised matters.
  **Why it is worth chasing rather than assuming:** an S-corp election changes the return, opens the payroll question, and brings reasonable compensation with it — none of which apply to a Schedule C.
- **Home state:** **TEXAS — settled by Lilian, 2026-08-11.** Confirmed by the filed Texas Sales and Use Tax returns _(Google Drive, filings dated 2026-07-16)_. ⚠️ A later sweep read **New Hampshire** off the mailing address on a 2026-01-30 W-9 that predates the engagement — **that is wrong**; do not reopen it.
- **Industry / what they do:** Confirmed **eBay marketplace auto-parts seller** (seller handle "atman.autoparts"; firm added to the seller's eBay team 2026-03-24) _(Gmail, 2026-03-24 — upgrades prior low-confidence note)_
- **Primary language:** **Bilingual EN/RU — confirmed.** Double's `Preferred language` property reads `Bilingual (EN/RU)` _(read 2026-08-17; upgrades the earlier medium-confidence "likely Russian" inferred from the bilingual proposal and the onboarding-call transcripts)_
- **Our engagement (services we provide):** Bookkeeping (Monthly, per Double), sales tax (TX, confirmed active) _(Double client properties, 2026-07-25)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online — **Simple Start** plan; free trial began 2026-03-24, converted to paid ~2026-04-24 _(Gmail)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — he is the contact who **also has his own individual (1040) client account** in Double. He **became the QuickBooks primary admin on 2026-07-20**, replacing the firm _(Gmail, 2026-07-25 sweep)_ |
| Owner's staff — portal access only, **not our client** | Double client (link below) — the second portal contact; see the note below |
| Bookkeeping / day-to-day contact | Double client (link below) — **not indexed in Ping at all**, a standing coverage gap for this contact _(2026-07-25 sweep)_ |

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)

> **Two portal contacts, only one is a client.** Atman Parts has a second portal
> contact who **works for the owner**. He was added so he can reach the documents we
> send and use the Double portal — he is **not a client of the firm**, so he will
> **never** have an individual client account, and his missing 1040 is not a gap to
> chase. The owner is the contact who also appears on an `Account Type = Individual`
> client. _(Lilian, 2026-07-30.)_ This is the general rule too — see the
> [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill §7.

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger, Simple Start plan | _(pending — Drive link)_ | Managed through Double. Intuit's own emails show the company under **two names** — "Atman Parts" and "Project ATMAN LLC" — on the same payment method; likely legal name vs. DBA, **unconfirmed** _(Gmail, 2026-08-01 sweep)_ |
| Business PayPal | Payments | _(pending — Drive link)_ | _(mentioned in the 2026-07-20 call — still unconfirmed by other sources, low confidence)_ |
| eBay (marketplace) | Confirmed sales channel — seller "atman.autoparts" | _(pending)_ | _(Gmail, 2026-03-24 — confirmed)_ |
| Texas Comptroller **eSystems / WebFile** | Filing sales tax **and** franchise tax | [`Atman Products > Sales tax > "Sales tax"`](https://docs.google.com/document/d/1vVZxsEdYCqnhyxCrpQbk-Fo0nB0JgBA3EcwZ7UBWfjw/edit) — **one Doc holds everything**: portal address, user, password, three security answers, taxpayer number, and **two separate WebFile numbers** (sales tax · franchise tax) | **The eSystems profile is the CLIENT's own taxpayer account**, not a firm account — the name shown top-right in the portal is the client's, which is expected and not a wrong login. **The business appears TWICE on the dashboard**, one row per tax (Franchise Tax · Sales and Use Tax); they are distinguished only by the `Assigned Tax/Fee` column. Procedure: [`atman-parts-tx-sales-tax.md`](../../sops/atman-parts-tx-sales-tax.md) |

## 4. Obligations & recurring processes

Each obligation below becomes the raw material for Atman Parts' SOP.

### Sales tax
- 📘 **The procedure is written: [`sops/atman-parts-tx-sales-tax.md`](../../sops/atman-parts-tx-sales-tax.md)** _(2026-08-17)_ — the login, the click path, the deadline, the penalties, the eBay rule, and what is still unknown. **Answer "how do we do Atman's sales taxes?" from there**, not from this file.
- **Applies?** **Yes, confirmed** — actual filed returns found.
- **Jurisdiction(s):** Texas (Texas Comptroller — Sales and Use Tax).
- **Frequency & due date:** **Monthly**, due the **20th of the following month** (next business day when the 20th is a weekend or holiday — the portal shows the shifted date itself).
- **Agency & portal:** Texas Comptroller **eSystems / WebFile** (§3).
- **Form:** Texas Sales and Use Tax return.
- 🔴 **Our role — and it is NOT settled who actually files this.** The firm believes it owns the filing. But on **2026-08-17 Lilian opened the portal to file July 2026 (`2607`) and found it already submitted.** Neither she nor anyone else at the firm filed it. **Her read is that the client did it himself** — plausible, since it is his taxpayer account and he can reach it, but **not confirmed with him** _(Lilian, 2026-08-17)_. **Two parties can reach the same account with no agreement about who files**, which is how a period gets filed twice or skipped by mutual assumption. **Ask the client.** Until then, the SOP's standing instruction is to check `View Return Summary` before filing any month.
- **Current status (2026-08-17):** **Current, no gaps, no open balance.** Every period from `2511` (Nov 2025, the first period on the account) through `2607` (Jul 2026) reads `Closed / Return Filed`. Eight back periods (Nov 2025 – Jun 2026) were filed in one day on **2026-07-16** as the firm's onboarding catch-up — several of the earlier ones carried late-filing penalties, May and Jun 2026 did not. **July 2026 (`2607`) was filed by somebody outside the firm** — see the role bullet above. ⚠️ **"All filed" does not mean "all filed by us"**, and who filed the periods between the catch-up and July has not been checked.
- 🔴 **Nothing reminds anyone to file it.** Checked in Double 2026-08-17: **no recurring sales-tax task** on this client — nothing tagged `monthly sales tax`, nothing on a monthly cadence. Ecoorganic's equivalent filing has one; this does not. **Proposed fix (needs Lilian's go-ahead, since it is a Double write): one recurring task due ~the 10th.**
- ⚠️ **The eBay rule is what makes this client's return easy to get wrong.** He is a marketplace seller, and Texas splits marketplace sales across two lines: they go **into** Total Sales (item 1) and **out** at Taxable Sales (item 2), because eBay collects and remits the tax. Leaving them out of item 1 understates gross receipts; leaving them in item 2 pays tax twice. He **keeps the permit and keeps filing** even in a month where every sale went through eBay. _(Tex. Tax Code § 151.0242(d) + Comptroller guidance.)_
- ⏳ **How the monthly figures are derived has never been recorded — and is about to change, so it is deliberately left unwritten.** **Julia is going to connect eBay to QuickBooks for this client, and the reports come out differently once she does.** Documenting today's method would document something about to be replaced. **Lilian will hand over the new method once the connection is made**, and that is when the sales-tax SOP stops being provisional _(Lilian, 2026-08-17)_. Until then the SOP carries the *rule* (which line each figure goes on) but not the *recipe* (where to get it) — so **only Lilian can file a month unaided**.

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** **Yes — Monthly** (Double "Bookkeeping" property = `Monthly`) (source: Double `list_client_properties`, 2026-08-01)
- **Process notes (→ future SOP):** A standard monthly-close checklist was created in Double on 2026-07-20: A/R & A/P Aging Summary review, P&L, Balance Sheet, Statement of Cash Flows, Newly Added / Duplicate Vendors & Customers, Prepare 1099s, Transactions >$1,000 review, Transactions Without Payees, Transactions Auto-Added by Bank Rule, Expense Inconsistency, Parent Accounts Report, Uncategorized Transactions, Expenses & Bills Without Attachments, and a bank-feed completeness check across two connected business checking accounts (source: Double `list_activity_log`, 2026-08-01). An external bookkeeping contractor also assists with monthly Double "Transaction questions" review (e.g. categorizing Outside Services vs. Marketing Expense) per a July 2026 internal email (source: Gmail, 2026-08-01)

### Income tax
- 🔴 **Which return this files is an OPEN question — read §1 before answering it.** The line below is what Double holds, and Lilian's own settled reading agrees with it; but she has asked for **Julia** to confirm, and until then nobody should state it flatly to a client or act on it.
- **Applies?** **Yes** — Tax Return Type = `Sch C` in Double; on that reading there is no separate company return and income flows to the owner's individual 1040 Schedule C (source: Double `list_client_properties`, re-read 2026-08-17). ⚠️ **If it turns out to be an S-corp (`1120-S`), this bullet is wrong and payroll + reasonable compensation come into scope** — see §1.

### Franchise tax (Texas)
- **The account EXISTS — confirmed 2026-08-17.** The Comptroller's eSystems dashboard shows a second row for `ATMAN PARTS LLC` with `Assigned Tax/Fee = Franchise Tax`, and the Drive login doc holds a **separate Franchise Tax WebFile number**. This upgrades the previously unconfirmed obligation flagged from the 2026-07-20 call.
- **The Texas franchise report is annual, due 15 May.** A Texas LLC **below** the no-tax-due threshold still owes the annual **Public Information Report** — the standalone "No Tax Due Report" form was retired in 2024 — and missing it can cost the entity its right to transact business in Texas.
- 🔴 **STILL OPEN: does the firm file it, and has it been filed?** The sales-tax cadence does **not** cover it. Nobody has looked at the franchise account's filing history. **Ask Lilian.**

### Licenses & other filings
- **Applies?** _(pending — nothing beyond the franchise/annual-report position above)_

## 5. Key facts & quirks

- **A portal contact here is not an owner.** One of the two portal contacts on this
  client is the owner's **employee**, given access purely to receive documents and use
  the portal. Don't read "contact on the company" as "owner," and don't expect an
  individual return for him. (Detail in §2.)
- **Two QBO company names in play.** Intuit's subscription emails reference this
  client's QuickBooks company as both "Atman Parts" and "Project ATMAN LLC" under the
  same payment method — likely the DBA vs. the legal LLC name, but **unconfirmed**;
  don't assume they're the same entity without checking with Lilian/Julia.
  (Gmail full pass, 2026-08-01)
- **QBO subscription had a rocky patch.** Repeated Intuit payment-failure notices
  (Jun–Jul 2026) and a "subscription canceled" notice on 2026-07-21 — one day after the
  firm connected Double and transferred primary QBO admin to the client — mean the
  live QBO connection status is worth double-checking before relying on Double's sync
  for this client. (Gmail full pass, 2026-08-01)
- **Three name variants, and now a fourth reading — the Comptroller's is the one to trust.** The state holds the business as **`ATMAN PARTS LLC`**; Double calls it "Atman Parts"; Intuit billing shows "Project ATMAN LLC"; the Google Drive folder is filed under **"Atman Products"**. All the same client. Sunbiz has never been checked, which is what would settle it outright.
- **He is a marketplace seller, and that is a tax fact, not trivia.** Selling through eBay changes how the Texas sales-tax return is filled in (§4) and means a month can look like zero taxable sales while the business traded normally. Anyone reading a sales figure for this client should know which side of the marketplace line it came from.
- One of the two Double portal contacts is not indexed in Ping at all — a standing Ping coverage gap for this client's bookkeeping/day-to-day contact.
- **QuickBooks primary admin was transferred to the owner** on 2026-07-20 (Intuit notification: "The primary admin for Atman Parts changed... [owner] is the new primary admin"), consistent with the same-day onboarding call. (Source: Gmail, 2026-07-20.)

## 6. History & open questions

### Log
- 2026-07-20 — Profile started. Confirmed the client in Double as **Atman Parts**
  (QuickBooks Online). Sales-tax details to come from Lilian.
- 2026-07-20 — Sweep: no Double notes yet.
- 2026-07-20 — Found Atman in Ping — indexed under the **owner's individual contact**, not the business name "Atman Parts" (that is why the first search missed it; the sweep now searches by owner **and** business). Read the owner's follow-up client meeting with Julia (Ping, 2026-07-20). The auto-transcript is rough/multilingual, so only low-confidence signals were usable: uses **QuickBooks** + a **Business PayPal**, possibly sells on **eBay**; the call discussed **sales tax, franchise tax and annual reports** (no legible state/frequency). Concrete details still need capture from Lilian/Julia.
- 2026-07-25 — Coverage-gap sweep: full historical Gmail pass. Confirmed home state (Texas), industry (eBay auto-parts seller), QBO plan/admin handoff, and a full sales-tax filing history (8 back periods filed 2026-07-16). Found the Google Drive folder under the name "Atman Products" (§7). Client is mid-onboarding per the Double activity log.
- 2026-07-30 — Clarified the contact roles (Lilian): the second portal contact on this
  client is the **owner's employee**, added only for document/portal access. He is not a
  client, so he has no individual account and never will — recorded in §2/§5 so no future
  session flags it as a missing 1040. Generalized into the
  [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill (§7:
  a portal contact is not necessarily an owner).
- 2026-08-01 — Weekly sweep: **full one-time Gmail pass** completed (coverage gap
  cleared — `in:inbox`/`in:sent`, no date bound). Found the earlier 2026-03-24
  "Vitaliy onboarding" Zoom call (predates this file's baseline) discussing organizing
  tax/accounting services for Vitaliy's (plural) **businesses** in the US — confirms the
  owner runs more than one business (see the owner-with-several-businesses rule). Also
  found: a 2026-03-24 eBay team-invite confirming the store name "atman.autoparts"; the
  client's individual profile was activated in **TaxDome** on 2026-03-26, predating its
  Double individual-client record (created 2026-05-19) and the Atman Parts company
  record (created 2026-07-20); and a run of QuickBooks Online payment/subscription
  emails (trial → paid → payment failures → "canceled" on 2026-07-21). Also pulled fresh
  Double `list_client_properties` (Tax Return Type, Bookkeeping frequency, Account
  Type) and the 2026-07-20 Double close-checklist activity log. No new Ping meetings
  beyond the 2026-07-20 follow-up call already logged (semantic search returned only
  that meeting plus noise from unrelated clients, discarded). Google Drive folder for
  this client found and linked in §7.
- 2026-08-08 — **Full-pass sweep (gap catch-up).** Double client properties confirmed: **Tax Return Type = Schedule C**, **Bookkeeping = Monthly**, Assigned Staff = Lilian, Account Type = Company; no Double notes on file. Ping (bounded ≥2026-07-20, per the run's rules — this client's gap was Gmail, not Ping): a scoped search of the owner's Ping client record surfaced nothing beyond the same 2026-07-20 "Follow Up" call already on record — no new meetings. **Full historical Gmail pass (in:inbox + in:sent, no date bound) — gap closed.** Found: QuickBooks/Intuit subscription and billing history back to Mar 2026 (trial start, payment history, a lapsed-then-restored subscription) under both "Atman Parts" and "Project ATMAN LLC" as the company name (see §5); the QuickBooks primary-admin transfer to the owner (2026-07-20); a TaxDome account activation (2026-03-26); and a **Form 2848 (power of attorney)** faxed on 2026-03-28. Nothing on sales tax/franchise tax beyond what the 2026-07-20 call already flagged. Google Drive: located the client's folder (link in §7). QuickBooks and the repo (SOPs/FOLLOW-UPS/BACKLOG) were checked; no client-specific content found beyond the BACKLOG.md mention of this file's own existence.

- 2026-08-17 — **Wrote the Texas sales-tax SOP** ([`sops/atman-parts-tx-sales-tax.md`](../../sops/atman-parts-tx-sales-tax.md) + Atlas render + a card in the Knowledge Hub's *Client tasks* band), from Lilian's own screenshots of a live filing session that morning and the Drive login doc she pointed at. What the session established beyond the procedure itself: the Comptroller holds the business as **`ATMAN PARTS LLC`**; a **Franchise Tax account exists** on the same login with its own WebFile number (upgrading a question open since July); the credentials' Drive location is now recorded in §3; every period back to `2511` reads `Return Filed` ⚠️ *(this entry originally also said July 2026 was filed on time by the firm — **that was wrong**; see the next entry)*; Double's `Preferred language` = `Bilingual (EN/RU)`; and **there is no recurring reminder task in Double**, which is the one operational gap the SOP names first. Lilian also raised *"por ahora estamos haciendo 1120-S"* against Double's `Sch C` — **recorded in §1 as a prompt to verify, not as a source conflict**, and she later corrected herself to Schedule C while staying explicit that she is not certain. **Julia confirms it.** Two things deliberately **not** written because nobody has established them: how the monthly figures are derived, and whether the firm files the franchise report.
- 2026-08-17 — **Two corrections from Lilian the same day, both changing what the SOP claimed.** (1) 🔴 **July 2026's sales tax was NOT filed by the firm.** She went into the Texas portal to file it and **found it already submitted**; her read is that **the client did it himself**, unconfirmed. The SOP had recorded it as ours, filed on time — corrected, and it gained a standing **"check the period isn't already filed"** step at the top of §2 plus a new pitfall. The real finding underneath is that **two parties can reach this account and nobody has agreed who files**, which is now the first open question on the client. (2) ⏳ **Julia is going to connect eBay to QuickBooks**, after which **the reports come out differently** — so the "where do the figures come from" gap is now **parked on purpose** rather than open for research; Lilian delivers the new method once the connection exists, and the SOP is **provisional until then**.

### Outstanding items (CI-only — never in the SOP)
- 🔴 **`Sch C` or `1120-S`? → ASK JULIA.** Double's property says Schedule C; Lilian raised 1120-S on 2026-08-17 and then said she is **not sure and must confirm with Julia** (§1). It decides the return, and if it is an S-corp it drags payroll and reasonable compensation in behind it. **Nobody should act on either reading until Julia answers.**
- 🔴 **Who actually files the sales tax — us or the client?** (§4) July 2026 was filed by somebody outside the firm. **Nobody has asked him.** Until it is settled the firm cannot know a month is covered, and both duplicates and gaps are possible.
- ⏳ **How the monthly sales-tax figures are derived** (§4) — **waiting on the eBay↔QuickBooks connection**, not on research. Lilian delivers it after; no action until then.
- 🔴 **Does the firm file the Texas franchise report, and is it current?** (§4) — the account exists; the filing position does not.
- **No recurring sales-tax reminder in Double** (§4) — proposed, needs her go-ahead.
- Entity-naming mismatch — **partly resolved** (the Comptroller holds `ATMAN PARTS LLC`, §5); **Sunbiz has never been checked**, which is what would settle it.
- Bookkeeping/day-to-day contact not indexed in Ping — worth flagging to whoever manages the Ping integration.

### Information still needed
- [x] Snapshot basics — state (TX), industry (eBay auto-parts), platform, **language (bilingual EN/RU)** confirmed; **which return it files is now contested, not merely pending** (§1); FY-end still pending
- [x] Sales tax: jurisdiction, frequency, agency & portal — **done**, and the full procedure is now an SOP (§4)
- [x] Where the sales-tax portal credentials live — **done, see §3**
- [x] Franchise tax — **the account exists** (§4); **whether we file it is still open**
- [ ] **Who files the sales tax — us or the client?** (§4) — the sharpest operational question on this client
- [⏳] How the monthly sales-tax figures are derived (§4) — **parked deliberately**, waiting on the eBay↔QuickBooks connection
- [ ] Payroll — still unconfirmed _(and unanswerable until the `Sch C` / `1120-S` question is)_
- [x] Google Drive folder link (sensitive vault) — **done, see §7** (filed under "Atman Products")

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=763909](https://app.doublehq.com/close?cid=763909)
- **Google Drive folder (sensitive vault):** [Atman Products folder](https://drive.google.com/drive/folders/1j28nmUpb7u18MLzVO8punGFAbXBXcxJs) _(filed under "Atman Products" — a name variant of "Atman Parts", same client)_
- **Sales-tax login (Drive):** [`Atman Products > Sales tax > "Sales tax"`](https://docs.google.com/document/d/1vVZxsEdYCqnhyxCrpQbk-Fo0nB0JgBA3EcwZ7UBWfjw/edit) — portal, user, password, security answers, taxpayer + WebFile numbers
- **Filed sales-tax returns, by year (Drive):** [Atman Products → Sales tax](https://drive.google.com/drive/folders/1QyyT14O-gNpn8Sn0_OuQ-LtGeL764xtG)
- **Related SOPs:**
  - [`atman-parts-tx-sales-tax.md`](../../sops/atman-parts-tx-sales-tax.md) — **Texas Sales Tax (monthly)**; Atlas render [`.html`](../../sops/atman-parts-tx-sales-tax.html); also a card in the Knowledge Hub under *Client tasks*
