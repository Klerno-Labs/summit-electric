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
        primary: {
          DEFAULT: "#0056b3",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ff6b00",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        surface: "#ffffff",
        foreground: "#1f2937",
        muted: "#6b7280",
        "muted-light": "#f4f6f8",
        border: "#e5e7eb",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay": "linear-gradient(to right, rgba(0, 86, 179, 0.9), rgba(0, 86, 179, 0.4))",
      },
      boxShadow: {
        card: "0 2px 4px rgba(0,0,0,0.05)",
        hover: "0 12px 24px rgba(0,0,0,0.1)",
        modal: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;