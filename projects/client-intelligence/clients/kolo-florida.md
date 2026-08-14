# Kolo Florida Inc

> **Status:** ⚠️ **WINDING DOWN — the company is closing and is no longer our client** (Lilian, 2026-08-11) · **Owner:** Lilian · **Last updated:** 2026-08-14

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

- **Business name:** Kolo Florida Inc
- **Entity type:** Corporation (Inc) — S-corporation, files **Form 1120-S** _(Double client property "Tax Return Type", 2026-08-01)_
- **Home state:** Florida — **Lauderhill, Broward County** _(Gmail: City of Lauderhill Certificate of Use / zoning correspondence, 2025)_
- **Industry / what they do:** Retail / e-commerce — imports and sells merchandise through the Shopify storefront **"Kolo House"**; leases a warehouse in Broward County, FL for inventory. A 2024 local zoning application was initially denied because "wholesale" use wasn't permitted at the site; it was resubmitted describing retail sales to customers and approved. _(Gmail, 2024–2026 correspondence, 2026-08-01)_
- **Primary language:** Russian — the firm's correspondence with the client's primary contact is conducted in Russian _(Gmail, 2026-08-01; tentative, confirm)_
- **Our engagement (services we provide):** Bookkeeping (Quarterly), Sales Tax (Monthly filing), Income Tax (Form 1120-S), 1099 Preparation, Annual Report. **Payroll is NOT a firm service for this client** — the client self-manages payroll through Gusto _(Double client properties, 2026-08-01)_
- **Fiscal year-end:** _(pending — confirm)_
- **Accounting platform:** QuickBooks Online — but ⚠️ **not reachable through Double.**
  `get_client(706626)` returns `platform: "none"` _(checked 2026-08-14)_, so Double's financial
  reports refuse the client outright (*"This tool is unavailable for None clients"*). The books have
  to be opened in QuickBooks itself. **This records the state on the date checked and nothing more** —
  whether the connection was removed during the wind-down or never existed was not investigated.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — also has a separate individual/personal-1040 Double client with the firm |
