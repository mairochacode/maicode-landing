/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prussian: '#003153',
        pearl: '#FBFBFB',
      },
    },
  },
  plugins: [],
}
