const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader'
  });
  config.module.rules.push({
    test: /\.css?$/,
    loaders: [ 'style', 'raw'],
    include: path.resolve(__dirname, './')
  });
  config.resolve.alias = {
    '@app': path.resolve(process.cwd())
  };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
}
