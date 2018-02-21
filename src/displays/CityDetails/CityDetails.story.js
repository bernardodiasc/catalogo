import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import CityDetails from './CityDetails'
import CityDetailsReadme from './README.md'
storiesOf('Displays/CityDetails', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{CityDetailsReadme}</Docs>)
  .add('Example', () => <CityDetails />)
  .add('Minimal render', () => <CityDetails />)
