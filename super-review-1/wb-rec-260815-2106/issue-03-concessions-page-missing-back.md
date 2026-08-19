# Concessions page has no Back after Learn more

Learn more from Explore banks opens the concessions Guide page.
That page’s header is Guide plus Explore banks — there is no Back.
They said “No back. Where is the back?” and “This is mobile.”
They had to leave by using the Guide chrome, then return to Explore banks.

---
issue_id: "wb-rec-260815-2106/issue-03-concessions-page-missing-back"
issue_title: "Concessions page has no Back after Learn more"
folder: "wb-rec-260815-2106"
sequence_index: 8
recording_id: "2c589daf-48f1-4304-8831-5a9870fea870"
recording_started_at: "2026-08-15T15:36:22.615Z"
recording_ended_at: "2026-08-15T15:45:24.586Z"
duration_ms: 541971
page_url: "http://localhost:8765/pages/concessions.html#bank-rates"
page_title: "Home loan concessions – Shroffin"
on_screen_object: "Guide header on concessions.html (Guide wordmark, chapter nav, Explore banks CTA) — no Back control"
pinpoint: "After Learn more from Explore banks, the concessions Guide page has no Back; they asked where the back is and said this is mobile."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-02-concessions-learn-more-takes-you-away.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.png", "screenshots/0081.png", "screenshots/0082.png", "screenshots/0083.png", "screenshots/0084.png", "screenshots/0085.png", "screenshots/0086.png", "screenshots/0087.png", "screenshots/0088.png", "screenshots/0089.png", "screenshots/0090.png", "screenshots/0091.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:05:25,830 --> 00:05:37,960"]
event_t_ms: [282406, 282427, 326974, 338371, 341696]
screenshot_files: ["screenshots/0060.png", "screenshots/0067.png", "screenshots/0068.png"]
tags: ["navigation", "back", "concessions", "mobile", "guide"]
---

## Exact issue

After click **Learn more** (282406 ms) and navigation to `http://localhost:8765/pages/concessions.html#bank-rates` (282427 ms), the page shows a **Guide** header, chapter links (Overview, Documents, Tax benefits, Concessions, Insurance, If something goes wrong), and an **Explore banks** button. Screenshots `0060.png`–`0068.png` show **no Back** control.

At `00:05:30,920` they said **“No back.”** **“Where is the back?”** **“This is mobile.”** They then clicked `#guide-swap` (326974) and `div#guide-swap > header` (338371) and navigated back to explore-banks.html at 341696 ms (`replay.spec.ts` `page.goto`).

This is a different object from issue-02 (off-page Learn more / missing per-option i): here the destination itself has no way back.

## How the files join (required)

- time (ms and clock): **325830–337960 ms** (`00:05:25,830`–`00:05:37,960`)
- what they said: audio.srt “Is this blue?” then “No back. Where is the back? This is mobile.”
- what they did: already on concessions#bank-rates since 282427; click guide-swap 326974; click guide-swap header 338371; navigation to explore-banks 341696
- what was on screen: `0060.png` Guide + Explore banks, no Back; `0068.png` scrolled hero still no Back
- what page/object: Home loan concessions – Shroffin, Guide header
- therefore: after Learn more, the concessions page is missing Back, which they called out as a mobile problem

## Pinpoint

On the concessions Guide page reached from Explore banks **Learn more**, there is no Back. They asked where it is and said this is mobile. They cared because they had left the bank comparison to read what concessions are and could not return with an on-page back control.

## Related discussion (not the issue itself)

- “Is this blue?” immediately before “No back.” Join: likely the Explore banks / Guide chrome color, not a separate color defect they named.
- “Nice, bro.” while reading concession cards — content praise, not navigation.
- They did get back via Guide header / goto explore-banks; that path is what they used, not a Back button.
- Off-page Learn more as the reason they were here is issue-02.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:04:42 | 282406–282452 | (Learn more) | click Learn more; nav concessions#bank-rates | 0060.png |
| 00:05:12 | 312378 | (reading cards) | click bank-rates li 3 | 0064.png |
| 00:05:25–00:05:37 | 325830–337960 | Is this blue? No back. Where is the back? This is mobile. | guide-swap 326974; header 338371 | 0067–0068 |
| 00:05:41 | 341696 | (leave) | navigation explore-banks.html | 0069.jpg |

## Cross-recording continuation

**From wb-rec-260815-2018:** not this page. Standalone.

