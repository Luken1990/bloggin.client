/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        nightBlue: '#0D1B2A',
        darkBlue: '#1B263B',
        midBlue: '#415A77',
        lightBlue: '#778DA9',
        darkGrey: '#343A40',
        midGrey: '#ADB5BD',
        lightGrey: '#E0E1DD',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
