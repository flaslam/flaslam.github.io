const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          light: colors.violet[200],
          DEFAULT: colors.violet[600],
          dark: colors.zinc[500],
        },
        dark: {
          secondary: colors.zinc[400],
          highlight: colors.zinc[800],
          panel: colors.zinc[900],
          DEFAULT: colors.black,
        },
        link: colors.blue[600],
      },
      spacing: {
        container: "1.25rem",
        top: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
  },
  safelist: ["grid-cols-2", "grid-cols-3"],
  plugins: [],
};
