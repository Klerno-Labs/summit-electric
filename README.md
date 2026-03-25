# Summit Electric Website

## Project Description
A bespoke, hand-crafted digital experience for Summit Electric, a trusted local service provider delivering quality workmanship and reliable home improvement solutions. The website aims to convert local visitors into booked appointments and quote requests.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (Utility-first)
- Framer Motion (for animations)
- react-hook-form (for form handling)

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/summit-electric.git
   cd summit-electric
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
To deploy the site, follow the instructions in the DEPLOYMENT_GUIDE.md file.

## Project Structure Overview

/src
  /components        # Reusable components
  /config            # Configuration files (images, constants)
  /pages             # Next.js pages
  /styles            # Global styles
  /utils             # Utility functions
/public               # Static assets

## Image Customization
To change any image on the site, edit `src/config/images.ts`:

1. Find the slot you want to change (e.g., "hero", "about", "service-1").
2. Replace the "src" URL with your own image URL.
3. Update the "alt" text to describe the new image.
4. Save — every component on the site updates automatically.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: First gallery image
- **gallery-2**: Second gallery image
- **gallery-3**: Third gallery image
- **gallery-4**: Fourth gallery image
- **team-1**: First team member photo
- **team-2**: Second team member photo
- **team-3**: Third team member photo
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background
- **menu-1**: Menu item photo 1
- **menu-2**: Menu item photo 2
- **menu-3**: Menu item photo 3
- **product-1**: Product photo 1
- **product-2**: Product photo 2
- **product-3**: Product photo 3

## Brand Customization
- **Colors**: Modify colors in `tailwind.config.js`.
- **Fonts**: Change fonts in `layout.tsx`.
- **Logo**: Update the logo in `src/config/images.ts`.

## Environment Variables
- No specific environment variables are required for this project.

## Deployment Instructions
Follow the instructions in DEPLOYMENT_GUIDE.md for deploying the site on Cloudflare Pages.