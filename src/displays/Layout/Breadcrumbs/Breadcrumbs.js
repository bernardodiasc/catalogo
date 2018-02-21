import React, { PureComponent, Children } from 'react'
import './Breadcrumbs.css'

class Breadcrumbs extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="Layout-Breadcrumbs">
        {Children.map(this.props.children, children => (
          <div className="Layout-Breadcrumbs__item">
            {children}
          </div>
        ))}
      </div>
    )
  }
}

export default Breadcrumbs
