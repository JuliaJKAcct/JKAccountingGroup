# `redact-doc` — read a client's document without bringing their identifiers into the session

**What this replaces:** Lilian downloading a client's tax return, deleting the sensitive
information by hand, and re-uploading it so a session could work on it. That step is the
reason a pre-return review took an afternoon instead of ten minutes. **It is not skipped
here — it is automated.**

```bash
# From a Double presigned link (get_file), or a local PDF:
python3 tools/redact-doc/redact.py "<url-or-path>" /path/to/scratchpad/redacted.txt
```

## The one property that matters

**This tool never prints the document's text.** It writes the redacted text to a file and
prints a count of what it masked. So the identity block cannot reach the conversation by
accident — not through a stray `cat`, not through a large tool result, not through a
paraphrase. That is what makes reading a client's own document defensible at all, and it is
the difference between this and `get_organizer_responses`, where the whole payload enters the
transcript with no filter available.

Given a URL it **deletes the raw download before returning, on every path out** — success,
failure, or exception. The undeleted original is the only artefact that would outlive the
job, so nothing depends on someone remembering.

## What it masks, and what it deliberately does not

| Masked | Kept |
|---|---|
| SSN / ITIN — hyphenated, spaced, dotted, and wide-spaced when labelled | **Names** — Lilian: *"Los nombres no son datos sensibles"* |
| Bank routing and account numbers | **EINs** — Lilian: *"son públicos"* |
| Dates of birth (**only** where the page says "date of birth" — a bare date is a tax date) | Every figure, form number, date and percentage |
| Driver's licence / state ID, where labelled | **City, state and ZIP** |
| **The street line** — number, name, suffix, apartment | |

> 🔴 **A CONFIRMED GAP IN THE STREET-LINE PATTERN — found 2026-09-02, on a real filed 1120-S.** Reading a
> 2023 return, the redactor reported **`0 street lines`** and the Schedule K-1's mailing address came
> through **in full**. The 2024 return of the same client, read the same day, masked **2 street lines**
> correctly. The one that escaped has the shape `<number> <directional> <ordinal> <STREET-WORD> STE <n>`
> — a **suite** line. ⛔ **Nothing was written anywhere**, but the control did not work, and a
> suite-style address on a K-1 is exactly what it exists to catch. 🛠️ **Add a case for it, and add a
> test.** ⚠️ **Until then: a `0 street lines` count on a return that carries a K-1 is a reason to look,
> not a clean result** — the same lesson as *"0 masked can mean BLIND rather than clean"* above.

**Why the street line but not the city.** Lilian's identity block does not name a home address, so
this was not covered by her ruling either way; it is masked because losing it costs nothing and it
is the one field on a return that points at where a person actually sleeps. The **city and state
stay** — which state someone lived in is the entire question on a multi-state return. Measured on
a real 44-page return: 12 street lines masked, **0.02% of the text removed**, and not one figure,
EIN or form reference lost.

**Masks are tags, not partial values** — `[SSN-1]`, `[SSN-2]`, `[ACCT-1]`. The same number always
gets the same tag, so two values stay distinguishable, which is all the analysis ever needed, while
no digit of either is learned. *An earlier version emitted the last four digits; name-plus-last-four
is the standard identity-verification pair, and names are not masked here.*

**Text is Unicode-normalised before any pattern runs**, and that is load-bearing. A PDF font whose
`ToUnicode` map emits a typographic hyphen (U+2010/2011) or a zero-width space produces an SSN that
looks identical on the page and matches **no** ASCII pattern — including the guard's, since it
shared the character class. Verified against a crafted PDF: the tool reported "0 masked", exited 0,
and wrote both SSNs in full.

**Keeping the EIN is not a compromise, it is the point.** The EIN is how we tell which entity
a K-1 or a W-2 came from. A return full of unidentifiable entities answers nothing, which is
why the unhyphenated form — nine bare digits, indistinguishable from an account number — is
claimed explicitly before the account rule can eat it.

## ⚠️ "0 masked" can mean BLIND rather than clean — and that is now caught

