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
  // Homepage hero banner — Professional electrician working
  "hero": {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&q=80",
    alt: "Professional electrician working on a residential electrical panel",
    width: 1200,
    height: 800,
  },

  // Alternative hero image — Modern home interior
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&q=80",
    alt: "Modern home interior with lighting fixtures",
    width: 1200,
    height: 800,
  },

  // About page — Team of electricians
  "about": {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&q=80",
    alt: "Team of professional electricians reviewing blueprints",
    width: 1200,
    height: 800,
  },

  // Service 1 — Residential Wiring
  "service-1": {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    alt: "Modern electrical panel in a new home",
    width: 800,
    height: 600,
  },

  // Service 2 — Lighting Installation
  "service-2": {
    src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop&q=80",
    alt: "Bright modern kitchen with pendant lighting",
    width: 800,
    height: 600,
  },

  // Service 3 — Emergency Repair
  "service-3": {
    src: "https://images.unsplash.com/photo-1544724107-6d5c4caaff30?w=800&h=600&fit=crop&q=80",
    alt: "Electrician troubleshooting a circuit issue",
    width: 800,
    height: 600,
  },

  // Gallery 1 — Renovation
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1556912173-3db996ea8e30?w=800&h=600&fit=crop&q=80",
    alt: "Completed home renovation with upgraded lighting",
    width: 800,
    height: 600,
  },

  // Gallery 2 — Outdoor Lighting
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop&q=80",
    alt: "Outdoor landscape lighting at dusk",
    width: 800,
    height: 600,
  },

  // Gallery 3 — Commercial
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
    alt: "Commercial office electrical setup",
    width: 800,
    height: 600,
  },

  // CTA Section Background
  "cta": {
    src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&h=600&fit=crop&q=80",
    alt: "Summit Electric service van parked in a neighborhood",
    width: 1200,
    height: 600,
  },

  // Testimonials Background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80",
    alt: "Beautiful home exterior at sunset",
    width: 1600,
    height: 900,
  },

  // Gallery 4 — Smart Home
  "gallery-4": {
    src: "https://images.unsplash.com/photo-1558002038-1091a1661116?w=800&h=600&fit=crop&q=80",
    alt: "Smart home touchscreen panel",
    width: 800,
    height: 600,
  },
} as const;

export type ImageSlot = keyof typeof images;