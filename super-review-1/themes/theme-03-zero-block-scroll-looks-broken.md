# Zero block on scroll looks broken

When they scrolled into Zero commissions / Zero bias, they first saw two giant “Zero”s and nothing else.
They had no idea what was coming and, for a moment, thought the site was broken.
They wanted the words to arrive with the zeros, one claim at a time.
A later pass found the same block fading: color gone, two stacked “Zero”s left.

---
theme_id: "theme-03-zero-block-scroll-looks-broken"
theme_title: "Zero block on scroll looks broken"
pinpoint: "On the homepage Zero commissions / Zero bias block, scrolling first shows two bare zeros (and later the section’s color fades away), so the block looks broken until the rest of the heading appears."
thread_count: 2
issue_file_count: 3
issue_files:
  - "wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros.md"
  - "wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken.md"
  - "wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade.md"
folders: ["wb-rec-260815-1929", "wb-rec-260815-1951", "wb-rec-260815-2000"]
pages: ["http://localhost:8765/"]
severity_as_spoken_range: ["medium", "high"]
confidence_range: ["high"]
tags: ["motion", "scroll", "reveal", "homepage", "zero"]
---

## Exact theme

The object is the homepage **Zero** story block (`h2#home-zero-title`), which is meant to read **Zero commissions. Zero bias.** Mid-scroll, only two large **Zero** words are on screen. They said they had no context and felt the website was broken. Quote: “When I scrolled down to this section, I saw two zeros on the screen.” “And I had no context of what is going to come up. In fact, I felt that the website was broken.”

They wanted a staged reveal: **Zero commissions** then **Zero bias**, then the next sentence — or one zero, then “commissions,” then “bias.” If nothing is left to show, they said people could just explore.

On a later walk they said the section’s color is gone and the whole section is fading away — “From the start, it was not like that” — and they thought this section should be removed. The matching shot is two stacked “Zero” words with the rest of the slide faded out. That is the same mid-scroll Zero state, not the finished wording of “commissions.”

## Threads (members)

### Thread: Two bare zeros on scroll look broken

- issue files in time order: `wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros.md`, `wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken.md`
- continuation: 1929-04 is marked standalone for speech; 1951-01 continues from `wb-rec-260815-1950` (same two-zero frame, no speech in 1950). Pinpoints name the same object and the same defect (both zeros visible, commissions/bias missing, looks broken).
- pinpoint: on scroll-in, only two zeros are visible, with no “commissions” or “bias”

They clicked the first Zero while saying this. They wanted sequential reveal. 1951 restates: “when you scroll up, you can see both the zeroes.” “And you don't know if the website is broken or not.”

### Thread: The Zero story section fades on scroll

- issue files: `wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade.md`
- continuation: standalone as a file; same Zero block, live fade rather than the first naming of two zeros
- pinpoint: the section’s color is gone and the whole section is fading away — not like that from the start; they think this section should be removed

Quote: “The color is not white.” “The whole section is fading away.” “From the start, it was not like that.”

## How the files join (required)

Shared object class: the homepage **Zero commissions / Zero bias** full-screen block. Shared defect class: **the scroll reveal leaves a broken-looking mid-state** (two bare zeros, missing words, color gone).

1929-04 and 1951-01 are the same complaint continued across the silent 1950 clip. 2000-02 is the same block’s fade on a later pass (they also talked about cutting thin slides in a different theme). Wording of “commissions” / “bias” is a different theme.

## Related discussion (not the theme itself)

- They then read the finished lines; whether “commissions” is the right word is not this theme.
- Opening “Just give me 9 minutes.” is session setup.
- “Or if there is nothing to show, you can explore” is their fallback if a sequential reveal has no next beat.
- Praise of font / color guide / spacing just before the fade is not approval of the fade.
- “Remove this section” here is the fading Zero block, not yet Built around you.

## Chronology across recordings

- `wb-rec-260815-1929` / issue-04 — first scroll-in: two zeros, felt broken; proposed staged reveal; clicked first Zero.
- `wb-rec-260815-1950` — same two-zero visual, no speech (empty contributor for speech; 1951 continues from it).
- `wb-rec-260815-1951` / issue-01 — both zeros visible on scroll; don’t know if the site is broken; want one Zero at a time.
- `wb-rec-260815-2000` / issue-02 — color gone; whole section fading; not like that from the start; think this section should be removed.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros.md` — pinpoint (two bare zeros); standalone speech; quotes on two zeros / website broken. `supports_theme`
- `wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken.md` — pinpoint (both zeros at once); continues from 1950; quotes on both zeroes / broken or not. `supports_theme` `continuation_link`
- `wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade.md` — pinpoint (fade / color gone); standalone; quotes on fading away. `supports_theme`

## JSON

```json
{
  "theme_id": "theme-03-zero-block-scroll-looks-broken",
  "theme_title": "Zero block on scroll looks broken",
  "pinpoint": "On the homepage Zero commissions / Zero bias block, scrolling first shows two bare zeros (and later the section’s color fades away), so the block looks broken until the rest of the heading appears.",
  "thread_count": 2,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros.md",
    "wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken.md",
    "wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade.md"
  ],
  "folders": ["wb-rec-260815-1929", "wb-rec-260815-1951", "wb-rec-260815-2000"],
  "pages": ["http://localhost:8765/"],
  "threads": [
    {"title": "Two bare zeros on scroll look broken", "issue_files": ["wb-rec-260815-1929/issue-04-zero-scroll-shows-two-bare-zeros.md", "wb-rec-260815-1951/issue-01-both-zeros-visible-on-scroll-looks-broken.md"], "continuation": "1929-04 standalone speech; 1951-01 continues from 1950"},
    {"title": "The Zero story section fades on scroll", "issue_files": ["wb-rec-260815-2000/issue-02-homepage-story-section-scroll-fade.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
