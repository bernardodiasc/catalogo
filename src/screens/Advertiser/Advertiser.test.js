import React from 'react'
import { shallow } from 'enzyme'

import Advertiser from './Advertiser.js'

it('renders without crashing', () => {
  const component = shallow(<Advertiser />)
  expect(component).toMatchSnapshot()
})
