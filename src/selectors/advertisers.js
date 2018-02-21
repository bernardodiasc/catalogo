import { pathOr } from 'ramda'

export default class AdvertisersSelectors {
  constructor(data) {
    this.data = data
  }

  getAllAdvertisers() {
    return pathOr({}, ['advertisers'], this.data)
  }

  getAdvertiserById(id = '') {
    return pathOr({}, ['advertisers', id], this.data)
  }

  getAdvertiserNameById(id = '') {
    return pathOr('', ['advertisers', id, 'index.md', 'attr', 'name'], this.data)
  }

  getAdvertiserCityById(id = '') {
    return pathOr('', ['advertisers', id, 'index.md', 'attr', 'city'], this.data)
  }

  getAllAdvertisersByCity(city = '') {
    const advertisers = this.getAllAdvertisers()
    let filtered = {}
    Object.keys(advertisers).forEach(advertiser => {
      if (this.getAdvertiserCityById(advertiser) === city) {
        filtered[advertiser] = this.getAdvertiserById(advertiser)
      }
    })
    return filtered
  }
}
