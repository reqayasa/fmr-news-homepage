/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        soft_orange: {
          500: 'hsl(35deg 77% 62% / 1)',
        },
        soft_red: {
          500: 'hsl(5deg 85% 63% / 1)',
        },
        off_white: {
          500: 'hsl(36deg 100% 99% / 1)'
        },
        grayish_blue: {
          500: 'hsl(233deg 8% 79% / 1)'
        },
        dark_grayish_blue: {
          500: 'hsl(236deg 13% 42% / 1)'
        },
        very_dark_blue: {
          500: 'hsl(240deg 10% 5% / 1)'
        },
      }
    },
  },
  plugins: [],
}

