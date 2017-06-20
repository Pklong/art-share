const express = require('express')
const router = express.Router({mergeParams: true})
const { catchErrors } = require('../handlers/errorHandlers')
const artworkController = require('../controllers/index').artwork

router.get('/', catchErrors(artworkController.index))
router.get('/:id', catchErrors(artworkController.show))
router.post('/', catchErrors(artworkController.create))
router.put('/:id', catchErrors(artworkController.update))
router.delete('/:id', catchErrors(artworkController.destroy))

module.exports = router
