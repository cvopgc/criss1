import { PLANS } from '../data.js'

export function renderPricing(billingYearly) {
  const mult = billingYearly ? 0.8 : 1

  return `
  <section id="pricing" class="landing-section">
    <div class="landing-section__header landing-section__header--pricing">
      <div class="landing-eyebrow">// TARIFS</div>
      <h2 class="landing-h2">Un prix simple, sans surprise</h2>
      <div class="landing-billing-toggle">
        <button class="landing-billing-toggle__btn ${!billingYearly ? 'landing-billing-toggle__btn--active' : ''}" data-action="set-billing" data-billing="monthly">Mensuel</button>
        <button class="landing-billing-toggle__btn ${billingYearly ? 'landing-billing-toggle__btn--active' : ''}" data-action="set-billing" data-billing="yearly">
          Annuel <span class="landing-billing-toggle__badge">-20%</span>
        </button>
      </div>
    </div>
    <div class="landing-pricing-grid">
      ${PLANS.map((p) => {
        const price = p.base === 0 ? '0€' : `${Math.round(p.base * mult)}€`
        const billNote = p.base === 0 ? p.billNote : billingYearly ? 'Facturé annuellement' : 'Facturé mensuellement'
        return `
        <div class="landing-plan-card ${p.featured ? 'landing-plan-card--featured' : ''}">
          ${p.featured ? '<div class="landing-plan-card__badge">POPULAIRE</div>' : ''}
          <div class="landing-plan-card__name">${p.name}</div>
          <div class="landing-plan-card__price-row">
            <span class="landing-plan-card__price">${price}</span>
            <span class="landing-plan-card__price-suffix">/mois</span>
          </div>
          <p class="landing-plan-card__bill-note">${billNote}</p>
          <div class="landing-plan-card__perks">
            ${p.perks
              .map((perk) => `<div class="landing-plan-card__perk"><span class="landing-plan-card__check">✓</span>${perk}</div>`)
              .join('')}
          </div>
          <a href="#" class="landing-btn ${p.featured ? 'landing-btn--primary' : 'landing-btn--ghost'} landing-plan-card__cta">${p.ctaLabel}</a>
        </div>
        `
      }).join('')}
    </div>
  </section>
  `
}
