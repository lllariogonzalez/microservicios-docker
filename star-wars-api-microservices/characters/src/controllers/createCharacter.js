const { response } = require('../utils')
const Character = require('../data')

module.exports = async (req, res)=>{
  const newCharacter = req.body
  const characterCreated = await Character.create(newCharacter)
  response(res, 201, characterCreated)
}