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
| Atman Parts | 2026-07-20 | Gmail history not yet fully swept |
| BEST BROKER REALTY LLC | 2026-07-20 | Gmail history not yet fully swept (only the BTR threads were searched) |
| ECOORGANIC USA LLC | 2026-07-20 | Gmail history not yet fully swept |
| Kolo Florida Inc | 2026-07-20 | Gmail history not yet fully swept |
| Pro Title Agency | 2026-07-20 | Gmail history not yet fully swept |
| NEVER GIVE UP KK LLC | 2026-07-20 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| YES TEAM CORP | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| MASCIAVE DESIGN STUDIO LLC | 2026-07-20 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| iKids Group LLC | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| Deep Tech Development LLC | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| AURA REMODELING LLC | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| Beemold USA LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Sunoma Inc | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| SENSUSTECH LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Mobilesource Corp | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Margate Plumbing Inc | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| MAGNUM 152, INC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| LUMETRO LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Ecom Beavers LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |

_Baselines set 2026-07-20. The first five came from the manual sweep (Ping + Double
for all five;
Gmail was only searched topically, around Best Broker's BTR — hence every client
owes a one-time full Gmail pass). That catch-up run may exceed the steady-state
per-client call bound once; that's expected._
