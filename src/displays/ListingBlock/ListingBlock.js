import React, { PureComponent, Children } from 'react'
import './ListingBlock.css'

class ListingBlock extends PureComponent {
  static defaultProps = {
    title: '',
    list: [],
  }

  render() {
    return (
      <section className="ListingBlock">
        {this.props.title && (
          <h1 className="ListingBlock__title">
            {this.props.title}
          </h1>
        )}
        {Children.map(this.props.list, item => (
          <div className="ListingBlock__item">
            {item}
          </div>
        ))}
      </section>
    )
  }
}

export default ListingBlock
