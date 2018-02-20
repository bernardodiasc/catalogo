import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import config from 'config'

import ScrollToTop from 'components/ScrollToTop'
import Sitemap from 'components/Sitemap'
import Homepage from 'screens/Homepage'
import City from 'screens/City'
import Advertiser from 'screens/Advertiser'
import Content from 'screens/Content'
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
            <Route
              exact={true}
              path={`${config.PUBLIC_URL}/:city`}
              render={({ match }) => (
                <City city={match.params.city} />
              )}
            />
            <Route
              exact={true}
              path={`${config.PUBLIC_URL}/:city/:advertiser`}
              render={({ match }) => (
                <Advertiser city={match.params.city} advertiser={match.params.advertiser} />
              )}
            />
            <Route
              path={`${config.PUBLIC_URL}/quem-somos`}
              render={() => <Content page="quem-somos" />}
            />
            <Route
              path={`${config.PUBLIC_URL}/anunciar`}
              render={() => <Content page="anunciar" />}
            />
            <Route
              path={`${config.PUBLIC_URL}/franquia`}
              render={() => <Content page="franquia" />}
            />
            <Route
              path={`${config.PUBLIC_URL}/contato`}
              render={() => <Content page="contato" />}
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