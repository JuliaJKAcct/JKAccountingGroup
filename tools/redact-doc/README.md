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
| Dates of birth (**only** where the page says "date of birth" — a bare date is a tax date) | Every figure, form number, date, state and percentage |
| Driver's licence / state ID, where labelled | |

Masks keep their shape — `SSN-***-**-6789`, `ACCT-****4321` — so two different numbers stay
distinguishable without either being learned.

**Keeping the EIN is not a compromise, it is the point.** The EIN is how we tell which entity
a K-1 or a W-2 came from. A return full of unidentifiable entities answers nothing, which is
why the unhyphenated form — nine bare digits, indistinguishable from an account number — is
claimed explicitly before the account rule can eat it.

## It fails closed, three ways

1. **A scan exits 2 and writes nothing.** No text layer means no OCR here, and the answer is
   to ask for a text PDF — never to send the image somewhere else to be read.
2. **A failed download writes nothing** and never echoes the URL back. A Double presigned link
   is a credential: anyone holding it downloads the file without logging in.
3. **The final guard is stricter than the redactor.** It hunts the loose `NNN?NN?NNNN` shape
   with any spacing, which the redactor only masks when the page labels it. If anything of that
   shape survives, the tool **refuses to write the file** and reports the *shapes* it saw, never
   the values. A false alarm costs one look at the PDF; a miss is not recoverable, because by
   then it is in the transcript.

## Known limits — read these before trusting it

- **Passport and other foreign ID numbers are not caught unlabelled.** The formats vary too
  much. This firm's clients are foreign-born owners, so this is the realistic gap.
- **An unlabelled, wide-spaced `NNN NN NNNN`** is not masked — it collides with a column of
  amounts. The guard catches it and stops the job, so it fails loudly rather than silently.
- **It reads PDFs only.** A `.docx` or an image is not handled.
- **It is a backstop, not the control.** The control is still deleting the session when the
  work is done.

## Tests

```bash
python3 tools/redact-doc/test_redact.py
```

Every case is **invented** — no client's data is in that file and none may be added
([`organizer-review`](../../.claude/skills/organizer-review/) §0 rule 7). Run it after any
change to the patterns, and **verify the test can still fail**: neutralise a pattern and
confirm the suite goes red. An earlier version of the EIN test passed even with the EIN rule
deleted, because a hyphenated EIN survives on its own — it was asserting something no rule
threatened.

## Who set this

The document rule this replaces (*"do not fetch client documents in order to read them"*) was
written on 2026-07-30 in `double-mcp`, **by an assistant, not by Lilian** — it carried no
attribution, and the skill itself recorded that nobody had put it to her. She ruled on it on
2026-08-11, on the same reasoning she used to lift the organizer ban: the rule bought no
security, because anyone with the account can simply not load it, and it cost real work.

The route and the discipline are in the
[`organizer-review`](../../.claude/skills/organizer-review/) skill §1 source 9 and
[`double-mcp`](../../.claude/skills/double-mcp/) §2.2.
