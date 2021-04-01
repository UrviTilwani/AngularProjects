module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: theme => theme('colors'),
       textColor: {
         'primary': '#f48840',
       }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};