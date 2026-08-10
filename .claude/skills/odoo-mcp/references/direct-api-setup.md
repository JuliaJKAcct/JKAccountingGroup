# Connecting to Odoo directly through its own API

The plan for replacing (or bypassing) the 50-call/day MCP connector with a direct
connection to Odoo's own API, and the step-by-step Lilian follows to set it up.

> **Status (2026-08-10): the key exists; the environment is being created; the test read is the
> next action.** Lilian raised it with **Andres** — who built the firm's Odoo website and set up
> the MCP connector — and he confirmed **there is no problem connecting through the API**, then
> showed her how to obtain a key. She has it. Odoo's documentation says otherwise for the firm's
> plan; **§0 explains why both can be true and what settles it.** Now that a key exists, the test
> is **§0 Step B′** — one read of `res.company` plus the one-character control, minting nothing
> and revoking nothing — and it can run as soon as a session starts in the `odoo-api` environment
> (§3 Step 3). ⚠️ **Not the older Step B: its final instruction revokes the key.**
>
> **Still unrecorded, and both matter:**
> - **Which Odoo user the key sits on.** The firm has one user and it is the administrator, so
>   assume full admin power until confirmed otherwise, and settle it before granting the key any
>   write scope (§3 Step 1, §5).
> - **The key's duration / expiry date.** Odoo caps a non-Settings user's key at **90 days**
>   (§3 Step 2), and an expired key fails with `Invalid apikey` — indistinguishable from a
>   revoked or mistyped one, and *not* caught by the "is the variable set?" check. Record the
>   expiry here and put the rotation date in the calendar.
>
> **Still not built: the tool** (`tools/odoo-api/`, §5) — required before the first write, not
> after.

---

## 0 · The plan question — documented policy vs. observed behaviour

### What the documentation says

Odoo's documentation, verbatim (`developer/reference/external_api`):

> *"Access to data via the external API is only available on **Custom** Odoo pricing plans.
> Access to the external API is **not available on One App Free or Standard** plans."*

**The firm is on Standard** — confirmed 2026-08-06 from the subscription page: *"Standard
Plan · 1 Users"*. Read literally, the direct API is closed.

### What is actually observed

Three facts pull the other way, and they are not weak:

1. **Andres says it works.** He set up the integration and reports the plan does include API
   access. He offered to demonstrate it.
2. **The Pantalytics MCP connector reads and writes this database from outside, today.**
   `pan_usage` on 2026-08-06 returned workspace `Gmail`, plan `Free`, **50 of 50 calls used
   that day**. If that connector speaks to Odoo over the external API — the normal mechanism
   for such tools — then external API access demonstrably works on a Standard plan.
3. **The notice is long-standing policy, not a new gate.** It appears **byte-identical** in the
   Odoo 16, 17, 18 and 19 documentation, and closes with *"visit the pricing page or reach out
   to your Customer Success Manager"* — the register of a commercial condition rather than an
   enforced error path.
   **But do not over-read this.** Age says "not new"; it does not say "not enforced". And there
   is real counter-evidence: in 16–18 the notice sat on the XML-RPC page, while in **19 Odoo
   carried it onto a brand-new page** (*External JSON-2 API*, `versionadded:: 19.0`). It is
   being **actively maintained**, not left behind as boilerplate. The weight here rests on
   facts 1 and 2; fact 3 is supporting, not decisive.

The most probable reading: **Odoo states this as a licensing term but does not block it at the
server.** "You are not entitled to use it" and "you cannot use it" are different claims; an
earlier version of this file reported the first as if it were the second. That was a
misjudgement — the working connector was evidence in plain sight and was under-weighted. Keep
the distinction alive in both directions, though: what follows can settle the *technical*
question and cannot settle the *contractual* one.

### How to settle it

> ### ⚠️ 2026-08-10 — a key now exists, so the order changed
>
> **Run Step B′ — immediately below this box — and stop.** It creates nothing and destroys
> nothing.
>
> **Steps A and B below are superseded.** They are kept for one purpose only: **re-minting the
> key from scratch** if it is ever lost or revoked. **Do not run Step B against the real key —
> its final instruction is to revoke it**, and Odoo never shows a key twice (§6), so revoking is
> destroying. Step A (`/doc` in a browser) is now merely redundant: it was the free way to avoid
> minting a key, and a key already exists.

