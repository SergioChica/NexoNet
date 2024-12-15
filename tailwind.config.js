/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '920px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'st': {'max': '480px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '370px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}


