# Site-scan issues ranked by confidence to solve

This file is a **solvability ranking**, not a severity ranking, not a repair list, and not a rewrite of the site scan.

It answers one question: **for each kind of problem found on the working site, how sure is the agent that a lasting change can actually be shipped from source?**

Source of the findings: [`_theme-site-scan.md`](_theme-site-scan.md) (12,188 atoms scanned · 564 hits · 20 themes).

---

## What this ranking is

- **High** means the bump is named clearly, lives in a known place, and a complete change can be made without inventing a new product.
- **Medium** means the bump is real, but the change touches layout, engine, or a founder decision about meaning.
- **Low** means the scan tagged a kind of trouble that needs new product rules, legal wording, a big copy pass, or (in one case) nothing current to touch.

Hit counts come from the site scan. **A high hit count does not mean high solvability.** Theme-02 has 306 hits and ranks near the bottom to solve as one job, because many of those hits are long sentences tagged as “heavy,” not 306 separate, equally real copy defects.

This ranking does **not** say which problem hurts the customer most. It says which ones the agent can finish with high certainty.

---

## Snapshot

| Rank | Theme | Hits in scan | Confidence band |
|---|---|---:|---|
| 1 | theme-10 — Helper notes start with “Sets”; property name too complex | 20 | Highest |
| 2 | theme-14 — Wrong names for compare; button in the wrong place | 4 | Highest |
| 3 | theme-01 — Hero headline and button not centered | 2 | Highest |
| 4 | theme-09 — Learn more leaves the filter; no Back | 2 | Highest |
| 5 | theme-04 — “Zero commissions” mixes bank and customer | 5 | Highest |
| 6 | theme-16 — Page says banks; list is lenders | 23 | High |
| 7 | theme-08 — Filters exclusive and unexplained | 16 | High |
| 8 | theme-07 — Help strip off the footer; disclaimer washes hands | 4 | High |
| 9 | theme-17 — Results tabs far from table; Apply once not on ticks | 20 | High |
| 10 | theme-18 — No clear edit/clear; no named-bank search | 6 | High |
| 11 | theme-03 — Zero block on scroll looks broken | 20 | Medium |
| 12 | theme-15 — Form does not show which fields matter most | 30 | Medium |
| 13 | theme-13 — Extra eligibility tucked away | 32 | Medium |
| 14 | theme-11 — CIBIL is one exact number | 10 | Medium |
| 15 | theme-19 — Scheme names live in More details | 10 | Medium |
| 16 | theme-20 — Charges and calculations do not explain themselves | 12 | Lower |
| 17 | theme-06 — Built around you does not show the real product | 36 | Lower |
| 18 | theme-12 — Lists today; no hacks / intelligence | 6 | Lower |
| 19 | theme-02 — Sentences too heavy or empty | 306 | Lower (as one job) |
| 20 | theme-05 — Too many thin full-screen slides | 0 | Nothing to solve from this scan |

---

## Highest confidence

These are small, named, and owned by copy, labels, links, or spacing. A complete change can be made without a new product layer.

### 1. theme-10 — Loan-input helpers start with “Sets”; property name too complex

**Hits:** 20 (10 original · 10 new, including the mobile product demo frame)

**What a person meets:** Notes under money boxes start with “Sets” and do not say why the number is asked. One note uses “ceiling.” The property box name stacks too many words, so it is unclear which amount to type.

**Why confidence is highest:** The bump is the words on the form. The places are known (Explore banks inputs, and the same labels in the demo frames). Changing helper text and the property label does not need a new engine.

**What still needs a human:** The exact everyday words for “property value as per agreement,” so India-ordinary language is used, not a new stack of jargon.

**Not the same as:** theme-15 (importance marks) or theme-11 (CIBIL as a band). Those are about *weight* and *one vs many prices*, not helper wording.

---

### 2. theme-14 — “See options” / “Explore banks” are the wrong names; button sits in the wrong place

**Hits:** 4 (all original)

**What a person meets:** The main action and the page name sound like browsing everything, so it is unclear you are lining offers up to compare. The button sits to the side of extra questions, not under them in the middle.

**Why confidence is highest:** Name + position. Current source already shows a Compare control in places; the remaining bump is still the page chrome saying Explore banks and where that control sits relative to extra fields.

**What still needs a human:** Whether the public page title stays “Explore banks” for search/nav, while the button says Compare — that is a product naming choice, not a technical unknown.

---

### 3. theme-01 — Hero headline and Explore banks button are not centered in the top block

**Hits:** 2 (same home hero, served page + body source)

**What a person meets:** On the home top block, empty space above the headline is not the same as empty space below the button, so the pair does not feel centered.

**Why confidence is highest:** One block, one spacing job. No new meaning. No new product.

**What still needs a human:** A look on phone and desktop after the gap is even, because “feels centered” is visual.

---

### 4. theme-09 — Concessions Learn more takes you off the filter; the page has no Back

**Hits:** 2 (all original)

**What a person meets:** To understand a filter choice, you leave Explore banks. The options on the choice itself do not each have a short note. On the other page there is no clear way back.

