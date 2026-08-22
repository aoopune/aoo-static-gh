# Letter-spacing normalization evidence

## What we did

Every `letter-spacing` declaration on the live website that was **not** already `normal` was set to **`normal`.

| Metric | Count |
|--------|------:|
| Files changed | 29 |
| Declarations changed | 343 |
| Already `normal` (left alone) | 68 |
| Non-`normal` remaining after (excl. archives) | 0 |
| All `letter-spacing` now `normal` | 411 |

**Skipped on purpose:** `super-review-1/` (old review archives, not the live site).

**JS note:** `src/home-loan-compare.js` only copies computed `letterSpacing` onto measurement probes — it does not set a custom spacing value.

## Before values (what was removed)

| Old value | Times changed to `normal` |
|-----------|--------------------------:|
| `-0.01em` | 103 |
| `-0.015em` | 32 |
| `-0.02em` | 31 |
| `0.01em` | 20 |
| `-0.03em` | 19 |
| `-0.025em` | 11 |
| `-0.016em` | 11 |
| `0.06em` | 10 |
| `inherit` | 9 |
| `0` | 8 |
| `0.02em` | 8 |
| `-0.022em` | 8 |
| `0.08em` | 8 |
| `0.004em` | 7 |
| `0.009em` | 7 |
| `0.011em` | 7 |
| `-0.035em` | 7 |
| `0.04em` | 6 |
| `-0.04em` | 5 |
| `0.012em` | 4 |
| `0.05em` | 4 |
| `-0.08px` | 4 |
| `-0.012em` | 3 |
| `-0.005em` | 3 |
| `0.03em` | 3 |
| `-0.028em` | 2 |
| `-0.026em` | 1 |
| `-0.045em` | 1 |
| `-0.014em` | 1 |

## Per-file evidence

### `content/_golden/index.html.html` — 6 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 254 | `.home-lead-line` | `0.004em` | `normal` |
| 299 | `.home-lead-line` | `0.009em` | `normal` |
| 315 | `.home-lead-line` | `0.011em` | `normal` |
| 401 | `.home-browse-line` | `0.004em` | `normal` |
| 413 | `.home-browse-line` | `0.009em` | `normal` |
| 421 | `.home-browse-line` | `0.011em` | `normal` |

### `css/project-approvals.css` — 6 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 57 | `.apf-title` | `-0.035em` | `normal` |
| 68 | `.apf-hero-lead` | `-0.01em` | `normal` |
| 77 | `.apf-section-title` | `-0.03em` | `normal` |
| 99 | `.apf-search-title` | `-0.025em` | `normal` |
| 257 | `.apf-result-section .apf-section-title` | `0.08em` | `normal` |
| 322 | `.apf-table th` | `0.06em` | `normal` |

### `css/shroffin-about.css` — 1 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 77 | `.about-page-title` | `0.01em` | `normal` |

### `css/shroffin-apply.css` — 27 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 69 | `.hl-apply-review-back` | `-0.01em` | `normal` |
| 322 | `.hl-apply--contact .hl-apply-recap` | `-0.03em` | `normal` |
| 529 | `.hl-apply-title` | `-0.04em` | `normal` |
| 660 | `.hl-apply-disclose` | `-0.01em` | `normal` |
| 756 | `.hl-apply-section-title` | `-0.02em` | `normal` |
| 766 | `.hl-apply--review .hl-apply-bag .hl-apply-section-title` | `-0.03em` | `normal` |
| 893 | `.hl-apply--review .hl-apply-context .hl-apply-facts dd` | `-0.015em` | `normal` |
| 907 | `.hl-apply-facts--primary .hl-apply-fact-value` | `-0.015em` | `normal` |
| 934 | `.hl-apply-context .hl-apply-facts dd` | `-0.015em` | `normal` |
| 954 | `.hl-apply-fact-value` | `-0.015em` | `normal` |
| 963 | `.hl-apply-context-heading` | `0.02em` | `normal` |
| 1000 | `.hl-apply-facts dd` | `-0.015em` | `normal` |
| 1031 | `.hl-apply--review .hl-apply-bag-meta` | `-0.03em` | `normal` |
| 1147 | `.hl-apply-bank-name` | `-0.02em` | `normal` |
| 1164 | `.hl-apply-bank-remove` | `0` | `normal` |
| 1230 | `.hl-apply--review .hl-apply-facts--bank dd` | `-0.015em` | `normal` |
| 1276 | `.hl-apply--review .hl-apply-context .hl-apply-facts dd` | `-0.015em` | `normal` |
| 1319 | `.hl-apply-facts--primary .hl-apply-fact-value` | `-0.015em` | `normal` |
| 1346 | `.hl-apply-context .hl-apply-facts dd` | `-0.015em` | `normal` |
| 1359 | `.hl-apply-form-heading` | `-0.02em` | `normal` |
| 1389 | `.hl-apply-field label` | `-0.02em` | `normal` |
| 1476 | `.hl-apply-phone-prefix` | `-0.01em` | `normal` |
| 1511 | `.hl-apply-field--phone input` | `0.01em` | `normal` |
| 1740 | `.hl-apply-submit-notice-title` | `0.01em` | `normal` |
| 1857 | `.hl-apply-success-panel .hl-apply-success-title` | `-0.025em` | `normal` |
| 1911 | `.hl-apply-success-panel .hl-apply-success-ref-label` | `0.02em` | `normal` |
| 1919 | `.hl-apply-success-panel .hl-apply-success-ref-value` | `0.04em` | `normal` |

