/* ============================================================
   JK Accounting Group — Lead-magnet tools: shared behaviors.
   Enhancement only — pages work without JS. Each tool page adds
   its own compute() and calls LM helpers.
   ============================================================ */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // ---- Scroll reveal (content visible by default) ----
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  // ---- Sticky mobile CTA: hide when scrolling down, show scrolling up ----
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
    });
  });

  // ---- Shared helpers exposed as window.LM ----
  window.LM = {
    // "12,345" or "$12,345"
    money: function (n) {
      var v = Math.round(Number(n) || 0);
      return "$" + v.toLocaleString("en-US");
    },
    // parse a user string like "120,000" or "$120000" -> number (NaN if empty/invalid)
    num: function (s) {
      if (s == null) return NaN;
      var cleaned = String(s).replace(/[^0-9.\-]/g, "");
      if (cleaned === "" || cleaned === "-" || cleaned === ".") return NaN;
      return parseFloat(cleaned);
    },
    reduce: reduce,
    // reveal a result element and scroll it into comfortable view
    showResult: function (el) {
      if (!el) return;
      el.hidden = false;
      var top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    }
  };
})();
