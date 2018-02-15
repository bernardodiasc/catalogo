import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../public/styles/main.css';

setOptions({
  name: 'X-Team Legacy',
  url: 'https://x-team.com/legacy/',
  // goFullScreen: false,
  // showStoriesPanel: true,
  // showAddonPanel: true,
  // showSearchBox: false,
  // addonPanelInRight: true,
  // sortStoriesByKind: false,
  // hierarchySeparator: null,
  // hierarchyRootSeparator: null,
  // sidebarAnimations: true,
  // selectedAddonPanel: undefined,
});

function loadStories() {
  require('../src/stories/index.js');
  require('../src/stories/contents.js');
  require('../src/stories/screens.js');
  require('../src/stories/displays.js');
}

configure(loadStories, module);
