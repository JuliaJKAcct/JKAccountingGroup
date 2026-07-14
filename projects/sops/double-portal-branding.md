# Double Client Portal — branding configuration

> **Status:** Active · **Owner:** Julia · **Started:** 2026-07

## Why this exists

Double's Client Portal ships with **default colors that are off-brand** — a
purple button (`#332B98`) and a bright lime background (`#F2F996`). Left as-is
the portal doesn't look like JK Accounting Group, and the lime clashes badly
with our teal. This SOP records the firm's **official on-brand branding** for
the portal so anyone configuring it (or retouching it later) enters the same
combination and never drifts back to the Double defaults.

All values map to the shared Design System — the authority is
[`../../brand/`](../../brand/) (`JK-Brand-Guide.md` + `design-system/`). Don't
invent new colors here; if the brand tokens change, update this file to match.

## Where to set it

Double → **Settings → Practice Settings → Client Portal → Branding → Customize**
→ "Customize your Client Portal". Enter the hex values **without** the leading
`#` (Double's fields already show the `#`). Click **Save branding** when done.

## The official values

| Field | Value | Brand token | Role |
|---|---|---|---|
| **Brand color** | `123841` | Petrol Teal — `--teal-800` | Portal header / brand chrome |
| **Button color** | `9C6A39` | Warm Bronze — `--bronze-500` (`--accent`) | Action buttons (upload, submit…) |
| **Background Color** | `F6F3EC` | Greige ivory — `--greige-50` (`--bg-page`) | Page canvas behind the white content cards |

**Logo & favicon** — upload the JK medallion (the reversed/light medallion reads
cleanly on the dark teal header). Source files:
[`../../brand/logo/`](../../brand/logo/) — e.g.
`png/JK-medallion-reversed-512.png` for the Practice Logo and
`favicon/favicon.svg` (or `favicon-32.png`) for the Favicon.

## Why this combination

It's the Design System's core recipe applied to the portal — **teal carries the
chrome, bronze is the single action accent, ivory is the calm canvas** (the
brand's ≈60/32/8 teal/ivory/bronze proportion). The bronze buttons make "do
this" actions pop against the teal header instead of disappearing into it (this
mirrors our `.btn.cta` money button), and the greige/ivory background is warm
and quiet — replacing Double's harsh default lime. White content cards sit on
the ivory exactly as surfaces sit on `--bg-page` in the Design System.

## Notes

- **Do not** keep Double's defaults (purple button `#332B98`, lime background
  `#F2F996`) — they're off-brand.
- After saving, check **both** Preview tabs (top-right of the Preview panel):
  **Client Portal** and **Client Login** — confirm the logo is crisp on the
  dark header and the bronze buttons contrast well on both screens. Verifying
  as an actual client (via the sign-in flow) is the final check.
- **"Default client login"** (magic link vs. email + password) on this same
  screen is a *sign-in* setting, not a branding decision — see
  [`double-portal-first-login.md`](./double-portal-first-login.md) for the
  password-reset workaround we send clients.
- Generic firm configuration, not client-specific — safe to reuse and commit.