**Why confidence is highest:** Two concrete objects — notes next to the choice, and a Back path on Concessions. No engine change.

**What still needs a human:** How long each on-filter note can be before the filter itself gets crowded.

---

### 5. theme-04 — “Zero commissions” mixes bank and customer

**Hits:** 5 (all original)

**What a person meets:** “Zero” is easy to hear as “I pay nothing,” when it is about Shroffin taking no cut from the places it lists. “Zero bias” then switches to not pushing anyone. The small line under the heading is too small to settle the meaning.

**Why confidence is highest:** One home block, wording and size of the supporting line. The meaning is already known from the review.

**What still needs a human:** The exact customer-facing line, because this is a promise. Brand files must own the words.

**Tied to:** theme-03 is the *scroll look* of the same Zero block. theme-04 is the *meaning* of the words.

---

## High confidence

These are still finishable. They need a product choice (word, filter type, legal tone) or a layout move, not a new product.

### 6. theme-16 — The page says banks; the list is lenders

**Hits:** 23 (all original)

**What a person meets:** Headings and buttons say “banks.” The list also includes money places that are not banks. The same list is named two ways on one screen.

**Why confidence is high:** A wording sweep across chrome vs list. The places are known.

**What still needs a human:** Where “banks” stays (people search that word) vs where “lenders” is the honest name. That is a founder call, then a consistent pass.

---

### 7. theme-08 — Explore banks filters are exclusive and unexplained

**Hits:** 16 (all original)

**What a person meets:** You can only pick one option at a time even when more than one can be true together. Labels do not explain Public vs Private, Floating vs Fixed, or what Overdraft is, except that it costs more.

**Why confidence is high:** Filter behavior and short notes are in the form we already have. Current source already uses some checkboxes; the remaining bump is exclusive-feeling chips and unexplained names.

**What still needs a human:** Whether both Public and Private can be on together (review asked for that). That is a product rule, then implementation.

---

### 8. theme-07 — Help strip sits off the footer; disclaimer washes its hands

**Hits:** 4 (all original)

**What a person meets:** The help bar sits in a large empty gap, as if it were its own full-screen section. The small print reads like leftover legal language. Its tone is “we are not responsible,” which clashes with the product standing with you.

**Why confidence is high:** Gap is layout. Tone is copy in a known footer block.

**What still needs a human:** Legal line that still tells the truth (Shroffin is not the lender) without sounding like a wash of hands. Brand + legal, not code unknown.

---

### 9. theme-17 — Results tabs sit too far from the table; Apply once is not on the checkboxes

**Hits:** 20 (all original)

**What a person meets:** Overview / Charges sit far above the list. Apply once sits on that far bar, not next to the ticks it acts on.

**Why confidence is high:** Layout ownership is known (results head vs table). Moving the tab bar and Apply once is a structure change, not a new feature.

**What still needs a human:** Mobile vs desktop — the site already treats those differently. The locked-viewport rule applies if only one size is in scope.

---

### 10. theme-18 — Results need a clear edit/clear; no search for a named bank

**Hits:** 6 (all original)

**What a person meets:** After answers are on screen, going back to the form or wiping a filled card has no clear button. There is no in-page search for a name you already have (for example SBI).

**Why confidence is high:** Add visible Edit / Clear and a name search on the list. Controls we already know how to build.

**What still needs a human:** What “Clear” wipes (one card vs whole form). Small product rule.

---

## Medium confidence

The bump is real. A lasting fix is larger: animation, form teaching, engine bands, or table data shape.

### 11. theme-03 — Zero block on scroll looks broken

**Hits:** 20 (all original)

**What a person meets:** While scrolling, the claim shows as leftover pieces — big “Zero” with the rest of the sentence missing — then color fades. For a moment it looks broken.

**Why medium:** The motion lives in home scroll code and CSS. The *look* can be changed. “Does it still feel broken while you scroll” needs a live check, not source alone.

**Tied to:** theme-04 (same block, different failure: meaning vs leftover pieces).

---

### 12. theme-15 — The loan form does not show which fields matter most

**Hits:** 30 (all original)

**What a person meets:** Every box looks equally important. Filling the form does not teach which answers move the result most. Info marks are clustered and hard to use.

**Why medium:** Marks (order, stars, color) are buildable. *Which* fields matter most is a founder/product rule, not something to invent from CSS.

**Not the same as:** theme-10 (helper wording) or theme-13 (hidden extras).

---

### 13. theme-13 — Extra eligibility sits behind Adjust eligibility

**Hits:** 32 (all original)

**What a person meets:** Questions that change the answer are tucked away, so they look optional even though they still change the loan. The hide control looks unopenable / is not everyday English. Opening co-applicant also teaches adding someone to make the amount larger.

**Why medium:** Current source already shows co-applicant in a “more” panel, not always the old “Adjust eligibility” label. The *kind* of problem (extras hidden, still change the result, co-applicant coaches inflate) is still there. Fixing it means a real form layout change, not a label tweak.

