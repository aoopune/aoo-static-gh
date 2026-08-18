# Bank windows: 10-point vs 5–5, and which rate you take out of 10

They leave the average/high reject and talk about **how banks actually band**. Banks **take windows**. One side: you **won’t get an accurate rate**; rates **don’t change every 10 points**. Other: **everyone’s windows are regular**, so **break it with 5–5**. Agreement that **the list gets bigger**. Then the hard question: **if you do 10 with 5–5, which rate do you take out of 10?** CIBIL **top is 900**. Finer buckets make this **critical**. Someone tests: **then can you give an approximate?**

## Classification
- kind: issue | product / rate mapping vs CIBIL window size
- status: open (10 vs 5–5 not chosen; “which rate” not answered)
- surface: Explore banks / `#hlc-cibil` (`data-hlc-max="900"`) + Bank options **Rate** column (Overview)
- viewport: 1366x768 @2x
- speakers: Both. A pushes windows / 5–5. B (accuracy) asks which rate comes out of a 10-point band, then tests “approximate.” ASR unlabeled; turns from objection vs proposal.

## Session metadata
- folder: `wb-rec-260815-2125`
- recording id: `ba64f48a-197b-40a6-883c-3d23b6cf8313`
- started_at: 2026-08-15T15:55:21.859Z
- ended_at: 2026-08-15T16:04:20.986Z
- duration_ms: 539127 (~8 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 70
- event count: 94
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2116` — not this topic
- next: `wb-rec-260815-2134` `04` — bank tells **775–780**, UI shows **one rate**; “which is the lowest? On which basis?”; floats a **5** and a **25**-point limit
- ASR: **55 → 5–5** (five-point steps). First “55” p≈0.05 is weak; later “55,” p≈0.97. Confirmed by this clip’s `09` “next **5-5** drop downs.” Do **not** read FOIR 55% (on the same form, closed under Adjust eligibility).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- CIBIL still **780**. Overview **Rate** header is visible at the bottom; full rate rows are below the fold. They do not scroll.
- FOIR “55% (default)” is **not** in view (Adjust eligibility closed). Do not treat the spoken 5–5 as that FOIR control.
- Click: none.
- Screenshots **01:26–02:07**: `0013.jpg`–`0017.jpg` (t=82196–120195). Same rest card.

## What they said (faithful, complete)

**01:26.890–01:43.770** both:
> Raw ASR: “Means, they take the windows. There will not be an accurate rate. They don't change in 10 points. Yes. But everyone's windows are regular. Then break it with 55. Yes, yes. Then the list gets bigger. GCF. Yes, yes, yes.”
> Corrected: Banks **take windows**. One side: you **won’t get an accurate rate**; rates **don’t** [always] change every 10 points. Other: **everyone’s windows are regular** (banks use standard bands). Then: **break it with 5–5** (ASR **“55”** — five-point windows). Agreement that **the list gets bigger**. ASR **“GCF”** p≈0.53 — filler / “see if”; **not** a product acronym. They agree (“yes, yes, yes”).

**01:47.800–02:07.020** Speaker B / A:
> Raw ASR: “Then what is it? With 55... With 55, you get a lot of smoke. And if you do 10 with 55... Then what rate do you want to take out of 10? Because... Ok, you suppose... 900 top score. Do you know what I mean? It becomes critical. Then can you give an approximate?”
> Corrected: **5–5** makes **a lot of** buckets (ASR **“smoke”** p≈0.41 — slots / small pieces, not a new UI word). **10-point vs 5–5:** **which rate do you take out of a 10-point window?** CIBIL **top is 900** (matches `data-hlc-max="900"`). Finer buckets make this **critical**. Then a test: **can you give an approximate?**
> The next span answers that test: **Not approximate.**

## First-principles problem
- What must be true: if the visitor’s CIBIL is a **window**, the **Rate** cell still has to pick **one** number (or show a band) using a rule they can stand behind.
- Root vs symptom: “10 vs 5” is the symptom of bucket size. The root is: **banks price in windows**; the table shows **one rate**; nobody has said which point in the window that rate is.
- Constraints: list size matters (5–5 **gets bigger**). Top of the bureau scale is **900**. Approximate is about to be rejected (`04`).

## Directions they considered
1. Live with bank windows even if the rate is not exact.
2. Assume **regular** (aligned) windows — later contradicted in `05` (breakouts **not parallel**).
3. **5–5** steps — list gets bigger; lots of buckets.
4. **10-point** window — then **which rate out of 10?**
5. **Approximate** as a way out — asked, not accepted (`04`).
- Lean: the mapping question is live. No winner between 10 and 5–5. 2134 still asks lowest-vs-basis and floats 5 vs 25.

## Company / user / future thinking
- Company: a Rate column that is “somewhere in this window” is not a fair comparison.
- User: they cannot check the table if the tool cannot say which rate a band produces.
- Future: `wb-rec-260815-2134` `04` is the same question with a bank quote **775–780** and “we have to show him only one rate.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: CIBIL → rate lookup in the compare bundle; Overview Rate column; `#hlc-cibil` `data-hlc-max="900"`.
- Acceptance criteria in their words: banks **take windows**; **which rate do you take out of 10?**; 5–5 makes the **list bigger**; top score **900**.
- What NOT to do: do not treat ASR “55” as FOIR 55%. Do not treat “GCF” or “smoke” as feature names. Do not pick lowest-rate silently (`04` in 2134 still asks the basis).
- Open questions: 5 vs 10 (and 2134’s 25). Lowest vs another statistic. Whether Rate should show a **band**.
- Related recordings:
  - continues_from: `01` (10 pieces / 759 vs 780)
  - continues_in: `04` (not approximate); `05` (breakouts not parallel). **`wb-rec-260815-2134` `04`** — 775–780 vs one shown rate.

## Evidence index
- `audio.vtt` 01:26.890–02:07.020
- `audio.json`: first `55.` p≈0.05; later `55,` p≈0.97; `GCF.` p≈0.53; `smoke.` p≈0.41; `900` p≈0.21
- `events.json`: idle
- `screenshots/0013.jpg`–`0017.jpg`
- Site `#hlc-cibil` `data-hlc-max="900"`
