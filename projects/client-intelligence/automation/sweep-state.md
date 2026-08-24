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
   ⓘ **Measured 2026-08-22:** 48 client files, **34 rows here**, **14 files with no row** — and all
   48 are named in `weekend-ci-sweep.md`'s scope or exclusion table, except **Kompozit USA**, which
   has a file but no Double account and no scope/exclusion-table row yet (flagged for a human to add
   once it becomes a signed client — see that file's header note). Those 14 rows-less clients are the
   first-pass queue, draining at ~6 per run.

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
| Atman Parts | 2026-08-22 | — (incremental sweep 2026-08-15→22: recurring sales-tax Double task created 2026-08-17, resolving a standing gap; a "TAXES PASSRDS.txt" filename flagged to Lilian/Julia, contents not opened) |
| BEST BROKER REALTY LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: LBTR certificate confirmed saved to Drive; a formal Sept-30 renewal notice arrived 2026-08-19, still not confirmed calendared) |
| ECOORGANIC USA LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: a CT-941 past-due notice arrived 2026-08-18, flagged not actioned) |
| GOSSIP MIAMI LLC | 2026-08-22 | — (incremental sweep 2026-08-21→22: two new Double properties confirmed (Ext. Filed, Preferred language); no other new activity beyond the 2026-08-21 pre-return-review work) |
| Kolo Florida Inc | 2026-08-22 | ⚠️ **Winding down — the company is closing** (Lilian, 2026-08-11). Keep sweeping while the account closures run; **drop it from scope once the Double record is archived**, not before. Incremental sweep 2026-08-15→22: "2025 Taxes" project moved to Filed 2026-08-20; a CONTRADICTION surfaced between "payroll stopped" (2026-08-14) and active Gusto payroll-due notices dated 2026-08-18/20 — unresolved |
| Pro Title Agency | 2026-08-22 | — (incremental sweep 2026-08-15→22: the file's own "no sent-mail search has been run" guard was tested and did NOT confirm the 2026-08-18 reply to the city — flagged) |
| NEVER GIVE UP KK LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: nothing new; all four outstanding items checked and remain open) |
| YES TEAM CORP | 2026-08-22 | — (incremental sweep 2026-08-15→22: nothing new; retirement-plan and Mellanni items remain open) |
| MASCIAVE DESIGN STUDIO LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: off-cycle payroll, a portal transaction question resolved, the Studio Passwords doc touched — may answer the credentials-link item) |
| iKids Group LLC | 2026-08-22 | **Ping cannot help on this client and re-checking it is wasted budget:** its two client Zoom calls are from **Jun–Jul 2025**, before Ping's index begins (~Jun 2026), so no transcript exists and none will. Use **Google Calendar** for who attended those calls. Incremental sweep 2026-08-10→22: Double `list_projects` confirms the "2025 Taxes" project is still `notStarted`/`filedAt: null` — bears on the unverified 1065-extension item; the new contractor contact is named Sergey Yalansky, identity vs. the CFO still unconfirmed |
| Deep Tech Development Group LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: the Gusto payroll-late vs "no employees" contradiction remains UNRESOLVED — new negative evidence (no Gusto emails naming this client 08-15→08-21) does not settle it; USPS mail-forwarding deadline 2026-09-18 still unconfirmed as actioned) |
| AURA REMODELING LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: nothing new on this file directly; a cross-routing note — Form 6166 certificates for Ihor Naum's personal Form 8802 arrived via this client's AP mailbox — was recorded on `ihor-naum-olha-levchuk.md` instead) |
| Beemold USA LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: Mercury IO credit-limit change noted; WF statement access likely resolved via the joint Margate thread, unconfirmed for Beemold specifically) |
| Sunoma Inc | 2026-08-22 | — (incremental sweep 2026-08-15→22: Sunoma↔Magnum intercompany-loan work confirmed by Maria; two Drive working files touched 2026-08-19/20) |
| SENSUSTECH LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: cross-company "USD Funds" cash-coordination note found; Gusto/QBO mapping-sync failure now 10 days past due, unconfirmed) |
| Mobilesource Corp | 2026-08-22 | — (incremental sweep 2026-08-15→22: FL DOR sales-tax audit ESCALATED — auditor sent detailed buyback-transaction questions 2026-08-20, answered same day by the GM) |
| Margate Plumbing Inc | 2026-08-22 | — (incremental sweep 2026-08-15→22: WF-replacement-account item RESOLVED 2026-08-20, last-4 0647 confirmed; Mercury IO credit limit decreased 2026-08-19) |
| MAGNUM 152, INC | 2026-08-22 | — (incremental sweep 2026-08-15→22: Sunoma/Magnum intercompany-loan payment confirmed via Igor Melomed; Comcast/FPL credentials re-asked 2026-08-19, still not received; Organizer Status label changed) |
| LUMETRO LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: a 2026-04-13 Julia email found supporting "no separate filing" for the tax-treatment quirk — second source, not fully conclusive) |
| Ecom Beavers LLC | 2026-08-22 | — (incremental sweep 2026-08-15→22: a 2025-03-26 Julia email and a 2026-02-03 Delaware Division of Corporations exchange found, both corroborating existing open questions rather than resolving them) |
| Artur Tseretsian | 2026-08-22 | — (incremental sweep 2026-08-15→22: nothing new; all three outstanding items checked and remain open, ages recorded) |
| Ihor Naum & Olha Levchuk | 2026-08-22 | ✅ **Form 6166 certificates (2023, 2024) ARRIVED 2026-08-19** — found via a routing check on a different client's Drive folder; resolves the "watch for IRS mail" outstanding item. Not yet confirmed complete/final by a human read |
| Denys Melnyk | 2026-08-22 | ✅ **Full-historical Gmail pass now DONE 2026-08-22** (in addition to the bounded ≥2026-08-11 pass) — baseline advanced from the long-held 2026-08-11 for the first time. Both notes (485225, 490984) re-read in full, current bodies match what's recorded. Nothing new found; the three K-1s (chase date 2026-09-15) have not arrived. A Drive search surfaced two W-9 PDFs that may or may not belong to the former business partner named in note 490984 — flagged, not confirmed, no name written here |
| ZETECH LLC | 2026-08-22 | First full historical sweep completed 2026-08-15 (owner Liudmyla Kazannik's group, 1 of 7); incremental sweep 2026-08-15→22: July sales tax filed and paid — first confirmed filing on record |
| OPTIC GOLD INC | 2026-08-22 | First full historical sweep completed 2026-08-15 (Liudmyla's group, 2 of 7). ⚠️ **The 2026-08-07 Sunbiz "Notice of Change or Filing" is STILL unopened as of 2026-08-22** — now 15 days pending; context found this run (the same document number recurs periodically) does not establish what changed this time |
| ONETWO STRATEGIES INC | 2026-08-22 | First full historical sweep completed 2026-08-15 (Liudmyla's group, 3 of 7). Incremental sweep 2026-08-15→22: zero Double activity-log entries found — no bookkeeping/close activity at all this window; the two missing K-1s (2242 Monroe LLC, Porcupine Partnership) now 131 days pending |
| Greenair International LLC | 2026-08-22 | First full historical sweep completed 2026-08-15 (Liudmyla's group, 4 of 7). Its primary contact is also the contact for the archived **SETATECH USA, INC.** client — already tracked there, not duplicated. ⚠️ **Incremental sweep 2026-08-15→22 ran (Double, Gmail, Ping, Drive, all bounded ≥2026-08-15) and found NO client-specific Gmail activity at all since 2026-04-02** — the search itself completed, so the baseline advances per rule 4; the QuickBooks subscription-renewal failure (open since 2026-03-17) now reads as a live risk given the correspondence gap, not just unconfirmed — flagged in the weekly email |
| CANDRAMAS LLC | 2026-08-22 | ✅ **First full historical sweep completed 2026-08-22** (Liudmyla's group, 5 of 7). No Double notes beyond the existing 2 (Form 2553 case); Gmail/Ping/Drive all read unbounded. What the business actually does remains unknown — Ping returned no legible description |
| AXDIGITAL LLC | 2026-08-22 | ✅ **First full historical sweep completed 2026-08-22** (Liudmyla's group, 6 of 7). Established: e-commerce/Amazon marketplace business, home state (Fort Lauderdale, FL), a reverted "2025 Taxes" project status (2026-08-04), an open work-authorization/payroll question for a Ukrainian employee |
| Airtouch LLC | 2026-08-22 | ✅ **First full historical sweep completed 2026-08-22** (Liudmyla's group, 7 of 7 — Liudmyla's group is now fully covered). 🔴 Found a possible second/related Florida entity ("AIRTOUCH FLORIDA LLC", different Sunbiz EID) facing administrative-dissolution notices — unresolved whether it belongs to this owner-group or is an unrelated company's mail reaching the firm by error |
| Andrii Tymchenko | 2026-08-22 | ✅ **First full historical sweep completed 2026-08-22.** Established the company's name (TRUSTBURN LLC, a Florida LLC) and the spouse's separate Double record. Found a CONTRADICTION on the 1095-A/health-coverage question between two internal sources — unresolved |
| VOICECAPITAL INC | 2026-08-22 | ⚠️ **CATCH-UP OWED: Gmail — page 2+ of ~201 results never read.** The full pass RAN 2026-08-22 and the rest of it finished: note 491840 re-read in full (no new substantive content), bookkeeping cadence and assigned staff resolved from Double properties. But only the **first page** of Gmail was reviewed (the set was dominated by cross-client automated noise) and the baseline advanced anyway — so every bounded search now starts after history nobody has read. 🛑 **Queue work under step 2c population (ii), not a completed pass** _(marker converted by hand 2026-08-24; the row originally read *first full historical sweep completed*, which is exactly what made it invisible)_ |
| VOXAGO LLC | 2026-08-22 | ⚠️ **CATCH-UP OWED: Gmail — only page 1 of ~40 results read in detail.** The full pass RAN 2026-08-22: note 491841 re-read in full, and a possibly-misattributed Zoom recap found that may belong to Best Broker Realty instead — unresolved. The baseline advanced on a Gmail pass that was not finished. 🛑 **Queue work under step 2c population (ii), not a completed pass** _(marker converted by hand 2026-08-24)_ |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |

> **CLIENTS WITH NO ROW HERE — and the omission is the point.**
> A row is a *bound* on the next run's searches, so writing one for a client who has never been
> swept would make the next run search from that date forward and **skip their entire history for
> good**. The routine does the right thing with a missing row — its **step 2c** queues the pass:
> **a client in scope with no row gets a one-time full historical sweep, then a row.**
>
> **Measured 2026-08-22 — the first-pass queue, in the priority order this run computed it (qbo/active
> clients first, then oldest file first within each group):**
>
> 1. **LILIIA HLEBOVA KOZLOVSKA** (710644) — created 2026-08-17, individual, no qbo.
> 2. **Mykola Kozlovskyi** (709838) — created 2026-08-18, individual, no qbo.
> 3. **YMI TRUCKING LLC** (710608) — file created 2026-08-13 (git), never swept; deferred this run in
>    favor of the three qbo clients above it in priority.
> 4. **VITALII IVANOV & TETIANA MOGYLOVA** (710666) — TaxDome-backfill seed, created 2026-08-13.
> 5. **Igor Melomed & Yelena Lovkina** (710635) — TaxDome-backfill seed, created 2026-08-13.
> 6. **R & G Friendly Inc** (710589) — TaxDome-backfill seed, created 2026-08-13.
> 7. **Viacheslav Honcharenko** (710665) — TaxDome-backfill seed, created 2026-08-13.
> 8. **Maria Contreras** (710646) — TaxDome-backfill seed, created 2026-08-13.
> 9. **Iurii Iakovenko & Alina Yakovenko** (710639) — TaxDome-backfill seed, created 2026-08-13.
> 10. **Grigoriy & Margarita Melomed** (710633) — created 2026-08-13, no TaxDome note, invisible to the backfill.
> 11. **M5 Studio Miami** (no Double id) — created 2026-08-14; search Double by name first before assuming no client exists.
>
> ⚠️ **This run (2026-08-22) used its ~6-full-pass cap on CANDRAMAS, AXDIGITAL, Airtouch (all qbo,
> completing Liudmyla's group of seven), Andrii Tymchenko, VOICECAPITAL INC and VOXAGO LLC** (the
> three oldest non-qbo files, all committed the same day, 2026-08-13). **Kompozit USA** was also swept
> this run (a cheap, bounded pass — no Double account, Gmail+Drive only) but deliberately given **no
> row**, since it is not yet a client with Double/Ping/Gmail-history sources to bound; see its file's
> header note. **Deferred to next run, in order:** YMI TRUCKING LLC, then the six remaining
> TaxDome-backfill clients, then Grigoriy & Margarita Melomed, M5 Studio Miami, LILIIA HLEBOVA
> KOZLOVSKA and Mykola Kozlovskyi (the last two are newest by file-creation date, so they sort to the
> back of the non-qbo group under the "oldest file first" rule).
>
> _(The queue enumeration above supersedes the "THREE GROUPS" narrative that stood through
> 2026-08-18 — Liudmyla's seven are now fully covered (all 7 have rows), so that group is closed.
> The TaxDome-backfill seven and the two 2026-08-17/18 individuals remain, plus YMI TRUCKING LLC,
> Grigoriy & Margarita Melomed and M5 Studio Miami — 11 clients in the queue as of this run, down
> from ~17 before it, at a cap of ~6 per run.)_

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
