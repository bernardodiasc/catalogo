// import { pathOr } from 'ramda'

// export default class HeroesSelectors {
//   constructor(data) {
//     this.data = data
//   }

//   getHeroes() {
//     return pathOr({}, ['heroes'], this.data)
//   }

//   getHero(hero = '') {
//     return pathOr({}, ['heroes', [hero]], this.data)
//   }

//   getHeroMd(hero = '') {
//     return pathOr({}, ['heroes', [hero], 'hero.md'], this.data)
//   }

//   getContent(hero = '') {
//     return pathOr('', ['heroes', [hero], 'hero.md', 'body'], this.data)
//   }

//   getName(hero = '') {
//     return pathOr('', ['heroes', [hero], 'hero.md', 'attr', 'name'], this.data)
//   }

//   getClass(hero = '') {
//     return pathOr(
//       '',
//       ['heroes', [hero], 'hero.md', 'attr', 'class'],
//       this.data
//     )
//   }

//   getStory(hero = '') {
//     return pathOr(
//       '',
//       ['heroes', [hero], 'hero.md', 'attr', 'story'],
//       this.data
//     )
//   }

//   getPlanet(hero = '') {
//     return pathOr(
//       {},
//       ['heroes', [hero], 'hero.md', 'attr', 'planet'],
//       this.data
//     )
//   }

//   getMedals(hero = '') {
//     return pathOr(
//       [],
//       ['heroes', [hero], 'hero.md', 'attr', 'medals'],
//       this.data
//     )
//   }

//   getPosterPng(hero = '') {
//     return pathOr({}, ['heroes', [hero], 'poster.png'], this.data)
//   }

//   getPosterDarkPng(hero = '') {
//     return pathOr({}, ['heroes', [hero], 'poster-dark.png'], this.data)
//   }

//   getCardPng(hero = '') {
//     return pathOr({}, ['heroes', [hero], 'card.png'], this.data)
//   }

//   getAllCardsPath() {
//     const heroes = pathOr({}, ['heroes'], this.data)
//     let cards = []
//     Object.keys(heroes).forEach(hero => {
//       cards.push(this.getCardPng(hero).file)
//     })
//     return cards
//   }
// }
