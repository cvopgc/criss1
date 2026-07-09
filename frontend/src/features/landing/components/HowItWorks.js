import { STEPS } from '../data.js'
import { escapeHtml } from '../utils.js'

export function renderHowItWorks(activeStep) {
  return `
  <section id="how" class="landing-section">
    <div class="landing-section__header">
      <div class="landing-eyebrow">// COMMENT ÇA MARCHE</div>
      <h2 class="landing-h2">Trois étapes, zéro friction</h2>
    </div>
    <div class="landing-how-grid">
      <div class="landing-steps">
        ${STEPS.map(
          (s, i) => `
          <button class="landing-step ${i === activeStep ? 'landing-step--active' : ''}" data-action="select-step" data-step-index="${i}">
            <div class="landing-step__head">
              <span class="landing-step__num">0${s.n}</span>
              <span class="landing-step__title">${s.title}</span>
            </div>
            <p class="landing-step__desc">${s.desc}</p>
          </button>
        `
        ).join('')}
      </div>
      <div class="landing-code-panel">
        <div class="landing-code-panel__tabs">
          ${STEPS.map(
            (s, i) =>
              `<div class="landing-code-panel__tab ${i === activeStep ? 'landing-code-panel__tab--active' : ''}">${s.file}</div>`
          ).join('')}
        </div>
        <pre class="landing-code-panel__code">${escapeHtml(STEPS[activeStep].code)}</pre>
      </div>
    </div>
  </section>
  `
}
