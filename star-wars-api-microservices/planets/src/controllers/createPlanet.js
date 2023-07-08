const { response } = require('../utils')
const Planet = require('../data')

module.exports = async (req, res)=>{
  const newPlanet = req.body
  const planetCreated = await Planet.create(newPlanet)
  response(res, 201, planetCreated)
}