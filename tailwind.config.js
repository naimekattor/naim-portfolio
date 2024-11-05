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
        
      }
    },
  },
  plugins: [],
}
