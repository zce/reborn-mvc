const pathToRegexp = require('path-to-regexp')

class Route {
  constructor (options) {
    this.name = options.name
    this.method = options.method || 'all'
    this.path = options.path
    this.defaults = options.defaults

    this.keys = []
    this.regexp = pathToRegexp(this.path, this.keys)
    this.toPath = pathToRegexp.compile(this.path)
  }

  match (path, method) {
    if (this.method !== 'all' && this.method !== method) return false
    const matches = this.regexp.exec(path)
    if (!matches) return false
    const params = Object.assign({}, this.defaults)
    for (let i = 0; i < this.keys.length; i++) {
      const key = this.keys[i]
      params[key.name] = matches[i + 1] || params[key.name]
    }
    const keys = Object.keys(params)
    if (!(keys.includes('controller') && keys.includes('action'))) return false
    return params
  }

  url (params) {
    // const query = {}
    // for (const item in params) {
    //   if (this.keys.find(k => k.name === item)) {
    //     query[item] = params[item]
    //     delete params[item]
    //   }
    // }
    return this.toPath(params)
  }
}

module.exports = Route
