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
        danger: '#EB5757',
        accept: '#56CCF2',
        'black-light': '#454545',
      },
    },
  },
  plugins: [],
};
