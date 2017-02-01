# Let start

A flexible web starter kit (webpack, babel, react...)

**DISCLAIMER:** This project was created for my own needs and preferences,
so it might not fit your expectations. The aim is not to be too generic,
but to provide an almost complete solution to reduce copy/paste when starting a new project.

## Stack

This project uses:

- [Yarn](https://yarnpkg.com/)
- [Webpack 2](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [Scss](http://sass-lang.com/)
- [Postcss](http://postcss.org/) ([autoprefixer](https://github.com/postcss/autoprefixer))
- [Jest](https://facebook.github.io/jest/)
- [Enzyme](http://airbnb.io/enzyme/)
- [Eslint](http://eslint.org/) ([airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
- [Stylelint](https://stylelint.io/)
- [Travis CI](https://travis-ci.org/)
- [Codecov](https://codecov.io)


## Getting started

- Clone or download the repo, and remove extra files in order to adapt it to your needs.
- remove the `.git` folder `rm -rf ./.git`
- install dependencies `yarn install`
- start dev with `npm start`

## Scripts

This project uses npm scripts:

- `test`: launch the test (`jest`)
- `lint`: lint the `js`, `jsx`, `css` and `scss`
- `build`: launch the build (`webpack`)
- `deploy`: deploy the build folder on remote/gh-pages
- `clean`: remove the build and coverage folder
- `start`: launch the `webpack-dev-server`

## Webpack

The webpack configuaration is split into blocks (inspired from [webpack-blocks](https://github.com/andywer/webpack-blocks)). It helps keeping the file readable. The idea is to use **functions composition** in order to create the webpack configuration. You will need to use [webpack-merge](https://github.com/survivejs/webpack-merge) in order to compose those functions.

```js
import merge from 'webpack-merge';
import entry from './webpack/entry';
import output from './webpack/output';

export default merge.smart(
  entry('./src/index.js'),
  output('./build/bundle.js'),
);
```

### entry(entry)

Add the entry point. Could be a `string`, an `array` or an `object`. See [documentation](https://webpack.js.org/concepts/entry-points/).

```js
entry('./src/index.js')
```
### output(filePath [, options])

`output()` take a filePath and will set the **path** and the **filename** of the output. You can also add other fields such as **chunkFilename** in the options object as second parameter.

```js
output('./build/bundle.js')
```
### rule(test, …loaders);

This the simple way to add rules. Provide a **test regex** as first parameters and at least one **loader** in second parameter (you can can add as many loaders as you want in 3, 4, 5….parameters) and that's it.

```js
rule(/\.txt$/, 'raw-loader')
rule(/\.ya?ml$/, 'json-loader', 'yaml-loader')
```
### html(…htmlFiles)

This function will use the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) that "simplifies creation of HTML files to serve your webpack bundles". In a nutshell, it add the `<script />` and `<link />` tags to you html file and add it into the build folder. 

```js
html('src/index.html')
```
### babel()

This function do not take any argument. It will add the rule for **babel**. It will use the presets defined in the `.babelrc`.

```js
babel()
```
### style([ bundleName ])

`style()` will add a rule for **css/scss files**. By default, if you are not providing any bundleName, it will use the `style-loader` (this will add the styles in the head of the page). If you give a **bundleName**, it will use [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) to create the `bundle.css` in the build folder. Note also yhat this rule use [Postcss](http://postcss.org/) with [autoprefixer](https://github.com/postcss/autoprefixer). You can edit the **browserlist** directly in the `package.json`.

```js
style(`bundle.css`)
```
### devServer(url [, options])

`devServer()` will take generate the configuration for the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/). It take an url as first parameter and will extract **host** and **port** from it. There is some default options that you can override by passing an options object as second parameter. Note [HMR](https://webpack.js.org/concepts/hot-module-replacement/) is enabled.

```js
devServer('localhost:3000')
```
### extensions(...extensions)

It will set the `resolve.extensions` . See [documentation](https://webpack.js.org/configuration/resolve/#resolve-extensions)

```js
extensions('.js', '.jsx', '.json')
```
### copy(path)

This function uses [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin) in order to copy files into the build directory. The first and unique parameter is a **path** to a folder or a file. The structure will be keep in the build folder.

```js
  copy('./src/assets')
  copy('./README.md')
```

## Tests

Tests should be written in a `__tests__` folder anywhere in the project.

## Lint

The linter of the scripts files is `eslint`. It uses the [airbnb configuration](https://www.npmjs.com/package/eslint-config-airbnb)
with one or two ajustements.

## Coverage and continuous integration
This project use [Travis CI](https://travis-ci.org/) for continuous integration and push coverage on [codecov.io](https://codecov.io)

## Contributing

Every ideas and contributions are welcomed.

## Licence

MIT © 2016-present Renaud Tertrais
