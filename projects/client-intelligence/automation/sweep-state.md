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
| Atman Parts | 2026-08-08 | — (Gmail full-history gap closed 2026-08-08) |
| BEST BROKER REALTY LLC | 2026-08-08 | — (Gmail full-history gap closed 2026-08-08) |
| ECOORGANIC USA LLC | 2026-08-08 | — (Gmail full-history gap closed 2026-08-08) |
| GOSSIP MIAMI LLC | 2026-08-08 | — (Ping, Drive and full Gmail history gap closed 2026-08-08) |
| Kolo Florida Inc | 2026-08-08 | — (Gmail full-history gap closed 2026-08-08) |
| Pro Title Agency | 2026-08-08 | — (Gmail full-history gap closed 2026-08-08) |
| NEVER GIVE UP KK LLC | 2026-08-08 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| YES TEAM CORP | 2026-08-08 | — (enriched from Gmail; Ping had no indexed meetings) |
| MASCIAVE DESIGN STUDIO LLC | 2026-08-08 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| iKids Group LLC | 2026-08-08 | — (enriched from Gmail; Ping had no indexed meetings) |
| Deep Tech Development Group LLC | 2026-08-08 | — (enriched from Gmail + Double; Ping had no indexed meetings) |
| AURA REMODELING LLC | 2026-08-08 | — (enriched from Gmail; Ping had no indexed meetings) |
| Beemold USA LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Sunoma Inc | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| SENSUSTECH LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Mobilesource Corp | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Margate Plumbing Inc | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| MAGNUM 152, INC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| LUMETRO LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Ecom Beavers LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Artur Tseretsian | 2026-08-08 | Ping + Gmail history not yet swept (file seeded from Double + the 2023–2025 tax-prep engagement). Incremental-only this run (≥2026-07-30) — nothing new; the run-wide ~6-full-pass cap went to Atman Parts, Best Broker, Ecoorganic, Gossip Miami, Kolo Florida and Pro Title Agency instead. **Owed next run.** |
| Ihor Naum & Olha Levchuk | 2026-08-08 | Ping + Drive not yet swept (file seeded from Double + a targeted Gmail search around the Form 8802 filing; full Gmail history still owed). Incremental-only this run (≥2026-07-30) — nothing new; deferred for the same cap reason. **Owed next run.** |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — the file was seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) — see the "Excluded — archived clients" table in `weekend-ci-sweep.md` |

_Baselines set 2026-07-20 (initial manual sweep). **2026-08-08 weekend run:** all 22
scoped clients swept — 16 incremental, 6 full-history gap-catch-up passes (Atman
Parts, Best Broker Realty, Ecoorganic USA, Gossip Miami, Kolo Florida, Pro Title
Agency), which used up this run's ~6-full-pass cap. Artur Tseretsian and Ihor
Naum & Olha Levchuk still owe their catch-up passes — carried to the next run._
