const env = import.meta.env;
const appName = 'PhotoClean AI';
const bundleIds = {
  android: 'com.pvapphub.smartcleanai',
  ios: 'id6792810896',
};

export const landingConfig = {
  appName,
  bundleIds,
  releaseLabel: env.VITE_RELEASE_LABEL || 'Release 1.0',
  supportEmail: env.VITE_SUPPORT_EMAIL || 'personpick11@gmail.com',
  downloadLinks: {
    ios: env.VITE_APP_STORE_URL || 'https://apps.apple.com/us/app/ai-cleaner-photo-clean/id6792810896',
    android:
      env.VITE_GOOGLE_PLAY_URL ||
      `https://play.google.com/store/apps/details?id=${bundleIds.android}`,
    landing: env.VITE_DOWNLOAD_URL || 'https://apps.apple.com/us/app/ai-cleaner-photo-clean/id6792810896',
  },
};
