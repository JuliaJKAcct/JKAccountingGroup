#!/usr/bin/env node
// JK Accounting Group — team WhatsApp/social avatar generator
//
// Usage:   node new-team-avatar.mjs LG [LK MZ ...]
// Output:  JK-team-avatar-<INITIALS>.svg  +  JK-team-avatar-<INITIALS>-1000.png
//
// Produces the firm's team avatar (the "name-large" layout chosen July 2026):
// a square 1000×1000 ivory field safe for WhatsApp's circular crop, with the
// person's initials drawn in the SAME custom letterform style as the JK
// monogram of the official medallion, a bronze rule, the firm name, and two
// bronze diamonds.
//
// The company account itself uses the dark seal in ../ (JK-social-avatar-*);
// team members use these light initials avatars. Dark = company, light = person.
//
// SELF-CONTAINED: both the initials AND the firm name are vector outlines — no
// font @import, no system-font dependency — so the SVG master and the PNG render
// identically everywhere (offline, <img>, thumbnailers). The name was outlined
// once from IBM Plex Mono Medium at 40px / letter-spacing 4 (see NAME_PATH).
//
// Rendering note: headless Chromium's --headless=new viewport is ~90px shorter
// than the window, which silently clips the bottom of a 1000px page. We render
// into a taller (1000×1120) window and crop the top 1000×1000, then pixel-verify
// the frame is present on all four sides before writing the PNG.

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

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

