import React from 'react'
import { shallow } from 'enzyme'

import Notification from './Notification.js'

it('renders without crashing', () => {
  const component = shallow(<Notification />)
  expect(component).toMatchSnapshot()
})
