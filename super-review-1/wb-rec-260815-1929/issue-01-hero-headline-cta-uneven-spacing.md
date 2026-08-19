# Hero headline and Explore banks button are not vertically centered in the top block

On the home page, the gap above “Get a fair view of home loans…” is not the same as the gap below the blue Explore banks button.
The headline and button should feel centered in that whole top block.
The product video under them was called fine.
This is the first thing they flagged in this review.

---
issue_id: "wb-rec-260815-1929/issue-01-hero-headline-cta-uneven-spacing"
issue_title: "Hero headline and Explore banks button are not vertically centered in the top block"
folder: "wb-rec-260815-1929"
sequence_index: 2
recording_id: "fb743d3e-45ef-48e2-a191-4c7147d743cb"
recording_started_at: "2026-08-15T13:59:20.405Z"
recording_ended_at: "2026-08-15T14:08:27.240Z"
duration_ms: 546835
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Home hero block: H1 “Get a fair view of home loans and apply to your chosen banks in one go.” plus the Explore banks button"
pinpoint: "Spacing above the hero headline and below the Explore banks button is uneven, so the headline and button do not feel centered in the top block."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png"]
speech_clock: ["00:00:17,160 --> 00:00:48,920"]
event_t_ms: [21017, 32808, 33597]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png"]
tags: ["layout","spacing","hero","copy-adjacent"]
---

## Exact issue

On `http://localhost:8765/` (title Shroffin), in the top hero block whose heading is **Get a fair view of home loans and apply to your chosen banks in one go.** and whose button is **Explore banks**, the space above the heading is not even with the space below the button. They said the heading and the button should feel centered in that whole block.

Raw ASR: “First thing I see in this top block, which has the Get a Fair View of Home Loans, this text, is that the amount of spacing above this text and below the CBE is not even. It should feel like the text and the button are in the center of this entire block.”

## How the files join (required)

- time: 17160–38500 ms (00:00:17.160–00:00:38.500)
- what they said: audio.srt cues 2–3; audio.json segments 2–3 same clock; they name the top block, the Fair View heading, then “the text and the button”
- what they did: still on the hero (tiny scrolls at 32808 / 33597 ms, y=4 then y=0). Focus at 21017 ms on the product-demo Replay button is in the mockup under the hero, not the Explore banks button
- what was on screen: screenshots/0000.png–0004.png (t=193–34195) show the centered H1, the blue Explore banks button, then the product video/mockup
- what page/object: pages.json H1 + actions “Explore banks”; region “Get a fair view of home loans and apply to your chosen banks in one go.”
- therefore: the defect is uneven vertical padding in that hero stack (heading + Explore banks), not the video

ASR “CBE” (srt/tsv/text) vs “CBE” (audio.json word, p≈0.54): next sentence says “the text and the button,” and the only button in that block is Explore banks, so those tokens are the CTA / Explore banks button.

## Pinpoint

Home page hero: the H1 “Get a fair view of home loans and apply to your chosen banks in one go.” and the Explore banks button do not sit in the vertical center of the top block because the space above the H1 and the space below the button are not even.

## Related discussion (not the issue itself)

They then praised the product video: “Your video looks good, video view code, video padding, everything looks good.” That is not a complaint. They asked “This is our photo, isn't it?” about the landscape behind the mockup — a check, not a defect. Opening line is only that this is a co-founder review on 15 August 2026.

## Chronology in this recording

- 00:00:03–00:00:15 — frame: two co-founders reviewing the site for every issue
- 00:00:17–00:00:38 — this issue: uneven space above the Fair View heading and below the button; want heading+button centered in the block (screenshots 0000–0004)
- 00:00:40–00:00:48 — video/padding/photo called good; not this issue
- After 00:00:40 they scroll into the product mockup (screenshots 0005–0006) and then the next dark section

## Cross-recording continuation

