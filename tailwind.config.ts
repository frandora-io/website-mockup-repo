import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f0e0c",
        surface: "#1c1a17",
        "surface-2": "#252219",
        cream: "#f2ede4",
        "cream-muted": "#a89880",
        gold: "#c9a458",
        "gold-dark": "#a07c38",
        border: "#2e2b26",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
