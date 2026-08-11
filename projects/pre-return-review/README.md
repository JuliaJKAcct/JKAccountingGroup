# Pre-return review — the firm's analysis companion

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-08

**Lilian calls it "the tax preparer."** It does not prepare or file anything. It is the
**companion for the review that happens before preparation starts** — the pass that reads
everything the firm already holds on a client, notices what does not add up, and hands
back the questions that unblock the work.

This folder holds **why it exists and how it must think**. The step-by-step engine is the
[`organizer-review` skill](../../.claude/skills/organizer-review/); the reasoning that is
**not specific to tax organizers** is in [`method.md`](./method.md), so it can be used for
any review.

## Purpose — in Lilian's words

> *"A veces, cuando pensamos que hay clientes sometidos, nos encontramos con errores y
> problemas… y tenemos que perder mucho tiempo analizando todo esto para volver a pedirle
> al cliente."* (2026-08-11)

**The cost was never the analysis. It was the weeks lost discovering one gap at a time** —
someone starts preparing, hits a missing document, emails the client, waits days, hits the
next one, emails again. A return that could have been worked in one pass takes six weeks
of ping-pong.

**So the goal is one pass and one list of questions.** Read everything the firm holds,
reconcile it, and produce the complete set of questions the client must answer before
anyone starts — grouped so a person can act on it in five minutes.

## What it is, and what it is not

| It is | It is not |
|---|---|
| A **companion** that reviews and reports | A filer. It never submits anything |
| A reader of **everything the firm already holds** | A form that asks the client to start over |
| A producer of **questions** | A producer of conclusions. A disappearance is always a question |
| Honest about **what it could not establish** | Willing to carry an assumption forward silently |

## The standing requirements

Every review, without being asked:

1. **Read every source before producing a single finding.** A gap is not a finding until
   the answer has been looked for everywhere the firm keeps things. **Asking a client for
   something they already sent is worse than not running the review at all.**
2. **Group by root cause.** One wrong answer that leaves fifteen questions unanswered is
   **one** finding, not fifteen.
3. **End in the questions**, ordered so the answer that unblocks the most comes first, in
   the client's own language.
4. **Say plainly what still cannot be established** — and if a source was empty or
   unreachable, say that too rather than quietly proceeding.
5. **Write it into the client's file** so the year can be answered a year from now, without
   anyone's memory.

## How the answer must look

**Never a wall of text.** Lilian's verdict on the first attempt — *"una cantidad de texto
enorme sin ningún orden fijo y lógico"* — is the failure mode this exists to prevent. Two
clients' reviews opened side by side must have the same thing in the same place.

The fixed shape is six blocks: **verdict · the prior-year → this-year table · findings
grouped by root cause · what we already hold · the questions · notes for the file.**
Details in the [`organizer-review` skill](../../.claude/skills/organizer-review/) §4.

## Where the knowledge lives

| What | Where | Why there |
|---|---|---|
| **Purpose, standing requirements, how the answer looks** | This README | The statement of intent — read it first |
| **How the firm analyses ANYTHING** — the reasoning that is not organizer-specific | [`method.md`](./method.md) | Reusable for any review; a CLAUDE.md core convention points every session at it |
| **The pre-return workflow** — sources, detection families, the output blocks, the privacy discipline | [`organizer-review` skill](../../.claude/skills/organizer-review/) | Loaded when a review is actually run |
| **What is true of ONE client** | [`client-intelligence/clients/<slug>.md`](../client-intelligence/clients/) | Never in a skill — it would make it longer and less true |
| **How a rule gets captured** | [`organizer-review` skill](../../.claude/skills/organizer-review/) §6 | Four kinds of rule, four homes, with provenance |

## Outputs

**Nothing is committed.** A review is delivered **in chat** — never an artifact, never a
file — because it necessarily discusses a client's answers. What survives is the
**`Tax year YYYY — the review`** entry in the client's Client Intelligence file, which
records the questions and their answers without repeating what the client ticked in the
organizer.

## Everything this session established — and where it lives

Built 2026-08-11, over one long session with Lilian and the pilot client. She asked, before
deleting that session, to be certain nothing was lost. **This is the audit. Every row is
checkable.**

| What she established | Where it lives now |
|---|---|
| The **purpose** — one pass, one question list, instead of weeks of ping-pong | This README |
| **Look before you ask** · group by root cause · show the trail · a disappearance is a question · derive from structure · a client's mistake is work · the internal checklist is not the client message · show both records then ask · question the frame | [`method.md`](./method.md) — **and summarised in `CLAUDE.md`'s core conventions, so every session sees them without loading a skill** |
| The **fixed six-block output** and the "no wall of text" rule | [`organizer-review`](../../.claude/skills/organizer-review/) §4 |
| The **nine sources** in order, and that Gmail / Drive / Ping are not optional | that skill §1 |
| The **six detection families**, incl. the K-1 disappearance rule and the filing-status catch | that skill §2 |
| The **prior-year → this-year table** and its markers | that skill §3 |
| The **carryover block** when the prior year was prepared elsewhere — NOL, basis, suspended losses, states | that skill §2 |
| **Form 1095-A blocks filing**; estimated payments asked in both directions | that skill §2, family 6 |
| **How to phrase a question to a client** — the four moves, ask facts not family-law documents | that skill §4 Block E, and [`method.md`](./method.md) §7–8 |
| **Starting cold** — read the client file and its tax-year entry first | that skill's "Starting cold" |
| **How a rule gets captured** — four kinds, four homes, provenance, corrections outrank proposals | that skill §6 |
| **Calibration** — run it cold, correct only at the end | that skill §6, and above |
| A client file is created **in the same session** you work a client | `CLAUDE.md` core conventions + [`client-intelligence`](../../.claude/skills/client-intelligence/) |
| A **Double note** carries the client's information, **not our analysis** | `CLAUDE.md` + [`double-mcp`](../../.claude/skills/double-mcp/) §7 rule 11 |
| **Organizer answers never reach the repo** — including paraphrase | [`double-mcp`](../../.claude/skills/double-mcp/) §2.2 + `client-intelligence`'s ⛔ subsection |
| **No identifiers on published pages** — enforced in `loadClients()`, with its blind spots stated | the three skills + `FOLLOW-UPS` |
| The **1040 organizer's logic defects** — seven dead options, the unreachable rental branch | [`individual-organizer-logic-defects.md`](../../.claude/skills/tax-season-readiness/references/individual-organizer-logic-defects.md) · `BACKLOG` IDEA-17 · `FOLLOW-UPS` |
| **`VIA VOICE` in a Double note means Google Voice**, not a recording | that skill's source table + the client's file |
| Everything about the **pilot client** — his structure, his carryovers, his open questions | [`clients/denys-melnyk.md`](../client-intelligence/clients/denys-melnyk.md) |

**What is deliberately NOT written down:** the client's organizer answers, his figures, his
identifiers. Those stay in Double. That is the rule, not an omission.

## Working on this

- **Running a review:** load the [`organizer-review` skill](../../.claude/skills/organizer-review/).
  It starts with the privacy discipline; read it before the first call.
- **Improving it:** that skill's §6 is the rule-capture protocol — where a new rule goes and
  what provenance it must carry.
- **Calibrating it:** Lilian's method — **run it cold, correct only at the end.** Correcting
  mid-flight teaches the session, not the file. What it misses is the rule that is missing.
