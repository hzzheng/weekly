const Router = require('koa-router')
const { qiwu } = require('../controllers')

const router = new Router({
  prefix: 'qiwu'
})

router.get('/issues', qiwu.getIssues())
router.get('/issues/:id', qiwu.getIssueDetail())

module.exports = router

