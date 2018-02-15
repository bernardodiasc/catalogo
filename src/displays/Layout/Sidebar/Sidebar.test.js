import React from 'react'
import { shallow } from 'enzyme'

import Sidebar from './Sidebar.js'

it('renders without crashing', () => {
  const component = shallow(<Sidebar />)
  expect(component).toMatchSnapshot()
})
