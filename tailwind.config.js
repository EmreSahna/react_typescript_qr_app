/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['"Pacifico"', 'cursive'],
        'staatliches': ['"Staatliches"', 'cursive'],
        'domine': ['"Domine"', 'serif'],
      },
      colors: {
        '500-main': '#CCA43B',
        '400-main': '#8093F1',
        '300-main': '#B388EB',
        '200-main': '#E5E5E5',
        '100-main': '#363636',

      }
    },
  },
  plugins: [],
}