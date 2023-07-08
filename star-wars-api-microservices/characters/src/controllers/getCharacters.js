const { response } = require('../utils')
const Character = require('../data')

module.exports = async (req, res) => {
  const characters = await Character.list()
  response(res, 200, await characters)
}