import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Notification from './Notification'
import NotificationReadme from './README.md'
storiesOf('Displays/Layout/Notification', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{NotificationReadme}</Docs>)
  .add('Example', () => <Notification />)
  .add('Minimal render', () => <Notification />)
