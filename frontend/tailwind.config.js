module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        420: '420px',
      },
      backgroundColor: {
        secondaryColor: '#F0F0F0',
      },
    },
  },
  plugins: [],
};