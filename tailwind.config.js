/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#CD2E2E",
        "secondary": "#27AC2D",
      }
    },
  },
  plugins: [],
}