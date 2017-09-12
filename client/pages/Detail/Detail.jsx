import React, { Component } from 'react'
import request from 'superagent'
import config from '../../config'

class Detail extends Component {
  static nav(url) {
    location.href = url
  }

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    const { type, id } = this.props.params

    request
      .get(`${config.server}${config[type].posts}/${id}`)
      .then(res => res.body)
      .then((res) => {
        this.setState({
          list: res
        })
      })
  }

  render() {
    const { list } = this.state

    return (
      <ul className="post-detail">
        {
          list.map((p, i) => (
            <li key={p.url} onClick={() => Detail.nav(p.url)}>
              <h4>{p.text}</h4>
              <p className="desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
              <span className="seq">{i}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Detail
