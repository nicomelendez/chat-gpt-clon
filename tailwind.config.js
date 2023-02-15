/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chatgptlogo: '#10a37f',
        chatgptdarkgray: '#202123',
        chatgptgray: '#343541',
        chatgptligthgray: '#444654'
      }
    }
  },
  plugins: []
}
