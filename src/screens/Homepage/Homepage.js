import React, { Component } from 'react'

import Layout from 'displays/Layout'
import Welcome from 'displays/Welcome'

class Homepage extends Component {
  static defaultProps = {}

  render() {
    return (
      <Layout sidebar={false}>
        <Welcome />
      </Layout>
    )
  }
}

export default Homepage
