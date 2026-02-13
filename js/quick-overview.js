(function () {
  'use strict';

  var container = document.getElementById('overview-container');
  function render(rows) {
    if (!rows || rows.length === 0) {
      container.innerHTML = '<p class="text-secondary">No content available.</p>';
      return;
    }
    function esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
    function contentToParagraphs(text) {
      if (!text || !String(text).trim()) return '';
      var s = String(text).trim();
      var parts = s.split(/\n+/);
      var out = '';
      parts.forEach(function (p) {
        var t = p.trim();
        if (t) out += '<p class="overview-para">' + esc(t) + '</p>';
      });
      return out || ('<p class="overview-para">' + esc(s) + '</p>');
    }
    function get(r, key) {
      var lower = key.toLowerCase();
      var k = Object.keys(r || {}).find(function (x) { return x.toLowerCase() === lower; });
      return k ? r[k] : (r[key] || '');
    }
    rows.sort(function (a, b) {
      var na = parseInt(get(a, 'sort_order'), 10) || 0;
      var nb = parseInt(get(b, 'sort_order'), 10) || 0;
      return na - nb;
    });
    var html = '';
    rows.forEach(function (r) {
      var sectionTitle = get(r, 'section');
      var subtitle = get(r, 'subtitle');
      var content = get(r, 'content');
      html += '<section class="overview-section">';
      if (sectionTitle) html += '<h2 class="overview-section-title">' + esc(sectionTitle) + '</h2>';
      if (subtitle) html += '<p class="overview-subtitle">' + esc(subtitle) + '</p>';
      if (content) html += '<div class="card overview-section-card">' + contentToParagraphs(content) + '</div>';
      html += '</section>';
    });
    container.innerHTML = html;
  }
  function showError() {
    container.innerHTML = '<p class="text-secondary">Data temporarily unavailable. Please try again.</p><button type="button" class="btn btn-primary" onclick="location.reload()">Retry</button>';
  }
  // Try Quick_Overview first (underscore), then Quick Overview (space) – tab name in Sheets may be either
  window.fetchSheet('Quick_Overview').then(render).catch(function () {
    window.fetchSheet('Quick Overview', false).then(render).catch(showError);
  });
})();
