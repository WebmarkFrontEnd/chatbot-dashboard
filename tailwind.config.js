/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      figtree: ['figtree', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#1C174C',
        secondary: '#40B342',
        textlight: '#555179',
        dark: '#5A3DCC',
        light: '#fff',
      },
    },
  },
  plugins: [],
};
