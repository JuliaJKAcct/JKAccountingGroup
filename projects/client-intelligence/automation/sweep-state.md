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
| Atman Parts | 2026-08-29 | — (incremental sweep 2026-08-22→29: no new activity anywhere — Double, Ping and Gmail all silent; all four outstanding items chased by name and remain open: "TAXES PASSRDS.txt" filename flag 9 days, Sch C vs 1120-S question 12 days, who-files-sales-tax 12 days, franchise-report status 12 days) |
| BEST BROKER REALTY LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: the Sept-30 BTR renewal confirmed NOT calendared, by a direct Google Calendar search — 10 days pending, deadline 2026-09-30 (~4.5 weeks out); Form 8822-B still unconfirmed, 168 days) |
| ECOORGANIC USA LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: the CT-941 past-due notice still not actioned, 11 days; the QuickBooks primary-admin handover and the Turo escalation email both still stuck, no movement; the nine-month sales-tax gap / two unopened DRS notices unchanged, 17 days, live risk) |
| GOSSIP MIAMI LLC | 2026-08-29 | 🔴 **New, unverified concern (2026-08-27/28 Zoom AI recap, medium confidence): the FILED 2024 return may itself be wrong** — underreported cash sales and missing depreciation, distinct from the existing "was 2024 even accepted?" question. Needs Lilian/Julia confirmation before it's treated as established. The Double case note (485291) is now stale against the file and needs mirroring. ⚠️ **Connector limitation, not a source gap**: a Sunbiz lookup on Victoria Sapa (the file's own "single most useful next action") could not be run — `search.sunbiz.org` was blocked by this session's network egress proxy, not merely deprioritized |
| Kolo Florida Inc | 2026-08-29 | ⚠️ **Winding down — the company is closing** (Lilian, 2026-08-11). Keep sweeping while the account closures run; drop it from scope once the Double record is archived, not before. Incremental sweep 2026-08-22→29: the Gusto/"payroll stopped" contradiction is still open and now better evidenced — 15 days, with new notices 08-23/25/27; **NEW** — the Shopify subscription for KOLO HOUSE has been failing to bill since 08-23 (four consecutive failures through 08-29), bearing on the wind-down decision for that system; BAI-branded-lines and warehouse-lease questions not chased this run (budget, same as last run) |
| Pro Title Agency | 2026-08-29 | ✅ **App #40698 RESOLVED** — the City of Hollywood LBTR was issued 2026-08-25, valid until 2026-09-30, confirmed two independent ways (the city's 08-25 email and a matching Drive file). The 2026-08-18 reply to the city is independently confirmed sent. ⚠️ The 2026-08-28 one-shot chase Routine fired but failed (no Gmail/repo access) — its branch was never pushed and its findings never happened; this sweep is what actually closed the item. Not chased this run (budget): the IRS 1065-vs-Schedule-C mismatch, the payroll (Gusto) vs. Double-property discrepancy, and the owner-vs-assigned-staff reconciliation |
| NEVER GIVE UP KK LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: June 2026 month-end close completed 08-25; all four outstanding items chased and remain open, 46 days (entity-structure recommendation, sales-tax nexus analysis, BOI report — all since 2026-07-14; ITAR/EAR licensing question not chased, needs legal research not a records search). An ambiguously-named QuickBooks invoice notification for "NEVER GIVE UP, LLC" (no "KK") surfaced 08-28 — flagged, not attributed to this client without confirmation) |
| YES TEAM CORP | 2026-08-29 | — (incremental sweep 2026-08-22→29: close-task activity 08-24 on both the company and the owner's individual account; retirement-plan item ~7 months pending, Mellanni invoice-format item ~2.5 months pending, both still open, no deadlines; registered-home-state question not chased, no registry tool. ⚠️ Unverified: a 2026-08-28 third-party filing-service solicitation email claims the 2026 Sunbiz Annual Report is delinquent since May 1, contradicting Double's "we handle it" — a known pattern for this kind of email, not corroborated by anything the firm holds; needs a direct Sunbiz check) |
| MASCIAVE DESIGN STUDIO LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: the credentials-link open item RESOLVED — the "Studio Passwords" document located and linked in §7, content not opened; a second portal-transaction question resolved and three reconciliation tasks moved to In Progress, all 08-24; a THIRD duplicate "Masciave Design Studio" Drive folder found (Maria's, created 2026-05-11); the EIN/no-Form-2553 case (note 491846) still stalled since 2026-01-14/08-13, no movement; the Comcast charge ~6 weeks pending, no movement) |
| iKids Group LLC | 2026-08-29 | **Ping cannot help on this client and re-checking it is wasted budget:** its two client Zoom calls are from Jun–Jul 2025, before Ping's index begins (~Jun 2026). Incremental sweep 2026-08-22→29: the "2025 Taxes" project re-confirmed `notStarted`/`filedAt: null`; a new KaTom (restaurant-equipment) vendor credit-application document appeared in Drive 08-28, purpose unconfirmed, possibly tied to the venue build-out; the ITIN applications item ~4 months pending; the third member's tax status not chased (budget); the Manager's loan-allocation question (asked 08-27) is only 2 days old, too soon to chase |
| Deep Tech Development Group LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: a Gusto "payroll is late" reminder for this client arrived 08-27 — this **reverses** the prior negative and now leans toward "payroll was never actually cancelled" rather than "payroll quietly stopped"; the contradiction stays open. A further Shopify Support reply landed 08-27 but sits inside Shopify's own Help Center thread, unreadable from Gmail — flagged unread, someone needs to open the Shopify Support inbox directly. USPS mail-forwarding deadline 2026-09-18 (20 days out), FDOR Q2-2025 demand withdrawal (17 days) and the Safe Guard Self Storage cancellation (~30 days) all still pending, no new evidence) |
| AURA REMODELING LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: 3 new Double `question_updated_status` events 08-25 — the client answered a standing quarterly-statements request (July Chase Checking 3261 statement uploaded, confirmed by Gmail 08-24) and two aged transaction questions (a Zelle-vs-invoice-#1089 question — client says #1089 is still unpaid — and a bank-fee clarification); a possible **Chase Credit Card 1591** surfaced as the long-awaited card replacement, unconfirmed; the Amex/BofA reclassification item not chased (budget)) |
| Beemold USA LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: no Beemold-specific correspondence found this window; the Wells Fargo statement-access item for Beemold specifically remains unconfirmed) |
| Sunoma Inc | 2026-08-29 | — (incremental sweep 2026-08-22→29: the June 2026 monthly close only finished 08-24 — about two months late; the Sunoma/Magnum intercompany-loan reconciliation and the donated-inventory item both unchanged, ~37 days) |
| SENSUSTECH LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: the Gusto/QBO mapping-sync failure now 17 days overdue, still unconfirmed either way; the cross-company "USD Funds" cash-coordination item unchanged) |
| Mobilesource Corp | 2026-08-29 | ⚠️ **Contradiction, unsettled** — the file said the organizer status was "Sent" (2026-07-25); a live check 2026-08-29 shows the property now reads "N/A (we have QBO access)" *and* the organizer itself is still `draft`, never published. Both versions recorded in the file §4. Incremental sweep 2026-08-22→29: a GM-directed write-off of stale pending bills-to-pay 08-24; a 08-27 Zoom recap surfaced the root cause of sales tax over-collected on international shipments (fix: full international shipping addresses on invoices — see SOP-2026-08-29-04) plus four balance-sheet cleanup items (Amazon Credit, 2024 gift cards, an old computer asset, cash-in-drawer). The FL DOR sales-tax audit escalation (answered 08-20) and the USDT-deposit item — no further movement |
| Margate Plumbing Inc | 2026-08-29 | — (incremental sweep 2026-08-22→29: the WF-replacement-account fix confirmed stable, nothing new broke; a second Mercury IO credit-limit decrease 08-26; the 2025 Form 1120-S confirmed `filed`, `filedAt` 2026-05-25 in Double — not previously recorded; the WC/GL audit and the QuickBooks-Payments chargeback items unchanged, ~40 and ~30 days) |
| MAGNUM 152, INC | 2026-08-29 | — (incremental sweep 2026-08-22→29: **new open issue** — a Bravo "Gunshow tender" is mis-mapped to the sales-tax account, flagged by Julia 08-20, still unresolved as of a 08-27 reminder (see SOP-2026-08-29-03); a "Magnum152_2025_TaxLiability_Report_v4.xlsx" appeared in Drive 08-24/25, showing active 2025 estimate work despite Double's tax project still reading `notStarted`; **correction** — last run's "Comcast/FPL credentials still open" was wrong: reading the full thread (not just the snippet) shows they were sent and confirmed received 2026-08-19/20, both versions now recorded) |
| LUMETRO LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: no Double/Ping movement; an unopened 2026-01-22 email carries an "Articles Of Organization" PDF attachment that would likely settle the long-open home-state question — no tool in this session can read PDF attachment content, flagged rather than resolved) |
| Ecom Beavers LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: no Double/Ping movement; two routine Mercury credit-limit-increase and Shopify-billing items 08-28, no figures retained; an unconfirmed data point — a 2024-10 NATP research thread on Delaware foreign-LLC registration was forwarded to the same contact as the 2026-07-09 consult's second participant, 21 months before onboarding) |
| Artur Tseretsian | 2026-08-29 | — (incremental sweep 2026-08-22→29: nothing new; all three outstanding items chased and remain open, ages now 31/45/54 days — the older child's SSN, the Rewhip LLC scope question, and the Stripe-data question) |
| Ihor Naum & Olha Levchuk | 2026-08-29 | — (incremental sweep 2026-08-22→29: the two Form 6166 certificates' Drive metadata checked — the 2023 file has been opened once (`viewedByMeTime` 2026-08-19), the 2024 file has never been opened — so completeness is only partially corroborated; a human still needs to actually read the content. Form 2848 confirmation and the possible-duplicate-transmission question — no new correspondence) |
| Denys Melnyk | 2026-08-29 | — (incremental sweep 2026-08-22→29: both notes (485225, 490984) re-read in full, unchanged; the two flagged W-9 PDFs traced to a completely different CI owner's (Liudmyla Kazannik's) own client book — a coincidental surname match is more likely than an identification of the former business partner, so per the no-personal-names rule nothing was written either way; the three K-1s (chase date 2026-09-15, 17 days out) confirmed not arrived early via both Double and Gmail — not yet due) |
| ZETECH LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: Payroll AutoPilot canceled-and-rerun a third time, 08-26; the A2X mapping-confirmation item 32 days pending, the fee-proposal-pushback item 51 days pending, both still open) |
| OPTIC GOLD INC | 2026-08-29 | ⚠️ The 2026-08-07 Sunbiz "Notice of Change or Filing" is **still unopened, now 22 days pending**. The IRS-address (Form 8822-B) item is now **166 days pending**. Incremental sweep 2026-08-22→29: no other movement |
| ONETWO STRATEGIES INC | 2026-08-29 | ⚠️ **Contradiction, unsettled** — Double's own `list_projects` record shows the "2025 Taxes" project **filed** 2026-07-03 (preparer Liudmyla Kazannik), while the file's tracked open item says two K-1s (2242 Monroe LLC, Porcupine Partnership) are still missing, now 138 days pending. Both versions recorded in §5; needs resolving when the fact is next actually used |
| Greenair International LLC | 2026-08-29 | ⚠️ The Gmail correspondence gap now spans **2026-04-02 → 2026-08-29 (~5 months)**, confirmed again this run — the QuickBooks subscription-renewal failure (open since 2026-03-17, now 165 days) reads as a live risk given how long the gap has run, not just unconfirmed. Its primary contact overlaps with the archived SETATECH USA client (already tracked there, not duplicated) |
| CANDRAMAS LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: the "2025 Taxes" project moved In Progress → Waiting on Client Approval, 08-25 (Lilian); 7 portal questions resolved 08-28; a new Gusto "payroll late" escalation 08-24/26/28) |
| AXDIGITAL LLC | 2026-08-29 | — (incremental sweep 2026-08-22→29: **new** — the client also runs a Turo car-rental fleet (a 08-26 document request) and is onboarding eBay as a third sales channel (08-26/27); the Ukrainian-employee work-authorization/payroll question still open, 25 days) |
| Airtouch LLC | 2026-08-29 | 🔴 **AIRTOUCH FLORIDA LLC** (the possible second/related entity, different Sunbiz EID) has received three more escalating administrative-dissolution notices (08-22/23/24), all auto-replied to and **none read by a person** — this is heading toward a hard deadline in **mid-September**, and it is still unresolved whether this entity belongs to this owner-group or is unrelated mail reaching the firm by error. Double `list_clients` confirms no separate client record exists for it. New this run: a **Square POS** system was found (daily sales digests), corroborating the "beauty bar" business-type hypothesis |
| Andrii Tymchenko | 2026-08-29 | — (incremental sweep 2026-08-22→29: no movement anywhere; note 447824 re-read, unchanged; the 1095-A/health-coverage contradiction between two internal sources remains unresolved, re-verified) |
| VOICECAPITAL INC | 2026-08-29 | ✅ **Gmail catch-up CLEARED 2026-08-29** — read to completion: a plain-name search (2 pages) and a substantive-terms-narrowed search (1 page) both ran out of results (no further page token), genuinely exhausted rather than budget-stopped. New: the Form 7004 confirmed actually processed (a signed receipt, dated 2026-03-25, found in Drive); the 2026-04-29 Sunbiz notice is now shown to be a recurring **annual** pattern (an identical notice fired 2025-02-12), not a discrete event. Note 491840 re-read, unchanged |
| VOXAGO LLC | 2026-08-29 | ✅ **Gmail catch-up CLEARED 2026-08-29** — a single plain-name search returned all ~42 estimated results with no further page, exhausted in one call. 🔴 **New: two Florida DOR tax liens were filed against the entity in November 2025** (disputed by Julia on wrong-address and no-account grounds), six weeks before the tracked December FDOR review — very likely the source of the case note's long-mysterious "court fees." Written into Double case note 491841 per the standing case-note rule. A lean (not proof) that the ambiguous 2026-03-24 Zoom recap belongs to **Best Broker Realty** instead of Voxago — an explicit "joined" notification exists for the 04-22 call but not for 03-24; unconfirmed, not moved between files |
| YMI TRUCKING LLC | 2026-08-29 | ✅ **First full historical sweep completed 2026-08-29** (queue item, no prior baseline). Established: an active motor-carrier operation (leased truck/trailer, DOT driver checks, dispatch system); payroll runs on Gusto (biweekly, AutoPilot); the 2025 Form 1120-S confirmed **filed** 2026-07-30, comfortably inside the extended Sept-15 deadline; a Form 2848 was drafted 2026-03-15, the day before an IRS call. **Found, not yet actioned:** the owner also runs a sibling company, **Prime Road Carriers Inc**, on the same Double portal contact (7 linked Double records total) — no CI file exists for it. Still unresolved: the Texas-vs-Indiana IRS-address question and who filed the unexplained 2025 Form 7004 — no new evidence found anywhere. Every source (Ping, Gmail, Drive, Double activity log) read to exhaustion |
| VITALII IVANOV & TETIANA MOGYLOVA | 2026-08-29 | ✅ **First full historical sweep completed 2026-08-29** (queue item, no prior baseline). 🔴 **Urgent, new:** a USPS mail-forwarding order covering Tetiana personally plus three US entities (Universal Trading Technology LLC, Deep Tech Development Group LLC, 1701 N M ST LLC) **expires 2026-09-18 — ~20 days out.** FBAR/Form 8938 workpapers were started 2026-08-20/21 — the foreign-account question is now active work, not just a flagged question. A "Residency Status" memo and an Oct-2025 visa-application folder exist in Drive (titles only, not opened) — suggests he may currently be outside the US. The foreign-entity classification (5471/8865/8858) question is open 15 days; the 2025 organizer is still `Sent`, 15 days. Every source read to exhaustion |
| Igor Melomed & Yelena Lovkina | 2026-08-29 | ✅ **First full historical sweep completed 2026-08-29** (queue item, no prior baseline). **Ownership question SETTLED:** a full historical sweep found zero connection between Igor Melomed's household and R & G Friendly Inc — that company belongs to **Grigoriy & Margarita Melomed** alone (TaxDome shows them co-signing both the 1120-S and their personal 1040 the same day, 2026-03-14; Double contacts confirm no overlap). Igor Melomed's own confirmed footprint is **Sunoma Inc** and **Magnum 152, Inc** — which the correspondence shows is substantially a firearms/gun-show retail business (Bravo POS, Silencer Shop), not pawn/jewellery as previously assumed. The bookkeeping relationship for Sunoma/Magnum is confirmed back to at least May 2025; a 2021 1120-S K-1 was issued to him personally. Every source read to exhaustion (Ping zero results both households) |
| R & G Friendly Inc | 2026-08-29 | ✅ **First full historical sweep completed 2026-08-29** (queue item, no prior baseline). This is "Lucky Pawn & Jewelry" (Oakland Park + Davie), confirmed sole owners **Grigoriy & Margarita Melomed** — see the Igor Melomed row for how the prior ownership ambiguity was settled. The firm ran and **passed** a Florida DOR sales-tax audit in 2025 (closed 2025-07-26); FL sales tax rate confirmed 6% + 1% county; ADP payroll confirmed back to Nov 2025; the Drive relationship runs back to 2021. Every source read to exhaustion |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |

