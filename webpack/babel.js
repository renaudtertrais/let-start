/* dependencies:
 * - babel-core
 * - babel-loader
 * - babel-polyfill ?
 */
const babel = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
});

export default babel;
