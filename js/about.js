(function () {
  'use strict';

  window.fetchSheet('About_Us').then(function (rows) {
    var container = document.getElementById('about-container');
    if (!rows || rows.length === 0) {
      container.innerHTML = '<p>Our mission is to help people understand and use banking effortlessly.</p>';
      return;
    }
    function esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
    var html = '';
    rows.forEach(function (r) {
      if (r.heading) html += '<h2>' + esc(r.heading) + '</h2>';
      if (r.content) html += '<div class="card mb-2">' + esc(r.content) + '</div>';
    });
    container.innerHTML = html || '<p>Our mission is to help people understand and use banking effortlessly.</p>';
  }).catch(function () {
    document.getElementById('about-container').innerHTML = '<p>Our mission is to help people understand and use banking effortlessly.</p><p class="text-secondary">Data temporarily unavailable.</p>';
  });
})();
