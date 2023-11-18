/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
      // add prettier plugin
        require('tailwindcss'),
        require('autoprefixer'),
  ],
}

