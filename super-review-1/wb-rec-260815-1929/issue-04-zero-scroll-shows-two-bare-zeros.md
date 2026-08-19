# Scrolling into Zero commissions / Zero bias first shows two bare zeros

When they scrolled into this block they first saw two large “Zero”s and nothing else.
They had no idea what was coming and, for a moment, thought the site was broken.
They want the words to arrive with the zeros — either “Zero commissions” then “Zero bias,” or one zero, then “commissions,” then “bias.”
They clicked the first Zero while saying this.

---
issue_id: "wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros"
issue_title: "Scrolling into Zero commissions / Zero bias first shows two bare zeros"
folder: "wb-rec-260815-1929"
sequence_index: 2
recording_id: "fb743d3e-45ef-48e2-a191-4c7147d743cb"
recording_started_at: "2026-08-15T13:59:20.405Z"
recording_ended_at: "2026-08-15T14:08:27.240Z"
duration_ms: 546835
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Homepage Zero block (h2#home-zero-title): two large “Zero” words that later become “Zero commissions. Zero bias.”"
pinpoint: "On scroll-in, only two zeros are visible, with no “commissions” or “bias,” so the block looks broken until the rest of the heading appears."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-05-zero-commissions-wording-and-perspective.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png"]
speech_clock: ["00:05:09,180 --> 00:05:43,300"]
event_t_ms: [305800, 308498, 309200, 331562]
screenshot_files: ["screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png"]
tags: ["motion","scroll","reveal","homepage"]
---

## Exact issue

Scrolling the homepage into the Zero block first shows two stacked **Zero** words and no other heading text. They said they had no context for what was coming and felt the website was broken. They want a staged reveal: either “Zero commissions” first then “Zero bias,” or the first zero, then “commissions,” then more “bias.” After more scroll, 0039+ shows the full **Zero commissions. Zero bias.** plus the fair-view line — that later state is what they wanted earlier.

## How the files join (required)

- time: 309180–343300 ms (speech); scroll-in 305800–309200 ms; click 331562 ms
- what they said: audio.srt cues 39–46, “When I scrolled down to this section, I saw two zeros on the screen… I felt that the website was broken.”
- what they did: fast scroll y 3766→4371→4411; click `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(1)` (first Zero)
- what was on screen: 0038.png (t=306196) is only two zeros; 0039.png (t=314196) has the full heading — matches “when I scrolled I saw two zeros”
- what page/object: pages.json heading “Zero commissions. Zero bias.”; locator home-zero-title
- therefore: the issue is the mid-scroll state of that heading, not the finished copy (finished copy is issue-05)

## Pinpoint

Homepage `h2#home-zero-title`: the scroll-driven reveal leaves two bare “Zero”s on screen before “commissions” and “bias” appear, which they read as a broken page.

## Related discussion (not the issue itself)

They then read the finished lines (“Zero commissions, zero bias. So you get a fair view of every lender listed on our platform.”). Whether “commissions” is the right word is issue-05, not this reveal. Next folder `wb-rec-260815-1950` opens still on two zeros with no speech — same visual, no new talk.

## Chronology in this recording

- 00:05:05–00:05:09 — scroll from Transparent into Zero
- 00:05:09 — “I saw two zeros”
- 00:05:14 — no context; felt broken
- 00:05:21–00:05:43 — proposed staged reveals
- 00:05:31 — click the first Zero
- 00:05:44+ — they talk about the meaning of the finished heading (issue-05)

## Cross-recording continuation

Discussion of the reveal finishes here. `wb-rec-260815-1950` starts on the same two-zero frame but has empty audio, so this issue is standalone for speech.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — homepage session; `timeline_alignment`
- `audio.json` — segments 39–46; `supports_issue`
- `audio.lrc` — same; `supports_issue`
- `audio.srt` — cues 39–46; `supports_issue`
- `audio.text` — same; `supports_issue`
- `audio.tsv` — 309180–343300; `supports_issue`
- `audio.txt` — same; `supports_issue`
- `audio.vtt` — same; `supports_issue`
- `audio.webm` — binary; `timeline_alignment`
- `audio_sentences.txt` — same; `supports_issue`
- `console.json` — empty; `checked_no_extra_signal`
- `events.json` — scrolls 305800–309200; click 331562 on first Zero span; `supports_issue`
- `index.html` — player; `checked_no_extra_signal`
- `pages.json` — Zero commissions / Zero bias heading; `supports_issue`
- `replay.spec.ts` — waits/click on `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(1)`; `supports_issue`
- `tabs.json` — `/`; `timeline_alignment`
- `viewer.css` / `viewer.js` — generic player; `checked_no_extra_signal`
- `screenshots/index.json` — 0038 at 306196 (interaction/periodic), 0039 at 314196; `supports_issue`
- `screenshots/0000.png`–`0037.png` — earlier sections; `checked_no_extra_signal`
- `screenshots/0038.png` — two bare zeros; `supports_issue`
- `screenshots/0039.png`–`0041.png` — full heading after more scroll; `supports_issue`
- `screenshots/0042.png`–`0065.png` — later full Zero copy while they discuss wording; `checked_no_extra_signal`

## ASR notes

SRT/TSV/JSON agree on “two zeros” and “website was broken.” No conflict that changes the object.

## JSON

```json
{
  "issue_id": "wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros",
  "issue_title": "Scrolling into Zero commissions / Zero bias first shows two bare zeros",
  "folder": "wb-rec-260815-1929",
  "sequence_index": 2,
  "recording_id": "fb743d3e-45ef-48e2-a191-4c7147d743cb",
  "recording_started_at": "2026-08-15T13:59:20.405Z",
  "recording_ended_at": "2026-08-15T14:08:27.240Z",
  "duration_ms": 546835,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Homepage Zero block (h2#home-zero-title): two large “Zero” words that later become “Zero commissions. Zero bias.”",
  "pinpoint": "On scroll-in, only two zeros are visible, with no “commissions” or “bias,” so the block looks broken until the rest of the heading appears.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-05-zero-commissions-wording-and-perspective.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png"],
  "speech_clock": ["00:05:09,180 --> 00:05:43,300"],
  "event_t_ms": [305800, 308498, 309200, 331562],
  "screenshot_files": ["screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png"],
  "tags": ["motion","scroll","reveal","homepage"],
  "quotes": [
    {"clock": "00:05:09,180 --> 00:05:14,740", "text": "When I scrolled down to this section, I saw two zeros on the screen.", "artifact": "audio.srt"},
    {"clock": "00:05:14,740 --> 00:05:20,800", "text": "And I had no context of what is going to come up. In fact, I felt that the website was broken.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 331562, "name": "first Zero in home-zero-title", "css": "h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
