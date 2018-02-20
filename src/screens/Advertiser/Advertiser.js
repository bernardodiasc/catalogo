import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from 'config'

import Layout from 'displays/Layout'

class Advertiser extends Component {
  static defaultProps = {
    city: null,
    advertiser: null
  }

  render() {
    return (
      <Layout sidebar={false}>
        {this.props.advertiser}
        <hr />
        <Link to={`${config.PUBLIC_URL}/${this.props.city}`}>voltar para pagina da cidade</Link><br/>
      </Layout>
    )
  }
}

export default Advertiser
