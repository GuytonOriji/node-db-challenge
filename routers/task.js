 const express = require('express')

const router = express.Router()

const DB_Tasks = require('../data/models/task')

router.get('/', (req, res) => {
  DB_Tasks.getTask()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(() => {
      res.status(500).json({ msg: 'Unable to get tasks' })
    })
})

router.get('/:id', (req, res) => {

  DB_Tasks.getTask(parseInt(req.params.id))
    .then(task => {
      res.status(200).json(task)
    })
    .catch(() => {
      res.status(500).json({ msg: 'Unable to get task' })
    })
})

router.post('/', (req, res) => {
  const task = req.body
  DB_Tasks.postTask(task)
    .then(task => {
      res.status(201).json({ msg: 'Successfull!', task: task })
    })
    .catch(() => {
      res.status(500).json({ msg: 'Cannot add new task' })
    })
})

module.exports = router