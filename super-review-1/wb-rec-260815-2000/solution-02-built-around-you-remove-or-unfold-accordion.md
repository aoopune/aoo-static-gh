# Built around you — remove accordion or let all points read at once

The Built around you accordion only shows one line per row; they cannot read the five points without extra clicks.
They said to remove the accordion pattern and fit the content, or maybe remove the whole section — the content is unique even if the control is wrong.
One screen should show more than a single point so people can actually read what Shroffin offers.

---
solution_id: "wb-rec-260815-2000/solution-02-built-around-you-remove-or-unfold-accordion"
solution_title: "Built around you — remove accordion or let all points read at once"
folder: "wb-rec-260815-2000"
sequence_index: 5
recording_id: "6be15ad6-ecbe-44e0-8c46-58dd985b7dca"
recording_started_at: "2026-08-15T14:30:27.912Z"
recording_ended_at: "2026-08-15T14:39:10.279Z"
duration_ms: 522367
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Built around you accordion (#home-built-trigger-0 … #home-built-trigger-4)"
for_topic: "Built around you section readability — accordion shows one line / one point per screen instead of opening into a full read"
pinpoint: "On Built around you they said the accordion is not opening: they see one line, only one point on one screen, and have to read more; they said remove the accordion (ASR: 'voice chat') and fit it, or maybe remove the section though the content would be unique."
kind: ["proposed_change", "potential_suggestion", "user_convenience"]
decidedness: "brainstorm"
basis: "Users should be able to read all five product points without hunting; a one-line collapsed accordion adds friction and hides what makes Shroffin different."
analog_source: "none"
linked_issue_files: ["issue-03-built-around-you-accordion-one-line.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-03-scroll-preview-in-place-not-side-duplicate.md", "solution-04-apple-not-cheap-side-duplicate-preview.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png"]
speech_clock: ["00:06:58–00:07:23", "418280–443220 ms"]
event_t_ms: [443780, 447915]
screenshot_files: ["screenshots/0038.png", "screenshots/0041.png", "screenshots/0046.png", "screenshots/0051.png", "screenshots/0053.png", "screenshots/0054.png"]
tags: ["accordion", "built-around-you", "readability", "interaction", "homepage"]
---

## Exact solution (or idea that can also be a solution)

At **Built around you**, the left accordion (`#home-built-trigger-0` … `#home-built-trigger-4`) does not give a readable open state:

- “It is not opening up. I see one line. I have to read more.”
- “I see only one point on one screen. Then I can read it.”

Constructive directions they floated:

1. **Remove the accordion UI and fit the content another way** — “Actually, I would say we should remove the voice chat. And fit it.” (ASR: *voice chat* → accordion; joined to clicks on `#home-built-trigger-*` at 443780 ms and 447915 ms, not a chat product.)
2. **Maybe remove the whole Built around you section** — “Maybe we should remove this section. It would be unique.” They weigh dropping the section because it does not read, while still calling the underlying content unique.

The idea is **user convenience**: all five points (Guides, Same layout, Browse before number, One application, Help) should be readable without extra hunting. The accordion-as-is fails that job.

## What this is for

Homepage **Built around you** accordion on `/`. Issue `issue-03-built-around-you-accordion-one-line.md` is the defect (one-line collapsed read); this file is the direction to remove/replace the accordion or the section.

## Why they said it that way

They want homepage visitors to grasp Shroffin’s five product pillars in one pass. A control that shows one heading + one short line forces click-by-click discovery — friction that hides uniqueness instead of showing it.

## How the files join (required)

- **418280–443220 ms (00:06:58–00:07:23)** — said: remove accordion/fit; not opening; one line; maybe remove section (`audio.srt` 119–128). Doing: scroll to Built around you; clicks `#home-built-trigger-1` then `#home-built-trigger-0` at 443780 ms / 447915 ms (`events.json`). Seeing: `screenshots/0051.png`, `0053.png`, `0054.png` — accordion with one expanded row + short body, side preview still duplicate text. Page: Built around you region (`pages.json`). **Finding**: replace or remove accordion so points are actually readable; optional cut of whole section.

## Pinpoint

Built around you accordion on the homepage — they said it does not open into a readable set (one line / one point per screen), proposed removing the accordion and fitting content differently, and brainstormed removing the section while keeping the content unique.

## Related discussion (not the solution itself)

- “It is not just words” — they expect a real product visual, not copy-only preview (feeds solution-03/04).
- Side preview duplicate is a separate direction (solution-03/04); issue-04 covers the duplicate card defect.

## Chronology in this recording

| Clock | Said | Did | Screenshot |
|---|---|---|---|
| 00:06:44 | Remove fading story section | scroll up | 0047 |
| 00:06:58 | Remove accordion / fit it | scroll to Built around you | 0038–0041 |
| 00:07:03 | Not opening; one line | idle on accordion | 0046 |
| 00:07:12 | One point per screen | idle | 0051 |
| 00:07:19 | Maybe remove section — unique | idle | 0051 |
| 00:07:23+ | Side preview duplicate talk | click triggers | 0053–0054 |

## Cross-recording continuation

Standalone in this recording. Side-preview/product-visual talk continues into `wb-rec-260815-2009`.

## Evidence by file (every raw recorder file in the folder — no omissions)

- **audio.json** — segments 119–128 accordion/remove quotes; word times ~418–443 s; `supports_solution`.
- **audio.lrc** — timed accordion/remove lines; `supports_solution`.
- **audio.srt** — cues 119–128 primary quotes; `supports_solution`.
- **audio.text** — plain accordion/remove lines; `supports_solution`.
- **audio.tsv** — 418280–443220 ms accordion stretch; `timeline_alignment`.
- **audio.txt** — bracket timestamps for accordion talk; `supports_solution`.
- **audio.vtt** — duplicate transcript; `checked_no_extra_signal`.
- **audio.webm** — binary; not played; `binary_audio_untranscribed_use_text_artifacts`.
- **audio_sentences.txt** — includes accordion lines in paragraph; `supports_solution`.
- **console.json** — empty; `checked_no_extra_signal`.
- **events.json** — focus/click `#home-built-trigger-1` 443780 ms, `#home-built-trigger-0` 447915 ms; scroll y≈6899–7269; `supports_solution`.
- **index.html** — inlined events with built-trigger locators; `timeline_alignment`.
- **manifest.json** — session metadata; `timeline_alignment`.
- **pages.json** — Built around you headings + five trigger buttons; `supports_solution`.
- **replay.spec.ts** — replay clicks built-trigger-1/0; `timeline_alignment`.
- **tabs.json** — single homepage tab; `timeline_alignment`.
- **viewer.css** — generic player 17895 B; `player_chrome_fully_read_confirmed`.
- **viewer.js** — generic player 32334 B; `player_chrome_fully_read_confirmed`.
- **screenshots/index.json** — shots 0053/0054 interaction at 444182/448317 ms; `timeline_alignment`.
- **screenshots/0000.png** through **0027.png** — story section only; `checked_no_extra_signal` for this finding.
- **screenshots/0028.png** — first Built around you entry; `timeline_alignment`.
- **screenshots/0029.png** through **0037.png** — scroll toward Built around you; `timeline_alignment`.
- **screenshots/0038.png** — Built around you + accordion one line; `supports_solution`.
- **screenshots/0039.png** through **0045.png** — accordion one-line states; `supports_solution`.
- **screenshots/0046.png** — full accordion + side preview; `supports_solution`.
- **screenshots/0047.png** — story fade (prior topic); `checked_no_extra_signal`.
- **screenshots/0048.png** — transition; `timeline_alignment`.
- **screenshots/0049.png** through **0052.png** — Built around you accordion; `supports_solution`.
- **screenshots/0053.png** — click Same layout row expanded; `supports_solution`.
- **screenshots/0054.png** — click Guides row; `supports_solution`.
- **screenshots/0055.png** through **0062.png** — idle on Built around you after clicks; `supports_solution`.

### Helper issue files

- **issue-03-built-around-you-accordion-one-line.md** — `timestamp_map`, `cross_link`.

## ASR notes

- “Remove the voice chat” — no chat UI on screen; joined to accordion at Built around you (`#home-built-trigger-*` clicks). Used accordion reading.
- “It would be unique” — refers to section content, not the accordion widget.

## JSON

```json
{
  "solution_id": "wb-rec-260815-2000/solution-02-built-around-you-remove-or-unfold-accordion",
  "solution_title": "Built around you — remove accordion or let all points read at once",
  "folder": "wb-rec-260815-2000",
  "sequence_index": 5,
  "recording_id": "6be15ad6-ecbe-44e0-8c46-58dd985b7dca",
  "recording_started_at": "2026-08-15T14:30:27.912Z",
  "recording_ended_at": "2026-08-15T14:39:10.279Z",
  "duration_ms": 522367,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Built around you accordion (#home-built-trigger-0 … #home-built-trigger-4)",
  "for_topic": "Built around you section readability — accordion shows one line / one point per screen instead of opening into a full read",
  "pinpoint": "On Built around you they said the accordion is not opening: they see one line, only one point on one screen, and have to read more; they said remove the accordion (ASR: 'voice chat') and fit it, or maybe remove the section though the content would be unique.",
  "kind": ["proposed_change", "potential_suggestion", "user_convenience"],
  "decidedness": "brainstorm",
  "basis": "Users should be able to read all five product points without hunting; a one-line collapsed accordion adds friction and hides what makes Shroffin different.",
  "analog_source": "none",
  "linked_issue_files": ["issue-03-built-around-you-accordion-one-line.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-03-scroll-preview-in-place-not-side-duplicate.md", "solution-04-apple-not-cheap-side-duplicate-preview.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png"],
  "speech_clock": ["00:06:58–00:07:23", "418280–443220 ms"],
  "event_t_ms": [443780, 447915],
  "screenshot_files": ["screenshots/0038.png", "screenshots/0041.png", "screenshots/0046.png", "screenshots/0051.png", "screenshots/0053.png", "screenshots/0054.png"],
  "tags": ["accordion", "built-around-you", "readability", "interaction", "homepage"],
  "quotes": [
    {"clock": "00:06:58", "text": "Actually, I would say we should remove the voice chat. And fit it.", "artifact": "audio.srt"},
    {"clock": "00:07:03", "text": "It is not opening up. I see one line.", "artifact": "audio.srt"},
    {"clock": "00:07:12", "text": "I see only one point on one screen.", "artifact": "audio.srt"},
    {"clock": "00:07:19", "text": "Maybe we should remove this section. It would be unique.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 443780, "name": "Every bank's home loan in the same layout", "css": "#home-built-trigger-1"},
    {"t_ms": 447915, "name": "Guides that walk you through a home loan", "css": "#home-built-trigger-0"}
  ],
  "related_discussion_present": true
}
```
