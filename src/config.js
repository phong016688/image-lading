const env = import.meta.env;

export const landingConfig = {
  releaseLabel: env.VITE_RELEASE_LABEL || 'Release 1.0',
  supportEmail: env.VITE_SUPPORT_EMAIL || 'support@smartclean.ai',
  downloadLinks: {
    ios: env.VITE_APP_STORE_URL || 'https://apps.apple.com/search?term=SmartClean%20AI',
    android:
      env.VITE_GOOGLE_PLAY_URL ||
      'https://play.google.com/store/apps/details?id=com.pvapphub.smartcleanai',
  },
};
