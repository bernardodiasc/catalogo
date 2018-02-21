import {
  TOGGLE_HEADERBAR,
  TOGGLE_LEFTCOLUMN,
  TOGGLE_RIGHTCOLUMN,
} from 'actions'

const initialState = {
  headerbar: true,
  leftcolumn: false,
  rightcolumn: false,
}

export const layout = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_HEADERBAR:
    return {
      ...state,
      headerbar: !state.headerbar,
    }
  case TOGGLE_LEFTCOLUMN:
    return {
      ...state,
      leftcolumn: !state.leftcolumn,
    }
  case TOGGLE_RIGHTCOLUMN:
    return {
      ...state,
      rightcolumn: !state.rightcolumn,
    }
  default:
    return state
  }
}
