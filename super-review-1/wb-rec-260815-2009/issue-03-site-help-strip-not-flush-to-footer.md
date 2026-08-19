# Get-help strip sits in a padded gap instead of on the footer

The peach "Need some help? Chat now or call…" bar is a short strip, but it sits in a large empty gap above the footer.
They measured that gap in the inspector as 52px above and 64px below and called the orange margin overlay the thing to fix.
They said this must not be its own full-screen section; it should sit on the footer on every page, with no extra padding.
They also said help belongs with Support in the nav, not as a seventh story block.

---
issue_id: "wb-rec-260815-2009/issue-03-site-help-strip-not-flush-to-footer"
issue_title: "Get-help strip sits in a padded gap instead of on the footer"
folder: "wb-rec-260815-2009"
sequence_index: 6
recording_id: "e5ccc985-647d-47ca-bd54-67b8bb2a8319"
recording_started_at: "2026-08-15T14:39:23.871Z"
recording_ended_at: "2026-08-15T14:48:19.960Z"
duration_ms: 536089
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "aside.site-help-strip (Need some help? Chat now / call); complementary landmark Get help"
pinpoint: "From about 05:14 they called this strip too big because of padding above and below; inspector showed margin 52px 0 64px as orange overlay; they said stick the strip to the footer with no padding, on every page, and do not treat it as an independent full-screen section."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-04-footer-treated-as-ignored-legal-block.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:05:14,090 --> 00:08:05,460"]
event_t_ms: [310713, 312445, 322313, 326247, 338613, 348046, 366514, 377731, 491884, 496479]
screenshot_files: ["screenshots/0034.png","screenshots/0041.png","screenshots/0048.png","screenshots/0049.png","screenshots/0052.png","screenshots/0056.png","screenshots/0060.png"]
tags: ["layout","spacing","interaction"]
---

## Exact issue
On the homepage, between the last story block and `footer.site-footer`, there is `aside.site-help-strip` with "Need some help? Chat now ↗ or call …". They said "This strip is very big." then "This strip is nice" but "this padding above it, padding below it is causing some issues." They opened the inspector: shots 0048–0054 show selector `aside.site-help-strip`, margin `52px 0px 64px`, padding `15.6px 16px`, accessible name "Get help". Raw ASR "The margin is 52.64" is the 52 and 64 values spoken together. They pointed at the orange/tan inspector margin and said "This orange orange, needs to be fixed." "It needs to be fixed to the footer." Repeated: last section in strip, strip in footer, "No padding will be there." They said it feels like a jumble, it is not a section, it is not part of the above sections, it should not occupy a whole screen the way other sections do.

## How the files join (required)
- time: 388580–398080 ms (00:06:28–00:06:38)
- said: audio.srt "Look at this. The margin is 52.64." / "But that margin needs to be fixed."
- did: idle while inspector overlay is on the strip (no click on the strip itself); earlier scrolls y≈8365–8764 to keep strip+footer in view
- seeing: screenshots/0048.png — blue content box, green padding, orange/tan margin 52 top / 64 bottom on aside.site-help-strip
- page/object: pages.json complementary "Get help"; events never click the Chat now link
- therefore: the defect they named is the vertical margin gap that makes a thin help strip behave like a padded mini-section instead of sitting on the footer.

## Pinpoint
Homepage `aside.site-help-strip` ("Need some help? Chat now…"): 52px top and 64px bottom margin (inspector orange overlay) hold it off the footer so it reads as its own jumble/mini-section; they said stick it to the footer with no padding, same on every page, and keep it out of the full-screen unique-point sequence.

## Related discussion (not the issue itself)
Earlier holes/stuck-to-footer talk was about a previous version of this strip. "This footer has a big heat strip" — ASR heat/help; on-screen it is the help strip, not a heat map. "these two will fly away" / "put on the navel" / "Navel has support" — join to nav Support (dropdown already labeled Support), not a literal navel. "It is just for some help." They contrasted full-screen sections (occupy whole screen, then scroll) with this mini strip. Checking the footer immediately after is the handoff to issue 04, not a second help-strip defect.

