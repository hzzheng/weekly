const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const api = require('./api')

const router = new Router()

router.use(api.routes(), api.allowedMethods())

router.get('*', async (ctx) => {
  const indexPath = path.resolve(__dirname, '../../dist/index.html')
  const stream = await fs.createReadStream(indexPath)

  ctx.type = 'html'
  ctx.body = stream
})

module.exports = router

