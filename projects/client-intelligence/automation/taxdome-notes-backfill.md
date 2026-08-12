# The TaxDome notes backfill — a Client Intelligence source nobody has read

**Status: PHASE 1 DONE (2026-08-12) · PHASE 2 STILL BLOCKED.** Raised by Lilian 2026-08-12.
🔴 **Phase 2 is BLOCKED on a decision only Lilian or Julia can make** — see *The permission
question* below. **Phase 1 ran on 2026-08-12** and its output is in *Inventory* at the bottom:
**33 `Notes` folders → 22 distinct clients, 11 of them with no CI file at all.**

ⓘ **A third source appeared the same day** — Lilian's own iCloud phone notes, handed over
directly. **That source is NOT blocked** by the permission question, and the first client
(**Optic Gold**) was written up from it on 2026-08-12. See *A THIRD source* below.

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
  data — logins, account numbers, **dollar figures**, personal emails/phones, street
  addresses — stay in Double/Drive and are referenced by link. 🔵 **A business EIN may now be
  written in the repo** _(Lilian, 2026-08-12 — public on Sunbiz)_; an SSN/ITIN still may not.
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

**Run 2026-08-12** from an ordinary cloud session. Names only — no note content was opened.
Method: Drive `search_files` for every folder whose title contains `Notes`, then each parent
resolved by ID; cross-checked against Double `list_file_library` on three clients.

### What the walk corrected in the assumptions above

1. ✅ **The Drive tree does NOT mirror Double's `TaxDome/<client>/` shape** — the caution above
   was right to flag it. `TaxDome` in Drive is the **root of the whole migration tree**, not a
   per-client folder. The real path is
   `JK Accounting Group → TaxDome → *Migration to Double → <one of three subtrees> → <client> → N. Notes`.
2. 🔴 **`*Dupplicated` is a near-copy of `*QBO Clients and Individuals`** — same clients, same
   notes. **33 `Notes` folders collapse to 22 distinct clients.** Anyone walking the tree
   client-by-client without noticing this processes eleven clients twice.
3. ✅ **Double's `TaxDome > <Client> > N. Notes` is now VERIFIED**, not reported-only — seen on
   Optic Gold (`1. Notes`, 2 files), Andrii Tymchenko (`1. Notes`, 2 files) and Mays Express
   (`2. Notes`). The numeric prefix varies (`1.`, `2.`, `3.`) — match loosely.
4. ✅ **Not every client has one** — Ecoorganic USA has a `TaxDome` folder in Double with **no**
   `Notes` subfolder, while its Drive folder does have one. **So the two copies are NOT
   interchangeable**, exactly as this file warned. Walk Drive, then confirm per client.
5. ✅ **The environment problem does not affect an ordinary cloud session.** Drive `search_files`,
   `list_recent_files` and Double `list_file_library` all worked here without approval friction.
   The *Prerequisites* diagnosis holds: it is the mobile child session that cannot prompt.

### The 22 clients

*"Filed under" is structural only — the routing rule above still decides the subject.*
File counts were **not** taken except where shown; the point of this pass was to size and order
the job.

| Client / folder name | Drive subtree(s) | Double `Notes`? | Filed under | CI file? |
|---|---|---|---|---|
| Optic Gold Inc | QBO · Dup | ✅ `1. Notes` (2 files) | company | ✅ `optic-gold.md` — **done** |
| Ecoorganic USA LLC | QBO · Dup | ❌ none | company | ✅ `ecoorganic-usa.md` |
| Ecom Beavers LLC | QBO · Dup | _(unchecked)_ | company | ✅ `ecom-beavers.md` |
| CANDRAMAS LLC | QBO · Dup | _(unchecked)_ | company | ✅ `candramas.md` |
| Greenair International LLC | QBO · Dup | _(unchecked)_ | company | ✅ `greenair-international.md` |
| DEEP TECH DEVELOPMENT GROUP LLC | QBO · Dup | _(unchecked)_ | company | ✅ `deep-tech-development.md` |
| OneTwoStrategies INC | QBO · Dup | _(unchecked)_ | company | ✅ `onetwo-strategies.md` |
| ZETECH LLC | QBO · Dup | _(unchecked)_ | company | ✅ `zetech.md` ⚠️ **two Double records** — `ZETECH LLC` (706710, qbo) and `Zetech Holding LLC` (717754). Settle which before writing |
| Masciave Design Studio | Dup | _(unchecked)_ | company | ✅ `masciave-design-studio.md` |
| MAGNUM 152 INC | Dup | _(unchecked)_ | company | ✅ `magnum-152.md` |
| Ihor Naum | QBO · Dup | _(unchecked)_ | **owner** | ✅ `ihor-naum-olha-levchuk.md` |
| VITALII IVANOV | QBO · Dup | _(unchecked)_ | **owner** | ❌ — Double: `VITALII IVANOV & TETIANA MOGYLOVA` (710666) |
| IGOR MELOMED | QBO | _(unchecked)_ | **owner** | ❌ ⚠️ **two Melomed households in Double** — `Igor Melomed & Yelena Lovkina` (710635) and `Grigoriy & Margarita Melomed` (710633) |
| SETATECH USA INC | QBO · Dup | _(unchecked)_ | company | ❌ — Double record **archived** 2026-07-22 (706706) |
| Andrii Tymchenko | 4. Documents | ✅ `1. Notes` (2 files) | **owner** | ❌ — Double 710619 |
| MAYS EXPRESS SERVICE LLC | 4. Documents | ✅ `2. Notes` | company | ❌ — Double 710582 |
| R & G Friendly Inc | 4. Documents | _(unchecked)_ | company | ❌ — Double 710589 |
| YMI Trucking LLC | 4. Documents | _(unchecked)_ | company | ❌ — Double 710608 |
| Voicecapital Inc | 4. Documents | _(unchecked)_ | company | ❌ — Double 710725 |
| Viacheslav Honcharenko | 4. Documents | _(unchecked)_ | **owner** | ❌ — Double 710665 |
| Maria Contreras | 4. Documents | _(unchecked)_ | **owner** | ❌ — Double 710646 |
| Iurii Iakovenko | 4. Documents | _(unchecked)_ | **owner** | ❌ — Double: `Iurii Iakovenko & Alina Yakovenko` (710639) |

