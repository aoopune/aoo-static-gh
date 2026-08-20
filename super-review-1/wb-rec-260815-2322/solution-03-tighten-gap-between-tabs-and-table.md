# Tighten the gap between the result tabs and the table

They asked to pull the result tabs and the bank table closer together.
This is for the Overview / Charges / Other charges row sitting above the Lenders table.
They liked the header block, then said the empty band is too much.
They pointed at putting it like a single table.

---
solution_id: "wb-rec-260815-2322/solution-03-tighten-gap-between-tabs-and-table"
solution_title: "Tighten the gap between the result tabs and the table"
folder: "wb-rec-260815-2322"
sequence_index: 23
recording_id: "bcd9788e-d24d-4ab3-8482-49a528a01c2f"
recording_started_at: "2026-08-15T17:52:41.328Z"
recording_ended_at: "2026-08-15T18:01:46.586Z"
duration_ms: 545258
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Space between Overview / Charges / Other charges (and Apply once) and the Lenders table"
for_topic: "Spacing of the Explore banks results chrome so the tabs and table read as one table"
pinpoint: "They liked the header block, then said there is a little gap between the buttons and the table, asked for a little more tightening (“or you can put it like this… yes, you have to do that”), and judged the current gap too much."
kind: ["proposed_change"]
decidedness: "leaning"
basis: "They want it to read as one table; the header colour is also different so they “don’t know the header.”"
analog_source: "none"
linked_issue_files: ["issue-03-results-tabs-table-gap-too-large.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-04-keep-chrome-tab-switcher-as-is.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["03:52.290-04:36.950"]
event_t_ms: [227465, 232400, 250932, 258218, 260785]
screenshot_files: ["screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0034.png"]
tags: ["layout", "spacing", "explore-banks"]
---

## Exact solution (or idea that can also be a solution)
Tighten the space between the result **buttons/tabs** and the **table** so it reads as one table. Quote: “There is a little gap between the buttons and the table… A little more… Or you can put it like this. This is a table. Yes, you have to do that. But it's too much.” Header block “looks good,” but “The color is also different. We don't know the header.”

## What this is for
The band under Overview / Charges / Other charges and Apply once, above the Lenders / Rate / Loan amount / Tenure / EMI table. `issue-03-results-tabs-table-gap-too-large.md` is the too-large gap; this file is the direction: close it / put it like a table.

## Why they said it that way
They want the chrome and the rows to feel like one table, not a floating button row over empty white.

## How the files join (required)
- time: 232290–276950 ms (03:52–04:36)
- said: header looks good; gap; a little more; you have to do that; too much (`audio.srt`)
- did: scroll results 227465–250932; click `#hlc-th-bank` 258218 / 260785
- seeing: `0028.jpg`–`0034.png` Overview + Apply once + empty band + Lenders table, rates 8.75% up
- page: Bank options region
- therefore: pull the tabs/buttons closer to the table.

## Pinpoint
Explore banks results — tighten the gap between the tab/button row and the Lenders table so it is one table; they judged the current gap too much.

## Related discussion
“Lender… I don't know if it's high or low” (sorted Rate). Chrome / four-column tab idea that follows is `solution-04`, not this spacing.

## Chronology in this recording
- 03:52–04:11: header good; colour; don't know the header
- 04:13–04:36: little gap; a little more; put it like this; too much

## Cross-recording continuation
Standalone. Next folder praises tabs, not this gap.


## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json`: later theme helper summarizing 4 issues; not used as proof of solutions. Used as `checked_no_extra_signal`.
- `audio.json`: segments 85–92 gap / too much. Used as `supports_solution`.
- `audio.lrc`: transcript family; language tag mr ignored; 218 cues. Used as `timeline_alignment`.
- `audio.srt`: 04:18 little gap between the buttons and the table; 04:32 you have to do that; 04:33 too much. Used as `supports_solution`.
- `audio.text`: transcript family; language tag mr ignored; 218 cues. Used as `timeline_alignment`.
- `audio.tsv`: transcript family; language tag mr ignored; 218 cues. Used as `timeline_alignment`.
- `audio.txt`: transcript family; language tag mr ignored; 218 cues. Used as `timeline_alignment`.
- `audio.vtt`: transcript family; language tag mr ignored; 218 cues. Used as `timeline_alignment`.
- `audio.webm`: binary mic 8776574 bytes; not played; speech from text artifacts. Used as `checked_no_extra_signal`.
- `audio_sentences.txt`: plain sentence dump matching audio.text. Used as `timeline_alignment`.
- `console.json`: empty array []; no console errors. Used as `checked_no_extra_signal`.
- `events.json`: scrolls 227465–250932 then click #hlc-th-bank 258218/260785. Used as `supports_solution`.
- `index.html`: player shell Workbooks Recording; inlined manifest id bcd9788e-d24d-4ab3-8482-49a528a01c2f, 149 events, 72 shots; sentinels in body scripts. Used as `timeline_alignment`.
- `manifest.json`: id bcd9788e-d24d-4ab3-8482-49a528a01c2f; explore-banks.html; 2026-08-15T17:52:41.328Z–18:01:46.586Z; 545258 ms; 149 events; 72 screenshots; viewport 1366x768. Used as `timeline_alignment`.
- `pages.json`: title Explore banks – Shroffin; h1 Explore banks.; form Loan inputs; region Bank options; See options / Regular / Top-up actions. Used as `timeline_alignment`.
- `replay.spec.ts`: Playwright: fill #hlc-property-value 60,00,000; click Regular; #hlc-th-bank; Charges/Other/Overview; select-all; #hlc-edit-inputs twice; deselect. Used as `timeline_alignment`.
- `screenshots/0000.jpg`: image screenshots/0000.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0001.jpg`: image screenshots/0001.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0002.jpg`: image screenshots/0002.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0003.jpg`: image screenshots/0003.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0004.jpg`: image screenshots/0004.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0005.jpg`: image screenshots/0005.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0006.jpg`: image screenshots/0006.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0007.jpg`: image screenshots/0007.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0008.jpg`: image screenshots/0008.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0009.jpg`: image screenshots/0009.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0010.jpg`: image screenshots/0010.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0011.jpg`: image screenshots/0011.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0012.jpg`: image screenshots/0012.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0013.jpg`: image screenshots/0013.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0014.jpg`: image screenshots/0014.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0015.jpg`: image screenshots/0015.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0016.jpg`: image screenshots/0016.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0017.jpg`: image screenshots/0017.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0018.jpg`: image screenshots/0018.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0019.jpg`: image screenshots/0019.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0020.jpg`: image screenshots/0020.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0021.jpg`: image screenshots/0021.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0022.jpg`: image screenshots/0022.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0023.jpg`: image screenshots/0023.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0024.jpg`: image screenshots/0024.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0025.jpg`: image screenshots/0025.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0026.jpg`: image screenshots/0026.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0027.jpg`: image screenshots/0027.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0028.jpg`: Overview + Apply once + large empty band above Lenders table. Used as `supports_solution`.
- `screenshots/0029.jpg`: image screenshots/0029.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0030.jpg`: image screenshots/0030.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0031.png`: full results; visible gap under tabs. Used as `supports_solution`.
- `screenshots/0032.png`: image screenshots/0032.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0033.png`: image screenshots/0033.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0034.png`: still Overview with gap after bank-header clicks. Used as `supports_solution`.
- `screenshots/0035.png`: image screenshots/0035.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0036.png`: image screenshots/0036.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0037.png`: image screenshots/0037.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0038.png`: image screenshots/0038.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0039.png`: image screenshots/0039.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0040.png`: image screenshots/0040.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0041.png`: image screenshots/0041.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0042.png`: image screenshots/0042.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0043.png`: image screenshots/0043.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0044.png`: image screenshots/0044.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0045.png`: image screenshots/0045.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0046.png`: image screenshots/0046.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0047.png`: image screenshots/0047.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0048.png`: image screenshots/0048.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0049.png`: image screenshots/0049.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0050.png`: image screenshots/0050.png; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0051.jpg`: image screenshots/0051.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0052.jpg`: image screenshots/0052.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0053.jpg`: image screenshots/0053.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0054.jpg`: image screenshots/0054.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0055.jpg`: image screenshots/0055.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0056.jpg`: image screenshots/0056.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0057.jpg`: image screenshots/0057.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0058.jpg`: image screenshots/0058.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0059.jpg`: image screenshots/0059.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0060.jpg`: image screenshots/0060.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0061.jpg`: image screenshots/0061.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0062.jpg`: image screenshots/0062.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0063.jpg`: image screenshots/0063.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0064.jpg`: image screenshots/0064.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0065.jpg`: image screenshots/0065.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0066.jpg`: image screenshots/0066.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0067.jpg`: image screenshots/0067.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0068.jpg`: image screenshots/0068.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0069.jpg`: image screenshots/0069.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0070.jpg`: image screenshots/0070.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/0071.jpg`: image screenshots/0071.jpg; Explore banks session; used as time-aligned screen. Used as `checked_no_extra_signal`.
- `screenshots/index.json`: 72 shots t=182..540187; start/periodic/interaction; url explore-banks.html. Used as `timeline_alignment`.
- `tabs.json`: one tab 1351502398 stay on explore-banks.html entire session. Used as `timeline_alignment`.
- `viewer.css`: generic player CSS 17895 bytes / 660 lines; lightbox/feed; no session talk. Used as `checked_no_extra_signal`.
- `viewer.js`: generic Workbooks player 32334 bytes / 746 lines; loadInline/renderFeed/setupAudio; no session talk. Used as `checked_no_extra_signal`.

### Helper issue files
- `issue-03-results-tabs-table-gap-too-large.md`: timestamp_map + cross_link (tighten gap).

## ASR notes
`audio.json` language `mr` is wrong. srt/vtt/lrc/tsv/txt/text/sentences agree on the quoted English lines. “Mintra” quoted raw (likely Myntra). “home run(s)” quoted raw (likely home loan). “channel” quoted raw (they were at the top of the page). Low-probability early words in json do not change the joined CTA/tabs/button facts.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2322/solution-03-tighten-gap-between-tabs-and-table",
  "solution_title": "Tighten the gap between the result tabs and the table",
  "folder": "wb-rec-260815-2322",
  "sequence_index": 23,
  "recording_id": "bcd9788e-d24d-4ab3-8482-49a528a01c2f",
  "recording_started_at": "2026-08-15T17:52:41.328Z",
  "recording_ended_at": "2026-08-15T18:01:46.586Z",
  "duration_ms": 545258,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "source_files_used": [
    "_theme-cards.json",
    "audio.json",
    "audio.lrc",
    "audio.srt",
    "audio.text",
    "audio.tsv",
    "audio.txt",
    "audio.vtt",
    "audio.webm",
    "audio_sentences.txt",
    "console.json",
    "events.json",
    "index.html",
    "manifest.json",
    "pages.json",
    "replay.spec.ts",
    "screenshots/0000.jpg",
    "screenshots/0001.jpg",
    "screenshots/0002.jpg",
    "screenshots/0003.jpg",
    "screenshots/0004.jpg",
    "screenshots/0005.jpg",
    "screenshots/0006.jpg",
    "screenshots/0007.jpg",
    "screenshots/0008.jpg",
    "screenshots/0009.jpg",
    "screenshots/0010.jpg",
    "screenshots/0011.jpg",
    "screenshots/0012.jpg",
    "screenshots/0013.jpg",
    "screenshots/0014.jpg",
    "screenshots/0015.jpg",
    "screenshots/0016.jpg",
    "screenshots/0017.jpg",
    "screenshots/0018.jpg",
    "screenshots/0019.jpg",
    "screenshots/0020.jpg",
    "screenshots/0021.jpg",
    "screenshots/0022.jpg",
    "screenshots/0023.jpg",
    "screenshots/0024.jpg",
    "screenshots/0025.jpg",
    "screenshots/0026.jpg",
    "screenshots/0027.jpg",
    "screenshots/0028.jpg",
    "screenshots/0029.jpg",
    "screenshots/0030.jpg",
    "screenshots/0031.png",
    "screenshots/0032.png",
    "screenshots/0033.png",
    "screenshots/0034.png",
    "screenshots/0035.png",
    "screenshots/0036.png",
    "screenshots/0037.png",
    "screenshots/0038.png",
    "screenshots/0039.png",
    "screenshots/0040.png",
    "screenshots/0041.png",
    "screenshots/0042.png",
    "screenshots/0043.png",
    "screenshots/0044.png",
    "screenshots/0045.png",
    "screenshots/0046.png",
    "screenshots/0047.png",
    "screenshots/0048.png",
    "screenshots/0049.png",
    "screenshots/0050.png",
    "screenshots/0051.jpg",
    "screenshots/0052.jpg",
    "screenshots/0053.jpg",
    "screenshots/0054.jpg",
    "screenshots/0055.jpg",
    "screenshots/0056.jpg",
    "screenshots/0057.jpg",
    "screenshots/0058.jpg",
    "screenshots/0059.jpg",
    "screenshots/0060.jpg",
    "screenshots/0061.jpg",
    "screenshots/0062.jpg",
    "screenshots/0063.jpg",
    "screenshots/0064.jpg",
    "screenshots/0065.jpg",
    "screenshots/0066.jpg",
    "screenshots/0067.jpg",
    "screenshots/0068.jpg",
    "screenshots/0069.jpg",
    "screenshots/0070.jpg",
    "screenshots/0071.jpg",
    "screenshots/index.json",
    "tabs.json",
    "viewer.css",
    "viewer.js"
  ],
  "on_screen_object": "Space between Overview / Charges / Other charges (and Apply once) and the Lenders table",
  "for_topic": "Spacing of the Explore banks results chrome so the tabs and table read as one table",
  "pinpoint": "They liked the header block, then said there is a little gap between the buttons and the table, asked for a little more tightening (“or you can put it like this… yes, you have to do that”), and judged the current gap too much.",
  "kind": [
    "proposed_change"
  ],
  "decidedness": "leaning",
  "basis": "They want it to read as one table; the header colour is also different so they “don’t know the header.”",
  "analog_source": "none",
  "linked_issue_files": [
    "issue-03-results-tabs-table-gap-too-large.md"
  ],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": [
    "solution-04-keep-chrome-tab-switcher-as-is.md"
  ],
  "speech_clock": [
    "03:52.290-04:36.950"
  ],
  "event_t_ms": [
    227465,
    232400,
    250932,
    258218,
    260785
  ],
  "screenshot_files": [
    "screenshots/0028.jpg",
    "screenshots/0029.jpg",
    "screenshots/0031.png",
    "screenshots/0032.png",
    "screenshots/0034.png"
  ],
  "tags": [
    "layout",
    "spacing",
    "explore-banks"
  ],
  "quotes": [
    {
      "clock": "04:18.110-04:21.430",
      "text": "There is a little gap between the buttons and the table.",
      "artifact": "audio.srt"
    },
    {
      "clock": "04:33.790-04:35.130",
      "text": "But it's too much.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [
    {
      "t_ms": 258218,
      "name": "hlc-th-bank",
      "css": "#hlc-th-bank"
    }
  ],
  "related_discussion_present": true
}
```
