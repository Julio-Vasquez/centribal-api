const router = require('express').Router()

const { getAllHeros, getById, getFile } = require('../services/heros.service')

router.get('/', (req, res, next) =>
  res.send('welcome to backend centribal api')
)

router.get('/api/v1/test', getAllHeros)
router.get('/api/v1/test/:id', getById)
router.get('/:img', getFile)

module.exports = router
