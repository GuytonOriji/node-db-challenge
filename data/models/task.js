const db = require('../db-config')

module.exports = {
  getTask,
  postTask
}

function getTask(id) {
  if (id) {
    return db('tasks')
      .where({ id })
      .first()
  } else {
    return db('tasks')
  }
}

function postTask(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return getTask(ids[0])
    })
}