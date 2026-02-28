/**
 * Apply button iframe – runs inside table-embed iframe.
 * Adds Apply button, reads selection from DOM, communicates with parent via postMessage.
 * No Supabase, Razorpay, or payment logic.
 * jsPDF is loaded on demand when user clicks Download results.
 */
(function () {
  'use strict';

  var applyButtonIframeInitialized = false;

  var JSPDF_URLS = [
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js'
  ];

  /** Load jsPDF + autotable on demand. Returns Promise that resolves when ready; rejects on load error. */
  function loadJsPdf() {
    if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) {
      return Promise.resolve();
    }
    if (window.__aooJsPdfLoadPromise) return window.__aooJsPdfLoadPromise;
    var promise = new Promise(function (resolve, reject) {
      function loadNext(i) {
        if (i >= JSPDF_URLS.length) {
          if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF) resolve();
          else reject(new Error('jsPDF did not load'));
          return;
        }
        var s = document.createElement('script');
        s.src = JSPDF_URLS[i];
        s.onload = function () { loadNext(i + 1); };
        s.onerror = function () { reject(new Error('jsPDF script failed to load')); };
        document.head.appendChild(s);
      }
      loadNext(0);
    });
    window.__aooJsPdfLoadPromise = promise;
    return promise;
  }

  function getRoot() {
    return document.querySelector('#loan-table-root');
  }

  function getWrap() {
    var root = getRoot();
    return root ? root.querySelector('.aoo-loan-table-wrap .wrap') : null;
  }

  function getTableContainer() {
    return getWrap();
  }

  function getQueryForm() {
    var root = getRoot();
    return root ? root.querySelector('#query-form') : null;
  }

  function getTableColumnKeys() {
    var root = getRoot();
    if (!root) return [];
    var thead = root.querySelector('#results-thead');
    if (!thead) return [];
    var ths = thead.querySelectorAll('th[data-column-key]');
    var keys = [];
    for (var i = 0; i < ths.length; i++) {
      var k = ths[i].getAttribute('data-column-key');
      if (k && k !== 'OfferSelect') keys.push(k);
    }
    return keys;
  }

  /** Get PDF table structure: { headers: string[], rows: string[][], columnKeys: string[] } in same order so data aligns under headers */
  function getTableDataForPdf() {
    var root = getRoot();
    if (!root) return { headers: [], rows: [], columnKeys: [] };
    var thead = root.querySelector('#results-thead');
    var tbody = root.querySelector('#results-body');
    if (!thead || !tbody) return { headers: [], rows: [], columnKeys: [] };
    var columnKeys = [];
    var headers = [];
    var ths = thead.querySelectorAll('th[data-column-key]');
    for (var i = 0; i < ths.length; i++) {
      var k = ths[i].getAttribute('data-column-key');
      if (!k || k === 'OfferSelect') continue;
      columnKeys.push(k);
      var labelEl = ths[i].querySelector('.th-head-label');
      var label = labelEl ? (labelEl.textContent || '').trim() : (ths[i].textContent || '').trim();
      headers.push(label || k);
    }
    var trs = tbody.querySelectorAll('tr');
    var rows = [];
    for (var r = 0; r < trs.length; r++) {
      var tr = trs[r];
      if (tr.querySelector('.empty')) continue;
      var row = [];
      for (var c = 0; c < columnKeys.length; c++) {
        var key = columnKeys[c];
        var td = null;
        if (key === 'Lender') {
          td = tr.querySelector('td.bank-name-cell');
        } else if (key === 'Sector') {
          td = tr.querySelector('td.sector-name-cell');
        } else {
          td = tr.querySelector('td[data-column-key="' + key + '"]');
        }
        var text = td ? (td.textContent || '').trim().replace(/\s+/g, ' ') : '';
        row.push(text);
      }
      if (row.length === columnKeys.length) rows.push(row);
    }
    return { headers: headers, rows: rows, columnKeys: columnKeys };
  }

  function pdfSafeText(s) {
    if (s == null || s === undefined) return '';
    s = String(s);
    if (typeof s.normalize === 'function') s = s.normalize('NFC');
    s = s.replace(/\uFFFD/g, '').replace(/\u20B9/g, 'Rs.').replace(/\u2014/g, '-').replace(/\u2022/g, '*');
    return s.replace(/\s+/g, ' ').trim();
  }

  /** Build and download PDF: Input data, Table, View details, Listed universities. Filename: Personalized-Education-Loan-Comparison-Report-YYYY-MM-DD.pdf */
  function docPdfFromTable() {
    var JsPDF = window.jspdf && window.jspdf.jsPDF;
    if (!JsPDF || typeof JsPDF !== 'function') return;
    var doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 10;
    var x = margin;
    var y = margin;
    var w = pageW - 2 * margin;

    var today = new Date();
    var dateStr = today.getDate() + ' ' + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][today.getMonth()] + ' ' + today.getFullYear();
    var filename = 'Personalized-Education-Loan-Comparison-Report-' + today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0') + '.pdf';

    function drawPageHeader() {
      doc.setFontSize(9);
      doc.text('Apply Only Once', pageW - margin, 8, { align: 'right' });
    }

    doc.setFontSize(16);
    doc.text('Personalized Education Loan Comparison Report', pageW / 2, y + 6, { align: 'center' });
    y += 14;
    doc.setFontSize(9);
    doc.text('Generated ' + dateStr, pageW / 2, y, { align: 'center' });
    y += 12;

    var inputData = getInputSectionData();
    var amountFormatted = inputData.amount ? Number(inputData.amount).toLocaleString('en-IN') : '';
    var amountDisplay = amountFormatted ? 'Rs.' + amountFormatted : '-';
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Your selections', x, y);
    doc.setFont(undefined, 'normal');
    y += 8;
    doc.setFillColor(248, 250, 252);
    doc.rect(x, y - 2, w, 32, 'F');
    doc.setFontSize(9);
    var selLines = [
      'Gender: ' + pdfSafeText(inputData.gender || '-'),
      'Security: ' + (inputData.secured === 'true' ? 'Secured' : inputData.secured === 'false' ? 'Unsecured' : '-'),
      'Loan amount: ' + pdfSafeText(amountDisplay),
      'Level: ' + pdfSafeText(inputData.levelOfStudy || '-'),
      'Country: ' + pdfSafeText(inputData.country || '-'),
      'University: ' + pdfSafeText(inputData.university || '-')
    ];
    for (var i = 0; i < selLines.length; i++) {
      doc.text(pdfSafeText(selLines[i]), x + 4, y + 5 + i * 5);
    }
    y += 38;

    var tableData = getTableDataForPdf();
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Comparison table', x, y);
    doc.setFont(undefined, 'normal');
    y += 6;

    if (tableData.headers.length) {
      var body = tableData.rows.length ? tableData.rows : (function() {
        var r = [];
        for (var i = 0; i < tableData.headers.length; i++) r.push('');
        r[0] = 'No results. Run a query to see offers.';
        return [r];
      }());
      var colCount = tableData.headers.length;
      var colW = Math.max(15, w / colCount);
      var columnStyles = {};
      for (var k = 0; k < colCount; k++) columnStyles[k] = { cellWidth: colW, overflow: 'linebreak', cellPadding: 2 };
      doc.autoTable({
        head: [tableData.headers.map(function(h) { return pdfSafeText(h); })],
        body: body.map(function(row) { return row.map(function(cell) { return pdfSafeText(cell); }); }),
        startY: y,
        margin: { left: x },
        tableWidth: w,
        columnStyles: columnStyles,
        showHead: 'everyPage',
        rowPageBreak: 'avoid',
        styles: { fontSize: 7, overflow: 'linebreak', cellPadding: 2 },
        headStyles: { fillColor: [51, 65, 85], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 7 },
        alternateRowStyles: body.length ? [{ fillColor: [255, 255, 255] }, { fillColor: [248, 250, 252] }] : undefined,
        didDrawPage: drawPageHeader
      });
      y = doc.lastAutoTable.finalY + 10;
    }

    var getDetailsForLender = typeof window.AooLoanTable !== 'undefined' && typeof window.AooLoanTable.getViewDetailsForLender === 'function' ? window.AooLoanTable.getViewDetailsForLender : null;
    var getBankCriteriaUniversityMap = typeof window.AooLoanTable !== 'undefined' && typeof window.AooLoanTable.getBankCriteriaUniversityMap === 'function' ? window.AooLoanTable.getBankCriteriaUniversityMap : null;

    var uniqueLenders = [];
    if (tableData.rows.length && tableData.columnKeys.indexOf('Lender') !== -1) {
      var lenderColIdx = tableData.columnKeys.indexOf('Lender');
      var seen = {};
      for (var ri = 0; ri < tableData.rows.length; ri++) {
        var name = (tableData.rows[ri][lenderColIdx] || '').trim();
        if (name && !seen[name]) { seen[name] = true; uniqueLenders.push(name); }
      }
    }

    if (uniqueLenders.length > 0 && getDetailsForLender) {
      if (y > pageH - 50) { doc.addPage('a4', 'landscape'); y = margin + 12; drawPageHeader(); }
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text('View details (per lender)', x, y);
      doc.setFont(undefined, 'normal');
      y += 10;
      var detailKeys = [['Apply via', 'applyVia'], ['Margin', 'margin'], ['Interest Rate', 'interestRate'], ['Loan Amount Covers', 'loanAmountCovers'], ['Other Charges', 'otherCharges'], ['Security', 'security'], ['Course', 'course'], ['Others', 'others']];
      var labelIndent = 6;
      var valueIndent = 32;
      var valueMaxWidth = w - labelIndent - valueIndent - 4;
      var lineH = 3.8;
      doc.setFontSize(7);
      for (var L = 0; L < uniqueLenders.length; L++) {
        if (y > pageH - 40) { doc.addPage('a4', 'landscape'); y = margin + 12; drawPageHeader(); }
        doc.setFont(undefined, 'bold');
        doc.text(pdfSafeText(uniqueLenders[L]), x + 4, y);
        doc.setFont(undefined, 'normal');
        y += 5;
        var details = getDetailsForLender(uniqueLenders[L]) || {};
        for (var d = 0; d < detailKeys.length; d++) {
          var section = details[detailKeys[d][1]];
          var bullets = section && Array.isArray(section.bullets) ? section.bullets : [];
          var raw = section && section.raw != null ? String(section.raw).trim() : '';
          var valueText = bullets.length ? bullets.join('; ') : (raw || 'None');
          valueText = pdfSafeText(valueText).replace(/\s+/g, ' ');
          var label = pdfSafeText(detailKeys[d][0] + ': ');
          doc.setFont(undefined, 'bold');
          doc.text(label, x + labelIndent, y + 3);
          doc.setFont(undefined, 'normal');
          var valueLines = doc.splitTextToSize(valueText, valueMaxWidth);
          doc.text(valueLines, x + labelIndent + valueIndent, y + 3);
          y += valueLines.length * lineH + 2;
        }
        y += 4;
      }
      y += 8;
    }

    var banksWithListed = [];
    if (tableData.rows.length && tableData.columnKeys.indexOf('Preferred University') !== -1) {
      var prefIdx = tableData.columnKeys.indexOf('Preferred University');
      var lenderIdx = tableData.columnKeys.indexOf('Lender');
      if (lenderIdx >= 0) {
        for (var bi = 0; bi < tableData.rows.length; bi++) {
          var prefVal = (tableData.rows[bi][prefIdx] || '').toLowerCase();
          if (prefVal.indexOf('listed') !== -1) {
            var bName = (tableData.rows[bi][lenderIdx] || '').trim();
            if (bName && banksWithListed.indexOf(bName) === -1) banksWithListed.push(bName);
          }
        }
      }
    }

    if (banksWithListed.length > 0 && getBankCriteriaUniversityMap) {
      if (y > pageH - 40) { doc.addPage('a4', 'landscape'); y = margin + 12; drawPageHeader(); }
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text('Appendix: University lists by bank', x, y);
      doc.setFont(undefined, 'normal');
      y += 10;
      doc.setFontSize(7);
      for (var b = 0; b < banksWithListed.length; b++) {
        if (y > pageH - 30) { doc.addPage('a4', 'landscape'); y = margin + 12; drawPageHeader(); }
        var byCriteria = getBankCriteriaUniversityMap(banksWithListed[b]) || {};
        var criteriaKeys = Object.keys(byCriteria).sort(function(a, b) { return a.localeCompare(b); });
        doc.setFont(undefined, 'bold');
        doc.text(pdfSafeText(banksWithListed[b]), x + 4, y);
        doc.setFont(undefined, 'normal');
        y += 5;
        for (var ck = 0; ck < criteriaKeys.length; ck++) {
          doc.text(pdfSafeText(criteriaKeys[ck] + ':'), x + 6, y);
          y += 4;
          var univList = byCriteria[criteriaKeys[ck]] || [];
          for (var u = 0; u < Math.min(univList.length, 25); u++) {
            doc.text(pdfSafeText('* ' + univList[u]), x + 8, y);
            y += 3.5;
          }
          if (univList.length > 25) {
            doc.text(pdfSafeText('* ... and ' + (univList.length - 25) + ' more'), x + 8, y);
            y += 3.5;
          }
          y += 2;
        }
        y += 4;
      }
    }

    doc.save(filename);
  }
  window.docPdfFromTable = docPdfFromTable;

  function getSelectedOffers() {
    var root = getRoot();
    if (!root) return [];
    var tbody = root.querySelector('#results-body');
    if (!tbody) return [];
    var columnKeys = getTableColumnKeys();
    var rows = tbody.querySelectorAll('tr');
    var result = [];
    for (var r = 0; r < rows.length; r++) {
      var tr = rows[r];
      var checkbox = tr.querySelector('.offer-checkbox-cell input.offer-checkbox');
      if (!checkbox || !checkbox.checked) continue;
      var cells = tr.querySelectorAll('td');
      var lenderName = '';
      var sector = '';
      var obj = {};
      for (var c = 0; c < cells.length; c++) {
        var cell = cells[c];
        var text = (cell.textContent || '').trim();
        if (cell.classList.contains('bank-name-cell')) {
          lenderName = text;
          obj.lenderName = lenderName;
        } else if (cell.classList.contains('sector-name-cell')) {
          sector = text;
          obj.sector = sector;
        } else if (cell.classList.contains('offer-checkbox-cell')) {
          continue;
        } else {
          var key = cell.getAttribute('data-column-key');
          if (key) obj[key] = text;
        }
      }
      if (lenderName || Object.keys(obj).length) result.push(obj);
    }
    return result;
  }

  function getInputSectionData() {
    var form = getQueryForm();
    if (!form) return { gender: '', amount: '', secured: '', country: '', university: '', levelOfStudy: '' };
    var genderEl = form.querySelector('input[name="gender"]:checked');
    var amountEl = form.querySelector('#amount, input[name="amount"]');
    var securedEl = form.querySelector('input[name="secured"]:checked');
    var countryEl = form.querySelector('#country, input[name="country"]');
    var universityEl = form.querySelector('#university, input[name="university"]');
    var levelEl = form.querySelector('#levelOfStudy, input[name="levelOfStudy"]');
    var amountRaw = amountEl ? String(amountEl.value || '').replace(/\D/g, '') : '';
    return {
      gender: genderEl ? genderEl.value : '',
      amount: amountRaw || '',
      secured: securedEl ? securedEl.value : '',
      country: countryEl ? (countryEl.value || '').trim() : '',
      university: universityEl ? (universityEl.value || '').trim() : '',
      levelOfStudy: levelEl ? (levelEl.value || '').trim() : ''
    };
  }

  function ensureApplyFlowStyles() {
    if (document.getElementById('apply-button-iframe-styles')) return;
    var style = document.createElement('style');
    style.id = 'apply-button-iframe-styles';
    style.textContent = [
      '#loan-table-root .aoo-loan-table-wrap .wrap { position: relative; }',
      '#apply-download-buttons { position: absolute; bottom: 16px; right: 16px; z-index: 10; display: flex; flex-direction: row; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; max-width: 90%; }',
      '#apply-button.apply-floating-btn, #download-results-btn.apply-floating-btn { width: auto; padding: 8px 16px; font-size: 12px; font-weight: 600; border-radius: 999px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); white-space: nowrap; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.05rem; min-height: auto; font-family: "Montserrat", sans-serif; border: none; cursor: pointer; transition: background 0.2s, transform 0.2s; }',
      '#apply-button.apply-floating-btn { background: #0d9488; color: #fff; }',
      '#apply-button.apply-floating-btn:hover { background: #0f766e; transform: translateY(-1px); }',
      '#apply-button.apply-floating-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }',
      '#download-results-btn.apply-floating-btn { background: #e2e8f0; color: #334155; }',
      '#download-results-btn.apply-floating-btn:hover { background: #cbd5e1; transform: translateY(-1px); }',
      '@media (max-width: 768px) { #apply-download-buttons { bottom: 12px; right: 12px; gap: 6px; } #apply-button.apply-floating-btn, #download-results-btn.apply-floating-btn { padding: 8px 14px; font-size: 11px; min-height: 44px; } }'
    ].join('\n');
    document.head.appendChild(style);
  }

  function setButtonDisabled(disabled) {
    var btn = document.getElementById('apply-button');
    if (btn) btn.disabled = !!disabled;
  }

  function addApplyButton() {
    var wrap = getWrap();
    if (!wrap) return false;
    if (document.getElementById('apply-download-buttons')) return true;

    var tableContainer = getTableContainer();
    if (!tableContainer) return false;

    var wrapper = document.createElement('div');
    wrapper.id = 'apply-download-buttons';

    var applyButton = document.createElement('button');
    applyButton.type = 'button';
    applyButton.id = 'apply-button';
    applyButton.className = 'apply-floating-btn';
    applyButton.innerHTML = '<span>Apply</span>';
    applyButton.addEventListener('click', function () {
      if (window.parent) window.parent.postMessage({ type: 'AOO_APPLY_CLICKED' }, '*');
    });

    var downloadBtn = document.createElement('button');
    downloadBtn.type = 'button';
    downloadBtn.id = 'download-results-btn';
    downloadBtn.className = 'apply-floating-btn';
    downloadBtn.innerHTML = '<span>Download results</span>';
    downloadBtn.addEventListener('click', function () {
      if (typeof window.jspdf !== 'undefined' && window.jspdf.jsPDF && typeof window.docPdfFromTable === 'function') {
        window.docPdfFromTable();
        return;
      }
      var span = downloadBtn.querySelector('span');
      var origText = span ? span.textContent : '';
      if (span) span.textContent = 'Preparing…';
      downloadBtn.disabled = true;
      loadJsPdf()
        .then(function () {
          if (typeof window.docPdfFromTable === 'function') window.docPdfFromTable();
        })
        .catch(function () {
          if (typeof window.AooLoanTable !== 'undefined' && typeof window.AooLoanTable.downloadResults === 'function') {
            window.AooLoanTable.downloadResults();
          } else if (document.querySelector('#loan-table-root')) {
            var root = document.querySelector('#loan-table-root');
            var msg = document.createElement('p');
            msg.style.cssText = 'color:#b91c1c;padding:0.5rem 1rem;margin:0;font-size:0.875rem;';
            msg.textContent = 'Download could not load. Please check your connection and try again.';
            root.insertBefore(msg, root.firstChild);
            setTimeout(function () { msg.remove(); }, 5000);
          }
        })
        .then(function () {
          downloadBtn.disabled = false;
          if (span) span.textContent = origText;
        });
    });

    wrapper.appendChild(downloadBtn);
    wrapper.appendChild(applyButton);
    tableContainer.appendChild(wrapper);
    return true;
  }

  function handleMessage(event) {
    if (!event || !event.data || typeof event.data !== 'object') return;
    var msg = event.data;
    if (msg.type === 'AOO_GET_SELECTION') {
      var offers = getSelectedOffers();
      var inputData = getInputSectionData();
      if (window.parent) {
        window.parent.postMessage({ type: 'AOO_SELECTION_RESPONSE', offers: offers, inputData: inputData }, '*');
      }
    } else if (msg.type === 'AOO_SET_BUTTON_STATE') {
      setButtonDisabled(msg.disabled === true);
    }
  }

  function init() {
    if (applyButtonIframeInitialized) return;
    ensureApplyFlowStyles();
    var wrap = getWrap();
    if (!wrap) {
      setTimeout(init, 150);
      return;
    }
    if (!addApplyButton()) {
      setTimeout(init, 150);
      return;
    }
    applyButtonIframeInitialized = true;
    window.addEventListener('message', handleMessage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 100); });
  } else {
    setTimeout(init, 100);
  }
})();
