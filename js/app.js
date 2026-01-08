/**
 * MAIN APPLICATION
 * Populates dynamic content from config
 */

import { CONFIG } from './config.js';
import { currentLang, formatPrice, getPrice, updateLanguage } from './language.js';

// ==========================================================================
// POPULATE PROGRAM GRID
// ==========================================================================

function renderProgramGrid() {
  const container = document.getElementById('program-grid');
  if (!container) return;

  const lang = document.body.getAttribute('data-lang') || 'en';
  const features = CONFIG.features[lang];

  container.innerHTML = features.map(feature => `
    <div class="program-card">
      <h3 class="program-card__title">${feature.title}</h3>
      <p class="program-card__description">${feature.description}</p>
    </div>
  `).join('');
}

// ==========================================================================
// POPULATE TRANSFORMATION HORIZONTAL SCROLL
// ==========================================================================

function renderTransformation() {
  const track = document.querySelector('.transformation__track');
  if (!track) return;

  const lang = document.body.getAttribute('data-lang') || 'en';
  const phases = CONFIG.transformation[lang];

  track.innerHTML = phases.map(phase => `
    <div class="transformation__panel">
      <div class="transformation__phase">${phase.phase}</div>
      <h2 class="transformation__title">${phase.title}</h2>
      <p class="transformation__description">${phase.description}</p>
    </div>
  `).join('');
}

// ==========================================================================
// POPULATE PACKAGES
// ==========================================================================

function renderPackages() {
  const container = document.getElementById('packages-container');
  if (!container) return;

  const lang = document.body.getAttribute('data-lang') || 'en';
  const retreats = CONFIG.retreats;

  container.innerHTML = Object.entries(retreats).map(([key, retreat]) => {
    const price = getPrice(retreat.priceUSD, retreat.priceEUR, lang);
    const formattedPrice = formatPrice(price, lang);
    const name = retreat.name[lang];
    const description = retreat.description[lang];

    return `
      <div class="package" data-retreat="${key}">
        <h3 class="package__name">${name}</h3>
        <p class="package__duration">${retreat.duration} days</p>
        <div class="package__price">${formattedPrice}</div>
        <p class="package__description">${description}</p>
        <button class="package__select" data-en="Select retreat" data-de="Retreat wählen">
          ${lang === 'en' ? 'Select retreat' : 'Retreat wählen'}
        </button>
      </div>
    `;
  }).join('');

  // Add click handlers
  container.querySelectorAll('.package__select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const retreat = e.target.closest('.package').getAttribute('data-retreat');
      window.location.href = `checkout.html?retreat=${retreat}`;
    });
  });
}

// ==========================================================================
// RENDER ALL CONTENT
// ==========================================================================

function renderAll() {
  renderProgramGrid();
  renderTransformation();
  renderPackages();
}

// ==========================================================================
// INIT ON DOM READY
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
});

// ==========================================================================
// RE-RENDER ON LANGUAGE CHANGE
// ==========================================================================

document.addEventListener('languageChanged', (e) => {
  renderAll();
});

// ==========================================================================
// UPDATE ON PRICES NEED UPDATE EVENT
// ==========================================================================

document.addEventListener('pricesNeedUpdate', () => {
  renderPackages();
});

// Export for debugging
export { renderAll, renderProgramGrid, renderTransformation, renderPackages };
