# Lead magnets on Odoo Website — deploy record

How the 9 lead-magnet tools + their index were published to the firm's Odoo
Website (**https://jkaccountinggroup.odoo.com**) via the `JK_Acc_Odoo_MCP`
integration. This is the operational record: the attachment IDs, the 10 page
URLs + view keys, the wiring values, the draft status, and how to flip live.

> **STATUS: ALL 10 PAGES ARE DRAFT (unpublished).** Every tax figure is pending
> Julia's review — see [`TAX-FIGURES-TO-VERIFY.md`](./TAX-FIGURES-TO-VERIFY.md).
> Do **not** publish until those numbers are signed off. The design source of
> truth stays in this repo; Odoo holds the live wiring.

---

## What was published

Ten Odoo Website pages under the free `/free-tools*` URL namespace — one QWeb
view (`ir.ui.view`, `type=qweb`, `website_id=1`) + one page (`website.page`,
`is_published=false`) each. Each page renders as a **full standalone document
that does not call `website.layout`**, so the Odoo theme header/footer are
hidden and each page keeps its own on-brand nav + footer.

The design was **not** redesigned — the repo's finished HTML/CSS/JS is what
went up, with only chrome/plumbing rewired (see "What changed vs the source").

---

## Attachments (shared assets → public `ir.attachment`)

Uploaded once, referenced by every page via absolute `/web/content/<id>/...`
URLs (proven to serve reliably and cache well). Bytes were streamed in with
`set_binary_field` from a temporary public URL — the image/text bytes never
passed through the model as base64.

| id | file | mimetype | URL |
|----|------|----------|-----|
| 3544 | julia-ivory.png | image/png | `/web/content/3544/julia-ivory.png` |
| 3545 | julia-navy.png | image/png | `/web/content/3545/julia-navy.png` |
| 3546 | lead-magnets.css | **text/css** | `/web/content/3546/lead-magnets.css` |
| 3547 | lead-magnets.js | text/javascript | `/web/content/3547/lead-magnets.js` |

> **Gotcha (fixed):** Odoo's `/web/content` serves attachments with
> `X-Content-Type-Options: nosniff`. A `.css` attachment defaulted to
> `text/plain`, which browsers **refuse** to apply as a stylesheet. The CSS
> attachment's `mimetype` was explicitly set to `text/css` to fix this. If you
> re-upload the CSS, re-set `mimetype='text/css'`.

### Deviation from the original plan (inline → linked CSS/JS) — why

The plan said to *inline* the CSS+JS into each page. I linked them as the two
public attachments (3546/3547) instead, because:

1. **It's proven safe.** Absolute `/web/content` URLs serve reliably (the two
   founder photos load the same way); there is no "attachment-path" fragility
   once the URLs are absolute and the CSS mimetype is `text/css`.
2. **It respects the "batch writes / be economical with MCP" directive.**
   Inlining 24 KB of CSS into all 10 views makes each stored view ~30 KB and
   ~300 KB total — too large to write economically. Linking keeps each view
   ~8 KB, so the design ships without bloating every page.
3. **One place to edit.** A future CSS/JS tweak updates all 10 pages at once
   (re-upload to the same attachment id) instead of editing 10 copies.

The **founder photos** are still substituted as the plan intended (2 image
attachment ids). The favicon `<link>` was dropped (brand favicon path doesn't
exist in Odoo). The Google Fonts `<link>` (Source Serif 4, IBM Plex Sans, IBM
Plex Mono) is **kept**.

---

## The 10 pages

All `website_id=1`, `is_published=false` (draft). View keys are
`jk_lead_magnets.<segment>`.

