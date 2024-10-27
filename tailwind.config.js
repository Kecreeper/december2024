/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['garamond']
      },
      screens: {
        'sm': '720px',
        'md': '900px',
        'lg': '1080px',
        'xl': '1440px',
        '2xl': '2000px'
      }
    },
  },
  plugins: [],
}