### `css/shroffin-calculators.css` — 27 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 93 | `.calc-hero-kicker` | `0.08em` | `normal` |
| 102 | `.calc-hero-title` | `-0.035em` | `normal` |
| 209 | `.calc-hub-eyebrow` | `-0.01em` | `normal` |
| 220 | `.calc-hub-name` | `-0.03em` | `normal` |
| 238 | `.calc-hub-lead` | `-0.01em` | `normal` |
| 247 | `.calc-hub-desc` | `-0.005em` | `normal` |
| 384 | `.calc-live-dock-num` | `-0.035em` | `normal` |
| 405 | `.calc-live-dock-go` | `-0.01em` | `normal` |
| 428 | `.calc-readout-title` | `0.06em` | `normal` |
| 456 | `.calc-label` | `-0.015em` | `normal` |
| 480 | `.calc-prefix` | `-0.02em` | `normal` |
| 491 | `.calc-select` | `-0.025em` | `normal` |
| 593 | `.calc-result-num` | `-0.04em` | `normal` |
| 631 | `.calc-stats strong` | `-0.015em` | `normal` |
| 652 | `.calc-assumptions-title` | `-0.02em` | `normal` |
| 673 | `.calc-formula-title` | `0.06em` | `normal` |
| 682 | `.calc-formula-eq` | `-0.02em` | `normal` |
| 757 | `.calc-amort-toggle` | `-0.01em` | `normal` |
| 842 | `.calc-amort-title` | `-0.02em` | `normal` |
| 895 | `.calc-table th` | `0.04em` | `normal` |
| 967 | `.calc-field-group-title` | `0.08em` | `normal` |
| 1087 | `.calc-choice-title` | `-0.015em` | `normal` |
| 1127 | `.calc-related-title` | `0.08em` | `normal` |
| 1149 | `.calc-related-list a` | `-0.015em` | `normal` |
| 1192 | `.calc-guide-links-title` | `0.08em` | `normal` |
| 1212 | `.calc-guide-links-list a` | `-0.015em` | `normal` |
| 1386 | `.calc-page--cast-1 .calc-result-num` | `-0.03em` | `normal` |

