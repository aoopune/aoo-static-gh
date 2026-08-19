# CIBIL score box forces an exact number instead of a range dropdown

The CIBIL score box on Explore banks is a type-in field. It asks for one exact number.
They said that is the problem: it forces the exact score.
They want a dropdown of score windows (for example 750 to 780), not a vague “approximate” with a star at the bottom.
They kept clicking that same box while arguing buckets, bank breakouts, and Amazon-style typeahead.

---
issue_id: "wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown"
issue_title: "CIBIL score box forces an exact number instead of a range dropdown"
title: "CIBIL score box forces an exact number instead of a range dropdown"
folder: "wb-rec-260815-2125"
sequence_index: 10
recording_id: "ba64f48a-197b-40a6-883c-3d23b6cf8313"
recording_started_at: "2026-08-15T15:55:21.859Z"
recording_ended_at: "2026-08-15T16:04:20.986Z"
duration_ms: 539127
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "CIBIL score* text box (#hlc-cibil, placeholder 780) in the Loan inputs form, plus its About CIBIL score info button"
pinpoint: "On Explore banks, the CIBIL score control is a free-text box that forces an exact number; they said the problem is that it forces the exact score and they need a dropdown of score windows (e.g. 750–780, 730–750) instead of typing an exact score, and they rejected calling the result approximate with a star footnote."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2134"
related_issue_files: []
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","events.json","pages.json","tabs.json","console.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg","screenshots/0062.jpg","screenshots/0063.jpg","screenshots/0064.jpg","screenshots/0065.jpg","screenshots/0066.jpg","screenshots/0067.jpg","screenshots/0068.jpg","screenshots/0069.jpg"]
speech_clock: ["00:00:04,090 --> 00:08:54,980"]
event_t_ms: [7515,7663,12045,13319,13320,43423,45739,56882,153749,153750,155197,155198,160491,162020,265080,265264,265468,272116,272554,272726,272878,292927,328681,343335]
screenshot_files: ["screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0007.jpg","screenshots/0010.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0024.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0040.jpg","screenshots/0045.jpg","screenshots/0047.jpg"]
tags: ["copy","interaction","data","trust"]
---

## Exact issue

On Explore banks (`http://localhost:8765/pages/explore-banks.html`), in the Loan inputs form, the CIBIL score control is a required text box (`#hlc-cibil`, placeholder `780`, helper “Changes the rates banks show you.”). They opened About CIBIL score, then clicked that box over and over for the whole session.

They named the defect in the first half-minute. ASR (audio.srt): “See, what is the problem with a Sibyl score?” / “You are forcing me to tell the exact score.” (ASR likely meant: CIBIL score — the click and the on-screen label are CIBIL.) The other person asked if it should be more approximate. The answer was no: “No. Here, we need a drop down.” / “750 to 780.” / “730 to 750.” / “You remove the windows.”

They later restated the same gap against what the box actually is: “And here we give a range but do not give a drop down.” They do not want a typed exact number, and they also do not want an “approximate” result with a star at the bottom that then says the result is invalid.

## How the files join (required)

- time: 12650–28210 ms (00:00:12–00:00:28)
- what they said: audio.srt “See, what is the problem with a Sibyl score?” / “You are forcing me to tell the exact score.” / “Means, it should be more approximate?” / “No. Here, we need a drop down.” / “750 to 780.”
- what they did: events.json click About CIBIL score at t=7663 and t=12045, then focus+click `#hlc-cibil` at t=13319–13320
- what was on screen: screenshots/0001.jpg–0003.jpg — Explore banks form; CIBIL score field showing placeholder 780 with a blue underline (focused text box, not a dropdown)
- what page/object: pages.json form “Loan inputs”, field “CIBIL score*” type text required; URL still `http://localhost:8765/pages/explore-banks.html`
- therefore the actual issue is: the CIBIL control is a free-text exact-score box; they said that forcing the exact score is the problem and they need a dropdown of windows.

