# Both “Zero” lines show at once while scrolling, so the page looks broken

When you scroll through the Zero commissions / Zero bias block, both giant “Zero” words sit on screen together.
The extra words (commissions, bias) are missing in that moment, so it can look like the site is broken.
They wanted one Zero at a time: first Zero commissions, then Zero bias, then the next sentence.
If there is nothing left to show, they said the page could just let people explore.

---
issue_id: "wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken"
issue_title: "Both “Zero” lines show at once while scrolling, so the page looks broken"
folder: "wb-rec-260815-1951"
sequence_index: 4
recording_id: "ce85813c-385e-4259-a46a-98178da92985"
recording_started_at: "2026-08-15T14:21:00.929Z"
recording_ended_at: "2026-08-15T14:29:32.515Z"
duration_ms: 511586
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "h2#home-zero-title “Zero commissions. / Zero bias.” full-page story block"
pinpoint: "On the homepage Zero commissions / Zero bias block, scrolling shows both large “Zero” words at once without commissions/bias, which they said makes it unclear whether the website is broken; they wanted sequential reveal (first Zero commissions, then Zero bias, then the next sentence)."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "from_previous"
continued_from_folder: "wb-rec-260815-1950"
continued_into_folder: null
related_issue_files: ["issue-02-zero-commissions-bias-mixed-bank-customer-context.md","issue-03-zero-supporting-sentence-too-small-and-unclear.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:14,600 --> 00:00:39,640"]
event_t_ms: [206,15661,17661,23660,28527,34060,62882]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0008.png"]
tags: ["layout","scroll","animation","homepage","zero-commissions"]
---

## Exact issue

On `http://localhost:8765/` (title Shroffin), the full-page block `h2#home-zero-title` is meant to read **Zero commissions.** then **Zero bias.** While they scrolled that block (y ≈ 3984–4565), both giant **Zero** words were on screen at once, with commissions/bias not yet readable. They said that makes it look as if the website is broken.

They wanted a one-at-a-time reveal: first Zero commissions, then Zero bias, then the next sentence. If there is nothing left to show, they said people could explore.

## How the files join (required)

- time (ms and clock): **14600–39640 ms** (`00:00:14,600`–`00:00:39,640`)
- what they said (quote + audio file): audio.srt: “So, in this section, I found the problem that when you scroll up, you can see both the zeroes. And you don't know if the website is broken or not.” Then: “So, if you have seen one zero, or if you have seen the first zero, zero commissions, and then the next zero and zero bias, and then the next sentence, that would be better. Or if there is nothing to show, you can explore.”
- what they did: idle talking; scrolls at **15661 / 17661 / 23660 / 28527 / 34060 ms** on `http://localhost:8765/` (y 4080 → 4044 → 3984 → 4248 → 4565). Later click at **62882 ms** on `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)` (the Zero commissions heading) while still on this block.
- what was on screen: `screenshots/0000.png`–`0003.png` (t=207–24208) show two stacked white **Zero** words on a dark field, no commissions/bias. `screenshots/0004.png` (t=32208) is the settled block: Zero commissions. / Zero bias. plus the small supporting line.
- what page/object: homepage region `Zero commissions. / Zero bias.` (`pages.json` heading; events landmark `h2#home-zero-title`)
- therefore the actual issue is: mid-scroll, both Zero words are visible at once, so the block looks broken instead of revealing one claim at a time.

## Pinpoint

On the homepage Zero commissions / Zero bias story block (`h2#home-zero-title`), scrolling shows both large “Zero” words together without the words commissions and bias. They said you then cannot tell if the website is broken. They wanted first Zero commissions, then Zero bias, then the next sentence — or, if there is nothing to show, a path to explore.

## Related discussion (not the issue itself)

- Opening line “Just give me 9 minutes.” / “9 minutes?” is session setup, not a site defect.
- After this, they stay on the same block and attack the words **commissions** and **bias** (issue 02) and the small supporting sentence (issue 03).
- “Or if there is nothing to show, you can explore” is their fallback if a sequential reveal has no next beat.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:03–00:00:06 | 3320–6220 | Give me 9 minutes / 9 minutes? | idle on homepage | 0000.png two bare Zeros |
| 00:00:14–00:00:24 | 14600–24460 | In this section: when you scroll up you see both zeroes; don’t know if the website is broken | scroll y 4080→4044→3984 | 0002.png t=16208; 0003.png t=24208 still two Zeros |
| 00:00:25–00:00:39 | 25220–39640 | Better: first Zero commissions, then Zero bias, then next sentence; or explore if nothing to show | scroll y 4248 then 4565 | 0004.png t=32208 settled Zero commissions / Zero bias |
| 00:01:02 | 62882 | (moved into commissions-word talk) | click Zero commissions span | 0008.png interaction |

## Cross-recording continuation

**From wb-rec-260815-1950** (~4.6s gap after a ~7s silent clip). 1950 has empty transcripts (`audio.srt` / `audio.text` empty; `audio.json` `segments: []`). Its only screenshot `screenshots/0000.png` already shows the same two stacked **Zero** words. Last non-idle events are scrolls to y=3882 then y=4022 on `http://localhost:8765/`. This folder is the real session: they immediately name that mid-scroll dual-Zero state as the problem.

