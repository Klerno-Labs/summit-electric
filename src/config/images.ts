import { z } from "zod";

export const images = {
  hero: {
    src: "https://mfile.z.ai/1774397102220-3155203c94d14148ae8a97ae4a4045a0.png?ufileattname=2026032508045428c39f70143942fc_watermark.png",
    alt: "Interior view of a sleek residential electrical panel installation with organized breakers and clean copper wiring connections.",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://mfile.z.ai/1774397102672-af9ef34c69d449a6bd3665460976c659.png?ufileattname=2026032508045494eee61664214771_watermark.png",
    alt: "A branded Summit Electric service van parked on a quiet residential street with soft morning sunlight.",
    width: 1200,
    height: 800,
  },
  about: {
    src: "https://mfile.z.ai/1774397102711-bfac2b6605e54df7a565fff574be3c31.png?ufileattname=202603250804549c6bb3418eee4437_watermark.png",
    alt: "A diverse group of electricians wearing Summit Electric uniforms standing together in a well-lit office hallway.",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://mfile.z.ai/1774397111278-a7a6ea9add77436486c16b1c0b2bf4ff.png?ufileattname=202603250805022301b45c138f41d3_watermark.png",
    alt: "Close-up shot of a high-end electrical breaker panel being professionally installed with secure terminal connections.",
    width: 1200,
    height: 800,
  },
  "service-2": {
    src: "https://mfile.z.ai/1774397110467-c21d52f2b6574dc79faa53f460c5ccf5.png?ufileattname=20260325080502bde9d17e21c64df0_watermark.png",
    alt: "Electrician holding a tablet to view smart home system diagnostics on a clean white wall.",
    width: 1200,
    height: 800,
  },
  "service-3": {
    src: "https://mfile.z.ai/1774397110715-939c6dcee81948d1a6d28da45dbed9c5.png?ufileattname=202603250805026b82af44f3fd431a_watermark.png",
    alt: "A modern home driveway featuring a sleek electric vehicle charging station and elegant landscape lighting.",
    width: 1200,
    height: 800,
  },
  "gallery-1": {
    src: "https://mfile.z.ai/1774397121783-46b32df6dae146cb8a0d0b19405ec704.png?ufileattname=2026032508051156b99a70a93a4e4d_watermark.png",
    alt: "Close-up view of sleek recessed LED lighting installed in a finished modern kitchen ceiling.",
    width: 1200,
    height: 800,
  },
  "gallery-2": {
    src: "https://mfile.z.ai/1774397122289-f1f7d195e9d24545ac90e4d638f8b575.png?ufileattname=20260325080511e32b53ed71894756_watermark.png",
    alt: "Aerial eye-level shot of neat white wiring running along a ceiling joist in a bright attic.",
    width: 1200,
    height: 800,
  },
  "gallery-3": {
    src: "https://mfile.z.ai/1774397119006-db64339c0e1848e69cc4fe2b0736997b.png?ufileattname=2026032508051137b67fd43cce4405_watermark.png",
    alt: "A close-up of a customized Summit Electric toolbox containing organized sockets, strippers, and multimeters.",
    width: 1200,
    height: 800,
  },
  "gallery-4": {
    src: "https://mfile.z.ai/1774397130545-74222868c746493d9fd0f84245f84362.png?ufileattname=202603250805228b846fd982344f0e_watermark.png",
    alt: "Electrician using a modern digital voltage meter to test a residential outlet in a garage.",
    width: 1200,
    height: 800,
  },
  "team-1": {
    src: "https://mfile.z.ai/1774397131515-0f2b17cab532481dae828867924e5b9f.png?ufileattname=202603250805222846e88118414022_watermark.png",
    alt: "Senior electrician wearing branded uniform, looking confident with a hard hat in hand against a modern backdrop.",
    width: 1200,
    height: 800,
  },
  "team-2": {
    src: "https://mfile.z.ai/1774397130024-1789e9e8b9d647c6b0e0b4f9e459aed0.png?ufileattname=2026032508052210b81d4b9413481a_watermark.png",
    alt: "Professional headshot of a female electrician smiling warmly, inspecting a smart home panel in a bright room.",
    width: 1200,
    height: 800,
  },
  "team-3": {
    src: "https://mfile.z.ai/1774397139258-ff1c2c36eb5a444ca043774f19d6afaf.png?ufileattname=20260325080531724fa93d52964a6d_watermark.png",
    alt: "Close-up of a satisfied homeowner shaking hands with a Summit Electric technician outdoors.",
    width: 1200,
    height: 800,
  },
  cta: {
    src: "https://mfile.z.ai/1774397141906-d1ea96b44de04a31828a35292b655f94.png?ufileattname=2026032508053175c843ec173a41bc_watermark.png",
    alt: "Sleek dark toggle switch plate on a clean white wall with a subtle shadow of a hand.",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://mfile.z.ai/1774397139645-4f37c7c37cc54a08bb57c7554c083ffc.png?ufileattname=20260325080531e7084f806d9041a7_watermark.png",
    alt: "Subtle texture background featuring abstract copper wiring patterns on a dark charcoal background.",
    width: 1200,
    height: 800,
  },
  "menu-1": {
    src: "https://mfile.z.ai/1774397149520-2807e1aa944f4f18922ccd8442dad857.png?ufileattname=202603250805427ba3c7196dae4c39_watermark.png",
    alt: "Elegant logo typography for Summit Electric on a sleek dark background with subtle electrical circuit lines.",
    width: 1200,
    height: 800,
  },
  "menu-2": {
    src: "https://mfile.z.ai/1774397149971-db71ed30a2734c63b88ad8b10b62d185.png?ufileattname=202603250805428619898cc86247ab_watermark.png",
    alt: "Side profile of a Summit Electric service van driving down a scenic country road.",
    width: 1200,
    height: 800,
  },
  "menu-3": {
    src: "https://mfile.z.ai/1774397149734-7a5d1c35e27043489c4c566f7cdce270.png?ufileattname=20260325080542f7d916ad63b7410a_watermark.png",
    alt: "Clean architectural shot of a beautiful modern home with visible smart home sensors on the facade.",
    width: 1200,
    height: 800,
  },
  "product-1": {
    src: "https://mfile.z.ai/1774397157633-21bd0695f6214cf1a421bddea3851505.png?ufileattname=2026032508055099dcd7057d264a22_watermark.png",
    alt: "Close-up details of a high-end circuit breaker panel showcasing the latest generation technology and clean layout.",
    width: 1200,
    height: 800,
  },
  "product-2": {
    src: "https://mfile.z.ai/1774397157933-25ce58ce5744452d8076782d8a80a986.png?ufileattname=20260325080550caddd8d62ba04c58_watermark.png",
    alt: "A clean modern white smart outlet with a touch interface sitting on a wooden desk.",
    width: 1200,
    height: 800,
  },
  "product-3": {
    src: "https://mfile.z.ai/1774397157613-11de8584f63f4ae7adc39698033f4bcf.png?ufileattname=202603250805500f8bb06f72ec4f75_watermark.png",
    alt: "Professional rubber electrician gloves laid out neatly on a table near a meter.",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;