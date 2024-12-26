import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        // Adding the smooth animation to loop infinitely
        infiniteScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // This ensures it loops smoothly
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite", // Original scrolling animation
        infiniteScroll: "infiniteScroll 30s linear infinite", // New infinite scroll animation
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D14715",
        secondary: "#1B0C5D",
      },
    },
  },
  plugins: [],
} satisfies Config;
