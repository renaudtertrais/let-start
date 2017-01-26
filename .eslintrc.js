module.exports = {
  "extends": "airbnb",
  rules: {
    "arrow-parens": ['error', 'as-needed'],
    "import/no-extraneous-dependencies": 0,
    "comma-dangle": ["error", {
      "arrays": 'always-multiline',
      "objects": 'always-multiline',
      "imports": 'always-multiline',
      "exports": 'always-multiline',
      "functions": "ignore",
    }],
  },
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "node": true,
    "jest": true,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        config: 'webpack.config.js'
      },
    },
  },
};
