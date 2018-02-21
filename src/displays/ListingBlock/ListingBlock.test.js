import React from 'react'
import { shallow } from 'enzyme'

import ListingBlock from './ListingBlock.js'

it('renders without crashing', () => {
  const component = shallow(<ListingBlock />)
  expect(component).toMatchSnapshot()
})
