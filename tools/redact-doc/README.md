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
- **A residual-token check, which is the PRIMARY detector.** After decoding, anything still
  shaped like a glyph name is counted, and a systemic count **refuses the file**. This measures
  the wreckage directly instead of inferring it from alphabet size, so the partly-decoded case
  cannot hide behind its readable half.
- **A gate that measures intelligibility, not volume** — the backstop, for encoding failures
  that leave no glyph names behind. Natural English, even the number-dense English of a return,
  draws on a wide alphabet; a character-level extraction failure draws on a tiny one. Below the
  threshold the tool **refuses to write**. It applies only above ~2,000 characters, because a
  short document's alphabet proves nothing either way, and it runs **per page as well as per
  document** — a whole-document average is exactly what lets one good page vouch for a stack of
  bad ones.

  ⚠️ **Calibration, because the first attempt got this wrong in the safe-looking direction.**
  Two measured points bracket the threshold: the real broken 1120-S came in at **27 distinct
  characters**, and a realistic ALL-CAPS tax-package extraction — a perfectly good document — at
  **39**. The first version set the bar at 40 and therefore **refused a real return by one
  character**, telling the operator to go and ask for a different PDF. It now sits at 30.

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
| **3** | `pypdf is not installed` | A fresh session has no pypdf | `pip install pypdf`. **If `import pypdf` then fails with `No module named '_cffi_backend'`**, that is the system `cryptography` package missing its backend, not this tool: `pip install --upgrade cffi`. A complaint that `cryptography` cannot be uninstalled because Debian installed it is expected and harmless |
| **3** | `could not read as PDF` | Not a PDF, or a corrupt download | Check the file. A `.docx` or an image is out of scope here |
| **2** | `NO TEXT LAYER` | A scan | **Ask for a text PDF.** OCR is not set up here and this is not a gap to route around |
| **5** | `UNREADABLE EXTRACTION` | Either **undecodable glyph names** (`/g11`, `/cid49`, `/index0031` — a slot in a subset font, naming no character) or text with too small an alphabet to be text | `/uniXXXX` is decoded automatically, so reaching this means the failure is a shape that **cannot** be recovered. **Ask for a properly generated PDF from the tax software.** ⛔ Do **not** re-run and accept a `0 masked` report from such a file — zero means blind. Note this fires even when *part* of the document read fine; that mixed case is the most dangerous one, not the least |
| **4** | `REFUSING TO WRITE` | An identifier-shaped run survived redaction | Read the reported *shapes*. Either a pattern missed a real identifier or a column of figures collided with the shape. Inspect the PDF by hand, decide which, and **fix the patterns** — never weaken the guard to get the job done |
| **0** + `glyph-name token(s) were decoded` | Recovered from a broken font | Fine to use, but **layout came through worse than usual.** Read column alignment with suspicion and prefer figures you can corroborate arithmetically (on a return: does line 8 equal line 6 minus line 7?) |
| **0** + `barely extracted: [n, m]` | Those pages gave nothing up | **An absence is not evidence.** Name the pages instead of reporting "X is not on the return" |

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

## Known limits — read these before trusting it

- **Passport and other foreign ID numbers are not caught unlabelled.** The formats vary too
  much. This firm's clients are foreign-born owners, so this is the realistic gap.
- **An unlabelled, wide-spaced `NNN NN NNNN`** is not masked — it collides with a column of
  amounts. The guard catches it and stops the job, so it fails loudly rather than silently.
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
