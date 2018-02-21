import React from 'react'
import { shallow } from 'enzyme'

import FooterBar from './FooterBar.js'

it('renders without crashing', () => {
  const component = shallow(<FooterBar />)
  expect(component).toMatchSnapshot()
})
