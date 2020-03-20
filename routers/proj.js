const express = require('express')

const router = express.Router()

const DB_Projects = require('../data/models/proj')

router.get('/', (req, res) => {
  DB_Projects.getProjects()
    .then(projects => {
      res.status(201).json(projects)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to get projects' })
    })
})

router.get('/:id', (req, res) => {
  DB_Projects.getProjects(parseInt(req.params.id))
    .then(project => {
      res.status(201).json(project)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to get project' })
    })
})

router.post('/', (req, res) => {
  const project = req.body
  DB_Projects.postProjects(project)
    .then(project => {
      res.status(201).json({ message: 'Successfull!', project: project })
    })
    .catch(() => {
      res.status(500).json({ message: 'Cannot add new project' })
    })
})

module.exports = router