**The failure this tool is most likely to meet is not a leak, it is a lie of omission.**

A PDF whose font carries no usable `ToUnicode` map makes pypdf fall back to emitting the
font's own **glyph names** — `/uni0031` where the page shows `1`. The page is perfectly
readable to a human and completely unreadable to every pattern in `redact.py`.

That is **worse than a scan**. A scan produces nothing and trips the NO TEXT LAYER gate
loudly. A glyph-name dump produces *enormous* volume, so it passes every check that measures
how much came out — and every check here used to measure exactly that. The result is a large
written file, a report of **"0 masked · 0 EIN kept"**, and nothing to distinguish it from a
document that genuinely had no identifiers.

> **Found 2026-08-14** on a real filed 1120-S read for a pre-return review: 18 pages,
> 500,712 characters, 61,131 glyph tokens, and a report of zero for every category. After the
> fix: 72,775 characters of real text and **four SSN/ITINs masked**. The first run had not
> protected anything — it had simply been unable to see.

⚠️ **And decoding is only half the job — the half it is easy to stop at.** `/uniXXXX` is one
convention among several. pypdf writes the **raw glyph name** for any name it cannot map, and
subset fonts routinely use `/g11`, `/cid49`, `/G34` or `/index0031` — none of which name a code
point, so **none can be decoded at all**. A document that is only *partly* decodable is then the
**worst** case in the whole tool: the successful decodes inflate the alphabet, the diversity gate
below is satisfied, and thousands of undecodable tokens ride into the written file under a
"0 masked" report. _(An independent review built exactly that document — 17 unreadable pages plus
one good one — and walked it straight through the first version of this fix. The fully-broken
document was caught; the half-broken one was not.)_

Three changes close it, and they are different jobs:

- **Recovery.** `/uniXXXX` is Adobe's glyph-naming convention and `XXXX` is the Unicode code
  point, so the text is decoded back before any pattern runs. Faithful, not a guess. When this
  path is used the tool **says so**, and warns that column alignment came through worse than
  usual — read a figure's position with suspicion and prefer one you can corroborate.
- **Undecodable glyph names are MASKED, not classified — and this is the part that took three
  attempts.** Read the failures before "improving" it, because both dead ends look sensible.

  **Attempt 1 enumerated the conventions**: `/uni`, `/g`, `/cid`, `/index`, `/glyph`. Defeated
  in one pass with `/C49`, `/char49`, `/gid49`, `/id49`, `/x49`, `/T49`, `/gAF`. **pypdf writes
  whatever the font calls the glyph**, so a list is only ever a list of the attacks someone
  already thought of.

  **Attempt 2 tested the structure** — adjacent tokens, glyph-shaped — reasoning that a font
  cannot vary *that*. It can, and it does not even have to try: `extraction_mode="layout"`
  **inserts spaces between glyphs positioned more than ~20-30pt apart**, which is exactly how a
  form lays out the boxes the taxpayer's data sits in. So a real return's filled-in fields arrive
  pre-separated and the adjacency test sees nothing. Nor can it be rescued by allowing
  whitespace: `/Stmt1 /Stmt2 /Stmt3` in a real return and `/C49 /C50 /C51` in a broken one are
  **structurally identical**. Slash-density and repeated-prefix counting were both measured and
  both overlap. At nine tokens — one SSN — the two populations are not separable.

  **So stop classifying the document.** A leftover `/token` carrying a digit is, by definition,
  text no pattern here can read — the exact condition this tool exists to refuse to pass on. It
  is masked as `[GLYPH]` like anything else unreadable, and the count is reported. A false
  positive now costs a mangled file path instead of a refused client return; no future naming
  scheme matters; and the tolerance question disappears, because **there is no budget to spend**.
  The digit requirement is what leaves ordinary prose intact — `and/or`, `N/A`, `Sch A/B/C/D/E/F`
  and `12/31/2024` contain no slash-token with a digit in it.

  ⚠️ **An absence near a `[GLYPH]` proves nothing.** That text was unreadable, so it was never
  checked for anything — including for the figure you were looking for. If they cluster where a
  number should be, ask for a properly generated PDF rather than concluding the number is absent.

  The one case still **refused** outright is mass: past ~100 tokens the document is wreckage, and
  a page of `[GLYPH]` would be safe and worthless. That threshold is loud and unambiguous, unlike
  every one it replaced.
