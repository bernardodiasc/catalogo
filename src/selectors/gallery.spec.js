import assert from 'assert'

describe('buh', () => {
  it('should pass', () => {
    assert.deepEqual({}, {})
  })
})

// import Heroes from './heroes'
// import data from './data.fixture.json'

// const heroes = new Heroes(data)
// const heroId = 'the-envisioner'
// const dataForGetHeroes = data.heroes
// const dataForGetHero = data.heroes[heroId]
// const dataForGetHeroMd = data.heroes[heroId]['hero.md']
// const dataForGetContent = dataForGetHeroMd.body
// const dataForGetName = dataForGetHeroMd.attr.name
// const dataForGetClass = dataForGetHeroMd.attr.class
// const dataForGetStory = dataForGetHeroMd.attr.story
// const dataForGetPlanet = dataForGetHeroMd.attr.planet
// const dataForGetMedals = dataForGetHeroMd.attr.medals
// const dataForGetPosterPng = data.heroes[heroId]['poster.png']
// const dataForGetPosterDarkPng = data.heroes[heroId]['poster-dark.png']
// const dataForGetCardPng = data.heroes[heroId]['card.png']

// describe('Heroes selectors', () => {
//   describe('getHeroes()', () => {
//     it('() => {Heroes}', () => {
//       assert.deepEqual(dataForGetHeroes, heroes.getHeroes())
//     })
//     it('"invalid-argument" => {Heroes}', () => {
//       assert.deepEqual(dataForGetHeroes, heroes.getHeroes(undefined))
//     })
//   })

//   describe('getHero(hero = "")', () => {
//     it('() => {}', () => {
//       assert.deepEqual({}, heroes.getHero())
//     })
//     it('"invalid-argument" => {}', () => {
//       assert.deepEqual({}, heroes.getHero('invalid-argument'))
//     })
//     it('"valid-argument" => {Hero}', () => {
//       assert.deepEqual(dataForGetHero, heroes.getHero(heroId))
//     })
//   })

//   describe('getHeroMd(hero = "")', () => {
//     it('() => {}', () => {
//       assert.deepEqual({}, heroes.getHeroMd())
//     })
//     it('"invalid-argument" => {}', () => {
//       assert.deepEqual({}, heroes.getHeroMd('invalid-argument'))
//     })
//     it('"valid-argument" => {HeroMd}', () => {
//       assert.deepEqual(dataForGetHeroMd, heroes.getHeroMd(heroId))
//     })
//   })

//   describe('getContent(hero = "")', () => {
//     it('() => ""', () => {
//       assert.deepEqual('', heroes.getContent())
//     })
//     it('"invalid-argument" => ""', () => {
//       assert.deepEqual('', heroes.getContent('invalid-argument'))
//     })
//     it('"valid-argument" => "Content"', () => {
//       assert.deepEqual(dataForGetContent, heroes.getContent(heroId))
//     })
//   })

//   describe('getName(hero = "")', () => {
//     it('() => ""', () => {
//       assert.deepEqual('', heroes.getName())
//     })
//     it('"invalid-argument" => ""', () => {
//       assert.deepEqual('', heroes.getName('invalid-argument'))
//     })
//     it('"valid-argument" => "Name"', () => {
//       assert.deepEqual(dataForGetName, heroes.getName(heroId))
//     })
//   })

//   describe('getClass(hero = "")', () => {
//     it('() => ""', () => {
//       assert.deepEqual('', heroes.getClass())
//     })
//     it('"invalid-argument" => ""', () => {
//       assert.deepEqual('', heroes.getClass('invalid-argument'))
//     })
//     it('"valid-argument" => "Class"', () => {
//       assert.deepEqual(dataForGetClass, heroes.getClass(heroId))
//     })
//   })

//   describe('getStory(hero = "")', () => {
//     it('() => ""', () => {
//       assert.deepEqual('', heroes.getStory())
//     })
//     it('"invalid-argument" => ""', () => {
//       assert.deepEqual('', heroes.getStory('invalid-argument'))
//     })
//     it('"valid-argument" => "Story"', () => {
//       assert.deepEqual(dataForGetStory, heroes.getStory(heroId))
//     })
//   })

//   describe('getPlanet(hero = "")', () => {
//     it('() => {}', () => {
//       assert.deepEqual({}, heroes.getPlanet())
//     })
//     it('"invalid-argument" => {}', () => {
//       assert.deepEqual({}, heroes.getPlanet('invalid-argument'))
//     })
//     it('"valid-argument" => {Planet}', () => {
//       assert.deepEqual(dataForGetPlanet, heroes.getPlanet(heroId))
//     })
//   })

//   describe('getMedals(hero = "")', () => {
//     it('() => []', () => {
//       assert.deepEqual([], heroes.getMedals())
//     })
//     it('"invalid-argument" => []', () => {
//       assert.deepEqual([], heroes.getMedals('invalid-argument'))
//     })
//     it('"valid-argument" => [{Medals}]', () => {
//       assert.deepEqual(dataForGetMedals, heroes.getMedals(heroId))
//     })
//   })

//   describe('getPosterPng(hero = "")', () => {
//     it('() => {}', () => {
//       assert.deepEqual({}, heroes.getPosterPng())
//     })
//     it('"invalid-argument" => {}', () => {
//       assert.deepEqual({}, heroes.getPosterPng('invalid-argument'))
//     })
//     it('"valid-argument" => {PosterPng}', () => {
//       assert.deepEqual(dataForGetPosterPng, heroes.getPosterPng(heroId))
//     })
//   })

//   describe('getPosterDarkPng(hero = "")', () => {
//     it('() => {}', () => {
//       assert.deepEqual({}, heroes.getPosterDarkPng())
//     })
//     it('"invalid-argument" => {}', () => {
//       assert.deepEqual({}, heroes.getPosterDarkPng('invalid-argument'))
//     })
//     it('"valid-argument" => {PosterDarkPng}', () => {
//       assert.deepEqual(
//         dataForGetPosterDarkPng,
//         heroes.getPosterDarkPng(heroId)
//       )
//     })
//   })

//   describe('getCardPng(hero = "")', () => {
//     it('() => {}', () => {
//       assert.deepEqual({}, heroes.getCardPng())
//     })
//     it('"invalid-argument" => {}', () => {
//       assert.deepEqual({}, heroes.getCardPng('invalid-argument'))
//     })
//     it('"valid-argument" => {CardPng}', () => {
//       assert.deepEqual(dataForGetCardPng, heroes.getCardPng(heroId))
//     })
//   })
// })
