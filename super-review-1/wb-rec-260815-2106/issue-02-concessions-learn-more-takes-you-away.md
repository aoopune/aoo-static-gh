# Concessions Learn more takes you off the filter instead of explaining each option there

On Explore banks, Concessions has one small i next to the heading, then Learn more that opens another page.
They said do not take the user to someone else — write the facts on the concessions filter.
Each option (Women applicant, Green home, Insurance) also needs its own i, because they need to know what Insurance concessions are without leaving.
They used the other page only to talk through first name on the papers, the 0.05–0.3 range, and stacking woman + green home.

---
issue_id: "wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away"
issue_title: "Concessions Learn more takes you off the filter instead of explaining each option there"
folder: "wb-rec-260815-2106"
sequence_index: 8
recording_id: "2c589daf-48f1-4304-8831-5a9870fea870"
recording_started_at: "2026-08-15T15:36:22.615Z"
recording_ended_at: "2026-08-15T15:45:24.586Z"
duration_ms: 541971
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Filters > Concessions heading i-tooltip and Learn more link (div#hlc-help-concessions > a); Women applicant / Green home / Insurance checkboxes with no per-option i"
pinpoint: "On Explore banks, Concessions has one heading tooltip plus Learn more that leaves the page; they said do not take the user somewhere else, write the facts on the filter, and give each option (including Insurance) its own i."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-03-concessions-page-missing-back.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.png", "screenshots/0081.png", "screenshots/0082.png", "screenshots/0083.png", "screenshots/0084.png", "screenshots/0085.png", "screenshots/0086.png", "screenshots/0087.png", "screenshots/0088.png", "screenshots/0089.png", "screenshots/0090.png", "screenshots/0091.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:04:34,580 --> 00:07:10,960"]
event_t_ms: [240018, 240678, 241640, 244874, 267040, 267729, 273574, 274877, 276174, 276519, 278772, 280138, 282406, 282427, 312378]
screenshot_files: ["screenshots/0035.png", "screenshots/0044.jpg", "screenshots/0059.jpg", "screenshots/0060.png", "screenshots/0064.png"]
tags: ["copy", "navigation", "filters", "concessions", "tooltips", "learn-more"]
---

## Exact issue

On Explore banks Filters, **Concessions** is three checkboxes (Women applicant, Green home, Insurance) with a single heading **i**. The tooltip is heading-level; **Learn more** (`div#hlc-help-concessions > a`) navigates to `http://localhost:8765/pages/concessions.html#bank-rates`.

They asked **“What are the concessions?”** four times while opening that i, then followed Learn more. On the destination they read “Woman as primary applicant” / first name on property papers, then said **“You shouldn't take this to someone else.”** **“Write in the concessions that this is not the case.”** They wanted the **entire range of total discounts** (raw ASR 0.05 to 0.3 or 0.2) written there, and stacking **“Like woman and greenhouse.”** Then: **“But each of these options also need to have their own eye information. Because why take it to someone else? Because I need to know what insurance concessions are.”**

pages.json p3 heading “What can lower your home loan rate?” and screenshots `0060.png`/`0064.png` show that copy lives on the Guide page, not on each filter checkbox. `0035.png` / `0044.jpg` show only one i on the Concessions legend, none on Women / Green home / Insurance.

## How the files join (required)

- time (ms and clock): **274580–291130 ms** (`00:04:34,580`–`00:04:51,130`)
- what they said: audio.srt “What are the concessions?” repeated
- what they did: About Borrower i clicks 240018–244874 (nearby); About Concessions SVG i 267040–280138; Learn more click **282406**; navigation **282427** to concessions.html#bank-rates
- what was on screen: `0044.jpg`–`0059.jpg` heading i only; `0060.png` destination Guide concessions
- therefore: asking what concessions are is answered by leaving the filter via Learn more

- time (ms and clock): **359480–430960 ms** (`00:05:59,480`–`00:07:10,960`) after they had already landed on concessions (and after the missing-back beat in issue-03)
- what they said: “You shouldn't take this to someone else.” “Write in the concessions…” range 0.05–0.3; stacking woman and greenhouse; “each of these options also need to have their own eye information. Because why take it to someone else? Because I need to know what insurance concessions are.”
- what they did: click bank-rates list item 3 at 312378 (`li:nth-of-type(3)`); later return 341696 — talk continues on Explore banks Filters
- what was on screen: `0060.png`–`0064.png` woman / green home cards; `0069.jpg`+ back on filter with still one heading i
- therefore: the defect is off-page Learn more + one heading i, not per-option i on the filter they must use

## Pinpoint

On Explore banks, Concessions explains itself with one heading tooltip and a **Learn more** link that sends the user to the Guide concessions page. They treated that as wrong: the user should not be taken somewhere else; the facts (who counts as a woman applicant, the discount range, stacking, what Insurance concessions are) should be written on the filter, and **each option needs its own i**. They cared because they were trying to turn concessions on while comparing banks, and Insurance in particular had no local explanation.

## Related discussion (not the issue itself)

- Borrower heading i first: they opened About Borrower before Concessions (clicks 240018+). Not named as its own defect in this stretch.
- On the concessions page they decoded **first name on the property**: “means index 2 is the first” (raw ASR) then “there can be multiple names on the property. She has to be one of them.” “She has to be an individual.”
- “Nice, bro.” twice while reading the cards — praise of the Guide content, not of taking people there from the filter.
- Range talk: 0.05 to 0.3 or 0.2 as **total discounts**; on-screen woman/green home cards show 0.05–0.10% each.
- Stacking “woman and greenhouse” (ASR) = Women applicant + Green home checkboxes.
- “And you don't even need to write / Not even here.” — they still wanted local i, not more Guide prose.
- Missing Back on the destination is issue-03, not this file.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:04:00–00:04:07 | 241870–247570 | Open-from-mobile aside (nearby) | Borrower i | 0044–0048 |
| 00:04:34–00:04:51 | 274580–291130 | What are the concessions? | Concessions i; Learn more 282406; nav 282427 | 0052–0060 |
| 00:04:51–00:05:04 | 291130–304590 | First name on property; multiple names; she is one of them | idle on concessions cards | 0060–0063 |
| 00:05:17–00:05:27 | 317590–327210 | Nice bro; Is this blue? | click bank-rates li 3 at 312378 | 0064 |
| 00:05:59–00:07:10 | 359480–430960 | Individual; don’t take to someone else; write in concessions; range; stacking; each option own i; insurance | return to explore-banks 341696 then idle on Filters | 0069–0079 |

## Cross-recording continuation

**From wb-rec-260815-2018:** homepage wrap-up, ~42 min gap, not this concessions-filter topic. Standalone.

**Into wb-rec-260815-2116:** monthly income / ceiling copy on Explore banks, not Learn more / per-option i. Standalone.

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
- `screenshots/0035.png` — t=192409 ms, explore-banks.html; All + Floating + Term loan; Overdraft sublabel About 0.15–1% higher; Concessions heading i only. Used for: `supports_issue`
- `screenshots/0036.png` — t=193267 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0037.png` — t=198447 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0038.png` — t=199707 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0039.png` — t=201005 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0040.jpg` — t=210194 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0041.jpg` — t=220194 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0042.jpg` — t=230192 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0043.jpg` — t=238193 ms, explore-banks.html; Filters Rate/Facility exclusive pills. Used for: `timeline_alignment`
- `screenshots/0044.jpg` — t=240421 ms, explore-banks.html; Borrower/Concessions heading i; Bank type All. Used for: `supports_issue`
- `screenshots/0045.jpg` — t=241080 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0046.jpg` — t=242046 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0047.jpg` — t=244139 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0048.jpg` — t=245279 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0049.jpg` — t=254193 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0050.jpg` — t=255866 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0051.jpg` — t=264193 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0052.jpg` — t=267441 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0053.jpg` — t=268131 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0054.jpg` — t=272157 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0055.jpg` — t=273976 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0056.jpg` — t=275279 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0057.jpg` — t=276578 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0058.jpg` — t=279174 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
- `screenshots/0059.jpg` — t=280541 ms, explore-banks.html; Borrower/Concessions heading i / Learn more. Used for: `supports_issue`
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

1. **“means index 2 is the first.”** On-screen card: “first name on the property papers.” Join: first-name-on-papers rule (ASR garbled “index 2”).
2. **“greenhouse”** vs checkbox/card **Green home**. Join: Green home (ASR likely meant: green home).
3. **“own eye information”** vs SVG **i** on the Concessions legend. Join: per-option info i.
4. **“Write in the concessions that this is not the case.”** Ambiguous “not the case”; following sentences are the range and stacking — kept as related write-the-facts talk, not a separate issue.
5. `audio.json` language `mr` ignored.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away",
  "issue_title": "Concessions Learn more takes you off the filter instead of explaining each option there",
  "folder": "wb-rec-260815-2106",
  "sequence_index": 8,
  "recording_id": "2c589daf-48f1-4304-8831-5a9870fea870",
  "recording_started_at": "2026-08-15T15:36:22.615Z",
  "recording_ended_at": "2026-08-15T15:45:24.586Z",
  "duration_ms": 541971,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Filters > Concessions heading i-tooltip and Learn more link (div#hlc-help-concessions > a); Women applicant / Green home / Insurance checkboxes with no per-option i",
  "pinpoint": "On Explore banks, Concessions has one heading tooltip plus Learn more that leaves the page; they said do not take the user somewhere else, write the facts on the filter, and give each option (including Insurance) its own i.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [
    "issue-03-concessions-page-missing-back.md"
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
    "00:04:34,580 --> 00:07:10,960"
  ],
  "event_t_ms": [
    240018,
    240678,
    241640,
    244874,
    267040,
    267729,
    273574,
    274877,
    276174,
    276519,
    278772,
    280138,
    282406,
    282427,
    312378
  ],
  "screenshot_files": [
    "screenshots/0035.png",
    "screenshots/0044.jpg",
    "screenshots/0059.jpg",
    "screenshots/0060.png",
    "screenshots/0064.png"
  ],
  "tags": [
    "copy",
    "navigation",
    "filters",
    "concessions",
    "tooltips",
    "learn-more"
  ],
  "quotes": [
    {
      "clock": "00:04:37,760",
      "text": "What are the concessions?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:03,400",
      "text": "You shouldn't take this to someone else.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:11,300",
      "text": "Write in the concessions that this is not the case.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:26,960",
      "text": "And some concessions can even stack up.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:30,600",
      "text": "Like woman and greenhouse.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:34,700",
      "text": "But each of these options also need to have their own eye information.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:41,960",
      "text": "Because why take it to someone else?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:06:50,270",
      "text": "Because I need to know what insurance concessions are.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [
    {
      "t_ms": 267040,
      "name": "About Concessions i",
      "css": "legend#hlc-concessions-label button svg"
    },
    {
      "t_ms": 282406,
      "name": "Learn more",
      "css": "div#hlc-help-concessions > a"
    },
    {
      "t_ms": 282427,
      "name": "navigation",
      "css": "to concessions.html#bank-rates"
    },
    {
      "t_ms": 312378,
      "name": "bank-rates list item 3",
      "css": "section#bank-rates li:nth-of-type(3) span:nth-of-type(2)"
    }
  ],
  "related_discussion_present": true
}
```
