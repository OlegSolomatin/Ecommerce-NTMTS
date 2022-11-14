/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-custom' : 'rgb(88, 199, 250)'
      },
      animation: {
        'custom-spin': 'customSpin 1s linear infinite',
      },
      keyframes: {
        customSpin: {
          '100%': { transform: 'rotate(1turn)' }
        }
      },
      screens: {
        'tabletS' : '767.7px',
        'tabletM': '819.7px',
        // => @media (min-width: 768px) { ... }

        'laptop': '1359.7px',
        // => @media (min-width: 1360px) { ... }

        'desktop': '1599.7px',
        // => @media (min-width: 16000px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp')
  ],
}
