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
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop",
    alt: "Electrician working on residential panel",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Modern kitchen renovation with marble countertops"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern residential interior with clean electrical wiring",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Craftsman working on home improvement"
  "about": {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
    alt: "Senior engineer reviewing blueprints on tablet",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Beautiful modern home exterior"
  "service-1": {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    alt: "Modern luxury home exterior at dusk",
    width: 600,
    height: 400,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Luxurious modern bathroom renovation"
  "service-2": {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    alt: "Office building with modern electrical lighting",
    width: 600,
    height: 400,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Professional tradesperson at work"
  "service-3": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    alt: "Close up of circuit breaker panel",
    width: 600,
    height: 400,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Modern home interior with natural light"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    alt: "Renovated living room with recessed lighting",
    width: 600,
    height: 400,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Elegant living room with contemporary design"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Modern kitchen island with pendant lights",
    width: 600,
    height: 400,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Clean organized workshop tools"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    alt: "Professional tools and equipment organized",
    width: 600,
    height: 400,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Stunning home exterior at golden hour"
  "cta": {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
    alt: "Beautiful house exterior in the evening",
    width: 1200,
    height: 600,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Modern home with landscaped garden"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1600596542815-27b9c0f69218?q=80&w=1600&auto=format&fit=crop",
    alt: "Suburban home with landscaping",
    width: 1200,
    height: 600,
  },

  // Gallery image 4 — REPLACE with a real Unsplash URL matching: "Contemporary house front entrance"
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    alt: "Modern house front entrance with lights",
    width: 600,
    height: 400,
  },
  
  // Technician
  "technician": {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
    alt: "Smiling electrician in uniform",
    width: 400,
    height: 500,
  }
} as const;

export type ImageSlot = keyof typeof images;