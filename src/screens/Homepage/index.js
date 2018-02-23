import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCitiesForSelectBox } from 'selectors/data'
import { selectCity } from 'actions'

import Homepage from './Homepage'

const mapStateToProps = store => ({
  cities: getCitiesForSelectBox(store),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectCity
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage))
