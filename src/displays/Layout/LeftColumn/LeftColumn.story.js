import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import LeftColumn from './LeftColumn'
import LeftColumnReadme from './README.md'
storiesOf('Displays/Layout/LeftColumn', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{LeftColumnReadme}</Docs>)
  .add('Example', () => <LeftColumn />)
  .add('Minimal render', () => <LeftColumn />)
