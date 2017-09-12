const request = require('superagent')
const cheerio = require('cheerio')

const URL = 'https://weekly.75team.com/'

exports.getIssues = () => async (ctx) => {
  const { res } = await request.get(URL)
  const $ = cheerio.load(res.text)
  const list = []

  $('.issue-list li').each((i, el) => {
    const $el = $(el)
    const $title = $el.find('a')
    const url = $title.attr('href')
    const text = $title.text()
    const date = $el.find('.date').text()

    list.push({
      url,
      text,
      date
    })
  })
  ctx.body = list
}

exports.getIssueDetail = () => async (ctx) => {
  const { id } = ctx.params
  const { res } = await request.get(`${URL}issue${id}.html`)
  const $ = cheerio.load(res.text)
  const list = []

  $('#content .article').each((i, el) => {
    const $el = $(el)
    const $title = $el.find('.title a')
    const url = $title.attr('href')
    const text = $title.text()
    const desc = $el.find('.desc').text()

    list.push({
      url,
      text,
      desc
    })
  })
  ctx.body = list
}
