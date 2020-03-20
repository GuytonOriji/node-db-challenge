const db = require('../db-config')

module.exports = {
  getResources,
  postResources
}

function getResources(id) {
  if (id) {
    return db('resources')
      .where({ id })
      .first()
  } else {
    return db('resources')
  }
}

function postResources(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => {
      return getResources(ids[0])
    })
}