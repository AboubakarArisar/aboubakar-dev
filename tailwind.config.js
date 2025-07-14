/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        neon: {
          yellow: "#E2FF00",
          green: "#00FF66",
          purple: "#B100FF",
          pink: "#FF00E5",
        },
        dark: {
          900: "#0A0A0A",
          800: "#121212",
          700: "#1A1A1A",
          600: "#242424",
        },
      },
    },
  },
  plugins: [],
};
