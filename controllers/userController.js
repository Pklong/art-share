const User = require('../models/index').User

const index = async (req, res, next) => {
  const users = await User.all()

  res.json({
    users
  })
}

const create = async (req, res, next) => {
  const user = await User.create(req.body)

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

const update = async (req, res, next) => {
  const user = await User.findById(req.params.id)
  await user.update(req.body)

  res.json({
    user
  })
}

module.exports = {
  index,
  create,
  show,
  destroy,
  update
}
