/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#F9A109',
        'primary-lighter': '#FFF0DE',
        'primary-accent-dark': '#E08800',
        secondary: '#80485B',
        danger: '#EB5757',
        'danger-dark': '#D23E3E',
        accept: '#56CCF2',
        'accept-dark': '#3DB3D9',
        unselected: '#BDBDBD',
        'light-gray': '#FAFAFE',
        'black-light': '#454545',
        gray: '#C1C1C4',
      },
      backgroundColor: {
        'custom-overlay-opacity': 'rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [],
};
