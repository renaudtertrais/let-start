import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default dirPath => ({
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '..', dirPath),
      to: path.basename(dirPath),
    }]),
  ],
});

