import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import List from './pages/List'
import Post from './pages/Post'
import Detail from './pages/Detail'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="list" component={List} />
    <Route path="posts/:type" component={Post} />
    <Route path="posts/:type/:id" component={Detail} />
  </Route>
)

export default routes
