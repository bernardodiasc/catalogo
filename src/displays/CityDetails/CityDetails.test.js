import React from 'react'
import { shallow } from 'enzyme'

import CityDetails from './CityDetails.js'

it('renders without crashing', () => {
  const component = shallow(<CityDetails />)
  expect(component).toMatchSnapshot()
})
