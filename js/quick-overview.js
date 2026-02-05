(function () {
  'use strict';

  window.fetchSheet('Quick_Overview').then(function (rows) {
    var container = document.getElementById('overview-container');
    if (!rows || rows.length === 0) {
      container.innerHTML = '<p class="text-secondary">No content available.</p>';
      return;
    }
    function esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
    rows.sort(function (a, b) {
      var na = parseInt(a.sort_order, 10) || 0;
      var nb = parseInt(b.sort_order, 10) || 0;
      return na - nb;
    });
    var html = '';
    rows.forEach(function (r) {
      if (r.section) html += '<h2>' + esc(r.section) + '</h2>';
      if (r.content) html += '<div class="card mb-2">' + esc(r.content) + '</div>';
    });
    container.innerHTML = html;
  }).catch(function () {
    document.getElementById('overview-container').innerHTML = '<p class="text-secondary">Data temporarily unavailable. Please try again.</p><button type="button" class="btn btn-primary" onclick="location.reload()">Retry</button>';
  });
})();