- time: 130800–155980 ms (00:02:10–00:02:36)
- what they said: “Not approximate, bro.” / “I don't have any approximate here.” / “You want it accurate? Yes.” / “Now you will say approximate. And then you will put a star on the bottom. That actually you will get the result of your invalid.”
- what they did: idle talk after earlier `#hlc-cibil` clicks (t=43423, 45739, 56882); then they click About CIBIL again at t=153750 and the box at t=155198
- what was on screen: screenshots/0021.jpg (info click) then 0022.jpg (box focused again)
- therefore: they reject both exact-forced typing and a fake “approximate” with a disclaimer star — they want selectable windows, not a footnote.

- time: 484980–534980 ms (00:08:04–00:08:55)
- what they said: “And here we give a range but do not give a drop down.” Amazon football / “When you type F, it freezes.” Either select the dropdown or type; if you type, “the window will not open.”
- what they did: still clicking `#hlc-cibil` (t=328681, 343335); no input events — they never typed a score
- what was on screen: screenshots/0045.jpg, 0047.jpg, 0069.jpg — same focused CIBIL text box, no dropdown, no typeahead list
- therefore: the missing control is a dropdown (or typeahead of windows) on this exact field; the Amazon talk is how they think that dropdown should behave, not a second page.

## Pinpoint

On Explore banks, the Loan inputs CIBIL score* text box (`#hlc-cibil`) forces the user to type an exact score. They treated that as wrong: people should pick a score window from a dropdown (examples they spoke: 750–780, 730–750), not be forced to name one point. They also treated a fake “approximate” with a star footnote as dishonest. They cared because every CIBIL point can change the rate, banks actually price in windows that are not the same for every bank, and a user who only remembers a band (or who wants to negotiate from a nearby band) cannot use the box as it is.

## Related discussion (not the issue itself)

- Coarse bands already in people’s heads: “Average, high.” / “So, 700 plus is excellent.” They do not want to replace the field with those words; they want numeric windows, not “average.”
- Bucket size: 10-point ranges vs breaking “with 55” (ASR; likely 5–5). Ten-point buckets: “They don't change in 10 points.” Five-point buckets: “Then the list gets bigger.” ASR “GCF” / “With 55, you get a lot of smoke.”
- Top of scale: “900 top score” / “It becomes critical” — finer buckets near the top make the list long.
- Negotiation: “I have 776 also. Show me the offer of 780 and I will negotiate with the offeror.” They want assurance that ten points “here and there” still work, without “throwing” so much that 776/778 is ignored.
- Bank-specific breakouts: “Where is the breakout? Suppose one bank says 800 to 810. Then one bank says 850 to 812.” Windows are not parallel across banks. This is why a single exact typed score (or one global window) is a poor fit — still the same CIBIL input problem, not a separate table-column bug (they never opened a bank row).
- “Minimum Sibyl Score. What does it mean?” while on the same box. They debate putting a minimum instead of the exact, and “You are putting the minimum out.” Visible label is “CIBIL score*”, helper “Changes the rates banks show you.” — they are arguing the meaning of asking for a minimum vs exact, not reading a second label.
- Stress: “Tell him not to give so much stress.” / “I don't know so many 5-10 points.” / “But I fall down a lot.”
- Amazon typeahead: type 766 and dropdowns open; type 7 and 5–5 dropdowns of 7xx open; football 24 inches / next size selection. Contrast: here they “give a range but do not give a drop down.” If the user types, the window should not open (“When you type F, it freezes” — ASR for Amazon filter-as-you-type). Either select from a dropdown or type a range; do not mix both in a confusing way. “Or it should be very big.”
- They never typed into the box (events.json has no `input` on `#hlc-cibil`). Placeholder 780 on screen is not a value they entered.

## Chronology in this recording

