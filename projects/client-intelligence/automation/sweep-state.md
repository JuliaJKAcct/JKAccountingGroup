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
| Atman Parts | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: Sales Tax recurring task cadence moved 10th→5th and marked Done 09-02; new filed return "8. August 26.pdf" appeared in Drive 09-02 (not opened). All four outstanding items chased and remain open: TAXES PASSRDS.txt 23 days, Sch C vs 1120-S 26 days, who-files-sales-tax 26 days, TX franchise-report status 26 days (no live deadline until 2027-05-15). 2 unchased (structural, not budget): Sunbiz name check (sunbiz.org blocked), Ping bookkeeping-contact gap) |
| BEST BROKER REALTY LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: the City of Hollywood's FORMAL Sept-30 renewal notice arrived again 09-10 and Julia forwarded it to the client the SAME DAY — the first confirmed action on this item since it was flagged; no client reply yet, still uncalendared, ~18 days to deadline (2026-09-30). Form 8822-B still open, 172 days. 1 deferred: the county certificate PDF unopened (out of a CI sweep's remit)) |
| ECOORGANIC USA LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, narrow addition only — this client is under very active direct tax-prep work through 09-11, already logged: "2025 Taxes" Double project moved to Ready for Review 09-09; case note 485258 (QBO handover) confirmed STALE, unchanged since 08-06. CT-941 past-due notice still unactioned, 25 days. QuickBooks handover stuck on Ishkhan's ID/QR step, 37 days. Turo/9-month sales-tax gap/DRS notices NOT re-chased here — superseded by the tax-prep sessions' own log entries (Turo answered 09-01, CT return submitted 09-02, further DRS correspondence 09-03 still unread)) |
| GOSSIP MIAMI LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, narrow addition only — also under very active direct tax-prep work through 09-11: the 2025 Business Tax Organizer, on record as never started, was OPENED BY THE CLIENT 09-10 (contents not read, per the organizer rule); case notes 485291 and 491858 confirmed STALE against the return's own progress. FDOR DR-26S credit claim 204 days pending; W-9 for the 1099-NEC contractor still not requested, 7+ months past the form's own deadline. 1 deferred: Victoria Sapa's Sunbiz check still blocked (network proxy, confirmed again this run)) |
| Kolo Florida Inc | 2026-09-12 | ⚠️ Winding down — the company is closing (Lilian, 2026-08-11). Incremental sweep 2026-08-29→09-12: Gusto payroll-late notices CONTINUED (further notice 09-10); Shopify KOLO HOUSE billing failures CONTINUED (another 09-10, retry scheduled 09-14); 🆕 a NEW, previously untracked finding — an Intuit QuickBooks payment-failure notice for Kolo Florida Inc arrived 09-10 naming a JK staff card, meaning a QuickBooks subscription is still live/billing even though Double reads platform:none — worth reconciling. Gusto contradiction now 27+ days; Shopify failures 18+ days. 2 unchased (same as last two runs): BAI-branded Shopify lines, warehouse-lease status. No FDOR/Lauderhill correspondence found |
| Pro Title Agency | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: an underwriter vendor, Westcor Land Title Insurance Co., chased an unpaid "Plant Search Statement" invoice 09-09 — a routine AP item, not previously tracked. Coral Springs address change, IRS 1065-vs-Schedule-C mismatch, and the payroll(Gusto)-vs-Double-property discrepancy all re-chased, no movement. 1 unchased (budget, same as last two runs): the Owner(Lilian)-vs-Assigned-Staff(Liudmyla) reconciliation) |
| NEVER GIVE UP KK LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: Double `Sales Tax` property changed N/A→Quarterly and a recurring "Sales Tax" task was created 09-02 — the long-open nexus/registration item now looks likely resolved, but uncorroborated by any note/email explaining the decision. Entity-structure recommendation and BOI report both 60 days, no deadline; ITAR/EAR licensing question not chased by design (needs legal research). 1 unchased: the ambiguous "NEVER GIVE UP, LLC" (no "KK") QuickBooks invoice, not re-attributed) |
| YES TEAM CORP | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: company bank statement (acct ending 1637) for August uploaded to Drive 09-07; owner emailed a personal-card business-expense reimbursement request 09-08 (no figures recorded). All four outstanding items chased, 0 unchased: unverified Sunbiz Annual Report delinquency lead ~2 weeks (still uncorroborated, no registry tool); registered home state unconfirmed; retirement plan ~7.5 months; Mellanni invoice format ~3 months) |
| MASCIAVE DESIGN STUDIO LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: Comcast/Xfinity confirmed a 3-month escalating pattern (Jun→Jul→Aug); a new, larger Florida Blue charge posted twice in July but not August; a new Drive file "08.2026.pdf" appeared 09-01 (unopened). EIN/no-Form-2553 case (note 491846) still no movement since 01-14/08-13. 2 unchased (budget): Double bank-feed ticket resolution, FL sales-tax county. Note: FOLLOW-UPS row 72's pending Lilian decision on the "Masciave technique" write was deliberately not acted on this run) |
| iKids Group LLC | 2026-09-12 | **Ping cannot help on this client and re-checking it is wasted budget** (its two client Zoom calls predate Ping's index). Incremental sweep 2026-08-29→09-12: the "Pay FPL bill" task has been overdue since 09-05, still overdue through 09-11; Sergey accepted a QuickBooks Accountant invite 09-01 (his role still unconfirmed); two new Drive documents (an MEP Equipment Material Deposit Invoice 09-07, a partially-paid Rest Invest Kyiv kitchen-equipment invoice 09-04, entity unconfirmed) are capitalization candidates, content not opened; a City of Fort Lauderdale July charge coded differently from the usual water-bill payment, unexplained. 4 unchased (budget): KaTom credit application, W-9 sweep, five decisions for Julia, engagement-expansion signed status |
| Deep Tech Development Group LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, on top of the 09-07 manual Gmail-only catch-up already in the file: two more Gusto "payroll late/due" reminders 09-08 and 09-10 — payroll demonstrably still active, the cancellation decision now ~38 days unsettled. 🔴 **Double case note 503544 (the Shopify case) is now STALE against this file** — last edited 09-03, does not reflect the 09-04 Balance-account closure or the 09-07 second-blocker discovery; flag for a rewrite-in-place. USPS mail-forwarding deadline now 6 DAYS OUT (2026-09-18). 4 unchased (budget): Safe Guard Self Storage cancellation, Penn Credit toll balance, second Drive-folder identity, State Farm UM signature. Drive not re-searched this run (09-07 catch-up already covered the Shopify side) |
| AURA REMODELING LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: client uploaded BOTH the August Chase Credit Card 1591 and Chase Checking 3261 statements on 09-02 — strengthens, without yet closing, the long-open Chase-card-replacement question; three more Double portal questions resolved 09-02/03 (content not individually pulled, budget). 1 unchased: Amex/BofA reclassification. Invoice-to-deposit mismatch ~9 months unchanged) |
| Beemold USA LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: August close completed ON SCHEDULE 09-09, contrast to July's ~2-week-late close; standing "Loan to Margate Plumbing Inc" intercompany task closed 09-08; separate monthly Mercury statements now exist in Drive for ●3849 and ●4245, corroborating they are distinct accounts. Cross-client lead (not written into this file): a QuickBooks payment-failure notice addressed to this owner also names Kolo Florida Inc — a possible owner overlap, flagged for whoever next works either file. QBO bank-feed reconnection 54 days; WF statement access >4 weeks; Beemold income-line(7/10) ID 29 days; Mercury ●3849 vs ●8192 44 days. 1 unchased: accountant letter for remortgage) |
| Sunoma Inc | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: confirmed limit — the Balance Sheet cannot be split by store/class in QuickBooks, only the P&L can; July close showed task activity 09-02→04 but no EndClose entry followed, so it is not yet marked Done (echoing June's ~2-month lag); a previously-uncatalogued bank task, "1022 Bank of Ozark," closed out 09-02. Donated-inventory deduction 51 days; organizer reverted to draft 43 days; Auto Pawn Apr-2024 report 76 days (same search as Magnum's, nothing found either place). 1 SOP proposal queued (Balance-Sheet-cannot-split-by-store)) |
| SENSUSTECH LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: 2025 tax project moved to inProgress, organizer + engagement letter marked sent 09-07; brokerage 1099 (JP Morgan) exchanged with the owner 09-07 for the return. 🆕 New system found: a Human Interest 401(k) plan — a termination/pricing notice surfaced 09-09 plus a login-access problem, resolution call booked 09-16/17. Gusto→QBO mapping-sync failure now 31 days past due, still unconfirmed. 4 unchased (budget): external financial audit, crypto/USDT reconciliation, June-reports final categorization, organizer-reversion intent) |
| Mobilesource Corp | 2026-09-12 | ⚠️ **Contradiction, unsettled** (unchanged, deliberately not touched) — organizer status still disputed between Double's property and the organizer record itself. Incremental sweep 2026-08-29→09-12: 🟢 the 2025 return moved to readyForReview 09-07 and was SENT TO THE CLIENT for review 09-10 (does not resolve the organizer-status contradiction). 🔴 Crypto arrangement clarified: the USDT activity runs through the OWNER'S PERSONAL cold wallet, a 1099 to the owner is under consideration, and the owner must also report this on his personal 2025 return. A New Jersey Division of Taxation Payable appeared on the Balance Sheet, tied to the known sales-tax/QBO mapping issue. FL DOR sales-tax audit silent 23 days; USDT deposit (now reframed by the personal-wallet finding) 51 days. 1 item not chased (budget): Maria's-guide remaining items. (A personal/1040 rental-property matter for the owner surfaced in the same mailbox sweep and was correctly kept out of this company file) |
| Margate Plumbing Inc | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: August close completed 09-09, "WF Cash 8477" placeholder deleted, new standing task "Reclass Clerical and Officers" created 09-09. 🔴 **NEW Workers' Comp EXEMPTION (FUBA #13719) expiring 2026-09-30** — Julia told the owner to renew directly with the State — 18-day deadline. A concrete AR-inaccuracy instance (a named customer) resolved 09-07, corroborating the standing owner-managed-AR-is-inaccurate quirk. WC/GL premium audit 54 days; QBO Payments chargeback dispute 44 days. 1 unchased (budget): the "CJM" AR item. 1 SOP proposal queued (new reclass step)) |
| MAGNUM 152, INC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: two previously-uncatalogued named-individual bank tasks confirmed on the close checklist; confirmed the same Balance-Sheet-cannot-split-by-store limitation found at Sunoma; July close activity ran 09-02→04 but no EndClose entry followed (same pattern as Sunoma, not yet marked Done). Bravo "Gunshow tender" mapping error still unresolved 23 days since flag / 16 since reminder — see Pending SOP-2026-08-29-03. Inventory-donation treatment 51 days; 2025 organizer reverted 43 days; Auto Pawn Apr-2024 report 76 days. 2 unchased (budget, unchanged): Silencer Shop MS1 login, Maria's-guide Uncat items. 2 SOP proposals queued (Balance-Sheet limitation, named bank accounts)) |
| LUMETRO LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: ✅ **state of formation SETTLED as WYOMING** — the Articles of Organization, read directly from Drive, confirm a Wyoming registered-agent formation (Sheridan, WY), closing a question open since file creation; entity's EIN added (33-3132141, from the IRS CP575G letter); August close completed 09-07; a Runpod/AI-compute hosting expense billed under Lumetro was explained by the owner. Formation state does NOT settle the entity's operating/tax-home state — that stays open. Tax-filing-treatment quirk ~43 days, no deadline; duplicate Drive folders unchanged) |
| Ecom Beavers LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: no confirmed new facts; one low-confidence, unconfirmed Wise business-account-invite email surfaced by a search-term match, flagged not verified. Post-consult deliverables ~65 days; home-state/sales-tax nexus and the EB2 LLC relationship both unchanged, no deadline. 0 unchased) |
| Artur Tseretsian | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: ✅ **QuickBooks recurring-payment setup CONFIRMED COMPLETED** — a payment posted 09-01, closing that item, with a new narrower watch item (one transfer canceled 09-03 for a bank issue). All three outstanding items chased and remain open, ages now 41 days (older child's SSN, pending since 2026-07-31, WhatsApp channel outside sweep reach), 68 days (Rewhip LLC scope), 77 days (Stripe-data question)) |
| Ihor Naum & Olha Levchuk | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: ✅ **both Form 6166 certificates (2023 & 2024) CONFIRMED complete and genuine**, closing the "is it complete" question open since 08-29. ⚠️ **Session-hygiene note:** this finding came from a Drive `search_files` call run without `excludeContentSnippets: true`, which returned full content snippets of both certificates and the Form 8802 application — including both spouses' TINs and their home mailing address. Nothing was written to any file; the identity block is contained to that one background research step's own transcript. Recommend that transcript be deleted per the standing rule. Possible duplicate 8802 transmission ~129 days; 2023/2024 return-filed dates and Form 2848 on file both unconfirmed. 0 unchased) |
| Denys Melnyk | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: both notes (485225, 490984) re-read in full per the standing rule — CONFIRMED UNCHANGED. The former-partner name-match lead (the Drive W-9 PDFs traced to a different CI owner's client book) strengthened — the first name now also matches, not just the surname — not written into the file by name, flagged for Lilian to compare directly. 🔴 **The three K-1s' chase date, 2026-09-15, is now 3 DAYS OUT** — confirmed not arrived early via both Double and Gmail. 0 unchased) |
| ZETECH LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: 2025 Taxes project confirmed filed, filedAt 07-03; payroll-management question SETTLED — Julia actively runs/cancels/reruns Gusto herself (a 4th cancel-rerun instance 09-01/02 was addressed to her); two owner-group entity names identified (LE DELICE LLC, EVERMONY LLC). 🆕 New unresolved COGS/inventory discrepancy via a Veeqo integration, flagged by the client 09-09/10. Three "Uncapped" financing offers expired unused 08-28. A2X mapping confirm 46 days; fee-proposal pushback #JKA1204-v3 65 days. 0 unchased. Drive NOT searched this run — gap to close next time) |
| OPTIC GOLD INC | 2026-09-12 | ⚠️ Chased hard per standing instruction, still nothing: the 2026-08-07 Sunbiz "Notice of Change or Filing" (P23000053978) is now **36 days unopened**; the Form 8822-B/IRS-address item is now **~186 days pending**. Incremental sweep 2026-08-29→09-12: 2025 Taxes project confirmed filed, filedAt 06-29. Form 7004 confirmation — no movement. 0 unchased. Drive NOT searched this run |
| ONETWO STRATEGIES INC | 2026-09-12 | ⚠️ **Contradiction, unsettled — and now backed by stronger fresh evidence for "filed."** Incremental sweep 2026-08-29→09-12: the "2025 Taxes" project was toggled Filed→Ready for Filing→Filed again on 08-31, with a client e-signature, an organizer opened by the client, and a receipt filed to Drive, all inside one 30-minute window; a new "Signature = Signed" property read for the first time. The standing open item (two missing K-1s / home-office deduction, 141 days) is unchanged and not resolved — recommend confirming directly with whoever prepared the return whether the K-1s actually arrived or the return was filed without them. Reemployment-tax PDF still unopened; salary/withholding-change and Accountable Plan posting confirmations still open. 0 unchased. Drive NOT searched this run |
| Greenair International LLC | 2026-09-12 | 🔴 **NEW, 2026-09-09/10: the Double record was DISCONNECTED then ARCHIVED**, three days after the client opened its 2025 Business Tax Organizer (09-07) — no Gmail explanation found for either action. **Needs a human decision**: whether this should move to `weekend-ci-sweep.md`'s exclusion table (out of this sweep's merge scope to edit that file). The long-open QuickBooks-subscription-renewal-failure item (~180 days) is now entangled with/likely overtaken by the disconnection. 0 unchased. Drive NOT searched this run — the Gmail correspondence gap (previously ~5 months) is now unbroken through today |
| CANDRAMAS LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: ✅ 2025 Form 1120-S now Filed (09-01, Julia), corroborated by new Ext.Filed/Signature properties; the 08-28 payroll-late flag RESOLVED; a new note (509666) from a 08-31 client call recorded (ACA Excess Advance Premium Tax Credit repayment, an IRS installment agreement being arranged, spouse's separate Schedule C income — no dollar figures or names). Form 2553 late-effective-date outcome still nothing found, ~186 days. 0 unchased. Drive NOT searched this run |
| AXDIGITAL LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: ✅ the 2025 return — company AND owner's personal 1040, prepared together — went Ready for Review → Waiting on Client Approval → Filed (09-08), with a client walkthrough video and e-signature; organizer/engagement-letter tasks completed 09-01; a client-flagged duplicate-payment question investigated and CONFIRMED RESOLVED (no double payment). Ukrainian employee's work-authorization/payroll question still open, ~39 days. 0 unchased. Drive NOT searched this run |
| Airtouch LLC | 2026-09-12 | 🔴 **AIRTOUCH FLORIDA LLC** (the possible second/related entity) — the vendor dissolution countdown fell to **~5 business days** as of 09-11, every single notice still UNREAD by anyone at the firm. Incremental sweep 2026-08-29→09-12 confirmed the sender is a commercial filing vendor (`fl@e.myfilingservices.com`), not Sunbiz — same vendor pattern seen at Ecoorganic/CT and Yes Team Corp. The underlying question — whether this entity belongs to this owner-group — is unchanged, ~24 days, and `search.sunbiz.org` remains blocked from automated sessions (confirmed again, not re-attempted). A Square POS system was corroborated for the genuine AIRTOUCH LLC's own business (from the 08-29 run). 0 unchased |
| Andrii Tymchenko | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: no new facts — re-verification only. The 1095-A/health-coverage contradiction between two internal sources was RE-VERIFIED, not resolved, per instruction — note re-read in full, unchanged, contradiction stands exactly as before. Health-coverage contradiction ~21 days; tax-residency/whether-firm-still-files ~30 days; IRS-account estimated-payments check ~30 days (firm-side action); current photo ID ~30 days. 0 unchased) |
| VOICECAPITAL INC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, ordinary pass — the Gmail catch-up was already CLEARED 2026-08-29: note 491840 unchanged; 0 Double activity-log entries in the window. New: the firm's own invoice to this client is 112 days overdue (dollar figure withheld per the two-data-homes rule). IRS S-election acceptance and IRS-address correction (8822-B) both re-chased, no movement, ~180 days each — both require a direct IRS call. Purpose of the 2026-04-28 Form 2848 fax still unconfirmed, ~137 days — only a transmission receipt exists. 0 unchased) |
| VOXAGO LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, ordinary pass — the Gmail catch-up was already CLEARED 2026-08-29. Genuinely quiet this window: no new facts found across Double, Gmail, Ping, or Drive. All standing items re-chased, none moved: Nov-2025 DOR tax liens resolution ~311 days, FDOR account status ~271 days, court fees ~271 days, 2025 annual report filed? ~214 days, sells tangible goods? ~271 days. 1 unchased (budget): which entity the 2026-03-24 Zoom recap covers) |
| YMI TRUCKING LLC | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: 🆕 Prime Road Carriers' own correspondence surfaced TWO further untracked entity names on a shared 09-10 Bank of America notification — Jupiter Digital Solutions LLC and Goncharov Group LLC — flagged only, no CI file created (outside this run's scope; a future owner-level pass should establish whether they share Prime Road Carriers' portal contact). Confirmed ongoing active trucking operations via driver-level bookkeeping spreadsheets modified 09-07→11. Correct legal/mailing address (TX vs IN) and who filed the 2025 Form 7004 both re-chased, no movement, ~180 days each. 0 unchased) |
| VITALII IVANOV & TETIANA MOGYLOVA | 2026-09-12 | — (incremental sweep 2026-08-29→09-12: ✅ **2025 return FILED 2026-09-01** — Waiting on Client Approval→Filed, signed PDF moved to Drive, new Signature=Signed property — resolves the file's prior "unfiled" status. 🔴 **No further foreign-entity (5471/8865/8858) classification work evidenced since the 08-20/21 workpapers, DESPITE the return now being filed** — now the top open question, ~29 days. 🔴 **USPS mail-forwarding order still confirmed active as of the 09-02 digest, EXPIRES 2026-09-18 — 6 DAYS OUT**, no renewal evidence found. Vitaliy Ivanov requested access to the firm's visa-documents Drive folder 3× on 08-31, unconfirmed if granted. A "W-8BEN Ivanov Yaroslav.pdf" surfaced but does NOT match this client (different first name) — recorded only to prevent a future false match. 0 unchased) |
| Igor Melomed & Yelena Lovkina | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, ownership question NOT reopened per instruction: continued active monthly bookkeeping requests/deliveries for Sunoma/Magnum 152 through 09-11 (a direct 2-year P&L/BS request 09-03, fulfilled 09-04) — further evidence of the Double `Bookkeeping=N/A`-vs-real-work mismatch, ~29 days, mismatch deepened. What the 2025 1040 carries / confirm 4868, and the sales-tax/pawnbroker-licensing position, both re-chased, no movement, ~29 days. 2025 organizer chase by email — still Sent. 1 unchased (budget): the 2023 classification question, pending since unknown start (original question 2024-10-14)) |
| R & G Friendly Inc | 2026-09-12 | — (incremental sweep 2026-08-29→09-12, ownership settled 08-29 not reopened: genuinely quiet — no new facts found across any source this window (a Gmail hit initially matching "Lucky Pawn" was Igor Melomed's unrelated correspondence, correctly excluded). The correct-Double-record item (platform/Bookkeeping/Payroll) re-chased, still uncorrected, ~29 days. The 2025-08-25 encrypted FL DOR communication was re-chased with two targeted searches and is STILL not found/opened — recommend a person open the original item directly rather than searching again. 2 unchased (budget): the PNC→Truist cutover/card-feed check and the reasonable-compensation review, both pending since unknown start) |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |
| Viacheslav Honcharenko | 2026-09-12 | ✅ **First full historical sweep completed 2026-09-12** (queue item, no prior baseline). Every source read to exhaustion: Gmail unbounded (15 threads, oldest 2025-04-26), Drive (2 pages), Double fully re-read (0 notes, 9/9 activity events, 12/12 tasks, 16/16 files), Ping confirmed empty. Established: a third 1099 payer (Pro Management Agency LLC, dissolved 2026-04-29) plus a Home Office Deduction worksheet; confirmed the 2025 Form 4868 extension was actually filed. 🔵 **New lead: this client sits inside a cluster of businesses this firm already serves for one person, Sergey Karpenko** — his personal inbox is cc'd on billing/business correspondence for Best Broker Realty LLC, Pro Title Agency LLC, Optic Gold Inc and VoiceCapital Inc (all existing firm clients), and the firm filed a Broward BTR for "Sergey A Karpenko" personally the SAME DAY it filed Honcharenko's own BTR. The Honcharenko↔Karpenko relationship itself is NOT established. Settle the Schedule C position — and who Karpenko is to this client — before preparing anything |
| Maria Contreras | 2026-09-12 | ✅ **First full historical sweep completed 2026-09-12** (queue item, no prior baseline). Every source read to exhaustion: Gmail unbounded (23 threads, oldest 2024-03-31), Drive (2 pages), Double fully re-read (0 notes, 9/9 events, 12/12 tasks, 20/20 files), Ping confirmed empty. Established: she is a client for THREE consecutive years (2023-2025), not two; every year shows W-2 income only, NEVER a 1099; a likely employer name (inferred from document naming); the vehicle is a Tesla. This sharpens, without resolving, the standing concern that her recurring vehicle/internet/repair deductions have no documented business basis — now a pattern across two already-filed returns worth direct review. Still open: home state, dependants, whether the deductions were actually claimed on the filed PDFs |
| Iurii Iakovenko & Alina Yakovenko | 2026-09-12 | ✅ **First full historical sweep completed 2026-09-12** (queue item, no prior baseline). Every source read to exhaustion: Gmail unbounded (23 threads, oldest 2023-08-17, nearly 2 years earlier than the prior working assumption), Drive (4 search angles, multiple pages), Double fully re-read (0 notes, 17/17 events, 14/14 tasks including a confirmed-done extension task, 20/20 files), Ping confirmed empty. Established: YourSeoBoard LLC confirmed FLORIDA (firm formed it, EIN sent 2024-04-03); Semalt LLC confirmed DELAWARE (amended 2023); a firm-prepared 2023 return exists (extends history to 3 consecutive years); the 2025 extension is confirmed filed via the actual Double task record; the 2024 Form 1095-A was NOT reuploaded for 2025 (a genuine negative). A possible Ukrainian bank account (a 2023 document, never chased) — FBAR/FATCA relevance unconfirmed. Still open: LLC tax classification, why the return has sat five months on the firm's side (genuinely undocumented), the Ukrainian account, dependants |
| Grigoriy & Margarita Melomed | 2026-09-12 | ✅ **First full historical sweep completed 2026-09-12** (queue item, created 2026-08-13, no TaxDome note, no prior baseline). Every source read to exhaustion: Ping org-wide (zero results, corroborates R&G Friendly's own finding), Gmail unbounded (2023-01-12→present), Drive (personal folder + 2024 subfolder walked), Double fully re-read (0 notes, full activity log). Established: R&G Friendly Inc's ownership (Grigoriy & Margarita, not Igor Melomed) cross-confirmed here via Margarita's dual Double contact link; the Double client's own creation/rename timeline; a `honda.pdf` ×3 lead bearing on the mileage/vehicle-disposal question already tracked at R&G Friendly; an earlier (Oct–Nov 2024) encrypted FL DOR "Power of Attorney" correspondence, possibly relevant to R&G Friendly's own 2025 sales-tax-audit timeline — flagged for whoever next works that file, not written there (out of this pass's scope). Still open: which state they live in, working language, dependants — none found |
| M5 Studio Miami | n/a (no Double account) | ✅ **First full historical sweep completed 2026-09-12** (queue item, created 2026-08-14, no prior baseline — Gmail/Ping/Drive only, per its own established scope; confirmed again this run there is no Double client). Established: business email domain `m5miami.com` in use; additional immigration-counsel contacts; a previously-unindexed Ping Zoom recording (low-confidence); the Articles of Incorporation confirmed filed in Drive 2026-08-12. Clarified: the 2026-08-18 Adobe Sign emails are an immigration-counsel engagement agreement for a named individual — UNRELATED to the SS-4/2848 question, preventing a false link. 🔴 **The Form 2848 question remains unresolved** (filename/metadata unchanged, not opened per instruction) and **the EIN is still not received, now ~10 days past the second fax's due date** ([`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 67, unchanged since 2026-09-01). No SSN/ITIN or other identifier was written anywhere |
| LILIIA HLEBOVA KOZLOVSKA | 2026-09-12 | ✅ **First full historical sweep completed 2026-09-12** (queue item, created 2026-08-17, no prior baseline). 🔴 **Headline finding: the 2025 return was actually FILED on 2026-08-20** (Double project status, all 9 tasks, and new Ext.Filed/Signature/Invoice properties) — the file's own narrative had stopped mid-preparation and never recorded the close-out. Also confirmed the home-office working paper reached Double (2026-08-19), closing that prior open item. A new lead — an SSN/EAD-cards document exists in the firm's Drive vault (existence only, not opened) — bears on the outstanding valid-SSN question. **Flag for Lilian/Julia:** several substantiation items (an income document, mileage, a digital-asset transaction, youngest-dependant details) do not appear closed in the record despite the return being filed — worth confirming whether they were settled off-file |

> **CLIENTS WITH NO ROW HERE — and the omission is the point.**
> A row is a *bound* on the next run's searches, so writing one for a client who has never been
> swept would make the next run search from that date forward and **skip their entire history for
> good**. The routine does the right thing with a missing row — its **step 2c** queues the pass:
> **a client in scope with no row gets a one-time full historical sweep, then a row.**
>
> **Computed 2026-09-12 — the first-pass queue, deferred this run (in priority order: oldest file
> first; none of these carry `platform: qbo` or a Bookkeeping cadence, so there is no qbo/active
> group to put first). 🔴 THIS QUEUE IS BIGGER THAN THE 7 THIS FILE TRACKED GOING IN — recomputed
> fresh from the ledger (client files with no row above, minus the exclusion table), not from the
> prior run's cached count, per step 2c's own instruction. Five clients were created AFTER the
> 2026-08-29 run and had never been counted in any queue before today: Artem Markarian (created
> 2026-09-01), Ishkhan Markarian (2026-09-02), Vitaliy Vasyutyk (2026-09-07), Mikayel Shakhyan
> (2026-09-05), and BOGOPOLSKYY, MARAT and YULIANA (split out 2026-09-10). Combined with the one
> carryover from the old 7 (Mykola Kozlovskyi), the queue entering this run was actually **12**, not
> 7 — the other 6 (Viacheslav Honcharenko, Maria Contreras, Iurii Iakovenko & Alina Yakovenko,
> Grigoriy & Margarita Melomed, M5 Studio Miami, LILIIA HLEBOVA KOZLOVSKA) were swept THIS run, all
> COMPLETE, and now have rows above.**
>
> 1. **Mykola Kozlovskyi** (709838) — created 2026-08-18, individual, `Bookkeeping: N/A`. 🔗 His
>    return runs off Kolo Florida Inc's 1120-S (his own company, 100% from 2025).
> 2. **Artem Markarian** (710623) — created 2026-09-01. A shareholder of Ecoorganic USA LLC; his
>    K-1 comes off that 1120-S. His own file already carries substantial content from concurrent
>    tax-prep sessions — this queue entry is for the CI sweep's own Ping/Gmail/Drive corroboration,
>    not a first read of him.
> 3. **Ishkhan Markarian** (no Double id recorded — look up) — created 2026-09-02. Founder and sole
>    2023/2024 shareholder of Ecoorganic USA LLC; same caveat as Artem Markarian above.
> 4. **Mikayel Shakhyan** (Double id 710648, on his individual record — the LLC has none of its own)
>    — created 2026-09-05. 🔴 **Also a 2b coverage finding this run** (see the email) — real,
>    active Double-connected tax-prep work (a pro forma Form 1120 + Form 5472 for Lum and Ari LLC),
>    but not yet in `weekend-ci-sweep.md`'s scope table. His file already carries deep content from
>    that work; this queue entry is for the CI sweep's own Ping (never searched) and Drive (never
>    searched) passes specifically — his own file names both as owed.
> 5. **Vitaliy Vasyutyk** (710668) — created 2026-09-07. Owner-level file for a 10-company group;
>    only the owner file exists so far, the nine company files are still owed separately. Sweep by
>    owner, route by company, per the standing rule.
> 6. **BOGOPOLSKYY, MARAT and YULIANA** (710627) — split out of the Gossip Miami file 2026-09-10.
>    Very active concurrent tax-prep work (the joint 1040, not transmittable yet) already populates
>    most of this file; this queue entry is for the CI sweep's own Ping/Gmail/Drive/Double
>    corroboration pass.
>
> **This run (2026-09-12) used its ~6-full-pass-equivalent cap on the six oldest files** (Viacheslav
> Honcharenko, Maria Contreras, Iurii Iakovenko & Alina Yakovenko, Grigoriy & Margarita Melomed, M5
> Studio Miami, LILIIA HLEBOVA KOZLOVSKA) — **all six COMPLETE, no catch-up owed, all now have rows
> above.** The queue is 6 deep entering the next run, all named above in priority order — none of
> them a plain re-run of the OLD 7, since 5 of the 6 remaining are brand new to this count.
> **Prospects excluded from both the queue and this ledger, per the standing rule that a row would
> bound a search that is never expensive:** Kompozit USA, 4TUKAS LLC, and Anton & Olga Stenin
> (laundry portfolio buyer) — all three got a cheap bounded Gmail+Drive pass this run instead (see
> the weekly email).

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
