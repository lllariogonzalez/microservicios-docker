const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => {
  const { model } = req.params
  if(['Character', 'Film', 'Planet'].includes(model)) return next()
  else throw new ClientError(`El modelo ${model} no existe`, 400)
}