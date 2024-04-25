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
      borderRadius:{
        cart: "100%",
      },
    },
  },
  plugins: [],
}