**Step B′ — the test, with the key that already exists**

Two calls. Nothing created, nothing revoked.

1. **Start a session in the `odoo-api` environment** (§3 Step 3) and confirm the key came
   through: `[ -n "$ODOO_API_KEY" ] && echo present || echo "MISSING — wrong environment"`. An
   unset variable sends an empty bearer and returns a 401 that is *not* about the key at all —
   see the reading table below.
2. **One read**, exactly the call in Step B item 2 below. **Capture the full response body, not
   just the HTTP status** — the status alone cannot tell the failure modes apart.
3. **The control:** the identical call with **one character of the key changed**. This is what
   makes the result mean anything.
4. **Do not revoke.** Record the outcome in the status header at the top of this file and in
   `FOLLOW-UPS.md` row 21.

Read the outcome with the table under Step B — it applies unchanged.

---

**Step A — *(superseded — see the box above)* the free check, no credential at all.**

Logged into Odoo in a browser, open **`https://jkaccountinggroup.odoo.com/doc`**. Odoo 19
serves there the list of models, fields and methods available over the external API **for this
database**. A rendered listing is strong evidence the API is open; a refusal is strong evidence
the other way. It mints nothing and revokes nothing.

**Step B — *(superseded — for RE-MINTING a lost key only, never against the live one)* the
throwaway-key test.**

1. On an **existing** user (no new user, no extra seat): **avatar → My Preferences → Account
   Security → New API Key**. Description `TEST`, **shortest duration offered**.

   > ⚠️ **This is an administrator key.** The firm has exactly one Odoo user, and that user is
   > the administrator — so this key carries full admin power over the live database until it
   > is revoked, and the shortest duration Odoo offers is still measured in days. **Do step 3
   > in the same sitting; if anything interrupts, revoke first.**
   >
   > **If the *New API Key* option is not there at all**, that is itself a result: the plan is
   > gating key creation. Stop and record it.

2. One read, nothing else — the modern endpoint needs only the key:
   ```bash
   curl -sS -w '\n%{http_code}\n' -X POST \
     "https://jkaccountinggroup.odoo.com/json/2/res.company/search_read" \
     -H "Authorization: bearer $ODOO_API_KEY" -H "Content-Type: application/json" \
     --data '{"fields": ["name"], "limit": 1}'
   ```
   **Who runs this matters.** §3 Step 3's rule holds here too — *never paste a key into chat*,
   and this one is an admin key. Either **Lilian runs the curl herself** and reports back the
   HTTP status **and the `message` field** — `name` is the same for every 401, so `message` is
   the only discriminator (see the reading table) — or the key goes into the session environment as
   `ODOO_API_KEY` first and Claude runs it. Export it rather than typing it inline, so it does
   not land in `~/.bash_history`. An unset `$ODOO_API_KEY` sends an empty bearer and produces a
   401 that looks like a real answer — check it is set, and read `message` to be sure (table
   below).

3. **Control test — the step that makes the result mean something.** Repeat the identical call
   with **one character of the key changed**. (The firm used exactly this technique on the
   Double note-size issue, row 19: the control is what proved it was size and not content.)

4. **Revoke the key** on the same screen. ⚠️ **This step belongs to the throwaway key only.**
   Never run it against the key the firm actually uses — Odoo cannot show a key twice, so a
   revoked key is a key that must be re-created and re-entered in the environment.

**Reading the result** — the failure modes are distinguishable, so distinguish them. **All the
401s share the same status code and the same `name`; only `message` tells them apart, so capture
the body.** (Rows 2 and 3 verified against the live instance 2026-08-10.)

