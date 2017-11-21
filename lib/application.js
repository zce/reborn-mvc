const path = require('path')
const Koa = require('koa')
const Controller = require('./controller')
const Router = require('./router')

class Reborn extends Koa {
  constructor (options) {
    super()

    if (typeof options === 'string') {
      options = { root: options }
    }

    this.options = Object.assign({ root: '.' }, options)
    this.options.root = path.resolve(this.options.root)

    // this.loadMiddlewares()
    Controller.init(path.join(this.options.root, 'controllers'))

    Router.init(this.options.root, this)
  }
}

module.exports = Reborn
