import { LOGOS } from '../data.js'

export function renderLogoMarquee() {
  const doubled = [...LOGOS, ...LOGOS]
  return `
  <section class="landing-marquee">
    <div class="landing-marquee__label">UTILISÉ PAR DES ÉQUIPES CHEZ</div>
    <div class="landing-marquee__track">
      ${doubled.map((logo) => `<div class="landing-marquee__logo">${logo}</div>`).join('')}
    </div>
  </section>
  `
}