- **A diversity gate — the backstop**, for encoding failures that leave no glyph names at all.
  Natural English, even the number-dense English of a return, draws on a wide alphabet; a
  character-level failure draws on a tiny one. Below the threshold the tool refuses. It applies
  only above ~2,000 characters and only to the **whole document**.

  ⚠️ **Calibration, twice corrected, and both errors are worth knowing.** The bar started at 40 —
  but a realistic ALL-CAPS tax package measures **39 distinct characters**, so it refused a
  perfectly good return by one character and told the operator to go and find another PDF. The
  broken document measured **27**. It now sits at **30**. And this gate was briefly run *per
  page*, where it flagged **12 of 18 pages of a clean return** — a depreciation schedule uses 14
  distinct characters, a K-1 allocation grid 11 — telling the reader to distrust exactly the
  schedules carrying the figures. A warning that fires on two thirds of every return is a warning
  nobody reads. **Per-page reporting is now volume only**; the mixed-extraction case it was meant
  to catch is caught by the structural detector, which refuses outright.

**If you see the UNREADABLE EXTRACTION message, do not re-run and trust a "0 masked" report.**
Ask for a properly generated PDF from the tax software.

## It fails closed, four ways

1. **A scan exits 2 and writes nothing.** No text layer means no OCR here, and the answer is
   to ask for a text PDF — never to send the image somewhere else to be read.
2. **A failed download writes nothing** and never echoes the URL back. A Double presigned link
   is a credential: anyone holding it downloads the file without logging in.
3. **The final guard is stricter than the redactor**, and it runs **while EINs are still parked
   behind placeholders**. That ordering is the fix for a bug where the EIN-preservation feature and
   the guard were mutually exclusive: a legitimate unhyphenated EIN is nine bare digits, so the
   guard aborted the tool on every K-1 carrying one — and its error message then invited the
   operator to weaken the last line of defence to get work done. It hunts the loose `NNN?NN?NNNN` shape
   with any spacing, which the redactor only masks when the page labels it. If anything of that
   shape survives, the tool **refuses to write the file** and reports the *shapes* it saw, never
   the values. A false alarm costs one look at the PDF; a miss is not recoverable, because by
   then it is in the transcript.
4. **An unreadable extraction exits 5 and writes nothing** — the glyph-name case above. Volume
   is not intelligibility, and a file the patterns could not read is not a file with nothing in
   it. This is the only gate here that protects against a *misleadingly reassuring* result
   rather than a leak.

## 🔧 It didn't read the PDF — the runbook

**Work down this table by the exit code. Do not improvise around it**, and in particular never
solve a reading problem by sending the document somewhere else to be read.

