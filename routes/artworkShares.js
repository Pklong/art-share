const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorHandlers')
const artworkShareController = require('../controllers/index').artworkShare

router.post('/', catchErrors(artworkShareController.create))
router.delete('/:id', catchErrors(artworkShareController.destroy))

module.exports = router
