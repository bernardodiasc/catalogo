import React, { Component } from 'react'
import config from 'config'

import Layout from 'displays/Layout'
import Welcome from 'displays/Welcome'

class Homepage extends Component {
  static defaultProps = {
    history: [],
  }

  handleSelect = (value) => {
    this.props.history.push(`${config.PUBLIC_URL}/${value}`)
  }

  render() {
    return (
      <Layout>
        <Welcome onSelect={this.handleSelect} />
      </Layout>
    )
  }
}

export default Homepage
