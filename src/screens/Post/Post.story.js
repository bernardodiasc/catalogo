import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Docs from 'stories/containers/Docs'

import Post from './Post'
import PostReadme from './README.md'
storiesOf('Screens/Post', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{PostReadme}</Docs>)
  .add('Example', () => <Post />)
  .add('Minimal render', () => <Post />)
