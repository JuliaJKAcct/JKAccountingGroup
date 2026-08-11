---
name: tax-season-readiness
description: Determine which JK Accounting Group clients are READY to have their tax return prepared versus still PENDING, from the firm's Double data. Use when someone asks which clients haven't filed yet (2025 or any open year), which bookkeeping / QuickBooks clients are ready for taxes, who we are waiting on for a tax organizer, or to build the ready-vs-pending list. Also load it before interpreting Double's Tax Return Status / Organizer Status / Organizer Progress columns, before opening a client's TaxDome organizer folders, or when linking a company to its owner's individual (1040) account. Encodes who is actually owed an organizer (bookkeeping and Schedule C clients are not) and what really gates each return — a company return runs off its books and feeds the owner's 1040 via K-1, not the reverse. Also the TaxDome-vs-Double organizer split, Lilian's hand-maintained Organizer Status procedure, the two routes to the progress percentages (the organizer tools the MCP gained in Aug 2026, and the CSV export for a roster-wide sweep), and the firm's 1040 question bank. Read-only.
---

# Tax-season readiness — who can we file, and who are we waiting on

> **Mechanics live next door.** This skill is the *domain* layer — what the columns mean and how
> to reason about them. For how to actually reach Double's data (the five data planes, the folder
> conventions, call efficiency, write safety), load [`double-mcp`](../double-mcp/) alongside it.

How the firm knows, at any point in tax season, **which clients we can actually prepare a
return for** and **which are still pending** — and where every piece of that lives in
Double.

This is the operating knowledge behind the recurring question *"of our bookkeeping clients,
which ones still haven't filed, and of those, which are ready for us to do?"* (Julia, Jul
2026). It is a **reporting** skill: it reads, interprets, and reports. It does not change
tracking data.

> **Read-only by default.** `Tax Return Status` and `Organizer Status` are **hand-maintained
> by Lilian** and encode her judgment after checking the tax software and the client's
> folders. Never write them from a session. Report what looks wrong or missing and let her
> set it.

---

## 1. Two systems, one history — why the organizer columns look strange

The firm ran on **TaxDome** before moving to **Double**. That migration is the single most
important thing to understand here, because it split organizers into two generations that
are tracked in two different columns.

**Legacy — TaxDome organizers.** At migration the firm carried over the organizers clients
had *already completed* in TaxDome. Those clients were deliberately **not** asked to fill a
new one. Their evidence is a PDF sitting in the client's Double file library, and their state
is recorded in the **`Organizer Status`** column.

**Current — Double organizers.** Among clients who are **owed** one at all (§1b — bookkeeping and
Sch C clients are not), a fresh Double organizer went to those who had **not** completed one in
TaxDome, and those who **joined after** the migration. Their state is `Organizer Status = Sent`, and how far the client has actually
gotten is the separate progress-percentage column (a % — see §5; readable through the MCP since
Aug 2026, and still exportable to CSV for the whole roster at once).

So: `Organizer Status` is about the **TaxDome-era** organizer *plus* the fact that a Double
one was sent. The **progress percentage** is about the **Double-era** organizer's completion. They
are not duplicates of each other.

> **Naming.** The Double UI labels the column **Organizer Progress**; the CSV export header is
> **`Organizer Max Progress`** (it is a maximum — §5 explains why that matters). This file uses the
> CSV header when referring to the data and the UI name when referring to what a person sees.

> **The organizer's actual questions** — what we ask an individual client — are kept in
> [`references/individual-organizer-questions.md`](./references/individual-organizer-questions.md).
> It holds the **General Information** and (partial) **Income** sections captured 2026-07-30; the
> sections beyond that are listed there as known gaps. **Never fill a gap from general
> knowledge** — get a fuller organizer from Lilian.
>
> **Since 2026-08-06 the live organizer is also readable** — `get_organizer(organizerId)` returns
> every slide, section and conditional-logic rule (see the
> [`double-mcp`](../double-mcp/) skill §2.2). That is the way to answer "what exactly does the
> 2025 organizer ask?" definitively. Two caveats: the payload is very large (~120 slides for a
> 1040), and it is a **structure** read — never `get_organizer_responses`, which returns a real
> client's SSNs and bank details.

---

## 1b. Who gets an organizer, and what actually gates each return

**An organizer exists to collect a P&L and supporting facts from a client whose books we do
NOT keep.** (Lilian, Jul 2026.)

| Client | Company organizer? | Why |
|---|---|---|
| **We do their bookkeeping** (`Bookkeeping ` = `Monthly` or `Quarterly`, and/or QuickBooks connected) | **No** | We already hold everything it would ask for. Lilian now marks these directly with `Organizer Status = N/A (BK client)` |
| **Not a bookkeeping client, but the firm holds QuickBooks access to their books** | **No** | Same practical effect as above, different reason: this company never became a bookkeeping engagement, but the firm was given (or kept) access to its QuickBooks anyway, even though it isn't connected in Double. Lilian marks these `Organizer Status = NA We have QuickBooks Access` (added Aug 2026) — we can log in and answer the organizer's transaction questions ourselves, so it doesn't go to the client |
| **Schedule C** | **No** | There is no separate company return at all |
| Neither | **Yes** | We need their P&L from them |