// "JK ACCOUNTING GROUP" outlined from IBM Plex Mono Medium, 40px, letter-spacing 4,
// centered on x=500, baseline y=652. Vector paths — no font needed at render time.
const NAME_PATH = 'M255.72 624.08V644.52Q255.72 646.32 255.1 647.8Q254.48 649.28 253.33999999999997 650.3199999999999Q252.2 651.36 250.6 651.9200000000001Q249.0 652.48 247.04 652.48Q243.36 652.48 241.18 650.64Q239.0 648.8 238.36 645.56L242.6 644.68Q242.96 646.4 243.96 647.56Q244.96 648.72 247.08 648.72Q249.04 648.72 250.14 647.54Q251.24 646.36 251.24 643.92V627.84H241.52V624.08ZM274.96 639.16 271.6 643.36V652.0H267.12V624.08H271.6V637.44H271.8L275.2 632.8L282.04 624.08H287.2L278.0 635.84L287.56 652.0H282.44ZM338.48 652.0 336.36 644.56H327.48L325.36 652.0H320.8L328.96 624.08H335.08L343.24 652.0ZM332.08 628.6H331.76L328.32 640.84H335.52ZM360.8 652.48Q355.48 652.48 352.9 648.72Q350.32 644.96 350.32 638.04Q350.32 631.12 352.9 627.36Q355.48 623.6 360.8 623.6Q362.84 623.6 364.34 624.14Q365.84 624.68 366.91999999999996 625.6199999999999Q368.0 626.56 368.74 627.8199999999999Q369.48 629.08 369.96 630.52L365.92 631.88Q365.6 630.92 365.20000000000005 630.0799999999999Q364.8 629.24 364.20000000000005 628.64Q363.6 628.04 362.78 627.6800000000001Q361.96 627.32 360.76 627.32Q357.8 627.32 356.44 629.58Q355.08 631.84 355.08 635.68V640.4Q355.08 644.24 356.44 646.5Q357.8 648.76 360.76 648.76Q361.96 648.76 362.78 648.4Q363.6 648.04 364.20000000000005 647.44Q364.8 646.84 365.20000000000005 646.0Q365.6 645.16 365.92 644.2L369.96 645.56Q369.48 647.0 368.74 648.26Q368.0 649.52 366.91999999999996 650.46Q365.84 651.4 364.34 651.94Q362.84 652.48 360.8 652.48ZM388.8 652.48Q383.48 652.48 380.9 648.72Q378.32 644.96 378.32 638.04Q378.32 631.12 380.9 627.36Q383.48 623.6 388.8 623.6Q390.84 623.6 392.34 624.14Q393.84 624.68 394.91999999999996 625.6199999999999Q396.0 626.56 396.74 627.8199999999999Q397.48 629.08 397.96 630.52L393.92 631.88Q393.6 630.92 393.20000000000005 630.0799999999999Q392.8 629.24 392.20000000000005 628.64Q391.6 628.04 390.78 627.6800000000001Q389.96 627.32 388.76 627.32Q385.8 627.32 384.44 629.58Q383.08 631.84 383.08 635.68V640.4Q383.08 644.24 384.44 646.5Q385.8 648.76 388.76 648.76Q389.96 648.76 390.78 648.4Q391.6 648.04 392.20000000000005 647.44Q392.8 646.84 393.20000000000005 646.0Q393.6 645.16 393.92 644.2L397.96 645.56Q397.48 647.0 396.74 648.26Q396.0 649.52 394.91999999999996 650.46Q393.84 651.4 392.34 651.94Q390.84 652.48 388.8 652.48ZM416.0 652.48Q413.36 652.48 411.42 651.5Q409.48 650.52 408.22 648.6800000000001Q406.96 646.84 406.36 644.1600000000001Q405.76 641.48 405.76 638.04Q405.76 634.64 406.36 631.94Q406.96 629.24 408.22 627.4Q409.48 625.56 411.42 624.5799999999999Q413.36 623.6 416.0 623.6Q418.64 623.6 420.58 624.5799999999999Q422.52 625.56 423.78 627.4Q425.04 629.24 425.64 631.94Q426.24 634.64 426.24 638.04Q426.24 641.48 425.64 644.1600000000001Q425.04 646.84 423.78 648.6800000000001Q422.52 650.52 420.58 651.5Q418.64 652.48 416.0 652.48ZM416.0 648.76Q419.0 648.76 420.24 646.5Q421.48 644.24 421.48 640.36V635.68Q421.48 631.84 420.24 629.58Q419.0 627.32 416.0 627.32Q413.0 627.32 411.76 629.58Q410.52 631.84 410.52 635.68V640.4Q410.52 644.24 411.76 646.5Q413.0 648.76 416.0 648.76ZM439.24 624.08V641.24Q439.24 642.96 439.34000000000003 644.36Q439.44 645.76 439.91999999999996 646.74Q440.4 647.72 441.36 648.24Q442.32 648.76 444.0 648.76Q445.68 648.76 446.64 648.24Q447.6 647.72 448.08000000000004 646.74Q448.56 645.76 448.65999999999997 644.36Q448.76 642.96 448.76 641.24V624.08H453.24V640.44Q453.24 643.44 452.9 645.7Q452.56 647.96 451.56 649.46Q450.56 650.96 448.74 651.72Q446.92 652.48 444.0 652.48Q441.08 652.48 439.26 651.72Q437.44 650.96 436.44 649.46Q435.44 647.96 435.1 645.7Q434.76 643.44 434.76 640.44V624.08ZM467.16 630.52H466.8V652.0H462.88V624.08H468.64L476.84 645.56H477.2V624.08H481.12V652.0H475.36ZM502.24 627.84V652.0H497.76V627.84H489.0V624.08H511.0V627.84ZM519.2 652.0V648.6H525.76V627.48H519.2V624.08H536.8V627.48H530.24V648.6H536.8V652.0ZM551.16 630.52H550.8V652.0H546.88V624.08H552.64L560.84 645.56H561.2V624.08H565.12V652.0H559.36ZM589.2 648.16H588.92Q588.56 649.0 588.06 649.78Q587.56 650.56 586.8199999999999 651.16Q586.08 651.76 585.04 652.12Q584.0 652.48 582.64 652.48Q578.28 652.48 576.0799999999999 648.76Q573.88 645.04 573.88 638.24Q573.88 631.12 576.4 627.36Q578.92 623.6 584.12 623.6Q586.16 623.6 587.7 624.1600000000001Q589.24 624.72 590.3199999999999 625.6600000000001Q591.4 626.6 592.12 627.86Q592.84 629.12 593.28 630.52L589.24 631.88Q588.92 630.96 588.52 630.1400000000001Q588.12 629.32 587.54 628.6800000000001Q586.96 628.04 586.1400000000001 627.6800000000001Q585.32 627.32 584.16 627.32Q581.24 627.32 579.94 629.58Q578.64 631.84 578.64 635.68V640.12Q578.64 642.04 578.9200000000001 643.64Q579.2 645.24 579.86 646.38Q580.52 647.52 581.5799999999999 648.16Q582.64 648.8 584.16 648.8Q586.6 648.8 587.9000000000001 647.3399999999999Q589.2 645.88 589.2 643.6V641.08H583.8V637.72H593.28V652.0H589.2ZM645.2 648.16H644.92Q644.56 649.0 644.06 649.78Q643.56 650.56 642.8199999999999 651.16Q642.08 651.76 641.04 652.12Q640.0 652.48 638.64 652.48Q634.28 652.48 632.0799999999999 648.76Q629.88 645.04 629.88 638.24Q629.88 631.12 632.4 627.36Q634.92 623.6 640.12 623.6Q642.16 623.6 643.7 624.1600000000001Q645.24 624.72 646.3199999999999 625.6600000000001Q647.4 626.6 648.12 627.86Q648.84 629.12 649.28 630.52L645.24 631.88Q644.92 630.96 644.52 630.1400000000001Q644.12 629.32 643.54 628.6800000000001Q642.96 628.04 642.1400000000001 627.6800000000001Q641.32 627.32 640.16 627.32Q637.24 627.32 635.94 629.58Q634.64 631.84 634.64 635.68V640.12Q634.64 642.04 634.9200000000001 643.64Q635.2 645.24 635.86 646.38Q636.52 647.52 637.5799999999999 648.16Q638.64 648.8 640.16 648.8Q642.6 648.8 643.9000000000001 647.3399999999999Q645.2 645.88 645.2 643.6V641.08H639.8V637.72H649.28V652.0H645.2ZM663.8 652.0H659.36V624.08H669.8Q673.8 624.08 675.9 626.3199999999999Q678.0 628.56 678.0 632.48Q678.0 635.68 676.44 637.76Q674.88 639.84 671.96 640.32L678.4 652.0H673.44L667.52 640.72H663.8ZM669.16 637.12Q673.32 637.12 673.32 633.32V631.6Q673.32 627.8 669.16 627.8H663.8V637.12ZM696.0 652.48Q693.36 652.48 691.4200000000001 651.5Q689.48 650.52 688.22 648.6800000000001Q686.96 646.84 686.36 644.1600000000001Q685.76 641.48 685.76 638.04Q685.76 634.64 686.36 631.94Q686.96 629.24 688.22 627.4Q689.48 625.56 691.4200000000001 624.5799999999999Q693.36 623.6 696.0 623.6Q698.64 623.6 700.5799999999999 624.5799999999999Q702.52 625.56 703.78 627.4Q705.04 629.24 705.64 631.94Q706.24 634.64 706.24 638.04Q706.24 641.48 705.64 644.1600000000001Q705.04 646.84 703.78 648.6800000000001Q702.52 650.52 700.5799999999999 651.5Q698.64 652.48 696.0 652.48ZM696.0 648.76Q699.0 648.76 700.24 646.5Q701.48 644.24 701.48 640.36V635.68Q701.48 631.84 700.24 629.58Q699.0 627.32 696.0 627.32Q693.0 627.32 691.76 629.58Q690.52 631.84 690.52 635.68V640.4Q690.52 644.24 691.76 646.5Q693.0 648.76 696.0 648.76ZM719.24 624.08V641.24Q719.24 642.96 719.34 644.36Q719.44 645.76 719.9200000000001 646.74Q720.4 647.72 721.36 648.24Q722.32 648.76 724.0 648.76Q725.68 648.76 726.64 648.24Q727.6 647.72 728.0799999999999 646.74Q728.56 645.76 728.66 644.36Q728.76 642.96 728.76 641.24V624.08H733.24V640.44Q733.24 643.44 732.9 645.7Q732.56 647.96 731.56 649.46Q730.56 650.96 728.74 651.72Q726.92 652.48 724.0 652.48Q721.08 652.48 719.26 651.72Q717.44 650.96 716.44 649.46Q715.44 647.96 715.1 645.7Q714.76 643.44 714.76 640.44V624.08ZM743.36 652.0V624.08H753.8Q757.8 624.08 759.9 626.3199999999999Q762.0 628.56 762.0 632.48Q762.0 636.4 759.9 638.64Q757.8 640.88 753.8 640.88H747.84V652.0ZM747.84 637.16H753.12Q757.28 637.16 757.28 633.32V631.6Q757.28 627.8 753.12 627.8H747.84Z';

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
  <!-- JK team avatar — ${initials}. Square 1:1, circular-crop safe. Self-contained:
       initials and firm name are vector outlines (no font dependency). -->
  <rect x="-40" y="-40" width="1080" height="1080" fill="${IVORY}"/>
  <circle cx="500" cy="500" r="468" fill="none" stroke="${TEAL}" stroke-width="6"/>
  ${placeWord(initials, 500, 425, 215, TEAL)}
  <rect x="466" y="572" width="68" height="4" rx="2" fill="${BRONZE}"/>
  <path d="${NAME_PATH}" fill="${TEAL}"/>
  <path fill="${BRONZE}" d="M186 640 L200 654 L186 668 L172 654 Z"/>
  <path fill="${BRONZE}" d="M814 640 L828 654 L814 668 L800 654 Z"/>
