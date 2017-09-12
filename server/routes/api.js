const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})
const basename = path.basename(module.filename)

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) &&
    (file.split('.').slice(-1)[0] === 'js') &&
    (file !== basename && file !== 'index.js'))
  .forEach((file) => {
    // eslint-disable-next-line
    const route = require(path.join(__dirname, file))
    router.use(route.routes(), route.allowedMethods())
  })

module.exports = router
