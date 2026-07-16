#!/usr/bin/env python3
"""
build_arch.py — turn the repo's self-contained lead-magnet HTML files into
Odoo Website QWeb view archs (one per page), faithfully preserving the design.

What it does per source file:
  * strips <!DOCTYPE> (re-added as escaped text in the <t> wrapper), HTML
    comments and the brand favicon <link> (path won't exist in Odoo);
  * repoints the shared CSS/JS <link>/<script> at the public Odoo attachments
    (/web/content/<id>/...), and the two founder photos at their attachments;
  * rewrites internal .html links to the /free-tools/* page URLs;
  * wires the placeholders: WhatsApp, the "Book a call" CTAs (nav + sticky +
    form button) -> the Discovery Call appointment, and the lead <form> ->
    Odoo's /website/form/crm.lead endpoint (+ a QWeb-rendered csrf_token, field
    remap to crm.lead, and hidden tool-source fields);
  * makes the result XML-valid for a QWeb arch (void tags self-close, stray &
    escaped, &rarr; -> &#8594;, per-page <script> body wrapped in CDATA so the
    JS < / && survive) WITHOUT disturbing the copy, tax formulas or disclaimers;
  * wraps it as a full standalone document that does NOT call website.layout, so
    the Odoo theme header/footer are hidden (each page brings its own).

It touches NO copy, NO numbers, NO disclaimers — only chrome/plumbing.

Reusable: bump the *_ID constants / URLs and re-run. Emits arch/<key>.xml and
pages.json (the create_records manifest).
"""
import re, json, os
from lxml import html as LH, etree

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)  # projects/marketing/lead-magnets

# ---- Odoo wiring values (all verified live this session) ----
CSS_ID = 3546
JS_ID = 3547
IMG = {"julia-ivory.png": 3544, "julia-navy.png": 3545}
BOOK = "https://jkaccountinggroup.odoo.com/appointment/1"   # Discovery Call (new/prospective)
WA = "https://wa.me/17863181505"
FORM_ACTION = "/website/form/crm.lead"
KEY_PREFIX = "jk_lead_magnets."

# (src, slug, url, key-segment, human title)
PAGES = [
    ("index.html",                              "free-tools",                "/free-tools",                            "free_tools",                 "Free Tools index"),
    ("calculators/llc-or-s-corp.html",          "llc-or-s-corp",             "/free-tools/llc-or-s-corp",              "llc_or_s_corp",              "LLC or S-Corp"),
    ("calculators/s-corp-salary.html",          "s-corp-salary",             "/free-tools/s-corp-salary",              "s_corp_salary",              "S-Corp salary"),
    ("calculators/surprise-tax-bill.html",      "surprise-tax-bill",         "/free-tools/surprise-tax-bill",          "surprise_tax_bill",          "Surprise tax bill"),
    ("calculators/tax-residency.html",          "tax-residency",             "/free-tools/tax-residency",              "tax_residency",              "Tax residency"),
    ("calculators/foreign-owned-company-fine.html", "foreign-owned-company-fine", "/free-tools/foreign-owned-company-fine", "foreign_owned_company_fine", "Foreign-owned company fine"),
    ("calculators/business-license.html",       "business-license",          "/free-tools/business-license",           "business_license",           "Business license"),
    ("assessments/bookkeeping-ready.html",      "bookkeeping-ready",         "/free-tools/bookkeeping-ready",          "bookkeeping_ready",          "Bookkeeping ready"),
    ("assessments/employee-or-contractor.html", "employee-or-contractor",    "/free-tools/employee-or-contractor",     "employee_or_contractor",     "Employee or contractor"),
    ("assessments/report-money-back-home.html", "report-money-back-home",    "/free-tools/report-money-back-home",      "report_money_back_home",     "Report money back home"),
]

# internal .html link -> published page URL
LINKMAP = {
    "index.html": "/free-tools",
    "../index.html": "/free-tools",
    "calculators/llc-or-s-corp.html": "/free-tools/llc-or-s-corp",
    "calculators/s-corp-salary.html": "/free-tools/s-corp-salary",
    "calculators/surprise-tax-bill.html": "/free-tools/surprise-tax-bill",
    "calculators/tax-residency.html": "/free-tools/tax-residency",
    "calculators/foreign-owned-company-fine.html": "/free-tools/foreign-owned-company-fine",
    "calculators/business-license.html": "/free-tools/business-license",
    "assessments/bookkeeping-ready.html": "/free-tools/bookkeeping-ready",
    "assessments/employee-or-contractor.html": "/free-tools/employee-or-contractor",
    "assessments/report-money-back-home.html": "/free-tools/report-money-back-home",
}


def xesc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;")
             .replace(">", "&gt;").replace('"', "&quot;"))


