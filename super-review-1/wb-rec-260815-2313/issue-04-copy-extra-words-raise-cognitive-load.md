# Extra words in site copy raise cognitive load

They treated site sentences as too heavy: extra “no”s and extra clauses make people work harder.
They contrasted “Compare all and apply in one shot. And banks will compete for you” with the lighter “Compare and apply. Let banks compete.”
They also said stacked claims like Structure / No commission / No bias load too much context.
They looked up “cognitive load” on Google while the Explore banks form stayed on screen.

---
issue_id: "wb-rec-260815-2313/issue-04-copy-extra-words-raise-cognitive-load"
issue_title: "Extra words in site copy raise cognitive load"
folder: "wb-rec-260815-2313"
sequence_index: 22
recording_id: "152443cc-6acb-4cd3-848e-1e260b989c24"
recording_started_at: "2026-08-15T17:43:51.324Z"
recording_ended_at: "2026-08-15T17:52:30.230Z"
duration_ms: 518906
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Site copy they quoted (Structure / No commission / No bias; Compare all and apply in one shot) discussed while Explore banks Loan inputs was on screen"
pinpoint: "Site sentences add extra words that raise cognitive load: repeating “no” (no x, no y, no z vs no x, y, z) and long CTAs (“Compare all and apply in one shot. And banks will compete for you” vs “Compare and apply. Let banks compete.”)."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-loan-form-importance-not-shown-by-order-color.md", "issue-03-loan-form-info-icons-need-arranging.md"]
source_files_used: ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg"]
speech_clock: ["00:04:38,960 --> 00:08:20,690"]
event_t_ms: [289343, 293091, 299505, 301063, 302329]
screenshot_files: ["screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg"]
tags: ["copy", "cognitive-load", "wording"]
---

## Exact issue

They said the site’s sentences increase cognitive load. First sentences they had — Structure, No commission, No bias — force the reader to load a lot of context. Saying “No x, no y, no z” is heavier than “No x, y, z” because of the extra “no”s. “Compare all and apply in one shot. And banks will compete for you” is heavier than “Compare and apply. Let banks compete.” Words should fit how people already think, not add load. They searched Google for “cognitive load” while saying this, then returned to Explore banks.

Raw ASR (`audio.srt`): "There is a cognitive load." / "The first sentences we had. Structure. No commission. No bias. This cognitive load increases." / "No x, no y, no z. This cognitive load has increased." / "Compare all and apply in one shot. And banks will compete for you. The load has increased." / "Compare and apply. Let banks compete. The load has decreased."

## How the files join

- time: 278960–500690 ms (00:04:38–00:08:20)
- said: `audio.srt` cues 72–140; `audio.json` segs 071–139. They name cognitive load, extra “no”s, and the compare/apply sentences.
- did: idle on Explore banks through the Tesla/foolproof stretch; tab switch t=289343 to Google; navigation t=293091 to `https://www.google.com/search?q=cognitive+load`; brief return to Explore banks t=299505; back to Google t=301063; final return t=302329 (`events.json`, `tabs.json`).
- seeing: `screenshots/0043.jpg` still Explore banks expanded form; `screenshots/0044.png` Google search “cognitive load”; `screenshots/0045.jpg`+ back on Explore banks.
- page/object: the copy they quoted is not printed as a hero on the visible Explore banks card (h1 is “Explore banks.”). They discussed those sentences as site wording while sitting on this page. Apply once is visible on the results chrome; they did not click it.
- therefore: extra words in the quoted site sentences raise cognitive load; shorter phrasing lowers it.

## Pinpoint

Site copy uses extra words — repeated “no,” stacked claims (Structure / No commission / No bias), and a long compare-and-apply line — which they said raises cognitive load versus shorter lines that match how people already think.

## Related discussion (not the issue itself)

Before the Google search they talked about a “stupid” public, details that do not impress, climbing a ladder, foolproof vs “full-proof” / waterproof / airproof, Tesla going to mass market, and not worrying if some smart traffic arrives. That is why copy must stay light, not a separate page defect. After the compare/apply contrast they used a training-data / PR-then-code analogy: models follow common instructions with less training. They closed by saying people train left-to-right and up-to-down — the same principle as issue 01’s form order.

## Chronology in this recording

- 00:01:52–00:04:36: Public is stupid; details don’t impress; foolproof (not “full-proof”); Tesla mass market. Related, not a second issue.
- 00:04:38–00:04:53: “There is a cognitive load.”
- ~00:04:49: Switch to Google “cognitive load” (shot 0044).
- 00:05:02–00:06:14: First sentences Structure / No commission / No bias increase load; extra “no”s increase load.
- 00:06:36–00:07:15: Compare-all-and-apply-in-one-shot increases load; shorter “Compare and apply. Let banks compete” decreases it; extra effort feels like load.
- 00:07:25–00:08:20: Training-data / PR-first analogy; people train LTR/TTB.

