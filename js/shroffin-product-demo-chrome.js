/**
 * Fit Safari-framed product demo to the stage (desktop or phone canvas).
 * Desktop: macOS Tahoe Safari Compact (centered search field).
 * Phone: iOS 26 Safari Compact (status + bottom floating bar).
 * Never use scrollIntoView here.
 * Home: iframe product demo + calm play/pause.
 * First full demo view: plays through once without interruption, then stops.
 * Only the Pause control stops it early. No auto-repeat.
 */
(function () {
  var DESKTOP_W = 1640;
  /* Product canvas 1025 + Compact Safari toolbar 52. */
  var DESKTOP_H = 1077;
  /* iPhone 17 Pro CSS viewport (402×874). Safari chrome overlays inside. */
  var PHONE_W = 402;
  var PHONE_H = 874;

  function reducedMotion() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      return false;
    }
  }

  function fitPlain(stage, slot, win, canvasW, canvasH, marginX, marginY, parentW, isPhone) {
    var scale = Math.min((parentW - marginX * 2) / canvasW, 1);
    if (!isFinite(scale) || scale <= 0) scale = 0.4;

    var onHome = !!(stage.closest && stage.closest(".spd-section--home, .spd-section--home-phone"));
    var phoneViewport =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(max-width: 833px)").matches;
    /*
     * Home desktop: tall laptop-proportion stage.
     * Mobile phone demo: allow a bit more height so wallpaper + phone scale up together.
     */
    var maxH;
    if (isPhone && phoneViewport) {
      maxH = onHome
        ? Math.min(window.innerHeight * 0.98, 1100)
        : Math.min(window.innerHeight * 0.9, 1000);
    } else {
      maxH = onHome
        ? Math.min(window.innerHeight * 0.92, 1200)
        : Math.min(window.innerHeight * 0.82, phoneViewport ? 900 : 980);
    }
    if (scale * canvasH + marginY * 2 > maxH) {
      scale = Math.min((maxH - marginY * 2) / canvasH, 1);
      if (!isFinite(scale) || scale <= 0) scale = 0.4;
    }

    /* iPhone 17 Pro display corner radius is 62pt (continuous curve on device). */
    var windowRadius = isPhone ? 62 : 16;
    var outerRadius = windowRadius * scale;
    stage.style.width = Math.min(scale * canvasW + marginX * 2, parentW) + "px";
    stage.style.height = scale * canvasH + marginY * 2 + "px";
    stage.style.borderRadius = Math.max(12, outerRadius) + "px";
    stage.style.setProperty("--spd-scale", String(scale));
    stage.style.setProperty("--spd-outer-radius", outerRadius + "px");
    stage.style.setProperty("--spd-window-radius", windowRadius + "px");
    slot.style.setProperty("--spd-scale", String(scale));
    win.style.setProperty("--spd-scale", String(scale));
    /*
     * Phone: round the scaled window itself (62px pre-scale) so the curve
     * scales cleanly. Clipping only on the outer slot causes zigzag edges.
     * Desktop: keep clipping on the slot.
     */
    if (isPhone) {
      slot.style.borderRadius = "0";
      win.style.borderRadius = windowRadius + "px";
    } else {
      slot.style.borderRadius = outerRadius + "px";
      win.style.borderRadius = "0";
    }
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

    var slot = stage.querySelector("[data-spd-slot]");
    var win = stage.querySelector("[data-spd-window]");
    if (!slot || !win) return;

    var isPhone = stage.getAttribute("data-spd-device") === "phone";
    fitPlain(
      stage,
      slot,
      win,
      isPhone ? PHONE_W : DESKTOP_W,
      isPhone ? PHONE_H : DESKTOP_H,
      marginX,
      marginY,
      parentW,
      isPhone
    );
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

    function play() {
      postFrame(frame, "spd-replay");
      setState("playing");
    }

    function pause() {
      if (state !== "playing") return;
      postFrame(frame, "spd-pause");
      setState("paused");
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
      play();
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

    /*
     * Start the first full play when the demo is in view.
     * Do not pause on scroll-away or tab hide — that cut the first run short.
     * Only the Pause button (or a finished playthrough) stops it.
     */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            inView = !!entry.isIntersecting;
            if (inView) tryAutoplay();
          });
        },
        { threshold: 0.35 }
      );
      io.observe(root);
    } else {
      inView = syncInView();
      tryAutoplay();
    }
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

    var readyEl = stage.querySelector("[data-spd-window]");

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
