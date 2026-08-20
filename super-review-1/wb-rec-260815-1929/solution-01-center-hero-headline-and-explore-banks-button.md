# Center the hero headline and Explore banks button in the top block

The heading and the blue Explore banks button should sit in the middle of the top home-page block, with even space above the words and below the button.
This is for the first home-page block: “Get a fair view of home loans…” plus Explore banks.
They said the gap above the words and the gap below the button do not match, so the pair does not feel centered.
They treated this as the first fix of the review; they did not pick a pixel number.

---
solution_id: "wb-rec-260815-1929/solution-01-center-hero-headline-and-explore-banks-button"
solution_title: "Center the hero headline and Explore banks button in the top block"
folder: "wb-rec-260815-1929"
sequence_index: 2
recording_id: "fb743d3e-45ef-48e2-a191-4c7147d743cb"
recording_started_at: "2026-08-15T13:59:20.405Z"
recording_ended_at: "2026-08-15T14:08:27.240Z"
duration_ms: 546835
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Home hero H1 “Get a fair view of home loans and apply to your chosen banks in one go.” plus the Explore banks button"
for_topic: "Vertical centering of the home hero heading and Explore banks button in the top block"
pinpoint: "On the home page at about 00:00:17–00:00:38, they said the space above “Get a fair view of home loans…” and the space below the Explore banks button are not even, so the heading and button should feel centered in that whole top block."
kind: ["proposed_change"]
decidedness: "leaning"
basis: "They want the first block a visitor sees to feel balanced; they named uneven space above the text and below the button as the reason."
analog_source: "none"
linked_issue_files: ["issue-01-hero-headline-cta-uneven-spacing.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: []
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:17,160 --> 00:00:38,500"]
event_t_ms: [21017, 32808, 33597]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png"]
tags: ["layout","spacing","hero","homepage"]
---

## Exact solution (or idea that can also be a solution)

Make the home hero heading and the Explore banks button feel vertically centered in the top block by evening the space above the heading with the space below the button. Raw ASR: “It should feel like the text and the button are in the center of this entire block.” The uneven-gap complaint is the linked issue; this file is only that centering direction.

## What this is for

The first home-page block on `http://localhost:8765/` (title Shroffin): H1 “Get a fair view of home loans and apply to your chosen banks in one go.” and the Explore banks control. Linked issue: `issue-01-hero-headline-cta-uneven-spacing.md` (the uneven spacing). This file is the direction: center the pair in the block.

## Why they said it that way

This was “first thing I see in this top block.” They judged by feel (center of the entire block), not by a measurement. They then said the product video and its padding were fine, so the ask is the heading-and-button stack, not the mockup under it.

## How the files join (required)

- time: 17160–38500 ms (00:00:17.160–00:00:38.500)
- what they said: audio.srt cues 2–3; same in audio.tsv 17160–38500 and audio.json segments 2–3. Cue 2 names the top block and “Get a Fair View of Home Loans.” Cue 3 is the direction.
- what they did: still on the hero. Focus at 21017 ms on product-demo Replay (`getByRole("button", { name: "Replay" })`), not Explore banks. Tiny scrolls at 32808 / 33597 ms (y=4 then y=0).
- what was on screen: screenshots/0000.png–0004.png (t=193–34195) show the H1, blue Explore banks, then the product video mockup. Join: ASR “CBE” vs next sentence “the text and the button” plus the only button in that block = Explore banks (ASR likely meant: CTA / Explore banks).
- what page/object: pages.json H1 + action “Explore banks”; region “Get a fair view of home loans and apply to your chosen banks in one go.”
- therefore the actual finding is: even the space above the Fair View heading and below Explore banks so that pair feels centered in the top block.

Speech, clicks, screenshots, and page were lined up on one millisecond clock from session start. When ASR said “CBE,” the screenshot of Explore banks plus “the text and the button” was used, not the raw letters.

## Pinpoint

Home hero (H1 + Explore banks) on localhost:8765: they want that heading and button to feel in the vertical center of the top block because the gap above the text and the gap below the button do not match.

## Related discussion (not the solution itself)

They praised the product video: “Your video looks good, video view code, video padding, everything looks good.” (ASR “video view code” is low-confidence; the join is that video padding looks good.) They asked “This is our photo, isn't it?” about the landscape behind the mockup — a check, not a layout change. Opening line is only that this is a co-founder review on 15 August 2026 looking for issues. Later journey, Transparent, and Zero talk are other findings.

## Chronology in this recording

- 00:00:03–00:00:15 — frame: two co-founders reviewing the site
- 00:00:17–00:00:38 — this direction: even space; heading and button centered in the top block (0000–0004)
- 00:00:40–00:00:48 — video/padding/photo called good; not this finding
- After 00:00:40 they scroll into the mockup (0005–0006) and then the dark journey block

## Cross-recording continuation

standalone. Previous folder `wb-rec-260815-1928` is a ~5s silent homepage start (empty audio.tsv / audio.json text) on the same hero; no speech. Next folder `wb-rec-260815-1950` is silent on the Zero block after a ~12 minute gap. This centering talk starts and ends here.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — theme card for issue-01 quotes the centering sentence as related discussion on the defect; used as timestamp map only; `checked_no_extra_signal`
- `audio.json` — language `en`; segments 2–3 (17.16–38.5s); word “CBE” ~29.76s p≈0.538; `supports_solution`
- `audio.lrc` — same cues as srt for 00:17.160–00:38.500; `supports_solution`
- `audio.srt` — cues 2–3 quoted; primary speech clock; `supports_solution`
- `audio.text` — same paragraph without times; `supports_solution`
- `audio.tsv` — 17160–38500 ms rows; `supports_solution`
- `audio.txt` — timed dump matching srt; `supports_solution`
- `audio.vtt` — same cues; `supports_solution`
- `audio.webm` — binary mic 8801724 bytes; not played; `timeline_alignment`
- `audio_sentences.txt` — same sentences; `supports_solution`
- `console.json` — `[]`; no console errors; `checked_no_extra_signal`
- `events.json` — landmark t=192 homepage; focus Replay t=21017; scrolls 32808/33597; `timeline_alignment`
- `index.html` — viewer shell; comment inlines manifest id `fb743d3e-45ef-48e2-a191-4c7147d743cb`, 546835 ms, 66 shots; body sentinels `__MANIFEST_JSON__`; no extra talk; `checked_no_extra_signal`
- `manifest.json` — start_url `http://localhost:8765/`, 115 events, 66 screenshots, viewport 1366×768; `timeline_alignment`
- `pages.json` — title Shroffin; H1 Fair View; action Explore banks; `supports_solution`
- `replay.spec.ts` — goto homepage; Replay wait/clicks later; no Explore banks click in this stretch; `timeline_alignment`
- `screenshots/0000.png` — t=193 homepage hero H1 + Explore banks; `supports_solution`
- `screenshots/0001.png` — t=8194 homepage hero H1 + Explore banks; `supports_solution`
- `screenshots/0002.png` — t=16195 homepage hero H1 + Explore banks; `supports_solution`
- `screenshots/0003.png` — t=26194 homepage hero H1 + Explore banks; `supports_solution`
- `screenshots/0004.png` — t=34195 homepage hero H1 + Explore banks; `supports_solution`
- `screenshots/0005.png` — t=44195 scrolled product-demo mockup; `checked_no_extra_signal`
- `screenshots/0006.png` — t=52195 mockup plus journey heading peek; `checked_no_extra_signal`
- `screenshots/0007.png` — t=62195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0008.png` — t=63892 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0009.png` — t=72195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0010.png` — t=82195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0011.png` — t=90195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0012.png` — t=98196 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0013.png` — t=108197 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0014.png` — t=118196 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0015.png` — t=128194 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0016.png` — t=136196 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0017.png` — t=146194 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0018.png` — t=154194 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0019.png` — t=162194 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0020.png` — t=170194 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0021.png` — t=178195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0022.png` — t=188195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0023.png` — t=196195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0024.png` — t=204195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0025.png` — t=212195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0026.png` — t=220195 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0027.png` — t=228196 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0028.png` — t=238196 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0029.png` — t=243235 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0030.png` — t=246545 dark journey four-line block; `checked_no_extra_signal`
- `screenshots/0031.png` — t=252810 scrolled; mainly first journey line; `checked_no_extra_signal`
- `screenshots/0032.png` — t=255190 scrolled; mainly first journey line; `checked_no_extra_signal`
- `screenshots/0033.png` — t=264196 Transparent heading + supporting line; `checked_no_extra_signal`
- `screenshots/0034.png` — t=274196 Transparent heading + supporting line; `checked_no_extra_signal`
- `screenshots/0035.png` — t=282196 Transparent heading + supporting line; `checked_no_extra_signal`
- `screenshots/0036.png` — t=290196 Transparent heading + supporting line; `checked_no_extra_signal`
- `screenshots/0037.png` — t=298196 Transparent heading + supporting line; `checked_no_extra_signal`
- `screenshots/0038.png` — t=306196 two bare Zero words; `checked_no_extra_signal`
- `screenshots/0039.png` — t=314196 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0040.png` — t=322197 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0041.png` — t=331966 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0042.png` — t=340196 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0043.png` — t=348200 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0044.png` — t=358196 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0045.png` — t=366197 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0046.png` — t=376196 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0047.png` — t=384198 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0048.png` — t=394197 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0049.png` — t=402197 full Zero commissions / Zero bias + fair-view line; `checked_no_extra_signal`
- `screenshots/0050.png` — t=410197 Zero block slightly scrolled (more of fair-view line); `checked_no_extra_signal`
- `screenshots/0051.png` — t=420196 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0052.png` — t=428197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0053.png` — t=436197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0054.png` — t=444197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0055.png` — t=454197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0056.png` — t=462198 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0057.png` — t=472197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0058.png` — t=480198 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0059.png` — t=488198 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0060.png` — t=496198 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0061.png` — t=504198 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0062.png` — t=514197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0063.png` — t=522198 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0064.png` — t=532197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/0065.png` — t=540197 full Zero heading while they talk wording; `checked_no_extra_signal`
- `screenshots/index.json` — 66 entries; 0000–0004 t=193–34195 reason start/periodic url homepage; `timeline_alignment`
- `tabs.json` — one tab `http://localhost:8765/` for the whole session; `timeline_alignment`
- `viewer.css` — 17895 bytes generic player chrome; `checked_no_extra_signal`
- `viewer.js` — 32334 bytes generic player; `checked_no_extra_signal`

### Helper issue files

- `issue-01-hero-headline-cta-uneven-spacing.md` — `timestamp_map` + `cross_link`; defect is uneven spacing; this file is the center-in-the-block direction
- `issue-02-journey-section-copy-too-complex.md` — `not_used` for this finding
- `issue-03-transparent-supporting-lines-add-no-value.md` — `not_used`
- `issue-04-zero-scroll-shows-two-bare-zeros.md` — `not_used`
- `issue-05-zero-commissions-wording-and-perspective.md` — `not_used`

## ASR notes

Cue 2 “below the CBE” (srt/tsv/text/json word CBE p≈0.54). Cue 3 says “the text and the button.” Screenshots 0000–0004 show Explore banks as the only button under that H1. Used: Explore banks / the button, with ASR likely meant: CTA. “video view code” (p≈0.14 on “code”) is praise of the video, not this finding. Transcripts otherwise agree on the centering sentence.

## JSON
```json
{
  "solution_id": "wb-rec-260815-1929/solution-01-center-hero-headline-and-explore-banks-button",
  "solution_title": "Center the hero headline and Explore banks button in the top block",
  "folder": "wb-rec-260815-1929",
  "sequence_index": 2,
  "recording_id": "fb743d3e-45ef-48e2-a191-4c7147d743cb",
  "recording_started_at": "2026-08-15T13:59:20.405Z",
  "recording_ended_at": "2026-08-15T14:08:27.240Z",
  "duration_ms": 546835,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Home hero H1 “Get a fair view of home loans and apply to your chosen banks in one go.” plus the Explore banks button",
  "for_topic": "Vertical centering of the home hero heading and Explore banks button in the top block",
  "pinpoint": "On the home page at about 00:00:17–00:00:38, they said the space above “Get a fair view of home loans…” and the space below the Explore banks button are not even, so the heading and button should feel centered in that whole top block.",
  "kind": ["proposed_change"],
  "decidedness": "leaning",
  "basis": "They want the first block a visitor sees to feel balanced; they named uneven space above the text and below the button as the reason.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-hero-headline-cta-uneven-spacing.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": [],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:17,160 --> 00:00:38,500"],
  "event_t_ms": [21017, 32808, 33597],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png"],
  "tags": ["layout","spacing","hero","homepage"],
  "quotes": [
    {"clock": "00:00:17,160 --> 00:00:31,500", "text": "First thing I see in this top block, which has the Get a Fair View of Home Loans, this text, is that the amount of spacing above this text and below the CBE is not even.", "artifact": "audio.srt"},
    {"clock": "00:00:31,500 --> 00:00:38,500", "text": "It should feel like the text and the button are in the center of this entire block.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 21017, "name": "Replay", "css": "main > section:nth-of-type(2) > div > div:nth-of-type(2) > button"}],
  "related_discussion_present": true
}
```
