/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
        colors:{
            'blizzard-purple': '#9F8FFF',
            'base-gray': 'rgba(235, 235, 235, 0.5)',
            'blizzard-btn': '#7B61FF',
            'blizzard-hover': 'rgba(159, 143, 255, 0.05)',
        },
    },
    fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
      // add prettier plugin
        require('tailwindcss'),
        require('autoprefixer'),
  ],
}

