import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import RightColumn from './RightColumn'
import RightColumnReadme from './README.md'
storiesOf('Displays/Layout/RightColumn', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{RightColumnReadme}</Docs>)
  .add('Example', () => <RightColumn />)
  .add('Minimal render', () => <RightColumn />)
