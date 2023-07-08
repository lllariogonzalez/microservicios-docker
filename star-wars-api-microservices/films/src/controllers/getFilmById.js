const { response } = require('../utils')
const Film = require('../data')

module.exports = async (req, res) => {
  const {id} = req.params
  const film = await Film.get(id)
  response(res, 200, await film)
}