> **`N/A (BK client)` vs `NA We have QuickBooks Access` — don't conflate them.** Both end in "no
> organizer needed," but the reason differs and matters for other reporting (e.g. whether the
> client has a monthly/quarterly retainer): the first means an **active bookkeeping engagement**
> (`Bookkeeping ` property set); the second means **no such engagement, only access**. Treat a
> client with the second value as *not* a bookkeeping client for every other purpose (§3's two
> signals, billing, etc.) — only the organizer question is answered the same way.

> The two bookkeeping signals disagree for a handful of clients (§3) and that question is still
> open. Until it's settled, a client matching **only one** signal goes to **review** — do not put
> them in the "no organizer owed" bucket, because wrongly assuming we keep someone's books means
> their real organizer gets dismissed and their P&L never collected.

### What gates which return — the direction matters

This is the part it is easy to get backwards. **A company return is not gated on its owner's
organizer; the dependency runs the other way.**

| Entity | Its own return? | Gated on | Feeds the owner's 1040? |
|---|---|---|---|
| **Schedule C** | **No** — none exists | The owner's 1040 (there is nothing else) | It *is* the owner's 1040 |
| **1120-S** · **1065** | Yes, from the books | The **books being closed** for the tax year, plus any items being chased | Yes — via **K-1**, so the company return must be done **first** |
| **1120** (C-corp) | Yes, from the books | The books being closed | **No** — a C-corp issues no K-1; it is independent of the owner entirely |

So for a bookkeeping client the sequence is: **close the books → file the entity return → K-1 →
the owner's 1040** (which needs the K-1 *and* the owner's personal organizer).

Two consequences for any report:

- **Chasing owner organizers is necessary but not sufficient.** For a 1120-S or 1065 client the
  entity return still has to be prepared first, or the K-1 the 1040 needs won't exist. Present the
  two as **parallel tracks**, not as one queue.
- **A bookkeeping company's readiness is a books question, not an organizer question.** Say so
  plainly, and see the limitation below before claiming to know the answer.

### ⚠️ We cannot see whether the 2025 books are closed

Double's monthly closes only begin **April 2026** (the firm migrated to Double around May 2026),
so `list_end_closes` has **nothing for the 2025 tax year**. A session therefore **cannot** confirm
from Double that a bookkeeping company's 2025 books are ready. Report the company side as
*"not organizer-gated — readiness is whether the 2025 books are closed, which Double can't tell
us"* and ask, rather than implying it's ready.

### Schedule C means there is no company return

Consequences a session must not misread:

- **No tax project for the year is the CORRECT state**, not a gap. Such a company is absent from
  the tax view entirely (§6) — expected, and never to be reported as a problem. *(Gotten wrong
  once: three Sch C companies were flagged as "missing projects needing a decision".)*
- **`N/A (SCH-C)` is carried on the COMPANY row.** All eight instances observed Jul 2026 sit on
  `Account Type = Company` (`N/A (Nonresident)`, by contrast, sat on an Individual). Treat that as
  the convention, not a guarantee — if you ever find it on an individual row it cannot mean
  "look at the owner", so send it to review.

### How to identify a Schedule C client — and what is NOT proof

| Signal | Verdict |
|---|---|
| `Tax Return Type` = `Sch C` or `1040-SCH C` | ✅ **Sufficient** |
| `Organizer Status` = `N/A (SCH-C)` | ✅ **Sufficient** |
| `Income Tax` unchecked, on its own | ❌ **NOT sufficient — send to review** |

**`Income Tax = false` does not mean Schedule C.** Read plainly it means *we don't do this
client's income tax at all*, and §3 documents exactly that population (bookkeeping-only
engagements with no `Tax Return Type` and `Income Tax = false`). The same fingerprint therefore
covers two opposite situations, and guessing is dangerous in one direction: classifying a
bookkeeping-only client as Sch C makes a session **silently drop a client that needs a return**,
with no flag raised.

There is a live example of why only a human can settle it: **Aura Remodeling** has
`Income Tax = false` and no `Tax Return Type`, and is Schedule C — but that is known **only
because Lilian said so**, not from anything in Double. When the two sufficient signals are absent,
ask.

### Expect stray company organizers in the data

Organizers have gone out to bookkeeping companies that per the rule above shouldn't get one —
**9 of the 19 QuickBooks-connected bookkeeping companies** in the Jul 2026 CSV export, mostly at
0%, one still open on an already-**filed** return. That last one is good evidence they gate
nothing.

That said, ~47% is a high enough rate that the rule may simply be incomplete (perhaps organizers
also collect non-P&L facts from some bookkeeping clients). **Confirm with Lilian before treating
an open organizer on a bookkeeping company as ignorable**, and never let one push a company into
a "waiting on the client" bucket without that confirmation.

