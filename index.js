'use strict'
const Html = require('html-webpack-plugin')

module.exports = {
  name: 'html',
  config(options) {
    return {
      plugins: [
        new Html(options)
      ]
    }
  }
}