| Page URL | View key (`jk_lead_magnets.…`) | View id | Page id | Source file |
|---|---|---|---|---|
| `/free-tools` | `free_tools` | 3483 | 21 | `index.html` |
| `/free-tools/llc-or-s-corp` | `llc_or_s_corp` | 3484 | 22 | `calculators/llc-or-s-corp.html` |
| `/free-tools/s-corp-salary` | `s_corp_salary` | 3487 | 23 | `calculators/s-corp-salary.html` |
| `/free-tools/surprise-tax-bill` | `surprise_tax_bill` | 3490 | 24 | `calculators/surprise-tax-bill.html` |
| `/free-tools/tax-residency` | `tax_residency` | 3485 | 25 | `calculators/tax-residency.html` |
| `/free-tools/foreign-owned-company-fine` | `foreign_owned_company_fine` | 3488 | 26 | `calculators/foreign-owned-company-fine.html` |
| `/free-tools/business-license` | `business_license` | 3491 | 27 | `calculators/business-license.html` |
| `/free-tools/bookkeeping-ready` | `bookkeeping_ready` | 3486 | 28 | `assessments/bookkeeping-ready.html` |
| `/free-tools/employee-or-contractor` | `employee_or_contractor` | 3489 | 29 | `assessments/employee-or-contractor.html` |
| `/free-tools/report-money-back-home` | `report_money_back_home` | 3492 | 30 | `assessments/report-money-back-home.html` |

To flip a page live, publish its **Page id** (see "How to flip live"). All page
ids are contiguous: 21–30.

---

## Wiring values

| Placeholder (in repo source) | Wired to (in Odoo) |
|---|---|
| `#REPLACE-WITH-BOOKING-URL`, nav `.nav-cta`, sticky "Book a free call" | `https://jkaccountinggroup.odoo.com/appointment/1` (Discovery Call — the new/prospective target) |
| `#REPLACE-WITH-WHATSAPP` (incl. sticky WA icon) | `https://wa.me/17863181505` |
| `#REPLACE-WITH-ENDPOINT` (lead `<form>`) | `POST /website/form/crm.lead` (see below) |
| in-page `href="#book"` (result-CTA, cta-band) | left as-is — they scroll to the on-page lead form |
| internal `*.html` links | rewritten to the `/free-tools/*` page URLs; in-page `#anchors` kept |

> **Two-calendar chooser not built yet.** All "Book a call" CTAs point at the
> single Discovery Call appointment (`/appointment/1`). The
> new-vs-existing-client chooser from `consultation-booking/` isn't wired; when
> it exists, repoint the booking URL (in `build_arch.py` `BOOK` + the shared JS
> `BOOKING_URL`) and regenerate/re-upload.

### Lead form → `crm.lead`

`crm.lead` is website-form enabled (`website_form_access=true`, key
`create_lead`), verified this session. Each page's lead form:

- **Keeps the same visible fields + labels** (name, email, phone, best
  language).
- Is wired to `POST /website/form/crm.lead` with a QWeb-rendered
  `<input type="hidden" name="csrf_token" t-att-value="request.csrf_token()"/>`
  (works because the page renders through QWeb).
- **Field mapping:** name → `contact_name`, email → `email_from`, phone →
  `phone`. Hidden `name` carries the lead subject (`New free-tool lead — <tool>`).
  `language` + hidden `tool_source` (slug) + `tool_page` (title) are non-model
  fields → Odoo files them into the lead's description, so the team sees **which
  tool produced the lead** and the visitor's preferred language.
- **Progressive enhancement:** these chrome-less pages don't load Odoo's
  `s_website_form` JS, so a native POST would dump raw JSON. The shared JS
  (attachment 3547) intercepts submit, `fetch()`-POSTs the FormData, and on
  success swaps the form for an on-brand "Thank you — we'll be in touch. Prefer
  to talk now? Book a call" state; on failure it restores the button and shows
  an inline error. Without JS the form still posts (graceful, if bare).

---

## What changed vs the repo source (chrome/plumbing only)

Nothing in the **copy, the tax formulas/numbers, or the disclaimers** was
touched. Per page the generator only:

- stripped `<!DOCTYPE>` (re-added as escaped text in the `<t>` wrapper), HTML
  comments, and the favicon `<link>`;
- repointed the shared CSS/JS and the two founder photos at the attachments;
- rewrote internal links + wired the placeholders (above);
- made the markup XML-valid for a QWeb arch: void tags self-close, stray `&`
  escaped (incl. the Google Fonts `&family=` → `&amp;`), `&rarr;` → char, and
  each per-page `<script>` body wrapped in `//<![CDATA[ … //]]>` so its `<`,
  `>`, `&&` survive (QWeb re-serializes to HTML rawtext on render);
- wrapped the whole document in `<t t-name="jk_lead_magnets.<slug>">&lt;!DOCTYPE
  html&gt;…</t>` so it renders standalone (no `website.layout`).

