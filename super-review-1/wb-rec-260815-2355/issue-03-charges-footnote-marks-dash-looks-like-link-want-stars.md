# Charges footnote dash looks like a link; they want stars, and there is an extra mark

On Explore banks → Charges they looked at the * and ^ marks on fee column titles.
They said a dash is for linking and must not be used as a note mark.
They want a star, like Apple’s footnote marks, so notes are not confused with links.
They counted three index marks and only two stars — an extra mark is sitting there.

---
issue_id: "wb-rec-260815-2355/issue-03-charges-footnote-marks-dash-looks-like-link-want-stars"
issue_title: "Charges footnote dash looks like a link; they want stars, and there is an extra mark"
folder: "wb-rec-260815-2355"
sequence_index: 26
recording_id: "2136e699-2334-4e39-a724-eb3e92e1d3bd"
recording_started_at: "2026-08-15T18:25:24.871Z"
recording_ended_at: "2026-08-15T18:34:41.661Z"
duration_ms: 556790
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL; pages.json empty)"
on_screen_object: "Charges tab column-title note buttons: Processing fees *, Property check charges *, Government charges ^, plus Notes * / ^ blocks"
pinpoint: "On Explore banks Charges, footnote marks on Processing fees / Property check / Government charges mix * and ^ (ASR: dash), which they said looks like a link rather than a note; they want stars, and they counted three indexes but only two stars — an extra mark."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260816-0004"
related_issue_files: []
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","events.json","pages.json","tabs.json","console.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0066.png","screenshots/0067.png","screenshots/0069.png","screenshots/0070.png","screenshots/0076.png","screenshots/0079.png","screenshots/0083.png","screenshots/0084.png","screenshots/0085.png","screenshots/0086.png"]
speech_clock: ["00:07:07,250–00:08:48,990"]
event_t_ms: [422942, 443160, 488974, 490116, 492931, 497433, 504125, 509123, 547538]
screenshot_files: ["screenshots/0066.png","screenshots/0069.png","screenshots/0070.png","screenshots/0076.png","screenshots/0079.png","screenshots/0084.png","screenshots/0085.png"]
tags: ["copy","layout","interaction","trust"]
---

## Exact issue

They switched to the **Charges** tab, then talked while looking at the footnote marks on **Processing fees**, **Property check charges**, and **Government charges**, and the matching **Notes** headings.

On screen the marks are **\*** on processing and property-check, and **^** on government charges. Fee amounts also use a dotted underline (looks like a link). They clicked `Open note for mark *` on processing fees, then property-check `*`, then government `^`.

Raw ASR: “What is Dash? It is not Dash. It is indexation marking. … Dash is linking. If you click on it, it will take you there. Just notes. … I want a star. What does Apple do? They keep the markings underlined. So that they don't get confused.” Later: “Dash says that this is a link.” Then: “Actually there is an extra mark here. … There are three, right? Yes, there are three. And there are two stars.”

Join: they refuse dash (or anything that reads as a hyperlink) as the note glyph; they want a star; Apple is the analogy for a mark that is not a link; and the set of three marks (* * ^) is inconsistent — two stars plus an extra caret.

## How the files join

- time 422942 ms (00:07:02)  
  - said (00:07:07): “What is Dash?”  
  - did: click Charges tab  
  - seeing: screenshots/0066.png–0068.png — Charges table, processing / property-check / government columns with * and ^  
  - therefore: “Dash” is speech aimed at those footnote glyphs (and/or the dotted underline on the amounts), not a separate page.

- time 443160–497434 ms  
  - said: not dash; indexation marking; dash is linking; I want a star; Apple underlines marks so they are not confused with links  
  - did: repeated clicks on Processing fees `Open note for mark *` and `th#hlc-th-processingFee`; Notes summary for processing fees  
  - seeing: screenshots/0069.png–0083.png — Notes “Processing fees (*)” expanded; * on two columns  
  - therefore: the * note control is the object they want to keep as a star, not a dash/link.

- time 504125–509123 ms  
  - said: extra mark; three indexes; two stars  
  - did: click property-check `*`, then government `^`  
  - seeing: screenshots/0084.png–0086.png — Notes for property-check (*) and government (^)  
  - therefore: the extra mark is the caret ^ beside the two stars.

## Pinpoint

On Explore banks → Charges, the footnote marks on Processing fees (*), Property check charges (*), and Government charges (^) — plus dotted underlines on the rupee amounts — were treated as looking like links. They said a dash/link glyph is wrong for notes, they want a star (Apple-style so marks are not confused with links), and they counted three index marks but only two stars (the extra mark is ^).

## Related discussion (not the issue itself)

Apple’s site uses many footnote marks but keeps them distinct from links (they said Apple underlines marks so people don’t get confused). “Dash might look long” / “there are a lot of them.” After this they opened Indian Bank ₹2,500 processing-fee how-calculated (547538 ms) with almost no remaining speech; the *next* recording starts “what is a processing fee” on that same Charges / processing-fee note — content of the note, not the glyph. That content belongs in 0004.

## Chronology in this recording

