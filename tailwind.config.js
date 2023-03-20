/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        grayMain: '#ececec',
        darkMain: '#282828',
        lightHover: '#dfe0e0',
        darkHover: '#444950',
        darkColor: 'rgb(23 23 23)',
        lightColor: 'rgb(249 250 251)',
        InputColorDark: '#302f2f',
        InputColorLight: '#e6e6e6',
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