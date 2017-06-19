// http://expressjs.com/en/guide/routing.html

const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorHandlers')
const userController = require('../controllers/index').user

router.get('/', catchErrors(userController.index))
router.get('/:id', catchErrors(userController.show))
router.post('/', catchErrors(userController.create))
router.delete('/:id', catchErrors(userController.destroy))
module.exports = {
  userRouter: router
}
