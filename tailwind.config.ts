import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // primary: "#f7efd7",
        primary: "#fce6c2",
        cream: "#FBF8EF",
        orange: "#ab530a",
      },
      colors: {
        "soft-grey": "#706F6B",
        "off-black": "#3D3D3D",
        orange: "#ab530a",
      },
      fontFamily: {
        "tiempos-headline": ["Tiempos Headline", "serif"],
        "sf-mono": ["SF Mono", "Menlo", "monospace"],
        epilogue: ["Epilogue", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "bricolage-grotesque": ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
