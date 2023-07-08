const store = require('../database')
const { response } = require('../utils')

module.exports = async (req, res)=>{
  const { model } = req.params
  const newModel = req.body
  const data = await store[model].insert(newModel)
  response(res, 201, data)
}