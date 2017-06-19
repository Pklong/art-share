// http://expressjs.com/en/guide/routing.html

const express = require('express')
const router = express.Router()
const userController = require('../controllers/index').user

router.get('/', userController.index)
router.get('/:id', userController.show)

module.exports = router
