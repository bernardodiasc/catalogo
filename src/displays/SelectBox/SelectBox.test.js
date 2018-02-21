import React from 'react'
import { shallow } from 'enzyme'

import SelectBox from './SelectBox.js'

it('renders without crashing', () => {
  const component = shallow(<SelectBox />)
  expect(component).toMatchSnapshot()
})
