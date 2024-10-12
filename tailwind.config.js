/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        main:"#2D2F31",
      primary: "#6b6f73",
      }
    },
  },
  plugins: [],
}

