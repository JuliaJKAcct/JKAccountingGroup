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
| Atman Parts | 2026-08-08 | — (full Gmail history swept; gap cleared 2026-08-08) |
| BEST BROKER REALTY LLC | 2026-08-08 | — (full Gmail history swept; gap cleared 2026-08-08) |
| ECOORGANIC USA LLC | 2026-08-08 | — (full Gmail history swept; gap cleared 2026-08-08) |
| GOSSIP MIAMI LLC | 2026-08-08 | — (Ping, Drive and full Gmail history all swept 2026-08-08; Ping genuinely has **no** indexed meetings for this client, scoped or org-wide — not a search miss) |
| Kolo Florida Inc | 2026-08-08 | ⚠️ **Winding down — the company is closing** (Lilian, 2026-08-11). Keep sweeping while the account closures run; **drop it from scope once the Double record is archived**, not before |
| Pro Title Agency | 2026-08-08 | — (full Gmail history swept; gap cleared 2026-08-08) |
| NEVER GIVE UP KK LLC | 2026-08-08 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| YES TEAM CORP | 2026-08-08 | — (enriched from Gmail; Ping had no indexed meetings) |
| MASCIAVE DESIGN STUDIO LLC | 2026-08-08 | — (enriched from Gmail + Double note; Ping had no indexed meetings) |
| iKids Group LLC | 2026-08-10 | **Ping cannot help on this client and re-checking it is wasted budget:** its two client Zoom calls are from **Jun–Jul 2025**, before Ping's index begins (~Jun 2026), so no transcript exists and none will. Use **Google Calendar** for who attended those calls — one is titled after the referring partner, not the client |
| Deep Tech Development Group LLC | 2026-08-08 | — (enriched from Gmail; Ping had no indexed meetings) |
| AURA REMODELING LLC | 2026-08-08 | — (enriched from Gmail; Ping had no indexed meetings) |
| Beemold USA LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Sunoma Inc | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| SENSUSTECH LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Mobilesource Corp | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Margate Plumbing Inc | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| MAGNUM 152, INC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| LUMETRO LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Ecom Beavers LLC | 2026-08-08 | — (enriched from Gmail + Drive; Ping had no indexed meetings) |
| Artur Tseretsian | 2026-08-01 | **Ping + full Gmail history still owed** — deferred twice now (the per-run full-pass cap went to the five gap clients above). Due the next run that has room |
| Ihor Naum & Olha Levchuk | 2026-08-01 | **Ping + Drive not yet swept, full Gmail history still owed** — same deferral; due the next run that has room |
| Denys Melnyk | 2026-08-11 | The file was seeded during the organizer-review pilot from Double (client record, properties, tax project, the working note, the file library and the 2025 organizer) **plus his 2024 tax return**. ⚠️ **Corrected 2026-08-12** — this row said *"Ping, Gmail and Drive never swept"*, and all three **were** read during the second review on 2026-08-12: **Drive holds no folder of his** (the "Melnyk" files there are a different person) and **Ping records no meeting with him**, while **Gmail turned up the P&L template sent 2026-08-05 and never returned**. **The baseline is deliberately left at 08-11**: it is not established that the Gmail pass was full-historical, and advancing it would bound the next run's search and lose his history for good. **A full historical Gmail pass is still owed.** _(The client's answers of 2026-08-12 came from a call with Lilian — a human telling us a fact never advances a baseline.)_ |
| M5 Studio Miami | 2026-08-14 | **No history to sweep — this baseline is the day the company came to us**, not a bound on an unread past. A set-up client (EIN application in flight); nothing exists before it. ⚠️ **No Double account confirmed** — sweep by NAME from Gmail / Ping / Drive. If a run finds a Double client, write the id into the client file's §2/§7 and leave the scope table to a human |
| Tsminibears LLC | 2026-07-30 | **Ping, Drive and full Gmail history never swept** — seeded from Double plus a targeted Gmail search around the Gusto / Florida RT case only. That catch-up is owed **only if the client is ever un-archived**: it is **excluded from the weekend sweep** while archived in Double (2026-06-08) |

> **THREE GROUPS OF CLIENTS DELIBERATELY HAVE NO ROW HERE — and the omission is the point.**
> A row is a *bound* on the next run's searches, so writing one for a client who has never been
> swept would make the next run search from that date forward and **skip their entire history for
> good**. The routine's rule (b) does the right thing with a missing row: **a client in scope with
> no row gets a one-time full historical sweep, then a row.** Leave all three groups out until that pass
> runs.
>
> 1. **Liudmyla's seven**, added to scope 2026-08-11 — the QuickBooks-connected companies the old
>    owner-derived scope had never covered.
> 2. **The TaxDome-backfill seven**, whose files were created **2026-08-14**: Vitalii Ivanov &
>    Tetiana Mogylova · Setatech USA · Igor Melomed & Yelena Lovkina · R & G Friendly ·
>    Viacheslav Honcharenko · Maria Contreras · Iurii Iakovenko & Alina Yakovenko.
>    ⚠️ **They HAVE had an incremental pass** — Gmail and Ping from **2026-08-08** forward, run
>    2026-08-14 on Lilian's instruction not to re-read history already captured — **and that is
>    exactly why no row may be written from it.** The pass covered six days; a row saying
>    `2026-08-08` would tell the next run that everything before those six days was already
>    read, which is false for every one of them. **Each still owes the full historical pass**, and
>    each file says so in its own header banner.
>
> 3. **`Grigoriy & Margarita Melomed` (710633)**, file created **2026-08-14**. A live client found
>    sideways while writing up a different household — **no TaxDome note, so no backfill ever saw
>    them** — with only March 2026 read. Same reasoning: no row until the full pass runs.
>
> ⓘ **A client with genuinely NO history is the opposite case and needs none of this** — it gets an
> ordinary **row** dated the day it arrived (M5 Studio Miami, above). A row is only withheld from a
> client whose *past is unread*; withholding one from a client with no past would trigger a full
> historical sweep over nothing.
>
> _(The first two sets happen to number seven each. They are not the same clients, and no group's
> catch-up covers another's.)_
>
> ⚠️ **This list is not the whole population of row-less clients** — reconciling the scope table
> against this ledger leaves a handful unaccounted for beyond the three groups named above. **Do that
> reconciliation before trusting the enumeration**; the rule (no row until a full pass) is what
> governs, not the list.

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

