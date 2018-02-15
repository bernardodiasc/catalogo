import React from 'react'
import { shallow } from 'enzyme'

import Post from './Post.js'

it('renders without crashing', () => {
  const component = shallow(<Post />)
  expect(component).toMatchSnapshot()
})
