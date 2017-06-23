module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })

  User.associate = function (models) {
    User.hasMany(models.Artwork)
    User.belongsToMany(models.Artwork, {
      through: models.ArtworkShare
    })
  }
  return User
}
