import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#f0f4f8",
        accent: "#ff9900",
        background: "#ffffff",
        surface: "#ffffff",
        text: "#1a1a1a",
        muted: "#6b7280",
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        accent: ["Space Grotesk", "monospace"],
      },
      spacing: {
        base: "8px",
        section: "120px",
        card: "32px",
        button: "16px",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "16px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;