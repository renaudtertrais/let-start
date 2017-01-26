import path from 'path';

export default (filePath, others = {}) => ({
  output: Object.assign({
    path: path.resolve(__dirname, '..', path.dirname(filePath)),
    filename: path.basename(filePath),
  }, others),
});
