module.exports = function (sequelize, DataTypes) {
  var ArtworkShare = sequelize.define('ArtworkShare', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    artworkId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  return ArtworkShare
}
