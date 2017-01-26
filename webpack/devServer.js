/*
 * dependencies:
 * - webpack-dev-server
 */

import url from 'url';

const devServer = (serverUrl, other = {}) => {
  const serverUrlWithProtocol = serverUrl.search('//') > -1 ? serverUrl : `http://${serverUrl}`;
  const { hostname, port } = url.parse(serverUrlWithProtocol);

  return {
    devServer: Object.assign({
      host: hostname,
      port: parseInt(port, 10),
      //stats: { colors: true },
      // historyApiFallback: true,
      // hot: true,
      // inline: true,
    }, other),
    //plugins: [new webpack.HotModuleReplacementPlugin()],
  };
};

export default devServer;
