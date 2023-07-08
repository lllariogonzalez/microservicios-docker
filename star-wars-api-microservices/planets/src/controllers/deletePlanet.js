const { response } = require('../utils')
const Planet = require('../data')

module.exports = async (req, res)=>{
  const {id} = req.params
  const planetDeleted = await Planet.delete(id)
  response(res, 200, planetDeleted)
}