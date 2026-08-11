(function () {
  var MQ = window.matchMedia("(max-width: 833px)");
  var CLOSE_DELAY_MS = 220;
  var VIEW_PAD = 16;
  var GAP = 8;
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

  function clearPlacement(popover) {
    if (!popover) return;
    popover.style.left = "";
    popover.style.top = "";
    popover.style.width = "";
    popover.style.maxWidth = "";
  }

  function rememberHome(popover) {
    if (popover._hlcHelpHome) return;
    popover._hlcHelpHome = {
      parent: popover.parentNode,
      next: popover.nextSibling,
    };
  }

  function portalToBody(popover) {
    rememberHome(popover);
    if (popover.parentNode !== document.body) {
      document.body.appendChild(popover);
    }
    popover.classList.add("is-portaled");
  }

  function restoreHome(popover) {
    if (!popover) return;
    var home = popover._hlcHelpHome;
    popover.classList.remove("is-portaled");
    clearPlacement(popover);
    if (!home || !home.parent) return;
    if (home.next && home.next.parentNode === home.parent) {
      home.parent.insertBefore(popover, home.next);
    } else {
      home.parent.appendChild(popover);
    }
  }

  /**
   * Fixed on body so drawers / details overflow can’t slice the tip.
   * (Absolute tips stay trapped inside overflow:clip / overflow:hidden ancestors.)
   */
  function placePopover(btn, popover) {
    if (!btn || !popover) return;

    portalToBody(popover);

    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var maxW = Math.min(17.5 * 16, vw - VIEW_PAD * 2);

    popover.style.width = maxW + "px";
    popover.style.maxWidth = maxW + "px";
    popover.style.left = VIEW_PAD + "px";
    popover.style.top = VIEW_PAD + "px";

    var btnRect = btn.getBoundingClientRect();
    var tipW = popover.offsetWidth;
    var tipH = popover.offsetHeight;

    var left = btnRect.left + btnRect.width / 2 - tipW / 2;
    left = Math.max(VIEW_PAD, Math.min(left, vw - VIEW_PAD - tipW));

    var top = btnRect.bottom + GAP;
    if (top + tipH > vh - VIEW_PAD) {
      var above = btnRect.top - GAP - tipH;
      if (above >= VIEW_PAD) top = above;
      else top = Math.max(VIEW_PAD, Math.min(top, vh - VIEW_PAD - tipH));
    }

    popover.style.left = Math.round(left) + "px";
    popover.style.top = Math.round(top) + "px";
  }

  function repositionOpen() {
    if (openBtn && openPopover) placePopover(openBtn, openPopover);
  }

  function setOpen(btn, popover, open) {
    if (!btn || !popover) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      popover.hidden = false;
      placePopover(btn, popover);
      void popover.offsetWidth;
      popover.classList.add("is-open");
      openBtn = btn;
      openPopover = popover;
      placePopover(btn, popover);
    } else {
      popover.classList.remove("is-open");
      popover.hidden = true;
      restoreHome(popover);
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

  window.addEventListener("scroll", repositionOpen, true);
  window.addEventListener("resize", repositionOpen);

  if (typeof MQ.addEventListener === "function") {
    MQ.addEventListener("change", closeAll);
  } else if (typeof MQ.addListener === "function") {
    MQ.addListener(closeAll);
  }
})();
