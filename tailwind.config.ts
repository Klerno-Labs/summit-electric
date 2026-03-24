import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#F8FAFC",
        accent: "#3B82F6",
        "accent-hover": "#2563EB",
        success: "#10B981",
        error: "#EF4444",
        background: "#FFFFFF",
        surface: "#FFFFFF",
        "text-main": "#1E293B",
        "text-body": "#475569",
        muted: "#94A3B8",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        "spacing-section": "4rem",
      },
      borderRadius: {
        lg: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;