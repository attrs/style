const theme = require('./src/tailwindcss/theme');
const preset = require('./src/tailwindcss/preset');

module.exports = {
  important: true,
  content: [
    './index.html',
    './src/docs/**/*.{vue,js,html}',
  ],
  // theme,
  presets: [preset()],
  variants: {
    extend: {
      borderWidth: ['last']
    }
  }
};
