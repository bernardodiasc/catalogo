import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Headbar.css'
import config from 'config'

class Headbar extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <div className="Layout-Headbar">
        <div className="Layout-Headbar__brand">
          <Link to={`${config.PUBLIC_URL}/`}>Brand</Link>
        </div>
        <ul className="Layout-Headbar__nav">
          <li><Link to={`${config.PUBLIC_URL}/quem-somos`}>Quem Somos</Link></li>
          <li><Link to={`${config.PUBLIC_URL}/anunciar`}>Anunciar</Link></li>
          <li><Link to={`${config.PUBLIC_URL}/franquia`}>Franquia</Link></li>
          <li><Link to={`${config.PUBLIC_URL}/contato`}>Contato</Link></li>
        </ul>
      </div>
    )
  }
}

export default Headbar
