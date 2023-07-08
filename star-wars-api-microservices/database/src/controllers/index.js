const { catchedAsync } = require('../utils')

module.exports = {
  getModel: catchedAsync(require('./getModel')),
  getIdModel: catchedAsync(require('./getIdModel')),
  createModel: catchedAsync(require('./createModel')),
  deleteIdModel: catchedAsync(require('./deleteIdModel'))
}