# Summit Electric Website

A modern, high-performance website built for Summit Electric, a local provider of quality electrical and home improvement services. This project is designed to maximize lead generation through trust-building design, mobile optimization, and conversion-focused user flows.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router) – Server-side rendering, static generation, and optimal performance.
- **Styling:** Tailwind CSS – Utility-first styling for rapid development and consistent design.
- **TypeScript:** Strict type-checking for reliability.
- **Animations:** Framer Motion – Smooth scroll-triggered reveals and micro-interactions.
- **Forms:** React Hook Form + Zod – High-performance form validation.
- **Icons:** Lucide React – Consistent, lightweight iconography.
- **Fonts:** Montserrat (Headings) & Open Sans (Body) via `next/font`.

## 📋 Project Structure

```text
.
├── public/             # Static assets (favicon, robots.txt)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── api/        # API routes (e.g., contact form submission)
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── services/   # Services page
│   │   └── layout.tsx  # Root layout (fonts, global styles)
│   ├── components/     # Reusable React components
│   │   ├── ui/         # Base atoms (Buttons, Inputs)
│   │   ├── layout/     # Navbar, Footer, MobileCTA
│   │   └── sections/   # Page-specific sections (Hero, Services, etc.)
│   ├── config/         # Centralized configuration files
│   │   └── images.ts   # ⭐ ALL IMAGE URLs ARE MANAGED HERE
│   └── lib/            # Utility functions (cn helper, validation)
├── .env.example        # Environment variables template
└── tailwind.config.ts  # Tailwind theme customization
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd summit-electric
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Set up environment variables**
    Create a `.env.local` file in the root directory (copy `.env.example`):
    ```bash
    cp .env.example .env.local
    ```
    Update the values with your actual API keys or details.

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization Guide

### 🖼️ Changing Images
All images are centralized in one file for easy management. You do not need to hunt through components to update photos.

1.  Open `src/config/images.ts`.
2.  Find the image slot you want to change (e.g., `hero`, `about`, `service-1`).
3.  Replace the `src` URL with your new image link.
4.  Update the `alt` text for accessibility and SEO.
5.  Save the file. The change will reflect immediately across the site.

*Example:*
```typescript
"hero": {
  src: "https://your-cdn.com/new-hero-image.jpg", // ✏️ Change this
  alt: "Electrician working on a modern panel",    // ✏️ Update this
  width: 1200,
  height: 800,
}
```

**Supported Slots:**
- `hero`: Homepage main banner (Split layout right side).
- `hero-alt`: Inner pages or fallback.
- `about`: About page/team section.
- `service-1`, `service-2`, `service-3`: Service card visuals.
- `gallery-1` to `gallery-4`: Image gallery grid.
- `cta`: Bottom Call-to-Action background.

### 🌈 Changing Brand Colors
The site uses Tailwind CSS variables. To change the primary Blue or Safety Orange:

1.  Open `tailwind.config.ts`.
2.  Locate the `theme.extend.colors` object.
3.  Update the hex codes for `primary` or `accent`.

```typescript
colors: {
  primary: '#0056b3', // ✏️ Change to your brand color
  accent: '#ff6b00',  // ✏️ Change to your CTA color
  // ...
}
```

### 📝 Changing Text Content
Most static content (Headlines, paragraphs, labels) is located directly within the component files in `src/app` and `src/components`.

- **Home Page:** Edit `src/app/page.tsx`.
- **About Page:** Edit `src/app/about/page.tsx`.
- **Services Page:** Edit `src/app/services/page.tsx`.
- **Contact Page:** Edit `src/app/contact/page.tsx`.

### 🔤 Changing Fonts
Fonts are loaded in `src/app/layout.tsx`.

1.  Find the `Montserrat` and `Open_Sans` imports at the top.
2.  Replace the font family names with your desired Google Fonts.
3.  Apply the font variable in the `body` className if necessary.

## 🔐 Environment Variables

Create a `.env.local` file to handle sensitive data:

```env
# The URL of your deployed site (used for SEO/Metadata)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Destination email for contact form submissions
NEXT_PUBLIC_CONTACT_EMAIL=info@summitelectric.com

# (Optional) Google Maps API Key for the Contact page map
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-google-maps-api-key
```

## 📦 Deployment

The recommended deployment method is **Vercel** (the creators of Next.js).

1.  Push your code to GitHub, GitLab, or Bitbucket.
2.  Log in to [Vercel](https://vercel.com) and click "Add New Project".
3.  Import your repository.
4.  Add your environment variables in the Vercel project settings.
5.  Click "Deploy".

Vercel will automatically handle build optimization and SSL certificates.

## 📄 License

This project is proprietary software built for Summit Electric.