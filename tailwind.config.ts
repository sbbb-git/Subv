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
        bg: "#F4F8FD",        // pale clinical blue-white
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#0B2545", // deep navy
          soft: "#2B4A6F",
          mute: "#6B8AAE",
        },
        line: "#D6E2F0",      // soft blue divider
        accent: {
          DEFAULT: "#1660C9", // medical blue
          50:  "#EFF6FC",
          100: "#D9E8F8",
          200: "#B3D1F2",
          300: "#8EBBE8",
          400: "#5193DC",
          500: "#2F77D1",
          600: "#1660C9",
          700: "#114E9F",
          800: "#0E3F80",
          900: "#0B2F60",
          950: "#06203F",
        },
        teal: {
          50:  "#EFF8F9",
          100: "#D5EDF0",
          200: "#A8D9DE",
          300: "#73BFC8",
          400: "#3E9FAA",
          500: "#1E7F8A",
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
