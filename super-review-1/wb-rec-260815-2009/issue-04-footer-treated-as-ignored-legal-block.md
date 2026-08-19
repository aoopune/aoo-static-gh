# Footer is treated as a nobody-cares legal block that may not fit

After the help strip they looked at the footer itself: columns, disclaimer line, and "Read the full disclaimer."
They said footer UI is not something anyone cares about, it is not a disclaimer, and anything important has to live somewhere else.
They still called the legal/compliance lines okay as legal stuff, then asked whether the footer fits the site from their own perspective — one said it should not, the other said it does.
That "does it fit" question is unfinished here and continues in the next recording on the disclaimer language.

---
issue_id: "wb-rec-260815-2009/issue-04-footer-treated-as-ignored-legal-block"
issue_title: "Footer is treated as a nobody-cares legal block that may not fit"
folder: "wb-rec-260815-2009"
sequence_index: 6
recording_id: "e5ccc985-647d-47ca-bd54-67b8bb2a8319"
recording_started_at: "2026-08-15T14:39:23.871Z"
recording_ended_at: "2026-08-15T14:48:19.960Z"
duration_ms: 536089
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "footer.site-footer, p.site-footer-disclaimer-summary, details.site-footer-disclaimer-more (Read the full disclaimer)"
pinpoint: "From about 08:12 they inspected the homepage footer, said footer UI is not a disclaimer and no one cares, said important content must be shown elsewhere, then asked whether the footer fits from their perspective (it should not / yes it does) while the disclaimer summary stayed on screen."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2018"
related_issue_files: ["issue-03-site-help-strip-not-flush-to-footer.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:08:12,370 --> 00:08:55,400"]
event_t_ms: [491884, 496479]
screenshot_files: ["screenshots/0063.png","screenshots/0064.png","screenshots/0065.png","screenshots/0066.png","screenshots/0067.png"]
tags: ["copy","trust","layout"]
---

## Exact issue
They finished the homepage unique-point walk and were told to check the footer. They scrolled to y≈8764. Shots 0063–0067 show footer columns (Guide, Tools, Company, Support, Connect), the summary "Shroffin is not a bank or a lender. Everything shown here is for comparison. Your rate, fees, and approval are decided by the lender.", and "Read the full disclaimer". Someone said "Then click the link." The other: "No, no, just the footer UI." Then: "Footer UI, no one cares." "It is not a disclaimer." "No one cares." "We have to show it at some different place. If that is important to us." They then said the footer is still the same information and "Yes, it is okay" as "legal stuff" / "Compliance." Then: "No, from our perspective does it fits or not?" "It should not." "Yes, it does."

## How the files join (required)
- time: 496479–534219 ms (00:08:16–00:08:54)
- said: audio.srt "No, no, just the footer UI." / "Footer UI, no one cares." / "It is not a disclaimer." / "does it fits or not? It should not." / "Yes, it does."
- did: scroll y=8764.5; no click on footer links in this recording (they forbade clicking the link)
- seeing: screenshots/0065.png inspector on `p.site-footer-disclaimer-summary`; 0067.png on `details.site-footer-disclaimer-more`
- page/object: pages.json contentinfo "Shroffin Footer"; region Disclaimer
- therefore: they treated the footer as a legal dump nobody uses, said important meaning cannot live only there, and left open whether that block fits the rest of the site.

## Pinpoint
Homepage `footer.site-footer` and its disclaimer summary: they said people do not care about footer UI, it is not the disclaimer they mean, important content has to appear elsewhere, and from their perspective it may not fit — they did not expand the full disclaimer here.

## Related discussion (not the issue itself)
"Okay, home page is done." / "No, check the footer now." Help-strip placement (issue 03) is adjacent but they had already finished that when they switched to footer UI. "Everyone knows this is just legal stuff" is their own framing of why a footer might be ignored, not a separate defect.

## Chronology in this recording
- 08:12 home page done; no, check footer.
- 08:19 click the link? No, just footer UI.
- 08:23–08:35 no one cares; not a disclaimer; show important things elsewhere.
- 08:35–08:46 footer still same information; okay; legal; compliance.
- 08:46–08:55 from our perspective does it fit? should not. yes it does. Recording ends.

