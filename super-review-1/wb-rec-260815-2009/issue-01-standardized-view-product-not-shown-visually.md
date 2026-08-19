# Standardized-view section does not show the product as one market view

On the homepage dark block that says the whole market now sits in one standardized view, they could not see that view as a product.
They skipped the video, asked what the block even is, and rejected a plus-button or Excel-sheet overlay as too complex.
They then tabled the section instead of adding graphics.
This is the homepage unique-point copy, not a separate product page.

---
issue_id: "wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually"
issue_title: "Standardized-view section does not show the product as one market view"
folder: "wb-rec-260815-2009"
sequence_index: 6
recording_id: "e5ccc985-647d-47ca-bd54-67b8bb2a8319"
recording_started_at: "2026-08-15T14:39:23.871Z"
recording_ended_at: "2026-08-15T14:48:19.960Z"
duration_ms: 536089
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Homepage dark region 'We completely re-engineered your home loan journey' and the paragraph 'Now, the entire market sits in one standardized view…'"
pinpoint: "At about 00:09–01:35 they were on that dark unique-point block; they said the standardized-view claim is something you have to see in the product itself, the current block does not show it, and extra graphics (plus button / Excel background) would be too complex, so they stopped discussing the section."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2000"
continued_into_folder: null
related_issue_files: ["issue-02-homepage-unique-points-duplicated-across-sections.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:00:01,370 --> 00:01:35,190"]
event_t_ms: [206, 3554, 9367, 9824, 14933, 17066, 18632, 26799]
screenshot_files: ["screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png"]
tags: ["copy","layout","trust","product-demo"]
---

## Exact issue
On `http://localhost:8765/` they scrolled from Built around you up into the dark homepage region whose heading is "We completely re-engineered your home loan journey." The body says the entire market now sits in one standardized view, that you can look through every lender before giving a number, and that you pick banks and apply once. They treated that block as failing to *show* the product. Raw ASR: "But what is this? You have to see it there only." Then: "So let's put a plus button there." / "No, there is no plus button." / "There is no friction." Then: "Oh no, why are you making it so complex?" Then: "In the background of the section, there will be… There will be an Excel sheet." They closed with "Actually, let's not talk about this section."

## How the files join (required)
- time: 9824 ms (00:00:09.8)
- said: audio.srt "Now the entire market sits in one standardized view." then "Now I have skipped this video and come down."
- did: click `main > div > section:nth-of-type(1) > … > p:nth-of-type(1)` at t=9824 after scroll y=1534
- seeing: screenshots/0002.png — dark block with "We completely re-engineered your home loan journey." and the three unique-point paragraphs; no product table/Excel, no plus control
- page/object: pages.json region "We completely re-engineered your home loan journey."
- therefore: the standardized-view *sentence* is on screen, but they said the standardized view itself is not shown there and must be seen in the product, and they refused a plus/Excel overlay as too complex.

## Pinpoint
Homepage, dark unique-point section under "We completely re-engineered your home loan journey.", first body paragraph claiming one standardized view: they said that claim is not visible as a product on this block; they would only accept seeing the view in the product itself, not a plus button or a light Excel-sheet background; they tabled the section.

## Related discussion (not the issue itself)
They analogized "how a product looks when it is given in the starting." They said they were already watching the video so they should not have to *tell* the one-view line. They said they do not want to be scammed, other sites' visuals exist, they do not want clicking, they paid more attention to wording than graphics, and wordings can be written immediately. "It can be cancelled" / "same problem" sat on this visual, not a second defect. Later they mapped accordion item "Every bank's home loan in the same layout" back to this standardized-view point (see issue 02).

## Chronology in this recording
- 00:00–00:03 idle on Built around you (shot 0000); "How does a product look like when it is given in the starting?"
- 00:09 click the first paragraph of the re-engineered section (shot 0002).
- 00:13–00:23 skip video / "you can tell it" / "but what is this?"
- 00:32–00:43 plus button proposed and rejected as complex / no friction.
- 00:45–01:03 Excel-sheet background, light, view from back vs shown from top.
- 01:04–01:28 scam/visuals/no clicking/wording vs graphics.
- 01:32 "Actually, let's not talk about this section." Topic moves to Built around you (issue 02).

