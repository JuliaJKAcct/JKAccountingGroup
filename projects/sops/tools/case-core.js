// ============================================================================
// SHARED CASE ENGINE — the SINGLE source of truth for the firm's case trackers.
//
// A "case" is one client carried through a multi-week filing: a checklist pruned
// to that client's actual steps, a note on each step, a running log, a link to
// the client in Double, and — the durable copy — a block pasted into that
// client's running case note in Double.
//
// Every walkthrough tool that tracks a case inlines this exact file at its
// CASE_CORE build placeholder:
//   · projects/sops/tools/itin-w7-walkthrough.src.html   (ITIN / Form W-7)
//   · projects/sops/tools/btr-walkthrough.src.html       (Business Tax Receipt)
// Both the standalone builds (tools/build.mjs) and the Knowledge Hub embed
// (knowledge-hub/build-hub.mjs → inlineToolDoc) inline it, so no copy can drift.
// Same pattern as proposal-tool/tools/pricing-core.js.
//
// A tool supplies WHAT its process is (phases, steps, the answers that prune
// them); this file owns HOW a case behaves (storage, dialogs, the note, import,
// download, rendering). Fixing a case-tracker bug here fixes it everywhere —
// which is the whole reason it was extracted, after one tool accumulated eight
// separate dead-click and data-loss fixes that a second copy would have had to
// re-learn one at a time.
//
// NO DOM WORK HAPPENS ON LOAD. Everything is behind createTracker(cfg), so this
// file also loads in plain Node — which is what tools/selftest.mjs runs against.
// ============================================================================
(function (global) {
  "use strict";

  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  /* ======================================================================
     DIALOGS — why this exists instead of prompt() / confirm() / alert()

     The team reaches these tools through the published Knowledge Hub, and a
     published page runs inside a SANDBOXED iframe. A sandbox without the
     `allow-modals` keyword makes window.prompt / confirm / alert INERT:
     the browser logs "Ignored call to 'prompt()'. The document is sandboxed,
     and the 'allow-modals' keyword is not set.", returns null (prompt) or
     false (confirm), and carries on. Every caller here reads that as "the
     user cancelled", so the button appears to do nothing at all — no error,
     no dialog, no clue. That is exactly how "Track this as a case" died.
     A nested iframe can never re-grant a permission its parent lacks, so
     this cannot be fixed from the Hub's side; the tool must not call them.

     A native <dialog> opened with showModal() is NOT covered by that
     sandbox flag. It also renders in the top layer (no z-index, never
     clipped), traps focus, and closes on Esc for free.

     All three return a Promise so callers read in the same order they did
     with the blocking originals. Kept in .then() style to match the files.
     ====================================================================== */
  function closeDlg(d){
    if (d.open) d.close();
    d.remove();
  }
  // Still in the document AND actually rendered. `document.contains` alone is not
  // enough: closing a case HIDES #caseOne rather than emptying it, so the button we
  // came from is still "in the document" while being unfocusable — focusing it is a
  // silent no-op that leaves the user on <body>.
  function usable(el){ return !!(el && document.contains(el) && el.offsetParent !== null); }
  // Put focus back where it came from — but only AFTER the caller's .then() has run,
  // because that handler usually re-renders (renderOne/renderCases) and destroys the
  // button we opened from. Restoring before it left focus on a detached node, which the
  // browser resolves to <body>: a keyboard user lost their place and had to Tab from the
  // top. A timeout is a macrotask, so it lands after the promise callbacks (microtasks).
  function refocusAfter(restore){
    function apply(){
      // If the handler already put focus somewhere deliberate — "Track this as a case"
      // moves it to the Case tracker tab — leave it alone.
      var a = document.activeElement;
      if (a && a !== document.body && usable(a)) return;
      var el = usable(restore) ? restore
             : document.querySelector('.tab[aria-selected="true"]');   // the view is gone — land on its tab
      if (el && el.focus) { try { el.focus(); } catch(_){} }
    }
    // Run once after the caller's .then() (a macrotask beats those microtasks), then
    // again on the next frame: Chrome clears the focus of a removed element on its own
    // schedule, and that fixup lands AFTER the timeout, wiping a focus set there.
    // apply() is idempotent — the second pass sees a live activeElement and returns.
    setTimeout(function(){ apply(); if (global.requestAnimationFrame) global.requestAnimationFrame(apply); }, 0);
  }
  // opts: {title, body (HTML), ok, cancel, danger, single, input:{label, placeholder, value}}
  // Resolves to the typed string (input dialogs), true/false (confirm), or null on cancel.
  function openDlg(opts){
    return new Promise(function(resolve){
      var restore = document.activeElement;
      var d = document.createElement('dialog');
      d.className = 'dlg';
      var wantsInput = !!opts.input;
      d.innerHTML = '<form method="dialog"><div class="dx">'
        + '<h3>' + esc(opts.title) + '</h3>'
        + (opts.body || '')
        + (wantsInput
            ? '<label for="dlgIn">' + esc(opts.input.label) + '</label>'
              + '<input type="text" id="dlgIn" autocomplete="off" placeholder="'
              + esc(opts.input.placeholder || '') + '" value="' + esc(opts.input.value || '') + '">'
              + '<p class="derr" id="dlgErr" role="alert"></p>'
            : '')
        + '</div><div class="dbtns">'
        // A notice has one action; offering "Close" beside "Got it" is two buttons
        // that do the same thing.
        + (opts.single ? ''
            : '<button type="button" class="btn ghost sm" data-act="cancel">' + esc(opts.cancel || 'Cancel') + '</button>')
        + '<button type="button" class="btn ' + (opts.danger ? 'ghost sm danger' : 'cta sm') + '" data-act="ok">'
        + esc(opts.ok || 'OK') + '</button>'
        + '</div></form>';
      document.body.appendChild(d);

      var input = d.querySelector('#dlgIn'), errEl = d.querySelector('#dlgErr'), settled = false;
      function done(v){ if (settled) return; settled = true; closeDlg(d); resolve(v); refocusAfter(restore); }
      function accept(){
        if (!wantsInput) return done(true);
        var v = input.value.trim();
        // An empty reference used to be indistinguishable from a cancel. Say so instead.
        if (!v){ errEl.textContent = 'Type a reference first — a name, or a code.'; input.focus(); return; }
        done(v);
      }
      d.querySelector('[data-act="ok"]').addEventListener('click', accept);
      var cancelBtn = d.querySelector('[data-act="cancel"]');
      if (cancelBtn) cancelBtn.addEventListener('click', function(){ done(wantsInput ? null : false); });
      // Esc fires `cancel`, and <dialog> also emits `close` — settle once, as a cancel.
      d.addEventListener('cancel', function(e){ e.preventDefault(); done(wantsInput ? null : false); });
      d.addEventListener('close', function(){ done(wantsInput ? null : false); });
      if (input) input.addEventListener('keydown', function(e){
        if (e.key === 'Enter'){ e.preventDefault(); accept(); }
      });

      if (d.showModal) d.showModal();
      else {
        // Pre-<dialog> browser. Fall back to the natives — they still work in a
        // normal window, and this is the only case where they are reachable.
        d.remove();
        if (wantsInput){ var r = global.prompt(opts.title); return resolve(r && r.trim() ? r.trim() : null); }
        return resolve(global.confirm(opts.title));
      }
      if (input) { input.focus(); input.select(); }
      else d.querySelector('[data-act="ok"]').focus();
    });
  }
  function askText(opts){ return openDlg(opts); }
  function askConfirm(opts){ return openDlg(opts); }
  function sayNote(opts){
    // A one-button notice. Resolves when dismissed; callers rarely wait.
    return openDlg({ title: opts.title, body: opts.body, ok: opts.ok || 'Got it', single: true });
  }

  /* ---------------------------- shared helpers --------------------------- */
  function todayISO(){ var d = new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  function nowStamp(){ var d = new Date(); return todayISO()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
  function b64enc(o){ return btoa(unescape(encodeURIComponent(JSON.stringify(o)))); }
  function b64dec(s){ return JSON.parse(decodeURIComponent(escape(atob(s)))); }

  // Only ever hand a Double URL to an href. Anything else — another host, or a
  // javascript:/data: URL pasted in by accident or otherwise — is stored as typed but
  // never linked, so a bad paste can never become a live link on a client's case.
  // Parse the host rather than pattern-match the string: the regex this replaced,
  // /^https:\/\/[a-z0-9.-]*\bdoublehq\.com\//, let `evil-doublehq.com` through, because
  // `-` is a non-word character so \b matched right after it. URL() also settles
  // userinfo tricks (`https://doublehq.com@evil.com/` parses to host evil.com).
  function doubleLink(v){
    var u;
    try { u = new URL(String(v || '').trim()); } catch(e){ return ''; }
    if (u.protocol !== 'https:') return '';
    var h = u.hostname.toLowerCase();
    if (h !== 'doublehq.com' && h.slice(-13) !== '.doublehq.com') return '';
    return u.href;
  }

  // Double's own guidance is "keep bodies under ~7,500", and the 403 boundary has never
  // been bracketed tighter than 7,600–8,000. The body is also HTML once pasted, so the
  // real string is bigger than the plain text we can measure here. Warn before the cliff.
  var NOTE_LIMIT = 7000;
  var LOG_KEEP = 40;       // entries carried in the code; the readable list shows the last 12

  // Deterministic per-(iteration, field) mixer for the step-coverage sweep below.
  // It must be a hash, not a stride: ANY plain function of the counter alone leaves two
  // fields with the same number of options permanently correlated, because both reduce to
  // `i mod n`. The first version used `i >> (j % 8)`, which tied BTR's `premises` and
  // `regulator` together — so a step gated on "home-based AND unregulated" would never
  // have been generated, and would have shipped with no seed and no label. That is
  // precisely the failure the sweep exists to catch, so it cannot be sampled lazily.
  // No Math.random: the build has to be reproducible, and a flaky coverage check is worse
  // than none — it would pass on the machine that ships and fail on the one that reviews.
  function mix(i, j){
    var x = Math.imul(i + 1, 0x9E3779B1) ^ Math.imul(j + 1, 0x85EBCA77);
    x ^= x >>> 15; x = Math.imul(x, 0x2C1B3C6D);
    x ^= x >>> 12; x = Math.imul(x, 0x297A2D39);
    x ^= x >>> 15;
    return x >>> 0;
  }

  /* ======================================================================
     createTracker(cfg) — one tool's case tracker.

     cfg:
       storageKey      localStorage key, versioned  ('jk-itin-cases-v1')
       codeTag         marker for the pasteable block ('JKCASE1:')
       noteHeading     first line of the Double note ('ITIN APPLICATION')
       filePrefix      downloaded backup filename stem ('ITIN-case')
       phases          [[id, label], …] — render + note order
       buildSteps(a)   answers → [{id, ph, t, d}] — the tool's whole process
       seeds           [answers, …] reaching every step, for label rebuild on import
       sweepValues     {field: [values…]} swept to prove `seeds` misses nothing
       genericAnswers  answers used when the walkthrough was not completed
       answers()       the tool's current answers object
       walkComplete()  is the walkthrough fully answered?
       emptyBody       HTML for the "no cases open" panel (tool-specific wording)
       refPlaceholder  example reference in the naming dialog
       importIntro     HTML naming this tool's note + backup file
       onOpened()      called after a case is created from the preparation sheet
     ====================================================================== */
  function createTracker(cfg){
    var LSKEY = cfg.storageKey, CODETAG = cfg.codeTag, PHASES = cfg.phases;
    var cases = [], openCase = null, storageBroken = false, lastCard = 0;
    // Cases deleted in this window. Consulted by saveCases() so the cross-window merge
    // cannot resurrect them. Session-scoped on purpose: once the delete is written to
    // disk the tombstone has done its job, and a reload starts clean.
    var deletedKeys = Object.create(null);

    var $ = function(id){ return document.getElementById(id); };

    // Every step this tool can generate, for rebuilding labels on import — a saved case
    // stores ids, not text, so a step missing from here comes back as a bare id in the
    // wrong phase, and that mislabel is then written into the client's Double note.
    // The self-check below fails loudly if a new step is ever added without a seed shape
    // that reaches it; that is exactly how `birthcert` went missing.
    var ALLSTEPS = (function(){
      // Object.create(null): a step id of "toString" or "constructor" is inherited on a
      // bare {}, so it read as already-seen, skipped the gate, and came back from a note
      // with an undefined label written into the client's record.
      var seen = Object.create(null), out = [];
      cfg.seeds.forEach(function(a){ cfg.buildSteps(a).forEach(function(s){ if(!seen[s.id]){ seen[s.id]=1; out.push(s); } }); });
      return out;
    })();
    // Sweep the answer space and prove every reachable step id is in ALLSTEPS.
    // NOT run on load. It is a build-time assertion — tools/selftest.mjs calls it and
    // fails the build on any gap — and 5,000 buildSteps() calls cost ~55ms, which the
    // Hub was paying twice on every open for a check no user can act on. Kept here
    // rather than in the test so the rule travels with the engine that enforces it.
    function checkCoverage(){
      var known = Object.create(null); ALLSTEPS.forEach(function(s){ known[s.id] = 1; });
      var missing = Object.create(null), V = cfg.sweepValues || {}, keys = Object.keys(V);
      if (!keys.length) return [];
      for (var i = 0; i < 5000; i++){
        var a = {};
        keys.forEach(function(k, j){ a[k] = V[k][mix(i, j) % V[k].length]; });
        cfg.buildSteps(a).forEach(function(s){ if (!known[s.id]) missing[s.id] = 1; });
      }
      return Object.keys(missing);
    }

    /* ------------------------------ storage ------------------------------ */
    // A stored entry that is not a real case used to throw inside paintBadge() at load,
    // which aborted the whole script — the walkthrough and the reference tab went blank
    // too, with no recovery a user could perform. Validate every entry and keep going.
    function validCase(c){
      return c && typeof c === 'object' && typeof c.ref === 'string'
          && Array.isArray(c.steps) && Array.isArray(c.log)
          && c.steps.every(function(s){ return s && typeof s.id === 'string'; });
    }
    function caseKey(c){ return (c.ref || '') + '|' + (c.created || ''); }
    function loadCases(){
      var raw = [];
      try { raw = JSON.parse(localStorage.getItem(LSKEY) || '[]'); } catch(e){ raw = []; }
      if (!Array.isArray(raw)) raw = [];
      var good = raw.filter(validCase);
      if (good.length !== raw.length) warnStorage((raw.length - good.length) + ' stored item(s) were not readable as cases and have been ignored. Nothing was deleted — if a case is missing, reopen it from its note in Double.');
      cases = good;
    }
    // Two windows of a tool used to clobber each other: each held the whole array in
    // memory and wrote it wholesale. Merge against what is on disk at write time.
    function saveCases(){
      if (storageBroken) return;
      var mine = Object.create(null); cases.forEach(function(c){ mine[caseKey(c)] = true; });
      var merged = cases.slice();
      try {
        var disk = JSON.parse(localStorage.getItem(LSKEY) || '[]');
        // Carry unreadable entries through UNTOUCHED. loadCases() tells the user "Nothing
        // was deleted — if a case is missing, reopen it from its note in Double", and then
        // the very next tick or keystroke rewrote the store from the valid entries only
        // and destroyed exactly what the banner said was safe. Whatever those bytes are —
        // a half-written case, a future version's format, another tool's data — they are
        // not ours to discard, and keeping them costs nothing.
        if (Array.isArray(disk)) disk.filter(function(d){ return !validCase(d); }).forEach(function(d){ merged.push(d); });
        if (Array.isArray(disk)) disk.filter(validCase).forEach(function(d){
          // A case deleted in THIS window is absent from `cases` but still on disk, so the
          // merge below used to hand it straight back and delete never stuck — you reloaded
          // and the case was there again. Tombstones tell the two apart: absent-because-
          // deleted stays deleted, absent-because-another-window-made-it is still kept.
          if (!mine[caseKey(d)] && !deletedKeys[caseKey(d)]) merged.push(d);
        });
      } catch(e){}
      try { localStorage.setItem(LSKEY, JSON.stringify(merged)); }
      catch(e){
        storageBroken = true;
        warnStorage('This browser will not save cases (storage is full, or blocked in a private window). Your work is still on screen — copy the case note for Double now, or it will be lost when this page closes.');
      }
      paintBadge();
    }
    // One persistent banner, not an alert on every keystroke.
    function warnStorage(msg){
      var id = 'storageWarn', el = $(id);
      if (!el){
        el = document.createElement('div');
        el.id = id; el.className = 'flag err'; el.setAttribute('role','alert');
        el.style.cssText = 'margin:0 0 16px;border-radius:9px';
        var host = $('cases');
        if (host) host.insertBefore(el, host.firstChild);
      }
      el.innerHTML = '<span class="fl">Storage problem</span>' + esc(msg);
    }
    function progress(c){
      var t = c.steps.length, d = c.steps.filter(function(s){ return s.done; }).length;
      return { total:t, done:d, pct: t ? Math.round(d/t*100) : 0 };
    }
    function paintBadge(){
      var el = $('caseCount');
      if (!el) return;
      var open = cases.filter(function(c){ return progress(c).pct < 100; }).length;
      el.textContent = open; el.hidden = open === 0;
    }

    /* ------------------------- encode / decode --------------------------- */
    // The compact form stored in the Double note: ids + state only, never the answers.
    // `dl` (the client's Double link) is written only when set, so a case without one
    // encodes byte-for-byte as before and an older reader simply ignores the key.
    function encodeCase(c){
      var o = {
        v:1, r:c.ref, cr:c.created, up:c.updated, g:c.generic?1:0,
        s: c.steps.map(function(s){ return [s.id, s.done?1:0, s.date||'', s.note||'']; }),
        l: c.log.slice(-LOG_KEEP).map(function(e){ return [e.t, e.x]; })
      };
      if (c.dl) o.dl = c.dl;
      return CODETAG + b64enc(o);
    }
    function decodeCase(text){
      // lastIndexOf, not indexOf: if someone APPENDED a fresh block to the note instead of
      // replacing its contents — which the instruction warns against but people do — the
      // newest block is the one at the bottom, and taking the first one silently reopened
      // an older state of the case.
      var i = text.lastIndexOf(CODETAG);
      if (i === -1) return null;
      var tail = text.slice(i + CODETAG.length);
      // Two readings, tried in order, because the two failure modes pull opposite ways.
      // encodeCase() emits the block as ONE line, so the first line is the code and
      // anything under it is somebody's own text — a signature, a date, a "paid today".
      // Folding that in used to corrupt the payload and throw, and the error then told
      // the user to "paste the whole note, including the line at the very bottom", which
      // is exactly what they had just done: the durable copy became unopenable with no
      // way out. But a note that has been hard-wrapped in transit needs the opposite
      // treatment — every line joined. Try the strict reading first, then the forgiving
      // one, so trailing text is ignored without giving up on a wrapped block.
      // Grow the candidate one line at a time and take the FIRST that parses. encodeCase()
      // emits the block as one line, so line 1 alone is the normal case; a block that was
      // hard-wrapped in transit needs its lines rejoined; and a note that is BOTH wrapped
      // AND has somebody's own text under it — "paid the county today", a signature —
      // needs exactly the wrapped lines and none of the prose. Trying the two extremes
      // separately handled either fault alone and failed on the pair, which is the
      // likeliest note of all after three weeks in Double. Shortest-valid-prefix handles
      // all three, and a truncated prefix cannot pass: it has to survive base64, JSON.parse
      // and the version check.
      var lines = tail.split('\n'), o = null, err = null, acc = '';
      for (var t = 0; t < lines.length && t < 200; t++){
        acc += lines[t].replace(/[^A-Za-z0-9+/=]/g, '');
        try {
          var cand = b64dec(acc);
          if (cand && cand.v === 1){ o = cand; break; }
        } catch(e){ err = e; }
      }
      if (!o) throw err || new Error('unrecognised case code');
      // Rebuild labels from the current step catalogue; a code carries ids, not text.
      var all = Object.create(null); ALLSTEPS.forEach(function(s){ all[s.id] = s; });
      return {
        ref: o.r, created: o.cr, updated: o.up, generic: !!o.g,
        // Kept exactly as typed, valid or not — the field said "kept as text", and a
        // mistyped link that quietly vanished on reopen taught the next person nothing.
        // Safety does not depend on this: doubleLink() re-validates before anything
        // reaches an href, and esc() covers the value attribute.
        dl: typeof o.dl === 'string' ? o.dl : '',
        steps: o.s.map(function(a){
          // ph:'' — deliberately NOT a real phase. A step id this build does not know used
          // to be filed under the FIRST phase, so it rendered inside a genuine section with
          // its raw id as the label, and caseNoteText() then wrote "[x] brandnewstep" into
          // the client's Double note under INTAKE. An empty phase falls into the "Not in
          // any phase of this tool" bucket, which says where it came from instead.
          var meta = all[a[0]] || { id:a[0], ph:'', t:a[0], d:'' };
          return { id:a[0], ph:meta.ph, t:meta.t, d:meta.d, done:!!a[1], date:a[2]||'', note:a[3]||'' };
        }),
        log: o.l.map(function(a){ return { t:a[0], x:a[1] }; }),
        dirty: false
      };
    }
    function newCase(ref, steps){
      return { ref:ref, created:todayISO(), updated:todayISO(), dirty:true,
               steps: steps.map(function(s){ return {id:s.id, ph:s.ph, t:s.t, d:s.d, done:false, date:'', note:''}; }),
               log: [{ t:nowStamp(), x:'Case opened.' }] };
    }
    // Keep 11 originals and add the marker: the result is the 12 entries the button
    // promises, and `dropped` counts from 11 or the permanent marker in the client's
    // record names one fewer entry than it actually discarded.
    // dryRun answers "how many would go?" without touching the case.
    function trimLog(c, dryRun){
      if (c.log.length <= 12) return 0;
      var dropped = c.log.length - 11;
      if (!dryRun){
        c.log = c.log.slice(-11);
        c.log.push({ t: nowStamp(), x: dropped + ' older log entries trimmed so the note fits Double.' });
      }
      return dropped;
    }

    // No `quiet` flag: saveCases() repaints the badge itself, so the parameter this used
    // to take was inert — an option that looked like a decision nobody had made.
    // Resolve the case object that is CURRENTLY in `cases` and matches this one.
    // renderOne()'s handlers close over the case object that was open when they were
    // bound. A cross-window storage event reloads `cases` from disk with fresh objects —
    // and when the busy guard skips the re-render (the note block is open), those handlers
    // are left holding a detached twin. Then `cases.indexOf(c)` returns -1, and
    // `splice(-1, 1)` deletes the LAST case in the list: a different client's, silently,
    // while the one you asked to delete is written straight back. Match by key, never by
    // identity.
    function live(c){
      // Identity first. It is exact, and it is the only thing that stays correct if two
      // cases ever do share a key — which duplicate references would cause.
      if (cases.indexOf(c) >= 0) return c;
      var k = caseKey(c);
      for (var i = 0; i < cases.length; i++) if (caseKey(cases[i]) === k) return cases[i];
      return null;
    }

    function touch(c){ c.updated = todayISO(); c.dirty = true; saveCases(); }

    // The reference prompt is asked from two places and must read identically in both.
    // caseKey is ref + created date, so two cases named the same on the same day are
    // indistinguishable to the store, the tombstones and live(). Import already refuses to
    // duplicate a reference silently; creation must too.
    function refTaken(ref){
      for (var i = 0; i < cases.length; i++) if (cases[i].ref === ref) return true;
      return false;
    }
    function askCaseRef(){
      return askText({
        title: 'Name this case',
        body: '<p>A reference for this case — the client’s name, or a code if you prefer.</p>'
            + '<p style="color:var(--muted);font-size:13.5px">Cases are stored in this browser. The durable copy is the block you paste into the client’s case note in Double.</p>',
        input: { label: 'Case reference', placeholder: cfg.refPlaceholder },
        ok: 'Create the case'
      });
    }

    /* ------------------------------ rendering ---------------------------- */
    function renderCases(){
      var list = $('caseList'), one = $('caseOne'), imp = $('caseImport');
      imp.hidden = true;
      if (openCase){ list.hidden = true; one.hidden = false; renderOne(); return; }
      list.hidden = false; one.hidden = true;
      // Drop the note block when leaving a case. Nothing used to remove it — renderCases()
      // only hides #caseOne — so after one "Copy the case note for Double" followed by
      // "← All cases", the storage guard below saw it forever and cross-window refresh of
      // the LIST was dead for the rest of the session: the badge counted cases from
      // another tab while the visible list went stale, deleted cases stayed clickable and
      // new ones never appeared.
      var stale = $('noteBox'); if (stale) stale.remove();

      var dirty = cases.filter(function(c){ return c.dirty; }).length;
      var h = '<div class="cbar">'
        + '<button class="btn cta sm" id="newCase" type="button">New case</button>'
        + '<button class="btn ghost sm" id="importCase" type="button">Reopen a case</button>'
        + (dirty ? '<span class="pill-dirty">'+dirty+' case'+(dirty>1?'s':'')+' not yet copied to Double</span>' : '')
        + '</div>';

      if (!cases.length){
        h += '<div class="empty"><h3>No cases open</h3>' + cfg.emptyBody
          +  '<p style="font-size:13px">Cases live <b>in this browser only</b> — another computer, another browser or a cleared cache and they are gone. The copy that lasts, and that the rest of the firm can see, is the block you paste into the client’s running case note in <b>Double</b>. That note is also what you paste back into <b>“Reopen a case”</b> to carry on, here or on someone else’s machine. A downloaded <span class="typein">.txt</span> works the same way, but it only exists on the device that downloaded it.</p></div>';
        list.innerHTML = h; wireList(); return;
      }

      h += '<div class="clist">';
      cases.forEach(function(c, i){
        var p = progress(c);
        var next = c.steps.filter(function(s){ return !s.done; })[0];
        h += '<div class="ccard" data-i="'+i+'" role="button" tabindex="0">'
          +  '<div class="cr"><h4>'+esc(c.ref)+(c.generic?' <span class="pill-dirty">generic</span>':'')+'</h4><span class="cmeta">'+p.done+' / '+p.total+' done'
          +  (c.dirty ? ' <span class="pill-dirty">not copied</span>' : '')
          +  (p.pct===100 ? ' <span class="pill-done">complete</span>' : '')+'</span></div>'
          +  '<div class="bar-wrap"><div class="bar-fill'+(p.pct===100?' done':'')+'" style="width:'+p.pct+'%"></div></div>'
          +  '<p class="cnext">'+(next ? 'Next: <b>'+esc(next.t)+'</b>' : 'Everything ticked.')+'</p>'
          +  '<p class="cnext" style="color:var(--muted);font-size:12.5px">Opened '+esc(c.created)+' · last touched '+esc(c.updated)+'</p>'
          +  '</div>';
      });
      h += '</div>';
      list.innerHTML = h; wireList();
    }

    function wireList(){
      var nb = $('newCase'); if (nb) nb.addEventListener('click', promptNewCase);
      var ib = $('importCase'); if (ib) ib.addEventListener('click', showImport);
      [].forEach.call(document.querySelectorAll('.ccard'), function(el){
        var go = function(){
          lastCard = +el.dataset.i;
          openCase = cases[lastCard]; renderCases();
          var hd = document.querySelector('#caseOne h2');
          if (hd){ hd.tabIndex = -1; hd.focus(); }
          global.scrollTo({top:0,behavior:'smooth'});
        };
        el.addEventListener('click', go);
        el.addEventListener('keydown', function(e){ if (e.key==='Enter'||e.key===' '){ e.preventDefault(); go(); } });
      });
    }

    // A half-answered walkthrough used to pass a loose `A.role && A.pass` gate and produce
    // a confident but silently wrong "tailored" list. Only a COMPLETE walkthrough tailors a
    // case; anything else gets the generic checklist, and says so on the card and in the note.
    function promptNewCase(){
      var tailored = cfg.walkComplete();
      // Two dialogs in sequence: say what the checklist will be built FROM, then ask for
      // the reference. Chained so the second waits for the first.
      //
      // Both branches warn, and the tailored one is the dangerous branch. "New case" reads
      // whatever answers are still loaded on the Walkthrough tab — so finishing the
      // walkthrough for client A and then opening a New case for client B produced B's
      // case carrying A's pruned steps, with no "generic" pill and nothing on screen
      // saying so. It then went into B's Double note and read as fact. Silence was the
      // bug: the answers are invisible from this tab, so the tool has to name them.
      var gate = tailored ? askConfirm({
        title: 'Build this case from the walkthrough on screen?',
        body: '<p>The <b>Walkthrough</b> tab is fully answered, so this case will be pruned to <b>those</b> answers.</p>'
            + '<p style="color:var(--muted);font-size:13.5px">That is right if they describe this client. If they belong to <b>someone else</b> — you filled the walkthrough in for another client earlier — cancel, press <b>“Start over”</b> on the Walkthrough tab and answer it for this one, or the checklist will be the wrong one under the right name.</p>',
        ok: 'Yes — use those answers', cancel: 'Cancel'
      }) : askConfirm({
        title: 'This case will not be tailored',
        body: '<p>The walkthrough has not been completed, so this case will use the <b>generic checklist</b> — not one pruned to a particular client.</p>'
            + '<p>For a tailored checklist, cancel, finish the <b>Walkthrough</b> tab, and press “Track this as a case” on the preparation sheet.</p>',
        ok: 'Create a generic case', cancel: 'Cancel'
      });
      gate.then(function(go){
        if (!go) return;
        return askCaseRef().then(function(ref){
          if (!ref) return;
          if (refTaken(ref)) return sayNote({
            title: 'There is already a case called “' + ref + '”',
            body: '<p>Two cases with the same reference cannot be told apart — by this tool, or by whoever reads the note in Double.</p>'
                + '<p>Open the existing one from the case list, or press <b>New case</b> again and give this one a name of its own.</p>' });
          var steps = cfg.buildSteps(tailored ? cfg.answers() : cfg.genericAnswers);
          var c = newCase(ref, steps);
          c.generic = !tailored;
          if (c.generic) c.log.push({ t: nowStamp(), x: 'Generic checklist — not tailored to this client.' });
          cases.unshift(c);
          saveCases(); openCase = cases[0]; renderCases();
        });
      });
    }

    // Update ONLY the link chip and its warning, in place.
    // This started life as renderOne() on blur, which was a bad trade: blur fires on
    // mousedown, so the redraw detached whatever you were clicking and the click never
    // landed. The first press of "Copy the case note", a checkbox, Delete or Add-to-log
    // all did nothing — and the log case silently discarded the text you had typed.
    // Never redraw a live view from a field's own handler; touch the parts that changed.
    function syncDoubleLink(){
      var c = openCase, box = $('dblinkBox');
      if (!c || !box) return;
      var dl = doubleLink(c.dl), a = box.querySelector('a'), warn = $('dlWarn');
      if (dl){
        if (!a){
          a = document.createElement('a');
          a.className = 'btn ghost sm'; a.target = '_blank'; a.rel = 'noopener noreferrer';
          a.textContent = 'Open in Double ↗';
          box.appendChild(a);
        }
        a.href = dl;
      } else if (a) a.remove();
      if (warn) warn.hidden = !(c.dl && !dl);
    }

    function renderOne(){
      var c = openCase, p = progress(c), one = $('caseOne');
      // Ticking a step, or adding a log entry, redraws this whole panel — which destroys
      // the control the user is standing on and drops focus to <body>, so a keyboard user
      // had to Tab from the top of the page again for EVERY step. The ids survive the
      // redraw (checkboxes are s_<index>, the log field is #logText), so remember and
      // restore. Same care refocusAfter() takes after a dialog.
      var wasFocused = document.activeElement && document.activeElement.id;
      // And carry the UNSENT log text across. Typing a log entry, then ticking a
      // checkbox before pressing Add, silently threw the sentence away — a redraw
      // destroying work the user could see is the same fault as the blur-redraw that
      // ate it on mousedown, one layer up.
      var pendingLog = $('logText') ? $('logText').value : '';
      var h = '<div class="cbar"><button class="btn ghost sm" id="backCases" type="button">← All cases</button>'
            + '<button class="btn cta sm" id="copyNote" type="button">Copy the case note for Double</button>'
            + '<button class="btn ghost sm" id="dlCase" type="button">Download a backup file</button>'
            + '<button class="btn ghost sm danger" id="delCase" type="button">Delete</button>'
            + (c.dirty ? '<span class="pill-dirty">changes not yet copied</span>' : '')
            // role=status: this line exists BECAUSE the download outcome is otherwise
            // unobservable, so it has to reach a screen reader too. Matches #copyMsg.
            + '<span class="note-inline" id="dlMsg" role="status" aria-live="polite"></span>'
            + '</div>';
      h += '<h2 style="font-family:var(--serif);font-size:26px;color:var(--ink);margin:0 0 4px">'+esc(c.ref)+'</h2>';
      h += '<p style="color:var(--muted);font-size:13.5px;margin:0 0 6px">Opened '+esc(c.created)+' · last touched '+esc(c.updated)+' · <b>'+p.done+' of '+p.total+'</b> done</p>';
      h += '<div class="bar-wrap" style="margin-bottom:18px"><div class="bar-fill'+(p.pct===100?' done':'')+'" style="width:'+p.pct+'%"></div></div>';

      // Where this client lives in Double. The note is still copied and pasted by hand —
      // this only removes the "now go find the client" step, which is the part people
      // actually lose time on. The URL is SHOWN as text as well as linked: inside the
      // published viewer a click may be blocked, and a link you can read is still a link
      // you can copy. rel=noopener because this opens a different origin.
      // No aria-label: the visible <label for> already names the field, and overriding it
      // with different words breaks "label in name" for anyone driving this by voice.
      var dl = doubleLink(c.dl);
      h += '<div class="dblink" id="dblinkBox">'
        +  '<label class="fl" for="dlField">This client in Double</label>'
        +  '<input type="text" id="dlField" data-dlink="1" value="'+esc(c.dl||'')+'" '
        +  'placeholder="Paste the client’s Double page link — https://app.doublehq.com/…">'
        +  (dl
            ? '<a class="btn ghost sm" href="'+esc(dl)+'" target="_blank" rel="noopener noreferrer">Open in Double ↗</a>'
            : '')
        +  '</div>';
      h += '<p class="derr" id="dlWarn" role="alert" style="margin:-6px 0 14px"'+((c.dl && !dl)?'':' hidden')+'>'
        +  'That is not a Double link, so it is kept as text but not opened. A Double link is on '
        +  '<span class="typein">doublehq.com</span> and starts with <span class="typein">https://</span></p>';
      if (dl) h += '<p style="color:var(--muted);font-size:12.5px;margin:-6px 0 14px">Goes in the case note too, so whoever picks this up lands on the right client.</p>';

      PHASES.forEach(function(ph){
        var steps = c.steps.filter(function(s){ return s.ph === ph[0]; });
        if (!steps.length) return;
        var d = steps.filter(function(s){ return s.done; }).length;
        h += '<div class="phase"><h4><span>'+esc(ph[1])+'</span><span>'+d+'/'+steps.length+'</span></h4>';
        steps.forEach(function(s){
          var idx = c.steps.indexOf(s);
          h += '<div class="step'+(s.done?' on':'')+'">'
            +  '<input type="checkbox" id="s_'+idx+'" data-step="'+idx+'"'+(s.done?' checked':'')+' aria-label="'+esc(s.t)+'">'
            +  '<div class="sx"><label class="st" for="s_'+idx+'">'+esc(s.t)+'</label>'
            +  (s.d ? '<div class="sd">'+esc(s.d)+'</div>' : '')
            +  (s.done && s.date ? '<span class="sstamp">✓ '+esc(s.date)+'</span>' : '')
            +  '<input class="snote" type="text" data-note="'+idx+'" value="'+esc(s.note||'')+'" aria-label="Note for: '+esc(s.t)+'" placeholder="Note — e.g. who has it, what is waiting, a date">'
            +  '</div></div>';
        });
        h += '</div>';
      });
      // A step whose phase matches none of the tool's phases would otherwise render
      // NOWHERE — silently absent from the checklist someone is working from, and absent
      // from the note they paste into Double, with nothing to notice. It can arrive from
      // an older or newer version of a tool, or a hand-edited note. Show it, and say why
      // it is here rather than pretending it belongs to a phase we guessed.
      var known = Object.create(null); PHASES.forEach(function(ph){ known[ph[0]] = 1; });
      var orphans = c.steps.filter(function(s){ return !known[s.ph]; });
      if (orphans.length){
        h += '<div class="phase"><h4><span>Not in any phase of this tool</span><span>'
          +  orphans.filter(function(s){ return s.done; }).length + '/' + orphans.length + '</span></h4>';
        h += '<p style="font-size:13px;color:var(--muted);margin:0 0 10px">These came from a case built by a different version of this tool. They are kept and still count.</p>';
        orphans.forEach(function(s){
          var idx = c.steps.indexOf(s);
          h += '<div class="step'+(s.done?' on':'')+'">'
            +  '<input type="checkbox" id="s_'+idx+'" data-step="'+idx+'"'+(s.done?' checked':'')+' aria-label="'+esc(s.t)+'">'
            +  '<div class="sx"><label class="st" for="s_'+idx+'">'+esc(s.t)+'</label>'
            +  (s.d ? '<div class="sd">'+esc(s.d)+'</div>' : '')
            +  (s.done && s.date ? '<span class="sstamp">✓ '+esc(s.date)+'</span>' : '')
            +  '<input class="snote" type="text" data-note="'+idx+'" value="'+esc(s.note||'')+'" aria-label="Note for: '+esc(s.t)+'" placeholder="Note — e.g. who has it, what is waiting, a date">'
            +  '</div></div>';
        });
        h += '</div>';
      }

      h += '<div class="logbox"><h4>Case log</h4>';
      if (!c.log.length) h += '<p style="color:var(--muted);font-size:14px">Nothing logged yet.</p>';
      c.log.slice().reverse().forEach(function(e){
        h += '<div class="logentry"><span class="lt">'+esc(e.t)+'</span>'+esc(e.x)+'</div>';
      });
      h += '<div class="logadd"><input type="text" id="logText" placeholder="What happened — “documents collected”, “called them, still processing”…"><button class="btn ghost sm" id="logAdd" type="button">Add</button></div></div>';

      one.innerHTML = h;

      $('backCases').addEventListener('click', function(){
        openCase = null; renderCases();
        var card = document.querySelector('.ccard[data-i="'+lastCard+'"]') || $('newCase');
        if (card) card.focus();
      });
      $('delCase').addEventListener('click', function(){
        var cur = live(c) || c;
        var warn = cur.dirty
          ? '<p>This case has changes that have <b>not been copied to Double</b>. Deleting it loses them for good — there is nothing to reopen it from.</p>'
          : '<p>You last copied this case to Double, so you can reopen it from that note.</p>';
        askConfirm({
          title: 'Delete “' + cur.ref + '”?',
          body: warn, ok: 'Delete the case', cancel: 'Keep it', danger: true
        }).then(function(go){
          if (!go) return;
          var target = live(c) || cur;
          deletedKeys[caseKey(target)] = true;            // or the merge in saveCases() hands it back
          var at = cases.indexOf(target);
          if (at >= 0) cases.splice(at, 1);               // never splice(-1) — that deletes the last case
          saveCases(); openCase = null; renderCases();
        });
      });
      $('copyNote').addEventListener('click', function(){ showNote(live(c) || c); });
      $('dlCase').addEventListener('click', function(){ downloadCase(live(c) || c, $('dlMsg')); });
      $('logAdd').addEventListener('click', function(){
        var lt = $('logText'), v = lt.value.trim(); if (!v) return;
        lt.value = '';                    // or the pending-text restore above hands it back
        var cur = live(c) || c;
        cur.log.push({ t: nowStamp(), x: v }); touch(cur); renderOne();
      });
      $('logText').addEventListener('keydown', function(e){
        if (e.key === 'Enter'){ e.preventDefault(); $('logAdd').click(); }
      });

      if (pendingLog){
        var lt = $('logText');
        if (lt) lt.value = pendingLog;
      }
      if (wasFocused){
        var back = $(wasFocused);
        if (back && back.focus){ try { back.focus(); } catch(_){} }
      }
    }

    /* #caseOne survives every render, so binding here once is the only safe place. Binding
       inside renderOne() stacked a new pair of listeners on every redraw, each closing over
       whichever case was open at the time — so ticking one client's step also ticked a
       previously-opened client's, and log entries doubled with every render. Resolve the
       case from openCase at event time instead of capturing it. */
    function bindCaseEditingOnce(){
      var one = $('caseOne');
      one.addEventListener('change', function(e){
        var c = openCase, t = e.target;
        if (!c || t.dataset.step === undefined) return;
        var s = c.steps[+t.dataset.step];
        if (!s) return;
        s.done = t.checked; s.date = t.checked ? todayISO() : '';
        c.log.push({ t: nowStamp(), x: (t.checked ? '✓ ' : '↺ ') + s.t });
        touch(c); renderOne();
      });
      one.addEventListener('input', function(e){
        var c = openCase, t = e.target;
        if (!c) return;
        if (t.dataset.dlink !== undefined){ c.dl = t.value.trim(); touch(c); syncDoubleLink(); return; }
        if (t.dataset.note === undefined) return;
        var s = c.steps[+t.dataset.note];
        if (s){ s.note = t.value; touch(c); }
      });
    }

    /* ---------------- the Double note (the durable copy) ----------------- */
    function caseNoteText(c){
      var p = progress(c), out = [];
      out.push(cfg.noteHeading + ' — ' + c.ref);
      out.push('Status: ' + p.done + ' of ' + p.total + ' steps done (' + p.pct + '%) · opened ' + c.created + ' · updated ' + c.updated);
      if (doubleLink(c.dl)) out.push('Client in Double: ' + c.dl);
      if (c.generic) out.push('NOTE: generic checklist — not pruned to this client. Re-run the walkthrough for a tailored one.');
      out.push('');
      PHASES.forEach(function(ph){
        var steps = c.steps.filter(function(s){ return s.ph === ph[0]; });
        if (!steps.length) return;
        out.push(ph[1].toUpperCase());
        steps.forEach(function(s){
          out.push('  [' + (s.done ? 'x' : ' ') + '] ' + s.t + (s.done && s.date ? '  (' + s.date + ')' : '') + (s.note ? '  — ' + s.note : ''));
        });
        out.push('');
      });
      var knownPh = Object.create(null); PHASES.forEach(function(ph){ knownPh[ph[0]] = 1; });
      var loose = c.steps.filter(function(s){ return !knownPh[s.ph]; });
      if (loose.length){
        out.push('NOT IN ANY PHASE OF THIS TOOL (from an older or newer version)');
        loose.forEach(function(s){
          out.push('  [' + (s.done ? 'x' : ' ') + '] ' + s.t + (s.done && s.date ? '  (' + s.date + ')' : '') + (s.note ? '  — ' + s.note : ''));
        });
        out.push('');
      }
      var pend = c.steps.filter(function(s){ return !s.done; });
      out.push('NEXT: ' + (pend.length ? pend[0].t : 'nothing outstanding.'));
      if (c.log.length){
        out.push('');
        out.push('LOG');
        c.log.slice(-12).forEach(function(e){ out.push('  ' + e.t + ' — ' + e.x); });
      }
      out.push('');
      out.push('--- do not edit below: this is what lets the walkthrough reopen the case ---');
      out.push(encodeCase(c));
      return out.join('\n');
    }
    function showNote(c){
      var txt = caseNoteText(c), one = $('caseOne');
      var over = txt.length > NOTE_LIMIT;
      var box = document.createElement('div');
      box.className = 'logbox'; box.style.marginTop = '18px';
      box.innerHTML = '<h4>Paste this into the client’s running case note in Double</h4>'
        + '<p style="font-size:13.5px;color:var(--muted);margin:0 0 10px">Replace the note’s contents — one note per case, rewritten in place, never a second note. The block at the bottom is what lets you reopen this case here or hand it to someone else.</p>'
        + '<textarea class="paste" id="noteOut" readonly rows="12"></textarea>'
        + '<div class="meter'+(over?' err':(txt.length>NOTE_LIMIT*0.8?' warn':''))+'" id="meter">'
        + txt.length.toLocaleString() + ' characters — Double blocks a note body around 8,000 and returns an error rather than trimming it.'
        + (over ? ' <b>Too long: trim the older log entries before pasting.</b>' : '') + '</div>'
        + '<div class="cbar" style="margin-top:12px"><button class="btn cta sm" id="doCopy" type="button">Copy to clipboard</button>'
        + '<button class="btn ghost sm" id="didPaste" type="button" hidden>I have pasted it into Double</button>'
        + (over ? '<button class="btn ghost sm" id="trimLog" type="button">Trim the log to the last 12</button>' : '')
        + '<span class="note-inline" id="copyMsg" role="status" aria-live="polite"></span></div>';
      var old = $('noteBox'); if (old) old.remove();
      box.id = 'noteBox'; one.appendChild(box);
      $('noteOut').value = txt;
      $('doCopy').addEventListener('click', function(){
        var ta = $('noteOut');
        ta.select(); ta.setSelectionRange(0, txt.length);
        var ok = false;
        try { ok = document.execCommand('copy'); } catch(e){}
        if (navigator.clipboard && navigator.clipboard.writeText){
          // The rejection branch has to honour `ok`. In the published Hub the tool runs in
          // a sandboxed iframe with no clipboard-write permission, so writeText REJECTS
          // while the execCommand above has already copied the text successfully. Doing
          // nothing there left no message and never revealed "I have pasted it into
          // Double" — so the case's "not yet copied" flag could never be cleared, and the
          // delete dialog then warned that copied work would be lost. The copy worked;
          // only the second route failed.
          navigator.clipboard.writeText(txt).then(marked, function(){
            if (ok) marked(); else msg('Select the text above and copy it manually.');
          });
        } else if (ok){ marked(); } else { msg('Select the text above and copy it manually.'); }
        // Do NOT re-render here: a full redraw would destroy the very block the user is
        // about to paste from, and they may want to copy it again. Update state in place.
        // Copying is not pasting. Clearing the flag here would tell a user who copied,
        // got distracted and never pasted that their case is safe — the exact failure the
        // warning exists to prevent. They confirm the paste themselves.
        function marked(){
          msg('Copied. Now paste it into the client’s case note in Double.');
          reveal();
        }
        // The confirm button has to appear on the FAILURE path too. Someone told to select
        // the text and copy it by hand can still paste it into Double perfectly well — but
        // with the button hidden, the case stayed flagged "not yet copied" forever, and the
        // delete dialog then warned that work already safely in Double would be lost.
        // Same class of bug as the clipboard-rejection branch above.
        function reveal(){ var btn = $('didPaste'); if (btn) btn.hidden = false; }
        function msg(m){ var el = $('copyMsg'); if (el) el.textContent = m; reveal(); }
      });
      var dp = $('didPaste');
      if (dp) dp.addEventListener('click', function(){
        // Same stale-closure trap: clearing `dirty` on a detached twin left the real case
        // still flagged "not yet copied", so the delete dialog kept warning falsely.
        (live(c) || c).dirty = false; saveCases(); paintBadge();
        [].forEach.call(document.querySelectorAll('#caseOne .pill-dirty'), function(el){ el.remove(); });
        dp.hidden = true;
        $('copyMsg').textContent = 'Marked as saved to Double.';
      });
      var tl = $('trimLog');
      if (tl) tl.addEventListener('click', function(){
        askConfirm({
          title: 'Drop all but the last 12 log entries?',
          body: '<p>The checklist, its dates and the per-step notes are <b>untouched</b> — only the log history is shortened, so the note fits Double.</p>',
          ok: 'Trim the log', cancel: 'Cancel', danger: true
        }).then(function(go){
          if (!go) return;
          // With 12 or fewer entries there is nothing to drop, and pushing the "N trimmed"
          // marker anyway made an already-too-long note LONGER — while telling the user
          // their problem had been dealt with. The length is coming from the step notes
          // instead, so say that: it is the only thing they can actually shorten.
          // showNote() is precisely the state in which the storage handler skips its
          // re-render, so this closure is the likeliest of all to hold a detached twin —
          // and a trim applied to one is shown on screen and never saved.
          var cur = live(c) || c;
          var dropped = trimLog(cur, true);   // dry run: how many WOULD go
          if (!dropped){
            sayNote({ title: 'The log is already short',
              body: '<p>There are only ' + cur.log.length + ' log entries, so trimming them frees nothing.</p>'
                  + '<p>The length is coming from the <b>per-step notes</b>. Shorten the longest of those, or paste this into Double in two parts — <b>Part 1</b> and <b>Part 2</b> — keeping the block at the very bottom of the last one.</p>' });
            return;
          }
          trimLog(cur);
          touch(cur); renderOne(); showNote(cur);
        });
      });
      box.scrollIntoView({behavior:'smooth', block:'nearest'});
    }

    /* ------------------------------ download ----------------------------- */
    // The Artifact runtime, if we are running inside one. These tools are embedded in
    // the Hub as a nested srcdoc iframe, so `window.claude` is injected on an ANCESTOR
    // document, not ours — walk up and read it through try/catch, since a cross-origin
    // ancestor throws on access. Its presence is also the signal that we are sandboxed.
    function claudeDownloads(){
      var w = global;
      for (var i = 0; i < 4 && w; i++){
        try { if (w.claude && w.claude.downloads && w.claude.downloads.save) return w.claude.downloads; }
        catch(e){ /* cross-origin ancestor — stop looking up this chain */ break; }
        if (w === w.parent) break;
        w = w.parent;
      }
      return null;
    }
    // The download used to say only "Saved as …", which left the person holding a file
    // and no idea what it was for — Lilian downloaded one and asked how to load it back.
    // Say what it is for, and keep pointing at the Double note as the firm's copy.
    function savedMsg(name){
      return 'Saved ' + name + ' to your device. To continue later, paste its contents into '
           + '“Reopen a case”. The copy the whole firm can see is still the Double note.';
    }
    // A blob download works when the page is opened as a real file. Inside the published
    // viewer the sandbox blocks <a download> — and, crucially, blocks it WITHOUT THROWING,
    // so a bare catch never runs and the button is a silent dead click in the one place
    // the team actually uses it. `.txt` is on the runtime's filename allowlist, so the
    // capability route works. When neither route can be confirmed we say so rather than
    // leaving a mute button.
    function downloadCase(c, msgEl){
      var name = cfg.filePrefix + '-' + c.ref.replace(/[^A-Za-z0-9._-]+/g,'-') + '-' + todayISO() + '.txt';
      var text = caseNoteText(c);
      function say(m){ if (msgEl) msgEl.textContent = m; }
      function blocked(){
        sayNote({ title: 'This viewer would not save the file',
          body: '<p>Use <b>“Copy the case note for Double”</b> instead — that is the durable copy anyway.</p>' });
      }
      var rt = claudeDownloads();
      if (rt){
        // save() returns a PROMISE. A refusal rejects rather than throwing, so a bare
        // try/catch reported "Saved as …" for a file that was never written — the same
        // silent lie as the blocked <a download> this branch set out to kill, just moved
        // one branch over. Wait for the promise before claiming anything. Mirrors
        // build-hub.mjs's saveFile, including respecting an explicit decline.
        var p;
        try { p = rt.save({ filename: name, data: text }); }
        catch(e){ blocked(); return; }
        if (p && p.then){
          p.then(function(){ say(savedMsg(name)); },
                 function(err){
                   if (err && err.code === 'declined'){ say('Save cancelled.'); return; }
                   say(''); blocked();
                 });
        } else { say(savedMsg(name)); }
        return;
      }
      try {
        var blob = new Blob([text], {type:'text/plain'});
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;
        document.body.appendChild(a); a.click();
        setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      } catch(e){ blocked(); return; }
      // A blocked <a download> throws NOTHING, so we cannot know whether a file appeared.
      // Never guess and never stay mute: state both outcomes in one line. Inline rather
      // than a modal, because on a normal browser the download did just work.
      // Both outcomes need an action the person can actually take. Telling someone whose
      // download was blocked to "paste its contents" points at a file that does not exist,
      // so the blocked half has to carry its own remedy.
      say('Saved ' + name + ' to your device — to continue later, paste its contents into '
        + '“Reopen a case”. If no file appeared, this viewer blocked the download: use '
        + '“Copy the case note for Double” instead. Either way, the Double note is the copy '
        + 'the whole firm can see.');
    }

    /* ------------------------------- import ------------------------------ */
    function showImport(){
      var imp = $('caseImport');
      $('caseList').hidden = true;
      imp.hidden = false;
      imp.innerHTML = '<div class="cbar"><button class="btn ghost sm" id="impBack" type="button">← All cases</button></div>'
        + '<div class="logbox"><h4>Reopen a case</h4>'
        + '<p style="font-size:14px;color:var(--muted);margin:0 0 6px">Paste in <b>either one</b> — both carry the same case:</p>'
        // .plain, not .tick — tick draws an empty checkbox, and these are two alternatives
        // to choose between, not a list of things to do.
        + '<ul class="plain" style="font-size:14px;margin:0 0 10px">' + cfg.importIntro + '</ul>'
        + '<p style="font-size:13.5px;color:var(--muted);margin:0 0 10px">The tool reads the <span class="typein">'+esc(CODETAG)+'</span> line at the bottom, so pasting the whole thing is fine — and pasting only that last line works too.</p>'
        + '<textarea class="paste" id="impText" placeholder="Paste the case note, or the contents of the downloaded .txt file…"></textarea>'
        + '<div class="cbar" style="margin-top:12px"><button class="btn cta sm" id="impGo" type="button">Open the case</button><span class="note-inline" id="impMsg"></span></div></div>';
      $('impBack').addEventListener('click', function(){ imp.hidden=true; renderCases(); });
      $('impGo').addEventListener('click', function(){
        var raw = $('impText').value, msg = $('impMsg');
        if (!raw.trim()){ msg.textContent = 'Nothing pasted.'; return; }
        var c;
        try { c = decodeCase(raw); } catch(e){ msg.textContent = 'That code could not be read — paste the whole note, including the line at the very bottom.'; return; }
        if (!c){ msg.textContent = 'No case code found. Make sure you copied the whole note, including the last line.'; return; }
        var existing = cases.filter(function(x){ return x.ref === c.ref; })[0];
        var gate = existing ? askConfirm({
          title: '“' + c.ref + '” is already open here',
          body: '<p>A case with that reference is already stored in this browser. Replace it with the pasted version?</p>'
              + '<p style="color:var(--muted);font-size:13.5px">The pasted note wins — anything ticked here since the note was written is lost.</p>',
          ok: 'Replace it', cancel: 'Keep what is here', danger: true
        }) : Promise.resolve(true);
        gate.then(function(go){
          if (!go) return;
          // Same trap as delete: a replaced case whose `created` differs from the pasted
          // one has a different caseKey, so the merge would keep BOTH. Tombstone it.
          if (existing){ deletedKeys[caseKey(existing)] = true; cases.splice(cases.indexOf(existing), 1); }
          cases.unshift(c); saveCases();
          imp.hidden = true; openCase = cases[0]; renderCases();
        });
      });
    }

    /* ------------------------ create from the sheet ---------------------- */
    // Turning the preparation sheet into a tracked case is the whole point of building
    // it — the case then carries only the steps this client actually needs.
    function trackCurrent(){
      askCaseRef().then(function(ref){
        if (!ref) return;                       // cancelled — askCaseRef rejects empties itself
        if (refTaken(ref)) return sayNote({
          title: 'There is already a case called “' + ref + '”',
          body: '<p>Two cases with the same reference cannot be told apart — by this tool, or by whoever reads the note in Double.</p>'
              + '<p>Open the existing one from the case list, or press <b>“Track this as a case”</b> again and give this one a name of its own.</p>' });
        cases.unshift(newCase(ref, cfg.buildSteps(cfg.answers())));
        saveCases(); openCase = cases[0];
        if (cfg.onOpened) cfg.onOpened();
        global.scrollTo({top:0,behavior:'smooth'});
      });
    }

    /* ------------------------------- start ------------------------------- */
    function start(){
      bindCaseEditingOnce();
      // Another window changed the store — pick it up rather than overwrite it later.
      global.addEventListener('storage', function(e){
        if (e.key !== LSKEY) return;
        var openRef = openCase ? caseKey(openCase) : null;
        loadCases();
        openCase = openRef ? cases.filter(function(c){ return caseKey(c) === openRef; })[0] || null : null;
        // Never redraw over the import panel. renderCases() hides #caseImport, so a note
        // half-pasted into "Reopen a case" was silently thrown away the moment another tab
        // ticked a step — the user watching THIS tab saw their textarea vanish with no
        // explanation and nothing to undo. The store is already reloaded above; the badge
        // is enough until they finish, and importing re-renders anyway.
        // Do not redraw over anything the user is mid-way through. The import panel is
        // one; the open "Copy the case note" block is the other — it is the very text
        // they are about to paste into Double, and they may want to copy it twice.
        var nb = $('noteBox');
        var busy = !$('caseImport').hidden || !!(nb && nb.offsetParent !== null);
        // …unless the case on screen no longer EXISTS. Both delegated handlers early-return
        // on a null openCase, so skipping the redraw here left a panel that still looked
        // live while every tick, step note and link edit went nowhere. Losing an open note
        // block is a nuisance; silently discarding someone's work is not a trade.
        var vanished = !openCase && !!openRef;
        if (!$('cases').hidden && (!busy || vanished)) renderCases();
        if (vanished) warnStorage('The case open here was deleted in another window, so it has been closed. Anything ticked here since is gone — reopen it from its note in Double if you need it back.');
        paintBadge();
      });
      loadCases();
      paintBadge();
    }

    return {
      start: start, render: renderCases, paintBadge: paintBadge, trackCurrent: trackCurrent,
      // Exposed for tools/selftest.mjs — pure, no DOM.
      _internals: { encodeCase: encodeCase, decodeCase: decodeCase, newCase: newCase,
                    progress: progress, allSteps: ALLSTEPS, checkCoverage: checkCoverage, trimLog: trimLog,
                    caseNoteText: caseNoteText, validCase: validCase }
    };
  }

  global.JKCase = {
    esc: esc, openDlg: openDlg, askText: askText, askConfirm: askConfirm, sayNote: sayNote,
    doubleLink: doubleLink, todayISO: todayISO, nowStamp: nowStamp,
    NOTE_LIMIT: NOTE_LIMIT, LOG_KEEP: LOG_KEEP, createTracker: createTracker
  };
})(typeof window !== "undefined" ? window : this);
