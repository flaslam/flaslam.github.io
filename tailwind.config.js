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
          text: colors.zinc[100],
          secondary: colors.zinc[400],
          highlight: colors.zinc[700],
          panel: colors.zinc[800],
          DEFAULT: colors.zinc[900],
        },
        link: colors.blue[600],
      },
    },
  },
  safelist: ["grid-cols-2", "grid-cols-3"],
  plugins: [],
};
