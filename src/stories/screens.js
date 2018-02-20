/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import ScreensReadme from 'screens/README.md'
storiesOf('Screens', module)
  .add('About screen components', () => <Docs>{ScreensReadme}</Docs>)

import 'screens/App/App.story.js'
import 'screens/Homepage/Homepage.story.js'
// import 'screens/NotFound/NotFound.story.js'
