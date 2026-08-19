# Explore banks page is not obvious at a glance

The Explore banks page does not show, in one look, how the tool works.
They want the filled form, three tooltips, and at least two table rows visible together.
A pre-filled profile is the part that already works, because people will not type honest current income.
Without that full picture, a visitor cannot tell how the page was built.

---
issue_id: "wb-rec-260815-2240/issue-01-explore-banks-not-obvious-at-a-glance"
issue_title: "Explore banks page is not obvious at a glance"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form card plus Bank options table"
pinpoint: "On Explore banks they said the page must show this form, three tooltips, and at least two table rows at one glance so a visitor knows how the page was made; idle shots show a pre-filled form and a table that sits mostly below the fold."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2231"
continued_into_folder: null
related_issue_files: ["issue-02-form-fields-dont-carry-first-inputs-or-show-roi.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:03:05,050-00:04:33,150", "185050-273150ms"]
event_t_ms: [220, 239183, 239865, 278732, 280166, 353351, 365383]
screenshot_files: ["screenshots/0000.jpg", "screenshots/0028.jpg", "screenshots/0032.jpg", "screenshots/0035.jpg", "screenshots/0041.jpg"]
tags: ["copy", "layout", "trust", "interaction"]
---

## Exact issue
On Explore banks they treated the page as not teaching itself. After saying the pre-filled form is the working optimization, they said the tool design must put **this form, three tooltips, and at least two table rows** on the page so that **at one glance** you know how the page was made. When the form is filled you get the tips; there is a table at the bottom to compare. Idle and mid-talk screenshots show the Loan inputs card (Monthly income ₹1,00,000, Property agreement value ₹6,000, Age 35, CIBIL 780) with `(i)` icons, collapsed **Adjust eligibility**, **See options** at the bottom right, and only the top of the lender table unless they scroll.

Raw ASR (`audio.srt`): "These are the three best optimizations." "And this optimization is working for this pre-filled form." "Somewhere on this page, this form." "Three tool tips." "And at least two rows of tables." "At one glance, you will know how this page was made."

## How the files join
- time: 185050–273150 ms (00:03:05–00:04:33)
- said (`audio.srt` / `audio.tsv` / `audio.json` segments 46–76): pre-filled form is the working optimization; users will not put the truth; somewhere on this page — form, three tooltips, two table rows; at one glance you will know how the page was made
- did (`events.json`): mostly `idle`; at 239183 focus `#hlc-monthly-income`; later scrolls 278732 y=287 then back. They were pointing at the form card, not opening tooltip buttons
- seeing: `screenshots/0000.jpg` through `0041.jpg` show the form card and table header/first row, not three open tooltips
- page/object: Explore banks – Shroffin / Loan inputs form + Bank options table (`pages.json`)
- therefore: the page as shown does not present form + tips + comparison table as one obvious picture

## Pinpoint
On Explore banks, the Loan inputs card and Bank options table are not composed so a first glance shows how the tool works: they asked for the filled form, three tooltips, and at least two comparison rows together, because a pre-filled profile is how a user understands “this is the profile” without inventing income.

## Related discussion (not the issue itself)
- Continues sampling / opinionated-product talk from `wb-rec-260815-2231` (bell curve, standard deviations, not building for “any customer,” people cannot name their problems). That is company method, not a second website defect.
- Users will not enter current income honestly: “I will never think that I should put the truth.” “I don't want to put my current income. I will say that my income will be this much in a year and a half.” “How can you show me like this?” This is why the pre-filled form exists, not a request to empty the fields.
- “If this profile does like this, will it be like this?” — the pre-fill lets someone test a profile rather than confess.
- Tooltip `(i)` buttons already exist on labels (`pages.json` About Monthly income / Property agreement value / Age / CIBIL); they still wanted three tips *visible* with two table rows, not only hidden behind icons.

## Chronology in this recording
- 00:00:02–00:03:01 idle on Explore banks (`screenshots/0000.jpg`–`0027.jpg`): sampling and opinionated product, continued from the previous folder.
- 00:03:05 “These are the three best optimizations” / pre-filled form (`screenshots/0028.jpg`, focus Monthly income at 239183).
- 00:03:30–00:03:52 users will not put the truth / current income.
- 00:03:58–00:04:33 tool design: form, three tooltips, two table rows, table at the bottom to compare (`screenshots/0032.jpg`–`0040.jpg`).

