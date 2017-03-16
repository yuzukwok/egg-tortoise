const Tortoise = require('tortoise')
module.exports = app => {
  app.addSingleton('tortoise', createClient)
}
function createClient (config, app) {
  let tortoise = new Tortoise(config.uri)

  tortoise.on(Tortoise.EVENTS.CONNECTIONCLOSED, () => {
    app.coreLogger.error('RabbitMQ connection closed')
  })

  tortoise.on(Tortoise.EVENTS.PARSEERROR, () => {
    app.coreLogger.error('RabbitMQ PARSEERROR')
  })

  tortoise.on(Tortoise.EVENTS.CONNECTIONDISCONNECTED, () => {
    app.coreLogger.error('RabbitMQ connection disconnected')
  })

  tortoise.on(Tortoise.EVENTS.CONNECTIONERROR, (err) => {
    app.coreLogger.error(err)
  })
  app.coreLogger.info('[egg-tortoise] start ')
  return tortoise
}
