/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '900px',
        xl: '1100px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
};
