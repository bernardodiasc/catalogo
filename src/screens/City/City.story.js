import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Docs from 'stories/containers/Docs'

import City from './City'
import CityReadme from './README.md'
storiesOf('Screens/City', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{CityReadme}</Docs>)
  .add('Example', () => <City />)
  .add('Minimal render', () => <City />)
