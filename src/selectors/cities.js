import { pathOr } from 'ramda'

export default class CitiesSelectors {
  constructor(data) {
    this.data = data
  }

  getAllCities() {
    return pathOr({}, ['cities'], this.data)
  }

  getCityById(id = '') {
    return pathOr({}, ['cities', id], this.data)
  }

  getCityAttrById(id = '') {
    return pathOr({}, ['cities', id, 'index.md', 'attr'], this.data)
  }

  getCityBodyById(id = '') {
    return pathOr('', ['cities', id, 'index.md', 'body'], this.data)
  }

  getCityNameById(id = '') {
    return pathOr('', ['cities', id, 'index.md', 'attr', 'name'], this.data)
  }
}
