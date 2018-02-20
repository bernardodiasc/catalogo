import React, { PureComponent } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './Welcome.css'

class Welcome extends PureComponent {
  static defaultProps = {}

  handleChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    return (
      <div className="Welcome">
        <div className="Welcome__copy">
          Welcome!
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
