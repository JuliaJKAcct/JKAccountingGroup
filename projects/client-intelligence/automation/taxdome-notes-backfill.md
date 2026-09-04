# The TaxDome notes backfill — a Client Intelligence source nobody has read

**Status: PHASE 1 DONE (2026-08-12) · PHASE 2 DONE (2026-08-13).** Raised by Lilian 2026-08-12.
✅ **The permission question below was ANSWERED by Lilian on 2026-08-13** and the ruling is recorded
where a session will actually find it — in the [`double-mcp`](../../../.claude/skills/double-mcp/)
document rule, as *"The SECOND hole"*. The section below is kept as the reasoning that produced it. **Phase 1 ran on 2026-08-12** and its output is in *Inventory* at the bottom:
**33 `Notes` folders → 22 distinct clients.** (11 had no CI file then; **7 still do not** — see Phase 2.)

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
- ⚠️ **This page used to quote a third sentence — *"Limits 1 and 2 are the only two Lilian can
  waive… Everything from 3 down is absolute"* — as the rule in force. 🛑 THAT SENTENCE NO LONGER
  EXISTS.** The limits were amended twice by Lilian herself: **2026-08-13** *(the TaxDome `Notes`
  carve-out — this backfill)* and **2026-09-04** *(her ask is itself the permission, opening limits
  1–4)*. ⛔ **Read the limits in [`double-mcp`](../../../.claude/skills/double-mcp/SKILL.md) — do not
  work from the quotations on this page**, which are kept only to show what the question was when it
  was asked.

A backfill that reads a `Notes` folder for many clients was **a cross-client sweep of
non-return documents** — squarely what limit 3 ruled out at the time. **Lilian asking for this work
in conversation is not the same as ruling on that limit**, and that distinction is what made this
page right to stop and ask.
✅ **She DID rule, on 2026-08-13, and the carve-out is written into the skill** *("The SECOND hole")*.
🔓 **And on 2026-09-04 she went further:** *"está permitido hacerlo bajo solicitud mía o de Julia"* —
so **her ask now opens limits 1–4 generally.** 🔑 **The lesson this page was written to teach survives
intact and is now firm-wide policy:** a session must not talk itself into a waiver — **it asks, and
the answer gets written into the rule.**

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

✅ **The permission question above was answered by Lilian on 2026-08-13, and this ran the same day** — see *Phase 2 ran 2026-08-13* below. Then: client by client, applying the routing
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
resolved by ID; cross-checked against Double `list_file_library` on four clients.

### What the walk corrected in the assumptions above

1. ✅ **The Drive tree does NOT mirror Double's `TaxDome/<client>/` shape** — the caution above
   was right to flag it. `TaxDome` in Drive is the **root of the whole migration tree**, not a
   per-client folder. The real path is
   `JK Accounting Group → TaxDome → *Migration to Double → <one of three subtrees> → <client> → N. Notes`.
2. 🔴 **`*Dupplicated` is a near-copy of `*QBO Clients and Individuals`** — mostly the same clients and
   the same notes, though **Masciave and Magnum 152 appear only in `*Dupplicated`, and Igor
   Melomed only in `*QBO`**. **33 `Notes` folders collapse to 22 distinct clients.** Anyone walking the tree
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
| Ihor Naum | QBO · Dup | ✅ 2 files | **owner** | ✅ `ihor-naum-olha-levchuk.md` |
| VITALII IVANOV | QBO · Dup | _(unchecked)_ | **owner** | ✅ created 2026-08-14 — `vitalii-ivanov.md` · Double `VITALII IVANOV & TETIANA MOGYLOVA` (710666) |
| IGOR MELOMED | QBO | _(unchecked)_ | **owner** | ✅ created 2026-08-14 — `igor-melomed.md`, routed to `Igor Melomed & Yelena Lovkina` (710635). ⚠️ **two Melomed households in Double** — the other, `Grigoriy & Margarita Melomed` (710633), got its own file the same day |
| SETATECH USA INC | QBO · Dup | _(unchecked)_ | company | ✅ created 2026-08-14 — `setatech-usa.md` · Double **archived** 2026-07-22 (706706), 🔴 **yet its payroll is live and blocked** |
| Andrii Tymchenko | 4. Documents | ✅ `1. Notes` (2 files) | **owner** | ✅ created 2026-08-13 — Double 710619 |
| MAYS EXPRESS SERVICE LLC | 4. Documents | ✅ `2. Notes` | company | ✅ created 2026-08-13 — Double 710582 |
| R & G Friendly Inc | 4. Documents | _(unchecked)_ | company | ✅ created 2026-08-14 — `rg-friendly.md` · Double 710589 |
| YMI Trucking LLC | 4. Documents | _(unchecked)_ | company | ✅ created 2026-08-13 — `ymi-trucking.md` · Double 710608 |
| Voicecapital Inc | 4. Documents | _(unchecked)_ | company | ✅ created 2026-08-13 — Double 710725 |
| Viacheslav Honcharenko | 4. Documents | _(unchecked)_ | **owner** | ✅ created 2026-08-14 — `viacheslav-honcharenko.md` · Double 710665 |
| Maria Contreras | 4. Documents | _(unchecked)_ | **owner** | ✅ created 2026-08-14 — `maria-contreras.md` · Double 710646 |
| Iurii Iakovenko | 4. Documents | _(unchecked)_ | **owner** | ✅ created 2026-08-14 — `iurii-iakovenko.md` · Double `Iurii Iakovenko & Alina Yakovenko` (710639) |

