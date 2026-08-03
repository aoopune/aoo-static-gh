/** Normalize HTML for golden compare — keep structure/text; ignore trivial whitespace only. */
function normalizeHtml(html) {
  return html
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

module.exports = { normalizeHtml };
