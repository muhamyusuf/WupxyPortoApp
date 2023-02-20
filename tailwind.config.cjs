/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "#fcfcfc",
        dark: "#242424",
        dark_secondary:"#353535",
        text_dark:'#212121',
        text_light:'#fdfdfd'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "720px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