## Cross-recording continuation
Previous folder `wb-rec-260815-2000` ended ~13s earlier on Built around you, unique points, and whether a section should be removed. This folder opens on the same homepage and immediately asks how the product should look at the start, then lands on this standardized-view block. Write the visual-not-shown part here. Unique-point duplication continues in issue 02.

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
- `screenshots/0000.png` — t=207 start; Built around you accordion, first item expanded Guides that walk you through a home loan. — `supports_issue`
- `screenshots/0001.png` — t=8208; dark section copy Now entire market sits in one standardized view; Transparent outline at bottom. — `supports_issue`
- `screenshots/0002.png` — t=10226 interaction after click; We completely re-engineered your home loan journey + three unique-point paragraphs. — `supports_issue`
- `screenshots/0003.png` — t=20207; heading We completely re-engineered your home loan journey (large empty dark space). — `supports_issue`
- `screenshots/0004.png` — t=28208; same three standardized-view / browse / apply-once paragraphs. — `supports_issue`
- `screenshots/0005.png` — t=36208; same dark unique-point copy. — `supports_issue`
- `screenshots/0006.png` — t=44208; same. — `supports_issue`
- `screenshots/0007.png` — t=52209; same. — `supports_issue`
- `screenshots/0008.png` — t=62208; same. — `supports_issue`
- `screenshots/0009.png` — t=70208; Transparent, like never before. So you find what works for you — with no surprises. — `supports_issue`
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
- `screenshots/0041.png` — t=316219; Scattered play + Need some help + footer columns. — `timeline_alignment`
- `screenshots/0042.png` — t=324220; help strip + footer. — `timeline_alignment`
- `screenshots/0043.png` — t=334219; help strip + footer. — `timeline_alignment`
- `screenshots/0044.png` — t=342219; help strip + footer. — `timeline_alignment`
- `screenshots/0045.png` — t=350219; help strip + full footer columns. — `timeline_alignment`
- `screenshots/0046.png` — t=358219; same. — `timeline_alignment`
- `screenshots/0047.png` — t=366219; same. — `timeline_alignment`
- `screenshots/0048.png` — t=374219; inspector on aside.site-help-strip; margin 52px 0 64px; orange/tan margin overlay. — `timeline_alignment`
- `screenshots/0049.png` — t=382219; same inspector overlay on help strip. — `timeline_alignment`
- `screenshots/0050.png` — t=390220; same. — `timeline_alignment`
- `screenshots/0051.png` — t=398220; help strip without overlay. — `timeline_alignment`
- `screenshots/0052.png` — t=408220; inspector again on site-help-strip. — `timeline_alignment`
- `screenshots/0053.png` — t=416220; inspector on help strip. — `timeline_alignment`
- `screenshots/0054.png` — t=424220; inspector on help strip. — `timeline_alignment`
- `screenshots/0055.png` — t=432220; help strip + footer no overlay. — `timeline_alignment`
- `screenshots/0056.png` — t=442220; inspector on p.site-help-strip-text. — `timeline_alignment`
- `screenshots/0057.png` — t=450220; inspector on ul.globalnav-list (nav), help strip still in view. — `timeline_alignment`
- `screenshots/0058.png` — t=458220; help strip + footer. — `timeline_alignment`
- `screenshots/0059.png` — t=466220; help strip + footer. — `timeline_alignment`
- `screenshots/0060.png` — t=474220; inspector on aside.site-help-strip again. — `timeline_alignment`
- `screenshots/0061.png` — t=482220; inspector on help strip. — `timeline_alignment`
- `screenshots/0062.png` — t=492219; scroll-to-top blur/product-demo chrome (spd-safari-toolbar) during y=0 then jump. — `timeline_alignment`
- `screenshots/0063.png` — t=500220; footer disclaimer + inspector on About li; Need some help still above footer. — `timeline_alignment`
- `screenshots/0064.png` — t=510219; inspector footer.site-footer; disclaimer summary visible. — `timeline_alignment`
- `screenshots/0065.png` — t=518219; inspector on p.site-footer-disclaimer-summary. — `timeline_alignment`
- `screenshots/0066.png` — t=526219; inspector footer.site-footer. — `timeline_alignment`
- `screenshots/0067.png` — t=534219; inspector on details.site-footer-disclaimer-more Read the full disclaimer. — `timeline_alignment`
- `screenshots/index.json` — 68 shots t=207..534219 all url http://localhost:8765/; reasons start/periodic/interaction; mask_rects empty. — `supports_issue`
- `tabs.json` — Single tab 1351502398 url http://localhost:8765/ entered_at 1786804763871 left_at 1786805299534. — `checked_no_extra_signal`
- `viewer.css` — Generic player chrome 17895 bytes; no session talk. — `checked_no_extra_signal`
- `viewer.js` — Generic player chrome 32334 bytes; no session talk. — `checked_no_extra_signal`

## ASR notes
Transcripts disagree on the opening ("How does a product look like when it is given in the starting?" vs audio.json "How does a product look like when it is given in the starting?"). Used srt joined to the click on the re-engineered paragraph and shots 0001–0008. "plus button" is consistent across srt/txt/json and matches the no-plus-on-screen join. "Excel sheet" is consistent. Language field `mr` is wrong; speech is English. Quote raw ASR; intended product sense of "standardized view" is confirmed by on-screen copy "standardized view".

## JSON
```json
{
  "issue_id": "wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually",
  "issue_title": "Standardized-view section does not show the product as one market view",
  "folder": "wb-rec-260815-2009",
  "sequence_index": 6,
  "recording_id": "e5ccc985-647d-47ca-bd54-67b8bb2a8319",
  "recording_started_at": "2026-08-15T14:39:23.871Z",
  "recording_ended_at": "2026-08-15T14:48:19.960Z",
  "duration_ms": 536089,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Homepage dark region We completely re-engineered your home loan journey / standardized-view paragraph",
  "pinpoint": "That block states the market sits in one standardized view but does not show the product view; they rejected plus/Excel overlays and tabled the section.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2000",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-homepage-unique-points-duplicated-across-sections.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.png", "screenshots/0053.png", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:00:01,370 --> 00:01:35,190"],
  "event_t_ms": [206, 3554, 9367, 9824, 14933, 17066, 18632, 26799],
  "screenshot_files": ["screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png"],
  "tags": ["copy","layout","trust","product-demo"],
  "quotes": [
    {"clock": "00:00:25,270", "text": "But what is this?", "artifact": "audio.srt"},
    {"clock": "00:00:32,410", "text": "So let's put a plus button there.", "artifact": "audio.srt"},
    {"clock": "00:00:41,690", "text": "Oh no, why are you making it so complex?", "artifact": "audio.srt"},
    {"clock": "00:00:49,350", "text": "There will be an Excel sheet.", "artifact": "audio.srt"},
    {"clock": "00:01:32,950", "text": "Actually, let's not talk about this section.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 9824, "name": "p:nth-of-type(1) in first main section", "css": "main > div > section:nth-of-type(1) > div > div > div > div > p:nth-of-type(1)"}],
  "related_discussion_present": true
}
```
