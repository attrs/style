const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const postcssImport = require('postcss-import-sync');
const plugin = require('tailwindcss/plugin');

const toJson = (filepath) => {
  const file = path.join(__dirname, filepath);
  const dir = path.dirname(file);

  const source = fs.readFileSync(file, 'utf-8').toString();
  const compiled = postcss()
    .use(
      postcssImport({
        path: dir
      })
    )
    .process(source, {
      from: file
    }).css;

  return postcssJs.objectify(postcss.parse(compiled));
};

module.exports = (options) => {
  return plugin(({ addBase, addComponents, addUtilities /*, theme */ }) => {
    addBase(toJson('../css/base.css'));
    addBase(toJson('../css/variables.css'));
    addUtilities(toJson('../css/util.css'));
    addComponents(toJson('../css/components.css'));
  });
};
