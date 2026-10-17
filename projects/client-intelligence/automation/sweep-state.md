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
| Atman Parts | 2026-10-17 | 🔴 Sales Tax task due 10-05 still Not started in Double (12d past due). Who files sales tax 61d. Sch C vs partnership: Double still 'Sch C' 61d (Lilian ruled partnership 10-13). TX franchise 61d (deadline 2027-05-15). Two 2848s sent 10-13, signed copies probably in Drive 10-15 (inferred, unopened). Zoom 10-19; a possible '24th' deadline is low-confidence. Unchased: Sunbiz name check, Ping bookkeeping-contact gap |
| BEST BROKER REALTY LLC | 2026-10-17 | County certificate READ 10-17: two receipts (tax years 2025-26 and 2026-27, both paid 7/15), county valid to 2027-09-30, so the SOP/filename conflict is settled. Open: 2026-27 city receipt not in Drive (19d since city 'Active' email 09-28); who paid unknown; Form 8822-B 217d (since 03-14). Next city renewal 2027-09-30. Not the Spanish 'Best Broker Real Estate SL' |
| ECOORGANIC USA LLC | 2026-10-17 | 🔴 CT-941 past-due 60d unactioned; 5 unopened CT DRS/CTDOL items (cluster 44d since 09-03, newest 10-07); QBO admin handover 72d. NEW 10-14: Ukrainian same-name company emailed a dividend-payment PDF (unopened, relevance unknown). No new CT email >=10-10. Unchased: Turo payouts, ATM/cash-deposit Qs, Amazon card, bank-feed backlog, depreciation class (FU 190), CT-PET 2026 (FU 191) |
| GOSSIP MIAMI LLC | 2026-10-17 | 🔴 '09.15.2026 IRS Notice' PDF (saved to Drive 10-07, unchanged) still UNREAD, no response deadline known (18d since 09-29). 2848 sent 10-01 (16d), no signed copy found. Check images 74d; FL sales-tax status 66d; DR-26S credit 240d; 2024 acceptance 66d; Double 'File tax return' (due 09-15) Not started, 32d past. W-9 unknown start. Unchased: Vagaro Oct report, TD reconnect, permits, Sunbiz |
| Kolo Florida Inc | 2026-10-17 | ⚠️ Winding down. Shopify KOLO HOUSE billing still failing after freeze lifted: failures 10-11/13/15, retry 10-17 (55d since first, 08-23). Gusto 'payroll stopped' (08-14) vs Gusto 'payroll is late' notices to 10-15: 64d, unsettled. Oct Sales Tax task 12d overdue. Lauderhill receipt 17d past 09-30. QBO canceled 10-03. Unchased: WC withdrawal, warehouse lease, BAI stock |
| Pro Title Agency | 2026-10-17 | 🔴 Hollywood LBTR expired 09-30 (17d): no renewal evidence in Gmail/Drive >=10-10; a direct city-status check or owner question is still needed. County receipts READ: tax years 2025-26 and 2026-27, valid to 2027-09-30. WLTIC invoice 38d. Coral Springs, 1065-vs-Sch C, payroll/Double: no movement. Owner-vs-Assigned-Staff needs a decision (7th run) |
| NEVER GIVE UP KK LLC | 2026-10-17 | Entity-structure recommendation and BOI report both 95d (since 07-14), no deadline. 09-02 Sales Tax N/A→Quarterly change STILL uncorroborated (6th sweep, 45d). Sept close all Not Started. Firm fee invoice sent via QuickBooks 10-15. Unchased: licensing/export-control, upload/payroll/vehicle items |
| YES TEAM CORP | 2026-10-17 | 🔴 Personal-card reimbursement purpose answers still NOT CONFIRMED, 31d since the 09-16 off-cycle run (likely phone/WhatsApp, ask Lilian). Sept reconciliations (company account + card) still WIP, due 10-01 = 16d overdue. Sunbiz delinquency lead uncorroborated 50d. Mellanni ~4mo; retirement plan ~8.5mo. Unchased: meals-account decision, home state, credentials link |
| MASCIAVE DESIGN STUDIO LLC | 2026-10-17 | Zina 2025 1099 request 23d (since 09-24), no reply found. EIN/no-Form-2553 case 276d since request, note unchanged since 08-13 (65d). Sept close tasks WIP, due 10-10 = 7d overdue. 10-13 client forwarded an entertainment receipt, no firm reply found. Comcast reversal, larger Florida Blue charge, three duplicate Drive folders unresolved. Unchased: bank-feed, sales-tax county |
| iKids Group LLC | 2026-10-17 | 🔴 FPL bill task 42d overdue (due 09-05), still notStarted; no FPL bill/payment found in Gmail. July close untouched ~68d past due. Bank feed unconfirmed 89d. Manager loan question 51d, no reply. 1065 extension unverified (7004 PDF unopened). ITINs ~5mo. New Drive items 10-16 (testing-services quote, expediting invoice). Unchased: KaTom, W-9 sweep, 5 Julia decisions, autopay list |
| Deep Tech Development Group LLC | 2026-10-17 | Double note stale (reads 'waiting on Vitalii'; transfer accepted 09-22, 25d). Aug Balance statement request unconfirmed 25d. Open: Shopify Payments re-setup, Gusto cancellation 73d, Safe Guard 79d, FDOR Q2 demand 65d, USPS forwarding 29d past 09-18. '2025 W2 - Deep Tech' PDF saved to Drive 10-14 (unopened). Unchased: second Drive folder, State Farm form |
| AURA REMODELING LLC | 2026-10-17 | 🆕 10-16 Q3 call (Double note): Julia to model a late S-corp election and return ~10-19 to 10-23, nothing approved. Q3 financials delivered 10-16. Sept close bank-feed task WIP, 7d overdue. Chase Sept statements saved 10-16. Chase card replacement unconfirmed 89+d. Customer invoice unpaid ~9.5mo. Amex/BofA reclass unmoved. Unchased: prior bookkeeper's role, fiscal year-end, credentials link |
| Beemold USA LLC | 2026-10-17 | QBO bank-feed reconnection 89d; Mercury 3849/8192 question 79d (Drive vs Double task name disagree); WF statements 70d; 7/10 income line 64d; Purchase-2704 25d unanswered. Possible firm QBO access loss 10-12 (5d; Beemold impact not established, see Margate). Remortgage letter pending since unknown. Sept recs Done 10-12. Unchased: home state, FYE, canonical Drive folder |
| Sunoma Inc | 2026-10-17 | Auto Pawn Apr-2024 report 111d; donated-inventory deduction 86d; organizer draft 78d; car-loan true-up 33d; Sunoma side of 3-yr P&L/BS 30d; Sept reports request to owner 10d (re-emailed 10-12, 10-15, no reply). July EndClose still In Progress; Sept tasks Done 10-13. Unchased: Bravo license workaround |
| SENSUSTECH LLC | 2026-10-17 | 2025 Form 1120 FILED 10-10 (owner signed 10-09). Sept close Done 10-16. Gusto/QBO mapping failure 66d; Purchase-6850 lease docs 50d; Human Interest 401(k) 38d; Sept insurance receipt 10d; personal-estimated-tax payment from company account unconfirmed 7d. Dup Drive folder 77d; organizer-draft intent 78d. Unchased: audit, crypto/USDT, June reports, home state |
| Mobilesource Corp | 2026-10-17 | 🔴 FL DOR audit: out-of-state invoice summary built 10-05, GM acknowledged 10-06; delivery to the auditor unconfirmed (15d since request 10-02). Jan–Apr 2023 stmts 30d. Sept close Done 10-16; Sept return/payment filed with FL DOR 10-14. USDT 86d; NJ payable 37d; owner crypto 1099 36d; unexpected QBO checking account 2d; Sept write-off question 1d |
| Margate Plumbing Inc | 2026-10-17 | 🔴 WC exemption date 09-30 now 17d PASSED (instruction given 09-04, 43d) — no renewal confirmation in Gmail >=10-10. 🔴 QBO access LOST: Julia emailed owner 10-12; he must re-send an accountant invite; 10-15 'still no access' (5d). WC/GL audits 89d; chargeback 79d; Purchase-5368 25d, Purchase-5408 12d. Mercury IO limit decreased 10-15 |
| MAGNUM 152, INC | 2026-10-17 | Gunshow-tender mapping 58d unanswered; Auto Pawn Apr-2024 report 111d; donation treatment 86d; organizer draft 78d; 3-yr P&L/BS delivery 30d unconfirmed. May–Aug EndCloses still In Progress; Sept close worked 10-13 to 10-17 (Monthly JEs Done 10-17). Third-party billing for Aug–Oct pending 4d. Unchased: Silencer Shop login, Uncat items, Alla Trost JE |
| LUMETRO LLC | 2026-10-17 | Tax-filing treatment ~77d (since ~2026-08-01), no deadline; owner's 2025 returns (SensusTech + personal) signed 10-09, Lumetro not named. Duplicate Drive folders unchanged. Unchased: operating/tax home, FYE, credentials |
| Ecom Beavers LLC | 2026-10-17 | 🔴 Post-consult deliverables ~100d (since 07-09), none sent; 2025 Taxes project FILED 10-16, form type (1120 vs 5472/pro-forma) not stated, 5472-vs-C-corp contradiction unsettled. Engagement start contradictory. EB2 LLC relationship open 64d. Home state/nexus unconfirmed. Bookkeeping catch-up statements added 10-12/16. Unchased: payment-reliability watch |
| Artur Tseretsian | 2026-10-17 | 🔴 Stripe data 103d, Rewhip scope 94d (both past 90). 2025 return FILED 10-15 (Signed). 2025 1095-A file added 10-15 (unopened). Older child's SSN 78d. Rewhip invoice sent 10-13, unpaid as of 10-17. Unchased: addresses, home-office worksheet, loan schedules, external cards, client-review items |
| Ihor Naum & Olha Levchuk | 2026-10-17 | Duplicate-8802 ask ~164d (started 05-06), Form 2848 for Ihor and 4868 for 2025 unconfirmed. NEW 10-16 Zoom: Julia to model S-corp conversion of Aura activity; vehicle purchase; health-insurance decision due 11-01. Unchased: 2023/2024 on-file check, Drive PDF archive, mailing address/home state |
| Denys Melnyk | 2026-10-17 | 2025 return FILED 10-07. Ex-partner K-1s still not arrived (~58d since 08-20 promise) — amendment if they come. Firm fee bank transfer canceled 10-08; no repayment seen as of 10-17 (~9d). Older legacy open-items list (~15) not re-walked. Ping skipped |
| ZETECH LLC | 2026-10-17 | 🔴 Fee-proposal pushback 100d, IRS sole-prop-vs-1120-S mismatch 183d, A2X mapping-fix 81d; no new correspondence. COGS/Veeqo ~38d. Sept sales tax filed; payment scheduled 10-20 (3d). Payroll: 7th cancel/re-run 10-13. Unchased: FYE, contact role labels |
| OPTIC GOLD INC | 2026-10-17 | 🔴 8822-B address correction ~215d and paper 7004 confirmation ~215d, nothing found anywhere. Sunbiz notice (08-07) opened by someone but content unrecorded (~71d). Sept sales-tax report sent 10-16, payment scheduled 10-20; Sept financials sent 10-12. Unchased: business activity/home state/payroll |
| ONETWO STRATEGIES INC | 2026-10-17 | ⚠️ K-1 vs 'filed 08-31' contradiction (2 K-1s, home office) ~187d, needs a direct question to the preparer. Salary/withholding change ~187d, Accountable Plan ~187d, 2024 reemployment PDF ~63d, ACRETIC LLC scope/EIN outcome 21d. Sept financials sent 10-13 |
| Greenair International LLC | 2026-10-17 | 🔴 Archived Double record + disconnected QuickBooks still await a human decision (37d; 6th consecutive week flagged): move to exclusion table or reconnect. QuickBooks renewal outcome unconfirmed 214d. No Greenair hits after 10-10 |
| CANDRAMAS LLC | 2026-10-17 | Form 2553 late-effective-date outcome unrecorded after 215d. WCIRCLE LLC needs a human decision (21d). Sept payroll CONFIRMED by Gusto 10-13 (closed). Unchased: meeting declines |
| AXDIGITAL LLC | 2026-10-17 | 12C RESOLVED 10-14 (IRS closed/accepted per Julia+Lilian; IRS response itself not seen). Julia's 3 open points on the filed 1040 unanswered 10d. Client call request (09-30) 17d. Employee work-authorization ~74d. eBay sales-tax receipts changed → extra tax due (10-16). Sept sales tax pay 10-20. Unchased: credentials link |
| Airtouch LLC | 2026-10-17 | 🔴 8 more vendor notices for AIRTOUCH FLORIDA LLC 10-10→10-16, all UNREAD; ownership/dissolution unconfirmed 56d (Sunbiz blocked from sweep, a person must check). NEW: IRS letter scans + a payment confirmation filed in Double 2025 folder 10-14, content unrecorded (3d). Zoom 09-29 no transcript (18d). Organizer 'Completed' vs missing trail 56d |
| Andrii Tymchenko | 2026-10-17 | 2025 extended deadline 10-15 passed; Double project 'Filed' 10-16 (Lilian), no e-file acceptance found; spouse's separate record shows no filing entry. Health-coverage contradiction unsettled 56d; residency/still-files, estimated-payment check, photo ID 65d; 1095-A vs 1099-A swap 117d |
| VOICECAPITAL INC | 2026-10-17 | Quiet 10-10 to 10-17. IRS S-election acceptance and 8822-B both 215d; 2848 fax purpose 172d; firm's own invoice 149d overdue (amount withheld). Double shows 2025 project Filed while S-election unresolved |
| VOXAGO LLC | 2026-10-17 | Quiet. Nov-2025 FDOR liens 346d, FDOR account/court fees/tangible-goods 306d, annual-report status 249d. 1099-from-payer-side question 28d. Unchased: 03-24 recap entity |
| YMI TRUCKING LLC | 2026-10-17 | Gusto bank-reconnect (due 10-05) 12d past due; Oct 1-15 payroll ran 10-12/13 anyway. TX-vs-IN address and unexplained 7004 filer 215d. Prime Road/Jupiter/Goncharov/ONETWO STRATEGIES (new in 10-14 bank thread) have no CI files; ownership link unestablished |
| VITALII IVANOV & TETIANA MOGYLOVA | 2026-10-17 | Foreign-entity (5471/8865/8858) question 64d unmoved; 2025 return filed 09-01 with it unconfirmed. Residency memo/visa folder unopened 49d; 08-31 visa-folder share requests 47d. USPS digests still arriving through 10-16 (~29d past stated expiry). Unchased: Tetiana's US activity |
| Igor Melomed & Yelena Lovkina | 2026-10-17 | 2025 1040 extended deadline 10-15 PASSED (2d): all 12 project tasks notStarted, no filing/4868 acceptance found. Klondike 2025 category summary re-forwarded to Julia 10-14, still unconfirmed as the Schedule C (28d). Engagement vs Bookkeeping=N/A 64d; sales-tax/pawn-licence 64d; 2023 classification 733d not chased |
| R & G Friendly Inc | 2026-10-17 | ⚠️ Encrypted FL DOR communication of 2025-08-25 still unopened (49d since flagged 08-29) — a person should open it. Double record correction ~64d. PNC→Truist cutover unchecked. Unsettled: Lucky Pawn-branded address (Igor) vs 'no connection'. Unchased: reasonable-comp review, 7004, pawnbroker licence |
| Grigoriy & Margarita Melomed | 2026-10-17 | Nothing moved >=10-10. Encrypted 2024 FL DOR POA correspondence unopened ~694d; mileage/vehicle-sale year unresolved ~218d (honda.pdf unopened); feed-back to rg-friendly ~35d. Unchased: real 2025 filing date, state/language/dependants |
| Viacheslav Honcharenko | 2026-10-17 | 2025 return recorded FILED in Double 2026-10-16 (Lilian). FBAR (due 10-15): no FinCEN acceptance found in his name; one accepted 10-16 for another Honcharenko (relationship unestablished). Schedule C position unsettled 65d; Karpenko relationship 36d; BTR renewal unassigned (09-30 cycle passed); TaxDome 2026-04 thread unread ~186d. Unchased: second-adult identity, sales-tax question |
| Maria Contreras | 2026-10-17 | No movement. Activity behind vehicle/internet/repair deductions 64d; employer unconfirmed 35d; phone bills mentioned 2026-02-20 never seen (~239d). 2025 return filed per Double. Unchased: home state, dependants/spouse |
| Iurii Iakovenko & Alina Yakovenko | 2026-10-17 | 2025 return recorded FILED 2026-10-16 (day after the 10-15 extension deadline by Double's stamp; real e-file date unconfirmed). Julia's 10-15 Double note: substantial-presence analysis. LLC tax classification 64d, PrivatBank-account lead ~942d, annual-report/franchise-tax filer 35d, 1095-A confirmation 35d — none moved |
| M5 Studio Miami | n/a (no Double account) | n/a (no Double account — list_clients 'M5' re-checked 10-17). Statement of Change: courier returned DOS date-stamped confirmation 10-06 (attachments unopened); no reply to client found. Client called it urgent (25d since 09-22). CP575 23d past estimate. 2848 timestamp question ~51d and SS-4 line-16 read-back ~60d open with Lilian |
| LILIIA HLEBOVA KOZLOVSKA | 2026-10-17 | No movement >=10-10; return filed 08-20; Invoice property still Sent. ~11 substantiation items (SSN/EAD, income, payee, home-office, residence, digital-asset, dependant, bank, licence) have no closing record, 59d from 08-19 |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |
| Mykola Kozlovskyi | 2026-10-17 | ⚠️ Filed-vs-blocked contradiction re-verified 10-17, NOT resolved (Double 0 activity, 0 notes, 0 files; 28d from 09-19). W-2 60d, payee 60d, Marketplace 59d, counter deposits 59d, material participation 59d — none arrived. Unchased: digital-asset txn, own bank account |
| Artem Markarian | 2026-10-17 | 2025 1040 FILED (Double 10-14; Ready for Filing 10-13). Turo per-car breakdown, account name, Kona/1099-MISC, Turo login all 46d (since 09-01); Form 7203 basis 45d — no closing record found. Company 1120-S final worksheet saved 10-06 |
| Ishkhan Markarian | 2026-10-17 | Share-transfer mechanics reply 43d, QBO admin handover 72d. 🆕 10-15: Julia uploaded a Statement of Change of Residency TY2025 to the Double inbox and created a 2025 1040 worksheet in Drive — 1040 work started; Double id 710638; project still notStarted with preparer vs Assigned Staff mismatch (unsettled) |
| Mikayel Shakhyan | 2026-10-17 | 2025 project FILED in Double 10-16 (one day after the 10-15 extended date); package/route filed, 7004 date and signer questions not recorded. Client questions 41d, 'tell him' 42d, dissolution date/scans/citizenship 42d; Fun Park USA decision 3d; 2026 pro forma 1120+5472 due 2027-04-15. Double id 710648. Still in neither scope nor exclusion table |
| Vitaliy Vasyutyk | 2026-10-17 | Owner's 2025 1040 now Filed in Double (10-16); IRS acceptance not seen. Invoices 206d unpaid (3 old), 39d (2 newer, no reminder found). Address change (SYS 1/Remodel Master/group-wide) 40d and Zumfi 1 closure 40d unconfirmed. All 10 company activity logs 0 entries since 10-10. New portal contact (spouse) |
| BOGOPOLSKYY, MARAT and YULIANA | 2026-10-17 | ⚠️ Yuliana's business description unanswered 32d after the 09-15 filing (no ask or answer found >=10-10). Working-paper blockers 17/19/22 vs Double 'Filed' still unreconciled (35d). Unchased: vehicle questions, Marat Boxing obligations, tips, 8821/2848 |
| Valentin Volzhanskiy | 2026-10-17 | Double: 2025 project set to Filed 10-16 (day after the 10-15 extended due date); transmission date/IRS acceptance unrecorded, and whether the tips/voucher/signature-date gates closed first is unrecorded. Box-14 tips eligibility never put to the employer, 34d. Invoice open 10d, 2nd reminder 10-14. Delaware LLC unexplained (since 04-2025) |
| Zumfi 2 LLC | 2026-10-17 | ⚠️ TNTAP online access still unconfirmed, 30d since the 09-17 request; no TN correspondence in Gmail >=10-10. TN return (late) not prepared. 1065 filed 09-15; 7004 acceptance unverified (~200d). Bank statements, HELOC, parcel purpose/ID, 2026 TN dates: no movement. Still not in scope table |
| Zakom Incorporated | 2026-10-17 | Double project now 'Filed' (set 10-14) vs file's 1120-S e-filed 10-07: two dates, acknowledgement unrecorded, unsettled. Invoice PAID 10-13. Monthly engagement proposed 10-07 (10d): no signed copy or setup-call evidence found. 2025 7004 confirmation never found (~215d). Owner opened the organizer 10-14. Client questions held (Lilian 09-25). Mema Colors/Palm Terra: no CI file |
| Oleg Zakala & Milana Podrugina | 2026-10-17 | ⚠️ CATCH-UP OWED: Gmail — 2022-2025 thread bodies (46 threads) listed but still unopened; Drive owner-name search read to the end 10-17. 2025 1040 FILED (Double 10-14) — contradiction settled. Open: final 2025 payment plan not recorded as agreed (10d); company monthly proposal unsigned; truck-gain omission amend decision (Julia) |
| Artem Chursinov | 2026-10-17 | 2025 joint 1040 shows Filed in Double (Lilian, 10-16); both 2025 FBARs accepted by FinCEN 10-16. Invoice paid 10-16. Open: IRS acceptance of 2025 and 2024 returns (2024 pending 321d), Julia's decisions D1-D24, 2024 FBAR and Form 8938 amendments, Form 8938 balances. Project tasks all notStarted. Drive not re-searched |
| Vitalii Piliushin (owner of Atman Parts) | 2026-10-17 | Gmail and Ping read to the end 10-17 (WhatsApp, the client's main channel, outside every connector). 🔴 2025 1040: extended due date 10-15 passed 2d ago; Double = Waiting on Client, filedAt empty, 4868 never opened — filing/extension status unconfirmed. Call 2026-10-19 1PM ET. Open: Audi miles/papers, W-9 + exit papers, eBay report, 2848/8821 replacement (Julia), Atman Parts invoices unpaid since 10-06 |
| Evgenii Kliauzov & Valeriia Strazhets | 2026-10-17 | 2025 project Filed in Double 10-13 (preparer Lilian, reviewer Julia); signed PDF saved. No client reply since 10-10. Final worksheet in 'Our calculations' (10-13) — confirm it is the rebuilt version (9d). Client questions (move day, Kona basis, foreign accounts, estimated payments) now carry-forward/amendment items. Ping/Drive not re-searched |
| Kyrylo Kuznetsov | 2026-10-17 | first full historical sweep completed 2026-10-17. Open: formation proposal and registration form promised 2026-07-14, 95d, not found in Gmail; 2025 1040 Filed in Double 2026-10-15, pre-filing items unconfirmed and project tasks Not Started (2d); 1040 engagement/invoice unlocated (4d); late 2025 annual-report LLC unidentified (4d) |
| BOOST YOU LLC | 2026-10-17 | first full historical sweep completed 2026-10-17. Open: Q3 2026 sales-tax return not started, Double task due 2026-10-05 (12d past), DOR cut-off possibly 2026-10-20 (verify); project tasks not ticked since filing 2026-09-13 (34d); what the company does unknown |
| GOSHAKES LLC | 2026-10-17 | first full historical sweep completed 2026-10-17. Open: Q3 2026 sales-tax return not started, task due 2026-10-05 (12d past), DOR cut-off possibly 2026-10-20 (verify); project tasks not ticked since filing 2026-09-14 (33d); what the company does unknown |
| THE ROADSIDE PROJECT LLC | 2026-10-17 | first full historical sweep completed 2026-10-17. Open: Double tasks 'File tax return', 'Follow up on tax payments', 'Send final returns' Not Started since filing 2026-09-13 (34d), K-1 delivery unconfirmed; what the company does unknown |

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

_**2026-10-03 run (weekend sweep).** Coverage: **2a** — Double `list_clients` (144 active, 2 pages): every `platform: qbo` client is in scope or exclusion tables → **0 gaps**; ⚠️ the `Bookkeeping`-cadence arm was NOT checked for the ~90 `platform: none` records (would need a properties call per client) — a stated limit, not a clean result. **2b** — **8** client files in neither table: Mikayel Shakhyan (5th flag), Zumfi 2 LLC (3rd), 4TUKAS LLC, Anton & Olga Stenin, Mendeleev Inc, SM Group USA Inc, and 🆕 **ANIMAL EXPERTS LLC** and **GRATEFUL PUPS LLC** (both prospects, files created 09-29, no Double record) — a human must add scope-table rows. **2c** — population (i) no-row clients: **0**; population (ii) `CATCH-UP OWED`: **1 entering (Zakom Gmail) → 0 leaving** (read unbounded to the end). Prospects (Kompozit, 4TUKAS, Anton, Mendeleev, SM Group; Animal Experts and Grateful Pups unbounded first pass) got cheap Gmail+Drive passes and **no ledger row**. All 52 ledger-row clients swept this run got the incremental pass (baseline advanced to 2026-10-03); Vitaliy Vasyutyk's was partial (activity logs for 5 of 10 companies — see its row). No full passes this run beyond the Zakom catch-up; none deferred. Work done by 10 parallel workers; ⚠️ items they report as UNCHASED are named in the weekly email._

_**2026-10-10 run (weekend sweep).** Coverage: **2a** — Double `list_clients` (144 active, 2 pages): every `platform: qbo` client is in the scope or exclusion tables → **0 gaps**; ⚠️ the `Bookkeeping`-cadence arm was again NOT checked for the ~100 `platform: none` records (a properties call per client) — a stated limit, not a clean result. **2b** — **10** client files in neither table: Mikayel Shakhyan (6th flag), Zumfi 2 LLC (4th), 4TUKAS LLC, Anton & Olga Stenin, Mendeleev Inc, SM Group USA Inc, ANIMAL EXPERTS LLC, GRATEFUL PUPS LLC, and 🆕 **EVERGLADES APPLIANCE REPAIR, LLC** and **TEXTURAL LLC** (both prospects, no Double record) — a human must add scope-table rows. **2c** — population (i) no-row clients: **4** entering (Artem Chursinov, Vitalii Piliushin, Oleg Zakala & Milana Podrugina, Evgenii Kliauzov & Valeriia Strazhets — all in scope but never ledgered) → all four got their full pass and now hold rows; population (ii) `CATCH-UP OWED`: **0** entering → **2** leaving (Oleg Zakala: Drive/Gmail bodies only partly read; Vitalii Piliushin: Gmail/Ping/WhatsApp unreachable or illegible). Prospects (Kompozit, 4TUKAS, Anton, Mendeleev, SM Group, Animal Experts, Grateful Pups bounded; Everglades, Textural unbounded) got cheap Gmail+Drive passes and no ledger row. 52 incremental passes (baseline advanced to 2026-10-10; M5 Studio Miami keeps its n/a baseline). None deferred. Work done by 10 parallel workers; items they report UNCHASED are named in the weekly email._

_**2026-10-17 run (weekend sweep).** Coverage: **2a** — Double `list_clients` (146 active, 2 pages): every `platform: qbo` client is in the scope or exclusion tables → **0 gaps**; ⚠️ the `Bookkeeping`-cadence arm was again NOT checked for the ~100 `platform: none` records — a stated limit, not a clean result. New Double records since 10-10 with no CI file (Roberto Zavarce & Yuliia Kononova, Maksym Isakov, Annreal Family, Albina Zinnurova, Rock Wealth, Wealth Bay) are non-QuickBooks and were not assessed further. **2b** — **10** client files in neither table, unchanged from 10-10: Mikayel Shakhyan (7th flag; Double id 710648), Zumfi 2 LLC (5th), 4TUKAS LLC, Anton & Olga Stenin, Mendeleev Inc, SM Group USA Inc, ANIMAL EXPERTS LLC, GRATEFUL PUPS LLC, EVERGLADES APPLIANCE REPAIR, LLC, TEXTURAL LLC — a human must add scope-table rows. **2c** — population (i) no-row clients entering: **6** (Kyrylo Kuznetsov, BOOST YOU, GOSHAKES, THE ROADSIDE PROJECT — all four got their full pass and now hold rows — plus Andrii Kravchenko and Andrey Popov & Galina Bogina, whose files are newest (2026-10-15) and were DEFERRED by the cap with no ledger row); population (ii) `CATCH-UP OWED` entering: **2** → **1** leaving (Vitalii Piliushin cleared: Gmail and Ping read to the end; Oleg Zakala rewritten: Drive read to the end, 46 older Gmail thread bodies still unopened). Nine prospects got cheap Gmail+Drive passes, no ledger row (only Anton & Olga Stenin had new facts; closing 2026-10-26). 55 incremental passes (baseline advanced to 2026-10-17; M5 Studio Miami keeps its n/a baseline; Tsminibears is excluded). Work done by 13 parallel workers; items they report UNCHASED are named in the weekly email. Pattern worth reading: ~20 clients' 2025 returns were marked Filed in Double on 10-13 to 10-16 with child tasks still Not Started and no IRS acceptance seen._
