const { existsSync } = require('fs')
const { allHerosDB } = require('./../data/superheros')

const getById = (req, res, next) => {
  const { id } = req.params,
    hero = allHerosDB.find(e => e.id === +id)
  res.status(hero ? 200 : 404).send(hero)
}

const getAllHeros = (req, res, next) => {
  const { fly } = req.query
  if (fly) {
    const heros = allHerosDB.filter(e => e.puedeVolar)
    res.status(heros.length < 0 ? 404 : 200).send(heros)
  } else res.status(200).send(allHerosDB)
}

const getFile = (req, res, next) => {
  const { img } = req.params,
    path = __dirname.replace('services', `data/imgs`),
    url = existsSync(`${path}/${img}`)

  res.sendFile(url ? path : `${path}/no_found.png`)
}

module.exports = { getById, getAllHeros, getFile }
