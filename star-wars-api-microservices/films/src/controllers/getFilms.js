const { response } = require('../utils')
const Film = require('../data')

module.exports = async (req, res) => {
  const films = await Film.list()
  response(res, 200, await films)
}