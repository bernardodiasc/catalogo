import React, { PureComponent } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './Welcome.css'

class Welcome extends PureComponent {
  static defaultProps = {
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
          <Select
            name="select-city"
            placeholder="Selecione uma cidade..."
            onChange={this.handleChange}
            options={[
              { value: 'ubatuba', label: 'Ubatuba' },
            ]}
          />
        </div>
      </div>
    )
  }
}

export default Welcome
