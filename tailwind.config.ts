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
        bg: "#FFFFFF",
        soft: "#F4F8FD",       // pale clinical blue tint
        ink: {
          DEFAULT: "#0B2545",
          soft: "#2B4A6F",
          mute: "#6B8AAE",
        },
        line: "#E1E8F2",
        accent: {
          DEFAULT: "#1660C9",
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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        narrow: "44rem",
      },
    },
  },
  plugins: [],
};

export default config;
