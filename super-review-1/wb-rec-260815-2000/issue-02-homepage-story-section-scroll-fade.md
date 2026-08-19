# Homepage story section fading on scroll

While still on the homepage story, they said the color is not white, then that the color is not there.
They said the whole section is fading away, and that it was not like that from the start.
They repeated that three times, then said they think this section should be removed.
The frame at that moment shows the Zero slide with the body color gone, leaving two stacked “Zero” words.

---
issue_id: "wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade"
folder: "wb-rec-260815-2000"
sequence_index: 5
recording_id: "6be15ad6-ecbe-44e0-8c46-58dd985b7dca"
recording_started_at: "2026-08-15T14:30:27.912Z"
recording_ended_at: "2026-08-15T14:39:10.279Z"
duration_ms: 522367
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Homepage story full-screen section (Zero commissions / Zero bias) as it fades on scroll"
pinpoint: "On the homepage story, they said the section’s color is gone and the whole section is fading away — not like that from the start — and they think this section should be removed; the matching shot shows two stacked Zero words with the rest of the slide faded out."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files:
  - "issue-01-homepage-story-full-slides-need-consolidation.md"
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
  - "00:06:26,240 --> 00:06:57,080"
event_t_ms: [377325, 383659, 385425, 386557, 397358, 400490, 405158, 408124, 410093]
screenshot_files:
  - "screenshots/0046.png"
  - "screenshots/0047.png"
  - "screenshots/0048.png"
tags: ["layout", "motion", "fade", "homepage", "story"]
---

## Exact issue

After praising font and spacing, they looked at the story section again and treated its scroll fade as wrong.

SRT 00:06:26 “The color is not white.” / “It is nice.” / “The color is not there.” / “The whole section is fading away.” Then three times: “From the start, it was not like that.” Then “I think we should remove this section” (twice).

At 386205 ms `screenshots/0046.png` is a mixed Best-of-all / Built-around-you scroll. At 396205 ms `screenshots/0047.png` is a dark story frame with two large stacked “Zero” words and the supporting copy gone — the color they said is not there. Scrolls at 397358 (y=3551) and 400490 (y=1438) move back up through the story while they keep saying it was not like that from the start.

This is not the consolidation argument (too many slides). It is the live fade: the section loses color as they scroll, unlike the start of the section.

## How the files join

- **386240–396000 ms** — said color not white / not there / whole section fading. Idle after scroll y=6797–6865. Screen `0046.png` then `0047.png` faded Zero. Therefore: the fading Zero story section is the object.
- **396040–411280 ms** — said from the start it was not like that (×3); remove this section (×2). Scrolls y=3551, 1438, then back down toward Built around you. `0048.png` at 404205 shows the transition. Therefore: they want the faded section gone, not a new color theory.

`pages.json` names the Zero heading “Zero commissions. Zero bias.” `events.json` has no click in this window — talk during idle/scroll.

## Pinpoint

On the Shroffin homepage story, the full-screen Zero commissions / Zero bias section fades as they scroll: the color leaves and only stacked “Zero” words remain. They said that was not true from the start of the section and they think the section should be removed.

## Related discussion (not the issue itself)

- Immediately before: they like font, color guide, sections and spacing; 5/20/60 missing-something talk. That praise is issue 01 related talk, not this fade.
- “It is nice” after “the color is not white” is about the remaining color, not approval of the fade.
- After this they leave the story and attack Built around you (issues 03–04). “Remove this section” here is still the fading story block, not yet the accordion.

## Chronology in this recording

| Clock | Said | Did | Screen |
|---|---|---|---|
| 00:06:17–00:06:21 | 60 was / was not in my mind | idle | `0045.png` Best of all |
| 00:06:26 | Color not white; nice; color not there; whole section fading | idle/scroll on story | `0046.png` `0047.png` |
| 00:06:36–00:06:44 | From the start it was not like that (×3) | scroll y=3551 then 1438 | `0047.png` `0048.png` |
| 00:06:44–00:06:57 | I think we should remove this section (×2) | scroll back toward Built around you | `0048.png` `0049.png` |

## Cross-recording continuation