| Exit | Message | What it means | What to do |
|---|---|---|---|
| **3** | `pypdf is not installed` | A fresh session has no pypdf | `pip install pypdf`. **If `import pypdf` then fails with `No module named '_cffi_backend'`**, that is the system `cryptography` package missing its backend, not this tool: `pip install --upgrade cffi`. A complaint that `cryptography` cannot be uninstalled because Debian installed it is expected and harmless. 🔴 **In a locked-down environment `pip install` will not work at all** — see the block below |
| **3** | `download failed (curl exit 22)` | The environment's network policy refused the **file host**, not the tool | The proxy log names it: `connect_rejected · gateway answered 403 to CONNECT`. **Double serves its files from `keeper-attachable.s3-accelerate.amazonaws.com`** — that host has to be in the environment's allowed domains. ⛔ **Not a reason to fetch the PDF another way.** Confirm with `curl -sS "$HTTPS_PROXY/__agentproxy/status"`, which lists recent relay failures by host |
| **3** | `could not read as PDF` | Not a PDF, or a corrupt download | Check the file. A `.docx` or an image is out of scope here |
| **2** | `NO TEXT LAYER` | A scan | **Ask for a text PDF.** OCR is not set up here and this is not a gap to route around |
| **5** | `UNREADABLE EXTRACTION` | The document is **mostly** wreckage — past ~100 undecodable glyph tokens, or an alphabet too small to be text | `/uniXXXX` is decoded automatically and smaller amounts are masked as `[GLYPH]`, so reaching this means the whole document is unreadable. **Ask for a properly generated PDF from the tax software.** ⛔ Do **not** re-run and accept a `0 masked` report from such a file — zero means blind |
| **0** + `token(s) were MASKED as [GLYPH]` | Some text could not be read and was masked | A font with no Unicode map, usually in the *filled-in* fields while the form template reads fine | The file is safe to use, but **an absence near a `[GLYPH]` is not evidence.** That region was never checked — for identifiers or for anything else. If they sit where a figure should be, get a better PDF rather than reporting the figure missing |
| **4** | `REFUSING TO WRITE` | An identifier-shaped run survived redaction | Read the reported *shapes*. Either a pattern missed a real identifier or a column of figures collided with the shape. Inspect the PDF by hand, decide which, and **fix the patterns** — never weaken the guard to get the job done |
| **0** | + `glyph-name token(s) were decoded` | Recovered from a broken font | Fine to use, but **layout came through worse than usual.** Read column alignment with suspicion and prefer figures you can corroborate arithmetically (on a return: does line 8 equal line 6 minus line 7?) |
| **0** | + `barely extracted: [n, m]` | Those pages gave nothing up | **An absence is not evidence.** Name the pages instead of reporting "X is not on the return" |

### ✅ What a restricted environment has had to allow so far (2026-09-01/02)

_(The firm now runs tax-return sessions in a deliberately restricted environment. This list was
assembled by hitting each wall in turn — ⚠️ **and the download has not yet been run to completion, so
the list ends where the testing stopped, not where the walls do.** The next wall, if there is one, gets
added here.)_

| Add to the environment's allowed domains | Why |
|---|---|
| **`keeper-attachable.s3-accelerate.amazonaws.com`** | 🔴 **The one that blocks reading a return.** Double does **not** serve files from `doublehq.com` — `get_file` returns a presigned URL on this S3 host, and without it the redactor dies at the download with `curl exit 22` |
| `keeper-attachable.s3.us-east-2.amazonaws.com` | belt and braces — the regional endpoint the accelerate host can redirect to. Harmless if unused |
| `www.irs.gov` and `*.irs.gov` | reading a current-year form at source instead of from memory — a standing firm rule |

**No other host has blocked us yet.** And one thing that did *not* need an entry: **the MCP
connectors (Double, Gmail, Drive, QuickBooks) worked throughout this restricted session with no
allowlist entry at all** — consistent with `mcp-proxy.anthropic.com` sitting in the proxy's `noProxy`
list — which is why a session can read every record on a client and still fail to download one PDF.

⛔ **And one thing an allowlist CANNOT fix:** the package registries. See below.

### 🔒 A locked-down environment — installing pypdf with no package registry

_(Established 2026-09-01, in the `odoo-api`-style restricted environment the firm now uses for tax
returns.)_ **`pypi.org` and `files.pythonhosted.org` sit in the agent proxy's `noProxy` list**, so
requests to them bypass the proxy entirely and are refused further out — **an allowlist entry at the
proxy cannot reach them**, and it was re-tested both directly and with `--proxy $HTTPS_PROXY`: `403`
both ways, while an allowed host like `irs.gov` returns `200`. So `pip install pypdf` cannot succeed
there, and adding pypi to the environment's domain list does not change it.

**What works:** have the person upload the **pypdf source tarball** into the session, then

```bash
tar xzf <uploaded>.tar.gz -C <scratch>
PYTHONPATH=<scratch>/pypdf-<version> python3.12 tools/redact-doc/redact.py "<url>" "<out.txt>"
```

