import React, { PureComponent } from 'react'
import './Sitemap.css'
import config from 'config'

class Sitemap extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <nav className="Sitemap">
        <ul>
          <li><a href={`${config.PUBLIC_URL}/`}>Homepage</a></li>
          <li><a href={`${config.PUBLIC_URL}/quem-somos`}>Quem Somos</a></li>
          <li><a href={`${config.PUBLIC_URL}/anunciar`}>Anunciar</a></li>
          <li><a href={`${config.PUBLIC_URL}/franquia`}>Franquia</a></li>
          <li><a href={`${config.PUBLIC_URL}/contato`}>Contato</a></li>
        </ul>
      </nav>
    )
  }
}

export default Sitemap
