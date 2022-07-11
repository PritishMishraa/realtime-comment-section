/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './public/js/app.js'],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(-30px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1'
          },
        },
      },
      animation: {
        'fade_in': 'fade .6s ease forwards'
      }
    },
  },
  plugins: [],
}
