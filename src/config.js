const env = import.meta.env;
const appName = 'PhotoClean AI';
const bundleIds = {
  android: 'com.pvapphub.smartcleanai',
  ios: 'com.pvapphub.photocleanai',
};

export const landingConfig = {
  appName,
  bundleIds,
  releaseLabel: env.VITE_RELEASE_LABEL || 'Release 1.0',
  supportEmail: env.VITE_SUPPORT_EMAIL || 'support@photoclean.ai',
  downloadLinks: {
    ios: env.VITE_APP_STORE_URL || `https://apps.apple.com/search?term=${encodeURIComponent(appName)}`,
    android:
      env.VITE_GOOGLE_PLAY_URL ||
      `https://play.google.com/store/apps/details?id=${bundleIds.android}`,
    landing: env.VITE_DOWNLOAD_URL || '',
  },
};
