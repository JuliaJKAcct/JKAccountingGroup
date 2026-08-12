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
   unreachable, say that too rather than quietly proceeding. (Block A carries this.)
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

**Nothing is committed, and nothing is published.** A review is delivered **in chat**, and
**handed over as a PDF** so the conversation can be deleted without losing the work — Lilian's
ask, 2026-08-12: *"dame todo esto en un PDF para poder borrar la sesión."* An **artifact** is
still barred, because that is a hosted page with a URL that can travel; a file in her hands is
not. The PDF carries no identifier, says on its own first page that it belongs in Double or the
firm's Drive, and **is deleted from disk when the work is done** — deleting the conversation does
not reach it. Mechanics in the [`organizer-review` skill](../../.claude/skills/organizer-review/)
§0 rule 4 and §5.

What survives in the repo is the **`Tax year YYYY — the review`** entry in the client's Client
Intelligence file: the questions, their answers, and **the tax facts the review established** —
whatever source they came from. The identity block, personal contact details and dollar figures
stay out ([`organizer-review`](../../.claude/skills/organizer-review/) §0 rule 5, which Lilian
rewrote on 2026-08-12).

## Everything this session established — and where it lives

Built 2026-08-11, over one long session with Lilian and the pilot client. She asked, before
deleting that session, to be certain nothing was lost. **Every row below is checkable — open
the destination and look.**

⚠️ **This is the main record, not a proof of completeness.** If you remember something from that
session and it is not in this table, **search the skill and `method.md` before concluding it was
lost** — plenty is written down that no single row names.

| What she established | Where it lives now |
|---|---|
| The **purpose** — one pass, one question list, instead of weeks of ping-pong | This README |
| **Look before you ask** · group by root cause · show the trail · a disappearance is a question · derive from structure · a client's mistake is work · the internal checklist is not the client message · show both records then ask · question the frame | [`method.md`](./method.md) — **and summarised in `CLAUDE.md`'s core conventions, so every session sees them without loading a skill** |
| The **fixed six-block output** | [`organizer-review`](../../.claude/skills/organizer-review/) §4 |
| That the review is **never a narrative** — the shape is fixed, and why | that skill's opening section |
| The **nine sources** in order, and that Gmail / Drive / Ping are not optional | that skill §1 |
| **How the prior year is obtained** — the review's most valuable source, read from Double **by the session itself** through [`tools/redact-doc/`](../../tools/redact-doc/): **one document, the latest year only**. Lilian ruled this 2026-08-11, replacing a rule an assistant had written and never put to her | that skill §1 source 9 · the limits in [`double-mcp`](../../.claude/skills/double-mcp/) · `FOLLOW-UPS` 28 |
| The **six detection families**, incl. the K-1 disappearance rule and the filing-status catch | that skill §2 |
| The **prior-year → this-year table** and its markers | that skill §3 |
| The **carryover block** when the prior year was prepared elsewhere — NOL, basis, suspended losses, states | that skill §2 |
| **Form 1095-A blocks filing**; estimated payments asked in both directions | that skill §2, family 6 |
| **How to phrase a question to a client** — the four moves, ask facts not family-law documents | that skill §4 Block E, and [`method.md`](./method.md) §7–8 |
| **Starting cold** — read the client file and its tax-year entry first | that skill's "Starting cold" |
| **How a rule gets captured** — four kinds, four homes, provenance, corrections outrank proposals | that skill §6 |
| **Calibration** — run it cold, correct only at the end | that skill §6, and *Working on this* below |
| A client file is created **in the same session** you work a client | `CLAUDE.md` core conventions + [`client-intelligence`](../../.claude/skills/client-intelligence/) |
| A **Double note** carries the client's information, **not our analysis** | `CLAUDE.md` + [`double-mcp`](../../.claude/skills/double-mcp/) §7 rule 11 |
| **What an organizer answer may leave in the repo** — the **tax facts** yes (filing status, states, dependants, coverage, income types); the **identity block, contact details and dollar figures** never. Lilian reversed the wider ban on 2026-08-12, one day after it was written, because it made a *resolved* question unwritable | [`double-mcp`](../../.claude/skills/double-mcp/) §2.2 + `client-intelligence`'s ⛔ subsection |
| **No identifiers on published pages** — client files feed the Hub *and* the review dashboard (an Artifact) | Enforced in [`client-intelligence/render/build.mjs`](../../.claude/skills/client-intelligence/render/build.mjs) → `loadClients()`. Stated, with its blind spots, in the [`client-intelligence`](../../.claude/skills/client-intelligence/), [`knowledge-hub`](../../.claude/skills/knowledge-hub/) and [`organizer-review`](../../.claude/skills/organizer-review/) skills · `FOLLOW-UPS` 26 |
| The **1040 organizer's logic defects** — seven dead options, the unreachable rental branch | [`individual-organizer-logic-defects.md`](../../.claude/skills/tax-season-readiness/references/individual-organizer-logic-defects.md) · `BACKLOG` IDEA-17 · `FOLLOW-UPS` |
| **`VIA VOICE` in a Double note means Google Voice**, not a recording | [`organizer-review`](../../.claude/skills/organizer-review/) §1 source 2 + the client's file §5 |
| The **`Tax year YYYY — the review`** entry — what gated the return, every question **and its answer as it arrives**, what the prior return established. **This is the only thing a review leaves behind** | [`organizer-review`](../../.claude/skills/organizer-review/) §4 Block F + §5, and the [client template](../client-intelligence/_client-template.md) §6 |
| **Only the first FOUR top-level bullets** of a client file's §5 and §6 Outstanding items ever reach the team — so order both by consequence | [`_client-template.md`](../client-intelligence/_client-template.md) §5 · [`client-intelligence`](../../.claude/skills/client-intelligence/) · [`organizer-review`](../../.claude/skills/organizer-review/) §5 |
| **Every example in a SKILL must be invented, and labelled** — a real client's material is never the teaching example there | [`organizer-review`](../../.claude/skills/organizer-review/) §0 rule 7 |
| The rest of the **privacy discipline** — tell the person before the first read · remind them to delete the conversation · never from a subagent or a scheduled session · never into an artifact | [`organizer-review`](../../.claude/skills/organizer-review/) §0 + [`double-mcp`](../../.claude/skills/double-mcp/) §2.2 |
| **Lilian's standing arrangement** — she keeps the information reachable, so the source list is an expectation; a genuinely missing channel is reported to her, not asked of the client | [`organizer-review`](../../.claude/skills/organizer-review/) §1 |
| Everything about the **pilot client** — his structure, his carryovers, his open questions | [`clients/denys-melnyk.md`](../client-intelligence/clients/denys-melnyk.md) |

**What is deliberately NOT written down:** his **identifiers**, his **contact details** and his
**figures**. Those stay in Double. **The tax facts are written down** — Lilian reversed the wider
ban on 2026-08-12, one day after it was written, because it made a question the organizer had
already *answered* unwritable.

## Working on this

- **Running a review:** load the [`organizer-review` skill](../../.claude/skills/organizer-review/).
  It starts with the privacy discipline; read it before the first call.
- **Improving it:** that skill's §6 is the rule-capture protocol — where a new rule goes and
  what provenance it must carry.
- **⚠️ It is not validated yet.** Everything here comes from **one client and one run**. Whether
  the nine method rules fire on work that is not organizer-shaped is still open —
  [`FOLLOW-UPS.md`](../../FOLLOW-UPS.md) row 27.
- **Calibrating it:** Lilian's method — **run it cold, correct only at the end.** Correcting
  mid-flight teaches the session, not the file. What it misses is the rule that is missing.
