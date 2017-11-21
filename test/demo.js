const router = require('../lib/router')

router.map({
  name: 'default',
  method: 'get',
  path: '/:controller?/:action?',
  defaults: { controller: 'home', action: 'index1' }
})

const params = router.getRouteData({
  method: 'post',
  path: '/home/demo'
})

console.log(params)
