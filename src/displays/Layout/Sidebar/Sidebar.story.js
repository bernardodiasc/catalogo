import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Sidebar from './Sidebar'
import SidebarReadme from './README.md'
storiesOf('Displays/Layout/Sidebar', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{SidebarReadme}</Docs>)
  .add('Example', () => <Sidebar />)
  .add('Minimal render', () => <Sidebar />)
