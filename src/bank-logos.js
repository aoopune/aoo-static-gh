"use strict";

/** bank_name (compare JSON) → 128×128 watermark PNG under images/banks/ */
const BANK_LOGO_FILES = {
  "Axis Bank": "axis-bank.png",
  "Bandhan Bank": "bandhan-bank.png",
  "Bank of Baroda": "bank-of-baroda.png",
  "Bank of India": "bank-of-india.png",
  "Bank of Maharashtra": "bank-of-maharashtra.png",
  "Canara Bank": "canara-bank.png",
  "Central Bank of India": "central-bank-of-india.png",
  "City Union Bank": "city-union-bank.png",
  "CSB Bank": "csb-bank.png",
  "DCB Bank": "dcb-bank.png",
  "Dhanlaxmi Bank": "dhanlaxmi-bank.png",
  "Federal Bank": "federal-bank.png",
  "HDFC Bank": "hdfc-bank.png",
  "ICICI Bank": "icici-bank.png",
  "IDBI Bank": "idbi-bank.png",
  "IDFC FIRST Bank": "idfc-first-bank.png",
  "Indian Bank": "indian-bank.png",
  "Indian Overseas Bank": "indian-overseas-bank.png",
  "IndusInd Bank": "indusind-bank.png",
  "Jammu and Kashmir Bank": "jammu-kashmir-bank.png",
  "Karnataka Bank": "karnataka-bank.png",
  "Karur Vysya Bank": "karur-vysya-bank.png",
  "Kotak Mahindra Bank": "kotak-mahindra-bank.png",
  "Nainital Bank": "nainital-bank.png",
  "Punjab & Sind Bank": "punjab-sind-bank.png",
  "Punjab National Bank": "punjab-national-bank.png",
  "RBL Bank": "rbl-bank.png",
  "South Indian Bank": "south-indian-bank.png",
  "State Bank of India": "state-bank-of-india.png",
  "Tamilnad Mercantile Bank": "tamilnad-mercantile-bank.png",
  "UCO Bank": "uco-bank.png",
  "Union Bank of India": "union-bank-of-india.png",
  "Yes Bank": "yes-bank.png"
};

const DEFAULT_BANK_LOGO_BASE = "../images/banks/";

function escapeAttr(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function bankLogoPath(bankName, basePath) {
  const file = BANK_LOGO_FILES[String(bankName || "").trim()];
  const base = basePath == null ? DEFAULT_BANK_LOGO_BASE : basePath;
  return file ? base + file : "";
}

function bankLogoHtml(bankName, basePath) {
  const src = bankLogoPath(bankName, basePath);
  if (!src) return "";
  return (
    '<img class="hlc-bank-logo" src="' +
    escapeAttr(src) +
    '" alt="" width="26" height="26" decoding="async" loading="lazy">'
  );
}

function createBankLogoImg(bankName, basePath) {
  const src = bankLogoPath(bankName, basePath);
  if (!src || typeof document === "undefined") return null;
  const img = document.createElement("img");
  img.className = "hlc-bank-logo";
  img.src = src;
  img.alt = "";
  img.width = 26;
  img.height = 26;
  img.decoding = "async";
  img.loading = "lazy";
  return img;
}

module.exports = {
  BANK_LOGO_FILES,
  DEFAULT_BANK_LOGO_BASE,
  bankLogoPath,
  bankLogoHtml,
  createBankLogoImg
};
