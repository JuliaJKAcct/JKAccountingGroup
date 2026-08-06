# Pending fixes — the booking front door

Everything still wrong on the public site around the **free 10-minute discovery call**
and the **paid 1-hour $150 consultation**, in the order it should be fixed.

> **Verified 2026-08-06** by crawling the live site over plain HTTP — anonymous, no
> login, no cookies, **zero Odoo MCP calls spent**. Every "current state" quote below is
> the text that was actually served that day. Re-verify before assuming an item is still
> open; a page may have been edited in Odoo since.

**Read [`INSTALL-ODOO.md`](./INSTALL-ODOO.md) first** for what is already live (the three
appointment types, their URLs and availability) and for the full diagnosis of the 500.

---

## Spend zero MCP calls where you can

The 50-calls/day ceiling is the connector's, not Odoo's — **the Odoo web interface has no
such limit**. Every text and SEO fix on this page can be done by hand in the website
editor for **0 calls**, and the view deletion has a UI route too (developer mode →
Settings → Technical → Views). Use the MCP when it is genuinely faster or when the change
has many parts; do not burn the day's budget on edits a browser tab does for free.

(Why the ceiling exists, and the open question of moving to Odoo's own API, is in the
[`odoo-mcp` skill](../../../.claude/skills/odoo-mcp/) §1.)

---

## 1 · Blocker — nothing can be booked at all

### 1.1 Every booking page returns 500

| | |
|---|---|
| **Where** | `/appointment/1`, `/appointment/2`, `/appointment/3`, `/book/Discovery-Call` |
| **State** | 500 Internal Server Error. `/appointment` (the index) renders fine |
| **Cause** | `ir.ui.view` **2010** — a frozen website copy of `appointment.appointment_info` referencing fields Odoo has since renamed or removed |
| **Fix** | Delete view 2010 (deactivating may not be enough — see the note in INSTALL-ODOO) |
| **Cost** | 1–2 MCP calls, or free in the UI |

