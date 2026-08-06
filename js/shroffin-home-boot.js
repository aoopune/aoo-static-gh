/**
 * Home landing boot — keeps story sections hidden until hero + product demo
 * have stable layout and the visible demo frame is ready to reveal.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  if (!root.classList.contains("home-boot")) return;

  var released = false;
  var fallbackMs = 2800;
  var fallbackId = 0;

  function release() {
    if (released) return;
    released = true;
    if (fallbackId) window.clearTimeout(fallbackId);
    root.classList.remove("home-boot");
    root.classList.add("home-ready");
  }

  function isStageVisible(stage) {
    var section = stage.closest(".spd-section");
    if (!section) {
      return stage.getBoundingClientRect().height >= 48;
    }
    var style = window.getComputedStyle(section);
    return style.display !== "none" && style.visibility !== "hidden";
  }

  function homeStagesReady() {
    var home = document.querySelector(".home-content");
    if (!home) return true;

    var stages = home.querySelectorAll("[data-spd-stage]");
    if (!stages.length) return true;

    var sawVisible = false;

    for (var i = 0; i < stages.length; i++) {
      var stage = stages[i];
      if (!isStageVisible(stage)) continue;

      sawVisible = true;

      if (stage.getAttribute("data-spd-chrome") !== "true") return false;

      var readyEl = stage.querySelector("[data-spd-phone], [data-spd-window]");
      if (readyEl && !readyEl.classList.contains("is-ready")) return false;

      if (stage.getBoundingClientRect().height < 48) return false;
    }

    return sawVisible;
  }

  function tryRelease() {
    if (released) return;
    if (homeStagesReady()) release();
  }

  function scheduleFallback() {
    fallbackId = window.setTimeout(release, fallbackMs);
  }

  function boot() {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        release();
        return;
      }
    } catch (e) {
      /* ignore */
    }

    scheduleFallback();
    tryRelease();
  }

  window.ShroffinHomeBoot = {
    tryRelease: tryRelease,
    release: release,
  };

  window.addEventListener(
    "pageshow",
    function (event) {
      if (event.persisted) release();
    },
    { once: true }
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
