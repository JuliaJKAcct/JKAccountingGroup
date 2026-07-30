---
name: tax-season-readiness
description: Determine which JK Accounting Group clients are READY to have their tax return prepared versus still PENDING, reading the firm's tracking data out of Double. Use when someone asks which clients haven't filed yet (2025 or any open year), which bookkeeping / QuickBooks clients are ready for taxes, who we are still waiting on for a tax organizer, or to build the ready-vs-pending list. Also load it before interpreting Double's Tax Return Status / Organizer Status / Organizer Progress columns, before opening a client's TaxDome "Completed Tax organizers" folder, or when linking a company to its owner's individual (1040) account. Encodes the two organizer generations (legacy TaxDome vs current Double), Lilian's exact hand-maintained procedure for the Organizer Status column, the readiness rule per status value, the Double property-column IDs, how to get the organizer-progress percentages the MCP cannot read (ask for the view's CSV export), the firm's individual-organizer question bank, and the standing skip-list. Read-only by default — never write these columns.
---

# Tax-season readiness — who can we file, and who are we waiting on

> **Mechanics live next door.** This skill is the *domain* layer — what the columns mean and how
> to reason about them. For how to actually reach Double's data (the four data planes, the folder
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

**Current — Double organizers.** Only two kinds of client were sent a fresh organizer from
Double: those who had **not** completed one in TaxDome, and those who **joined after** the
migration. Their state is `Organizer Status = Sent`, and how far the client has actually
gotten is the separate progress-percentage column (a % — see §5; not readable through the MCP,
but obtainable from the CSV export).

So: `Organizer Status` is about the **TaxDome-era** organizer *plus* the fact that a Double
one was sent. The **progress percentage** is about the **Double-era** organizer's completion. They
are not duplicates of each other.

> **Naming.** The Double UI labels the column **Organizer Progress**; the CSV export header is
> **`Organizer Max Progress`** (it is a maximum — §5 explains why that matters). This file uses the
> CSV header when referring to the data and the UI name when referring to what a person sees.

> **The organizer's actual questions** — what we ask an individual client — are kept in
> [`references/individual-organizer-questions.md`](./references/individual-organizer-questions.md),
> because the Double MCP cannot read the organizer template. It holds the **General Information**
> and (partial) **Income** sections captured 2026-07-30; the sections beyond that are listed there
> as known gaps. **Never fill a gap from general knowledge** — get a fuller organizer from Lilian.

---

## 2. Where each fact lives in Double

| Fact | Where it lives | How to read it |
|---|---|---|
| **Is this a bookkeeping client?** | Two independent signals — see §3 | `list_clients` → `platform` field; **and** the `Bookkeeping ` property |
| **Company or individual?** | Property `Account Type` | `list_client_properties` |
| **Tax Return Status** | **NOT a property.** It is the *tax project's* status | `list_projects(clientId)` → `status`, `filedAt`, `year`, `dueDate` |
| **Organizer Status** | Property, column `226743` | `list_client_properties` |
| **Organizer progress (%)** | Native Double column (CSV header: `Organizer Max Progress`) | Not exposed by the MCP — **get it from the view's CSV export**, see §5 |
| **How many organizers are active** | Native Double column (CSV header: `Organizer Active Count`) | Same CSV export. Matters — see §5 |
| **Completed TaxDome organizer** | File library: `TaxDome > [Client Name] > 1. Completed Tax organizers` | `list_file_library` → then `list_files(clientId, folderId)` |
| **Who owns this company** | Portal contacts shared between clients | `list_contacts(clientId)` → each contact carries a `clientIds` array |

### Property column IDs (stable)

| ID | Name | Values |
|---|---|---|
| `221299` | Account Type | `Company` · `Individual` |
| `221146` | Tax Return Type | `1040` · `1040-NR` · `1040-SCH C` · `Sch C` · `1065` · `1120` · `1120-S`. **`1040-SCH C` and `Sch C` are two separate options meaning the same thing** — a data-quality quirk, both are in live use; match either when filtering |
| `226743` | **Organizer Status** | `Completed` · `Sent` · `In progress` · `Not Started` · `N/A (SCH-C)` · `N/A (Nonresident)` |
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
| `notStarted` | See the warning in §6 — this value is ambiguous |
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
| `N/A (SCH-C)` | 🟡 **Organizer not applicable** — the business income flows to the owner's 1040 via Schedule C, so there is no organizer to wait for. This is **not** the same as being ready: readiness has to be established another way (is the bookkeeping current? is the owner's own 1040 information in hand?) |
| `N/A (Nonresident)` | 🟡 **Organizer not applicable** — readiness still has to be established another way; ask Lilian what a non-resident return needs |
| `Not Started` | 🔴 **Pending** — we don't have an organizer |
| *(blank)* | ❓ **Unverified** — check the TaxDome folder per §4, then hand to Lilian |

