const ArtworkShare = require('../models/index').ArtworkShare

const create = async (req, res, next) => {
  await ArtworkShare.create(req.body)

  res.redirect('/')
}

const destroy = async (req, res, next) => {
  await ArtworkShare.destroy({
    where: {
      id: req.params.id
    }
  })

  res.redirect('/')
}
module.exports = {
  create,
  destroy
}
