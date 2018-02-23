import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'ramda'
import config from 'config'

import data from 'data.json'
import CitiesSelectors from 'selectors/cities'
import AdvertisersSelectors from 'selectors/advertisers'

import Layout from 'displays/Layout'
import ListingBlock from 'displays/ListingBlock'
import CityDetails from 'displays/CityDetails'

class City extends Component {
  static defaultProps = {
    city: null,
    history: {
      push: () => {},
    },
    notFound: () => {},
  }

  constructor(props) {
    super(props)
    this.cititesSelectors = new CitiesSelectors(data)
    this.city = this.cititesSelectors.getCityById(this.props.city)
    this.attr = this.cititesSelectors.getCityAttrById(this.props.city)
    this.body = this.cititesSelectors.getCityBodyById(this.props.city)
    this.advertisersSelectors = new AdvertisersSelectors(data)
    this.advertisers = this.advertisersSelectors.getAllAdvertisersByCity(this.props.city)

    if (isEmpty(this.city)) {
      this.props.notFound('deu ruim')
      this.props.history.push(`${config.PUBLIC_URL}/`)
    } else {
      this.props.notFound('')
    }

  }

  render() {
    const advertisersList = Object.keys(this.advertisers)
      .map(advertiser => (
        <Link
          key={advertiser}
          to={`${config.PUBLIC_URL}/${this.props.city}/${advertiser}`}
        >
          {this.advertisersSelectors.getAdvertiserNameById(advertiser)}
        </Link>
      ))

    const leftColumnRender = [
      <ListingBlock
        key="listingblock-advertisers"
        title="Outros anunciantes"
        list={advertisersList}
      />,
      <ListingBlock
        key="listingblock-categories"
        title="Categorias"
        list={[
          <Link
            key="listingblock-categories-escolas"
            to={`${config.PUBLIC_URL}/${this.props.city}/?category=escola`}
          >
            Escolas
          </Link>,
          <Link
            key="listingblock-categories-padarias"
            to={`${config.PUBLIC_URL}/${this.props.city}/?category=padaria`}
          >
            Padarias
          </Link>
        ]}
      />
    ]

    return (
      <Layout hasSearchBar leftColumn={leftColumnRender}>
        <CityDetails {...this.attr} body={this.body} />
      </Layout>
    )
  }
}

export default City
