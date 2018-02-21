import {
  SELECT_LANGUAGE,
} from 'actions'

const initialState = {
  locale: 'pt',
}

export const i18n = (state = initialState, action) => {
  switch (action.type) {
  case SELECT_LANGUAGE:
    return {
      ...state,
      locale: action.payload,
    }
  default:
    return state
  }
}
