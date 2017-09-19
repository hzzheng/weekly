const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')
const views = require('koa-views')
const serve = require('koa-static')
const router = require('./routes')
const cors = require('./middlewares/cors')

const app = new Koa()

app.use(cors())
app.use(convert(serve(path.resolve(__dirname, '../dist'))))
app.use(views(path.join(__dirname, '/views'), { extension: 'pug' }))
app.use(router.routes(), router.allowedMethods())

app.listen(5000)
