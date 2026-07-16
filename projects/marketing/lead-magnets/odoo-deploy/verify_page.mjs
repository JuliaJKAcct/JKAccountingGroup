/* Playwright verification for a published lead-magnet page on Odoo.
   Usage: node verify_page.mjs <url>
   Drives the LLC-or-S-Corp calculator + lead form and checks chrome/fonts. */
import { createRequire } from 'module';
const require = createRequire('/opt/node22/lib/node_modules/index.js');
const { chromium } = require('playwright');

const url = process.argv[2] || 'https://jkaccountinggroup.odoo.com/free-tools/llc-or-s-corp';
const proxy = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
const browser = await chromium.launch(proxy ? { proxy: { server: proxy } } : {});
const page = await browser.newPage();
const out = {};
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message));

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForSelector('.brandmark', { timeout: 15000 });
try { await page.evaluate(() => document.fonts.ready); } catch (e) {}

// 1. No Odoo theme chrome; our own chrome present
out.hasOdooTopMenu = await page.locator('header#top, #o_main_nav, .o_main_navbar').count();
out.hasAppbar = await page.locator('header.appbar .brandmark').count();
out.hasFooter = await page.locator('footer.lp-footer').count();
out.hasStickyCta = await page.locator('.sticky-cta').count();

// 2. Brand fonts actually loaded
out.serifLoaded = await page.evaluate(() => document.fonts.check("16px 'Source Serif 4'"));
out.sansLoaded = await page.evaluate(() => document.fonts.check("16px 'IBM Plex Sans'"));
out.cssApplied = await page.evaluate(() => {
  const b = document.querySelector('.brandmark'); if (!b) return 'no-brandmark';
  return getComputedStyle(document.body).backgroundColor;
});

// 3. Booking + WhatsApp wiring
out.navCta = await page.getAttribute('.nav-cta', 'href');
out.stickyWa = await page.getAttribute('.sticky-wa', 'href');

// 4. Calculator math
await page.fill('#profit', '120000');
await page.fill('#salary', '70000');
await page.click('#calc button[type="submit"]');
await page.waitForSelector('#result:not([hidden])', { timeout: 5000 });
out.resultLlc = (await page.textContent('#r-llc')).trim();
out.resultScorp = (await page.textContent('#r-scorp')).trim();
out.resultHeadline = (await page.textContent('#r-headline')).trim();

// 5. Lead form -> crm.lead (fetch + thank-you swap)
const stamp = Date.now ? '' : ''; // no Date in workflow; fine in node
const testEmail = 'leadtest+' + Math.floor(Math.random() * 1e9) + '@example.com';
out.testEmail = testEmail;
await page.fill('form.form-card #name', 'Playwright Verify');
await page.fill('form.form-card #email', testEmail);
await page.fill('form.form-card #phone', '+1 305 555 0100');
await page.selectOption('form.form-card select[name="language"]', 'ru');
await page.click('form.form-card button[type="submit"]');
try {
  await page.waitForSelector('.form-thanks', { timeout: 12000 });
  out.leadThankYou = true;
  out.thankYouBookHref = await page.getAttribute('.form-thanks a', 'href');
} catch (e) {
  out.leadThankYou = false;
  out.leadFormError = await page.locator('.form-error').count();
}

out.consoleErrors = errors;
console.log(JSON.stringify(out, null, 2));
await browser.close();
