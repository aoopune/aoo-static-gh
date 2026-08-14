(function () {
  var frame = document.getElementById('rv-frame');
  var gate = document.getElementById('rv-gate');
  var startBtn = document.getElementById('rv-start');
  var markBtn = document.getElementById('rv-mark');
  var stopBtn = document.getElementById('rv-stop');
  var stateEl = document.getElementById('rv-state');
  var timerEl = document.getElementById('rv-timer');
  var pageEl = document.getElementById('rv-page');
  var gateError = document.getElementById('rv-gate-error');
  var app = document.querySelector('.rv-app');

  var sessionId = null;
  var recorder = null;
  var stream = null;
  var startedAt = 0;
  var timerHandle = null;
  var lastClick = null;
  var lastPage = '';
  var pendingEvents = [];
  var flushHandle = null;
  var recognition = null;
  var saving = false;

  function nowT() {
    return Date.now() - startedAt;
  }

  function clock(ms) {
    var total = Math.max(0, Math.floor(ms / 1000));
    var m = Math.floor(total / 60);
    var s = total % 60;
    return m + ':' + String(s).padStart(2, '0');
  }

  function showError(msg) {
    gateError.hidden = false;
    gateError.textContent = msg;
  }

  function pageFromSearch() {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page') || '/';
    if (page.indexOf('/__review') === 0) page = '/';
    if (page.charAt(0) !== '/') page = '/' + page;
    return page;
  }

  function frameUrl() {
    try {
      var loc = frame.contentWindow && frame.contentWindow.location;
      if (!loc) return lastPage;
      return loc.pathname + loc.search + loc.hash;
    } catch (e) {
      return lastPage;
    }
  }

  function cssPath(el) {
    if (!el || el.nodeType !== 1) return '';
    if (el.id) return '#' + el.id;
    var parts = [];
    var node = el;
    while (node && node.nodeType === 1 && parts.length < 5) {
      var bit = node.tagName.toLowerCase();
      if (node.className && typeof node.className === 'string') {
        var cls = node.className.trim().split(/\s+/).find(function (c) {
          return c && !/^js-/.test(c);
        });
        if (cls) bit += '.' + cls.replace(/[^a-zA-Z0-9_-]/g, '');
      }
      parts.unshift(bit);
      if (node.id) {
        parts[0] = '#' + node.id;
        break;
      }
      node = node.parentElement;
    }
    return parts.join(' > ');
  }

  function clickLabel(el) {
    if (!el) return '';
    return (
      el.getAttribute('aria-label') ||
      el.getAttribute('title') ||
      (el.alt || '') ||
      (typeof el.value === 'string' ? el.value : '') ||
      (el.textContent || '')
    )
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120);
  }

  function queueEvent(ev) {
    pendingEvents.push(ev);
    if (!flushHandle) {
      flushHandle = setTimeout(flushEvents, 1200);
    }
  }

  function flushEvents() {
    flushHandle = null;
    if (!sessionId || !pendingEvents.length) return Promise.resolve();
    var batch = pendingEvents;
    pendingEvents = [];
    return fetch('/__review/api/sessions/' + sessionId + '/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: batch })
    }).catch(function () {
      pendingEvents = batch.concat(pendingEvents);
    });
  }

  function setPage(url, reason) {
    if (!url || url === lastPage) return;
    lastPage = url;
    pageEl.textContent = url;
    if (startedAt) {
      queueEvent({ t: nowT(), type: 'page', url: url, reason: reason || 'nav' });
    }
  }

  function bindFrame() {
    var doc;
    try {
      doc = frame.contentDocument;
    } catch (e) {
      return;
    }
    if (!doc) return;
    setPage(frameUrl(), 'load');
    doc.addEventListener(
      'click',
      function (e) {
        var el = e.target && e.target.closest ? e.target.closest('a, button, input, summary, [role="button"], [role="tab"], label') : e.target;
        if (!el) el = e.target;
        lastClick = {
          t: nowT(),
          type: 'click',
          url: frameUrl(),
          label: clickLabel(el),
          selector: cssPath(el),
          tag: el && el.tagName ? el.tagName.toLowerCase() : '',
          x: e.clientX,
          y: e.clientY
        };
        if (startedAt) queueEvent(lastClick);
        var a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (a && (a.target === '_top' || a.target === '_parent')) {
          e.preventDefault();
          frame.src = a.href;
        }
      },
      true
    );
    doc.addEventListener(
      'keydown',
      function (e) {
        if (e.altKey && (e.key === 'm' || e.key === 'M')) {
          e.preventDefault();
          markThis();
        }
      },
      true
    );
  }

  function pickMime() {
    var types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'];
    for (var i = 0; i < types.length; i++) {
      if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(types[i])) {
        return types[i];
      }
    }
    return '';
  }

  function startLiveCaptions() {
    var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) return;
    try {
      recognition = new Rec();
      recognition.lang = 'hi-IN';
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.onresult = function (e) {
        var text = '';
        for (var i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) text += e.results[i][0].transcript;
        }
        text = text.trim();
        if (text) {
          queueEvent({ t: nowT(), type: 'caption', text: text, lang: 'hi-IN' });
        }
      };
      recognition.onend = function () {
        if (recorder && recorder.state === 'recording') {
          try {
            recognition.start();
          } catch (err) {}
        }
      };
      recognition.start();
    } catch (e) {
      recognition = null;
    }
  }

  function markThis() {
    if (!startedAt || !sessionId) return;
    queueEvent({
      t: nowT(),
      type: 'mark',
      url: frameUrl(),
      lastClick: lastClick
    });
    stateEl.textContent = 'Marked';
    setTimeout(function () {
      if (recorder && recorder.state === 'recording') stateEl.textContent = 'Recording';
    }, 900);
  }

  async function startRecording() {
    gateError.hidden = true;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true }
      });
    } catch (e) {
      showError('Microphone was blocked. Allow it for this page, then try Start again.');
      return;
    }
    var created = await fetch('/__review/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        initialPage: pageFromSearch(),
        viewport: { w: window.innerWidth, h: window.innerHeight },
        userAgent: navigator.userAgent
      })
    });
    if (!created.ok) {
      showError('Could not start a session. Is the local server running?');
      stream.getTracks().forEach(function (t) {
        t.stop();
      });
      return;
    }
    var info = await created.json();
    sessionId = info.id;
    startedAt = Date.now();
    lastPage = '';
    setPage(frameUrl() || pageFromSearch(), 'start');
    queueEvent({ t: 0, type: 'start', url: lastPage });

    var mime = pickMime();
    recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    recorder.ondataavailable = function (e) {
      if (!e.data || !e.data.size || !sessionId) return;
      e.data.arrayBuffer().then(function (buf) {
        return fetch('/__review/api/sessions/' + sessionId + '/chunk', {
          method: 'POST',
          headers: { 'Content-Type': recorder.mimeType || 'audio/webm' },
          body: buf
        });
      });
    };
    recorder.start(5000);
    startLiveCaptions();

    gate.hidden = true;
    app.classList.add('is-recording');
    startBtn.disabled = true;
    markBtn.disabled = false;
    stopBtn.disabled = false;
    stateEl.textContent = 'Recording';
    timerHandle = setInterval(function () {
      timerEl.textContent = clock(nowT());
    }, 500);
  }

  async function stopRecording() {
    if (saving || !sessionId) return;
    saving = true;
    stopBtn.disabled = true;
    markBtn.disabled = true;
    stateEl.textContent = 'Saving';
    if (recognition) {
      try {
        recognition.onend = null;
        recognition.stop();
      } catch (e) {}
    }
    if (timerHandle) clearInterval(timerHandle);
    if (recorder && recorder.state !== 'inactive') {
      await new Promise(function (resolve) {
        recorder.addEventListener('stop', resolve, { once: true });
        recorder.stop();
      });
    }
    if (stream) {
      stream.getTracks().forEach(function (t) {
        t.stop();
      });
    }
    queueEvent({ t: nowT(), type: 'stop', url: frameUrl() });
    await flushEvents();
    await fetch('/__review/api/sessions/' + sessionId + '/finalize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: [] })
    });
    app.classList.remove('is-recording');
    stateEl.textContent = 'Saved';
    gate.hidden = false;
    gate.querySelector('.rv-gate-card').innerHTML =
      '<p class="rv-kicker">Saved on this computer</p>' +
      '<h1>Review captured</h1>' +
      '<p>The recording is stored as session <strong>' +
      sessionId +
      '</strong>.</p>' +
      '<p>Speech is being turned into text in the background. When you want the website changed, tell Cursor:</p>' +
      '<p class="rv-done">Apply the review session ' +
      sessionId +
      '</p>' +
      '<p class="rv-note" id="rv-status-note">Turning speech into text…</p>';
    pollStatus();
  }

  function pollStatus() {
    if (!sessionId) return;
    var note = document.getElementById('rv-status-note');
    var tries = 0;
    var handle = setInterval(function () {
      tries += 1;
      fetch('/__review/api/sessions/' + sessionId + '/status')
        .then(function (r) {
          return r.json();
        })
        .then(function (s) {
          if (!note) return;
          if (s.state === 'ready') {
            note.textContent = 'Text is ready. You can close this tab.';
            clearInterval(handle);
          } else if (s.state === 'error') {
            note.textContent = 'Audio is saved. Text did not finish automatically — Cursor can still use the recording.';
            clearInterval(handle);
          } else if (tries > 120) {
            note.textContent = 'Still working, or you can close this tab. The audio is already saved.';
            clearInterval(handle);
          }
        })
        .catch(function () {});
    }, 2000);
  }

  startBtn.addEventListener('click', startRecording);
  markBtn.addEventListener('click', markThis);
  stopBtn.addEventListener('click', stopRecording);
  window.addEventListener('keydown', function (e) {
    if (e.altKey && (e.key === 'm' || e.key === 'M')) {
      e.preventDefault();
      markThis();
    }
  });
  window.addEventListener('resize', function () {
    if (!startedAt) return;
    queueEvent({ t: nowT(), type: 'resize', w: window.innerWidth, h: window.innerHeight, url: frameUrl() });
  });
  window.addEventListener('beforeunload', function (e) {
    if (recorder && recorder.state === 'recording') {
      e.preventDefault();
      e.returnValue = '';
    }
  });
  frame.addEventListener('load', bindFrame);
  setInterval(function () {
    if (frame.contentWindow) setPage(frameUrl(), 'poll');
  }, 800);

  frame.src = pageFromSearch();
  gate.hidden = false;
})();
