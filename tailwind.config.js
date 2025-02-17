/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        RegularBold:["kingred"],
      },
      backgroundImage: {
        'intro1': "url('/src/assets/images/intro2.png')",
        
      },
      animation: {
        wave: 'wave 10s infinite linear',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
