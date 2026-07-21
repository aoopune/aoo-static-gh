#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.resolve(
  process.argv[2] || path.join(__dirname, "..", "data", "apf-home-loan-projects.json")
);
const dataset = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const errors = [];
const correctedAreas = new Map([
  [4582, "Sadar Bazar"],
  [4623, "Sherpur"],
  [4644, "Yadrav"],
  [4673, "Javale"],
  [4728, "Malkapur"],
  [5977, "Curti"],
  [6004, "Banwadi"],
  [6411, "Rukmini Nagar"],
  [7317, "Bhadravathi Peth"],
  [7389, "Mangalwar Peth"],
  [7579, "Sakhar Peth"],
  [7590, "Kulgaon"],
  [8080, "Kasaba Bawada"],
  [8465, "Zaregaon"]
]);

function check(condition, message) {
  if (!condition) errors.push(message);
}

check(dataset.schema_version === 1, "schema_version must be 1");
check(dataset.metadata && typeof dataset.metadata === "object", "metadata is required");
check(Array.isArray(dataset.records), "records must be an array");

if (Array.isArray(dataset.records)) {
  check(dataset.records.length === 11597, "expected 11,597 source records");
  check(
    dataset.metadata.record_count === dataset.records.length,
    "metadata record_count does not match records"
  );

  const ids = new Set();
  let duplicateCount = 0;
  dataset.records.forEach((record, index) => {
    const label = `record ${index + 1}`;
    check(typeof record.id === "string" && record.id.length > 0, `${label}: id is required`);
    check(!ids.has(record.id), `${label}: duplicate id ${record.id}`);
    ids.add(record.id);
    check(Number.isInteger(record.source_row), `${label}: source_row must be an integer`);
    check(typeof record.bank_name === "string", `${label}: bank_name is required`);
    check(typeof record.developer_name === "string", `${label}: developer_name is required`);
    check(typeof record.project_name === "string", `${label}: project_name is required`);
    check(typeof record.area_name === "string", `${label}: area_name is required`);
    check(
      record.apf_code === null || typeof record.apf_code === "string",
      `${label}: apf_code must be text or null`
    );
    check(Array.isArray(record.rera_numbers), `${label}: rera_numbers must be an array`);
    check(
      Array.isArray(record.locality_lookup_sources),
      `${label}: locality_lookup_sources must be an array`
    );
    check(
      record.locality_lookup_sources.every((url) => /^https?:\/\//i.test(url)),
      `${label}: normalized source URLs must use HTTP(S)`
    );
    check(
      typeof record.state_name === "string" && typeof record.district_name === "string",
      `${label}: state and district are required`
    );
    check(record.search && typeof record.search === "object", `${label}: search keys are required`);
    check(record.quality && typeof record.quality === "object", `${label}: quality is required`);
    if (correctedAreas.has(record.source_row)) {
      check(
        record.area_name === correctedAreas.get(record.source_row),
        `${label}: corrected area_name does not match the verified value`
      );
      check(
        record.quality.location_status === "verified_override",
        `${label}: corrected location must be marked verified_override`
      );
    }
    if (record.quality && record.quality.exact_duplicate) duplicateCount += 1;
  });

  check(
    duplicateCount === dataset.metadata.exact_duplicate_record_count,
    "duplicate count does not match metadata"
  );
}

if (errors.length) {
  errors.forEach((error) => console.error(`APF validation: ${error}`));
  process.exit(1);
}

console.log(
  `APF validation passed: ${dataset.records.length} records, ` +
    `${dataset.metadata.exact_duplicate_record_count} exact duplicates flagged`
);
