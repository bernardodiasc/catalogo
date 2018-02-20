import React from 'react'
import { shallow } from 'enzyme'

import Welcome from './Welcome.js'

it('renders without crashing', () => {
  const component = shallow(<Welcome />)
  expect(component).toMatchSnapshot()
})
