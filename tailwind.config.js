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
        CardDarkColor: '#242424',
        CardLightColor: '#a5a7a8'
      },
      screens: {
        xs: '450px',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
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