✅ **ALL 22 NOW HAVE A CLIENT-INTELLIGENCE FILE.** Eleven of the 22 had none when this was
written; four were created on 2026-08-13 and **the last seven on 2026-08-14** (Lilian: *"es
importante que el Client Intelligence cubra la mayor cantidad posible de clientes"*). **Seven
folders are filed under a person**, which is precisely where the routing rule earned its keep.
✅ **And the record this table surfaced sideways now has a file too:** [`grigoriy-margarita-melomed.md`](../clients/grigoriy-margarita-melomed.md)
(Double 710633) — a *second* Melomed household, not the one the `IGOR MELOMED` folder belongs to.
It has **no TaxDome note**, so it was outside this backfill entirely and was found only because the
other household was being written up. **That is the shape to watch for: a client invisible to a
source-driven backfill is invisible precisely because the source has nothing on them.**

Three `Notes` folders found by the search are **not** part of this backfill and should be skipped:
`My notes - Lilian` (personal), a `Notes` folder under an internal `Audit` folder, and a `Notes`
folder in **a client's own Drive** that is shared with us — not our migrated material.

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
| 2026-08-13 | **Phase 2 (iCloud source only) — batch 1** | **5 new files:** Mays Express (note **491838**) · Megabai (no Double account, no note) · Voicecapital (**491840**) · Voxago (**491841**) · YMI Trucking (**491842**) | Lilian |
| 2026-08-13 | **Phase 2 (TaxDome source)** | 22 clients' folders read. Written up: Deep Tech · Ecoorganic · Ecom Beavers · Masciave · Zetech · OneTwo Strategies · **Ihor Naum (2 notes)** · **Andrii Tymchenko (new file)**. Greenair + Magnum 152 held nothing durable. 7 clients still owe a file | Lilian |
| 2026-08-13 | **Phase 2 — routing resolved** | **Aura Remodeling → Ihor Naum's Schedule C** (Lilian). Struck the partnership inference on `aura-remodeling.md`; lesson recorded in the `tax-season-readiness` skill | Lilian |
| 2026-08-13 | **Phase 2 (iCloud source only) — batch 2** | **4 existing files enriched:** Candramas (note **491844**) · Deep Tech (**491845**) · Masciave (**491846**) · Gossip Miami — **new note 491858** for the FDOR collections matter, which is a *different case* from the 2025 tax-prep note 485291 | Lilian |

### Phase 2 ran 2026-08-13 — what the 22 TaxDome notes actually were

**Lilian authorised the read that day** (recorded in the [`double-mcp`](../../../.claude/skills/double-mcp/)
document rule, where the next session will find it). She also **corrected the central assumption of
this file**: the TaxDome notes and her phone notes are **independent sources**, not two copies —
*"no son las mismas que yo tenía en mi teléfono… puede que alguna cosa coincidiera, pero no
necesariamente."*

**She was right. Counted from the per-client listing below: 30 files across the 22 `Notes` folders**
(one of Andrii Tymchenko's is a `.docx` copy of the same note, so **29 distinct notes**). **Seven
covered ground the phone notes already had** — Optic Gold's two IRS calls, Candramas, Deep Tech,
YMI, Voicecapital and Mays Express. **The other twenty-two were new.**

🔴 **The single most valuable thing it produced was a CORRECTION.** Deep Tech's TaxDome note carries
a closing line the phone note does not — *"THIS IS DONE. WE HAVE A LETTER IN DEEP TECH'S FOLDER"* —
which **closes a matter this repo had recorded as open the day before**. Exactly the chronology rule.

| Client | What the note(s) held | Where it went |
|---|---|---|
| Deep Tech | The FDOR matter **resolved**, letter in the client's Drive folder | ✅ file + note **491845** corrected |
| Ecoorganic USA | The CT sales-tax account was **opened in error** and is meant to be **closed** (waiting on Julia); the CT annual report filed 2026-04-07, Ishkhan removed, Artem added as principal agent | ✅ file |
| Ecom Beavers | The firm's **non-ECI position paper** for a foreign-owned SMLLC, and with it the **Form 5472 + pro-forma 1120** duty and its **$25,000** penalty; a BOI transcript carrying the owner's Czech address | ✅ file |
| Masciave | **The origin of the duplicate EIN — the IRS created it** when the company filed as a C-corp; the onboarding document list; the third EIN traces to the client's father's 2013 company | ✅ file |
| Zetech | The IRS holds the company as a **sole proprietorship**, and **will not put that in writing** | ✅ file |
| OneTwo Strategies | **Two K-1s missing** (2242 Monroe LLC, Porcupine Partnership) + an unentered home-office deduction | ✅ file |
| Ihor Naum & Olha Levchuk | **Two notes**, both dated 2025-04-08 (Julia). *"2024 Aura"* — vehicle mileage for **Aura Remodeling**, whose activity is on **Ihor's Schedule C**. *"2024 tax return"* — **Olha's own, separate Schedule C** as a 1099 contractor: her vehicle mileage, expense categories (advertising/apps, meals, sport equipment and clothing, insurance) and a **home-office claim at 20%** of rent and utilities. **All figures and odometer readings stay in Drive** | ✅ both routed to `ihor-naum-olha-levchuk.md` |
| Andrii Tymchenko | **Left the US 2025-05-31 → 1040-NR, MFS**; dormant company; a **1095-A requested against Medicaid coverage**, which cannot exist | ✅ **new file created** |
| Optic Gold · Candramas · YMI · Voicecapital · Mays Express | Same matters already written from the phone notes — **no new facts**; Candramas's copy confirms the wording, including the `03.06.2024` date slip already flagged | — nothing to add |

**Two more clients WITH files, whose notes held nothing durable** — recorded so the count closes:
**Greenair International LLC** — one note, *"Banking info"*, which is **bank routing and account
numbers only** (identity block; recorded nowhere). The one durable fact is that **a bank change was
recorded on 2024-10-23** — the detail is in Drive. **MAGNUM 152 INC** — one note, *"2023 Tax
return"*, listing **non-deductible items for 2023** (shareholder health insurance, the 50% meals
disallowance, donations). **Figures stay in Drive; the durable fact is that the 2023 return carried
a non-deductible add-back schedule.** Neither warranted a §5 bullet.

**✅ THESE SEVEN NOW HAVE FILES — created 2026-08-14.** They were the last of the 22, and for a day
this block was the only place their content existed. **It is kept verbatim below as the provenance
record** — what the migrated note actually said, before anyone rewrote it — but the **live** record
is each client's own file, and that is what a session should read and update:
[`vitalii-ivanov.md`](../clients/vitalii-ivanov.md) · [`setatech-usa.md`](../clients/setatech-usa.md) ·
[`igor-melomed.md`](../clients/igor-melomed.md) · [`rg-friendly.md`](../clients/rg-friendly.md) ·
[`viacheslav-honcharenko.md`](../clients/viacheslav-honcharenko.md) ·
[`maria-contreras.md`](../clients/maria-contreras.md) ·
[`iurii-iakovenko.md`](../clients/iurii-iakovenko.md).
⚠️ **Each file also carries what the notes could NOT tell us** — Double's live properties and tax
projects, read 2026-08-14 — and three of them turned up something the note never mentioned: an
archived client whose payroll is blocked, a `1040`-vs-Schedule-C contradiction, and three unfiled
2025 returns. What each migrated note said, on its own:

- **VITALII IVANOV** — holds **50% of four Ukrainian companies** (ТОВ Бест Вей Фудс, 2018-07-30 · ТОВ
  Екстрим Прайд, 2019-06-05 · ТОВ 34-й градус, 2020-07-04 · ТОВ Юкрейн Анлімітед Трейдинг,
  2020-11-17). _(Irina Jandieri, 2025-08-18.)_ ⚠️ **50% of a foreign corporation is Form 5471
  territory** — and a **`form-5471-tax-analysis`** skill is available to sessions (it is a personal/synced skill, **not** in this repo's `.claude/skills/`) and there is an
  existing `Form5471_ExtremePride_2025.xlsx` in Drive, so this is live work, not history.
- **SETATECH USA INC** — **Angela Saturno is the Director of Sales** (contact details in Drive/Double).
  _(Lilian, 2025-03-07.)_ The Double record is **archived** since 2026-07-22.
- **IGOR MELOMED** — 2023 **Schedule C** working figures: revenue, cost of goods, office supplies, a
  **customer-appreciation / company-events** item Julia was unsure how to classify, client
  entertainment at restaurants, and a **home office** computed from total vs. one-room square
  footage. _(Julia, 2024-10-14.)_ **Figures stay in Drive** — the durable facts are the Schedule C,
  the home-office claim and the open classification question.
- **Viacheslav Honcharenko** — a **dependent daughter** was added to the 2025 tax organizer. ⚠️ **The
  note carries her date of birth and SSN; neither is recorded anywhere in this repo** (identity
  block). _(Lilian, 2026-04-07.)_
- **Maria Contreras** — one line: **car insurance for 2024** (amount in Drive). _(Julia, 2025-04-08.)_
- **Iurii Iakovenko** — the client supplied **bank details** for the return. ⚠️ **Account and routing
  numbers are the identity block and are recorded nowhere here.** _(Julia, 2025-04-08.)_
- **R & G Friendly Inc** — **the credit card was not connected in QuickBooks** and had no transactions
  there _(Maria Zavarce, 2024-06-05)_, plus a large pasted **credit-card register**. The durable fact
  is the missing feed, not the register.

⚠️ **Two things the read established about these folders, and the next session needs both:**
**(a)** they **do contain identity-block material** — a child's SSN and date of birth, and full bank
routing/account numbers were both found — so the delete-the-session obligation applies to this work
exactly as it does to organizer responses; and **(b)** a large share of the notes are **raw
tax-preparation working data** (mileage, expense breakdowns, dollar amounts) whose figures belong in
Drive, not the repo. The durable content is usually one sentence inside a page of numbers.

✅ **Ihor Naum's "2024 Aura" note — ROUTED 2026-08-13, and the answer was structural.** The note held
vehicle mileage recorded against **Aura Remodeling**, which has its own client file, so it was left
unrouted and put to Lilian. Her answer: **Aura is reported on Ihor's Schedule C and files no return
of its own**, so *all* of its tax work belongs on the **individual's** file. **The routing rule's
"ask when you cannot tell" earned its keep here** — and it produced more than a routing decision. It
**struck a wrong inference** (Aura's file had guessed a two-owner LLC filing a partnership return),
**closed a conflict open since 2026-07-30**, and established the standing fact that **the firm will never have
a tax-preparation engagement for Aura**. The general lesson is now
[`method.md`](../../pre-return-review/method.md) **rule 10** — *ask the record before you infer, and
read related records as a set* — with the domain half in the
[`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) skill §1b, because Aura
carries neither of that skill's two "sufficient" Schedule-C signals: **an absent marker is not
evidence either way on its own.**

**The iCloud source is now fully processed** — every client folder in Lilian's `1-JK Accounting`
that carried content is written up. **Magnum 152 has a folder but no note content** in the material
supplied, so nothing was added to it.

⚠️ **Two general items surfaced across the batch and are recorded on the clients, not here:**
**(a)** **three clients have a CONFIRMED outdated address** at the IRS or the FDOR — Optic Gold,
Voicecapital and Voxago — plus **YMI Trucking, where it is unsettled** (the IRS holds a Texas address
for an Indiana company, and Julia's account is that a new Texas mailing address is legitimate, so the
record may even be current). Worth checking roster-wide rather than one client at a time;
**(b)** **two companies have NO Form 2553 on file at the IRS while the firm files an 1120-S** —
Voicecapital and Masciave — with **Optic Gold** the same case resolved six weeks earlier, and
**Candramas** a near neighbour rather than the same thing: its 2553 *does* exist, it simply took
effect a year later than intended. Four companies, one underlying weakness in how the election was
evidenced.

✅ **The TaxDome copies WERE read on 2026-08-13** — see *Phase 2 ran 2026-08-13*. The overlap turned
out to be **small**: Lilian's correction was that the two sources are independent, and only 6 of the
documents covered ground the phone notes already had.
