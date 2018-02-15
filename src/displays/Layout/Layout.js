import React, { PureComponent } from 'react'
import './Layout.css'

import ScrollToTop from 'components/ScrollToTop'
import Headbar from './Headbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Notification from './Notification'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
    headbar: true,
    sidebar: true,
    notification: false,
    toggleHeadbar: () => {},
    toggleSidebar: () => {},
  }

  render() {
    return (
      <ScrollToTop>
        <main className="Layout">
          {this.props.headbar && (
            <header className="Layout__Headbar">
              <Headbar />
            </header>
          )}
          {this.props.sidebar && (
            <aside className="Layout__Sidebar">
              <Sidebar />
            </aside>
          )}
          <article className="Layout__Content">
            <button onClick={this.props.toggleSidebar}>toggle sidebar</button>
            <Content>
              {this.props.children}
            </Content>
          </article>
        </main>
      </ScrollToTop>
    )
  }
}

export default Layout
