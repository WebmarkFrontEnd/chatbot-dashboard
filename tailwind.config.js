/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      xs: '390px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      screens: {
        xs: '350px',
        sm: '462px',
        md: '608px',
        // lg: '90%',
        // xl: '90%',
        // '2xl': '90%',
        // '3xl': '1396px',
      },
    },

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
        lightpurple: '#E0DAF5',
        grey: '#DAD7E9',
      },

      backgroundImage: {
        'custom-gradient':
          'linear-gradient(6deg, #AB7AEF 0%, #1C169A 53.63%, #1C174C 95.76%)',
      },

      fontSize: {
        '3xl': '26px',
      },
    },
  },
  plugins: [],
};
