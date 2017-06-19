// http://expressjs.com/en/guide/routing.html

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({message: 'very good!'})
})

module.exports = router
