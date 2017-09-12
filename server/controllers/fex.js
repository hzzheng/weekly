const request = require('superagent')
const cheerio = require('cheerio')

const URL = 'http://fex.baidu.com/weekly/'
const POST_URL = 'http://fex.baidu.com/blog/'

exports.getIssues = () => async (ctx) => {
  const { res } = await request.get(URL)
  const $ = cheerio.load(res.text)
  const list = []

  $('.post-list li').each((i, el) => {
    const $el = $(el)
    const url = $el.find('a').attr('href')
    const text = $el.find('p').text()
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
  const year = id.slice(0, 4)
  const month = id.slice(4, 6)
  const date = id.slice(-2)

  const { res } = await request.get(
    `${POST_URL}${year}/${month}/fex-weekly-${date}//`
  )
  const $ = cheerio.load(res.text)
  const $article = $('.content p')
  const list = []

  $article.each((i, el) => {
    if (i === $article.length - 1) return

    const $el = $(el)
    const html = $el.html()
    const match = html.match(/(http.+)<br>([^]+)/)

    if (!match) return
    list.push({
      url: match[1],
      text: $el.find('strong').text(),
      desc: match[2]
    })
  })
  ctx.body = list
}