- 00:00:04 / t≈4090: “Sibyl score...” (ASR). Screen: Explore banks, CIBIL box visible (screenshots/0000.jpg).
- t=7515: focus About Age (pass-through from previous field).
- t=7663: focus+click About CIBIL score (svg rect). Speech: “See, what is the problem with a Sibyl score? You are forcing me to tell the exact score.”
- t=12045: click About CIBIL again (svg circle). “No. Here, we need a drop down. 750 to 780. 730 to 750. You remove the windows.”
- t=13319–13320: focus+click `#hlc-cibil`. Screenshot 0003: CIBIL field blue-underlined, placeholder 780.
- 00:00:48–00:01:14: exact vs throw a little; 759/780; 10 ranges; “Let's see the second one.” / “I don't want to do average.”
- t=43423, 45739, 56882: more clicks on `#hlc-cibil` while talking 5-vs-10 buckets, 900 top score, “Not approximate,” star on the bottom.
- t=153749–162020: About CIBIL then the box again. 776 vs 780 offer; ten windows; bank breakouts 800–810 vs 850–812.
- 00:04:27: “Minimum Sibyl Score. What does it mean?” Main concern: “You don't want to put the exact.”
- t=265080–272878: rapid clicks on `#hlc-cibil` while talking minimum vs exact, “You are putting the minimum out.”
- t=292927, 328681, 343335: still the same box. Amazon autocomplete vs “we give a range but do not give a drop down.” Session ends on Amazon type-F freeze; topic unfinished.

## Cross-recording continuation

Previous folder `wb-rec-260815-2116` ended on Property agreement value wording (“Property is value as per agreement” / “as per agreement”) and last clicks were About Age. Gap ~11s. This folder’s first click is About Age then immediately About CIBIL. The CIBIL dropdown topic starts here; it does not continue the property-label issue.

