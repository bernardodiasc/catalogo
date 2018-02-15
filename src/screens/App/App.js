import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from 'config'

import LayoutContainer from 'containers/LayoutContainer'
import Sitemap from 'components/Sitemap'
import Homepage from 'screens/Homepage'
import Post from 'screens/Post'
import NotFound from 'screens/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LayoutContainer>
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
        </LayoutContainer>
      </BrowserRouter>
    )
  }
}

export default App
