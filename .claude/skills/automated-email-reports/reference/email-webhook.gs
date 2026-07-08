/**
 * JK Email Sender — Google Apps Script web app (email-send webhook).
 *
 * WHY THIS EXISTS
 *   Unattended Claude Code Routines cannot send email: the Gmail connector is
 *   draft-only, and SMTP is blocked by the HTTPS-only egress proxy. This tiny
 *   web app is the one path out — a Routine POSTs the finished email here over
 *   HTTPS and MailApp sends it from the firm account.
 *
 * DEPLOY (once — then reuse for every automation)
 *   1. script.google.com → New project → paste this file.
 *   2. Replace SECRET below with a fresh random string (keep it out of the repo).
 *   3. Deploy → New deployment → Web app.
 *        Execute as:      Me (the firm account)
 *        Who has access:  Anyone   (the SECRET is the real guard, not Google auth)
 *   4. Copy the /exec web-app URL. Put the URL + SECRET in the Routine prompt only.
 *   5. Allow script.google.com + script.googleusercontent.com in the Routine's
 *      environment network policy, or the POST never leaves the sandbox.
 *   To update later: Deploy → Manage deployments → (pencil) Edit → New version
 *   (this keeps the same URL; a brand-new deployment mints a different URL).
 *   If the deploy page shows "Page Not Found" / authuser=1, you are signed into
 *   multiple Google accounts — open it in a private window with only the firm one.
 *
 * REQUEST  (application/json)
 *   { "secret": "...", "to": "a@b.com", "subject": "...",
 *     "html": "<...>", "text": "plain-text fallback" }
 * RESPONSE
 *   {"ok":true}                → sent (or already sent — see de-dupe)
 *   {"ok":true,"deduped":true} → identical email seen in the last 10 min, skipped
 *   {"ok":false,"error":"..."} → bad_json | unauthorized
 */
function doPost(e) {
  // Generate a NEW random secret per deployment. Never commit the real value.
  var SECRET = "REPLACE_WITH_A_FRESH_RANDOM_SECRET";

  var reply = function (obj) {
    return ContentService.createTextOutput(JSON.stringify(obj))
      .setMimeType(ContentService.MimeType.JSON);
  };

  var data;
  try { data = JSON.parse(e.postData.contents); }
  catch (err) { return reply({ ok: false, error: "bad_json" }); }

  if (!data || data.secret !== SECRET) {
    return reply({ ok: false, error: "unauthorized" });
  }
  if (!data.to) { return reply({ ok: false, error: "missing_to" }); }

  // De-dupe: ignore an identical email (same to+subject+body) sent in the last
  // 10 minutes. This is the backstop for a Routine that loops or retries.
  var fingerprint = (data.to || "") + "|" + (data.subject || "") + "|" + (data.html || data.text || "");
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, fingerprint);
  var key = "sent_" + Utilities.base64EncodeWebSafe(digest);
  var cache = CacheService.getScriptCache();
  if (cache.get(key)) { return reply({ ok: true, deduped: true }); }

  var options = { to: data.to, subject: data.subject || "Automated report" };
  if (data.html) {
    options.htmlBody = data.html;
    options.body = data.text || "See the HTML version.";
  } else {
    options.body = data.text || "";
  }
  MailApp.sendEmail(options);

  // Cache the fingerprint only AFTER a successful send, so a failed send is not
  // wrongly reported as already-sent when the routine's single retry comes in.
  cache.put(key, "1", 600); // 600s = 10 min

  return reply({ ok: true });
}
