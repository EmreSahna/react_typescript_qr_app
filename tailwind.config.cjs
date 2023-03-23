/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-back': "url('../home-back.svg')",
        'phone-back': "url('../bg-phone.svg')",
      },
      fontFamily: {
        'pacifico': ['"Pacifico"', 'cursive'],
        'staatliches': ['"Staatliches"', 'cursive'],
        'domine': ['"Domine"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      colors: {
        'main-100': '#242582',
        'main-200': '#553D67',
        'main-300': '#F64C72',
        'main-400': '#99738E',
        'main-500': '#2F2FA2',
        'main-600': '#fa6748',
        'main-700': '#001220'
      }
    },
  },
  plugins: [],
}