standalone. Previous folder `wb-rec-260815-1928` is a ~5s silent homepage start with no speech. Next folder `wb-rec-260815-1950` is a ~6.5s silent clip already on the Zero section. This hero-spacing point starts and ends here.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `fb743d3e-45ef-48e2-a191-4c7147d743cb`, start_url `http://localhost:8765/`, 546835 ms, 66 screenshots; `timeline_alignment`
- `audio.json` — segments 2–3 (17.16–38.5s) plus word “CBE”; `supports_issue`
- `audio.lrc` — same cues; `supports_issue`
- `audio.srt` — cues 2–3 quoted above; `supports_issue`
- `audio.text` — same paragraph; `supports_issue`
- `audio.tsv` — 17160–38500 ms rows; `supports_issue`
- `audio.txt` — same as srt timestamps; `supports_issue`
- `audio.vtt` — same cues; `supports_issue`
- `audio.webm` — binary mic; `timeline_alignment`
- `audio_sentences.txt` — same sentences; `supports_issue`
- `console.json` — `[]`; `checked_no_extra_signal`
- `events.json` — focus Replay 21017; scrolls 32808/33597; `timeline_alignment`
- `index.html` — generic player shell with inlined session JSON; `checked_no_extra_signal`
- `pages.json` — H1, Explore banks action, hero region; `supports_issue`
- `replay.spec.ts` — goto `/`, early waits on `main > div > section:nth-of-type(1)`; `timeline_alignment`
- `tabs.json` — one tab `http://localhost:8765/`; `timeline_alignment`
- `viewer.css` — generic player chrome, 17895 bytes; `checked_no_extra_signal`
- `viewer.js` — generic player chrome, 32334 bytes; `checked_no_extra_signal`
- `screenshots/index.json` — 0000–0004 at t=193–34195, url `/`; `timeline_alignment`
- `screenshots/0000.png`–`0004.png` — hero H1 + Explore banks; `supports_issue`
- `screenshots/0005.png`–`0006.png` — scrolled product mockup after this talk; `timeline_alignment`
- `screenshots/0007.png`–`0065.png` — later sections; `checked_no_extra_signal`

## ASR notes

srt/tsv/text/vtt/lrc: “below the CBE”. audio.json word: “CBE” (p≈0.538). Used “Explore banks button / CTA” because the next clause is “the text and the button” and screenshots 0000–0004 show that button under the H1. Heading spoken as “Get a Fair View of Home Loans”; pages.json full H1 is “Get a fair view of home loans and apply to your chosen banks in one go.”

## JSON

```json
{
  "issue_id": "wb-rec-260815-1929/issue-01-hero-headline-cta-uneven-spacing",
  "issue_title": "Hero headline and Explore banks button are not vertically centered in the top block",
  "folder": "wb-rec-260815-1929",
  "sequence_index": 2,
  "recording_id": "fb743d3e-45ef-48e2-a191-4c7147d743cb",
  "recording_started_at": "2026-08-15T13:59:20.405Z",
  "recording_ended_at": "2026-08-15T14:08:27.240Z",
  "duration_ms": 546835,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Home hero block: H1 “Get a fair view of home loans and apply to your chosen banks in one go.” plus the Explore banks button",
  "pinpoint": "Spacing above the hero headline and below the Explore banks button is uneven, so the headline and button do not feel centered in the top block.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png"],
  "speech_clock": ["00:00:17,160 --> 00:00:48,920"],
  "event_t_ms": [21017, 32808, 33597],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png"],
  "tags": ["layout","spacing","hero","copy-adjacent"],
  "quotes": [
    {"clock": "00:00:17,160 --> 00:00:31,500", "text": "First thing I see in this top block, which has the Get a Fair View of Home Loans, this text, is that the amount of spacing above this text and below the CBE is not even.", "artifact": "audio.srt"},
    {"clock": "00:00:31,500 --> 00:00:38,500", "text": "It should feel like the text and the button are in the center of this entire block.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
