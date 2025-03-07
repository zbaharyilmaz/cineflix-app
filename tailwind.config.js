/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color1": "#D959C3",
        "color2": "#161426",
        "color3": "#165FF2",
        "color4": "#186BD9",
        "color5": "#0D0D0D",
      },
      fontFamily:{
         "font": ["Eater", "serif"]

      }
    },
  },
  darkMode:"selector",
  plugins: [],
}