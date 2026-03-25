# Deployment Guide for Summit Electric Website

## Step-by-Step Cloudflare Pages Deployment

### 1. Prepare Your Project
Ensure your project is ready for deployment:
- Run `npm run build` to create a production build.

### 2. Create a Cloudflare Pages Project
1. Log in to your Cloudflare account.
2. Navigate to the "Pages" section.
3. Click on "Create a Project".
4. Connect your GitHub repository containing the Summit Electric website.

### 3. Configure Build Settings
- **Production Branch**: `main` (or your default branch)
- **Framework Preset**: Select "Next.js".
- **Build Command**: `npm run build`
- **Build Output Directory**: `out` (or the directory where your static files are generated)

### 4. Environment Variables
If your project requires any environment variables, add them in the "Environment Variables" section during the setup.

### 5. Custom Domain Setup
1. After the project is created, navigate to the "Settings" tab.
2. Under "Custom Domains", add your domain.
3. Follow the instructions to configure your domain settings in the Cloudflare dashboard.

### 6. Post-Deploy Checklist
- Ensure SSL is enabled for your custom domain.
- Set up any necessary redirects.
- Verify that Google Analytics is correctly configured.
- Test all pages and functionalities to ensure everything works as expected.

### 7. Updating Your Site
To update your site, make changes in your local repository, commit, and push to the main branch. Cloudflare Pages will automatically deploy the changes.