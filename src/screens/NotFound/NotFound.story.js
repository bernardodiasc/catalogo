import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Docs from 'stories/containers/Docs'

import NotFound from './NotFound'
import NotFoundReadme from './README.md'
storiesOf('Screens/NotFound', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{NotFoundReadme}</Docs>)
  .add('Example', () => <NotFound />)
  .add('Minimal render', () => <NotFound />)
