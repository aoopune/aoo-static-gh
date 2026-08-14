/**
 * Home “Built around you” topic switcher.
 * One open item at a time; visual stage follows the active topic.
 * On phone, the stage sits under the open item and height is animated
 * so open/close does not snap.
 */
(function () {
  "use strict";

  var root = document.querySelector("[data-home-built]");
  if (!root) return;

  var items = Array.prototype.slice.call(root.querySelectorAll("[data-built-item]"));
  var stage = root.querySelector("[data-built-stage]");
  var stageHome = root.querySelector(".home-built-layout");
  var visuals = Array.prototype.slice.call(root.querySelectorAll("[data-built-visual]"));
  if (!items.length || !stage || !stageHome) return;

  var mq = window.matchMedia("(max-width: 833px)");
  var reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  var CLOSE_MS = 1000;
  var activeIndex = 0;
  var busy = false;
  var queued = null;

  function findInitialIndex() {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains("is-open")) return i;
    }
    return 0;
  }

  function prefersReduced() {
    return reduceMq.matches;
  }

  function ensureClip(slot) {
    var clip = slot.querySelector(".home-built-mobile-slot-clip");
    if (clip) return clip;
    clip = document.createElement("div");
    clip.className = "home-built-mobile-slot-clip";
    slot.appendChild(clip);
    return clip;
  }

  function placeStage(index) {
    if (mq.matches) {
      var slot = items[index].querySelector("[data-built-mobile-slot]");
      if (!slot) return;
      var clip = ensureClip(slot);
      if (stage.parentElement !== clip) clip.appendChild(stage);
      return;
    }
    if (stage.parentElement !== stageHome) {
      stageHome.appendChild(stage);
    }
  }

  function setItemOpen(item, open) {
    var trigger = item.querySelector("[data-built-trigger]");
    var body = item.querySelector("[data-built-body]");
    item.classList.toggle("is-open", open);
    if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
    if (body) body.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function setVisuals(index) {
    visuals.forEach(function (visual) {
      var match = String(visual.getAttribute("data-built-visual")) === String(index);
      visual.classList.toggle("is-active", match);
    });
  }

  function paintAll(index) {
    activeIndex = index;
    items.forEach(function (item, i) {
      setItemOpen(item, i === index);
    });
    setVisuals(index);
    placeStage(index);
  }

  function waitForClose(item, done) {
    if (prefersReduced()) {
      done();
      return;
    }
    var slot = item.querySelector("[data-built-mobile-slot]");
    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      if (slot) slot.removeEventListener("transitionend", onEnd);
      window.clearTimeout(tid);
      done();
    }
    function onEnd(e) {
      if (e.target !== slot) return;
      if (e.propertyName && e.propertyName.indexOf("grid") === -1) return;
      finish();
    }
    var tid = window.setTimeout(finish, CLOSE_MS);
    if (slot) slot.addEventListener("transitionend", onEnd);
  }

  function openIncoming(index) {
    placeStage(index);
    setVisuals(index);
    void items[index].offsetHeight;
    setItemOpen(items[index], true);
    activeIndex = index;
    busy = false;
    if (queued !== null && queued !== activeIndex) {
      var next = queued;
      queued = null;
      setOpen(next);
      return;
    }
    queued = null;
  }

  function setOpen(index, options) {
    var opts = options || {};
    if (index < 0 || index >= items.length) return;

    var instant = opts.immediate || !mq.matches || prefersReduced();
    if (index === activeIndex && !opts.immediate) return;

    if (instant) {
      paintAll(index);
      return;
    }

    if (busy) {
      queued = index;
      return;
    }

    busy = true;
    var prevItem = items[activeIndex];
    setItemOpen(prevItem, false);
    waitForClose(prevItem, function () {
      openIncoming(index);
    });
  }

  items.forEach(function (item, index) {
    var trigger = item.querySelector("[data-built-trigger]");
    if (!trigger) return;

    trigger.addEventListener("click", function () {
      setOpen(index);
    });
  });

  function onViewportChange() {
    placeStage(activeIndex);
  }

  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onViewportChange);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onViewportChange);
  }

  activeIndex = findInitialIndex();
  setOpen(activeIndex, { immediate: true });
})();
