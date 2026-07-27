process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const configFactory = require('react-scripts/config/webpack.config');
const webpack = require('webpack');
const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');

// Clean build folder
fs.emptyDirSync(paths.appBuild);

const config = configFactory('production');
config.optimization.concatenateModules = false;

console.log('Creating an optimized production build...');
webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) console.error(err.details);
    process.exit(1);
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
    process.exit(1);
  }
  // Copy public folder assets to build
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
  console.log('Compiled successfully! Build ready in /build');
});
