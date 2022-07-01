module.exports = {
  important: true,
  content: [
    "./index.html",
    "./docs/**/*.{vue,js,html}",
  ],
  presets: [
    require('./src/preset')
  ]
};
