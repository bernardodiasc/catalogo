import React, { PureComponent } from 'react'
import './Layout.css'

import HeaderBar from './HeaderBar'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Content from './Content'
// import Notification from './Notification'
import Sitemap from 'displays/Sitemap'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
    leftcolumn: false,
    rightcolumn: false,
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <main className="Layout">
        <header className="Layout__HeaderBar">
          <HeaderBar />
        </header>
        {this.props.leftcolumn && (
          <aside className="Layout__LeftColumn">
            <LeftColumn>
              {this.props.leftcolumn}
            </LeftColumn>
          </aside>
        )}
        {this.props.rightcolumn && (
          <aside className="Layout__RightColumn">
            <RightColumn>
              {this.props.rightcolumn}
            </RightColumn>
          </aside>
        )}
        <article className="Layout__Content">
          <Content>
            {this.props.children}
          </Content>
        </article>
        <Sitemap />
      </main>
    )
  }
}

export default Layout
