/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color1-pink": "#D959C3",
        "color2-lightblue": "#491BF2",
        "color3-blue": "#165FF2",
        "color4-lightpurple": "#E1D0F2",
        "color5-dark": "#0D0D0D",
        "color6-lightgrey": "#BFBFBF",
        "color7-light": "#F2F2F2",
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
      fontFamily: {
        font: [],
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
