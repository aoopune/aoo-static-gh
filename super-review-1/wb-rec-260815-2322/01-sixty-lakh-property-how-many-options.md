# With a ₹60 lakh house, how many options come back?

They start on leftover Top-up rows at a tiny property, ask **how many options**, type **₹60,00,000** into Property agreement value, ask again, then flip Purpose to **Regular**. They never say a count out loud and never press See options. After Regular the table fills with housing loans at **₹48,00,000** (80% of 60 lakh).

## Classification
- kind: discussion | they are testing the form, not naming a UI bug
- status: open (no count spoken; no request to show “N options” on screen)
- surface: explore-banks / `#hlc-property-value` / Purpose Regular vs Top-up / results `#hlc-results-shell`
- viewport: 1366x768 @2x
- speakers: Speaker A asks “how many options” twice and names the 60 lakh property. Short “Okay” after this span is Speaker B (`02`). ASR is not diarized. Language tag on `audio.json` is `mr`.

## Session metadata
- folder: `wb-rec-260815-2322`
- recording id: `bcd9788e-d24d-4ab3-8482-49a528a01c2f`
- clip: 23 of 30
- started_at: 2026-08-15T17:52:41.328Z
- ended_at: 2026-08-15T18:01:46.586Z
- duration_ms: 545258 (~9 min 5 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72 (`0000.jpg`–`0030.jpg`, `0031.png`–`0050.png`, `0051.jpg`–`0071.jpg`)
- event count: 149
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2313` ended 2026-08-15T17:52:30.230Z (~11 s earlier) — form importance, cognitive load, people read left-to-right and up-to-down
- next: `wb-rec-260815-2332` starts 2026-08-15T18:02:07.502Z (~21 s after this take ended)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Start (`0000.jpg`, t=182): Loan inputs with **Adjust eligibility** open. Monthly income **₹1,00,000**. Property agreement value leftover **₹6,000** (placeholder in HTML is `62,50,000`). Age 35, CIBIL 780, Occupation **Salaried**, Purpose **Top-up**. Existing EMIs ₹555. Button **See options**. Results already exist from the previous take.
- `0001.jpg` (t=8182, during first “how many options”): scrolled to the table. Four Top-up rows — Punjab National Bank, Bank of Baroda, Bank of India, Indian Overseas Bank — loan **₹5,400**, tenure 20. Column **Lenders**. Tabs Overview / Charges / Other charges. **Apply once**.
- Click Property agreement value at **00:12.951** (`#hlc-property-value`). Inputs: `60,000` → `6,00,000` → **`60,00,000`** (t=15370–18249). `0003.jpg` (t=18652): 60L filled, Purpose still **Top-up**, See options.
- Click **Regular** at **00:24.686**. `0004.jpg`: h1 **Explore banks.**, Regular selected. `0005.jpg`–`0006.jpg`: table now Regular housing loans at **₹48,00,000** / 20 yrs (PNB 8.75% EMI ₹42,418 first).
- They never click `#hlc-see-options`. Match/status copy (`#hlc-status`, `#hlc-match-meta`) is visually hidden — they do not read a count.
- Scroll: down into results (y=408–714) then up (y=206) before the field click; after Regular they scroll the form (y=817, 875.5, 303.5).

## What they said (faithful, complete)

**00:08.320–00:11.640** Speaker A:
> Raw ASR: “How many options do we have?”
> Corrected: same. Asked while `0001.jpg` still shows **four** Top-up rows at ₹5,400. Word “How” is low-confidence (~0.10); “options” ~0.91.

**00:15.860–00:18.500** Speaker A (while filling the field):
> Raw ASR: “We have 60 lakhs of properties.”
> Corrected: “We have **60 lakhs of property**” — one house price, not many properties. Matches fill `60,00,000`.

**00:20.580–00:21.360** Speaker A:
> Raw ASR / corrected: “How many options do we have?”
> Second ask, now with 60L in the box, still on Top-up, still on the form (`0003.jpg`).

**00:22.040–00:23.220** Speaker A:
> Raw ASR: “We are at the top of the channel.”
> Corrected (uncertain): they have just scrolled toward the top of the card (later y=92). ASR **channel** is not a page label. Likely **page / panel / form**. Do not invent a “channel” UI.

They do not count the new Regular rows aloud. Next sentence in the VTT is the See options → Compare banks note (`02`). No Speaker B in this span.

## First-principles problem
- What must be true: changing property value and purpose should change **how many** banks/products the table returns, and the co-founders should be able to *see* that.
- What they actually did: start state (small property + Top-up) = **four** options; 60L + Regular = a long list at ₹48L. They asked the question twice and moved on.
- Root vs symptom: this is a **test of the form**, not a named “add a counter” ticket. Hidden status nodes exist in markup; nobody in this clip asked to un-hide them.
- Constraints: do not invent a badge. Do not treat ₹5,400 Top-up rows as the 60L result.

## Directions they considered
- Type 60L and look — **done.**
- Switch Top-up → Regular — **done** (click 00:24.686).
- Click See options to refresh — **not done** this clip; the table still updated (results shell already open from the previous take).
- No alternative layouts or copy for a count.

## Company / user / future thinking
- 60 lakh is a round Indian house price they use as a live example. 80% of that is ₹48 lakh — what the table then shows as Loan amount on every visible row.
- “How many options” is the customer’s first question after filling the form: not rates yet, **how many banks even come back.**
- Previous clip (`2313`) was importance / cognitive load on the **form**. This clip starts by coming off that form into “what did we get.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-property-value`, Purpose chips, `#hlc-see-options`, results `#hlc-results-shell` / `#hlc-status` / `#hlc-match-meta`.
- Acceptance in their words: they should be able to answer “how many options do we have?” after a 60L Regular run. They did not specify a widget.
- What NOT to do: do not keep the Top-up ₹5,400 start state as the 60L story. Do not add a count because this file exists — they did not request one.
- Open questions: was the first ask “why only four?” (tiny property + Top-up) or just “let’s see”? Unspoken.
- Related recordings:
  - continues_from: `wb-rec-260815-2313` — importance layout on the same Loan inputs card; they then come down to options
  - continues_in: `02-change-see-options-to-compare-banks.md` (same minute: scroll to the form button)

## Evidence index
- `audio.vtt` 00:08.320–00:23.220
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` same span
- `events.json`: scroll 5.09–11.06s; focus/click `#hlc-property-value` t=12951; input `60,00,000`; click Regular t=24686
- `pages.json` / `RECAP.md`: form “Property agreement value*”; heading “Explore banks.”; “Bank options”
- `screenshots/index.json` + `screenshots/0000.jpg`–`0006.jpg`
- `replay.spec.ts`: `#hlc-property-value`.fill("60,00,000"); Regular click
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- Site: `pages/explore-banks.html` `#hlc-property-value`, Purpose Regular/Top-up
