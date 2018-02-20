import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Welcome from './Welcome'
import WelcomeReadme from './README.md'
storiesOf('Displays/Welcome', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{WelcomeReadme}</Docs>)
  .add('Example', () => <Welcome />)
  .add('Minimal render', () => <Welcome />)