Standalone inside this folder. Previous recording’s ending is story copy/structure, not fade. Next recording starts on Built around you / standardized view, not this fade.

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
- `screenshots/0000.png` — t=204 ms. start: story intro “We completely re-engineered your home loan journey.”. Used for: other homepage frame.
- `screenshots/0001.png` — t=8205 ms. story intro plus hollow “Transparent,” entering from below. Used for: other homepage frame.
- `screenshots/0002.png` — t=12729 ms. full-screen “Transparent, like never before.”. Used for: other homepage frame.
- `screenshots/0003.png` — t=22204 ms. full-screen “Transparent, like never before.”. Used for: other homepage frame.
- `screenshots/0004.png` — t=30206 ms. full-screen “Transparent, like never before.”. Used for: other homepage frame.
- `screenshots/0005.png` — t=40205 ms. scrolled back to story intro. Used for: other homepage frame.
- `screenshots/0006.png` — t=48205 ms. full-screen “Transparent, like never before.”. Used for: other homepage frame.
- `screenshots/0007.png` — t=56206 ms. full-screen “Transparent, like never before.”. Used for: other homepage frame.
- `screenshots/0008.png` — t=66113 ms. interaction click on Zero-bias body; still on Transparent/Zero transition. Used for: other homepage frame.
- `screenshots/0009.png` — t=74206 ms. full-screen “Zero commissions. / Zero bias.”. Used for: other homepage frame.
- `screenshots/0010.png` — t=84206 ms. full-screen “Zero commissions. / Zero bias.”. Used for: other homepage frame.
- `screenshots/0011.png` — t=94205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0012.png` — t=104205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0013.png` — t=112205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0014.png` — t=120205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0015.png` — t=128205 ms. scrolled; Transparent/story mix. Used for: other homepage frame.
- `screenshots/0016.png` — t=136205 ms. sparse dark frame during fast scroll. Used for: other homepage frame.
- `screenshots/0017.png` — t=144205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0018.png` — t=145686 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0019.png` — t=154204 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0020.png` — t=162205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0021.png` — t=170205 ms. scrolled up to story intro while counting unique points. Used for: other homepage frame.
- `screenshots/0022.png` — t=178205 ms. scrolled up to story intro while counting unique points. Used for: other homepage frame.
- `screenshots/0023.png` — t=188205 ms. scrolled up to story intro while counting unique points. Used for: other homepage frame.
- `screenshots/0024.png` — t=196205 ms. scrolled up to story intro while counting unique points. Used for: other homepage frame.
- `screenshots/0025.png` — t=204205 ms. Transparent slide during unique-point tally. Used for: other homepage frame.
- `screenshots/0026.png` — t=212205 ms. Zero commissions / Zero bias during unique-point tally. Used for: other homepage frame.
- `screenshots/0027.png` — t=220205 ms. Zero commissions / Zero bias during unique-point tally. Used for: other homepage frame.
- `screenshots/0028.png` — t=230205 ms. Best-of-all text clipped above “Built around you.”. Used for: other homepage frame.
- `screenshots/0029.png` — t=238205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0030.png` — t=246205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0031.png` — t=254205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0032.png` — t=262205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0033.png` — t=272205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0034.png` — t=282205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0035.png` — t=290205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0036.png` — t=300205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0037.png` — t=308205 ms. full-screen “Best of all… without spam calls, a hard sell, or pushy notifications.”. Used for: other homepage frame.
- `screenshots/0038.png` — t=316205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0039.png` — t=324205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0040.png` — t=332205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0041.png` — t=342204 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0042.png` — t=350204 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0043.png` — t=358204 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0044.png` — t=366205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0045.png` — t=376205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0046.png` — t=386205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0047.png` — t=396205 ms. faded Zero slide: two stacked “Zero” words, body color gone. Used for: fade join.
- `screenshots/0048.png` — t=404205 ms. scroll mix of Best-of-all clip and Built around you. Used for: fade join.
- `screenshots/0049.png` — t=414205 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0050.png` — t=422205 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0051.png` — t=432204 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0052.png` — t=440205 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0053.png` — t=444182 ms. after click: Every bank’s home loan in the same layout expanded; Same layout table preview. Used for: other homepage frame.
- `screenshots/0054.png` — t=448317 ms. after click: Guides that walk you through a home loan expanded; Guides preview. Used for: other homepage frame.
- `screenshots/0055.png` — t=458204 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0056.png` — t=466204 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0057.png` — t=474205 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0058.png` — t=482205 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0059.png` — t=492204 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0060.png` — t=500204 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0061.png` — t=508204 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/0062.png` — t=516205 ms. Built around you accordion + Guides side preview. Used for: other homepage frame.
- `screenshots/index.json` — 63 shots, t 204–516205, reasons start|periodic|interaction, all url http://localhost:8765/, mask_rects empty. Used for: page/object/timeline.
- `tabs.json` — One tab 1351502398, url http://localhost:8765/, entered_at 1786804227912, left_at 1786804749836. Used for: page/object/timeline.
- `viewer.css` — Generic player CSS only. No session talk. Used for: page/object/timeline.
- `viewer.js` — Generic player JS only. No session talk. Used for: page/object/timeline.

## ASR notes

- SRT/TSV/JSON agree on “The whole section is fading away” and “From the start, it was not like that.” No conflict on the defect words.
- “The color is not white” then “It is nice” then “The color is not there” — keep all three; screenshot `0047.png` shows lost body color, not a white page.
- “Remove this section” is the same cue family as later accordion “remove this section.” Split by screen: here `0047.png` Zero fade; later `0049.png+` Built around you.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade",
  "folder": "wb-rec-260815-2000",
  "sequence_index": 5,
  "recording_id": "6be15ad6-ecbe-44e0-8c46-58dd985b7dca",
  "page_url": "http://localhost:8765/",
  "on_screen_object": "Homepage story Zero commissions / Zero bias section fading on scroll",
  "pinpoint": "Story section color disappears on scroll; whole section fades; they said it was not like that from the start and should be removed.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-homepage-story-full-slides-need-consolidation.md"],
  "speech_clock": ["00:06:26,240 --> 00:06:57,080"],
  "event_t_ms": [397358, 400490],
  "screenshot_files": ["screenshots/0047.png", "screenshots/0046.png"],
  "tags": ["layout", "motion", "fade", "homepage"]
}
```
