const { response } = require('../utils')
const Planet = require('../data')

module.exports = async (req, res) => {
  const planets = await Planet.list()
  response(res, 200, planets)
}