## Cross-recording continuation
Unfinished. Next folder `wb-rec-260815-2018` starts on the same footer, expands "Read the full disclaimer", and they attack the language as "we are not responsible" versus the rest of the site caring for the customer. The part in this folder is footer-as-ignored-legal-block and the open "does it fit" question.

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — 224 segments; language=mr (wrong); last 534.74–535.40 'Yes, it does.'; word-level times used to join speech to clicks. — `supports_issue`
- `audio.lrc` — Timed lyric dump of same session speech; used to cross-check cue times vs srt/vtt. — `supports_issue`
- `audio.srt` — Primary speech clock HH:MM:SS,mmm; 225 cues from 00:00:01,370 to 00:08:55,400. — `supports_issue`
- `audio.text` — Untimed full transcript paragraph; disagrees with srt on several phrases. — `supports_issue`
- `audio.tsv` — Millisecond start/end + text; used to convert speech to session-ms clock. — `supports_issue`
- `audio.txt` — Whisper line dump with [ss.mmm --> ee.mmm] timestamps; compared against srt. — `supports_issue`
- `audio.vtt` — WEBVTT timed cues; same family as srt. — `supports_issue`
- `audio.webm` — Binary mic recording 8,629,589 bytes; not listened; text artifacts used. — `checked_no_extra_signal`
- `audio_sentences.txt` — Sentence-level dump; missing some timed splits present in srt. — `supports_issue`
- `console.json` — Empty array []; no console errors captured. — `checked_no_extra_signal`
- `events.json` — 166 events; 1 tab localhost:8765/; clicks on home-built-trigger-0/3/4, Play/Pause, scrolls to y~8764 footer. — `supports_issue`
- `index.html` — Player shell; inlined comment JSON has id e5ccc985-647d-47ca-bd54-67b8bb2a8319, 166 events, 68 shots; no extra discussion. — `checked_no_extra_signal`
- `manifest.json` — id e5ccc985-647d-47ca-bd54-67b8bb2a8319; started 2026-08-15T14:39:23.871Z ended 14:48:19.960Z duration_ms 536089; start_url http://localhost:8765/; viewport 1366x768; 68 screenshots; mic true. — `supports_issue`
- `pages.json` — 1 page Shroffin http://localhost:8765/; headings include Built around you, Help toward what you need, Scattered everywhere. Consolidated here.; landmark complementary Get help; footer Shroffin Footer. — `supports_issue`
- `replay.spec.ts` — Playwright replay: goto localhost:8765/; clicks p in first section, home-built-trigger-0/3/4, Play then Pause; many idle comments. — `supports_issue`
- `screenshots/0000.png` — t=207 start; Built around you accordion, first item expanded Guides that walk you through a home loan. — `timeline_alignment`
- `screenshots/0001.png` — t=8208; dark section copy Now entire market sits in one standardized view; Transparent outline at bottom. — `timeline_alignment`
- `screenshots/0002.png` — t=10226 interaction after click; We completely re-engineered your home loan journey + three unique-point paragraphs. — `timeline_alignment`
- `screenshots/0003.png` — t=20207; heading We completely re-engineered your home loan journey (large empty dark space). — `timeline_alignment`
- `screenshots/0004.png` — t=28208; same three standardized-view / browse / apply-once paragraphs. — `timeline_alignment`
- `screenshots/0005.png` — t=36208; same dark unique-point copy. — `timeline_alignment`
- `screenshots/0006.png` — t=44208; same. — `timeline_alignment`
- `screenshots/0007.png` — t=52209; same. — `timeline_alignment`
- `screenshots/0008.png` — t=62208; same. — `timeline_alignment`
- `screenshots/0009.png` — t=70208; Transparent, like never before. So you find what works for you — with no surprises. — `timeline_alignment`
- `screenshots/0010.png` — t=78208; Built around you accordion Guides expanded. — `timeline_alignment`
- `screenshots/0011.png` — t=88208; same accordion Guides. — `timeline_alignment`
- `screenshots/0012.png` — t=96208; Built around you heading + Guides expanded. — `timeline_alignment`
- `screenshots/0013.png` — t=104208; accordion all five items visible including Help toward what you need. — `timeline_alignment`
- `screenshots/0014.png` — t=112208; same. — `timeline_alignment`
- `screenshots/0015.png` — t=120208; same. — `timeline_alignment`
- `screenshots/0016.png` — t=123927 interaction after Guides click. — `timeline_alignment`
- `screenshots/0017.png` — t=132208; Guides still expanded. — `timeline_alignment`
- `screenshots/0018.png` — t=137275 interaction; One application to the banks you pick expanded with fill-once diagram. — `timeline_alignment`
- `screenshots/0019.png` — t=139191 interaction; Help toward what you need expanded; your choice / on your own / sit with us. — `timeline_alignment`
- `screenshots/0020.png` — t=148214; Help expanded. — `timeline_alignment`
- `screenshots/0021.png` — t=156216; Help expanded. — `timeline_alignment`
- `screenshots/0022.png` — t=158183 interaction; Guides expanded again. — `timeline_alignment`
- `screenshots/0023.png` — t=166217; Guides expanded. — `timeline_alignment`
- `screenshots/0024.png` — t=170309 interaction; Help expanded. — `timeline_alignment`
- `screenshots/0025.png` — t=180219; Help expanded. — `timeline_alignment`
- `screenshots/0026.png` — t=190218; Help copy + Scattered everywhere. Consolidated here. below. — `timeline_alignment`
- `screenshots/0027.png` — t=197156 Play click; Scattered/Consolidated video with pause control. — `timeline_alignment`
- `screenshots/0028.png` — t=203109 Pause; Scattered/Consolidated with play + Truly the standard way… — `timeline_alignment`
- `screenshots/0029.png` — t=212220; Scattered/Consolidated play + Truly line. — `timeline_alignment`
- `screenshots/0030.png` — t=222219; Help item + you decide. your goals. + Scattered below. — `timeline_alignment`
- `screenshots/0031.png` — t=230219; Help + Scattered. — `timeline_alignment`
- `screenshots/0032.png` — t=238220; Help remnant + Scattered everywhere. Consolidated here. — `timeline_alignment`
- `screenshots/0033.png` — t=248220; Scattered everywhere. Consolidated here. only. — `timeline_alignment`
- `screenshots/0034.png` — t=258220; Scattered video play + Need some help strip + footer peek. — `timeline_alignment`
- `screenshots/0035.png` — t=268219; Help accordion + cnarge/condition chips + Scattered. — `timeline_alignment`
- `screenshots/0036.png` — t=272840 interaction Help click; Help expanded + your choice card. — `timeline_alignment`
- `screenshots/0037.png` — t=282219; two Zero headlines (Zero commissions / Zero bias section). — `timeline_alignment`
- `screenshots/0038.png` — t=290220; like never before. / So you find… / Zero. — `timeline_alignment`
- `screenshots/0039.png` — t=300219; same Transparent/Zero transition. — `timeline_alignment`
- `screenshots/0040.png` — t=308219; Best of all, you can look through everything at your own pace. — `timeline_alignment`
- `screenshots/0041.png` — t=316219; Scattered play + Need some help + footer columns. — `supports_issue`
- `screenshots/0042.png` — t=324220; help strip + footer. — `supports_issue`
- `screenshots/0043.png` — t=334219; help strip + footer. — `supports_issue`
- `screenshots/0044.png` — t=342219; help strip + footer. — `supports_issue`
- `screenshots/0045.png` — t=350219; help strip + full footer columns. — `supports_issue`
- `screenshots/0046.png` — t=358219; same. — `supports_issue`
- `screenshots/0047.png` — t=366219; same. — `supports_issue`
- `screenshots/0048.png` — t=374219; inspector on aside.site-help-strip; margin 52px 0 64px; orange/tan margin overlay. — `supports_issue`
- `screenshots/0049.png` — t=382219; same inspector overlay on help strip. — `supports_issue`
- `screenshots/0050.png` — t=390220; same. — `supports_issue`
- `screenshots/0051.png` — t=398220; help strip without overlay. — `supports_issue`
- `screenshots/0052.png` — t=408220; inspector again on site-help-strip. — `supports_issue`
- `screenshots/0053.png` — t=416220; inspector on help strip. — `supports_issue`
- `screenshots/0054.png` — t=424220; inspector on help strip. — `supports_issue`
- `screenshots/0055.png` — t=432220; help strip + footer no overlay. — `supports_issue`
- `screenshots/0056.png` — t=442220; inspector on p.site-help-strip-text. — `supports_issue`
- `screenshots/0057.png` — t=450220; inspector on ul.globalnav-list (nav), help strip still in view. — `supports_issue`
- `screenshots/0058.png` — t=458220; help strip + footer. — `supports_issue`
- `screenshots/0059.png` — t=466220; help strip + footer. — `supports_issue`
- `screenshots/0060.png` — t=474220; inspector on aside.site-help-strip again. — `supports_issue`
- `screenshots/0061.png` — t=482220; inspector on help strip. — `supports_issue`
- `screenshots/0062.png` — t=492219; scroll-to-top blur/product-demo chrome (spd-safari-toolbar) during y=0 then jump. — `supports_issue`
- `screenshots/0063.png` — t=500220; footer disclaimer + inspector on About li; Need some help still above footer. — `supports_issue`
- `screenshots/0064.png` — t=510219; inspector footer.site-footer; disclaimer summary visible. — `supports_issue`
- `screenshots/0065.png` — t=518219; inspector on p.site-footer-disclaimer-summary. — `supports_issue`
- `screenshots/0066.png` — t=526219; inspector footer.site-footer. — `supports_issue`
- `screenshots/0067.png` — t=534219; inspector on details.site-footer-disclaimer-more Read the full disclaimer. — `supports_issue`
- `screenshots/index.json` — 68 shots t=207..534219 all url http://localhost:8765/; reasons start/periodic/interaction; mask_rects empty. — `supports_issue`
- `tabs.json` — Single tab 1351502398 url http://localhost:8765/ entered_at 1786804763871 left_at 1786805299534. — `checked_no_extra_signal`
- `viewer.css` — Generic player chrome 17895 bytes; no session talk. — `checked_no_extra_signal`
- `viewer.js` — Generic player chrome 32334 bytes; no session talk. — `checked_no_extra_signal`

