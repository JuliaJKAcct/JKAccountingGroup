#!/usr/bin/env node
/**
 * Self-test for the shared case engine and the two walkthroughs that use it.
 *
 *   node projects/sops/tools/selftest.mjs
 *
 * This exists because the case engine was extracted from a tool that had already
 * absorbed eight separate silent-failure fixes (dead clicks, a delete that came
 * back, a link that let `evil-doublehq.com` through, cases that clobbered each
 * other across windows). A refactor that quietly undoes one of those is the most
 * likely way this work goes wrong, and none of them announce themselves.
 *
 * It runs the PURE parts in plain Node — no browser, no dependencies:
 *   · every step a tool can emit has a label to come back to on re-import
 *   · a case survives encode → decode unchanged (round-trip)
 *   · a case with no Double link encodes EXACTLY as it did before the link
 *     field existed, so notes written by the older tool still reopen
 *   · doubleLink() accepts the real forms and rejects the hostile ones
 *   · the built .html files actually contain the inlined engine
 *
 * Exit code is non-zero on any failure, so a build script can gate on it.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(resolve(here, p), 'utf8');

let failures = 0, checks = 0;
function ok(name, cond, detail){
  checks++;
  if (cond) { if (process.env.VERBOSE) console.log('  ✓ ' + name); return; }
  failures++;
  console.error('  ✗ ' + name + (detail ? '\n      ' + detail : ''));
}
function section(t){ console.log('\n' + t); }

/* ---------------------------------------------------------------- load ---- */
// case-core.js is written to run in a browser OR bare Node: it touches no DOM
// until createTracker(cfg) is called, and only its DOM-free parts are used here.
const sandbox = { console, setTimeout, Promise, Date, JSON, Math, Object, Array, String, URL };
// btoa/atob exist in modern Node; the engine uses them for the pasteable block.
sandbox.btoa = (s) => Buffer.from(s, 'binary').toString('base64');
sandbox.atob = (s) => Buffer.from(s, 'base64').toString('binary');
sandbox.unescape = globalThis.unescape;
sandbox.escape = globalThis.escape;

const core = read('case-core.js');
// The file ends with `})(typeof window !== "undefined" ? window : this)`, so calling
// it with `sandbox` as `this` installs JKCase on the sandbox.
new Function(core).call(sandbox);
const JKCase = sandbox.JKCase;
ok('case-core.js exposes JKCase', !!JKCase && typeof JKCase.createTracker === 'function');

/* Pull a tool's buildSteps + its tracker config out of its .src.html without a
   browser: evaluate the whole <script>, stubbing only what the module touches at
   load time. Anything that needs a real DOM is never reached, because the tool's
   DOM wiring happens inside functions that this never calls — except the few
   top-level lookups, which the stub below satisfies. */
function loadTool(srcFile){
  const html = read(srcFile);
  const script = html.slice(html.indexOf('<script>') + 8, html.lastIndexOf('</script>'));
  const withCore = script.replace('/*__CASE_CORE__*/', core);

  const noop = () => {};
  const el = new Proxy({}, {
    get(t, k){
      if (k === 'dataset' || k === 'style' || k === 'classList') return el;
      if (k === 'hidden' || k === 'disabled' || k === 'checked') return false;
      if (k === 'value' || k === 'textContent' || k === 'innerHTML' || k === 'className') return '';
      return typeof k === 'string' ? (() => el) : undefined;
    },
    set(){ return true; }
  });
  const doc = {
    getElementById: () => el, querySelector: () => el, querySelectorAll: () => [],
    createElement: () => el, body: el, documentElement: el, addEventListener: noop,
    contains: () => true, activeElement: null
  };
  const win = {
    document: doc, addEventListener: noop, scrollTo: noop, console,
    localStorage: { getItem: () => '[]', setItem: noop },
    matchMedia: () => ({ matches: false }),
    setTimeout, Promise, Date, JSON, Math, URL,
    btoa: sandbox.btoa, atob: sandbox.atob, unescape: sandbox.unescape, escape: sandbox.escape,
    navigator: {}
  };
  win.window = win;
  // `captured` is filled by the shim below: we want the config the tool passes in.
  const captured = {};
  const shimmed = withCore.replace(
    'var tracker = JKCase.createTracker({',
    'var tracker = (globalThis.__capture = function(c){ __cfg.v = c; return JKCase.createTracker(c); })({'
  );
  const fn = new Function('window', 'document', 'localStorage', 'navigator', 'console',
                          'setTimeout', 'requestAnimationFrame', '__cfg',
                          'with (window) {\n' + shimmed + '\n}\nreturn { buildSteps: buildSteps, tracker: tracker };');
  const out = fn(win, doc, win.localStorage, win.navigator, console, setTimeout, noop, captured);
  return { cfg: captured.v, buildSteps: out.buildSteps, tracker: out.tracker };
}

