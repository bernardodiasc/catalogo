import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import ListingBlock from './ListingBlock'
import ListingBlockReadme from './README.md'
storiesOf('Displays/ListingBlock', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{ListingBlockReadme}</Docs>)
  .add('Example', () => <ListingBlock />)
  .add('Minimal render', () => <ListingBlock />)
