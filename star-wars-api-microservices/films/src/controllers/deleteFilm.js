const { response } = require('../utils')
const Film = require('../data')

module.exports = async (req, res)=>{
  const {id} = req.params
  const filmDeleted = await Film.delete(id)
  response(res, 200, filmDeleted)
}