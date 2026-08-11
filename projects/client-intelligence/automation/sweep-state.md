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
| GOSSIP MIAMI LLC | 2026-08-04 | **Ping and Drive never swept, and Gmail only searched for this client's own threads.** The file was seeded from Lilian's briefing plus a targeted Gmail search; a full historical sweep is still owed |
| Kolo Florida Inc | 2026-07-20 | Gmail history not yet fully swept |
| Pro Title Agency | 2026-07-20 | Gmail history not yet fully swept |
| NEVER GIVE UP KK LLC | 2026-07-20 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| YES TEAM CORP | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| MASCIAVE DESIGN STUDIO LLC | 2026-07-20 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| iKids Group LLC | 2026-08-10 | **Ping cannot help on this client and re-checking it is wasted budget:** its two client Zoom calls are from **Jun–Jul 2025**, before Ping's index begins (~Jun 2026), so no transcript exists and none will. Use **Google Calendar** for who attended those calls — one is titled after the referring partner, not the client. Gmail + Drive + Double swept 2026-08-10 (people/ownership pass) |
| Deep Tech Development Group LLC | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| AURA REMODELING LLC | 2026-07-20 | — (enriched from Gmail; Ping had no indexed meetings) |
| Beemold USA LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Sunoma Inc | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| SENSUSTECH LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Mobilesource Corp | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Margate Plumbing Inc | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| MAGNUM 152, INC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| LUMETRO LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Ecom Beavers LLC | 2026-07-20 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Artur Tseretsian | 2026-07-30 | Ping + Gmail history not yet swept (file seeded from Double + the 2023–2025 tax-prep engagement) |
| Ihor Naum & Olha Levchuk | 2026-07-30 | Ping + Drive not yet swept (file seeded from Double + a targeted Gmail search around the Form 8802 filing; full Gmail history still owed) |
| Denys Melnyk | 2026-08-11 | **Ping, Gmail and Drive never swept.** The file was seeded from Double alone (client record, properties, tax project, the working note, the file library and the 2025 organizer) during the organizer-review pilot. A full historical pass of the other three sources is owed — note that this client communicates by **voice message**, so Ping/Gmail may hold little and Double is the primary source |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — the file was seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) — see the "Excluded — archived clients" table in `weekend-ci-sweep.md` |

_Baselines set 2026-07-20. The first five came from the manual sweep (Ping + Double
for all five;
Gmail was only searched topically, around Best Broker's BTR — hence every client
owes a one-time full Gmail pass). That catch-up run may exceed the steady-state
per-client call bound once; that's expected._