### `css/shroffin-editorial.css` — 72 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 78 | `.localnav-title` | `-0.01em` | `normal` |
| 258 | `.mag-title` | `-0.03em` | `normal` |
| 288 | `h2.guide-hero-lead` | `-0.015em` | `normal` |
| 391 | `.mag-index-label` | `-0.01em` | `normal` |
| 455 | `max(1rem, env(safe-area-inset-left));` | `-0.01em` | `normal` |
| 507 | `.mag-toc-compact-link` | `-0.01em` | `normal` |
| 593 | `.mag-toc-shell .mag-index-label` | `-0.01em` | `normal` |
| 1062 | `body.guide-reading .mag-index-link` | `-0.01em` | `normal` |
| 1081 | `body.guide-reading .mag-index-label` | `inherit` | `normal` |
| 1398 | `.mag-kicker` | `0.01em` | `normal` |
| 1577 | `.mag-h` | `-0.02em` | `normal` |
| 1657 | `.guide-tile-kicker` | `0.01em` | `normal` |
| 1668 | `.mag-lede` | `-0.01em` | `normal` |
| 1686 | `.guide-tile-copy.guide-tile-copy--rule` | `-0.02em` | `normal` |
| 1716 | `.guide-tile-list li` | `-0.01em` | `normal` |
| 1744 | `.guide-limit-kicker` | `0.01em` | `normal` |
| 1755 | `.mag-compare-title` | `-0.015em` | `normal` |
| 1765 | `.mag-tag` | `0` | `normal` |
| 1795 | `.guide-limit-copy` | `-0.01em` | `normal` |
| 1825 | `.mag-def-term` | `-0.01em` | `normal` |
| 1835 | `.mag-def-desc` | `-0.01em` | `normal` |
| 1900 | `.guide-share-list--plain li` | `-0.01em` | `normal` |
| 1924 | `.guide-glance` | `-0.01em` | `normal` |
| 1941 | `.guide-tip` | `-0.01em` | `normal` |
| 2048 | `.mag-note` | `-0.01em` | `normal` |
| 2057 | `.guide-callout .guide-share-then` | `inherit` | `normal` |
| 2094 | `.mag-subhead` | `0.01em` | `normal` |
| 2120 | `.mag-doc-name` | `-0.015em` | `normal` |
| 2137 | `.mag-doc-note` | `-0.01em` | `normal` |
| 2171 | `.guide-doc-table thead th` | `0.01em` | `normal` |
| 2239 | `.guide-flow li` | `-0.01em` | `normal` |
| 2605 | `.guide-flip-link` | `-0.01em` | `normal` |
| 2941 | `.guide-calc-submit` | `-0.01em` | `normal` |
| 2990 | `.guide-calc-result-num` | `-0.03em` | `normal` |
| 3050 | `.guide-fee-heading` | `0.01em` | `normal` |
| 3114 | `.guide-fee-detail` | `-0.01em` | `normal` |
| 3126 | `.guide-fee-name` | `-0.01em` | `normal` |
| 3143 | `.guide-fee-value` | `-0.01em` | `normal` |
| 3195 | `.guide-seg-btn` | `-0.01em` | `normal` |
| 3366 | `.guide-answer-label` | `-0.01em` | `normal` |
| 3376 | `.guide-answer-prefix` | `-0.01em` | `normal` |
| 3385 | `.guide-answer-num` | `-0.03em` | `normal` |
| 3395 | `.guide-answer-num--phrase` | `-0.022em` | `normal` |
| 3411 | `.guide-answer-unit` | `-0.01em` | `normal` |
| 3620 | `.guide-answer-pair > .guide-answer + .guide-answer .guide-answer-num--phrase` | `-0.015em` | `normal` |
| 3766 | `.guide-disclosure summary` | `-0.015em` | `normal` |
| 3853 | `.guide-source-caption` | `0.01em` | `normal` |
| 3872 | `.guide-source-quote` | `-0.01em` | `normal` |
| 3905 | `.guide-climb-label` | `-0.015em` | `normal` |
| 3928 | `.guide-tile-note` | `-0.01em` | `normal` |
| 3974 | `.guide-compare-body` | `-0.01em` | `normal` |
| 3983 | `.guide-compare-shared` | `-0.01em` | `normal` |
| 4016 | `.guide-teach-to` | `-0.01em` | `normal` |
| 4034 | `.guide-teach-to-label` | `0.02em` | `normal` |
| 4065 | `.guide-teach-caption` | `-0.01em` | `normal` |
| 4093 | `.guide-teach-note` | `-0.01em` | `normal` |
| 4431 | `.mag-pair .guide-tile-title` | `-0.025em` | `normal` |
| 4445 | `.guide-climb-label` | `-0.012em` | `normal` |
| 4820 | `body.guide-reading .mag-toc-shell .mag-index-link` | `-0.01em` | `normal` |
| 4846 | `body.guide-reading .mag-toc-shell .mag-index-label` | `inherit` | `normal` |
| 5074 | `body.guide-reading .mag-index-link` | `-0.01em` | `normal` |
| 5097 | `body.guide-reading .mag-index-label` | `inherit` | `normal` |
| 5657 | `#bank-rates .guide-perk .guide-share-when` | `-0.01em` | `normal` |
| 5666 | `#bank-rates .guide-perk .guide-share-then` | `-0.01em` | `normal` |
| 5749 | `.guide-story--insurance-hub .guide-status .guide-share-when` | `-0.01em` | `normal` |
| 5758 | `.guide-story--insurance-hub .guide-status .guide-share-then` | `-0.01em` | `normal` |
| 5813 | `.guide-story--property-cover #pay .guide-share-when` | `-0.01em` | `normal` |
| 5821 | `.guide-story--property-cover #pay .guide-share-then` | `-0.01em` | `normal` |
| 5884 | `.guide-story--complaints .guide-perk .guide-share-when` | `-0.01em` | `normal` |
| 5894 | `.guide-story--complaints .guide-perk .guide-share-then` | `-0.01em` | `normal` |
| 5928 | `.guide-story--complaints #talk-flip .guide-flip-face--front .guide-share-when` | `-0.01em` | `normal` |
| 5936 | `.guide-story--complaints #talk-flip .guide-flip-face--front .guide-share-then` | `-0.01em` | `normal` |

