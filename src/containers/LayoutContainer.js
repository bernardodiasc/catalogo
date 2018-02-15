import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleHeadbar, toggleSidebar } from 'actions'

import Layout from 'displays/Layout'

class LayoutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headbar: this.props.headbar,
      sidebar: this.props.sidebar,
    }
  }

  render() {
    return (
      <Layout
        headbar={this.state.headbar}
        sidebar={this.state.sidebar}
        toggleHeadbar={this.props.toggleHeadbar}
        toggleSidebar={this.props.toggleSidebar}
      >
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = store => ({
  headbar: store.layout.headbar,
  sidebar: store.layout.sidebar,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleHeadbar,
    toggleSidebar,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer)
