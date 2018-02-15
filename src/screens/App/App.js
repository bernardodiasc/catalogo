import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import queryString from 'query-string'
import config from 'config'

import Layout from 'displays/Layout'
import Sitemap from 'components/Sitemap'
import Homepage from 'screens/Homepage'
import Post from 'screens/Post'
import NotFound from 'screens/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact={true}
              path={`${config.PUBLIC_URL}/`}
              component={Homepage}
            />
            <Route
              path={`${config.PUBLIC_URL}/post/:postId`}
              render={({ match }) => (
                <Post postId={match.params.postId} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Sitemap />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