Next folder `wb-rec-260815-2134` starts on the same Explore banks page with CIBIL still showing 780. After a short Amazon-font aside, they ask “Should I give him a drop down?” and then min/max ranges (750 / 780). Same CIBIL control. Write the rest of that debate in 2134; this file covers the part spoken here.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `ba64f48a-197b-40a6-883c-3d23b6cf8313`, start_url Explore banks, duration 539127 ms, 94 events, 70 screenshots, 0 console, 1 tab, 1 page, viewport 1366×768, mic true. Used: timeline_alignment, checked_no_extra_signal.
- `audio.text` — full undated transcript; “Sibyl score” / “drop down” / Amazon. Used: supports_issue, related_discussion.
- `audio.txt` — timed lines matching srt family. Used: timeline_alignment, supports_issue.
- `audio_sentences.txt` — same prose as audio.text in one block. Used: checked_no_extra_signal.
- `audio.srt` — primary speech clock 00:00:04,090–00:08:54,980; quotes above. Used: supports_issue, timeline_alignment.
- `audio.vtt` — same cues as srt. Used: timeline_alignment.
- `audio.tsv` — ms start/end; 4090 “Sibyl score...”; 24950 “No. Here, we need a drop down.”; 504980 “And here we give a range but do not give a drop down.” Used: timeline_alignment, supports_issue.
- `audio.lrc` — lyric-style times; same words. Used: timeline_alignment.
- `audio.json` — language `en` (not `mr`); 187 segments; word probs; “Sibyl”/“Civil” for CIBIL. Used: supports_issue, asr_notes.
- `audio.webm` — binary mic; not listened. Used: checked_no_extra_signal (binary_audio_untranscribed_use_text_artifacts).
- `events.json` — 94 events; only non-idle targets are About Age (once), About CIBIL score, and `#hlc-cibil`; no `input`, no navigation. Used: supports_issue, timeline_alignment.
- `pages.json` — title Explore banks – Shroffin; CIBIL score* text required; About CIBIL score button. Used: supports_issue.
- `tabs.json` — single tab 1351502398 on explore-banks.html the whole session. Used: timeline_alignment.
- `console.json` — `[]`. Used: checked_no_extra_signal.
- `replay.spec.ts` — Playwright clicks About CIBIL svg then `#hlc-cibil` repeatedly; idle comments. Used: timeline_alignment.
- `index.html` — generic player shell; HTML comment inlines this session’s manifest/events/tabs/shots ids and `#hlc-cibil` locators; no extra talk. Used: checked_no_extra_signal (player_shell_with_inlined_json_fully_read).
- `viewer.js` — generic Workbooks viewer, 32334 bytes, no session talk. Used: checked_no_extra_signal (player_chrome_fully_read_confirmed).
- `viewer.css` — generic viewer styles, 17895 bytes. Used: checked_no_extra_signal (player_chrome_fully_read_confirmed).
- `screenshots/index.json` — 70 shots, all `http://localhost:8765/pages/explore-banks.html`; mask_rects on lower table area. Used: timeline_alignment.
- `screenshots/0000.jpg` (t=197, start) — Explore banks form; CIBIL score visible with 780. Used: timeline_alignment.
- `screenshots/0001.jpg` (t=7920, interaction) — after About CIBIL click; form still showing CIBIL text box. Used: supports_issue.
- `screenshots/0002.jpg` (t=12450, interaction) — second info click; same CIBIL text box. Used: supports_issue.
- `screenshots/0003.jpg` (t=13721, interaction) — CIBIL field focused, blue underline, 780 placeholder. Used: supports_issue.
- `screenshots/0004.jpg` (t=22197, periodic) — same focused CIBIL box during “exact score / throw a little.” Used: timeline_alignment.
- `screenshots/0005.jpg` (t=30197, periodic) — same. Used: timeline_alignment.
- `screenshots/0006.jpg` (t=40196, periodic) — same. Used: timeline_alignment.
- `screenshots/0007.jpg` (t=43826, interaction) — click `#hlc-cibil` during 10-range talk. Used: supports_issue.
- `screenshots/0008.jpg` (t=46144, interaction) — another `#hlc-cibil` click. Used: supports_issue.
- `screenshots/0009.jpg` (t=54196, periodic) — same focused box. Used: timeline_alignment.
- `screenshots/0010.jpg` (t=57285, interaction) — `#hlc-cibil` during 5-vs-10 / approximate talk. Used: supports_issue.
- `screenshots/0011.jpg` (t=66195, periodic) — same. Used: timeline_alignment.
- `screenshots/0012.jpg` (t=74196, periodic) — same. Used: timeline_alignment.
- `screenshots/0013.jpg` (t=82196, periodic) — same. Used: timeline_alignment.
- `screenshots/0014.jpg` (t=92196, periodic) — same. Used: timeline_alignment.
- `screenshots/0015.jpg` (t=102195, periodic) — same. Used: timeline_alignment.
- `screenshots/0016.jpg` (t=110196, periodic) — same. Used: timeline_alignment.
- `screenshots/0017.jpg` (t=120195, periodic) — same. Used: timeline_alignment.
- `screenshots/0018.jpg` (t=128195, periodic) — same. Used: timeline_alignment.
- `screenshots/0019.jpg` (t=136196, periodic) — same. Used: timeline_alignment.
- `screenshots/0020.jpg` (t=146196, periodic) — same before second info click. Used: timeline_alignment.
- `screenshots/0021.jpg` (t=154152, interaction) — About CIBIL click during “not approximate / every point consequential.” Used: supports_issue.
- `screenshots/0022.jpg` (t=155600, interaction) — `#hlc-cibil` focused again. Used: supports_issue.
- `screenshots/0023.jpg` (t=160896, interaction) — `#hlc-cibil` during 776/780 negotiate talk. Used: related_discussion.
- `screenshots/0024.jpg` (t=162425, interaction) — `#hlc-cibil`; bank breakout talk follows. Used: related_discussion.
- `screenshots/0025.jpg` (t=172195, periodic) — same box. Used: timeline_alignment.
- `screenshots/0026.jpg` (t=180195, periodic) — same. Used: timeline_alignment.
- `screenshots/0027.jpg` (t=190195, periodic) — same. Used: timeline_alignment.
- `screenshots/0028.jpg` (t=200195, periodic) — same. Used: timeline_alignment.
- `screenshots/0029.jpg` (t=208195, periodic) — same. Used: timeline_alignment.
- `screenshots/0030.jpg` (t=218195, periodic) — same. Used: timeline_alignment.
- `screenshots/0031.jpg` (t=226195, periodic) — same. Used: timeline_alignment.
- `screenshots/0032.jpg` (t=236194, periodic) — same. Used: timeline_alignment.
- `screenshots/0033.jpg` (t=244194, periodic) — same. Used: timeline_alignment.
- `screenshots/0034.jpg` (t=252195, periodic) — same. Used: timeline_alignment.
- `screenshots/0035.jpg` (t=262195, periodic) — same before triple-click. Used: timeline_alignment.
- `screenshots/0036.jpg` (t=265483, interaction) — triple-click `#hlc-cibil` at “Minimum Sibyl Score.” Used: supports_issue.
- `screenshots/0037.jpg` (t=272521, interaction) — more `#hlc-cibil` clicks; minimum vs exact. Used: supports_issue.
- `screenshots/0038.jpg` (t=282194, periodic) — same. Used: timeline_alignment.
- `screenshots/0039.jpg` (t=292194, periodic) — same. Used: timeline_alignment.
- `screenshots/0040.jpg` (t=293330, interaction) — `#hlc-cibil`; “You are putting the minimum out.” Used: related_discussion.
- `screenshots/0041.jpg` (t=302194, periodic) — same. Used: timeline_alignment.
- `screenshots/0042.jpg` (t=312193, periodic) — same. Used: timeline_alignment.
- `screenshots/0043.jpg` (t=320193, periodic) — same. Used: timeline_alignment.
- `screenshots/0044.jpg` (t=328194, periodic) — same. Used: timeline_alignment.
- `screenshots/0045.jpg` (t=329084, interaction) — `#hlc-cibil` as Amazon typeahead talk starts. Used: related_discussion.
- `screenshots/0046.jpg` (t=338193, periodic) — same. Used: timeline_alignment.
- `screenshots/0047.jpg` (t=343737, interaction) — last `#hlc-cibil` click; “give a range but do not give a drop down.” Used: supports_issue.
- `screenshots/0048.jpg` (t=352193, periodic) — same through Amazon analogy. Used: related_discussion.
- `screenshots/0049.jpg` (t=360193, periodic) — same. Used: timeline_alignment.
- `screenshots/0050.jpg` (t=368193, periodic) — same. Used: timeline_alignment.
- `screenshots/0051.jpg` (t=376193, periodic) — same. Used: timeline_alignment.
- `screenshots/0052.jpg` (t=384194, periodic) — same. Used: timeline_alignment.
- `screenshots/0053.jpg` (t=394193, periodic) — same. Used: timeline_alignment.
- `screenshots/0054.jpg` (t=402193, periodic) — same. Used: timeline_alignment.
- `screenshots/0055.jpg` (t=410193, periodic) — same. Used: timeline_alignment.
- `screenshots/0056.jpg` (t=418193, periodic) — same. Used: timeline_alignment.
- `screenshots/0057.jpg` (t=426194, periodic) — same. Used: timeline_alignment.
- `screenshots/0058.jpg` (t=436192, periodic) — same. Used: timeline_alignment.
- `screenshots/0059.jpg` (t=444193, periodic) — same. Used: timeline_alignment.
- `screenshots/0060.jpg` (t=454193, periodic) — type 766 / dropdowns-should-open talk. Used: related_discussion.
- `screenshots/0061.jpg` (t=462193, periodic) — same. Used: timeline_alignment.
- `screenshots/0062.jpg` (t=472192, periodic) — Amazon football analogy. Used: related_discussion.
- `screenshots/0063.jpg` (t=480193, periodic) — “give a range but do not give a drop down.” Used: supports_issue.
- `screenshots/0064.jpg` (t=490192, periodic) — type vs select. Used: related_discussion.
- `screenshots/0065.jpg` (t=498192, periodic) — same. Used: timeline_alignment.
- `screenshots/0066.jpg` (t=506193, periodic) — either dropdown or type, not both confused. Used: related_discussion.
- `screenshots/0067.jpg` (t=516192, periodic) — “this is a window.” Used: related_discussion.
- `screenshots/0068.jpg` (t=526191, periodic) — Amazon type F. Used: related_discussion.
- `screenshots/0069.jpg` (t=534192, periodic) — last frame: still focused CIBIL text box, no dropdown. Used: supports_issue.

