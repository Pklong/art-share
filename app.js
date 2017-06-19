const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', routes)

app.listen(3000, () => {
  console.log('listening on 3000')
})
