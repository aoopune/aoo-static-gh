# About page – data source (obsolete)

**Status:** The live About page at **http://localhost:8765/pages/about.html** is **static HTML**. It no longer loads from Google Sheets.

Content is authored in `pages/about.html`. Styles: `css/shroffin-about.css`. Behaviour: `js/shroffin-about.js`.

The former sheet loader `js/about.js` and the **About_Us** tab are **not used** by the live page.

---

## Historical reference only

Previously the page fetched the **About_Us** tab from:

[ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit)

Meanings from that sheet (why we started / how we do it) and from `docs/brand/brief.md` were rewritten into the static page for **home loan / shroffin.com**. Do not reconnect the sheet without an explicit product decision.
