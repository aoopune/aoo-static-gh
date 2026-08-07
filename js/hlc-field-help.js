(function () {
  var MQ = window.matchMedia("(max-width: 833px)");
  var CLOSE_DELAY_MS = 220;
  var openBtn = null;
  var openPopover = null;
  var closeTimer = null;

  function isMobile() {
    return MQ.matches;
  }

  function clearCloseTimer() {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  }

  function setOpen(btn, popover, open) {
    if (!btn || !popover) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      popover.hidden = false;
      void popover.offsetWidth;
      popover.classList.add("is-open");
      openBtn = btn;
      openPopover = popover;
    } else {
      popover.classList.remove("is-open");
      popover.hidden = true;
      if (openBtn === btn) {
        openBtn = null;
        openPopover = null;
      }
    }
  }

  function closeAll() {
    clearCloseTimer();
    if (!openBtn) return;
    setOpen(openBtn, openPopover, false);
  }

  function openFrom(btn) {
    var id = btn.getAttribute("aria-controls");
    var popover = id ? document.getElementById(id) : null;
    if (!popover) return;
    if (openBtn && openBtn !== btn) closeAll();
    clearCloseTimer();
    setOpen(btn, popover, true);
  }

  function scheduleClose(btn) {
    clearCloseTimer();
    closeTimer = setTimeout(function () {
      if (openBtn === btn) closeAll();
    }, CLOSE_DELAY_MS);
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest(".hlc-field-help");
    var inPopover = event.target.closest(".hlc-field-help-popover");

    if (btn) {
      event.preventDefault();
      event.stopPropagation();
      if (openBtn === btn) closeAll();
      else openFrom(btn);
      return;
    }

    if (inPopover) return;
    if (openBtn) closeAll();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && openBtn) {
      var btn = openBtn;
      closeAll();
      btn.focus();
    }
  });

  document.addEventListener(
    "focusin",
    function (event) {
      var btn = event.target.closest(".hlc-field-help");
      var inPopover = event.target.closest(".hlc-field-help-popover");
      if (isMobile()) return;
      if (btn) openFrom(btn);
      else if (!inPopover && openBtn) closeAll();
    },
    true
  );

  document.addEventListener("pointerover", function (event) {
    if (isMobile()) return;
    var btn = event.target.closest(".hlc-field-help");
    var pop = event.target.closest(".hlc-field-help-popover");
    if (btn) {
      openFrom(btn);
      return;
    }
    if (pop && openPopover === pop) clearCloseTimer();
  });

  document.addEventListener("pointerout", function (event) {
    if (isMobile()) return;
    var btn = event.target.closest(".hlc-field-help");
    var pop = event.target.closest(".hlc-field-help-popover");
    var related = event.relatedTarget;
    if (btn) {
      if (related && (btn.contains(related) || (openPopover && openPopover.contains(related)))) return;
      scheduleClose(btn);
      return;
    }
    if (pop && openBtn) {
      if (related && (pop.contains(related) || openBtn.contains(related))) return;
      scheduleClose(openBtn);
    }
  });

  if (typeof MQ.addEventListener === "function") {
    MQ.addEventListener("change", closeAll);
  } else if (typeof MQ.addListener === "function") {
    MQ.addListener(closeAll);
  }
})();
