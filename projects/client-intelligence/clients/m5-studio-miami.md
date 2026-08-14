# M5 Studio Miami

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-14

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz,
> so hiding it protects nothing _(Lilian, 2026-08-12)_. An **SSN or ITIN never may**,
> including when it is the entity's tax ID. Write the EIN **hyphenated** (`12-3456789`) — nine
> bare digits trip the published-page gate and stop the build.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering bookkeeper needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** M5 Studio Miami _(the exact legal name as filed on Sunbiz is **not yet confirmed here** — the EIN application must match it character for character, see §5)_
- **Entity type:** _(pending)_
- **Home state:** Florida _(Miami — from the business name; not yet confirmed against Sunbiz)_
- **Industry / what they do:** Design services and retail sale of decorative wall plaster and related materials _(wording agreed with Lilian for the EIN application — see §5)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** Company set-up — **federal EIN application (Form SS-4)**, in progress as of 2026-08-14. Ongoing services not yet defined.
- **Fiscal year-end:** _(pending — the SS-4 line 12 answer; normally December)_
- **Accounting platform:** _(pending)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | _(pending — no Double client confirmed yet)_ |
| Responsible party for the EIN (SS-4 line 7a) | _(pending — see §5)_ |

- **Double client:** _(pending — link)_
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(none — Lilian decides which matters get one)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Sunbiz | Entity formation / status | n/a (public) | _(document number pending)_ |
| IRS | EIN application | n/a | _(EIN pending — write it here, hyphenated, once assigned)_ |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** _(pending)_
- **Likely?** Probably yes — the business sells materials in Florida, which normally means a
  Florida sales & use tax registration with the DOR once the EIN exists. **Not confirmed, not
  actioned, and not a service we provide today.**
- **Jurisdiction(s):** _(pending)_
- **Frequency & due date:** _(pending)_
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** _(pending)_
- **Current status:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** _(pending)_ — the EIN application answers "no employees" unless payroll
  starts immediately (the firm's standing answer, [EIN SOP §4E](../../sops/ein-application-irs.md)).
- **Provider / frequency:** _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_
- **Cadence:** _(pending)_
- **Categorization rules / quirks:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** _(pending)_
- **Return type(s) & deadlines:** _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending)_ — a **local Business Tax Receipt** normally follows the EIN for a
  Florida business with a physical location; see the
  [BTR SOP](../../sops/hollywood-broward-business-tax-receipt.md) if it is in Hollywood/Broward.
- **What & when:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