**"Not applicable" is not "ready."** The two `N/A` values tell you an organizer will never arrive;
they say nothing about whether we hold the client's information. Reporting them as ✅ ready means
reporting readiness on the basis of a *missing* input. Keep them in their own amber bucket and name
what would actually establish readiness.

Two things this table needs that the data doesn't give you:

- **Which record carries the `N/A (SCH-C)`** — the company row, the owner's individual row, or both.
  A Schedule C company's figures come from its bookkeeping, but the return it lands on is the
  **owner's 1040**, which has its own organizer and its own state. When a Sch C company looks
  clear, **check the owner's row before calling the work unblocked** — the company can be fine while
  the return it feeds is stuck at 0%.
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

### Getting Organizer Progress — ask for the CSV export

`Organizer Progress` is **not exposed through the Double MCP** (no organizer tool exists at all).
But it is **not out of reach**: Double can export the view to CSV, and that export carries
`Organizer Max Progress` and `Organizer Active Count`. **Ask for the export rather than reporting
the data as unavailable** — mechanics in [`double-mcp`](../double-mcp/) §2.1.

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

- **`Tax Return Status = Not Started` is ambiguous.** It can mean *genuinely not started*, or
  *Lilian hasn't opened this client in the tax software yet*. A session cannot distinguish
  these. Put them in a separate **"needs your review"** list rather than calling them pending.
- **A blank is not a "no."** Blank means unreviewed. Resolve blanks on `Organizer Status`
  yourself via §4; hand blanks on the return status back to Lilian.
- **Cross-check `status` against `filedAt`.** Two real contradiction shapes to flag:
  `status: notStarted` **with** a `filedAt` date (probably filed, column stale), and
  `status: filed` **with** `filedAt: null` (filed date never recorded).
- **Missing tax projects — and the clients they make invisible.** Some clients have **no project
  for the year at all** (common for clients onboarded mid-year), or only a *later* year's project.
  That is not "not started" — it's a missing project, and it must be flagged as such.
  **Critically, a client with no tax project does not appear in a tax view or its CSV export at
  all** (Jul 2026: an export held 139 of 142 live clients). So a report built only from the export
  will silently omit them. **Always reconcile the export against `list_clients` and name whoever
  fell out** — an invisible client is the easiest one to forget entirely.
- **`Income Tax = false` / no `Tax Return Type`** with a tax project present → ambiguous
  engagement scope. Ask whether we file for them.
- **`wontFileWithUs` is per-year, and it is sometimes just wrong.** Engagement starts and stops
  by tax year: a client can be *not* with us for one year and *with* us the next (common for
  newly-formed entities whose first real tax year is the second one). So never generalize the flag
  across years from a single project. It is also a **plain-typo risk** — see the known-bad table
  below. When in doubt, ask: excluding a real client from a readiness list is a worse error than
  listing one extra.

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

1. `list_contacts(clientId)` on the company.
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

Within each group, produce these buckets, not two:

- ✅ **Already filed** — no action
- 🟢 **Ready to prepare** — return open **and** the information demonstrably in hand
- 🟡 **Organizer not applicable** — the `N/A` values. Readiness is *undetermined*, not
  established; say what would settle it (§5)
- ⏳ **Waiting on the client** — organizer sent or in progress (report the %), a tax project at
  `Waiting on Client`, or no organizer on file
- ❓ **Needs Lilian's review** — ambiguous `Not Started`, blanks, contradictions, missing
  projects

The last bucket is the point of the exercise as much as the first: it is the list Lilian works from
to close the gaps in the tracking columns. Resist collapsing 🟡 into 🟢 to make the ready count look
better — that is the single easiest way to make this report wrong.

### Call efficiency

`list_projects` and `list_client_properties` are **per-client**, so a full firm sweep is a few
hundred calls. The patterns that keep it manageable — page the roster in 2 calls, batch 10–15
per-client calls in parallel, delegate roster-wide sweeps to a subagent — are in
[`double-mcp`](../double-mcp/) §5. Read that before starting a sweep.

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

- **`Organizer Progress` becomes readable** through the Double MCP (or a workaround is found)
  — §5's limitation is the biggest gap in this workflow.
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
