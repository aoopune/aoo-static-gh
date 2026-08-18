# They restart after the bar chat: monthly income, filled values, then CIBIL or property

The last take was personal chat, not a review. They open this one by saying they will say everything once again. Monthly income was the thread. First: the values on this tool should already be filled. They look at the card, clear a leftover ₹12,000, put **₹1,00,000** back, then remember they had also talked **CIBIL** or property. Then they ask what is in their mind — that question is the next note.

## Classification
- kind: session-note | recap
- status: not-a-bug (setup for the product rule that follows)
- surface: explore-banks / Loan inputs (`form#hlc-inputs`) / `#hlc-monthly-income`, then `#hlc-property-value`
- viewport: 1366×768 @2x
- speakers: Speaker A restates. Speaker B not heard. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2204`
- recording id: `96bab1e5-65d0-462e-b148-21cf61aeb7cf`
- clip: 13 of 30
- started_at: 2026-08-15T16:34:11.754Z
- ended_at: 2026-08-15T16:36:10.834Z
- duration_ms: 119080 (~1 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 18 (`screenshots/0000.jpg`–`0017.jpg`)
- event count: 46
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2201` (~11 s, bar / Mahendra, not a review). Previous real: `wb-rec-260815-2134` (CIBIL; “I want 2 loans”). Earlier: `wb-rec-260815-2116` (monthly income / property copy), `wb-rec-260815-2125` (CIBIL windows).
- next in this folder: `02` (do not tell best parameters). Next recording: `wb-rec-260815-2206` (~6 s later).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Card: **Loan inputs** under `h1` “Explore banks.”
- Start still (`0000.jpg`): Monthly income **₹12,000**; Property agreement value **₹6,000**; Age **35**; CIBIL **780**; Occupation **Self-employed**; Purpose **Regular**; Adjust eligibility collapsed; **See options**; Overview table headers under the card (Lenders / Rate / Loan amount / Tenure / EMI).
- Events while they recap:
  - **00:19.976** brief focus Age, then **00:20.099** click `#hlc-monthly-income` (`0003.jpg`)
  - **00:21.995–00:22.863** five Backspaces; fill `""`
  - **00:29.283** / **00:31.449** fill `"1,00,000"`; click `main` (`0005.jpg` — income restored, property still ₹6,000)
  - **00:34.762–00:35.055** three more clicks on monthly income (`0006.jpg`)
  - **00:40.041–00:40.388** focus+clicks `#hlc-property-value` (`0007.jpg`) while naming CIBIL or property
- Scroll events at 00:34 and 00:52 are `y=0`. They never leave the inputs card.
- HTML defaults (for contrast, not what the still shows at t=0): income `1,00,000` / property `62,50,000` / age `35` / CIBIL `780`. The ₹12,000 / ₹6,000 are leftover from earlier local use.

## What they said (faithful, complete)

Silent **00:00–00:07.7**. Then:

**00:07.700–00:21.620** Speaker A:
> Raw ASR: “I will say everything once again. The main purpose of my discussion was that monthly income...”
> Corrected: same. Restart after 2201. Monthly income is the 2116 thread (why the field exists; take-home not CTC). The sentence trails off.

**00:26.480–00:31.680** Speaker A (while clearing and refilling income):
> Raw ASR: “I mean, first of all, I said that the values here should already be met. I mean, I was looking at this tool.”
> Corrected: same. “This tool” = the Loan inputs card. “Already be met” = the fields should already have values so you can look, matching the 2106 praise that you can click See options at once. They then put income back to **1,00,000**. This is not a request to empty the form.

**00:32.400–00:43.960** Speaker A:
> Raw ASR: “Then I felt that we had such a discussion on civility or on property. What is in my mind?”
> Corrected: “Then I felt that we had such a discussion on **CIBIL** or on property. What is in my mind?”
> ASR: **civility ≈ CIBIL**. Click on property at **00:40**. The question opens the product rule in `02`.

No Speaker B. No layout complaint. No new helper-sentence rewrite here.

## First-principles problem
- What must be true: after the off-topic gap, they are back on Explore banks with a **filled** card, restating work already done (income, CIBIL, property) before the new rule.
- Root vs symptom: leftover ₹12,000 / ₹6,000 are not the issue. They restore the demo income. The recap is orientation, not a bug ticket.
- Constraint: do not treat this clip as a blank-form problem.

## Directions they considered
- Say the earlier points again, then get to what is in their mind. Lean: filled tool, not empty tool.

## Company / user / future thinking
- They review as if they are **using** the tool, not demoing an empty template. Prefill is how a shopper should arrive (2106). The next thought is what the company must **not** publish on top of those fields.

## Fix metadata
- Code owners: none for this recap. Prefill already belongs to 2106 (`03-values-pre-populated-see-options.md`). Income helper copy belongs to 2116. Do not “fix” leftover 12,000 / 6,000 from this clip.
- Acceptance in their words: “I will say everything once again”; “the values here should already be met”; “I was looking at this tool.”
- What NOT to do: do not empty the form; do not start a new monthly-income copy pass here.
- continues_from: `wb-rec-260815-2201` (off-topic); `wb-rec-260815-2116`, `2125`, `2134`, `2106`.
- continues_in: `02` in this folder; then `wb-rec-260815-2206`.

## Evidence index
- `audio.vtt` 00:07.700–00:43.960
- `events.json` / `RECAP.md`: income clear/fill `1,00,000`; property click
- `screenshots/0000.jpg`–`0007.jpg`
- `manifest.json` 1366×768 @2x
