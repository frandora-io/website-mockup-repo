import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#faf8f5",
        surface: "#f2ede6",
        "surface-2": "#e8e2d9",
        ink: "#1a1714",
        "ink-muted": "#6b6058",
        "ink-light": "#a09488",
        wine: "#7c2d3e",
        "wine-dark": "#5e1f2c",
        border: "#ddd8d0",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
