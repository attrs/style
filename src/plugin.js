const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const postcssImport = require('postcss-import-sync');
const plugin = require('tailwindcss/plugin');

const toJson = (filepath) => {
  try {
    const file = path.join(__dirname, filepath);
    const source = fs.readFileSync(file, 'utf-8').toString();
    const compiled = postcss()
      .use(postcssImport())
      .process(source, {
        from: file
      })
      .css;

    return postcssJs.objectify(postcss.parse(compiled));
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const pluginfn = ({ addBase, addComponents, addUtilities, theme }) => {
  const options = theme('attrs');

  addBase(toJson('css/variables.css'));
  addUtilities(toJson('css/util.css'));
  addComponents(toJson('css/components.css'));
};

module.exports = plugin(pluginfn);