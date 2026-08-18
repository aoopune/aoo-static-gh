# Banks give a CIBIL band (775–780) but the table shows one rate

If the visitor types a maximum, they still need a **limit** so the filter can pick a rate. A bank tells them **775 to 780**; Shroffin has to show **only one rate**. They ask: which one — the **lowest**? On what **basis**? They float a **limit of 5** when a maximum is given, then a **maximum limit of 25** as what would make the filter “correct.” They do not pick 5 vs 25.

## Classification
- kind: issue | product / rate display vs CIBIL window
- status: open
- surface: explore-banks / `#hlc-cibil` + Bank options **Rate** column (Overview tab, `section#hlc-results-shell`)
- viewport: 1366x768 @2x
- speakers: Speaker A walks the mapping problem after the 680–700 example. ASR unlabeled. Short questions (“which is the lowest?”) are the same stretch, not a second product vote.

## Session metadata
- folder: `wb-rec-260815-2134`
- recording id: `1965821a-27df-4039-8e62-b268e8696a5b`
- clip: 11 of 30
- started_at: 2026-08-15T16:04:29.489Z
- ended_at: 2026-08-15T16:10:04.857Z
- duration_ms: 335368 (~5 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 40 (JPEG)
- event count: 53
- console: empty
- tabs: 1
- previous: `2125` — “which rate do you take out of 10?”; bank breakouts not parallel (800–810 vs another bank)
- next: `05` in this folder (show what is possible). Skip `2201`. `2204` does not reopen 775–780 mapping.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Overview is selected. Table headers visible at the bottom of the rest shots: Lenders, **Rate** (sort up), Loan amount, Tenure (yrs), EMI. Full rate rows are **not** in view until they scroll at **05:03.794**. Later `0039.jpg` (t=326205): PNB **8.75%**, Canara **8.80%**, BoB **9.15%**, City Union **9.35%** — **one rate per bank**.
- CIBIL still **780**. No 775–780 window on screen.
- Screenshots during this talk (**02:55–03:34**): `0020.jpg`–`0024.jpg` (t=176206–210206). Idle, still on the input card.

## What they said (faithful, complete)

**02:55.850–03:05.370** Speaker A:
> Raw ASR: “When he gives a maximum, he has to give a limit of 5. If he gives a maximum, if he gives a maximum of 760, then the maximum can be 700.”
> Corrected: when a **maximum** is given, there must be a **limit of 5** (same 5-point family as `2125`’s “next 5-5 drop downs”). The “760 … maximum can be 700” line is internally inconsistent as transcribed — do **not** treat 700 as a decided cap for a 760 max. Possible ASR slip (`700.` p≈0.17), or a warning that a **wrong window** maps 760 onto a 700 band. They do not resolve it.

**03:06.090–03:14.890** Speaker A:
> Raw ASR: “In this case, we can't filter out what the rate is. We can't tell him. Because the bank tells us”
> Corrected: with a loose window they **cannot filter the rate** and **cannot tell** the visitor the rate. Cause: **the bank** supplies the band.

**03:17.570–03:26.450** Speaker A:
> Raw ASR: “775 to 780. But we have to show him only one rate. Which is the lowest rate? On which basis?”
> Corrected: same. Bank quote is **775–780**. Shroffin currently shows **one** rate. Open questions they asked, **not answered**: is it the **lowest**? **On which basis?**

**03:29.010–03:34.310** Speaker A:
> Raw ASR: “Basically, if I give a maximum limit of 25, then our filter will be correct.”
> Corrected: a **maximum limit of 25** (25 CIBIL points) is what they think would make **the filter correct**. Not implemented; not compared to the “limit of 5” in a final pick. “correct.” is low-confidence but the 25 is the number they floated.

Pros: a bounded window so the table can actually choose a rate. Cons: one displayed rate hides the bank’s 775–780 band; they do not know whether to take the lowest. Brainstorming: 5-point limit vs 25-point limit; 760 / 700 / 775–780 as spoken examples.

## First-principles problem
- What must be true: if CIBIL is a range, the rate in the table must have a **rule** (which point in the bank’s band, how wide the visitor’s filter).
- Root vs symptom: “we show one rate” is the symptom. Root: banks price in **windows**; the Overview **Rate** column is a single number; there is no stated mapping from a visitor range (or a 775–780 bank band) to that number. `2125` already asked “which rate do you take out of 10?”
- Constraints: they still want to show a rate (not hide the column). They asked for the basis, especially whether it is the lowest.

## Directions they considered
- Visitor max needs a numeric **limit** (spoken **5**).
- Bank band example **775–780** vs UI **one rate**.
- Show the **lowest**? Asked, not chosen.
- **25**-point maximum limit → “filter will be correct.” Floated, not locked vs 5.
- Lean: the filter is wrong until the window size and the “which rate” rule exist. No winner between 5 and 25 in this clip.

## Company / user / future thinking
- Company: Shroffin’s job is a fair view of listed lenders — a single percent that is secretly “somewhere in 775–780” is not a fair view. Banks’ breakouts are not parallel (`2125`).
- User: they cannot check the table if the tool cannot filter a rate from the band they typed.
- Future: `05` wants **possible vs now**. `06` later says “I want 2 rates.” Do not collapse those into this mapping question, but they rhyme: one Rate column is not enough for the stories they are telling.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: CIBIL → rate lookup in `src/home-loan-compare.js` / `js/home-loan-compare.bundle.js`; Overview Rate column in `section#hlc-results-shell`.
- Acceptance criteria in their words: must be able to **filter the rate**; bank tells **775 to 780**; today “we have to show him only one rate”; answer **which is the lowest** and **on which basis**; a stated window (**5** or **25** — not chosen).
- What NOT to do: do not pick lowest-rate silently without a rule they can stand behind. Do not treat ASR “760 then maximum can be 700” as a spec. Do not drop accuracy from `02` to make filtering easy.
- Open questions: 5 vs 25. Lowest vs another statistic. Whether the Rate cell should show a **band** (775–780) instead of one percent.
- Related recordings:
  - continues_from: `wb-rec-260815-2125` `01` (bank windows, “there will not be an accurate rate,” breakouts not parallel).
  - continues_in: `05` / `06` in this folder. Skip `2201`. `2204` restates CIBIL as a lever, not the 775–780 mapping.

## Evidence index
- `audio.vtt` 02:55.850–03:34.310
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: idle; Rate column only fully in view after later scroll (`0039.jpg`)
- `screenshots/0020.jpg`–`0024.jpg`; later `0039.jpg` for one-rate-per-bank
- `pages.json`: Bank options / Rate
