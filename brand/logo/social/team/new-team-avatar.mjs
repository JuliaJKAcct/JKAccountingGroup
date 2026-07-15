#!/usr/bin/env node
// JK Accounting Group — team WhatsApp/social avatar generator
//
// Usage:   node new-team-avatar.mjs LG [LK MZ ...]
// Output:  JK-team-avatar-<INITIALS>.svg (+ -1000.png if Chromium is available)
//
// Produces the firm's team avatar (the "name-large" layout chosen July 2026):
// a square 1000×1000 ivory field safe for WhatsApp's circular crop, with the
// person's initials drawn in the SAME custom letterform style as the JK
// monogram of the official medallion, a bronze rule, the firm name in IBM
// Plex Mono, and two bronze diamonds.
//
// The company account itself uses the dark seal in ../ (JK-social-avatar-*);
// team members use these light initials avatars. Dark = company, light = person.

import { writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = dirname(fileURLToPath(import.meta.url));
const TEAL = '#123841', IVORY = '#F6F3EC', BRONZE = '#9C6A39';

// ---------------------------------------------------------------------------
// House letterforms — matched to the JK monogram of the medallion.
// Metrics (all letters): cap top y=26, baseline y=86 (cap height 60),
// stroke-width 9, butt caps, miter joins. Narrow widths (the monogram's J is
// 0.66 and K is 0.53 width/cap ratio). Curves use the J-hook's generous
// quadratics; diagonals stay sharp like the K. Each entry returns the path
// (ink starting at x=ox) and its advance width.
//
// To add a letter for a new teammate: draw it in this 60-unit cap system,
// keep the ratio ≈0.52–0.66 (wide letters like M up to ~0.75), reuse the J-hook
// quadratic (radius ~13–16) for any rounded corner, and test it next to the
// JK reference before shipping (see team README).
// ---------------------------------------------------------------------------
const LETTERS = {
  J: ox => ({ d: `M${ox + 36} 26 L${ox + 36} 70 Q${ox + 36} 86 ${ox + 20} 86 Q${ox + 7} 86 ${ox + 4.5} 74.5`, w: 40.5 }),
  K: ox => ({ d: `M${ox + 4.5} 26 L${ox + 4.5} 86 M${ox + 4.5} 56 L${ox + 26.5} 26 M${ox + 4.5} 56 L${ox + 29.5} 86`, w: 31.5 }),
  L: ox => ({ d: `M${ox + 4.5} 26 L${ox + 4.5} 68 Q${ox + 4.5} 81.5 ${ox + 18} 81.5 L${ox + 31} 81.5`, w: 31 }),
  M: ox => ({ d: `M${ox + 4.5} 86 L${ox + 4.5} 26 L${ox + 22} 63 L${ox + 39.5} 26 L${ox + 39.5} 86`, w: 44 }),
  Z: ox => ({ d: `M${ox + 1.5} 30.5 L${ox + 31.5} 30.5 L${ox + 1.5} 81.5 L${ox + 31.5} 81.5`, w: 33 }),
  G: ox => ({ d: `M${ox + 32} 33 Q${ox + 25} 30.5 ${ox + 18} 30.5 Q${ox + 4.5} 30.5 ${ox + 4.5} 56 Q${ox + 4.5} 81.5 ${ox + 18} 81.5 Q${ox + 31.5} 81.5 ${ox + 31.5} 68 L${ox + 31.5} 57 L${ox + 19} 57`, w: 36 }),
};
const GAP = 8; // tight, monogram-like (the medallion's J-K gap is ~6)

function word(str) {
  let ox = 0; const ds = [];
  for (const ch of str) {
    if (!LETTERS[ch]) throw new Error(`Letter "${ch}" is not in the library yet — draw it in the house style first (see README).`);
    const { d, w } = LETTERS[ch](ox); ds.push(d); ox += w + GAP;
  }
  return { d: ds.join(' '), W: ox - GAP };
}

function placeWord(str, cx, cy, capPx, color) {
  const sc = capPx / 60; const { d, W } = word(str);
  return `<g transform="translate(${cx},${cy}) scale(${sc.toFixed(4)}) translate(${(-W / 2).toFixed(2)},-56)"><path d="${d}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="butt" stroke-linejoin="miter"/></g>`;
}

function avatarSVG(initials) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <!-- JK team avatar — ${initials}. Square 1:1, circular-crop safe.
       Initials in the medallion-monogram letter style; name in IBM Plex Mono. -->
  <defs><style>@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&amp;display=swap');</style></defs>
  <rect x="-40" y="-40" width="1080" height="1080" fill="${IVORY}"/>
  <circle cx="500" cy="500" r="468" fill="none" stroke="${TEAL}" stroke-width="6"/>
  ${placeWord(initials, 500, 425, 215, TEAL)}
  <rect x="466" y="572" width="68" height="4" rx="2" fill="${BRONZE}"/>
  <text x="500" y="652" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-weight="500" font-size="40" letter-spacing="4" fill="${TEAL}">JK ACCOUNTING GROUP</text>
  <path fill="${BRONZE}" d="M186 640 L200 654 L186 668 L172 654 Z"/>
  <path fill="${BRONZE}" d="M814 640 L828 654 L814 668 L800 654 Z"/>
</svg>
`;
}

// Chromium for PNG export (optional): pre-installed in Claude Code cloud
// sessions at /opt/pw-browsers/chromium; otherwise set CHROME=/path/to/chrome.
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium';

const args = process.argv.slice(2).map(s => s.toUpperCase());
if (!args.length) { console.error('usage: node new-team-avatar.mjs <INITIALS> [more...]  e.g. node new-team-avatar.mjs LG'); process.exit(1); }

for (const ini of args) {
  const svg = avatarSVG(ini);
  const svgPath = join(OUT, `JK-team-avatar-${ini}.svg`);
  writeFileSync(svgPath, svg);
  console.log('wrote', svgPath);
  if (existsSync(CHROME)) {
    const htmlPath = join(OUT, `.render-${ini}.html`);
    writeFileSync(htmlPath, `<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:1000px;height:1000px;overflow:hidden;background:${IVORY}}svg{display:block;width:1000px;height:1000px}</style></head><body>${svg}</body></html>`);
    const pngPath = join(OUT, `JK-team-avatar-${ini}-1000.png`);
    execFileSync(CHROME, ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1000,1000', '--virtual-time-budget=5000', `--screenshot=${pngPath}`, htmlPath], { stdio: 'ignore' });
    execFileSync('rm', ['-f', htmlPath]);
    console.log('wrote', pngPath);
  } else {
    console.log('(no Chromium found — SVG only; set CHROME env var to also export PNG)');
  }
}
