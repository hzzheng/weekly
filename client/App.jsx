import React from 'react'
import PropTypes from 'prop-types'
import './styles/index.scss'

const App = ({ children }) => (
  <div className="app">
    <header title="weekly" />
    <main>{children}</main>
  </div>
)


App.propTypes = {
  children: PropTypes.any
}

App.defaultProps = {
  children: ''
}

export default App

