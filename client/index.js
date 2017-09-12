import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'
import routes from './routes'

const render = (route) => {
  ReactDOM.render(
    <AppContainer>
      <Root routes={route} />
    </AppContainer>,
    document.getElementById('app')
  )
}
render(routes)

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(routes)
  })
  // overide console.error
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };
}
