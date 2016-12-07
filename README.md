# html-flow

[![NPM version](https://img.shields.io/npm/v/html-flow.svg?style=flat-square)](https://npmjs.com/package/html-flow) [![NPM downloads](https://img.shields.io/npm/dm/html-flow.svg?style=flat-square)](https://npmjs.com/package/html-flow) [![Build Status](https://img.shields.io/circleci/project/egoist/html-flow/master.svg?style=flat-square)](https://circleci.com/gh/egoist/html-flow) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)

## Install

```bash
$ npm install -D html-flow
```

## Usage

```js
const flow = require('webpack-flow')
const html = require('html-flow')

module.exports = flow(config => {
  config.use(html).html(options)
})
```

The same options as in [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin#configuration)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**html-flow** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/html-flow/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
