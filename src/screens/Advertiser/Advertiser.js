import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'ramda'
import config from 'config'

import data from 'data.json'
import CitiesSelectors from 'selectors/cities'
import AdvertisersSelectors from 'selectors/advertisers'

import Layout from 'displays/Layout'

class Advertiser extends Component {
  static defaultProps = {
    city: null,
    advertiser: null,
    history: [],
    notFound: () => {},
  }

  constructor(props) {
    super(props)
    this.cititesSelectors = new CitiesSelectors(data)
    this.city = this.cititesSelectors.getCityById(this.props.city)
    this.advertisersSelectors = new AdvertisersSelectors(data)
    this.advertiser = this.advertisersSelectors.getAdvertiserById(this.props.advertiser)

    if (isEmpty(this.city)) {
      this.props.notFound('deu ruim - cidade nao existe mano')
      this.props.history.push(`${config.PUBLIC_URL}/`)
    } else if (isEmpty(this.advertiser)) {
      this.props.notFound('deu ruim - anunciante nao existe poxa')
      this.props.history.push(`${config.PUBLIC_URL}/`)
    } else {
      this.props.notFound('')
    }

  }

  render() {
    const breadcrumbsRender = [
      <Link
        key="breadcrumbs-home"
        to={`${config.PUBLIC_URL}/`}
      >
        Início
      </Link>,
      <Link
        key={`breadcrumbs-${this.props.city}`}
        to={`${config.PUBLIC_URL}/${this.props.city}`}
      >
        {this.cititesSelectors.getCityNameById(this.props.city)}
      </Link>
    ]

    return (
      <Layout hasSearchBar breadcrumbs={breadcrumbsRender}>
        {this.props.advertiser}
      </Layout>
    )
  }
}

export default Advertiser
