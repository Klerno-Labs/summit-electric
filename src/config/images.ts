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
  // Homepage hero banner — the first image visitors see [cogview]
  "hero": {
    src: "https://mfile.z.ai/1774356580876-ae0cdda9bd484837a5adeab98445fc9c.png?ufileattname=20260324204931933b54e2a9564a42_watermark.png",
    alt: "Modern luxury home exterior at dusk featuring warm LED pathway lights and accent spotlights, creating a premium and welcoming atmosphere.",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) [cogview]
  "hero-alt": {
    src: "https://mfile.z.ai/1774356579860-27177919771346e8b5a9c6f23365d90d.png?ufileattname=20260324204931bbe43c6aed21470e_watermark.png",
    alt: "Spacious modern kitchen during the day showcasing sleek recessed lighting and a clean, organized aesthetic.",
    width: 1200,
    height: 800,
  },

  // First service card image [cogview]
  "service-1": {
    src: "https://mfile.z.ai/1774356579070-f617309839164d968dd47e15a206f6b5.png?ufileattname=202603242049319029f69e0a04453a_watermark.png",
    alt: "Close-up of a technician hand stripping copper wires in a well-lit workshop.",
    width: 1200,
    height: 800,
  },

  // Second service card image [cogview]
  "service-2": {
    src: "https://mfile.z.ai/1774356588652-4817b0420f71464b8d8f6caa99f9be0f.png?ufileattname=20260324204941278f45de4fc94894_watermark.png",
    alt: "Brand new brushed metal circuit breaker panel mounted on a clean garage wall.",
    width: 1200,
    height: 800,
  },

  // Third service card image [cogview]
  "service-3": {
    src: "https://mfile.z.ai/1774356589221-52a691f233a145a1907af78e6b580293.png?ufileattname=20260324204941caf8088941c94f99_watermark.png",
    alt: "Technician installing a smart home thermostat onto a sleek gray interior wall.",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage [cogview]
  "about": {
    src: "https://mfile.z.ai/1774356589904-bfe7835bf25e42abac5a2efd62fd760f.png?ufileattname=202603242049418f5ac755a510423c_watermark.png",
    alt: "Diverse team of three electricians wearing branded uniforms standing confidently in a residential home.",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 [cogview]
  "gallery-1": {
    src: "https://mfile.z.ai/1774356598070-592671d8c69e4b8dbdfe3a618959dd01.png?ufileattname=202603242049503332bde6c8894f30_watermark.png",
    alt: "Detail shot of a recessed light can being installed into a drop ceiling.",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 [cogview]
  "gallery-2": {
    src: "https://mfile.z.ai/1774356598502-9814dc65457640e6bdd96baa5780c3ff.png?ufileattname=20260324204950334b781e038f4ac7_watermark.png",
    alt: "Wide angle of an electrician running low-voltage wiring for a home theater setup.",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 [cogview]
  "gallery-3": {
    src: "https://mfile.z.ai/1774356598816-3d849f2d7a1b4333b29b0a1166a4e68e.png?ufileattname=202603242049501f1f8a221c094857_watermark.png",
    alt: "Detail view of an underground electrical junction box cover being carefully tightened and sealed.",
    width: 1200,
    height: 800,
  },

  // Gallery image 4 [cogview]
  "gallery-4": {
    src: "https://mfile.z.ai/1774356606722-7e6d2b0bde904a129708693df943ee49.png?ufileattname=2026032420495946714854a3ff4821_watermark.png",
    alt: "Happy homeowner shaking hands with a satisfied electrician in a bright living room.",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background [cogview]
  "cta": {
    src: "https://mfile.z.ai/1774356606744-be6ea201f28d447e9030c6bf4098ac63.png?ufileattname=202603242049596617d80f5f6641e2_watermark.png",
    alt: "Lifestyle flat-lay of common electrical tools arranged neatly on a clean white surface.",
    width: 1200,
    height: 800,
  },

  // Team member photo [cogview]
  "team-1": {
    src: "https://mfile.z.ai/1774356607684-205b387d40294c35b77dd8ff7d0ba2fd.png?ufileattname=20260324204959c9a67e74d4794357_watermark.png",
    alt: "Portrait of a male electrician focused on reading blueprints at a workbench.",
    width: 1200,
    height: 800,
  },

  // Menu item photo 1 [cogview]
  "menu-1": {
    src: "https://mfile.z.ai/1774356615557-64f9a8bc78354fed8fbc3359fb33e254.png?ufileattname=20260324205008f09b50789de04237_watermark.png",
    alt: "Vector graphic icon combining a lightning bolt and a house outline.",
    width: 1200,
    height: 800,
  },

  // Menu item photo 2 [cogview]
  "menu-2": {
    src: "https://mfile.z.ai/1774356615528-3dc85f13dd5d414584f94f60c4d725c0.png?ufileattname=20260324205008cfbded7199be487b_watermark.png",
    alt: "Stylized graphic of a house with circuit lines tracing the structure.",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;