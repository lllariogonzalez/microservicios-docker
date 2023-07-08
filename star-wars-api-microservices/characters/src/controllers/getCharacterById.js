const { response } = require('../utils')
const Character = require('../data')

module.exports = async (req, res) => {
  const {id} = req.params
  const character = await Character.get(id)
  response(res, 200, await character)
}