### `css/shroffin-explore-banks.css` — 55 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 92 | `.hlc-title` | `-0.035em` | `normal` |
| 124 | `.hlc-lead` | `-0.015em` | `normal` |
| 148 | `.hlc-section-title` | `-0.025em` | `normal` |
| 791 | `.hlc-coapplicant-copy` | `-0.015em` | `normal` |
| 814 | `.hlc-coapplicant-action` | `-0.015em` | `normal` |
| 909 | `.hlc-income-basis-note` | `-0.01em` | `normal` |
| 961 | `.hlc-coapplicant-add` | `-0.015em` | `normal` |
| 1342 | `.hlc-segmented .hlc-chip` | `-0.01em` | `normal` |
| 1376 | `.hlc-chip-note` | `-0.01em` | `normal` |
| 1426 | `.hlc-field-note` | `-0.01em` | `normal` |
| 1474 | `.explore-banks-page .hlc-inputs-card .hlc-field-note.hlc-field-note--card-load .hlc-inline-pct-selec` | `inherit` | `normal` |
| 2410 | `.hlc-field .hlc-inline-pct-select` | `inherit` | `normal` |
| 2698 | `.hlc-searching-title` | `-0.03em` | `normal` |
| 2941 | `.hlc-filters-title` | `-0.025em` | `normal` |
| 3250 | `.hlc-filters-toggle-label` | `-0.01em` | `normal` |
| 3294 | `.hlc-filters-badge` | `-0.02em` | `normal` |
| 3543 | `.hlc-select-hint` | `-0.015em` | `normal` |
| 3749 | `.hlc-prepay-header-select` | `-0.005em` | `normal` |
| 3806 | `.hlc-freshness-note` | `-0.01em` | `normal` |
| 3828 | `.hlc-charges-note-heading` | `-0.01em` | `normal` |
| 3851 | `.hlc-charges-note-toggle-all` | `-0.01em` | `normal` |
| 3921 | `.hlc-charges-note-label` | `-0.01em` | `normal` |
| 3928 | `.hlc-charges-note-markers` | `0.02em` | `normal` |
| 4141 | `.hlc-compare` | `-0.01em` | `normal` |
| 4316 | `.hlc-compare th` | `-0.01em` | `normal` |
| 4601 | `.hlc-charge-rule-subnote` | `-0.005em` | `normal` |
| 4706 | `.hlc-charge-amount` | `inherit` | `normal` |
| 4795 | `.hlc-rank-pill` | `0.01em` | `normal` |
| 5020 | `.hlc-bank-name` | `-0.02em` | `normal` |
| 5041 | `the dotted underline open details; that space should select the row. */` | `inherit` | `normal` |
| 5191 | `.hlc-show-more` | `-0.01em` | `normal` |
| 5384 | `.hlc-drawer-top h3` | `-0.03em` | `normal` |
| 5392 | `.hlc-drawer--sections .hlc-drawer-top h3` | `-0.03em` | `normal` |
| 5432 | `.hlc-drawer-actions-bar .hlc-drawer-toggle-all` | `-0.02em` | `normal` |
| 5511 | `.hlc-drawer-section h4` | `-0.02em` | `normal` |
| 5530 | `.hlc-drawer-toolbar-heading` | `-0.02em` | `normal` |
| 5553 | `.hlc-drawer-toggle-all` | `-0.01em` | `normal` |
| 5641 | `.hlc-drawer-label` | `-0.02em` | `normal` |
| 5647 | `.hlc-drawer-group--nested .hlc-drawer-label` | `-0.015em` | `normal` |
| 5761 | `.hlc-fee-table th` | `-0.02em` | `normal` |
| 5776 | `.hlc-fee-col-sub` | `-0.01em` | `normal` |
| 6028 | `.hlc-story-work-title` | `-0.02em` | `normal` |
| 6042 | `.hlc-story-result` | `-0.03em` | `normal` |
| 6413 | `.hlc-fee-flat-name` | `-0.015em` | `normal` |
| 6445 | `.hlc-fee-slab-title` | `-0.01em` | `normal` |
| 6464 | `.hlc-fee-category-title` | `-0.01em` | `normal` |
| 6486 | `.hlc-fee-charge-title` | `-0.01em` | `normal` |
| 6533 | `.hlc-fee-particular-name` | `-0.02em` | `normal` |
| 6579 | `.hlc-drawer-foot` | `-0.01em` | `normal` |
| 6599 | `.hlc-apply-count` | `-0.01em` | `normal` |
| 7004 | `.hlc-toggle-chips .hlc-chip` | `-0.01em` | `normal` |
| 7108 | `.hlc-field-help` | `0` | `normal` |
| 7205 | `.hlc-field-help-text` | `-0.01em` | `normal` |
| 7217 | `.hlc-field-help-list` | `-0.01em` | `normal` |
| 7332 | `.hlc-intel-horizon` | `0.01em` | `normal` |

