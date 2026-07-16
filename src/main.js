import './styles.css';
import createQrCode from 'qrcode-generator';
import { landingConfig } from './config.js';

function main() {
  // 1. Connect App Store, Google Play, support, and QR links.
  setupLinks();

  // 2. Render config-driven labels and date-based content.
  renderDynamicContent();

  // 3. Enable progressive reveal animations.
  initRevealAnimations();
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
  qrCode.addData(getDownloadLandingUrl());
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
