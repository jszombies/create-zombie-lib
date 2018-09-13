const { resolve } = require('path');

module.exports = function config({ __dirname }) {
  return {
    entry: './src/index',
    devtool: 'cheap-module-source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [resolve(__dirname, 'src')],
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.js?x$/,
          include: resolve(__dirname, 'src'),
          use: 'babel-loader',
        },
      ],
    },
    externals: {
      react: 'commonjs react',
      'prop-types': 'commonjs prop-types',
    },
  };
};
