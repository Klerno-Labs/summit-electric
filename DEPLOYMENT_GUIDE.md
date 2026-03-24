# Deployment Guide for Summit Electric Website

## Step-by-Step Cloudflare Pages Deployment

1. **Create a Cloudflare Account**
   - Sign up at [Cloudflare](https://www.cloudflare.com/).

2. **Set Up a New Project**
   - In the Cloudflare dashboard, click on "Pages" and then "Create a Project."

3. **Connect Your GitHub Repository**
   - Authorize Cloudflare to access your GitHub account and select the repository for the Summit Electric website.

4. **Configure Build Settings**
   - Set the build command to:
     ```bash
     npm run build
     ```
   - Set the output directory to:
     ```bash
     out
     ```

5. **Environment Variables Configuration**
   - Add any required environment variables in the "Environment Variables" section. For example:
     - `NEXT_PUBLIC_API_URL`: Your API URL.

6. **Domain Setup Instructions**
   - After deployment, you can set up a custom domain in the Cloudflare dashboard under the "Custom Domains" section.

7. **Post-Deploy Checklist**
   - Ensure SSL is enabled for secure connections.
   - Check for any necessary redirects.
   - Set up Google Analytics for tracking.