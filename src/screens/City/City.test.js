import React from 'react'
import { shallow } from 'enzyme'

import City from './City.js'

it('renders without crashing', () => {
  const component = shallow(<City />)
  expect(component).toMatchSnapshot()
})
