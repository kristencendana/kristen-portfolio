/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 600px)' },
        // => @media (min-height: 800px) { ... }
        // 'middle': { 'raw': '(min-height: 601px),(max-height: 800px)'  },
      }
    },
    screens: {
      'xxs': {'max': '300px'},
      'xs': {'min': '301px', 'max': '640px'},
      
      'sm': {'min': '641px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
