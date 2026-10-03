# Sweep state — how far each client has been swept

The incremental-sweep ledger. Each row records the date **through which** a
client's ledgered sources (Ping, Double, Gmail — QuickBooks is an as-needed
source and isn't ledgered) have already been reviewed, so
the next sweep only looks at what's new **from the baseline day on** — never
re-reading history that was already processed. This is what keeps the Saturday routine cheap as the client
list grows.

**Rules (for the routine and for any manual sweep):**

1. **Bound every search to the baseline date and later (inclusive).** Include
   items dated **on** the baseline day itself — a sweep may finish at 06:00 and a
   meeting/note can land that same afternoon, so the one-day overlap is
   deliberate; re-reading duplicates is prevented by reading the client file
   first and only adding what's new. (Gmail `after:YYYY/MM/DD` already includes
   that day; for Ping/Double, filter on `date >= baseline`.) Do not re-read
   anything from **before** the baseline date.
2. **A client with a "Coverage gap" note** still owes a one-time full pass of that
   source — do it on the next sweep, then clear the note.
3. **A client with no row here** (newly added to `clients/`) gets a **full
   historical sweep** once, then gets a row.
   ⚠️ **A session tried to invert this on 2026-08-18 — "create a file, add the row in the same
   commit" — and an independent review caught it before it merged.** It would have re-created the
   exact failure the box below describes: a row dated today for a never-swept client bounds the next
   run's searches to *after* today and **erases their history permanently.** **A missing row is not a
   defect. It is the instruction to give that client a full historical pass.** The row is written
   **after** the pass, never before.
   ⓘ **Measured 2026-08-29** (see the run note at the foot of this file for the full reconciliation):
   51 client files, 38 rows here, 9 files in the full-pass queue, 3 files in the exclusion table with
   no row here, and Kompozit USA / 4TUKAS, LLC / Anton (laundry portfolio buyer) — three prospects
   with no Double account, deliberately no row. All 51 are named in `weekend-ci-sweep.md`'s scope or
   exclusion table, except 4TUKAS and Anton, found by this run's check 2b and flagged for a human to
   add their scope-table rows.

4. **Update this table in the same commit** as the client-file updates at the end
   of every sweep (state and content must never drift apart). Set the new baseline
   to the run date for every client actually swept.
5. If a sweep fails partway, only advance the baselines of the clients that were
   fully processed.
6. **Cap the catch-up work per run.** A first-time or coverage-gap **full historical
   pass** is expensive, so do **at most ~6 of them per run** (priority order:
   QuickBooks / active clients first, then the rest); the remaining catch-ups wait
   for the next run. This keeps any single Saturday within budget no matter how many
   clients get added. The cheap **incremental** (post-baseline) passes on
   already-covered clients still run for **all** of them every time.

> ⚠️ **A baseline here says nothing about the migrated TaxDome notes.** This ledger covers
> Ping, Double, Gmail (and Drive where noted) — **not** the notes carried over from each
> client's TaxDome profile. **No weekend sweep reads those** — they were read once, by hand, on
> **2026-08-13** — however recent their
> baseline reads.
> **That backfill is tracked entirely in [`taxdome-notes-backfill.md`](./taxdome-notes-backfill.md),
> not here** — deliberately: the third column below means work **owed**, so a completion
> marker written into it would read as an outstanding gap and send the next run's catch-up
> budget at work already done. **Do not add TaxDome rows or markers to this table.**