**What still needs a human:** How visible extras should be on first land vs after Compare, and how honest the co-applicant line should be.

---

### 14. theme-11 — CIBIL is one exact number, so the table can only show one rate

**Hits:** 10 (all original)

**What a person meets:** The form asks for one exact score. People usually know a band. The list then shows one price, even though several prices would be true for a band.

**Why medium:** Dropdown/range on the form is straightforward. Making the *table* show more than one rate for a band is engine and data, not a label.

---

### 15. theme-19 — Scheme names live in More details, not in the product

**Hits:** 10 (all original)

**What a person meets:** The named offer you would take to a branch lives in a hidden dump. “More” sounds like more about the company, not the loan. The list cannot show the real offer name, or two offers from the same place.

**Why medium:** Renaming “More” is easy. Putting real scheme identity in the comparison row needs the data to carry two schemes of one lender. That is table shape, not a tooltip.

---

## Lower confidence

These need a new product layer, legal/math ownership, a huge copy judgment pass, or (theme-05) the scan found nothing.

### 16. theme-20 — Charges and calculations do not explain themselves

**Hits:** 12 (all original)

**What a person meets:** Exact figures with no mark that anyone stands behind them. How-we-got-this steps are unlabeled formulas. Fee notes use hard legal words, marks that look like links, no rupee math for a missed payment. Government fees repeat on every row. Highest/lowest extras are not named.

**Why lower:** Several different failures in one theme (star on rates, unlabeled steps, jargon, fake-link marks, repeated gov fees, missing rupee story). Some of that is labels. The rupee story and “who stands behind this number” need your numbers and a legal line. A partial change is possible; a complete theme close is not a small job.

---

### 17. theme-06 — Built around you does not show the real product

**Hits:** 36 (4 original · 32 new, mostly demo iframe documents)

**What a person meets:** A section that is supposed to show the product only lets you read one line at a time. The picture beside it repeats the same words. “One shared view” is written, not shown as a product you can look at.

**Why lower:** This is the home story + demo frames, not a single control. “Show the real product” is a product/design call. New hits on iframe demos are the same kind of object (demo of Explore banks), so the count is large without being 36 independent bugs.

**What still needs a human:** Whether the demo should *be* the live tool, a film of the live tool, or a still of the real table.

---

### 18. theme-12 — Explore banks lists today’s banks but does not give the hacks

**Hits:** 6 (all original)

**What a person meets:** The tool lists what you can get today from the numbers you typed. It does not tell you what to change to save money over the next months. First land does not already show typical numbers, advice, and the list together.

**Why lower:** Source already has an intelligence panel shell. The *missing layer* is the advice itself — what to change to save. That is a product feature with rules, not a polish of existing labels. A version can be built; “the hacks” have to be yours.

---

### 19. theme-02 — Homepage sentences are too heavy, or they add nothing

**Hits:** 306 (14 original · 292 new)

**What a person meets (the real kind):** Sentences use too many words, extra clauses, overlapping phrases. Some supporting lines add almost nothing. A freshness line is not plain English.

**Why this ranks low as one job:** The *kind* is real on home story lines. The *scan count is inflated*. Long legal, guide, calculator, and demo-frame sentences were tagged because they are long or stacked, not because each is the same home-page “heavy or empty” problem. Solving “306 hits” as one pass would mix real home copy with false-wide matches.

**What can still be solved with high confidence *inside* this theme:** The original home story lines, overlapping “no spam / no hard sell / no push,” empty supporting lines, and “data last checked” — a small set, with brand files open, not the full 306.

**How to use this rank:** Do not treat 306 as 306 equally solvable defects. Treat theme-02 as a **copy quality kind**, then work the original home lines first.

---

### 20. theme-05 — Homepage story uses too many thin full-screen slides

**Hits:** 0

**What a person would meet (from the fundamental):** The opening story is split into too many full-screen pieces. Many are thin. Strengths repeat. One extra point is buried.

**Why last:** This scan found **no matching surface** in current source. Either the slides were already changed, or the scan did not match the current markup. There is nothing here to solve until someone confirms the live home page still has that stacked-slide story.

---

## How to use this file

1. Open [`_theme-site-scan.md`](_theme-site-scan.md) for **where** each kind still appears.
2. Use **this file** to decide **order of work by chance of finishing**, not by hit count.
3. If you want “what hurts the customer most,” that is a different ranking. Do not mix the two.
4. Theme-02: use the original home lines, not the 306-hit dump, unless you first re-check which hits are real.

---

## Related files

| File | Role |
|---|---|
| [`_theme-site-scan.md`](_theme-site-scan.md) | Human map of hits (what a person meets, why this theme, where) |
| [`_theme-site-scan-ledger.json`](_theme-site-scan-ledger.json) | Machine hit list and counts |
| [`_theme-fundamentals.md`](_theme-fundamentals.md) | The kind of problem, in general words |
| [`_theme-index.md`](_theme-index.md) | Original review grouping (issue files), not this scan |

This ranking does not change the website. It does not merge or split themes. It does not invent new kinds of problems.
