import React from 'react'
import { shallow } from 'enzyme'

import LeftColumn from './LeftColumn.js'

it('renders without crashing', () => {
  const component = shallow(<LeftColumn />)
  expect(component).toMatchSnapshot()
})
