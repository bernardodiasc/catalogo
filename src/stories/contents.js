/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import CitiesReadme from '../../public/content/cities/README.md'
import AdvertisersReadme from '../../public/content/advertisers/README.md'
storiesOf('Content', module)
  .add('Cities', () => <Docs>{CitiesReadme}</Docs>)
  .add('Advertisers', () => <Docs>{AdvertisersReadme}</Docs>)