- ⛔ **Do not `pip install` the tarball** — the build backend still has to come from the network.
  pypdf is pure Python; `PYTHONPATH` is enough.
- 🔴 **Use `python3.12`, not `python3`.** The default `python3` is **3.11** while
  `/usr/lib/python3/dist-packages` is built for **3.12**, so `import cryptography` raises a **`pyo3`
  PanicException** — which is *not* an `ImportError`, so pypdf's own fallback chain does not catch it
  and the import dies. This is the `_cffi_backend` failure above wearing a different face.

⭐ **The durable fix is to vendor pypdf under `tools/redact-doc/vendor/`** so no future review depends
on a network policy at all.

**The single most useful habit:** before trusting any figure out of this tool, find an internal
arithmetic check in the document itself and confirm it. On a return, `1125-A` line 6 − line 7 =
line 8, and `1120-S` line 1c − line 2 = line 3. Two checks that pass are worth more than a
careful read of a mangled column.

## ⚠️ An absence in the output is not an absence in the return

A PDF's text layer does not always give everything up — rotated text and fonts pypdf cannot
interpret both come through empty. On the first real return, **4 of 44 pages barely extracted.**

The tool now **reports those page numbers**. When it does, an absence proves nothing: a form can
be sitting on a page that did not extract. Say *"the extraction was incomplete on pages N, M"* and
name them — never *"there is no Form 7203 on this return."* The second sentence is the failure this
whole project exists to prevent, arriving through a new door.

## ⚠️ Never print the extracted text into the conversation

Not even "just the headings", not even to check the tool worked. **Print computed values only** —
counts, booleans, page numbers, PRESENT/ABSENT. *(This is written down because it was got wrong on
the very first real run: a probe described as printing "form titles only" printed names and a
street address, because those pages had no titles on them. The tool did its job; the operator
around it did not.)*

## 🔴 A REAL MISS, 2026-09-06 — an SSN-shaped TIN survived on a Form 8995

**Reading an individual's filed 2024 Form 1040, the tool reported `22 SSN/ITIN masked` — and then a
23rd, in the identical `NNN-NN-NNNN` shape, came through unmasked** in the *"Taxpayer identification
number"* column of **Form 8995 line 1(b)**, the per-business QBI table.

🔑 **THE CAUSE IS ESTABLISHED, AND IT IS NOT WHAT THE FIRST VERSION OF THIS SECTION SAID.**
⛔ ~~"the most likely cause is the glyph-name decoding … if that decoding runs AFTER the masking pass,
anything it reconstitutes is never scanned"~~ and ⛔ ~~"the fix is to mask AFTER glyph decoding"~~ —
🛑 **both were wrong, and the code four files away refutes them:** `decode_glyph_names` runs at
**`redact.py:566`**, `raw` is assembled at **569**, and `redact(raw)` is not called until **606**.
**Decoding already runs first.** The proposed "fix" was already implemented, and so was its second half —
`counts["leaks"]` at **`:488`** already scans the **final** redacted text.

🔴 **WHAT ACTUALLY HAPPENED: A DIGIT FROM THE ADJACENT COLUMN WAS WELDED TO THE FRONT OF THE RUN.**
The identifier sat in a table whose left-hand cell ended in digits *(a two-character activity index)*, and
the flattened text ran the two together with no separator — `NN` immediately followed by
`NNN-NN-NNNN`. 🔑 **`SSN_LOOSE` (`:306`) and `SSN` (`:301`) both open with `(?<!\d)`. The lookbehind sees
the welded digit and correctly refuses to match.** ⛔ **So the masker missed it AND the refuse-to-write
guard at `:639` stayed silent — the same lookbehind gates both**, which is why a file was written at all.

⚠️ **This is a real trade-off, not a bug to swat.** The `(?<!\d)` / `(?!\d)` anchors exist so long numeric
runs are not shredded into false SSNs. **Removing them from the MASKER trades a silent miss for a flood of
false positives**, which is why they are there.

