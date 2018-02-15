import React, { PureComponent } from 'react'
import config from 'config'

import data from 'data.json'
// import HeroesSelectors from 'selectors/heroes'

class Sitemap extends PureComponent {
  render() {
    // const heroes = new HeroesSelectors(data)
    return (
      <footer style={{ display: 'none' }}>
        <nav>
          <ul>
            <li><a href={`${config.PUBLIC_URL}/about/`}>About</a></li>
          </ul>
        </nav>
      </footer>
    )
  }
}

// {Object.keys(heroes.getHeroes()).map(hero => (
//   <li key={hero}>
//     <a href={`${config.PUBLIC_URL}/hero/${hero}/`}>
//       {heroes.getName(hero)}
//     </a>
//   </li>
// ))}

export default Sitemap
