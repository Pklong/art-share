module.exports = function (sequelize, DataTypes) {
  const Artwork = sequelize.define('Artwork', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'artistId'
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'artistId'
    }
  })

  Artwork.associate = function (models) {
    Artwork.belongsTo(models.User, {
      foreignKey: 'artistId',
      onDelete: 'CASCADE'
    })
  }
  return Artwork
}
