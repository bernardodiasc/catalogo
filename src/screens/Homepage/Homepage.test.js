import React from 'react'
import { shallow } from 'enzyme'

import Homepage from './Homepage.js'

it('renders without crashing', () => {
  const component = shallow(<Homepage />)
  expect(component).toMatchSnapshot()
})
