/**
 * Explore Banks — Material Symbols icons + custom icon listbox.
 *
 * One glyph registry (ICONS): path data only lives here. Markup names the
 * icon (`data-hlc-icon` on field hosts; `data-icon` on <option>s). This
 * module paints SVGs for field leading icons and for select faces/menus.
 *
 * Select: one open menu at a time; lists portal to document.body +
 * position:fixed (same model as hlc-field-help.js). Native OS popup never
 * opens after enhance. Escape closes.
 *
 * Also: M3 outlined field populated/focus class sync.
 *
 * Glyphs: Material Symbols outlined (fill=0), 24px, viewBox 0 -960 960 960.
 */
(function (global) {
  "use strict";

  var OPEN_ATTR = "data-hlc-icon-select-open";
  var ROOT_SEL = "[data-hlc-icon-select]";
  var FIELD_ICON_SEL = "[data-hlc-icon]";
  var openRoot = null;
  var openList = null;

  /** Material Symbols outlined path `d` values — single source of truth. */
    var ICONS = {
    person:
      "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z",
    person_add:
      "M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z",
    home:
      "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",
    add_home:
      "M700-200h40v-100h100v-40H740v-100h-40v100H600v40h100v100Zm20 80q-83 0-141.5-58.5T520-320q0-83 58.5-141.5T720-520q83 0 141.5 58.5T920-320q0 83-58.5 141.5T720-120Zm-560-80v-480l320-240 320 240v92q-19-6-39-9t-41-3v-40L480-820 240-640v360h203q3 21 9 41t15 39H160Zm320-350Z",
    work:
      "M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z",
    enterprise:
      "M480-340q33 0 56.5-23.5T560-420q0-33-23.5-56.5T480-500q-33 0-56.5 23.5T400-420q0 33 23.5 56.5T480-340ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z",
    arrow_drop_down:
      "M480-360 280-560h400L480-360Z",
    apartment:
      "M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z",
    calendar_today:
      "M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z",
    wallet:
      "M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z",
    currency_rupee:
      "M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z",
    payments:
      "M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z",
    credit_card:
      "M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z",
    speed:
      "M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z",
    elderly:
      "m320-40-64-48 104-139v-213q0-31 5-67.5t15-67.5l-60 33v142h-80v-188l176-100q25-14 43.5-21.5T494-717q25 0 45.5 21.5T587-628q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v420h-40v-420q0-8-6-14t-14-6q-8 0-14 6t-6 14v50h-40v-19q-54-23-84-51.5T543-557q-11 28-17.5 68.5T521-412l79 112v260h-80v-200l-71-102-9 142L320-40Zm220-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z",
    person_off:
      "M791-55 686-160H160v-112q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L55-791l57-57 736 736-57 57ZM240-240h366L486-360h-6q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm496-138q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480-720q-25 0-45.5 14T405-669l-59-59q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Zm38 266H240h366ZM457-617Z"
  };

  function svg(name, cls) {
    var d = ICONS[name];
    if (!d) return "";
    return (
      '<svg class="' +
      (cls || "hlc-field-icon-svg") +
      '" width="24" height="24" viewBox="0 -960 960 960" aria-hidden="true" focusable="false"><path fill="currentColor" d="' +
      d +
      '"/></svg>'
    );
  }

  /**
   * Paint every `[data-hlc-icon="name"]` host from ICONS.
   * Markup owns the name; this module owns the path. Idempotent.
   */
  function paintFieldIcons(scope) {
    var rootEl = scope && scope.querySelectorAll ? scope : document;
    rootEl.querySelectorAll(FIELD_ICON_SEL).forEach(function (host) {
      var name = host.getAttribute("data-hlc-icon");
      if (!name || !ICONS[name]) return;
      var next = svg(name, "hlc-field-icon-svg");
      if (host.innerHTML !== next) host.innerHTML = next;
    });
  }

  function optionIcon(select, option) {
    var root = select.closest("[data-hlc-icon-select]");
    var mapName =
      select.getAttribute("data-hlc-icon-map") ||
      (root && root.getAttribute("data-hlc-icon-map")) ||
      "";
    if (mapName === "relation") return "person";
    if (mapName === "foir" || mapName === "cardLoad") return "";
    var key = option.getAttribute("data-icon");
    if (key) return key;
    var v = option.value;
    if (mapName === "applicant") return v === "yes" ? "person_add" : "person";
    if (mapName === "purpose")
      return v === "Top-up Loan" ? "add_home" : "home";
    if (mapName === "occupation" || mapName === "coOccupation") {
      if (v === "Self-Employed" || v === "Self-employed") return "enterprise";
      if (v === "Pensioner") return "elderly";
      if (v === "Not earning") return "person_off";
      return "work";
    }
    return "";
  }

  function faceLabel(option, select) {
    var face = option.getAttribute("data-face");
    if (face) return face;
    var root = select.closest("[data-hlc-icon-select]");
    var mapName =
      select.getAttribute("data-hlc-icon-map") ||
      (root && root.getAttribute("data-hlc-icon-map")) ||
      "";
    if (mapName === "foir") {
      return "FOIR " + String(option.value || "") + "%";
    }
    if (mapName === "cardLoad") {
      return String(option.value || "") + "%";
    }
    return (option.textContent || "").trim();
  }

  function syncFace(root) {
    var select = root.querySelector("select");
    var iconHost = root.querySelector("[data-hlc-icon-face]");
    var textHost = root.querySelector("[data-hlc-face-text]");
    if (!select || !select.selectedOptions[0]) return;
    var opt = select.selectedOptions[0];
    var icon = optionIcon(select, opt);
    if (iconHost) {
      var mark = icon ? svg(icon, "hlc-field-icon-svg") : "";
      iconHost.innerHTML = mark;
      iconHost.hidden = !mark;
    }
    if (textHost) textHost.textContent = faceLabel(opt, select);
  }

  function rememberHome(list) {
    if (list._hlcIconListHome) return;
    list._hlcIconListHome = {
      parent: list.parentNode,
      next: list.nextSibling
    };
  }

  function portalToBody(list) {
    rememberHome(list);
    if (list.parentNode !== document.body) {
      document.body.appendChild(list);
    }
    list.classList.add("is-portaled");
  }

  function restoreHome(list) {
    if (!list) return;
    var home = list._hlcIconListHome;
    list.classList.remove("is-portaled");
    clearListFixed(list);
    if (!home || !home.parent) return;
    if (home.next && home.next.parentNode === home.parent) {
      home.parent.insertBefore(list, home.next);
    } else {
      home.parent.appendChild(list);
    }
  }

  function placeListFixed(root) {
    var list = openList || (root && root.querySelector("[data-hlc-icon-list]"));
    var btn = root && root.querySelector("[data-hlc-icon-trigger]");
    if (!list || !btn) return;
    portalToBody(list);
    openList = list;
    var r = btn.getBoundingClientRect();
    list.style.position = "fixed";
    list.style.zIndex = "80";
    list.style.left = Math.round(r.left) + "px";
    list.style.top = Math.round(r.bottom + 4) + "px";
    list.style.minWidth = Math.max(r.width, 192) + "px";
    list.style.right = "auto";
  }

  function clearListFixed(list) {
    if (!list) return;
    list.style.position = list.style.zIndex = list.style.left =
      list.style.top = list.style.minWidth = list.style.right = "";
  }

  function closeOpen() {
    if (!openRoot) return;
    var list = openList || openRoot.querySelector("[data-hlc-icon-list]");
    openRoot.removeAttribute(OPEN_ATTR);
    if (list) {
      list.hidden = true;
      restoreHome(list);
    }
    var btn = openRoot.querySelector("[data-hlc-icon-trigger]");
    if (btn) btn.setAttribute("aria-expanded", "false");
    openRoot = null;
    openList = null;
  }

  function buildList(root) {
    var select = root.querySelector("select");
    var list = root.querySelector("[data-hlc-icon-list]") || openList;
    if (!select || !list) return;
    list.innerHTML = "";
    Array.prototype.forEach.call(select.options, function (opt, i) {
      if (opt.disabled) return;
      var icon = optionIcon(select, opt);
      var row = document.createElement("button");
      row.type = "button";
      row.className = "hlc-icon-select-option";
      row.setAttribute("role", "option");
      row.setAttribute("data-index", String(i));
      if (opt.selected) row.setAttribute("aria-selected", "true");
      row.innerHTML =
        (icon
          ? '<span class="hlc-icon-select-option-icon">' +
            svg(icon, "hlc-field-icon-svg") +
            "</span>"
          : "") +
        '<span class="hlc-icon-select-option-label">' +
        faceLabel(opt, select) +
        "</span>";
      row.addEventListener("click", function () {
        select.selectedIndex = i;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        syncFace(root);
        closeOpen();
      });
      list.appendChild(row);
    });
  }

  function openRootMenu(root) {
    if (openRoot && openRoot !== root) closeOpen();
    buildList(root);
    root.setAttribute(OPEN_ATTR, "true");
    var list = root.querySelector("[data-hlc-icon-list]");
    if (list) list.hidden = false;
    var btn = root.querySelector("[data-hlc-icon-trigger]");
    if (btn) btn.setAttribute("aria-expanded", "true");
    openRoot = root;
    placeListFixed(root);
  }

  function enhance(root) {
    if (root.getAttribute("data-hlc-icon-select-ready") === "1") {
      syncFace(root);
      return;
    }
    var select = root.querySelector("select");
    if (!select) return;
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");
    var chev = root.querySelector(".hlc-icon-select-chevron");
    if (chev && !chev.innerHTML) {
      chev.innerHTML = svg("arrow_drop_down", "hlc-field-icon-svg hlc-chevron-svg");
    }
    select.addEventListener("change", function () {
      syncFace(root);
    });
    var trigger = root.querySelector("[data-hlc-icon-trigger]");
    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        if (openRoot === root) closeOpen();
        else openRootMenu(root);
      });
    }
    root.setAttribute("data-hlc-icon-select-ready", "1");
    syncFace(root);
  }

  function refresh(scope) {
    var rootEl = scope && scope.querySelectorAll ? scope : document;
    paintFieldIcons(rootEl);
    rootEl.querySelectorAll(ROOT_SEL).forEach(enhance);
  }

  document.addEventListener("click", function (e) {
    if (!openRoot) return;
    if (openRoot.contains(e.target)) return;
    if (openList && openList.contains(e.target)) return;
    closeOpen();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOpen();
  });
  document.addEventListener(
    "scroll",
    function () {
      if (openRoot) closeOpen();
    },
    true
  );
  window.addEventListener("resize", function () {
    if (openRoot) closeOpen();
  });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", function () {
      if (openRoot) placeListFixed(openRoot);
    });
    window.visualViewport.addEventListener("scroll", function () {
      if (openRoot) placeListFixed(openRoot);
    });
  }

  /**
   * M3 field state — JS mirror of DOM truth for programmatic writes.
   * CSS paints active fields from :placeholder-shown + :focus-within first;
   * these classes stay aligned after setInputValue / draft restore.
   * - is-focused   → document.activeElement is the control
   * - is-populated → trimmed value is non-empty (never set just because focused)
   */
  function syncField(field) {
    if (!field) return;
    var input = field.querySelector("input, textarea");
    if (!input) return;
    var focused = document.activeElement === input;
    var populated = String(input.value || "").trim() !== "";
    field.classList.toggle("is-focused", focused);
    field.classList.toggle("is-populated", populated);
  }

  function bindM3Fields(scope) {
    var rootEl = scope && scope.querySelectorAll ? scope : document;
    rootEl.querySelectorAll(".hlc-field--m3-outlined").forEach(function (field) {
      var input = field.querySelector("input, textarea");
      if (!input) return;
      if (input.getAttribute("data-hlc-m3-bound") !== "1") {
        input.setAttribute("data-hlc-m3-bound", "1");
        ["focus", "blur", "input", "change"].forEach(function (ev) {
          input.addEventListener(ev, function () {
            syncField(field);
          });
        });
      }
      syncField(field);
    });
  }

  /**
   * Drop residual identity transforms after entrance. Animating to
   * `none` can leave matrix(1,0,0,1,0,0), which still creates a fixed
   * containing block for any non-portaled overlays.
   */
  function markInputsCardInteractive(card) {
    if (card) card.classList.add("is-interactive");
  }

  function settleInputsCard(card) {
    if (!card || card.getAttribute("data-hlc-card-settled") === "1") return;
    var interactiveMarked = false;
    function markInteractiveOnce() {
      if (interactiveMarked) return;
      interactiveMarked = true;
      markInputsCardInteractive(card);
    }
    function finish() {
      if (card.getAttribute("data-hlc-card-settled") === "1") return;
      card.setAttribute("data-hlc-card-settled", "1");
      card.classList.add("is-settled");
      markInteractiveOnce();
    }
    card.addEventListener("animationend", function onEnd(e) {
      if (e.target !== card) return;
      /* M3 label/value motion may run once fade-in completes — do not wait for scale. */
      if (e.animationName === "hlc-fade-in") markInteractiveOnce();
      if (e.animationName !== "hlc-card-open" && e.animationName !== "hlc-fade-in") return;
      if (e.animationName === "hlc-card-open") {
        card.removeEventListener("animationend", onEnd);
        finish();
      }
    });
    window.setTimeout(finish, 2200);
  }

  function settleCards(scope) {
    var rootEl = scope && scope.querySelectorAll ? scope : document;
    rootEl.querySelectorAll(".hlc-inputs-card").forEach(settleInputsCard);
  }

  global.ShroffinSelectMenu = {
    refresh: refresh,
    paintFieldIcons: paintFieldIcons,
    svg: svg,
    ICONS: ICONS
  };
  global.HlcM3Fields = { bind: bindM3Fields, sync: syncField };

  function boot(scope) {
    var rootEl = scope && scope.querySelectorAll ? scope : document;
    paintFieldIcons(rootEl);
    refresh(rootEl);
    bindM3Fields(rootEl);
    settleCards(rootEl);
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        rootEl.querySelectorAll(".hlc-inputs-card").forEach(markInputsCardInteractive);
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      boot(document);
    });
  } else {
    boot(document);
  }
})(typeof window !== "undefined" ? window : globalThis);
