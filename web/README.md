# Mesgana Website

This folder contains the static website for mesgana.com.

## File Structure

```
web/
├── index.html          # Homepage
├── privacy.html        # Privacy Policy page
├── .htaccess          # Apache configuration for URL routing
├── assets/
│   └── images/
│       └── ios-light.png  # App icon
└── PRIVACY_POLICY.md   # Original markdown version
```

## Deployment

### Option 1: Traditional Web Hosting
Upload all files in this folder to your web server's public directory (usually `public_html` or `www`).

### Option 2: GitHub Pages
1. Push this folder to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch

### Option 3: Netlify/Vercel
1. Connect your repository to Netlify or Vercel
2. Set build directory to `web/`
3. Deploy

## URL Structure

- **Homepage**: `https://mesgana.com/`
- **Privacy Policy**: `https://mesgana.com/privacy`

## Customization

### Update App Store Links
Edit the download buttons in `index.html`:
```html
<a href="YOUR_APP_STORE_URL" class="download-btn">Download for iOS</a>
<a href="YOUR_PLAY_STORE_URL" class="download-btn">Download for Android</a>
```

### Update Contact Email
Change `support@mesgana.com` in both HTML files to your actual support email.

### Update App Icon
Replace `assets/images/ios-light.png` with your preferred app icon.

## Features

- ✅ Responsive design
- ✅ Clean, modern styling
- ✅ Privacy policy accessible at `/privacy`
- ✅ SEO-friendly structure
- ✅ Fast loading with optimized assets 