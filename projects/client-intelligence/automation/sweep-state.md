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
| Atman Parts | 2026-09-26 | — (incremental 09-19→09-26: no movement anywhere; all 4 open items re-chased, none arrived — PASSRDS.txt 37 days, Sch C vs 1120-S 40 days, who-files-sales-tax 40 days, TX franchise-report 40 days (no live deadline until 2027-05-15); no September sales-tax filing PDF found yet in the filed-returns folder — a bounded search result, not evidence a period was missed. 2 unchased: Sunbiz name check, Ping bookkeeping-contact gap) |
| BEST BROKER REALTY LLC | 2026-09-26 | 🔴 **Sept-30 BTR renewal now ~4 days out** — Julia re-forwarded the 09-10 city notice to the client a SECOND time (09-25), still zero client reply on either forward, still no calendar entry. June-2026 close status flip-flopped Not Started→In Progress→Not Started within 5 minutes (Liudmyla, 09-21) — flagged for confirmation. Form 8822-B 196 days. 1 deferred: county-certificate PDF still unopened) |
| ECOORGANIC USA LLC | 2026-09-26 | ⚠️ Contradiction re-verified, NOT resolved: the 1120-S shown Filed 09-15 — no source found this run addressing whether the bonus-depreciation statement, per-shareholder K-1/basis split, ≥13 unresolved 1099 findings, or the Outside-services classification were actually settled before transmission. New CT Secretary of State Business Address Change filing (#0014271709) filed & Approved 09-23. Firm invoice #2305 sent 09-23 and a Zelle payment received 09-25 (no dollar figures written; not confirmed which invoice it settles). CT-941 past-due notice unactioned, 39 days; a 3rd DRS correspondence remains unopened) |
| GOSSIP MIAMI LLC | 2026-09-26 | ⚠️ Contradiction re-verified, NOT resolved: the joint 1040 (Bogopolskyy) shows Filed 09-15 with an ATX e-file-rejection case still only "partially resolved" and 3 working-paper blockers (items 17/19/22) unaddressed anywhere found. DR-26S credit claim still not filed, 219 days; W-9 for the 1099-NEC contractor still not requested, underlying deadline 236 days past. Victoria Sapa's Sunbiz check not re-attempted (network-egress block confirmed structural). A pre-baseline Gmail lead surfaced by accident bearing on whether Sapa holds a minority interest — NOT folded in as a finding of this pass per the baseline rule, flagged for a human to decide whether to open deliberately) |
| Kolo Florida Inc | 2026-09-26 | ⚠️ Winding down (Lilian, 2026-08-11). ✅ July sales-tax return confirmed FILED and PAID (FDOR e-Notices + Double task Done, 09-21). 🔴 Shopify store "KOLO HOUSE" escalated from a warning to an actual FREEZE, 09-23 — takes the wind-down decision on Shopify out of the firm's hands. Intuit/QuickBooks billing-failure notices continue (09-19, 09-24), still tied to Vasile Bivol's card and still bundled with an unrelated company ("2115 NE 54th CT LLC") — same-account question still unestablished. Gusto payroll-late notices continue (09-20/22/24); the "payroll stopped" vs "Gusto still billing" contradiction now spans 43+ days. Filed-vs-4-blockers contradiction (cross-ref Mykola Kozlovskyi) re-verified, unresolved) |
| Pro Title Agency | 2026-09-26 | — (incremental 09-19→09-26: no note/activity changes; no client reply found on any thread, including a broad Gusto search run for an unrelated client. WLTIC's "Plant Search Statement" invoice (ref A12495) still unpaid, 17 days. Coral Springs address change, 1065-vs-Schedule-C mismatch, and payroll/Double discrepancy all re-chased, no movement. Owner(Lilian)-vs-Assigned-Staff(Liudmyla) reconciliation NOT chased for the 4th run running — flagged explicitly as needing a direct decision, not a search) |
| NEVER GIVE UP KK LLC | 2026-09-26 | — (incremental 09-19→09-26, third corroboration attempt: the 09-02 Sales Tax N/A→Quarterly property change STILL not corroborated by any note/email/meeting across 3 consecutive sweeps. Entity-structure recommendation and BOI report both 74 days, no deadline. The ambiguous "NEVER GIVE UP, LLC" (no "KK") QuickBooks invoice re-chased directly again — still unresolved either way) |
| YES TEAM CORP | 2026-09-26 | 🔴 Answer to this run's specific chase: personal-card reimbursement (06/20–08/31) still NOT CONFIRMED RESOLVED, 10 days blocked — a targeted search on Igor's own address plus a 200+-result firm-wide Gusto sweep found nothing either way; the answer likely arrived by phone/WhatsApp, outside reach — recommend Lilian confirm directly. Sunbiz Annual Report delinquency lead still uncorroborated across 5 sweeps, 29 days. Mellanni invoice-format ~3.5 months; retirement plan ~8 months) |
| MASCIAVE DESIGN STUDIO LLC | 2026-09-26 | EIN/no-Form-2553 case (note 491846) still no movement since 08-13. New unanswered request: 2025 1099 for "Zina" (09-24). Vendor-ID/project-coding backlog closed via Double questions (Kanas Business Group, Permit Cleaners, Xpress Rendering) — revealed a project-numbering mismatch: the client's own project numbers don't exist in QuickBooks' project list, so the client had to be asked for name/address instead — SOP-2026-09-26-01 queued. Comcast/Xfinity pattern REVERSED (dropped sharply in September, corrects the prior "3-month rise" framing)) |
| iKids Group LLC | 2026-09-26 | "Pay FPL bill" task CONFIRMED overdue via list_tasks (due 09-05, now ~21 days) — corroborated independently by the recurring-expense monitor: FPL hasn't posted in the ledger for 3 straight months (July/Aug/Sept), a genuine non-payment not task hygiene. KATCO builder's-risk policy confirmed current through 2026-12-03; workers'-comp requote still open, target opening ~2 months out. Two new possible recurring charges (Maryna Supanta, Denys Rudovol) plausibly tied to the Aug-13 staffing note. New furniture invoice (Atlantic Express Corp, 09-22) — a plausible capitalization candidate, not yet booked. Loan-allocation question, 1065 extension, both ITINs, third member's tax status all still open, no movement. Ping still cannot help (index predates this client's calls)) |
| Deep Tech Development Group LLC | 2026-09-26 | 🟢 The Shopify ownership transfer to Vitalii Ivanov is COMPLETE — Julia deactivated Shopify Payments and Vitalii accepted the transfer, both 09-22 18:19/18:39 UTC (found 4 days later this sweep). Left open, neither confirmed done: Vitalii re-setting up Shopify Payments with the same bank account, and the firm's request to Shopify Support for the lost August 2026 Balance statement. Double note 503544 is now one step behind this file (still reads "waiting on Vitalii") — flagged for whoever next opens Double, not corrected there. Gusto cancellation question ~52 days unactioned. USPS mail-forwarding digest for "TETIANA" still arriving (mild, not conclusive, evidence of active forwarding)) |
| AURA REMODELING LLC | 2026-09-26 | T-Mobile and Intuit/QuickBooks both failed to post this month after posting on schedule in July/August — worth checking the card on file. New possible recurring charge: Zelle to "Olya" (5 occurrences), plausibly tied to the documented personal/business commingling pattern. Invoice #1089 re-confirmed still unpaid (not established as the same item as the original January-2026 invoice). Amex/BofA reclass and Chase-card-replacement items unmoved) |
| Beemold USA LLC | 2026-09-26 | New unanswered Double question (Purchase-2704, "what is this for?", to Vasile Bivol, 09-22) distinct from the older 7/10 income-line question. 🔴 Kolo Florida/"Vasile Bivol" QuickBooks-billing-failure cross-reference recurred a 2nd time (09-19 and 09-24) — see that row. Bank-feed reconnection, WF statement access, the 7/10 income-line ID, and Mercury card items all still open, 43-68 days) |
| Sunoma Inc | 2026-09-26 | August 2026 EndClose formally marked Done 09-21, but July's EndClose is still "In Progress" — the close skipped straight to August without ever formally closing July (sharper version of last week's finding). Bravo access confirmed running on a workaround login since the firm's own licence never worked. Donation item ~65 days; organizer-draft-vs-filed contradiction still unsettled, ~57 days; "true up loan for the car" unmoved; owner's 3-year P&L/BS request — Sunoma's own half not confirmed delivered) |
| SENSUSTECH LLC | 2026-09-26 | 🔴 Human Interest 401(k) resolution — no confirmation the 09-17 call ever happened, for a second straight week. Julia's 09-17 follow-up ("Are we having a meeting?") remains unanswered, now 17 days — recommend escalating directly rather than another sweep. 2025 Form 1120 confirmed still `inProgress`. Gusto/QBO mapping-sync failure ~45 days, unchanged) |
| Mobilesource Corp | 2026-09-26 | No further movement on the FL DOR sales-tax audit since last week's document exchange — confirmed silent, watching. Organizer-status contradiction re-verified only, not resolved. USDT/crypto deposit and NJ-payable items both re-chased, no movement) |
| Margate Plumbing Inc | 2026-09-26 | 🔴🔴 Workers' Comp exemption (FUBA #13719), due 2026-09-30 — NOW ~4 DAYS OUT, still ZERO confirmation of renewal despite Julia telling the owner to renew directly with the State of Florida on 09-04. Sharpest open item across the whole roster — raise directly today, do not wait for Saturday. Mercury IO credit-limit decrease (09-23), a 5-week pattern. New unidentified sender dferguspawn@gmail.com sent "August bills paid" (9 attachments, not opened) — flagged for Maria to identify. Kolo Florida/"Vasile Bivol" cross-reference recurred AGAIN twice (09-19, 09-24) — 4 occurrences on record) |
| MAGNUM 152, INC | 2026-09-26 | July close-checklist activity RESUMED 09-23 (21 task actions in one day) after last week's zero — but July's EndClose is still "In Progress," and so is August's. Gunshow-tender mapping error still unresolved, now 37 days since Julia's flag (SOP-2026-08-29-03 pending). New MS4 (store 4) disposition package uploaded 09-15 — first documentary evidence of that sale's tax treatment. Reports delivered to Igor 09-24, three days later than Maria's promised 09-21) |
| LUMETRO LLC | 2026-09-26 | — (incremental 09-19→09-26: zero Double/Gmail/Drive movement; only Gmail hit was a routine team birthday email. Tax-filing-treatment quirk still open, ~57 days, no deadline; duplicate Drive folders unchanged) |
| Ecom Beavers LLC | 2026-09-26 | A Wise invited/accepted pair (09-21) under Julia's own name downgrades — does not confirm or kill — the 2026-09-03 EB2-LLC Wise lead; now read as probably the firm's own banking setup. Post-consult deliverables 79 days pending; home-state/nexus and the EB2 LLC relationship both still unconfirmed) |
| Artur Tseretsian | 2026-09-26 | — (genuinely quiet week; both notes re-read in full, unchanged. All 3 outstanding items re-chased, none arrived: older child's SSN ~55 days (client's channel is WhatsApp, outside the digital sweep), Rewhip LLC scope ~82 days, Stripe-data question ~91 days. No 2nd recurring-payment cancellation found) |
| Ihor Naum & Olha Levchuk | 2026-09-26 | — (quiet; `excludeContentSnippets: true` used on every single Drive call again — confirmed clean, no repeat of the 09-12 incident. Duplicate-8802 ask ~143 days, Form 2848 confirmation and 2023/2024 filed-dates still open, deprioritized since the certificates already arrived and were confirmed genuine 09-12) |
| Denys Melnyk | 2026-09-26 | ✅ The K-1 chase is superseded, not overdue: Julia ruled 2026-09-21 to stop waiting and file WITHOUT the K-1s — Form 8082 (Notice of Inconsistent Treatment) per silent S-corp, reporting the received sum on Schedule C for the one that paid him and zero (with explanation) for the two silent ones. By 09-24 the 2025 Form 1040 was prepared in ATX, read back page-by-page, revised, and a client-acknowledgement letter drafted (all Lilian's direct tax-prep work, not this sweep — see the working paper). Two items genuinely still open: addresses of the two silent companies (Lilian to supply) and confirming the corrected car-loan-interest ATX entry route doesn't double up with the vehicle worksheet) |
| ZETECH LLC | 2026-09-26 | First clean Gusto AutoPilot payroll cycle on record (Sep 12-18 pay period) after five straight cancel/re-run instances — a data point, not a resolution. A2X mapping-fix confirmation 60 days; fee-proposal pushback 79 days; IRS sole-prop-vs-1120-S mismatch still unresolved, no natural chase thread. COGS/Veeqo discrepancy ~16-17 days, no follow-up found) |
| OPTIC GOLD INC | 2026-09-26 | ⚠️ Third consecutive quiet sweep (09-12, 09-19, 09-26) on both headline items — these need a person to act, not another sweep. The 2026-08-07 Sunbiz notice (P23000053978) now ~50 days unopened; Form 8822-B address correction now ~194 days pending. Drive re-searched, same folders, nothing new) |
| ONETWO STRATEGIES INC | 2026-09-26 | ⚠️ Contradiction re-verified, NOT resolved — filed-vs-missing-K-1s (2242 Monroe LLC, Porcupine Partnership) and the home-office deduction, now ~166 days, against a return shown Filed with a client e-signature (08-31). Needs a direct question to whoever prepared it, not another search. New, unestablished lead: the primary contact formed a new Delaware entity, ACRETIC LLC, via Harvard Business Services (09-23) — relationship to this client's scope not established) |
| Greenair International LLC | 2026-09-26 | 🔴 STILL ARCHIVED, confirmed a THIRD consecutive week (16 days, nobody deciding) — flagged again for a human decision (move to the exclusion table, or reverse the disconnection). Correspondence gap did not close as hoped — now ≈6 months unbroken) |
| CANDRAMAS LLC | 2026-09-26 | WCIRCLE LLC corroborated as a real, ACTIVE filing relationship — Sunbiz incorporation receipt (2025-09-16), EIN letter, Articles (2025-09-23), and a 2026 Annual Report paid 2026-04-23 — not obviously the "zero activity, Viserkalo" entity from the 08-31 call note; flagged for a human to decide what it is and whether it needs its own CI file (no file created). Form 2553 late-effective-date outcome still unresolved, ~194 days) |
| AXDIGITAL LLC | 2026-09-26 | Contact-count discrepancy RESOLVED as far as this sweep can settle it: `list_contacts` returned exactly one portal contact on two consecutive weekly sweeps (09-19, 09-26) — the file's earlier "two portal contacts" description marked superseded, not deleted. Ukrainian employee's work-authorization/payroll question still open, ~53 days) |
| Airtouch LLC | 2026-09-26 | 🔴🔴 The vendor's 09-18 "final" dissolution deadline passed, and the vendor sent FIVE MORE escalating notices since (09-20, 21, 23, 24, and a sixth "final" deadline 09-25) — all still individually confirmed UNREAD. A direct `search.sunbiz.org` fetch attempt this run was refused by the network egress proxy — the same structural block seen 08-29 and 09-07, now confirmed a THIRD time; this will not clear on its own. No source has confirmed whether AIRTOUCH FLORIDA LLC was actually dissolved. Someone needs to open Sunbiz by hand today) |
| Andrii Tymchenko | 2026-09-26 | — (quiet; note 447824 re-verified only, per instruction, not resolved — unchanged since 06-22. Health-coverage contradiction (migrated TaxDome note vs. native note) still open, ~35 days; residency/whether-firm-still-files question ~44 days) |
| VOICECAPITAL INC | 2026-09-26 | — (quiet; note 491840 unchanged. IRS S-election acceptance and 8822-B address correction both ~194 days; 2848 fax purpose ~151 days; firm's own overdue invoice now ~128 days (no dollar figure written)) |
| VOXAGO LLC | 2026-09-26 | — (quiet; catch-up cleared 08-29, no new gap this run. Note 491841 unchanged. DOR liens ~325 days, FDOR account/court fees ~285 days each, annual-report status ~228 days, tangible-goods question ~285 days. The 1099 question surfaced via Valentin Volzhanskiy's payer-side check (09-19) was NOT independently re-chased this run) |
| YMI TRUCKING LLC | 2026-09-26 | — (quiet; TX-vs-IN address and the unexplained 7004 filer both ~194 days. The two untracked entity names (Jupiter Digital Solutions LLC, Goncharov Group LLC) were NOT re-corroborated this run — a genuinely quiet week, not a retraction. One new unopened Drive file noted, title only) |
| VITALII IVANOV & TETIANA MOGYLOVA | 2026-09-26 | ✅ USPS mail-forwarding deadline question RESOLVED: the order did NOT lapse — a Daily Digest addressed to Tetiana arrived every day 09-19 through 09-25 inclusive, 7 days past the stated 09-18 expiration; reason unclear (auto-renewal, a longer real term, or an imprecise stated date) — read as "still forwarding," not "permanently fixed." Foreign-entity (5471/8865/8858) question on the 4 Ukrainian companies still open, ~43 days, unmoved despite the 2025 return already filed 09-01) |
| Igor Melomed & Yelena Lovkina | 2026-09-26 | Sunoma Inc and Magnum 152 invoices both paid via QuickBooks 09-22 (dollar amounts seen, deliberately withheld). New unattributed lead: an email from dferguspawn@gmail.com ("August bills paid," 09-23) doesn't match either known Melomed-family mailbox — flagged, not assumed to be this client's. Klondike/Schedule-C-for-Lena question and the engagement-vs-Double-column reconciliation both unmoved, ~43 days. Sales-tax/licensing position and the 2023 classification question NOT chased this run, budget) |
| R & G Friendly Inc | 2026-09-26 | — (genuinely quiet; ownership settled 08-29, not reopened. Double-record correction still uncorrected, ~43 days. PNC→Truist cutover check — no movement, no start date on record. The 2025-08-25 encrypted FL DOR communication still not found/opened, now ~397 days — recommended again that a human open it directly) |
| Grigoriy & Margarita Melomed | 2026-09-26 | — (genuinely quiet; vehicle/mileage (honda.pdf×3) and the 2024 FL DOR POA thread both re-chased, no movement. ⚠️ A pre-existing day-count on the POA item ("332 days" as of 09-19) looks arithmetically off by roughly a year against a plain calendar count from 2024-11-22 — extended by the same convention to 339 rather than silently corrected; flagged for a human to check the base figure) |
| Viacheslav Honcharenko | 2026-09-26 | — (first ordinary incremental pass since the 09-19 full sweep; genuinely quiet — zero Double movement, no new Gmail/Drive/Ping hits beyond the automated digest. Schedule C position, the Karpenko relationship, and BTR-renewal assignment all re-checked, none moved, no new deadlines) |
| Maria Contreras | 2026-09-26 | — (first ordinary incremental pass since the 09-19 full sweep; zero new activity across Double/Gmail/Drive/Ping. Vehicle/internet/repair deduction gap, home state, and the "Affordable Interior Systems Inc" employer lead all unmoved, no deadlines) |
| Iurii Iakovenko & Alina Yakovenko | 2026-09-26 | — (first ordinary incremental pass since the 09-19 full sweep; zero Double activity, project still `inProgress`, unfiled. The "waiting on us" delay has now crossed SIX MONTHS (~198 days since the 03-12 organizer completion) with still no source anywhere explaining it. Ukrainian PrivatBank lead unchased, now well over two years old. LLC annual-report/franchise-tax ownership still unassigned) |
| M5 Studio Miami | n/a (no Double account) | 🆕 New urgent client request, 09-22: file a Sunbiz Statement of Change moving the entity's principal/mailing address off a PMB in Miramar, FL to the firm's own Miami office, because Bank of America won't open the business account against a PMB and the client needs it for a capital transfer — forwarded to Lilian same day, no reply to the client or filing confirmation found. Corroborates the domestic-fax-routing assumption in §5 (registered agent confirmed as the firm, 09-22). CP575 verification notice still not on file, now 2 days past its own ~09-24 estimate. ⚠️ The signed Form 2848 file's Drive metadata now shows a 09-22 created/modified timestamp differing from the 08-27 one on record — unexplained, flagged for Lilian, PDF not opened) |
| LILIIA HLEBOVA KOZLOVSKA | 2026-09-26 | — (quiet; both notes re-read in full, unchanged; zero Double activity. All 6 substantiation items re-chased via Gmail/Ping, none arrived — same open state as 09-19, now 38 days old. Her Invoice property stayed "Sent" while both her ex-husband's and Kolo Florida's moved to "Paid" this window — noted, not flagged as a problem) |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |
| Mykola Kozlovskyi | 2026-09-26 | ⚠️ Contradiction re-verified, NOT resolved (per instruction) — Double still shows both his 2025 1040 and Kolo Florida's 1120-S filed/signed/paid; no note, activity-log entry, email or document found anywhere closes the four 2026-08-20 blockers (K-1 transposition, 3 unconfirmed counter deposits, Schedule B 14a, misattached blank pages) — cross-referenced with Kolo Florida's row. Chase pass, all 5 items re-chased, none arrived: W-2 39 days, September Marketplace report 38 days, counter-deposit confirmation 38 days, Contract Labor payee identity 39 days, material participation 38 days — now more urgent given the filed status. 2 not budgeted (digital-asset transaction, his own bank account)) |
| Artem Markarian | 2026-09-26 | — (quiet; Double/Gmail/Ping/Drive all re-confirmed unchanged, note 510952 unchanged. All 5 outstanding items re-chased, none arrived: per-car Turo breakdown now 25 days, whose Turo account, the Kona/1099-MISC question, Turo login access, and his residence/state) |
| Ishkhan Markarian | 2026-09-26 | — (quiet; Double properties/activity log/notes re-confirmed unchanged. The transfer-mechanics question Lilian emailed Julia 09-04 has no reply, now 22 days pending, no deadline; QuickBooks primary-admin handover (case note 485258) unchanged, now 51 days. Ping client-scoped meeting/action-item search NOT re-run this pass — flagged as not re-verified, not confirmed-clear) |
| Mikayel Shakhyan | 2026-09-26 | 🔴 The extended Form 5472 deadline (2026-09-15) is now 11 DAYS OVERDUE, with ZERO movement anywhere — `Prepare tax return` still `wip`, every downstream task still `notStarted`, 0 new Double notes/files/activity, 0 new Ping/Gmail/Drive hits (only a false-positive Airtouch keyword collision on "dissolution"). The transaction summary to Julia (raised 09-06) is now 20 days unforwarded; the combined client-question drafts are 19-20 days old with zero evidence they reached him. The six firm-side items (confirm 5472 Parts II/III blank, dissolution date via Sunbiz, Form 7004 route, read the 6 image scans) all remain open, unresolvable from this sweep's reachable sources. 🔴 Still a 2b coverage-gap finding, 3rd consecutive flag — named in neither weekend-ci-sweep.md's scope table nor its exclusion table) |
| Vitaliy Vasyutyk | 2026-09-26 | 🔴 The owner's own 2025 Form 1040 is still `Not Started`, now 164 days past its on-file due date, despite every company K-1 being available — unchanged across two consecutive weekly sweeps, the group's single largest open item. All five re-checked company properties (Nika, SYS 1, Remodel Master, Zumfi 1, FIZUM 1) byte-for-byte unchanged. Three invoices (2097/2101/2104) now 185 days unpaid, 7 reminder rounds (a collection matter, no dollar figures written). SYS 1/Remodel Master change-of-address (~19 days) and Zumfi 1 "to be closed" (~19 days) both still unconfirmed with Sunbiz. The shared portal contact's `updatedAt` moved again with no activity-log trace of what changed) |
| BOGOPOLSKYY, MARAT and YULIANA | 2026-09-26 | 🔴 Yuliana's Schedule C business description/code is STILL UNANSWERED, now 11 days after the joint 1040 was already Filed (09-15) with a description keyed whose source was never recorded — escalated from an open item to an unresolved risk on an already-filed return. ⚠️ Contradiction re-verified, NOT resolved (cross-ref Gossip Miami): the ATX e-file-rejection case is unchanged, and the working paper's 3 open blockers (items 17/19/22) remain unreconciled against the filed status. Two Double portal contacts confirmed to carry two distinct emails, one per spouse — re-confirms the file's existing unsettled-contact-emails note) |
| Valentin Volzhanskiy | 2026-09-26 | ✅ **First full historical sweep COMPLETE 2026-09-26** (queue item, no prior baseline) — every source (Double notes/properties/contacts/activity-log, Ping meetings, Gmail, Drive) read to exhaustion within its natural bound; nothing paginated further because nothing further existed. No catch-up owed. Corrected a stale §5 bullet: the Double-native 2025 1040 organizer was unpublished then DELETED by Lilian on 09-13. Both his own outstanding items chased directly: mileage (largest figure still with him) asked 09-20 and re-asked 09-24, no reply found, 6 days; tips-eligibility question to his employer (Compass Group) — identified as needed 09-13, but a search found it has NEVER ACTUALLY BEEN SENT anywhere, 13 days with zero chase action |
| Zumfi 2 LLC | 2026-09-26 | ✅ **First full historical sweep substantially complete 2026-09-26** (queue item; also a 2b coverage-gap finding — the file exists but is named in NEITHER the scope table nor the exclusion table of `weekend-ci-sweep.md`, flagged again this run for a human to add its row). Double and Gmail read to exhaustion; Ping and Drive fully queried (Ping returned nothing usable — a real negative, not a gap); `list_client_meetings` could not run (needs a client-scoped context this session didn't have — a tool limitation, not a budget cut). 🟢 **Major: the 2025 Form 1065 is now shown FILED 2026-09-15** (was recorded unfiled/blocked on the 7004) — corrected throughout the file; the working paper (`tax-returns/zumfi-2-llc/2025-form-1065.md`, last touched 09-13) still needs its own closing update, out of this ledger's scope. Chase: Form 7004 acceptance still not independently confirmed anywhere reachable despite the return itself now being filed — needs a person to close from ATX. Which Tennessee return (franchise & excise vs FONCE) still not established; Lilian's TNTAP online-account request (submitted 09-17, confirmation code on file) is now 9 days past its own quoted 1-2 business day processing window with no follow-up found |
| Zakom Incorporated | 2026-09-26 | ⚠️ **CATCH-UP OWED: Gmail** — the broad "Zakom" search returned an estimated ~201 threads; only the first page (~20) was read this pass. Everything else (Double both records 710612/710652, Ping — a genuine first-ever pass, clean negative — Drive, and every targeted follow-up: 7004, Mema Colors, Palm Terra, post-09-13) was read to exhaustion and found nothing beyond what's below. 🔴 **Extended Form 1120-S deadline (2026-09-15) is now 11 days overdue; the return is still not filed** (Block A closed 09-13 as "return NOT prepared"; no Double activity since). **Palm Terra LLC confirmed DISSOLVED effective 2024-12-31** (Sunbiz Articles of Dissolution `L24000197396`) — the firm filed a 2025-03-17 Form 7004 extension for its final year, but whether that final return was ever prepared/filed is NOT established (no Double record to check, no confirmation email found). **Mema Colors LLC still has no Double record and no CI file**, despite the firm having filed its BOI report and an amendment — has its own Drive folder, corroborating a real (if inactive) engagement; Lilian to decide whether either entity warrants its own CI file. December 2025 Amex statement chase already resolved within the file itself (Lilian hand-delivered all twelve 2025 statements 09-15) |

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
