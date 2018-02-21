import React, { PureComponent } from 'react'
import './Breadcrumbs.css'

class Breadcrumbs extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="Layout-Breadcrumbs">
        {this.props.children}
      </div>
    )
  }
}

export default Breadcrumbs
