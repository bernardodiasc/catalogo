import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './AdvertiserDetails.css'

class AdvertiserDetails extends PureComponent {
  static defaultProps = {
    advertiser: {
      'index.md': {
        attr: {
          name: '',
          category: '',
          contact: {},
          location: {},
        },
        body: '',
      }
    },
  }

  render() {
    const { attr, body } = this.props.advertiser['index.md']
    return (
      <div className="AdvertiserDetails">
        <h1>{attr.name}</h1>
        <p>{attr.category}</p>
        {body && renderHTML(marked(body))}
        <hr />
        <ul>
          {Object.keys(attr.contact).map(each => (
            <li key={`contact-${each}`}>
              <strong>{each}:</strong>
              <span>{attr.contact[each]}</span>
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {Object.keys(attr.location).map(each => each !== 'coordinates' && (
            <li key={`location-${each}`}>
              <strong>{each}:</strong>
              <span>{attr.location[each]}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AdvertiserDetails
