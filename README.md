# NuetShark Legal and Support Website

This repository contains a simple static legal and support website for the
NuetShark iOS app. It includes:

- `index.html` - homepage with links to legal and support pages
- `privacy.html` - Privacy Policy
- `terms.html` - Terms of Use
- `support.html` - support information
- `styles.css` - shared styling
- `theme.js` - local theme preference control

The site uses plain HTML, CSS, and a small local JavaScript file for the theme
selector. It does not use analytics, cookies, tracking pixels, external fonts,
CDN assets, or third-party scripts.

## Deploying With GitHub Pages

1. Push these files to the root of a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Select the branch you want to publish from.
5. Set the folder to the repository root.
6. Save the settings.

After GitHub Pages publishes the site, the Privacy Policy URL for App Store
Connect should use this format:

```text
https://<github-username>.github.io/<repo-name>/privacy.html
```

Use the published `privacy.html` URL in App Store Connect wherever Apple asks
for the app's Privacy Policy URL.

## Maintenance Reminder

Update the Privacy Policy and related pages before release if NuetShark later
adds accounts, cloud sync, purchases, analytics, crash reporting, notifications,
or any personal data collection.

## Legal Note

This website is a practical starting point for App Store submission and is not
legal advice.
