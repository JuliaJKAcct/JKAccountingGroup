/* ============================================================
   JK Accounting Group — Foreign Owner's US Business Playbook
   Shared behaviors for the landing page + guide.
   Enhancement only — every page renders and reads without JS.
   Based on lead-magnets.js, extended with guide TOC scrollspy,
   reading progress, and a persistent (localStorage) checklist.
   ============================================================ */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Scroll reveal (content visible by default) ----
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // ---- Sticky mobile CTA: hide scrolling down, show scrolling up ----
  var sticky = document.querySelector(".sticky-cta");
  if (sticky) {
    document.body.classList.add("has-sticky-cta");
    var lastY = window.scrollY;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y > lastY && y > 240) sticky.classList.add("is-hidden");
      else sticky.classList.remove("is-hidden");
      lastY = y;
    }, { passive: true });
  }

  // ---- Smooth in-page anchors ----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      // close the mobile TOC after a jump
      var m = document.querySelector(".toc-mobile[open]");
      if (m) m.removeAttribute("open");
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });

  // ---- Reading progress bar ----
  var bar = document.querySelector(".read-progress");
  if (bar) {
    var onScrollProgress = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop || window.scrollY) / max * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    };
    window.addEventListener("scroll", onScrollProgress, { passive: true });
    window.addEventListener("resize", onScrollProgress);
    onScrollProgress();
  }

  // ---- TOC scrollspy (desktop + mobile links share hrefs) ----
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    tocLinks.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      (byId[id] = byId[id] || []).push(a);
    });
    var targets = Object.keys(byId)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var current = null;
    var setActive = function (id) {
      if (id === current) return;
      current = id;
      tocLinks.forEach(function (a) { a.classList.remove("active"); });
      (byId[id] || []).forEach(function (a) { a.classList.add("active"); });
    };
    var spy = new IntersectionObserver(function (entries) {
      // pick the entry nearest the top that is intersecting
      var visible = entries.filter(function (e) { return e.isIntersecting; });
      if (visible.length) {
        visible.sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
        setActive(visible[0].target.id);
      }
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    targets.forEach(function (t) { spy.observe(t); });
  }

  // ---- Persistent checklist (localStorage) ----
  var checklist = document.querySelector(".checklist[data-store]");
  if (checklist) {
    var key = "jk-playbook-" + checklist.getAttribute("data-store");
    var boxes = Array.prototype.slice.call(checklist.querySelectorAll('input[type=checkbox]'));
    var countEl = document.querySelector("[data-cl-count]");
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) {}
    var render = function () {
      var done = boxes.filter(function (b) { return b.checked; }).length;
      if (countEl) countEl.textContent = done + " of " + boxes.length;
    };
    boxes.forEach(function (b, i) {
      var id = b.getAttribute("data-k") || String(i);
      if (saved[id]) b.checked = true;
      b.addEventListener("change", function () {
        saved[id] = b.checked;
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
        render();
      });
    });
    render();
  }

  // ---- Shared helpers exposed as window.LM ----
  window.LM = {
    money: function (n) { return "$" + (Math.round(Number(n) || 0)).toLocaleString("en-US"); },
    num: function (s) {
      if (s == null) return NaN;
      var c = String(s).replace(/[^0-9.\-]/g, "");
      if (c === "" || c === "-" || c === ".") return NaN;
      return parseFloat(c);
    },
    reduce: reduce,
    showResult: function (el) {
      if (!el) return;
      el.hidden = false;
      var top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    }
  };
})();

/* ============================================================
   Guide reader — sticky numbered tab bar, one section at a time
   (mirrors the reference funnel). Groups the guide's chapters by
   its Parts (read from the TOC) into a horizontal, numbered,
   scrollable tab strip pinned under the app bar, and shows one
   section at a time — so a 14-chapter guide reads like a light,
   ~6-tab doc. Built from existing markup; no per-guide changes.
   No-JS pages keep the full single-page scroll.
   ============================================================ */
