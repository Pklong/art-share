module.exports = function (sequelize, DataTypes) {
  const Artwork = sequelize.define('Artwork', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Artwork.associate = function (models) {
    Artwork.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Artwork.belongsToMany(models.User, {
      through: 'UserArtwork',
      unique: true
    })
  }
  return Artwork
}
