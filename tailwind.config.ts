import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#8A9A8E",
          light: "#C5CEC8",
          dark: "#5C6E61",
        },
        blush: {
          DEFAULT: "#D4A89A",
          light: "#F0DDD6",
          pale: "#F7EDE8",
        },
        gold: {
          DEFAULT: "#C4A265",
          light: "#E8D5B0",
        },
        cream: "#FAF7F2",
        ivory: "#F5F0E8",
        charcoal: {
          DEFAULT: "#2D2926",
          light: "#6B6560",
        },
        stone: "#B8AFA6",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05" }],
        overline: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.15em" }],
      },
      maxWidth: {
        content: "1200px",
        "full-bleed": "1440px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 8rem)",
      },
      letterSpacing: {
        overline: "0.15em",
        wordmark: "0.2em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
