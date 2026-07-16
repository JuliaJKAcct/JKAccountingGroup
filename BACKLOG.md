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
| [IDEA-03](#idea-03--social-media-posts-with-the-notebooklm-strategy) | Restart social media with the NotebookLM content strategy | `projects/marketing/collateral/` | **High** | Not started (blocked on inputs) |
| [IDEA-04](#idea-04--brand-every-team-members-email-signature) | Put every team email on the Design System (logo + signatures) | [`projects/marketing/email-branding/`](./projects/marketing/email-branding/) | Medium | **Started** — Julia's signature finalized (Medallion); skill built; team rollout pending |
| [IDEA-05](#idea-05--reasonable-compensation-client-organizer) | Reasonable-comp client organizer (intake questionnaire) | `projects/reasonable-compensation/` | Medium | Not started |
| [IDEA-06](#idea-06--email-organization-for-julia--lilian) | Improve email organization + the tag/label system for Julia & Lilian (labels/filters; Lilian has specific tag deficiencies on Julia's inbox to fix) | Firm ops / tooling | Low (parked) | Parked — capture only (Lilian to detail the tag deficiencies) |
| [IDEA-07](#idea-07--a-system-so-every-document-follows-the-design-system) | Company-wide system so every generated document follows the Design System | `brand/` → new skill (+ templates) | Medium | Not started (parked) |
| [IDEA-08](#idea-08--improve-julias-email-signature-booking-link--photo) | Improve Julia's email signature — real "Book a consultation" link + an elegant photo/headshot | [`projects/marketing/email-branding/`](./projects/marketing/email-branding/) | Medium | Booking link done (Jul 2026); headshot parked |
| [IDEA-09](#idea-09--build-our-own-goproposal-alternative) | Build our own GoProposal alternative — questionnaire + pricing engine + branded proposal, to drop the subscription | New project (proposal + pricing tool) | Medium | Not started (needs inputs) |
| [IDEA-10](#idea-10--website-scheduling-calendar-for-clients-and-prospects) | Website scheduling/booking calendar — separate flows for existing clients and for prospects | Firm ops / website (likely a new project) | **High** | Not started (Lilian to share her ideas) |
| [IDEA-11](#idea-11--lead-management--conversion-stats-in-odoo-crm) | Manage all leads in Odoo (CRM) — website inquiries flow in; track conversion rate / wins / rejections / pipeline stats | Firm ops / CRM (new project when it starts) | **High** | Not started (learn Odoo + design the flow) |
| [IDEA-12](#idea-12--central-sop-index-a-clickable-hub-for-every-sop) | Central, clickable index/map of every company SOP — one place to see all SOPs and open them | [`projects/sops/`](./projects/sops/) | Medium | Not started (index seed already in the sops README) |
| [IDEA-13](#idea-13--per-client-memory-ping-assistant-client-intelligence-connected-to-claude) | Per-client memory Lilian can query in plain language — connect **Ping Assistant's Client Intelligence** directly to Claude (Double notes as fallback bridge) | Firm ops / tooling (Ping Assistant; Double fallback) | Medium | **Blocked / vendor** — Ping identified & integrates with Double; awaiting Ping dev/support on a direct API/MCP |
| [IDEA-14](#idea-14--sop-authoring-skill-how-lilian-wants-sops-structured) | `sop-authoring` skill — encode how Lilian wants SOPs structured (flowchart first, numbered hierarchy, bullets, uploads checklist, email map, design-system render) | [`.claude/skills/sop-authoring/`](./.claude/skills/sop-authoring/) + [`projects/sops/`](./projects/sops/) | Medium | **Built (v1, Jul 2026)** — refine after Lilian's final BTR SOP review |

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
client-task), grouped into a subfolder once there are a few. These SOPs surface in
the central, clickable SOP hub tracked in
[IDEA-12](#idea-12--central-sop-index-a-clickable-hub-for-every-sop).

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

**Where it fits:** [`projects/marketing/collateral/`](./projects/marketing/collateral/), using the
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
[`projects/marketing/email-branding/`](./projects/marketing/email-branding/), built on
[`brand/`](./brand/) (logo + design system are the source of truth). It outputs
ready-to-paste HTML signatures (one per team member), a full branded email
template, and a "how to install it in Gmail" guide.

**What we've done:** built the email system on the Design System — Julia's
paste-ready signature (`signatures/julia.html`), a reusable per-teammate template,
a branded email layout, an email style guide (fonts + fallbacks, color, dark mode),
and Gmail install steps. Uses email-safe technique (tables, inline CSS, hosted PNG
logo, font fallbacks) so it survives Gmail / Outlook / Apple Mail. **Julia's
signature is finalized** as the compact *business-card grammar* card (teal Medallion
panel + ivory details with the DIRECT / EMAIL / WEB rows), with her real
details (Julia Kononova, MBA, EA · CEO · Chief Accountant · 786-318-1505). We also
built the [`email-signature` skill](./.claude/skills/email-signature/) as the
reusable engine, with **two documented install paths** — a public hosted-image URL
(the Medallion appears on paste) or uploading the image in Gmail. *(We explored
adding Julia's photo — circular seal, photo panels — but her current lifestyle photo
isn't the right raw material for a small avatar; that improvement is parked in
[IDEA-08](#idea-08--improve-julias-email-signature-booking-link--photo).)*

**What's left:** roll out to the rest of the team by copying the template, and the
headshot improvement now tracked in
[IDEA-08](#idea-08--improve-julias-email-signature-booking-link--photo) (the booking
link shipped Jul 2026; a proper headshot is still parked).

**Capability check:** the branded HTML is done. Actually *installing* into each
person's Gmail is manual (paste into Gmail settings) — the Gmail connector can
read/label/draft but doesn't set account signatures.

**Related:** this is the email-specific slice of
[IDEA-07](#idea-07--a-system-so-every-document-follows-the-design-system) — the
firm-wide system to put *every* generated document on the Design System.
`email-branding` is its first concrete instance.

**Priority:** Medium · **Status:** **Started** — system + `email-signature` skill
built; Julia's signature finalized (Medallion); team rollout pending.
Signature-specific improvements tracked in
[IDEA-08](#idea-08--improve-julias-email-signature-booking-link--photo).

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
are already automatic labels, but some things could be improved. Julia's framing
when she raised it: **do nothing yet — just capture it as pending.**

**What Lilian wants (the tag-system slice):** improve the **tag/label system on
Julia's mailbox specifically**. Lilian has been working in that inbox and has
**found specific deficiencies** in how the current tags behave — things like
mislabeled, overlapping, missing, or not-auto-applying tags — and will walk Claude
through each one when we sit down to fix it. This was briefly captured as its own
separate entry but was **folded in here**, since Gmail labels *are* tags and it's
the same body of work.

**Why it matters:** tags/labels are how mail gets triaged and found again — less
time lost to triage, and important client mail doesn't slip through. When the
tagging is off, surfacing the right mail gets harder for whoever is in the inbox.

**Where it fits:** firm ops / tooling. When we start, it means auditing the current
labels/filters — Julia's and Lilian's — and proposing an improved scheme (and
possibly automating it via the Gmail connector). **Lilian's identified tag
deficiencies on Julia's mailbox are the concrete starting point.**

**What we need to start:** Lilian narrates the specific tag deficiencies she's
found (what's mislabeled, missing, overlapping, or not applying automatically) and
what the ideal tagging scheme should look like; then we audit the live
labels/filters and propose the fix.

**Capability check / dependency:** the Gmail connector exposes label tools
(list / create / apply labels on messages and threads), so reworking the tag scheme
is technically in reach — but **access to the actual mailboxes must be confirmed
first** (the connector has to be authorized for these inboxes; this was the
blocker noted when Julia first raised it). Confirm access and capture the current
label setup when we start. (Same dependency gates IDEA-04's Gmail install step.)

**Priority:** Low (parked) · **Status:** Parked — capture only. Julia asked to hold
when she raised it; Lilian to detail the tag deficiencies before any work begins.

---

## IDEA-07 — A system so every document follows the Design System

**What Julia wants:** a real *system* so that **every document the firm generates**
— proposals, letters, reports, client organizers, memos, one-pagers, slide decks —
follows our Design System automatically, instead of being styled by hand each time.
Julia wants to figure out the *best* way to run this: e.g. write the content first
and then hand it to Claude to apply the Design System, start from branded
templates, or some mix.

**Why it matters:** consistency *is* the brand. Today, on-brand styling depends on
whoever makes the document remembering to apply it; a system makes "on-brand" the
default and removes manual rework — everything the firm sends out looks like it
came from the same place.

**Where it fits:** built on [`brand/`](./brand/) — the design system
([`brand/design-system/`](./brand/design-system/)) and
[`JK-Brand-Guide.md`](./brand/JK-Brand-Guide.md) are the single source of truth.
The engine would most naturally be a **reusable Claude skill** in
[`.claude/skills/`](./.claude/skills/) (an "apply-the-brand" pass, in the spirit of
the existing `impeccable` design skill), likely paired with a small project that
holds branded templates. This **generalizes** what
[IDEA-04](#idea-04--brand-every-team-members-email-signature) already did for email:
the [`email-branding`](./projects/marketing/email-branding/) project is the first concrete
instance (email is one document type), and IDEA-07 extends the same approach to
every document the firm produces.

**Approaches to weigh** (this is the "what's the best way?" part, to settle when we
pick it up):

1. **Branded templates up front** — a set of starter templates (Google Doc / Gamma
   / HTML) with the brand already baked in; people write inside them, so the output
   is on-brand by construction. Best for recurring, predictable documents. (This is
   what `email-branding` did for signatures.)
2. **Post-hoc "brand this" pass** (Julia's instinct) — the author writes the content
   plainly, then hands it to Claude / a skill that restyles it to the Design System.
   Best for one-offs and documents that already exist.
3. **One branding engine + a format renderer** — a single skill that reads the
   content plus the brand tokens and emits the branded document in the right format:
   Gamma for decks/social/docs, branded HTML→PDF for print/reports (the
   reasonable-comp report is a proven branded-HTML pattern), etc. Likely the
   endgame — templates for the common cases *and* an on-demand pass for everything
   else.

**What we need to decide to start:** (a) which document types are in scope and their
priority; (b) which output formats matter (Google Docs, PDF, HTML, Gamma decks);
(c) whether we go templates-first, pass-first, or both. Then we design the skill
and/or template set against `brand/design-system/`.

**Capability check:** the building blocks exist — `brand/design-system/`
(tokens/CSS), the `impeccable` design skill, Gamma (themed docs/decks/social), a
working branded-HTML example (the reasonable-comp report), and now `email-branding`
as a proven template-based instance. A caveat on formats: HTML/PDF and Gamma are
straightforward to brand automatically; matching the exact brand *inside* a live
Google Doc or Word file is more limited, so those may lean on templates rather than
an automated restyle.

**Priority:** Medium · **Status:** Not started — parked for a design discussion

---

## IDEA-08 — Improve Julia's email signature: booking link + photo

**What Julia wants:** two concrete improvements to her now-finalized signature.

1. **The real "Book a consultation" link.** ✅ **Done (Jul 2026).** The signature's
   call-to-action now points at the firm's contact page
   (`https://www.jkaccountinggroup.com/contactus`) in both `julia.html` and
   `julia-hosted.html`, and it's the pre-set default in the template and the
   `email-signature` skill — so every future signature ships with a working link.
   *(Confirm the contact page resolves before wide rollout — a dead CTA is worse than none.)*
2. **An elegant photo / headshot.** We explored adding Julia's photo (small circular
   seal, big circle, photo panels, full-height photo column). The honest conclusion:
   her current photo is a *lifestyle / environmental* shot (full-body, seated, styled
   set with a plant and pouf) — lovely for a website "About", but the wrong raw
   material for a small, crisp signature avatar, so every treatment read as "a photo
   placed without care." To do it elegantly we need a **proper headshot**: tight
   head-and-shoulders, plain/neutral (or brand-color) background, even lighting. With
   that, a small circular seal that echoes the Medallion looks impeccable.

**Why it matters:** the booking link is the signature's only CTA — a placeholder
link wastes it; and a tasteful founder headshot builds trust for a boutique,
founder-led firm.

**Where it fits:** [`projects/marketing/email-branding/`](./projects/marketing/email-branding/),
applied via the [`email-signature` skill](./.claude/skills/email-signature/) (the
engine is already built — this is a fill-in, not new construction).

**What we need to start:** a purpose-shot headshot on a plain background (a quick
studio/phone headshot, or an AI-headshot generated from a selfie). *(The booking link
is done — see item 1.)*

**Capability check:** trivial to apply — the skill, template, and install paths are
done. The photo is a drop-in once a suitable headshot is in hand.

**Priority:** Medium · **Status:** Booking link **done (Jul 2026)**; headshot still
parked — waiting on a proper studio/phone headshot. (The signature ships now with the
Medallion; the photo is an enhancement.)

---

## IDEA-09 — Build our own GoProposal alternative

**What Julia wants:** build the firm's own in-house version of **GoProposal** (the
proposal / pricing / engagement-letter tool for accountants) so the firm can **stop
paying the subscription**. Julia will provide screenshots of the entire GoProposal
questionnaire plus all the information needed; from that, Claude builds an
equivalent: a guided questionnaire → a pricing engine that encodes the firm's fee
rules → a branded, client-ready proposal (and, if wanted, an engagement letter).

**Why it matters:** kills a recurring SaaS cost, and — because we own it — the
questionnaire, the pricing logic, and the proposal design all live on our Design
System and can be changed instantly, with no vendor limits or per-seat fees.

**Where it fits:** its own new project (e.g. `projects/proposal-tool/`), most likely
a self-contained HTML/JS app — questionnaire + pricing calculator — that outputs a
branded proposal. It leans directly on
[IDEA-07](#idea-07--a-system-so-every-document-follows-the-design-system) (the
on-brand document system) for the proposal's look, and reuses the intake pattern
from [IDEA-05](#idea-05--reasonable-compensation-client-organizer) (the
reasonable-comp organizer). The fee schedule / pricing rules are firm data — kept in
the firm's control, not exposed publicly.

**What we need to start (from Julia):**
1. **Screenshots of the entire GoProposal questionnaire** — every question, field,
   and option, in order.
2. **The pricing logic** — the services offered and how price is calculated (tiers,
   multipliers, minimums, add-ons, monthly vs. annual), plus any rules ("if X then
   Y").
3. **The proposal + engagement-letter wording** the firm uses or wants, and what the
   client ultimately sees/receives.
4. **The acceptance step** — does the client need to e-sign / accept online, and
   what do you use for that today?

**Capability check:** the core is very buildable and fully ownable — a questionnaire
+ pricing calculator + branded proposal is exactly the kind of self-contained
HTML/JS + Design System artifact we can host ourselves, with no subscription. Two
pieces need a *decision*, not just a build:

- **E-signature / online acceptance** — there's no dedicated e-sign connector today,
  so options are (a) generate the branded proposal/PDF and collect acceptance more
  simply (reply-to-accept, a checkbox + timestamp, or a signing tool the firm
  already has), or (b) add an e-sign integration later.
- **Hosting / how the client opens it** — a shareable link vs. a PDF vs. a hosted
  page. To settle in the design discussion.

**Priority:** Medium · **Status:** Not started — waiting on Julia's screenshots +
pricing logic

---

## IDEA-10 — Website scheduling calendar for clients and prospects

**What Lilian wants:** a working **scheduling / booking calendar on the firm's
website** (jkaccountinggroup.com) that fits how the firm actually works — with **two
distinct audiences**: people who are **already clients** and people who are **not yet
clients (prospects)**. Each should get the right booking experience (a prospect
booking an intro / consultation vs. an existing client scheduling a working meeting).
Lilian has **specific ideas** for how it should work that she'll share when we build
it. She flags this as **one of the most important** things to do.

**Why it matters:** the calendar is a front door for the firm — a self-serve booking
flow turns website visitors into booked consultations (prospects) and gives existing
clients a friction-free way to grab time, cutting the email back-and-forth. It's the
natural home for the "Book a consultation" CTA already shipped in the email signature
(see [IDEA-08](#idea-08--improve-julias-email-signature-booking-link--photo)) and it
feeds the front-offer / consultation funnel in the marketing work.

**Where it fits:** firm ops / website — most likely its **own new project** when it
graduates (e.g. `projects/website-scheduling/`), touching the website, Google
Calendar, and the marketing consultation funnel. Ties to
[IDEA-08](#idea-08--improve-julias-email-signature-booking-link--photo) (the
signature's booking link should point here once it exists) and to
[`projects/marketing/referral-offer-strategy/`](./projects/marketing/referral-offer-strategy/)
(the prospect / diagnostic front-offer flow). The leads these bookings create are
managed and measured in
[IDEA-11](#idea-11--lead-management--conversion-stats-in-odoo-crm).

**What we need to start:** Lilian shares her ideas, and we settle: the two audiences'
flows (what a prospect books vs. what a client books), meeting types & durations, what
to collect up front, routing (Julia vs. Lilian vs. round-robin), where it lives on the
site, whether it writes to the firm's Google Calendar, and language(s) (ES / EN / RU).

**Capability check:** the back-end piece is feasible — the firm's **Google Calendar
connector** is among our integrations (read / create / update events, suggest times),
so booked slots can sync to the real calendar. The website piece is a
**build / decision**: either embed an off-the-shelf scheduler (e.g. Calendly / Cal.com /
Google Appointment Schedule / Acuity) or build a branded booking page on the Design
System. Which path — and how to embed it — depends on **what platform the site runs
on** (to confirm when we start). *(Connector availability can vary session to session;
we'll confirm live calendar access at build time.)*

**Priority:** **High** (Lilian: one of the most important) · **Status:** Not started —
captured; waiting on Lilian's ideas to kick off.

---

## IDEA-11 — Lead management & conversion stats in Odoo (CRM)

**What Lilian wants:** understand how **lead management works in Odoo**, and set it up
so Odoo becomes the firm's **single place to manage every lead and measure the
funnel**. Two parts: **(1) Intake** — website visitors create inquiries / consultation
requests that land in Odoo as leads, and *all* leads from every source (referrals,
email, walk-ins) funnel into the same place; **(2) Reporting** — the statistics that
matter: **conversion rate** (of the people who contact us, how many become clients),
how many we win, how many reject / are lost, and similar pipeline metrics. Lilian isn't
yet sure how to administer this inside Odoo and wants help figuring out the model.

**Why it matters:** today there's no single, measured view of the funnel. Centralizing
leads gives the firm a real conversion number, shows where prospects drop off, and turns
"are we growing?" into data. It's the measurement layer under all the firm's growth
work.

**Where it fits:** firm ops / CRM — likely its **own new project** when it starts.
**Tightly linked to [IDEA-10](#idea-10--website-scheduling-calendar-for-clients-and-prospects):**
the website consultation calendar is the intake that *creates* the leads this system
measures (book a consultation → a lead in Odoo). It also connects to the marketing
front-offer funnel ([`projects/marketing/referral-offer-strategy/`](./projects/marketing/referral-offer-strategy/))
and downstream to [IDEA-09](#idea-09--build-our-own-goproposal-alternative) (a won lead
→ a proposal). The through-line: **website intake (IDEA-10) → lead in Odoo (IDEA-11) →
proposal (IDEA-09)**, with conversion measured across the whole path.

**What we need to start:** a short discovery — (a) confirm the firm is standardizing on
**Odoo CRM** and which Odoo edition/modules are active; (b) map the current lead sources
and the stages a prospect moves through (e.g. New → Contacted → Consultation booked →
Proposal sent → Won / Lost); (c) decide which metrics matter (conversion %, win/loss
reasons, time-to-close, source attribution). Then I explain how Odoo's
Leads / Opportunities + pipeline stages + reporting model those, and we design the
website→Odoo intake.

**Capability check (honest):** **there is no Odoo connector in the firm's integrations
today** — the connected systems are QuickBooks, Double, Gmail, Google Calendar, Drive,
Canva, Gamma, Shopify, NotebookLM and GitHub. So Claude can't read or write your Odoo
directly right now. What I *can* do now: help you understand Odoo's CRM model, design
the pipeline / stages, and plan the website→lead flow and the reports. Getting the
website to actually create Odoo leads is a real integration (Odoo supports web-form /
"Contact Us" → CRM lead and an API); wiring Claude into Odoo would need an Odoo MCP
connector or API access added later. We'll scope that connector question when we pick
this up.

**Priority:** **High** (same funnel as IDEA-10) · **Status:** Not started — captured;
next step is the short discovery above, whenever we pick it up.

---

## IDEA-12 — Central SOP index: a clickable hub for every SOP

**What Lilian wants:** two linked things. **(1)** Keep building **SOPs for every
day-to-day task** so every procedure the firm runs is written down and registered —
the ongoing mission of the sops project. **(2)** — the new piece — a **single central,
clickable index / map** where the whole team can see the full list of the company's
SOPs and click straight through to open any one. A centralized hub, not procedures
scattered across folders that people have to hunt for.

**Why it matters:** SOPs are only useful if people can find them fast. A central
clickable map turns the growing SOP library into a real reference — someone covering a
task during PTO opens the hub, finds the SOP, clicks, done — and it makes gaps visible
(what still isn't documented). It's continuity and delegability made navigable.

**Where it fits:** the existing [`projects/sops/`](./projects/sops/) project — this is
its **navigation layer**. A **seed already exists**: `projects/sops/README.md` has an
"Index" table that's clickable in GitHub. This idea grows that into the real central map
as the library expands. Formats to decide when we start:
1. **Curated Markdown index** in the sops README, grouped by area (onboarding /
   bookkeeping / tax / client-guides …) — simplest, already clickable in GitHub, zero
   build.
2. **A branded HTML "SOP directory" page** on the Design System — a visual, grouped,
   optionally searchable hub you open in a browser (built via the
   [`impeccable`](./.claude/skills/impeccable/) skill + [`brand/`](./brand/)) — the
   concrete first internal-docs instance of
   [IDEA-07](#idea-07--a-system-so-every-document-follows-the-design-system).

Related: [IDEA-01](#idea-01--client-by-client-accounting--bookkeeping-sops) (the
client-by-client SOP content that populates the library) and
[IDEA-07](#idea-07--a-system-so-every-document-follows-the-design-system) (the
firm-wide design-system-document system — a branded SOP hub is one instance).

**What we need to start:** decide the hub format (Markdown index vs. branded HTML page),
the grouping/taxonomy (by area? client-specific vs. firm-process?), and whether it needs
search. Then, as each new day-to-day SOP is written, it lands in the index. No new
content is required to begin — we can shape the hub around the SOPs already in
`projects/sops/`.

**Capability check:** fully buildable now. The Markdown index already works; a branded
HTML hub is exactly the kind of Design-System artifact we already produce (the
reasonable-comp report, the branded client guides), driven by the `impeccable` skill +
`brand/`. No external dependency.

**Priority:** Medium · **Status:** Not started — index seed exists in the sops README;
waiting to decide the hub format + taxonomy.

---

## IDEA-13 — Per-client memory: Ping Assistant Client Intelligence, connected to Claude

**What Lilian wants:** a durable, *queryable* per-client memory she can ask in plain
language — "what happened with client X, what did we do?" — and get an answer in any
future session, independent of the chat where the work happened. (Chat sessions don't
carry over: a new session only knows what's written in durable systems.) Her preferred
engine is **Ping Assistant's "Client Intelligence"**: an AI chat *inside Ping* that
answers any question about a client by searching the client's accumulated memory, which
Ping aggregates from many sources (meetings, emails, connected systems). The goal is to
**connect that Client Intelligence directly to Claude** — Lilian asks Claude, Claude
queries Ping's memory live. One place to ask, many sources behind it.

**Why static Double notes aren't the primary answer (Lilian's call):** we first tried
Double client notes as the memory. Lilian's objection: notes become **fixed text** she'd
have to dig through file by file — not the fluid, ask-anything experience she wants. So
Double is demoted to a **fallback bridge**, not the primary plan.

**Why it matters:** this bit us in practice — a rich working session existed only in chat,
and a parallel session knew nothing about the parts that weren't written down. Client work
must be reconstructable from the firm's systems, on demand, without hunting.

**Ping Assistant — identified (Jul 2026):** the product is real —
[pingassistant.com](https://www.pingassistant.com/), *"the AI assistant for accounting and
advisory firms,"* building Client Context from meetings, emails and systems (meeting
summaries, action items → tasks, meeting prep, auto follow-ups). Notably it **already
integrates with Double** (plus Karbon, Zoom, Google Meet, Teams, Dialpad) — see its
[integrations](https://www.pingassistant.com/integrations) and
[Double integration](https://www.pingassistant.com/integrations/double) pages. (The earlier
"no such product found" note was a search miss, now corrected.)

**The two paths (in priority order):**

1. **Plan A — direct Claude ↔ Ping (preferred).** Claude queries Ping's Client Intelligence
   in real time, so Lilian asks Claude and gets Ping's cross-source answer. **Depends on Ping
   exposing an external interface — a public API, webhooks, or ideally an MCP connector.** A
   2026-07 search found **no public API / MCP** for Ping Assistant (results for "Ping API" are
   *Ping Identity*, an unrelated company), and the site blocks automated reads, so it can't be
   confirmed from outside. **Lilian has emailed Ping's support/developers** to ask whether such
   an integration exists — this is the blocker.
2. **Plan B — Double as a bridge (fallback, only if A is impossible).** Configure Ping to write
   everything into **Double client notes**; Claude then reads those notes and appends what we do
   each session (a status note after each significant step — what was filed, paid, pending, and
   the identifiers — plus a `Recorded during <person>'s session` provenance line). Workable
   because Claude already reads/writes Double, but it's the static-text experience Lilian would
   rather avoid — accepted only if Ping has no direct-access path.

**Where it fits:** firm ops / tooling. Primary engine = Ping Assistant (external product);
Double is the fallback substrate. Plan A would be a new integration to scope (a Ping API/MCP
bridge); Plan B is a Ping-config + Claude-reads-Double workflow.

**What we need to start:** the **answer from Ping's developers/support** on whether an external
integration exists (API / webhooks / MCP) and how data can leave Ping. A "yes" → scope the
direct Claude↔Ping connection (Plan A). A "no" → design the Ping→Double→Claude bridge (Plan B):
how Ping writes complete client notes into Double, and how Claude appends ongoing work.

**Capability check:** Plan A is **blocked on the vendor answer** — no public Ping API/MCP found
today, unconfirmed either way. Plan B is **feasible now** — Claude already reads and writes
Double; it only needs Ping configured to deposit its memory there. The per-client memory content
itself (including this week's BTR work for two clients) lives in the firm's systems — Double /
Drive — never in this repo.

**Priority:** Medium · **Status:** **Blocked / waiting on vendor** — Ping Assistant identified and
confirmed to integrate with Double; awaiting Ping developer/support reply on a direct API/MCP so we
can choose Plan A (direct) vs. Plan B (Double bridge).

---

## IDEA-14 — `sop-authoring` skill: how Lilian wants SOPs structured

**What Lilian wants:** capture as a **reusable skill** the way she wants every SOP
written and presented, so future SOPs come out right the first time without
re-explaining. The preferences were established hands-on while restructuring the
BTR SOP (Jul 2026):

- **A flowchart / "process at a glance" first** — the general map before the long
  detail, so you never dive in blind.
- **Book-index hierarchy** — numbered sections; sub-parts (3A/3B, Step A/B/C)
  visually *above* their children (screens, fields); sizes/colors that make the
  levels obvious.
- **Numbered lists over prose** — when items are a sequence or a set (e.g. "two
  fees" numbered 1/2 with the takeaway pulled out separately).
- **Bullet checklists over run-on sentences** — requirements and documents as
  scannable lists.
- **An "uploads / have-ready" checklist** per application, before the screens.
- **An email map** — every email the process sends, what each means, where to
  check status.
- **Plain-language explanations of jargon** (e.g. what "issuance" means).
- **Every SOP ships with a firm Design System (Atlas) render** — hierarchy via
  the brand's type/color system. Now a **standard deliverable**, not optional:
  a committed, deterministic render engine
  ([`.claude/skills/sop-authoring/render/`](./.claude/skills/sop-authoring/render/))
  produces the same on-brand, self-contained, print/PDF/Drive-ready HTML for any
  session/author (built Jul 2026, with the `impeccable` skill; PDF on request only).

**Why it matters:** SOPs are the firm's continuity layer; if each one needs a
personal explanation of how to read it, the writing was wasted. Encoding the
house structure makes every future SOP consistent and immediately usable.

**Where it fits:** a new skill in [`.claude/skills/`](./.claude/skills/) (e.g.
`sop-authoring`), referenced from
[`projects/sops/README.md`](./projects/sops/README.md) as the way SOPs get
written. The **BTR SOP**
([`hollywood-broward-business-tax-receipt.md`](./projects/sops/hollywood-broward-business-tax-receipt.md))
is the reference pattern.

**What we need to start:** ~~Lilian's final sign-off on the BTR SOP~~ — Lilian
asked to **build the skill now** with what the Jul 2026 round established, and
refine it after her final read-through. **v1 is built:**
[`.claude/skills/sop-authoring/`](./.claude/skills/sop-authoring/), linked from
[`projects/sops/README.md`](./projects/sops/README.md) and the CLAUDE.md maps.

**Capability check:** built — a documentation skill (structure rules + the
reference example) **plus a committed render engine** (`render/atlas.css`,
`shell.html`, `build.mjs`, embedded brand fonts) that makes the Atlas render a
standard, reproducible deliverable. No external dependency.

**Priority:** Medium · **Status:** **Built (v1, Jul 2026)** — update the skill
after Lilian's final BTR SOP review (and after each future review round that
establishes a new preference; the skill is the memory of "how we like SOPs").

---

## Adding a new idea

When a new idea comes up: add a row to **Quick view** with the next `IDEA-##`, and
add a matching detailed section using the same shape (What Julia wants · Why it
matters · Where it fits · What we need to start · Capability check · Priority ·
Status). Keep it to ideas and plans — no client data.
