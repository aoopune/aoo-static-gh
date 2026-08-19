# Built around you does not show the real product

On Built around you they said the accordion is not opening: they see one line, one point per screen, and have to click to read more.
Beside it, a card repeats the same Guides steps. They called that a duplicate, cheap, not what Apple does.
They asked what is written on top versus what is actually seen.
On the dark “standardized view” block they still could not see that one-market view as a product, and they tabled extra graphics.

---
theme_id: "theme-06-built-around-you-does-not-show-the-product"
theme_title: "Built around you does not show the real product"
pinpoint: "On the homepage Built around you / standardized-view stretch, the accordion only shows one line at a time, the side card duplicates that copy instead of the real product, and the “one standardized view” claim is not shown as a product you can see."
thread_count: 3
issue_file_count: 3
issue_files:
  - "wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line.md"
  - "wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate.md"
  - "wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually.md"
folders: ["wb-rec-260815-2000", "wb-rec-260815-2009"]
pages: ["http://localhost:8765/"]
severity_as_spoken_range: ["medium", "high", "unstated"]
confidence_range: ["high"]
tags: ["interaction", "accordion", "preview", "duplicate", "product-demo", "homepage"]
---

## Exact theme

Built around you is supposed to show how the product is built around the customer. They could not **read** the points or **see** the product.

The accordion: “It is not opening up. I see one line.” “I see only one point on one screen.” They clicked rows; the panel still shows one expanded heading plus a short line. They said maybe this section should be removed, while still calling the content unique.

The right-hand card repeats the same Guides steps (or a same-layout table) instead of a real product. Quote: “It is just a duplicate.” “It is cheap. Many companies do it. I have seen it. Apple doesn't do it.” “But it is written on the top. It is not seen on the top. What is the difference?”

That unfinished “when we compare / written on top / not seen” talk continues on the dark unique-point block: the whole market sits in one standardized view, but they could not see that view as a product. They skipped the video, asked “But what is this?”, rejected a plus-button or Excel-sheet overlay as too complex, and said “Actually, let's not talk about this section.”

## Threads (members)

### Thread: Accordion shows one line / one point per screen

- issue files: `wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line.md`
- continuation: standalone
- pinpoint: Built around you accordion is not opening into a readable set; one line / one point per screen unless a single row is expanded

### Thread: Side preview is a duplicate, not the real product

- issue files: `wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate.md`
- continuation: continues into 2009
- pinpoint: the card to the right duplicates accordion copy instead of showing a real product; they called it cheap and asked what the difference is when comparing because it is written on top but not seen on top

### Thread: Standardized-view claim is not shown as a product

- issue files: `wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually.md`
- continuation: continues from 2000
- pinpoint: the dark unique-point block claims one standardized view but does not show that view as a product; extra graphics would be too complex, so they tabled the section

## How the files join (required)

Shared object class: **homepage product-demo of “built around you” / one standardized market view**. Shared defect class: **the customer cannot see or read the actual product** — one-line accordion, duplicate side card, claim without a visible view.

Accordion one-line vs side duplicate are different defects on the same section (kept as separate threads). 2009-01 continues the “written on top / not seen” compare-product thread onto the standardized-view copy. Unique-point *repetition across sections* is the story-architecture theme, not this.

## Related discussion (not the theme itself)

- ASR “Remove the voice chat and fit it” joined to this accordion, not a missing chat product.
- Removal talk is related; the defect is the one-line accordion.
- Apple vs “many companies” as the taste test for the dual-column preview.
- “We should put it here and it will scroll” — moving content rather than keeping a side duplicate.
- Analogized how a product looks when it is given at the start; already watching the video so they should not have to tell the one-view line; do not want to be scammed; paid more attention to wording than graphics.
- Later mapped accordion “Every bank's home loan in the same layout” back to this standardized-view point (story-duplication theme).

## Chronology across recordings

- `wb-rec-260815-2000` / issue-03 — accordion not opening; one line; maybe remove section.
- `wb-rec-260815-2000` / issue-04 — side card is a duplicate; cheap; written on top not seen; continues into 2009.
- `wb-rec-260815-2009` / issue-01 — standardized view not shown as a product; plus/Excel too complex; table the section.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line.md` — pinpoint (one line / not opening); standalone; quotes. `supports_theme` `related_discussion`
- `wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate.md` — pinpoint (duplicate preview); continues into 2009; quotes on duplicate / Apple. `supports_theme` `continuation_link` `related_discussion`
- `wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually.md` — pinpoint (claim not shown as product); from 2000; quotes on what is this / too complex / don't talk about this section. `supports_theme` `continuation_link`

## JSON

```json
{
  "theme_id": "theme-06-built-around-you-does-not-show-the-product",
  "theme_title": "Built around you does not show the real product",
  "pinpoint": "On the homepage Built around you / standardized-view stretch, the accordion only shows one line at a time, the side card duplicates that copy instead of the real product, and the “one standardized view” claim is not shown as a product you can see.",
  "thread_count": 3,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line.md",
    "wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate.md",
    "wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually.md"
  ],
  "folders": ["wb-rec-260815-2000", "wb-rec-260815-2009"],
  "pages": ["http://localhost:8765/"],
  "threads": [
    {"title": "Accordion shows one line / one point per screen", "issue_files": ["wb-rec-260815-2000/issue-03-built-around-you-accordion-one-line.md"], "continuation": "standalone"},
    {"title": "Side preview is a duplicate, not the real product", "issue_files": ["wb-rec-260815-2000/issue-04-built-around-you-side-preview-duplicate.md"], "continuation": "continues_into_2009"},
    {"title": "Standardized-view claim is not shown as a product", "issue_files": ["wb-rec-260815-2009/issue-01-standardized-view-product-not-shown-visually.md"], "continuation": "continues_from_2000"}
  ],
  "related_discussion_present": true
}
```
