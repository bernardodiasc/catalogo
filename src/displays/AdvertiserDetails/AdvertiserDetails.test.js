import React from 'react'
import { shallow } from 'enzyme'

import AdvertiserDetails from './AdvertiserDetails.js'

it('renders without crashing', () => {
  const component = shallow(<AdvertiserDetails />)
  expect(component).toMatchSnapshot()
})
