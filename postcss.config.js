const path = require('path');

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({ root: ctx.file.dirname }),
    require('postcss-url')({
      // basePath: [path.resolve('css'), path.resolve('node_modules/bootstrap-icons')],
      url: 'inline',
      encodeType: 'base64',
      maxSize: 10,
      ignoreFragmentWarning: false,
      fallback: 'copy'
    }),
    require('tailwindcss')(path.join(__dirname, 'tailwind.config.js')),
    require('postcss-preset-env')({
      stage: 1,
      autoprefixer: {},
      features: {
        'nesting-rules': true,
        'color-mod-function': { unresolved: 'warn' }
      }
    }),
    ctx.env === 'production' && require('cssnano')
  ].filter((v) => v)
});
