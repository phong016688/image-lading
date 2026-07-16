# PhotoClean AI Landing Page

Release landing page for PhotoClean AI, kept separate from the Flutter app so it can be deployed quickly on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create a new Vercel project.
2. Set the root directory to `lading_page`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add the final store URLs with Environment Variables when needed:

```text
VITE_APP_STORE_URL=https://apps.apple.com/app/...
VITE_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.pvapphub.smartcleanai
VITE_DOWNLOAD_URL=https://photoclean.ai/download
VITE_SUPPORT_EMAIL=support@photoclean.ai
VITE_RELEASE_LABEL=Release 1.0
```

Store identifiers:

- Android package: `com.pvapphub.smartcleanai`
- iOS bundle ID: `com.pvapphub.photocleanai`
- iOS download badge still needs the final App Store product URL with Apple numeric app ID.

## Assets

- `public/assets/photoclean-release-hero.png`: hero image generated with built-in `imagegen`.
- `public/assets/feature-duplicate-review.png`: duplicate review feature image generated with built-in `imagegen`.
- `public/assets/feature-similar-photos.png`: similar photo grouping feature image generated with built-in `imagegen`.
- `public/assets/feature-private-vault.png`: private vault feature image generated with built-in `imagegen`.
- `public/assets/feature-screenshot-cleanup.png`: screenshot cleanup feature image generated with built-in `imagegen`.
- `public/assets/ipad-aso-banner.png`: iPad ASO banner image.
- `public/assets/photoclean-app-icon.png`: app icon copied from the main repo.
- `public/assets/badge-app-store.svg`: official App Store download badge.
- `public/assets/badge-google-play.png`: official Google Play download badge.
