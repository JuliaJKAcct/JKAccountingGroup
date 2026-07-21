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