🛑 **AND ONE CANDIDATE FIX IS ALREADY RULED OUT — the first version of this section proposed it.**
⛔ ~~"ALSO scan a whitespace-normalised variant, where the column boundary is restored"~~ — **it cannot
work, and a reviewer proved it by running the code.** *Normalising whitespace can only fold a separator
that EXISTS.* Here the two runs are joined with **no separator at all**, so there is nothing to normalise;
the welded string is identical before and after, and the lookbehind refuses to match either way.

🔑 **THE FIX IS IN THE GUARD, NOT THE MASKER — and the code's own comments already say so.**
`redact.py:628-638` describes the refuse-to-write guard as *"the last line of defence, and it is
DELIBERATELY STRICTER than the redactor"*, where *"a false alarm here is cheap … a miss is not
recoverable."* ⛔ **It is not currently stricter in the way that matters**: its leak scan at **`:488`**
is `SSN_LOOSE.findall(text) + LONG_DIGITS.findall(text)`, and `SSN_LOOSE` (`:306`) carries the same `(?<!\d)` lookbehind as the masker *(the `LONG_DIGITS` half cannot help — it never sees a hyphenated run)* — so the one pattern that is supposed to fail loudly inherits the exact blind spot of the one
that is allowed to be conservative. 🛠️ **Give the guard its own anchor-free pattern**, leaving `SSN` and `SSN_LOOSE` untouched for
masking. Then a welded identifier still is not masked — but the job **aborts and writes nothing**, which
is the outcome the guard exists to produce.

🔴 **AND WHICH PATTERN IS NOT A DETAIL — it is the difference between a working guard and one
somebody switches off.** ⚠️ **A reviewer measured three candidates on invented figures. ⛔ Read the corpus
column — the three cells are NOT one denominator**, because the two loose patterns only diverge once a row
carries more than one amount:

| Anchor-free candidate | Catches the welded TIN | False aborts | On what |
|---|---|---:|---|
| ✅ `\d{3}-\d{2}-\d{4}` *(hyphen only)* | **yes** | **0** | every amount corpus tried — and clean on phone numbers, ISO dates and ZIP+4 |
| 🟡 `\d{3}[-\s.]\d{2}[-\s.]\d{4}` *(single separator)* | yes | **~200 / 600** | 600 figures, no thousands separators, integer widths 1–8 |
| ⛔ `SSN_LOOSE` minus its anchors | yes | **60 of 60 rows** | a 60-row page carrying **two** amounts per row *(a single column gives 30)* |

🔑 **And the caveat that governs all three: every one of them scores ZERO once the amounts carry
thousands separators.** The costs above are what a **no-comma extraction** does — which is exactly what a
PDF text layer tends to produce, and therefore the case that matters.

🔑 **START HYPHEN-ONLY.** ⛔ **Never `SSN_LOOSE` with the anchors stripped** — it is the obvious
implementation *(the guard already calls `SSN_LOOSE`)* and it aborts on essentially every amount column,
which is precisely the pressure `:633-634` warns produces a weakened guard *("a false alarm here is cheap … a miss is not recoverable")*.
ⓘ *The hyphen-only shape is what this README's own manual-check bullet below already tells the operator to
grep with — it was safe there for the same reason.*

🔵 **AND THE BETTER END STATE, once the guard is proven: MASK with that pattern rather than abort.**
An abort costs the whole document and sends the operator to edit the tool mid-job; over-masking the only
false positives the hyphen-only shape produces — `INV-2024-01-0001`, `Case 2024-01-1234` — costs a value
no analysis needs.

⛔ **What will NOT work, so nobody re-tries it: extending `SSN_LABELLED` (`:310`).** Its gap class is
`([^\n\d]{0,40})`, which forbids **digits and newlines**, so a column *header* can never reach a value on
the row below, and the welded index breaks it even on the same line. Widening the gap to allow both
re-opens the amount collision it exists to prevent. *(Tested; it fails both ways.)* ⓘ *A separate, still-unexcluded candidate for the masker:
a separator outside `[-\s.]` that `normalise()`'s dash/invisible tables do not fold.*

