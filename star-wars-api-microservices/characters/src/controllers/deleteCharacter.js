const { response } = require('../utils')
const Character = require('../data')

module.exports = async (req, res)=>{
  const {id} = req.params
  const characterDeleted = await Character.delete(id)
  response(res, 200, characterDeleted)
}