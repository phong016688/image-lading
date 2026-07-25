import './styles.css';
import createQrCode from 'qrcode-generator';
import { inject } from '@vercel/analytics';
import { landingConfig } from './config.js';
import { translations, detectUserLanguage, PHOTO_CLEAN_ARTICLES } from './i18n.js';

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

  // 6. Setup article modal handlers
  setupArticleModal();
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

  // 8. Render Articles List
  const articlesList = document.getElementById('articles-list');
  if (articlesList) {
    const readMoreText = (t.articles && t.articles.readMore) || 'Đọc Bài Viết →';
    articlesList.innerHTML = PHOTO_CLEAN_ARTICLES.map((art) => `
      <article class="article-card">
        <div class="article-card-media">
          <img src="${art.image || '/assets/photoclean-release-hero.png'}" alt="${art.title}" loading="lazy" onerror="this.src='/assets/photoclean-release-hero.png'" />
        </div>
        <div class="article-card-body">
          <div>
            <span class="article-category">${art.category}</span>
            <div class="article-meta"><span>📅 ${art.date}</span> • <span>⏱️ ${art.readTime}</span></div>
            <h3 class="article-title">${art.title}</h3>
            <p class="article-excerpt">${art.excerpt}</p>
          </div>
          <button class="read-more-btn" data-article-id="${art.id}">
            ${readMoreText}
          </button>
        </div>
      </article>
    `).join('');

    articlesList.querySelectorAll('[data-article-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.articleId;
        openArticleModal(id);
      });
    });
  }

  // 9. Render FAQ Accordion
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

function setupArticleModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('close-article-modal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}

function openArticleModal(id) {
  const modal = document.getElementById('article-modal');
  const modalBody = document.getElementById('article-modal-body');
  const article = PHOTO_CLEAN_ARTICLES.find((a) => a.id === id);

  if (modal && modalBody && article) {
    modalBody.innerHTML = `
      ${article.image ? `<img class="article-modal-hero" src="${article.image}" alt="${article.title}" onerror="this.style.display='none'" />` : ''}
      <span class="article-category">${article.category}</span>
      <div class="article-meta" style="margin-top: 0.5rem;"><span>📅 ${article.date}</span> • <span>⏱️ ${article.readTime}</span></div>
      <h2 style="margin-top: 0.5rem; font-size: 1.5rem; font-weight: 800; color: #ffffff;">${article.title}</h2>
      <div style="margin-top: 1.25rem; font-size: 0.85rem; line-height: 1.6; color: #cbd5e1;">${article.content}</div>
      <div class="article-store-actions">
        <a href="${landingConfig.downloadLinks.ios}" target="_blank" rel="noreferrer">Download on App Store</a>
        <a href="${landingConfig.downloadLinks.android}" target="_blank" rel="noreferrer">Get it on Google Play</a>
      </div>
    `;
    modal.style.display = 'flex';
    const modalContent = modal.querySelector('.article-modal-content');
    if (modalContent) {
      modalContent.scrollTop = 0;
    }
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
