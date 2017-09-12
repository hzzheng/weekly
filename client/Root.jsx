import React from 'react'
import PropTypes from 'prop-types'
import { Router, browserHistory } from 'react-router'

const Root = ({ routes }) => (
  <Router history={browserHistory}>
    {routes}
  </Router>
)

Root.propTypes = {
  routes: PropTypes.object.isRequired
}

export default Root
