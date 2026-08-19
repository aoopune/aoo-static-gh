# All, Public, and Private are exclusive buttons, not checkboxes both on

On Explore banks, Bank type is three buttons — All, Public, Private — and only one can be on at a time.
They said Public and Private should both be ticked by default, and All is not a separate filter.
They said the same exclusive-button pattern is wrong for Floating vs Fixed and Term loan vs Overdraft.
They compared it to checkboxes they have seen on Apple and Amazon, where more than one can stay on.

---
issue_id: "wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes"
issue_title: "All, Public, and Private are exclusive buttons, not checkboxes both on"
folder: "wb-rec-260815-2106"
sequence_index: 8
recording_id: "2c589daf-48f1-4304-8831-5a9870fea870"
recording_started_at: "2026-08-15T15:36:22.615Z"
recording_ended_at: "2026-08-15T15:45:24.586Z"
duration_ms: 541971
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Filters > Bank type exclusive pills All / Public / Private (same exclusive pattern on Rate Floating/Fixed and Facility Term loan/Overdraft)"
pinpoint: "On Explore banks Filters, Bank type is an exclusive All/Public/Private control; they said Public and Private should both be ticked by default and All is not a separate filter — and they said the same exclusive-button pattern is wrong for Floating/Fixed and Term loan/Overdraft."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md", "issue-05-overdraft-facility-unexplained.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.png", "screenshots/0081.png", "screenshots/0082.png", "screenshots/0083.png", "screenshots/0084.png", "screenshots/0085.png", "screenshots/0086.png", "screenshots/0087.png", "screenshots/0088.png", "screenshots/0089.png", "screenshots/0090.png", "screenshots/0091.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:01:46,220 --> 00:03:23,600", "00:07:41,140 --> 00:07:47,300"]
event_t_ms: [102760, 104059, 106688, 107238, 113355, 115274, 116286, 119540, 120267, 129455, 146232, 147338, 177217, 178678, 179550, 185347, 192007, 192864, 198044, 199305, 200602]
screenshot_files: ["screenshots/0015.jpg", "screenshots/0018.jpg", "screenshots/0031.jpg", "screenshots/0035.png"]
tags: ["interaction", "filters", "bank-type", "checkboxes", "exclusive-control"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (title Explore banks – Shroffin), the Filters sidebar **Bank type** control is three exclusive pills: **All**, **Public**, **Private**. Clicking one turns the others off. Screenshots `0015.jpg` (Public on), `0018.jpg` (Private on, table empty), `0031.jpg` (All on) show only one selected at a time.

They said there are two buttons, Public and Private; instead the page gave an All button, a Public button, and a Private button. **“Both are ticked by default. All is not a separate filter. Both of these filters are chosen by default.”** They asked why a button is needed, called it confusing, and said they want **all the checkboxes**. They repeated: Public and Private both selected by default; All is not a separate selection.

They then pointed at **Rate** (Floating / Fixed) and **Facility** (Term loan / Overdraft): **“And the weight is also the same. Floating is fixed. Floating is selected by default. Why do we need a separate button? And the same here. Then it becomes uniform.”** Clicks at 192007 ms Fixed, 192864 ms Floating, 198044 ms Term loan, 199305 ms Overdraft, 200602 ms Term loan confirm those are the same exclusive pill pattern. Later they again said **“And you keep both of them selected by default.”** while talking about Public/Private.

## How the files join (required)

- time (ms and clock): **106220–134840 ms** (`00:01:46,220`–`00:02:14,840`)
- what they said (quote + audio file): audio.srt “There are two buttons. Public and private.” / “You have given an all button, a public button and a private button. Instead, Public and private. Both are ticked by default. All is not a separate filter. Both of these filters are chosen by default.”
- what they did: click Public 102760, Private 104059, Public 106688, Private 107238, All 113355, Public 115274, Private 116286 — locators `aside#hlc-filters-panel` Bank type buttons
- what was on screen: `0015.jpg` Public exclusive; `0018.jpg` Private exclusive; `0019.jpg`–`0023.jpg` cycling; never two of Public+Private on together
- what page/object: Explore banks Filters > Bank type
- therefore the actual issue is: All/Public/Private is an exclusive control; they wanted Public+Private checkboxes both on, with All not a third filter

- time (ms and clock): **177620–203600 ms** (`00:02:57,620`–`00:03:23,600`)
- what they said: “Instead, public and private. Both are selected by default. All. All is not a separate selection. And the weight is also the same. Floating is fixed. Floating is selected by default. Why do we need a separate button? And the same here. Then, it becomes uniform.”
- what they did: more All/Public/Private clicks 177217–185347; Fixed 192007; Floating 192864; Term loan 198044; Overdraft 199305; Term loan 200602
- what was on screen: `0031.jpg` All on; `0035.png` All + Floating + Term loan exclusive pills; Overdraft sublabel “About 0.15–1% higher”
- therefore: the same exclusive-button defect applies to Rate and Facility, not only Bank type

If a file added no new fact at that moment (empty console, player chrome, binary audio, idle gaps, home CTA shots), it still timed the session or confirmed there was no extra runtime error.

## Pinpoint

On Explore banks Filters, **Bank type** is exclusive All / Public / Private pills. They treated that as the wrong control: Public and Private should both be ticked by default, and All is not a separate filter. They said they were confused by the extra All button versus checkboxes they know from Apple/Amazon. They then said Floating/Fixed and Term loan/Overdraft are “the same” exclusive buttons and should become uniform checkboxes too. They cared because the customer cannot keep both bank types (or both rate types, or both facilities) on, which is how they said the filter should work.

## Related discussion (not the issue itself)

- “What is the difference? Why do we need a button?”
- “This is Apple's button.” (raw ASR) / “I have seen this on Amazon. I have seen this everywhere.” — analogy for multi-select checkboxes, not an Apple/Amazon bug on this site.
- “I feel the same when I press and hold one button.” (repeated) — holding one exclusive pill vs ticking several boxes.
- “I am a little confused. What is this button? All the checkboxes. Yes. It is very easy.”
- Filter **gaps** between heading and subheading: “these filters make a little gap… And it works. These gaps actually work.” — praise, not an issue.
- “But there are no such checkboxes. There are many even widgets.” — still about missing checkbox pattern.
- Mobile vs desktop aside (“Does this happen when you open it? It happens when you click from your mobile. From the desktop.”) while still on the exclusive pills — not a separate named defect.
- Later, after concessions: “And you keep both of them selected by default.” restates the same default-both-on rule (also sits with issue-04’s trade-off talk).
- Empty lender table when Private is exclusive (`0018.jpg`, later Private+Fixed+Overdraft `0084.png`–`0091.png`) was on screen; they did **not** call the empty results a defect.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:04–00:01:40 | 4090–100860 | Explore banks; prefilled values Perfect; product vs team name Nice | Explore banks CTA 5113 / 22800; See options 71592 | 0000–0014 |
| 00:01:46–00:02:14 | 106220–134840 | Two buttons Public and Private; All is not a separate filter; both ticked by default | Public/Private/All clicks 102760–116286 | 0015–0023 |
| 00:02:18–00:02:52 | 138420–172400 | Why a button; Apple/Amazon checkboxes; confused; all the checkboxes | Private 120267; All 129455 | 0024–0030 |
| 00:02:57–00:03:23 | 177620–203600 | Both selected by default; All not separate; same for Floating/Fixed and Facility | All/Public/Private 177217–185347; Fixed/Floating; Term/Overdraft | 0031–0039 |
| 00:03:25–00:03:54 | 205420–235460 | Filter gaps work (not the issue) | idle / scroll | 0040–0043 |
| 00:07:41–00:07:47 | 461140–467300 | Keep both selected by default (return to this object) | idle on Filters after concessions | 0069+ |

## Cross-recording continuation

**From wb-rec-260815-2018** (~42 min gap). That session ended on the homepage disclaimer / “AI native” / “Home run done. Time for a home page done.” Last shots are homepage footer disclaimer, not Explore banks Filters. Speech at the boundary is not the same unfinished topic. This folder’s first talk is a new Explore banks review. Standalone.

**Into wb-rec-260815-2116** (~44s gap). Next folder starts still on explore-banks.html but the first speech is about the monthly-income sentence / ceiling / property agreement value — a new copy topic, not All/Public/Private checkboxes. Standalone here.

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
- `screenshots/0015.jpg` — t=103161 ms, explore-banks.html; Bank type Public exclusive; public lenders listed. Used for: `supports_issue`
- `screenshots/0016.jpg` — t=104462 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0017.jpg` — t=107090 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0018.jpg` — t=107639 ms, explore-banks.html; Bank type Private exclusive; lender table empty. Used for: `supports_issue`
- `screenshots/0019.jpg` — t=113757 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0020.jpg` — t=115676 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0021.jpg` — t=116691 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0022.jpg` — t=119942 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0023.jpg` — t=120668 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0024.jpg` — t=129856 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0025.jpg` — t=138207 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0026.jpg` — t=146633 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0027.jpg` — t=147739 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0028.jpg` — t=156200 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0029.jpg` — t=166196 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0030.jpg` — t=174196 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0031.jpg` — t=177619 ms, explore-banks.html; Bank type All exclusive; mixed lenders. Used for: `supports_issue`
- `screenshots/0032.jpg` — t=179080 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0033.jpg` — t=179952 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0034.jpg` — t=185748 ms, explore-banks.html; Filters Bank type exclusive All/Public/Private cycling. Used for: `supports_issue`
- `screenshots/0035.png` — t=192409 ms, explore-banks.html; All + Floating + Term loan; Overdraft sublabel About 0.15–1% higher; Concessions heading i only. Used for: `supports_issue`
- `screenshots/0036.png` — t=193267 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `supports_issue`
- `screenshots/0037.png` — t=198447 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `supports_issue`
- `screenshots/0038.png` — t=199707 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `supports_issue`
- `screenshots/0039.png` — t=201005 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `supports_issue`
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
- `screenshots/0060.png` — t=282425 ms, concessions.html#bank-rates; concessions Guide header, no Back; What can lower your home loan rate?. Used for: `timeline_alignment`
- `screenshots/0061.png` — t=292193 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0062.png` — t=302192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0063.png` — t=310192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0064.png` — t=312782 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0065.png` — t=322192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0066.png` — t=327377 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0067.png` — t=336192 ms, concessions.html#bank-rates; explore-banks Filters after return from concessions. Used for: `timeline_alignment`
- `screenshots/0068.png` — t=338776 ms, concessions.html#bank-rates; concessions hero; still no Back; Explore banks CTA. Used for: `timeline_alignment`
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

`audio.srt`, `audio.vtt`, `audio.tsv`, `audio.text`, `audio.txt`, and `audio_sentences.txt` share this Bank-type talk. `audio.json` is the same family with small phrasing swaps.

Conflicts resolved by screen + click (quotes stay raw):

1. **“This is Apple's button.”** vs later **“I have seen this on Amazon.”** Screen shows Shroffin exclusive pills, not Apple UI. Join: they meant a familiar multi-select checkbox pattern (Apple/Amazon), attacking All/Public/Private exclusive buttons.
2. **“Floating is fixed.”** immediately after “All is not a separate selection” and before clicking Fixed then Floating. Join: they meant Floating **and** Fixed use the same exclusive-button pattern (ASR likely meant: Floating vs Fixed).
3. **“And the weight is also the same.”** No on-screen “weight.” Join: same pattern / same way (low-confidence word).
4. **“All the checkboxes.”** matches the Borrower/Concessions checkbox row above Bank type on `0035.png`, which they held up as the easier pattern.
5. `audio.json` `language`: `mr`. Speech is mixed English/Hindi about this page; language tag ignored.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes",
  "issue_title": "All, Public, and Private are exclusive buttons, not checkboxes both on",
  "folder": "wb-rec-260815-2106",
  "sequence_index": 8,
  "recording_id": "2c589daf-48f1-4304-8831-5a9870fea870",
  "recording_started_at": "2026-08-15T15:36:22.615Z",
  "recording_ended_at": "2026-08-15T15:45:24.586Z",
  "duration_ms": 541971,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Filters > Bank type exclusive pills All / Public / Private (same exclusive pattern on Rate Floating/Fixed and Facility Term loan/Overdraft)",
  "pinpoint": "On Explore banks Filters, Bank type is an exclusive All/Public/Private control; they said Public and Private should both be ticked by default and All is not a separate filter — and they said the same exclusive-button pattern is wrong for Floating/Fixed and Term loan/Overdraft.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [
    "issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md",
    "issue-05-overdraft-facility-unexplained.md"
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
    "00:01:46,220 --> 00:03:23,600",
    "00:07:41,140 --> 00:07:47,300"
  ],
  "event_t_ms": [
    102760,
    104059,
    106688,
    107238,
    113355,
    115274,
    116286,
    119540,
    120267,
    129455,
    146232,
    147338,
    177217,
    178678,
    179550,
    185347,
    192007,
    192864,
    198044,
    199305,
    200602
  ],
  "screenshot_files": [
    "screenshots/0015.jpg",
    "screenshots/0018.jpg",
    "screenshots/0031.jpg",
    "screenshots/0035.png"
  ],
  "tags": [
    "interaction",
    "filters",
    "bank-type",
    "checkboxes",
    "exclusive-control"
  ],
  "quotes": [
    {
      "clock": "00:01:47,640",
      "text": "There are two buttons.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:01:48,120",
      "text": "Public and private.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:01:53,900",
      "text": "You have given an all button,",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:02:02,140",
      "text": "Both are ticked by default.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:02:07,800",
      "text": "All is not a separate filter.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:02:48,580",
      "text": "All the checkboxes.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:00,980",
      "text": "Both are selected by default.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:04,300",
      "text": "All is not a separate selection.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:08,860",
      "text": "Floating is fixed.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:12,120",
      "text": "Why do we need a separate button?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:07:44,620",
      "text": "And you keep both of them selected by default.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [
    {
      "t_ms": 102760,
      "name": "Public",
      "css": "aside#hlc-filters-panel Bank type Public"
    },
    {
      "t_ms": 104059,
      "name": "Private",
      "css": "aside#hlc-filters-panel Bank type Private"
    },
    {
      "t_ms": 113355,
      "name": "All",
      "css": "aside#hlc-filters-panel Bank type All"
    },
    {
      "t_ms": 192007,
      "name": "Fixed About 1–2% higher",
      "css": "aside#hlc-filters-panel Rate Fixed"
    },
    {
      "t_ms": 192864,
      "name": "Floating",
      "css": "aside#hlc-filters-panel Rate Floating"
    },
    {
      "t_ms": 198044,
      "name": "Term loan",
      "css": "aside#hlc-filters-panel Facility Term loan"
    },
    {
      "t_ms": 199305,
      "name": "Overdraft About 0.15–1% higher",
      "css": "aside#hlc-filters-panel Facility Overdraft"
    }
  ],
  "related_discussion_present": true
}
```
