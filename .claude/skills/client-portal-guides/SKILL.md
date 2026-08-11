---
name: client-portal-guides
description: Produce an illustrated, ready-to-send client how-to guide for the Double Client Portal — the one-page visual (EN + RU), the PDF/PNG to send on email or WhatsApp, the message copy, and the SOP that backs them. Use whenever a client doesn't know how to do something in the portal ("how do I upload this?", "where do I send you my bank details?", "how do I log in?"), when Lilian or Julia asks for step-by-step instructions "with images", when a session gets phone screenshots of a portal screen to turn into instructions, or when an existing guide needs updating because the screen changed. Encodes the house rule that portal screens are RECREATED in HTML/CSS rather than shipped as raw screenshots, the guide anatomy and the teal-marker convention, the EN/RU language rules (Double's own labels stay in English), the deterministic PDF/PNG render, and the finish-the-job checklist (SOP + indexes + Knowledge Hub).
---

# Client portal guides — JK Accounting Group

The engine for the question the firm answers over and over: **"I know I'm supposed
to do that in the portal — but how?"** Today the cost of that question is twenty
minutes of opening the app, screenshotting each screen, drawing red circles, and
explaining it over WhatsApp — again, for the next client, from scratch.

This skill turns that into an artifact we keep. One pass produces:

| Artifact | Where it goes |
|---|---|
| **The SOP** — the firm-side record of the flow, what's verified, what isn't | `projects/sops/double-portal-<topic>.md` |
| **The visual one-page guide, EN + RU** — self-contained HTML | `projects/sops/client-guides/double-<topic>-guide-<lang>.html` |
| **One-page PDF + high-res PNG**, EN + RU — what you actually send | `projects/sops/client-guides/double-<topic>-<lang>.pdf` / `.png` |
| **Email / Double canned response** (EN + RU in one file) | `projects/sops/client-guides/double-<topic>-email-template.md` |
| **WhatsApp copy**, EN + RU | `projects/sops/client-guides/double-<topic>-whatsapp-<lang>.md` |
| **The marked-up source screenshots**, as the drawing reference | `projects/sops/client-guides/reference/` |

Two guides exist and are the reference implementations: **first login**
([`double-portal-first-login.md`](../../../projects/sops/double-portal-first-login.md))
and **sending us information / "Qs for us"**
([`double-portal-sending-us-information.md`](../../../projects/sops/double-portal-sending-us-information.md)).
Copy their shape — don't invent a new one.

Design work here runs through the [`impeccable`](../impeccable/) skill and the firm
Design System, like every visual artifact in this repo.

---

## 0. The rule that defines these guides: recreate, don't screenshot

**The portal screens in a client guide are rebuilt in HTML/CSS. Raw screenshots are
the reference, never the deliverable.** This is not a stylistic preference — every
practical property of the guide depends on it:

- **One file, one page.** No album of loose images the client has to view in the right
  order, and no "which screenshot came first?" on WhatsApp.
- **Nothing to host.** The guide is self-contained (the only embedded asset is the JK
  medallion, as a data URI), so it works offline, as an email attachment, in Drive.
- **We can mark it.** Our own **teal** ring + step badge sits on top of Double's
  **bronze** buttons, so the client can never confuse "the thing JK drew" with "the
  thing the app drew."
- **It stays on brand** — a phone screenshot is Double's design; the guide is ours.
- **No stray data.** A real screenshot carries whatever was on that screen: a name, a
  client, a balance. A recreation carries only what we put in it.

The marked-up phone captures still get committed to `reference/` — they are the
**ground truth for the drawing**, and the next session that has to re-render or extend
the guide needs them.

**Before committing a reference capture, look at it.** It must come from a *firm
member's own* portal view. A capture of a **client's** portal, or one showing a client
name, a document list, or figures, does not go in the repo — recreate from it and
delete it.

---

## 1. What to get from the person asking

Usually you'll be handed a zip of phone screenshots and a sentence about what to
circle. Get these four things before building:

