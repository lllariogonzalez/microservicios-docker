const { catchedAsync } = require('../utils')

module.exports = {
  getPlanets: catchedAsync(require('./getPlanets')),
  getPlanetById: catchedAsync(require('./getPlanetById')),
  createPlanet: catchedAsync(require('./createPlanet')),
  deletePlanet: catchedAsync(require('./deletePlanet'))
}