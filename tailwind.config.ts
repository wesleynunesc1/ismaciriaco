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
        // Official Client-Approved Palette
        black: "#080808",
        raven: "#080808",
        graphite: "#292929",
        gold: {
          DEFAULT: "#B89B73",
          light: "#C7AE8A",
          dark: "#A3865E",
        },
        beige: "#E7DED0",
        misty: "#E7DED0",
        surface: {
          DEFAULT: "#121212",
          divider: "#292929",
          elevated: "#181818",
          subtle: "#0E0E0E",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wide: "0.05em",
        widest: "0.15em",
        epic: "0.25em",
      },
      lineHeight: {
        tighter: "1.0",
        snugger: "1.08",
      },
    },
  },
  plugins: [],
};
export default config;
