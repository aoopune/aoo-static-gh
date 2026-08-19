# Built around you accordion shows one line

They reached “Built around you.” and said the control is not opening.
They said they see one line, have to read more, and see only one point on one screen.
They clicked the accordion rows; the panel still shows one expanded heading plus a short line, not a full open read.
They said maybe this section should be removed.

---
issue_id: "wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line"
folder: "wb-rec-260815-2000"
sequence_index: 5
recording_id: "6be15ad6-ecbe-44e0-8c46-58dd985b7dca"
recording_started_at: "2026-08-15T14:30:27.912Z"
recording_ended_at: "2026-08-15T14:39:10.279Z"
duration_ms: 522367
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Built around you accordion (buttons #home-built-trigger-0 and #home-built-trigger-1)"
pinpoint: "On the homepage Built around you accordion, they said it is not opening: they see one line / only one point on one screen and have to read more, so they cannot read the points unless a single row is expanded."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files:
  - "issue-04-built-around-you-side-preview-duplicate.md"
source_files_used:
  - "audio.json"
  - "audio.lrc"
  - "audio.srt"
  - "audio.text"
  - "audio.tsv"
  - "audio.txt"
  - "audio.vtt"
  - "audio.webm"
  - "audio_sentences.txt"
  - "console.json"
  - "events.json"
  - "index.html"
  - "manifest.json"
  - "pages.json"
  - "replay.spec.ts"
  - "screenshots/0000.png"
  - "screenshots/0001.png"
  - "screenshots/0002.png"
  - "screenshots/0003.png"
  - "screenshots/0004.png"
  - "screenshots/0005.png"
  - "screenshots/0006.png"
  - "screenshots/0007.png"
  - "screenshots/0008.png"
  - "screenshots/0009.png"
  - "screenshots/0010.png"
  - "screenshots/0011.png"
  - "screenshots/0012.png"
  - "screenshots/0013.png"
  - "screenshots/0014.png"
  - "screenshots/0015.png"
  - "screenshots/0016.png"
  - "screenshots/0017.png"
  - "screenshots/0018.png"
  - "screenshots/0019.png"
  - "screenshots/0020.png"
  - "screenshots/0021.png"
  - "screenshots/0022.png"
  - "screenshots/0023.png"
  - "screenshots/0024.png"
  - "screenshots/0025.png"
  - "screenshots/0026.png"
  - "screenshots/0027.png"
  - "screenshots/0028.png"
  - "screenshots/0029.png"
  - "screenshots/0030.png"
  - "screenshots/0031.png"
  - "screenshots/0032.png"
  - "screenshots/0033.png"
  - "screenshots/0034.png"
  - "screenshots/0035.png"
  - "screenshots/0036.png"
  - "screenshots/0037.png"
  - "screenshots/0038.png"
  - "screenshots/0039.png"
  - "screenshots/0040.png"
  - "screenshots/0041.png"
  - "screenshots/0042.png"
  - "screenshots/0043.png"
  - "screenshots/0044.png"
  - "screenshots/0045.png"
  - "screenshots/0046.png"
  - "screenshots/0047.png"
  - "screenshots/0048.png"
  - "screenshots/0049.png"
  - "screenshots/0050.png"
  - "screenshots/0051.png"
  - "screenshots/0052.png"
  - "screenshots/0053.png"
  - "screenshots/0054.png"
  - "screenshots/0055.png"
  - "screenshots/0056.png"
  - "screenshots/0057.png"
  - "screenshots/0058.png"
  - "screenshots/0059.png"
  - "screenshots/0060.png"
  - "screenshots/0061.png"
  - "screenshots/0062.png"
  - "screenshots/index.json"
  - "tabs.json"
  - "viewer.css"
  - "viewer.js"
speech_clock:
  - "00:06:58,280 --> 00:07:23,220"
event_t_ms: [410093, 414825, 416593, 420224, 423292, 439625, 442358, 443780, 447915]
screenshot_files:
  - "screenshots/0049.png"
  - "screenshots/0052.png"
  - "screenshots/0053.png"
  - "screenshots/0054.png"
tags: ["interaction", "accordion", "homepage", "built-around-you", "readability"]
---

## Exact issue

On the homepage block headed “Built around you.” they treated the left accordion as not usable to read.

Raw ASR 00:06:58 “Actually, I would say we should remove the voice chat. And fit it. It is not opening up. I see one line.” Join: there is no voice chat on screen. Clicks 1.5s later are `button#home-built-trigger-1` (“Every bank’s home loan in the same layout”) and `button#home-built-trigger-0` (“Guides that walk you through a home loan”). Screenshots `0049.png`–`0054.png` show that accordion. ASR likely meant this widget / this section, not a voice chat.

They said they have to read more; they see only one point on one screen; then they can read it; maybe remove this section; “It would be unique.”

`pages.json` actions list those five accordion buttons. After the clicks, `0053.png` shows the same-layout row expanded with one description line; `0054.png` shows Guides expanded with one description line. Other rows stay collapsed. That is the one-line / one-point-per-screen defect they named.

## How the files join

- **418280–437560 ms** — said not opening; one line; read more; only one point on one screen. Scroll y~6993–7133 onto Built around you. Screens `0049.png`–`0052.png` accordion with first row expanded and one body sentence. Therefore: collapsed accordion is the object.
- **443780 ms** — focus+click `#home-built-trigger-1`. `0053.png` same-layout row open, still one short paragraph. Therefore: opening a row still yields one line, not a full view of all points.
- **447915 ms** — click `#home-built-trigger-0`. `0054.png` Guides row open again. Therefore: they were testing whether it opens; it swaps one line, it does not show every point.

## Pinpoint

On the Shroffin homepage “Built around you.” accordion, only one row’s heading plus one line of body is readable at a time. They said it is not opening, they see one line, and they see only one point per screen, so they cannot read the set without extra clicks.

## Related discussion (not the issue itself)

- “Remove the voice chat and fit it” is ASR; joined to this accordion, not a missing chat product.
- “Maybe we should remove this section. It would be unique.” — they are weighing dropping Built around you because it does not read, while still calling the content unique. Removal talk is related; the defect is the one-line accordion.
- Side preview (Guides / Before-While-After card) is issue 04, not this.

## Chronology in this recording

| Clock | Said | Did | Screen |
|---|---|---|---|
| 00:06:58 | Remove voice chat (ASR); fit it; not opening; one line | scroll onto Built around you | `0049.png` |
| 00:07:09–00:07:17 | Have to read more; only one point on one screen; then I can read it | idle | `0051.png` `0052.png` |
| 00:07:19–00:07:23 | Maybe remove this section; it would be unique | idle | `0052.png` |
| 00:07:23 | (clicks begin; talk moves to the side card) | click trigger-1 then trigger-0 | `0053.png` `0054.png` |

## Cross-recording continuation

Standalone for the one-line accordion complaint. Next recording clicks the same accordion again, but the talk there is unique-point duplication and standardized view, not “I see one line.” Previous recording never reached Built around you (last shots are the story intro).

## Evidence by file (every file in the folder — no omissions)

- `audio.json` — 154 segments; language tag `mr` (wrong); word times for Transparent/slide/six points/fading/accordion/duplicate. avg_logprob often ~-0.4 to -0.66. Used for: speech clock / ASR reconcile.
- `audio.lrc` — LRC cues; same speech clock as SRT with minor wording drift. Used for: speech clock / ASR reconcile.
- `audio.srt` — Primary speech clock (HH:MM:SS,mmm). Quoted in chronology. Used for: speech clock / ASR reconcile.
- `audio.text` — Untimed full transcript; used to check sentence continuity. Used for: speech clock / ASR reconcile.
- `audio.tsv` — Millisecond start/end + text; aligned to events.t. Used for: speech clock / ASR reconcile.
- `audio.txt` — Timed dump; wording sometimes differs from SRT (e.g. transparent vs Transparent). Used for: speech clock / ASR reconcile.
- `audio.vtt` — WebVTT twin of SRT; used to confirm cue bounds. Used for: speech clock / ASR reconcile.
- `audio.webm` — Binary mic; not listened. Speech taken from text artifacts. Used for: speech clock / ASR reconcile.
- `audio_sentences.txt` — Sentence dump; same content as audio.text with different wrapping. Used for: speech clock / ASR reconcile.
- `console.json` — Empty array `[]`. No console errors during this homepage review. Used for: page/object/timeline.
- `events.json` — 172 events on http://localhost:8765/. Landmark t=203; clicks t=12323 (h2#home-clear-title), 65705 (section 2 p span), 145283 (section 4 p span), 443780 (#home-built-trigger-1), 447915 (#home-built-trigger-0); scrolls map story vs Built around you. Used for: page/object/timeline.
- `index.html` — Player shell. Comment inlines recording id 6be15ad6-ecbe-44e0-8c46-58dd985b7dca, start_url http://localhost:8765/, 172 events, 63 shots. No extra reviewer talk. Used for: page/object/timeline.
- `manifest.json` — id 6be15ad6-ecbe-44e0-8c46-58dd985b7dca; 2026-08-15T14:30:27.912Z–14:39:10.279Z; duration_ms 522367; viewport 1366×768; url only http://localhost:8765/. Used for: page/object/timeline.
- `pages.json` — Title Shroffin. Headings: Transparent like never before; Zero commissions / Zero bias; Best of all own pace; Built around you; accordion labels Guides / same layout / Browse before number / One application / Help toward what you need. Used for: page/object/timeline.
- `replay.spec.ts` — Replay of the five clicks and idle waits. Confirms locators, not extra talk. Used for: page/object/timeline.
- `screenshots/0000.png` — t=204 ms. start: story intro “We completely re-engineered your home loan journey.”. Used for: earlier story frame.
- `screenshots/0001.png` — t=8205 ms. story intro plus hollow “Transparent,” entering from below. Used for: earlier story frame.
- `screenshots/0002.png` — t=12729 ms. full-screen “Transparent, like never before.”. Used for: earlier story frame.
- `screenshots/0003.png` — t=22204 ms. full-screen “Transparent, like never before.”. Used for: earlier story frame.
- `screenshots/0004.png` — t=30206 ms. full-screen “Transparent, like never before.”. Used for: earlier story frame.
- `screenshots/0005.png` — t=40205 ms. scrolled back to story intro. Used for: earlier story frame.
- `screenshots/0006.png` — t=48205 ms. full-screen “Transparent, like never before.”. Used for: earlier story frame.
- `screenshots/0007.png` — t=56206 ms. full-screen “Transparent, like never before.”. Used for: earlier story frame.
- `screenshots/0008.png` — t=66113 ms. interaction click on Zero-bias body; still on Transparent/Zero transition. Used for: earlier story frame.
- `screenshots/0009.png` — t=74206 ms. full-screen “Zero commissions. / Zero bias.”. Used for: earlier story frame.
- `screenshots/0010.png` — t=84206 ms. full-screen “Zero commissions. / Zero bias.”. Used for: earlier story frame.
- `screenshots/0011.png` — t=94205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0012.png` — t=104205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0013.png` — t=112205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0014.png` — t=120205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0015.png` — t=128205 ms. scrolled; Transparent/story mix. Used for: earlier story frame.
- `screenshots/0016.png` — t=136205 ms. sparse dark frame during fast scroll. Used for: earlier story frame.
- `screenshots/0017.png` — t=144205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0018.png` — t=145686 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0019.png` — t=154204 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0020.png` — t=162205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0021.png` — t=170205 ms. scrolled up to story intro while counting unique points. Used for: earlier story frame.
- `screenshots/0022.png` — t=178205 ms. scrolled up to story intro while counting unique points. Used for: earlier story frame.
- `screenshots/0023.png` — t=188205 ms. scrolled up to story intro while counting unique points. Used for: earlier story frame.
- `screenshots/0024.png` — t=196205 ms. scrolled up to story intro while counting unique points. Used for: earlier story frame.
- `screenshots/0025.png` — t=204205 ms. Transparent slide during unique-point tally. Used for: earlier story frame.
- `screenshots/0026.png` — t=212205 ms. Zero commissions / Zero bias during unique-point tally. Used for: earlier story frame.
- `screenshots/0027.png` — t=220205 ms. Zero commissions / Zero bias during unique-point tally. Used for: earlier story frame.
- `screenshots/0028.png` — t=230205 ms. Best-of-all text clipped above “Built around you.”. Used for: earlier story frame.
- `screenshots/0029.png` — t=238205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0030.png` — t=246205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0031.png` — t=254205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0032.png` — t=262205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0033.png` — t=272205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0034.png` — t=282205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0035.png` — t=290205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0036.png` — t=300205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0037.png` — t=308205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: earlier story frame.
- `screenshots/0038.png` — t=316205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0039.png` — t=324205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0040.png` — t=332205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0041.png` — t=342204 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0042.png` — t=350204 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0043.png` — t=358204 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0044.png` — t=366205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0045.png` — t=376205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0046.png` — t=386205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0047.png` — t=396205 ms. faded Zero slide: two stacked “Zero” words, body color gone. Used for: earlier story frame.
- `screenshots/0048.png` — t=404205 ms. scroll mix of Best-of-all clip and Built around you. Used for: earlier story frame.
- `screenshots/0049.png` — t=414205 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0050.png` — t=422205 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0051.png` — t=432204 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0052.png` — t=440205 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0053.png` — t=444182 ms. after click: Every bank’s home loan in the same layout expanded; Same layout table preview. Used for: accordion join.
- `screenshots/0054.png` — t=448317 ms. after click: Guides that walk you through a home loan expanded; Guides preview. Used for: accordion join.
- `screenshots/0055.png` — t=458204 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0056.png` — t=466204 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0057.png` — t=474205 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0058.png` — t=482205 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0059.png` — t=492204 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0060.png` — t=500204 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0061.png` — t=508204 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/0062.png` — t=516205 ms. Built around you accordion + Guides side preview. Used for: accordion join.
- `screenshots/index.json` — 63 shots, t 204–516205, reasons start|periodic|interaction, all url http://localhost:8765/, mask_rects empty. Used for: page/object/timeline.
- `tabs.json` — One tab 1351502398, url http://localhost:8765/, entered_at 1786804227912, left_at 1786804749836. Used for: page/object/timeline.
- `viewer.css` — Generic player CSS only. No session talk. Used for: page/object/timeline.
- `viewer.js` — Generic player JS only. No session talk. Used for: page/object/timeline.

## ASR notes

- Strong conflict: SRT “remove the voice chat” vs screen+clicks on `#home-built-trigger-*`. Used click/screenshot. Quote raw ASR. Likely meant this section / this accordion.
- “I see one line” / “I see only one point on one screen” agree across SRT, TSV, JSON and match `0052.png`.
- audio.txt 00:07:03 “It is not opening up” matches events: they then click to force a row open.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line",
  "folder": "wb-rec-260815-2000",
  "sequence_index": 5,
  "recording_id": "6be15ad6-ecbe-44e0-8c46-58dd985b7dca",
  "page_url": "http://localhost:8765/",
  "on_screen_object": "Built around you accordion #home-built-trigger-0 / #home-built-trigger-1",
  "pinpoint": "Accordion is not opening into a readable set of points; only one line / one point shows per screen.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-04-built-around-you-side-preview-duplicate.md"],
  "speech_clock": ["00:06:58,280 --> 00:07:23,220"],
  "event_t_ms": [443780, 447915],
  "screenshot_files": ["screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png"],
  "tags": ["interaction", "accordion", "homepage"]
}
```
