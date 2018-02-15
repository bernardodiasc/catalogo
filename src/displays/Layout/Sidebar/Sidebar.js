import React, { PureComponent } from 'react'
import './Sidebar.css'

class Sidebar extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <aside className="Layout-Sidebar">
        Sidebar
      </aside>
    )
  }
}

export default Sidebar
