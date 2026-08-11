/**
 * Soft settle for About stance rows, home lead lines, Built around you, and home open band.
 * Home open: banks pop → swish → Shroffin once; calm product-site play/pause (no loop).
 */
(function () {
  var nodes = Array.prototype.slice.call(
    document.querySelectorAll('.stance-settle, .home-moment, .home-reveal, .home-zero')
  );
  if (!nodes.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var SWISH_AT_MS = 3600;
  var RESOLVE_AT_MS = 5100;
  var HOLD_RESOLVED_MS = 3600;

  function sleep(ms, signal) {
    return new Promise(function (resolve, reject) {
      if (signal && signal.aborted) {
        reject(Object.assign(new Error('Aborted'), { name: 'AbortError' }));
        return;
      }
      var id = window.setTimeout(function () {
        if (signal) signal.removeEventListener('abort', onAbort);
        resolve();
      }, ms);
      function onAbort() {
        window.clearTimeout(id);
        reject(Object.assign(new Error('Aborted'), { name: 'AbortError' }));
      }
      if (signal) signal.addEventListener('abort', onAbort, { once: true });
    });
  }

  function browserWins(node) {
    return node.querySelectorAll('.home-open-browser');
  }

  function freezeAnims(node) {
    browserWins(node).forEach(function (win) {
      win.style.animation = 'none';
    });
  }

  function releaseAnims(node) {
    void node.offsetWidth;
    browserWins(node).forEach(function (win) {
      win.style.animation = '';
    });
  }

  function beginPopCycle(node) {
    freezeAnims(node);
    node.classList.remove('is-swishing', 'is-resolved', 'is-loop-out', 'is-loop-gap');
    releaseAnims(node);
  }

  function resetHomeStory(node) {
    freezeAnims(node);
    node.classList.remove('is-in', 'is-swishing', 'is-resolved', 'is-loop-out', 'is-loop-gap');
    releaseAnims(node);
  }

  function showHomeOpenResolved(node) {
    node.classList.add('is-in', 'is-swishing', 'is-resolved');
  }

  async function playHomeStoryOnce(node, signal) {
    node.classList.add('is-in');
    beginPopCycle(node);

    await sleep(SWISH_AT_MS, signal);
    node.classList.add('is-swishing');

    await sleep(RESOLVE_AT_MS - SWISH_AT_MS, signal);
    node.classList.add('is-resolved');

    await sleep(HOLD_RESOLVED_MS, signal);
  }

  function mountHomeOpenPlayback(node) {
    var btn = node.querySelector('[data-home-open-playback]');
    if (!btn || node.getAttribute('data-home-open-playback-bound') === 'true') return;
    node.setAttribute('data-home-open-playback-bound', 'true');

    var ac = null;
    var state = 'paused';
    var hasAutoplayed = false;

    function setState(next) {
      state = next;
      btn.setAttribute('data-spd-state', next);
      btn.setAttribute('aria-label', next === 'playing' ? 'Pause' : 'Play');
    }

    function stop() {
      if (ac) {
        ac.abort();
        ac = null;
      }
      freezeAnims(node);
      if (state === 'playing') setState('paused');
    }

    function start() {
      stop();
      if (reduce.matches) {
        showHomeOpenResolved(node);
        setState('ended');
        return;
      }

      resetHomeStory(node);
      ac = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var signal = ac ? ac.signal : { aborted: false };
      setState('playing');

      playHomeStoryOnce(node, signal)
        .then(function () {
          if (signal.aborted) return;
          ac = null;
          setState('ended');
        })
        .catch(function (err) {
          if (err && err.name === 'AbortError') return;
          console.warn('[home-open]', err);
        });
    }

    function syncInView() {
      var rect = node.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.height <= 0) return false;
      var visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      return visible / rect.height >= 0.15;
    }

    function tryAutoplay() {
      if (hasAutoplayed) return;
      if (!syncInView()) return;
      hasAutoplayed = true;
      if (reduce.matches) {
        showHomeOpenResolved(node);
        setState('ended');
        return;
      }
      start();
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (state === 'playing') stop();
      else start();
    });

    setState('paused');

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              if (state === 'playing') stop();
              return;
            }
            tryAutoplay();
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
      );
      io.observe(node);
    } else {
      tryAutoplay();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden && state === 'playing') stop();
    });
  }

  function showAll() {
    nodes.forEach(function (node) {
      node.classList.add('is-in');
      if (node.classList.contains('home-reveal')) {
        showHomeOpenResolved(node);
      }
    });
  }

  if (reduce.matches) {
    showAll();
    nodes.forEach(function (node) {
      if (node.classList.contains('home-reveal')) mountHomeOpenPlayback(node);
    });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    showAll();
    nodes.forEach(function (node) {
      if (node.classList.contains('home-reveal')) mountHomeOpenPlayback(node);
    });
    return;
  }

  nodes.forEach(function (node) {
    if (node.classList.contains('home-reveal')) {
      mountHomeOpenPlayback(node);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            node.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    );
    observer.observe(node);
  });
})();
