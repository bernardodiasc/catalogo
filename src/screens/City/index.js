import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { notFound } from 'actions'
import City from './City'

const mapStateToProps = store => ({
  store: store,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    notFound,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(City))
