import { combineReducers } from 'redux'
import { data } from './data'
import { layout } from './layout'
import { notFound } from './notFound'
import { i18n } from './i18n'

const rootReducers = combineReducers({
  data,
  layout,
  notFound,
  i18n,
})

export default rootReducers
