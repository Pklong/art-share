const Artwork = require('../models/index').Artwork

const index = async (req, res, next) => {
  const artworks = await Artwork.all()

  res.json({
    artworks
  })
}

const create = async (req, res, next) => {
  const artwork = await Artwork.create(req.body)

  res.json({
    artwork
  })
}

const show = async (req, res, next) => {
  const artwork = await Artwork.findById(req.params.id)

  res.json({
    artwork
  })
}

const destroy = async (req, res, next) => {
  const artwork = await Artwork.findById(req.params.id)
  await artwork.destroy()

  res.redirect('/')
}

const update = async (req, res, next) => {
  const artwork = await Artwork.findById(req.params.id)
  await artwork.update(req.body)

  res.json({
    artwork
  })
}

module.exports = {
  index,
  create,
  show,
  destroy,
  update
}
