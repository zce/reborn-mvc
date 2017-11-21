const { Controller } = require('../..')

class HomeController extends Controller {
  async contentdemo () {
    return this.content('hello reborn')
  }

  async jsondemo () {
    return this.json({ foo: 'demo' })
  }

  async viewdemo () {
    this.state.title = 'hello reborn'
    return this.view({ subtitle: 'A CoC MVC web framework for node.js' })
  }

  async redirectdemo () {
    return this.redirect('./contentdemo')
  }

  async filedemo () {
    return this.file('path/to/file')
  }
}

module.exports = HomeController
