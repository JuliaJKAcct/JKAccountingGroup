# Sweep state — how far each client has been swept

The incremental-sweep ledger. Each row records the date **through which** a
client's sources (Ping, Double, Gmail, QuickBooks) have already been reviewed, so
the next sweep only looks at what came **after** — never re-reading history that
was already processed. This is what keeps the Saturday routine cheap as the client
list grows.

**Rules (for the routine and for any manual sweep):**

1. **Bound every search by the client's baseline date** — e.g. Gmail
   `after:YYYY/MM/DD`, Ping meetings dated after the baseline, Double notes /
   activity created after it. Do not re-read anything on or before the baseline.
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
| BEST BROKER REALTY LLC | 2026-07-20 | — |
| ECOORGANIC USA LLC | 2026-07-20 | Gmail history not yet fully swept |
| Kolo Florida Inc | 2026-07-20 | Gmail history not yet fully swept |
| Pro Title Agency | 2026-07-20 | Gmail history not yet fully swept |

_Baselines set 2026-07-20 from the first manual sweep (Ping + Double for all five;
Gmail was fully searched only for Best Broker Realty — hence the catch-up notes)._
