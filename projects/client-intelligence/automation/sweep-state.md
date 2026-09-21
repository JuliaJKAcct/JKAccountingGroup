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
| Atman Parts | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: no new Double notes/properties/activity; no client Gmail correspondence found; no new Drive sales-tax filing (Sept not yet seen). All 4 outstanding items re-chased, none arrived: TAXES PASSRDS.txt 30 days, Sch C vs 1120-S 33 days, who-files-sales-tax 33 days, TX franchise-report status 33 days (no live deadline until 2027-05-15). 2 unchased (structural, unchanged): Sunbiz name check (sunbiz.org blocked), Ping bookkeeping-contact gap) |
| BEST BROKER REALTY LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: no note/activity changes; no client reply found since the firm's 09-10 forward. Sept-30 renewal still uncalendared, ~11 days out. Form 8822-B 189 days. 1 deferred: county-certificate PDF still unopened, out of scope) |
| ECOORGANIC USA LLC | 2026-09-19 | 🟢 **Major: the 2025 Form 1120-S was FILED 2026-09-15** (Double project/tasks/Signature property all confirm) — also resolves the previously-unidentified "2025 ECOORGANICUSALLC_1.pdf" (superseded by the filed copy). Resolution of prior blockers is NOT evidenced by the activity log alone — flagged, not asserted. New unopened 3rd DRS correspondence (09-18). CT-941 notice unactioned, 32 days; QuickBooks handover unchanged, 44 days |
| GOSSIP MIAMI LLC | 2026-09-19 | 🟢 **Major: the 2025 Form 1120-S was also FILED 2026-09-15**, K-1 sent to Makalendra same day, signed copy filed 09-17; case notes were NOT updated to reflect it (flagged). Cross-client note: this closes the "file Gossip Miami's 1120-S" half of Bogopolskyy's own blocker (see that row). No movement on DR-26S credit (211 days) or W-9 (7+ months); Sapa's Sunbiz check still network-blocked |
| Kolo Florida Inc | 2026-09-19 | ⚠️ Winding down — the company is closing (Lilian, 2026-08-11). Incremental sweep 2026-09-12→09-19: Gusto payroll contradiction continues (34 days, new 09-17 notice) — and an active WEEKLY Gusto payroll run through 09-17 sits oddly against "winding down"/`Payroll: N/A`; Shopify billing failure **ESCALATED to a suspension warning** (retry 09-22, 27 days); the Intuit/QuickBooks payment-failure notice RECURRED for a THIRD time across this run, each naming a card tied to "Vasile Bivol" and now also seen on Beemold USA's and Margate Plumbing's own notices — a cross-client pattern worth reconciling centrally. Kolo's own 2025 tax project shows `Filed` (2026-08-20) with the same 4-blocker working-paper contradiction as Mykola Kozlovskyi's (see that new row) — not resolved here. No FDOR/Lauderhill correspondence found |
| Pro Title Agency | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: no note/activity changes. Coral Springs address change, IRS 1065-vs-Schedule-C mismatch, and the payroll/Double discrepancy all re-chased, no movement. WLTIC's "Plant Search Statement" invoice still unpaid since 09-09. Owner(Lilian)-vs-Assigned-Staff(Liudmyla) reconciliation unchased for a 3rd run, budget) |
| NEVER GIVE UP KK LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: the 09-02 Sales Tax N/A→Quarterly property change remains uncorroborated by any note/email/meeting. Entity-structure recommendation and BOI report both 67 days, no deadline. 1 unchased: the ambiguous "NEVER GIVE UP, LLC" (no "KK") QuickBooks invoice, not re-attributed) |
| YES TEAM CORP | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: a Gusto off-cycle run tagged "for reimbursements" debited 09-16/paid 09-18, and a new Drive workbook matching the blocked Jun-Aug period was created the same day — suggests the blocked personal-card reimbursement moved, but no evidence Igor ever supplied his purpose answers — flagged for Lilian to confirm directly, no dollar figures written. Other 3 outstanding items (Sunbiz, home state, Mellanni) unchanged) |
| MASCIAVE DESIGN STUDIO LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: 9 aged transaction questions batch-resolved 09-17. EIN/no-Form-2553 case (note 491846) still no movement since 08-13. No SOP proposals) |
| iKids Group LLC | 2026-09-19 | **Ping still cannot help on this client** (its two client Zoom calls predate Ping's index — skipped again per standing instruction). Incremental sweep 2026-09-12→09-19: "Pay FPL bill" task still overdue, ~14 days; a new KATCO Insurance quote thread reveals the venue lacked workers'-comp coverage last year and is shopping policies ahead of opening; two Drive PDFs corroborate the Rest Invest Kyiv invoice's partial-payment split (content not opened). Loan-allocation question, 1065 extension, ITINs, and the third member's tax status all still open, no movement |
| Deep Tech Development Group LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: USPS mail-forwarding Informed Delivery digests continued through 09-18 (the deadline day itself) but none yet confirmed for 09-19 — corroborating, not conclusive; recommend a direct USPS/client check. Case note 503544 (the Shopify case) is now 16 days stale against this file — flag for a rewrite-in-place. No reply found to Julia's 09-07 bank-account question. Gusto "payroll late" reminders were absent this window (a quiet week, not a resolution)) |
| AURA REMODELING LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: one more Double portal transaction question resolved 09-17. All four other outstanding items (Amex/BofA reclass, Chase-card-replacement, invoice-to-deposit mismatch) re-chased, none resolved) |
| Beemold USA LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: 0 new Double notes/activity. Bank-feed reconnection, WF access, income-line ID, and Mercury ●3849/●8192 items all still open, now 51-61 days. 🔴 Cross-client lead **recurred a 2nd time**: a 09-15 Intuit notice again pairs "Vasile Bivol" with Kolo Florida Inc's QuickBooks — see that row) |
| Sunoma Inc | 2026-09-19 | 🟢 **The 2025 return went `notStarted`→`readyForReview`→Filed, all 2026-09-15/16.** The rest of July's close checklist was completed 09-17, but **no `EndClose` entry exists at all for July — the return was filed without a formal close** (flagged, not resolved). New Drive files confirm active pre-filing cleanup (BS cleanup, payroll JE, ADP-vs-QBO recon). Owner requested a 3-year P&L/BS for both stores (already SOP-queued). New unattributed item: "true up loan balances for the car." Donation/Bravo/organizer-draft items unchanged, ages advanced |
| SENSUSTECH LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: 0 new Double activity; the 1120 stays `inProgress` (contrast with sibling Mobilesource, now Filed). 🔴 The Human Interest 401(k) resolution call booked for 09-17 has **no confirmation it happened** — Julia's own 16:08 follow-up ("Are we having a meeting?") went unanswered; recommend confirming directly. Gusto/QBO mapping-sync failure unchanged) |
| Mobilesource Corp | 2026-09-19 | ⚠️ **Contradiction, unsettled** (re-verified only, not resolved) — organizer status still disputed between Double's property and the organizer record itself. 🟢 **The 2025 return was FILED 2026-09-16**, signed copy delivered 09-17. 🔴 **The FL DOR sales-tax audit REACTIVATED** — a direct 09-17 exchange between the GM and the auditor over 2023 Chase/Valley Bank statements (a Jan-Apr 2023 gap) is the first real movement since 08-20. Crypto/1099/NJ-Division-of-Taxation items unchanged) |
| Margate Plumbing Inc | 2026-09-19 | 🔴🔴 **Workers' Comp exemption (FUBA #13719), due 2026-09-30, now 11 days out — chased, still NO renewal confirmation.** Flagging directly rather than waiting for the next sweep. August EndClose formally confirmed Done 09-14. WC/GL premium audit, QBO Payments chargeback dispute, and the "CJM" AR item all unchanged. 🔴 Same Kolo-Florida/"Vasile Bivol" cross-reference recurred (see Kolo Florida's row) |
| MAGNUM 152, INC | 2026-09-19 | 🟢 **The 2025 return was FILED 2026-09-16, skipping `readyForReview` entirely, WHILE July's close checklist had zero task activity this window and no `EndClose` ever fired** — flagged as a decision to confirm with Maria/Julia, not assumed correct. 🔴 New: a full MS4 (store 4) disposition package (Form 8594, PSA, Bill of Sale, Assignment, escrow, JE backup) was uploaded 09-15 — first documentary evidence of that sale's tax treatment. Gunshow-tender mapping error still unresolved (see Pending SOP-2026-08-29-03). Maria confirmed August close is running late (ready ~09-21)) |
| LUMETRO LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: no new Double/Gmail/Ping/Drive hits at all. Tax-filing-treatment quirk still open, ~50 days, no deadline; duplicate Drive folders unchanged) |
| Ecom Beavers LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: quietest window on record — zero new hits across Double/Gmail/Ping/Drive. Post-consult deliverables ~72 days; home-state/sales-tax nexus and the EB2 LLC relationship both still unconfirmed. 0 unchased) |
| Artur Tseretsian | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: all three outstanding items re-chased, none arrived — older child's SSN ~48 days, Rewhip LLC scope ~75 days, Stripe-data question ~84 days. Recurring-payment watch-item unchanged, no 2nd cancellation) |
| Ihor Naum & Olha Levchuk | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: `excludeContentSnippets: true` used on EVERY Drive search this run — **confirmed clean, no repeat of the 09-12 sensitive-data incident**. Chase pass (3 items): duplicate-8802 ask ~136 days, Form 2848 confirmation, and 2023/2024 filed-dates — none moved) |
| Denys Melnyk | 2026-09-19 | 🔴 **Both notes (485225, 490984) re-read in full — confirmed unchanged. THE THREE K-1s' CHASE DATE (2026-09-15) IS NOW 4 DAYS OVERDUE** — no arrival via Double, Gmail (3 search angles including the ex-partner's first name), or Ping. Flagged as the top action item this run — recommend Julia/Lilian be told directly rather than let another week pass) |
| ZETECH LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: **Drive gap closed** — found a "Zetech Passwords" sheet plus 4 duplicate folders, credentials not opened. New facts: August sales tax filed, payment scheduled 09-18; a 5th payroll cancel/re-run instance (09-15/16); "Monthly Sales Taxes" task marked Done 09-16) |
| OPTIC GOLD INC | 2026-09-19 | ⚠️ Chased hard per standing instruction, still nothing: the 2026-08-07 Sunbiz notice (P23000053978) is now **43 days unopened**; the Form 8822-B/IRS-address item is now **~187 days pending**. **Drive re-searched this run (gap closed)** — same old folders, nothing new. 0 unchased) |
| ONETWO STRATEGIES INC | 2026-09-19 | ⚠️ **Contradiction, unsettled** — filed-vs-missing-K-1s re-verified, no new evidence either way. **Drive re-searched this run (gap closed)** — nothing new. New non-sensitive fact: the second contact's linked Double record is a household personal-return file (id 710654), not a second business |
| Greenair International LLC | 2026-09-19 | 🔴 **Still archived — confirmed again via `get_client`** (archivedAt unchanged, 9 days now), zero activity in either direction. Flagged prominently again for Lilian/Julia's decision (move to `weekend-ci-sweep.md`'s exclusion table, or reverse the disconnection). The correspondence gap did NOT close as hoped — now ≈5.5 months unbroken |
| CANDRAMAS LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: Form 2553 late-effective-date outcome still unresolved, ~187 days. New fact: the contact is also linked to a previously-unknown business, WCIRCLE LLC (id 710607), possibly the "Viserkalo" entity mentioned in an earlier note — unconfirmed, no CI file created (out of scope)) |
| AXDIGITAL LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: Ukrainian employee's work-authorization/payroll question still open, ~46 days. Minor: a QuickBooks-deposit/merchant-verification question was resolved same-day by Julia (monitor-only). Unresolved discrepancy flagged, not resolved: `list_contacts` returned only 1 contact vs. the file's "two contacts") |
| Airtouch LLC | 2026-09-19 | 🔴🔴 **Highest priority this run: the vendor's own dissolution deadline ("File by 5pm ET today," 2026-09-18) has PASSED**, and every notice in the five-week escalation remains unopened. No post-deadline confirmation found either way — a human must check today. Sender reconfirmed as the commercial filing vendor (`fl@e.myfilingservices.com`), not Sunbiz. `search.sunbiz.org` still unreachable from automated sessions) |
| Andrii Tymchenko | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: no new facts, re-verification only. The 1095-A/health-coverage contradiction between two internal sources was RE-VERIFIED, not resolved, per instruction. Items now ~28-37 days, no deadlines) |
| VOICECAPITAL INC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19, ordinary pass, no catch-up needed: note 491840 unchanged. New: the firm's own invoice to this client is now ~120 days overdue (no dollar figure written). IRS S-election acceptance and IRS-address correction (8822-B) both re-chased, no movement, ~187 days each. Purpose of the 2026-04-28 Form 2848 fax still unconfirmed, ~144 days) |
| VOXAGO LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19, ordinary pass. Genuinely quiet — no new facts found across Double, Gmail, Ping, or Drive. All standing items re-chased, none moved: DOR liens ~318 days, FDOR account/court fees ~278 days each, annual-report status ~221 days, tangible-goods question ~278 days. 1 unchased: which entity the 2026-03-24 Zoom recap covers) |
| YMI TRUCKING LLC | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: re-confirmed both untracked entity names (Jupiter Digital Solutions LLC, Goncharov Group LLC) via fresh Prime Road Carriers BofA correspondence — real, continuing, no new ownership evidence, no CI file created. A new Drive file noted (title only, not opened). Address (TX vs IN) and who-filed-the-7004 both re-chased, no movement, ~187 days) |
| VITALII IVANOV & TETIANA MOGYLOVA | 2026-09-19 | 🔴 **Priority: USPS mail-forwarding deadline (2026-09-18) — UNCONFIRMED, not established lapsed.** Informed Delivery digests arrived through and including 09-18 itself (no early lapse), but no 09-19 digest, no renewal action, and no client conversation about renewal found anywhere — flagged urgent, needs a direct USPS/client check today. Foreign-entity (5471/8865/8858) classification still open, ~36 days, despite the return being filed. His Double contact links to 4 client IDs total, mapping not re-derived) |
| Igor Melomed & Yelena Lovkina | 2026-09-19 | — (incremental sweep 2026-09-12→09-19, ownership question NOT reopened per instruction: Double activity shows the client opened the 2025 1040 organizer twice on 09-14 (property still reads `Sent`); Julia is actively working the return — asked for Sunoma/Magnum year-end figures, then directly for the personal-tax questionnaire + "Schedule C for Lena's business" (09-14). New lead, NOT confirmed: a possible third business, "Klondike," surfaced in a 09-14 forward from Yelena — flagged as a question, not a fact. Bookkeeping-mismatch and pawnbroker-license items re-chased, no movement) |
| R & G Friendly Inc | 2026-09-19 | — (incremental sweep 2026-09-12→09-19, ownership settled 08-29, not reopened: genuinely quiet — 0 new notes/activity, properties unchanged. PNC→Truist cutover — targeted search, 0 results, still unchecked (no start date on record). The encrypted 2025-08-25 FL DOR "Communication" is STILL not found/opened after two more targeted searches (~390 days old) — recommended again that a human open it directly rather than keep searching) |
| Grigoriy & Margarita Melomed | 2026-09-19 | — (incremental sweep 2026-09-12→09-19: genuinely quiet — 0 new notes/activity/properties. The Oct-Nov 2024 FL DOR "Power of Attorney" thread re-chased, no new correspondence (~332 days). The `honda.pdf`×3 vehicle-disposal lead re-chased via Drive title search, no movement, still unopened. Ping corroborated zero meetings again) |
| Viacheslav Honcharenko | 2026-09-19 | — (first incremental pass since the 09-12 full sweep: zero Double movement. No new Gmail/Drive/Ping hits beyond the automated weekly-sweep digest; the existing 09-18 Karpenko-cluster entry is unchanged, not duplicated. Chase pass: Schedule C position, the Karpenko relationship, and BTR-renewal assignment all re-checked, none moved, no new deadlines) |
| Maria Contreras | 2026-09-19 | — (first incremental pass since the 09-12 full sweep: zero new activity across Double/Gmail/Drive/Ping. Chase pass on the vehicle/internet/repair deduction pattern, home state, and the "Affordable Interior Systems Inc" employer lead: none moved, no deadlines. Genuinely quiet week) |
| Iurii Iakovenko & Alina Yakovenko | 2026-09-19 | — (first incremental pass since the 09-12 full sweep: zero Double activity; project still `inProgress`, unfiled. Chase pass: the "waiting on us" delay is now ~5.5 months with no explanation found anywhere; the Ukrainian PrivatBank lead still unchased (now >2 years old); LLC annual-report ownership still unassigned) |
| M5 Studio Miami | n/a (no Double account) | 🟢 **Headline: the EIN ARRIVED.** A 2026-09-15 email (Lilian → client) attaching the EIN Letter was read in full (permitted — a business EIN, not an identifier): **EIN 30-1507078, assigned 2026-09-10**, entity name matches Sunbiz exactly. The CP575 verification notice (due ~2026-09-24) is not yet on file — new chase item. Noted consequence: the SS-4 designee's authority died the moment the EIN was released, so any further IRS contact now needs a fresh Form 8821/2848. Double-account question re-confirmed settled (still none). Form 2848/line-16/which-investor questions left untouched per standing instruction. `FOLLOW-UPS.md` row 67 (M5's EIN chase) is now stale and needs a normal reviewed edit — out of this sweep's scope to fix |
| LILIIA HLEBOVA KOZLOVSKA | 2026-09-19 | — (first incremental pass since the 09-12 full sweep: both existing notes re-read, unchanged; zero Double activity. Chase pass on all four flagged substantiation items (income document, mileage, digital-asset transaction, youngest dependant) plus the driver's licence and the Jan-Aug head-of-household cost test: none show a closing entry anywhere — same open state as 09-12, now 31 days old (from 2026-08-19). No documents opened) |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |
| Mykola Kozlovskyi | 2026-09-19 | ✅ **First full historical sweep completed 2026-09-19** (queue item, no prior baseline). 🔴 **Headline finding, unresolved: Double shows BOTH his 2025 tax project and Kolo Florida's marked `Filed` (filedAt 2026-08-20 evening, signed PDF filed 16:54), yet the working paper (`projects/tax-returns/mykola-kozlovskyi/2025-form-1040.md`) and `FOLLOW-UPS.md` row 46 — both last touched 2026-08-20 — still read "DO NOT TRANSMIT YET," citing four unresolved blockers** (a K-1 transposition overstating his Form 7203 basis; three unconfirmed Kolo Florida counter deposits that could shrink his K-1 loss/NOL; Kolo's Schedule B 14a; misattached blank pages). No source read today shows these closed before filing — written up as an open contradiction for Lilian to settle, not resolved here. Chase pass: 5 items chased, 0 unchased (W-2 32 days, Sept Marketplace report 31 days, Contract Labor payee identity 32 days, material participation 31 days, three counter deposits 31 days — now more urgent given the filed status); 2 not budgeted (digital-asset transaction, his own bank account). Ping partial (generic noise, a real tool-ranking limitation, not a skipped step) |
| Artem Markarian | 2026-09-19 | ✅ **First ledger row (corroboration pass — queue item; file already carries substantial content from concurrent tax-prep sessions).** New facts: organizer opened 2026-09-15 (still `Sent`, not `Completed`); three now-dissolved LLCs found in his own Gmail history (AMZ TRD LLC, Arvest LLC, GRP APP LLC — all state-dissolved/EIN-cancelled Jan-Feb 2025, no current obligation); a fourth entity, "Three Bricks Group LLC/Corp," is attributed to **Ishkhan**, not Artem, in a 2024-03-07 email — flagged as unsettled attribution, cross-linked in both files. Chase pass on all 5 outstanding items (per-car Turo breakdown, Turo account ownership, the Kona, Turo login, residence/state): no new information on any — per-car breakdown now 18 days pending. Ping partial (client-scoped meeting list unobtainable without a Ping client context; org-wide search mostly cross-client noise) |
| Ishkhan Markarian | 2026-09-19 | ✅ **First ledger row (corroboration pass — queue item).** Confirmed joint Double record `710638` ("Ishkhan Markarian & Oksana Markaryan") — resolves the file's previously-open "his Double id" question. Double properties (`Income Tax: true`, `Tax Return Type: 1040`, `Assigned Staff: Lilian`) confirm the firm DOES prepare his 1040. Three Bricks Group LLC confirmed as his own second (now-dissolved) LLC, FL doc L23000034678, eff. 2025-01-13. Chase pass: the transfer-mechanics question Lilian emailed Julia 2026-09-04 has no reply, 15 days pending, no deadline; QuickBooks admin-handover status unchanged. `list_notes`/`list_activity_log` on his own Double record returned empty. Ping partial (zero hits on client-scoped searches — absence of index, not confirmed-clear) |
| Mikayel Shakhyan | 2026-09-19 | ✅ **First ledger row (queue item — corroboration focus on Ping and Drive, both never searched before per the file's own notes).** Ping read to exhaustion — genuinely nothing there (0 meetings, org-wide semantic search returned only cross-client noise), a real negative not a search gap. Google Drive read to exhaustion, metadata only — found THREE separate "Mikayel Shakhyan" folders across two staff members; canonical one NOT established, recorded as an unresolved contradiction. Double's `Tax Return Type` property changed from `1040` to `1120 Proforma` since 09-07 with no activity-log entry for the edit — closes a prior mismatch literally but raises a new question. 🔴 **The tax project's due date (2026-09-15, the extended IRS deadline) has PASSED by 4 days with prep still `wip` and everything downstream `notStarted`.** Chase pass: all outstanding items (5 client questions, the transaction summary to Julia, the Russian message, position row 83, the 5472-by-eye check, dissolution date, Form 7004 confirmation, 6 unread image scans) unmoved, ages 12-14 days. 🔴 **Still a 2b coverage-gap finding** — his file exists but he is named in neither `weekend-ci-sweep.md`'s scope table nor its exclusion table; flagged again this run for a human to add the row |
| Vitaliy Vasyutyk | 2026-09-19 | ✅ **First full owner-level historical sweep completed 2026-09-19** (10-company group; only the owner file exists, the nine per-company files are still owed separately except Zumfi 2 LLC, which now has its own file — deferred this run, see the queue note below). All nine other entities' 2025 returns are now `Filed` (dates 09-13 to 09-16) — corrected the file's stale claim that all ten carried `Organizer Status: Sent` (actually a mix of `Completed`/`Sent`); `Financials Ready: Ready` sits on six of nine, not two. Two entities (Nika Realty, Fastighet) filed 09-16 — possible one-day-late filing, extension unconfirmed. 🔴 **New, significant gap: the OWNER's own 2025 Form 1040 is `Not Started` despite every company K-1 now being available.** A new group-wide mailing address applies to all companies except Zumfi 2 (not yet confirmed filed with Sunbiz). Chase pass: three invoices now on their 7th reminder round, 178 days unpaid (a collection question, not a CI question); SYS 1/Remodel Master change-of-address 12 days; Zumfi 1 "to be closed" 12 days; owner's 1040 extension unconfirmed, ~157 days past the on-file due date. Ping partial (org-wide semantic searches returned zero hits despite 174 meetings/112 events in scope; the ten company names were not each individually re-run) — recorded as a plain row per the sweeping agent's own judgment, since the shortfall is a narrower Ping slice, not a skipped major source |
| BOGOPOLSKYY, MARAT and YULIANA | 2026-09-19 | ✅ **First ledger row (corroboration pass — queue item; file already very active from concurrent tax-prep work).** 🔴 **Headline: the joint 1040 (Double project 219315) moved to `Filed` on 2026-09-15 16:39:52, right after all six project tasks were bulk-marked Done and a signed e-file authorization was attached twice — but a Wolters Kluwer/ATX support case (#04753704) confirms an e-filing rejection hit this return ("Filer name too long"), worked around by a fix the case itself calls only "partially resolved during the chat," and the working paper (untouched since 2026-09-13) still lists three open blockers (items 17, 19, 22) that were never reconciled against the filed status.** Also found: two Double portal contacts carry two DISTINCT emails, one per spouse — contradicts the file's existing "one shared email" claim, recorded as unsettled with both versions. Yuliana's Schedule C business-description/code — no evidence found she was ever asked, now urgent given the apparent filing. A `Gossip bank docs` Drive folder (shared by Marat 2026-08-10) was flagged for whoever next works the Gossip Miami file. Ping partial (no contact match for a name-spelling variant; `list_client_meetings` needs client context, returned nothing) |

> **CLIENTS WITH NO ROW HERE — and the omission is the point.**
> A row is a *bound* on the next run's searches, so writing one for a client who has never been
> swept would make the next run search from that date forward and **skip their entire history for
> good**. The routine does the right thing with a missing row — its **step 2c** queues the pass:
> **a client in scope with no row gets a one-time full historical sweep, then a row.**
>
> **Computed 2026-09-19 — the first-pass queue, recomputed fresh from the ledger (per step 2c's own
> instruction), not trusted from the prior run's cached count.** Entering this run the queue was
> actually **9**, not the 6 named at the foot of the 2026-09-12 run note: **THREE clients were added
> to `weekend-ci-sweep.md`'s scope table after that run fired and had never been counted in any queue
> before today** — Valentin Volzhanskiy (scope-table row added 2026-09-12, after the run), Zakom
> Incorporated (added 2026-09-13), and **Zumfi 2 LLC**, a NEW 2b coverage-check finding this run: it
> has its own client file (`clients/zumfi-2.md`, created 2026-09-13, split out of the Vitaliy Vasyutyk
> owner-level file) but is named in **neither** the scope table **nor** the exclusion table of
> `weekend-ci-sweep.md` — flagged in the weekly email for a human to add its row (this ledger may not
> edit that file).
>
> This run's ~6-full-pass cap was used on the six oldest of those nine (Mykola Kozlovskyi, Artem
> Markarian, Ishkhan Markarian, Mikayel Shakhyan, Vitaliy Vasyutyk, BOGOPOLSKYY MARAT and YULIANA) —
> **all six COMPLETE, now have rows above.** The queue drops from 9 to **3**, named below in priority
> order (none carry `platform: qbo` or a Bookkeeping cadence, so file/scope-table age alone orders
> them):
>
> 1. **Valentin Volzhanskiy** (710663) — scope-table row added 2026-09-12. Individual 1040, 2025
>    prepared 2026-09-13 but not yet filed/reviewed by Julia; very active concurrent tax-prep content
>    already populates his file — this queue entry is for the CI sweep's own Ping/Gmail/Drive/Double
>    corroboration pass.
> 2. **Zumfi 2 LLC** (710614) — client file created 2026-09-13, split out of the Vitaliy Vasyutyk
>    owner-level file. 🔴 **Also a NEW 2b coverage-gap finding this run** — not yet in
>    `weekend-ci-sweep.md`'s scope or exclusion table. Tennessee LLC, 2025 Form 1065 prepared
>    2026-09-13; a Tennessee state return was found late (established 2026-09-17).
> 3. **Zakom Incorporated** (710612) — scope-table row added 2026-09-13. FL S-corp, 1120-S, currently
>    mid-organizer with active tax-prep content already in the file (blocked, 2025 return NOT
>    prepared as of the review closing 2026-09-13) — this queue entry is for the CI sweep's own
>    Ping/Gmail/Drive/Double corroboration pass.
>
> **Still excluded from both the queue and this ledger, per the standing rule that a row would bound
> a search that is never expensive:** Kompozit USA, 4TUKAS LLC, and Anton & Olga Stenin (laundry
> portfolio buyer) — all three got a cheap bounded Gmail+Drive pass again this run instead (see the
> weekly email). Kompozit's own 30-day proposal window (through ~2026-09-18) has now expired with no
> acceptance/decline recorded — a material change, not a coverage item.
>
> **🔴 A FOURTH 2b finding this run, not part of the queue above because he already has a row as of
> today:** **Mikayel Shakhyan** was found — again — named in neither `weekend-ci-sweep.md`'s scope
> table nor its exclusion table, despite being real, active, Double-connected work. His full pass ran
> this run (see his row above); the missing scope-table row is a separate, still-open action for a
> human.

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
