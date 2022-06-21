module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/docs/**/*.{vue,js,html}",
  ],
  presets: [
    require('./preset')
  ]
};
