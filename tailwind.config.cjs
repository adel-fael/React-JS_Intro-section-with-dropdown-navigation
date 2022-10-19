/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '700px',
      // => @media (min-width: 700px) { ... }
      tablet: '970px',
      // => @media (min-width: 950px) { ... }
    },
  },
  plugins: [],
}
