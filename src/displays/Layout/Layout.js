import React, { PureComponent } from 'react'
import './Layout.css'

import ScrollToTop from 'components/ScrollToTop'
import Headbar from './Headbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Notification from './Notification'

class Layout extends PureComponent {
  static defaultProps = {
    headbar: true,
    sidebar: true,
    children: null,
    notification: false
  }

  render() {
    return (
      <ScrollToTop>
        <main className="Layout">
          {this.props.headbar && (
            <div className="Layout__Headbar">
              <Headbar />
            </div>
          )}
          {this.props.sidebar && (
            <div className="Layout__Sidebar">
              <Sidebar />
            </div>
          )}
          <div className="Layout__Content">
            <Content>
              {this.props.children}
            </Content>
          </div>
        </main>
      </ScrollToTop>
    )
  }
}

export default Layout
