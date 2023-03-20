/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        grayMain: '#ececec',
        darkMain: '#333333',
        lightHover: '#dfe0e0',
        darkHover: '#444950'
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 28,
      '2xl': '2rem',
      xlg: '2.5rem',
    },
  },
  darkMode: 'class',
  plugins: [],
}