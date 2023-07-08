const { response } = require('../utils')
const Film = require('../data')

module.exports = async (req, res)=>{
  const newFilm = req.body
  const filmCreated = await Film.create(newFilm)
  response(res, 201, filmCreated)
}