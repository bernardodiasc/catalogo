import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import AdvertiserDetails from './AdvertiserDetails'
import AdvertiserDetailsReadme from './README.md'
storiesOf('Displays/AdvertiserDetails', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{AdvertiserDetailsReadme}</Docs>)
  .add('Example', () => <AdvertiserDetails />)
  .add('Minimal render', () => <AdvertiserDetails />)
