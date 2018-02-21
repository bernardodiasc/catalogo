import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import FooterBar from './FooterBar'
import FooterBarReadme from './README.md'
storiesOf('Displays/Layout/FooterBar', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{FooterBarReadme}</Docs>)
  .add('Example', () => <FooterBar />)
  .add('Minimal render', () => <FooterBar />)
