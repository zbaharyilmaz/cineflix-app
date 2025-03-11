/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
           "color1-pink": "#D959C3",
           "color2-lightblue": "#1c3de4",
           "color3-blue": "#3C4E73",
           "color4-grey": "#C1C9D9",
           "color5-dark": "#0D0D0D",
           "color6-lightgrey": "#BFBFBF",
           "color7-light": "#fffefe",
           "color8-grey":"#3C4E70",
           "color9-rose":"#A66A9C"

      },
      fontFamily: {
        font: [],
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
