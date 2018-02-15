import React from 'react'
import { hydrate, render } from 'react-dom'
import * as serviceWorker from 'config/registerServiceWorker'
import { Provider } from 'react-redux'
import { Store } from 'store'

import App from 'screens/App'

const TheApp = () => (
  <Provider store={Store}>
    <App />
  </Provider>
)

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<TheApp />, rootElement)
} else {
  render(<TheApp />, rootElement)
}

serviceWorker.unregister()
