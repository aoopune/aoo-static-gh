# Keep extra eligibility fields on screen, already filled

The extra questions under Adjust eligibility should stay visible instead of vanishing.
This is for Existing EMIs, credit cards, FOIR, tenure, and co-applicant on Explore banks.
They said there is no problem if those fields stay pre-filled.
They then clicked Co-applicant No and the extra co-applicant fields left the screen.

---
solution_id: "wb-rec-260815-2313/solution-02-keep-adjust-eligibility-visible-and-prefilled"
solution_title: "Keep extra eligibility fields on screen, already filled"
folder: "wb-rec-260815-2313"
sequence_index: 22
recording_id: "152443cc-6acb-4cd3-848e-1e260b989c24"
recording_started_at: "2026-08-15T17:43:51.324Z"
recording_ended_at: "2026-08-15T17:52:30.230Z"
duration_ms: 518906
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility (details#hlc-form-more) extra fields including Co-applicant Yes/No"
for_topic: "Keeping extra eligibility questions visible and already filled"
pinpoint: "On Explore banks they opened Adjust eligibility and said those extra fields should not disappear like that, and that pre-filled is fine; clicking Co-applicant No then hid the extra co-applicant fields."
kind: ["proposed_change", "user_convenience"]
decidedness: "leaning"
basis: "Disappearing extras is the problem; keeping them already filled does not add friction."
analog_source: "none"
linked_issue_files: ["issue-02-adjust-eligibility-fields-should-not-disappear.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2304"
continued_into_folder: null
related_solution_files: ["solution-01-show-form-importance-by-order-and-color.md"]
source_files_used:
  - _theme-cards.json
  - _tmp_timeline.txt
  - audio.json
  - audio.lrc
  - audio.srt
  - audio.text
  - audio.tsv
  - audio.txt
  - audio.vtt
  - audio.webm
  - audio_sentences.txt
  - console.json
  - events.json
  - index.html
  - manifest.json
  - pages.json
  - replay.spec.ts
  - screenshots/0000.jpg
  - screenshots/0001.jpg
  - screenshots/0002.jpg
  - screenshots/0003.jpg
  - screenshots/0004.jpg
  - screenshots/0005.jpg
  - screenshots/0006.jpg
  - screenshots/0007.jpg
  - screenshots/0008.jpg
  - screenshots/0009.jpg
  - screenshots/0010.jpg
  - screenshots/0011.jpg
  - screenshots/0012.jpg
  - screenshots/0013.jpg
  - screenshots/0014.jpg
  - screenshots/0015.jpg
  - screenshots/0016.jpg
  - screenshots/0017.jpg
  - screenshots/0018.jpg
  - screenshots/0019.jpg
  - screenshots/0020.jpg
  - screenshots/0021.jpg
  - screenshots/0022.jpg
  - screenshots/0023.jpg
  - screenshots/0024.jpg
  - screenshots/0025.jpg
  - screenshots/0026.jpg
  - screenshots/0027.jpg
  - screenshots/0028.jpg
  - screenshots/0029.jpg
  - screenshots/0030.jpg
  - screenshots/0031.jpg
  - screenshots/0032.jpg
  - screenshots/0033.jpg
  - screenshots/0034.jpg
  - screenshots/0035.jpg
  - screenshots/0036.jpg
  - screenshots/0037.jpg
  - screenshots/0038.jpg
  - screenshots/0039.jpg
  - screenshots/0040.jpg
  - screenshots/0041.jpg
  - screenshots/0042.jpg
  - screenshots/0043.jpg
  - screenshots/0044.png
  - screenshots/0045.jpg
  - screenshots/0046.jpg
  - screenshots/0047.jpg
  - screenshots/0048.jpg
  - screenshots/0049.jpg
  - screenshots/0050.jpg
  - screenshots/0051.jpg
  - screenshots/0052.jpg
  - screenshots/0053.jpg
  - screenshots/0054.jpg
  - screenshots/0055.jpg
  - screenshots/0056.jpg
  - screenshots/0057.jpg
  - screenshots/0058.jpg
  - screenshots/0059.jpg
  - screenshots/0060.jpg
  - screenshots/0061.jpg
  - screenshots/0062.jpg
  - screenshots/0063.jpg
  - screenshots/0064.jpg
  - screenshots/0065.jpg
  - screenshots/0066.jpg
  - screenshots/0067.jpg
  - screenshots/0068.jpg
  - screenshots/index.json
  - tabs.json
  - viewer.css
  - viewer.js
speech_clock: ["00:01:10,820 --> 00:01:17,660"]
event_t_ms: [70648, 70746, 72355, 75176, 76078]
screenshot_files: ["screenshots/0009.jpg", "screenshots/0010.jpg"]
tags: ["form", "adjust-eligibility", "prefilled", "convenience"]
---

## Exact solution (or idea that can also be a solution)
Let’s talk about adjustability (ASR; on screen this is Adjust eligibility). It should not disappear like this. There is no problem if it is pre-filled. That is the constructive direction: keep the extra fields on screen, already filled.

## What this is for
The extra block under Adjust eligibility on Explore banks. `issue-02-adjust-eligibility-fields-should-not-disappear.md` names the vanish; this file is keep-visible + pre-filled.

## Why they said it that way
Vanishing extras fights convenience. Pre-filled answers are acceptable. Same direction as the previous recording’s “already filled columns.”

## How the files join (required)
- time: 70820–77660 ms
- said: `audio.srt` “Let's talk about adjustability.” / “That it should not disappear like this.” / “And there is no problem if it is pre-filled.”
- did: click `details#hlc-form-more` t=70746; scroll; click Co-applicant No t=75176; `#hlc-coapplicant` value no t=76078
- seeing: 0009 Co-applicant Yes + extra co-applicant fields; 0010 No and those extras gone
- page/object: Loan inputs extra panel
- therefore the actual finding is: extras should stay visible and may stay pre-filled

## Pinpoint
On Explore banks Adjust eligibility, extra fields should not disappear; pre-filled is fine. Co-applicant No is the click that hid the extra co-applicant fields.

## Related discussion (not the solution itself)
ASR “adjustability” matches the Adjust eligibility control they clicked. Previous folder already said extras should stay as already-filled columns and never stamp mandatory; this folder restates stay-visible + pre-filled while demonstrating the vanish.

## Chronology in this recording
- 00:01:10 click opens Adjust eligibility
- 00:01:13 should not disappear like this (shot 0009 still Yes)
- 00:01:15 pre-filled is fine; click No; shot 0010 extras gone

## Cross-recording continuation
Continues from `wb-rec-260815-2304` issue/direction that extras stay visible and pre-filled. This folder’s first minute is form-order (solution 01); they then switch agenda to adjustability. Next folder still has Adjust eligibility open but talks option count / compare-banks, not this vanish rule.

## Evidence by file (every raw recorder file in the folder — no omissions)
- `_theme-cards.json`: Issue-run map of four issues; helper only. `checked_no_extra_signal`
- `_tmp_timeline.txt`: Screenshot/click/focus/scroll dump. `timeline_alignment`
- `audio.json`: 145 Whisper segments; language mr ignored; word probabilities. `supports_solution`
- `audio.lrc`: Lyric timestamps matching srt. `supports_solution`
- `audio.srt`: Primary speech clock 00:00:03,460–00:08:34,370. `supports_solution`
- `audio.text`: Plain full transcript. `supports_solution`
- `audio.tsv`: ms start/end + text. `supports_solution`
- `audio.txt`: Timed dump matching srt. `supports_solution`
- `audio.vtt`: Same cues as srt. `supports_solution`
- `audio.webm`: Binary mic; not played. `supports_solution`
- `audio_sentences.txt`: Single-paragraph transcript. `supports_solution`
- `console.json`: Empty []. `checked_no_extra_signal`
- `events.json`: 112 events including Adjust eligibility, Co-applicant No, info-icon clicks, Google tab. `supports_solution`
- `index.html`: Generic viewer with inlined session JSON; no extra talk. `checked_no_extra_signal`
- `manifest.json`: id 152443cc-6acb-4cd3-848e-1e260b989c24; start Explore banks; 518906 ms; 69 shots; Google cognitive-load URL. `timeline_alignment`
- `pages.json`: p1 Loan inputs Explore banks; p2–p4 Google cognitive load. `timeline_alignment`
- `replay.spec.ts`: Replay of form clicks and Google goto. `supports_solution`
- `screenshots/0000.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0001.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0002.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0003.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0004.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0005.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0006.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0007.jpg`: Collapsed Loan inputs + bank table on Explore banks. `checked_no_extra_signal`
- `screenshots/0008.jpg`: Collapsed Loan inputs + bank table on Explore banks. `supports_solution`
- `screenshots/0009.jpg`: Adjust eligibility open; Co-applicant Yes; extra co-applicant fields. `supports_solution`
- `screenshots/0010.jpg`: Co-applicant No; extra co-applicant fields gone. `supports_solution`
- `screenshots/0011.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0012.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0013.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0014.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0015.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0016.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0017.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0018.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0019.jpg`: Adjust eligibility open; Co-applicant No; (i) icons on extras. `checked_no_extra_signal`
- `screenshots/0020.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0021.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0022.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0023.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0024.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0025.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0026.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0027.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0028.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0029.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0030.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0031.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0032.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0033.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0034.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0035.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0036.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0037.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0038.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0039.jpg`: Existing EMIs tooltip: Lowers how much new loan you can get. `checked_no_extra_signal`
- `screenshots/0040.jpg`: Expanded form on Explore banks during company/copy talk. `checked_no_extra_signal`
- `screenshots/0041.jpg`: Expanded form on Explore banks during company/copy talk. `checked_no_extra_signal`
- `screenshots/0042.jpg`: Expanded form on Explore banks during company/copy talk. `checked_no_extra_signal`
- `screenshots/0043.jpg`: Expanded form on Explore banks during company/copy talk. `checked_no_extra_signal`
- `screenshots/0044.png`: Google search query cognitive load t=293091. `checked_no_extra_signal`
- `screenshots/0045.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0046.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0047.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0048.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0049.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0050.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0051.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0052.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0053.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0054.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0055.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0056.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0057.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0058.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0059.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0060.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0061.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0062.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0063.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0064.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0065.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0066.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0067.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/0068.jpg`: Expanded Loan inputs after Google search. `checked_no_extra_signal`
- `screenshots/index.json`: 69 shots t=197–510208. `timeline_alignment`
- `tabs.json`: Explore banks then Google then back. `timeline_alignment`
- `viewer.css`: Generic player CSS; no session talk. `checked_no_extra_signal`
- `viewer.js`: Generic player; 747 lines; no session talk. `checked_no_extra_signal`

### Helper issue files
- `issue-02-adjust-eligibility-fields-should-not-disappear.md`: timestamp_map + cross_link
- `issue-01-loan-form-importance-not-shown-by-order-color.md`: adjacent topic, different object

## ASR notes
“adjustability” vs on-screen “Adjust eligibility”: click + screenshot win. Transcripts otherwise agree.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2313/solution-02-keep-adjust-eligibility-visible-and-prefilled",
  "solution_title": "Keep extra eligibility fields on screen, already filled",
  "folder": "wb-rec-260815-2313",
  "sequence_index": 22,
  "recording_id": "152443cc-6acb-4cd3-848e-1e260b989c24",
  "recording_started_at": "2026-08-15T17:43:51.324Z",
  "recording_ended_at": "2026-08-15T17:52:30.230Z",
  "duration_ms": 518906,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Adjust eligibility (details#hlc-form-more) extra fields including Co-applicant Yes/No",
  "for_topic": "Keeping extra eligibility questions visible and already filled",
  "pinpoint": "On Explore banks they opened Adjust eligibility and said those extra fields should not disappear like that, and that pre-filled is fine; clicking Co-applicant No then hid the extra co-applicant fields.",
  "kind": ["proposed_change", "user_convenience"],
  "decidedness": "leaning",
  "basis": "Disappearing extras is the problem; keeping them already filled does not add friction.",
  "analog_source": "none",
  "linked_issue_files": ["issue-02-adjust-eligibility-fields-should-not-disappear.md"],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2304",
  "continued_into_folder": null,
  "related_solution_files": ["solution-01-show-form-importance-by-order-and-color.md"],
  "source_files_used": ["_theme-cards.json", "_tmp_timeline.txt", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:01:10,820 --> 00:01:17,660"],
  "event_t_ms": [70648, 70746, 72355, 75176, 76078],
  "screenshot_files": ["screenshots/0009.jpg", "screenshots/0010.jpg"],
  "tags": ["form", "adjust-eligibility", "prefilled", "convenience"],
  "quotes": [{"clock": "00:01:13,560", "text": "That it should not disappear like this.", "artifact": "audio.srt"}, {"clock": "00:01:15,440", "text": "And there is no problem if it is pre-filled.", "artifact": "audio.srt"}],
  "clicks": [{"t_ms": 70746, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"}, {"t_ms": 75176, "name": "No", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(1)"}],
  "related_discussion_present": true
}
```
