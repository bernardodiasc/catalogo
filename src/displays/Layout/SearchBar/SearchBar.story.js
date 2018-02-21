import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import SearchBar from './SearchBar'
import SearchBarReadme from './README.md'
storiesOf('Displays/Layout/SearchBar', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{SearchBarReadme}</Docs>)
  .add('Example', () => <SearchBar />)
  .add('Minimal render', () => <SearchBar />)