### `css/shroffin-guide.css` — 2 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 310 | `.localnav-current-label` | `-0.01em` | `normal` |
| 362 | `.localnav-cta` | `-0.01em` | `normal` |

### `css/shroffin-home.css` — 3 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 45 | `.stance-title` | `-0.04em` | `normal` |
| 71 | `.stance-item-title` | `-0.028em` | `normal` |
| 81 | `.stance-item-body` | `-0.014em` | `normal` |

### `css/shroffin-product-demo.css` — 6 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 35 | `.spd-eyebrow` | `0.04em` | `normal` |
| 43 | `.spd-heading` | `-0.03em` | `normal` |
| 53 | `.spd-lede` | `-0.015em` | `normal` |
| 409 | `.spd-url` | `-0.012em` | `normal` |
| 464 | `.spd-stage--phone .spd-statusbar` | `-0.02em` | `normal` |
| 631 | `.spd-stage--phone .spd-ios-pill .spd-url` | `-0.02em` | `normal` |

### `css/shroffin-shell.css` — 20 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 338 | `.apf-label` | `0.01em` | `normal` |
| 356 | `.apf-input` | `-0.01em` | `normal` |
| 1057 | `.globalnav-compact-item` | `-0.01em` | `normal` |
| 1070 | `.globalnav-compact-item--sub` | `0` | `normal` |
| 1091 | `.globalnav-compact-item-value` | `0` | `normal` |
| 1110 | `.globalnav-compact-heading` | `0.02em` | `normal` |
| 1260 | `.site-prefooter-cta-title` | `0` | `normal` |
| 1274 | `.site-prefooter-cta-lead` | `0.012em` | `normal` |
| 1297 | `.site-prefooter-cta-title` | `-0.012em` | `normal` |
| 1304 | `.site-prefooter-cta-lead` | `0.009em` | `normal` |
| 1318 | `.site-prefooter-cta-title` | `-0.015em` | `normal` |
| 1325 | `.site-prefooter-cta-lead` | `0` | `normal` |
| 1334 | `.site-prefooter-cta-lead` | `0.012em` | `normal` |
| 1375 | `.site-help-strip-text` | `-0.01em` | `normal` |
| 1502 | `.site-footer` | `-0.01em` | `normal` |
| 1576 | `.site-footer-heading` | `-0.01em` | `normal` |
| 1600 | `.site-footer-list a` | `-0.01em` | `normal` |
| 1666 | `.site-footer-accordion-toggle` | `inherit` | `normal` |
| 1774 | `.site-footer-disclaimer-title` | `-0.01em` | `normal` |
| 1955 | `.site-footer-official-links a` | `-0.01em` | `normal` |

### `css/shroffin-utility-pages.css` — 5 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 71 | `.utility-page .legal-hero h1` | `-0.015em` | `normal` |
| 110 | `.utility-page .toc h2` | `0.01em` | `normal` |
| 151 | `.utility-page main section > h2` | `-0.01em` | `normal` |
| 235 | `.utility-page .sitemap-title` | `-0.045em` | `normal` |
| 262 | `.utility-page .sitemap-group h2` | `-0.015em` | `normal` |