| Clock | Said | Did | Shot |
|---|---|---|---|
| 00:07:02 | (switch) | Click Charges tab 422942 | 0066 |
| 00:07:07–00:07:31 | What is Dash? Not dash; indexation; dash is linking; I want a star | Click processing-fee * 443160 | 0069–0070 |
| 00:07:32–00:08:13 | Apple underlines marks; dash says this is a link | Repeat * / th clicks 488974–497434 | 0075–0083 |
| 00:08:32–00:08:48 | Extra mark; three indexes; two stars | Click property * 504125; government ^ 509123 | 0084–0086 |
| 00:09:07 | (no speech) | Click Indian Bank ₹2,500 processing-fee how-calculated | 0090–0091 |

## Cross-recording continuation

**Continues into `wb-rec-260816-0004`.** Gap ~5 s. This folder ends on Charges with processing-fee * notes and the processing-fee drawer for Indian Bank ₹2,500. 0004 begins “So, first I want to know what is a processing fee” on the same Charges processing-fee * note. Glyph/mark talk is this file; note-body talk is 0004.

Does not continue from 2341 (that folder ended on the loan-amount drawer).

## Evidence by file (every raw file in the folder)

- `manifest.json` — explore-banks.html, 556790 ms. Used: timeline_alignment.
- `audio.text` / `audio.txt` / `audio_sentences.txt` / `audio.srt` / `audio.vtt` / `audio.tsv` / `audio.lrc` — 00:07:07–00:08:48 Dash vs star, Apple, extra mark, two stars. Used: supports_issue.
- `audio.json` — “Dash” p≈0.54; “star” p≈0.55; last five cues repeat “two stars”. Used: supports_issue, asr_conflict.
- `audio.webm` — binary. Used: checked_no_extra_signal.
- `events.json` — Charges tab 422942; Open note * processing 443160 / 488974 / 492931 / 497433; property * 504125; government ^ 509123; processing-fee drawer 547538. Used: supports_issue.
- `pages.json` — `[]`. Used: checked_no_extra_signal.
- `tabs.json` — one tab. Used: timeline_alignment.
- `console.json` — `[]`. Used: checked_no_extra_signal.
- `replay.spec.ts` — Charges tab, processing-fee * button, property-check *, government ^. Used: timeline_alignment.
- `index.html` / `viewer.js` / `viewer.css` — generic player. Used: checked_no_extra_signal.
- `screenshots/index.json` — 0066–0091. Used: timeline_alignment.
- `screenshots/0000.jpg`–`screenshots/0065.png` — loan-amount / EMI / Overview before Charges. Used: checked_no_extra_signal.
- `screenshots/0066.png`–`screenshots/0088.png` — Charges * / ^ and Notes. Used: supports_issue.
- `screenshots/0089.jpg`–`screenshots/0091.jpg` — processing-fee drawer (bridge to 0004). Used: related_discussion.

## ASR notes

- Repeated “Dash” vs on-screen **\*** and **^** and dotted underlines. Click+shot: they mean the footnote glyph (and the underline that looks like a link), not a literal ASCII hyphen-minus in the heading text. Quoted raw “Dash”. (ASR likely meant: dash / that’s / the mark.)
- “indexation marking” = footnote/index mark (ASR likely meant: index / footnote marking).
- “There are three” + “two stars” matches two `*` plus one `^`.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2355/issue-03-charges-footnote-marks-dash-looks-like-link-want-stars",
  "issue_title": "Charges footnote dash looks like a link; they want stars, and there is an extra mark",
  "folder": "wb-rec-260815-2355",
  "sequence_index": 26,
  "recording_id": "2136e699-2334-4e39-a724-eb3e92e1d3bd",
  "recording_started_at": "2026-08-15T18:25:24.871Z",
  "recording_ended_at": "2026-08-15T18:34:41.661Z",
  "duration_ms": 556790,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL; pages.json empty)",
  "on_screen_object": "Charges tab footnote marks * and ^ on Processing fees, Property check charges, Government charges",
  "pinpoint": "Footnote marks mix * and ^ and look like links; they want stars and called out an extra mark (three indexes, two stars).",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260816-0004",
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.srt","audio.json","events.json","screenshots/0066.png","screenshots/0070.png","screenshots/0085.png"],
  "speech_clock": ["00:07:07,250–00:08:48,990"],
  "event_t_ms": [422942, 443160, 504125, 509123],
  "screenshot_files": ["screenshots/0066.png","screenshots/0070.png","screenshots/0084.png","screenshots/0085.png"],
  "tags": ["copy","layout","interaction","trust"],
  "quotes": [
    {"clock": "00:07:07,250", "text": "What is Dash?", "artifact": "audio.srt"},
    {"clock": "00:07:30,290", "text": "I want a star.", "artifact": "audio.srt"},
    {"clock": "00:08:32,730", "text": "Actually there is an extra mark here.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 443160, "name": "Open note for mark *", "css": "th#hlc-th-processingFee > button"},
    {"t_ms": 509123, "name": "Open note for mark ^", "css": "th#hlc-th-governmentCharges > button"}
  ],
  "related_discussion_present": true
}
```
