/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "'Poppins', sans-serif"
      },
      colors: {
        'c-dark': {
          '100': '#9F9F9F',
          '200': '#706F6F',
          '300': '#403F3F'
        },
        'c-pink': '#D72050',
        'c-orange': '#FF8C47'
      }
    },
  },
  plugins: [],
}