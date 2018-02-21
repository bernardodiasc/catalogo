import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Homepage from './Homepage'
import HomepageReadme from './README.md'
storiesOf('Screens/Homepage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{HomepageReadme}</Docs>)
  .add('Example', () => <Homepage />)
  .add('Minimal render', () => <Homepage />)
