---
name: tax-season-readiness
description: Determine which JK Accounting Group clients are READY to have their tax return prepared versus still PENDING, reading the firm's tracking data out of Double. Use when someone asks which clients haven't filed yet (2025 or any open year), which bookkeeping / QuickBooks clients are ready for taxes, who we are still waiting on for a tax organizer, or to build the ready-vs-pending list. Also load it before interpreting Double's Tax Return Status / Organizer Status / Organizer Progress columns, before opening a client's TaxDome "Completed Tax organizers" folder, or when linking a company to its owner's individual (1040) account. Encodes the two organizer generations (legacy TaxDome vs current Double), Lilian's exact hand-maintained procedure for the Organizer Status column, the readiness rule per status value, the Double property-column IDs, what the Double MCP can and cannot read (Organizer Progress is NOT exposed), and the standing skip-list. Read-only by default — never write these columns.
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
gotten is the separate **`Organizer Progress`** column (a % — see §5, it is not readable
through the MCP).

So: `Organizer Status` is about the **TaxDome-era** organizer *plus* the fact that a Double
one was sent. `Organizer Progress` is about the **Double-era** organizer's completion. They
are not duplicates of each other.

> **The organizer's actual questions** — what we ask an individual client — are kept in
> [`references/individual-organizer-questions.md`](./references/individual-organizer-questions.md),
> because the Double MCP cannot read the organizer template. **That file is currently an empty
> intake awaiting Lilian's content** — never fill it from general knowledge.

---

## 2. Where each fact lives in Double

| Fact | Where it lives | How to read it |
|---|---|---|
| **Is this a bookkeeping client?** | Two independent signals — see §3 | `list_clients` → `platform` field; **and** property "Bookkeeping " |
| **Company or individual?** | Property `Account Type` | `list_client_properties` |
| **Tax Return Status** | **NOT a property.** It is the *tax project's* status | `list_projects(clientId)` → `status`, `filedAt`, `year`, `dueDate` |
| **Organizer Status** | Property, column `226743` | `list_client_properties` |
| **Organizer Progress (%)** | Native Double column | **Not exposed by the MCP** — must be read on screen |
| **Completed TaxDome organizer** | File library: `TaxDome > [Client Name] > 1. Completed Tax organizers` | `list_file_library` → then `list_files(clientId, folderId)` |
| **Who owns this company** | Portal contacts shared between clients | `list_contacts(clientId)` → each contact carries a `clientIds` array |

### Property column IDs (stable)

| ID | Name | Values |
|---|---|---|
| `221299` | Account Type | `Company` · `Individual` |
| `221146` | Tax Return Type | `1040` · `1040-NR` · `1040-SCH C` · `Sch C` · `1065` · `1120` · `1120-S` |
| `226743` | **Organizer Status** | `Completed` · `Sent` · `In progress` · `Not Started` · `N/A (SCH-C)` · `N/A (Nonresident)` |
| `221151` | Bookkeeping | `Monthly` · `Quarterly` · `N/A` |
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

`list_projects` returns one project per tax year. Observed statuses:

| `status` | Means |
|---|---|
| `filed` | Return is filed — done, no action |
| `inProgress` | We are working it |
| `notStarted` | See the warning in §6 — this value is ambiguous |
| `wontFileWithUs` | Client is not filing through us |

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
| `Completed` | ✅ **Ready** — client answered everything in TaxDome, we have what we need |
| `N/A (SCH-C)` | ✅ **Ready** — no organizer applies; the business income flows to the owner's 1040 via Schedule C, so readiness comes from the **bookkeeping**, not an organizer |
| `N/A (Nonresident)` | ✅ Organizer doesn't apply |
| `Sent` | ⏳ **Waiting on the client** — unless `Organizer Progress` = 100% |
| `In progress` | ⏳ Waiting on the client |
| `Not Started` | 🔴 **Pending** — we don't have an organizer |
| *(blank)* | ❓ **Unverified** — check the TaxDome folder per §4, then hand to Lilian |

### The hard limitation: Organizer Progress

**`Organizer Progress` is not exposed through the Double MCP.** It is a native Double column,
not a custom property, and no MCP tool returns it (`get_questions` returns client
questions/requests, *not* organizer completion).

So for every client at `Organizer Status = Sent`, a session **cannot tell** whether the
client has finished. Do not guess and do not silently treat `Sent` as pending. State the gap
plainly and ask for the percentages, or ask Lilian to read that column on screen. Everything
else in the report can be produced without it.

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
- **Missing tax projects.** Some clients have **no project for the year at all** (common for
  clients onboarded mid-year), or only a *later* year's project. That is not "not started" —
  it's a missing project. Flag it as such.
- **`Income Tax = false` / no `Tax Return Type`** with a tax project present → ambiguous
  engagement scope. Ask whether we file for them.
- **`wontFileWithUs` is per-year, and it is sometimes just wrong.** Engagement starts and stops
  by tax year: a client can be *not* with us for one year and *with* us the next (common for
  newly-formed entities whose first real tax year is the second one). So never generalize the flag
  across years from a single project. It is also a **plain-typo risk** — there is a live case where
  a client's 2026 project is flagged `wontFileWithUs` when he *will* file 2026 with us, and the
  firm has chosen to leave the flag alone as a minor error. **Before excluding anyone on this
  flag, check their [`client-intelligence`](../client-intelligence/) file** — known-bad values are
  recorded there (see
  [`clients/yes-team-corp.md`](../../../projects/client-intelligence/clients/yes-team-corp.md) §5)
  — and when in doubt, ask. Excluding a real client from a readiness list is a worse error than
  listing one extra.

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

Within each group, produce **four** buckets, not two:

- ✅ **Already filed** — no action
- 🟢 **Ready to prepare** — return open, information in hand
- ⏳ **Pending on the client** — organizer sent/in progress, or not started
- ❓ **Needs Lilian's review** — ambiguous `Not Started`, blanks, contradictions, missing
  projects

That fourth bucket is the point of the exercise as much as the first three: it is the list
Lilian works from to close the gaps in the tracking columns.

### Call efficiency

`list_projects` and `list_client_properties` are **per-client**, so a full firm sweep is a few
hundred calls. The patterns that keep it manageable — page the roster in 2 calls, batch 10–15
per-client calls in parallel, delegate roster-wide sweeps to a subagent — are in
[`double-mcp`](../double-mcp/) §5. Read that before starting a sweep.

### Client data stays out of the repo

The readiness list names clients and their filing state. Per
[`CLAUDE.md`](../../../CLAUDE.md), that is client-specific data: **deliver it to the user**
(chat, or an artifact if a visual board is wanted) and **do not commit it**. Only the
structural knowledge — this skill — lives in the repo.

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
