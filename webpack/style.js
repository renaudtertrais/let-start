/* dependencies:
 * - sass-loader
 * - node-sass
 * - style-loader
 * - css-loader
 * - autoprefixer
 * - postcss
 * - extract-text-webpack-plugin
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const style = bundleName => {
  const test = /\.s?css$/;
  const loader = ['css-loader', 'postcss-loader', 'sass-loader'];

  if (bundleName) {
    return {
      module: {
        rules: [{
          test,
          loader: ExtractTextPlugin.extract({ loader, fallbackLoader: 'style-loader' }),
        }],
      },
      plugins: [new ExtractTextPlugin(bundleName)],
    };
  }

  return {
    module: {
      rules: [{ test, use: ['style-loader', ...loader] }],
    },
  };
};

export default style;
