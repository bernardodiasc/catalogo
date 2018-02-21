import { combineReducers } from 'redux'
import { layout } from './layout'
import { notFound } from './notFound'

export const Reducers = combineReducers({
  layout,
  notFound,
})
