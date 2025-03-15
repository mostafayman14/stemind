/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary': '#072AC8',
        'white': '#FBFBFB',
        'sunflower': '#FFC600',
        'black': '#010309',
        'dark': '#040F2B',
        'grey': '#7D7E7F',
        'darkGrey': '#494A4c',

      },
    },

  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [require("daisyui")],

}