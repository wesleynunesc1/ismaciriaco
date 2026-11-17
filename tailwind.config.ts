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
        raven: "#0D0D0D",
        crimson: {
          antique: "#76070B",
          vivid: "#B70000",
        },
        misty: "#E7E0D2",
        surface: {
          DEFAULT: "#171717",
          divider: "#262626",
          elevated: "#1C1C1C",
          subtle: "#121212",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
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
