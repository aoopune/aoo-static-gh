# Google Flights analog: “prices are low at this moment” written on the same list

After they decide the suggestion can sit **on this page**, they ask how Google Flights does it: a line **on the flight list** — prices are **low at this moment**, or **high for this time** and **unlikely to go down**. They call that okay (they don’t feel scammed), **good**, and a **competitive advantage**. The later gut “I feel fooled” is not this analog — it opens the Amazon / honest-signals file (`04`).

## Classification
- kind: issue | product-thinking + analog (placement + copy pattern)
- status: open (they like the pattern; the trust test continues in `04`)
- surface: explore-banks / Loan inputs + Bank options table under it — **no Flights UI exists**. Analog is for a future line on this same view (see `01`).
- viewport: 1366x768 @2x
- speakers: Speaker A describes Flights and calls it okay / an advantage. Short **Yes** after the quoted lines. ASR not diarized. “Sit or work” is an aside, not a second speaker’s product vote.

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
- previous: `01` in this folder (inline vs second tool; “How does it work in Google Flights?”). Folder previous: `wb-rec-260815-2206`.
- next: `03` (top three tips) sits in the gap before they return to Flights-as-distrust in `04`. Folder next: `wb-rec-260815-2222` (Flights comes back: Google shows the flights, these prices are low; never mention AI).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- They never leave the Loan inputs card + Overview table. After the 00:23 scroll, **Canara Bank** is visible (₹5,400 / 20 yrs / ₹48 EMI; rate masked). Occupation still **Salaried** until `03` (Self-employed click at 02:03).
- On-page copy in the recording: same card as `01` (income ₹1,00,000, property ₹6,000, CIBIL 780, **See options**, Apply once).
- Click/focus/scroll in this span: **none**. Idle only from ~00:25 through 01:34.
- Screenshots while Flights is named: `0005.jpg`–`0013.jpg` (t≈44s–108s) — same card, income ₹1,00,000. No new chrome. “The list of flights is written here” is them **pointing at this results area** as the place a Flights-style line would sit, not a screenshot of Google.
- What is **not** on screen: no “prices are low” sentence, no second page, no Google tab.

## What they said (faithful, complete)

**00:43.040–01:03.100** Speaker A (the analog, as they remember the product):
> Raw ASR: “How does it work in Google Flights? Prices for this flight is low at this moment. Yes. Have you seen it in Google Flights? The list of flights is written here. These prices are high for this time. They are unlikely to go down.”
> Corrected: **How does it work in Google Flights?** [Line 1:] **“Prices for this flight [are] low at this moment.”** Have you seen it? **The list of flights is written here** (on the same list, not a second page). [Line 2:] **“These prices are high for this time. They are unlikely to go down.”**
> Grammar: they said “is low”; Flights-style English is “are low.” Keep their wording as the pattern they want. **Yes** after line 1 is acknowledgement, not a new spec.

**01:04.220–01:22.440** Speaker A (verdict, first pass):
> Raw ASR: “Yes, it's written like this. What do we think about it? We think it's okay. We think it's okay. We don't get scammed. Yes. It's written here. It's good.”
> Corrected: same. **Written like this / written here** = on the list, not in a separate tool (`01`). **We think it’s okay. We don’t get scammed. It’s good.**

**01:25.460–01:34.260** (aside, then the advantage):
> Raw ASR: “Do you want to sit or do you want to work? Yes. It's definitely a competitive advantage. Yes.”
> Corrected: **“Sit or work”** is an aside (one person checking whether to keep going; not a product requirement). Then: **it’s definitely a competitive advantage.** **Yes.**

They never quote a Shroffin sentence to ship. They never say “call it Google Flights on our site.” They never open another tab. The 02:25 “I don’t know about Google Flight / I feel fooled” beat is **not** this file — it is the opening of `04` (honest signal vs sale theatre), after the tips in `03`.

## First-principles problem
- What must be true: a line next to the **same** results the person already sees should tell them whether **this moment / this profile** is a good time — without a second product and without sounding like a sale.
- Root vs symptom: Explore banks already lists lenders (Canara Bank under the card). What’s missing is a **now / not-now** (or better / not-better) sentence on that list, like Flights’ low vs high. The missing sentence is the product; the Flights brand is only the analog.
- Constraints they implied: copy sits **on the list**; two states (low now / high and unlikely to fall); must **not** feel like a scam (`04` is the anti-pattern). Competitive advantage if they get this right.

## Directions they considered
- Copy Flights’ **placement**: message on the list that is already there (`01` inline, not a new UI).
- Copy Flights’ **two lines**: low at this moment vs high for this time / unlikely to go down.
- Lean in this span: **okay, we don’t get scammed, it’s good, competitive advantage.**
- They do not yet resolve whether “low” maps to **calendar time** (this week) or **profile** (this income / CIBIL vs a nearby one). Both show up in the same clip (`01` numbers, Flights time-wording).

## Company / user / future thinking
- User: looking at a list (flights there, **bank options** here). They need one calm sentence: this is a good moment, or it isn’t and waiting probably won’t help. They should not need a second website to hear that.
- Company: Shroffin is comparison, not a sale. Flights is the analog **because** it does not feel like Amazon Prime Day (`04`). If the line becomes hype, they lose the “we don’t get scammed” test they just set.
- Future: map “low / high for this time” onto **this profile vs a nearby profile** (1 lakh vs 1.25 lakh in `01`; 720 vs 780 in `07`) — not onto fake urgency. Do not advertise “AI” as the reason the line is true (`2222`). Do not put the Google Flights brand on shroffin.com.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Explore banks results region (Bank options / Overview table) and/or field notes under `#hlc-inputs` — a status line **on the view they already have**, not a new page.
- Acceptance criteria in their words: “How does it work in Google Flights?” — **prices low at this moment** / **high for this time, unlikely to go down**; **written here** on the list; **we don’t get scammed**; **it’s good**; **competitive advantage**.
- What NOT to do: do not add a second interface (`01`). Do not copy Amazon sale language (`04`). Do not put “Google Flights” or a competitor brand on shroffin.com. Do not guarantee a lowest rate (startup-core: no guaranteed best deal). Do not fold the later “I feel fooled” line into this analog as if they rejected Flights here — they call it an advantage in this span.
- Open questions: is the unit **time** (this week vs later) or **profile** (this income / CIBIL vs a nearby one)? Who certifies the line is true is `04` / `2222`.
- Related recordings:
  - continues_from: `01` in this folder (inline vs second tool); `2206` intelligence.
  - continues_in: `04` (Amazon / Prime Day; “I feel fooled” then they talk themselves into Flights’ two honest states); `2222` (don’t show AI; Flights comes back as “Google shows the flights… these prices are low”).

## Evidence index
- `audio.vtt` 00:43.040–01:34.260
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span
- `events.json`: idle through this block; Self-employed click is `03` (t=123975)
- `screenshots/0005.jpg`–`0013.jpg`
- `manifest.json`; `console.json` `[]`; `tabs.json` 1 tab
- Site: bank-options table under `#hlc-inputs` (no Flights component today)
