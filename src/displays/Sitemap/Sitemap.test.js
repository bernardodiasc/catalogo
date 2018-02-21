import React from 'react'
import { shallow } from 'enzyme'

import Sitemap from './Sitemap.js'

it('renders without crashing', () => {
  const component = shallow(<Sitemap />)
  expect(component).toMatchSnapshot()
})
