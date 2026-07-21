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

| Client | Swept through | Coverage gaps (one-time catch-up owed) |
|---|---|---|
| Atman Parts | 2026-07-20 | Gmail history not yet fully swept |
| BEST BROKER REALTY LLC | 2026-07-20 | Gmail history not yet fully swept (only the BTR threads were searched) |
| ECOORGANIC USA LLC | 2026-07-20 | Gmail history not yet fully swept |
| Kolo Florida Inc | 2026-07-20 | Gmail history not yet fully swept |
| Pro Title Agency | 2026-07-20 | Gmail history not yet fully swept |

_Baselines set 2026-07-20 from the first manual sweep (Ping + Double for all five;
Gmail was only searched topically, around Best Broker's BTR — hence every client
owes a one-time full Gmail pass). That catch-up run may exceed the steady-state
per-client call bound once; that's expected._
