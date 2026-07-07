import './styles.css';
import { landingConfig } from './config.js';

const downloadLinkByPlatform = {
  ios: landingConfig.downloadLinks.ios,
  android: landingConfig.downloadLinks.android,
};

function applyDownloadLinks() {
  const downloadButtons = document.querySelectorAll('[data-download-link]');

  downloadButtons.forEach((button) => {
    const platform = button.dataset.downloadLink;
    const downloadUrl = downloadLinkByPlatform[platform];

    if (!downloadUrl) {
      return;
    }

    button.setAttribute('href', downloadUrl);
    button.setAttribute('target', '_blank');
  });
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

applyDownloadLinks();
applyReleaseLabel();
applySupportLink();
applyCurrentYear();
initRevealAnimations();
