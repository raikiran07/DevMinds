/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monst: ["Montserrat", "sans-serif"],
      }
    },
    colors:{
      'purple':'#9B66FD',
      'light-gray':'#7D7B7B',
      'light-purple':'#C6A7F6',
      'very-light-purple':'#ECE2FD',
      'dark-white':'#F5F5F5',
      'white':'#FFFFFF',
      'black':'#000000',
      'light-white':'#ECE2FD',
      'purple-700':'rgb(126 34 206)',
      'purple-400':'rgb(192 132 252)'
    }
  },
  plugins: [],
}

