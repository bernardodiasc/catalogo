import React from 'react'
import { shallow } from 'enzyme'

import RightColumn from './RightColumn.js'

it('renders without crashing', () => {
  const component = shallow(<RightColumn />)
  expect(component).toMatchSnapshot()
})
