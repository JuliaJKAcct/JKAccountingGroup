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

| Client | Swept through | Coverage gaps (one-time catch-up owed) |
|---|---|---|
| Atman Parts | 2026-07-25 | — (full historical Gmail pass completed 2026-07-25; Drive folder found, filed as "Atman Products") |
| BEST BROKER REALTY LLC | 2026-07-25 | — (full historical Gmail pass completed 2026-07-25; Drive folder found) |
| ECOORGANIC USA LLC | 2026-07-25 | — (full historical Gmail pass completed 2026-07-25; Drive folder found, filed as "Ecoorganic USA INC") |
| Kolo Florida Inc | 2026-07-25 | — (full historical Gmail pass completed 2026-07-25; Drive folder found — 4 similarly-titled folders exist, canonical one flagged as best-guess) |
| Pro Title Agency | 2026-07-25 | — (full historical Gmail pass completed 2026-07-25; Drive folder ambiguous — 5 candidates found, needs Julia/Lilian to pick the canonical one) |
| NEVER GIVE UP KK LLC | 2026-07-25 | — (incremental, no new activity this window) |
| YES TEAM CORP | 2026-07-25 | — (incremental, no new activity this window) |
| MASCIAVE DESIGN STUDIO LLC | 2026-07-25 | — (incremental, enriched) |
| iKids Group LLC | 2026-07-25 | — (incremental, enriched) |
| Deep Tech Development Group LLC | 2026-07-25 | — (incremental, enriched) |
| AURA REMODELING LLC | 2026-07-25 | — (incremental, no new activity this window) |
| Beemold USA LLC | 2026-07-25 | — (incremental, no new activity this window) |
| Sunoma Inc | 2026-07-25 | — (incremental, enriched) |
| SENSUSTECH LLC | 2026-07-25 | — (incremental, no new SensusTech-specific activity; owner-group activity found belongs to Mobilesource) |
| Mobilesource Corp | 2026-07-25 | — (incremental, enriched) |
| Margate Plumbing Inc | 2026-07-25 | — (incremental, enriched) |
| MAGNUM 152, INC | 2026-07-25 | — (incremental, enriched) |
| LUMETRO LLC | 2026-07-25 | — (incremental, no new Lumetro-specific activity; owner-group activity found belongs to Mobilesource) |
| Ecom Beavers LLC | 2026-07-25 | — (incremental, no new activity this window) |

_Baselines set 2026-07-25 (prior baseline 2026-07-20) after the weekend sweep. The
five clients that owed a one-time full Gmail history pass (Atman Parts, Best Broker
Realty, Ecoorganic USA, Kolo Florida, Pro Title Agency) all got it this run — all
five coverage gaps are now cleared. Ping's `list_client_meetings` tool was not usable
this run for any client (needs a client-scoped context this session didn't have);
`search_meetings` (org-wide, semantic) was used as the working substitute throughout._
