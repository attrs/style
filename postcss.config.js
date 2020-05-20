module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({ root: ctx.file.dirname }),
    require('postcss-url')({ url: 'copy', useHash: true }),
    require('postcss-preset-env')({ stage: 1 }),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ctx.env === 'production' && require('cssnano')
  ].filter((v) => v)
});
