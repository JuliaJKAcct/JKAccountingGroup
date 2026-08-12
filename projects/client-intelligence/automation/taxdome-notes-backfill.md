# The TaxDome notes backfill — a Client Intelligence source nobody has read

**Status: SCOPED, NOT STARTED.** Raised by Lilian 2026-08-12.
🔴 **Phase 2 is BLOCKED on a decision only Lilian or Julia can make** — see *The permission
question* below. Phase 1 is not blocked by it, but needs an environment that can reach the
sources (*Prerequisites*).

When the firm migrated from **TaxDome** to **Double**, the notes that had been written by
hand on each client's TaxDome profile were saved rather than discarded. They survive in two
places, and **Client Intelligence has never read either of them.**

That makes this the richest unswept source the firm has. Everything else the weekend sweep
reads — Gmail, Ping, Double activity — is raw traffic that someone still has to interpret.
These are notes a person deliberately wrote *about the client*, which is exactly what a
client file is for.

---

## Where the notes are

Lilian's description, 2026-08-12 — **reported, not yet verified from a session.** Only the
Drive folder ID below has been confirmed.

| Home | Path | Confidence |
|---|---|---|
| **Google Drive** (Julia's) | [`4. Documents`](https://drive.google.com/drive/folders/164iqAE3dV7npw_QVcuLwfjNy8Mtc-ybV) → search the whole tree for folders named `Notes` | ✅ The folder ID resolves — *"4. Documents"*, owner `julia@`, last modified 2026-05-28. ⚠️ **How the tree is organised below it is unknown** — do not assume it mirrors Double's `TaxDome/<client>/` shape |
| **Double** | The client's file library → `TaxDome/` → `Notes/` — reported present for **many, not all** clients | ⚠️ Unverified. The `TaxDome/` parent is documented in [`double-mcp`](../../../.claude/skills/double-mcp/) §3; the `Notes/` subfolder is recorded there as reported-only, because no session has opened one |

⚠️ **Do not assume the two copies are identical.** Lilian described the same notes as living
in both, but that is her account and **neither copy has been listed**. A Drive-only walk that
comes up short produces no signal that anything is missing — so **Phase 1 walks Drive first
and then cross-checks a sample against Double**, rather than treating Drive as authoritative.

---

## 🔴 The permission question — read this before Phase 2

**The firm's own rule currently forbids the shape of this work, and that has to be resolved
by Lilian or Julia, not inside a session.**

[`double-mcp`](../../../.claude/skills/double-mcp/)'s document rule says the default is *"do
not fetch client documents in order to read them"*, and its limits are explicit:

- **Limit 2** — *"never a document that is not part of that year's filed return"*
- **Limit 3** — *"never across clients. No loop, no sweep, no 'while I'm here.'"*
- and: *"Limits 1 and 2 are the only two Lilian can waive… **Everything from 3 down is
  absolute** and nobody waives it in a session."*

A backfill that reads a `Notes` folder for many clients is **a cross-client sweep of
non-return documents** — squarely what limit 3 rules out. Lilian asking for this work in
conversation is not the same as ruling on that limit: the whole point of "nobody waives it in
a session" is that a session must not talk itself into the waiver.

**So, before any note content is read:**

1. **Put it to Lilian explicitly**, naming what changes — that this reads non-return documents
   across the roster, which limit 3 currently forbids.
2. **Record her answer in the `double-mcp` document rule itself**, with the date, the way the
   2026-08-11 prior-year-return hole was recorded. A decision that lives only here will not be
   found by the session that needs it.
3. **Only then run Phase 2.**

**Phase 1 is not blocked by this.** It reads *folder and file names only* — which is exactly
the zone the same rule points sessions at (*"work from file names and folder structure"*).

---

## The rule that governs the routing: assign by company, not by where it was filed

This is the part most likely to be got wrong, and Lilian raised it unprompted.

**TaxDome did not separate the owner from their company the way Double does.** Under one
owner's profile the firm ran *everything* — the company's filings and the owner's personal
matters together. So a note about **a company** can be sitting under **the owner's**
profile, and reading the folder name as the subject will file it against the wrong client.

The existing rule already covers the mechanics — [`client-intelligence`](../../../.claude/skills/client-intelligence/)
*"Owners with several businesses — sweep by owner, assign by company (and person)"*: build
the **owner → [companies + individual profile]** map first, gather everything under the
owner, then route each fact to the file it belongs to.

**What this backfill adds is that the folder's location is not evidence of the subject.** So:

1. **Read the note's content to decide the subject** — never the folder it sits in.
2. **A company matter goes to the company's file**, even when the note was filed under the
   owner, and vice versa.
3. **When a note genuinely covers both**, split it — the company part to the company, the
   personal part to the person. Do not duplicate the whole note into both files.
4. **When you cannot tell**, say so and ask. Do not guess — a fact filed against the wrong
   client is worse than one nobody wrote down, because the next person believes it.

### The source tag — one shape, defined here

Every fact taken from these notes is tagged, and **this file is the only place the shape is
prescribed** (so it cannot drift between copies):

```
_(TaxDome notes, migrated — filed under <owner or company>; <date the note carries, if any>)_
```

Drop either half you do not have; keep `TaxDome notes, migrated` always, because it is what
tells the next reader the fact may be years out of date.

> ⚠️ **These notes are OLD by construction.** One may describe a system, a cadence or a
> contact that has since changed. Where a note contradicts something current, **write both
> with their sources and mark the fact unsettled** rather than overwriting today's fact with
> a 2023 one. That is the standing contradiction rule, and this source will trigger it more
> than any other.

### What may be written down — the ordinary CI rules apply unchanged

Nothing here relaxes them, and this source needs the reminder more than most: Lilian
described these notes as covering **the owner's personal matters** alongside the company's.

- **Two data homes.** Non-sensitive knowledge and links in the repo; secrets and personal
  data — logins, account numbers, EINs, **dollar figures**, personal emails/phones, street
  addresses — stay in Double/Drive and are referenced by link.
- **The identity block never travels**: SSN/ITIN, driver's licence, passport and any other
  government identifier, dates of birth, bank routing/account numbers.
- **The two zones.** Operating facts → §1–§5, §7. The dated log and open threads → §6.
- ⚠️ **These files auto-publish.** `projects/knowledge-hub/build-hub.mjs` renders **every**
  file in `clients/` with no allowlist. Write the **consequence, not the circumstance** —
  the open question about circumstance facts reaching the Hub is
  [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 30, and this source is exactly the kind that
  will test it.

---

## The plan

### Phase 1 — Inventory (folder and file NAMES only)

Walk the Drive tree, cross-check a sample against Double, and fill in the *Inventory* section
below. **No note content is read in this phase** — which is what keeps it inside the
permitted zone while the permission question above is open.

Because the subject can only be settled by reading content, the inventory records **where a
folder sits**, not whose it is:

| Client / folder name as it appears | Home (Drive · Double · both) | Files | Filed under (company · owner · unclear) | Has a CI file? |
|---|---|---|---|---|

*"Filed under"* is a structural observation, not a routing decision — the routing rule above
governs that, and it happens in Phase 2.

The point of this phase is to size the job and let Lilian pick the order. Expect the list to
be longer than the client roster we cover today: **31 client files against ~150 clients in
Double**, so some notes will belong to clients with no file at all — those get one created
(the coverage rule).

### Phase 2 — Read and route, in batches

🔴 **Gated on the permission question above.** Then: client by client, applying the routing
rule and the writing rules. Commit per client, in small batches, so the work survives a
session ending.

### Phase 3 — Record who is done, **in this file**

`sweep-state.md` has **no notion of this source**, and its third column is the wrong home for
a completion marker: it reads *"Coverage gaps (one-time catch-up owed)"*, and that ledger's
own rule 2 says a client with a note there **still owes** a pass and clears it once done.
Writing "TaxDome notes" there once a client is finished would invert the meaning and invite
the Saturday routine to spend its catch-up budget re-doing completed work.

**So completion is recorded in the *Progress* table at the bottom of this file**, per client.
`sweep-state.md` carries only a pointer saying its baselines do not speak for this source.

> ⚠️ **This is not weekend-sweep work.** The unattended Saturday routine merges its own
> output without review **only** while its diff stays inside `clients/`,
> `automation/sweep-state.md` and `sop-proposals.md` — and Phase 2/3 touches **this** file,
> which voids that precondition. Run the backfill as ordinary, reviewed work in an attended
> session. The routine also has nobody to answer the routing rule's *"ask when you cannot
> tell"*, and cannot tell a refused call from a connector outage.

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

**So: run this from an ordinary session at claude.ai/code where permission prompts appear.**

A personal allow-list in `.claude/settings.local.json` also works, and permission grants are
**personal** — they must not reach the shared repo, since one teammate's grant would silently
apply in the other's session against their own accounts (decided 2026-08-11).
⚠️ **But check before creating that file: it is NOT gitignored on `main` today.** The commit
adding it to `.gitignore` sits on the unmerged branch `claude/gmail-inbox-triage-9a18lo`, and
sessions in this repo routinely run `git add -A`. Either land that branch first, or add the
ignore line before writing the file.

---

## Inventory (Phase 1 output)

Not yet run. The table defined in Phase 1 goes here.

## Progress

Nothing swept yet.

| Date | Phase | Clients covered | By |
|---|---|---|---|
| — | — | — | — |
