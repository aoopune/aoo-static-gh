# Built around you side preview is a duplicate

Beside the Built around you accordion they pointed at a card that repeats the same Guides steps.
They said it is not in the phone, it sits below the dropdown, and it is just a duplicate.
They called that pattern cheap: many companies do it; Apple does not; even if kept, it is not normal.
At the end they asked, when comparing, what is written on top versus what is actually seen.

---
issue_id: "wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate"
folder: "wb-rec-260815-2000"
sequence_index: 5
recording_id: "6be15ad6-ecbe-44e0-8c46-58dd985b7dca"
recording_started_at: "2026-08-15T14:30:27.912Z"
recording_ended_at: "2026-08-15T14:39:10.279Z"
duration_ms: 522367
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Built around you right-hand preview card (Guides Before/While/After; Same layout table)"
pinpoint: "The card to the right of the Built around you accordion duplicates the accordion copy (Guides steps / same-layout table) instead of showing a real product; they called it a duplicate, cheap, not what Apple does, and asked what the difference is when comparing because it is written on top but not seen on top."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2009"
related_issue_files:
  - "issue-03-built-around-you-accordion-one-line.md"
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
  - "00:07:24,220 --> 00:08:37,990"
event_t_ms: [443780, 447915, 449961, 469858, 472759]
screenshot_files:
  - "screenshots/0053.png"
  - "screenshots/0054.png"
  - "screenshots/0057.png"
  - "screenshots/0062.png"
tags: ["layout", "duplicate", "homepage", "built-around-you", "preview", "trust"]
---

## Exact issue

After opening accordion rows, they attacked the right-hand preview, not the headings.

SRT: “I don't know if you can see this. It is not just words. No, it is not in the phone. It is below the drop down. It is just a duplicate. We should put it here. And it will scroll. It is cheap. Many companies do it. I have seen it. Apple doesn't do it. … It is not normal.” Then: “And when we compare. Actually I have seen it. But it is written on the top. It is not seen on the top. What is the difference?”

Join: `0054.png` / `0057.png` show the Guides card (Before: Choosing a bank / While: Comparing offers / After: Taking the loan) next to the expanded line “These guides cover picking a bank, comparing offers, and what happens after you take the loan.” Same three steps twice. `0053.png` after trigger-1 shows a “Same layout” table (Bank / Interest / Charges…) beside “Every bank’s home loan in the same layout.” They said that compare view is written on top and not seen on top — the preview is not the real product.

“Not in the phone” matches the desktop two-column card, not a phone mock. “Below the drop down” matches the card sitting beside/below the accordion.

## How the files join

- **444220–458820 ms** — said can you see this; not just words; not in the phone; below the dropdown. Clicks trigger-1 then trigger-0. `0053.png` table preview; `0054.png` Guides preview. Therefore: the side card is what they are pointing at.
- **465990–474290 ms** — said just a duplicate; put it here; it will scroll. Scroll y=7095 then 6934. Still `0055.png`–`0056.png` same Guides card. Therefore: duplicate of accordion copy.
- **479530–504410 ms** — cheap; many companies; Apple doesn’t; not normal; don’t know how / can’t do it. Idle on same layout. Therefore: they reject this as a cheap dual-column pattern.
- **508050–517990 ms** — when we compare; written on top; not seen on top; what is the difference? Last shots `0060.png`–`0062.png` still Guides preview. Unfinished. Next recording starts with how a product looks / standardized view.

## Pinpoint

On the Shroffin homepage “Built around you.” block, the right-hand preview card repeats the accordion (Guides three steps, or a toy same-layout table) instead of showing the real product. They called it a duplicate and cheap, said Apple does not do that, and asked what the difference is when comparing because the compare story is written on top but not seen on top.

## Related discussion (not the issue itself)

- Apple vs “many companies” as the taste test for this dual-column preview.
- “We should put it here and it will scroll” — they sketched moving the content rather than keeping a side duplicate. Related, not a second issue.
- “I don't know how to do it / I can't do it” is them stuck on the pattern, not a new site bug.
- Accordion one-line reading is issue 03.

