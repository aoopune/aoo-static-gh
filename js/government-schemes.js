(function () {
  'use strict';

  var DEFAULT_GOV_KEYS = ['Scheme name', 'Purpose', 'Gist', 'Lending Bank', 'Sanctioned Loan amount', 'How to avail the subsidy'];

  function getVisibleKeys(keys, config) {
    var cfg = config || {};
    var fromConfig = keys.filter(function (k) {
      var key = 'gov_schemes.column.' + k + '.visible';
      var val = cfg[key];
      return val === true || val === 'true' || val === '1' || (typeof val === 'string' && val.toLowerCase() === 'true');
    });
    if (fromConfig.length > 0) return fromConfig;
    var defaultFiltered = DEFAULT_GOV_KEYS.filter(function (k) { return keys.indexOf(k) !== -1; });
    return defaultFiltered.length > 0 ? defaultFiltered : keys.slice(0, 6);
  }

  Promise.all([
    window.fetchSheet('Government_Schemes'),
    window.getConfig ? window.getConfig() : Promise.resolve({})
  ]).then(function (results) {
    var rows = results[0] || [];
    var config = results[1] || {};
    var container = document.getElementById('gov-container');
    if (!rows || rows.length === 0) {
      container.innerHTML = '<p class="text-secondary">No schemes available.</p>';
      return;
    }
    function esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
    var allKeys = Object.keys(rows[0] || {});
    var visibleKeys = getVisibleKeys(allKeys, config);
    var html = '';
    rows.forEach(function (r) {
      html += '<div class="card mb-2">';
      visibleKeys.forEach(function (key) {
        var v = r[key];
        if (v == null || v === '' || key === 'B') return;
        html += '<p><strong>' + esc(key) + '</strong>: ' + esc(String(v).slice(0, 500)) + '</p>';
      });
      html += '</div>';
    });
    container.innerHTML = html;
  }).catch(function () {
    document.getElementById('gov-container').innerHTML = '<p class="text-secondary">Data temporarily unavailable. Please try again.</p><button type="button" class="btn btn-primary" onclick="location.reload()">Retry</button>';
  });
})();
