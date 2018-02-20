import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from 'config'

import ScrollToTop from 'components/ScrollToTop'
import Sitemap from 'components/Sitemap'
import Homepage from 'screens/Homepage'
import NotFound from 'screens/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route
              exact={true}
              path={`${config.PUBLIC_URL}/`}
              component={Homepage}
            />
            <Route component={NotFound} />
          </Switch>
          <Sitemap />
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App
