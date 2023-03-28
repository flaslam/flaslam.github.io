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
          lighter: colors.indigo[100],
          light: colors.indigo[200],
          medium: colors.indigo[300],
          DEFAULT: colors.indigo[600],
          dark: colors.zinc[800],
        },
        dark: {
          secondary: colors.zinc[400],
          medium: colors.zinc[600],
          highlight: colors.zinc[800],
          panel: colors.zinc[900],
          DEFAULT: colors.black,
        },
        link: colors.blue[600],
      },
      spacing: {
        container: "1.25rem",
        top: "2rem",
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
