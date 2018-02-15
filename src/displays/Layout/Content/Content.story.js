import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Content from './Content'
import ContentReadme from './README.md'
storiesOf('Displays/Layout/Content', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{ContentReadme}</Docs>)
  .add('Example', () => <Content />)
  .add('Minimal render', () => <Content />)
