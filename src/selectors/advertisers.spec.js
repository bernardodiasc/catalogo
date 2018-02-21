import assert from 'assert'
import AdvertisersSelectors from './advertisers'
import data from './advertisers.fixture.json'

const selectors = new AdvertisersSelectors(data)
// const cityId = 'ubatuba'
// const dataForGetAllAdvertisersByCity = data.advertisers[cityId]

describe('Advertisers selectors', () => {
  describe('getAllAdvertisersByCity(city = "")', () => {
    it('() => {}', () => {
      assert.deepEqual(selectors.getAllAdvertisersByCity(), {})
    })
    // it('"invalidCity" => {}', () => {
    //   assert.deepEqual(selectors.getAllAdvertisersByCity('invalidId'), {})
    // })
    // it('"validCity" => [{Advertiser}]', () => {
    //   assert.deepEqual(selectors.getAllAdvertisersByCity(cityId), dataForGetAllAdvertisersByCity)
    // })
  })
})
