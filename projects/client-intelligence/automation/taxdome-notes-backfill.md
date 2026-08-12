# The TaxDome notes backfill — a Client Intelligence source nobody has read

**Status: NOT STARTED.** Scoped 2026-08-12 (Lilian). Blocked only on running it from a
session that can reach Google Drive and Double — see *Prerequisites* below.

When the firm migrated from **TaxDome** to **Double**, the notes that had been written by
hand on each client's TaxDome profile were saved rather than discarded. They survive in two
places, and **Client Intelligence has never read either of them.**

That makes this the richest unswept source the firm has. Everything else the weekend sweep
reads — Gmail, Ping, Double activity — is raw traffic that someone still has to interpret.
These are notes a person deliberately wrote *about the client*, which is exactly what a
client file is for.

---

## Where the notes are

Lilian's description, 2026-08-12 — **reported, not yet verified from a session**:

| Home | Path | Notes |
|---|---|---|
| **Google Drive** (Julia's) | [`4. Documents`](https://drive.google.com/drive/folders/164iqAE3dV7npw_QVcuLwfjNy8Mtc-ybV) → search the whole tree for folders named `Notes` | ✅ The folder ID resolves — confirmed 2026-08-12 as *"4. Documents"*, owner `julia@`, last modified 2026-05-28 |
| **Double** | The client's file library → `TaxDome/` → `Notes/` — present for **many, not all** clients | The `TaxDome/` parent is already documented in [`double-mcp`](../../../.claude/skills/double-mcp/) §3; **the `Notes/` subfolder is not**, because no session has looked at one yet |

**The same notes are in both places.** Whichever is cheaper to walk is the right one to
use — Drive's search can find every `Notes` folder in one query, whereas Double needs
`list_file_library` per client across ~150 clients. **Start with Drive; use Double to fill
gaps and to confirm which client a folder belongs to.**

---

## The rule that governs this work: assign by company, not by where it was filed

This is the part most likely to be got wrong, and Lilian raised it unprompted.

**TaxDome did not separate the owner from their company the way Double does.** Under one
owner's profile the firm ran *everything* — the company's filings and the owner's personal
matters together. So a note about **a company** can be sitting under **the owner's**
profile, and reading the folder name as the subject will file it against the wrong client.

The existing rule already covers the mechanics — [`client-intelligence`](../../../.claude/skills/client-intelligence/)
*"Owners with several businesses — sweep by owner, assign by company (and person)"*: build
the **owner → [companies + individual profile]** map first, gather everything under the
owner, then route each fact to the file it belongs to.

**What this backfill adds is that the folder's location is not evidence of the subject.**
So:

1. **Read the note's content to decide the subject** — never the folder it sits in.
2. **A company matter goes to the company's file**, even when the note was filed under the
   owner. Record where it came from (`_(TaxDome notes, migrated — filed under <owner>)_`).
3. **A personal / 1040 matter goes to the person's file**, even when filed under a company.
4. **When a note genuinely covers both**, split it — the company part to the company, the
   personal part to the person. Do not duplicate the whole note into both files.
5. **When you cannot tell**, say so and ask. Do not guess — a fact filed against the wrong
   client is worse than one nobody wrote down, because the next person believes it.

> ⚠️ **These are migrated notes, so they are OLD by construction.** A note written in the
> TaxDome era may describe a system, a cadence or a contact that has since changed. Tag
> every fact `_(TaxDome notes, migrated — <date if the note carries one>)_` and, where it
> contradicts something current, **write both with their sources and mark it unsettled**
> rather than overwriting today's fact with a 2023 one. That is the standing
> contradiction rule, and this source will trigger it more than any other.

---

## The plan

### Phase 1 — Inventory (no content read)

Walk the Drive tree and produce a table, **committed to this file** under *Progress*:

| Client (as named on the folder) | Where | Files | Subject: company / owner / mixed | Has a CI file? |
|---|---|---|---|---|

Nothing is read into a client file in this phase. The point is to size the job and let
Lilian pick the order. Expect the list to be longer than the client roster we cover today:
there are **31 client files** against **~150 clients in Double**, so some notes will belong
to clients with no file at all — those get one created (the coverage rule).

### Phase 2 — Read and route, in batches

Client by client, applying the routing rule above. Commit per client. Keep batches small
enough that the work survives a session ending.

### Phase 3 — Record who is done

`sweep-state.md` has **no notion of this source** — its coverage column tracks Ping, Double,
Gmail and Drive. Add a `TaxDome notes` marker per client as each is completed, otherwise in
a month nobody can tell who was covered. **Do this in the same commit as the client-file
edits**, per the ledger's own rule 4.

---

## Prerequisites — the environment

**This work cannot run from a session that cannot get MCP approvals.** Found the hard way
on 2026-08-12:

| Call | Result |
|---|---|
| Drive `get_file_metadata` (direct ID) | ✅ worked |
| Drive `search_files` | ❌ `requires approval` |
| Drive `list_recent_files` | ❌ `requires approval` |
| Double `list_file_library` | ❌ `requires approval` |

The connectors were **not** down — the direct-ID lookup went through. The session was a
**child session started from the mobile app** (`CLAUDE_CODE_ENTRYPOINT=remote_mobile`,
`CLAUDE_CODE_CHILD_SESSION=1`, environment `cloud_default`), and a session of that shape
inherits a fixed set of pre-approved tools with **no way to prompt the user for anything
outside it** — so the call is refused rather than queued for approval.

⚠️ *That last sentence is the inference that fits the evidence, not something the harness
states. What is certain is the pattern above: some tools worked, others returned
`requires approval`, and no prompt reached the user.*

**So: run this from an ordinary session at claude.ai/code where permission prompts appear,**
or from one whose `settings.local.json` already pre-approves the Drive and Double read
tools. Permission allow-lists are **personal** and stay out of the shared repo — decided
2026-08-11, and `.claude/settings.local.json` is gitignored for exactly this reason.

---

## Progress

Nothing swept yet. Phase 1 has not been run.

| Date | Phase | Clients covered | By |
|---|---|---|---|
| — | — | — | — |
