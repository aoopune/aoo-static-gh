# Charge notes use legal jargon instead of friendly-lawyer advice

On Explore banks Other charges, the notes under Rate change charge (and they said Overdue and EMI bounce notes are the same) are written in legal terms like MCLR and BPLR.
They said every symbol they have to read uses only legal language.
They want it to sound like a friendly lawyer on the customer’s team: how the rate is decided, and when to pick floating vs fixed.
They do not want the customer to have to use legal language.

---
issue_id: "wb-rec-260816-0031/issue-01-charge-notes-legal-jargon-not-friendly-lawyer"
issue_title: "Charge notes use legal jargon instead of friendly-lawyer advice"
folder: "wb-rec-260816-0031"
sequence_index: 30
recording_id: "abd34f08-4d04-49d6-a699-6c354e5780bd"
recording_started_at: "2026-08-15T19:01:37.835Z"
recording_ended_at: "2026-08-15T19:08:12.983Z"
duration_ms: 395148
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Other charges Notes, especially details#hlc-charge-note-rate-change-charge (MCLR / BPLR / benchmark-switch text), plus overdue and EMI-bounce notes they called the same"
pinpoint: "On Explore banks Other charges, Rate change charge notes (and they said Overdue and EMI bounce notes are the same) use legal terms such as MCLR and BPLR instead of friendly-lawyer advice on how the rate is decided and when to choose floating vs fixed."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-02-table-missing-scheme-names-multiple-schemes.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.jpg","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.jpg","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:02,700 --> 00:02:08,260"]
event_t_ms: [198,1013,4431,4940,4941,6831,9129,10123,12007,13792,18614,85066]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png"]
tags: ["copy","trust","notes","legal-jargon","rate-change","intelligence"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (title Explore banks – Shroffin), Other charges, they focused the EMI bounce header mark `^` (`th#hlc-th-emiBounceChargeDisplay`) then clicked the Rate change charge header mark `°` (`th#hlc-th-rateChangeChargeDisplay`). They scrolled to Notes and opened `details#hlc-charge-note-rate-change-charge`, then overdue and EMI-bounce notes.

Raw ASR (`audio.srt` cue 1): "I feel that all the symbols that I have to read, I have to use only legal language." Cue 2: "Versus it should be like a friendly lawyer who is in your team to help you out." Cue 4: "For example, look at this. MCLR, BPLR, these are the things." Cue 5: "So here instead what I want is how the rate is decided."

The Rate change charge notes on screen use MCLR, BPLR and other benchmark names as the meaning of the symbols. They said that is the wrong voice. They want the notes to tell the customer how the rate is decided and when to choose, not to force legal words.

They later opened the same Rate change note again and said the Overdue and EMI bounce notes are "the same" — same legal-note problem, not a second defect.

## How the files join (required)

- time (ms and clock): **2700–11980 ms** (`00:00:02,700`–`00:00:11,980`)
- what they said (quote + audio file): `audio.srt` cue 1: "I feel that all the symbols that I have to read, I have to use only legal language."
- what they did: landmark on Explore banks at **198 ms**; focus Open note for mark `^` at **1013 ms**; click Open note for mark `°` at **4941 ms**; scroll y=3852.5 then 3421
- what was on screen: `screenshots/0000.png` (t=199) Other charges with EMI bounce `^`; `screenshots/0001.png` (t=5344) after clicking `°` on Rate change charge
- what page/object: Explore banks Other charges headers and Notes
- therefore the actual issue is: the symbols/notes they have to read are legal language

- time: **22160–33420 ms** (`00:00:22,160`–`00:00:33,420`)
- said: "For example, look at this. MCLR, BPLR, these are the things." / "So here instead what I want is how the rate is decided." (`audio.srt` cues 4–5)
- did: clicks on `details#hlc-charge-note-rate-change-charge` at **10123** and **18614 ms**; overdue note **12007**; EMI bounce note **13792**
- seeing: `screenshots/0002.png`–`0005.png` Rate change charge notes with MCLR / BPLR / benchmark-switch text
- therefore: MCLR and BPLR in those notes are the example of the legal language they reject

- time: **46260–128260 ms**
- said: tell the customer when to go with "RBI report" vs fixed; they do not want legal language; 0.25 higher for fixed is already written; intelligence should say if India is going down do not take fixed, floating is better long term (`audio.srt` cues 9–30)
- did: idle on the open Rate change notes; click the Rate change note again at **85066 ms** (`screenshots/0013.png`)
- seeing: `screenshots/0006.png`–`0014.png` same Notes block
- therefore: the notes do not give friendly-lawyer choice advice; they only give legal/benchmark wording

- time: **128920–142020 ms** (`00:02:08,920`–`00:02:22,020`)
- said: "Ok, this is again the same, right?" / "Yes, it is the same." (`audio.srt` cues 31–35)
- did: still on Notes after having opened overdue and bounce details
- therefore: they treat Overdue and EMI bounce notes as the same legal-language problem

`pages.json` names Notes and Government charges. `console.json` is `[]`. `replay.spec.ts` replays the `°` click and the three note `<details>` clicks. `audio.webm` is binary. Player files add no talk.

## Pinpoint

On Explore banks → Other charges, the Notes under Rate change charge (`details#hlc-charge-note-rate-change-charge`, opened from header mark `°`) explain symbols with MCLR, BPLR and other legal benchmark names. They said every symbol they have to read uses only legal language, and it should instead be like a friendly lawyer on the team: how the rate is decided, and when the customer should choose floating vs fixed. They said Overdue and EMI bounce notes are the same. They cared because the customer should get the benefit of the choice, not have to use legal language.

## Related discussion (not the issue itself)

- They want five or six "agencies" whose rate is taken (raw ASR `HR`; likely repo / external-benchmark agencies) and no advantage or disadvantage from those agencies — the customer chooses.
- If you do not have much stress, go with "RBI report" (ASR; on-screen notes talk RBI / repo-linked rates).
- If the market or economy is going down, or rates will rise, take a fixed rate.
- Fixed can be 0.25 higher than floating; they said that is already written there.
- "When our intelligence would suggest that if India is going down, then you should not take a fixed rate. floating rate is going to be a favorable term in the long term."
- Same-note check on overdue and bounce: "this is again the same."
- Earlier folder `wb-rec-260816-0013` already attacked Rate change charge as too complex and legal. This folder is the notes/`°`/`MCLR`/`BPLR` version of that complaint. Previous folder `wb-rec-260816-0029` ended on EMI-miss drawers and labels, not this wording.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:00 | 198–199 | (session start) | landmark Explore banks | 0000.png Other charges, bounce `^` |
| 00:00:01 | 1013 | (about to talk legal language) | focus Open note for mark `^` | 0000.png |
| 00:00:02–00:00:17 | 2700–17340 | All symbols are legal language; should be a friendly lawyer | click `°` at 4941; scroll to Notes | 0001.png |
| 00:00:22–00:00:33 | 22160–33420 | Look at this: MCLR, BPLR; want how the rate is decided | open Rate change / overdue / bounce notes 10123–18614 | 0002–0005.png |
| 00:00:33–00:02:08 | 33820–128260 | Agencies; RBI report vs fixed; no legal language; 0.25; intelligence vs fixed | idle; reopen Rate change note 85066 | 0006–0014.png |
| 00:02:08–00:02:22 | 128920–142020 | This is the same / yes the same | idle on Notes | 0015–0017.png |
| 00:02:22 onward | 142300+ | Bank attribute / scheme-name talk | Yes Bank More — that is issue 02 | 0018.png+ |

## Cross-recording continuation

**From wb-rec-260816-0029** (~9 s gap). That session ended on the same Explore banks Other charges table: EMI-miss calculation drawers and least/highest penalty labels. Last speech there: they also need this intelligence which is already visible. Last shots show Other charges rows, not the MCLR/BPLR note text. This folder’s first line is a new complaint: the symbols/notes are legal language. Same page, different defect. Not a continuation of 0029’s two issues.

**Into next:** NONE. Topic is finished in this folder after they say overdue/bounce notes are the same, then they switch to scheme names (issue 02).

Thematic cousin, not this file’s continuation: `wb-rec-260816-0013` Rate change charge as legal jargon.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `abd34f08-4d04-49d6-a699-6c354e5780bd`, start_url Explore banks, duration_ms 395148, events_count 130, screenshots_count 56, viewport 1366×768, mic true. Used for: `timeline_alignment`
- `audio.json` — 130 segments, `language` `mr` (wrong; speech is Hindi/English about this page); words MCLR ~0.65, BPLR ~0.94; trailing `text` matches the legal-language stretch. Used for: `supports_issue`, `timeline_alignment`
- `audio.lrc` — same cues as srt. Used for: `timeline_alignment`
- `audio.srt` — primary speech clock; cues 1–35 are this issue. Used for: `supports_issue`, `timeline_alignment`
- `audio.text` — plain transcript of legal language / MCLR / friendly lawyer. Used for: `supports_issue`
- `audio.tsv` — ms 2700–142020 for this stretch. Used for: `timeline_alignment`
- `audio.txt` — timed dump same family as srt. Used for: `timeline_alignment`
- `audio.vtt` — same family as srt. Used for: `timeline_alignment`
- `audio.webm` — binary mic; not listened. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — one-block transcript including MCLR, BPLR, friendly lawyer. Used for: `supports_issue`
- `console.json` — `[]`, no console errors. Used for: `checked_no_extra_signal`
- `events.json` — focus `^`, click `°`, clicks on rate-change / overdue / EMI-bounce note summaries. Used for: `supports_issue`, `timeline_alignment`
- `index.html` — player shell; HTML comment inlines this session id, Explore banks URL, event list, 56 screenshot index rows; no extra discussion. Used for: `checked_no_extra_signal`, `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; heading Notes. Used for: `supports_issue`
- `replay.spec.ts` — Playwright replay of `°` click and the three charge-note clicks. Used for: `timeline_alignment`
- `screenshots/0000.png` — t=199 start; Other charges; EMI bounce `^`. Used for: `supports_issue`
- `screenshots/0001.png` — t=5344 after `°` click. Used for: `supports_issue`
- `screenshots/0002.png` — t=10527 Rate change note interaction. Used for: `supports_issue`
- `screenshots/0003.png` — t=12410 overdue note. Used for: `supports_issue`
- `screenshots/0004.png` — t=14201 EMI bounce note. Used for: `supports_issue`
- `screenshots/0005.png` — t=19020 Rate change note path click; MCLR/BPLR notes. Used for: `supports_issue`
- `screenshots/0006.png`–`screenshots/0012.png` — periodic while they talk agencies / fixed vs floating. Used for: `supports_issue`
- `screenshots/0013.png` — t=85468 reopen Rate change note. Used for: `supports_issue`
- `screenshots/0014.png` — t=94199 same notes during 0.25 / intelligence talk. Used for: `supports_issue`
- `screenshots/0015.png`–`screenshots/0017.png` — Notes during “this is the same.” Used for: `supports_issue`
- `screenshots/0018.png`–`screenshots/0055.png` — Yes Bank drawer, Top-up, Women applicant; later topic. Used for: `checked_no_extra_signal`
- `screenshots/index.json` — 56 shots, all localhost Explore banks. Used for: `timeline_alignment`
- `tabs.json` — one tab, Explore banks whole session. Used for: `timeline_alignment`
- `viewer.css` — generic replay player styles (17895 bytes); no session talk. Used for: `checked_no_extra_signal`
- `viewer.js` — generic replay player script (32334 bytes); no session talk. Used for: `checked_no_extra_signal`

## ASR notes

`audio.srt`, `audio.vtt`, `audio.tsv`, `audio.text`, `audio.txt`, and `audio_sentences.txt` share the same sentences. `audio.json` segment text is the same family.

Conflicts resolved by screen + click (quotes stay raw):

1. **“HR is taken”** (word “HR” probability ~0.81) while notes list rate benchmarks. (ASR likely meant: repo / external rate, not HR.)
2. **“RBI report”** while notes talk RBI / repo-linked rates. (ASR likely meant: RBI repo.)
3. **“take a bet”** (~01:47). Quote raw; nearby talk is take a fixed/floating choice.
4. `audio.json` `language`: `mr`. Speech is mixed English/Hindi about this page; language tag ignored.
5. Cue 31–35 “this is the same” joined to overdue/bounce notes they had just opened, not to a new page.

## JSON
```json
{
  "issue_id": "wb-rec-260816-0031/issue-01-charge-notes-legal-jargon-not-friendly-lawyer",
  "issue_title": "Charge notes use legal jargon instead of friendly-lawyer advice",
  "folder": "wb-rec-260816-0031",
  "sequence_index": 30,
  "recording_id": "abd34f08-4d04-49d6-a699-6c354e5780bd",
  "recording_started_at": "2026-08-15T19:01:37.835Z",
  "recording_ended_at": "2026-08-15T19:08:12.983Z",
  "duration_ms": 395148,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Other charges Notes, especially details#hlc-charge-note-rate-change-charge (MCLR / BPLR / benchmark-switch text), plus overdue and EMI-bounce notes they called the same",
  "pinpoint": "On Explore banks Other charges, Rate change charge notes (and they said Overdue and EMI bounce notes are the same) use legal terms such as MCLR and BPLR instead of friendly-lawyer advice on how the rate is decided and when to choose floating vs fixed.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-table-missing-scheme-names-multiple-schemes.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.jpg","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.jpg","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:02,700 --> 00:02:08,260"],
  "event_t_ms": [198,1013,4431,4940,4941,6831,9129,10123,12007,13792,18614,85066],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png"],
  "tags": ["copy","trust","notes","legal-jargon","rate-change","intelligence"],
  "quotes": [
    {"clock": "00:00:02,700","text": "I feel that all the symbols that I have to read, I have to use only legal language.","artifact": "audio.srt"},
    {"clock": "00:00:12,820","text": "Versus it should be like a friendly lawyer who is in your team to help you out.","artifact": "audio.srt"},
    {"clock": "00:00:22,160","text": "For example, look at this. MCLR, BPLR, these are the things.","artifact": "audio.srt"},
    {"clock": "00:00:27,620","text": "So here instead what I want is how the rate is decided.","artifact": "audio.srt"},
    {"clock": "00:01:21,760","text": "I don't want to use the legal language.","artifact": "audio.srt"},
    {"clock": "00:01:54,180","text": "When our intelligence would suggest that if India is going down, then you should not take a fixed rate.","artifact": "audio.srt"},
    {"clock": "00:02:08,920","text": "Ok, this is again the same, right?","artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 4941, "name": "Open note for mark °", "css": "th#hlc-th-rateChangeChargeDisplay > span > span > button"},
    {"t_ms": 10123, "name": "Rate change charge note summary", "css": "details#hlc-charge-note-rate-change-charge > summary > span > svg"},
    {"t_ms": 12007, "name": "Overdue charge note summary", "css": "details#hlc-charge-note-overdue-charge > summary > span > svg"},
    {"t_ms": 13792, "name": "EMI bounce charge note summary", "css": "details#hlc-charge-note-emi-bounce-charge > summary > span > svg"},
    {"t_ms": 18614, "name": "Rate change charge note path", "css": "details#hlc-charge-note-rate-change-charge > summary > span > svg > path"},
    {"t_ms": 85066, "name": "Rate change charge note summary", "css": "details#hlc-charge-note-rate-change-charge > summary > span > svg"}
  ],
  "related_discussion_present": true
}
```
