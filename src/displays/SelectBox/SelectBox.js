import React, { PureComponent } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './SelectBox.css'

class SelectBox extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <div className="SelectBox">
        <Select {...this.props} />
      </div>
    )
  }
}

export default SelectBox