## Cross-recording continuation

Standalone as a copy issue in this folder. Next recording (`wb-rec-260815-2322`) starts on how many options, 60 lakh properties, a compare-banks button, and banks vs lenders vs NBFC — a different wording problem. Do not treat that as this same extra-words issue.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json`: URLs include Google `q=cognitive+load`. `supports_issue`
- `audio.json`: segs 071–139, cognitive load / extra no / compare-apply. `supports_issue`
- `audio.lrc`: same. `supports_issue`
- `audio.srt`: cues 72–140. `supports_issue`
- `audio.text`: “There is a cognitive load…” `supports_issue`
- `audio.tsv`: 278960–500690 ms. `timeline_alignment`
- `audio.txt`: same. `supports_issue`
- `audio.vtt`: same. `supports_issue`
- `audio.webm`: not listened. `checked_no_extra_signal`
- `audio_sentences.txt`: includes cognitive-load paragraph. `supports_issue`
- `console.json`: empty. `checked_no_extra_signal`
- `events.json`: tab_switch / navigation to Google cognitive load. `supports_issue`
- `index.html`: inlined Google URL. `timeline_alignment`
- `pages.json`: p3/p4 Google cognitive load; p1 Explore banks headings do not include the quoted CTA. `supports_issue`
- `replay.spec.ts`: goto Google cognitive load; tab-switch TODOs. `supports_issue`
- `tabs.json`: Explore banks ↔ Google cognitive load. `supports_issue`
- `viewer.css`: generic. `checked_no_extra_signal`
- `viewer.js`: generic. `checked_no_extra_signal`
- `screenshots/index.json`: 0044 navigation to Google t=293091. `timeline_alignment`
- `screenshots/0000.jpg`–`0042.jpg`: earlier form/tooltip work. `checked_no_extra_signal`
- `screenshots/0043.jpg`: Explore banks just before Google. `timeline_alignment`
- `screenshots/0044.png`: Google “cognitive load”. `supports_issue`
- `screenshots/0045.jpg`–`0068.jpg`: back on Explore banks during the rest of the copy talk. `supports_issue`

## ASR notes

`audio.srt`: “cognitive load”; `audio.json` also “cognitive load.” Google query is `cognitive load`, so that reading wins over any “cognitive load” mix. `audio.srt` “Structure. No commission. No bias.” vs `audio.json` “Structure. No commission. No bias.” Used srt. “Compare all and apply in one shot” vs “Compare all and apply in one go” — srt used. Language tag `mr` ignored.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2313/issue-04-copy-extra-words-raise-cognitive-load",
  "issue_title": "Extra words in site copy raise cognitive load",
  "folder": "wb-rec-260815-2313",
  "sequence_index": 22,
  "recording_id": "152443cc-6acb-4cd3-848e-1e260b989c24",
  "recording_started_at": "2026-08-15T17:43:51.324Z",
  "recording_ended_at": "2026-08-15T17:52:30.230Z",
  "duration_ms": 518906,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Site copy they quoted (Structure / No commission / No bias; Compare all and apply in one shot) discussed while Explore banks Loan inputs was on screen",
  "pinpoint": "Site sentences add extra words that raise cognitive load: repeating “no” (no x, no y, no z vs no x, y, z) and long CTAs (“Compare all and apply in one shot. And banks will compete for you” vs “Compare and apply. Let banks compete.”).",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-loan-form-importance-not-shown-by-order-color.md", "issue-03-loan-form-info-icons-need-arranging.md"],
  "source_files_used": ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg"],
  "speech_clock": ["00:04:38,960 --> 00:08:20,690"],
  "event_t_ms": [289343, 293091, 299505, 301063, 302329],
  "screenshot_files": ["screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg"],
  "tags": ["copy", "cognitive-load", "wording"],
  "quotes": [
    {"clock": "00:04:38,960", "text": "There is a cognitive load.", "artifact": "audio.srt"},
    {"clock": "00:05:11,290", "text": "Structure. No commission. No bias. This cognitive load increases.", "artifact": "audio.srt"},
    {"clock": "00:05:54,840", "text": "No x, no y, no z.", "artifact": "audio.srt"},
    {"clock": "00:06:42,360", "text": "Compare all and apply in one shot. And banks will compete for you. The load has increased.", "artifact": "audio.srt"},
    {"clock": "00:06:51,600", "text": "Compare and apply. Let banks compete. The load has decreased.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
