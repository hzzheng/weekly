import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import FEX_LOGO from '../../images/fex_logo.jpg'
import QIWU_LOGO from '../../images/qiwu_logo.png'

class List extends Component {
  static nav(link) {
    browserHistory.push(link)
  }

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'FEX 技术周刊',
          link: '/posts/fex',
          img: FEX_LOGO
        },
        {
          title: '奇舞周刊',
          link: '/posts/qiwu',
          img: QIWU_LOGO
        }
      ]
    }
  }

  render() {
    const { list } = this.state

    return (
      <ul className="weekly-list">
        {
          list.map(item => (
            <li key={item.title} onClick={() => List.nav(item.link)}>
              <img src={item.img} alt={item.title} className="logo" />
            </li>
          ))
        }
      </ul>
    )
  }
}

export default List
