import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import config from 'config'

import ScrollToTop from 'components/ScrollToTop'
import Sitemap from 'components/Sitemap'
import Homepage from 'screens/Homepage'
import City from 'screens/City'
import Advertiser from 'screens/Advertiser'
import Content from 'screens/Content'

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route
            exact={true}
            path={`${config.PUBLIC_URL}/quem-somos`}
            render={() => <Content page="quem-somos" />}
          />
          <Route
            exact={true}
            path={`${config.PUBLIC_URL}/anunciar`}
            render={() => <Content page="anunciar" />}
          />
          <Route
            exact={true}
            path={`${config.PUBLIC_URL}/franquia`}
            render={() => <Content page="franquia" />}
          />
          <Route
            exact={true}
            path={`${config.PUBLIC_URL}/contato`}
            render={() => <Content page="contato" />}
          />
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
              <Advertiser
                city={match.params.city}
                advertiser={match.params.advertiser}
              />
            )}
          />
          <Route component={Homepage} />
        </Switch>
        <Sitemap />
      </ScrollToTop>
    )
  }
}

export default App
