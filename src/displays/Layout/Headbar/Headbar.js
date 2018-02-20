import React, { PureComponent } from 'react'
import './Headbar.css'

class Headbar extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <div className="Layout-Headbar">
        Brand
        <ul>
          <li><a>link</a></li>
          <li><a>link</a></li>
          <li><a>link</a></li>
        </ul>
      </div>
    )
  }
}

export default Headbar