### `css/style.css` — 17 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 128 | `.site-logo` | `-0.02em` | `normal` |
| 259 | `main h1` | `-0.025em` | `normal` |
| 268 | `main h2` | `-0.02em` | `normal` |
| 576 | `.home-heading` | `-0.03em` | `normal` |
| 851 | `.data-table th` | `0.01em` | `normal` |
| 1031 | `.result-card-label` | `0.02em` | `normal` |
| 1230 | `.about-mission` | `-0.01em` | `normal` |
| 1547 | `.doc-item-mandatory` | `0.02em` | `normal` |
| 2232 | `.ins-eyebrow` | `0.04em` | `normal` |
| 2249 | `.ins-hero h1` | `-0.035em` | `normal` |
| 2258 | `.ins-sub` | `-0.015em` | `normal` |
| 2273 | `.ins-h2` | `-0.025em` | `normal` |
| 2304 | `.ins-pair-q` | `0.02em` | `normal` |
| 2312 | `.ins-pair-a` | `-0.02em` | `normal` |
| 2348 | `.ins-path-label` | `-0.025em` | `normal` |
| 2385 | `.ins-point-title` | `-0.02em` | `normal` |
| 2418 | `.ins-rows li > span:first-child` | `-0.01em` | `normal` |

### `education-loan.html` — 1 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 57 | `.home-heading` | `-0.03em` | `normal` |

### `index.html` — 9 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 254 | `.home-lead-line` | `0.004em` | `normal` |
| 299 | `.home-lead-line` | `0.009em` | `normal` |
| 315 | `.home-lead-line` | `0.011em` | `normal` |
| 398 | `.home-browse-inner` | `-0.026em` | `normal` |
| 761 | `.home-apply-display` | `-0.028em` | `normal` |
| 783 | `.home-apply-body` | `-0.01em` | `normal` |
| 873 | `.hapl-source-label` | `0.01em` | `normal` |
| 934 | `.hapl-bank-name` | `0.01em` | `normal` |
| 942 | `.hapl-bank-rate` | `0.01em` | `normal` |

### `js/aoo-loan-table-standalone.js` — 9 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 174 | `SCOPE_CSS (embedded)` | `-0.03em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.01em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.06em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.05em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.03em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.03em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.08em` | `normal` |
| 174 | `SCOPE_CSS (embedded)` | `0.08em` | `normal` |

### `pages/_explore-banks-title-samples.html` — 2 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 67 | `.rule` | `0.08em` | `normal` |
| 82 | `.title` | `-0.035em` | `normal` |

### `pages/_guide-accent-samples-b-fresh.html` — 2 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 73 | `.sample-block-label` | `0.06em` | `normal` |
| 82 | `.sample-block-title` | `-0.02em` | `normal` |

### `pages/_guide-accent-samples-b-gradient-checked.html` — 3 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 84 | `.sample-block-label` | `0.06em` | `normal` |
| 93 | `.sample-block-title` | `-0.02em` | `normal` |
| 300 | `.sample-ref-title` | `-0.03em` | `normal` |

### `pages/_guide-accent-samples-b-soft.html` — 2 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 77 | `.sample-block-label` | `0.06em` | `normal` |
| 86 | `.sample-block-title` | `-0.02em` | `normal` |

### `pages/_guide-accent-samples.html` — 2 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 87 | `.sample-block-label` | `0.06em` | `normal` |
| 96 | `.sample-block-title` | `-0.02em` | `normal` |

### `pages/_hlc-apple-inputs-demo.html` — 20 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 53 | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display" "Helvetica Neue", Helvetica, Aria` | `-0.022em` | `normal` |
| 62 | `.demo-note` | `-0.01em` | `normal` |
| 91 | `.page-title` | `0.004em` | `normal` |
| 150 | `.form-row-about` | `-0.08px` | `normal` |
| 158 | `.form-row-about` | `-0.016em` | `normal` |
| 282 | `.field-label` | `-0.08px` | `normal` |
| 291 | `.field-label` | `-0.016em` | `normal` |
| 356 | `0 0 0 0.5px rgba(0, 0, 0, 0.08) 0 10px 30px rgba(0, 0, 0, 0.14);` | `-0.08px` | `normal` |
| 409 | `.suffix` | `-0.022em` | `normal` |
| 426 | `.shell select` | `-0.022em` | `normal` |
| 449 | `.form-row--hero .shell input` | `0.011em` | `normal` |
| 490 | `.field-note` | `-0.01em` | `normal` |
| 511 | `.inline-pct` | `-0.01em` | `normal` |
| 540 | `.co-copy` | `-0.016em` | `normal` |
| 548 | `.co-copy` | `-0.016em` | `normal` |
| 581 | `.btn--add` | `-0.016em` | `normal` |
| 616 | `.btn--compare` | `-0.022em` | `normal` |
| 653 | `.co-card-title` | `-0.01em` | `normal` |
| 706 | `.intel` | `-0.08px` | `normal` |
| 716 | `.status` | `-0.01em` | `normal` |

