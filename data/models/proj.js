const db = require('../db-config')

module.exports = {
  getProjects,
  postProjects
}

function getProjects(id) {
  if (id) {
    return db('projects')
      .where({ id })
      .first()
  } else {
    return db('projects')
  }
}

function postProjects(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return getProjects(ids[0])
    })
}