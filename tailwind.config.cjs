/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mulberry: {
          50: '#fbf4f8',
          100: '#f9eaf3',
          200: '#f4d6e7',
          300: '#ecb5d3',
          400: '#e086b4',
          500: '#d26298',
          600: '#c0477c',
          700: '#a43260',
          800: '#882c50',
          900: '#722946',
        },
      },
    },
  },
  plugins: [],
};
