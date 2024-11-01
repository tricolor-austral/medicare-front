/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A9D6E5',
          DEFAULT: '#61A5C2',
          dark: '#01497C',
        },
        secondary: {
          light: '#99E2B4',
          DEFAULT: '#67B99A',
          dark: '#358F80',
        },
        white: '#fff',
        grey: {
          light: '#F7F8F7',
          DEFAULT: '#EFF1ED',
          dark: '#B3B5B3',
        },
        black: '#090808',
        red: '#EE6055',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
};