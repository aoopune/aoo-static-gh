# Let them see 720 to 780 — fill the form, then “give me the best”

They close the take on **letting the user play the tool**. That’s fine. Implement **three things here** so people can **see how much they get**. Example: in the score band **720 to 780**, **this will be the best offer** — don’t just sit and watch; **let them see the delta**. How they themselves would use it: **first fill the form** (you don’t know anything) → **you tell me** → **give me the best.** Clip ends there. Next take starts building the feature.

## Classification
- kind: issue | product-thinking + interaction (allowed gaming)
- status: open
- surface: explore-banks / `#hlc-cibil` (on-screen **780**) + full `#hlc-inputs` form. They do **not** click CIBIL in this clip; they **talk** 720–780 while Self-employed stays selected.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Possible second voice not heard on this block.

## Session metadata
- folder: `wb-rec-260815-2213`
- recording id: `820288e7-0391-48c1-ae98-6c895d38b144`
- clip: 15 of 30
- started_at: 2026-08-15T16:43:16.850Z
- ended_at: 2026-08-15T16:52:07.526Z
- duration_ms: 530676 (~8 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 62 (JPEG; `screenshots/0000.jpg`–`0061.jpg`)
- event count: 67
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `06` (~24 s pause after “what is the need of product management?”). Folder previous: `wb-rec-260815-2206` (keep **one** CIBIL; user will try 750 then 780).
- next: `wb-rec-260815-2222` starts ~7 s later (`2026-08-15T16:52:14.273Z`) — this feature needs to be built; top three optimizations from the offer list; don’t show AI; top 3 tips must be accurate.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- CIBIL field shows **780** the whole session (placeholder/default). They name **720 to 780** as a **range to compare**, not as a rewrite of the box. No focus/click on `#hlc-cibil` in `events.json` (only monthly-income focus at 00:22 and Self-employed at 02:03).
- Screenshots `0055.jpg`–`0061.jpg` (t≈468s–526s): same card through end. Form is already filled (1 lakh, 6,000 property, 35, 780, Self-employed) — which matches “first fill the form.” Canara Bank still ₹5,400 / EMI ₹48; Rate masked.
- What is **not** on screen: no 720 comparison, no “best offer” line, no “give me the best” control.

## What they said (faithful, complete)

**07:43.660–07:58.780** Speaker A (permission + three things + see the get):
> Raw ASR: “This is fine. I think this is fine. Let them do what they want. And here only, we have implemented three things. Then they will not feel that they are getting what they want. Let them see how much they get.”
> Corrected: **This is fine. Let them do what they want** (game the inputs — same as `2204`/`2206`: they will try scores, wife’s name, salaried). **And here only, we have implemented three things** (the **top three tips** from `03` — “have implemented” is **design intent**, not code; the page still has no tips). Next sentence ASR **“Then they will not feel that they are getting what they want”** fights the following line; likely **they will [then] feel they are getting what they want** **or** “if we don’t show the delta they will **not** feel they’re getting what they want.” Keep both readings; the **clear** instruction is **Let them see how much they get.**

**08:02.620–08:12.340** Speaker A (CIBIL delta):
> Raw ASR: “In the score of 720 to 780, this will be the best offer. You don't just sit and watch. Let them see how much they get.”
> Corrected: **In the score [range] 720 to 780, this will be the best offer.** **Don’t just sit and watch** — **let them see how much they get** (the **difference** between 720 and 780, not only the current 780 row). Same family as `2134` (show possible vs min) and `2206` (put 750, they’ll try 780).

**08:16.660–08:41.800** Speaker A (how a user would drive it — clip ends mid-thought):
> Raw ASR: “What do you get from a user? What do you get from a user? I mean, that is exactly how I would try to use it. I mean, first fill the form. You tell me. You don't know anything. Give me the best.”
> Corrected: **What do you [want / expect] from a user?** (repeated). **That is exactly how I would try to use it: first fill the form. You tell me. You don’t know anything. Give me the best.**
> Order: **fill** (even ignorant) → **you (Shroffin) tell me** → **give me the best** [tips / offer / delta]. Clip ends on **“Give me the best.”** `2222` starts on the next take: this feature needs to be built.

## First-principles problem
- What must be true: after the form has **any** numbers, the person should see **what changes if a nearby number changes** (720 vs 780) and hear **the best next move** — not only the current table.
- Root vs symptom: CIBIL 780 already drives rates (“Changes the rates banks show you”). What’s missing is the **side-by-side of two scores** (and the three tips) so “let them do what they want” is **visible**, not a private spreadsheet.
- Constraints they implied: **let them game**; show **how much they get**; **three things here**; **fill first**, even if you **don’t know**; then **give me the best**. Still not “tell me the best parameters” as a lecture (`2204`) — it’s **show the outcome of the experiment**.

## Directions they considered
- Allow input-gaming; don’t fight it.
- Implement **three** things **on this page**.
- Show the **720 vs 780** offer delta (best offer in that band).
- User recipe: fill form → tell me → give me the best.
- They do not add a second CIBIL box in this clip (`2206` already said keep **one** CIBIL). The delta is **shown**, not a second required field.

## Company / user / future thinking
- User: will poke 720 and 780 anyway (`2206`). They start **not knowing**. They want the tool to **tell them the best** after a filled form — the opposite of a blank exam.
- Company: comparison table is the proof; the intelligence is the **delta and the three tips**. If we only show today’s 780 row, they “sit and watch.” If we show 720→780, they **see how much they get**.
- Future: `2222` must **build** this; tips **accurate**; don’t say AI. Do not guarantee “best offer” in ads — here “best” means **best fit they can reach in that score band**, bank still decides.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-cibil` + offer engine; UI that can **contrast two scores** (720 vs 780) without a second mandatory field (`2206`: one CIBIL box). Tips from `03` on this same card (`01` inline).
- Acceptance criteria in their words: **let them do what they want**; **three things here**; **let them see how much they get**; **720 to 780 → this will be the best offer**; **don’t just sit and watch**; **first fill the form** / **you don’t know anything** / **give me the best**.
- What NOT to do: do not add min+max CIBIL as two required inputs (rejected in `2206`). Do not hide the form until they are experts. Do not treat on-screen 780 as a bug. Do not publish 720/780 as the “best parameters to fake” (`2204`) without showing **rupee/offer consequences**. Do not ship “give me the best” as a guaranteed lowest rate on marketing pages.
- Open questions: is 720–780 a real slab in the data or an example band? Does “give me the best” return **one** offer, **three tips**, or both? `2222` takes “top 3 tips” and accuracy.
- Related recordings:
  - continues_from: `wb-rec-260815-2206` (one CIBIL, user will put 750 then 780; intelligence); `2134` (min/max / I’ll raise 20 points); `2204` (don’t announce best parameters). This folder `01`–`03`, `05`.
  - continues_in: **`wb-rec-260815-2222`** — feature needs to be built; AI vs not showing AI; top 3 tips must be accurate.

## Evidence index
- `audio.vtt` 07:43.660–08:41.800 (clip ends)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: idle to end; no CIBIL click
- `screenshots/0055.jpg`–`0061.jpg` (CIBIL 780 visible)
- `pages.json`: CIBIL field “Changes the rates banks show you.”
- Site: `#hlc-cibil`, `#hlc-cibil-note`, `#hlc-inputs`
