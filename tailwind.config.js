/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        App: '90vh',
      },
      colors:{
        slide: "#795b5c",
      },
      borderRadius:{
        cart: "100%",
      },
      fontSize:{
        xl5: "50em",
      }
    },
  },
  plugins: [],
}