## Cross-recording continuation
Continues from `wb-rec-260815-2231`, which ended on Explore banks with Monthly income focused and talk of sampling across income bands. This folder starts “All standard deviations are called sampling” (about a 2s gap). The website issue (page not obvious at a glance) is named here. Does not continue into `wb-rec-260815-2249`, which opens on Adjust eligibility / columns.

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — language tag `mr` (wrong); 173 segments; segs 46–76 are the pre-fill / glance / tooltips talk; word times used as the speech clock — `supports_issue`
- `audio.lrc` — lyric-style timed lines for the same stretch — `supports_issue`
- `audio.srt` — primary quotes for optimizations, pre-filled form, three tool tips, two table rows, at one glance — `supports_issue`
- `audio.text` — plain dump of the same talk — `supports_issue`
- `audio.tsv` — millisecond start/end for those cues (185050–273150) — `supports_issue`
- `audio.txt` — second plain dump; same meaning — `supports_issue`
- `audio.vtt` — WebVTT copy of the srt clock — `supports_issue`
- `audio.webm` — binary mic 8782387 bytes; not listened; speech taken from text artifacts — `checked_no_extra_signal`
- `audio_sentences.txt` — sentence-level dump of the same claims — `supports_issue`
- `console.json` — `[]`; no console errors — `checked_no_extra_signal`
- `events.json` — idle through this talk; landmark at t=220; focus Monthly income 239183; scrolls 278732/280166 — `supports_issue`
- `index.html` — player shell with inlined manifest/events/tabs/shots for this recording; no extra spoken issue — `checked_no_extra_signal`
- `manifest.json` — recording `a82e9a9f-c11f-4376-881d-25a436d5e6f5`; start_url Explore banks; 545586 ms; 67 shots; 127 events — `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; form Loan inputs; Bank options table; About/info buttons on income, property, age, CIBIL — `supports_issue`
- `replay.spec.ts` — later clicks on See options / Adjust eligibility / age / existing EMIs; this issue’s window is idle + focus — `timeline_alignment`
- `screenshots/0000.jpg` — t=221 start: form card + Canara Bank row; collapsed Adjust eligibility; See options bottom-right — `supports_issue`
- `screenshots/0001.jpg`–`screenshots/0027.jpg` — same idle form+table frame through 00:03:56 while they talk sampling then pre-fill (byte-identical 96451 cluster) — `supports_issue`
- `screenshots/0028.jpg`–`screenshots/0031.jpg` — t=246224–272224 Monthly income focused (blue underline) during “pre-filled form” / “this is the profile” — `supports_issue`
- `screenshots/0032.jpg`–`screenshots/0040.jpg` — form + table while they specify three tooltips and two table rows — `supports_issue`
- `screenshots/0041.jpg` — t=362206 Monthly income still focused as they finish the glance argument — `supports_issue`
- `screenshots/0042.jpg`–`screenshots/0066.jpg` — later See options / Adjust eligibility work; not this issue’s pinpoint, checked so no second glance-issue was invented — `checked_no_extra_signal`
- `screenshots/index.json` — 67 shots, all `http://localhost:8765/pages/explore-banks.html` — `timeline_alignment`
- `tabs.json` — one tab 1351502398 on Explore banks the whole session — `timeline_alignment`
- `viewer.css` — generic player styles 17895 bytes — `checked_no_extra_signal`
- `viewer.js` — generic player 32334 bytes — `checked_no_extra_signal`

## ASR notes
`audio.json` `language` is `mr`; speech is English with Hindi-English. All text artifacts agree on “pre-filled form,” “three tool tips,” “two rows of tables,” and “at one glance.” Used `audio.srt` + `audio.tsv` as the clock. Did not invent “tooltips” beyond ASR “tool tips” plus on-screen `(i)` icons.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2240/issue-01-explore-banks-not-obvious-at-a-glance",
  "issue_title": "Explore banks page is not obvious at a glance",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form card plus Bank options table",
  "pinpoint": "On Explore banks they said the page must show this form, three tooltips, and at least two table rows at one glance so a visitor knows how the page was made; idle shots show a pre-filled form and a table that sits mostly below the fold.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2231",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-form-fields-dont-carry-first-inputs-or-show-roi.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:03:05,050-00:04:33,150", "185050-273150ms"],
  "event_t_ms": [220, 239183, 239865, 278732, 280166, 353351, 365383],
  "screenshot_files": ["screenshots/0000.jpg", "screenshots/0028.jpg", "screenshots/0032.jpg", "screenshots/0035.jpg", "screenshots/0041.jpg"],
  "tags": ["copy", "layout", "trust", "interaction"],
  "quotes": [
    {"clock": "00:03:05,050", "text": "These are the three best optimizations.", "artifact": "audio.srt"},
    {"clock": "00:03:09,550", "text": "And this optimization is working for this pre-filled form.", "artifact": "audio.srt"},
    {"clock": "00:03:30,450", "text": "I will never think that I should put the truth.", "artifact": "audio.srt"},
    {"clock": "00:04:12,420", "text": "Somewhere on this page, this form.", "artifact": "audio.srt"},
    {"clock": "00:04:14,680", "text": "Three tool tips.", "artifact": "audio.srt"},
    {"clock": "00:04:16,480", "text": "And at least two rows of tables.", "artifact": "audio.srt"},
    {"clock": "00:04:20,340", "text": "At one glance, you will know how this page was made.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