**Into wb-rec-260815-2000** (~55s gap). 2000 starts still on the re-engineered journey copy, then **Transparent, like never before.** It does not reopen the dual-Zero scroll glitch. This issue stays in this folder.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `ce85813c-385e-4259-a46a-98178da92985`, start_url `http://localhost:8765/`, duration_ms 511586, 91 events, 62 screenshots, viewport 1366×768, mic true. Used for: `timeline_alignment`
- `audio.json` — Whisper segments; language tag `mr` (wrong); cue ~14.6–39.6s “both the zeroes” / “website is broken”; word “zeroes.” probability ~0.56. Used for: `supports_issue`, `timeline_alignment`
- `audio.lrc` — same timed lines as srt. Used for: `timeline_alignment`
- `audio.srt` — primary speech clock; cues 3–15 are this issue. Used for: `supports_issue`, `timeline_alignment`
- `audio.text` — plain dump including “you can see both the zeroes.” Used for: `supports_issue`
- `audio.tsv` — ms 14600–39640 for this stretch; opening tsv line “Just give me 9 minutes.” vs srt “Just give me 9 minutes.” Used for: `timeline_alignment`
- `audio.txt` — timed dump same family as srt. Used for: `timeline_alignment`
- `audio.vtt` — same family as srt. Used for: `timeline_alignment`
- `audio.webm` — binary mic 8234087 bytes; not listened. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — one-block transcript of the dual-Zero complaint. Used for: `supports_issue`
- `console.json` — `[]`, no console errors. Used for: `checked_no_extra_signal`
- `events.json` — landmark homepage; scrolls 15661–34060 into the Zero block; later click `h2#home-zero-title`. Used for: `supports_issue`, `timeline_alignment`
- `index.html` — player shell with inlined session id, URL, event list, 62 screenshot rows; no extra discussion. Used for: `checked_no_extra_signal`, `timeline_alignment`
- `pages.json` — title Shroffin; heading `Zero commissions. / Zero bias.` Used for: `supports_issue`
- `replay.spec.ts` — goto homepage; wait/click `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)`. Used for: `timeline_alignment`
- `screenshots/0000.png` — t=207 start; two bare Zeros. Used for: `supports_issue`
- `screenshots/0001.png` — t=8207; still two Zeros. Used for: `supports_issue`
- `screenshots/0002.png` — t=16208 during first “both zeroes” speech. Used for: `supports_issue`
- `screenshots/0003.png` — t=24208; still two Zeros as they say “broken or not.” Used for: `supports_issue`
- `screenshots/0004.png` — t=32208; settled Zero commissions. / Zero bias. + supporting line. Used for: `supports_issue`
- `screenshots/0005.png`–`screenshots/0007.png` — same settled Zero block during idle. Used for: `timeline_alignment`
- `screenshots/0008.png` — t=63285 click on Zero commissions heading. Used for: `supports_issue`
- `screenshots/0009.png`–`screenshots/0025.png` — same Zero block while they talk copy (issues 02–03). Used for: `timeline_alignment`
- `screenshots/0026.png`–`screenshots/0042.png` — later Best of all block. Used for: `checked_no_extra_signal`
- `screenshots/0043.png`–`screenshots/0061.png` — Built around you then re-engineered journey. Used for: `checked_no_extra_signal`
- `screenshots/index.json` — 62 shots; 0000–0003 small (~65k) dual-Zero frames; 0004+ larger settled frames. Used for: `timeline_alignment`
- `tabs.json` — one tab `http://localhost:8765/` entire session. Used for: `timeline_alignment`
- `viewer.css` — generic player, 17895 bytes. Used for: `checked_no_extra_signal`
- `viewer.js` — generic player, 32334 bytes. Used for: `checked_no_extra_signal`

## ASR notes

`audio.srt`, `audio.vtt`, `audio.lrc`, `audio.txt`, and `audio_sentences.txt` agree on “both the zeroes” / “website is broken.” `audio.tsv` first line is “Just give me 9 minutes.” vs srt “Just give me 9 minutes.” (same meaning). `audio.json` `language`: `mr` is wrong; speech is English/Hindi about this page. Screen + scroll win: two Zero words are literally on `0000.png`–`0003.png`.

## JSON
```json
{
  "issue_id": "wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken",
  "issue_title": "Both “Zero” lines show at once while scrolling, so the page looks broken",
  "folder": "wb-rec-260815-1951",
  "sequence_index": 4,
  "recording_id": "ce85813c-385e-4259-a46a-98178da92985",
  "recording_started_at": "2026-08-15T14:21:00.929Z",
  "recording_ended_at": "2026-08-15T14:29:32.515Z",
  "duration_ms": 511586,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "h2#home-zero-title “Zero commissions. / Zero bias.” full-page story block",
  "pinpoint": "On the homepage Zero commissions / Zero bias block, scrolling shows both large “Zero” words at once without commissions/bias, which they said makes it unclear whether the website is broken; they wanted sequential reveal (first Zero commissions, then Zero bias, then the next sentence).",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "from_previous",
  "continued_from_folder": "wb-rec-260815-1950",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-zero-commissions-bias-mixed-bank-customer-context.md","issue-03-zero-supporting-sentence-too-small-and-unclear.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:14,600 --> 00:00:39,640"],
  "event_t_ms": [206,15661,17661,23660,28527,34060,62882],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0008.png"],
  "tags": ["layout","scroll","animation","homepage","zero-commissions"],
  "quotes": [
    {"clock": "00:00:14,600","text": "So, in this section, I found the problem that when you scroll up, you can see both the zeroes.","artifact": "audio.srt"},
    {"clock": "00:00:21,960","text": "And you don't know if the website is broken or not.","artifact": "audio.srt"},
    {"clock": "00:00:28,940","text": "zero commissions, and then the next zero and zero bias, and then the next sentence, that would be better.","artifact": "audio.srt"},
    {"clock": "00:00:34,900","text": "Or if there is nothing to show, you can explore.","artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 62882, "name": "Zero commissions heading span", "css": "h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)"}
  ],
  "related_discussion_present": true
}
```
