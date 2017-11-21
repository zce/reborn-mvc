const path = require('path')
const glob = require('glob')

const controllerTypes = {}

class Controller {
  static init (dir) {
    glob.sync('./**/*.js', { cwd: dir })
      .forEach(item => {
        const temp = require(path.join(dir, item))
        // TODO: check controller
        const controllerName = temp.name.toLowerCase().replace('controller', '')
        controllerTypes[controllerName] = temp
      })
  }

  static createController (controllerName, context) {
    const type = controllerTypes[controllerName]
    if (!type) return null
    return new type(context)
  }

  constructor (context) {
    this.context = context
    this.request = context.request
    this.response = context.response
    this.state = {}
  }

  content (body, type = 'text/html') {
    this.response.type = type
    this.response.body = body
  }

  json (value) {
    this.response.type = 'application/json'
    this.response.body = JSON.stringify(value)
  }

  view (data) {
    this.response.type = 'text/html'
    this.response.body = JSON.stringify(data)
  }

  redirect (url, status = 302) {
    this.response.status = status
    this.response.redirect(url)
  }

  file (name) {
    const filename = path.resolve(name)
    this.response.attachment(filename)
    this.response.body = fs.createReadStream(filename)
  }

  error (...args) {
    return this.context.throw(...args)
  }
}

module.exports = Controller
