/**
 * Apply button iframe – runs inside table-embed iframe.
 * Adds Apply button, reads selection from DOM, communicates with parent via postMessage.
 * No Supabase, Razorpay, or payment logic.
 */
(function () {
  'use strict';

  var applyButtonIframeInitialized = false;

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
        var td = tr.querySelector('td[data-column-key="' + columnKeys[c] + '"]');
        var text = td ? (td.textContent || '').trim().replace(/\s+/g, ' ') : '';
        row.push(text);
      }
      if (row.length === columnKeys.length) rows.push(row);
    }
    return { headers: headers, rows: rows, columnKeys: columnKeys };
  }

  /** Build and download PDF with aligned columns and wrapped text. Uses jsPDF + autoTable when available. */
  function docPdfFromTable() {
    var JsPDF = window.jspdf && window.jspdf.jsPDF;
    if (!JsPDF || typeof JsPDF !== 'function') return;
    var doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 8;
    var x = margin;
    var y = margin;
    var w = pageW - 2 * margin;

    doc.setFontSize(14);
    doc.text('Loan comparison – Your results', x, y);
    y += 8;

    var inputData = getInputSectionData();
    doc.setFontSize(10);
    doc.text('Your selections: Gender ' + (inputData.gender || '–') + ', Loan amount \u20B9' + (inputData.amount || '–') + ', ' + (inputData.secured === 'true' ? 'Secured' : 'Unsecured') + ', Country ' + (inputData.country || '–') + ', University ' + (inputData.university || '–') + ', Level ' + (inputData.levelOfStudy || '–'), x, y);
    y += 10;

    var tableData = getTableDataForPdf();
    if (!tableData.headers.length || !tableData.rows.length) {
      doc.text('No table data to export.', x, y);
      doc.save('loan-comparison-results.pdf');
      return;
    }

    var colCount = tableData.headers.length;
    var totalW = w;
    var minCol = 12;
    var maxCol = 35;
    var colWidths = [];
    for (var i = 0; i < colCount; i++) {
      colWidths.push(Math.max(minCol, Math.min(maxCol, totalW / colCount)));
    }
    var sum = colWidths.reduce(function (a, b) { return a + b; }, 0);
    if (sum > totalW) {
      var scale = totalW / sum;
      for (var j = 0; j < colWidths.length; j++) colWidths[j] = colWidths[j] * scale;
    }

    var columnStyles = {};
    for (var k = 0; k < colCount; k++) {
      columnStyles[k] = { cellWidth: colWidths[k], overflow: 'linebreak', cellPadding: 2 };
    }

    doc.autoTable({
      head: [tableData.headers],
      body: tableData.rows,
      startY: y,
      margin: { left: x },
      tableWidth: totalW,
      columnStyles: columnStyles,
      styles: { fontSize: 7, overflow: 'linebreak', cellPadding: 2 },
      headStyles: { fillColor: [41, 78, 120], textColor: 255, fontStyle: 'bold', fontSize: 7 },
      bodyStyles: { valign: 'top' },
      alternateRowStyles: { fillColor: [245, 248, 250] },
      didDrawPage: function () {
        doc.setFontSize(7);
        doc.text('Apply Only Once – loan comparison', margin, pageH - 4);
      }
    });

    y = doc.lastAutoTable.finalY + 8;
    if (y > pageH - 20) {
      doc.addPage([pageH, pageW], 'landscape');
      y = margin;
    }

    doc.setFontSize(10);
    doc.text('View details (per lender) are available in the table on the website.', x, y);

    doc.save('loan-comparison-results.pdf');
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
      } else if (typeof window.AooLoanTable !== 'undefined' && typeof window.AooLoanTable.downloadResults === 'function') {
        window.AooLoanTable.downloadResults();
      }
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
