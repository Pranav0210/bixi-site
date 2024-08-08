/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 5px 5px #a6d9d8',
        '4xl': [
            '0 35px 35px #61BCB9',
            '0 45px 65px #61BCB9'
        ]
      },
      colors:{
        themeBlue: "#61BCB9",
        backpack: "#F29978",
        papayaWhip: "#F6EDE8",
        clearSky: "#F2FAFA"
      },
      fontFamily: {
        titleHans: "Black Han Sans",
        alfaSlab: "Alfa Slab One",
        cabinSketch: "Cabin Sketch",
        dosisBody: "Dosis"
      },
    },
  },
  plugins: [],
}

