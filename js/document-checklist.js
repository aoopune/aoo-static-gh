(function () {
  'use strict';

  window.fetchSheet('Document_Checklist').then(function (rows) {
    var container = document.getElementById('doc-container');
    if (!rows || rows.length === 0) {
      container.innerHTML = '<p class="text-secondary">No document list available.</p>';
      return;
    }
    function esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
    function get(r, key) {
      var k = key.toLowerCase();
      var v = r[key] != null ? r[key] : r[k];
      if (v != null) return String(v).trim();
      var keys = Object.keys(r);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].toLowerCase() === k) return String(r[keys[i]]).trim();
      }
      return '';
    }
    var byCat = {};
    rows.forEach(function (r) {
      var cat = get(r, 'category') || get(r, 'Category') || 'Other';
      var sub = get(r, 'subcategory') || get(r, 'Subcategory') || '';
      var item = get(r, 'item') || get(r, 'Item') || '';
      var mand = get(r, 'mandatory') || get(r, 'Mandatory') || '';
      if (!byCat[cat]) byCat[cat] = {};
      if (!byCat[cat][sub]) byCat[cat][sub] = [];
      byCat[cat][sub].push({ item: item, mandatory: mand });
    });
    var html = '<div class="doc-accordion-list" data-testid="doc-accordion-list">';
    Object.keys(byCat).sort().forEach(function (cat) {
      html += '<section class="doc-section">';
      html += '<h2 class="doc-section-header">' + esc(cat) + '</h2>';
      var subcats = Object.keys(byCat[cat]).filter(Boolean).sort();
      if (subcats.length === 0) subcats = [''];
      subcats.forEach(function (sub) {
        var entries = byCat[cat][sub];
        html += '<details class="doc-accordion" data-testid="doc-accordion">';
        html += '<summary class="doc-accordion-summary">' + esc(sub || 'Documents') + '</summary>';
        html += '<div class="doc-accordion-content"><ul class="doc-item-list">';
        entries.forEach(function (entry) {
          html += '<li class="doc-item">';
          html += '<span class="doc-item-name">' + esc(entry.item) + '</span>';
          if (entry.mandatory) html += ' <span class="doc-item-mandatory">' + esc(entry.mandatory) + '</span>';
          html += '</li>';
        });
        html += '</ul></div></details>';
      });
      html += '</section>';
    });
    html += '</div>';
    container.innerHTML = html;
  }).catch(function () {
    document.getElementById('doc-container').innerHTML = '<p class="text-secondary">Data temporarily unavailable. Please try again.</p><button type="button" class="btn btn-primary" onclick="location.reload()">Retry</button>';
  });
})();
