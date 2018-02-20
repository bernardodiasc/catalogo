import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Headbar from './Headbar'
import HeadbarReadme from './README.md'
storiesOf('Displays/Layout/Headbar', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{HeadbarReadme}</Docs>)
  .add('Example', () => <Headbar />)
  .add('Minimal render', () => <Headbar />)