| Outcome | What it means |
|---|---|
| **200 with the company name** | The API is **not blocked at the server today**. That answers the technical question, **not the contractual one** — the notice still says Standard is not entitled to it, and Odoo Online **auto-upgrades**, so this can change without the firm doing anything. Enough to proceed without spending; **not a licence**. Confirm with Andres or the Customer Success Manager before building anything the firm depends on |
| **401 · `"message": "User not authenticated, use an API Key with a Bearer Authorization header."`** | **No key was sent at all** — `$ODOO_API_KEY` is unset, i.e. the wrong environment. Nothing has been learned about the key or the plan. Restart in `odoo-api` and repeat |
| **401 · `"message": "Invalid apikey"`** — *and the control fails identically* | Credential-shaped, not plan-shaped. Re-check the key and the host before concluding anything. Note an **expired** key lands here too (Step 2: 90-day cap on a non-Settings user) |
| **`odoo.exceptions.AccessError`** | A permissions problem on that model, not the plan |
| **A distinct plan/subscription error**, or no *New API Key* option at all | Custom really is required; go to the numbers below |

**And the free shortcut that beats both steps** — ask Andres: *"when you configured Pantalytics,
did you give it an API key, or a username and password?"* **An API key** means the external API
is working on this plan. **A username and password** means the connector logs in as a web
session, which proves nothing about the API — and that is exactly the assumption fact 2 above
rests on.

### If Custom does turn out to be required — the numbers

All confirmed 2026-08-06 from the two vendors' own screens:

| | Price | What it gives |
|---|---|---|
| **Odoo Standard** (current) | **$31.10** /user/month · 1 user | All apps. No API *per Odoo's stated terms — see above*, no Studio, no multi-company |
| **Odoo Custom** | **$61.00** /user/month | All apps **+ Studio + API / Multi-Company** |
| **Pantalytics Free** (current) | €0 | 50 calls/day |
| **Pantalytics Pro** | **€25** /user/month | 500 calls/day · 30-day free trial |
| **Pantalytics Max** | €100 /user/month | 10,000 calls/day |

With **one** Odoo user the comparison is unusually close:

- **Pantalytics Pro:** $31.10 + ≈€25 → **≈$59/month**, 500 calls/day, middleman stays, no Studio.
- **Odoo Custom:** **$61.00/month**, unlimited API, no middleman, **plus Studio and
  multi-company**.

*(The ≈$59 uses ≈1.12 USD/EUR as of 2026-08-06. The conclusion holds across a wide range — at
parity it is $56, at 1.20 it is $61 and the two options tie — but re-check the rate before
committing to either.)*

Near-identical money, and **Custom buys more where it matters most**: unlimited API, Studio,
multi-company. **The best combination is Odoo Custom with Pantalytics left on Free** — still
$61/month total, and it keeps the connector for the one thing the direct API cannot do (Claude
on a phone or in a browser, where no code can run). **The one thing that combination gives up**
is connector headroom on exactly that surface: 50 calls/day instead of Pro's 500.

**Read the two "per user" prices carefully — they count different things.** Odoo's is an **Odoo
seat**; Pantalytics' is a **connector seat**, and the firm shares one Claude account, so they
almost certainly do not grow together. Adding an Odoo seat costs **+$31.10** on Standard or
**+$61.00** on Custom; adding connector seats is a separate question. Do not assume one implies
the other. Pantalytics also bills in **euros**, so its dollar cost moves with the exchange rate.

**Tactical note:** Pantalytics Pro carries a **30-day free trial** that would unblock the queued
website backlog at zero cost while the plan question is settled. **But settle the workspace
ownership first:** the workspace is named `Gmail`, suggesting it was created from a Google
sign-in that may be **Andres's rather than the firm's**. Starting a trial that may auto-renew,
on an account the firm does not own or control, puts both the firm's billing and its access on
someone else's login. Check who owns it, and whether the trial requires a card.

## 1 · Why we want it

The **50 tool calls per 24 hours** belong to the **MCP connector's free plan** — a third-party
bridge (`mcp.pantalytics.com`) between Claude and Odoo. They are **not** a limit of the firm's
Odoo subscription and **not** a limit of the Claude plan. See the skill's §1.

