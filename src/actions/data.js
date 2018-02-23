import { getCityData } from 'selectors/data'

export const SELECT_CITY = 'SELECT_CITY'

export const selectCity = (city) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_CITY,
      payload: {
        [city]: getCityData(getState(), city)
      },
    })
  }
}
