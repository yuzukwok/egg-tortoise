
const tortoise = require('./lib/tortoise')

module.exports = app => {
  if (app.config.tortoise.app) tortoise(app)
}
