# If 100 people see it, success is two or three coming — go slowly

After trust vs polish they ask what launch looks like when there is **traffic**. Picture: **100** people have **seen** the site on the **home-loan channel**. The test is whether **two or three** of them actually **come**. First three = **success**. Then three more, then six, then nine — compounding one small group at a time. They say twice: **we have to go slowly.**

## Classification
- kind: discussion | launch / growth (go-to-market rule, not a page bug)
- status: open
- surface: explore-banks on screen; first UI touch of the clip happens **during** this talk (Self-employed focus, then scroll the table) — they are not changing occupation as a product decision
- viewport: 1366x768 @2x
- speakers: Speaker A walks the 100 → 2–3 → 3-6-9 ladder. Short “Okay” may be Speaker B. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2231`
- recording id: `7b334a7d-43b4-4fd5-a754-99f766cf3f24`
- clip: 17 of 30
- started_at: 2026-08-15T17:01:14.381Z
- ended_at: 2026-08-15T17:10:02.771Z
- duration_ms: 528390 (~8 min 48 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 63 (JPEG)
- event count: 85
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2222` (no mass funnel; climb the customer ladder)
- next: `wb-rec-260815-2240`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They name **traffic on the website** and a **home-loan channel** (content / audience channel — not a UI tab). The page in front of them is the thing those 2–3 people would land on.
- Click/focus/scroll (first interactions of the take, during this speech). Scroll events in `events.json` carry **empty** `data` (no x/y). Viewport change is from screenshots:
  - **02:03.203** (`t=123203`) **focus** `getByRole("button", { name: "Self-employed" })` — occupation already selected; they do not click it; they do not say “self-employed”
  - **02:04.465** (`t=124465`) **scroll** — `0015.jpg` (t=124200) is the first frame that is **not** byte-identical to start: heading “Explore banks.” is gone; more of the lenders table is in view (Canara, City Union, PNB, Bank of Baroda); Filters shows Borrower + **Concessions** (Women applicant, Green home, Insurance)
- Screenshots:
  - `0014.jpg` (t=116200) — still top of card as they start “if this website has been launched”
  - `0015.jpg` (t=124200) — after that first scroll
  - `0016.jpg`–`0023.jpg` (t=132202–196201) — same scrolled table through “we have to go slowly” (stable bytes 105601)
- What is visible: they **peeked** at bank rows while talking growth. They do not sort, filter, or change inputs. Property still ₹6,000 so EMIs are tiny (₹48). Black mask bars on some rate cells.

## What they said (faithful, complete)

**02:18.380–02:27.620** Speaker A:
> Raw ASR: “If you think that this website has been launched and there is traffic on the website. Okay. Then we have to see if two or three of them will come.”
> Corrected: same. Launch + **traffic** is not the win. The win is **two or three** people actually **coming** (using / showing up), not page views.

**02:28.920–02:32.800** Speaker A:
> Raw ASR: “100 people have seen it. On the home-loan channel.”
> Corrected: same. Denominator: **100** have **seen** it. Place named: the **home-loan channel** (their content/audience channel — they do not say YouTube/Instagram by name).

**02:36.600–02:43.000** Speaker A:
> Raw ASR: “And if 100 people have seen it, we have to see if two or three of them will come. That's it. First three have come.”
> Corrected: same. Conversion they care about: **2–3 / 100**. “That’s it” = that is the test. **First three have come** = the starting success, not 100 users.

**02:46.300–02:59.020** Speaker A (compounding, then slow):
> Raw ASR: “Success. If three have come, then the next three will come. And if three have come, then three more will come. And if three have come, then six of them will come. And if six have come, then nine of them will come. And if nine of them come, then nine of them will come. We have to go slowly. We have to go slowly.”
> Corrected: same (the last “nine then nine” is ASR repeating the rung; several words in that ladder have very low probability). Ladder: 3 → next 3 → 6 → 9. **Success** is the first three. Growth is **slow**, said twice. Not a viral funnel (2222 / this clip `02`).

They do not give a date, ad budget, or channel URL. They do not ask to add a “100 people” metric to the page.

## First-principles problem
- What must be true: after launch, the unit of success is **a few people who come**, not traffic. 100 views on the home-loan channel is only the pool; 2–3 arrivals are the test; then copy that small group again.
- Root vs symptom: not “the table doesn’t convert.” The root is **pace**: go slowly, compound threes, do not wait for a mass.
- Constraints: matches `01`–`02` (heavy cycle with a few people; not every customer; not mass new-customer engine).

## Directions they considered
- Metric: 100 seen → 2 or 3 come.
- First three = **success**.
- Then 3, 6, 9 — same size steps.
- Lean: **go slowly** (twice). Only direction.

## Company / user / future thinking
- User: the 2–3 who actually come are the ones who get the survey / gift card / possible hire (`01`).
- Company: Shroffin launches into a **home-loan channel** audience; they will not treat views as product-market fit.
- Future: slow compounding, not a launch-week spike. Next in this clip they talk **releases** and getting Guide/Tools ready (`05`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none on Explore banks. Do not add a traffic counter or “2–3 of you” copy from this talk.
- Acceptance criteria in their words: if **100** have seen it on the **home-loan channel**, see if **two or three** come; first three = **success**; then 3 / 6 / 9; **go slowly**.
- What NOT to do: do not treat the Self-employed focus or table scroll as an occupation/filter issue. Do not build a mass funnel to “fix” 2–3/100.
- Open questions: which “home-loan channel”; what “come” means (message / fill the form / apply). Not specified.
- Related recordings:
  - continues_from: `wb-rec-260815-2222` (ladder, not mass funnel) and this clip `02`
  - continues_in: this clip `05` (releases). Session: `wb-rec-260815-2240`

## Evidence index
- `audio.vtt` 02:18.380–02:59.020
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.lrc`
- `events.json`: focus Self-employed t=123203; scroll t=124465 (`data` empty — do not invent y)
- `screenshots/0014.jpg`–`0023.jpg` (esp. `0015` first changed frame)
- `replay.spec.ts`: no occupation click (focus only)
- `manifest.json`; `pages.json` `[]`
