# Explore banks has no top-three offer optimizations

On Explore banks they said a feature still has to be built: top three optimizations so a user can reach a better offer over the next few months to a year.

The page they sat on only shows loan inputs and a Canara Bank row. There are no tips, no next-best-offer path, and no intelligence block.

They also said that feature must not be labeled AI, must be accurate (salary, gap between offers), and should look like product advice the way Google Flights shows low prices.

---
issue_id: "wb-rec-260815-2222/issue-01-explore-banks-missing-top-three-offer-optimizations"
issue_title: "Explore banks has no top-three offer optimizations"
folder: "wb-rec-260815-2222"
sequence_index: 16
recording_id: "8fda53c4-d7ea-49a9-806d-492199ec6b40"
recording_started_at: "2026-08-15T16:52:14.273Z"
recording_ended_at: "2026-08-15T17:01:08.512Z"
duration_ms: 534239
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Explore banks main view (loan inputs + bank options table); missing top-three optimizations / tips block"
pinpoint: "On Explore banks, while idle on the loan form and Canara Bank row, they said this feature still needs to be built: take the list of offers and suggest the top three optimizations so the user can reach the best offer in the next few months to one year — and that advice must not be shown as AI."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2213"
continued_into_folder: "wb-rec-260815-2231"
related_issue_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg","screenshots/0062.jpg","screenshots/0063.jpg","screenshots/0064.jpg","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:11,100 --> 00:01:01,080","00:01:05,250 --> 00:03:37,110","00:05:54,790 --> 00:06:48,070"]
event_t_ms: [202,606]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0008.jpg","screenshots/0044.jpg","screenshots/0064.jpg"]
tags: ["missing-feature","copy","trust","product","explore-banks"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` they treated Explore banks as missing a product feature.

At **11100–14840 ms** they said the feature still has to be built. At **48540–55840 ms** they named it: given the list of offers, suggest the **top three optimizations** so the user can reach the **best offer in the next few months to one year**. At **354790–356830 ms** they called the same thing **Top 3 tips**, and said those tips **must be accurate**.

They were idle the whole session. Every screenshot is the same Explore banks viewport: heading **Explore banks.**, loan inputs (monthly income, property agreement value, age, CIBIL, occupation, purpose), **See options**, filters, Overview / Charges tabs, **Apply once**, and one **Canara Bank** housing-loan row. There is no tips list, no “how to reach a better offer” block, and no intelligence section.

They also treated labeling that advice as AI as wrong. At **68050–73290 ms**: “should we show them that this is all AI driven? No, no. Zero.” At **201810–217110 ms**: “There is only one problem. where intelligence is shown, … basically it is a product. Nothing is AI. We never mention AI.”

## How the files join (required)

- time (ms and clock): **11100 ms / 00:00:11** through **61080 ms / 00:01:01** (feature named); **68050–217110 ms** (do not show AI); **354790–408070 ms** (accurate top-3 tips)
- what they said (quote + audio file): audio.srt cue 1: “Approximately, we have seen that this feature needs to be built.” Cues 9–11: “You suggest top three optimizations that the user can reach the best offer in the next few months to one year. That's it. This is all it is.” Cue 13–14: “should we show them that this is all AI driven? No, no. Zero.” Cue 105–110: “Top 3 tips. But they must be accurate. Why are we seeing this? You don't have a salary. … We are not seeing a gap between two offers.”
- what they did: `events.json` landmark_snapshot at t=202, then idle only (no click, scroll, input, or navigation). `replay.spec.ts` is goto explore-banks then idle comments only.
- what was on screen: `screenshots/0000.jpg` (t=204) through `screenshots/0064.jpg` (t=532243) — all 65 frames identical (same 95454-byte JPEG). Visible: Explore banks form + Canara Bank row. No top-3 tips UI.
- what page/object: pages.json / landmark title “Explore banks – Shroffin”; headings include “Explore banks.”, “Loan inputs”, “Bank options”. Object = missing optimizations/tips on that page, not a clicked control.
- therefore the actual issue is: Explore banks currently shows only inputs and a bank row; they said the missing piece is top-three optimizations/tips to reach a better offer, shown as product advice, never as AI.

If a file did not add a new fact at that moment, it still aligned clock, URL, or confirmed idle/player-chrome.

## Pinpoint

On Explore banks (`explore-banks.html`), while they sat idle on the loan-input card and the Canara Bank options row, they said the page still lacks the feature they had just been designing: take the full offer list and show the user the **top three optimizations / tips** so they can reach the **best offer over months to a year**. They cared because that is the product’s intelligence, it has to be accurate (examples: salary; gap between two offers; current offer vs closest offer), and showing it as “AI driven” would cost trust versus a CA-driven company.

## Related discussion (not the issue itself)

- Complexity: “not very complex” unless “age” is added; they already have a list of offers; they do not actually use an LLM (`Because AI means we don't actually use LLM`).
- Engineering vs customer: Postgres/backend analogy — customers should not be told the engineering tool. AI is “just another engineering tool.”
- Trust of basis: if AI says one thing and “the actual CA” says another, people trust the CA.
- Netflix / recommendation engines existed before AI: “We think you will like this” without saying “machine learning.”
- “Shut up, shut up. You are an AI driven company in engineering. On the contrary, I have lost my trust. You said you are a CA driven company.”
- Google Flights: shows low prices to Bangalore from Chennai / Coimbatore / Mumbai; user gets confidence without being told it is AI.
- Competitor **Birbal** (audio.srt) / **Birbal** (audio.tsv): funding goes to AI companies; tele-calling is now AI; they should not copy “we are AI” for funding. “It is not our competition.”
- Helpfulness risk: “how can you be so helpful?” / “you are giving so much money” — they said it is okay.
- Trust of the company: people may not believe they take no bank income; “two kids working in the basement”; fine **as long as testimonials are strong**; first launch on Reddit; talk to every customer; surveys + gift cards. That last thread continues into `wb-rec-260815-2231` (gift cards, then website honesty vs polished). It is related trust talk, not a second on-screen defect in this recording.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:00 | 202 | (session start) | landmark_snapshot on Explore banks | 0000.jpg t=204 |
| 00:00:11 | 11100 | “this feature needs to be built” | idle | 0001.jpg t=8204 |
| 00:00:17–00:00:38 | 17060–38940 | not complex unless age; list of offers; no LLM | idle | 0002–0004 |
| 00:00:41–00:01:01 | 41560–61080 | call: all offers → top three optimizations → best offer in months to one year | idle | 0005–0007 |
| 00:01:05–00:01:18 | 65250–78630 | show as AI? “No, no. Zero.” Engineering is not the customer’s concern | idle | 0008.jpg t=66204 |
| 00:01:20–00:02:22 | 80310–142230 | prompt/agent distrust; Postgres analogy; CA vs AI; trust the answer / trust us | idle | 0009–0017 |
| 00:02:27–00:03:37 | 147430–217110 | Netflix; good companies don’t say AI; never mention AI where intelligence is shown | idle | 0018–0026 |
| 00:03:41–00:04:15 | 221410–255090 | Google Flights low-price analogy | idle | 0027–0031 |
| 00:04:17–00:05:39 | 257990–339980 | Birbal competitor, AI funding, tele-calling AI | idle | 0032–0041 |
| 00:05:54–00:06:48 | 354790–408070 | Top 3 tips must be accurate; salary; gap between two offers; current vs closest offer; “how can you be so helpful?” | idle | 0044.jpg t=364205 |
| 00:06:53–00:08:52 | 413810–532550 | testimonials, Reddit, next customer not mass, gift cards | idle | 0051–0064 |

Idle-talk: all of the above happened during `idle` events after the opening landmark.

## Cross-recording continuation

**From `wb-rec-260815-2213` (gap ~7s).** Prev ended on the same Explore banks URL. Last ~2 min: intelligence being “codified”; combine incomes / biggest saving; “making a feature is a one-day job” because “completely AI driven”; customer parameters + all offers → best offer with minimum effort; CIBIL **720 to 780** “this will be the best offer”; “first fill the form … Give me the best.” Last 5 prev screenshots (0057–0061) are the same Explore banks freeze as this session. This recording’s first line (“this feature needs to be built”) continues that unfinished feature.

**Into `wb-rec-260815-2231` (gap ~6s).** This session cuts off on surveys + gift cards. Next opens: “you have to give a customer a survey, give them a gift card…” then Cursor / Discord feedback, then “if I come across a website… working in a monster's basement… I will appreciate the honesty” vs “you want to appear polished.” Next first 5 screenshots are still Explore banks. The **missing top-3 optimizations** topic is not the first next-folder topic; gift-card / honesty talk continues. Next’s first non-idle interaction is much later (focus Self-employed ~123s). Write the optimizations issue here; cross-link next for the gift-card/honesty continuation of related discussion.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `8fda53c4-d7ea-49a9-806d-492199ec6b40`, start_url explore-banks.html, 2026-08-15T16:52:14.273Z–17:01:08.512Z, duration_ms 534239, events_count 65, screenshots_count 65, viewport 1366×768, mic true. Used: timeline_alignment.
- `audio.json` — language tagged `mr` (wrong; speech is English). 172 segments, 1003 words. Seg 1 “this feature needs to be built”; segs 9–10 top three optimizations; seg 13 AI driven?; segs 57–62 never mention AI; seg 78 “Birbal”; segs 105–117 Top 3 tips / salary / gap / closest offer. Used: supports_issue. Chunked full read.
- `audio.srt` — 172 cues; primary speech clock quoted above. Used: supports_issue.
- `audio.tsv` — same ms ranges; “Birbal” vs srt “Birbal”; “Top 3 tips” at 354790. Used: supports_issue, asr_conflict.
- `audio.vtt` — same family as srt. Used: timeline_alignment.
- `audio.lrc` — timed lyrics-style; matches srt. Used: timeline_alignment.
- `audio.text` — untimed plain transcript of the same talk. Used: supports_issue.
- `audio.txt` — timestamped dump matching vtt. Used: timeline_alignment.
- `audio_sentences.txt` — one paragraph, no newlines (wc -l 0); same words. Used: timeline_alignment.
- `audio.webm` — binary mic 8598660 bytes; not listened. Status: binary_audio_untranscribed_use_text_artifacts. Used: checked_no_extra_signal.
- `events.json` — 65 events: 1 landmark_snapshot t=202 on explore-banks.html, 64 idle. No clicks. Used: supports_issue (idle-talk on this page).
- `pages.json` — one page Explore banks – Shroffin; headings Loan inputs / Bank options; no tips/AI heading. Used: supports_issue.
- `tabs.json` — tab 1351502398 stayed on explore-banks.html the whole session. Used: timeline_alignment.
- `console.json` — `[]`. No console errors. Used: checked_no_extra_signal.
- `replay.spec.ts` — goto explore-banks.html; unknown landmark_snapshot; 64 idle comments; no locators. Used: timeline_alignment.
- `index.html` — generic Workbooks player shell; comment block inlines this session’s manifest id, URL, 65 events, 65 shots. No extra discussion. Used: checked_no_extra_signal. player_shell_with_inlined_json_fully_read.
- `viewer.js` — 32334 bytes, generic bundle viewer (feed, console, shots, audio align). No session talk. Used: checked_no_extra_signal. player_chrome_fully_read_confirmed.
- `viewer.css` — 17895 bytes, generic viewer chrome. Used: checked_no_extra_signal. player_chrome_fully_read_confirmed.
- `screenshots/index.json` — 65 shots, t=204…532243, reason start then periodic, url explore-banks.html, identical mask_rects on rate cells. Used: timeline_alignment.
- `screenshots/0000.jpg` through `screenshots/0064.jpg` — 65 identical images of Explore banks form + Canara Bank row; no tips UI. Used: supports_issue. fully_read_image each.

## ASR notes

Whisper `language: mr` is wrong. Artifacts disagree on competitor name: audio.srt/vtt/lrc/text **Birbal**; audio.tsv/json **Birbal**. No on-screen competitor; quoted both. “age” at 00:00:20 may be age-as-input (Age 35 is on screen) or a mishear; they immediately say they already have a list of offers. “CA” is Chartered Accountant (high word probability in json ~0.88–0.99), not a UI label. “seeing” in “We are not seeing a gap between two offers” is low probability in json (~0.006); treated as example **content of accurate tips**, not a separate table-layout bug, because it sits inside “Top 3 tips. But they must be accurate.” Preferred srt/tsv for clock; json words for probability warnings. Quoted raw ASR; did not silently correct.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2222/issue-01-explore-banks-missing-top-three-offer-optimizations",
  "issue_title": "Explore banks has no top-three offer optimizations",
  "folder": "wb-rec-260815-2222",
  "sequence_index": 16,
  "recording_id": "8fda53c4-d7ea-49a9-806d-492199ec6b40",
  "recording_started_at": "2026-08-15T16:52:14.273Z",
  "recording_ended_at": "2026-08-15T17:01:08.512Z",
  "duration_ms": 534239,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Explore banks main view (loan inputs + bank options table); missing top-three optimizations / tips block",
  "pinpoint": "On Explore banks, while idle on the loan form and Canara Bank row, they said this feature still needs to be built: take the list of offers and suggest the top three optimizations so the user can reach the best offer in the next few months to one year — and that advice must not be shown as AI.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2213",
  "continued_into_folder": "wb-rec-260815-2231",
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg","screenshots/0062.jpg","screenshots/0063.jpg","screenshots/0064.jpg","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:11,100 --> 00:01:01,080","00:01:05,250 --> 00:03:37,110","00:05:54,790 --> 00:06:48,070"],
  "event_t_ms": [202,606],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0008.jpg","screenshots/0044.jpg","screenshots/0064.jpg"],
  "tags": ["missing-feature","copy","trust","product","explore-banks"],
  "quotes": [
    {"clock": "00:00:11,100","text": "Approximately, we have seen that this feature needs to be built.","artifact": "audio.srt"},
    {"clock": "00:00:48,540","text": "You suggest top three optimizations that the user can reach the best offer in the next few months to one year.","artifact": "audio.srt"},
    {"clock": "00:01:08,050","text": "should we show them that this is all AI driven?","artifact": "audio.srt"},
    {"clock": "00:01:10,710","text": "No, no. Zero.","artifact": "audio.srt"},
    {"clock": "00:03:21,810","text": "There is only one problem. where intelligence is shown, … Nothing is AI. We never mention AI.","artifact": "audio.srt"},
    {"clock": "00:05:54,790","text": "Top 3 tips.","artifact": "audio.srt"},
    {"clock": "00:06:04,270","text": "But they must be accurate.","artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