---

## 2. Where each fact lives in Double

| Fact | Where it lives | How to read it |
|---|---|---|
| **Is this a bookkeeping client?** | Two independent signals — see §3; it also decides whether an organizer is owed (§1b) | `list_clients` → `platform` field; **and** the `Bookkeeping ` property |
| **Company or individual?** | Property `Account Type` | `list_client_properties` |
| **Tax Return Status** | **NOT a property.** It is the *tax project's* status | `list_projects(clientId)` → `status`, `filedAt`, `year`, `dueDate` |
| **Organizer Status** | Property, column `226743` | `list_client_properties` |
| **Organizer progress (%)** | The **organizer entity** (its own data plane), surfaced in the view as `Organizer Progress` / CSV `Organizer Max Progress` | **Now readable via MCP** (since 2026-08-06): `get_organizer(organizerId)` → `completionPercentage`. The CSV export still works and is cheaper for the whole roster at once — see §5 |
| **How many organizers are active** | Same entity; CSV header `Organizer Active Count` | **Now readable via MCP**: `list_organizers(clientId)` and count the non-archived ones. Or the CSV export. Matters — see §5 |
| **What the organizer actually asks** | The organizer's slides | `get_organizer(organizerId)` — structure only. **Never `get_organizer_responses`** on a real client ([`double-mcp`](../double-mcp/) §2.2) |
| **Completed TaxDome organizer** | File library: `TaxDome > [Client Name] > 1. Completed Tax organizers` | `list_file_library` → then `list_files(clientId, folderId)` |
| **Who owns this company** | Portal contacts shared between clients | `list_contacts` → each contact carries a `clientIds` array. **Omit `clientId` to get the whole graph in one sweep** ([`double-mcp`](../double-mcp/) §5.7) |

### Property column IDs (stable)

