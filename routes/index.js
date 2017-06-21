// http://expressjs.com/en/guide/routing.html
const userRouter = require('./user')
const artworkRouter = require('./artwork')
const artworkShareRouter = require('./artworkShares')

module.exports = {
  userRouter,
  artworkRouter,
  artworkShareRouter
}
