const colors = require('tailwindcss/colors');
const theme = require('./theme');

module.exports = (options) => {
  return {
    important: true,
    darkMode: 'class',
    plugins: [require('./plugin.js')(options)],
    theme,
    variants: {
      extend: {
        borderWidth: ['last']
      }
    }
  };
};