/* ------------------------------------------------- per-tool step coverage -- */
// The engine already console.errors on a gap; here it must FAIL the build, because
// a mislabelled step gets written into a client's Double note and read as fact.
for (const [label, file] of [['ITIN', 'itin-w7-walkthrough.src.html'],
                             ['BTR',  'btr-walkthrough.src.html']]){
  section(label + ' — ' + file);
  let tool;
  try { tool = loadTool(file); }
  catch (e){ ok(label + ' tool script evaluates', false, e.message); continue; }
  ok(label + ' tool script evaluates', true);
  ok(label + ' hands a config to the engine', !!tool.cfg);
  if (!tool.cfg) continue;

  const t = tool.tracker._internals;
  ok(label + ' every reachable step has a label',
     t.missingSteps.length === 0,
     t.missingSteps.length ? 'missing from the seed shapes: ' + t.missingSteps.join(', ') : '');

  // Round-trip: a case written to a note and reopened is the same case.
  const steps = tool.buildSteps(tool.cfg.genericAnswers);
  ok(label + ' the generic checklist is not empty', steps.length > 0);
  const c = t.newCase('Round-trip test', steps);
  c.steps[0].done = true; c.steps[0].date = '2026-08-14'; c.steps[0].note = 'a note';
  c.log.push({ t: '2026-08-14 09:00', x: 'something happened' });
  c.dl = 'https://app.doublehq.com/clients/123';
  const back = t.decodeCase(t.caseNoteText(c));
  ok(label + ' round-trips the reference', back.ref === c.ref);
  ok(label + ' round-trips the Double link', back.dl === c.dl);
  ok(label + ' round-trips the step count', back.steps.length === c.steps.length);
  ok(label + ' round-trips the tick, its date and its note',
     back.steps[0].done === true && back.steps[0].date === '2026-08-14' && back.steps[0].note === 'a note');
  ok(label + ' round-trips every step LABEL (no bare ids)',
     back.steps.every((s, i) => s.t === c.steps[i].t && s.ph === c.steps[i].ph),
     back.steps.filter((s, i) => s.t !== c.steps[i].t).map(s => s.id).join(', '));
  ok(label + ' a decoded case is valid to the store', t.validCase(back));

  // Backward compatibility: without a link, the encoded payload must be byte-identical
  // to what the pre-link tool wrote, or an older note stops reopening.
  const noLink = t.newCase('No link', steps);
  const code = t.encodeCase(noLink);
  const payload = JSON.parse(Buffer.from(code.slice(tool.cfg.codeTag.length), 'base64').toString('utf8'));
  ok(label + ' a case with no Double link encodes no `dl` key', !('dl' in payload));
  ok(label + ' the code carries ids and state only, never the answers',
     Object.keys(payload).sort().join(',') === 'cr,g,l,r,s,up,v');

  // The note is the thing that has to fit in Double.
  ok(label + ' a fresh case note is well under the Double limit',
     t.caseNoteText(noLink).length < JKCase.NOTE_LIMIT,
     t.caseNoteText(noLink).length + ' chars vs limit ' + JKCase.NOTE_LIMIT);

  // Two tools must never share a storage key or a code tag, or one would read the
  // other's cases back as its own and rebuild every label from the wrong catalogue.
  ok(label + ' declares a storage key and a code tag', !!tool.cfg.storageKey && !!tool.cfg.codeTag);
  globalThis.__seen = globalThis.__seen || {};
  ok(label + ' storage key is unique across tools', !globalThis.__seen[tool.cfg.storageKey]);
  globalThis.__seen[tool.cfg.storageKey] = 1;
}

/* ------------------------------------------------------------ doubleLink -- */
section('doubleLink() — only a real Double URL may become a live link');
const good = ['https://doublehq.com/x', 'https://app.doublehq.com/clients/1', 'https://APP.DOUBLEHQ.COM/c/2'];
const bad = [
  'https://evil-doublehq.com/x',        // the `\b` regex bug this replaced let this through
  'https://doublehq.com.evil.com/x',
  'https://doublehq.com@evil.com/x',    // userinfo trick — host is evil.com
  'https://notdoublehq.com/x',
  'http://doublehq.com/x',              // not https
  'javascript:alert(1)',
  'data:text/html,<script>alert(1)</script>',
  'https://xdoublehq.com/x',
  '//doublehq.com/x',
  'doublehq.com/x',
  '', '   ', 'https://'
];
good.forEach((u) => ok('accepts ' + u, JKCase.doubleLink(u) !== ''));
bad.forEach((u) => ok('rejects ' + JSON.stringify(u), JKCase.doubleLink(u) === ''));

/* -------------------------------------------------------- built artefacts -- */
section('Built standalones carry the engine inlined');
for (const f of ['itin-w7-walkthrough.html', 'btr-walkthrough.html']){
  let built = '';
  try { built = read(f); } catch (e){ ok(f + ' exists (run build.mjs)', false, e.message); continue; }
  ok(f + ' has no unresolved build placeholder', !built.includes('/*__CASE_CORE__*/'));
  ok(f + ' contains the engine', built.includes('global.JKCase = {'));
  ok(f + ' is self-contained (no external http(s) asset)',
     !/\b(?:src|href)\s*=\s*["']https?:/i.test(built.replace(/<a\b[^>]*>/gi, '')));
}

/* -------------------------------------------------------------- verdict --- */
console.log('\n' + (failures ? '✗ ' + failures + ' of ' + checks + ' checks FAILED'
                              : '✓ all ' + checks + ' checks passed'));
process.exit(failures ? 1 : 0);
