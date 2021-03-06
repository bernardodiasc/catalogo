import React, { PureComponent } from 'react'
import './RightColumn.css'

class RightColumn extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="Layout-RightColumn">
        {this.props.children}
      </div>
    )
  }
}

export default RightColumn
