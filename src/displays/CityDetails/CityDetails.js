import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './CityDetails.css'

class CityDetails extends PureComponent {
  static defaultProps = {
    name: '',
    state: '',
    body: '',
  }

  render() {
    return (
      <div className="CityDetails">
        <h1>{this.props.name}</h1>
        <p>{this.props.state}</p>
        {renderHTML(marked(this.props.body))}
      </div>
    )
  }
}

export default CityDetails
