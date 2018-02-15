import { createStore } from 'redux';
import { Reducers } from 'reducers';

export const Store = createStore(
  Reducers,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