Odoo's own API has **no comparable daily call cap** (it does cap API keys per user — see §3,
Step 2). A lot of website work is queued (see
[`PENDING-FIXES.md`](../../../../projects/marketing/consultation-booking/PENDING-FIXES.md))
and 50 calls does not cover it — the budget hit 50/50 in a single session on 2026-08-06.

## 2 · What is already verified

Checked 2026-08-06 from a Claude Code session over plain HTTP, **no MCP calls spent**:

| Check | Result | What it proves |
|---|---|---|
| `POST /xmlrpc/2/common` → `version()`, both hosts | **200** — `19.0+e` (Odoo 19, Enterprise) | The server answers from this environment |
| `POST /jsonrpc` → `db.list` | **Access Denied** | The database list is not public. Correct behaviour |
| `POST /json/2/res.users/read` (no credentials) | **401 Unauthorized** | **The modern JSON-2 endpoint exists and is live on this instance** — 401, not 404 |
| `GET /doc` | **303** (redirects to login) | The instance's own API documentation page exists |

**What this does NOT prove:** that data calls will be *authorised*. `version()` is an
unauthenticated meta-call and is not plan-gated, so a 200 there is entirely consistent with a
Standard plan that will refuse every real data call. Only a successful authenticated read
settles §0.

## 3 · The step-by-step

