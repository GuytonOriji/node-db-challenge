const server = require('./api/server')

const PORT = process.env.DB_PORT || 2400

server.listen(PORT, () => {
  console.log(`chiming in on port ${PORT}....`)
})