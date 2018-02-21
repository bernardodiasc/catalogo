import {
  NOT_FOUND,
} from 'actions'

const initialState = {
  message: '',
}

export const notFound = (state = initialState, action) => {
  switch (action.type) {
  case NOT_FOUND:
    return {
      ...state,
      message: action.payload,
    }
  default:
    return state
  }
}
