module.exports = {
  plugins: [
    require('tailwindcss')('./tailwindcss-config.js'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-preset-env')({ stage: 1 }),
    require('autoprefixer'),
  ]
};