## Chronology in this recording
- 05:14 "This strip is very big."
- 05:23–05:46 strip is nice; padding above/below; sticky to footer.
- 05:48–06:06 footer has a big help strip; padding section itself should be the strip; same everywhere; space reduced.
- 06:08–06:26 prior holes; aside, site help strip box.
- 06:28–06:57 inspector 52/64; orange overlay; fix to footer (repeated).
- 06:58–08:05 not a section; jumble; not independent; mini section; then "check the footer."

## Cross-recording continuation
Standalone in this folder. Previous recording ended on unique points/Built around you. Next recording opens on footer disclaimer copy, after they already moved from this strip to footer UI.

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
- `screenshots/0026.png` — t=190218; Help copy + Scattered everywhere. Consolidated here. below. — `supports_issue`
- `screenshots/0027.png` — t=197156 Play click; Scattered/Consolidated video with pause control. — `supports_issue`
- `screenshots/0028.png` — t=203109 Pause; Scattered/Consolidated with play + Truly the standard way… — `supports_issue`
- `screenshots/0029.png` — t=212220; Scattered/Consolidated play + Truly line. — `supports_issue`
- `screenshots/0030.png` — t=222219; Help item + you decide. your goals. + Scattered below. — `supports_issue`
- `screenshots/0031.png` — t=230219; Help + Scattered. — `supports_issue`
- `screenshots/0032.png` — t=238220; Help remnant + Scattered everywhere. Consolidated here. — `supports_issue`
- `screenshots/0033.png` — t=248220; Scattered everywhere. Consolidated here. only. — `supports_issue`
- `screenshots/0034.png` — t=258220; Scattered video play + Need some help strip + footer peek. — `supports_issue`
- `screenshots/0035.png` — t=268219; Help accordion + cnarge/condition chips + Scattered. — `supports_issue`
- `screenshots/0036.png` — t=272840 interaction Help click; Help expanded + your choice card. — `supports_issue`
- `screenshots/0037.png` — t=282219; two Zero headlines (Zero commissions / Zero bias section). — `supports_issue`
- `screenshots/0038.png` — t=290220; like never before. / So you find… / Zero. — `supports_issue`
- `screenshots/0039.png` — t=300219; same Transparent/Zero transition. — `supports_issue`
- `screenshots/0040.png` — t=308219; Best of all, you can look through everything at your own pace. — `supports_issue`
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
"52.64" vs inspector `52px 0px 64px` — used screenshot overlay, not a single 52.64px value. "heat strip" vs on-screen help strip — used screen. "orange orange" matches inspector margin color, not a painted orange bar. "navel" / "Navel has support" vs nav Support — used pages.json nav item Support. srt/tsv/json agree on "fixed to the footer."

## JSON
```json
{
  "issue_id": "wb-rec-260815-2009/issue-03-site-help-strip-not-flush-to-footer",
  "issue_title": "Get-help strip sits in a padded gap instead of on the footer",
  "folder": "wb-rec-260815-2009",
  "sequence_index": 6,
  "recording_id": "e5ccc985-647d-47ca-bd54-67b8bb2a8319",
  "recording_started_at": "2026-08-15T14:39:23.871Z",
  "recording_ended_at": "2026-08-15T14:48:19.960Z",
  "duration_ms": 536089,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "aside.site-help-strip Need some help / Get help",
  "pinpoint": "52px/64px margin holds the help strip off the footer so it acts like a mini-section; they said flush it to the footer with no padding.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-04-footer-treated-as-ignored-legal-block.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:05:14,090 --> 00:08:05,460"],
  "event_t_ms": [310713, 326247, 348046, 366514, 377731, 496479],
  "screenshot_files": ["screenshots/0034.png","screenshots/0041.png","screenshots/0048.png","screenshots/0052.png","screenshots/0056.png"],
  "tags": ["layout","spacing","interaction"],
  "quotes": [
    {"clock": "00:05:14,090", "text": "This strip is very big.", "artifact": "audio.srt"},
    {"clock": "00:05:32,600", "text": "this padding above it, padding below it is causing some issues", "artifact": "audio.srt"},
    {"clock": "00:06:28,580", "text": "Look at this. The margin is 52.64.", "artifact": "audio.srt"},
    {"clock": "00:06:46,520", "text": "It needs to be fixed to the footer.", "artifact": "audio.srt"},
    {"clock": "00:07:49,220", "text": "This does not need to be an independent section.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
