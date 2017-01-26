# Let start

A flexible web starter kit (webpack, babel, react...)

**DISCLAMER:** This project was created for my own needs and preferances,
so it might no fit your expectations. The aim is not to be too generic, but to provide a
quite complete solution to reduce copy/paste when starting a new project.

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
- `start`: launch the `webpack-dev-server`

## Webpack

The webpack configuaration is splitted into blocks (inspired from [webpack-blocks](https://github.com/andywer/webpack-blocks)). It helps keeping the file readable.

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