*(**Step 3 onwards is the live procedure** — the key exists. Steps 0–2 are the road not taken:
Step 1's dedicated user was **never created**, because an extra internal user costs a full Odoo
seat. Re-minting the key means Step 2 alone, on the existing user; taking Step 1 as well is a
**+$31.10/month decision that is Lilian's to make**, not a routine repeat.)*

### Step 0 — Find the database name

Almost certainly **`jkaccountinggroup`** (it is the subdomain, and `jkaccountinggroup.odoo.com`
responds). Two ways to confirm:

1. **`odoo.com` → *My Databases*** — listed by name. Note this requires signing in as the
   **database administrator**, which may be Andres rather than Lilian.
2. **Inside Odoo:** activate developer mode (**Settings → bottom of the page → *Activate the
   developer mode***) — the database name then shows under the user's name in the avatar menu.
   Without developer mode it stays hidden.

> There is **no "About" entry** in the Odoo 19 avatar menu, whatever older guides say.

A wrong name simply makes the login fail. It breaks nothing.

### Step 1 — Create a dedicated user

> **Settings → Users & Companies → Users → New** *(no developer mode needed)*

- **Name:** `Claude API Integration`
- **Login / email:** e.g. `claude-api@jkaccountinggroup.com`
- **Access rights: the minimum.** No *Administration / Settings*.

Never put the key on Julia's user: an API key carries **exactly the power of its user**, and a
dedicated user can be revoked without touching anyone's account.

> ⚠️ **An extra internal user costs a full seat** — $31.10/month on Standard, $61.00 on
> Custom, confirmed 2026-08-06. The firm currently has **one** user, so a dedicated
> integration user **doubles the Odoo bill**. That is the real price of isolating the key.
>
> The alternative is to put the key on the existing user and accept that it carries that
> user's full power — compensating with the [`write-safety.md`](./write-safety.md) layers and
> a short key duration. **Lilian's call: surface both numbers, do not decide for her.**
> (With one user, that user is the administrator, so this is not a small trade-off.)

**Read Step 4 before choosing the access rights** — the connection test needs to be one this
user can actually perform.

### Step 2 — Generate the API key

Logged in **as that user**:

> **Avatar → My Preferences → Account Security tab → New API Key**

It asks for the password, then a description, then shows the key **once**. Needs neither
developer mode nor 2FA.

**Three things this dialog will do that surprise people:**

1. **Duration is mandatory.** Odoo will not create a key without one.
2. **A non-Settings user cannot create a never-expiring key.** The *Persistent Key* option only
   appears for a system (Settings) user — which Step 1 deliberately avoids. For a normal
   internal user the duration is **capped at 90 days**, after which the integration stops
   working with an auth error that looks exactly like a revoked key.
   **So: either accept a 90-day key and put its rotation date in the calendar, or have an
   administrator raise the maximum duration on a group assigned to this user** (the field is
   developer-mode only).
3. **A user may hold at most 10 keys** (`base.programmatic_api_keys_limit`); an eleventh fails
   with HTTP 422.

### Step 3 — Store it as environment variables, in a SEPARATE environment

**Never in the repo. Never pasted into chat** (the conversation is stored).

It goes in a **Claude Code cloud environment's** configuration. Docs:
[`cloud-environments`](https://code.claude.com/docs/en/cloud-environments).

**The screen (walked through with Lilian, 2026-08-10):**

1. Open **claude.ai/code** in a browser — not inside a session.
2. Click the **cloud icon** in the row **above the message box**, showing the current
   environment's name. There is no settings page and no direct URL; that icon is the only way in.
3. **Create a second environment** — *Add cloud environment* — named `odoo-api`. Hovering an
   existing environment and clicking its ⚙️ edits that one instead.
4. In **Environment variables**, `.env` format, one `KEY=value` per line, no quotes:

```
ODOO_URL=https://jkaccountinggroup.odoo.com
ODOO_DB=jkaccountinggroup
ODOO_API_KEY=(the key)
```

**Three variables, deliberately.** JSON-2 authenticates on the bearer token alone, so no
username is needed. An `ODOO_USER` line is optional documentation of *whose* key it is — add it
only with the login the key was actually created under, **not** the `claude-api@…` user in Step
1, which was never created. And put no `#` comment on the same line as a value: in `.env` format
an unquoted `#` starts a comment, so anything after it is dropped — but a box that does not strip
comments would store it as part of the value.

5. **Network access: leave it at `Trusted`.** Verified 2026-08-10 from a cloud session — an
   unauthenticated `POST /json/2/res.company/search_read` returned **401**, so the session
   network already reaches `jkaccountinggroup.odoo.com`. No custom domain list is needed.

**Three things about this screen that will bite:**

1. **It is not a secrets store, and the docs say so outright** — *"Anyone who uses the
   environment can read the values, and cloud environments have no dedicated secrets store, so
   don't add API keys or other credentials."* We are doing it anyway, knowingly, because it is
   the only mechanism there is. That is what makes 2 and 3 below matter rather than being
   fussiness.
2. **A session copies the variables once, at startup.** Editing them does nothing to a session
   already running, and an environment **cannot be switched mid-session** — a new session is the
   only way to pick one up.
3. **A lost key is not recoverable, only replaceable** (§6). So moving it between environments
   later means *creating a new key*, not copying the old one. Choose the environment now.

**Why a second environment rather than putting it in `Default`** (Lilian's decision,
2026-08-10 — the reasoning, so it is not re-litigated):

- **Routines are the real argument.** Scheduled, unattended runs execute *inside an
  environment*. With the key in `Default`, every Routine the firm has — the monthly report, the
  Monday repo audit, the armed booking-page wake-ups — starts at 3 a.m. carrying an
  administrator key over the live database, whatever its task. Confining it means only Odoo work
  carries it.
- **Blast radius.** Most sessions never touch Odoo. In those, the key does not exist, so it
  cannot leak into a log, an artifact, a pasted command, or a commit.
- **One place to rotate, and an off switch.** Archiving `odoo-api` retires the key for every
  future session at once — impossible for the environment used for everything.
- **What it does NOT give:** it is not encryption. Julia and Lilian can still read the value in
  the browser, and inside an `odoo-api` session the key has its full power. It shrinks the
  radius, not the power.
- **Cost:** remembering to pick the environment. Forgetting is harmless and self-announcing —
  the calls fail with `401`. **The wrong-environment check in [`SKILL.md` §1](../SKILL.md) is
  what turns that `401` into the right diagnosis** instead of an hour spent debugging a healthy
  key.
- **Checked 2026-08-10:** `Default` carries no firm-specific variables at all — everything set
  there is Claude infrastructure. So a second environment duplicates nothing and adds no
  maintenance.

### Step 4 — Prove the connection with a read that needs no permissions

**Use the modern JSON-2 API** (see §4 on why not XML-RPC). The key is a bearer token — there
is no separate authenticate step and no uid:

```bash
curl -sS -X POST "$ODOO_URL/json/2/res.users/read" \
  -H "Authorization: bearer $ODOO_API_KEY" \
  -H "X-Odoo-Database: $ODOO_DB" \
  -H "Content-Type: application/json" \
  --data '{"ids": [], "fields": ["login", "name"]}'
```

Reading the calling user's own record needs **no group at all**, so a success proves the
credentials and the plan, and a failure means what it says.

> **Do not use `website.page` for this test.** In Odoo 19 that model has a single ACL row,
> granted only to the **Website → Designer/Editor** group. A minimal user gets an
> `AccessError`, which reads like "the connection failed" and sends the reader debugging a key
> that is perfectly fine. Website reads belong in Step 5.

### Step 5 — Enable writing, when Lilian says so

She grants the **Website** group. Now `website.page` and `ir.ui.view` become readable, and the
first write is small and reversible, executed under every rule in
[`write-safety.md`](./write-safety.md).

## 4 · Use JSON-2, not XML-RPC

Odoo's 19.0 documentation carries a deprecation notice on the RPC page:

> *"Both the XML-RPC and JSON-RPC APIs at endpoints `/xmlrpc`, `/xmlrpc/2` and `/jsonrpc` are
> scheduled for removal in **Odoo 22 (fall 2028) and Online 21.1 (winter 2027)**."*

The firm is on **Odoo Online**, which upgrades itself — so the **winter 2027** date is the one
that applies. Building on XML-RPC means building it twice.

**The replacement, already live on this instance (verified 401, not 404):**

```
POST /json/2/<model>/<method>
Authorization:  bearer <API key>
X-Odoo-Database: <database>          (optional)
Content-Type:   application/json
```

The body carries `ids`, the method's parameters, and optionally `context`. The instance's own
**`/doc`** page lists the models, fields and methods actually available on this database — a
better reference than any general documentation.

The old XML-RPC form (`common.authenticate` → uid → `execute_kw`) still works today and is
fine as a fallback, but new code should not start there.

## 5 · What still has to be built

A small tool in the repo — `tools/odoo-api/` — so no session reinvents it:

- authenticate from the environment variables (never from arguments, never logged);
- **dry-run by default** — a real write needs an explicit, separate flag;
- the model allow-list and deny-list from [`write-safety.md`](./write-safety.md) enforced **in
  code**, not by good intentions;
- snapshot-before-write **including the record's dependents** (see write-safety Layer 2), with
  the ready-made undo;
- the post-write HTTP canary check against a recorded baseline.

Build it **before** the first write, not after.

## 6 · Two questions Lilian asked, answered here so they don't get re-asked

**Why do MCP connectors exist at all, if API keys exist?** They solve different problems. The
API is *capability*; MCP is *standardised, discoverable access for an AI*. Three real reasons
the connector still earns its place: (a) the API is a door, not a map — someone must know the
model and field names and write the code, while an MCP connector ships described tools ready
to use; (b) **not every surface can run code** — Claude Code has a shell, but Claude in a
browser or on a phone does not, and there a connector is the only route; (c) the connector
authenticates without handing anyone a raw key, and can log and rate-limit centrally. Plus the
commercial reason: that convenience can be packaged and sold, which is what Pantalytics does.
**And now a fourth, discovered the hard way:** a connector can reach a database whose own
pricing plan would not permit direct external API access — which may be exactly why Andres
chose it.

**Why does Odoo show the API key only once?** Because Odoo **does not store the key** — only a
hash of it, like a password (confirmed in Odoo's source: the key is hashed on creation and
never kept in plain text). If it could show the key again, it would mean a readable copy
exists, and anyone reaching the database, a backup, or an admin session would harvest *every*
key at once. Storing only the hash means Odoo can verify a key without being able to
reconstruct it. The practical consequence is healthy: a lost key is not "recovered", it is
**revoked and replaced** in thirty seconds. If there is ever any doubt about where a key has
been seen — revoke it and make a new one, no deliberation.
