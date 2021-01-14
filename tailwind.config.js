module.exports = {
  purge: false, //Separate purgecss config file
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-main': '#A2AFDB',
        'blue-dark': '#31489A',
        'blue-light': '#E4E8F4',
      },
    },
    fontFamily: {
      sans: ['montserrat', 'Arial', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '2rem',
      },
    },
    borderRadius: {
      sm: '15px',
      DEFAULT: '44px',
      full: '9999px',
    },
  },
  variants: {},
  plugins: [],
};