### `pages/_hlc-intelligence-ui-demo.html` — 19 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 43 | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display" "Helvetica Neue", Helvetica, Aria` | `-0.022em` | `normal` |
| 64 | `.demo-note` | `-0.016em` | `normal` |
| 79 | `.demo-toolbar button` | `-0.01em` | `normal` |
| 143 | `.fake-form-label` | `-0.01em` | `normal` |
| 166 | `.fake-field` | `0.011em` | `normal` |
| 174 | `.fake-field` | `0.012em` | `normal` |
| 183 | `.fake-field span` | `-0.01em` | `normal` |
| 192 | `.fake-compare` | `-0.022em` | `normal` |
| 240 | `.hlc-intel-eyebrow` | `-0.01em` | `normal` |
| 249 | `.hlc-intel-status` | `0.004em` | `normal` |
| 265 | `.hlc-intel-status` | `0.009em` | `normal` |
| 273 | `.hlc-intel-meta` | `-0.016em` | `normal` |
| 308 | `.hlc-intel-provenance` | `-0.016em` | `normal` |
| 414 | `.hlc-intel-horizon` | `-0.01em` | `normal` |
| 424 | `.hlc-intel-heading` | `0.012em` | `normal` |
| 432 | `.hlc-intel-heading` | `-0.022em` | `normal` |
| 441 | `.hlc-intel-body` | `-0.016em` | `normal` |
| 470 | `.fake-results-tools` | `-0.016em` | `normal` |
| 483 | `.fake-table` | `-0.016em` | `normal` |

### `pages/_product-demo-frame-mobile.html` — 1 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 99 | `.hlc-title` | `-0.04em` | `normal` |

### `pages/_product-demo-frame.html` — 1 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 78 | `.hlc-title` | `-0.04em` | `normal` |

### `prototypes/home-loan-compare-preview.html` — 17 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 49 | `.banner` | `-0.01em` | `normal` |
| 81 | `.eyebrow` | `0.06em` | `normal` |
| 89 | `.hero h1` | `-0.035em` | `normal` |
| 135 | `.block-head h2` | `-0.025em` | `normal` |
| 169 | `label.field` | `0.04em` | `normal` |
| 179 | `label.field select` | `-0.01em` | `normal` |
| 299 | `table.compare` | `-0.01em` | `normal` |
| 319 | `table.compare th` | `0.05em` | `normal` |
| 390 | `.bank-mark` | `-0.02em` | `normal` |
| 395 | `.bank-name` | `-0.02em` | `normal` |
| 512 | `.drawer-top h3` | `-0.025em` | `normal` |
| 548 | `.drawer-section h4` | `0.06em` | `normal` |
| 592 | `.apply-bar .count` | `-0.01em` | `normal` |
| 664 | `.card-rate` | `-0.03em` | `normal` |
| 704 | `.diff-table th` | `0.05em` | `normal` |
| 759 | `.spec-table th` | `0.05em` | `normal` |
| 771 | `.tag` | `0.03em` | `normal` |

### `table-embed.html` — 1 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 219 | `#loan-table-root .aoo-loan-table-wrap .form-row .field label` | `0.01em` | `normal` |

### `templates/layouts/home.html` — 6 change(s)

| Line | Selector (approx) | Before | After |
|-----:|-------------------|--------|-------|
| 254 | `.home-lead-line` | `0.004em` | `normal` |
| 299 | `.home-lead-line` | `0.009em` | `normal` |
| 315 | `.home-lead-line` | `0.011em` | `normal` |
| 401 | `.home-browse-line` | `0.004em` | `normal` |
| 413 | `.home-browse-line` | `0.009em` | `normal` |
| 421 | `.home-browse-line` | `0.011em` | `normal` |
