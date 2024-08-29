/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      figtree: ['figtree', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#5A3DCC',
        secondary: '#40B342',
        dark: '#1C174C',
        light: '#555179',
        lightblue: '#E0F5FF',
      },

      fontSize: {
        '3xl': '32px',
      },
    },
  },
  plugins: [],
};
