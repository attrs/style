module.exports = {
  plugins: [
    require('postcss-apply'),
    require('postcss-import'),
    require('postcss-parcel-import'), // import 문제 임시해결책: https://github.com/parcel-bundler/parcel/issues/1165
    require('postcss-url'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-preset-env')({ stage: 1 }),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
  ]
};
