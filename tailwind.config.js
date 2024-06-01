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
      },
      screens: {
        "screen1": { "max": "785px" },
        "formres": { "max": "700px" },
        "contact": { "max": "500px" },
        "screen2": { "max": "679px" },
        "footer1": { "max": "1024px" },
        "footer2": { "max": "387px" },
      },
      spacing: {
        'head': '650px',
        'card': "500px",
        'cardres': "400px",
        'form': "650px"
      },
    },
  },
  plugins: [],
}