**Into wb-rec-260815-2116:** next session is already back on Explore banks monthly-income copy, not the concessions header. Standalone.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `2c589daf-48f1-4304-8831-5a9870fea870`, start_url `http://localhost:8765/`, urls include explore-banks.html and concessions.html#bank-rates, duration_ms 541971, events_count 202, screenshots_count 92, console_count 0, tabs_count 1, pages_count 3, mic true, viewport 1366×768 dsf 2. Used for: `timeline_alignment`
- `audio.json` — 167 segments, language tag `mr` (wrong; speech is Hindi/English about Explore banks filters), word-level times used to reconcile facility/overdraft, greenhouse/green home, Apple/Amazon. Used for: `supports_issue`, `timeline_alignment`
- `audio.lrc` — lyric timestamps matching srt cues. Used for: `timeline_alignment`
- `audio.srt` — primary speech clock for this issue’s quotes. Used for: `supports_issue`, `timeline_alignment`
- `audio.text` — plain transcript of the same talk. Used for: `supports_issue`
- `audio.tsv` — millisecond start/end for every cue (4090–540920). Used for: `timeline_alignment`
- `audio.txt` — timed dump same family as srt/vtt. Used for: `timeline_alignment`
- `audio.vtt` — same family as srt. Used for: `timeline_alignment`
- `audio.webm` — binary mic; not listened; text artifacts used. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — sentence-level dump of the same session. Used for: `supports_issue`
- `console.json` — `[]`, no console errors. Used for: `checked_no_extra_signal`
- `events.json` — 202 events; clicks on All/Public/Private, Floating/Fixed, Term loan/Overdraft, Borrower/Concessions i, Learn more, concessions #bank-rates, return to explore-banks. Used for: `supports_issue`, `timeline_alignment`
- `index.html` — Workbooks player shell with inlined manifest/events/shots/tabs/console for this recording id; no extra discussion. Used for: `checked_no_extra_signal`, `timeline_alignment`
- `pages.json` — p1 home Shroffin; p2 Explore banks – Shroffin (Loan inputs, Filters, Bank options); p3 Home loan concessions – Shroffin `#bank-rates`. Used for: `supports_issue`
- `replay.spec.ts` — Playwright replay of Explore banks CTA, See options, Public/Private/All, Floating/Fixed, Term/Overdraft, About Borrower/Concessions SVG i, Learn more → concessions.html#bank-rates, bank-rates li 3, #guide-swap, back to explore-banks. Used for: `timeline_alignment`
- `screenshots/0000.png` — t=208 ms, home /; home Explore banks CTA. Used for: `checked_no_extra_signal`
- `screenshots/0001.jpg` — t=14208 ms, explore-banks.html; explore-banks loan inputs prefilled. Used for: `timeline_alignment`
- `screenshots/0002.png` — t=17125 ms, home /; home after brief nav. Used for: `checked_no_extra_signal`
- `screenshots/0003.jpg` — t=22815 ms, explore-banks.html; explore-banks after second CTA. Used for: `timeline_alignment`
- `screenshots/0004.jpg` — t=32208 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0005.jpg` — t=38024 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0006.jpg` — t=46209 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0007.jpg` — t=56209 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0008.jpg` — t=64209 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0009.jpg` — t=64875 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0010.jpg` — t=65968 ms, explore-banks.html; loan inputs / early explore-banks. Used for: `timeline_alignment`
- `screenshots/0011.jpg` — t=71994 ms, explore-banks.html; See options table visible. Used for: `timeline_alignment`
- `screenshots/0012.jpg` — t=80208 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0013.jpg` — t=88208 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0014.jpg` — t=96209 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0015.jpg` — t=103161 ms, explore-banks.html; Bank type Public exclusive; public lenders listed. Used for: `timeline_alignment`
- `screenshots/0016.jpg` — t=104462 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0017.jpg` — t=107090 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0018.jpg` — t=107639 ms, explore-banks.html; Bank type Private exclusive; lender table empty. Used for: `timeline_alignment`
- `screenshots/0019.jpg` — t=113757 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0020.jpg` — t=115676 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0021.jpg` — t=116691 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0022.jpg` — t=119942 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0023.jpg` — t=120668 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0024.jpg` — t=129856 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0025.jpg` — t=138207 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0026.jpg` — t=146633 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0027.jpg` — t=147739 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0028.jpg` — t=156200 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0029.jpg` — t=166196 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0030.jpg` — t=174196 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0031.jpg` — t=177619 ms, explore-banks.html; Bank type All exclusive; mixed lenders. Used for: `timeline_alignment`
- `screenshots/0032.jpg` — t=179080 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0033.jpg` — t=179952 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0034.jpg` — t=185748 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `timeline_alignment`
- `screenshots/0035.png` — t=192409 ms, explore-banks.html; All + Floating + Term loan; Overdraft sublabel About 0.15–1% higher; Concessions heading i only. Used for: `timeline_alignment`
- `screenshots/0036.png` — t=193267 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0037.png` — t=198447 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0038.png` — t=199707 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0039.png` — t=201005 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0040.jpg` — t=210194 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0041.jpg` — t=220194 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0042.jpg` — t=230192 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0043.jpg` — t=238193 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0044.jpg` — t=240421 ms, explore-banks.html; Borrower/Concessions heading i; Bank type All. Used for: `timeline_alignment`
- `screenshots/0045.jpg` — t=241080 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0046.jpg` — t=242046 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0047.jpg` — t=244139 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0048.jpg` — t=245279 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0049.jpg` — t=254193 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0050.jpg` — t=255866 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0051.jpg` — t=264193 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0052.jpg` — t=267441 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0053.jpg` — t=268131 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0054.jpg` — t=272157 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0055.jpg` — t=273976 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0056.jpg` — t=275279 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0057.jpg` — t=276578 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0058.jpg` — t=279174 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0059.jpg` — t=280541 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `timeline_alignment`
- `screenshots/0060.png` — t=282425 ms, concessions.html#bank-rates; concessions Guide header, no Back; What can lower your home loan rate?. Used for: `supports_issue`
- `screenshots/0061.png` — t=292193 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0062.png` — t=302192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0063.png` — t=310192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0064.png` — t=312782 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0065.png` — t=322192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0066.png` — t=327377 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0067.png` — t=336192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `supports_issue`
- `screenshots/0068.png` — t=338776 ms, concessions.html#bank-rates; concessions hero; still no Back; Explore banks CTA. Used for: `supports_issue`
- `screenshots/0069.jpg` — t=341696 ms, explore-banks.html; back on explore-banks Filters. Used for: `timeline_alignment`
- `screenshots/0070.jpg` — t=350192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0071.jpg` — t=358192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0072.jpg` — t=368191 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0073.jpg` — t=376192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0074.jpg` — t=384192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0075.jpg` — t=392192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0076.jpg` — t=400192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0077.jpg` — t=408192 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0078.jpg` — t=418191 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0079.jpg` — t=426191 ms, explore-banks.html; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0080.png` — t=434192 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0081.png` — t=444192 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0082.png` — t=452192 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0083.png` — t=462191 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0084.png` — t=470191 ms, explore-banks.html; Private + Fixed + Overdraft; empty results (empty state not discussed). Used for: `timeline_alignment`
- `screenshots/0085.png` — t=478192 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0086.png` — t=486192 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0087.png` — t=496191 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0088.png` — t=504191 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0089.png` — t=514192 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0090.png` — t=524191 ms, explore-banks.html; late Filters Private/Fixed/Overdraft. Used for: `timeline_alignment`
- `screenshots/0091.png` — t=534191 ms, explore-banks.html; same empty Private/Fixed/Overdraft end state. Used for: `timeline_alignment`
- `screenshots/index.json` — 92 shots with t/reason/url/mask_rects; home, explore-banks, concessions#bank-rates. Used for: `timeline_alignment`
- `tabs.json` — one tab reported as explore-banks.html for the whole session (navigations still happened). Used for: `timeline_alignment`
- `viewer.css` — generic replay player styles (17895 bytes); no session talk. Used for: `checked_no_extra_signal`
- `viewer.js` — generic replay player script (32334 bytes); no session talk. Used for: `checked_no_extra_signal`