## 5. Key facts & quirks

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- ✅ **M5 Studio does NOT install anything — it designs and sells.** _(Lilian, 2026-08-14.)_
  That **rules out Construction** on SS-4 **line 16**, which was the big fork: applying
  material on a customer's property would have made this a special trade contractor. What
  remains turns on **two** questions, and the second one has not been asked yet.
  **(1) Materials or design fees?** If the design fees are the bulk it is **Other →
  "Interior design services"** (design is not on the IRS's list at all).
  **(2) ⚠️ If it is the materials — WHO BUYS THEM?** **Retail** is defined as _"selling
  merchandise to the **general public**"_; selling to **contractors, designers or trade
  buyers** is **Wholesale–other**, a different box. A specialist-plaster studio can feel
  retail and sell wholesale. For a company with no trading history both answers are an
  **expectation**, not a measurement. **Do not file line 16 until question (2) is
  answered** — see [EIN SOP §4F](../../sops/ein-application-irs.md).
- **The SS-4 wording the firm settled on**, so the three lines tell one story:
  **line 10** (Started new business → type) = `Design services and retail of decorative wall
  materials` (short — the form's space is one small line); **line 17** (detail, an entry is
  required) = `Design services and retail sale of decorative wall plaster and related
  materials`; **line 16** = **still open** — Retail, Wholesale–other or Other, per the two
  questions in the bullet above.
- ⚠️ **The exact legal name on Sunbiz has never been written down here.** "M5 Studio Miami"
  is how the firm refers to it; the IRS name **must match Sunbiz character for character**
  (including `LLC` / `Inc.`), and a punctuation difference causes downstream trouble
  ([EIN SOP §6](../../sops/ein-application-irs.md)). Look it up on Sunbiz before filing.
- **Calling the IRS about this EIN — the only authorization that works right now is the SS-4
  designee block**, and it dies on assignment (_"terminates at the time the EIN is assigned and
  released to the designee"_). ⚠️ **After that, do NOT reach for a Form 2848 in Lilian's name** —
  a 2848 may only name someone _eligible to practice before the IRS_, which she is not; it would
  have to be **Julia (EA)**. For a call that only **asks** rather than argues, the form is a
  **Form 8821**, which Lilian _can_ be named on. **Neither works while the EIN is still pending**
  — both want a TIN this entity does not have. Full rule in
  [`firm-identity.md` §4](../../sops/firm-identity.md).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- _(2026-08-14)_ — **File created.** Lilian was filling **Form SS-4** for this client and asked
  what to put on **line 10** (Reason for applying → _Started new business (specify type)_).
  Read the current **Instructions for Form SS-4 (Rev. 12/2025)**: line 10 wants the **type of
  business** in short form (_"If you check this box, enter the type of business being
  started"_), while the long description belongs on **line 17** (_"describe the applicant's
  principal line of business in more detail"_). Recommended line 10 = `Design services and
  retail of decorative wall materials`, line 17 = the full agreed wording. **Line 16 left
  open** pending the install-or-not question in §5.
- _(2026-08-14)_ — **Answered: M5 Studio does not install.** Lilian confirmed the company only
  designs and sells — no application of the material on a customer's property. **Construction is
  off the table for line 16**; see §5 for what is left and the recommendation.
- _(2026-08-14)_ — **The SS-4 carries a Third-Party Designee, and this filing set the firm's
  standing pattern.** Lilian reported that the block was completed with **her name**, the
  **firm's own Pembroke Pines address (never the client's)**, her **direct work line** and the **JK Accounting
  company fax**. She stated this is what the firm will do on **every** SS-4 from now on —
  the designee is **always her**, because she is the one who ends up calling the IRS and
  Julia very rarely does — so it went into
  [EIN SOP §4D](../../sops/ein-application-irs.md) as firm policy, with the four values
  written out. **Consequence for this client:** the EIN will come back **to that fax** if the
  application goes out on Path B, and the designee's authority **ends the moment the EIN is
  assigned**.
- _(2026-08-14)_ — **Business-type wording carried over from an earlier session** in which
  Lilian and a session worked out how to describe the business: _"Design services and retail
  sale of decorative wall plaster and related materials."_ ⚠️ **That session produced no
  Client Intelligence file** — this is the first record of it, and the rest of what that
  session established (if anything) is not recoverable here. Recorded as far as it goes.
- _(2026-08-14)_ — **Form 2848 / EIN research** (same session, asked before the client was
  named). Read the **Instructions for Form 2848 (Rev. 09/2021)** in full. Findings that apply
  to this client:
  - **Line 5a is not where an EIN matter goes.** It only _modifies_ the default acts
    (Intermediate Service Provider access, substituting/adding a representative, disclosure to
    third parties, signing a return, "Other"). Calling and receiving information is already
    granted by default — _"authorizes the listed representative(s) to inspect and/or receive
    confidential tax information and to perform all acts … with respect to matters described
    in the power of attorney."_
  - **It goes on line 3 + the line 4 checkbox.** _"Applications for an EIN"_ is on the
    instructions' literal list of specific uses **not recorded on the CAF**, and the
    instructions give the example verbatim: `"EIN Application"` (Description of Matter),
    `"Form SS-4"` (Tax Form Number), `"Not Applicable"` (Year(s) or Period(s)).
  - **Consequence:** _"If you check the box on line 4, mail or fax Form 2848 to the IRS office
    handling the specific matter"_ — it is not in the CAF, so it is paper presented to the EIN
    unit, not something the phone line can look up. _(That an assistor will accept the fax
    during the call is ordinary practice, not something the instructions state.)_
  - **The unresolved gap:** line 1 requires the taxpayer's identification number and this
    entity **has no EIN yet**. Searched the full Instructions for Form 2848, the Instructions
    for Form SS-4 and Pub. 947 — **none of the three says what to enter when no number has
    been assigned.** This is exactly the window the SS-4's Third Party Designee block covers.
  - **Two separate 2848s, never one.** The line 4 checkbox governs the whole form: mixing the
    EIN-application matter with ordinary tax matters on one 2848 leaves **none** of it recorded
    on the CAF. A specific-use one for the SS-4 matter, and a normal one (with the EIN in line 1,
    line 4 unchecked) once the number exists.
  - ⚠️ **Corrected later the same day, after reading WHO may be named on one.** Form 2848: _"You
    may only name individuals who are eligible to practice before the IRS as representatives"_ —
    attorney, CPA, enrolled agent, an officer or employee **of the taxpayer**, a family member,
    and a few narrow others. **Lilian is none of those, so a 2848 in her name is invalid**, and
    she is the one who makes these calls. For **information** — which is what a status call is —
    the form is **Form 8821**, which has no such restriction and covers Form SS-4 matters
    explicitly. To **act**, it is a 2848 naming **Julia (EA)**. The bullets above describe how a
    2848 is _filled in_, not who may sign it. See
    [`firm-identity.md` §4](../../sops/firm-identity.md).

### Tax year YYYY — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

- _(pending — no return prepared for this client yet)_

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- 🔴 **The designee block's matching check has NOT been done for this client.** The
  [EIN SOP §4D](../../sops/ein-application-irs.md) requires confirming that neither the
  designee address nor the designee phone matches what is in the **taxpayer** lines — and
  **this client's own address and phone are not recorded anywhere yet** (§4/§6), so the check
  is impossible as things stand. If they collide, the IRS silently refuses the online and
  phone routes and nobody is told why. **Check it before the SS-4 goes out.**
- 🟡 **Confirm SS-4 line 16 — TWO questions, one of them never asked.** The install question is
  answered (no → not Construction). Left: **(1)** materials or design fees (→ Other if design);
  **(2)** if materials, **who buys them** — the general public (**Retail**) or contractors and
  trade buyers (**Wholesale–other**). Nobody has asked (2).
- **Confirm the exact legal name and formation date on Sunbiz** before the SS-4 goes out.
- **Decide the EIN path, then protect the result** — the responsible party's SSN/ITIN status
  decides online vs. fax ([EIN SOP §1](../../sops/ein-application-irs.md)), and is not recorded
  here yet. **The moment the EIN is assigned: write it here hyphenated and save the confirmation
  letter** in the client's system — the CP 575 equivalent is only replaceable by a phone-only 147C.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [x] Does M5 Studio install the plaster, or only design and sell it? — **answered: no install, design and sell only** (Lilian, 2026-08-14)
- [ ] Line 16: does the revenue come mainly from the materials or the design fees?
- [ ] Exact legal name as filed on Sunbiz, plus document number and formation/effective date
- [ ] Entity type (LLC single/multi-member, or corporation) and whether an S-election is planned
- [ ] Responsible party, and whether they hold an SSN, an ITIN, or neither
- [ ] Mailing and physical addresses, with county
- [x] Whether the firm goes in the SS-4 Third Party Designee block — **yes, done** (Lilian's name, the FIRM's address, her work line, the JK fax; now the firm's standing pattern — [EIN SOP §4D](../../sops/ein-application-irs.md))
- [ ] Does the client have a Double account? (link it here if so)
- [ ] Which services the firm will provide beyond the set-up
- [ ] Whether Florida sales-tax registration and a local Business Tax Receipt are needed

## 7. Links

- **Double client:** _(pending — link)_
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(none)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** [`ein-application-irs.md`](../../sops/ein-application-irs.md) — the federal EIN procedure this client is currently going through
