import { TESTIMONIALS } from '../data.js'

export function renderTestimonials() {
  return `
  <section class="landing-section">
    <div class="landing-section__header">
      <div class="landing-eyebrow">// ILS EN PARLENT</div>
      <h2 class="landing-h2">Adopté par des équipes qui shippent vite</h2>
    </div>
    <div class="landing-testimonials-grid">
      ${TESTIMONIALS.map(
        (t) => `
        <div class="landing-testimonial-card">
          <p class="landing-testimonial-card__quote">"${t.quote}"</p>
          <div class="landing-testimonial-card__author">
            <div class="landing-avatar landing-avatar--${t.accent}">${t.initials}</div>
            <div>
              <div class="landing-testimonial-card__name">${t.name}</div>
              <div class="landing-testimonial-card__role">${t.role}</div>
            </div>
          </div>
        </div>
      `
      ).join('')}
    </div>
  </section>
  `
}
