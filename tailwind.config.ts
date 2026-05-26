import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF8F2",        // warm cream
        paper: "#FFFDF8",     // slightly lighter cream
        ink: {
          DEFAULT: "#14202E", // deep navy-black
          soft: "#384759",
          mute: "#7A8595",
        },
        line: "#E6DECF",      // warm divider
        accent: {
          DEFAULT: "#1F4D3F", // dark forest green
          50:  "#EEF3F0",
          100: "#D7E2DC",
          200: "#AEC4B9",
          300: "#82A595",
          400: "#558672",
          500: "#346856",
          600: "#1F4D3F",
          700: "#1A3F34",
          800: "#143229",
          900: "#0E2620",
        },
        sand: {
          50:  "#F7F1E1",
          100: "#EFE4C6",
          200: "#E1CF9F",
          300: "#C9B98D",
          400: "#AF9B6A",
          500: "#8C7E53",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-fraunces)", "Iowan Old Style", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "68ch",
        narrow: "44rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
