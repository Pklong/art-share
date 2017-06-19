module.exports = function (sequelize, DataTypes) {
  const Artwork = sequelize.define('Artwork', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })

  Artwork.associate = function (models) {
    Artwork.belongsTo(models.User, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    })
  }
  return Artwork
}
