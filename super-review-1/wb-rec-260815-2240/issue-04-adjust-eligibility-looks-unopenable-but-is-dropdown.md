# Adjust eligibility looks like it will not open, but it is a dropdown

They treated the Adjust eligibility control as misleading.
One person thought that button could not be opened.
The other showed it is a dropdown (the extra-fields disclosure).
They argued demo versus dropdown, then confirmed you can open a dropdown with that control.

---
issue_id: "wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown"
issue_title: "Adjust eligibility looks like it will not open, but it is a dropdown"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility summary on details#hlc-form-more"
pinpoint: "On Explore banks they said this button is misleading: they thought Adjust eligibility was not openable, then found it is a dropdown; clicks at 390395 and 402822 toggle details#hlc-form-more while screenshots 0047–0048 show the extra fields."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-03-adjust-eligibility-not-simple-english.md", "issue-05-see-options-label-unclear.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0042.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:06:35,100-00:07:05,980"]
event_t_ms: [378089, 383489, 386609, 390395, 402822]
screenshot_files: ["screenshots/0042.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg"]
tags: ["interaction"]
---

## Exact issue
After asking what “See options” is, they pointed at the control on the same row and said **this button is misleading**. They thought it was **not openable**, then saw **there is a dropdown**. They asked whether there is a dropdown, whether to do a demo or a dropdown, then one said there is no dropdown (“what kind of mistake is this?”) and the other said **there is a dropdown — you can open a dropdown with this button**. Clicks land on `details#hlc-form-more > summary` (Adjust eligibility), not on See options. Screenshot 0047 shows the extra fields open; 0042 shows them closed.

ASR: "Then this button is misleading." "I thought this button is not openable. But there is a drop-down there." "You can open a drop-down with this button."

## How the files join
- time: 395100–425980 ms (00:06:35–00:07:05)
- said: button misleading; thought not openable; dropdown yes/no argument; can open dropdown with this button
- did: See options clicks 378089–386609 first (they were looking at that row), then Adjust eligibility open 390395, toggle 402822
- seeing: 0042 collapsed; 0047–0048 expanded extra fields; 0049 after second toggle
- therefore: Adjust eligibility looks like a non-opening control but is a `<details>` dropdown — that is the misleading affordance they named

## Pinpoint
On Explore banks, **Adjust eligibility** (`details#hlc-form-more`) looks like it cannot be opened, but it is a dropdown that reveals extra fields; they called that button misleading.

## Related discussion (not the issue itself)
- Confusion with See options on the same row (“this is given in the See options line”). See-options *wording* is issue 05.
- “Should I do a demo or a dropdown?” — they decided it is a dropdown, not a demo.
- Wording “eligibility” is issue 03.

## Chronology in this recording
- 00:06:18–00:06:27 “See options / what is See options?” (leads into this control).
- 00:06:29–00:06:34 “Then what is this? You are assuming that your existing exists. It is written down.”
- 00:06:35–00:06:41 button misleading / not openable / dropdown.
- 00:06:45–00:07:05 demo vs dropdown; no dropdown vs yes dropdown.

## Cross-recording continuation
Standalone. Next folder still uses the same control but talks about showing columns, not this affordance.

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — segs 120–134 misleading / dropdown / openable — `supports_issue`
- `audio.lrc` / `audio.srt` / `audio.text` / `audio.tsv` / `audio.txt` / `audio.vtt` / `audio_sentences.txt` — same quotes — `supports_issue`
- `audio.webm` — binary — `checked_no_extra_signal`
- `console.json` — empty — `checked_no_extra_signal`
- `events.json` — click `details#hlc-form-more` 390395 and 402822; preceding See options clicks show they were on that row — `supports_issue`
- `index.html` — player — `checked_no_extra_signal`
- `manifest.json` — session — `timeline_alignment`
- `pages.json` — extra fields exist but the summary is not listed as a named button; on-screen label is Adjust eligibility — `supports_issue`
- `replay.spec.ts` — `details#hlc-form-more > summary` clicks — `supports_issue`
- `screenshots/0000.jpg`–`screenshots/0046.jpg` — collapsed summary (looks like a text link, not an obvious opener) — `supports_issue`
- `screenshots/0047.jpg`–`screenshots/0048.jpg` — extra fields open after the click they called a dropdown — `supports_issue`
- `screenshots/0049.jpg`–`screenshots/0066.jpg` — later toggles; same control — `supports_issue`
- `screenshots/index.json` — interaction shots 0047, 0049 — `timeline_alignment`
- `tabs.json` — Explore banks — `timeline_alignment`
- `viewer.css` / `viewer.js` — generic — `checked_no_extra_signal`

## ASR notes
“C options” in this stretch is See options (button `#hlc-see-options`). The misleading *openable dropdown* is joined to `#hlc-form-more` by the click at 390395, not to See options (See options is `type=submit`). “existing exists / it is written down” is low-confidence ASR; not used as the pinpoint.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown",
  "issue_title": "Adjust eligibility looks like it will not open, but it is a dropdown",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Adjust eligibility summary on details#hlc-form-more",
  "pinpoint": "On Explore banks they said this button is misleading: they thought Adjust eligibility was not openable, then found it is a dropdown that opens extra fields.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-03-adjust-eligibility-not-simple-english.md", "issue-05-see-options-label-unclear.md"],
  "speech_clock": ["00:06:35,100-00:07:05,980"],
  "event_t_ms": [378089, 383489, 386609, 390395, 402822],
  "screenshot_files": ["screenshots/0042.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg"],
  "tags": ["interaction"],
  "quotes": [
    {"clock": "00:06:35,100", "text": "Then this button is misleading.", "artifact": "audio.srt"},
    {"clock": "00:06:39,060", "text": "I thought this button is not openable.", "artifact": "audio.srt"},
    {"clock": "00:06:40,760", "text": "But there is a drop-down there.", "artifact": "audio.srt"},
    {"clock": "00:07:04,360", "text": "You can open a drop-down with this button.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 390395, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 402822, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
