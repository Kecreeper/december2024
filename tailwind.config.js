/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['garamond'],
        'eagles': ['eagles'],
      },
      screens: {
        'xs': '720px',
        'sm': '1280px',
        'md': '1600px',
        'lg': '1920px',
        'xl': '2560px',
        '2xl': '3840px',
      },
    },
  },
  plugins: [],
}

