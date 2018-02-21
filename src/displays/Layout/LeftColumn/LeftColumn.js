import React, { PureComponent } from 'react'
import './LeftColumn.css'

class LeftColumn extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="Layout-LeftColumn">
        {this.props.children}
      </div>
    )
  }
}

export default LeftColumn