## ASR notes

srt/tsv/vtt/text agree on “No back.” / “Where is the back?” / “This is mobile.” No conflict on those three lines. “Is this blue?” is clear in srt; not treated as the issue. `audio.json` language `mr` ignored.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2106/issue-03-concessions-page-missing-back",
  "issue_title": "Concessions page has no Back after Learn more",
  "folder": "wb-rec-260815-2106",
  "sequence_index": 8,
  "recording_id": "2c589daf-48f1-4304-8831-5a9870fea870",
  "recording_started_at": "2026-08-15T15:36:22.615Z",
  "recording_ended_at": "2026-08-15T15:45:24.586Z",
  "duration_ms": 541971,
  "page_url": "http://localhost:8765/pages/concessions.html#bank-rates",
  "page_title": "Home loan concessions – Shroffin",
  "on_screen_object": "Guide header on concessions.html (Guide wordmark, chapter nav, Explore banks CTA) — no Back control",
  "pinpoint": "After Learn more from Explore banks, the concessions Guide page has no Back; they asked where the back is and said this is mobile.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [
    "issue-02-concessions-learn-more-takes-you-away.md"
  ],
  "source_files_used": [
    "audio.json",
    "audio.lrc",
    "audio.srt",
    "audio.text",
    "audio.tsv",
    "audio.txt",
    "audio.vtt",
    "audio.webm",
    "audio_sentences.txt",
    "console.json",
    "events.json",
    "index.html",
    "manifest.json",
    "pages.json",
    "replay.spec.ts",
    "screenshots/0000.png",
    "screenshots/0001.jpg",
    "screenshots/0002.png",
    "screenshots/0003.jpg",
    "screenshots/0004.jpg",
    "screenshots/0005.jpg",
    "screenshots/0006.jpg",
    "screenshots/0007.jpg",
    "screenshots/0008.jpg",
    "screenshots/0009.jpg",
    "screenshots/0010.jpg",
    "screenshots/0011.jpg",
    "screenshots/0012.jpg",
    "screenshots/0013.jpg",
    "screenshots/0014.jpg",
    "screenshots/0015.jpg",
    "screenshots/0016.jpg",
    "screenshots/0017.jpg",
    "screenshots/0018.jpg",
    "screenshots/0019.jpg",
    "screenshots/0020.jpg",
    "screenshots/0021.jpg",
    "screenshots/0022.jpg",
    "screenshots/0023.jpg",
    "screenshots/0024.jpg",
    "screenshots/0025.jpg",
    "screenshots/0026.jpg",
    "screenshots/0027.jpg",
    "screenshots/0028.jpg",
    "screenshots/0029.jpg",
    "screenshots/0030.jpg",
    "screenshots/0031.jpg",
    "screenshots/0032.jpg",
    "screenshots/0033.jpg",
    "screenshots/0034.jpg",
    "screenshots/0035.png",
    "screenshots/0036.png",
    "screenshots/0037.png",
    "screenshots/0038.png",
    "screenshots/0039.png",
    "screenshots/0040.jpg",
    "screenshots/0041.jpg",
    "screenshots/0042.jpg",
    "screenshots/0043.jpg",
    "screenshots/0044.jpg",
    "screenshots/0045.jpg",
    "screenshots/0046.jpg",
    "screenshots/0047.jpg",
    "screenshots/0048.jpg",
    "screenshots/0049.jpg",
    "screenshots/0050.jpg",
    "screenshots/0051.jpg",
    "screenshots/0052.jpg",
    "screenshots/0053.jpg",
    "screenshots/0054.jpg",
    "screenshots/0055.jpg",
    "screenshots/0056.jpg",
    "screenshots/0057.jpg",
    "screenshots/0058.jpg",
    "screenshots/0059.jpg",
    "screenshots/0060.png",
    "screenshots/0061.png",
    "screenshots/0062.png",
    "screenshots/0063.png",
    "screenshots/0064.png",
    "screenshots/0065.png",
    "screenshots/0066.png",
    "screenshots/0067.png",
    "screenshots/0068.png",
    "screenshots/0069.jpg",
    "screenshots/0070.jpg",
    "screenshots/0071.jpg",
    "screenshots/0072.jpg",
    "screenshots/0073.jpg",
    "screenshots/0074.jpg",
    "screenshots/0075.jpg",
    "screenshots/0076.jpg",
    "screenshots/0077.jpg",
    "screenshots/0078.jpg",
    "screenshots/0079.jpg",
    "screenshots/0080.png",
    "screenshots/0081.png",
    "screenshots/0082.png",
    "screenshots/0083.png",
    "screenshots/0084.png",
    "screenshots/0085.png",
    "screenshots/0086.png",
    "screenshots/0087.png",
    "screenshots/0088.png",
    "screenshots/0089.png",
    "screenshots/0090.png",
    "screenshots/0091.png",
    "screenshots/index.json",
    "tabs.json",
    "viewer.css",
    "viewer.js"
  ],
  "speech_clock": [
    "00:05:25,830 --> 00:05:37,960"
  ],
  "event_t_ms": [
    282406,
    282427,
    326974,
    338371,
    341696
  ],
  "screenshot_files": [
    "screenshots/0060.png",
    "screenshots/0067.png",
    "screenshots/0068.png"
  ],
  "tags": [
    "navigation",
    "back",
    "concessions",
    "mobile",
    "guide"
  ],
  "quotes": [
    {
      "clock": "00:05:25,830",
      "text": "Is this blue?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:05:30,920",
      "text": "No back.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:05:32,320",
      "text": "Where is the back?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:05:36,980",
      "text": "This is mobile.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [
    {
      "t_ms": 282406,
      "name": "Learn more",
      "css": "div#hlc-help-concessions > a"
    },
    {
      "t_ms": 326974,
      "name": "guide-swap",
      "css": "#guide-swap"
    },
    {
      "t_ms": 338371,
      "name": "guide-swap header",
      "css": "div#guide-swap > header"
    },
    {
      "t_ms": 341696,
      "name": "navigation",
      "css": "to explore-banks.html"
    }
  ],
  "related_discussion_present": true
}
```
