import React, { PureComponent } from 'react'
import './Layout.css'

import HeaderBar from './HeaderBar'
import SearchBar from './SearchBar'
import Breadcrumbs from './Breadcrumbs'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Content from './Content'
import FooterBar from './FooterBar'
// import Notification from './Notification'
import Sitemap from 'displays/Sitemap'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
    breadcrumbs: false,
    leftColumn: false,
    rightColumn: false,
    hasSearchBar: false,
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
        {this.props.hasSearchBar && (
          <div className="Layout__SearchBar">
            <SearchBar />
          </div>
        )}
        {this.props.breadcrumbs && (
          <div className="Layout__Breadcrumbs">
            <Breadcrumbs>
              {this.props.breadcrumbs}
            </Breadcrumbs>
          </div>
        )}
        <div className="Layout__Body">
          {this.props.leftColumn && (
            <aside className="Layout__LeftColumn">
              <LeftColumn>
                {this.props.leftColumn}
              </LeftColumn>
            </aside>
          )}
          {this.props.rightColumn && (
            <aside className="Layout__RightColumn">
              <RightColumn>
                {this.props.rightColumn}
              </RightColumn>
            </aside>
          )}
          <article className="Layout__Content">
            <Content>
              {this.props.children}
            </Content>
          </article>
        </div>
        <footer className="Layout__FooterBar">
          <FooterBar />
          <Sitemap />
        </footer>
      </main>
    )
  }
}

export default Layout
