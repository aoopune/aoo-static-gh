# Make the extras that change the loan required — especially income share

Do not treat the extra eligibility questions as skippable “optional columns” when skipping them still blocks the customer and changes loan amount and EMI a lot.
This is for Explore banks extras under Adjust eligibility: existing EMIs, credit cards, share of income / FOIR, tenure, co-applicant.
They asked why there is no mandating, because the customer already decides loan amount and EMI; then they walked which extras are for everyone.
They were leaning: everyone needs the upper limit (share of income); existing EMI, credit cards, and co-applicant are not for everyone — in general people only fill the upper limit.

---
solution_id: "wb-rec-260815-2249/solution-02-mandate-income-share-not-every-extra"
solution_title: "Make the extras that change the loan required — especially income share"
folder: "wb-rec-260815-2249"
sequence_index: 19
recording_id: "55f40b18-3bf3-46a3-b169-7adabe6886b1"
recording_started_at: "2026-08-15T17:19:17.338Z"
recording_ended_at: "2026-08-15T17:21:34.102Z"
duration_ms: 136764
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility extras: Existing EMIs, Credit card limits, Share of income for EMIs / FOIR 55% (default), Tenure* 20 years, Co-applicant No"
for_topic: "Which extra eligibility questions on Explore banks the customer must fill versus can skip, especially share of income / upper limit"
pinpoint: "On Explore banks they said the extras look like optional columns the customer may fill or skip, but if they don’t fill they can’t go, the answers make a big difference to loan amount and EMI, so there should be mandating — everyone needs the upper limit / share of income (it differs by bank); existing EMI, credit cards, and co-applicant are not for everyone; in general people only fill the upper limit."
kind: ["proposed_change", "idea", "user_convenience", "product_principle"]
decidedness: "leaning"
basis: "Customers already decide loan amount and EMI; hiding or marking extras as optional still blocks progress and changes the result; only some extras apply to everyone."
analog_source: "none"
linked_issue_files: ["issue-01-adjust-eligibility-hidden-not-shown-as-columns.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2302"
related_solution_files: ["solution-01-show-extra-eligibility-as-direct-columns.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:59,050 --> 00:02:07,770"]
event_t_ms: [59854,61021,61465,66595,80139,96787]
screenshot_files: ["screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
tags: ["eligibility","optional-vs-required","foir","convenience","explore-banks"]
---

## Exact solution (or idea that can also be a solution)

A second direction, after the columns idea: **these extras must not pretend to be skippable when they change the loan.**

Raw ASR (audio.srt cue 11): “These are basically optional columns that we want the customer to fill or not fill.” Cue 12: “But if they don't fill, they can't go.” Cue 13: “Why do they have to come here?” Cue 14: “It makes a big difference.” Cues 15–17: they already have to decide loan amount and EMI — “They decide everything.” Cue 18: “Then why is there no mandating?”

That idea is also the solution for this topic: **mandate the extras that actually move loan amount and EMI**, especially the **upper limit / share of income**, instead of parking them as optional-looking columns behind Adjust eligibility. They did **not** say every extra should be required. Field walk (cues 21–34), joined to the open extras in `0011.jpg`–`0018.jpg`:

- Expenses: “everyone has the same amount.”
- Existing EMI: “very less” / “not for everyone.”
- Credit card limits: “not for everyone.”
- “But everyone needs the upper limit.” Cue 27: “This is the share of income.” On screen: **Share of income for EMIs / FOIR 55% (default)**. (ASR “upper limit” joined to that FOIR cap.)
- Share of income “does not belong to anyone” but “everyone differs according to the bank.”
- Tenure: “No one on the 10-year side says that I want the 15-year limit” while Tenure shows 20 years.
- Co-applicant: “not for everyone”; “How does this co-applicant make a difference?”
- “In general, people only fill the upper limit.” “And if it is more, then it is more.”

`pages.json` matches the walk: Existing EMIs and FOIR not required; Tenure is required (`*`) but still sits inside the optional-looking disclosure; co-applicant income/EMIs optional.

## What this is for

Which extra eligibility questions on Explore banks should be required versus skippable — especially **Share of income for EMIs / FOIR**. Linked issue `issue-01-adjust-eligibility-hidden-not-shown-as-columns.md` is the hiding/optional-looking problem. This file is the rule: mandate what changes the loan for everyone; do not force extras that are not for everyone. Layout-as-columns is **solution-01**.

## Why they said it that way

User convenience and product principle: the formula has “so many questions,” but the customer already decides loan amount and EMI. Optional-looking extras that still block progress or silently change the result are the wrong bargain. Most people will only fill an upper limit, so that cap should be treated as the one everyone needs.

## How the files join (required)

- time (ms and clock): **59050–82570 ms** (`00:00:59,050`–`00:01:22,570`)
- what they said: optional columns; if they don’t fill they can’t go; why come here; loan amount / EMI; why no mandating
- what they did: clicks on `details#hlc-form-more` at **59854, 61021, 66595 ms** (no typing of those fields in this recording)
- what was on screen: `0009.jpg` extras open during “optional columns”; `0010.jpg` collapsed with Canara EMI ₹48; `0011.jpg` Existing EMIs visible
- what page/object: Adjust eligibility extras on Loan inputs
- therefore the actual finding is: do not treat extras that change loan amount/EMI as skippable; ask why there is no mandating

- time (ms and clock): **83830–127770 ms** (`00:01:23,830`–`00:02:07,770`)
- what they said: formula getting bigger; so many questions; field walk ending in “people only fill the upper limit”
- what they did: form-more **80139, 96787 ms**; long idle while talking
- what was on screen: `0012.jpg`–`0018.jpg` Existing EMIs ₹555, Credit card limits ₹0 (“About 10% counts as monthly load”), FOIR 55% (default), Tenure 20, Co-applicant No
- therefore: mandate/prioritize share of income (upper limit) for everyone; keep EMI / credit cards / co-applicant as not-for-everyone

`0019.jpg` + “This guy is playing a song.” is an aside, not this finding.

## Pinpoint

On Explore banks, extra eligibility questions under **Adjust eligibility** are presented as optional columns, but they said skipping still blocks the customer and the answers change loan amount and EMI a lot — so there should be mandating for the extras everyone needs, especially **share of income / the upper limit** (FOIR on screen at 55% default), while existing EMI, credit cards, and co-applicant stay not-for-everyone; in general people only fill the upper limit.

## Related discussion (not the solution itself)

- “Because the formula is getting bigger.” “There are so many questions.”
- Expenses same for everyone (basis for not stuffing unique questions on everyone).
- Tenure 10-year vs 15-year limit comment while Tenure is 20 — they are thinking about whether tenure extras belong in the same optional bucket.
- Co-applicant “how does this make a difference?” — curiosity, not a decided Yes/No product.
- Closing aside: “This guy is playing a song.” (`00:02:13,070`)
- Columns-vs-Adjust-eligibility layout is **solution-01**.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:59–00:01:22 | 59050–82570 | Optional columns; can’t go if they don’t fill; loan amount/EMI; why no mandating | form-more 59854, 61021 | 0009–0010 |
| 00:01:23–00:01:41 | 83830–101390 | Formula bigger; expenses; Existing EMI not for everyone | form-more 66595; idle | 0011–0013 |
| 00:01:42–00:02:07 | 102090–127770 | Credit cards not for everyone; everyone needs upper limit; share of income; differs by bank; 10 vs 15 year; co-applicant; people only fill upper limit | form-more 80139, 96787 | 0014–0018 |
| 00:02:13 | 133070 | “This guy is playing a song.” | idle | 0019.jpg |

## Cross-recording continuation

**From wb-rec-260815-2240:** that ending was rename Adjust eligibility / See options placement, not this mandating walk. This finding starts here (~59s). `continued_from_folder` is null.

**Into wb-rec-260815-2302** (~11 min gap, under 15 min). First speech: “So we have to drop down so that the form doesn't get too big.” “Correct. But actually these things have to be affected.” Then “this existing EMI is a big thing” and FOIR / fixed obligation. Same extras-must-affect / which-fields-matter talk. First shots `0000.jpg`–`0004.jpg` still show the same open extras.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — theme card quotes “if they don't fill they can't go” / “why no mandating”; map only. `related_discussion`
- `audio.json` — segments 11–34; “mandating?” p≈0.71; “upper” p≈0.14 then “share” p≈0.90 on FOIR cue; language `mr` ignored. `supports_solution`
- `audio.lrc` — timed optional/mandating cues. `timeline_alignment`
- `audio.srt` — primary quotes cues 11–34. `supports_solution`
- `audio.text` — plain optional/mandating/field walk. `supports_solution`
- `audio.tsv` — ms 59050–127770. `timeline_alignment`
- `audio.txt` — same as srt. `timeline_alignment`
- `audio.vtt` — same as srt. `timeline_alignment`
- `audio.webm` — binary; not played. `checked_no_extra_signal`
- `audio_sentences.txt` — one-block including “Then why is there no mandating?” `supports_solution`
- `console.json` — `[]`. `checked_no_extra_signal`
- `events.json` — form-more clicks 59854, 61021, 66595, 80139, 96787; no field input this session. `supports_solution`
- `index.html` — inlined events/shots; no extra talk. `checked_no_extra_signal`
- `manifest.json` — Explore banks, 136764 ms. `timeline_alignment`
- `pages.json` — Existing EMIs/FOIR/co-applicant not required; Tenure required. `supports_solution`
- `replay.spec.ts` — later `hlc-form-more` clicks + idle gaps during this talk. `timeline_alignment`
- `screenshots/0000.jpg` — extras visible at start (Existing EMIs, FOIR, Tenure, Co-applicant). `timeline_alignment`
- `screenshots/0001.jpg` — bank table (loan amount/EMI they said customers decide). `related_discussion`
- `screenshots/0002.jpg` — collapsed extras. `timeline_alignment`
- `screenshots/0003.jpg` — extras open. `timeline_alignment`
- `screenshots/0004.jpg` — extras open. `timeline_alignment`
- `screenshots/0005.jpg` — extras open. `timeline_alignment`
- `screenshots/0006.jpg` — table loan/EMI. `related_discussion`
- `screenshots/0007.jpg` — collapsed extras. `timeline_alignment`
- `screenshots/0008.jpg` — heading + collapsed extras. `timeline_alignment`
- `screenshots/0009.jpg` — extras open during “optional columns.” `supports_solution`
- `screenshots/0010.jpg` — collapsed + Canara EMI ₹48 during “can’t go.” `supports_solution`
- `screenshots/0011.jpg` — Existing EMIs during field walk. `supports_solution`
- `screenshots/0012.jpg` — extras open, FOIR/tenure. `supports_solution`
- `screenshots/0013.jpg` — collapsed during “so many questions.” `timeline_alignment`
- `screenshots/0014.jpg` — collapsed near credit-card / upper-limit talk. `timeline_alignment`
- `screenshots/0015.jpg` — extras open as they name Existing EMI / credit cards. `supports_solution`
- `screenshots/0016.jpg` — FOIR 55%, Co-applicant No during “share of income.” `supports_solution`
- `screenshots/0017.jpg` — tenure / co-applicant talk. `supports_solution`
- `screenshots/0018.jpg` — “people only fill the upper limit.” `supports_solution`
- `screenshots/0019.jpg` — same form during song aside. `checked_no_extra_signal`
- `screenshots/index.json` — 20 shots. `timeline_alignment`
- `tabs.json` — one Explore banks tab. `timeline_alignment`
- `viewer.css` — 17895 bytes, generic player. `checked_no_extra_signal`
- `viewer.js` — 32334 bytes, generic player. `checked_no_extra_signal`

### Helper issue files

- `issue-01-adjust-eligibility-hidden-not-shown-as-columns.md` — `timestamp_map` + `cross_link`. Issue covers hiding; this file covers optional-vs-mandatory / which extras.

## ASR notes

Same sentence family across text artifacts. Conflicts:

1. **“upper limit”** while **Share of income for EMIs / FOIR 55% (default)** is on screen and they immediately say “This is the share of income.” Join treats upper limit as that cap. Quote raw.
2. **“This does not belong to anyone”** (belong p≈0.13) next to share of income / differs by bank. Quote raw.
3. Cue 35 song aside not used as a solution.
4. `language`: `mr` ignored.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2249/solution-02-mandate-income-share-not-every-extra",
  "solution_title": "Make the extras that change the loan required — especially income share",
  "folder": "wb-rec-260815-2249",
  "sequence_index": 19,
  "recording_id": "55f40b18-3bf3-46a3-b169-7adabe6886b1",
  "recording_started_at": "2026-08-15T17:19:17.338Z",
  "recording_ended_at": "2026-08-15T17:21:34.102Z",
  "duration_ms": 136764,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Adjust eligibility extras: Existing EMIs, Credit card limits, Share of income for EMIs / FOIR 55% (default), Tenure* 20 years, Co-applicant No",
  "for_topic": "Which extra eligibility questions on Explore banks the customer must fill versus can skip, especially share of income / upper limit",
  "pinpoint": "On Explore banks they said the extras look like optional columns the customer may fill or skip, but if they don’t fill they can’t go, the answers make a big difference to loan amount and EMI, so there should be mandating — everyone needs the upper limit / share of income (it differs by bank); existing EMI, credit cards, and co-applicant are not for everyone; in general people only fill the upper limit.",
  "kind": ["proposed_change", "idea", "user_convenience", "product_principle"],
  "decidedness": "leaning",
  "basis": "Customers already decide loan amount and EMI; hiding or marking extras as optional still blocks progress and changes the result; only some extras apply to everyone.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-adjust-eligibility-hidden-not-shown-as-columns.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2302",
  "related_solution_files": ["solution-01-show-extra-eligibility-as-direct-columns.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:59,050 --> 00:02:07,770"],
  "event_t_ms": [59854,61021,61465,66595,80139,96787],
  "screenshot_files": ["screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "tags": ["eligibility","optional-vs-required","foir","convenience","explore-banks"],
  "quotes": [
    {"clock": "00:00:59,050", "text": "These are basically optional columns that we want the customer to fill or not fill.", "artifact": "audio.srt"},
    {"clock": "00:01:06,330", "text": "But if they don't fill, they can't go.", "artifact": "audio.srt"},
    {"clock": "00:01:21,150", "text": "Then why is there no mandating?", "artifact": "audio.srt"},
    {"clock": "00:01:42,090", "text": "The credit card limits are not for everyone.", "artifact": "audio.srt"},
    {"clock": "00:01:44,390", "text": "But everyone needs the upper limit.", "artifact": "audio.srt"},
    {"clock": "00:01:46,670", "text": "This is the share of income.", "artifact": "audio.srt"},
    {"clock": "00:01:55,590", "text": "This co-applicant is not for everyone.", "artifact": "audio.srt"},
    {"clock": "00:02:02,090", "text": "In general, people only fill the upper limit.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 59854, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 61021, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 66595, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 80139, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 96787, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"}
  ],
  "related_discussion_present": true
}
```