🧪 **Reproduce it before changing anything** — three fixtures settle it: an SSN with a digit welded to
its front *(the observed case — it must abort)*, one with a non-ASCII separator, and a legitimate column of
amounts that must **not** abort, so the false-positive cost of the looser guard is measured rather than
assumed.

🛠️ **Until that lands:**

- 🔴 **The printed counts are a hint, not a clearance.** *"22 masked"* means 22 were found.
- 🔴 **On any document that reports glyph-name decoding, re-scan the output yourself** — and use a
  pattern **without** the digit anchors: `grep -nE '[0-9]{3}-[0-9]{2}-[0-9]{4}'` finds exactly the case
  the tool's own guards are built to skip.
- 🔑 **The value that escaped was never written anywhere** — not the working paper, not the client file,
  not the artifact, not the chat — and the output file was deleted. **The control that held was the human
  rule, not the tool.**

_(Found 2026-09-06 while reading a shareholder's own prior-year return during a return preparation. Same
family as the street-line miss on the 2023 return, found 2026-09-02: the tool reported `0 street lines
masked` on a document that carried one.)_

## Known limits — read these before trusting it

- **Passport and other foreign ID numbers are not caught unlabelled.** The formats vary too
  much. This firm's clients are foreign-born owners, so this is the realistic gap.
- **An unlabelled, wide-spaced `NNN NN NNNN`** is not masked — it collides with a column of
  amounts. The guard catches it and stops the job, so it fails loudly rather than silently.
- **Glyph names carrying NO digit are not masked** — a font naming its glyphs `/gabc`, `/gaid`
  and so on. Given the scheme those reconstruct a value, but the scheme is not in the file, so
  what survives is a substitution cipher rather than a readable number. Widening the filter to
  catch them would start eating `Sch A/B/C/D/E/F` and `and/or`, which is a worse trade. A
  document made entirely of them still trips the diversity gate.
- **Unlabelled bank accounts of 4–8 digits are not masked.** Only labelled ones (`Account no…`,
  `Routing…`) and bare runs of 9+ digits are. `Chase ending 45566778` survives.
- **It reads PDFs only.** A `.docx` or an image is not handled.
- **It is a backstop, not the control.** The control is still deleting the session when the
  work is done — and for a document that matters more than for organizer responses, because
  `get_file` puts a **presigned download URL** in the transcript by itself. That URL downloads the
  file with no Double login at all. **Verified 2026-08-11: `X-Amz-Expires=3600` — it lives one
  hour.** Short, but not zero, and not something to lean on.

## Tests

```bash
python3 tools/redact-doc/test_redact.py
```

Every case is **invented** — no client's data is in that file and none may be added
([`organizer-review`](../../.claude/skills/organizer-review/) §0 rule 7). Run it after any
change to the patterns, and **verify the test can still fail**: neutralise a pattern and
confirm the suite goes red. **All eleven mutants are caught** — the nine patterns, the guard, and
the Unicode normalisation.

Two lessons from getting this wrong twice:
- An early EIN test passed with the EIN rule deleted, because a hyphenated EIN survives on its own.
  It asserted something no rule threatened.
- The **guard had no coverage at all**, because it lives in `_run()` and the suite only imported
  `redact()`. Deleting it entirely left the suite green — which is precisely why the EIN/guard
  collision shipped. `_run()` is now exercised end to end against generated PDFs: the guard, the
  scan detection, and the figures surviving a full pass.

## Who set this

The document rule this replaces (*"do not fetch client documents in order to read them"*) was
written on 2026-07-30 in `double-mcp`, **by an assistant, not by Lilian** — it carried no
attribution, and the skill itself recorded that nobody had put it to her. She ruled on it on
2026-08-11, on the same reasoning she used to lift the organizer ban: the rule bought no
security, because anyone with the account can simply not load it, and it cost real work.

The route and the discipline are in the
[`organizer-review`](../../.claude/skills/organizer-review/) skill §1 source 9 and
[`double-mcp`](../../.claude/skills/double-mcp/) §2.2.
