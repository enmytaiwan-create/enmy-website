/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './story.html',
    './products.html',
    './rainbow-markers.html',
  ],
  theme: {
    extend: {
      lineHeight: {
        'readable': '1.75',
      },
    },
  },
  plugins: [],
}
