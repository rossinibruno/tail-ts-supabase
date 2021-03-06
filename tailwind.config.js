module.exports = {
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html']
};
