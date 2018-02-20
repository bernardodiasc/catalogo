import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from 'config'

import Layout from 'displays/Layout'

class City extends Component {
  static defaultProps = {
    city: null
  }

  render() {
    return (
      <Layout sidebar={false}>
        {this.props.city}
        <hr />
        <Link to={`${config.PUBLIC_URL}/ubatuba/escola-exemplo`}>Escola Exemplo</Link><br/>
        <Link to={`${config.PUBLIC_URL}/ubatuba/padaria-exemplo`}>Padaria Exemplo</Link><br/>
      </Layout>
    )
  }
}

export default City
