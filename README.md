# Summit Electric Website

## Project Description
This is a bespoke, hand-crafted multi-page website for Summit Electric, a trusted local service provider delivering quality workmanship and reliable home improvement solutions. The website is designed to establish Summit Electric as a premium, trustworthy local provider in the home services niche.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (Utility-first)
- Framer Motion (for animations)
- React Hook Form (for form handling)

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/summit-electric-website.git
   cd summit-electric-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:

npm run dev

Visit `http://localhost:3000` in your browser.

### Build
To create a production build:

npm run build

### Deploy
To deploy the static site:

npm run export

## Project Structure Overview

/src
  /components        # Shared components
  /config            # Configuration files (images, constants)
  /app               # Next.js app directory (pages)
  /styles            # Global styles
/public               # Static assets

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is defined with a `src` URL and an `alt` text. Here are the slots:

- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **about**: About page image
- **gallery-1**: First gallery image
- **gallery-2**: Second gallery image
- **gallery-3**: Third gallery image
- **gallery-4**: Fourth gallery image
- **cta**: Call-to-action section background
- **team-1**: Team member photo
- **menu-1**: Menu item photo 1
- **menu-2**: Menu item photo 2

## Brand Customization
To change colors, edit the `tailwind.config.js` file. For fonts, modify the `layout.tsx` file. To change the logo, update the `src/config/images.ts` file.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for any API calls.

## Deployment Instructions
For deploying on Cloudflare Pages:
1. Set up a new project in the Cloudflare dashboard.
2. Connect your GitHub repository.
3. Set the build command to `npm run build` and the output directory to `out`.
4. Configure environment variables as needed.
5. Deploy the project.