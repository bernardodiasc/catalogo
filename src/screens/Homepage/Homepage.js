import React, { Component } from 'react'
import config from 'config'

import Layout from 'displays/Layout'
import Welcome from 'displays/Welcome'

class Homepage extends Component {
  static defaultProps = {
    cities: [],
    selectCity: () => {},
    history: {
      push: () => {},
    },
  }

  handleSelect = (value) => {
    this.props.selectCity(value)
    this.props.history.push(`${config.PUBLIC_URL}/${value}`)
  }

  render() {
    return (
      <Layout>
        <Welcome
          cities={this.props.cities}
          onSelect={this.handleSelect}
        />
      </Layout>
    )
  }
}

export default Homepage
