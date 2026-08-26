"use strict";

const { Engine } = require("json-rules-engine");
const apfUiCopy = require("./generated/apf-ui-copy.js");

function ui(id, fallback) {
  const v = apfUiCopy[id];
  return v != null && String(v) !== "" ? String(v) : fallback;
}

function uiTemplate(id, fallback, vars) {
  let out = ui(id, fallback);
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      out = out.split("{" + k + "}").join(String(vars[k]));
    });
  }
  return out;
}

const PAGE_SIZE = 50;
const ACTIVITY_MIN_MS = 500;

function normalize(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function queryFromValues(values) {
  return {
    developer_name: normalize(values.developer_name),
    project_name: normalize(values.project_name),
    area_name: normalize(values.area_name)
  };
}

function hasAnyInput(query) {
  return Boolean(query.developer_name || query.project_name || query.area_name);
}

function prefilterRecord(record, query) {
  const search = record.search || {};
  return (
    String(search.developer_name || "").includes(query.developer_name) &&
    String(search.project_name || "").includes(query.project_name) &&
    String(search.area_name || "").includes(query.area_name)
  );
}

function resultKey(record) {
  return [
    record.bank_name,
    record.developer_name,
    record.project_name,
    record.area_name,
    record.apf_code,
    record.rera_no_raw
  ]
    .map(normalize)
    .join("|");
}

function dedupeResults(records) {
  const seen = new Set();
  return records.filter((record) => {
    const key = resultKey(record);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function createSearchEngine() {
  const engine = new Engine();
  engine.addOperator("textIncludes", (factValue, queryValue) => {
    return normalize(factValue).includes(normalize(queryValue));
  });
  engine.addRule({
    name: "project-approval-search",
    conditions: {
      all: [
        {
          fact: "developer_name",
          operator: "textIncludes",
          value: { fact: "developer_query" }
        },
        {
          fact: "project_name",
          operator: "textIncludes",
          value: { fact: "project_query" }
        },
        {
          fact: "area_name",
          operator: "textIncludes",
          value: { fact: "area_query" }
        }
      ]
    },
    event: { type: "project-approval-match" }
  });
  return engine;
}

async function matchesRules(engine, record, query) {
  const result = await engine.run({
    developer_name: record.developer_name,
    project_name: record.project_name,
    area_name: record.area_name,
    developer_query: query.developer_name,
    project_query: query.project_name,
    area_query: query.area_name
  });
  return result.events.some((event) => event.type === "project-approval-match");
}

function uniqueSorted(records, field, filters) {
  const values = new Map();
  records.forEach((record) => {
    if (
      filters &&
      ((filters.developer_name &&
        !normalize(record.developer_name).includes(filters.developer_name)) ||
        (filters.project_name &&
          !normalize(record.project_name).includes(filters.project_name)) ||
        (filters.area_name && !normalize(record.area_name).includes(filters.area_name)))
    ) {
      return;
    }
    const value = String(record[field] || "").trim();
    if (value) values.set(normalize(value), value);
  });
  return Array.from(values.values())
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }))
    .slice(0, 250);
}

function createResultRow(record) {
  const row = document.createElement("tr");
  row.setAttribute("data-testid", "apf-result-row");
  [
    { value: record.bank_name, className: "apf-table-bank" },
    { value: record.project_name },
    { value: record.developer_name },
    { value: record.area_name }
  ].forEach(({ value, className }) => {
    const cell = document.createElement("td");
    if (className) cell.className = className;
    cell.textContent = String(value || "—");
    row.appendChild(cell);
  });
  return row;
}

function initPage() {
  const form = document.getElementById("apf-search-form");
  if (!form) return;

  const developerInput = document.getElementById("apf-developer");
  const projectInput = document.getElementById("apf-project");
  const areaInput = document.getElementById("apf-area");
  const developerList = document.getElementById("apf-developer-options");
  const projectList = document.getElementById("apf-project-options");
  const areaList = document.getElementById("apf-area-options");
  const submit = document.getElementById("apf-submit");
  const status = document.getElementById("apf-status");
  const resultSection = document.querySelector(".apf-result-section");
  const tableScroll = document.querySelector(".apf-table-scroll");
  const activity = document.getElementById("apf-activity");
  const results = document.getElementById("apf-results");
  const moreButton = document.getElementById("apf-more");

  let records = [];
  let visibleResults = [];
  let shown = 0;
  let searchVersion = 0;
  const engine = createSearchEngine();
  const autocompleteFields = [
    { input: projectInput, list: projectList, field: "project_name" },
    { input: developerInput, list: developerList, field: "developer_name" },
    { input: areaInput, list: areaList, field: "area_name" }
  ].map((config) => ({ ...config, options: [], activeIndex: -1 }));

  function values() {
    return {
      developer_name: developerInput.value,
      project_name: projectInput.value,
      area_name: areaInput.value
    };
  }

  function closeOptions(config) {
    config.options = [];
    config.activeIndex = -1;
    config.list.hidden = true;
    config.list.replaceChildren();
    config.input.setAttribute("aria-expanded", "false");
    config.input.removeAttribute("aria-activedescendant");
  }

  function closeAllOptions(except) {
    autocompleteFields.forEach((config) => {
      if (config !== except) closeOptions(config);
    });
  }

  function setActiveOption(config, index) {
    const items = Array.from(config.list.children);
    if (!items.length) return;
    const nextIndex = Math.max(0, Math.min(index, items.length - 1));
    config.activeIndex = nextIndex;
    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === nextIndex;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    const activeItem = items[nextIndex];
    config.input.setAttribute("aria-activedescendant", activeItem.id);
    activeItem.scrollIntoView({ block: "nearest" });
  }

  function selectOption(config, value) {
    config.input.value = value;
    closeOptions(config);
  }

  function renderOptions(config) {
    const inputQuery = normalize(config.input.value);
    closeAllOptions(config);
    if (!inputQuery || !records.length) {
      closeOptions(config);
      return;
    }

    const optionValues = uniqueSorted(records, config.field, queryFromValues(values()))
      .sort((a, b) => {
        const aStarts = normalize(a).startsWith(inputQuery);
        const bStarts = normalize(b).startsWith(inputQuery);
        if (aStarts !== bStarts) return aStarts ? -1 : 1;
        return a.localeCompare(b, "en", { sensitivity: "base" });
      });
    if (!optionValues.length) {
      closeOptions(config);
      return;
    }

    const fragment = document.createDocumentFragment();
    optionValues.forEach((value) => {
      const option = document.createElement("li");
      option.className = "apf-option";
      option.id = `${config.list.id}-${fragment.childElementCount}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.textContent = value;
      option.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        selectOption(config, value);
      });
      fragment.appendChild(option);
    });
    config.options = optionValues;
    config.activeIndex = -1;
    config.list.replaceChildren(fragment);
    config.list.hidden = false;
    config.input.setAttribute("aria-expanded", "true");
  }

  function renderNextPage() {
    const end = Math.min(shown + PAGE_SIZE, visibleResults.length);
    const fragment = document.createDocumentFragment();
    for (let index = shown; index < end; index += 1) {
      fragment.appendChild(createResultRow(visibleResults[index]));
    }
    results.appendChild(fragment);
    shown = end;
    moreButton.hidden = shown >= visibleResults.length;
    if (!moreButton.hidden) {
      moreButton.textContent = `Show ${Math.min(
        PAGE_SIZE,
        visibleResults.length - shown
      )} more`;
    }
  }

  function setSearching(isSearching) {
    submit.disabled = isSearching;
    submit.textContent = isSearching
      ? ui("btn.finding", "Finding banks")
      : ui("btn.find", "Find banks");
    resultSection.setAttribute("aria-busy", String(isSearching));
  }

  function hideActivity() {
    activity.hidden = true;
  }

  function showActivity() {
    resultSection.hidden = false;
    tableScroll.hidden = true;
    tableScroll.classList.remove("is-revealing");
    activity.hidden = false;
  }

  async function nextPaint() {
    await new Promise((resolve) => {
      window.requestAnimationFrame(() => window.setTimeout(resolve, 0));
    });
  }

  async function wait(milliseconds) {
    if (milliseconds <= 0) return;
    await new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  function scrollToResults() {
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resultSection.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start"
    });
  }

  async function runSearch(event) {
    if (event) event.preventDefault();
    closeAllOptions();
    const query = queryFromValues(values());
    const version = ++searchVersion;
    results.replaceChildren();
    resultSection.hidden = true;
    tableScroll.hidden = false;
    tableScroll.classList.remove("is-revealing");
    moreButton.hidden = true;
    hideActivity();

    if (!hasAnyInput(query)) {
      status.textContent = ui(
        "status.enter",
        "Enter a project, developer, or area to find matching banks."
      );
      return;
    }

    setSearching(true);
    status.textContent = ui("status.checking", "Checking matching bank records.");
    showActivity();
    const activityStartedAt = performance.now();

    try {
      await nextPaint();
      const candidates = records.filter((record) => prefilterRecord(record, query));
      const checks = await Promise.all(
        candidates.map(async (record) => ({
          record,
          matches: await matchesRules(engine, record, query)
        }))
      );
      if (version !== searchVersion) return;
      await wait(ACTIVITY_MIN_MS - (performance.now() - activityStartedAt));
      if (version !== searchVersion) return;

      visibleResults = dedupeResults(
        checks.filter((check) => check.matches).map((check) => check.record)
      ).sort((a, b) => {
        return (
          String(a.bank_name).localeCompare(String(b.bank_name), "en", {
            sensitivity: "base"
          }) || a.source_row - b.source_row
        );
      });
      shown = 0;

      if (!visibleResults.length) {
        status.textContent = ui("status.none", "No matching bank records found.");
        resultSection.hidden = true;
        return;
      }

      status.textContent =
        visibleResults.length === 1
          ? uiTemplate("status.found_singular", "Found {count} matching bank record.", {
              count: visibleResults.length
            })
          : uiTemplate("status.found_plural", "Found {count} matching bank records.", {
              count: visibleResults.length
            });
      hideActivity();
      resultSection.hidden = false;
      renderNextPage();
      tableScroll.hidden = false;
      void tableScroll.offsetWidth;
      tableScroll.classList.add("is-revealing");
      scrollToResults();
    } catch (error) {
      console.error(error);
      status.textContent = ui(
        "status.error",
        "Bank records could not be checked. Please try again."
      );
      resultSection.hidden = true;
    } finally {
      if (version === searchVersion) {
        hideActivity();
        setSearching(false);
      }
    }
  }

  autocompleteFields.forEach((config) => {
    config.input.addEventListener("input", () => renderOptions(config));
    config.input.addEventListener("keydown", (event) => {
      if (config.list.hidden) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveOption(config, config.activeIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveOption(
          config,
          config.activeIndex < 0 ? config.options.length - 1 : config.activeIndex - 1
        );
      } else if (event.key === "Enter" && config.activeIndex >= 0) {
        event.preventDefault();
        selectOption(config, config.options[config.activeIndex]);
      } else if (event.key === "Escape") {
        event.preventDefault();
        closeOptions(config);
      }
    });
    config.input.addEventListener("blur", () => closeOptions(config));
  });
  document.addEventListener("pointerdown", (event) => {
    if (!form.contains(event.target)) closeAllOptions();
  });
  form.addEventListener("submit", runSearch);
  moreButton.addEventListener("click", renderNextPage);

  fetch("../data/apf-home-loan-projects.json", { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`Dataset request failed: ${response.status}`);
      return response.json();
    })
    .then((dataset) => {
      if (!dataset || !Array.isArray(dataset.records)) {
        throw new Error("Dataset format is invalid");
      }
      records = dataset.records;
      form.dataset.ready = "true";
      submit.disabled = false;
      status.textContent = "";
    })
    .catch((error) => {
      console.error(error);
      status.textContent = ui(
        "status.unavailable",
        "Project bank data is temporarily unavailable."
      );
      submit.disabled = true;
    });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage, { once: true });
  } else {
    initPage();
  }
}

module.exports = {
  createSearchEngine,
  dedupeResults,
  hasAnyInput,
  matchesRules,
  normalize,
  prefilterRecord,
  queryFromValues,
  resultKey,
  uniqueSorted
};
