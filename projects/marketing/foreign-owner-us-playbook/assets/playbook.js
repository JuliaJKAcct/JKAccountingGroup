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
   Guide reader — menu-driven, one chapter at a time.
   Turns a long guide into a light, paged experience. Builds its
   menu from the existing .toc (source of truth for order + parts),
   so no per-page markup is needed. No-JS pages keep the full scroll.
   ============================================================ */
(function () {
  "use strict";
  var content = document.querySelector(".guide-content");
  var shell = document.querySelector(".guide-shell");
  if (!content || !shell) return;
  var panels = Array.prototype.slice.call(content.children).filter(function (el) {
    return el.classList && el.classList.contains("chapter");
  });
  if (panels.length < 3) return;
  var reduceR = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  var toc = document.querySelector(".toc");
  var byId = {};
  panels.forEach(function (p) { if (p.id) byId[p.id] = p; });

  // Order + titles + part labels from the TOC, limited to chapter panels.
  var model = [];
  if (toc) {
    var part = "";
    Array.prototype.slice.call(toc.children).forEach(function (node) {
      if (node.classList && node.classList.contains("toc-part")) { part = node.textContent.trim(); return; }
      if (node.tagName === "A") {
        var href = node.getAttribute("href") || "";
        if (href.charAt(0) === "#" && byId[href.slice(1)]) {
          model.push({ id: href.slice(1), title: node.textContent.trim(), part: part, el: byId[href.slice(1)] });
        }
      }
    });
  }
  if (model.length !== panels.length) {
    model = panels.map(function (p) {
      var h = p.querySelector("h3"), num = p.querySelector(".ch-num");
      return { id: p.id, title: h ? h.textContent.trim() : (p.id || ""), part: num ? num.textContent.trim() : "", el: p };
    });
  }

  document.documentElement.classList.add("reader");
  Array.prototype.slice.call(content.querySelectorAll(".part-divider")).forEach(function (d) { d.classList.add("reader-hide"); });

  var head = document.createElement("div");
  head.className = "reader-head";
  head.innerHTML = '<button type="button" class="rh-menu" aria-label="Open contents"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg> Contents</button><span class="rh-part"></span><span class="rh-count"></span>';
  content.insertBefore(head, content.firstChild);

  var nav = document.createElement("div");
  nav.className = "reader-nav";
  nav.innerHTML = '<a class="rn-btn prev" href="#" rel="prev"><span class="rn-dir">← Previous</span><span class="rn-title"></span></a><a class="rn-btn next" href="#" rel="next"><span class="rn-dir">Next →</span><span class="rn-title"></span></a>';
  content.appendChild(nav);
  var prevBtn = nav.querySelector(".prev"), nextBtn = nav.querySelector(".next");

  var drawer = document.createElement("div");
  drawer.className = "reader-drawer";
  drawer.hidden = true;
  var linksHtml = "", lastPart = null;
  model.forEach(function (m, i) {
    if (m.part && m.part !== lastPart) { linksHtml += '<p class="rd-part">' + m.part + "</p>"; lastPart = m.part; }
    linksHtml += '<a class="rd-link" href="#' + m.id + '" data-i="' + i + '">' + m.title + "</a>";
  });
  drawer.innerHTML = '<div class="rd-panel" role="dialog" aria-modal="true" aria-label="Guide contents"><div class="rd-top"><span class="rd-title">In this guide</span><button type="button" class="rd-close" aria-label="Close contents">✕</button></div>' + linksHtml + "</div>";
  document.body.appendChild(drawer);
  var bridge = document.getElementById("next");

  var cur = -1;
  function render() {
    var m = model[cur];
    model.forEach(function (mm, i) { mm.el.hidden = (i !== cur); });
    head.querySelector(".rh-part").textContent = m.part || "";
    head.querySelector(".rh-count").textContent = (cur + 1) + " / " + model.length;
    if (cur > 0) { prevBtn.hidden = false; prevBtn.querySelector(".rn-title").textContent = model[cur - 1].title; }
    else prevBtn.hidden = true;
    if (cur < model.length - 1) {
      nextBtn.hidden = false; nextBtn.setAttribute("data-mode", "panel");
      nextBtn.querySelector(".rn-dir").textContent = "Next →";
      nextBtn.querySelector(".rn-title").textContent = model[cur + 1].title;
    } else if (bridge) {
      nextBtn.hidden = false; nextBtn.setAttribute("data-mode", "bridge");
      nextBtn.querySelector(".rn-dir").textContent = "Finish →";
      nextBtn.querySelector(".rn-title").textContent = "See your next step";
    } else nextBtn.hidden = true;
    if (toc) Array.prototype.slice.call(toc.querySelectorAll("a")).forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + m.id);
    });
    Array.prototype.slice.call(drawer.querySelectorAll(".rd-link")).forEach(function (a, i) {
      a.classList.toggle("active", i === cur);
    });
  }
  function closeDrawer() { drawer.classList.remove("open"); drawer.hidden = true; }
  function scrollTop() {
    var top = shell.getBoundingClientRect().top + window.scrollY - 74;
    window.scrollTo({ top: Math.max(0, top), behavior: reduceR ? "auto" : "smooth" });
  }
  function goTo(i, scroll) {
    var n = Math.max(0, Math.min(model.length - 1, i));
    if (n === cur) { if (scroll) scrollTop(); return; }
    cur = n; render();
    if (scroll) {
      scrollTop();
      var h = model[cur].el.querySelector("h3");
      if (h) { h.setAttribute("tabindex", "-1"); try { h.focus({ preventScroll: true }); } catch (e) {} }
    }
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    var a = (t && t.closest) ? t.closest('a[href^="#"], .rh-menu, .rd-close') : null;
    if (!a) return;
    if (a.classList.contains("rh-menu")) { e.preventDefault(); drawer.hidden = false; drawer.classList.add("open"); return; }
    if (a.classList.contains("rd-close")) { e.preventDefault(); closeDrawer(); return; }
    if (a === prevBtn) { e.preventDefault(); e.stopImmediatePropagation(); goTo(cur - 1, true); return; }
    if (a === nextBtn) {
      e.preventDefault(); e.stopImmediatePropagation();
      if (nextBtn.getAttribute("data-mode") === "bridge" && bridge) bridge.scrollIntoView({ behavior: reduceR ? "auto" : "smooth", block: "start" });
      else goTo(cur + 1, true);
      return;
    }
    var href = a.getAttribute("href") || "";
    if (href.length < 2) return;
    var id = href.slice(1), idx = -1;
    for (var i = 0; i < model.length; i++) { if (model[i].id === id) { idx = i; break; } }
    if (idx >= 0) { e.preventDefault(); e.stopImmediatePropagation(); closeDrawer(); goTo(idx, true); }
  }, true);

  drawer.addEventListener("click", function (e) { if (e.target === drawer) closeDrawer(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer(); });

  goTo(0, false);
})();