## ASR notes

Transcripts agree on the topic (CIBIL field, dropdown, not approximate) but disagree on brand name and some numbers.

- CIBIL is heard as “Sibyl” (srt/vtt/lrc/text) or “Civil” (later srt 06:38, json). audio.json word “Sibyl” probability ~0.54–0.91. Join: clicks and pages.json label are **CIBIL score**. Used srt wording in quotes; pinpoint uses CIBIL.
- “750 to 780” (srt cue 7; tsv 28690) vs audio.txt “750 to 780.” Same.
- “If I have 759” (srt) vs lrc “If I have 759...” vs later “776” / json “I have 776 also.” Numbers are examples, not typed values (no input events; screen stays on placeholder 780).
- “break it with 55” / “5-5 drop downs” — join: 5-point buckets, not a literal 55 window.
- “GCF” (srt 01:41) — low-confidence; not used as a product name.
- “850 to 812” as a bank window — likely a mishear of a nearby band; kept as raw ASR; meaning is that banks’ CIBIL windows differ.
- “When you type F, it freezes” — Amazon typeahead filter, not a site freeze (no console errors; no waiting events).
- audio.json `"language": "en"`; do not trust as Hindi/Marathi.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown",
  "issue_title": "CIBIL score box forces an exact number instead of a range dropdown",
  "folder": "wb-rec-260815-2125",
  "sequence_index": 10,
  "recording_id": "ba64f48a-197b-40a6-883c-3d23b6cf8313",
  "recording_started_at": "2026-08-15T15:55:21.859Z",
  "recording_ended_at": "2026-08-15T16:04:20.986Z",
  "duration_ms": 539127,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "CIBIL score* text box (#hlc-cibil, placeholder 780) in the Loan inputs form, plus its About CIBIL score info button",
  "pinpoint": "On Explore banks, the CIBIL score control is a free-text box that forces an exact number; they said the problem is that it forces the exact score and they need a dropdown of score windows (e.g. 750–780, 730–750) instead of typing an exact score, and they rejected calling the result approximate with a star footnote.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2134",
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","events.json","pages.json","tabs.json","console.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg","screenshots/0062.jpg","screenshots/0063.jpg","screenshots/0064.jpg","screenshots/0065.jpg","screenshots/0066.jpg","screenshots/0067.jpg","screenshots/0068.jpg","screenshots/0069.jpg"],
  "speech_clock": ["00:00:04,090 --> 00:08:54,980"],
  "event_t_ms": [7515,7663,12045,13319,13320,43423,45739,56882,153749,153750,155197,155198,160491,162020,265080,265264,265468,272116,272554,272726,272878,292927,328681,343335],
  "screenshot_files": ["screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0007.jpg","screenshots/0010.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0024.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0040.jpg","screenshots/0045.jpg","screenshots/0047.jpg"],
  "tags": ["copy","interaction","data","trust"],
  "quotes": [
    {"clock": "00:00:12,650", "text": "See, what is the problem with a Sibyl score?", "artifact": "audio.srt"},
    {"clock": "00:00:17,170", "text": "You are forcing me to tell the exact score.", "artifact": "audio.srt"},
    {"clock": "00:00:24,950", "text": "No. Here, we need a drop down.", "artifact": "audio.srt"},
    {"clock": "00:00:28,690", "text": "750 to 780.", "artifact": "audio.srt"},
    {"clock": "00:02:10,800", "text": "Not approximate, bro.", "artifact": "audio.srt"},
    {"clock": "00:02:21,060", "text": "And then you will put a star on the bottom.", "artifact": "audio.srt"},
    {"clock": "00:04:27,000", "text": "Minimum Sibyl Score.", "artifact": "audio.srt"},
    {"clock": "00:04:34,180", "text": "You don't want to put the exact.", "artifact": "audio.srt"},
    {"clock": "00:08:04,980", "text": "And here we give a range but do not give a drop down.", "artifact": "audio.srt"},
    {"clock": "00:08:53,940", "text": "When you type F, it freezes.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 7663, "name": "About CIBIL score", "css": "form#hlc-inputs ... About CIBIL score button svg rect"},
    {"t_ms": 12045, "name": "About CIBIL score", "css": "form#hlc-inputs ... About CIBIL score button svg circle"},
    {"t_ms": 13320, "name": "CIBIL score*", "css": "#hlc-cibil"},
    {"t_ms": 153750, "name": "About CIBIL score", "css": "form#hlc-inputs ... About CIBIL score button svg rect"},
    {"t_ms": 155198, "name": "CIBIL score*", "css": "#hlc-cibil"},
    {"t_ms": 265468, "name": "CIBIL score*", "css": "#hlc-cibil"},
    {"t_ms": 343335, "name": "CIBIL score*", "css": "#hlc-cibil"}
  ],
  "related_discussion_present": true
}
```