1. **The screenshots, in order**, and **which control to mark on each one**. Lilian's
   red circles already answer this — read them.
2. **Which device** the flow was captured on. Phone and desktop are different layouts
   (the phone has a bottom menu bar; the browser does not). **Say in the guide's title
   or intro which one it covers**, and record the other as an open item in the SOP —
   never guess the layout you haven't seen.
3. **What the client was actually trying to do**, in their words. That's the guide's
   intro sentence and the WhatsApp opener — "send us bank details" beats "use the
   questions module."
4. **Any label whose meaning isn't obvious** (e.g. `Team visibility`). If nobody
   knows, write the client-facing line as *"leave it as it is"* and flag the
   uncertainty in the SOP — never invent behavior.

---

## 2. Anatomy of the one-page guide

Structure, in order — the same in every guide:

1. **Masthead** — teal band, JK medallion, mono kicker (`Client Portal · <topic>`),
   serif H1 written as the client's question ("How to send us a question or a document").
2. **Bronze seam** (3px) under the masthead.
3. **Intro** — two or three sentences: what this is for, where it lives, how long it
   takes ("On your phone it's four taps").
4. **The step grid** — one cell per step: a teal numbered disc, a short imperative
   heading, one line of guidance, and the **recreated screen** beneath it. Three steps
   → the L-shape (tall first cell). Four steps → a 2×2 grid.
5. **The tip band** (sand) — the one or two things that come up afterwards: the
   alternative route, what happens next, "stuck? write to us."
6. **Footer** — deep-teal band, `MIAMI · FORT LAUDERDALE · ONLINE` + the firm's email
   and site.

**The screen mock.** Phone flows are drawn as a ~186px-wide phone: teal top bar with
the medallion, the body at a **fixed height** so every mock in the grid is the same
size, and the bottom menu bar. Modals are drawn over a dimmed body, exactly as they
appear. Keep the app's real English labels verbatim — a client matches words on a
screen, so `Qs for us` must read `Qs for us`, not a translation.

**The marker.** A teal ring (`box-shadow:0 0 0 2px #fff, 0 0 0 3px var(--teal)`) around
the target plus a small teal **numbered badge** at its corner. Not a callout bubble
with text: bubbles clip on the phone frame and cover the content underneath — that was
learned by rendering it. The cell heading already carries the verb.

**Two CSS traps, both hit while building the "Qs for us" guide:**
- A `.spot` marker class that sets `position:relative` will **override** an absolutely
  positioned target (the floating `+` button jumps to the middle of the screen). Keep
  the target's positioning explicit (`.fab.spot{ position:absolute; }`).
- The phone frame is `overflow:hidden`, so anything anchored outside it disappears.
  Everything the marker draws must live **inside** the frame.

---

## 3. Language

- **Every guide ships EN + RU.** The firm's clients are Ukrainian- and
  Russian-speaking; Julia and Lilian pick the language per client.
- **Inside the Russian copy, Double's own labels stay in English** — `Qs for us`,
  `Ask a question`, `Subject`, `Submit`. The portal UI is English for every client;
  translating a button they must find on screen makes the guide harder, not easier.
  Wrap them in «guillemets» in Russian prose, as the existing guides do.
