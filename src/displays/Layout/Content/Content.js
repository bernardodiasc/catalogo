import React, { PureComponent } from 'react'
import './Content.css'

class Content extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="Layout-Content">
        {this.props.children}
      </div>
    )
  }
}

export default Content