> **CLIENTS WITH NO ROW HERE — and the omission is the point.**
> A row is a *bound* on the next run's searches, so writing one for a client who has never been
> swept would make the next run search from that date forward and **skip their entire history for
> good**. The routine does the right thing with a missing row — its **step 2c** queues the pass:
> **a client in scope with no row gets a one-time full historical sweep, then a row.**
>
> **Computed 2026-08-29 — the first-pass queue, deferred this run (in priority order: oldest file
> first; none of these carry `platform: qbo` or a Bookkeeping cadence, so there was no qbo/active
> group to put first):**
>
> 1. **Viacheslav Honcharenko** (710665) — TaxDome-backfill seed, created 2026-08-13.
> 2. **Maria Contreras** (710646) — TaxDome-backfill seed, created 2026-08-13.
> 3. **Iurii Iakovenko & Alina Yakovenko** (710639) — TaxDome-backfill seed, created 2026-08-13.
> 4. **Grigoriy & Margarita Melomed** (710633) — created 2026-08-13, no TaxDome note. ⓘ Batch G's
>    full pass on Igor Melomed / R & G Friendly Inc surfaced real material for this file (confirmed
>    owner/officer of R & G Friendly; copied throughout the 2025 FL sales-tax audit; a further
>    encrypted FL DOR "Communication" arrived 2025-08-25, never opened; Margarita has her own 2020
>    1040 on file in Drive predating the current CI system) — read that note before this client's
>    next full pass.
> 5. **M5 Studio Miami** (no Double id) — created 2026-08-14. ✅ **Settled this run, not just
>    unconfirmed:** a direct Double search for "M5 Studio" returned zero results — there is **no**
>    Double client, confirmed rather than merely unsearched. Stays in the queue for its Gmail/Ping/
>    Drive-only full pass.
> 6. **LILIIA HLEBOVA KOZLOVSKA** (710644) — created 2026-08-17, individual, `Bookkeeping: N/A`.
> 7. **Mykola Kozlovskyi** (709838) — created 2026-08-18, individual, `Bookkeeping: N/A`.
>
> **This run (2026-08-29) used its ~6-full-pass-equivalent cap on: VOICECAPITAL INC and VOXAGO
> LLC's Gmail catch-ups (both CLEARED — zero new `⚠️ CATCH-UP OWED` rows created this run), plus
> YMI TRUCKING LLC, VITALII IVANOV & TETIANA MOGYLOVA, Igor Melomed & Yelena Lovkina, and R & G
> Friendly Inc (all four first-time full passes, all COMPLETE, no catch-up owed).** The queue
> dropped from 11 to 7. **Prospects excluded from both the queue and this ledger, per the standing
> rule that a row would bound a search that is never expensive:** Kompozit USA, 4TUKAS LLC, and
> Anton (laundry portfolio buyer) — all three got a cheap bounded Gmail+Drive pass this run instead
> (see the weekly email).

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
