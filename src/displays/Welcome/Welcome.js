import React, { PureComponent } from 'react'
import './Welcome.css'

import SelectBox from 'displays/SelectBox'

class Welcome extends PureComponent {
  static defaultProps = {
    cities: [],
    onSelect: value => value
  }

  handleChange = (selectedOption) => {
    this.props.onSelect(selectedOption.value)
  }

  render() {
    return (
      <div className="Welcome">
        <div className="Welcome__copy">
          Bem vindo(a) ao melhor catálogo comercial do mundo!
        </div>
        <div className="Welcome__selector">
          <SelectBox
            name="select-city"
            placeholder="Selecione uma cidade..."
            onChange={this.handleChange}
            options={this.props.cities}
          />
        </div>
      </div>
    )
  }
}

export default Welcome
