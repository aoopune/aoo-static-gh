# Collapsed extra loan fields must still change the bank results

On Explore banks they hide extra eligibility fields so the form stays short.
They still want those hidden numbers — existing EMIs, FOIR, and the rest — to change what banks show.
If the site later surprises the user, they said they will lose trust.
They treated that surprise as a product failure, not a small design nicety.

---
issue_id: "wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect"
issue_title: "Collapsed extra loan fields must still change the bank results"
folder: "wb-rec-260815-2302"
sequence_index: 20
recording_id: "1c3a6e22-3a9a-475d-8d5b-350dfe605171"
recording_started_at: "2026-08-15T17:32:34.848Z"
recording_ended_at: "2026-08-15T17:34:36.510Z"
duration_ms: 121662
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form details#hlc-form-more (Adjust eligibility) and #hlc-existing-emis Existing EMIs, plus FOIR / extra eligibility fields inside it"
pinpoint: "On Explore banks, they collapse Adjust eligibility so the form is not too big, but they insist the collapsed fields (especially Existing EMIs and FOIR) must still change bank options; a later surprise would make them lose trust in the website."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2249"
continued_into_folder: "wb-rec-260815-2304"
related_issue_files: ["issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md"]
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","console.json","events.json","pages.json","tabs.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
speech_clock: ["00:00:00,000-00:00:07,820","00:00:08,240-00:00:58,940","00:00:59,020-00:01:20,690"]
event_t_ms: [199, 4186, 5699, 42881, 42882, 43073, 72017, 74010]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0011.jpg","screenshots/0012.jpg"]
tags: ["layout","interaction","trust","data","eligibility","form"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` they opened and closed the Loan inputs extra block `details#hlc-form-more` (the Adjust eligibility disclosure). They said they have to drop that block down so the form does not get too big, then immediately: those hidden things still have to be affected. They pointed at Existing EMIs (`#hlc-existing-emis`, value ₹555 on screen) and named FOIR (“Fixed obligation to something,” matching the on-screen Share of income for EMIs / FOIR control). They said if they get a surprise later they will lose trust from the website. The joined defect is: collapsing extra eligibility fields for size must not mean those values stop changing the bank options the user already sees.

Raw ASR (audio.srt): “So we have to drop down so that the form doesn't get too big.” / “Correct. But actually these things have to be affected.” / “Because this existing EMI is a big thing.” / “That means if I get a surprise later, I will lose my trust from the website.” / “This is all mandatory.”

## How the files join (required)

- time 0–7820 ms (clock 00:00:00–00:00:07)
- what they said (audio.srt cues 1–2; audio.json segments 1–2): “So we have to drop down so that the form doesn't get too big.” then “Correct. But actually these things have to be affected.” (audio.json wording: “Correct. But actually these things have to be affected.”)
- what they did (events.json): landmark_snapshot t=199 on Explore banks; click t=4186 `details#hlc-form-more > summary` (collapse); click t=5699 same locator (open again)
- what was on screen: `screenshots/0000.jpg` (t=200) Adjust eligibility open with Existing EMIs ₹555, FOIR 55%, Co-applicant No; `screenshots/0001.jpg` (t=4590) same extra block collapsed after the first click; `screenshots/0002.jpg` (t=6101) extra block open again
- what page/object: Explore banks – Shroffin; Loan inputs form; `details#hlc-form-more`
- therefore the actual issue is: they accept a collapsed extra block for size, but the collapsed eligibility values must still change results

- time 42160–67580 ms (clock 00:00:42–00:01:07)
- what they said: existing EMI is a big thing; debt/FOIR naming; “if I get a surprise later, I will lose my trust from the website”
- what they did: focus+click `#hlc-existing-emis` at t=42881 / 42882 / 43073 (idle talk around it)
- what was on screen: `screenshots/0007.jpg` (t=43289) Existing EMIs focused (₹555); `screenshots/0008.jpg`–`0009.jpg` still on that field while they talk FOIR/trust
- what page/object: Existing EMIs textbox inside Adjust eligibility; FOIR select listed in pages.json as “Share of income for EMIs /FOIR”
- therefore: Existing EMIs / FOIR are the concrete hidden inputs they fear will not be applied until too late

- time 71750–80690 ms
- what they said: “This is all mandatory.” / “But I have to do everything.”
- what they did: click `details#hlc-form-more` svg t=72017 then summary t=74010 (close then open)
- what was on screen: `screenshots/0011.jpg` extra block closed; `screenshots/0012.jpg` extra block open again
- therefore: they keep rehearsing collapse-for-size vs still-must-count, and they treat the extra fields as mandatory in effect
- console.json added no extra signal (empty `[]`)

## Pinpoint

On Explore banks Loan inputs, at 00:00–00:01, they collapsed and reopened Adjust eligibility (`details#hlc-form-more`) so the form would not get too big, clicked Existing EMIs (`#hlc-existing-emis`), and said those extra things still have to be affected — otherwise a later surprise makes them lose trust in the website. screenshots/0001.jpg shows the extra block shut; screenshots/0007.jpg shows Existing EMIs focused with ₹555 while they call existing EMI and FOIR the reason eligibility is not a simple salary-and-score story.

## Related discussion (not the issue itself)

Credit-card rejection story used as analogy: they applied with a decent salary and a strong score and still got rejected; they “don't even get the Scapia, HDFC card” (audio.json: “Scapia, HDFC”). They said issuers were “looking at my education.” They get “card to card” but not “such a card.” They named “Debt to debt utilization ratio” / “Fixed obligation to something” (join: FOIR on this form; utilization/DTI in the card story). They agreed “That's why your EMI is not fixed” (audio.json word “fixed” probability ~0.0009 — keep raw ASR). One person said they would lose trust; the other echoed “But you will lose your trust”; first said they still have to think. “Bro, nothing.” “This is all mandatory.” The previous recording already argued these extra columns are optional to fill but make a big difference to loan amount and EMI. The next recording opens “No, because I don't want to get a surprise later” and then talks pre-filled fields, importance marks, and tooltips that would show what existing EMIs do to the figure.

## Chronology in this recording

- 00:00:00 / t≈0–199: on Explore banks; shot 0000 extra eligibility open (₹1,00,000 income, ₹6,000 property, age 35, CIBIL 780, Self-employed, Regular, Existing EMIs ₹555, FOIR 55%, tenure 20, Co-applicant No).
- 00:00:00–00:00:03: “drop down so that the form doesn't get too big.”
- t=4186 click more-summary; shot 0001 extra block collapsed.
- 00:00:04–00:00:07: “these things have to be affected.”
- t=5699 click more-summary again; shot 0002 extra block open.
- 00:00:08–00:00:41 idle: credit-card rejection analogy (shots 0003–0006 still expanded).
- 00:00:42–00:00:44 existing EMI is a big thing; t=42881–43073 click Existing EMIs; shot 0007 field focused.
- 00:00:45–00:01:07 FOIR/DTI naming + surprise/trust (shots 0008–0010).
- 00:01:11–00:01:20 “This is all mandatory”; t=72017 / 74010 close then open more (shots 0011–0012).
- After 00:01:22 the talk moves to co-applicant ideas (separate issue).

## Cross-recording continuation

Continues from wb-rec-260815-2249 (~11 min gap, under 15; same Explore banks URL). That session ended on the same extra block: optional columns the customer may not fill, existing EMI “not for everyone,” credit-card limits, share of income, co-applicant “not for everyone,” form getting bigger, “why is there no mandating?” Last non-idle events there are repeated clicks on `details#hlc-form-more`. Last shots 0015–0019 show Adjust eligibility expanded with Existing EMIs ₹555.

Continues into wb-rec-260815-2304 (~19 s later). First line: “No, because I don't want to get a surprise later.” First shots still show the extra eligibility block and Co-applicant No. They then want pre-filled extra columns plus a sign of how important each column is (stars / meter / score) so people will fill them without a later surprise.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `1c3a6e22-3a9a-475d-8d5b-350dfe605171`, start_url Explore banks, 121662 ms, 34 events, 19 screenshots, viewport 1366×768; used for timeline_alignment / checked_no_extra_signal
- `audio.text` — plain transcript of drop-down, affected, existing EMI, FOIR, surprise/trust, mandatory; supports_issue
- `audio.txt` — timed dump same cues 00:00.000–01:20.690; supports_issue / timeline_alignment
- `audio_sentences.txt` — one-block same sentences; supports_issue
- `audio.srt` — primary speech clock cues 1–31; supports_issue / timeline_alignment
- `audio.vtt` — same family as srt; timeline_alignment
- `audio.tsv` — ms 0–80690 for this issue’s speech; timeline_alignment
- `audio.lrc` — lyric-style same lines; timeline_alignment
- `audio.json` — 43 segments, language `mr` (do not trust), word probabilities (e.g. “fixed” ~0.0009); supports_issue / asr reconcile
- `audio.webm` — binary mic; binary_audio_untranscribed_use_text_artifacts; checked_no_extra_signal
- `console.json` — `[]`; checked_no_extra_signal
- `events.json` — more-summary clicks 4186/5699/72017/74010; Existing EMIs focus/click 42881–43073; idle while they talk; supports_issue / timeline_alignment
- `pages.json` — title Explore banks – Shroffin; form Loan inputs; fields Existing EMIs, Share of income for EMIs /FOIR, Tenure, Co-applicant income/EMIs; supports_issue (object names)
- `tabs.json` — single tab Explore banks whole session; timeline_alignment
- `replay.spec.ts` — Playwright clicks on `details#hlc-form-more` and `#hlc-existing-emis`; supports_issue
- `index.html` — player shell; HTML comment inlines this session id, URL, event/screenshot lists; player_shell_with_inlined_json_fully_read; checked_no_extra_signal (no extra talk)
- `viewer.js` — generic replay player, 32334 bytes, 746 lines; player_chrome_fully_read_confirmed; checked_no_extra_signal
- `viewer.css` — generic player chrome, 17895 bytes, 660 lines; player_chrome_fully_read_confirmed; checked_no_extra_signal
- `screenshots/index.json` — 19 shots, t/reason/url/mask_rects; timeline_alignment
- `screenshots/0000.jpg` — extra eligibility open at start; supports_issue
- `screenshots/0001.jpg` — extra eligibility collapsed after first click; supports_issue
- `screenshots/0002.jpg` — extra eligibility open again; supports_issue
- `screenshots/0003.jpg`–`0006.jpg` — still expanded during card-rejection talk; related_discussion / timeline_alignment
- `screenshots/0007.jpg` — Existing EMIs focused ₹555; supports_issue
- `screenshots/0008.jpg`–`0010.jpg` — same field while FOIR/trust talk; supports_issue
- `screenshots/0011.jpg` — extra block collapsed at “mandatory”; supports_issue
- `screenshots/0012.jpg` — extra block open again; supports_issue
- `screenshots/0013.jpg`–`0018.jpg` — later co-applicant demo; related_discussion / checked_no_extra_signal for this issue’s pinpoint

## ASR notes

Transcripts largely agree on the drop-down / affected / existing EMI / surprise-trust / mandatory lines. audio.json language is `mr`; speech is English/Hindi mix. Prefer join over isolated words: “drop down” + clicks on `details#hlc-form-more` = collapse extra eligibility; “these things have to be affected” = those collapsed values must still change results; “Fixed obligation to something” + on-screen FOIR = FOIR; “Scapia, HDFC” (json) vs “Scapia, HDFC” (srt) = Scapia/HDFC card analogy, not a site control. Quote raw ASR; do not treat “education” as a missing form field — it is the card-issuer story.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect",
  "issue_title": "Collapsed extra loan fields must still change the bank results",
  "folder": "wb-rec-260815-2302",
  "sequence_index": 20,
  "recording_id": "1c3a6e22-3a9a-475d-8d5b-350dfe605171",
  "recording_started_at": "2026-08-15T17:32:34.848Z",
  "recording_ended_at": "2026-08-15T17:34:36.510Z",
  "duration_ms": 121662,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form details#hlc-form-more (Adjust eligibility) and #hlc-existing-emis Existing EMIs, plus FOIR / extra eligibility fields inside it",
  "pinpoint": "On Explore banks, they collapse Adjust eligibility so the form is not too big, but they insist the collapsed fields (especially Existing EMIs and FOIR) must still change bank options; a later surprise would make them lose trust in the website.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2249",
  "continued_into_folder": "wb-rec-260815-2304",
  "related_issue_files": ["issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md"],
  "source_files_used": ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","console.json","events.json","pages.json","tabs.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "speech_clock": ["00:00:00,000-00:00:07,820","00:00:08,240-00:00:58,940","00:00:59,020-00:01:20,690"],
  "event_t_ms": [199, 4186, 5699, 42881, 42882, 43073, 72017, 74010],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0011.jpg","screenshots/0012.jpg"],
  "tags": ["layout","interaction","trust","data","eligibility","form"],
  "quotes": [
    {"clock": "00:00:00,000", "text": "So we have to drop down so that the form doesn't get too big.", "artifact": "audio.srt"},
    {"clock": "00:00:04,640", "text": "Correct. But actually these things have to be affected.", "artifact": "audio.srt"},
    {"clock": "00:00:42,160", "text": "Because this existing EMI is a big thing.", "artifact": "audio.srt"},
    {"clock": "00:00:51,180", "text": "Fixed obligation to something.", "artifact": "audio.srt"},
    {"clock": "00:00:59,020", "text": "That means if I get a surprise later, I will lose my trust from the website.", "artifact": "audio.srt"},
    {"clock": "00:01:13,090", "text": "This is all mandatory.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 4186, "name": "hlc-form-more summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 5699, "name": "hlc-form-more summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 42882, "name": "Existing EMIs", "css": "#hlc-existing-emis"},
    {"t_ms": 72017, "name": "hlc-form-more chevron", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > svg"},
    {"t_ms": 74010, "name": "hlc-form-more summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
