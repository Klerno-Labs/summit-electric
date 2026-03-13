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
        secondary: {
          DEFAULT: "#f4f6f8",
          foreground: "#1f2937",
        },
        accent: {
          DEFAULT: "#ff6b00",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        surface: "#ffffff",
        text: "#1f2937",
        muted: "#6b7280",
        border: "#e9ecef",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(0,0,0,0.05)",
        hover: "0 12px 24px rgba(0,0,0,0.1)",
        modal: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;