| ID | Name | Values |
|---|---|---|
| `221299` | Account Type | `Company` · `Individual` |
| `221146` | Tax Return Type | `1040` · `1040-NR` · `1040-SCH C` · `Sch C` · `1065` · `1120` · `1120-S`. **`1040-SCH C` and `Sch C` are two separate options meaning the same thing** — a data-quality quirk, both are in live use; match either when filtering |
| `226743` | **Organizer Status** | `Completed` · `Sent` · `In progress` · `Not Started` · `N/A (SCH-C)` · **`N/A (BK client)`** · `N/A (Nonresident)` · **`NA We have QuickBooks Access`** (added Aug 2026 — note it doesn't follow the `N/A (...)` naming pattern the others use; match the literal string when filtering) |
| `221151` | `Bookkeeping ` — **the trailing space is real**, it is part of the column name in Double | `Monthly` · `Quarterly` · `N/A` |
| `221150` | Sales Tax | `Monthly` · `Quarterly` · `N/A` |
| `221200` | Payroll | `Automatic` · `Monthly` · `Biweekly` · `TBD` · `N/A` |
| `220388` | Income Tax | checkbox |
| `221148` | 1099 Preparation | checkbox |
| `221167` | Annual Report | checkbox |
| `221149` | Assigned Staff | user |
| `220384` | EIN / Tax ID | text |
| `220389` | Engagement Letter | attachment |
| `220382` / `220383` | Service Tier / Entity Type | pickers, **no options defined yet** |

The team's working view for this job is **"Tax Returns – View 2"** in Double.

### Tax project status values

`list_projects` returns one project per tax year. **This set is not closed** — the values below are
the ones observed, and at least one more (`Waiting on Client`) exists but has only ever surfaced in
the CSV export, never through the MCP. Treat an unfamiliar value as real, not as an error.

| `status` | Means |
|---|---|
| `filed` | Return is filed — done, no action |
| `inProgress` | We are working it |
| `notStarted` | **Six different things — decode it via §6.1.** Mostly *not* "work not yet started" |
| `waitingOnClient` / `Waiting on Client` | Blocked on the client. **Seen in the CSV export only** |
| `wontFileWithUs` | Client is not filing through us — but read §6, it is per-year and sometimes miskeyed |

`filedAt` is a separate timestamp and **can disagree with `status`** — always read both.

---

## 3. Defining "bookkeeping client" — the two signals disagree

Julia's shorthand is *"the ones with QuickBooks linked in Double."* That is the client's
`platform` field = `"qbo"`. But the firm also maintains a **`Bookkeeping`** property
(`Monthly` / `Quarterly` / `N/A`), and **the two do not fully agree**: there are active
bookkeeping engagements whose Double client has **no QuickBooks connected** (`platform:
"none"`), so a QBO-only filter silently drops them.

**Always report both populations and say which is which.** Ask which definition to use
rather than guessing — the answer changes the client list. As of Jul 2026 the QBO-connected
set was the larger one, with a handful of bookkeeping-flagged clients outside it (several
being bookkeeping-only engagements with no `Tax Return Type` and `Income Tax = false`).

Note also that some bookkeeping-flagged clients are **archived** (`archivedAt` set) — exclude
archived clients from any live list, and say how many you excluded.

---

## 4. Lilian's procedure for the Organizer Status column

This is the exact process the column encodes. Know it, because it tells you what each value
*proves* and what it merely *asserts*.

1. Open the client's folders in Double.
2. Go into the **`TaxDome`** folder.
3. Look for a **`Completed Tax organizers`** subfolder (the exact name varies slightly —
   e.g. `1. Completed Tax organizers`). It sits under a per-client subfolder inside
   `TaxDome`.
4. That folder was created **only** for clients who completed the organizer in TaxDome.
5. If the organizer **for the tax year being prepared** is in there → mark **`Completed`**.
6. If the folder doesn't exist, the file isn't there, or the file's **year doesn't match**
   the year being prepared → mark **`Not Started`**.
7. If the firm then sends that client a **Double** organizer → mark **`Sent`**.

> **Scope first.** This procedure only applies to a client who is **owed** an organizer (§1b). On a
> bookkeeping company or a Sch C client, a blank or `Not Started` here is the **expected** end
> state — leave it alone rather than sweeping their folders.

**The consequence for a session:** a `Not Started` on this column means *Lilian checked and
found nothing* — it is settled. A **blank** means *she hasn't looked yet* — and that is
exactly the gap a session can close, by doing steps 1–3 itself via `list_file_library` +
`list_files`. Report the finding ("this client does have a 2025 organizer on file — the
column just isn't updated"); don't write the column.

The filename carries the year, e.g. `2025 individual Tax Organizer.pdf`. Match the year to
the return being prepared before concluding anything.

---

## 5. The readiness rule

A client is **ready to prepare** when the return isn't filed **and** we hold the information
we need.

| `Organizer Status` | Readiness |
|---|---|
| `Completed` | ✅ **Ready** — the client answered everything in TaxDome, so we hold what we need. **But re-validate the year** — see "Organizer Status carries no year" below |
| `Sent` **and** `Organizer Max Progress` = 100% **and** `Organizer Active Count` = 1 | ✅ **Ready** — the one organizer in flight is finished |
| `Sent` **and** 100% **but** more than one active organizer | ❓ **Confirm first** — the % is a maximum across organizers, so 100% may belong to a different one. Do not call this ready until someone checks which organizer is complete |
| `Sent`, below 100% | ⏳ **Waiting on the client** — report the % |
| `Sent`, **no %** and no active organizer | ❓ **Contradictory** — an organizer was probably withdrawn or never actually issued. Flag it, don't classify it |
| `In progress` | ⏳ Waiting on the client |
| `N/A (SCH-C)` | 🟡 **No company return exists.** On a *company* row (the observed convention) resolve to the **owner's 1040 status**. On an *individual* row it cannot mean that — send to review (§1b) |
| **`N/A (BK client)`** | 📗 **Books, not organizers.** Lilian marking §1b's rule directly on the record: we keep their books, so no organizer is owed. Readiness is whether the tax year's books are closed — **never** report it as ready or as waiting on the client |
| **`NA We have QuickBooks Access`** | 📗 **We hold QuickBooks access, not their books.** Not a bookkeeping engagement, but the firm can log into this company's QuickBooks even though it isn't connected in Double. Per Lilian (Aug 2026): the Business Tax Organizer doesn't go to this client at all — the firm answers the transaction-related questions itself from QuickBooks. Treat it like `N/A (BK client)` above: no organizer is owed, don't report it as waiting on the client. *(A caution, not yet confirmed either way: today's organizer isn't split into "transaction" vs. "other" questions, so this reads as the whole organizer being skipped for now — Lilian's planned redesign, `BACKLOG.md` IDEA-16, would make that split explicit. If a gap ever turns up between what QuickBooks can answer and what the organizer actually asks, flag it rather than assuming.)* |
| `N/A (Nonresident)` | 🟡 **Organizer not applicable** — readiness still has to be established another way; ask Lilian what a non-resident return needs |
| `Not Started` | 🔴 **Pending** — we don't have an organizer |
| *(blank)* | ❓ **Unverified** — check the TaxDome folder per §4, then hand to Lilian |

> **Scope: this table reads an organizer, so it applies to whoever is actually owed one** — every
> individual, and companies that are neither bookkeeping clients nor Sch C (§1b). For a
> **bookkeeping company** none of these rows apply **except `N/A (BK client)`, which exists
> precisely to mark this case**: no organizer is owed, so `Not Started` and a
> blank are the **expected** states, not gaps, and a `Sent` is stray data. Its readiness is a
> books question — see "What gates which return" in §1b.

**"Not applicable" is not "ready."** An `N/A` tells you no organizer will arrive; it says nothing
about whether we hold the client's information. Never report it as ✅ ready — resolve it to the
thing that actually determines the answer:

- **`N/A (SCH-C)` on a company row → go to the owner's 1040.** There is no company return, so the
  owner's row *is* the status. A Sch C company can look clear while the return it feeds sits at 0%.
- **A tax-project status of `Waiting on Client`** maps to the ⏳ bucket regardless of the organizer
  column.

### `Organizer Status` carries no year

The column stores a single value with **no year attached**, but §4's procedure sets it against "the
tax year being prepared". So a `Completed` set during the 2025 season keeps reading as `Completed`
in the 2026 season, when the organizer on file is a year stale.

**When the prepared year rolls over, every `Completed` must be re-validated** against the filename
year in the TaxDome folder (§4) before it counts as ready. There is a live example: a client with a
completed **2025** organizer on file whose 2025 return isn't ours, so that organizer is moot and a
fresh one is needed for 2026 (see
[`clients/yes-team-corp.md`](../../../projects/client-intelligence/clients/yes-team-corp.md) §5).

Report the **percentage alongside** every `Sent` row. "Waiting on the client" spans a client who
hasn't opened the organizer (0%) and one who is nearly done (71%), and those need different
chasing. In Jul 2026 the overwhelming majority of `Sent` organizers sat at **0%** — when that's the
pattern, say so: it means the bottleneck is clients not starting, not clients getting stuck.

It held again on 31 Jul 2026 (**19 of 26** organizer-owed pending companies at 0%). When that is
the shape, **say what to do about it**: one reminder campaign to the whole 0% group beats
per-client chasing of the few stuck midway.

### Getting Organizer Progress — two routes since Aug 2026

**Route 1 — the MCP (new).** Organizer tools exist as of 2026-08-06. `list_organizers` returns
every organizer with its status; `get_organizer(organizerId)` returns `completionPercentage`.
This is exact, live, and per-organizer — so it also dissolves the "max" ambiguity below, because
you can see *which* organizer is at what percentage. Cost: `get_organizer` is a heavy call
(~120 slides for a 1040), so it is one call **per organizer**, not one for the roster.

**Route 2 — the CSV export (still the right tool for a roster-wide report).** Double exports the
view with `Organizer Max Progress` and `Organizer Active Count` for everyone in one file —
mechanics in [`double-mcp`](../double-mcp/) §2.1. For "where does the whole practice stand", this
is still faster than 59 MCP calls.

Rule of thumb: **CSV for the sweep, MCP for the specific client.** Either way, never report the
data as unavailable.

Two things the percentages taught us (Jul 2026):

- **`Organizer Max Progress` is a maximum, not a single organizer's progress.** A client can have
  **several** active organizers (`Organizer Active Count` of 2 and 3 both seen), and the column
  reports the furthest along. A high % does not prove the *relevant* organizer is the finished one.
- **`Completed` outranks the percentage — never override it.** Clients appear with
  `Organizer Status = Completed` *and* a Double organizer sitting at **0%**. That is not a
  contradiction: `Completed` means the **TaxDome** organizer is on file, so we already hold the
  information, and whatever Double organizer is also open is redundant. Treat those as **ready**.
  Reading the 0% as "waiting on the client" would wrongly park a client we can already file.

---

## 6. Data-quality warnings — these columns are manual

`Tax Return Status` and `Organizer Status` are updated **by hand** as Lilian works through
the client list. She may not have reached every client. Treat the data accordingly.

- **`Tax Return Status = Not Started` is overloaded — decode it, don't dump it.** See §6.1. It is
  mostly *not* "work we haven't started"; treating it that way overstates the pending workload.
- **A blank is not a "no"** — *for a client who is owed an organizer*. There, blank means
  unreviewed: resolve it yourself via §4 and hand blanks on the return status back to Lilian. On a
  bookkeeping company or a Sch C client a blank is correct and needs nothing (§1b).
- **Cross-check `status` against `filedAt`.** Two real contradiction shapes to flag:
  `status: notStarted` **with** a `filedAt` date (probably filed, column stale), and
  `status: filed` **with** `filedAt: null` (filed date never recorded).
- **Missing tax projects — and the clients they make invisible.** Some clients have **no project
  for the year at all**, or only a *later* year's project. **First check whether they are Schedule C
  (§1b): if so, having no project is CORRECT and must not be reported as a gap.** Otherwise it is a
  genuinely missing project (common for clients onboarded mid-year) and should be flagged.
  **Critically, a client with no tax project does not appear in a tax view or its CSV export at
  all** (Jul 2026: an export held 139 of 142 live clients). So a report built only from the export
  will silently omit them. **Always reconcile the export against `list_clients` and name whoever
  fell out** — an invisible client is the easiest one to forget entirely. Naming them is not the
  same as flagging a problem: list a Sch C client as *expected — no company return*, and only a
  non-Sch-C client with no project as a genuine gap.
- **`Income Tax = false` / no `Tax Return Type`** with a tax project present → ambiguous
  engagement scope. Ask whether we file for them.
- **`wontFileWithUs` is per-year, and it is sometimes just wrong.** Engagement starts and stops
  by tax year: a client can be *not* with us for one year and *with* us the next (common for
  newly-formed entities whose first real tax year is the second one). So never generalize the flag
  across years from a single project. It is also a **plain-typo risk** — see the known-bad table
  below. When in doubt, ask: excluding a real client from a readiness list is a worse error than
  listing one extra.

### 6.1 `Not Started` is a catch-all — decode it, don't dump it

**Root cause: no "Not applicable" option is available to Lilian for `Tax Return Status`** (Lilian,
31 Jul 2026). Every situation where a return simply isn't owed has to be parked somewhere, and
`Not Started` is the slot. So the value is a **catch-all, not a work state** — five distinct
meanings plus a residue.

**Scope:** this applies to `Tax Return Status` (the tax *project*, §2) on **any** row, company or
individual. It has nothing to do with `Not Started` on the `Organizer Status` column, which means
something else entirely (§4).

Decode in this order — the first match wins:

| # | Test | What it means | How to report it |
|---|---|---|---|
| 1 | The project's **year is a future one** (e.g. a 2026 project during the 2025 season) | Not this season's work | Exclude the row from the season's counts — **and flag that the current year's project is missing** (§6) |
| 2 | `Tax Return Type` is `Sch C` / `1040-SCH C`, **or** `Organizer Status` = `N/A (SCH-C)` **on a company row** | The company files through the owner's 1040 and has no return of its own | **No company return exists** — resolve to the owner (§1b). On an *individual* row `N/A (SCH-C)` cannot mean this → send to review |
| 3 | **`Income Tax` is unticked** | *Candidate* for "we don't do their income tax at all" — **but see the warning below** | **Needs review** until Lilian confirms. Only after she confirms does it go in the 🚫 bucket |
| 4 | The client is one of the **related-party clients Lilian and Julia maintain by hand** | No organizer is sent and little information is held | Its own line; don't chase them like a normal client |
| 5 | The client is **brand new and has never filed with us** | Nothing has been done yet — here `Not Started` is **literal and correct** | Genuinely pending. Their organizer may still be moving — read the % |
| 6 | None of the above | Genuinely unknown | **Ask.** |

> **⚠️ Test 3 never excludes a client on its own.** §1b is explicit that an unticked `Income Tax`
> is **not sufficient** to conclude anything, because the same fingerprint covers two opposite
> situations, and §6 says to *ask* when a tax project is present — which it always is here. The
> file's own counterexample proves it: a client with `Income Tax = false` and no `Tax Return Type`
> turned out to be **Schedule C**, known only because Lilian said so. On top of that, `Income Tax`
> is a **checkbox** (§2) — "unticked" and "never set" are indistinguishable, so a brand-new client
> whose properties aren't filled in yet trips test 3 before test 5 can run. Getting this wrong
> **silently drops a client who owes us a return**, which is the worst failure this report has.

Tests 1 and 2 are **mechanical** — a session can apply them from the export alone. Test 3 is
mechanical to *detect* but needs confirmation to *act on*. Test 4 needs a name list only Lilian and
Julia hold (held outside the repo — ask once and record where it lives). Test 5 cannot be settled
from a single season's export: "never filed with us" needs prior-year projects (`list_projects`) or
Lilian, and note that clients with no tax project at all are missing from the export entirely (§6).

**How much this matters.** On the 31 Jul 2026 export, 21 rows carried `Not Started`: 8 Schedule C,
3 a future year, 2 unticked `Income Tax`, 1 related-party, 3 brand-new clients, 2 already moved on
in Double since the export, and 2 genuinely unknown. So **at most 7 were pending work and only 2
needed a question** — against 21 if the value had been read at face value.

**Two traps around this value:**

- **A new client's `Not Started` is real work, not a tracking artifact.** Tests 1–4 are reasons a
  return isn't owed (or isn't ours yet); test 5 is a return we simply haven't started. Don't
  collapse them.
- **The export can lag Double.** A row read as `Not Started` may already have been moved to
  `inProgress` after the CSV was taken. When someone says they have since updated a client, the
  **export** is what's stale — say so rather than implying the tracking column is wrong.

### 6.2 A blank `Account Type` makes a client vanish from both lists

`Account Type` (property `221299`) is occasionally empty. A report that splits the roster into
companies and individuals by that field will silently drop those rows from **both** halves — the
totals still look plausible, which is what makes it dangerous.

**Always reconcile:** companies + individuals must equal the row count you started from. Assign a
blank-`Account Type` row to the side its `Tax Return Type` implies (an `1120`/`1120-S`/`1065` is a
company), label it as blank in the output, and flag the record so the field gets set.

### Known-bad values in Double — check this table before excluding anyone

Values the firm knows are wrong and has chosen not to fix. **Consult this list rather than opening
140 client files** — a mitigation that requires a roster sweep is not a mitigation.

| Client | Column / record | What Double says | The truth |
|---|---|---|---|
| YES TEAM CORP's owner (individual client `710636`) | 2026 tax-project status | `wontFileWithUs` | He **will** file 2026 with the firm. Left as-is deliberately (Lilian, Jul 2026 — judged minor). Detail in [`clients/yes-team-corp.md`](../../../projects/client-intelligence/clients/yes-team-corp.md) §5 |

**Add a row here whenever a known-bad value is accepted rather than corrected**, and say who decided.
Where the cost is low, prefer asking for the value to be fixed in Double — that is the only durable
fix, and this table is the fallback.

---

## 7. Linking a company to its owner's individual return

Julia wants the companies **and** their owners' personal returns. The link runs through
**portal contacts**:

1. `list_contacts` — **call it once with no `clientId`** and build the whole map at once
   ([`double-mcp`](../double-mcp/) §5.7); pass a `clientId` only when you genuinely need one company.
2. Each contact carries a `clientIds` array — every client that contact is attached to.
3. A contact appearing on **both** the company and an `Account Type = Individual` client
   means that individual client is the **owner's personal account**.

### A portal contact is **not** necessarily an owner

This is the trap in the method above. Portal contacts are anyone the firm gave access to —
which includes **the owner's own staff**, added purely so they can reach the documents we send
and use the Double portal. Those people are **not clients of the firm**: they will never have
an individual client account, and their missing 1040 is **not a gap**. (Real case: Atman Parts
carries a staff contact alongside the owner — Lilian, Jul 2026. See
[`client-intelligence/clients/atman-parts.md`](../../../projects/client-intelligence/clients/atman-parts.md) §2.)

So **never infer ownership from contact presence alone.** Use these signals, then confirm:

- The **owner** is the contact who *also* appears on an `Account Type = Individual` client.
- The access flags are suggestive but **not** decisive: `hasClientAdminAccess: false` /
  `hasTaxAccess: false` usually marks a limited-access staff contact — but a staff member can
  also hold all flags true, so a fully-privileged contact is not proof of ownership.
- When it matters, check the client's
  [`client-intelligence`](../client-intelligence/) file (§2 Contacts records who plays which
  role) or ask Lilian/Julia. Record the answer back into that file so the next session doesn't
  re-ask.

Practical notes:

- **One owner commonly holds several companies.** Sweep by owner, then assign by company —
  the same rule as the [`client-intelligence`](../client-intelligence/) skill. Deduplicate:
  one owner's 1040 covers all their entities.
- Individual accounts are often **joint** (`"Name & Spouse"`), so one account serves two
  contacts.
- One company may have **several owner contacts**, each with their own individual account.
- The same person can appear as **several contact records** (one per company email). Match on
  name, not contact ID.

### Standing skip-list (Lilian, Jul 2026)

Do **not** chase these — a blank here means something upstream is pending, not that work is
missing:

- **Contacts with no individual client account in Double.** Two different reasons, both
  meaning *skip*: either the contact **isn't a client at all** (staff with portal access — see
  above), or something upstream is **still pending** on that client. Don't report them as gaps
  and don't chase them.
- **Individual accounts with no properties filled in.** These are awaiting information from
  Julia. Leave them alone.
- **Duplicate individual accounts for the same person.** Note it for the owner to fix; never
  merge or edit accounts from a session.

---

## 8. Producing the report

Julia's priority order (Jul 2026):

1. **Bookkeeping / QuickBooks companies** — ready vs pending. This is what she needs first.
2. **The owners of those companies** — their individual returns, same split.
3. **Tax-only clients** (no bookkeeping) — only after 1 and 2 are done.

**Show two tracks, not one queue.** Per §1b a bookkeeping company's return runs off its books and
produces the K-1 that the owner's 1040 needs — so the entity work comes *first* and the organizer
chase runs alongside it. Give the companies their section (Julia asked for it) and make the
owners' organizer states the other actionable list, but do not present either as gating the other
in the wrong direction.

Within each group, produce these buckets, not two:

- ✅ **Already filed** — no action
- 🟢 **Ready to prepare** — return open **and** the information demonstrably in hand
- 🟡 **Organizer not applicable** — `N/A (Nonresident)`, and any `N/A (SCH-C)` that couldn't be
  resolved through an owner. Readiness is *undetermined*, not established; say what would settle it.
  A resolvable `N/A (SCH-C)` doesn't stop here — it resolves to the owner's bucket (§5)
- 📗 **Books, not organizers** — bookkeeping companies with their own return (1120-S / 1065 / 1120).
  Not organizer-gated; readiness is whether the tax year's books are closed, which Double can't
  show for 2025 (§1b). Never present these as a client-blocked queue. **A second, distinct case
  lands here too:** `Organizer Status = NA We have QuickBooks Access` (§5) — not a bookkeeping
  engagement, but the firm holds QuickBooks access and skips the organizer for that reason instead.
  Don't merge the two reasons when explaining why a client is in this bucket
- ⏳ **Waiting on the client** — organizer sent or in progress (report the %), a tax project at
  `Waiting on Client`, or — **for a client who is actually owed an organizer (§1b)** — none on file.
  A bookkeeping company with no organizer does **not** belong here
- 🚫 **Confirmed not our income tax** — `Income Tax` unticked with `Tax Return Status = Not Started`
  **and Lilian has confirmed** we don't do that client's income tax (§6.1, test 3). Only then does
  it leave the pending counts. **Unconfirmed, it stays in "needs review"** — the unticked box alone
  proves nothing (§1b)
- ❓ **Needs Lilian's review** — a `Not Started` that survives the §6.1 decode (test 6) or is
  awaiting her confirmation (test 3), blanks, contradictions, missing projects

The last bucket is the point of the exercise as much as the first: it is the list Lilian works from
to close the gaps in the tracking columns. Resist collapsing 🟡 into 🟢 to make the ready count look
better — that is the single easiest way to make this report wrong.

### When the ask is "a report to understand the pending work"

Lilian asked for this as an **Excel workbook** (31 Jul 2026), not a chat answer — she wants
something to work from and re-sort. The shape that landed:

| Tab | Holds |
|---|---|
| **Summary** | The headline questions, as live `COUNTIF` formulas over the detail tabs so edits flow through |
| **Companies / Individuals — Pending** | One row per client, with the bucket, the organizer state and %, the decoded `Not Started` reason, and the owner links |
| **Chase list** | Only the clients actually blocking us, **sorted by organizer %** so the 0% group reads as one campaign |
| **Needs review** | The residue after §6.1 decoding — kept small on purpose |
| **Owner–company map** | The contact-derived links, with the warning that a portal contact is not always an owner |
| **Method & definitions** | Sources, the definitions used, and the known limits — including that Double cannot show whether the 2025 books are closed |

Two things worth repeating in any such report: **companies + individuals must reconcile to the row
count you started from** (§6.2), and the workbook is a **delivered file, never committed** (below).

### Call efficiency

`list_projects` and `list_client_properties` are **per-client**, so a full firm sweep is a few
hundred calls. The patterns that keep it manageable — page the roster in 2 calls, batch 10–15
per-client calls in parallel, delegate roster-wide sweeps to a subagent — are in
[`double-mcp`](../double-mcp/) §5. Read that before starting a sweep.

**Build the owner↔company map in one sweep, not one call per company** — `list_contacts` without a
`clientId` returns every contact you can see, each carrying its full `clientIds` array. Mechanics
and the exact pattern are in [`double-mcp`](../double-mcp/) §5.

### Client data stays out of the repo

The readiness list pairs client names with their filing state. Per
[`CLAUDE.md`](../../../CLAUDE.md) that is client-specific data: **deliver it to the user** (chat, or
an artifact if a visual board is wanted) and **do not commit the list**. Only the structural
knowledge — this skill — lives in the repo.

Where the line actually falls, since the repo does legitimately hold some client material:

| Allowed in the repo | Not in the repo |
|---|---|
| A [`client-intelligence`](../client-intelligence/) file per client — obligations, systems, recurring processes | Any client's **filing state** for a season, gathered as a list |
| A [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row naming a client **business** and the pending action, per that file's own convention | An **individual person's** personal tax attributes — residency/return type, DOB, SSN, occupation |
| The known-bad-values table in §6 (a correctness aid) | Dollar figures, EINs, folio/application numbers |
| The organizer's **questions** ([`references/`](./references/)) | Any client's **answers** to them |

When a follow-up would need the forbidden half to be useful, point at the artifact or the Double note
instead of copying it in.

---

## 9. Update this skill when…

- ~~**`Organizer Progress` becomes readable** through the Double MCP~~ — **done, 2026-08-06.**
  Organizer tools shipped; §5 now documents two routes (MCP per client, CSV for the roster).
  The follow-on to watch: whether a **roster-wide** organizer read gets cheap enough to retire
  the CSV route entirely — today `get_organizer` is one heavy call per organizer.
- The firm **finishes the TaxDome backlog** and the legacy/Double organizer split stops
  mattering — §1 and §4 then simplify a lot.
- A **new `Organizer Status` option** or tax-project status appears, or a property column is
  added/renamed — update the tables in §2.
- The **bookkeeping-client definition** is settled (QBO-connected vs the `Bookkeeping`
  property) — replace §3's "ask which one" with the decided rule.
- The ready-vs-pending report becomes a **recurring deliverable** (a dashboard, a scheduled
  email) — then it wants a project folder and probably the
  [`automated-email-reports`](../automated-email-reports/) skill, and this file should link
  to it.
- Something in §2's "where each fact lives" table moves or is renamed — and keep the general
  Double mechanics in [`double-mcp`](../double-mcp/), not here; this file stays the domain layer.
- **Double gains a real "Not applicable" option for `Tax Return Status`** — that is the root cause
  of §6.1, and the day it lands most of that section collapses to a single line. Worth asking
  Double for; it would remove a whole class of misreading.
- **The related-party client list (§6.1, test 4) gets a home** — record *where* it lives so the
  next session doesn't have to ask. The list itself stays out of the repo (§8).
- **A sixth meaning of `Not Started`** surfaces — add it to §6.1's table rather than reverting to
  "it's ambiguous". Equally, if test 3 ever becomes safe to act on unconfirmed, say what changed.
