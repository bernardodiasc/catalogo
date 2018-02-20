import React from 'react'
import { shallow } from 'enzyme'

import Content from './Content.js'

it('renders without crashing', () => {
  const component = shallow(<Content />)
  expect(component).toMatchSnapshot()
})
