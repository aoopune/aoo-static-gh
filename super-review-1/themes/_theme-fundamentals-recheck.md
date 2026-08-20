Recheck after later site edits. Same 20 fundamentals. Judged on today’s source only.
Old scan was a place list, not today’s truth. Includes looks-changed-but-same-kind.
Status map only — not a repair list.

## How judging was decided

- Lens: each theme’s object_kind + failure_kind from `_theme-fundamentals.md`.
- Old `_theme-site-scan-ledger.json` hits were a checklist of places to open again, not verdicts.
- Match kind, not old button names. Renamed controls can still fail.
- `looks_changed_still_open` when words/layout changed but the same kind of failure remains.
- Theme-02: long legal/guide sentences alone are not hits; only heavy, overlapping, empty, or not-plain-English of that kind.

## Counts

- Themes open: **15**
- Themes closed: **4**
- Themes not in current source: **1**
- Remaining open places: **27** (still_open + looks_changed_still_open)
- looks_changed_still_open places: **11**
- new_since_recheck places: **0**

## theme-01 — Hero headline and Explore banks button are not centered in the top block

Fundamental: The main words and the main button do not sit in the middle of the space they belong in. One empty side is larger than the other, so the whole block looks off-balance.

Theme verdict: closed — this kind of problem did not show up on checked current surfaces.

