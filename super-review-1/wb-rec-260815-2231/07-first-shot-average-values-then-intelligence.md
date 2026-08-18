# First landing should already have average values so intelligence can fire — then try it for real

Still on the Loan inputs card, they describe the **first shot**: fill **average** (typical) values from the beginning so when the page **lands** it already looks like a filled tool; **intelligence** comes, then the **list**, then a recommendation like “your income… if you do this, it will be this much.” Then they switch to the user’s mouth: **try it for real**, **I will try to game this thing** — “that is the only way you can extract truth out of me.” This is 2222’s unlabeled recommendation engine meeting the fact that visitors will game the numbers.

## Classification
- kind: discussion | first-load UX + recommendations + gaming
- status: open
- surface: explore-banks / `form#hlc-inputs` — `#hlc-cibil` (just clicked) then `#hlc-monthly-income`; results list under Overview
- viewport: 1366x768 @2x
- speakers: Both. One describes landing → intelligence → list → income tip. The other (user voice): try for real / game it / extract truth. ASR not diarized.

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
- previous: `wb-rec-260815-2222` (top three optimizations; never say AI; “where intelligence is shown… it is a product”)
- next: `wb-rec-260815-2240` (gaming the pre-filled form; opinionated product)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They are describing **this** card + the lenders **list** below it as the landing story.
- On-page values they treat as the “looks like this” demo: monthly income **₹1,00,000**, property **₹6,000** (leftover tiny demo — they do not praise 6,000), age **35**, CIBIL **780**, Self-employed, Regular, Overview table.
- Click/focus:
  - CIBIL already focused from `06` (third click **04:31.370**) while they start “first time I tried / fill average values”
  - **05:05.201** (`t=305201`) **scroll** — `0037.jpg` (t=306202) is a **top-of-page** frame: full “Explore banks.” heading + whole card, table mostly gone (“when it lands, it looks like this”)
  - **05:20.726–05:20.727** focus + **click** `#hlc-monthly-income` (`screenshot_id` 39 → `0039.jpg`) as they say income recommendation / “try it for real”
- Screenshots:
  - `0033.jpg`–`0036.jpg` — CIBIL 780 while “fill average values / page has landed”
  - `0037.jpg`–`0038.jpg` (t=306202–316202) — full heading + card as “when it lands”
  - `0039.jpg`–`0043.jpg` — monthly income focused at ₹1,00,000 during “try it” / “game this thing”
- What is **not** on screen: no “intelligence” tips, no “if you do this to income” line. 2222 said that feature still needs to be built. They are **acting** the flow on the empty (of tips) card.

## What they said (faithful, complete)

**04:30.210–04:46.450** (first shot / averages):
> Raw ASR: “Then... I mean... The first time I tried... Yes. What should I do? So... You have to fill in the HIF values. All the average values. And you have to fill in the average intelligence in the first shot. From the beginning. So this page has landed, right? Okay.”
> Corrected: “The **first time** I tried… You have to fill in the **HLC / these / default** values. All the **average** values. And you have to fill in the average **intelligence** in the **first shot**. From the beginning. So this page has **landed**, right?”
> ASR: **HIF** (p≈0.40) ≈ **HLC** (this form is `#hlc-inputs`) or “these/default” — they immediately gloss it as **all the average values**. **Average intelligence** = 2222’s recommendation “intelligence” (top optimizations), shown on a **typical** pre-filled profile, **on first landing**, not after a blank form. They do not say “AI.”

**04:48.910–04:58.130** (automatic look):
> Raw ASR: “He needs to know the automatic. That it should look like this. If it looks like this, then do it like this. Hey, wait. I'll put it in later. Yes. Perfect. Perfect.”
> Corrected: “He needs to know the **automatic**. That it should **look like this**. If it looks like this, then do it like this.” Someone will **put it in later** (the intelligence layer — not on screen). “Perfect” is agreement that the **look** of a filled landing is right, not that the ₹6,000 property is a real house.

