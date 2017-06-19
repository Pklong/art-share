module.exports = {
  index (req, res, next) {
    res.json({
      message: 'All the Users'
    })
  },
  show (req, res, next) {
    res.json({
      message: `User ${req.params.id}`
    })
  }
}
