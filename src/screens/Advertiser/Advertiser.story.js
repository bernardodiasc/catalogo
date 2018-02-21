import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Advertiser from './Advertiser'
import AdvertiserReadme from './README.md'
storiesOf('Screens/Advertiser', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{AdvertiserReadme}</Docs>)
  .add('Example', () => <Advertiser />)
  .add('Minimal render', () => <Advertiser />)
