/**
 * Fit Mac window or iPhone stage to rim + matching outer corners.
 * Rim from CSS paddingTop=Y, paddingLeft=X (desktop final: 60 / 130).
 * Never use scrollIntoView here.
 * Home: iframe product demo + Apple-style play/pause in the bottom rim (play once, no loop).
 */
(function () {
  var IFRAME_W = 1640;
  var IFRAME_H = 760;

  function reducedMotion() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      return false;
    }
  }

  function fitMac(stage, slot, win, marginX, marginY, parentW) {
    var scale = Math.min((parentW - marginX * 2) / IFRAME_W, 1);
    if (!isFinite(scale) || scale <= 0) scale = 0.4;

    var onHome = !!(stage.closest && stage.closest(".spd-section--home"));
    var maxH = onHome
      ? Math.min(window.innerHeight * 0.92, 900)
      : Math.min(window.innerHeight * 0.82, 760);
    if (scale * IFRAME_H + marginY * 2 > maxH) {
      scale = Math.min((maxH - marginY * 2) / IFRAME_H, 1);
      if (!isFinite(scale) || scale <= 0) scale = 0.4;
    }

    var outerRadius = 12 * scale; /* same as window, not larger */
    stage.style.width = Math.min(scale * IFRAME_W + marginX * 2, parentW) + "px";
    stage.style.height = scale * IFRAME_H + marginY * 2 + "px";
    stage.style.borderRadius = outerRadius + "px";
    stage.style.setProperty("--spd-scale", String(scale));
    stage.style.setProperty("--spd-outer-radius", outerRadius + "px");
    slot.style.setProperty("--spd-scale", String(scale));
    win.style.setProperty("--spd-scale", String(scale));
  }

  function fitPhone(stage, phone, marginX, marginY, parentW) {
    var bezel = 14; /* titanium ring; CSS floors bezel at 8px when scaled small */
    var phoneW = 390 + bezel * 2;
    var phoneH = 844 + bezel * 2;
    var maxH = Math.min(window.innerHeight * 0.88, 980);
    var scale = Math.min(
      (parentW - marginX * 2) / phoneW,
      (maxH - marginY * 2) / phoneH,
      1
    );
    if (!isFinite(scale) || scale <= 0) scale = 0.4;

    /* Hug stage using painted size (bezel floored in CSS/JS together) */
    var bezelPaint = Math.max(8, 14 * scale);
    var phonePaintW = 390 * scale + bezelPaint * 2;
    var phonePaintH = 844 * scale + bezelPaint * 2;
    stage.style.width = Math.min(phonePaintW + marginX * 2, parentW) + "px";
    stage.style.height = phonePaintH + marginY * 2 + "px";
    stage.style.borderRadius = Math.max(28, 54 * scale) + "px";
    phone.style.setProperty("--spd-scale", String(scale));
    phone.style.setProperty("--spd-bezel", bezelPaint + "px");
    phone.style.setProperty("--spd-phone-r", Math.max(28, 54 * scale) + "px");
    phone.style.setProperty("--spd-screen-r", Math.max(22, 42 * scale) + "px");
  }

  function fitStage(stage) {
    var scaler = stage.querySelector(".spd-stage-scaler");
    if (!scaler) return;
    var styles = getComputedStyle(scaler);
    var marginY = parseFloat(styles.paddingTop) || 60;
    var marginX = parseFloat(styles.paddingLeft) || 130;
    var parent = stage.parentElement;
    var parentW = parent ? parent.clientWidth : stage.clientWidth;
    if (parentW < 40) return;

    if (stage.getAttribute("data-spd-device") === "phone") {
      var phone = stage.querySelector("[data-spd-phone]");
      if (!phone) return;
      fitPhone(stage, phone, marginX, marginY, parentW);
      return;
    }

    var slot = stage.querySelector("[data-spd-slot]");
    var win = stage.querySelector("[data-spd-window]");
    if (!slot || !win) return;
    fitMac(stage, slot, win, marginX, marginY, parentW);
  }

  function setPlaybackUi(btn, state) {
    if (!btn) return;
    btn.setAttribute("data-spd-state", state);
    btn.setAttribute("aria-label", state === "playing" ? "Pause" : "Play");
  }

  function postFrame(frame, type) {
    if (!frame || !frame.contentWindow) return;
    try {
      frame.contentWindow.postMessage({ source: "spd-chrome", type: type }, "*");
    } catch (e) {
      /* ignore cross-origin / not ready */
    }
  }

  function mountFramePlayback(root, frame, btn) {
    var state = "paused";
    var frameReady = false;
    var inView = false;
    var hasAutoplayed = false;

    function setState(next) {
      state = next;
      setPlaybackUi(btn, next);
    }

    function syncInView() {
      var rect = root.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.height <= 0) return false;
      var visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      return visible / rect.height >= 0.35;
    }

    function tryAutoplay() {
      if (hasAutoplayed || !frameReady) return;
      inView = syncInView();
      if (!inView) return;
      hasAutoplayed = true;
      if (reducedMotion()) {
        setState("paused");
        return;
      }
      postFrame(frame, "spd-replay");
      setState("playing");
    }

    function play() {
      postFrame(frame, "spd-replay");
      setState("playing");
    }

    function pause() {
      if (state !== "playing") return;
      postFrame(frame, "spd-pause");
      setState("paused");
    }

    function toggle() {
      if (state === "playing") pause();
      else play();
    }

    function markFrameReady() {
      if (frameReady) return;
      frameReady = true;
      postFrame(frame, "spd-request-ready");
      tryAutoplay();
      if (!hasAutoplayed && state !== "playing") setState("paused");
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      toggle();
    });

    frame.addEventListener("load", markFrameReady);
    try {
      if (frame.contentDocument && frame.contentDocument.readyState === "complete") {
        markFrameReady();
      }
    } catch (e) {
      /* ignore */
    }

    window.addEventListener("message", function (ev) {
      var data = ev && ev.data;
      if (!data || data.source !== "spd-demo") return;
      if (frame.contentWindow && ev.source !== frame.contentWindow) return;
      if (data.type === "spd-ended") setState("ended");
      else if (data.type === "spd-playing") setState("playing");
      else if (data.type === "spd-paused") setState("paused");
      else if (data.type === "spd-ready") markFrameReady();
    });

    setState("paused");

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            inView = !!entry.isIntersecting;
            if (!inView) {
              if (state === "playing") pause();
              return;
            }
            tryAutoplay();
          });
        },
        { threshold: 0.35 }
      );
      io.observe(root);
    } else {
      inView = syncInView();
      tryAutoplay();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden && state === "playing") pause();
    });
  }

  function mountPlayback(stage) {
    if (!stage || stage.getAttribute("data-spd-playback-bound") === "true") return;
    var btn = stage.querySelector("[data-spd-playback]");
    if (!btn) return;
    stage.setAttribute("data-spd-playback-bound", "true");

    var frame = stage.querySelector("[data-spd-frame]");
    if (frame) mountFramePlayback(stage, frame, btn);
  }

  function mount(stage) {
    if (!stage || stage.getAttribute("data-spd-chrome") === "true") return;
    stage.setAttribute("data-spd-chrome", "true");

    var readyEl =
      stage.querySelector("[data-spd-phone]") ||
      stage.querySelector("[data-spd-window]");

    function run() {
      fitStage(stage);
    }

    run();
    window.addEventListener("resize", run);
    if ("ResizeObserver" in window && stage.parentElement) {
      new ResizeObserver(run).observe(stage.parentElement);
    }
    requestAnimationFrame(function () {
      if (readyEl) readyEl.classList.add("is-ready");
      run();
      requestAnimationFrame(function () {
        run();
        if (window.ShroffinHomeBoot) window.ShroffinHomeBoot.tryRelease();
      });
    });

    if (stage.hasAttribute("data-spd-playback-root")) {
      mountPlayback(stage);
    }
  }

  function boot() {
    document.querySelectorAll("[data-spd-stage]").forEach(mount);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
