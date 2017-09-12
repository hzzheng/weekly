const Router = require('koa-router')
const { fex } = require('../controllers')

const router = new Router({
  prefix: 'fex'
})

router.get('/issues', fex.getIssues())
router.get('/issues/:id', fex.getIssueDetail())

module.exports = router
