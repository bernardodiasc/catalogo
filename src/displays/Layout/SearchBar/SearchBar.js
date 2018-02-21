import React, { PureComponent } from 'react'
import './SearchBar.css'

import SelectBox from 'displays/SelectBox'

class SearchBar extends PureComponent {
  static defaultProps = {
    onSelect: () => {},
  }

  handleChange = (selectedOption) => {
    this.props.onSelect(selectedOption.value)
  }

  render() {
    return (
      <div className="Layout-SearchBar">
        <div className="Layout-SearchBar__selectbox">
          <SelectBox
            name="select-city"
            placeholder="Selecione uma cidade..."
            onChange={this.handleChange}
            options={[
              { value: 'ubatuba', label: 'Ubatuba' },
            ]}
          />
        </div>
        <div className="Layout-SearchBar__selectbox">
          <SelectBox
            name="select-category"
            placeholder="Selecione uma categoria..."
            onChange={this.handleChange}
            options={[
              { value: 'escola', label: 'Escola' },
              { value: 'padaria', label: 'Padaria' },
            ]}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
