import React from 'react'
import { shallow } from 'enzyme'

import Headbar from './Headbar.js'

it('renders without crashing', () => {
  const component = shallow(<Headbar />)
  expect(component).toMatchSnapshot()
})