## Chronology in this recording

| Clock | Said | Did | Screen |
|---|---|---|---|
| 00:07:24 | Can you see this; not just words | after trigger clicks | `0053.png` `0054.png` |
| 00:07:33–00:07:47 | Not in the phone; below the dropdown; just a duplicate | idle | `0054.png` |
| 00:07:48–00:07:54 | Put it here; it will scroll | scroll y=7095 | `0055.png` |
| 00:07:59–00:08:24 | Cheap; many companies; Apple doesn’t; not normal | idle | `0057.png`–`0059.png` |
| 00:08:28–00:08:37 | When we compare; written on top; not seen on top; what is the difference? | idle to end | `0060.png`–`0062.png` |

## Cross-recording continuation

**Into `wb-rec-260815-2009`:** next first lines: “How does a product look like when it is given in the starting?” / “Now the entire market sits in one standardized view.” First shots still Built around you (`0000.png`) then they jump the story to talk about showing a standardized view (Excel in the background, no plus button). That is this unfinished “when we compare / written on top / not seen” thread. Also next: Built-around-you rows restating unique points (related to issue 01).

Not a continuation from `wb-rec-260815-1951` (that folder never reached this block).

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
- `screenshots/0049.png` — t=414205 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0050.png` — t=422205 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0051.png` — t=432204 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0052.png` — t=440205 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0053.png` — t=444182 ms. after click: Every bank’s home loan in the same layout expanded; Same layout table preview. Used for: preview join.
- `screenshots/0054.png` — t=448317 ms. after click: Guides that walk you through a home loan expanded; Guides preview. Used for: preview join.
- `screenshots/0055.png` — t=458204 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0056.png` — t=466204 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0057.png` — t=474205 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0058.png` — t=482205 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0059.png` — t=492204 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0060.png` — t=500204 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0061.png` — t=508204 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/0062.png` — t=516205 ms. Built around you accordion + Guides side preview. Used for: preview join.
- `screenshots/index.json` — 63 shots, t 204–516205, reasons start|periodic|interaction, all url http://localhost:8765/, mask_rects empty. Used for: page/object/timeline.
- `tabs.json` — One tab 1351502398, url http://localhost:8765/, entered_at 1786804227912, left_at 1786804749836. Used for: page/object/timeline.
- `viewer.css` — Generic player CSS only. No session talk. Used for: page/object/timeline.
- `viewer.js` — Generic player JS only. No session talk. Used for: page/object/timeline.

## ASR notes

- “It is not in the phone” agrees across SRT/TSV/JSON; screenshot is desktop Guides card, not a phone. Kept as “this preview is not a phone mock.”
- “below the drop down” = accordion. Matches layout.
- “Apple doesn't do it” clear; used as related taste talk for the duplicate preview.
- End: “But it is written on the top. It is not seen on the top. What is the difference?” JSON word “difference?” probability ~0.46. Next recording’s standardized-view talk is the reading that matches; do not invent a missing heading.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate",
  "folder": "wb-rec-260815-2000",
  "sequence_index": 5,
  "recording_id": "6be15ad6-ecbe-44e0-8c46-58dd985b7dca",
  "page_url": "http://localhost:8765/",
  "on_screen_object": "Built around you right-hand preview card",
  "pinpoint": "Side preview duplicates accordion copy and does not show the real compare product; they called it cheap and asked what the difference is.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2009",
  "related_issue_files": ["issue-03-built-around-you-accordion-one-line.md"],
  "speech_clock": ["00:07:24,220 --> 00:08:37,990"],
  "event_t_ms": [443780, 447915],
  "screenshot_files": ["screenshots/0053.png", "screenshots/0054.png", "screenshots/0062.png"],
  "tags": ["layout", "duplicate", "homepage", "preview"]
}
```
