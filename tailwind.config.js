/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7533a8',
          dark: '#2b6cb0'
        },
        secondary: {
          light: '#fff',
          dark: '#c53030'
        },
        // accent: '',
        neutral: '#747474',
      },
    },
  },
  plugins: [],
}

