import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          '"Cormorant Garamond"',
          '"Playfair Display"',
          '"Cinzel"',
          "Georgia",
          "serif",
        ],
        cinzel: [
          '"Cinzel"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
        ],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: "#faf8f2",
          100: "#f3ede0",
          200: "#e7dbc2",
          300: "#dfba73",
          400: "#c5a059",
          500: "#d4af37", // Imperial Gold
          600: "#b89047",
          700: "#947132",
          800: "#6e5223",
          900: "#493617",
          950: "#2a1e0b",
        },
        obsidian: {
          950: "#050505",
          900: "#0a0a0a",
          850: "#0f0f0f",
          800: "#141414",
          700: "#1f1f1f",
          600: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#d4af37",
          hover: "#b89047",
          light: "#dfba73",
          subtle: "rgba(212, 175, 55, 0.15)",
        },
      },
      boxShadow: {
        "gold-sm": "0 2px 10px rgba(212, 175, 55, 0.08)",
        "gold-md": "0 4px 20px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 8px 32px rgba(212, 175, 55, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
