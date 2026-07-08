# BACKLOG — the firm's idea parking lot

A running list of things we want to build together, so nothing gets lost between
the moment Julia thinks of it and the moment we sit down to do it. This is the
**"capture now, decide later"** file: ideas land here as they come up; when we're
ready to work, we open this file, pick one from the table, and go.

> Kept in English like every other repo artifact (see `CLAUDE.md`), even when the
> conversation that produced it happened in Spanish.

## How we use this

- **Capturing:** whenever Julia drops an idea ("anota esto como pendiente"),
  Claude adds it here as a new `IDEA-##` entry — no work starts yet.
- **Deciding:** when Julia asks "¿qué teníamos pendiente?" / "let's pick
  something," we read the **Quick view** table below and choose one.
- **Starting:** when an idea is chosen, it graduates out of "parked" — usually
  into its own project under `projects/` (or an existing one), following the
  process in `CLAUDE.md`. Update the idea's **Status** here and link to where
  the real work now lives.
- **No client data here.** This file holds ideas and plans only — never bank
  details, passwords, EINs, or dollar figures. Those live in the firm's systems
  (Drive / Double / QuickBooks).

## Quick view

| ID | Idea | Where it fits | Priority | Status |
|---|---|---|---|---|
| [IDEA-01](#idea-01--client-by-client-accounting--bookkeeping-sops) | Client-by-client accounting & bookkeeping SOPs (with blanks for sensitive data) | `projects/sops/` | Medium | Not started |
| [IDEA-02](#idea-02--text-message-alerts-to-julia) | Text-message / phone alerts to Julia for important notifications | Firm ops / tooling | Low (needs decision) | Researching |
| [IDEA-03](#idea-03--social-media-posts-with-the-notebooklm-strategy) | Restart social media with the NotebookLM content strategy | `projects/marketing/` | **High** | Not started (blocked on inputs) |
| [IDEA-04](#idea-04--brand-every-team-members-email-signature) | Put every team email on the Design System (logo + signatures) | [`projects/email-branding/`](./projects/email-branding/) | Medium | **Started** — Julia's signature + email system built |
| [IDEA-05](#idea-05--reasonable-compensation-client-organizer) | Reasonable-comp client organizer (intake questionnaire) | `projects/reasonable-compensation/` | Medium | Not started |
| [IDEA-06](#idea-06--email-organization-for-julia--lilian) | Improve email organization for Julia & Lilian (labels/filters) | Firm ops / tooling | Low (parked) | Parked — do not start yet |

_Priority and status are Julia's call — Claude proposes, she decides. "Blocked"
means we're waiting on an input or an access grant before real work can begin._

---

## IDEA-01 — Client-by-client accounting & bookkeeping SOPs

**What Julia wants:** a detailed, written procedure for how we do the accounting
and bookkeeping for specific clients, so that when one team member is on vacation
and another covers that client, the covering person isn't flying blind because
nothing was written down. Julia would narrate the steps client by client; Claude
writes each up as a clear runbook.

**The confidential-data pattern (important):** the SOP is committed to the repo
with **sensitive fields left blank as labeled placeholders** — e.g. bank account
numbers, bank-login credentials used to pull statements, portal passwords. Claude
marks *what kind* of value goes in each blank; Julia then copies the finished SOP
and fills those blanks into a private copy stored in **Google Drive**. The repo
copy stays safe to share.

**Why it matters:** continuity and delegability — coverage during PTO, faster
onboarding of new staff, auditability.

**Where it fits:** the existing [`projects/sops/`](./projects/sops/) project —
its whole purpose is exactly this (client-task runbooks + firm procedures), and it
already documents the "one self-contained file per procedure, never commit client
data, include a blank template" convention. One SOP file per client (or per
client-task), grouped into a subfolder once there are a few.

**What we need to start:** Julia narrates one client's monthly bookkeeping/close
flow end to end (which accounts, where statements come from, categorization
quirks, recurring items, review steps, deliverables/deadlines). Claude drafts it
with placeholders for anything sensitive.

**Capability check:** ready to go — Google Drive is connected (for the private
filled-in copies), and the `sops/` project + conventions already exist. This is
also the theme of the current working branch.

**Priority:** Medium · **Status:** Not started (waiting on Julia's narration)

---

## IDEA-02 — Text-message alerts to Julia

**What Julia asked:** if she registers herself as a client in **Double**, could
Claude send her text messages through that platform? The goal is to be alerted by
text when there's important information Claude should notify her about.

**Honest capability check (as of 2026-07):**

- **Double → SMS: not available with the current integration.** The connected
  Double tools cover clients, files, properties, closes/tasks, transactions,
  reports, contacts, notes, questions and timers — there is **no** tool to send a
  text message to a person. So Claude can't text Julia via Double today.
- **What Claude *can* do to reach Julia's phone today:**
  - **Push notifications via Claude Code's Remote Control** — if Julia has Remote
    Control connected on her phone, Claude can push a short alert to it. That's a
    real "ping my phone" path, just not SMS.
  - **Email** — once the Gmail connector is authorized (see IDEA-06), or via
    QuickBooks for invoice/estimate/payment-link emails.
  - **Scheduled check-ins** — Claude can wake itself on a schedule to run a check
    and then notify.

**Decision needed from Julia:** which channel do we actually want for alerts —
phone push (Remote Control), email, or do we want to explore a dedicated SMS
service (e.g. an SMS API) as a small separate integration? That choice drives
whether there's any build here at all.

**Where it fits:** firm ops / tooling (not a marketing project). If we go the SMS
route it becomes a small integration project.

**Priority:** Low until the channel is chosen · **Status:** Researching /
needs a decision

---

## IDEA-03 — Social media posts with the NotebookLM strategy

**What Julia wants:** get JK active on social media again by generating posts with
the NotebookLM-based content strategy we discussed. Julia will share some of the
posts the firm has already published so Claude learns the house style; then we run
the **first real NotebookLM test**. Julia flags this as **one of the highest
priorities.**

**Why it matters:** the firm has gone quiet on social and needs to be visibly
active again; this is top of the list to restart.

**Where it fits:** [`projects/marketing/`](./projects/marketing/), using the
NotebookLM MCP connector and the content-strategy work already in the repo (the
Trend Scout / social-post material under the video pipeline). Posts stay on-brand
via [`brand/`](./brand/).

**What we need to start:**
1. **Sample posts** — Julia pastes a handful of previously published posts (IG /
   FB captions) so Claude can capture tone, length, formatting, hashtag habits,
   language mix (ES/EN/RU).
2. **A first NotebookLM run** — feed the samples + strategy in and generate a
   first batch of drafts for Julia to react to.

**Capability check / open access question:**

- **Instagram & Facebook access: not connected today.** There is no IG/FB
  connector in this repo's integrations, so Claude currently **cannot read your
  IG/FB feeds or publish to them directly.** Two ways forward: (a) Julia pastes
  the sample posts and publishes Claude's drafts manually — works right now; or
  (b) we add a social connector/scheduler later so Claude can pull past posts and
  push new ones. For the first test, (a) is enough.
- **NotebookLM: connected** and ready (one-time Google login may be needed on a
  desktop session per the README).

**Priority:** **High** · **Status:** Not started — blocked only on Julia sending
the sample posts (the trigger to kick off the first NotebookLM test)

---

## IDEA-04 — Brand every team member's email signature

**What Julia wants:** make every email the whole team sends use our **Design
System** — updated logo, standardized employee signatures, consistent styling —
so outbound email is on-brand across everyone.

**Why it matters:** email is a daily, high-volume touchpoint; inconsistent or
outdated signatures quietly erode the brand.

**Where it fits:** now a project —
[`projects/email-branding/`](./projects/email-branding/), built on
[`brand/`](./brand/) (logo + design system are the source of truth). It outputs
ready-to-paste HTML signatures (one per team member), a full branded email
template, and a "how to install it in Gmail" guide.

**What we've done:** built the email system on the Design System — Julia's
paste-ready signature (`signatures/julia.html`), a reusable per-teammate template,
a branded email layout, an email style guide (fonts + fallbacks, color, dark mode),
and Gmail install steps. Uses email-safe technique (tables, inline CSS, hosted PNG
logo, font fallbacks) so it survives Gmail / Outlook / Apple Mail.

**What's left to finish Julia's:** her real details (last name, exact title,
phone, booking link) and the hosted logo URL dropped into `signatures/julia.html`;
then roll out to the rest of the team by copying the template.

**Capability check:** the branded HTML is done. Actually *installing* into each
person's Gmail is manual (paste into Gmail settings) — the Gmail connector can
read/label/draft but doesn't set account signatures.

**Priority:** Medium · **Status:** **Started** — system built; awaiting Julia's real
contact details + hosted logo URL to finalize hers, then team rollout

---

## IDEA-05 — Reasonable-compensation client organizer

**What Julia wants:** an **organizer (intake questionnaire)** to send to an S-corp
owner so we can gather everything needed to produce the reasonable-salary report
we already designed. The organizer should walk the owner through **all the roles
they play in their company** — framed so they understand *everything counts*, from
acting as their own secretary to doing their own social-media posts — and collect
the exact inputs the reasonable-comp analysis needs.

**Why it matters:** the report is only as good as its inputs. A well-built
organizer gets us clean, complete role/hours/financial data up front, makes the
final figure more defensible, and turns intake into a repeatable, delegable step.

**Where it fits:** [`projects/reasonable-compensation/`](./projects/reasonable-compensation/),
paired with the existing
[`reasonable-compensation` skill](./.claude/skills/reasonable-compensation/). The
skill already runs an interactive intake and produces a branded, print-ready HTML
report — this organizer is the **client-facing front end** that feeds that intake,
so the questions should map 1:1 to what the skill asks for (roles & hats, hours,
financials for the Independent Investor Test, company size, location, etc.). The
report look-and-feel is already defined by the skill; the organizer just needs to
gather what it consumes.

**What we need to start:** decide the delivery format (branded HTML/PDF form,
Google Form, or a fillable doc) and language(s) (ES / EN / RU). Then draft the
question set from the skill's intake and brand it via `brand/`.

**Capability check:** fully buildable now — the skill defines the required inputs,
and we can render a branded organizer. Delivery could be Gamma (document/social),
a branded HTML form, or a Google Doc via Drive. (A Google *Form* would be Julia's
to set up — the Drive connector creates Docs, not Forms.)

**Priority:** Medium · **Status:** Not started

---

## IDEA-06 — Email organization for Julia & Lilian

**What Julia wants:** help keeping her inbox and Lilian's better organized. There
are already automatic labels, but some things could be improved. **Explicitly: do
nothing yet — just capture it as pending.**

**Why it matters:** less time lost to inbox triage; important client mail doesn't
slip through.

**Where it fits:** firm ops / tooling. When we start, it means auditing the
current labels/filters and proposing an improved scheme (and possibly automating
it if Gmail supports it through the connector).

**Capability check / dependency:** the **Gmail connector is not yet authorized**
in this environment. Before any email work (this idea or IDEA-04's install step),
Julia needs to authorize Gmail from her Claude connector settings. Until then,
Claude can't see or touch the mailboxes.

**Priority:** Low · **Status:** Parked — **do not start yet** (Julia's explicit
instruction)

---

## Adding a new idea

When a new idea comes up: add a row to **Quick view** with the next `IDEA-##`, and
add a matching detailed section using the same shape (What Julia wants · Why it
matters · Where it fits · What we need to start · Capability check · Priority ·
Status). Keep it to ideas and plans — no client data.
