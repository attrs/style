module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    ctx.env === 'production' && require('cssnano')
  ].filter((v) => v)
};
