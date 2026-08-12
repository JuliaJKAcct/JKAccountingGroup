# `tools/odoo-api` — safe hands for Odoo's direct API

The code that makes the six layers of
[`write-safety.md`](../../.claude/skills/odoo-mcp/references/write-safety.md) real. Until this
existed, five of the six were conventions: they worked only if whoever was driving remembered
them.

**Why it had to be built before the first write.** The 50-call/day ceiling on the MCP connector
was acting as a handbrake — a runaway mistake stopped itself after 50 calls. The direct API has
no such ceiling. A bad loop can touch hundreds of records in seconds. And the realistic failure
is not Lilian approving something wrong; it is **Claude executing something wrong**. Everything
here is aimed at that.

---

## Quick start

```bash
node tools/odoo-api/odoo.mjs check       # is the key present, and what can it do?
node tools/odoo-api/odoo.mjs baseline    # ALWAYS before a working session
node tools/odoo-api/odoo.mjs help        # every command
```

The tool only works in the dedicated **`odoo-api`** cloud environment, which is the only place
the key lives. In any other environment `check` says so in plain language instead of failing
with a confusing 401.

---

## The one rule

**Every write is a dry run unless you pass `--execute`.** A dry run prints the current value,
the new value, and the exact command that would undo it — and changes nothing.

```bash
# Shows what would happen. Writes nothing.
node tools/odoo-api/odoo.mjs write --model website.page --id 21 \
  --set '{"name":"New name"}' --profile website --reason "why this change"

# Same command, now real.
… --execute
```

A write **cannot** run without a successful snapshot first. That is not a policy, it is the
control flow: the snapshot function throws, and the write never happens. **A `restore` is a write
too** — it takes its own snapshot of the current state before rolling anything back, runs the same
canary, and requires the same `--profile` and `--reason`. Undoing destroys the state you are
undoing *from*, and that state may be the one you want back.

---

## What it refuses to do

These refusals are in code (`lib/safety.mjs`), not in judgement. `--execute` does not override
them; nothing does.

| Refusal | Why |
|---|---|
| Writing `res.users`, `res.groups`, `ir.model.access`, `ir.rule` | Permission changes are made by a human in the Odoo UI |
| Deleting `account.move`, `account.move.line`, `account.payment` | Accounting entries are reversed, never deleted — reversal keeps the audit trail |
| Writing any model outside the declared `--profile` | You widen the profile deliberately, in a commit, or not at all |
| Writing more than one website record at a time | Website changes are one record at a time |
| Writing without `--reason` | The reason goes in the ledger; a change nobody can explain later is not an improvement |

Verified by running each one — all four refuse with a `⛔ REFUSED` and a non-zero exit code.

---

## Going back in time

This is the part Lilian asked for: *"something may go wrong and we don't notice until weeks
later — I want to be able to go back, and to audit when it happened."*

**`baseline`** captures the site before a working session and records how every canary page is
responding. **`snapshot`** (automatic on every write) captures the record *and everything that
points at it*.

```bash
node tools/odoo-api/odoo.mjs snapshots                 # every version, newest first
node tools/odoo-api/odoo.mjs diff <older> <newer>      # exactly which records and fields moved
node tools/odoo-api/odoo.mjs restore <snap> <model> <id> --profile <p> --reason "..." [--execute]
node tools/odoo-api/odoo.mjs history                   # the append-only ledger
```

**Git is the version store, deliberately.** Snapshots of website content are committed, so the
repo's own history answers "what did this page look like on 3 August?" without a second
versioning system to maintain. One file per record, so `git log` on a single record shows only
that record's real changes. And because unchanged records serialise to byte-identical files,
git stores them as the same object — the first baseline costs ~6 MB, later ones cost only what
actually changed.

**The ledger is append-only by construction.** Nothing in this tool rewrites `history.jsonl`,
so the record of what happened cannot be tidied up afterwards.

### Snapshot scope — what is captured and what is not

The instance carries ~2,940 `ir.ui.view` records. About **2,760 belong to Odoo's own modules**:
they are not ours to lose, a module upgrade restores them, and capturing them would bury the
~180 records that *are* ours under several MB of noise. So the baseline captures views bound to
the website (`website_id` set) or hand-edited (`arch_updated`), plus all pages, menus and
redirects.

### The two buckets

| Directory | Holds | In git? |
|---|---|---|
| `snapshots/` | Website pages, views, menus, redirects, products | **Yes** — this is the version history |
| `snapshots-private/` | Anything that may carry client data, personal data or secrets | **Never** — gitignored |

`lib/safety.mjs → isCommittable()` decides which. The ledger applies the same rule to itself:
for a non-committable model it records the shape of a change (model, ids, field names) but not
the values.

---

## The canary check

The verification everybody skips. Checking only the page you edited is not enough — Odoo pages
share templates, so a change can break something else entirely. Every `--execute` sweeps the
canary set before and after and reports the difference.

**The test is not "everything returns 200"**, it is **"nothing got worse than its baseline"**.
A page that was already broken and is still broken is not a regression; a page that went from
200 to 500 is, and the tool exits non-zero and prints the undo command.

---

## Learning the database (this is the part the MCP gave us for free)

An MCP connector ships described tools — Claude sees the model names, the parameters and what
each does, without being told. A raw API key is only a door: it grants access and explains
nothing.

**But that knowledge does not have to be discovered by trial and error against the live site**,
because Odoo will describe itself, and *reads cannot break anything*:

```bash
node tools/odoo-api/odoo.mjs map                        # every model on this instance
node tools/odoo-api/odoo.mjs map --model website.page   # its fields, types, and which are required
```

That is generated from the database, so it is never out of date, and it is regenerated rather
than committed. What it *cannot* tell you is the hard-won behaviour — that deleting a view
silently deletes the page pointing at it, that a 401 has two different meanings. That kind of
knowledge goes in the [`odoo-mcp` skill](../../.claude/skills/odoo-mcp/), which is where the
firm keeps it.

---

## Files

| File | Role |
|---|---|
| `odoo.mjs` | The CLI. Command dispatch and the fixed write order |
| `lib/client.mjs` | JSON-2 transport. Reads the key from the environment, scrubs it from every error |
| `lib/safety.mjs` | Deny-lists, profiles, volume brake, the dependents map. **The rules, in code** |
| `lib/store.mjs` | Snapshots, baseline, diff, restore, the append-only ledger |
| `lib/canary.mjs` | The before/after HTTP check |

The write order in `odoo.mjs` is fixed and not configurable:

> safety gate → snapshot → canary before → *(execute)* → canary after → ledger

**If you change a rule here, change `write-safety.md` in the same commit**, or the document
stops describing the code and the next person trusts the wrong one.
