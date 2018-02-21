import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Sitemap from './Sitemap'
import SitemapReadme from './README.md'
storiesOf('Displays/Sitemap', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{SitemapReadme}</Docs>)
  .add('Example', () => <Sitemap />)
  .add('Minimal render', () => <Sitemap />)
