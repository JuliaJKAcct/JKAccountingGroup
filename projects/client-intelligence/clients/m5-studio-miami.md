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
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../.claude/skills/double-mcp/) skill §7):_ _(none — Lilian decides which matters get one)_

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
- **Applies?** _(pending)_ — ⚠️ **likely yes.** The business sells materials at retail in
  Florida, which normally means a Florida sales & use tax registration with the DOR
  once the EIN exists. Not yet confirmed or actioned.
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
> `clientCard()` — see the [render README's parsing contract](../../.claude/skills/client-intelligence/render/README.md).

- ⚠️ **The business has TWO activities and the SS-4 forces us to pick ONE as principal — and
  the fork is unresolved.** The agreed description is *"Design services and retail sale of
  decorative wall plaster and related materials."* **The unanswered question is whether M5
  Studio APPLIES/INSTALLS the plaster on the client's wall or only designs and sells the
  material** — it decides SS-4 **line 16**, which is a single checkbox for the *principal*
  activity: **installing → Construction** (the instructions say construction *"also includes
  special trade contractors"*); **selling only, mostly material revenue → Retail**; **selling
  only, mostly design-fee revenue → Other** (design services are not on the IRS list).
  Line 16 establishes the activity on the IRS account, so guessing it is not free. **Put to
  Lilian 2026-08-14; unanswered.**
- **The SS-4 wording the firm settled on**, so the three lines tell one story:
  **line 10** (Started new business → type) = `Design services and retail of decorative wall
  materials` (short — the form's space is one small line); **line 17** (detail, an entry is
  required) = `Design services and retail sale of decorative wall plaster and related
  materials`; **line 16** = blocked on the bullet above.
- ⚠️ **The exact legal name on Sunbiz has never been written down here.** "M5 Studio Miami"
  is how the firm refers to it; the IRS name **must match Sunbiz character for character**
  (including `LLC` / `Inc.`), and a punctuation difference causes downstream trouble
  ([EIN SOP §6](../../sops/ein-application-irs.md)). Look it up on Sunbiz before filing.
- **Calling the IRS about the EIN application:** the authorization that covers the *pending*
  application is the **Third Party Designee block on the SS-4 itself** — and its authority
  *"terminates at the time the EIN is assigned and released to the designee."* A **Form 2848**
  for the same matter is a **specific-use POA**: line 3 = `EIN Application` / `Form SS-4` /
  `Not Applicable`, **line 4 checked**, faxed to the unit handling it — and therefore **not
  recorded on the CAF**, so it does not show up when we call. Full reasoning and the
  two-separate-forms rule in §6.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- _(2026-08-14)_ — **File created.** Lilian was filling **Form SS-4** for this client and asked
  what to put on **line 10** (Reason for applying → *Started new business (specify type)*).
  Read the current **Instructions for Form SS-4 (Rev. 12/2025)**: line 10 wants the **type of
  business** in short form (*"If you check this box, enter the type of business being
  started"*), while the long description belongs on **line 17** (*"describe the applicant's
  principal line of business in more detail"*). Recommended line 10 = `Design services and
  retail of decorative wall materials`, line 17 = the full agreed wording. **Line 16 left
  open** pending the install-or-not question in §5.
- _(2026-08-14)_ — **Business-type wording carried over from an earlier session** in which
  Lilian and a session worked out how to describe the business: *"Design services and retail
  sale of decorative wall plaster and related materials."* ⚠️ **That session produced no
  Client Intelligence file** — this is the first record of it, and the rest of what that
  session established (if anything) is not recoverable here. Recorded as far as it goes.
- _(2026-08-14)_ — **Form 2848 / EIN research** (same session, asked before the client was
  named). Read the **Instructions for Form 2848 (Rev. 09/2021)** in full. Findings that apply
  to this client:
  - **Line 5a is not where an EIN matter goes.** It only *modifies* the default acts
    (Intermediate Service Provider access, substituting/adding a representative, disclosure to
    third parties, signing a return, "Other"). Calling and receiving information is already
    granted by default — *"authorizes the listed representative(s) to inspect and/or receive
    confidential tax information and to perform all acts … with respect to matters described
    in the power of attorney."*
  - **It goes on line 3 + the line 4 checkbox.** *"Applications for an EIN"* is on the
    instructions' literal list of specific uses **not recorded on the CAF**, and the
    instructions give the example verbatim: `"EIN Application"` (Description of Matter),
    `"Form SS-4"` (Tax Form Number), `"Not Applicable"` (Year(s) or Period(s)).
  - **Consequence:** *"If you check the box on line 4, mail or fax Form 2848 to the IRS office
    handling the specific matter"* — it is not in the CAF, so it is paper presented to the EIN
    unit, not something the phone line can look up. *(That an assistor will accept the fax
    during the call is ordinary practice, not something the instructions state.)*
  - **The unresolved gap:** line 1 requires the taxpayer's identification number and this
    entity **has no EIN yet**. Searched the full Instructions for Form 2848, the Instructions
    for Form SS-4 and Pub. 947 — **none of the three says what to enter when no number has
    been assigned.** This is exactly the window the SS-4's Third Party Designee block covers.
  - **Two separate 2848s, never one.** The line 4 checkbox governs the whole form: mixing the
    EIN-application matter with ordinary tax matters on one 2848 leaves **none** of it recorded
    on the CAF. So a specific-use 2848 now, and a normal one (with the EIN in line 1, line 4
    unchecked) once the number exists.

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

- 🔴 **Answer the install-or-not question** (§5) — it is the only thing blocking SS-4 line 16.
  Asked of Lilian 2026-08-14.
- **Confirm the exact legal name and formation date on Sunbiz** before the SS-4 goes out.
- **Decide the EIN path** — the responsible party's SSN/ITIN status decides online vs. fax
  ([EIN SOP §1](../../sops/ein-application-irs.md)); not recorded here yet.
- **Record the EIN here (hyphenated) and save the confirmation letter** in the client's system
  once assigned — the CP 575 equivalent is hard to replace.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] Does M5 Studio install the plaster, or only design and sell it? (blocks SS-4 line 16)
- [ ] Exact legal name as filed on Sunbiz, plus document number and formation/effective date
- [ ] Entity type (LLC single/multi-member, or corporation) and whether an S-election is planned
- [ ] Responsible party, and whether they hold an SSN, an ITIN, or neither
- [ ] Mailing and physical addresses, with county
- [ ] Whether the firm goes in the SS-4 Third Party Designee block
- [ ] Does the client have a Double account? (link it here if so)
- [ ] Which services the firm will provide beyond the set-up
- [ ] Whether Florida sales-tax registration and a local Business Tax Receipt are needed

## 7. Links

- **Double client:** _(pending — link)_
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../.claude/skills/double-mcp/) skill §7):_ _(none)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** [`ein-application-irs.md`](../../sops/ein-application-irs.md) — the federal EIN procedure this client is currently going through
