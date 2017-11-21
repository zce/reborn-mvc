const path = require('path')
const Route = require('./route')
const Controller = require('./controller')

class Router {
  static init (dir, app) {
    const router = new Router()
    try {
      router.map(require(path.join(dir, 'routes')))
    } catch (e) {
      // TODO: when has no routes.js
      throw e
    }

    app.use(async (ctx, next) => {
      const routeData = router.getRouteData(ctx)
      if (!routeData) return next()

      const controller = Controller.createController(routeData.controller, ctx)
      console.log(controller)
      const action = controller[routeData.action]
      if (!action) return next()

      const result = await action.call(controller)
    })
  }

  constructor () {
    this.routes = {}
  }

  map (options) {
    if (options instanceof Array) {
      for (var i = 0; i < options.length; i++) {
        this.routes[options[i].name] = new Route(options[i])
      }
    } else {
      this.routes[options.name] = new Route(options)
    }
  }

  getRouteData (ctx) {
    for (const name in this.routes) {
      const route = this.routes[name]
      const params = route.match(ctx.path, ctx.method)
      if (params) return params
    }
  }

  url (name, params) {
    return this.routes[name].url(params)
  }
}

module.exports = Router
