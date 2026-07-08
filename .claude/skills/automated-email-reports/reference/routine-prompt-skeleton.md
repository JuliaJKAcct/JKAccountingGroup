# Routine prompt skeleton

Fill in the `<...>` placeholders. Keep it short — this **orchestrates**; the report
logic lives in a skill and the design lives in a committed template. Paste the finished
text into the Routine's prompt box in the web UI.

**Secrets:** the webhook URL and secret go **here only** (the Routine config), never in
the repo.

---

```
TEST RUN — evaluate <A FIXED RECENT COMPLETE PERIOD, e.g. JUNE 2026> regardless of
today's date. Remove this line after the first successful test.

Run <what the job is, in one line>, then email ONE combined report as specified under
DELIVERY. Run autonomously.

Use the `<report-skill-name>` skill in this repository
(.claude/skills/<report-skill-name>/). Follow it. It is READ-ONLY on the <systems> side.

RUN CONTEXT: <how to decide the period from today's date — e.g. around the 20th = the
mid-month check, at/near month end = the end-of-month check; for a run on the 1st,
evaluate the month that just ended>. Pull a short prior-period lookback for context.

DATA SOURCES:
- <System> — <what to read, with the stable IDs, e.g. Double clientId 123456>
- <System> — <folder / file names to read>
(skip <anything paused>).

DELIVERY: Compose ONE combined report, sectioned <list the sections in priority order>,
in English. Produce an HTML version and a plain-text version.

BRANDED EMAIL: Build the HTML from the firm's template at
.claude/skills/<report-skill-name>/reference/<template>.html — reproduce its exact
layout, colors and fonts, and fill it with the real data (include only the sections
that apply; drop the sample content).

Send the report by calling the firm's email webhook — EXACTLY ONCE: a single POST, to a
SINGLE recipient. Do NOT send one email per item. Do NOT send to more than one address.
Do NOT call the webhook again once it has succeeded.

Build the JSON payload with Python (so the HTML is escaped correctly), then POST it once
with curl:
- Webhook URL: <WEBHOOK_/exec_URL>
- JSON keys: "secret"="<SHARED_SECRET>", "to"="<recipient@firm.com>" (ONE address only),
  "subject"="<subject — <Period>>", "html"=<the HTML report>, "text"=<the plain-text report>.
- Example: write payload.json with python3 (json.dump), then:
  curl -sS -L --max-time 120 -X POST -H "Content-Type: application/json" --data @payload.json "<URL>"

The webhook returns {"ok":true} on success. As soon as you get {"ok":true}, the email is
sent — STOP, do not send it again. Only if the response is clearly an error may you retry
ONCE. This webhook is the ONLY delivery method; ignore the Gmail draft/connector.

In your final message, state: whether the email was SENT once (webhook ok) or NOT (with
the exact error), and whether you could reach <the data sources>.

Read-only except sending the email. Do not modify any data or repo files.
```

---

## Going from test to production
Two edits, nothing else:
1. Delete the `TEST RUN — …` line.
2. Change `"to"` from your address to the real recipient.

## Why the delivery block is so emphatic
Unattended runs drift toward looping (once per item) and retrying. The repeated
"exactly once / one recipient / stop on ok" phrasing is the first line of defense; the
webhook's own de-dupe (see `email-webhook.gs`) is the backstop. Keep both.
