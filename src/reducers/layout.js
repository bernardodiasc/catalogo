import {
  TOGGLE_HEADBAR,
  TOGGLE_SIDEBAR,
} from 'actions'

const initialState = {
  headbar: true,
  sidebar: true,
}

export const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HEADBAR:
      return {
        ...state,
        headbar: !state.headbar,
      }
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar,
      }
    default:
      return state
  }
}
