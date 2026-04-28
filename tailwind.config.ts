import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1F2B",
        slate: "#3D4451",
        paper: "#F6F1F5",
        rose: "#B28B9F",
        mist: "#D9D6E0"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"]
      },
      boxShadow: {
        panel: "0 18px 60px rgba(12, 15, 23, 0.32)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(246, 241, 245, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 241, 245, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
