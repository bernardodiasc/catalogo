/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import DisplaysReadme from 'displays/README.md'
storiesOf('Displays', module)
  .add('About display components', () => <Docs>{DisplaysReadme}</Docs>)

import 'displays/Layout/Layout.story.js'
import 'displays/Layout/HeaderBar/HeaderBar.story.js'
import 'displays/Layout/SearchBar/SearchBar.story.js'
import 'displays/Layout/Breadcrumbs/Breadcrumbs.story.js'
import 'displays/Layout/LeftColumn/LeftColumn.story.js'
import 'displays/Layout/RightColumn/RightColumn.story.js'
import 'displays/Layout/Content/Content.story.js'
import 'displays/Layout/FooterBar/FooterBar.story.js'
import 'displays/Layout/Notification/Notification.story.js'
import 'displays/Welcome/Welcome.story.js'
import 'displays/SelectBox/SelectBox.story.js'