**Half the roster has no CI file (11 of 22)** and **seven folders are filed under a person**, which
is precisely where the routing rule earns its keep.

Three `Notes` folders found by the search are **not** part of this backfill and should be skipped:
`My notes - Lilian` (personal), a `Notes` folder under an internal `Audit` folder, and a `Notes`
folder owned by `Izabella@primeroadcarriers.com` — that one is **the client's own Drive**, shared
with us, not our migrated material.

### What the note titles already show (titles only — permitted)

Enough to justify the whole exercise: `1.1 - IRS call 02.04.2026 - Form 2553 not received`,
`1.2 - IRS call 03.16.2026 - Form 2553 accepted` (Optic Gold) · `Annual Report`,
`04.06.2026 CT state call - sales tax account` (Ecoorganic) · `FDOR - tax dates change`
(Deep Tech) · `04.07.2026 - 2025 Tax organizer - summary call` (Andrii Tymchenko).

---

## A THIRD source: Lilian's own iCloud notes

**Added 2026-08-12.** Lilian kept per-client notes on her phone from before the firm used Claude,
and handed them over directly as screenshots. **This source is not affected by the permission
question above** — she supplied the content herself rather than a session reading a document.

Her iCloud folder `1-JK Accounting` has a subfolder per client: **Candramas · Deep Tech · Gossip
Miami · Magnum 152 INC · Masciave Design · Mays Express · Megabai · Optic Gold Inc · Voicecapital
Inc · Voxago · YMI Trucking**, plus `1- Pending Things` and `2-Important Info`.

✅ **`Megabai` — resolved by Lilian, 2026-08-12.** It has no Double record because it is a
**former client whose company closed**; it was a **bookkeeping** client. **It still gets a Client
Intelligence file** — *"deja el registro en el Client Intelligence… deja esa información
guardada. Es un cliente antiguo."* — and **no Double note**, since there is no Double account to
put one on. ⚠️ **This is a general case, not a one-off:** a closed client is exactly the one whose
history nobody can reconstruct later, so the absence of a Double record is a reason to write the
file, never a reason to skip it.

The content is the same *kind* as the TaxDome notes and **overlaps them** (Optic Gold's two IRS
calls appear in both), so **read the phone note and the migrated note together and reconcile**
rather than writing each up separately.

**Source tag — the same shape, different source name:**

```
_(Lilian's iCloud notes, migrated — folder "<folder>"; note dated <date>)_
```

### The chronology rule — Lilian, 2026-08-12

**These notes are snapshots, and a later source overrides them.** Her instruction: *if an old note
says a problem is open, and you know from another source that it was later resolved, the latest
information is what stands.* So:

1. **Date every fact** from the date the note carries, not the date the screenshot was taken.
2. **Where a later source resolves an earlier note, write the resolution as the fact** and keep
   the earlier state in the §6 log as history — not in §1–§5 as if it were still true.
3. This is **narrower than the standing contradiction rule** and does not replace it: contradiction
   means two sources disagree and neither wins, so both get written with their sources. Chronology
   means one source **supersedes** the other because it is later on the same thread. Tell them
   apart before deciding which to apply.

### 🛑 An open thread stays open — do NOT go looking for the ending

**Lilian, 2026-08-12, and this is the instruction most likely to be over-ridden by good
intentions.** Many of these notes stop mid-matter. That is expected and **it is not a gap to
close**: *"puede que haya cosas que hayas resuelto y no las hayas registrado en mis notas. No me
es posible ahora ir cliente por cliente resolviendo todos esos problemas."*

- **Record the matter as far as the sources actually go, and mark it open.** Do not chase a
  resolution across Gmail, Drive and Double hoping to find one, and **never infer an ending** from
  the fact that nobody mentioned the problem again. Silence is not resolution.
- **If it is not in the reachable sources — Julia's Drive, Double, the notes she supplied, the
  documents, this chat, Gmail — there is nothing to be done.** *"Quedará abierto."*
- **Say what is open, in the file.** An honest "open, last known state 2026-03-16, no outcome
  recorded anywhere" is the deliverable. It is worth more than a confident guess, and it is what
  lets her top it up later: *"tal vez algún día, si volvemos al tema, te puedo dar más
  información."*

⚠️ **This governs the BACKFILL of old material only.** Going forward the opposite applies — work
done with Claude gets recorded as it happens, chronologically (see the standing rule in
[`CLAUDE.md`](../../../CLAUDE.md), *"What we DO together gets recorded"*). The backfill is
salvage; from here the record is kept properly.

---

## Progress

| Date | Phase | Clients covered | By |
|---|---|---|---|
| 2026-08-12 | **Phase 1 — inventory** | All 22 identified; names only, no content read | Lilian |
| 2026-08-12 | **Phase 2 (iCloud source only)** | **Optic Gold Inc** — `optic-gold.md` §1/§4/§5/§6/§7 + Double case note **491051** | Lilian |
