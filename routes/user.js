const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorHandlers')
const userController = require('../controllers/index').user
const artworkRouter = require('./artwork')

router.use('/:userId/artworks', artworkRouter)
router.get('/', catchErrors(userController.index))
router.get('/:id', catchErrors(userController.show))
router.post('/', catchErrors(userController.create))
router.put('/:id', catchErrors(userController.update))
router.delete('/:id', catchErrors(userController.destroy))

module.exports = router
