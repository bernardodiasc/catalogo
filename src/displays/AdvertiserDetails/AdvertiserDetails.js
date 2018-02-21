import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './AdvertiserDetails.css'

class AdvertiserDetails extends PureComponent {
  static defaultProps = {
    name: '',
    category: '',
    contact: {},
    location: {},
    body: '',
  }

  render() {
    return (
      <div className="AdvertiserDetails">
        <h1>{this.props.name}</h1>
        <p>{this.props.category}</p>
        {renderHTML(marked(this.props.body))}
        <hr />
        <ul>
          {Object.keys(this.props.contact).map(each => (
            <li key={`contact-${each}`}>
              <strong>{each}:</strong>
              <span>{this.props.contact[each]}</span>
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {Object.keys(this.props.location).map(each => each !== 'coordinates' && (
            <li key={`location-${each}`}>
              <strong>{each}:</strong>
              <span>{this.props.location[each]}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AdvertiserDetails
