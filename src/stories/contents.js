/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import PostsReadme from '../../public/content/posts/README.md'
import GalleryReadme from '../../public/content/gallery/README.md'
storiesOf('Content', module)
  .add('Posts', () => <Docs>{PostsReadme}</Docs>)
  .add('Gallery', () => <Docs>{GalleryReadme}</Docs>)
