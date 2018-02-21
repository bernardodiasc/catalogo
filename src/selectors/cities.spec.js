import assert from 'assert'
import CitiesSelectors from './cities'
import data from './cities.fixture.json'

const selectors = new CitiesSelectors(data)
const cityId = 'ubatuba'
const dataForGetCityById = data.cities[cityId]

describe('Cities selectors', () => {
  describe('getCityById(id = "")', () => {
    it('() => {}', () => {
      assert.deepEqual(selectors.getCityById(), {})
    })
    it('"invalidId" => {}', () => {
      assert.deepEqual(selectors.getCityById('invalidId'), {})
    })
    it('"validId" => {City}', () => {
      assert.deepEqual(selectors.getCityById(cityId), dataForGetCityById)
    })
  })
})
