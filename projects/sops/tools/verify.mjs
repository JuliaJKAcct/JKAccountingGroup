#!/usr/bin/env node
/**
 * Load a walkthrough tool without a browser, and assert the two things that go
 * silently wrong and end up written into a client's Double note.
 *
 * Shared on purpose. There are TWO builders that inline these tools —
 * `tools/build.mjs` (the standalone files) and `knowledge-hub/build-hub.mjs`
 * (the PUBLISHED surface, and the one the standing "rebuild and republish the
 * Hub" rule invokes) — and a gate that only one of them runs is a gate the
 * published page can walk straight past.
 *
 * Both assertions exist because a saved case stores step IDS, not text:
 *   · coverage — every step a tool can emit must appear in its seed shapes, or
 *     a reopened case shows a bare id in the wrong phase
 *   · one wording per id — a step whose text depends on the answers comes back
 *     stating the wrong thing (the wrong regulator, the wrong URL) on the one
 *     screen someone works from
 *
 * Deliberately does NOT touch the built .html files: those are gitignored, so a
 * fresh clone has none, and a check that fails on a clean checkout gets ignored.
 * selftest.mjs covers those separately, after the build has produced them.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

export const TOOLS = [
  { label: 'ITIN', file: 'itin-w7-walkthrough.src.html' },
  { label: 'BTR', file: 'btr-walkthrough.src.html' },
];

const b64 = {
  btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
  atob: (s) => Buffer.from(s, 'base64').toString('binary'),
};

/** Evaluate case-core.js on its own and hand back the JKCase namespace. */
export function loadCore(dir = here) {
  const core = readFileSync(resolve(dir, 'case-core.js'), 'utf8');
  const sandbox = { console, setTimeout, Promise, Date, JSON, Math, Object, Array, String, URL,
                    unescape: globalThis.unescape, escape: globalThis.escape, ...b64 };
  new Function(core).call(sandbox);
  return { core, JKCase: sandbox.JKCase };
}

/**
 * Evaluate a tool's whole <script> with a stub DOM, and return its buildSteps,
 * the config it hands the engine, and the live tracker.
 *
 * Nothing here needs a real DOM: the tool's DOM work happens inside functions
 * this never calls. Only the handful of top-level lookups run, and the stub
 * below satisfies those.
 */
export function loadTool(file, dir = here) {
  const { core } = loadCore(dir);
  const html = readFileSync(resolve(dir, file), 'utf8');
  const script = html.slice(html.indexOf('<script>') + 8, html.lastIndexOf('</script>'))
                     .replace('/*__CASE_CORE__*/', core);

  const noop = () => {};
  const el = new Proxy({}, {
    get(_t, k) {
      if (k === 'dataset' || k === 'style' || k === 'classList') return el;
      if (k === 'hidden' || k === 'disabled' || k === 'checked') return false;
      if (k === 'value' || k === 'textContent' || k === 'innerHTML' || k === 'className') return '';
      return typeof k === 'string' ? (() => el) : undefined;
    },
    set() { return true; },
  });
  const doc = {
    getElementById: () => el, querySelector: () => el, querySelectorAll: () => [],
    createElement: () => el, body: el, documentElement: el, addEventListener: noop,
    contains: () => true, activeElement: null,
  };
  const win = {
    document: doc, addEventListener: noop, scrollTo: noop, console,
    localStorage: { getItem: () => '[]', setItem: noop },
    matchMedia: () => ({ matches: false }),
    setTimeout, Promise, Date, JSON, Math, URL, navigator: {},
    unescape: globalThis.unescape, escape: globalThis.escape, ...b64,
  };
  win.window = win;

  // Capture the config the tool passes in, so callers can read its seeds and keys.
  const captured = {};
  const shimmed = script.replace(
    'var tracker = JKCase.createTracker({',
    'var tracker = (function(c){ __cfg.v = c; return JKCase.createTracker(c); })({'
  );
  const fn = new Function('window', 'document', 'localStorage', 'navigator', 'console',
                          'setTimeout', 'requestAnimationFrame', '__cfg',
                          'with (window) {\n' + shimmed + '\n}\n'
                          + 'return { buildSteps: buildSteps, tracker: tracker };');
  const out = fn(win, doc, win.localStorage, win.navigator, console, setTimeout, noop, captured);
  return { cfg: captured.v, buildSteps: out.buildSteps, tracker: out.tracker };
}

/** The same deterministic mixer the engine's sweep uses — see case-core.js. */
export function mix(i, j) {
  let x = Math.imul(i + 1, 0x9E3779B1) ^ Math.imul(j + 1, 0x85EBCA77);
  x ^= x >>> 15; x = Math.imul(x, 0x2C1B3C6D);
  x ^= x >>> 12; x = Math.imul(x, 0x297A2D39);
  x ^= x >>> 15; return x >>> 0;
}

/** Returns a list of human-readable problems; empty means the tool is sound. */
export function verifyTool(label, file, dir = here) {
  const problems = [];
  let tool;
  try { tool = loadTool(file, dir); }
  catch (e) { return [label + ': the tool script did not evaluate — ' + e.message]; }
  if (!tool.cfg) return [label + ': the tool never handed a config to the case engine'];

  const missing = tool.tracker._internals.checkCoverage();
  if (missing.length) {
    problems.push(label + ': steps missing from the seed shapes, so a reopened case would show'
      + ' them as bare ids in the wrong phase — ' + missing.join(', '));
  }

  const V = tool.cfg.sweepValues || {}, ks = Object.keys(V);
  const first = {}, clash = [];
  for (let i = 0; i < 5000 && ks.length; i++) {
    const a = {};
    ks.forEach((k, j) => { a[k] = V[k][mix(i, j) % V[k].length]; });
    for (const s of tool.buildSteps(a)) {
      const text = s.t + ' ' + s.d;
      if (first[s.id] === undefined) first[s.id] = text;
      else if (first[s.id] !== text && !clash.includes(s.id)) clash.push(s.id);
    }
  }
  if (clash.length) {
    problems.push(label + ': step wording depends on the answers, so a reopened case would state'
      + ' the wrong variant — ' + clash.join(', '));
  }
  return problems;
}

/** Verify every walkthrough. Returns the combined problem list. */
export function verifyAll(dir = here) {
  return TOOLS.flatMap((t) => verifyTool(t.label, t.file, dir));
}
