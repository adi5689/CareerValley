/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
       fontFamily: {
         'anta': ['Anta', 'sans-serif'],
         'jersey': ['Jersey 20', 'sans-serif'],
       },
       keyframes: {
         'gradient-x': {
           '0%, 100%': {
             'background-size': '200% 200%',
             'background-position': 'left bottom'
           },
           '50%': {
             'background-size': '200% 200%',
             'background-position': 'right bottom'
           }
         }
       },
       animation: {
         'gradient-x': 'gradient-x 3s ease infinite'
       },
     }
  },
  plugins: [],
 }
 