def transform(src_rel, slug, url, keyseg, title):
    key = KEY_PREFIX + keyseg
    with open(os.path.join(ROOT, src_rel), encoding="utf-8") as f:
        h = f.read()
    warn = []

    # 1. strip DOCTYPE (re-added escaped in the wrapper) + HTML comments
    h = re.sub(r"^\s*<!DOCTYPE[^>]*>\s*", "", h, flags=re.I)
    h = re.sub(r"<!--.*?-->", "", h, flags=re.S)

    # 2. drop brand favicon link (path won't exist in Odoo)
    h, n = re.subn(r'\s*<link[^>]*rel="icon"[^>]*>', "", h)
    if n != 1:
        warn.append(f"favicon links removed: {n}")

    # 3. repoint shared CSS + JS at the Odoo attachments (absolute /web/content)
    # only the LOCAL stylesheet (by its lead-magnets.css href) — NOT the Google Fonts link
    h, n = re.subn(r'<link[^>]*href="(?:\.\./)*assets/lead-magnets\.css"[^>]*>',
                   f'<link rel="stylesheet" href="/web/content/{CSS_ID}/lead-magnets.css">', h)
    if n != 1:
        warn.append(f"stylesheet links repointed: {n}")
    h, n = re.subn(r'<script[^>]*src="[^"]*lead-magnets\.js"[^>]*></script>',
                   f'<script src="/web/content/{JS_ID}/lead-magnets.js"></script>', h)
    if n != 1:
        warn.append(f"shared js scripts repointed: {n}")

    # 4. founder photos -> attachments
    for name, aid in IMG.items():
        h = re.sub(r'src="(?:\.\./)*assets/img/' + re.escape(name) + '"',
                   f'src="/web/content/{aid}/{name}"', h)

    # 5. internal .html links -> page URLs (longest first)
    for frm in sorted(LINKMAP, key=len, reverse=True):
        h = h.replace(f'href="{frm}"', f'href="{LINKMAP[frm]}"')

    # 6. wiring: WhatsApp + booking placeholder
    h = h.replace('href="#REPLACE-WITH-WHATSAPP"', f'href="{WA}"')
    h = h.replace('href="#REPLACE-WITH-BOOKING-URL"', f'href="{BOOK}"')
    # nav CTA + sticky "Book a free call" -> booking (leave in-page #book CTAs alone)
    h, n1 = re.subn(r'class="nav-cta" href="#book"', f'class="nav-cta" href="{BOOK}"', h)
    h, n2 = re.subn(r'<a class="btn cta" href="#book">Book a free call</a>',
                    f'<a class="btn cta" href="{BOOK}">Book a free call</a>', h)
    if n1 != 1 or n2 != 1:
        warn.append(f"nav-cta={n1} sticky-book={n2} (expected 1/1)")

    # 7. lead form -> crm.lead
    h, n = re.subn(r'action="#REPLACE-WITH-ENDPOINT" method="post"',
                   f'action="{FORM_ACTION}" method="post"', h)
    if n != 1:
        warn.append(f"form action wired: {n}")
    # remap the two required visible fields to crm.lead field names
    h = h.replace('id="name" name="name"', 'id="name" name="contact_name"')
    h = h.replace('id="email" name="email"', 'id="email" name="email_from"')
    # inject hidden fields just inside the form (subject + tool source + csrf)
    subject = f"New free-tool lead — {title}"
    hidden = (
        f'<input type="hidden" name="name" value="{xesc(subject)}"/>'
        f'<input type="hidden" name="tool_source" value="{xesc(slug)}"/>'
        f'<input type="hidden" name="tool_page" value="{xesc(title)}"/>'
        f'<input type="hidden" name="csrf_token" t-att-value="request.csrf_token()"/>'
    )
    h, n = re.subn(r'(<form class="form-card"[^>]*>)', lambda m: m.group(1) + hidden, h)
    if n != 1:
        warn.append(f"lead form hidden-fields injected: {n}")

    # 8. stash per-page inline <script> bodies (bare <script>...</script>, keeps the
    #    linked <script src=...> untouched) so lxml can't mangle JS < / & / &&
    scripts = []

    def _stash(m):
        scripts.append(m.group(1))
        return f"<script>@@PJS{len(scripts)-1}@@</script>"

    h = re.sub(r"<script>(.*?)</script>", _stash, h, flags=re.S)

    # 9. parse (lenient HTML) then re-serialize as XML: self-closes void tags,
    #    escapes stray & (incl. Google Fonts &family=), resolves &rarr; -> char.
    doc = LH.fromstring(h)
    xml = etree.tostring(doc, method="xml", encoding="unicode")

    # restore SVG camelCase attr the HTML parser lowercased
    xml = xml.replace("viewbox=", "viewBox=")
    # give empty <script src=...> an explicit close tag (self-closed <script/>
    # breaks browsers if ever served without QWeb's HTML re-serialization)
    xml = re.sub(r"<script([^>]*)/>", r"<script\1></script>", xml)

    # 10. reinsert real per-page JS wrapped in CDATA (keeps arch XML valid; QWeb
    #     re-serializes to HTML rawtext on render)
    for i, body in enumerate(scripts):
        cdata = "//<![CDATA[\n" + body.strip() + "\n//]]>"
        xml = xml.replace(f"@@PJS{i}@@", cdata)

    arch = f'<t t-name="{key}">&lt;!DOCTYPE html&gt;\n{xml}\n</t>'

    # validate: must parse as XML for Odoo to accept the arch
    etree.fromstring(arch.encode("utf-8"))

    # sanity: placeholders gone, wiring present
    for bad in ("REPLACE-WITH", "assets/lead-magnets", "assets/img/", "@@PJS"):
        if bad in arch:
            warn.append(f"leftover token: {bad}")
    return key, arch, warn


def main():
    outdir = os.path.join(HERE, "arch")
    os.makedirs(outdir, exist_ok=True)
    manifest = []
    for src_rel, slug, url, keyseg, title in PAGES:
        key, arch, warn = transform(src_rel, slug, url, keyseg, title)
        with open(os.path.join(outdir, keyseg + ".xml"), "w", encoding="utf-8") as f:
            f.write(arch)
        manifest.append({"src": src_rel, "slug": slug, "url": url, "key": key,
                         "title": title, "bytes": len(arch)})
        flag = ("  !! " + "; ".join(warn)) if warn else "  ok"
        print(f"{key:42s} {url:40s} {len(arch):6d}B{flag}")
    with open(os.path.join(HERE, "pages.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
    print(f"\n{len(manifest)} pages -> {outdir} + pages.json")


if __name__ == "__main__":
    main()
