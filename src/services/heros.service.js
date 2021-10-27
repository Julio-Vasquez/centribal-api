const { existsSync } = require('fs')
const { allHerosDB } = require('./../data/superheros')

const getById = (req, res, next) => {
  const { id } = req.params,
    hero = allHerosDB.find(e => e.id === +id)
  res.send(
    hero
      ? {
          status: 200,
          response: hero,
        }
      : { status: 404, response: [] }
  )
}

const getAllHeros = (req, res, next) => {
  const { fly } = req.query
  if (fly) {
    const heros = allHerosDB.filter(e => e.puedeVolar)
    res.send(
      heros.length > 0
        ? {
            status: 200,
            response: heros,
          }
        : { status: 404, response: 'No data of heros fly' }
    )
  } else
    res.send({
      status: 200,
      response: allHerosDB,
    })
}

const getFile = (req, res, next) => {
  const { img } = req.params,
    path = __dirname.replace('services', `data/imgs`),
    url = existsSync(`${path}/${img}`)

  res.sendFile(url ? path : `${path}/no_found.png`)
}

module.exports = { getById, getAllHeros, getFile }