**05:02.010–05:20.030** Speaker A (sequence):
> Raw ASR: “So when it lands, it looks like this. After filling this form... It looks like this. The intelligence comes and then the list comes. And then the intelligent person says... That they will recommend that your income... I mean... If you do this, it will be this much. And he said, okay. Does it look like this?”
> Corrected: “So when it **lands**, it looks like this. After filling this form… it looks like this. The **intelligence** comes and then the **list** comes. And then the intelligence says… that they will **recommend** that your **income**… if you **do this**, it will be **this much**.”
> Sequence they want: **land (pre-filled averages)** → **intelligence** (tips) → **list** (bank options table) → a concrete **income** recommendation (“do this → this much”). “Intelligent person” = the **product intelligence**, not a human CA (2222: never say AI; it is a product). Click monthly income as “your income” lands. “Does it look like this?” = they are checking the **current** card as the landing picture.

**05:20.310–05:28.710** (try it):
> Raw ASR: “Try it. Try it for real. Try it. Then... If this is the case... Yes. Then I'll try it for real. Yes. Okay.”
> Corrected: same. Push: **try it for real** (use real numbers / really use the tool), not only stare at averages.

**05:31.730–05:52.950** (game / truth):
> Raw ASR: “No, no. I'll try it. I will try to game this thing. Yes. I didn't know this intelligence before. I'll try it for real. That is the only way you can extract truth out of me. First go.”
> Corrected: same. User-voice: they will **try to game** the intelligence. “I didn’t know this intelligence before” = the tips are **new** to the visitor on first go. **“That is the only way you can extract truth out of me”** = honest inputs come **after** (or **by**) trying to beat the tool, not from a polite empty form. “First go” = first session.

They do not type new income. They do not implement tips. Next chapter (`08`) is whose feedback you must **not** overfit.

## First-principles problem
- What must be true: first landing is not a blank exam. It is **already filled with average/typical values** so **intelligence** and the **list** can appear at once, including a concrete “if you change income, you get this.” The visitor will then **try for real** and **game** it — that is how you get truth, not by asking them to be honest first.
- Root vs symptom: missing tips are because the 2222 feature is not built. The root design is **pre-fill + intelligence + list**, plus accepting **gaming** as the truth-extraction method.
- Constraints: do not label it AI (2222). Do not tell them the “best” parameters as a target. Recommendations must be **accurate** (2222).

## Directions they considered
- Pre-fill **average** values **from the beginning** (first shot / first landing).
- Order: land → intelligence → list → income “if you do this, this much.”
- Then **try for real** / **game** the thing — only way to extract truth.
- “I’ll put it in later” = intelligence is not in this build.
- Lean: this is the intended first-run, not a maybe.

## Company / user / future thinking
- User: will not volunteer truth into an empty form. They need a picture, then they will **game** it. First go is exploration, not a KYC confession.
- Company: Shroffin’s “intelligence” is a **product** on top of offers (2222), shown automatically on a typical profile. Explore banks is the canvas.
- Future: 2240 continues the gamer (“I will never think that I should put the truth”) and then **opinionated** product because perfect sampling is impossible. This clip’s `08` is the sampling warning that leads there.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `form#hlc-inputs` defaults (`#hlc-monthly-income`, `#hlc-cibil`, property, age, occupation) plus the not-yet-built **intelligence** tips from 2222 (top optimizations; income “if you do this”). Results region (Overview list) is the “then the list comes.”
- Acceptance criteria in their words: fill **average** values in the **first shot** / **from the beginning**; when the page **lands** it **looks like this**; **intelligence** then **list**; recommend **income** “if you do this, it will be this much”; user will **try for real** and **game** it — that extracts **truth**.
- What NOT to do: do not stamp “AI” on the tips. Do not leave first load empty so they must invent numbers. Do not treat leftover ₹6,000 property as the intended “average” house (they never named 6,000). Do not publish a “best CIBIL/income” target.
- Open questions: which exact averages (1 lakh income is on screen; property 6,000 is leftover junk). What the income recommendation sentence is. How gaming is handled without becoming a cheat sheet.
- Related recordings:
  - continues_from: `wb-rec-260815-2222` (top 3 optimizations, intelligence as product)
  - continues_in: this clip `08` (don’t overfit first customers). Session next: `wb-rec-260815-2240` (game the pre-filled form; opinionated product)

## Evidence index
- `audio.vtt` 04:30.210–05:52.950
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.lrc` (**HIF**, average intelligence, game this thing)
- `events.json`: `#hlc-cibil` already focused; scroll t=305201; click `#hlc-monthly-income` t=320727
- `screenshots/0033.jpg`–`0043.jpg` (esp. `0037` land-at-top, `0039` income click)
- `replay.spec.ts`: `#hlc-monthly-income` click
- `manifest.json`; `pages.json` `[]`