</svg>
`;
}

// --- minimal PNG decode / crop / encode (zlib only, no deps) ----------------
function decodePNG(buf) {
  let p = 8, w, h, ct, id = [];
  while (p < buf.length) {
    const l = buf.readUInt32BE(p), t = buf.toString('ascii', p + 4, p + 8), d = buf.subarray(p + 8, p + 8 + l);
    if (t === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); ct = d[9]; }
    else if (t === 'IDAT') id.push(d); else if (t === 'IEND') break;
    p += 12 + l;
  }
  const raw = zlib.inflateSync(Buffer.concat(id)), ch = ct === 6 ? 4 : 3, st = w * ch, o = Buffer.alloc(h * st);
  const pae = (a, b, c) => { const q = a + b - c, x = Math.abs(q - a), y = Math.abs(q - b), z = Math.abs(q - c); return x <= y && x <= z ? a : y <= z ? b : c; };
  for (let y = 0; y < h; y++) {
    const f = raw[y * (st + 1)], rs = y * (st + 1) + 1;
    for (let x = 0; x < st; x++) {
      const cu = raw[rs + x], a = x >= ch ? o[y * st + x - ch] : 0, b = y > 0 ? o[(y - 1) * st + x] : 0, c = (x >= ch && y > 0) ? o[(y - 1) * st + x - ch] : 0;
      let v; switch (f) { case 0: v = cu; break; case 1: v = cu + a; break; case 2: v = cu + b; break; case 3: v = cu + ((a + b) >> 1); break; case 4: v = cu + pae(a, b, c); break; default: throw new Error('PNG filter ' + f); }
      o[y * st + x] = v & 255;
    }
  }
  return { w, h, ch, st, o };
}
const CRC = (() => { const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return b => { let c = ~0; for (let i = 0; i < b.length; i++) c = t[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (~c) >>> 0; }; })();
function chunk(type, data) { const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0); const t = Buffer.from(type, 'ascii'); const crc = Buffer.alloc(4); crc.writeUInt32BE(CRC(Buffer.concat([t, data])), 0); return Buffer.concat([len, t, data, crc]); }
function encodeRGB(w, h, rgb) {
  const st = w * 3, raw = Buffer.alloc(h * (st + 1));
  for (let y = 0; y < h; y++) { raw[y * (st + 1)] = 0; rgb.copy(raw, y * (st + 1) + 1, y * st, y * st + st); }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}
function cropTopRGB(im, W, H) {
  const st = W * 3, out = Buffer.alloc(H * st);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const si = y * im.st + x * im.ch, di = y * st + x * 3; out[di] = im.o[si]; out[di + 1] = im.o[si + 1]; out[di + 2] = im.o[si + 2]; }
  return out;
}

// --- pixel self-check: frame present on all four sides, corners uniform ivory
function verify(pngBuf) {
  const im = decodePNG(pngBuf);
  const px = (x, y) => { const i = y * im.st + x * im.ch; return [im.o[i], im.o[i + 1], im.o[i + 2]]; };
  const teal = a => Math.abs(a[0] - 0x12) < 45 && Math.abs(a[1] - 0x38) < 45 && Math.abs(a[2] - 0x41) < 45;
  const ivory = a => Math.abs(a[0] - 0xF6) < 12 && Math.abs(a[1] - 0xF3) < 12 && Math.abs(a[2] - 0xEC) < 12;
  const frameAt = (x, y) => { for (let d = -4; d <= 4; d++) if (teal(px(x, y + d))) return true; return false; };
  if (im.w !== 1000 || im.h !== 1000) throw new Error(`bad dimensions ${im.w}x${im.h}`);
  for (const [x, y, name] of [[500, 31, 'top'], [500, 968, 'bottom'], [32, 500, 'left'], [968, 500, 'right']])
    if (!frameAt(x, y)) throw new Error(`frame ring missing at ${name} — render clipped`);
  for (const [x, y] of [[2, 2], [997, 2], [2, 997], [997, 997]])
    if (!ivory(px(x, y))) throw new Error(`corner not ivory at ${x},${y} — banding`);
}

// Chromium for PNG export: pre-installed in Claude Code cloud sessions at
// /opt/pw-browsers/chromium; otherwise set CHROME=/path/to/chrome.
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium';

function exportPNG(svg, ini) {
  const htmlPath = join(OUT, `.render-${ini}.html`);
  const tallPath = join(OUT, `.render-${ini}.png`);
  const pngPath = join(OUT, `JK-team-avatar-${ini}-1000.png`);
  writeFileSync(htmlPath, `<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:1000px;height:1000px;overflow:hidden;background:${IVORY}}svg{display:block;width:1000px;height:1000px}</style></head><body>${svg}</body></html>`);
  try {
    // taller window (1120) so the viewport (~window-90) still covers the full 1000px page
    execFileSync(CHROME, ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1000,1120', '--virtual-time-budget=3000', `--screenshot=${tallPath}`, htmlPath], { stdio: 'ignore' });
    const tall = decodePNG(readFileSync(tallPath));
    const png = encodeRGB(1000, 1000, cropTopRGB(tall, 1000, 1000));
    verify(png);
    writeFileSync(pngPath, png);
    console.log('wrote', pngPath);
  } finally {
    for (const f of [htmlPath, tallPath]) if (existsSync(f)) unlinkSync(f);
  }
}

const args = process.argv.slice(2).map(s => s.toUpperCase());
if (!args.length) { console.error('usage: node new-team-avatar.mjs <INITIALS> [more...]  e.g. node new-team-avatar.mjs LG'); process.exit(1); }

for (const ini of args) {
  const svg = avatarSVG(ini);
  const svgPath = join(OUT, `JK-team-avatar-${ini}.svg`);
  writeFileSync(svgPath, svg);
  console.log('wrote', svgPath);
  if (existsSync(CHROME)) exportPNG(svg, ini);
  else console.log('(no Chromium found — SVG only; set CHROME=/path/to/chrome to also export PNG)');
}
