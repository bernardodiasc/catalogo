import React, { Component } from 'react'

import Layout from 'displays/Layout'

class Content extends Component {
  static defaultProps = {
    page: null
  }

  renderContent(page) {
    switch (page) {
      case 'quem-somos':
        return (
          <p key="quem-somos">
            quem-somos
          </p>
        )
      case 'anunciar':
        return (
          <p key="anunciar">
            anunciar
          </p>
        )
      case 'franquia':
        return (
          <p key="franquia">
            franquia
          </p>
        )
      case 'contato':
        return (
          <p key="contato">
            contato
          </p>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <Layout sidebar={false}>
        {this.renderContent(this.props.page)}
      </Layout>
    )
  }
}

export default Content
