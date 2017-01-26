import HtmlWebpackPlugin from 'html-webpack-plugin';

const html = (...templates) => ({
  plugins: templates.map(template => new HtmlWebpackPlugin({ template })),
});

export default html;
