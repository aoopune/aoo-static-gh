/**
 * Home “Built around you” topic switcher.
 * One open item at a time; visual stage follows the active topic.
 * On phone, the stage sits under the open item.
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
  var activeIndex = 0;

  function findInitialIndex() {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains("is-open")) return i;
    }
    return 0;
  }

  function placeStage(index) {
    if (mq.matches) {
      var slot = items[index].querySelector("[data-built-mobile-slot]");
      if (slot && stage.parentElement !== slot) {
        slot.appendChild(stage);
      }
      return;
    }
    if (stage.parentElement !== stageHome) {
      stageHome.appendChild(stage);
    }
  }

  function setOpen(index, options) {
    var opts = options || {};
    if (index < 0 || index >= items.length) return;
    if (!opts.force && index === activeIndex) return;

    activeIndex = index;

    items.forEach(function (item, i) {
      var open = i === index;
      var trigger = item.querySelector("[data-built-trigger]");
      var body = item.querySelector("[data-built-body]");

      item.classList.toggle("is-open", open);

      if (trigger) {
        trigger.setAttribute("aria-expanded", open ? "true" : "false");
      }

      if (body) {
        body.setAttribute("aria-hidden", open ? "false" : "true");
      }
    });

    visuals.forEach(function (visual) {
      var match = String(visual.getAttribute("data-built-visual")) === String(index);
      visual.classList.toggle("is-active", match);
    });

    placeStage(index);
  }

  items.forEach(function (item, index) {
    var trigger = item.querySelector("[data-built-trigger]");
    if (!trigger) return;

    trigger.addEventListener("click", function () {
      setOpen(index, { force: true });
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
  setOpen(activeIndex, { force: true });
})();
