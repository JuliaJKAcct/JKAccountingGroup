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

/* ============================================================
   Odoo deploy only — lead-form progressive enhancement.
   These chrome-less pages do NOT load Odoo's s_website_form JS, so a
   native POST to /website/form/crm.lead would dump raw JSON. Instead we
   intercept submit, POST the FormData with fetch, and on success swap the
   form for an on-brand thank-you state with a booking link. The form still
   carries a QWeb-rendered csrf_token hidden field so the POST validates.
   Maps to crm.lead: contact_name, email_from, phone (+ language, tool
   source captured as custom fields -> lead description).
   ============================================================ */
(function () {
  "use strict";
  var BOOKING_URL = "https://jkaccountinggroup.odoo.com/appointment/1";
  var forms = Array.prototype.slice.call(document.querySelectorAll("form.form-card"));
  var reduce = (window.LM && window.LM.reduce) || false;

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var old = form.querySelector(".form-error");
      if (old) old.parentNode.removeChild(old);
      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.textContent : "Send my details";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

      fetch("/website/form/crm.lead", {
        method: "POST",
        body: new FormData(form),
        headers: { "X-Requested-With": "XMLHttpRequest" }
      }).then(function (r) {
        return r.text().then(function (t) {
          var d = {};
          try { d = JSON.parse(t); } catch (err) {}
          return { ok: r.ok, data: d };
        });
      }).then(function (res) {
        if (res.ok && res.data && res.data.id) { swapThanks(form); }
        else { showError(form, btn, label); }
      }).catch(function () { showError(form, btn, label); });
    });
  });

  function swapThanks(form) {
    form.innerHTML =
      '<div class="form-thanks">' +
        '<svg class="ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 12.5l2.5 2.5 5-6" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
        "<h3>Thank you — we’ll be in touch.</h3>" +
        "<p>We’ll get back to you in English, Russian, or Ukrainian. Prefer to talk now?</p>" +
        '<a class="btn cta lg" href="' + BOOKING_URL + '">Book a free call</a>' +
      "</div>";
    try { form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); } catch (e) {}
  }

  function showError(form, btn, label) {
    if (btn) { btn.disabled = false; btn.textContent = label; }
    var anchor = form.querySelector(".form-actions") || form.firstChild;
    var msg = document.createElement("p");
    msg.className = "form-error";
    msg.textContent = "Sorry — something went wrong sending that. Please try again, or book a call and we’ll take it from there.";
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(msg, anchor);
    else form.insertBefore(msg, form.firstChild);
  }
})();
