import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Docs from 'stories/containers/Docs'

import App from './App'
import AppReadme from './README.md'
storiesOf('Screens/App', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{AppReadme}</Docs>)
  .add('Full page', () => <App />)
