const { Router } = require('express')
const controllers = require('../controllers')
const { modelValidation } = require('../middlewares')

const router = Router()

router.get('/:model', modelValidation, controllers.getModel)

router.get('/:model/:id', modelValidation, controllers.getIdModel)

router.post('/:model', modelValidation, controllers.createModel)

router.delete('/:model/:id', modelValidation, controllers.deleteIdModel)

module.exports = router