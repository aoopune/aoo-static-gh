# “See options” and “Explore banks” are the wrong names

The button on the loan card is labeled See options. The page is titled Explore banks.
They asked how “See options” was derived, then said the button should be called Compare banks.
They said Explore banks does not work: explore means dump everything in, and they mean compare.

---
issue_id: "wb-rec-260815-2304/issue-03-see-options-explore-banks-naming"
issue_title: "“See options” and “Explore banks” are the wrong names"
folder: "wb-rec-260815-2304"
sequence_index: 21
recording_id: "6033ef99-94cd-427e-b722-e831e6342b86"
recording_started_at: "2026-08-15T17:34:55.529Z"
recording_ended_at: "2026-08-15T17:43:48.848Z"
duration_ms: 533319
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "See options button on the Loan inputs card; page title / H1 Explore banks."
pinpoint: "On Explore banks, they said the See options button should be named Compare banks, and that the page name Explore banks does not work because explore means dump everything in, while they mean compare."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-extra-eligibility-should-stay-visible-prefilled.md", "issue-02-loan-form-fields-lack-importance-indication.md"]
source_files_used: ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:02:46,480 --> 00:03:31,800"]
event_t_ms: [1558, 3176]
screenshot_files: ["screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0046.jpg", "screenshots/0056.jpg"]
tags: ["copy", "naming", "navigation", "button"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html`, the Loan inputs card has a blue-outline button **See options**. The H1 and document title are **Explore banks.**

They pointed at the button under the extra fields and asked how the name was derived (raw ASR: “C-Options” / “See Options”). They walked a fake derivation (“your items, your options, C-Options”), then said Check / Compare banks, and “the name of the button is compare banks.” They then asked what Explore banks is, said explore means “just put everything in,” that they mean compare, and twice: “Explore doesn't work.”

Screen + clicks beat ASR: the visible label is **See options**, not “C-Options.” They never clicked the button in this recording; it sits on every shot of the card.

Raw ASR (`audio.srt`): “And below this, there is a button. The name of the button is C-Options.” / “How did that get derived?” / “Your items, your options, C-Options.” / “Check. Compare banks.” / “The name of the button is compare banks.” / “What is explore banks?” / “Explore means just put everything in.” / “That means compare.” / “Explore doesn't work. Explore doesn't work.”

## How the files join

- time (ms and clock): **166480–211800 ms** (`00:02:46,480`–`00:03:31,800`)
- what they said: button is C-Options / See Options; should be Compare banks; Explore banks does not work
- what they did: idle on the Loan inputs card (no click on See options). Last click before this talk: FOIR at **129387 ms**. Next click: Co-applicant Yes at **225261 ms**.
- what was on screen: `0023.jpg` (t=164201) through `0026.jpg` (t=190202) show **See options** on the right of Adjust eligibility; H1 **Explore banks.** is in the page chrome (`pages.json` / later `0034.jpg` when scrolled to the title)
- what page/object: See options button; Explore banks title
- therefore: both names are wrong for a compare action

## Pinpoint

On Explore banks, the submit control is labeled **See options** and the page is named **Explore banks.** They said the button should be **Compare banks**, and that **Explore** does not work because explore means dump everything in, while the job is compare. They cared because the name should match what the customer is actually doing.

## Related discussion (not the issue itself)

- Joke derivation “your items, your options, C-Options.”
- “Check” as a stepping-stone word before “Compare banks.”
- “Compare banks is an option” — they treated compare as the real action, not a menu item named options.
- Extra-fields / pre-fill talk immediately before this (issue-01). Co-applicant Yes immediately after (related to issue-01).

## Chronology in this recording

- **00:02:41** — end of “never write mandatory” (issue-01).
- **00:02:46–00:03:31** — button name, then page name. Idle; See options visible (`0023.jpg`–`0026.jpg`).
- **00:03:42** — talk moves to Co-applicant Yes (issue-01 related).

## Cross-recording continuation

Standalone in this folder. Previous recording (`wb-rec-260815-2302`) ended on trust / extras / Co-applicant, not naming. Next recording (`wb-rec-260815-2313`) starts on field importance (issue-02), not this name.

## Evidence by file

- `audio.json` — language mr (wrong). Segments covering this issue's quotes with word times. Used for: `supports_issue`
- `audio.lrc` — lyric timestamps aligned to srt for this issue's speech. Used for: `timeline_alignment`
- `audio.srt` — primary speech clock for this issue's quoted cues. Used for: `supports_issue, timeline_alignment`
- `audio.text` — plain transcript including this issue's lines. Used for: `supports_issue`
- `audio.tsv` — millisecond start/end for this issue's cues. Used for: `timeline_alignment`
- `audio.txt` — timed dump; ASR variants for this issue's words. Used for: `timeline_alignment`
- `audio.vtt` — WebVTT same family as srt for this issue. Used for: `timeline_alignment`
- `audio.webm` — binary mic; not listened; text artifacts used. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — sentence wrap including this issue's talk. Used for: `supports_issue`
- `console.json` — empty []; no console errors. Used for: `checked_no_extra_signal`
- `events.json` — clicks/focus/scroll with t_ms used in this issue's join. Used for: `supports_issue, timeline_alignment`
- `index.html` — player shell; inlined this session id and explore-banks URL; no extra discussion. Used for: `checked_no_extra_signal`
- `manifest.json` — id 6033ef99-94cd-427e-b722-e831e6342b86; start_url explore-banks.html; 533319 ms; 73 shots; 129 events. Used for: `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; Loan inputs field names; H1 Explore banks. Used for: `supports_issue`
- `replay.spec.ts` — Playwright replay of the same click path. Used for: `timeline_alignment`
- `screenshots/0000.jpg` — t=199 start; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0001.jpg` — t=8199 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0002.jpg` — t=16200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0003.jpg` — t=26199 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0004.jpg` — t=34199 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0005.jpg` — t=37752 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0006.jpg` — t=46199 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0007.jpg` — t=54200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0008.jpg` — t=62200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0009.jpg` — t=70200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0010.jpg` — t=73000 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0011.jpg` — t=73901 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0012.jpg` — t=74566 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0013.jpg` — t=84200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0014.jpg` — t=92200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0015.jpg` — t=100201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0016.jpg` — t=108201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0017.jpg` — t=116201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0018.jpg` — t=126201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0019.jpg` — t=129791 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0020.jpg` — t=138200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0021.jpg` — t=146204 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0022.jpg` — t=156201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0023.jpg` — t=164201 idle; See options visible on card during naming talk start. Used for: `supports_issue`
- `screenshots/0024.jpg` — t=174200 See options still visible; no click on it. Used for: `supports_issue`
- `screenshots/0025.jpg` — t=182201 See options visible while they say C-Options. Used for: `supports_issue`
- `screenshots/0026.jpg` — t=190202 See options visible while they say Compare banks. Used for: `supports_issue`
- `screenshots/0027.jpg` — t=200200 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0028.jpg` — t=208201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0029.jpg` — t=216202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0030.jpg` — t=225667 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0031.jpg` — t=234202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0032.jpg` — t=244201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0033.jpg` — t=247951 collapsed card still shows See options. Used for: `supports_issue`
- `screenshots/0034.jpg` — t=256201 Explore banks title area + See options after collapse. Used for: `supports_issue`
- `screenshots/0035.jpg` — t=264201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0036.jpg` — t=272201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0037.jpg` — t=280202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0038.jpg` — t=288202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0039.jpg` — t=297535 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0040.jpg` — t=299544 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0041.jpg` — t=308201 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0042.jpg` — t=316202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0043.jpg` — t=326202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0044.jpg` — t=336202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0045.jpg` — t=337771 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0046.jpg` — t=346202 See options on collapsed card later in session. Used for: `supports_issue`
- `screenshots/0047.jpg` — t=354203 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0048.jpg` — t=364202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0049.jpg` — t=372202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0050.jpg` — t=380202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0051.jpg` — t=388202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0052.jpg` — t=396202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0053.jpg` — t=404202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0054.jpg` — t=412202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0055.jpg` — t=420203 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0056.jpg` — t=422337 See options still on card; Explore banks heading in chrome. Used for: `supports_issue`
- `screenshots/0057.jpg` — t=427106 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0058.jpg` — t=432073 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0059.jpg` — t=440203 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0060.jpg` — t=448203 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0061.jpg` — t=456204 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0062.jpg` — t=466202 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0063.jpg` — t=474203 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0064.jpg` — t=482204 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0065.jpg` — t=486237 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0066.jpg` — t=496204 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0067.jpg` — t=504205 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0068.jpg` — t=505374 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0069.jpg` — t=506015 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0070.jpg` — t=511891 interaction; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0071.jpg` — t=520204 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/0072.jpg` — t=530204 periodic; See options button and/or Explore banks title visible on this Explore banks frame. Used for: `supports_issue`
- `screenshots/index.json` — 73 shots with t and reason; used as shot clock. Used for: `timeline_alignment`
- `tabs.json` — one tab on explore-banks.html whole session. Used for: `timeline_alignment`
- `viewer.css` — generic replay CSS; no session talk. Used for: `checked_no_extra_signal`
- `viewer.js` — generic replay JS; no session talk. Used for: `checked_no_extra_signal`

## ASR notes

ASR “C-Options” / “See Options” / “C Options”: screen shows **See options**. Used the screenshot label. “Explore banks” matches title and URL. `audio.json` language `mr` is wrong.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2304/issue-03-see-options-explore-banks-naming",
  "issue_title": "“See options” and “Explore banks” are the wrong names",
  "folder": "wb-rec-260815-2304",
  "sequence_index": 21,
  "recording_id": "6033ef99-94cd-427e-b722-e831e6342b86",
  "recording_started_at": "2026-08-15T17:34:55.529Z",
  "recording_ended_at": "2026-08-15T17:43:48.848Z",
  "duration_ms": 533319,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "See options button; Explore banks title",
  "pinpoint": "On Explore banks, they said the See options button should be named Compare banks, and that Explore banks does not work because explore means dump everything in, while they mean compare.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-extra-eligibility-should-stay-visible-prefilled.md", "issue-02-loan-form-fields-lack-importance-indication.md"],
  "speech_clock": ["00:02:46,480 --> 00:03:31,800"],
  "event_t_ms": [1558, 3176, 129387],
  "screenshot_files": ["screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0046.jpg", "screenshots/0056.jpg"],
  "tags": ["copy", "naming", "navigation", "button"],
  "quotes": [
    {"clock": "00:02:48,900", "text": "The name of the button is C-Options.", "artifact": "audio.srt"},
    {"clock": "00:03:13,320", "text": "The name of the button is compare banks.", "artifact": "audio.srt"},
    {"clock": "00:03:16,180", "text": "What is explore banks?", "artifact": "audio.srt"},
    {"clock": "00:03:29,640", "text": "Explore doesn't work.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