| Corporate officer (holds a Workers' Comp exemption alongside the owner) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706626](https://app.doublehq.com/close?cid=706626)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Gusto | Client's own payroll platform — **not** a firm-managed service; the firm is copied on Gusto's automated due/late/invoice notices | _(n/a — client's own account)_ | Weekly pay periods; notices land in the firm's inbox _(Gmail, 2026-08-01)_ |
| Shopify | E-commerce storefront "Kolo House" — **kolo.house**, admin `kolo-miami.myshopify.com`, on the **Shopify plan** (so the whole Inventory report family, including the month-end snapshot, is available) | _(n/a — client's own account)_ | Billing notices land in the firm's inbox _(Gmail, 2026-08-01)_. **Reachable from a Claude session through the Shopify MCP** — verified live 2026-08-14. Inventory **is** tracked on the KOLO bath/shower lines, at a **single location** (`"KOLO" 3485 NW 19th St, Lauderdale Lakes, FL`). ⛔ **But its "Cost per item" field is a formula, not a cost — see §5.** Tracking begins **August 2024**; before that the snapshot reads zero or negative and is unusable. Figures stay in Shopify, never here. |
| Florida DOR e-Services | Sales-tax filing portal | _(n/a — firm-managed filing)_ | Returns/payments post to the account's Secure Message Center; confirmation e-mails follow _(Gmail, 2026-08-01)_ |
| GovFile | Files the Florida Annual Report | _(n/a — third-party filing service)_ | Annual filing notice each spring _(Gmail, 2026-08-01)_ |
| TaxDome (legacy) | Where an earlier business-information organizer was completed before/alongside the Double migration | _(n/a — firm login)_ | "2026 Kolo Florida Business information changes" organizer, completed 2026-04-22 _(Gmail/Double activity log, 2026-08-01)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Yes — filed **monthly** through the Florida DOR e-Services portal _(Double client property "Sales Tax" = Monthly, 2026-08-01)_. The firm's internal Double recurring task "Monthly Sales tax" is scheduled around the **5th** of each month (changed from the 1st on 2026-07-20). Filing confirmations arrive by e-mail from the Florida DOR e-Services system. _(Double activity log + Gmail, 2026-08-01)_
- **Cadence — settled by Lilian, 2026-08-11: MONTHLY.** The Drive recurring-expense watchlist (2026-07-07) and some 2025 correspondence describe it as quarterly; that is stale and should not be relied on.
- 🛑 **ENDING: the July 2026 return is the LAST sales-tax filing the firm makes for this client.** Lilian files it herself; after that the sales-tax account is closed as part of the wind-down (§5). _(Lilian, 2026-08-11.)_

### Payroll
- **Applies?** **Not a firm service for this client** — Double's "Payroll" property is N/A. The client runs its own **weekly** payroll through **Gusto**; the firm is copied on Gusto's automated "payroll due"/"payroll late" reminders and monthly invoice-paid confirmations, but does not process payroll for this client. A recurring lateness pattern shows up in those notices (payroll is flagged "1 day late" most weeks). _(Double property + Gmail, 2026-08-01)_

### Bookkeeping & monthly close
- **Applies?** Yes — **Quarterly** _(Double client property "Bookkeeping", 2026-08-01)_. As of mid-2026 the client was under an active bookkeeping **cleanup** (many transactions still uncategorized per the Drive recurring-watchlist note); Lilian resolved six client transaction questions in Double on 2026-07-29 as part of that cleanup. _(Drive + Double activity log, 2026-08-01)_

### Income tax
- **Applies?** Yes — **Form 1120-S** (S-corporation) _(Double client property, 2026-08-01)_.
- The firm also prepares this client's **Form 1099s** (Double property "1099 Preparation" = true). _(2026-08-01)_
- A "2025 Business Tax Organizer" for this client was **reverted to draft** in Double on 2026-07-31 — status open, see §6. _(Double activity log, 2026-08-01)_

### Licenses & other filings
- **Applies?** Yes — a Florida **workers'-compensation Certificate of Election to be Exempt** is on file for this company for **both** principals (not just one): separate Division of Workers' Compensation expiration notices for each of them landed the same day, 2026-06-29, so the exemption has a renewal cycle to watch for each. _(Florida DWC notices via Gmail, 2026-07-30 / confirmed both principals 2026-08-01)_
- **What & when:** _(pending — confirm the exemption's expiration date and who renews it, us or the client)_
- **Florida Annual Report** — required (Double client property "Annual Report" = true); filed each spring through the third-party **GovFile** service. _(Gmail, 2026-08-01)_
- **Local business registration** — the company registered an occupational license / Commercial Certificate of Use with its home city for the leased warehouse space (application filed mid-2024, approved after a wholesale-use denial was resubmitted as retail). _(Gmail, 2026-08-01)_

## 5. Key facts & quirks

- 🛑 **THE COMPANY IS CLOSING — this is a wind-down, not an ongoing engagement.** Lilian
  (2026-08-11): Kolo is **no longer our client**; the company is going to close. Over the coming
  days the work is **closing the accounts** — the Florida sales-tax account, the Gusto
  subscription, and the rest of the systems in §3. **Nothing here should be treated as a live
  recurring obligation** without checking it against the wind-down list in §6 first.
- 🛑 **The July 2026 sales-tax return is the last one the firm files** (§4). Lilian files it herself.
- **Retail, not wholesale.** A 2024 zoning application for the warehouse location was denied
  because "wholesale" use isn't allowed there; resubmitting it as **retail sales to customers** got
  it approved. That framing mattered for licensing and may matter again on the way out.
- ⚠️ **Most of the business does NOT go through the Shopify store — the storefront is a small
  fraction of it.** Across the whole of 2025 the store took **fewer than 50 orders**, several months
  ran at one or two, and **December 2025 was zero**, while the warehouse held over eleven thousand
  units. So a Shopify sales report is **not** this company's revenue, and anyone reading one as such
  will understate the year badly. Consistent with the retail/wholesale zoning history above. _(Shopify
  analytics, read 2026-08-14. Order counts are a volume fact; the money stays in Shopify/QuickBooks
  per the two-data-homes rule.)_
- 🔴 **THE 30%-OF-RETAIL ESTIMATE IS NOT WHAT THE 2024 RETURN DID — and the two disagree by a
  lot.** Lilian's understanding (2026-08-14) is that cost is estimated at **30% of the selling
  price** because the true cost of the goods is not known. **The filed 2024 Form 1125-A does not
  work that way at all:** its ending inventory equals purchases minus cost of goods sold
  **exactly**, so the figure is the residual of what the company actually *paid* — real purchase
  records, at real invoiced cost. The two bases differ by a factor of about **1.74**, which
  implies the goods really cost around **17% of retail**, not 30%. **So the 30% estimate
  overstates cost by roughly three quarters, and 2025 must not silently switch bases.** Settle
  which basis the 2025 return uses before anything is filed — a change is a change of accounting
  method, not a preference.
- **2024 was the first year with activity on this basis** — the filed return opens with **zero**
  beginning inventory and a **zero** beginning balance sheet, and the only return in Double's
  `Tax Return Filed` tree is 2024. _(Whether earlier returns exist elsewhere was not
  investigated.)_ Purchases that year were large and cost of goods sold was small: the company
  bought stock and sold very little of it, which is why almost the whole balance sheet is
  inventory.
- **Two Schedule K-1s** on the 2024 return — two shareholders, consistent with the two principals
  holding workers'-comp exemptions above.
- ⚠️ **`Form 7203` (shareholder basis) was not found in the extracted 2024 return — but pages 8
  and 10 did not extract, so this is NOT established as absent.** It matters because 2024 closed
  in an ordinary business **loss**: whether the shareholders could deduct it turns on basis.
  Check the PDF by hand. _(2026-08-14.)_
- ✅ **PAYROLL STOPPED — settled by Lilian, 2026-08-14: "la nómina paró, no se corrieron más
  payrolls."** So the near-zero payroll on the 2025 P&L is the fact, not a gap in the books. ⚠️
  **§3/§4 still describe weekly Gusto payroll as live and should be read as historical from here
  on** — the Gusto due/late notices in the firm's inbox belong to the period when it ran.
- 🔴 **No depreciation was recorded in 2025.** The 2025 P&L has no depreciation line at all, and
  the balance sheet's accumulated depreciation still equals the **2024 Form 4562** figure exactly
  — so nothing was added. There are fixed assets on the books (computer equipment, furniture, a
  floor scrubber). A 2025 Form 4562 has to be prepared and the deduction claimed. _(2026-08-14.)_
- ⚠️ **Officer compensation is effectively nil in 2025** where 2024 carried a real salaries line.
  Two shareholder-employees. Reasonable-compensation exposure — weaker than usual because the year
  is a large loss and the business is winding down, but it must be a decision, not an oversight.
  See the [`reasonable-compensation` skill](../../../.claude/skills/reasonable-compensation/).
- ✅ **THE 1125-A METHOD IS DECODED — three rules, and they reproduce the 2024 return exactly.**
  With the 2024 QuickBooks reports in hand (2026-08-14) the whole schedule ties to the cent:
  1. **Line 7 (ending inventory) = the balance sheet's `Total for Other Current Assets`** — which
     is the `Inventory` account **plus the Shopify Clearing Account**, not the Inventory account
     alone.
  2. **Line 8 (COGS) = the P&L's `Total for Cost of Goods Sold`** — the `COGS` account **plus
     `Shopify Selling Fees`**.
  3. **Line 2 (purchases) is the plug** that makes line 1 + line 2 − line 7 = line 8.

  ⚠️ **Rule 1 is the one a session will get wrong**, because "inventory" reads as the Inventory
  account. Using it alone breaks the schedule and makes purchases come out **negative**.
- ✅ **The COGS estimate is applied consistently across both years — the base did NOT move.**
  Cost of goods sold runs at about **31% of the `Shopify Sales` account** (the gross sales figure)
  in each year. An earlier reading of this file suspected the base had changed; that was wrong, and
  the cause was that **2024 has no discount accounts at all** — `Channel Discount` and `Channel
  Refund Adjustment` first appear in 2025 — so 2024's gross and net coincide while 2025's diverge
  sharply. Measure the ratio against `Shopify Sales`, never against total income. _(2026-08-14.)_
- 🔴 **BASIS IS THE LIVE RISK ON THE 2025 RETURN — the two shareholders' equity accounts are
  wildly unequal.** Equity sits in one named account per principal (Double holds the names, per
  §2). One of them funded almost the entire business and **put in a further large contribution
  during 2025**; the other's account has **not moved since 2024** and is a small fraction of the
  first. Meanwhile the company has now run **two consecutive loss years**, the second much larger
  than the first. If the loss is allocated by share percentage while contributions are that
  lopsided, **the smaller shareholder's basis will not carry his share** and part of his loss is
  suspended rather than deducted. **Form 7203 per shareholder is not optional here.** First
  question: are those accounts **capital contributions or shareholder loans** — they behave
  differently for basis. _(2026-08-14.)_
- ⚠️ **The Security Deposit came off the balance sheet during 2025** — it was carried all through
  2024 and is **zero** at 31 Dec 2025, with no matching write-off visible as its own expense line.
  The likely explanation is that the landlord applied it against rent, which would already sit
  inside the rent figure. **Confirm what happened to it** before the balance sheet is transcribed.
  _(2026-08-14.)_
- ⚠️ **Rent is the whole story of the 2025 loss** — store rent plus storage rent is roughly
  **four fifths of every expense**, against revenue a fraction of its size, and it **more than
  doubled** from 2024. With the company winding down, **whether that lease is still running is the
  largest remaining exposure after the inventory itself.** _(2026-08-14.)_
- 🔧 **That PDF needs the fixed redactor.** `KOLOFLORIDAINC.pdf` carries a font with no Unicode
  map, so a text extraction returns glyph names rather than characters. Read through
  [`tools/redact-doc/`](../../../tools/redact-doc/) at its 2026-08-14 version or later, which
  decodes them; an older copy reports "0 masked" on this file and that means **blind, not clean**.
- ⛔ **Shopify's inventory VALUE is not a cost basis — the "Cost per item" field is a flat
  30%-of-retail formula.** Checked across eight variants spanning four price tiers, from the
  cheapest accessory to the most expensive vanity: **every one came back at exactly 30.0% of its
  own retail price.** That is a formula applied across the catalogue, not eight supplier
  prices agreeing by chance. Other
  variants carry **no cost at all** and contribute **zero** to the same total — so the number is
  inflated and incomplete at once. **Shopify gives this client units, not value.** The valuation
  has to come from supplier invoices, the client's cost sheet, or a physical count. _(Established
  2026-08-14 when the Shopify figure came out ~1.74× the ending inventory on the filed 2024
  1120-S — Lilian knew the prior-year number and questioned it, which is the only reason this was
  caught.)_
- **Shopify carries ONE cost per variant and applies it to every historical snapshot** — implied
  unit costs came back identical to the cent at both the 2024 and 2025 year ends on nearly every
  item. So editing a cost today silently rewrites what a past year "reported". _(One item did not
  behave this way and was not explained; 2026-08-14.)_
- **Kolo is an INTERMEDIARY for some product lines — those goods are not its inventory.** The
  kitchen units and the doors belong to **another company**; when a customer orders one through
  Kolo, that other store ships it directly. **That is why they are untracked, and it is correct
  that they are** — they must not appear in year-end inventory. _(Lilian, 2026-08-14.)_
- ⚠️ **Shopify's inventory is NOT maintained day to day — read its unit counts as an upper bound.**
  Shopify decrements only when a *Shopify* order ships or someone adjusts by hand, and this company
  sells mostly off-platform (above). The signature is in the monthly series: through all of 2025 the
  store-wide count drifted down by barely a hundred units, then in **July 2026** it dropped by roughly
  three thousand in a single month — the shape of a physical count or a bulk correction, not of
  selling. **For a year-end inventory figure the snapshot is the starting point; a physical count beats
  it.** _(Shopify month-end inventory snapshot series, read 2026-08-14.)_
- **The workers'-comp exemption covers BOTH principals** — separate Division of Workers'
  Compensation expiration notices for each of them landed the same day, 2026-06-29.
- **Dual engagement:** the corporate client (1120-S) and a **separate individual 1040 engagement**
  for the same owner, under a different Double client id. **Closing the company does not
  automatically end the personal engagement** — a distinction to keep straight through the wind-down.
- Business was informally called "Kolo Inc" in early intake correspondence (Jan 2026) before
  settling on "Kolo Florida Inc."
- **Low confidence — to confirm:** mid-2024 correspondence links Kolo to a seemingly related entity,
  "MegaBAI Florida Corp" (shared contacts, an inventory move into Kolo's warehouse, MegaBAI winding
  down around late 2024). Unconfirmed; no CI file exists for it.
  🔎 **Corroborated, not settled, 2026-08-14:** several **BAI-branded** products sit inside Kolo's
  *tracked* Shopify inventory (e.g. "BAI 8044 LED 34-inch Bathroom Mirror", "BAI 0811 Wall Hung
  34-inch Bathroom Vanity"), among its largest lines by value at both the 2024 and 2025 year ends.
  That is consistent with the 2024 inventory move into Kolo's warehouse — **and it raises a
  question for the return:** these are tracked, unlike the intermediary lines above, so on the
  face of it they are being treated as Kolo's own stock. Whether Kolo bought them or is holding
  them for someone is **not established here** — ask before the inventory figure is fixed.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile started from the Double record (Kolo Florida Inc, QBO); confirmed by Lilian
  as the client she called "Colo". No Double notes and no indexed Ping meetings.
- 2026-07-25 — Coverage-gap sweep: full historical Gmail pass back to 2025-08. Filled most of
  §1/§3/§4, found the Drive folder and the recurring-expense watchlist.
- 2026-07-30 — Linked into the owner group (§7); recorded the workers'-comp exemption from a Florida
  DWC expiration notice.
- 2026-08-01 — Weekly sweep: cleared the Gmail full-history gap; established the Shopify storefront,
  the leased Broward warehouse and the 2024 zoning history.
- 2026-08-08 — Weekend sweep: confirmed the Lauderhill location, the sales-tax due-day change (1st →
  5th), and that the 2025 Business Tax Organizer had been reverted to draft on 2026-07-31.
- 2026-08-11 — **Lilian: the company is closing and Kolo is no longer our client.** Account closures
  (sales tax, Gusto, and the rest) run over the coming days; the **July 2026 sales-tax return is the
  last filing**. Also settled the long-standing cadence question — **sales tax is monthly**, and the
  quarterly note in the Drive watchlist is stale. File switched to wind-down. _(Worked by Lilian.)_
- 2026-08-14 — **Lilian started the 2025 Form 1120-S.** The opening question was where a Shopify
  store's year-end inventory actually lives. Established from the live Shopify connection: the
  **month-end inventory snapshot** (Analytics → Reports → Inventory) carries units **and** value at
  cost for **31 Dec 2025 and 31 Dec 2024** — the dates Form 1125-A needs. ⛔ **The VALUE side of
  that was reported to her as usable and it is not — corrected the same day, see the next entry.**
  Two findings from this pass did hold, both now in §5: the Shopify store is a **small fraction** of
  the company's sales, and its inventory is **not maintained day to day**. Separately, Double reports
  Kolo's QuickBooks as **not connected** (§1), so the books cannot be read through Double at all.
  _(Worked by Lilian.)_
- 2026-08-14 — **The Shopify inventory VALUE was found to be unusable, and Lilian is the reason it
  was caught.** She knew the filed 2024 1120-S reported a materially lower ending inventory and
  asked how the Shopify figure had been derived. It had not been derived at all — it was Shopify's
  own `ending_inventory_value` taken at face value. Testing the field underneath showed a flat
  **30%-of-retail formula** across every price tier, with nulls elsewhere (§5). **The units survive;
  the valuation does not.** She also explained the intermediary arrangement behind the untracked
  kitchen and door lines (§5), and asked for the lesson to be made reusable — the firm has other
  Shopify clients. Both findings and the two gates that would have caught this before it reached a
  return are now the
  [`shopify-year-end-inventory` skill](../../../.claude/skills/shopify-year-end-inventory/).
  _(Worked by Lilian.)_
- 2026-08-14 — **The 2024 filed 1120-S was read for the 2025 preparation** (`JK Accounting Group >
  Tax Return Filed > 2024 > KOLOFLORIDAINC.pdf`, through the redactor, that one year only). It
  settled the valuation question: the 2024 ending inventory was **not** a 30%-of-retail estimate
  but the residual of actual purchases, and the whole Form 1125-A reconciles internally (§5). It
  also produced the beginning-inventory figure that governs 2025, the two-shareholder structure,
  and the open Form 7203 question. **The read also exposed a real hole in the firm's own
  redactor** — this PDF's font emits glyph names rather than characters, so the first pass
  reported "0 masked" while four SSN/ITINs sat unrecognised in the file. The tool was fixed the
  same day (decode + an intelligibility gate that refuses to write rather than report a
  misleading zero), with tests and a mutation check. _(Worked by Lilian.)_
- 2026-08-14 — **Lilian supplied the 2025 QuickBooks P&L and balance sheet** (accrual, exported
  the same day) and preparation of the 2025 Form 1125-A began. The books turn out to implement the
  firm's COGS estimate consistently *within* the year, but four things block the return and all
  four are now in §5: **payroll has apparently stopped**, **no depreciation was recorded**,
  **officer compensation is nil**, and **the books do not tie to the 2024 return at 1 January** on
  either inventory or retained earnings. The valuation base for COGS also moved between the two
  years. Requested from Lilian: the QuickBooks balance sheet at 31 Dec 2024, the inventory
  account's 2025 ledger detail, and confirmation that nothing was purchased in 2025.
  _(Worked by Lilian.)_
- 2026-08-14 — **The 2024 QuickBooks reports closed every open question about method, and the 2025
  Form 1125-A now ties to the cent.** Lilian also settled that **payroll stopped** and set the
  scope: *the 2024 return is closed, Julia prepared it, and it is not to be reviewed* — it is the
  reference for how 2025 is built, nothing more. Two things this file had recorded as problems were
  **wrong and are struck**: the books do tie to the 2024 return at 1 January (the ending-inventory
  line includes the Shopify Clearing Account — §5 rule 1), and the COGS base never moved (2024
  simply had no discount accounts — §5). What remains live for 2025 is **shareholder basis**,
  **2025 depreciation**, the **security deposit**, and the **rent commitment**. _(Worked by
  Lilian.)_

### Wind-down — what has to be closed (CI-only)
- [ ] **Florida sales-tax account** — file July 2026 (Lilian), then close the FL DOR account.
- [ ] **Gusto subscription** — the client's own payroll platform; cancel.
- [ ] The remaining systems in §3 — Shopify, the Florida DOR e-Services access, GovFile, TaxDome
      (legacy) — decide for each whether it closes with the company or belongs to the owner.
- [ ] **City of Lauderhill Certificate of Use / BTR** (valid through 2026-09-30) — confirm whether a
      closing business must notify the city rather than simply let it lapse.
- [ ] **Both principals' workers'-comp exemptions** — no renewal needed if the company closes;
      confirm nothing has to be filed to withdraw them.
- [ ] **Final 1120-S and the 2025 organizer** (reverted to draft 2026-07-31) — settle what the final
      return needs, including whether it is a short/final-year return.
- [ ] **The owner's individual 1040 engagement continues** — confirm with Lilian and keep it distinct.
- [ ] **Double record** — archive it once the closures are done (and drop this client from the
      weekend sweep scope at that point, not before).

### Information still needed
- [ ] **2025 return — did the client take a physical inventory count at 31 Dec 2025?** This decides
      whether the Shopify snapshot can be used as the figure or only as a cross-check (§5).
- [ ] **2025 return — how are inventory purchases recorded in QuickBooks?** Expensed on purchase, or
      carried as an inventory asset? Decides whether the year-end close needs an inventory adjusting
      entry, and it is a large number for a company this size.
- [ ] **2025 return — what ending inventory did the 2024 Form 1120-S report?** That figure *is* the
      2025 beginning inventory and it governs; the Shopify snapshot for 31 Dec 2024 is a cross-check,
      not the authority. A gap between the two has to be explained, not averaged.
- [ ] **2025 return — where does the real cost of the inventory come from?** Shopify's is a
      30%-of-retail formula (§5), so the valuation needs supplier invoices, a client cost sheet, or
      a counted-and-priced list. **This is the blocker on the 1125-A.**
- [ ] **2025 return — how was the 2024 ending inventory figure derived?** Whatever method produced
      the number on the filed 2024 1120-S is the method to repeat for consistency; it is also the
      only evidence so far of what this inventory really costs.
- [ ] **2025 return — are the BAI-branded lines Kolo's own stock?** They are tracked, unlike the
      intermediary kitchen/door lines, and they are among the largest lines by value (§5).
- [ ] Fiscal year-end
- [ ] Confirm (or rule out) the "MegaBAI Florida Corp" relationship in §5
- [x] Industry / what they do — **retail e-commerce via the Shopify store "KOLO HOUSE"** plus a
      leased Broward warehouse _(2026-08-01)_
- [x] Which recurring services we provided — bookkeeping (quarterly), sales tax (monthly), income
      tax (1120-S), 1099 prep, annual report; payroll was **never** a firm service _(2026-08-01)_
- [x] Sales-tax cadence — **monthly**, settled by Lilian 2026-08-11

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706626](https://app.doublehq.com/close?cid=706626)
- **Related clients:** [`ihor-naum-olha-levchuk.md`](./ihor-naum-olha-levchuk.md) (one of
  the individuals holds a Florida workers'-comp Certificate of Election to be Exempt for
  this company), [`aura-remodeling.md`](./aura-remodeling.md) — same owner group.
- **Google Drive folder (sensitive vault):** [Kolo Florida Inc folder](https://drive.google.com/drive/folders/1iK4p0Zrht0fCpvRtqRxYtbwikvYPkceO) _(best candidate — other similarly-titled folders also exist; confirm canonical with Julia)_
- **Recurring-expense watchlist:** [Kolo Florida — Recurring Watchlist (Google Doc)](https://docs.google.com/document/d/1cGgStq2Yd6dluxC8IhaCkYAbdM22VdXs1ej1qsgJRRQ/edit)
- **Related SOPs:** _(pending — none yet)_
