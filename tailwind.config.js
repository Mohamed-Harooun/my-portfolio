/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1440px', // Add this to expand for larger screens
      }
    },
    extend: {
      screens: {
        xs: '480px',
        sm: '576px',  // Bootstrap sm breakpoint
        md: '768px',  // Bootstrap md breakpoint
        lg: '992px',  // Bootstrap lg breakpoint
        xl: '1200px', // Bootstrap xl breakpoint
        '2xl': '1400px', // Bootstrap xxl breakpoint
      },
      gridTemplateColumns: {
        // Bootstrap-like grid system
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      backgroundColor: {
        light: "#EEF1FF",
        dark: "#061532"
      },
      textColor: {
        light: "#000",
        dark: "#fff"
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      },
      animation: {
        rotate: 'rotate 6s linear infinite',
      },
      boxShadow: {
        'card-light': '0 2px 21px 5px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 2px 21px 3px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

