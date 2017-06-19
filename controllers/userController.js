const User = require('../models/index').User

const index = async (req, res, next) => {
  const users = await User.all()

  res.json({
    users
  })
}

const create = async (req, res, next) => {
  const user = await User.create({
    username: req.body.username
  })

  res.json({
    user
  })
}

const show = async (req, res, next) => {
  const user = await User.findById(req.params.id)

  res.json({
    user
  })
}

const destroy = async (req, res, next) => {
  const user = await User.findById(req.params.id)
  await user.destroy()
  res.redirect('/')
}

module.exports = {
  index,
  create,
  show,
  destroy
}