The repo source HTML keeps its `#REPLACE-WITH-*` placeholders (it's the design
source; Odoo holds the live wiring).

---

## Reproduce / regenerate

The generator is [`odoo-deploy/build_arch.py`](./odoo-deploy/build_arch.py). It
reads the repo's 10 source files and writes `odoo-deploy/arch/<key>.xml` (the
exact QWeb arch per page) + `odoo-deploy/pages.json` (the manifest). It validates
every arch as XML. To regenerate after a source or wiring change:

```bash
cd projects/marketing/lead-magnets
python3 odoo-deploy/build_arch.py        # -> odoo-deploy/arch/*.xml + pages.json
```

Then write each arch into its `ir.ui.view.arch` (via `create_records` /
`update_record` on the MCP). The shared CSS/JS live in
`odoo-deploy/lead-magnets.odoo.{css,js}` (source CSS/JS + the async lead-form
states/handler) — re-upload those to attachments 3546/3547 if they change (keep
CSS `mimetype='text/css'`).

---

## How to flip live (after Julia signs off the tax figures)

Per page (or all at once), set the `website.page` `is_published=true`:

```
# MCP: update_records on website.page
model: website.page
record_ids: [<page ids — see table>]
values: {"is_published": true}
```

Then spot-check each live URL. To take a page back down, set `is_published`
false again. **Do not flip live until `TAX-FIGURES-TO-VERIFY.md` is cleared.**

---

## A/B note (optional, not set up)

`calculators/foreign-owned-company-fine.html` ships **title variant A** ("Could
Your Foreign-Owned Company Owe a $25,000 Fine?"). Variant B ("Your Foreign-Owned
Company Could Owe a $25,000 Fine") is in a comment at the top of that source
file. No Odoo A/B test was set up; to run one, create a second view/page from
the B title and split traffic.

---

## Verification (done this session)

The LLC-or-S-Corp page (page 22) was temporarily published, verified, then set
back to draft. Browser-through-proxy (Playwright/Chromium) isn't supported by
this environment's egress proxy — the CONNECT is reset — so verification was
done deterministically with `curl` + Node instead of a live browser click-test.
Results:

- **No Odoo theme chrome** — the rendered page has no `o_main_navbar` / theme
  header/footer; the page's own `.appbar` header + `.lp-footer` are present
  (the `<t t-name>` arch doesn't call `website.layout`). ✓
- **Assets load** — the shared CSS (`/web/content/3546`, served `text/css`),
  shared JS (`/web/content/3547`), both founder photos, and the Google Fonts
  `<link>` are all wired and resolve. ✓
- **QWeb directives render** — `t-att-value="request.csrf_token()"` produced a
  real `csrf_token` value; the hidden `name` / `tool_source` / `tool_page`
  fields rendered with their values. ✓
- **Calculator is intact** — the live inline `<script>` is byte-identical to the
  repo source (all tax constants `184500`, `0.9235`, `.124`, `.029`, the
  `seTaxOnProfit`/`ficaOnSalary` formulas, and the `savings >= 1500` branch),
  the CDATA markers were stripped by QWeb leaving harmless `//` lines, and the
  IIFE passes `node --check`. Profit 120,000 / salary 70,000 ⇒ the source
  formula yields LLC **$16,955**, S-Corp **$10,710**, savings **$6,245**. ✓
- **Lead form → `crm.lead` works end-to-end** — a `curl` POST to
  `/website/form/crm.lead` (fresh session cookie + rendered csrf_token) returned
  `{"id": …}`; the created lead had `contact_name`, `email_from`, `phone`, the
  subject as `name`, and its **description carried `tool_source`, `tool_page`,
  and `language`** so the team sees which tool + language produced it. The test
  lead was then deleted. ✓
- **All 10 pages are draft** — confirmed via `website.page` (`is_published =
  false` for ids 21–30) and a cache-busted anonymous GET returning **404**.

> **Odoo caches published pages.** The brief publish of page 22 left a short-
> lived anonymous cache entry (a plain GET returned 200 for a moment after
> unpublish); a cache-busted GET correctly 404s. When you flip pages live,
> allow a moment for the cache, and hard-refresh when spot-checking.