## ASR notes
"It is not a disclaimer" vs on-screen heading Disclaimer — they were rejecting the footer as the place/voice of a real disclaimer, not denying the heading exists. "does it fits or not" kept as raw ASR. Next-folder transcript ("Shroffin's language is such that we are not responsible") is used only as continuation context, not as a quote for this file's exact issue.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2009/issue-04-footer-treated-as-ignored-legal-block",
  "issue_title": "Footer is treated as a nobody-cares legal block that may not fit",
  "folder": "wb-rec-260815-2009",
  "sequence_index": 6,
  "recording_id": "e5ccc985-647d-47ca-bd54-67b8bb2a8319",
  "recording_started_at": "2026-08-15T14:39:23.871Z",
  "recording_ended_at": "2026-08-15T14:48:19.960Z",
  "duration_ms": 536089,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "footer.site-footer disclaimer summary and Read the full disclaimer",
  "pinpoint": "They inspected the homepage footer, said footer UI is not a disclaimer and no one cares, said important content must live elsewhere, and left open whether it fits.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2018",
  "related_issue_files": ["issue-03-site-help-strip-not-flush-to-footer.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:08:12,370 --> 00:08:55,400"],
  "event_t_ms": [491884, 496479],
  "screenshot_files": ["screenshots/0063.png","screenshots/0065.png","screenshots/0067.png"],
  "tags": ["copy","trust","layout"],
  "quotes": [
    {"clock": "00:08:21,170", "text": "No, no, just the footer UI.", "artifact": "audio.srt"},
    {"clock": "00:08:23,370", "text": "Footer UI, no one cares.", "artifact": "audio.srt"},
    {"clock": "00:08:25,290", "text": "It is not a disclaimer.", "artifact": "audio.srt"},
    {"clock": "00:08:47,710", "text": "does it fits or not?", "artifact": "audio.srt"},
    {"clock": "00:08:50,390", "text": "It should not.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
