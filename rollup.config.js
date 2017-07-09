let pkg = require('./package.json');
let typescript = require('rollup-plugin-typescript');
let uglify = require('rollup-plugin-uglify');

let moduleName = pkg.name[0].toUpperCase() + pkg.name.slice(1);

let dest, plugins;
if (process.env.TASK === 'build') {
  dest = `dist/${moduleName}.min.js`;
  plugins = [ typescript(), uglify() ];
} else {
  dest = `dist/${moduleName}.js`;
  plugins = [ typescript() ];
}

const config = {
  entry     : 'src/index.ts',
  dest      : dest,
  moduleName: moduleName,
  format    : 'umd',
  plugins   : plugins
};

export default config;