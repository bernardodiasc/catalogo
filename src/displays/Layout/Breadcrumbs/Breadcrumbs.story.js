import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Breadcrumbs from './Breadcrumbs'
import BreadcrumbsReadme from './README.md'
storiesOf('Displays/Layout/Breadcrumbs', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{BreadcrumbsReadme}</Docs>)
  .add('Example', () => <Breadcrumbs />)
  .add('Minimal render', () => <Breadcrumbs />)
