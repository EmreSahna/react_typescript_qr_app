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
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'main-100': '#242582',
        'main-200': '#553D67',
        'main-300': '#F64C72',
        'main-400': '#99738E',
        'main-500': '#2F2FA2',
        'main-600': '#fa6748',
      }
    },
  },
  plugins: [],
}