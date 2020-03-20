const express = require('express')

const router = express.Router()

const DB_Resources = require('../data/models/res')

router.get('/', (req, res) => {
  DB_Resources.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to get Resources' })
    })
})

router.get('/:id', (req, res) => {
  DB_Resources.getResources(parseInt(req.params.id))
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to get resource' })
    })
})

router.post('/', (req, res) => {
  const resource = req.body
  DB_Resources.postResources(resource)
    .then(resource => {
      res.status(201).json({ message: 'Successfull!', resource: resource })
    })
    .catch(() => {
      res.status(500).json({ message: 'Cannot add new resource' })
    })
})

module.exports = router