| Client | Swept through | Coverage gaps (one-time catch-up owed) |
|---|---|---|
| Atman Parts | 2026-10-03 | Sales Tax task now recurs on the 5th (file said 10th); Oct occurrence due 10-05, Not started. No movement on 4 open items: PASSRDS.txt 44d, Sch C vs 1120-S 47d, who files sales tax 47d, TX franchise-report 47d (deadline 2027-05-15). 2 unchased: Sunbiz name check, Ping bookkeeping-contact gap |
| BEST BROKER REALTY LLC | 2026-10-03 | ✅ City renewal PAID — city 'Print Your Local Business Tax Receipt' email 09-28 shows Active, -2027 suffix; next city renewal 2027-09-30. Open: 2026-27 receipt not in Drive; county certificate expiry unread (SOP says Sept 30, filename says 09.2027 — unsettled); who paid not established; Form 8822-B 203 days |
| ECOORGANIC USA LLC | 2026-10-03 | ⚠️ Contradiction re-verified, NOT resolved: 1120-S shown Filed 09-15, no source settles the bonus-depreciation statement, K-1/basis split, 1099 findings or Outside-services classification. CT-941 past-due notice 46d unactioned; 3 unopened DRS items 30d; QBO admin handover 58d. Firm invoice sent and paid 10-01 (no figures). ~8 lower-priority items unchased (Turo payouts, ATM/cash-deposit questions, Amazon card, bank-feed backlog) |
| GOSSIP MIAMI LLC | 2026-10-03 | New 09-29: item titled 'From IRS GOSSIP' sent to Lilian then Julia (PDF not opened; content unknown). Form 2848 sent to client for signature 10-01 (signed status unconfirmed). Check/deposit images ~60d since written ask; sales-tax account status 52d; 2024 acceptance 52d; Vagaro Oct report ~42d; 2025 working deadline 09-15 passed. 5 unchased (DR-26S, W-9, who signs, TD reconnect, permits) |
| Kolo Florida Inc | 2026-10-03 | ⚠️ Winding down. Gusto 'payroll stopped' vs continuing billing/notices through 10-02 — contradiction 50d, unsettled. Shopify store still frozen (10d). Intuit notice: this company's QBO subscription cancels 2026-10-03. Lauderhill Certificate of Use/BTR valid-through 09-30 has passed, no closure correspondence found. 4 unchased (FL DOR closure beyond Gmail, WC withdrawal, warehouse lease, BAI stock) |
| Pro Title Agency | 2026-10-03 | 🔴 Hollywood LBTR 'valid until 09/30/2026' — a bounded Gmail search after 09-26 found no renewal notice or payment (client's own inbox was the application contact, so not proof of lapse) — check city status page. WLTIC invoice 24d. Coral Springs move, 1065-vs-Sch C, payroll/Double discrepancy no movement. Owner-vs-Assigned-Staff reconciliation needs a decision, not a search (5th run) |
| NEVER GIVE UP KK LLC | 2026-10-03 | Entity-structure recommendation and BOI report both 81d, no deadline. 09-02 Sales Tax N/A→Quarterly change STILL uncorroborated (4th sweep). Licensing/export-control and upload/payroll/vehicle items unchased |
| YES TEAM CORP | 2026-10-03 | 🔴 Personal-card reimbursement purpose answers still NOT CONFIRMED, 17d since the 09-16 off-cycle run — likely phone/WhatsApp, ask Lilian. Sunbiz delinquency lead uncorroborated 36d. Card 9575 Sept close prerequisite unmet. Mellanni format ~3.5mo; retirement plan ~8mo. 3 unchased (meals-account decision, home state, credentials link) |
| MASCIAVE DESIGN STUDIO LLC | 2026-10-03 | Zina 2025 1099 request 9d, no reply found (Prepare 1099s prioritised in Double 09-29). EIN/no-Form-2553 case ~262d, note unchanged since 08-13. Comcast reversal, larger Florida Blue charge (32d), three duplicate Drive folders (35d) unresolved. 4 unchased (bank-feed, sales-tax county, Comcast, Florida Blue) |
| iKids Group LLC | 2026-10-03 | FPL bill unpaid 28d (due 09-05), still not in ledger. July close untouched ~54d past due. Bank feed unconfirmed since 07-20 (75d). 1065 extension unverified (7004 PDF unopened). Broker quotes arrived 10-02 (GL, property, WC; one pending). New: CFO-level contact invited as QBO admin 09-30; marketing-vendor invoice unbooked (capitalization candidate?). 4 unchased (loan allocation, ITINs, third member, 7004 lead) |
| Deep Tech Development Group LLC | 2026-10-03 | Double note 503544 STILL stale (reads 'waiting on Vitalii'; transfer accepted 09-22) — contradiction. Open: Aug 2026 Balance statement from Shopify Support 11d, Shopify Payments re-setup unknown, Gusto cancellation question 59d, Safe Guard cancellation 65d, FDOR Q2 demand 51d. Gusto still billing/filing Q3. Second Drive folder and State Farm UM form not re-chased |
| AURA REMODELING LLC | 2026-10-03 | Sept close 2d overdue (due 10-01). T-Mobile/QuickBooks non-posting and Zelle recurring charge await the Oct day-20 check. Chase card replacement unconfirmed 75+d. Amex/BofA reclass unmoved. Customer invoice unpaid ~9 months. Also (from Ihor's sweep, recurring-expense email 10-01): Chase card interest rising Jul-Sep; liability-insurance payment not posted since July |
| Beemold USA LLC | 2026-09-26 | New unanswered Double question (Purchase-2704, "what is this for?", to Vasile Bivol, 09-22) distinct from the older 7/10 income-line question. 🔴 Kolo Florida/"Vasile Bivol" QuickBooks-billing-failure cross-reference recurred a 2nd time (09-19 and 09-24) — see that row. Bank-feed reconnection, WF statement access, the 7/10 income-line ID, and Mercury card items all still open, 43-68 days) |
| Sunoma Inc | 2026-09-26 | August 2026 EndClose formally marked Done 09-21, but July's EndClose is still "In Progress" — the close skipped straight to August without ever formally closing July (sharper version of last week's finding). Bravo access confirmed running on a workaround login since the firm's own licence never worked. Donation item ~65 days; organizer-draft-vs-filed contradiction still unsettled, ~57 days; "true up loan for the car" unmoved; owner's 3-year P&L/BS request — Sunoma's own half not confirmed delivered) |
| SENSUSTECH LLC | 2026-10-03 | 🔴 2025 Form 1120 not started — all tasks due 09-15, 18d overdue (extended deadline probably 10-15, unconfirmed). Human Interest 401(k) 24d, no reply found. Gusto/QBO mapping failure 52d past due. Five portal questions resolved 09-28; firm invoice paid 10-01. 6 unchased (audit, crypto note, duplicate folders, June reports, home state, organizer-draft intent) |
| Mobilesource Corp | 2026-10-03 | 🔴 FL DOR audit active again 10-02: auditor asked for out-of-state invoice support and exemption report; client→Julia→Maria; delivery unconfirmed, no deadline seen (bodies not fully opened). Missing Jan–Apr 2023 statements 16d; USDT 72d; NJ payable 23d; owner crypto 1099 22d. Sept close due 10-10 not started. Organizer-status contradiction not re-verified. Maria's guide items unchased |
| Margate Plumbing Inc | 2026-10-03 | 🔴 Workers' Comp exemption date 09-30 PASSED — no renewal confirmation found after 09-26 (bounded Gmail negative). WC/GL premium audits 75d; QBO Payments chargeback 65d; Mercury IO limit decreased again 09-30 (6th weekly). 3 unchased (unidentified sender, CJM AR, remortgage CPA letter) |
| MAGNUM 152, INC | 2026-10-03 | Bravo Gunshow mapping error 44d unanswered. Auto Pawn Apr-2024 report 97d; donation treatment 72d; organizer still draft 64d (project Filed 09-16); 3-yr P&L/BS delivery unconfirmed 16d; July EndClose status not re-read. Maria drafting year-end close SOP workbook and 2200 payroll-liability cleanup (Drive metadata only). Outside consulting firm granted reports-folder access 09-30. 4 unchased (organizer, EndClose, Silencer Shop login, uncat/JE items) |
| LUMETRO LLC | 2026-10-03 | — (incremental 09-26→10-03: no Double movement; firm invoice paid 10-01. Tax-filing treatment 63d, no deadline; duplicate Drive folders; home state, credentials, FYE unchased) |
| Ecom Beavers LLC | 2026-10-03 | Post-consult deliverables 86d (turns RED at 90). Engagement start contradictory — Drive metadata shows folders shared since 2025-02/07 vs file's ~May 2026 (unsettled). EB2 LLC relationship 51d; home state/nexus unconfirmed. Two Wise notices (09-28, 10-02) unread. Organizer Status property now 'N/A (we have QBO access)' |
| Artur Tseretsian | 2026-10-03 | Rewhip LLC recurring payment FAILED 10-01 (posted 09-01, canceled 09-03); no client contact yet. Julia pulled a Sunbiz Certificate of Status for Rewhip 10-02 (reason unrecorded). SSN item 64d; Rewhip scope 80d; Stripe data 89d (crosses 90 on 10-04). 9 items unchased (addresses, Jan statements, CS Float report, home-office worksheet, loan schedules, 1095-A, car docs, external card statements, client-review items) |
| Ihor Naum & Olha Levchuk | 2026-10-03 | — (quiet; duplicate-8802 ask ~150d, Form 2848 for Ihor unconfirmed. 4 unchased: 2023/2024 on-file check, Drive PDF archive, mailing address, 4868) |
| Denys Melnyk | 2026-10-03 | K-1s promised 08-20 not arrived (44d); 09-15 chase date missed; 2025 project moved to Waiting on Client 10-02; deadline 2026-10-15 (12d). Julia ruled 09-21 to file with Form 8082 if still silent. Rest of the outstanding list (~15 entries) not re-walked |
| ZETECH LLC | 2026-10-03 | Sixth Gusto payroll cancel/re-run (09-19–25 run canceled by Julia 09-29, re-confirmed) — cause unrecorded. A2X mapping-fix 67d; fee-proposal pushback 86d; IRS sole-prop-vs-1120-S mismatch 169d; COGS/Veeqo ~23d, no follow-up found. FYE and contact role labels unchased |
| OPTIC GOLD INC | 2026-10-03 | ⚠️ 8822-B address correction ~201d and paper 7004 confirmation ~201d, nothing found anywhere. Sunbiz notice (08-07) now shows as OPENED in Gmail (~57d) but nothing records its content — needs a person to read it. What the business does / home state unchased |
| ONETWO STRATEGIES INC | 2026-10-03 | ⚠️ K-1 vs 'filed 08-31' contradiction (2242 Monroe, Porcupine; home office) ~173d — direct question to preparer needed. ACRETIC LLC: firm doing formation + EIN work (Articles/Drive folder 10-02, registration package sent to contact); ongoing scope not recorded. Salary/withholding change, Accountable Plan (QuickBooks not queried), 2024 reemployment PDF unresolved |
| Greenair International LLC | 2026-10-03 | 🔴 Archived Double record + disconnected QuickBooks still await a human decision (23d; 4th consecutive week flagged): move to exclusion table or reconnect. QuickBooks renewal outcome unconfirmed 200d. Correspondence gap ≈6 months. No hits after 09-26 |
| CANDRAMAS LLC | 2026-10-03 | Form 2553 late-effective-date outcome unrecorded after 201d. WCIRCLE LLC needs a human decision (7d). Gusto flagged Sept payroll late 09-29; invoice paid 10-01; run confirmation not seen. Client declined 3 monthly meeting invites. Spelling 'Candromas' in one Ping note vs file — same client |
| AXDIGITAL LLC | 2026-10-03 | Client asked 09-30 for a 15–30 min call before 10-09 (chased 10-02), no reply on file. IRS income-verification letter 09-29: Julia says firm will respond, forwarded to Lilian 09-29/10-02; send not confirmed. Second IRS letter 10-01 was an address update, no action. Employee work-authorization question 60d. Credentials vault link unchased |
| Airtouch LLC | 2026-10-03 | 🔴 Vendor reinstatement/dissolution notices kept arriving daily 09-26→10-02, all UNREAD ('Requires Reinstatement'). Zoom 'Airtouch meeting' held 09-29 — no Ping transcript or Double note, decisions unknown. Whether AIRTOUCH FLORIDA LLC belongs to this owner-group / is dissolved unconfirmed (42d); Sunbiz unreachable from the sweep — a person must check. Organizer 'Completed' vs missing trail 42d |
| Andrii Tymchenko | 2026-10-03 | Health-coverage contradiction (TaxDome note vs note 447824) unsettled 42d; residency / whether firm still files 51d; IRS estimated-payment check, photo ID 51d; 1095-A vs 1099-A 103d unchased. 2026-10-15 extension deadline 12d out |
| VOICECAPITAL INC | 2026-10-03 | — (quiet; IRS S-election acceptance and 8822-B both ~201d; 2848 fax purpose ~158d; firm's own invoice ~135d overdue (no figure written). Double shows 2025 project Filed 07-03 while S-election unresolved) |
| VOXAGO LLC | 2026-10-03 | — (quiet; Nov-2025 FDOR liens 332d, FDOR account/court fees/tangible-goods ~292d, annual-report status 235d. Firm payment request paid 09-28. 1099 payer-side check and 03-24 recap entity NOT re-chased) |
| YMI TRUCKING LLC | 2026-10-03 | ⚠️ Gusto asked 09-28 to reconnect the payroll-debit bank (Plaid) — task due 2026-10-05, no confirmation. TX-vs-IN address and unexplained 7004 filer ~201d. Jupiter Digital Solutions LLC now has its own Gusto notices to the firm (ownership link unestablished); Goncharov Group not re-seen (not a retraction). Prime Road/Jupiter/Goncharov have no CI files |
| VITALII IVANOV & TETIANA MOGYLOVA | 2026-10-03 | Foreign-entity (5471/8865/8858) question 50d, unmoved; 2025 return filed 09-01 with it unconfirmed. Residency memo / visa folder not opened. USPS forwarding digests still arriving through 10-02 (14d past stated expiry). Tetiana's US activity and which Ukrainian companies are active unchased |
| Igor Melomed & Yelena Lovkina | 2026-10-03 | 2025 1040 extended deadline 2026-10-15 (12d): all 12 tasks notStarted, Klondike/Schedule C unresolved, 4868 acceptance unconfirmed. Engagement vs Bookkeeping=N/A 50d; sales-tax/pawn-licence position 50d; organizer Sent not Completed; 2023 classification question 354d NOT chased. New: outside consulting firm given reports-folder access 09-30 (owner approved). ⚠️ Possible link with R & G Friendly / Lucky Pawn name — unsettled |
| R & G Friendly Inc | 2026-10-03 | ⚠️ Encrypted FL DOR communication of 2025-08-25 still unopened (~404d at the underlying date) — a person should open it. Double record correction ~50d. PNC→Truist cutover unchecked. NEW contradiction: 09-30 thread shows Igor Melomed acting via Lucky Pawn-branded addresses vs the 08-29 'no connection' finding — unsettled (not routed into igor-melomed.md). Reasonable-comp review and 2024 POA decision unchased |
| Grigoriy & Margarita Melomed | 2026-10-03 | — (nothing moved; encrypted 2024 FL DOR POA correspondence unopened 345d; mileage/vehicle-sale year unresolved 204d, honda.pdf unopened. 3 unchased: rg-friendly feedback, real filing date, state/language/dependants) |
| Viacheslav Honcharenko | 2026-10-03 | 2025 extension deadline 2026-10-15 (12d). TaxDome 2026-04 thread unread 173d; Schedule C position unsettled; Karpenko relationship 21d; BTR renewal unassigned. Zero Double/Gmail movement |
| Maria Contreras | 2026-10-03 | — (no movement; activity behind vehicle/internet/repair deductions 21d; employer lead and 2025 filing date unchased) |
| Iurii Iakovenko & Alina Yakovenko | 2026-10-03 | Cause of the delay on our side still unrecorded (~205d since March organizer completion); 2025 extension deadline 10-15 (12d). LLC tax classification, FBAR/FATCA follow-up, annual-report/franchise-tax filer, 1095-A confirmation (21d) unchased |
| M5 Studio Miami | n/a (no Double account) | Statement of Change FILED BY COURIER 10-01 (courier paid same day; amendment PDF in Drive — inferred, not read) — no Sunbiz acceptance and no client reply found. Client called it urgent (BofA account). CP575 now 9d past estimate. 2848 timestamp question and SS-4 line-16 read-back open with Lilian. Still no Double record (name search 10-03) |
| LILIIA HLEBOVA KOZLOVSKA | 2026-10-03 | — (no movement; return filed 08-20, substantiation/mileage/digital-asset/dependant/cost-of-home items have no closing record, ~45d. SSN, refund bank, licence unconfirmed) |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |
| Mykola Kozlovskyi | 2026-10-03 | ⚠️ Filed-vs-blocked contradiction re-verified, NOT resolved (Double 0 activity). W-2 46d, Marketplace 45d, counter deposits 45d, payee identity 46d, material participation 45d — none arrived. 2 unchased (digital-asset transaction, own bank account) |
| Artem Markarian | 2026-10-03 | — (quiet; per-car Turo breakdown 32d, Turo account name unseen, Kona/1099-MISC, Turo login, Form 7203 basis 31d, residence/state unanswered) |
| Ishkhan Markarian | 2026-10-03 | — (quiet; transfer-mechanics reply 29d pending, QBO admin handover 58d. Ping individual-scope search NOT run — Ecoorganic-scope only) |
| Mikayel Shakhyan | 2026-10-03 | 🔴 Extended Form 5472 deadline (09-15) now 18d overdue, zero movement in Double/Gmail/Ping. Two more blank-named, duplicate-looking Double tasks seen. Transaction summary to Julia ~27d unforwarded; client questions ~27d, no evidence sent. Firm-side items (5472 Parts II/III, dissolution date, 7004 route, six image scans) open; sunbiz.org unreachable. Drive/Ping not re-queried. 🔴 Still a 2b finding — in neither scope nor exclusion table |
| Vitaliy Vasyutyk | 2026-10-03 | 🔴 Owner's 2025 1040 still Not Started, 171d past the on-file 04-15 date (3rd quiet sweep). Invoices 2097/2101/2104 ~192d unpaid; 2293/2294 25d; no reminder found. SYS 1/Remodel Master address change and Zumfi 1 closure 26d unconfirmed. Activity logs checked for 5 of 10 companies only (owner, SYS 1, Remodel Master, Zumfi 1, Zumfi 2); the other five (2 Romans, Sunshine, Nika, Fastighet, Fizum 1) only via list_clients updatedAt. Ping/Drive not queried |
| BOGOPOLSKYY, MARAT and YULIANA | 2026-10-03 | ⚠️ Yuliana's business description unanswered 18d after the 09-15 filing; working paper's blockers (items 17/22) vs Filed status unreconciled (contradiction, cross-ref Gossip Miami). Vehicle questions, Marat Boxing obligations, tips unchased. No household reply found after 09-26 |
| Valentin Volzhanskiy | 2026-10-03 | — (nothing owed by a source). Tips question to employer (Compass Group) never put to anyone, 20d. Vehicle method decision open. ⚠️ File's 10-01/02 client reply not visible in Julia's Gmail (likely another mailbox) — unsettled. Drive not queried; 6 items unchased |
| Zumfi 2 LLC | 2026-10-03 | A bounded Gmail search after 09-26 found no TNTAP/Tennessee correspondence — TNTAP access unconfirmed 16d; 7004 acceptance unverified; 5 items unchased; Ping/Drive not re-queried. Still named in neither scope nor exclusion table of weekend-ci-sweep.md (2b finding) |
| Zakom Incorporated | 2026-10-03 | — ✅ Gmail catch-up CLEARED 2026-10-03 (unbounded, paged to the end: 75 'Zakom' + 74 owner-surname threads, plus 39 from targeted queries; the earlier ~201 was Gmail's estimate). 🔴 2025 1120-S still UNFILED, 18d past 09-15; no extension confirmation found (03-10 7004 sheet not opened). Drive listings had unread next-page tokens (titles only) — not a named catch-up. Mema Colors/Palm Terra unchanged, no CI file/Double record |

> **CLIENTS WITH NO ROW HERE — and the omission is the point.**
> A row is a *bound* on the next run's searches, so writing one for a client who has never been
> swept would make the next run search from that date forward and **skip their entire history for
> good**. The routine does the right thing with a missing row — its **step 2c** queues the pass:
> **a client in scope with no row gets a one-time full historical sweep, then a row.**
>
> **Computed 2026-09-26 — the merged two-population queue, recomputed fresh from the ledger.**
> Population (i) (no-row clients): entering this run the queue was **3** — Valentin Volzhanskiy,
> Zumfi 2 LLC, Zakom Incorporated — all three carried over unchanged from the 2026-09-19 run note.
> Population (ii) (`⚠️ CATCH-UP OWED` rows): **0** entering this run (both VOICECAPITAL and VOXAGO
> were cleared 2026-08-29 and neither reopened since). **All three population-(i) clients got their
> full pass this run, well inside the ~6-per-run cap — queue drops from 3 to 0.** Two completed
> cleanly (Valentin Volzhanskiy, Zumfi 2 LLC — both now have rows above, no catch-up owed). One
> — **Zakom Incorporated** — finished substantially but not end-to-end (its broad "Zakom" Gmail
> search was only read one page of ~10, ~201 estimated threads) and so got a row **with** a fresh
> `⚠️ CATCH-UP OWED: Gmail` note (see its row above) — **population (ii) is therefore 1 entering
> the next run**, not 0.
>
> **No new population-(i) clients this run** — unlike 2026-09-12 and 2026-09-19, which each found
> newly-scoped clients nobody had counted before, no client was added to `weekend-ci-sweep.md`'s
> scope table between 2026-09-19 and today.
>
> **2b coverage-check findings this run — SIX clients with a CI file named in neither the scope
> table nor the exclusion table of `weekend-ci-sweep.md`, flagged for a human to add their rows
> (this ledger may not edit that file):**
> 1. **Mikayel Shakhyan** (710648) — 4th consecutive flag (previously 09-12, 09-19). Real,
>    Double-connected, active tax-prep work; his full pass already ran 2026-09-19 and he holds a
>    row above — the missing scope-table row is a separate, still-open action.
> 2. **Zumfi 2 LLC** (710614) — 2nd consecutive flag (previously 09-19). Full pass completed this
>    run (see its row above).
> 3. **4TUKAS, LLC** — 4th consecutive flag (previously 08-29, 09-12, 09-19). Prospect, no Double
>    account — gets a cheap bounded Gmail+Drive pass every run, no ledger row owed.
> 4. **Anton & Olga Stenin** (laundry portfolio buyer) — 4th consecutive flag (previously 08-29,
>    09-12, 09-19). Prospect, no Double account — same as 4TUKAS.
> 5. **Mendeleev Inc (Gridin)** — 🆕 NEW this run. Prospect, file created 2026-09-25, no Double
>    account — got its first (unbounded, cheap) Gmail+Drive pass this run, no ledger row owed.
> 6. **SM Group USA Inc. (Kostetskyi)** — 🆕 NEW this run. Prospect, no Double account — got its
>    first (unbounded, cheap) Gmail+Drive pass this run, no ledger row owed.
>
> **Still excluded from both the queue and this ledger, per the standing rule that a row would bound
> a search that is never expensive:** Kompozit USA, 4TUKAS LLC, Anton & Olga Stenin, Mendeleev Inc,
> and SM Group USA Inc. — all five prospects got a cheap bounded (or, for the two brand-new files,
> unbounded first-pass) Gmail+Drive pass this run instead (see the weekly email). Kompozit USA's own
> 30-day proposal window expired 2026-09-18 with still no acceptance/decline recorded, now 8 days
> past expiry and 32 days of total silence since the last call — likely gone quiet unless Julia has
> an off-Gmail channel.

_**Reconciled 2026-08-11**, when the three stalled sweeps (2026-07-25, 08-01, 08-08) were
finally merged to `main`. Baselines now carry the **latest** date each client was actually
swept through — the 08-08 run for most, 08-10 for iKids (a targeted people/ownership pass that
re-read Gmail, Drive and Double) and 08-11 for Denys Melnyk (the organizer-review pilot). **A
human telling us a fact does not advance a baseline** — only an actual pass over the sources does,
because the baseline is what bounds the next run's searches. **All five original Gmail coverage gaps are cleared** (Atman Parts, Best Broker
Realty, Ecoorganic USA, Kolo Florida, Pro Title Agency), as is Gossip Miami's three-source gap.
What remains owed: Artur Tseretsian and Ihor Naum & Olha Levchuk, deferred twice because the
per-run full-pass cap went to the five above — give them the next run's cap. Ping's
`list_client_meetings` needs a client-scoped context the routine does not have; `search_meetings`
(org-wide, semantic) is the working substitute._

_**2026-08-15 run:** used its ~6-full-pass cap on the top of the priority queue — **Artur
Tseretsian and Ihor Naum & Olha Levchuk's coverage gaps are now cleared** (both rows above), and
**4 of Liudmyla's seven** (ZETECH, OPTIC GOLD, ONETWO STRATEGIES, Greenair International) got
their first full historical sweep and a row. All 20 clients with an existing baseline got their
incremental pass through 2026-08-15, except Denys Melnyk (deliberately held at 08-11 — see his
row). **Next run's priority, in order:** the remaining 3 of Liudmyla's seven (CANDRAMAS, AXDIGITAL,
Airtouch), then the TaxDome-backfill six still owed (Vitalii Ivanov & Tetiana Mogylova, Igor
Melomed & Yelena Lovkina, R & G Friendly, Viacheslav Honcharenko, Maria Contreras, Iurii Iakovenko
& Alina Yakovenko), then Grigoriy & Margarita Melomed and M5 Studio Miami. **Also unaccounted for
and not part of any named group** (flagged, not yet actioned): Andrii Tymchenko, VOICECAPITAL INC,
VOXAGO LLC and YMI TRUCKING LLC are in the scope table with real CI content but no row here — the
reconciliation this doc calls for above still hasn't been done for them._

_**2026-08-22 run:** cleared its full coverage-check per weekend-ci-sweep.md steps 2a/2b/2c. **2a
(Double → scope table): zero gaps** — every non-archived `platform: qbo` client is already in the
scope table (checked against both pages of `list_clients`, 146 clients total). A full per-client
Bookkeeping-cadence property scan across all 146 was not run (budget); the one known class of gap
this would catch (a disconnected-QuickBooks client with a Bookkeeping cadence set) is already
covered by Deep Tech Development, already in scope. **2b (client files → scope/exclusion tables):
one hit** — **Kompozit USA** has a CI file but no Double account and is named in neither table;
flagged in the weekly email for a human to add once it becomes a signed client. **2c (first-pass
queue): computed from git file-creation dates + Double platform data** (see the queue box above),
not from the stale "catch-up priority" prose, which predated this run. Used its ~6-full-pass cap on
CANDRAMAS, AXDIGITAL and Airtouch (completing Liudmyla's group of seven — all now have rows) plus
Andrii Tymchenko, VOICECAPITAL INC and VOXAGO LLC (the three oldest non-qbo backlog files). All 27
clients with an existing baseline got their incremental pass through 2026-08-22, including Denys
Melnyk, whose long-held 2026-08-11 baseline finally advanced once the owed full-historical Gmail
pass was completed in the same run. Greenair International's baseline was deliberately **held** at
2026-08-15 despite an incremental pass having run — see that row's note; the correspondence gap
found is a live-risk finding, not a reason to invent a baseline that overstates what was checked.
Chased each client's own open items (step 6/1b) across all 27 incremental clients — see the
per-client rows and the weekly email for ages and deadlines._

_**2026-08-24 — the reconciliation this ledger kept saying it owed is DONE, by hand, and it
closes.** **49 client files = 34 rows above + 11 in the full-pass queue + 3 excluded clients with NO
row here + Kompozit USA.** ⚠️ **Read that third bucket carefully, because the obvious count is
wrong:** the exclusion table in [`weekend-ci-sweep.md`](./weekend-ci-sweep.md) has **FOUR** rows —
MAYS EXPRESS SERVICE, MEGABAI, **Tsminibears LLC** and SETATECH USA — but **Tsminibears also holds a
ledger row above** (it was swept before it was archived), so it is already inside the 34. The
partition is by *where each file is accounted for*, never by table membership; adding the exclusion
table's four to the 34 double-counts Tsminibears and invents a 50th file. Kompozit USA now has its
own scope-table row — the 2026-08-22 run's check-2b finding, actioned. **Nothing is unaccounted
for.** 🛑 **This supersedes the last sentence of the 2026-08-15 paragraph above**, which named Andrii
Tymchenko, VOICECAPITAL INC, VOXAGO LLC and YMI TRUCKING LLC as unreconciled. **Andrii Tymchenko was
fully swept** on 2026-08-22 and holds a plain row. **VOICECAPITAL and VOXAGO hold rows too — but
⚠️ CATCH-UP OWED rows, not completed ones**: their Gmail was read one page deep while the baseline
advanced anyway, so they are queue work, not coverage. YMI TRUCKING is first in the queue. See
[`sweep-health-review.md`](./sweep-health-review.md) §6 → *What to change*, item 1._

_**2026-08-29 run — first run on the prompt Lilian pasted 2026-08-24 (the `⚠️ CATCH-UP OWED` +
two-population queue fix, `AT A GLANCE` coloured by the worst open item, and the no-start-date
wording).** Coverage check per steps 2a/2b/2c: **2a — zero gaps**, all 24 non-archived `platform:
qbo` clients (3 on page 1 of `list_clients`, 21 on page 2, 146 total across both pages) are already
in the scope table; the known Deep Tech exception (disconnected QuickBooks, Bookkeeping cadence
set) is unchanged and already covered; a full per-client Bookkeeping-cadence scan across all 146
was again not run (budget), same as 08-22. **2b — TWO hits**: **4TUKAS, LLC** and **Anton (laundry
portfolio buyer)** both have CI files (created 08-27 and 08-28 respectively) but are named in
neither the scope nor the exclusion table — the same prospect shape as Kompozit USA (no Double
account). Flagged in the weekly email for a human to add their scope-table rows; both got a cheap
bounded Gmail+Drive pass this run instead of a ledger row, per the standing prospect rule. **2c —
the merged two-population queue, computed fresh**: population (i) (no-row clients) stood at **11**
entering this run; population (ii) (`⚠️ CATCH-UP OWED` rows) stood at **2** (VOICECAPITAL,
VOXAGO). **Both VOICECAPITAL and VOXAGO's Gmail catch-ups were read to completion and CLEARED this
run — zero new `⚠️ CATCH-UP OWED` rows were created**, which is the number
[`sweep-health-review.md`](./sweep-health-review.md) §3 gates the subagent decision on (this run's
contribution: **0**). Four population-(i) clients got their first full historical sweep, all
**COMPLETE**: **YMI TRUCKING LLC, VITALII IVANOV & TETIANA MOGYLOVA, Igor Melomed & Yelena
Lovkina, R & G Friendly Inc** — the last two swept jointly at the owner level, which **settled** a
standing ownership ambiguity (R & G Friendly belongs to Grigoriy & Margarita Melomed, not Igor
Melomed). The queue drops from 11 to **7**, named above in priority order; none of the seven carry
`platform: qbo` or a Bookkeeping cadence, so file age alone orders them. **All 31 clients with an
existing baseline (excluding the two catch-up rows and Denys Melnyk, all handled above) got their
incremental pass through 2026-08-29.** Chased every client's own open items (step 6) across all 42
client-touches this run (33 ledgered clients + 4 full-pass-queue clients + 3 prospects + 2
catch-ups) — see the per-client rows and the weekly email for ages, deadlines, and what went
unchased. One finding could not be actioned within this ledger's own scope: an untracked **"7806
Miami LLC"** entity, mentioned repeatedly in Igor Melomed's correspondence with its own tax-filing
needs, has no CI file and is not in the project README's Clients index — flagged in the weekly
email, not created this run (outside the swept batch's assigned scope). A second out-of-scope
correction — the Igor Melomed/R & G Friendly ownership fix belonged in `README.md`'s Clients index
and `FOLLOW-UPS.md` row 33 too, but editing those falls outside this sweep's no-review merge scope
(`clients/`, this file, and `sop-proposals.md` only per `weekend-ci-sweep.md` step 11) — reverted
from this run's diff and flagged in the email for a normal reviewed follow-up instead of being
self-merged._

_**2026-09-05 run — ⛔ IT NEVER RAN TO COMPLETION, AND NO BASELINE IN THE TABLE ABOVE REFLECTS IT.** The Routine
(`trig_015LaKrto6FDKyUwHmZywqjS`, `0 7 * * 6`) **fired on time — 2026-09-05 07:10:26 UTC — and its
run ended `ROUTINE_RUN_STATUS_ABANDONED` with no `finished_at`** (session `cse_016V9wPPT4JCLDTca28ck2UQ`).
Confirmed a second, independent way: **no weekly report email exists for 2026-09-05.** Gmail holds
the 2026-08-22 and 2026-08-29 reports and then stops. Nothing was committed, nothing was emailed,
and **no client file records a SWEEP on that date.** ⚠️ **Say it that way and not "no file mentions 09-05":** seven client files do carry 2026-09-05 — Lilian's own interactive work, plus three PRs that merged to `main` that day — so a reader checking the obvious way finds hits and concludes the run landed. **The absence is of sweep output specifically** (no `Weekend sweep (incremental, baseline …)` log line, no advanced baseline, no report email), not of the date. ⚠️ **The Routine itself is healthy and still enabled** — next
fire **2026-09-12 07:08 UTC** — so there is nothing to re-arm; what failed is the run, not the
schedule. **Every baseline above therefore still reads 2026-08-29, which is correct and must stay
that way**: the gap 2026-08-29 → 2026-09-12 is real, and a baseline advanced to paper over it would
erase two weeks of history for ~40 clients exactly as rule 3's box describes._

_**2026-09-07 — the bounded manual catch-up that followed, and WHY IT IS NOT A SWEEP.** Lilian asked
that day whether the sweep is actually working. The review found the failure above and then ran a
**deliberately narrow** catch-up over the gap — **only the items already carrying a DEADLINE or a
live risk in the 2026-08-29 rows**, on **Gmail only**. ⛔ **No baseline was advanced, and none may be
on the strength of this pass**: Double, Ping, Drive and QuickBooks were not read, and ~36 clients
were not looked at at all. **The 2026-09-12 run must still treat 2026-08-29 as its baseline for
everyone.** What it found, all written into the client files and none of it caught by any automation:
**Deep Tech** — 🟢 Shopify **closed the Balance account on 2026-09-04**, so the ownership transfer is
unblocked, but statement access died with it and the never-downloaded **August 2026 statement** must
now be requested from Shopify Support; the 2026-09-08 chase Routine's premise is obsolete.
**Ecoorganic** — a **return was submitted through CT myconneCT on 2026-09-02** (which return is
unstated) and a **third unread DRS correspondence** landed 2026-09-03. **Airtouch** — eight more
dissolution notices, the countdown down to **9 business days**, all unread; and the sender is
newly identified as a **commercial filing vendor, not Sunbiz** (it mails Labor Day discounts and
also mails CT clients), so the clock is a sales instrument — while the real question, whose entity
it is, is still open. **Best Broker Realty** — the **2026-09-30 BTR renewal** is still uncalendared,
23 days out. 🚧 **One structural limit, now seen twice:** `search.sunbiz.org` is **refused by the
network egress proxy** (HTTP 403 at the CONNECT tunnel, 2026-08-29 and again 2026-09-07). **No
scheduled run will ever settle a Sunbiz question** — those need a person, and the sweep should say
so rather than re-attempting._

_**2026-09-12 run — the first run to actually execute since 2026-08-29 (the 09-05 run died; the
09-07 pass was a bounded manual catch-up, not a sweep).** Baseline correctly treated as 2026-08-29
for every incremental client, per the standing rule above. Coverage check per steps 2a/2b/2c:
**2a — zero gaps**: 23 non-archived `platform: qbo` clients found across both pages of
`list_clients` (141 active clients total), all already in the scope table; the known Deep Tech
exception (disconnected QuickBooks, Bookkeeping cadence set) is unchanged and covered. A full
per-client Bookkeeping-cadence scan across all 141 was again not run (budget). **2b — THREE hits**:
4TUKAS LLC and Anton & Olga Stenin (both already flagged in the 08-29 run, still not actioned by a
human) and 🆕 **Mikayel Shakhyan** — a real, Double-connected client (id 710648, on his individual
record) with active tax-prep work, not a prospect, found in neither table. **2c — the merged
two-population queue, recomputed fresh from the ledger rather than trusted from prior runs' cached
counts (per step 2c's own instruction), found it was NOT 7 but 12** — five clients created after
2026-08-29 had never been counted in any queue (Artem Markarian, Ishkhan Markarian, Vitaliy
Vasyutyk, Mikayel Shakhyan, BOGOPOLSKYY MARAT and YULIANA). Population (ii) (`⚠️ CATCH-UP OWED`
rows) stood at **0** entering this run (both VOICECAPITAL and VOXAGO were cleared 2026-08-29 and
neither reopened this run). Took the oldest six of the twelve for this run's cap, all
**COMPLETE, no catch-up owed**: Viacheslav Honcharenko, Maria Contreras, Iurii Iakovenko & Alina
Yakovenko, Grigoriy & Margarita Melomed, M5 Studio Miami, LILIIA HLEBOVA KOZLOVSKA. The queue drops
from 12 to **6**, named in priority order in the queue box above. **All 37 clients with an existing
baseline got their incremental pass through 2026-09-12** (batches 1–6 of this run), each with a
named chase pass on its own outstanding items. Three prospects (4TUKAS, Anton & Olga Stenin,
Kompozit USA) each got a cheap bounded Gmail+Drive pass, no ledger row, per the standing rule.
**One sensitive-data write was found and corrected before merge**: a client-specific dollar figure
(Setatech's payroll range, surfaced while sweeping Greenair International) was redacted to the
underlying fact only. 🔴 **One session-hygiene incident, contained, not repeated**: a Drive
`search_files` call for Ihor Naum & Olha Levchuk ran without `excludeContentSnippets: true` and
returned full content snippets of both spouses' TINs and their home address into that one
background research step's own transcript — nothing was written to any file, and the finding itself
(that both Form 6166 certificates are complete and genuine) was still saved. Recommended in the
weekly email: delete that step's transcript. 🔴 **Two findings need a human decision, flagged in the
email rather than actioned (outside this run's merge scope to fix)**: **Greenair International's**
Double record was disconnected then archived 2026-09-09/10, three days after the client opened its
2025 organizer, with no recorded reason — candidate for the exclusion table, or a mistake to
reverse. **OneTwo Strategies'** standing K-1 contradiction is now backed by much stronger "filed"
evidence (a client e-signature and an opened organizer, all in one 30-minute window 2026-08-31) but
remains unresolved. Four SOP-proposal candidates were queued (Sunoma, Margate Plumbing, Magnum 152
×2) — see `sop-proposals.md`. Every client's own outstanding items were chased by name; see each
client's row above and the weekly email for exact counts and ages. Sources reached across the run:
Double, Gmail, Ping, Google Drive, and the repo itself. Not reached for most clients this run:
QuickBooks (the MCP is scoped to the firm's own company, not usable per-client) and, for the six
Liudmyla-book clients in batch 5, Drive (flagged as a gap to close next run). `search.sunbiz.org`
remains blocked by the network egress proxy — no scheduled run can settle a Sunbiz question._

_**2026-09-19 run — full run, no interruptions, delegated to 14 parallel subagents (5 for the
full-pass queue, 8 for incremental batches, 1 for the prospect pass) to fit inside one session's
context, per the strategy [`weekend-ci-sweep.md`](./weekend-ci-sweep.md) and
[`sweep-health-review.md`](./sweep-health-review.md) §3 have long recommended and never adopted.**
Baseline correctly treated as 2026-09-12 for every incremental client. Coverage check per steps
2a/2b/2c: **2a — zero gaps**: 23 non-archived `platform: qbo` clients found across both pages of
`list_clients` (142 active clients total), all already in the scope table; a full per-client
Bookkeeping-cadence scan across all 142 was again not run (budget), consistent with every prior
run. **2b — FOUR hits**: 4TUKAS LLC and Anton & Olga Stenin (both still not actioned by a human
since 08-29), Mikayel Shakhyan (still not actioned since 09-12 — now swept for a second time
without a scope-table row existing), and 🆕 **Zumfi 2 LLC** — a new client file (created 2026-09-13,
split out of the Vitaliy Vasyutyk group) named in neither table. **2c — the queue, recomputed
fresh, stood at 9 entering this run** (not the 6 the 09-12 run's own note projected): Valentin
Volzhanskiy and Zakom Incorporated were added to the scope table AFTER the 09-12 run fired, and
Zumfi 2 LLC is a brand-new 2b finding — none of the three had ever been counted in a queue before
today. Took the oldest six for this run's cap, all **COMPLETE, no catch-up owed**: Mykola
Kozlovskyi, Artem Markarian, Ishkhan Markarian, Mikayel Shakhyan, Vitaliy Vasyutyk, BOGOPOLSKYY
MARAT and YULIANA. The queue drops from 9 to **3** (Valentin Volzhanskiy, Zumfi 2 LLC, Zakom
Incorporated), named above in priority order. **All 43 clients with an existing baseline got their
incremental pass through 2026-09-19.** Chased every client's own outstanding items across all 52
client-touches this run (43 ledgered + 6 full-pass-queue + 3 prospects). 🔴 **Four filed-return
findings this run are the headline, and none of them was resolved by the sweep — each is an open
contradiction handed to Lilian/Julia:** Mykola Kozlovskyi's AND Kolo Florida's 2025 returns, and
BOGOPOLSKYY's joint 1040, all show `Filed` in Double while their own working papers still record
unresolved blockers or an unreconciled e-file rejection; separately, Ecoorganic USA, Gossip Miami,
Sunoma, Mobilesource, and Magnum 152 all filed cleanly 09-15/16 (good news, but Sunoma and Magnum
both filed without a formal `EndClose` on their most recent monthly close — flagged, not resolved).
🔴 **Three deadline items either just passed or are about to, all flagged for same-day attention**:
Airtouch's vendor dissolution deadline (09-18) passed with every notice unopened; Vitalii Ivanov's
USPS mail-forwarding order's expiration (09-18) is unconfirmed either way; Mikayel Shakhyan's
extended Form 5472 deadline (09-15) passed with prep still incomplete; Margate Plumbing's Workers'
Comp exemption is 11 days from lapsing with no renewal confirmed. 🟢 **One resolved: M5 Studio
Miami's EIN arrived** (30-1507078, assigned 09-10). 🔴 **A cross-client pattern surfaced three
times independently** (Kolo Florida, Beemold USA, Margate Plumbing) — a recurring Intuit/QuickBooks
payment-failure notice all naming a card tied to one "Vasile Bivol," worth reconciling centrally
rather than per-file. No new SOP-proposal candidates were found this run (all six SOPs referenced
by swept clients were checked against `sop-proposals.md`; nothing new qualified). Sources reached:
Double, Gmail, Ping, Google Drive, and the repo itself, across every client. `search.sunbiz.org`
remains blocked by the network egress proxy. No sensitive-data incidents reached any committed file
this run — two close calls (a personal email address, a client's own Drive-search name collision)
were caught and corrected by the sweeping subagents before writing._

_**2026-09-26 run — full run, no interruptions, delegated to 13 parallel subagents (3 for the
full-pass queue, 9 for incremental batches grouped by owner where clients share a principal, 1 for
the prospect pass) to fit inside one session's context, per the strategy this file and
[`sweep-health-review.md`](./sweep-health-review.md) §3 have long recommended.** Baseline correctly
treated as 2026-09-19 for every incremental client. Coverage check per steps 2a/2b/2c: **2a — zero
gaps**: all `platform: qbo` active clients across both pages of `list_clients` (144 total) are
already in the scope table; the known Deep Tech exception (disconnected QuickBooks, Bookkeeping
cadence set) is unchanged and covered. A full per-client Bookkeeping-cadence scan across all 144 was
again not run (budget), consistent with every prior run. **2b — SIX hits** (see the queue box
above): Mikayel Shakhyan and Zumfi 2 LLC (both still unactioned from prior runs), 4TUKAS LLC and
Anton & Olga Stenin (both still unactioned since 2026-08-29), and 🆕 Mendeleev Inc and SM Group USA
Inc. — two brand-new prospect files, neither yet in either table. **2c — the population-(i) queue
stood at 3 entering this run** (Valentin Volzhanskiy, Zumfi 2 LLC, Zakom Incorporated, carried
unchanged from 2026-09-19); **population (ii) stood at 0.** All three population-(i) clients got
their full pass this run, comfortably inside the ~6-per-run cap: **Valentin Volzhanskiy and Zumfi 2
LLC COMPLETE, no catch-up owed; Zakom Incorporated substantially complete but not end-to-end** (its
broad "Zakom" Gmail search read only the first page of an estimated ~201 threads) — it gets a row
**with** a fresh `⚠️ CATCH-UP OWED: Gmail` note, so **population (ii) is 1 entering the next run.**
**All 49 clients with an existing baseline got their incremental pass through 2026-09-26**, each
with a named chase pass on its own outstanding items. Five prospects (Kompozit USA, 4TUKAS LLC,
Anton & Olga Stenin, Mendeleev Inc, SM Group USA Inc.) each got a cheap Gmail+Drive pass — unbounded
for the two brand-new files, bounded for the other three — no ledger row, per the standing rule.
🔴 **Six findings this run needed direct escalation rather than another sweep, all flagged plainly
in the weekly email, none actioned by this sweep beyond flagging:** Margate Plumbing's Workers'
Comp exemption (FUBA #13719) is now **~4 days from its 2026-09-30 lapse with zero renewal
confirmation** despite the owner being told to renew three weeks ago; Best Broker Realty's BTR
renewal is also **~4 days out**, forwarded twice with zero client reply and still uncalendared;
Mikayel Shakhyan's extended Form 5472 deadline is **11 days overdue** with the return still `wip`;
Airtouch's vendor dissolution deadline passed with five further escalating notices since, all
unread, and a direct `search.sunbiz.org` fetch attempt was refused a third confirmed time (this is
now established as a structural block that will not clear on its own, not a transient failure);
Bogopolskyy's Yuliana has an unanswered Schedule-C description question on a return that is
**already filed**; and Vitaliy Vasyutyk's own 2025 Form 1040 is still `Not Started`, 164 days past
due, despite every company K-1 being available. 🟢 **Two clean resolutions, both closing what last
week's run flagged as urgent:** Vitalii Ivanov's USPS mail-forwarding order did **not** lapse (a
digest confirmed arriving daily 7 days past its stated expiration); Deep Tech's Shopify ownership
transfer to its real owner completed 2026-09-22. 🟢 **Denys Melnyk's K-1 chase, flagged urgent as of
the 09-19 run, is superseded rather than overdue** — Julia ruled 09-21 to file without the K-1s via
Form 8082, and the return was prepared through 09-24; nothing further to escalate there. One SOP
proposal queued (SOP-2026-09-26-01, Masciave Design Studio — a project-numbering-mismatch rule).
🔴 **Three dollar figures were caught in a post-sweep QA grep and redacted before this run's final
commit** — two vendor-billing amounts written into Kolo Florida's file (a Shopify bill, an Intuit
subscription charge) and one invoice amount written into Zakom's file (a Palm Terra contact's paid
invoice) — all withheld to "(amount withheld)" per the two-data-homes rule; no other sensitive-data
patterns (SSNs, 9+ digit runs beyond public Sunbiz/filing numbers, phone numbers beyond pre-existing
firm/IRS fax citations) were found in this run's diff. Sources reached: Double, Gmail, Ping, Google
Drive, and the repo itself, across every client. `search.sunbiz.org` remains blocked by the network
egress proxy — confirmed a third time this run (Airtouch), now established as structural._

_**2026-10-03 run (weekend sweep).** Coverage: **2a** — Double `list_clients` (144 active, 2 pages): every `platform: qbo` client is in scope or exclusion tables → **0 gaps**; ⚠️ the `Bookkeeping`-cadence arm was NOT checked for the ~90 `platform: none` records (would need a properties call per client) — a stated limit, not a clean result. **2b** — **8** client files in neither table: Mikayel Shakhyan (5th flag), Zumfi 2 LLC (3rd), 4TUKAS LLC, Anton & Olga Stenin, Mendeleev Inc, SM Group USA Inc, and 🆕 **ANIMAL EXPERTS LLC** and **GRATEFUL PUPS LLC** (both prospects, files created 09-29, no Double record) — a human must add scope-table rows. **2c** — population (i) no-row clients: **0**; population (ii) `CATCH-UP OWED`: **1 entering (Zakom Gmail) → 0 leaving** (read unbounded to the end). Prospects (Kompozit, 4TUKAS, Anton, Mendeleev, SM Group; Animal Experts and Grateful Pups unbounded first pass) got cheap Gmail+Drive passes and **no ledger row**. All 53 ledger-row clients got the incremental pass (baseline advanced to 2026-10-03); Vitaliy Vasyutyk's was partial (activity logs for 5 of 10 companies — see its row). No full passes this run beyond the Zakom catch-up; none deferred. Work done by 10 parallel workers; ⚠️ items they report as UNCHASED are named in the weekly email._

