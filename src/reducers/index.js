import { combineReducers } from 'redux'
import { layout } from './layout'
import { notFound } from './notFound'
import { i18n } from './i18n'

export const Reducers = combineReducers({
  layout,
  notFound,
  i18n,
})
