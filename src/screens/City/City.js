import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'ramda'
import config from 'config'

import data from 'data.json'
import CitiesSelectors from 'selectors/cities'
import AdvertisersSelectors from 'selectors/advertisers'

import Layout from 'displays/Layout'

class City extends Component {
  static defaultProps = {
    city: null,
    history: [],
    notFound: () => {},
  }

  constructor(props) {
    super(props)
    this.cititesSelectors = new CitiesSelectors(data)
    this.city = this.cititesSelectors.getCityById(this.props.city)

    if (isEmpty(this.city)) {
      this.props.notFound('deu ruim')
      this.props.history.push(`${config.PUBLIC_URL}/`)
    } else {
      this.props.notFound('')
    }

    this.advertisersSelectors = new AdvertisersSelectors(data)
    this.advertisers = this.advertisersSelectors.getAllAdvertisersByCity(this.props.city)
  }

  render() {
    const leftColumnRender = Object.keys(this.advertisers)
      .map(advertiser => (
        <Link
          key={advertiser}
          to={`${config.PUBLIC_URL}/${this.props.city}/${advertiser}`}
        >
          {this.advertisersSelectors.getAdvertiserNameById(advertiser)}
        </Link>
      ))

    return (
      <Layout hasSearchBar leftColumn={leftColumnRender}>
        {this.cititesSelectors.getCityNameById(this.props.city)}
      </Layout>
    )
  }
}

export default City
