# FOLLOW-UPS — started work waiting for a second pass

The firm's **open loops**: things we started and left mid-stream — a review still
owed, a filing waiting on one document, a doc to polish. This is **not**
[`BACKLOG.md`](./BACKLOG.md) (that's *future ideas to build*); this is *active work
that isn't finished*, so nothing you began quietly falls off the radar between
sessions.

> **Kept in English** like every repo artifact. **No sensitive client data** —
> dollar figures, EINs, application/folio numbers and the like live in the firm's
> client systems (Double / Drive). A row may name the client business and the
> pending action, and point to the Double note for the specifics.

## How we use this

- **Not auto-surfaced.** Nobody is shown this on session start — it would be noise
  for whoever didn't need it that day. It appears **on demand**: when someone asks
  *"what do I have pending?"* / *"¿qué me quedó pendiente?"*, Claude reads this file.
- **Filtered by person.** Each follow-up has an **Owner**. Because the firm shares
  one Claude account, say who you are first — **Lilian identifies herself ("soy
  Lilian"); an unidentified session is treated as Julia / firm** (the same rule as
  `CLAUDE.md` → *Session identity is provenance*). Claude then shows **that person's**
  open loops (and can show everyone's if asked).
- **Capturing:** when we leave something half-done, add a row — Owner, where it
  lives, the next concrete action, and the date. Do this whenever time runs out
  mid-task, so the thread survives the session.
- **Working a follow-up → always confirm before closing.** When a session
  actually works on one of these, at the **end of that work Claude asks the
  owner**: *"is this resolved — should I take it off the open loops, or are we
  continuing it?"* **Claude never deletes a row on its own.**
  - On a **yes** → delete the row (git history keeps the trail).
  - If it **advanced but isn't done** → update its **Next action** (and date) and
    leave it on the list.

  This is the safety net: nothing we worked on is silently left open, and nothing
  resolved lingers. Keep this list short — it's the live plate, not an archive.

## Open loops

| # | Follow-up | Owner | Where it lives | Next action | Added |
|---|---|---|---|---|---|
| 1 | Final detailed review of the **BTR SOP** | Lilian | [`projects/sops/hollywood-broward-business-tax-receipt.md`](./projects/sops/hollywood-broward-business-tax-receipt.md) (has an "In review" header note) | Read it through → sign off, or list changes → then update the [`sop-authoring`](./.claude/skills/sop-authoring/) skill (v2) and remove the in-review note | 2026-07-15 |
| 2 | **Best Broker Realty** — City of Hollywood BTR | Lilian | Double (client note) | Obtain + upload the DBPR state license (and resolve whether the business actually holds one); don't pay the category difference until the city sends instructions | 2026-07-15 |
| 3 | **Pro Title Agency** — Broward County receipt | Lilian | Double (client note) | Confirm the county balance is paid and print the receipt (the payment email may be sitting in Gmail's "Updates" tab) | 2026-07-15 |
| 4 | **Pro Title Agency** — City of Hollywood BTR tracking | Lilian | Double (client note) | The client's email was used on the application, so the firm can't track status — decide: ask the city to switch the contact email, or have the client forward the status emails | 2026-07-15 |

_Owners: **Lilian**, **Julia**, or **Firm** (shared). Ask "what's pending for me?"
and say who you are to filter._
