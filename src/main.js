import './styles.css';
import createQrCode from 'qrcode-generator';
import { inject } from '@vercel/analytics';
import { landingConfig } from './config.js';
import { translations, detectUserLanguage } from './i18n.js';

let currentLang = detectUserLanguage();

function main() {
  // Inject Vercel Analytics
  try {
    inject();
  } catch (e) {
    console.log('Vercel analytics initialized');
  }

  // Set initial html lang attribute
  document.documentElement.setAttribute('lang', currentLang);

  // 1. Language Switcher setup
  setupLanguageSwitcher();

  // 2. Initial Render
  renderAllLanguageContent(currentLang);

  // 3. Connect App Store, Google Play, support, and QR links.
  setupLinks();

  // 4. Render config-driven labels and date-based content.
  renderDynamicContent();

  // 5. Enable progressive reveal animations.
  initRevealAnimations();
}

function setupLanguageSwitcher() {
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      if (lang && translations[lang]) {
        currentLang = lang;
        try {
          localStorage.setItem('app_user_lang', lang);
        } catch (err) {}
        document.documentElement.setAttribute('lang', lang);
        renderAllLanguageContent(lang);
      }
    });
  }
}

function renderAllLanguageContent(lang) {
  const t = translations[lang] || translations.vi;

  // 1. Text elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const val = getNestedTranslation(t, key);
    if (val) {
      el.textContent = val;
    }
  });

  // 2. Render Problem Cards
  const problemContainer = document.getElementById('problem-cards');
  if (problemContainer && t.problem) {
    problemContainer.innerHTML = t.problem.items.map((item) => `
      <article class="card problem-card">
        <div class="card-icon">⚠️</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `).join('');
  }

  // 3. Render Solution Points
  const solutionPoints = document.getElementById('solution-points');
  if (solutionPoints && t.solution) {
    solutionPoints.innerHTML = t.solution.points.map((pt) => `
      <li>✓ ${pt}</li>
    `).join('');
  }

  // 4. Render Features List
  const featuresList = document.getElementById('features-list');
  if (featuresList && t.features) {
    featuresList.innerHTML = t.features.list.map((f) => `
      <article class="feature-card">
        <span class="feature-icon">◎</span>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </article>
    `).join('');
  }

  // 5. Render Steps
  const stepsList = document.getElementById('steps-list');
  if (stepsList && t.howItWorks) {
    stepsList.innerHTML = t.howItWorks.steps.map((s) => `
      <article class="step-card">
        <div class="step-number">${s.number}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </article>
    `).join('');
  }

  // 6. Render Use Cases
  const usecasesList = document.getElementById('usecases-list');
  if (usecasesList && t.useCases) {
    usecasesList.innerHTML = t.useCases.items.map((uc) => `
      <article class="card usecase-card">
        <h3 class="role-title">${uc.role}</h3>
        <p>${uc.scenario}</p>
      </article>
    `).join('');
  }

  // 7. Render Reviews
  const reviewsList = document.getElementById('reviews-list');
  if (reviewsList && t.reviews) {
    reviewsList.innerHTML = t.reviews.list.map((rev) => `
      <article class="card review-card">
        <div class="stars">★★★★★</div>
        <p class="comment">"${rev.comment}"</p>
        <div class="reviewer">
          <strong>${rev.name}</strong> • <span>${rev.role}</span>
        </div>
      </article>
    `).join('');
  }

  // 8. Render FAQ Accordion
  const faqList = document.getElementById('faq-list');
  if (faqList && t.faq) {
    faqList.innerHTML = t.faq.items.map((faq) => `
      <details class="faq-item">
        <summary>${faq.q}</summary>
        <p>${faq.a}</p>
      </details>
    `).join('');
  }
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function setupLinks() {
  applyDownloadLinks();
  applySupportLink();
  applyDownloadQrCode();
}

function renderDynamicContent() {
  applyReleaseLabel();
  applyCurrentYear();
}

function applyDownloadLinks() {
  const downloadButtons = document.querySelectorAll('[data-download-link]');

  downloadButtons.forEach((button) => {
    const platform = button.dataset.downloadLink;
    const downloadUrl = getDownloadUrl(platform);

    if (!downloadUrl) {
      return;
    }

    button.setAttribute('href', downloadUrl);
    button.setAttribute('target', '_blank');
  });
}

function getDownloadUrl(platform) {
  if (platform === 'landing') {
    return getDownloadLandingUrl();
  }

  return landingConfig.downloadLinks[platform];
}

function getDownloadLandingUrl() {
  if (landingConfig.downloadLinks.landing) {
    return landingConfig.downloadLinks.landing;
  }

  const currentPageUrl = new URL(window.location.href);
  currentPageUrl.hash = 'download';

  return currentPageUrl.href;
}

function applyDownloadQrCode() {
  const qrCodeImage = document.querySelector('[data-download-qr]');

  if (!qrCodeImage) {
    return;
  }

  const qrCode = createQrCode(0, 'M');
  qrCode.addData(landingConfig.downloadLinks.ios);
  qrCode.make();

  qrCodeImage.setAttribute('src', qrCode.createDataURL(8, 2));
  qrCodeImage.setAttribute('alt', `QR code to download ${landingConfig.appName}`);
}

function applyReleaseLabel() {
  const releaseLabel = document.querySelector('[data-release-label]');

  if (!releaseLabel) {
    return;
  }

  releaseLabel.textContent = landingConfig.releaseLabel;
}

function applySupportLink() {
  const supportLink = document.querySelector('[data-support-link]');

  if (!supportLink) {
    return;
  }

  supportLink.setAttribute('href', `mailto:${landingConfig.supportEmail}`);
}

function applyCurrentYear() {
  const currentYear = document.querySelector('[data-current-year]');

  if (!currentYear) {
    return;
  }

  currentYear.textContent = String(new Date().getFullYear());
}

function initRevealAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!animatedElements.length || prefersReducedMotion || !('IntersectionObserver' in window)) {
    animatedElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('motion-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    },
  );

  animatedElements.forEach((element) => observer.observe(element));
}

main();
