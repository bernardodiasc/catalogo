import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import SelectBox from './SelectBox'
import SelectBoxReadme from './README.md'
storiesOf('Displays/SelectBox', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{SelectBoxReadme}</Docs>)
  .add('Example', () => <SelectBox />)
  .add('Minimal render', () => <SelectBox />)
