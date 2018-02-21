import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './CityDetails.css'

class CityDetails extends PureComponent {
  static defaultProps = {
    city: {
      'index.md': {
        attr: {
          name: '',
          state: '',
        },
        body: '',
      }
    }
  }

  render() {
    const { attr, body } = this.props.city['index.md']
    return (
      <div className="CityDetails">
        <h1>{attr.name}</h1>
        <p>{attr.state}</p>
        {body && renderHTML(marked(body))}
      </div>
    )
  }
}

export default CityDetails
