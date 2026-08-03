# Definition of done (every site change)

Before you say a change is finished:

1. `npm run build:site` (or the relevant subset) completed with no errors
2. `npm run lint:responsive` and `npm test` pass (plus responsive tests for touched interactive pages)
3. Previewed on http://localhost:8765/ — phone-width and desktop
4. Checked Support flyout phone/email still correct
5. Opened one Guide page — localnav, sticky/scroll behaviour, one off-site ↗ link OK
6. If you touched Apply / calculators / explore / APF — smoked the same flows (submit/validate/filter) as before
7. No new links to education-loan / compare / faq legacy routes on redesigned pages
8. If words changed: edited the markdown/etc master, not hand-patched generated HTML
9. You (human) confirmed the site **looks the same, works the same, and keeps the same special-case behaviours** unless you explicitly requested a change
