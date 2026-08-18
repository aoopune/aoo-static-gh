# CIBIL field forces an exact score; they want a dropdown of windows

They land on CIBIL after Age. One co-founder says the box **forces the exact score**. The other asks if the fix is to be **more approximate**. The answer is **no** — they need a **dropdown** of windows: **750 to 780**, then **730 to 750**. The accuracy camp answers: **I need the exact score**, because **if I have 759** you must not treat that as **780**; **it changes in those 10-point ranges**. They float **10 pieces**, then **don’t know**, and park it: **let’s see the second one**.

## Classification
- kind: issue | discussion / form UX + rate matching (unresolved)
- status: open (split; no decision this span)
- surface: Explore banks / `form#hlc-inputs` / `#hlc-cibil` (`name="cibilScore"`) / label “CIBIL score*” / help `button` “About CIBIL score” / `#hlc-help-cibil` (“Changes the rates banks show you.”)
- viewport: 1366x768 @2x
- speakers: Both. ASR has no speaker labels. **Speaker A** (range camp): do not force the exact score; dropdown windows 750–780 / 730–750. **Speaker B** (exact camp): need the exact score; 759 is not 780; rates move inside 10-point windows. Short “Ok / Yes” are acknowledgements.

## Session metadata
- folder: `wb-rec-260815-2125`
- recording id: `ba64f48a-197b-40a6-883c-3d23b6cf8313`
- started_at: 2026-08-15T15:55:21.859Z
- ended_at: 2026-08-15T16:04:20.986Z
- duration_ms: 539127 (~8 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 70 (JPEG: `screenshots/0000.jpg`–`0069.jpg`)
- event count: 94
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2116` (~11 s earlier) — monthly income / property agreement value / “as per agreement.” Last clicks were Age **i**. This clip starts on the CIBIL **i** in the same Age + CIBIL row.
- next: `wb-rec-260815-2134` (~8.5 s later) — Amazon typed vs untyped font weight, then CIBIL dropdown + min/max **continues**.
- ASR: **Sibyl → CIBIL** in this span (`Sibyl` p≈0.54 then 0.91)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: Loan inputs card under `h1` “Explore banks.” Age + CIBIL sit on one row (`form#hlc-inputs` third zone).
- On-page copy:
  - Label: “CIBIL score*”
  - Help popover copy: “Changes the rates banks show you.”
  - Input: `value="780"` `placeholder="780"` `inputmode="numeric"` `data-hlc-format="digits"` `data-hlc-max-digits="3"` `data-hlc-max="900"` — a three-digit text box, not a `<select>`
  - `#hlc-cibil-note` is empty
- Rest of the card (unchanged this clip): Monthly income ₹1,00,000; Property agreement value ₹62,50,000; Age 35 years; Occupation **Self-employed**; Purpose **Regular**; Adjust eligibility closed; **See options**. Overview tab; Filters + Lenders / Rate / Loan amount / Tenure / EMI headers at the bottom.
- Click/focus in this span (they never type a new score; no `input` / `scroll` events in the whole session):
  - **00:07.515** focus Age “i” (`About Age`) — leftover from 2116
  - **00:07.663** focus + click CIBIL “i” SVG (`About CIBIL score`) — `screenshots/0001.jpg` (t=7920)
  - **00:12.045** click CIBIL “i” circle again — `0002.jpg` (t=12450)
  - **00:13.320** click `#hlc-cibil` (focus; blue underline) — `0003.jpg` (t=13721)
  - **00:43.423** / **00:45.739** / **00:56.882** more `#hlc-cibil` clicks — `0007.jpg` / `0008.jpg` / `0010.jpg`
- Screenshots while they talk (**00:04–01:09**): `0000.jpg`–`0012.jpg`. Visible state does not change: **780** in a free-text field. Help popover is not visible in the JPEGs (clicks hit the SVG; popover may not have stayed open). No range dropdown appears.

## What they said (faithful, complete)

**00:04.090–00:21.230** Speaker A:
> Raw ASR: “Sibyl score... See, what is the problem with a Sibyl score? You are forcing me to tell the exact score.”
> Corrected: “**CIBIL** score… See, what is the problem with a **CIBIL** score? You are forcing me to tell the exact score.”
> ASR: **Sibyl → CIBIL**. This is the problem statement for the whole clip.

**00:22.610–00:35.650** Speaker B, then A:
> Raw ASR: “Ok. Means, it should be more approximate? No. Here, we need a drop down. 750 to 780. Means... 730 to 750.”
> Corrected: B asks if the fix is to be **more approximate**. A: **No** — not a vague approximate. **Need a dropdown:** **750 to 780**, then **730 to 750**. Those two windows are the first concrete control they name.

**00:35.950–00:41.610** both:
> Raw ASR: “You remove the windows. Ok. But it should be like that.”
> Corrected: “windows” = the score **windows / ranges** they keep naming. One side says **remove** (or don’t use) those windows; A holds: **it should be like that** (the 750–780 / 730–750 dropdown).

**00:42.750–00:48.970** (warming up; both):
> Raw ASR: “Because... What happens is... Means... I feel that...”
> Corrected: same fillers. They are still on this field, not a new topic.

**00:48.970–01:02.850** Speaker B, A interjects:
> Raw ASR: “I need to know the exact score. Plus, I feel that we need to throw a little. Yes. If I have 759... Means... I have 780, you can tell me. No problem. But it changes in those 10 ranges.”
> Corrected: B: **I need the exact score.** A: we still need to **show a little** (ASR **throw ≈ show** — display a score or a window, not discard). B’s example: **if I have 759** and you **tell me 780**, “no problem” as a polite beat — then the real objection: **it changes in those 10-point ranges.** **759 vs 780** is the worked example.

**01:04.130–01:09.850** both:
> Raw ASR: “10 ranges? Then you put it in 10 pieces. No, no. I don't know. Let's see the second one.”
> Corrected: 10-point buckets (“**10 pieces**”). Immediate **No, I don’t know** — they have not picked a bucket size. “**Second one**” = another option on the table (the next span: coarse average/high labels), not a second page.

They do not settle exact vs dropdown here. The rest of the clip keeps arguing the same field.

## First-principles problem
- What must be true: the number in CIBIL must be something a real customer can give **and** something that maps to the **rate windows banks actually use**. Help text already says this field **changes the rates banks show**. Showing a **780** rate for a **759** profile is a false picture. Forcing a three-digit exact when they only have a window is a false precision.
- Root vs symptom: the symptom is “this box is annoying.” The root is **one exact integer** (`#hlc-cibil`) standing in for **score bands**. A vague “approximate” is the wrong substitute (they reject it in the next beats).
- Constraints they implied: dropdown windows like **750–780 / 730–750**, not “more approximate”; 10-point pieces floated and **not chosen**.

## Directions they considered
1. Keep forcing exact (today’s text field, value 780) — B’s accuracy case.
2. Dropdown of windows: **750–780**, **730–750** (A). Rejected as “more approximate,” then restated as the needed control.
3. **10-point** pieces — floated; **I don’t know**.
- Lean: **open**. A will not accept forced exact. B will not accept a window that shows the wrong offer (759 vs 780). Later spans add 5–5, bank breakouts, minimum, and Amazon typeahead. `wb-rec-260815-2134` then says **both** dropdown and min/max.

## Company / user / future thinking
- User: is being asked for a three-digit they may not have. The first complaint is **force**.
- Company: Shroffin shows indicative rates from verified windows. A typed **780** that is really **759** mis-ranks lenders. Independence does not mean a fake precise rate.
- Future: this clip does not lock a dropdown spec. 2134 continues with min compulsory / max optional and “both.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-cibil` / `#hlc-help-cibil`; compare JS that maps `cibilScore` to bank rate rows.
- Acceptance criteria in their words: stop **forcing the exact score**; if ranges, they should be **windows like 750–780 / 730–750**; **do not** show a **780** offer as if it were **759**.
- What NOT to do: do not “fix” by only changing the help sentence “Changes the rates banks show you.” Do not treat “more approximate” as the product. Do not ship this span as a locked 10-point spec (“I don’t know”).
- Open questions: exact vs window vs both (2134). Bucket size (10 vs 5–5 in `03`). How to pick **one rate** inside a window (`03`, 2134 `04`).
- Related recordings:
  - continues_from: `wb-rec-260815-2116` — Age **i** at the end of property-label work. **Not** this CIBIL debate.
  - continues_in: `02` in this folder (reject average/high); later **`wb-rec-260815-2134` `02`** — “I have to give him both? Yes” (dropdown **and** min/max).

## Evidence index
- `audio.vtt` 00:04.090–01:09.850 (Sibyl → CIBIL)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (`Sibyl` p≈0.54/0.91; `759` p≈0.48)
- `events.json`: Age i t=7515; CIBIL i t=7663 / 12045; `#hlc-cibil` t=13320 / 43423 / 45739 / 56882; no typed input
- `pages.json`: form field “CIBIL score*” required; action `getByRole("button", { name: "About CIBIL score" })`
- `screenshots/index.json` + `0000.jpg`–`0012.jpg` (field stays **780**; `0003.jpg` shows focus underline)
- `manifest.json` viewport 1366×768, dsf 2; `console.json` []; `tabs.json` one tab
- `replay.spec.ts`: clicks CIBIL help SVG then `#hlc-cibil`
- Site `pages/explore-banks.html`: `#hlc-cibil`, `#hlc-help-cibil`
