import {
  SELECT_CITY,
} from 'actions'

import dataJson from 'data.json'

const initialState = {
  ...dataJson,
}

export const data = (state = initialState, action) => {
  switch (action.type) {
  case SELECT_CITY:
    return {
      ...state,
      page: {
        city: action.payload,
      },
    }
  default:
    return state
  }
}
