import { createSelector } from 'reselect'

const getAllCities = (state) => state.data.cities
const getCity = (state, city) => state.data.cities[city]

export const getCitiesForSelectBox = createSelector(
  [ getAllCities ],
  (cities) => Object.keys(cities)
    .map(city => ({
      value: city,
      label: cities[city]['index.md'].attr.name,
    }))
)

export const getCityData = createSelector(
  [ getCity ], (city) => city
)
