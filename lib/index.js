const Application = require('./application')
const Controller = require('./controller')
const Model = require('./model')

const reborn = () => new Application()

reborn.Controller = Controller
reborn.Model = Model

module.exports = reborn
