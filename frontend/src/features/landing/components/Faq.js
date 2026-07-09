import { FAQS } from '../data.js'

export function renderFaq(openFaq) {
  return `
  <section id="faq" class="landing-section landing-section--narrow">
    <div class="landing-section__header">
      <div class="landing-eyebrow">// FAQ</div>
      <h2 class="landing-h2">Questions fréquentes</h2>
    </div>
    <div class="landing-faq-list">
      ${FAQS.map((f, i) => {
        const isOpen = i === openFaq
        return `
        <div class="landing-faq-item">
          <button class="landing-faq-item__question" data-action="toggle-faq" data-faq-index="${i}">
            ${f.q}
            <span class="landing-faq-item__chevron ${isOpen ? 'landing-faq-item__chevron--open' : ''}">▾</span>
          </button>
          ${isOpen ? `<div class="landing-faq-item__answer">${f.a}</div>` : ''}
        </div>
        `
      }).join('')}
    </div>
  </section>
  `
}
