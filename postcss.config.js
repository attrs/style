module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({ root: ctx.file.dirname }),
    require('postcss-url')({ url: 'copy', useHash: true }),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-parcel-import'), // import 문제 임시해결책: https://github.com/parcel-bundler/parcel/issues/1165
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')
  ]
});
