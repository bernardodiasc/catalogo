import React from 'react'
import { hydrate, render } from 'react-dom'
import * as serviceWorker from 'config/registerServiceWorker'

import App from 'screens/App'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

serviceWorker.unregister()