- Spanish is not produced — no client needs it (Lilian's own sessions are Spanish; the
  clients' are not).
- Repo artifacts (SOP, this skill, the templates' commentary) are **English**, per
  `CLAUDE.md`.

---

## 4. Rendering the PDF and PNG

`render/build.mjs` does it deterministically — same input, same output:

```bash
node .claude/skills/client-portal-guides/render/build.mjs \
  projects/sops/client-guides/double-<topic>-guide-en.html \
  projects/sops/client-guides/double-<topic>-guide-ru.html
```

It writes `double-<topic>-<lang>.pdf` and `.png` next to each HTML file. What it
encodes, and why:

- **The PDF page is sized to the card**, not to Letter. A Letter page with margins
  splits the guide across two pages; a custom page (measured in `print` media from the
  `.page` element) gives **exactly one page**, matching the first-login guide's
  geometry (~645 × 850 pt).
- **The PNG is the WhatsApp form** — full-page at `deviceScaleFactor: 3` (~2700px
  wide), rendered in `screen` media so it keeps the ivory background.
- The script **verifies the PDF is one page** and fails loudly if it isn't.

Chromium comes from the pre-installed Playwright browsers; the script resolves the
global `playwright` package, so there's nothing to install.

**Always look at the render before shipping it** (read the PNG back). The first pass of
the "Qs for us" guide had a clipped `Submit` button, a displaced `+` button, and
callout bubbles sitting on top of the very buttons they pointed at — all invisible in
the source, all obvious in the image.

---

## 5. Naming

Everything for one topic shares a stem — `double-<topic>`:

```
projects/sops/double-portal-<topic>.md            ← the SOP
projects/sops/client-guides/
  double-<topic>-guide-en.html · -ru.html         ← the visual guide (source of truth)
  double-<topic>-en.pdf · -ru.pdf                 ← one page, for email
  double-<topic>-en.png · -ru.png                 ← one image, for WhatsApp
  double-<topic>-email-template.md                ← EN + RU in one file
  double-<topic>-whatsapp-en.md · -ru.md
  reference/<topic>-<n>-<screen>.jpeg             ← the marked-up captures
```

The `.html` is the **source of truth**; the PDF and PNG are renders. If a screen
changes, edit the HTML and re-run the build — never touch the PDF/PNG by hand.

---

## 6. Finishing the job (none of this is optional)

1. **The SOP** — `projects/sops/double-portal-<topic>.md`, in the house shape (see
   [`sop-authoring`](../sop-authoring/)): why it exists, the procedure, **what happens
   on our side**, the client-ready template table, and **notes & open items** naming
   what is *not* verified.
2. **The indexes** — the SOP's row in [`projects/sops/README.md`](../../../projects/sops/README.md)
   (tree + index table). If a new skill or project came out of it, also `CLAUDE.md` and
   the [skills index](../README.md).
3. **The Knowledge Hub** — the firm's standing default: a guide the team has to find is
   not finished until it's in the Hub. In `projects/knowledge-hub/build-hub.mjs`, add
   the SOP to the **"Client portal (Double)"** band with a `guides:` block (the PNG
   shows inline, the PDF downloads), plus a card in the **Templates** band. Then
   rebuild, verify, and republish the one canonical Hub link — via the
   [`knowledge-hub`](../knowledge-hub/) skill, publishing from merged `main`.
4. **PR → independent review → merge**, like every change here.

---

## 7. Checklist

- [ ] Reference captures reviewed for client data, then committed to `reference/`
- [ ] Screens recreated in HTML/CSS — no raw screenshot in the deliverable
- [ ] App labels verbatim in both languages; RU prose, EN buttons
- [ ] Teal ring + numbered badge on each target; nothing clipped, nothing covered
- [ ] Render checked by eye (read the PNG back), PDF is exactly one page
- [ ] Email template + WhatsApp copy, EN + RU, steps identical to the guide
- [ ] SOP written, with the unverified parts named as open items
- [ ] `projects/sops/README.md` + Knowledge Hub updated; Hub republished after merge

---

## Update this skill when…

- **A portal screen changes** and a guide has to be re-rendered — note what moved.
- **The desktop/browser layout gets captured** — today every guide is phone-only; a
  desktop variant changes §1 and §2.
- **A guide is built for something other than Double** (QuickBooks, Gusto, a bank
  portal). The anatomy transfers as-is; widen the scope here rather than starting a
  second skill.
- **Someone finds a better route for the client** than the one documented (e.g. Double
  ships a real upload flow), which would change the SOP *and* the guide.
- **A client tells us the guide didn't work.** That's the highest-value input this
  skill can get — write down what confused them.
