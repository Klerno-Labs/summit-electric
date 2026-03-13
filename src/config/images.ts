// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Professional home renovation project"
  "hero": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional electrician working on a residential electrical panel",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Modern kitchen renovation with marble countertops"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern kitchen renovation with marble countertops",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Craftsman working on home improvement"
  "about": {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    alt: "Summit Electric team reviewing blueprints",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Beautiful modern home exterior"
  "service-1": {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    alt: "Beautiful modern home exterior",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Luxurious modern bathroom renovation"
  "service-2": {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    alt: "Luxurious modern bathroom renovation",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Professional tradesperson at work"
  "service-3": {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional tradesperson working on wiring",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Modern home interior with natural light"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern home interior with natural light",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Elegant living room with contemporary design"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant living room with contemporary design",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Clean organized workshop tools"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
    alt: "Clean organized workshop tools",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Stunning home exterior at golden hour"
  "cta": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Stunning home exterior at golden hour",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Modern home with landscaped garden"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1600596542815-2c4c823c51d4?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern home with landscaped garden",
    width: 1200,
    height: 800,
  },

  // Gallery image 4 — REPLACE with a real Unsplash URL matching: "Contemporary house front entrance"
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    alt: "Contemporary house front entrance",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;