Full diagnosis: [INSTALL-ODOO.md → Known breakage](./INSTALL-ODOO.md#-known-breakage-every-booking-page-returns-500-found-aug-2026).

**Until this is fixed every other item on this page is cosmetic** — the buttons point at
calendars that cannot open.

---

## 2 · The old free offer is still being sold publicly

### 2.1 The Ukrainian landing still sells a free 30-minute consultation

| | |
|---|---|
| **Where** | `/ua/konsultatsiia` — **and `/ua/`, the Ukrainian home, is the same page** |
| **Reach** | **Public.** Anonymous request returns 200 · listed twice in `sitemap.xml` · `robots.txt` blocks nothing · has `canonical` + `og:url`, no `noindex` · **linked from the English page** — the `УКР` language switch on `/consultation` points straight at it |
| **Cost** | 0 calls in the website editor (page text + the SEO title) |

It is the **untouched twin of the pre-August English page** — useful as a reference for
what the old wording said, and exactly why it must not stay public.

What it still says (verbatim), each needing the same treatment the English page got:

| Element | Ukrainian | English meaning |
|---|---|---|
| Page title / SEO | `Бухгалтерія і податки в США вашою мовою — безкоштовна консультація` | "…— **free consultation**" |
| Every CTA | `Записатися на безкоштовну консультацію` | "Book a **free** consultation" |
| Offer line | `30 хвилин · безкоштовно · вашою мовою` | "**30 minutes · free** · in your language" |
| Step 1 | `Запишіться на безкоштовну консультацію — 30 хвилин, онлайн` | "Book the **free** consultation — 30 min, online" |
| FAQ question | `Консультація справді безкоштовна?` | "**Is the consultation really free?**" |
| FAQ answer | `Так: 30 хвилин із бухгалтером (не з менеджером з продажу), онлайн, без зобов'язань` | "Yes: 30 min with an accountant, online, no obligation" |
| Services line | `А конкретика для вашого бізнесу — це і є безкоштовна консультація` | "…the specifics are what the **free** consultation is for" |
| Closing block | `Безкоштовна 30-хвилинна розмова…` | "A **free 30-minute** conversation…" |
| Footer CTA | `Безкоштовна консультація →` | "**Free** consultation →" |

The English equivalents now read **1 hour · $150**, and its FAQ asks *"How much does the
consultation cost?"* — mirror that.

### 2.2 The Russian landing is dead, and the language switch points at it

| | |
|---|---|
| **Where** | `/ru/konsultatsiya` → **404** |
| **Impact** | The `РУС` switch on `/consultation` links there — a visitor who picks Russian gets a broken page |
| **Also** | `/ru-ru/consultation` and `/ru/consultation` **do** load, but serve the **English** text ($150) — a Russian speaker gets English, not Russian |

Different problem from Ukrainian: Russian is not selling a stale offer, it is **missing**.
Decide whether to republish a Russian landing or repoint `РУС` at a URL that works.

### 2.3 `/pricing` still advertises a free consultation to Google

| | |
|---|---|
| **Where** | `/pricing` → meta description (invisible on the page itself) |
| **Current** | *"Clear, tailored pricing … **Book a free consultation for a quote.**"* |
| **Impact** | This is the text **Google shows in search results** and the preview when the link is shared on WhatsApp |
| **Fix** | Website editor → the page's *Promote* / SEO panel. Also check the other pages' descriptions while there |
| **Cost** | 0 calls in the UI |

The visible page text was already changed to "Book a free discovery call" — only the SEO
field was missed, which is why it survives a visual review.

---

## 3 · The buttons themselves

### 3.1 Three different destinations for the same CTA

Live on 2026-08-06:

| Page | Button | Points at |
|---|---|---|
| Home | Odoo header "Book an Appointment" | `/appointment/1` |
| Home | "Book a free discovery call" (top nav) | `/appointment/1` |
| Home | "Book a Free Discovery Call" (hero) | **`/contactus`** ← still the old contact form |
| Home | "Schedule a Consultation" | `/book/Discovery-Call` ← label says *consultation*, link goes to the *discovery call* |
| Home | "Book a Free Discovery Call" (closing) | `/book/Discovery-Call` |
| Pricing | "Book a free discovery call" (body) | **`/contactus`** |
| Pricing | "Book a free discovery call" (nav) | `/appointment/1` |
| About | "Book a Free Discovery Call" | `/book/Discovery-Call` |

Settle on one canonical URL per offer and make every button use it. `/appointment/1` and
`/book/Discovery-Call` are the same calendar by two routes; `/contactus` is a different
thing entirely (a form that emails the firm — see the history in the README).

Also fix the mislabelled **"Schedule a Consultation"** on Home: it reads like the paid
offer and links to the free one.

### 3.2 Missing — a "Book a Consultation" button beside each discovery-call button

**Lilian's request (2026-08-06).** Today every entry point offers only the free discovery
call. She wants the paid **"Book a Consultation"** offered *next to* it — both visible,
one not replacing the other — linking to the consultation calendar (`/appointment/3`).

Related but not the same: [`booking-chooser.odoo.html`](./booking-chooser.odoo.html) is
the built page that presents both offers side by side and has never been placed.

---

## 4 · Decisions the firm owes (nobody is blocked on Odoo for these)

| Decision | Why it matters |
|---|---|
| **Does Odoo collect the $150 at booking, or does the firm invoice afterwards?** | The type carries the price and the page states it, but **nothing collects it** today. Charging at booking needs a payment provider on the website plus the appointment's payment step — neither verified. Invoicing after needs nothing technical, but someone has to actually bill it. **Lilian to settle with Julia** |
| **Julia's Zoom room URL** | The paid consultation still generates an Odoo Discuss link, not the firm's Zoom room |
| **Does Ping Assistant need to be on discovery calls?** | It cannot join a phone call, and the discovery call is now a phone call |

---

## 5 · Beyond the website — the same offer described four different ways

The CTA rule was never rolled out past the site. Durations currently in play:

| Duration | Where it is promised | Real? |
|---|---|---|
| **10 min, free** | The website CTAs, Odoo appointment type 1 | ✅ the actual offer |
| **20 min, free** | Every lead-magnet calculator — *"A 20-minute call. No cost, no pressure."* and *"book a free 20-minute call"* ([`lead-magnets/calculators/`](../lead-magnets/calculators/)) | ❌ |
| **30 min, free** | The Ukrainian landing · the referral checklists — *"Free 30-minute launch call"*, *"Free 30-minute financial review"* ([`referral-offer-strategy/templates/`](../referral-offer-strategy/templates/)) | ❌ |
| **60 min, $150** | `/consultation` | ✅ the paid offer |

Also: **every email signature's "Book a consultation →" link points at `/contactus`**, not
at a calendar ([`email-branding/signatures/`](../email-branding/signatures/)) — and the
label doesn't say which of the two offers it is. The lead magnets' "Book a Consultation"
URL is still a placeholder anchor.

Pick one duration per offer, then sweep every asset in one pass.

---

## 6 · Not re-checked this round

Carried from the earlier audit, still unverified — needs an Odoo session, not a crawl:

- **Three legacy unpublished views** still carrying the old free-consultation wording.
- Whether appointment type **2 (Q&A Call)** should stay published at all.
