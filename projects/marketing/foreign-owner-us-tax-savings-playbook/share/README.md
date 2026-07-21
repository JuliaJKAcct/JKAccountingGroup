# Share bundle — self-contained, for team review

Single-file, **fully self-contained** copies of this project's landing page and
guide, generated for **sharing with the team for feedback**.

- `landing.html` — the opt-in landing page
- `guide.html` — the comprehensive tax-savings guide

Everything is inlined — brand fonts (embedded woff2), Julia's photos (WebP data
URIs), all CSS and JS — so each file works **offline and anywhere**: open it in a
browser, email it, drop it in Drive, or host it as-is. Nothing external to load.
The files also satisfy a strict content-security policy, so they can be published
as a hosted page later if wanted.

**The funnel works end to end:** open `landing.html`, enter any email, and the
opt-in takes you straight to `guide.html` (keep the two files in the same folder).

## Notes

- **Draft — for feedback only.** Same pre-launch placeholders as the source
  (lead endpoint, WhatsApp, booking, and privacy links); the real-proof
  credibility items still await Julia; tax figures pending sign-off.
- **Generated, not hand-edited.** Edit the source `../landing.html` /
  `../guide.html` (and `../assets/`) and regenerate — don't edit these by hand.
- Links to the separate free calculators/assessments are neutralized in the
  bundle (they live outside it).