(function () {
  "use strict";
  var content = document.querySelector(".guide-content");
  var shell = document.querySelector(".guide-shell");
  var toc = document.querySelector(".toc");
  if (!content || !shell || !toc || !shell.parentNode) return;
  var wrap = shell.parentNode;

  var chapters = {};
  Array.prototype.slice.call(content.children).forEach(function (el) {
    if (el.classList && el.classList.contains("chapter") && el.id) chapters[el.id] = el;
  });
  if (Object.keys(chapters).length < 4) return;
  var reduceR = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  function label(raw) {
    if (/^\s*finish\s*$/i.test(raw)) return "Checklist";
    var parts = raw.split("·");
    return (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
  }

  // Group chapters by Part, from the TOC: an implicit "Start here" group runs
  // until the first .toc-part label, then one group per .toc-part.
  var groups = [], cur = { label: "Start here", ids: [], raw: "Start here" };
  Array.prototype.slice.call(toc.children).forEach(function (node) {
    if (node.classList && node.classList.contains("toc-part")) {
      if (cur.ids.length) groups.push(cur);
      cur = { label: null, ids: [], raw: node.textContent.trim() };
    } else if (node.tagName === "A") {
      var id = (node.getAttribute("href") || "").slice(1);
      if (chapters[id]) cur.ids.push(id);
    }
  });
  if (cur.ids.length) groups.push(cur);
  if (groups.length < 2) return;
  groups.forEach(function (g) {
    if (!g.label) g.label = label(g.raw);
    var first = chapters[g.ids[0]], prev = first.previousElementSibling;
    g.divider = (prev && prev.classList && prev.classList.contains("part-divider")) ? prev : null;
    g.els = (g.divider ? [g.divider] : []).concat(g.ids.map(function (id) { return chapters[id]; }));
  });

  document.documentElement.classList.add("reader", "tabbed");

  var bar = document.createElement("div");
  bar.className = "guide-tabs";
  var html = '<div class="gt-scroll" role="tablist" aria-label="Guide sections">';
  groups.forEach(function (g, i) {
    var n = (i + 1 < 10 ? "0" : "") + (i + 1);
    html += '<button type="button" class="gt-tab" role="tab" aria-selected="false" data-g="' + i + '"><span class="gt-n">' + n + '</span><span class="gt-l">' + g.label + '</span></button>';
  });
  bar.innerHTML = html + "</div>";
  wrap.insertBefore(bar, shell);
  var tabEls = Array.prototype.slice.call(bar.querySelectorAll(".gt-tab"));

  var snav = document.createElement("div");
  snav.className = "reader-nav section-nav";
  snav.innerHTML = '<a class="rn-btn prev" href="#" rel="prev"><span class="rn-dir">← Previous</span><span class="rn-title"></span></a><a class="rn-btn next" href="#" rel="next"><span class="rn-dir">Next →</span><span class="rn-title"></span></a>';
  content.appendChild(snav);
  var prevBtn = snav.querySelector(".prev"), nextBtn = snav.querySelector(".next");
  var bridge = document.getElementById("next");
  var idx = -1;

  function scrollUp() {
    var top = bar.getBoundingClientRect().top + window.scrollY - 66;
    window.scrollTo({ top: Math.max(0, top), behavior: reduceR ? "auto" : "smooth" });
  }
  function render() {
    groups.forEach(function (g, gi) { g.els.forEach(function (el) { el.hidden = (gi !== idx); }); });
    tabEls.forEach(function (t, i) { var on = i === idx; t.classList.toggle("active", on); t.setAttribute("aria-selected", on ? "true" : "false"); });
    if (idx > 0) { prevBtn.hidden = false; prevBtn.querySelector(".rn-title").textContent = groups[idx - 1].label; } else prevBtn.hidden = true;
    if (idx < groups.length - 1) {
      nextBtn.hidden = false; nextBtn.setAttribute("data-mode", "section");
      nextBtn.querySelector(".rn-dir").textContent = "Next →";
      nextBtn.querySelector(".rn-title").textContent = groups[idx + 1].label;
    } else if (bridge) {
      nextBtn.hidden = false; nextBtn.setAttribute("data-mode", "bridge");
      nextBtn.querySelector(".rn-dir").textContent = "Finish →";
      nextBtn.querySelector(".rn-title").textContent = "See your next step";
    } else nextBtn.hidden = true;
    var at = tabEls[idx];
    if (at && at.scrollIntoView) { try { at.scrollIntoView({ inline: "center", block: "nearest", behavior: reduceR ? "auto" : "smooth" }); } catch (e) {} }
  }
  function goTo(i, scroll) {
    var n = Math.max(0, Math.min(groups.length - 1, i));
    if (n === idx) { if (scroll) scrollUp(); return; }
    idx = n; render();
    if (scroll) {
      scrollUp();
      var h = groups[idx].els[0].querySelector("h2, h3");
      if (h) { h.setAttribute("tabindex", "-1"); try { h.focus({ preventScroll: true }); } catch (e) {} }
    }
  }

  bar.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest(".gt-tab") : null;
    if (t) goTo(parseInt(t.getAttribute("data-g"), 10) || 0, true);
  });
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    if (a === prevBtn) { e.preventDefault(); e.stopImmediatePropagation(); goTo(idx - 1, true); return; }
    if (a === nextBtn) {
      e.preventDefault(); e.stopImmediatePropagation();
      if (nextBtn.getAttribute("data-mode") === "bridge" && bridge) bridge.scrollIntoView({ behavior: reduceR ? "auto" : "smooth", block: "start" });
      else goTo(idx + 1, true);
      return;
    }
    var id = (a.getAttribute("href") || "").slice(1);
    if (id && chapters[id]) {
      var gi = -1; groups.forEach(function (g, k) { if (g.ids.indexOf(id) >= 0) gi = k; });
      if (gi >= 0) { e.preventDefault(); e.stopImmediatePropagation(); goTo(gi, true); }
    }
  }, true);

  goTo(0, false);
})();
