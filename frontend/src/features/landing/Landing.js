import './Landing.css'
import { renderNavbar, renderMobileMenu } from './components/Navbar.js'
import { renderHero } from './components/Hero.js'
import { renderLogoMarquee } from './components/LogoMarquee.js'
import { renderFeatures } from './components/Features.js'
import { renderHowItWorks } from './components/HowItWorks.js'
import { renderTestimonials } from './components/Testimonials.js'
import { renderPricing } from './components/Pricing.js'
import { renderFaq } from './components/Faq.js'
import { renderCtaBanner } from './components/CtaBanner.js'
import { renderFooter } from './components/Footer.js'

const state = {
  navOpen: false,
  activeStep: 0,
  billingYearly: false,
  openFaq: 0,
}

function render(container) {
  container.innerHTML = `
    <div class="landing">
      <div class="landing__grid-overlay"></div>
      <div class="landing__orb landing__orb--a"></div>
      <div class="landing__orb landing__orb--b"></div>
      ${renderNavbar()}
      ${renderMobileMenu(state.navOpen)}
      ${renderHero()}
      ${renderLogoMarquee()}
      ${renderFeatures()}
      ${renderHowItWorks(state.activeStep)}
      ${renderTestimonials()}
      ${renderPricing(state.billingYearly)}
      ${renderFaq(state.openFaq)}
      ${renderCtaBanner()}
      ${renderFooter()}
    </div>
  `
}

function handleClick(event, container) {
  const target = event.target.closest('[data-action]')
  if (!target) return

  switch (target.dataset.action) {
    case 'toggle-nav':
      state.navOpen = !state.navOpen
      break
    case 'close-nav':
      state.navOpen = false
      break
    case 'select-step':
      state.activeStep = Number(target.dataset.stepIndex)
      break
    case 'set-billing':
      state.billingYearly = target.dataset.billing === 'yearly'
      break
    case 'toggle-faq': {
      const index = Number(target.dataset.faqIndex)
      state.openFaq = state.openFaq === index ? -1 : index
      break
    }
    default:
      return
  }

  render(container)
}

export function mountLanding(container) {
  render(container)
  container.addEventListener('click', (event) => handleClick(event, container))
}

const root = document.getElementById('landing-root')
if (root) {
  mountLanding(root)
}
