const db = require('./models/index')

const seedDB = async () => {
  db.ArtworkShare.destroy({where: {}})
  db.Artwork.destroy({where: {}})
  db.User.destroy({where: {}})

  await db.User.bulkCreate(
    [
      {
        username: 'patrick'
      },
      {
        username: 'mike'
      },
      {
        username: 'oscar'
      }
    ]
  )

  const users = await db.User.findAll()
  for (let i = 0; i < users.length; i++) {
    await db.Artwork.create({
      userId: users[i].dataValues.id,
      title: `${users[i].dataValues.username}'s art`,
      imageUrl: 'httpcoolcom'
    })
  }

  const artworks = await db.Artwork.findAll()

  for (let i = 0; i < artworks.length; i++) {
    await db.ArtworkShare.create({
      userId: users[i].dataValues.id,
      artworkId: artworks[i].dataValues.id
    })
  }
}

seedDB().then(() => process.exit())
