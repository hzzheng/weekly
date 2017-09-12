import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import request from 'superagent'
import classnames from 'classnames'
import config from '../../config'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: false, // 默认倒序
      posts: []
    }
  }

  componentWillMount() {
    const { type } = this.props.params

    request
      .get(`${config.server}${config[type].posts}`)
      .then(res => res.body)
      .then((res) => {
        this.setState({
          posts: res
        })
      })
  }

  nav({ url, text }) {
    const { type } = this.props.params
    const REG = /\d+/g
    let id = url.match(REG)[0]

    if (type === 'fex') {
      const REG_FEX = /(\d{4})\/(\d{2})\/(\d{2})/
      id = text.match(REG_FEX).slice(1).join('')
    }

    if (id) {
      browserHistory.push(`/posts/${type}/${id}`)
    }
  }

  sort() {
    const { posts, sort } = this.state
    this.setState({
      sort: !sort,
      posts: posts.reverse()
    })
  }

  render() {
    const { posts, sort } = this.state
    const iconCls = classnames(
      'iconfont',
      'icon-sort',
      {
        'icon-active': sort
      }
    )

    return (
      <div className="page-posts">
        <h5 onClick={() => this.sort()}>
          <i className={iconCls} />
        </h5>
        <ol className="posts-list">
          {
            posts.map(p => (
              <li key={p.date} onClick={() => this.nav(p)}>
                {p.text}
                <span className="date">{p.date}</span>
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

export default Post
