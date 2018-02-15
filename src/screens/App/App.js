import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import queryString from 'query-string'
import config from 'config'

import ScrollToTop from 'components/ScrollToTop'
import Sitemap from 'components/Sitemap'
// import Heroes from 'screens/Heroes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Sitemap />
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

          // <Switch>
          //   <Route exact={true} path={`${config.PUBLIC_URL}/`} component={Heroes} />
          //   <Route component={Heroes} />
          // </Switch>

export default App
