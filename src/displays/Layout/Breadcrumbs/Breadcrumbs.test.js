import React from 'react'
import { shallow } from 'enzyme'

import Breadcrumbs from './Breadcrumbs.js'

it('renders without crashing', () => {
  const component = shallow(<Breadcrumbs />)
  expect(component).toMatchSnapshot()
})
