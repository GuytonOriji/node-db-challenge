const express = require('express')
const helmet = require('helmet')
const server = express()
const projects = require('../routers/proj')
const tasks = require('../routers/task')
const resources = require('../routers/res')






server.use(helmet())
server.use(express.json())


server.get('/', (req, res) => {

  res.status(201).json({
  	msg: "GOOD TO GO!"
  })

})

server.use('/api/resources', resources)
server.use('/api/projects', projects)
server.use('/api/tasks', tasks)

module.exports = server