/**
 * LANGUAGE TOGGLE & CURRENCY SYSTEM
 * EN/DE with USD/EUR support
 */
// CONFIG ist global verfügbar über window.CONFIG

//import { CONFIG } from './config.js';

// Get current language from localStorage or default to EN
let currentLang = localStorage.getItem("lang") || "en";

// Set initial language
document.body.setAttribute("data-lang", currentLang);

// Update all translatable elements
function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.body.setAttribute("data-lang", lang);

  // Update all elements with data-en/data-de attributes
  document.querySelectorAll("[data-en]").forEach((el) => {
    const key = lang === "en" ? "en" : "de";
    const text = el.getAttribute(`data-${key}`);
    if (text) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update language toggle button
  const langToggle = document.querySelector(".nav__lang-toggle");
  if (langToggle) {
    const current = langToggle.querySelector(".nav__lang-current");
    const alt = langToggle.querySelector(".nav__lang-alt");
    if (lang === "en") {
      current.textContent = "EN";
      alt.textContent = "DE";
    } else {
      current.textContent = "DE";
      alt.textContent = "EN";
    }
  }

  // Update prices (trigger re-render if prices are displayed)
  updatePrices(lang);

  // Dispatch custom event for other modules
  document.dispatchEvent(
    new CustomEvent("languageChanged", { detail: { lang } })
  );
}

// Format price based on language
function formatPrice(amount, lang) {
  const currency = lang === "en" ? "USD" : "EUR";
  const symbol = lang === "en" ? "$" : "€";

  return new Intl.NumberFormat(lang === "en" ? "en-US" : "de-DE", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Get price based on language
function getPrice(priceUSD, priceEUR, lang) {
  return lang === "en" ? priceUSD : priceEUR;
}

// Update all prices on page
function updatePrices(lang) {
  // This will be called when prices are rendered
  // Actual price rendering happens in app.js
  document.dispatchEvent(
    new CustomEvent("pricesNeedUpdate", { detail: { lang } })
  );
}

// Language toggle button handler
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.querySelector(".nav__lang-toggle");

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "de" : "en";
      updateLanguage(newLang);
    });
  }

  // Initialize with current language
  updateLanguage(currentLang);
});
// Mache Funktionen global verfügbar
window.LANGUAGE = {
  currentLang,
  updateLanguage,
  formatPrice,
  getPrice,
};

// Export utilities
//export { currentLang, updateLanguage, formatPrice, getPrice, CONFIG };
