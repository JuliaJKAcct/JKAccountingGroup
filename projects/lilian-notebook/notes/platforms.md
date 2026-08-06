# Platforms & vendors

Gusto, QuickBooks, Double, Odoo, Turo, Gmail — the traps that cost us time once and
shouldn't cost it twice.

## LN-10 — Gusto files nothing, not even $0 returns, until the first check date
- **Tags:** gusto · payroll · providers
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Tsminibears LLC — Gusto case #43016275
- **Detail:** [`tsminibears.md` §5](../../client-intelligence/clients/tsminibears.md)

**What happened.** The Florida RT account number was sitting in the Gusto account, so
everyone assumed Gusto was filing the zero returns. It wasn't. Gusto's own words: *"We do
not file any returns, including $0 returns, until you report wages and taxes in a state."*
Its authorization begins with the **quarter of the first check date**, and for a notice
covering an earlier period it says plainly that it **cannot help**. The Payroll Service
Terms say the same: at least one processed payroll before Gusto files, and the company
stays **solely responsible** to the taxing authorities.

**The rule.** Having the account number in the payroll platform means nothing. Until the
first payroll actually runs, **the firm files the $0 returns itself.** Still open: get
screenshots of those pages and the version of the terms in force in **2025**, not today's.

## LN-11 — How to check whether a vendor's answer is really its policy — four places, cheapest first
- **Tags:** vendors · evidence · method
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Established while working the Gusto argument, Aug 2026
- **Detail:** [`tsminibears.md` §5](../../client-intelligence/clients/tsminibears.md)

**What happened.** A support email said Gusto wouldn't file. Before building a dispute on
one specialist's wording, the firm went looking for whether it was actually policy. It was.

**The rule.** In order: **(1) the public help centre** — where the operational rule lives in
plain words; **(2) the service terms** — the contractual version and the liability limits;
**(3) the product itself** — the client's own account often shows the rule as a setting or a
status; **(4) the billing history** — the one that answers what the terms never do: *were we
paying for this while nothing was filed?* That last one is usually where the leverage is,
because a documented policy defeats a breach argument but not a service-quality one.

## LN-12 — A vendor can send two contradictory messages the same day. The specific one is operative
- **Tags:** gusto · support · waiting
- **Certainty:** Established
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** Gusto, 2026-06-09
- **Detail:** [`tsminibears.md` §6](../../client-intelligence/clients/tsminibears.md)

**What happened.** 14:02 — the Tax Resolution Team wrote that a specialist was assigned,
*"no immediate action needed on your part"*, confirmation to follow. 16:01 — the specialist
wrote the opposite: we will not file, call the state yourself. The promised confirmation
never came, and the second message landed two hours behind the first, so it was missed. The
case sat for seven weeks.

**The rule.** A reassurance with no action in it is not a resolution. When a queue promises
to come back to you, **diarise the follow-up yourself** — and when two messages disagree,
the later, more specific one is the real answer.

## LN-13 — Adding a QuickBooks user can force a plan upgrade. Write the downgrade down the same day
- **Tags:** quickbooks · billing · handover
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Ecoorganic USA — QuickBooks primary-admin handover
- **Detail:** [`ecoorganic-usa.md` §3/§5](../../client-intelligence/clients/ecoorganic-usa.md)

**What happened.** The client's plan allowed only one user, so creating a second user meant
paying for a bigger plan — an upgrade that existed only to carry out a handover.

**The rule.** When an upgrade exists only to carry out a one-time change, **the downgrade is
a task, written down the same day.** It's the step that gets forgotten the moment the visible
problem is solved, and the client keeps paying for the bigger plan until someone remembers.
Confirm it with the client first — it's their billing.

## LN-14 — Change the phone on an account before the person who owns it loses access
- **Tags:** quickbooks · access · verification
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Ecoorganic USA — the primary admin's lost phone
- **Detail:** [`ecoorganic-usa.md` §3/§6](../../client-intelligence/clients/ecoorganic-usa.md)

**What happened.** The QuickBooks primary admin no longer had the phone tied to the account,
so every verification code went nowhere. The in-product transfer dead-ends there. The route
out was QuickBooks support's identity verification — which needs the *original* person to
scan a QR code and upload a photo of their ID. Nothing moves until they do it, and they're
reachable only through their son.

**The rule.** The moment you learn a client's admin has changed phone, job, or country,
**move the account's verification contact before anything else needs doing.** Recovering
access afterwards depends on the least available person in the chain.

## LN-15 — Pull the reports before the account gets closed
- **Tags:** turo · 1099-k · documents · access
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Ecoorganic USA — Turo earnings report + 1099-K for the 2025 1120-S
- **Detail:** [`ecoorganic-usa.md` §3/§4](../../client-intelligence/clients/ecoorganic-usa.md)

