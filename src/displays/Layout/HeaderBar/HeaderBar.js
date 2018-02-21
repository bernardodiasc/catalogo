import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './HeaderBar.css'
import config from 'config'

class HeaderBar extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <div className="Layout-HeaderBar">
        <div className="Layout-HeaderBar__brand">
          <Link to={`${config.PUBLIC_URL}/`}>Brand</Link>
        </div>
        <ul className="Layout-HeaderBar__nav">
          <li><Link to={`${config.PUBLIC_URL}/quem-somos`}>Quem Somos</Link></li>
          <li><Link to={`${config.PUBLIC_URL}/anunciar`}>Anunciar</Link></li>
          <li><Link to={`${config.PUBLIC_URL}/franquia`}>Franquia</Link></li>
          <li><Link to={`${config.PUBLIC_URL}/contato`}>Contato</Link></li>
        </ul>
      </div>
    )
  }
}

export default HeaderBar
