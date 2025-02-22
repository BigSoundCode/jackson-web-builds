import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#ffffff", // White
          light: "#f3f4f6",   // Light gray
          dark: "#e5e7eb"     // Dark gray
        },
        secondary: {
          DEFAULT: "#00ff00", // Lime green
          light: "#4dff4d",   // Light lime
          dark: "#00cc00"     // Dark lime
        },
        accent: {
          DEFAULT: "#00ff00", // Keep lime green as an accent
          light: "#4dff4d",
          dark: "#00cc00"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
