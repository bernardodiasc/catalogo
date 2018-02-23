import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from 'reducers'

import data from 'data.json'

export const Store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(data)),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
