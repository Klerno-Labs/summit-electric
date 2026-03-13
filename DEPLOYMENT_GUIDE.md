# Deployment Guide

This guide walks you through deploying the Summit Electric website to production using Vercel.

## Prerequisites
- A Vercel account (Sign up at [vercel.com](https://vercel.com)).
- The project code pushed to a Git repository (GitHub, GitLab, or Bitbucket).
- Access to the `.env` variables (Contact Email, Google Maps Key).

---

## Step 1: Prepare the Repository
Ensure your code is committed and pushed to your Git provider.
```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

## Step 2: Import Project to Vercel
1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Locate your repository (import it if necessary) and click **"Import"**.

## Step 3: Configure Project Settings
Vercel will automatically detect that this is a Next.js project and pre-fill the build settings.

**Framework Preset:** Next.js
**Root Directory:** `./` (Leave as default)
**Build Command:** `npm run build` (Leave as default)
**Output Directory:** `.next` (Leave as default)

## Step 4: Add Environment Variables
You need to add your environment variables so the site works correctly in production.

1.  In the Vercel project configuration, scroll to the **"Environment Variables"** section.
2.  Add the following key-value pairs:

| Key | Value | Environment |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Production, Preview, Development |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `info@summitelectric.com` | Production, Preview, Development |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | `AIzaSy...` (If applicable) | Production, Preview, Development |

3.  Click **"Add"** for each variable.

## Step 5: Deploy
1.  Click the **"Deploy"** button.
2.  Wait for the build to complete (usually takes 1-2 minutes).
3.  Once finished, you will receive a confirmation link (e.g., `summit-electric.vercel.app`).

## Step 6: Domain Setup (Custom Domain)
If you have a custom domain (e.g., `summitelectric.com`):

1.  Go to the **"Settings"** tab in your Vercel project.
2.  Click on **"Domains"**.
3.  Enter your domain name (e.g., `summitelectric.com`) and click **"Add"**.
4.  Follow the instructions provided by Vercel to update your DNS records (usually adding an A Record or CNAME).
5.  Once the DNS propagates, Vercel will automatically issue an SSL certificate (HTTPS).

## Post-Deployment Checklist

- [ ] **Check Forms:** Navigate to the Contact page and fill out the form. Ensure you receive the email (if connected) or that the success message appears.
- [ ] **Verify Images:** Open the site on Mobile and Desktop to ensure all images load correctly from `src/config/images.ts`.
- [ ] **Test Mobile CTA:** Scroll the home page on a mobile phone and ensure the "Call Now" bar sticks to the bottom.
- [ ] **SEO Audit:** View the page source and check that the `<title>` and `<meta description>` tags are present.
- [ ] **Analytics:** If using Google Analytics, add your tracking ID to the environment variables or layout file.

## Troubleshooting
*   **Build Failures:** Check the Vercel build logs. Common issues are missing dependencies or syntax errors in `src/config/images.ts`.
*   **Images Not Loading:** Ensure the URLs in `src/config/images.ts` are public and accessible (not private Google Drive links).
*   **Domain Issues:** DNS changes can take up to 24 hours to propagate globally.