**What happened.** The firm had asked for access to the client's Turo account earlier. By the
time the 2025 earnings report and 1099-K were needed, the account was **closed** — so nothing
could be downloaded. Turo can produce the documents but will release them **only to the
account holder**, and refused even to email them to the address already on the account without
the owner calling himself. Two calls later, Turo couldn't access the closed account either and
escalated it.

**The rule.** A platform a client is leaving is a **deadline**. Download the year's earnings
report and any tax form **while the account is still open** — afterwards it stops being a
download and becomes a support escalation that only the client can drive. And ask, while
you have them on the phone, **what name and TIN are on the 1099-K** — that's what decides
whether it matches to the LLC's EIN or the owner's SSN.

## LN-16 — Some vendor sites simply refuse to be read by a machine
- **Tags:** research · verification · method
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Gusto help centre + terms, and the Florida DOR pages, 2026-08-06
- **Detail:** [`tsminibears.md` §5](../../client-intelligence/clients/tsminibears.md)

**What happened.** `support.gusto.com` and `gusto.com/legal/terms/payroll` both returned
**HTTP 403** to automated retrieval — the same wall the Florida DOR pages threw. Claude could
only summarise search results. Lilian opened the pages herself and read the same wording.

**The rule.** When a page matters as **evidence**, a search-result summary is not the same
thing as the page. If retrieval is blocked, **a person opens it and screenshots it** — and the
record says which of the two happened. On this matter that upgrade turned "probably policy"
into "established".

## LN-17 — Editing an Odoo app page in the website editor silently forks the template
- **Tags:** odoo · website · maintenance
- **Certainty:** Established
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** The booking front door — every appointment page returning 500
- **Detail:** [`INSTALL-ODOO.md`](../../marketing/consultation-booking/INSTALL-ODOO.md)

**What happened.** A heading was edited on the Appointments page in Odoo's website editor.
That forked the template, it stopped receiving Odoo's updates, and eventually **every booking
page returned a 500** — nothing on the site could be booked.

**The rule.** On an Odoo *app* page (Appointments, Portal, Blog) prefer the **configuration
fields** — intro message, confirmation message — over editing the template. And when a forked
primary view has to go: **delete it, don't just deactivate it.** Odoo resolves the template by
key + website and that lookup isn't reliably filtered on `active`, so un-ticking Active can
leave the page still broken. Deactivating is a probe; if it still 500s, delete.

## LN-18 — The Odoo 50-calls-a-day ceiling is the connector's, not Odoo's — and the web editor has none
- **Tags:** odoo · limits · planning
- **Certainty:** Established
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** Working the booking pages until the budget hit 50/50
- **Detail:** [`odoo-mcp` skill](../../../.claude/skills/odoo-mcp/)

**What happened.** A session ran out of Odoo calls mid-task. The cap belongs to the **MCP
connector's free plan** — not Odoo's subscription, not the Claude plan — and it's shared
across the whole firm for 24 hours. Going direct through Odoo's own API would remove it, but
that needs a *Custom* Odoo plan, which is priced per user, for every user.

**The rule.** Plan and count the whole call sequence before the first call, and batch every
multi-record write. But the bigger saving: **most text and SEO fixes cost zero calls done by
hand in the Odoo web editor**, which has no limit at all. Don't spend the budget on work a
browser does free.

## LN-19 — Double note bodies fail above about 7,600 characters
- **Tags:** double · notes · limits
- **Certainty:** Established
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** The Tsminibears case note
- **Detail:** [`double-mcp` skill §7](../../../.claude/skills/double-mcp/)

**What happened.** A note body of ~8,000 characters comes back **403 Forbidden** through the
API; ~7,600 succeeds. A control test confirmed it's size, not content. Asked of Double
2026-08-06, waiting on the answer.

**The rule.** A long case history splits into `Part 1 / Part 2` — and it stays one *case*, so
both parts get updated in the same pass. Retire the split when Double answers.

## LN-20 — A signature image needs a genuinely public URL. "Raw GitHub never works" was wrong
- **Tags:** gmail · email · images
- **Certainty:** Established
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** The firm email signature rollout
- **Detail:** [`email-signature` skill](../../../.claude/skills/email-signature/)

**What happened.** The Medallion wouldn't display in Gmail, and the conclusion drawn was
"raw GitHub URLs never show." Wrong: the URL just wasn't public yet. Pointed at a genuinely
public raw URL, the image loads in the settings editor **and lands in the right cell** — which
uploading in Gmail doesn't, because Gmail drops the upload at the text caret.

**The rule.** Before concluding a technique doesn't work, **prove the input was valid** —
`curl -sSI <url>` must return `200` and an `image/*` content type. What genuinely never works:
`cid:` attachments, a private repo or branch behind the URL, and images in
programmatically-created drafts.