Open places: 0 (still_open: 0, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 2
Old hits that were not a real match: 0

### R01-hero-spacing

Status: closed

What a person meets now: Optically centered hero padding that accounts for the frosted nav height.

Why this status: Current hero copy padding shifts the title and Explore banks button down by half the nav height so the pair sits in the optical middle of the pale band. The uneven empty-side failure for the top block is not present on this surface now.

Where: index.html · index.html:71-81

Evidence now: padding-top: calc(var(--hero-copy-gap) - var(--gn-height) / 2);
      padding-bottom: calc(var(--hero-copy-gap) + var(--gn-height) / 2);

### R01-hero-markup

Status: closed

What a person meets now: Hero headline and Explore banks button in the top block.

Why this status: The hero still has the headline and Explore banks control, but spacing is governed by the centering recipe above. This surface no longer shows the off-balance gap failure.

Where: index.html · content/pages/home.body.html:2-7

Evidence now: <h1 class="home-hero-title" id="home-hero-title"><span class="home-hero-title-line">Get a fair view of home loans and</span>

## theme-02 — Homepage sentences are too heavy, or they add nothing

Fundamental: Sentences use too many words, extra clauses, and overlapping phrases, so people have to work hard to get the point. Some supporting lines add almost nothing. Even a small line about how fresh the numbers are is not plain English.

Theme verdict: open

Open places: 3 (still_open: 3, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 1

### R02-best-overlap

Status: still_open

What a person meets now: Best of all lines: we do not create any urgency, then No unnecessary calls / No sales pitch / No pushy notifications.

Why this status: A person still meets stacked overlapping “no / not push” phrases in the Best of all beat. That is the same heavy/overlapping sentence kind from the fundamental.

Where: index.html · content/pages/home.body.html:177-180

Evidence now: <span class="home-best-aside">we do not create any urgency.</span>
            </h2>
            <p class="home-best-body home-moment"><span class="home-best-body-line">No unnecessary calls.</span><span class="home-best-body-line">No sales pitch.</span><span class="home-best-body-line">No pushy notifications.</span></p>

### R02-transparent-empty

Status: still_open

What a person meets now: Transparent, like never before, with support line You know before you choose.

Why this status: The supporting line under Transparent still adds almost nothing beyond the heading. Same empty-support failure kind.

Where: index.html · content/pages/home.body.html:211-214

Evidence now: <span class="home-clear-word">Transparent,</span>
              <span class="home-clear-aside"><span class="home-clear-aside-word">like</span> <span class="home-clear-aside-word">never</span> <span class="home-clear-aside-word">before.</span></span>
            </h2>
            <p class="home-clear-body home-moment"><span class="home-clear-body-lead">You know before you choose.</span></p>

### R02-freshness

Status: still_open

What a person meets now: Results freshness string built as Last checked on + date.

Why this status: The table freshness line still uses “Last checked on …” which is the same not-plain-English freshness kind from the fundamental.

Where: pages/explore-banks.html · src/home-loan-compare.js:1956-1960

Evidence now: return "Last checked on " + date;

### R02-legal-overtag-batch

Status: old_hit_was_not_a_match

What a person meets now: Footer and legal disclaimer paragraphs tagged in the old scan for length.

Why this status: Old scan tagged hundreds of long legal and guide sentences as theme-02. Under the theme-02 special rule, length alone is not a hit. These disclaimer and legal paragraphs are long but are not the heavy/overlapping/empty/not-plain-English homepage-sentence kind. They are not kept as open issues.

Where: many · partials/site-footer.html:85-94

Evidence now: Shroffin is not a bank, a Non-Banking Financial Company (NBFC), or a lender. We do not approve, sanction, underwrite, or disburse loans.

## theme-03 — Zero block on scroll looks broken

Fundamental: As you scroll, a claim shows up as leftover pieces: big words with the rest of the sentence missing, then the color fading away. For a moment it looks like the page is broken, because you cannot tell what is coming next.

Theme verdict: closed — this kind of problem did not show up on checked current surfaces.

Open places: 0 (still_open: 0, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 2
Old hits that were not a real match: 0

### R03-zero-pairs

Status: closed

What a person meets now: Zero section CSS that reveals each claim as a full pair.

Why this status: Zero and the rest of each claim fade in as one pair. A person no longer meets leftover bare zeros with the rest of the sentence missing. The broken leftover-pieces failure is gone on this surface.

Where: index.html · index.html:978-979

Evidence now: /* ——— Zero — each claim arrives as a pair; never a bare “Zero” ——— */

### R03-zero-markup

Status: closed

What a person meets now: Zero bank commissions / Zero bias pairs in the home zero block.

Why this status: Markup keeps Zero and bank commissions./bias together in each pair. Current scroll reveal does not strand a bare Zero.

Where: index.html · content/pages/home.body.html:191-198

Evidence now: <span class="home-zero-zero">Zero</span>
                <span class="home-zero-rest">bank commissions.</span>

## theme-04 — “Zero commissions” mixes bank and customer, so the words are unclear

Fundamental: A promise of “zero” is easy to hear as “I pay nothing,” when it is about the company taking no cut from the places it lists. The next line then talks about not pushing anyone, so the block never stays on one side of the relationship. The tiny line under the heading is too small to settle what is actually meant.

Theme verdict: open

Open places: 1 (still_open: 0, looks_changed_still_open: 1, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R04-zero-mix

Status: looks_changed_still_open

What a person meets now: Zero bank commissions, Zero bias, and the fair-view body line in one block.

Why this status: Wording now says “Zero bank commissions” and the body mentions fair view and no paid rankings, but the block still pairs a zero-cut claim with Zero bias (not pushing). A person still meets mixed bank-side and customer-side meaning in one zero promise. Same object and failure kind after the edit.

Where: index.html · content/pages/home.body.html:191-200

Evidence now: <span class="home-zero-rest">bank commissions.</span>
              </span>
              <span class="home-zero-pair">
                <span class="home-zero-zero">Zero</span>
                <span class="home-zero-rest">bias.</span>
              </span>
            </h2>
            <p class="home-zero-body"><span class="home-zero-body-lead">So you get a fair view of every lender in the market,</span><span class="home-zero-body-tail"> with no paid rankings and no one pushed ahead of another.</span></p>

## theme-05 — Homepage story uses too many thin full-screen slides

Fundamental: The opening story is split into too many full-screen pieces, and many of those pieces are thin. The same few strengths get said again later, and one extra point is buried so it is hard to make out.

Theme verdict: not_in_current_source

Open places: 0 (still_open: 0, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### home-story-not-fullscreen-slides

Status: old_hit_was_not_a_match

What a person meets now: After the product demo, home story uses padded lead/browse/best/zero/clear/apply sections, not sticky full-screen thin slides.

Why this status: Old scan had 0 hits. Step 4 on current home story did not find the full-screen thin-slide failure kind.

Where: index.html · content/pages/home.body.html:148-234

Evidence now: <div class="home-story-dark"> with home-lead-pin padding clamp(80px, 14vh, 140px) sections — no 100vh sticky slide theater

## theme-06 — Built around you does not show the real product

Fundamental: A section that is supposed to show the product only lets you read one line at a time. The picture beside it repeats the same words, so you still do not see the real thing. A claim that everything sits in one shared view is written on the screen, not shown as a product you can look at.

Theme verdict: closed — this kind of problem did not show up on checked current surfaces.

Open places: 0 (still_open: 0, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 2
Old hits that were not a real match: 1

### R06-built-around-gone

Status: gone_surface

What a person meets now: Home stretch after hero is product demo sections, not Built around you.

Why this status: The Built around you accordion and duplicate side-card surface are not in current home body. In their place a person meets an embedded Explore banks product demo iframe showing the real tool UI.

Where: index.html · content/pages/home.body.html:11-59

Evidence now: <section class="spd-section spd-section--home spd-section--desktop-only" aria-label="Explore banks product demo">

### R06-product-demo

Status: closed

What a person meets now: Embedded pages/_product-demo-frame.html product demo.

Why this status: The home product stretch now shows the live tool in a Safari frame, not one accordion line at a time or a card that only repeats copy. The not-showing-the-product failure is not present here.

Where: index.html · content/pages/home.body.html:50-58

Evidence now: src="pages/_product-demo-frame.html?v=78"

### R06-old-demo-hits

Status: old_hit_was_not_a_match

What a person meets now: Demo frame Explore banks form UI.

Why this status: Old scan tagged the demo frame form itself as theme-06. That frame is the product UI a person can look at, not a one-line accordion substitute. It does not match both object_kind and failure_kind for this fundamental.

Where: pages/_product-demo-frame.html · pages/_product-demo-frame.html:197-209

Evidence now: <h1 class="hlc-title"><span class="hlc-title-wash">Explore banks.</span></h1>

## theme-07 — Help strip sits off the footer, and the footer disclaimer washes its hands

Fundamental: The help bar sits in a large empty gap, as if it were its own full-screen section, not attached to the bottom of the page. The small print at the bottom reads like leftover legal language nobody reads. Its tone is “we are not responsible,” which clashes with the rest of the product standing with you.

Theme verdict: open

Open places: 1 (still_open: 0, looks_changed_still_open: 1, new_since_recheck: 0)
Closed places: 1
Old hits that were not a real match: 0

### R07-help-strip

Status: closed

What a person meets now: site-help-strip flush footer chrome styles.

Why this status: Help strip CSS now keeps the bar flush with the footer unit with no tall empty full-screen gap. That part of the fundamental is not present on checked surfaces.

Where: shared:site-footer · css/shroffin-shell.css:1349-1366

Evidence now: /* Help strip: footer chrome. Flush to content above and footer below. Same on every page. */
  .site-help-strip {
    box-sizing: border-box;
    width: 100%;
    margin-block-start: 0;
    margin-block-end: 0;

### R07-disclaimer

Status: looks_changed_still_open

What a person meets now: Footer Disclaimer summary plus Even so, we try our best for you turn.

Why this status: A standing-with-you turn was added, but the footer still opens with a Disclaimer block of hand-washing legal limits (not a bank, do not approve, lender decides). Same small-print wash-hands object and failure kind after the edit.

Where: shared:site-footer · partials/site-footer.html:83-94

Evidence now: <h2 class="site-footer-disclaimer-title" id="footer-disclaimer">Disclaimer</h2>
          <div class="site-footer-disclaimer">
            <p class="site-footer-disclaimer-summary">Shroffin is not a bank, a Non-Banking Financial Company (NBFC), or a lender. We do not approve, sanction, underwrite, or disburse loans. The lender decides your rate, your fees, and whether you are approved.</p>
            <p class="site-footer-disclaimer-turn">Even so, we try our best for you. We show each lender's home loan clearly, one next to the other.</p>

## theme-08 — Explore banks filters are exclusive buttons and do not explain the choice

Fundamental: You can only pick one option at a time, even when more than one can be true together. The names of the options do not tell you what they mean or what you give up by picking one. One choice is a special kind of loan that is never explained, except a note that it costs more.

Theme verdict: closed — this kind of problem did not show up on checked current surfaces.

Open places: 0 (still_open: 0, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 2
Old hits that were not a real match: 0

### R08-filters

Status: closed

What a person meets now: Public/Private and related filter checkboxes with option notes.

Why this status: Bank type, Rate, and Facility are multi-select checkboxes with short notes under Public, Private, Floating, Fixed, Term loan, and Overdraft. Exclusive unexplained one-at-a-time buttons are not what a person meets now.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:528-577

Evidence now: <input type="checkbox" data-product-filter="bankPublic" checked />
                      <span class="hlc-filter-option-label">
                        <span class="hlc-filter-option-title">Public</span>
                        <span class="hlc-filter-option-note">Slower process, usually a better rate.</span>

### R08-normalize

Status: closed

What a person meets now: Product filter normalizer for multi-select checkboxes.

Why this status: Filter state is normalized to multi-select checkboxes. The exclusive-switch behavior is described as older drafts, not current behavior.

Where: pages/explore-banks.html · src/home-loan-compare.js:126-129

Evidence now:  * Normalize filter state to the multi-select checkbox shape.
 * Older drafts used exclusive switches (bankType / fixedRate / overdraft only).

## theme-09 — Concessions Learn more takes you off the filter, and the page has no Back

Fundamental: To understand a choice, you are sent to a different page, and the options on the choice itself do not each have their own short note. Once you are on that other page, there is no clear way back.

Theme verdict: open

Open places: 2 (still_open: 2, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R09-learn-more

Status: still_open

What a person meets now: Concessions filter help Learn more link to concessions.html.

Why this status: Concessions Learn more still leaves the filter for the concessions guide page. Each option’s short note does not fully replace that leave-the-filter path. Leaving the choice surface remains.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:489-491

Evidence now: <p class="hlc-field-help-text">Tick what applies to you. Each cut is usually 0.05 to 0.10% off the rate; some stack. 0.20% on ₹50 lakh over 20 years saves about ₹1.5 lakh (from stacked cuts). Insurance is the one to watch: the rate cut can cost less than the premium they add to your loan. You can't be forced to buy their cover.</p>
                    <a class="hlc-field-help-more" href="concessions.html#bank-rates">Learn more</a>

### R09-no-back

Status: still_open

What a person meets now: Concessions guide localnav with Explore banks CTA and no Back.

Why this status: The concessions page has Guide localnav and an Explore banks CTA, but no clear Back control that returns from Learn more. A person still has no clear Back for this path.

Where: pages/concessions.html · content/guide/concessions.body.html:1-28

Evidence now: <a class="localnav-cta" href="explore-banks.html">Explore banks</a>

## theme-10 — Loan-input helpers start with “Sets” and the property name is too complex

Fundamental: The notes under the form boxes start with “Sets” and do not say why the number is asked. One note uses a word ordinary people here do not know. The name of a money box stacks too many words, so it is unclear which amount to type.

Theme verdict: open

Open places: 3 (still_open: 0, looks_changed_still_open: 3, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R10-sets-row

Status: looks_changed_still_open

What a person meets now: Row about text Sets how much you can borrow.

Why this status: Under-box helpers no longer lead with Sets ceiling wording, but row-about lines still start with “Sets …” and state an effect rather than why the number is asked in everyday terms. Same Sets-helper kind after the move.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:15-15

Evidence now: <div class="hlc-form-row-head"><p class="hlc-form-row-about">Sets how much you can borrow</p></div>

### R10-sets-emi

Status: looks_changed_still_open

What a person meets now: Row about text Sets loan amount and monthly EMI.

Why this status: Another row-about still starts with Sets. Same helper failure kind on the form.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:122-122

Evidence now: <div class="hlc-form-row-head"><p class="hlc-form-row-about">Sets loan amount and monthly EMI</p></div>

### R10-property-label

Status: looks_changed_still_open

What a person meets now: Property value as per agreement field label.

Why this status: The money-box label was renamed from Property agreement value to Property value as per agreement. It still stacks qualifier words on the amount box, so which amount to type stays complex in the same way.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:40-40

Evidence now: <span class="hlc-field-label">Property value<span class="hlc-field-label-qualifier"> as per agreement</span>

## theme-11 — CIBIL is one exact number, so the table can only show one rate

Fundamental: The form asks for one exact number when people usually know only a band. Because of that, the list can only show one price, even though several prices would be true.

Theme verdict: open

Open places: 1 (still_open: 1, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R11-cibil

Status: still_open

What a person meets now: Required CIBIL score exact number input.

Why this status: CIBIL remains a required exact three-digit number field (value/placeholder 780). Help text says you need not know the exact number, but the control is still one exact score, so the list still prices one band.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:200-216

Evidence now: <span class="hlc-field-label">CIBIL score<sup class="hlc-req" aria-hidden="true">*</sup>

## theme-12 — Explore banks lists today’s banks but does not give the hacks

Fundamental: The tool only lists what you can get today from the numbers you typed. It does not tell you what to change to save money over the next months. On first open you do not already see filled typical numbers, the advice, and the list together, and changing one box drops earlier numbers without showing the new price first.

Theme verdict: open

Open places: 1 (still_open: 0, looks_changed_still_open: 1, new_since_recheck: 0)
Closed places: 1
Old hits that were not a real match: 0

### R12-intelligence

Status: looks_changed_still_open

What a person meets now: Hidden-until-match intelligence panel before the results table.

Why this status: An intelligence panel and tip engine now exist after match, so change-to-save advice can appear. On first open the panel is hidden; a person still does not already see typical filled numbers, the advice, and the list together before Compare. Same missing first-land layer kind after the addition.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:333-374

Evidence now: <!-- Intelligence panel — shown after match, before results table -->
          <section
            class="hlc-intelligence"
            id="hlc-intelligence"

### R12-tips-engine

Status: closed

What a person meets now: Post-match intelligence tips that name a change and a rate cut.

Why this status: After a match, tip functions can tell a person what score or change would cut the rate. That pure “no hacks at all” failure is not true once results are shown. First-land absence remains covered on R12-intelligence.

Where: pages/explore-banks.html · src/hlc-intelligence.js:75-104

Evidence now: heading: "At " + q.cibilScore + " CIBIL your best rate is " + pctStr(currentBestRate) + " \u2014 " + nextStep + " cuts it to " + pctStr(cfRate),

## theme-13 — Extra eligibility sits behind Adjust eligibility instead of as columns

Fundamental: Questions that change the answer are tucked away, so they look optional even though they still change the result. The button that hides them looks like it cannot be opened, and its name is not everyday English. Opening one extra choice also teaches people they can add someone to make the amount larger.

Theme verdict: open

Open places: 1 (still_open: 0, looks_changed_still_open: 1, new_since_recheck: 0)
Closed places: 1
Old hits that were not a real match: 0

### R13-adjust-gone

Status: gone_surface

What a person meets now: Visible form rows including co-applicant block without Adjust eligibility.

Why this status: Adjust eligibility as the hide control is not present. Main loan fields sit in visible rows. The old Adjust button surface is gone.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:279-320

Evidence now: <div class="hlc-form-row hlc-form-row--coapplicant">
                  <div class="hlc-form-more" id="hlc-form-more">

### R13-coapplicant

Status: looks_changed_still_open

What a person meets now: Add a co-applicant with income to borrow more, with Add control.

Why this status: Co-applicant is no longer behind Adjust eligibility, but the visible line still coaches adding someone to borrow more, and fields stay behind Add. Extra eligibility that changes the result still looks optional in the same kind of way.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:285-300

Evidence now: Add a co-applicant with income to borrow <span class="hlc-coapplicant-tail">more.

## theme-14 — “See options” and “Explore banks” are the wrong names, and the button sits in the wrong place

Fundamental: The main button and the page name sound like browsing everything, so it is unclear you are lining offers up to compare. That button also sits off to the side of extra questions, not under them in the middle.

Theme verdict: open

Open places: 2 (still_open: 1, looks_changed_still_open: 1, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R14-title

Status: still_open

What a person meets now: Page title Explore banks.

Why this status: The page name is still Explore banks, which sounds like browsing everything rather than lining offers up to compare. Same wrong-name failure kind for the page.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:4-4

Evidence now: <h1 class="hlc-title"><span class="hlc-title-wash">Explore banks.</span></h1>

### R14-compare-btn

Status: looks_changed_still_open

What a person meets now: Primary Compare submit under the form (id hlc-see-options).

Why this status: The primary control label is now Compare (id still hlc-see-options) and it sits under the form in the submit row, not beside Adjust eligibility. The side placement failure is gone, but the page title above still frames browsing, so the browse-vs-compare naming failure remains on the same tool surface.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:324-326

Evidence now: <button type="submit" class="home-hero-cta home-hero-cta-primary hlc-compare-cta" id="hlc-see-options"><svg class="hlc-compare-icon"

## theme-15 — The loan form does not show which fields matter most

Fundamental: Every box on the form looks equally important, so filling it does not teach which answers move the result most. The little info marks are also clustered and hard to use.

Theme verdict: open

Open places: 1 (still_open: 0, looks_changed_still_open: 1, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R15-importance

Status: looks_changed_still_open

What a person meets now: Hero form row with about-line but no importance marks.

Why this status: Rows now use about-lines and some hero sizing, but there are still no stars, meter, score, or clear importance marks that teach which answers move the result most. Filling still treats fields as largely equal in importance.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:14-16

Evidence now: <div class="hlc-form-row hlc-form-row--hero">
                  <div class="hlc-form-row-head"><p class="hlc-form-row-about">Sets how much you can borrow</p></div>

## theme-16 — The page says banks, but the list is lenders

Fundamental: The headings and buttons keep saying “banks,” but the list also includes money places that are not banks. The same list is named two different ways on one screen.

Theme verdict: open

Open places: 2 (still_open: 2, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R16-banks-chrome

Status: still_open

What a person meets now: Explore banks page title and bank-worded chrome.

Why this status: Chrome still says banks (title, Bank options, Bank type) while the results column header is Lenders. The same list is named two ways on one tool.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:4-4

Evidence now: <h1 class="hlc-title"><span class="hlc-title-wash">Explore banks.</span></h1>

### R16-lenders-header

Status: still_open

What a person meets now: Table column header label Lenders.

Why this status: The compare table head labels the sticky column Lenders while page chrome says banks. Dual naming remains.

Where: pages/explore-banks.html · src/home-loan-compare.js:8299-8304

Evidence now: '<span class="hlc-bank-head-label">Lenders</span>' +

## theme-17 — Results tabs sit too far from the table, and Apply once is not on the checkboxes

Fundamental: The buttons that belong with the results sit far above the list, with a large empty band, so they do not read as the top of that list. The action that uses the ticks on each row sits on that far bar, not next to the ticks it acts on.

Theme verdict: open

Open places: 2 (still_open: 0, looks_changed_still_open: 2, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R17-apply-bar

Status: looks_changed_still_open

What a person meets now: Apply once placed over the lender/checkbox column on the results head bar.

Why this status: Apply once was moved into the lender/checkbox column zone on the results head bar, and tab-to-table air is tightened. It still lives on that tools bar (and a mobile dock), not next to the row ticks it acts on. Same Apply-away-from-ticks kind after the layout edit.

Where: pages/explore-banks.html · css/shroffin-explore-banks.css:2551-2564

Evidence now:  * Lead the row so Apply once sits above the select-all checkbox / lender col.
   * Button on the left, N selected on the right — both stay inside the bank
   * column; tabs start after.

### R17-tabs

Status: looks_changed_still_open

What a person meets now: Overview / Charges tabs on the results head above the table.

Why this status: Overview / Charges tabs still sit in the results head with Apply once, above the table body. Layout is denser than the old large empty band, but the controls remain a separate bar above the list rather than the top of the list itself.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:391-426

Evidence now: <div class="hlc-results-actions">
                <div class="hlc-results-tools-lead">
                  <div class="hlc-column-tabs-scroller">
                    <div class="hlc-column-tabs" role="tablist" aria-label="Column groups">
                      <button type="button" class="hlc-column-tab" role="tab" data-group="essentials"

## theme-18 — Results need a clear edit/clear button, and there is no search for a named bank

Fundamental: Once the answers are on screen, going back to the form or wiping a filled card has no clear button. There is also no search on the list for a name you already have in mind.

Theme verdict: open

Open places: 2 (still_open: 2, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R18-no-edit-clear

Status: still_open

What a person meets now: Results shell head without an edit/clear-for-form control.

Why this status: Results chrome has filters Clear all and Apply once, but no clear Edit/Clear control to return to or wipe the filled loan form or eligibility card after answers are on screen.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:390-428

Evidence now: <section class="hlc-results-shell" id="hlc-results-shell" hidden aria-live="polite">
            <div class="hlc-results-head">

### R18-no-search

Status: still_open

What a person meets now: Compare table area without a named-bank search field.

Why this status: The lenders table area has no in-page search box for a named bank such as SBI. That missing-search failure remains.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:635-666

Evidence now: <div class="hlc-compare-table-area">
                <div class="hlc-table-wrap">

## theme-19 — Scheme names live in More details, not in the product

Fundamental: The named offer you would take to a branch lives in a hidden extra dump, not in the comparison itself. The “more” mark is hard to notice and sounds like more about the company, not about the loan. The list also cannot show the real offer name, or two different offers from the same place.

Theme verdict: open

Open places: 2 (still_open: 2, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R19-scheme-drawer

Status: still_open

What a person meets now: Drawer Scheme section with Scheme name field.

Why this status: Scheme name is opened inside the More details drawer dump, not as a first-class column in the comparison table. The named offer still lives in the hidden extra.

Where: pages/explore-banks.html · src/home-loan-compare.js:9344-9351

Evidence now: drawerSection(
        "Scheme",
        [
          ["Bank", row.bankName || "—"],
          ["Scheme name", row.scheme || "—"],

### R19-row-bank-only

Status: still_open

What a person meets now: Results row showing bank name details control only.

Why this status: Each results row shows the bank name as the details control; scheme identity is not in the row product surface. More details remains the place for scheme facts.

Where: pages/explore-banks.html · src/home-loan-compare.js:8539-8548

Evidence now: '<div class="hlc-bank-name">' +
          bankLogoHtml(row.bankName) +
          '<button type="button" class="hlc-bank-name-text" data-detail="' +
          row.id +
          '" aria-label="Details for ' +
          escapeHtml(row.bankName) +
          '">' +
          escapeHtml(row.bankName) +

## theme-20 — Charges and calculations do not explain themselves

Fundamental: Money numbers print as exact figures with no mark that anyone stands behind them. The how-we-got-this steps are unlabeled formulas, and the fee notes use hard legal words, marks that look like links, and no rupee math for a missed payment. Same government fees repeat on every row, and the highest or lowest extra charges are not named.

Theme verdict: open

Open places: 3 (still_open: 3, looks_changed_still_open: 0, new_since_recheck: 0)
Closed places: 0
Old hits that were not a real match: 0

### R20-footnotes

Status: still_open

What a person meets now: Charge footnote marker sequence * † ^.

Why this status: Charge columns still use footnote marker glyphs (* † ^ and related). Marks that behave like note links without plain rupee standing remain on the charges surface.

Where: pages/explore-banks.html · src/home-loan-compare.js:231-250

Evidence now:  * Sequence follows traditional footnotes: * then †; government already uses ^.

### R20-calc-drawer

Status: still_open

What a person meets now: Calculation of the charges drawer disclose blocks.

Why this status: How-we-got-this still opens as calculation drawers and note blocks rather than labeled plain steps with rupee standing on the table itself. The unexplained charges/calculations kind remains.

Where: pages/explore-banks.html · src/home-loan-compare.js:650-658

Evidence now: const calcTitle = extra.calcTitle || "Calculation of the charges";
  const noteLines = extra.noteLines || [];
  const notesBlock = calcNotesBlockHtml(noteLines);
  let html = drawerDiscloseHtml(
    calcTitle,
    calcHtml || "",

### R20-charges-note

Status: still_open

What a person meets now: Shared hlc-charges-note region under the table.

Why this status: Charges notes still render into a shared note region under the table, which is where repeated government-fee and legal-note patterns land for the person.

Where: pages/explore-banks.html · content/pages/explore-banks.body.html:678-678

Evidence now: <div class="hlc-charges-note" id="hlc-charges-note" role="note" hidden></div>

---

Closing note: Same 20 themes as the fundamentals file. Not a new grouping. Not a repair list.
