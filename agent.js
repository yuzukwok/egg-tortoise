
const tortoise = require('./lib/tortoise')

module.exports = agent => {
  if (agent.config.tortoise.agent) tortoise(agent)
}
